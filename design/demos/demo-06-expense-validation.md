# Demo 06 — Kiểm tra & cảnh báo khoản chi (F06)

**Thời lượng:** 4–5 phút  
**Login:** `finance@greenhope.vn` rồi `reviewer@greenhope.vn`  
**Spec:** [f06-expense-validation.md](../features/f06-expense-validation.md)

---

## Kịch bản A — Cảnh báo trên extract / overview

| Bước | Hành động | Kỳ vọng | Nói gì |
|------|-----------|---------|--------|
| 1 | `#/overview` → alert «2 chứng từ cần xem lại» | Vào `#/extract` | Validation panel / warnings |
| 2 | Chỉ các cảnh báo trên màn extract (nếu có) | Warning ≠ block tuyệt đối | Severity warning vs blocker |
| 3 | Overview → «hóa đơn trùng» → `#/duplicate` | So sánh 2 chứng từ | Rule `DUP_POTENTIAL` |
| 4 | Nhấn mạnh copy | “Cảnh báo trùng **không** khẳng định gian lận” | — |

---

## Kịch bản B — Override / giải trình (demo narrative)

1. Trên `#/duplicate`: **Giữ cả hai** hoặc **Đánh dấu trùng**.
2. Nói: bản đầy đủ yêu cầu `override_reason` trước khi submit khi còn warning; reviewer thấy lý do (F07).

---

## Checklist

- [ ] Hiện được case trùng tiềm năng  
- [ ] Phân biệt warning vs quyết định cuối của reviewer  
- [ ] Không dùng wording “đã phát hiện gian lận”  

## Route

`#/overview` · `#/extract` · `#/duplicate`
