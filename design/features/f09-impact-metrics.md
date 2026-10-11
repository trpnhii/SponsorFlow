# F09 — Chỉ số kết quả / tác động

## Mục tiêu

Định nghĩa KPI (đơn vị, target, actual, kỳ); nhập số thực tế và minh chứng. Phân biệt hoạt động / đầu ra / tác động; **không** gắn nhãn “xác thực độc lập” cho số tự khai.

## Actors

Project manager, Org admin, Finance (nhập liệu); Sponsor xem số đã cho phép chia sẻ

## Entities

`impact_metrics`, `metric_values`, optional link `evidences`

### Metric definition

| Field | Mô tả |
|-------|--------|
| name | Tên chỉ số |
| level | `output` \| `outcome` \| `impact` (`Proposed`) |
| unit | Đơn vị |
| target | Mục tiêu |
| period_start / period_end | Kỳ đo |
| project_id | FK |

### Metric value

| Field | Mô tả |
|-------|--------|
| actual | Số thực tế (tự khai) |
| as_of | Ngày ghi nhận |
| evidence_ids | Minh chứng (optional nhưng UI cảnh báo nếu thiếu) |
| notes | Ghi chú |

---

## UC-23 Định nghĩa & cập nhật KPI

**Precondition:** Quyền edit metrics trên project.

**Main flow**

1. Tạo metric: name, level, unit, target, period.
2. Nhập/cập nhật actual + đính evidence.
3. Chart target vs actual; danh sách metric thiếu evidence.

**Alternate**

- A1: Nhiều lần ghi nhận trong kỳ → giữ lịch sử values; chart dùng latest hoặc sum tùy `aggregation` (`Proposed`: latest).

**Exception**

- E1: Actual âm khi unit không cho phép → validation.
- E2: Gắn nhãn UI “verified/independent” → **cấm** trong copy MVP.

**Postcondition:** Dashboard/report đọc được tiến độ; biết metric nào thiếu bằng chứng.

## Quy tắc

- Phân biệt rõ activity (F08) vs output/outcome/impact.
- Số liệu tự khai báo ≠ kiểm chứng độc lập.
- Sponsor chỉ thấy metrics được đánh dấu `sponsor_visible` hoặc nằm trong report published (`Proposed`: theo report snapshot + flag trên metric).

## UI

- KPI list
- Target-vs-actual charts
- Outcome detail + evidence links
- Badge “thiếu minh chứng”

## API gợi ý

```
GET/POST /projects/{id}/metrics
POST /metrics/{id}/values
```

## Acceptance

- [ ] Hiển thị tiến độ target vs actual chính xác.
- [ ] Biết metric nào chưa có evidence.
- [ ] Không có label “xác thực độc lập” trên số tự nhập.
