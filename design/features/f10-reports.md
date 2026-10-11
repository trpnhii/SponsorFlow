# F10 — Báo cáo tài chính & tác động

## Mục tiêu

Tạo báo cáo theo kỳ/dự án; tổng hợp funding, budget, chi phí duyệt, variance, hoạt động, KPI; duyệt rồi **publish snapshot bất biến** + PDF. Thay đổi sau công bố không làm đổi báo cáo cũ.

State: [state-machines.md](./shared/state-machines.md#4-report).

## Actors

PM / Finance (draft & submit), Reviewer (approve), Org admin (publish), Sponsor (đọc published — F11)

## Entities

`reports`, `report_snapshots`, `approval_events`

### Nội dung báo cáo (sections)

| Section | Nguồn |
|---------|--------|
| Cover | Project, period, generated_at, approved_at, published_at |
| Funding | Committed / received theo nguồn |
| Budget | Baseline approved totals by category |
| Actual spend | Approved expenses in period |
| Variance | Actual − Budget |
| Pending note | Chi chờ duyệt (không cộng actual) |
| Activities | Activities trong kỳ + evidence sponsor_visible count |
| KPIs | Target vs actual |
| Data gaps | Lines/metrics thiếu evidence hoặc thiếu data |

---

## UC-24 Tạo & preview báo cáo

**Precondition:** Project có dữ liệu; actor có quyền.

**Main flow**

1. Report wizard: chọn period, sections.
2. Hệ thống aggregate live preview (chưa snapshot).
3. User review → lưu `draft` → **Submit** duyệt.

**Alternate**

- A1: Bỏ section KPI nếu chưa có metric.
- A2: Cảnh báo data gaps trên preview nhưng vẫn cho submit.

**Exception**

- E1: Period invalid → 400.
- E2: Project không có budget approved → warning mạnh (`Proposed`: vẫn cho tạo report demo).

---

## UC-25 Duyệt & publish

**Precondition:** Report `submitted`.

**Main flow**

1. Reviewer approve → `approved`.
2. Org admin **Publish**:
   - Freeze `report_snapshots` = JSON/canonical payload số liệu lúc publish.
   - Generate PDF từ snapshot.
   - `status = published`; `published_at`.
3. Sponsor access (nếu được cấp) thấy report.

**Alternate**

- A1: Request changes trên report → `returned` (giống budget).
- A2: Cần sửa sau approve nhưng chưa publish → `Proposed`: chỉ org_admin được “unapprove về draft” **hoặc** tạo report mới; **default: tạo report mới**, không edit approved.

**Exception**

- E1: Publish khi chưa approve → 409.
- E2: PDF render fail → publish transaction rollback hoặc status `approved` + job retry (`Proposed`: giữ approved, `pdf_status=failed`, retry).

**Postcondition:** Snapshot bất biến; chỉnh expense sau đó không đổi PDF cũ.

---

## UC-26 Tải PDF

**Main flow:** User nội bộ hoặc sponsor (nếu published + access) `GET /reports/{id}/pdf` → file từ snapshot.

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Report wizard | Period, sections | Tạo preview |
| Report preview | Finance + impact + gaps | Gửi duyệt / Xuất PDF (sau publish) |

## API gợi ý

```
POST /projects/{id}/reports
POST /reports/{id}/submit
POST /reports/{id}/decision
POST /reports/{id}/publish
GET  /reports/{id}/pdf
GET  /reports/{id}/snapshot
```

## Acceptance

- [ ] PDF khớp số liệu snapshot lúc publish.
- [ ] Sửa dữ liệu sau publish không đổi báo cáo cũ.
- [ ] Chỉ report published (và được cấp quyền) lộ cho sponsor.
