# F08 — Hoạt động & minh chứng

## Mục tiêu

Ghi nhận hoạt động triển khai; liên kết khoản chi đã/đang theo dõi; upload minh chứng với mức truy cập riêng (không mặc định công khai ảnh người hưởng lợi).

## Actors

Project manager, Finance/Ops, Org admin; Reviewer/Sponsor xem theo quyền

## Entities

`activities`, `evidences`, link `expenses.activity_id` / join table `activity_expenses` (`Proposed`: many-to-many)

### Activity fields

| Field | Bắt buộc |
|-------|----------|
| title | Có |
| description | Có |
| start_at / end_at | Có (ngày) |
| objectives | Không |
| owner_user_id | Có |
| project_id | Có |
| status | `planned` \| `in_progress` \| `done` (`Proposed`) |

### Evidence

| Field | Mô tả |
|-------|--------|
| file / note | File hoặc text note |
| access_level | `internal` \| `sponsor_visible` \| `restricted` (`Proposed`) |
| Default | `internal` — **không** public người hưởng lợi |

---

## UC-21 Tạo / cập nhật hoạt động

**Precondition:** Member có quyền trên project.

**Main flow**

1. Tạo activity với metadata + owner.
2. Link một hoặc nhiều expenses (approved hoặc draft — cho phép draft để planning).
3. Upload evidences; chọn `access_level`.
4. Timeline hiển thị sự kiện: created, linked expense, evidence added.

**Alternate**

- A1: Tạo activity trước mọi expense (không bắt buộc expense lúc tạo).
- A2: Từ expense detail → “Tạo activity liên quan”.

**Exception**

- E1: Link expense khác project → 400.
- E2: Upload evidence type/size invalid → như F05 limits.

**Postcondition:** Có thể navigate Expense → Activities và ngược lại.

---

## UC-22 Kiểm soát quyền minh chứng

**Main flow**

1. User nội bộ (admin/PM/finance/reviewer) xem evidence `internal` + `sponsor_visible`.
2. Sponsor chỉ xem `sponsor_visible` qua portal (F11).
3. `restricted` chỉ org_admin + uploader + PM (`Proposed`).

**Quy tắc:** Không mặc định công khai ảnh người hưởng lợi; UI nhắc khi upload ảnh có người.

## UI

- Activity list + filters
- Create/edit form
- Linked expenses
- Attachments / timeline

## API gợi ý

```
GET/POST /projects/{id}/activities
PATCH /activities/{id}
POST /activities/{id}/evidences
POST /activities/{id}/expenses   # link
```

## Acceptance

- [ ] Từ expense approved xem được activity liên quan và ngược lại.
- [ ] Evidence `internal` không lộ sang sponsor.
- [ ] Access_level được enforce ở API file.
