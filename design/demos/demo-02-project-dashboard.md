# Demo 02 — Dự án & Dashboard (F02)

**Thời lượng gợi ý:** 5–6 phút  
**Mục tiêu trình bày:** Tạo dự án → xem Dashboard với KPI đúng nghiệp vụ (cam kết ≠ thực nhận; chờ duyệt ≠ actual).  
**Spec:** [f02-project-dashboard.md](../features/f02-project-dashboard.md)  
**Phụ thuộc:** Đã login (Demo 01) — dùng `admin@greenhope.vn` / `demo123`

---

## Trước khi bắt đầu

```bash
cd web && python -m http.server 5173
```

Mở http://localhost:5173 → login Admin → vào workspace.

---

## Kịch bản A — Tạo dự án mới

| Bước | Hành động | Kỳ vọng | Nói với audience |
|------|-----------|---------|------------------|
| 1 | Sidebar → **Dự án** (`#/projects`) | Danh sách có dự án mẫu «Tiếp sức đến trường 2026» | “Mỗi org có nhiều dự án; quyền theo project.” |
| 2 | **Tạo dự án** → `#/project-create` | Form: tên, mục tiêu, ngày, team, status | — |
| 3 | Điền tên vd `Mùa hè xanh 2026`, ngày hợp lệ, status Nháp hoặc Active | — | — |
| 4 | Thử end &lt; start → submit | Toast lỗi validation | “Validate ngày phía client; bản thật validate API.” |
| 5 | Sửa ngày đúng → **Lưu dự án** | Về list; dự án mới ở đầu | “Lưu localStorage — demo không có DB.” |
| 6 | Bấm **Dashboard** trên một dòng | Vào `#/overview` | “Dashboard gắn context dự án đang chọn (header).” |

---

## Kịch bản B — Đọc KPI Dashboard (điểm nhấn chính)

Mở `#/overview` và chỉ lần lượt 6 thẻ KPI:

| KPI | Số demo | Ý nghĩa cần nói |
|-----|---------|-----------------|
| Cam kết tài trợ | 50.000.000đ | Sponsor **hứa** — chưa chắc tiền đã về |
| Thực nhận | 45.000.000đ | Tiền **đã về** — dùng tính số dư |
| Thực chi đã duyệt | 32.450.000đ | Chỉ expense **Approved** |
| Chờ duyệt | 2.150.000đ | Submitted — **không** cộng Actual |
| Số dư | 12.550.000đ | Received − Approved spend |
| Thiếu minh chứng / báo cáo | 3 · 1 | Task vận hành |

**Câu chốt:** “Nếu cộng nhầm khoản chờ duyệt vào đã chi, báo cáo tài trợ sẽ sai — đây là rule cứng MVP.”

Tiếp theo trên cùng trang:

1. Chỉ **bảng ngân sách theo hạng mục** (Duyệt / Đã chi / Còn lại).
2. Chỉ ** Việc cần xử lý** — click 1 task (vd hóa đơn trùng) để sang flow chứng từ (Demo 05/06).

---

## Kịch bản C — Điều hướng nhanh cho audience

1. Từ overview → alert «Ngân sách Học liệu 92%» → `#/budget`
2. Quay lại overview → task «Tải chứng từ» → `#/upload`
3. Nhấn mạnh: mọi số trên dashboard phải khớp nguồn (funding / expense) — bản demo hardcode nhất quán với story «Tiếp sức đến trường».

---

## Checklist nghiệm thu khi demo

- [ ] Dự án mới hiện trên `#/projects`
- [ ] End date &lt; start date bị chặn
- [ ] Dashboard tách rõ Cam kết vs Thực nhận
- [ ] Chờ duyệt hiển thị riêng, không gộp vào Thực chi
- [ ] Công thức số dư = thực nhận − thực chi duyệt (đúng với số đang show)

---

## Hạn chế demo

- KPI hardcode (chưa aggregate từ expense/funding thật trong app).
- Chưa có project switcher đầy đủ — header vẫn hiện tên dự án mẫu.
- Đóng/archive project chưa có UI.

---

## Route liên quan

| Route | Màn hình |
|-------|----------|
| `#/projects` | Danh sách dự án |
| `#/project-create` | Tạo dự án |
| `#/overview` | Dashboard KPI |

---

## Demo tiếp theo

→ **Demo 03 — Dự trù import/editor** (F03).
