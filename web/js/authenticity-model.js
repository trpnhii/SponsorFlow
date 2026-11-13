const MODEL_URL = "./assets/models/imdet-pe-tiny/model.onnx";
const MODEL_SIZE = 256;
let sessionPromise;

function getOrt() {
  if (!globalThis.ort) throw new Error("ONNX Runtime chưa được tải");
  return globalThis.ort;
}

async function getSession() {
  if (!sessionPromise) {
    const ort = getOrt();
    ort.env.wasm.wasmPaths = "./assets/vendor/onnxruntime/";
    ort.env.wasm.numThreads = 1;
    sessionPromise = ort.InferenceSession.create(MODEL_URL, {
      executionProviders: ["wasm"],
      graphOptimizationLevel: "all",
    });
  }
  return sessionPromise;
}

function softmaxPair(values) {
  const max = Math.max(values[0], values[1]);
  const a = Math.exp(values[0] - max);
  const b = Math.exp(values[1] - max);
  return [a / (a + b), b / (a + b)];
}

function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Không đọc được ảnh"));
    };
    img.src = url;
  });
}

function drawCenterCrop(img, size = MODEL_SIZE) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const scale = size / Math.min(img.naturalWidth, img.naturalHeight);
  const sw = size / scale;
  const sh = size / scale;
  const sx = Math.max(0, (img.naturalWidth - sw) / 2);
  const sy = Math.max(0, (img.naturalHeight - sh) / 2);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
  return { canvas, ctx, imageData: ctx.getImageData(0, 0, size, size) };
}

function toNchw(imageData) {
  const pixels = imageData.data;
  const plane = MODEL_SIZE * MODEL_SIZE;
  const tensor = new Float32Array(plane * 3);
  for (let i = 0; i < plane; i += 1) {
    tensor[i] = pixels[i * 4] / 255;
    tensor[plane + i] = pixels[i * 4 + 1] / 255;
    tensor[plane * 2 + i] = pixels[i * 4 + 2] / 255;
  }
  return tensor;
}

async function scanEmbeddedMetadata(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const sample = bytes.slice(0, Math.min(bytes.length, 1024 * 1024));
  const text = new TextDecoder("latin1").decode(sample).toLowerCase();
  const signatures = [
    ["adobe photoshop", "Metadata chứa dấu vết Adobe Photoshop"],
    ["adobe lightroom", "Metadata chứa dấu vết Adobe Lightroom"],
    ["stable diffusion", "Metadata nhắc tới Stable Diffusion"],
    ["midjourney", "Metadata nhắc tới Midjourney"],
    ["dall-e", "Metadata nhắc tới DALL·E"],
    ["comfyui", "Metadata chứa workflow ComfyUI"],
  ];
  return signatures.filter(([needle]) => text.includes(needle)).map(([, label]) => label);
}

function computeBlockiness(imageData) {
  const { data, width, height } = imageData;
  const gray = new Float32Array(width * height);
  for (let i = 0; i < gray.length; i += 1) {
    gray[i] = data[i * 4] * 0.299 + data[i * 4 + 1] * 0.587 + data[i * 4 + 2] * 0.114;
  }
  let boundary = 0;
  let boundaryN = 0;
  let interior = 0;
  let interiorN = 0;
  for (let y = 1; y < height; y += 1) {
    for (let x = 1; x < width; x += 1) {
      const idx = y * width + x;
      const diff = Math.abs(gray[idx] - gray[idx - 1]) + Math.abs(gray[idx] - gray[idx - width]);
      if (x % 8 === 0 || y % 8 === 0) {
        boundary += diff;
        boundaryN += 2;
      } else {
        interior += diff;
        interiorN += 2;
      }
    }
  }
  const ratio = boundary / Math.max(boundaryN, 1) / Math.max(interior / Math.max(interiorN, 1), 0.01);
  return Math.max(0, Math.min(1, (ratio - 1.05) / 1.25));
}

async function runModel(imageData) {
  const ort = getOrt();
  const session = await getSession();
  const input = new ort.Tensor("float32", toNchw(imageData), [1, 3, MODEL_SIZE, MODEL_SIZE]);
  const outputs = await session.run({ [session.inputNames[0]]: input });
  const logits = Array.from(outputs[session.outputNames[0]].data).slice(0, 2);
  const [fake, real] = softmaxPair(logits);
  return { fake, real, logits };
}

export async function analyzeDocumentAuthenticity(file, onProgress = () => {}, options = {}) {
  const startedAt = performance.now();
  onProgress(12, "Đọc ảnh và metadata");
  const [img, metadataFlags] = await Promise.all([fileToImage(file), scanEmbeddedMetadata(file)]);
  const { imageData } = drawCenterCrop(img);
  const blockiness = computeBlockiness(imageData);
  onProgress(38, "Nạp model PE-Core Tiny 12,5 MB");

  let model = null;
  let modelError = "";
  try {
    onProgress(62, "Model đang phân tích ảnh trên thiết bị");
    model = await runModel(imageData);
  } catch (error) {
    modelError = error?.message || "Không chạy được model";
  }

  onProgress(88, "Tổng hợp tín hiệu forensic và AI");
  const aiScore = model ? model.fake : 0;
  const metadataScore = Math.min(1, metadataFlags.length * 0.55);
  const forensicScore = blockiness;
  const signalScore = model
    ? aiScore * 0.72 + metadataScore * 0.2 + forensicScore * 0.08
    : metadataScore * 0.7 + forensicScore * 0.3;
  const declaredAi = options.provenance === "declared_ai";
  const combined = declaredAi ? Math.max(0.95, signalScore) : signalScore;
  const riskScore = Math.round(Math.max(0, Math.min(1, combined)) * 100);
  const riskLevel = riskScore >= 65 ? "high" : riskScore >= 40 ? "medium" : "low";
  const flags = [...metadataFlags];
  if (declaredAi) flags.push("Provenance của ảnh mẫu xác nhận nội dung được tạo bằng AI");
  if (model && model.fake >= 0.65) flags.push(`Model phát hiện khả năng ảnh do AI tạo: ${Math.round(model.fake * 100)}%`);
  else if (model && model.fake >= 0.4) flags.push(`Model ghi nhận tín hiệu AI cần xem lại: ${Math.round(model.fake * 100)}%`);
  if (blockiness >= 0.55) flags.push("Biên khối JPEG không đồng nhất, có thể đã nén/chỉnh sửa lại");
  if (!flags.length) flags.push("Không phát hiện tín hiệu bất thường nổi bật");
  onProgress(100, "Hoàn tất phân tích");

  return {
    version: 1,
    filename: file.name,
    mimeType: file.type || "image/unknown",
    dimensions: `${img.naturalWidth} × ${img.naturalHeight}`,
    fileSize: file.size,
    analyzedAt: new Date().toISOString(),
    durationMs: Math.round(performance.now() - startedAt),
    modelName: "PE-Core Tiny ONNX",
    provenance: declaredAi ? "declared_ai" : "unknown",
    modelAvailable: Boolean(model),
    modelError,
    aiProbability: model ? Math.round(model.fake * 1000) / 10 : null,
    metadataScore: Math.round(metadataScore * 100),
    forensicScore: Math.round(forensicScore * 100),
    riskScore,
    riskLevel,
    flags,
  };
}

export const modelInfo = {
  name: "PE-Core Tiny ONNX",
  size: "12,5 MB",
  runtime: "ONNX Runtime Web · WASM",
  privacy: "Xử lý trên thiết bị — ảnh không rời trình duyệt",
};
