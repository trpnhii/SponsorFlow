# F06 — Kiểm tra & cảnh báo khoản chi

## Mục tiêu

Trước/ khi submit expense: kiểm tra thiếu field, trùng chứng từ tiềm năng, vượt ngân sách, nguồn không đủ, lệch chứng từ. Cảnh báo ≠ khẳng định gian lận; cho phép giải trình/override có audit.

## Actors

Finance/Ops (xem & giải trình), Reviewer (thấy alerts khi duyệt), System (chạy rules)

## Alert model (`Proposed`)

| Field | Mô tả |
|-------|--------|
| `rule_code` | Mã rule |
| `severity` | `info` \| `warning` \| `blocker` |
| `message` | Mô tả |
| `related_record_ids` | Expense/document tương tự |
| `resolution` | `open` \| `overridden` \| `fixed` |
| `override_reason` | Bắt buộc nếu override warning |

### Rules MVP

| Code | Severity | Điều kiện |
|------|----------|-----------|
| `REQ_FIELDS` | blocker | Thiếu vendor/date/amount/currency hoặc allocation |
| `ALLOC_SUM` | blocker | Σ allocation ≠ amount |
| `DUP_POTENTIAL` | warning | Trùng invoice# + vendor + amount ± ngày gần (`Proposed`: ±3 ngày) hoặc hash file trùng |
| `OVER_BUDGET_LINE` | warning | Approved actual + pending + this > budget line planned |
| `OVER_FUNDING` | warning | Spend nguồn > received (hoặc > committed nếu received=0 — hiển thị rõ) |
| `AMOUNT_MISMATCH` | warning | Amount form ≠ amount OCR (nếu có OCR) > tolerance (`Proposed`: 0 VND hoặc user đã sửa thì clear) |
| `NO_DOCUMENT` | warning | Không đính chứng từ (`Proposed`: không blocker MVP) |
| `CURRENCY` | blocker | ≠ VND |

**Blocker** → không submit. **Warning** → submit được nếu có `override_reason` (với rule cho phép override).

---

## UC-16 Validate trước submit

**Precondition:** Expense `draft` hoặc `returned`.

**Main flow**

1. User bấm kiểm tra hoặc hệ thống chạy on submit.
2. Validation panel liệt kê alerts theo severity.
3. Link tới bản ghi tương tự (dup).
4. User sửa dữ liệu **hoặc** nhập giải trình override cho warnings.
5. Submit chỉ khi không còn blocker và mọi warning đã override/fixed.

**Alternate**

- A1: Sửa amount/line → re-run rules; clear override cũ nếu field liên quan đổi (`Proposed`).

**Exception**

- E1: Cố submit còn blocker qua API → 400 + danh sách rule_code.

**Postcondition:** `validation_alerts` lưu kèm expense; reviewer thấy nguyên trạng lúc submit.

---

## UC-17 Reviewer xử lý alert

Nằm trong F07: reviewer xem alerts + override reasons; quyết định approve/return/reject. Approve khi còn warning đã override là hợp lệ nếu reviewer chấp nhận.

## UI

- Validation panel cạnh form expense
- Badge severity
- Ghi chú giải trình
- Deep link bản ghi tương tự

## API gợi ý

```
POST /expenses/{id}/validate
POST /expenses/{id}/submit   # chạy validate nội bộ
```

## Quy tắc

- Cảnh báo trùng **không** khẳng định gian lận.
- So sánh số tiền theo đúng currency và budget line đã chọn.
- Lưu lý do override + actor + timestamp.

## Acceptance

- [ ] Case thiếu field bắt buộc → blocker, không submit.
- [ ] Case trùng tiềm năng → warning + link.
- [ ] Case vượt ngân sách → warning đúng line.
- [ ] Có luồng giải trình/override và reviewer nhìn thấy.
