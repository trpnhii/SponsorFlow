# F07 — Phê duyệt

## Mục tiêu

Reviewer duyệt ngân sách và khoản chi với đầy đủ ngữ cảnh (chứng từ, extract, alerts, budget line); lưu audit. Expense không tự duyệt; người tạo không tự duyệt expense của mình.

State: [state-machines.md](./shared/state-machines.md).

## Actors

Reviewer, Org admin (theo policy), hệ thống notify

---

## UC-18 Duyệt ngân sách (budget version)

**Precondition:** Version `submitted`; actor có quyền approve budget.

**Main flow**

1. Mở Approval / Budget review.
2. Xem: version number, lines, totals, funding coverage, diff vs baseline (nếu revision), lý do điều chỉnh.
3. Chọn **Approve** | **Request changes** | **Reject**.
4. Comment: bắt buộc với return/reject; optional với approve.
5. Hệ thống đổi state + `approval_events` + cập nhật dashboard.

**Alternate**

- A1: Request changes → `returned`; editor mở lại; history giữ comment.
- A2: Reject → `rejected`; tạo revision mới từ bản đó nếu user muốn tiếp tục.

**Exception**

- E1: Không quyền → 403.
- E2: Version không còn `submitted` (đã xử lý) → 409.

---

## UC-19 Duyệt khoản chi (expense)

**Precondition:** Expense `submitted`; actor reviewer/org_admin **và** `actor.id ≠ expense.created_by`.

**Main flow**

1. Notification / Approval queue.
2. Mở chi tiết: chứng từ gốc, fields (OCR vs user), allocations, budget remaining, validation alerts + override reasons, lịch sử.
3. **Approve** | **Request changes** | **Reject** + comment.
4. Nếu Approve → expense vào Actual; KPI cập nhật.
5. Audit: actor, decision, timestamp, snapshot fields chính (`Proposed`).

**Alternate**

- A1: Request changes → `returned`; creator nhận notify; sửa → resubmit (có thể đổi amount → re-validate).
- A2: Reject → không vào Actual; bản ghi + document giữ để audit.

**Exception**

- E1: Self-approve → 403 kể cả org_admin là creator.
- E2: Gọi API không quyền → 403 + không đổi state.

**Postcondition:** State mới; `approval_events` immutable append-only.

---

## UC-20 Queue & thông báo (`Proposed`)

1. Khi submit budget/expense → tạo notification cho users có role reviewer trên project (+ org_admin).
2. Queue filter: type (budget|expense), project, age, severity alerts.
3. Sau quyết định → notify submitter.

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Approval queue | Pending list, filters | Mở chi tiết |
| Expense detail | Original, form, alerts, history | Approve / Reject / Request changes |
| Budget review | Version, diff, coverage | Approve / Return |

## API gợi ý

```
POST /budget-versions/{id}/approve
POST /budget-versions/{id}/request-changes
POST /budget-versions/{id}/reject
POST /expenses/{id}/decision   # body: { decision, comment }
GET  /projects/{id}/approvals/queue
```

## Acceptance

- [ ] Người không quyền không gọi được API duyệt.
- [ ] Creator không tự duyệt expense của mình.
- [ ] Mọi đổi trạng thái phát sinh audit event.
- [ ] Chỉ Approved expenses vào Actual.
