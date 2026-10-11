# F03 — Dự trù kinh phí (Upload + Editor)

## Mục tiêu

Hai luồng nhập dự trù: (A) Excel/CSV import, (B) chỉnh sửa lưới trên web; có versioning và phê duyệt.

Xem state machine: [state-machines.md](./shared/state-machines.md#1-budget-version).

## Actors

Finance/Ops, Project manager, Org admin (tạo/sửa/submit); Reviewer (duyệt — chi tiết F07)

## Schema dòng dự trù

| Cột | Kiểu / Quy tắc | Bắt buộc |
|-----|----------------|----------|
| `budget_line_id` | ID hệ thống, tự sinh | Không (input) |
| `category` | Hạng mục | Có |
| `item_name` | Tên khoản mục | Có |
| `quantity` | Số ≥ 0 | Có |
| `unit` | Đơn vị tính | Có |
| `unit_price` | Số ≥ 0 | Có |
| `planned_amount` | `quantity × unit_price` | Tự động |
| `currency` | MVP: luôn `VND` | Có |
| `activity_id` | Link hoạt động | Không |
| `funding_source_id` | Nguồn phân bổ | Có khi đã bật phân bổ |
| `notes` | Ghi chú | Không |

**Giới hạn import (`Proposed`):** `.xlsx`/`.csv`, ≤ 5 MB, ≤ 2.000 dòng; không hỗ trợ `.xls`.

---

## UC-08 Import Excel/CSV

**Precondition:** User có quyền edit budget; project tồn tại; không có version `submitted` đang mở — hoặc import vào version `draft`/`returned`.

**Main flow**

1. Project → Ngân sách → Dự trù → tab **Upload Excel/CSV**.
2. Upload file → validate định dạng/dung lượng.
3. Nếu workbook nhiều sheet → chọn sheet.
4. Preview 10–20 dòng; map cột file → cột chuẩn.
5. Validate từng hàng: thiếu field, số âm, không phải số, trùng ID (nếu có), công thức nguy hiểm khi CSV.
6. User sửa mapping / sửa preview / tải file mới.
7. **Nhập dữ liệu** → ghi vào budget version `draft` (tạo mới nếu chưa có).
8. Mở Budget editor để tiếp tục sửa.
9. Kiểm tra tổng dự trù vs funding → **Gửi duyệt**.

**Alternate**

- A1: Một số dòng lỗi → import **chỉ dòng hợp lệ** + báo cáo dòng lỗi (`Proposed`: default; hoặc block toàn bộ — **default: partial import + error report**).
- A2: Đang có `approved` baseline → import tạo **version mới** `draft`, không ghi đè approved.

**Exception**

- E1: File hỏng / không parse → lỗi rõ ràng, không tạo version.
- E2: Sheet trống → reject.
- E3: CSV có công thức kiểu `=CMD(...)` → sanitize/reject cell (`Proposed`: strip leading `=`).

**Postcondition:** Draft version có lines; audit `budget.import`.

---

## UC-09 Sửa trực tiếp (Budget editor)

**Precondition:** Version ở `draft` hoặc `returned`.

**Main flow**

1. Tab **Nhập thủ công** / mở grid.
2. Sửa cell, thêm/xóa/duplicate dòng.
3. Thành tiền và tổng category / tổng project tự cập nhật; format VND.
4. Lưu nháp (autosave `Proposed`: mỗi 30s hoặc on blur).
5. Submit for approval khi sẵn sàng.

**Alternate**

- A1: Undo đơn giản trong session (`Proposed`: nice-to-have; không block MVP).
- A2: So sánh vN (proposed) với approved baseline → diff dòng + lý do điều chỉnh (bắt buộc khi submit revision).

**Exception**

- E1: Cố edit version `approved`/`submitted` → 409; UI read-only.
- E2: Concurrent edit (`Proposed` MVP): last-write-wins + updated_at check; nếu conflict báo reload.

**Postcondition:** Draft cập nhật; totals nhất quán.

---

## UC-10 Gửi duyệt & version sau duyệt

**Main flow**

1. Submit → `submitted` (xem F07).
2. Approve → khóa version; baseline.
3. Mọi chỉnh sửa sau duyệt → clone `vN+1` draft + bắt buộc lý do revision.

## Budget vs Actual (nhắc lại)

| Khái niệm | Định nghĩa |
|-----------|------------|
| Budget | `planned_amount` của baseline `approved` |
| Actual | Expense `approved` (theo allocation từng line) |
| Variance | Actual − Budget |
| Available | Budget − Actual |
| Pending | Expense `submitted` — hiển thị riêng |

Nếu expense split nhiều line: tổng allocation = amount (F04/F06).

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Budget import | Upload, sheet selector, preview, mapping, errors | Nhập vào bản nháp |
| Budget editor | Data grid, totals, status badge | Lưu / Gửi duyệt |
| Budget review | Version, diff, funding coverage | Approve / Return (F07) |

## API gợi ý

```
POST /projects/{id}/budget-imports
GET  /budget-imports/{id}/preview
POST /budget-imports/{id}/confirm
GET/POST /projects/{id}/budget-versions
PATCH /budget-versions/{id}/lines
POST /budget-versions/{id}/submit
```

## Acceptance

- [ ] Import file mẫu thành công; mapping sửa được.
- [ ] Dòng lỗi được chỉ rõ theo số dòng.
- [ ] Tổng = Σ(quantity × unit_price).
- [ ] Sau duyệt, sửa tạo version mới có diff + lý do.
