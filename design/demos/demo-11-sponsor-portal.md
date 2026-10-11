# Demo 11 — Cổng nhà tài trợ (F11)

**Thời lượng:** 4 phút  
**Login:** `sponsor@fund.vn` / `demo123`  
**Spec:** [f11-sponsor-portal.md](../features/f11-sponsor-portal.md)

---

## Kịch bản

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | Login sponsor | Redirect thẳng `#/sponsor` | Workspace tách biệt |
| 2 | Quan sát portal read-only | KPI tài trợ / chi duyệt / hoạt động | Không nút upload/sửa budget |
| 3 | Thử đổi hash `#/upload` hoặc `#/budget-editor` | Bị đẩy về `#/sponsor` | Enforce phía client (demo); bản thật = API 403 |
| 4 | Tải / xem báo cáo trên portal | Chỉ dữ liệu published | Không hiện chứng từ gốc |
| 5 | (So sánh) Login admin → `#/sponsor` | Cùng UI góc nhìn | Redaction mặc định |

**Câu chốt:** “Sponsor A không xem funding của Sponsor B; receipt gốc ẩn mặc định.”

---

## Checklist

- [ ] Sponsor vào portal, không vào editor  
- [ ] Đổi URL nội bộ bị chặn  
- [ ] Nhấn mạnh redaction với audience  

## Route

`#/login` · `#/sponsor`
