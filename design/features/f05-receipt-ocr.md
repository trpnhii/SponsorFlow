# F05 — Upload hóa đơn, chứng từ & OCR

## Mục tiêu

Upload ảnh/PDF chứng từ; OCR/AI gợi ý fields; user chỉnh sửa trước khi đưa vào khoản chi. **Giá trị AI không được coi là đã duyệt.**

State OCR: [state-machines.md](./shared/state-machines.md#3-document--ocr).

## Actors

Finance/Ops, Project manager, Org admin

## Entities

`documents`, `ocr_results`, `expenses` (liên kết)

### Fields OCR gợi ý

| Field | Bắt buộc trước submit expense |
|-------|-------------------------------|
| Vendor / đơn vị bán | Có |
| Date | Có |
| Amount | Có |
| Currency | Có (`VND`) |
| Invoice number | Không |
| Suggested category | Không |

Mỗi field có `value`, `confidence`, `source` = `ocr` | `user`.

---

## UC-14 Upload chứng từ

**Precondition:** Trong project; quyền upload.

**Main flow**

1. Drag/drop hoặc chọn file (ảnh/PDF).
2. Validate type/size (`Proposed`: pdf/jpg/png/webp, ≤ 10 MB).
3. Lưu private storage; `documents.status = uploaded`.
4. Enqueue OCR → `processing`.
5. UI hiện progress.

**Exception**

- E1: Type/size sai → reject trước khi lưu.
- E2: Malware scan fail (nếu có) → xóa/quarantine, báo lỗi.

**Postcondition:** Có `storage_key`, hash, uploader; signed URL nội bộ có hạn.

---

## UC-15 OCR extract & review

**Precondition:** Document uploaded.

**Main flow**

1. OCR chạy xong → `completed` + `ocr_results`.
2. UI: trái = chứng từ gốc; phải = form editable + confidence/warnings.
3. User sửa mọi field gợi ý.
4. Gắn vào expense draft (tạo mới hoặc chọn existing draft).
5. Chọn budget line(s), funding, activity (optional) → tiếp F06 → submit (F07).

**Alternate**

- A1: OCR `failed` / timeout → form trống; nhập tay toàn bộ; vẫn upload được chứng từ gốc.
- A2: Confidence thấp từng field → highlight vàng; không block.
- A3: Bỏ qua OCR, tạo expense nhập tay + đính file sau.

**Exception**

- E1: Không đánh dấu `extract completed` khi chưa xong processing.
- E2: User submit expense khi OCR vẫn `processing` → `Proposed`: cho phép nếu user đã điền đủ field bắt buộc (không chờ OCR).

**Postcondition:** Fields cuối cùng là user-confirmed; audit không ghi “AI verified”.

## Quy tắc

- Giữ bản gốc; không overwrite file.
- AI suggestion ≠ approved expense.
- Không tuyên bố hóa đơn hợp lệ/pháp lý.
- File access: private + RBAC; sponsor mặc định không xem (F11).

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Expense upload | Dropzone, progress, project context | Xử lý OCR |
| OCR review | Original + form + warnings | Gửi duyệt (sau validate) |

## API gợi ý

```
POST /projects/{id}/documents
POST /documents/{id}/ocr
GET  /documents/{id}/ocr-result
GET  /documents/{id}/content   # signed redirect
```

## Acceptance

- [ ] User sửa được thông tin OCR và submit.
- [ ] OCR fail vẫn nhập tay được.
- [ ] Giá trị AI không tự thành khoản chi Approved.
- [ ] Bản gốc xem lại được trong approval (F07).
