# Demo 04 — Nguồn tài trợ & phân bổ (F04)

**Thời lượng:** 4–5 phút  
**Login:** `admin@greenhope.vn` / `demo123`  
**Spec:** [f04-funding-allocation.md](../features/f04-funding-allocation.md)

---

## Kịch bản

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | Sidebar → **Nguồn tài trợ** (`#/funding`) | 2 nguồn mẫu: Dana + XYZ | Nhiều funding / project |
| 2 | Chỉ cột **Cam kết** vs **Thực nhận** | Hai số khác nhau | Không gộp một KPI |
| 3 | Cột **Đã phân bổ (dự trù)** | Σ budget lines gắn `funding_source_id` | Phân bổ từ editor |
| 4 | **Cập nhật thực nhận** một nguồn | Prompt nhập số → table refresh | MVP nhập tay, chưa bank |
| 5 | **+ Thêm nguồn** | Nguồn mới trên list | — |
| 6 | Mở `#/budget-editor` → đổi cột **Nguồn** trên 1 dòng → Lưu | Quay `#/funding`: allocated đổi | Tránh đếm trùng qua allocation |

**Câu chốt:** “Actual theo nguồn chỉ tính từ expense approved + allocation — không cộng expense.amount hai lần.”

---

## Checklist

- [ ] Cam kết ≠ thực nhận trên UI  
- [ ] Allocated theo nguồn khớp editor  
- [ ] Cập nhật received được  

## Route

`#/funding` · `#/budget-editor`
