# SponsorFlow — Feature Design Specs

> Nguồn: `design/SponsorFlow_Tech_Feature_Specification_VI.docx` (v1.0, 08/10/2026)  
> Mục đích: đặc tả theo tính năng để triển khai MVP; các chỗ gốc doc còn thiếu đã được **bổ sung đề xuất** (đánh dấu `Proposed`).

## Chuỗi dữ liệu MVP

```
Nguồn tài trợ → Dự trù ngân sách → Khoản chi → Chứng từ → Hoạt động → Chỉ số → Báo cáo
```

## Mục lục

| ID | File | Tính năng |
|----|------|-----------|
| — | [shared/roles-and-permissions.md](./shared/roles-and-permissions.md) | Vai trò & ma trận quyền |
| — | [shared/state-machines.md](./shared/state-machines.md) | State machine (budget, expense, report…) |
| — | [shared/open-decisions.md](./shared/open-decisions.md) | Quyết định còn mở + default MVP |
| — | [shared/mvp-checklist.md](./shared/mvp-checklist.md) | Checklist nghiệm thu demo MVP |
| F01 | [f01-auth-organisation.md](./f01-auth-organisation.md) | Đăng nhập & tổ chức |
| F02 | [f02-project-dashboard.md](./f02-project-dashboard.md) | Dự án & Dashboard |
| F03 | [f03-budget-import-editor.md](./f03-budget-import-editor.md) | Dự trù: import + editor |
| F04 | [f04-funding-allocation.md](./f04-funding-allocation.md) | Nguồn tài trợ & phân bổ |
| F05 | [f05-receipt-ocr.md](./f05-receipt-ocr.md) | Upload chứng từ & OCR |
| F06 | [f06-expense-validation.md](./f06-expense-validation.md) | Kiểm tra & cảnh báo khoản chi |
| F07 | [f07-approval.md](./f07-approval.md) | Phê duyệt |
| F08 | [f08-activity-evidence.md](./f08-activity-evidence.md) | Hoạt động & minh chứng |
| F09 | [f09-impact-metrics.md](./f09-impact-metrics.md) | Chỉ số kết quả |
| F10 | [f10-reports.md](./f10-reports.md) | Báo cáo tài chính & tác động |
| F11 | [f11-sponsor-portal.md](./f11-sponsor-portal.md) | Cổng nhà tài trợ |

## Ngoài phạm vi MVP

- Giữ hộ / chuyển tiền tài trợ
- Kiểm toán độc lập tự động
- AI tuyên bố “xác thực hóa đơn thật”
- Tích hợp ngân hàng / kế toán đầy đủ
- Mô hình phát hiện gian lận nâng cao

## Quy ước trong các file

- **Actor**, **Precondition**, **Main flow**, **Alternate**, **Exception**, **Postcondition** dùng cho use case.
- `Proposed` = bổ sung khi doc gốc chưa chốt; cần Product/Finance xác nhận trước sprint.
- Acceptance criteria mang tính nghiệm thu demo MVP.
