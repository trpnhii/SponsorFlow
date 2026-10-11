# Demo 08 — Hoạt động & minh chứng (F08)

**Thời lượng:** 4 phút  
**Login:** `admin@greenhope.vn` hoặc Finance  
**Spec:** [f08-activity-evidence.md](../features/f08-activity-evidence.md)

---

## Kịch bản

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | Sau duyệt expense → flow **Liên kết tác động** (`#/link-impact`) hoặc sidebar **Hoạt động** | Form / list hoạt động | Link expense ↔ activity |
| 2 | `#/link-impact`: điền mô tả hoạt động, output | Counter ký tự | Minh chứng kèm theo |
| 3 | **Lưu** | Toast → có thể sang sponsor | — |
| 4 | `#/activity` | List hoạt động mẫu | Timeline triển khai |
| 5 | Nhắc access_level | Evidence mặc định `internal` | Không public ảnh người hưởng lợi |

**Từ chứng từ:** Documents → ảnh hoạt động → `#/link-impact`.

---

## Checklist

- [ ] Thấy liên kết khoản chi → hoạt động  
- [ ] List hoạt động trên `#/activity`  
- [ ] Nhắc quyền minh chứng với audience  

## Route

`#/activity` · `#/link-impact` · `#/documents`
