# Demo 05 — Upload chứng từ & OCR (F05)

**Thời lượng:** 5–6 phút  
**Login:** `finance@greenhope.vn` / `demo123`  
**Spec:** [f05-receipt-ocr.md](../features/f05-receipt-ocr.md)  
**Ảnh mẫu (tuỳ chọn):** `test_invoice.jpg` ở root repo

---

## Kịch bản A — Happy path OCR (mock)

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | **Chứng từ** → **Tải chứng từ lên** (`#/upload`) | Dropzone + loại chứng từ | — |
| 2 | Chọn loại Hóa đơn; (tuỳ chọn) chọn file | Toast tên file | File private ở bản thật |
| 3 | **Phân tích bằng AI** | `#/analyzing` progress → `#/extract` | OCR giả lập — không AI thật |
| 4 | Màn extract: trái chứng từ, phải fields | Form editable | “Mọi field AI đều sửa được” |
| 5 | Sửa số tiền / vendor | Giá trị đổi | AI suggestion ≠ approved |

**Câu chốt:** “Hệ thống không tuyên bố hóa đơn hợp lệ; user xác nhận trước submit.”

---

## Kịch bản B — Fallback khi OCR fail (nói miệng / mock)

- Trong bản demo, hủy analyzing → về upload; nhấn mạnh: OCR fail → nhập tay vẫn submit được (spec F05).
- Bản production: status `failed` + form trống.

---

## Checklist

- [ ] Upload → analyzing → extract  
- [ ] Fields trên extract sửa được  
- [ ] Không có nhãn “AI đã xác thực hóa đơn”  

## Route

`#/documents` · `#/upload` · `#/analyzing` · `#/extract`
