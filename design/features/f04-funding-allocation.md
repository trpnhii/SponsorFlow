# F04 — Nguồn tài trợ & phân bổ ngân sách

## Mục tiêu

Tách **tiền cam kết** và **tiền thực nhận**; gắn điều kiện/đối tượng; phân bổ theo khoản mục hoặc hoạt động; tránh đếm trùng khi chi tiêu.

## Actors

Org admin, Project manager, Finance/Ops

## Entities

`sponsors`, `funding_records`, `budget_lines.funding_source_id`, `expense_allocations`

---

## UC-11 Khai báo nguồn tài trợ

**Precondition:** Project tồn tại; actor có quyền.

**Main flow**

1. Thêm funding record: sponsor (có thể tạo mới), `committed`, `received`, currency `VND`, điều kiện/restriction text, kỳ hạn (optional).
2. Cập nhật `received` khi tiền về (nhập tay MVP — không tích hợp bank).
3. Dashboard theo nguồn: committed, received, allocated budget, approved spend, remaining.

**Alternate**

- A1: Nhiều funding sources / project (default D2).
- A2: Sponsor chưa có account portal → vẫn tạo funding record; mời portal sau (F11).

**Exception**

- E1: `received` > `committed` → cảnh báo (cho phép nếu thực tế over-receive) (`Proposed`: warning, không block).
- E2: Số âm → reject.

**Postcondition:** Funding records gắn `project_id`; KPI F02 cập nhật.

---

## UC-12 Phân bổ ngân sách theo nguồn

**Precondition:** Có budget lines (draft hoặc đang edit).

**Main flow**

1. Gán `funding_source_id` cho từng budget line (hoặc theo category bulk).
2. Summary: tổng planned theo nguồn vs `received`/`committed`.
3. Cảnh báo nếu tổng phân bổ dự trù > thực nhận (hoặc > cam kết — hiển thị cả hai).

**Quy tắc**

- Không bắt buộc mọi line có funding lúc draft sớm; **bắt buộc trước submit** nếu project đã có ≥1 funding source (`Proposed`).
- Ràng buộc với budget đã duyệt: revision phải nêu rõ thay đổi phân bổ.

---

## UC-13 Phân bổ khoản chi (anti double-count)

**Precondition:** Tạo/sửa expense (F05/F06).

**Main flow**

1. User chọn một hoặc nhiều `(budget_line_id, funding_source_id?, allocated_amount)`.
2. Validate: `SUM(allocated_amount) = expense.amount`.
3. Actual theo line/source chỉ cộng từ allocation của expense `approved`.

**Exception**

- E1: Tổng allocation ≠ amount → không cho submit.
- E2: Cố gán trùng cách khiến double-count — hệ thống chỉ tính qua `expense_allocations`, không cộng `expense.amount` hai lần trên cùng dimension.

## UI

- Sponsor/funding table
- Received amount editor
- Allocation summary (by source / by category)
- Conditions / restrictions panel

## API gợi ý

```
GET/POST /projects/{id}/funding-records
PATCH /funding-records/{id}
GET /projects/{id}/funding-summary
```

## Acceptance

- [ ] Tổng phân bổ, đã duyệt, còn lại nhất quán theo dự án và theo nguồn.
- [ ] Một khoản chi không bị đếm hai lần trên cùng nguồn/line.
- [ ] Cam kết và thực nhận hiển thị tách biệt.
