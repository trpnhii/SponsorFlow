# Shared — Quyết định còn mở & default MVP

Các mục §13 của doc gốc. Cột **Default MVP** là đề xuất để team bắt đầu; Product/Finance/Tech cần xác nhận.

| # | Chủ đề | Câu hỏi | Default MVP (`Proposed`) |
|---|--------|---------|--------------------------|
| D1 | Tiền tệ | Chỉ VND hay đa tiền tệ? | **Chỉ VND**. Field `currency` cố định `VND`; UI không cho chọn khác. |
| D2 | Funding sources / project | Bao nhiêu nguồn? | **Nhiều** nguồn / project. |
| D3 | Expense split | Một expense split nhiều budget line? | **Có**. `expense_allocations[]`; tổng `allocated_amount` = `expense.amount`. |
| D4 | Split funding | Một expense nhiều funding source? | **Có**, qua allocation gắn `funding_source_id` (có thể cùng hoặc khác line). Không đếm trùng actual. |
| D5 | Ai duyệt budget | Role nào? | `reviewer` hoặc `org_admin`. 1 cấp. |
| D6 | Ai duyệt expense | Role nào? Có 2 cấp? | `reviewer` hoặc `org_admin` ≠ creator. **1 cấp**. |
| D7 | Ai duyệt/publish report | ? | Approve: reviewer/org_admin. Publish: **org_admin**. |
| D8 | Import limits | File size, số dòng, `.xls`? | Max **5 MB**, **2.000 dòng**, `.xlsx` + `.csv`. `.xls` **không** hỗ trợ MVP. |
| D9 | Cột chuẩn import | Template cố định? | Template mẫu + mapping UI. Cột tối thiểu: category, item_name, quantity, unit, unit_price. |
| D10 | OCR vendor | Dịch vụ nào? | Pluggable interface; chọn vendor sau. Manual fallback bắt buộc. |
| D11 | OCR ngôn ngữ | Độ chính xác tiếng Việt | Không gate demo bằng accuracy; đo & báo cáo sau pilot. |
| D12 | PDF template | Mẫu chuẩn? | 1 template cố định: cover + finance + activities + KPI + footnotes thiếu dữ liệu. |
| D13 | Sponsor visibility | Xem chi tiết tới đâu? | KPI tổng, approved spend theo category, activities (metadata), reports published. **Không** receipt gốc mặc định. |
| D14 | Demo sandbox | 2 org chung env? | **Cùng env, tách dữ liệu thật** theo `org_id` (không shared rows). |
| D15 | Self-approve budget | Org admin submit & approve budget? | **Cho phép** (khác expense). |
| D16 | Activity trước expense | Bắt buộc link activity trước duyệt? | **Không bắt buộc** lúc submit; khuyến nghị trước khi đưa vào report. |

## Ownership đề xuất

| Area | Owner |
|------|--------|
| Nghiệp vụ, workflow, UAT partner | Product / Business |
| Cấu trúc dự trù, budget/actual, ngoại lệ duyệt, báo cáo TC | Finance (Lâm Ân Vy) |
| Kiến trúc, UI, API, OCR, storage, RBAC, QA | Tech |

Cần thống nhất ownership chính thức trước sprint 1.
