---
license: other
license_name: apache-2.0-and-bsd-3-clause
license_link: LICENSE
library_name: onnx
pipeline_tag: image-classification
tags:
  - deepfake-detection
  - ai-generated-image-detection
  - image-forensics
  - onnx
  - onnxruntime-web
base_model:
  - facebook/PE-Core-T16-384
  - facebook/PE-Core-S16-384
base_model_relation: finetune
---

# AI-generated image detectors (ONNX)

Three small binary classifiers (fake / real) exported to ONNX for client-side inference with ONNX Runtime
(Web or Python). In a browser, images are analyzed on the device and never uploaded.

<!-- Add the links to the GitHub repository and the web demo here once they are published. -->

| Folder | Base model | Size | Input | Reported results |
|---|---|---|---|---|
| `pe_tiny` | Perception Encoder PE-Core T16 (Meta), 6M parameters | 12.5 MB | 3×256×256 | 94.6% balanced accuracy on DeepDetect-25 faces (92.0% after compression or blur). Catches about 65% of fakes from the newest generators. |
| `pe_small` | Perception Encoder PE-Core S16 (Meta), 24M parameters | 47 MB | 3×256×256 | 93.6% balanced accuracy on DeepDetect-25 faces. Catches about 70% of fakes from the newest generators. |
| `resnet50-6ch` | ResNet-50 with a 6-channel input | 98 MB | 6×224×224 | 97.8% accuracy (AUC 0.997) on a held-out split of its own training data. |

"Newest generators" means GPT-Image-1.5, Nano Banana Pro, Seedream 4.5, Imagen 4 and FLUX.2.

Each folder holds `model.onnx` and a `config.json` that describes the preprocessing for the web app.

- Output: 2 logits, index 0 = `fake`, index 1 = `real`. Apply a softmax to get probabilities.
- `pe_tiny`, `pe_small`: resize the shorter side to 256 (bilinear), center crop 256×256, RGB scaled to [0, 1], no
  mean/std normalization.
- `resnet50-6ch`: resize to 224×224 (bicubic), then 6 channels: R, G, B / 255; HSV saturation / 255; SRM noise
  residual of the grayscale image + 0.5, clipped to [0, 1]; FFT log-magnitude of the grayscale image, min-max
  normalized to [0, 1].

## Usage (Python)

```python
import cv2
import numpy as np
import onnxruntime as ort
from PIL import Image
from scipy.ndimage import convolve
from torchvision import transforms

LABELS = ["fake", "real"]

pe_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(256),
    transforms.ToTensor(),
])

def pe_input(path):  # pe_tiny, pe_small
    return pe_transform(Image.open(path).convert("RGB")).unsqueeze(0).numpy()

SRM = np.array([[-1, -1, -1, -1, -1],
                [-1,  2,  2,  2, -1],
                [-1,  2,  8,  2, -1],
                [-1,  2,  2,  2, -1],
                [-1, -1, -1, -1, -1]], dtype=np.float32) / 16

def forensic6_input(path):  # resnet50-6ch
    rgb = np.asarray(Image.open(path).convert("RGB").resize((224, 224), Image.BICUBIC))
    gray = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255
    sat = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV)[..., 1].astype(np.float32) / 255
    srm = np.clip(convolve(gray, SRM, mode="constant") + 0.5, 0, 1)
    mag = np.log1p(np.abs(np.fft.fftshift(np.fft.fft2(gray))))
    fft = (mag - mag.min()) / (mag.max() - mag.min() + 1e-8)
    x = np.concatenate([rgb.transpose(2, 0, 1) / 255, sat[None], srm[None], fft[None]])
    return x[None].astype(np.float32)

def predict(model_dir, x):
    session = ort.InferenceSession(f"{model_dir}/model.onnx")
    logits = session.run(None, {session.get_inputs()[0].name: x})[0][0]
    probs = np.exp(logits - logits.max())
    probs /= probs.sum()
    return dict(zip(LABELS, probs.tolist()))

print(predict("pe_tiny", pe_input("photo.jpg")))
print(predict("resnet50-6ch", forensic6_input("photo.jpg")))
```

## Intended use and limitations

These models are meant for education, research and personal checks of images. A score is a probability, not proof.

- Errors happen both ways: real photos flagged as generated, and generated images missed. Recent generators are
  missed about 30-35% of the time by the PE models.
- `resnet50-6ch` is measured on a split of its own training data. Expect much lower accuracy on images from other
  sources.
- Compression, resizing, screenshots, filters and edits change the scores.
- Do not use a score as the only basis for a decision about a person (legal, disciplinary, professional, journalistic
  or other).

## License

The models keep the licenses of the open models they are built on. Each license covers the `model.onnx` and
`config.json` of its folder.

| Folder | Built on | License | Full text |
|---|---|---|---|
| `pe_tiny` | [Perception Encoder PE-Core T16](https://huggingface.co/facebook/PE-Core-T16-384) (Meta) | Apache 2.0 | `pe_tiny/LICENSE-pe_tiny.txt` |
| `pe_small` | [Perception Encoder PE-Core S16](https://huggingface.co/facebook/PE-Core-S16-384) (Meta) | Apache 2.0 | `pe_small/LICENSE-pe_small.txt` |
| `resnet50-6ch` | [ResNet-50 from torchvision](https://docs.pytorch.org/vision/stable/models/generated/torchvision.models.resnet50.html) | BSD 3-Clause | `resnet50-6ch/LICENSE-resnet50-6ch.txt` |

Sources: Perception Encoder [code](https://github.com/facebookresearch/perception_models) and
[paper](https://arxiv.org/abs/2504.13181); torchvision [code](https://github.com/pytorch/vision); ResNet
[paper](https://arxiv.org/abs/1512.03385). `NOTICE` lists the attributions and the changes made to the original
models.

The models are provided as is, without any warranty.

## Citation

If you use `pe_tiny` or `pe_small`, please also cite Perception Encoder:

```bibtex
@article{bolya2025PerceptionEncoder,
  title={Perception Encoder: The best visual embeddings are not at the output of the network},
  author={Daniel Bolya and Po-Yao Huang and Peize Sun and Jang Hyun Cho and Andrea Madotto and Chen Wei and Tengyu Ma and Jiale Zhi and Jathushan Rajasegaran and Hanoona Rasheed and Junke Wang and Marco Monteiro and Hu Xu and Shiyu Dong and Nikhila Ravi and Daniel Li and Piotr Doll{\'a}r and Christoph Feichtenhofer},
  journal={arXiv},
  year={2025}
}
```

If you use `resnet50-6ch`, please also cite ResNet:

```bibtex
@inproceedings{he2016deep,
  title={Deep Residual Learning for Image Recognition},
  author={He, Kaiming and Zhang, Xiangyu and Ren, Shaoqing and Sun, Jian},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
  pages={770--778},
  year={2016}
}
```
