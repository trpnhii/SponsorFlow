# Demo 07 — Phê duyệt (F07)

**Thời lượng:** 6 phút  
**Spec:** [f07-approval.md](../features/f07-approval.md)

---

## Chuẩn bị

1. Login Finance → `#/budget-editor` → **Gửi duyệt** (budget `submitted`).
2. Đăng xuất → login **`reviewer@greenhope.vn` / `demo123`**.

---

## Kịch bản A — Duyệt ngân sách

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | **Phê duyệt** (`#/approvals`) | Thấy Budget submitted | Queue tập trung |
| 2 | **Approve** | Status approved | Audit (mock toast) |
| 3 | (Tuỳ chọn reset) Gửi lại → **Request changes** | Returned → editor mở | Comment bắt buộc bản thật |
| 4 | Thử login Finance bấm Approve | Toast “Cần Reviewer/Admin” | Anti-self / role gate (demo) |

---

## Kịch bản B — Duyệt khoản chi

| Bước | Hành động | Kỳ vọng |
|------|-----------|---------|
| 1 | Queue → **Xử lý** hóa đơn → `#/extract` | Thấy chứng từ + fields |
| 2 | **Duyệt khoản chi** | Toast + sang link-impact | Chỉ Approved vào Actual |
| 3 | Case trùng → `#/duplicate` → quyết định | Không vào actual nếu đánh dấu trùng |

**Câu chốt:** “Expense không tự duyệt; người tạo không tự duyệt chính mình.”

---

## Checklist

- [ ] Reviewer approve budget được  
- [ ] Return mở lại editor  
- [ ] Role không đủ bị chặn (demo toast)  
- [ ] Duyệt expense từ extract  

## Route

`#/approvals` · `#/budget-editor` · `#/extract` · `#/duplicate`
