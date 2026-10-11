# Shared — State machines

Các trạng thái dưới đây là **Proposed** để chốt implement; gốc doc chỉ nêu tên Draft / Submitted / Approved.

---

## 1. Budget version

```
┌─────────┐  submit   ┌───────────┐  approve   ┌──────────┐
│  draft  │──────────▶│ submitted │───────────▶│ approved │
└─────────┘           └───────────┘            └──────────┘
     ▲                      │ request_changes
     │                      ▼
     └────────────────── returned
                            │
                     reject ▼
                       ┌──────────┐
                       │ rejected │  (terminal cho version này)
                       └──────────┘
```

| Transition | Ai | Điều kiện | Hệ quả |
|------------|----|-----------|--------|
| → draft (create) | PM / finance / org_admin | Project active | Version mới `vN`, editable |
| draft → submitted | Creator roles | Có ≥1 line hợp lệ; funding coverage check warning OK hoặc override | Khóa edit; vào queue |
| submitted → approved | Reviewer / org_admin | Không self-submit nếu policy cấm (`Proposed`: cho phép org_admin duyệt budget mình submit) | Khóa version; baseline cho Actual |
| submitted → returned | Reviewer | Comment bắt buộc | Mở lại edit trên **cùng version** |
| submitted → rejected | Reviewer | Comment bắt buộc | Terminal; tạo revision = version mới từ bản reject |
| approved → (immutable) | — | Mọi chỉnh sửa → clone thành `draft` vN+1 | Diff so với approved baseline |

**Quy tắc**

- Chỉ **một** version `submitted` tại một thời điểm / project (`Proposed`).
- Nhiều `approved` theo lịch sử; **baseline hiện hành** = approved mới nhất.
- Actual luôn so với baseline hiện hành.

---

## 2. Expense

```
┌─────────┐  submit   ┌───────────┐  approve   ┌──────────┐
│  draft  │──────────▶│ submitted │───────────▶│ approved │
└─────────┘           └───────────┘            └──────────┘
     ▲                      │ request_changes
     │                      ▼
     └────────────────── returned
                            │
                     reject ▼
                       ┌──────────┐
                       │ rejected │
                       └──────────┘
```

| Transition | Ai | Điều kiện | Hệ quả |
|------------|----|-----------|--------|
| → draft | Finance / PM / org_admin | Có document hoặc nhập tay | OCR có thể chạy async |
| draft → submitted | Creator (không phải chỉ viewer) | Field bắt buộc đủ; allocations sum = amount | Vào approval queue |
| submitted → approved | Reviewer / org_admin **≠ creator** | Xem được chứng từ + alerts | Vào Actual / variance |
| submitted → returned | Reviewer | Comment bắt buộc | Creator sửa & resubmit |
| submitted → rejected | Reviewer | Comment bắt buộc | Không vào Actual; giữ audit |
| mọi quyết định | System | — | Ghi `approval_events` + timestamp + actor |

**Quy tắc**

- Expense **không tự duyệt**.
- Chỉ `approved` tính vào Actual.
- `submitted` / `returned` / `rejected` **không** tính vào Actual; UI hiện riêng “chờ duyệt”.

---

## 3. Document / OCR

```
uploaded → processing → completed
                └──────→ failed
```

| State | Ý nghĩa |
|-------|---------|
| `uploaded` | File lưu xong, chờ OCR |
| `processing` | Đang extract |
| `completed` | Có `ocr_results` (kể cả confidence thấp) |
| `failed` | Timeout / OCR error → cho phép nhập tay |

User luôn được sửa fields trước khi gắn vào expense submit.

---

## 4. Report

```
┌─────────┐  submit   ┌───────────┐  approve   ┌──────────┐  publish   ┌───────────┐
│  draft  │──────────▶│ submitted │───────────▶│ approved │───────────▶│ published │
└─────────┘           └───────────┘            └──────────┘            └───────────┘
                           │ request_changes         │
                           ▼                         │ (không publish)
                        returned ◀───────────────────┘  (nếu cần sửa trước publish — Proposed: không; phải tạo draft mới)
```

| Transition | Ai | Hệ quả |
|------------|----|--------|
| draft → submitted | PM / finance / org_admin | Chờ duyệt nội dung |
| submitted → approved | Reviewer / org_admin | Sẵn sàng publish; **chưa** tạo snapshot cuối nếu publish tách bước |
| approved → published | Org admin | Tạo `report_snapshots` bất biến; PDF từ snapshot |
| published | — | Thay đổi dữ liệu nguồn **không** đổi báo cáo cũ |

`Proposed`: Sponsor chỉ thấy `published`.

---

## 5. Invitation

```
pending → accepted
pending → expired
pending → revoked
```

---

## 6. Project status (`Proposed`)

```
draft → active → closed
         └──────→ archived
```

Budget approve lần đầu **không** bắt buộc để `active`, nhưng demo flow khuyến nghị: funding + budget approved trước khi chi tiêu hàng loạt.
