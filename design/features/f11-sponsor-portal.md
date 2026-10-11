# F11 — Cổng nhà tài trợ

## Mục tiêu

Sponsor được mời xem các dự án liên quan khoản tài trợ của mình: mức nhận/chi đã duyệt, hoạt động/KPI được chia sẻ, báo cáo published. Read-only; filter server-side; redaction chứng từ nhạy cảm.

## Actors

Sponsor (primary), Org admin (mời & cấu hình quyền xem)

## Entities

`sponsors`, `funding_records`, `sponsor_access`, `reports` (published), redaction rules

### Sponsor visibility (`Proposed` — default D13)

| Dữ liệu | Sponsor thấy? |
|---------|----------------|
| Project metadata (tên, mô tả, kỳ) | Có (nếu được cấp) |
| Funding của **chính sponsor đó** | Có |
| Funding của sponsor khác cùng project | Không |
| Approved spend tổng / theo category | Có |
| Expense line item chi tiết | Không (MVP) |
| Receipt / chứng từ gốc | **Không** mặc định |
| Activities (title, date, mô tả) | Có nếu không `restricted` |
| Evidence files | Chỉ `sponsor_visible` |
| KPI | Có trong report hoặc flag visible |
| Reports | Chỉ `published` được share |

---

## UC-27 Mời sponsor

**Precondition:** Org admin; có funding record gắn sponsor.

**Main flow**

1. Mời email → role sponsor + `SponsorAccess(project_ids)`.
2. Sponsor accept invitation (F01).
3. Vào Sponsor portal (workspace riêng, không lẫn editor nội bộ).

**Alternate**

- A1: Một sponsor nhiều projects → list trên portal.
- A2: Thu hồi access → mất quyền ngay.

---

## UC-28 Xem portal & báo cáo

**Precondition:** Sponsor đã login + có access.

**Main flow**

1. Tổng quan: các project được cấp; KPI cards (received, approved spend, report status).
2. Mở project → funding của mình, approved spend summary, activities được phép, list reports published.
3. Xem/download PDF report published.

**Exception**

- E1: Truy cập project/report không thuộc access → 404/403 (không leak).
- E2: Đoán URL document nội bộ → 403.
- E3: Sponsor A không xem data sponsor B trên cùng project.

**Postcondition:** Mọi query sponsor scope filter `sponsor_id` + `project_id` phía server.

---

## UC-29 Redaction

**Main flow (system)**

1. API sponsor dùng serializer riêng (không trả storage_key chứng từ, PII beneficiary).
2. Evidence chỉ trả khi `access_level = sponsor_visible`.
3. Audit `sponsor.view_report` khi tải PDF (`Proposed`).

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Sponsor home | Project cards, KPI | Chọn dự án |
| Sponsor project | Funding, spend, activities | Xem báo cáo |
| Report view | Read-only + download | Tải PDF |

## API gợi ý

```
GET /sponsor/projects
GET /sponsor/projects/{id}
GET /sponsor/projects/{id}/reports
GET /sponsor/reports/{id}/pdf
```

Không expose `/documents/{id}/content` cho role sponsor trừ khi future flag.

## Acceptance

- [ ] Sponsor A không xem được dữ liệu tài trợ/dự án của sponsor B nếu chưa cấp quyền.
- [ ] Không tải được chứng từ gốc mặc định.
- [ ] Chỉ thấy report `published`.
- [ ] Thử đoán URL cross-project thất bại.
