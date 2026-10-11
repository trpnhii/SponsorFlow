# F02 — Dự án & Dashboard

## Mục tiêu

Tạo/quản lý dự án và hiển thị KPI tài chính/tiến độ đúng nguồn dữ liệu (phân biệt cam kết vs thực nhận; chỉ chi Approved vào Actual).

## Actors

Org admin, Project manager, Finance/Ops (xem), Reviewer (xem queue liên quan), Sponsor (portal riêng — F11)

## Entities

`projects`, `project_members`, `funding_records`, `budget_versions`, `expenses`, `activities`, `reports`

---

## UC-05 Tạo dự án

**Precondition:** Actor có quyền tạo project trong org.

**Main flow**

1. Nhập: tên, mô tả, mục tiêu, start/end date, (optional) sponsors/team.
2. Lưu `draft` hoặc `active` (`Proposed`: mặc định `draft`).
3. Gán project members + roles.
4. Xuất hiện trên danh sách dự án org.

**Alternate**

- A1: Lưu draft thiếu ngày kết thúc → cho phép; cảnh báo khi submit budget lớn.

**Exception**

- E1: End date < start date → validation lỗi.

**Postcondition:** `project_id` tồn tại; audit `project.created`.

---

## UC-06 Xem Dashboard dự án

**Precondition:** Actor là member project hoặc org_admin.

**Main flow**

1. Mở project overview.
2. Hệ thống aggregate:

| KPI | Công thức (`Proposed`) |
|-----|------------------------|
| Tổng cam kết | `SUM(funding.committed)` |
| Tổng thực nhận | `SUM(funding.received)` |
| Thực chi đã duyệt | `SUM(expense.amount)` where `status=approved` |
| Khoản chờ duyệt | `SUM(amount)` where `status=submitted` |
| Số dư (theo thực nhận) | `received - approved_spend` |
| Thiếu minh chứng | Số activity/expense thiếu evidence theo rule F08 |
| Tiến độ báo cáo | Có report published trong kỳ / kỳ kế hoạch |

3. Hiển thị task/alert: pending approvals, budget returned, OCR failed, missing evidence.

**Quy tắc**

- Không tính chi phí chờ duyệt vào Actual.
- Phân biệt **cam kết** vs **thực nhận** trên UI (2 số riêng).
- KPI filter đúng `project_id`; không lẫn cross-project.

---

## UC-07 Cập nhật / đóng dự án

**Main flow:** Sửa metadata; đổi status `active` → `closed` (org_admin/PM).

**Exception:** Đóng project khi còn expense `submitted` → cảnh báo; `Proposed`: cho phép đóng nhưng queue vẫn xử lý được hoặc bắt complete trước — **default: cảnh báo + cho đóng**, expense submitted vẫn duyệt được.

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Project list | Filter, status, search | Tạo dự án |
| Project create | Form metadata, team | Lưu draft |
| Dashboard | KPI cards, alerts, shortcuts | Xem chi tiết / xử lý task |

## API gợi ý

```
GET/POST /projects
GET/PATCH /projects/{id}
GET /projects/{id}/dashboard
```

## Acceptance

- [ ] Dự án mới hiện trên danh sách đúng org.
- [ ] Số liệu Dashboard khớp bản ghi funding / expense / approval.
- [ ] Chờ duyệt không cộng vào thực chi.
