# SponsorFlow

Demo giao diện **SponsorFlow** — nền tảng minh bạch tài trợ / chứng từ / tác động cho dự án cộng đồng.

Dựa trên mockup sản phẩm và `SponsorFlow_Proposal.pdf`. Không có AI thật; các nút “Phân tích bằng AI” chạy luồng giả lập.

## Chạy demo

Cần một HTTP server tĩnh (module ES không mở trực tiếp bằng `file://`).

```bash
# Python
cd web
python -m http.server 5173

# Node (nếu có)
npx serve web
```

Mở: http://localhost:5173

## Các màn hình

| Route | Mô tả |
|-------|--------|
| `#/overview` | Tổng quan ngân sách + việc cần xử lý |
| `#/documents` | Danh sách chứng từ |
| `#/upload` | Tải chứng từ lên |
| `#/analyzing` | AI phân tích (giả lập progress) |
| `#/extract` | Kết quả trích xuất & duyệt |
| `#/duplicate` | Cảnh báo chứng từ trùng |
| `#/link-impact` | Liên kết khoản chi → hoạt động → tác động |
| `#/budget` | Ngân sách chi tiết |
| `#/activity` | Hoạt động |
| `#/impact` | Chỉ số tác động |
| `#/reports` | Báo cáo nhà tài trợ |
| `#/sponsor` | Góc nhìn nhà tài trợ |

## Hướng dẫn demo theo tính năng

Script đầy đủ F01–F11: [`design/demos/`](../design/demos/)

Bắt đầu tại `#/login`. Tài khoản nhanh: `admin@greenhope.vn` / `demo123`.

## Luồng demo nhanh (sau khi đã login)

1. **Tổng quan** → bấm “Tải chứng từ lên”
2. **Upload** → “Phân tích bằng AI”
3. **Analyzing** (tự chuyển) → **Kết quả trích xuất** → “Duyệt khoản chi”
4. **Liên kết tác động** → “Lưu” → **Góc nhìn nhà tài trợ**
5. Thử alert “hóa đơn trùng” trên Tổng quan → màn **Duplicate**
6. **Báo cáo** để xem báo cáo tự động

## Cấu trúc

```
web/
  index.html
  css/app.css
  js/app.js
  assets/logo.jpg
```
