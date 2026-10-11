# Demo 03 — Dự trù import & editor (F03)

**Thời lượng:** 7–8 phút  
**Login:** `finance@greenhope.vn` / `demo123` (hoặc Admin)  
**Spec:** [f03-budget-import-editor.md](../features/f03-budget-import-editor.md)

---

## Chuẩn bị

```bash
cd web && python -m http.server 5173
```

File mẫu: [`web/assets/sample-budget.csv`](../../web/assets/sample-budget.csv) (có 2 dòng lỗi cố ý).

---

## Kịch bản A — Import CSV

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | **Ngân sách** → **Import Excel/CSV** | `#/budget-import` | “MVP ưu tiên .xlsx/.csv; demo parse CSV.” |
| 2 | Tải / chọn `sample-budget.csv` | Preview bảng + dòng lỗi đỏ | Dòng thiếu category & unit_price âm bị đánh dấu |
| 3 | **Nhập dòng hợp lệ vào bản nháp** | Vào editor; chỉ dòng OK được merge | Partial import + error report |
| 4 | Quan sát tổng = Σ(qty × price) | Tổng cập nhật | Công thức planned_amount |

---

## Kịch bản B — Editor & gửi duyệt

| Bước | Hành động | Kỳ vọng |
|------|-----------|---------|
| 1 | `#/budget-editor` — sửa SL / đơn giá | Thành tiền đổi ngay |
| 2 | **+ Thêm dòng** / xoá dòng | Grid cập nhật |
| 3 | **Lưu nháp** | Toast; status Draft |
| 4 | **Gửi duyệt** | Status Submitted → `#/approvals` |

---

## Kịch bản C — Version sau duyệt

1. Đăng xuất → login `reviewer@greenhope.vn` → **Phê duyệt** → **Approve** ngân sách.
2. Về editor: read-only + nút **Tạo revision**.
3. Nhập lý do → draft vN+1 → sửa được lại.

**Câu chốt:** “Approved không edit tại chỗ — mọi thay đổi là version mới + diff/lý do.”

---

## Checklist

- [ ] Preview hiện dòng lỗi theo số dòng  
- [ ] Chỉ dòng hợp lệ vào draft  
- [ ] Tổng tự tính  
- [ ] Submit → Approve → Revision bắt buộc lý do  

## Route

`#/budget` · `#/budget-import` · `#/budget-editor` · `#/approvals`
