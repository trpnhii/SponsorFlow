# SponsorFlow

Demo giao diện **SponsorFlow** — nền tảng minh bạch tài trợ / chứng từ / tác động cho dự án cộng đồng.

Dựa trên mockup sản phẩm và `SponsorFlow_Proposal.pdf`. Luồng kiểm tra tính nguyên bản chạy model **PE-Core Tiny ONNX** thật ngay trong trình duyệt; OCR và các tích hợp nghiệp vụ khác vẫn là dữ liệu demo.

## Chạy demo

Cần một HTTP server tĩnh (module ES không mở trực tiếp bằng `file://`).

```bash
# Python
cd web
python -m http.server 5173

# Node (nếu có)
npx serve web
```

Mở: http://localhost:5173

## Các màn hình

| Route | Mô tả |
|-------|--------|
| `#/overview` | Tổng quan ngân sách + việc cần xử lý |
| `#/documents` | Danh sách chứng từ |
| `#/upload` | Tải chứng từ lên |
| `#/analyzing` | Model ONNX phân tích ảnh trên thiết bị |
| `#/extract` | Điểm AI/metadata/JPEG, flag và người duyệt |
| `#/duplicate` | Cảnh báo chứng từ trùng |
| `#/link-impact` | Liên kết khoản chi → hoạt động → tác động |
| `#/budget` | Ngân sách chi tiết |
| `#/activity` | Hoạt động |
| `#/impact` | Chỉ số tác động |
| `#/reports` | Báo cáo nhà tài trợ |
| `#/sponsor` | Góc nhìn nhà tài trợ |

## Hướng dẫn demo theo tính năng

Script đầy đủ F01–F11: [`design/demos/`](../design/demos/)

Bắt đầu tại `#/login`. Tài khoản nhanh: `admin@greenhope.vn` / `demo123`.

## Luồng demo nhanh (sau khi đã login)

1. **Tổng quan** → bấm “Tải chứng từ lên”
2. **Upload** → chọn JPG/PNG của bạn, “Hóa đơn mẫu” hoặc “Ảnh AI mẫu” → “Phân tích bằng AI”
3. **Analyzing** chạy model thật và tự chuyển → **Kết quả trích xuất** → Reviewer/Admin xác minh nếu bị flag
4. **Liên kết tác động** → “Lưu” → **Góc nhìn nhà tài trợ**
5. Thử alert “hóa đơn trùng” trên Tổng quan → màn **Duplicate**
6. **Báo cáo** để xem báo cáo tự động

## Cấu trúc

```
web/
  index.html
  css/app.css
  js/app.js
  js/authenticity-model.js
  assets/logo.jpg
  assets/models/imdet-pe-tiny/
  assets/vendor/onnxruntime/
```

## Model tính nguyên bản

- Runtime: ONNX Runtime Web 1.23.2, WASM một luồng.
- Model: PE-Core Tiny, 12,5 MB, input `1×3×256×256`, output `fake/real` logits.
- Xử lý cục bộ: ảnh không rời trình duyệt.
- Điểm model được kết hợp với metadata và bất thường khối JPEG để tạo `riskScore`.
- Nút “Ảnh AI mẫu” có provenance khai báo nên luôn bị flag; xác suất model vẫn được hiển thị riêng. Ảnh người dùng không có shortcut này.
- Điểm số chỉ là tín hiệu hỗ trợ. Chứng từ mức medium/high bị cách ly và cần Reviewer/Admin quyết định.
- Model card và giấy phép được lưu cùng model trong `assets/models/imdet-pe-tiny/`.
