# SponsorFlow — Hướng dẫn Demo

Script demo theo từng tính năng: cách chạy, tài khoản, bước click, điểm nhấn khi trình bày.

App: [`web/`](../../web/) (static SPA, mock — không backend thật).

## Chạy app

```bash
cd web
python -m http.server 5173
```

Mở http://localhost:5173 → mặc định `#/login` nếu chưa có session.

## Tài khoản nhanh

| Email | Password | Role |
|-------|----------|------|
| `admin@greenhope.vn` | `demo123` | Admin tổ chức |
| `finance@greenhope.vn` | `demo123` | Finance / Ops |
| `reviewer@greenhope.vn` | `demo123` | Reviewer |
| `sponsor@fund.vn` | `demo123` | Nhà tài trợ → portal |

## Danh sách demo

| # | File | Tính năng | Spec |
|---|------|-----------|------|
| 01 | [demo-01-auth-organisation.md](./demo-01-auth-organisation.md) | Đăng nhập & tổ chức | [F01](../features/f01-auth-organisation.md) |
| 02 | [demo-02-project-dashboard.md](./demo-02-project-dashboard.md) | Dự án & Dashboard | [F02](../features/f02-project-dashboard.md) |
| 03 | [demo-03-budget-import-editor.md](./demo-03-budget-import-editor.md) | Dự trù import/editor | [F03](../features/f03-budget-import-editor.md) |
| 04 | [demo-04-funding-allocation.md](./demo-04-funding-allocation.md) | Nguồn tài trợ | [F04](../features/f04-funding-allocation.md) |
| 05 | [demo-05-receipt-ocr.md](./demo-05-receipt-ocr.md) | Upload & OCR | [F05](../features/f05-receipt-ocr.md) |
| 06 | [demo-06-expense-validation.md](./demo-06-expense-validation.md) | Cảnh báo khoản chi | [F06](../features/f06-expense-validation.md) |
| 07 | [demo-07-approval.md](./demo-07-approval.md) | Phê duyệt | [F07](../features/f07-approval.md) |
| 08 | [demo-08-activity-evidence.md](./demo-08-activity-evidence.md) | Hoạt động & minh chứng | [F08](../features/f08-activity-evidence.md) |
| 09 | [demo-09-impact-metrics.md](./demo-09-impact-metrics.md) | Chỉ số kết quả | [F09](../features/f09-impact-metrics.md) |
| 10 | [demo-10-reports.md](./demo-10-reports.md) | Báo cáo | [F10](../features/f10-reports.md) |
| 11 | [demo-11-sponsor-portal.md](./demo-11-sponsor-portal.md) | Cổng nhà tài trợ | [F11](../features/f11-sponsor-portal.md) |

## Luồng demo end-to-end gợi ý (~25–30 phút)

1. Auth (01) → tạo/org members  
2. Dự án + Dashboard KPI (02)  
3. Funding (04) → Import/editor budget (03) → Reviewer approve (07)  
4. Upload OCR (05) → validation/trùng (06) → duyệt chi (07)  
5. Activity (08) → Impact (09) → Report (10) → Sponsor portal (11)  

## File hỗ trợ

- `web/assets/sample-budget.csv` — CSV dự trù (có dòng lỗi cố ý)  
- `test_invoice.jpg` (root) — ảnh hóa đơn mẫu  

## Quy ước

- **(mock)** = hành vi giả lập / localStorage  
- Mỗi file demo độc lập; có thể chạy lẻ theo feature  
