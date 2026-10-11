# Shared — Vai trò & phân quyền

## Vai trò

| Role | Phạm vi | Mô tả |
|------|---------|--------|
| `platform_admin` | Hệ thống | Vận hành, giám sát lỗi/tài khoản; mọi thao tác ghi audit |
| `org_admin` | Tổ chức | Quản lý org, dự án, thành viên, phân quyền; duyệt ngân sách/báo cáo |
| `project_manager` | Dự án được cấp | Tạo/cập nhật dự án, hoạt động, đề xuất ngân sách, xem báo cáo |
| `finance_ops` | Dự án được cấp | Nhập dự trù, upload chứng từ, xử lý khoản chi, gửi duyệt |
| `reviewer` | Đối tượng được cấp | Duyệt/từ chối/yêu cầu sửa ngân sách và chi phí |
| `sponsor` | Dự án được mời | Xem dữ liệu/báo cáo đã công bố; không sửa |

**Giới hạn cứng**

- Admin tổ chức không truy cập org khác.
- Finance/Ops **không tự duyệt** khoản chi do chính mình tạo (`Proposed`, bắt buộc MVP).
- Sponsor không sửa dữ liệu; không xem chứng từ nhạy cảm mặc định.

## Membership model (`Proposed`)

```
User ──< Membership(role) >── Organisation
User ──< ProjectMember(roles[]) >── Project
SponsorUser ──< SponsorAccess >── Project (read scopes)
```

- Role org-level: `org_admin`.
- Role project-level: `project_manager` | `finance_ops` | `reviewer` (một user có thể nhiều role trên cùng project).
- `sponsor` gắn qua invitation riêng, không nằm trong membership nội bộ org.

## Ma trận quyền theo action (`Proposed`)

Ký hiệu: ✅ cho phép · ❌ cấm · ◐ chỉ dữ liệu/scope được cấp · — không áp dụng

| Action | org_admin | PM | finance | reviewer | sponsor |
|--------|-----------|----|---------|----------|---------|
| Quản lý thành viên org | ✅ | ❌ | ❌ | ❌ | ❌ |
| Tạo dự án | ✅ | ✅* | ❌ | ❌ | ❌ |
| Sửa metadata dự án | ✅ | ✅ | ❌ | ❌ | ❌ |
| Khai báo funding source | ✅ | ✅ | ✅ | ❌ | ❌ |
| Import / edit budget draft | ✅ | ✅ | ✅ | ❌ | ❌ |
| Submit budget | ✅ | ✅ | ✅ | ❌ | ❌ |
| Approve / reject budget | ✅ | ❌ | ❌ | ✅ | ❌ |
| Upload document + OCR | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tạo / sửa expense draft | ✅ | ✅ | ✅ | ❌ | ❌ |
| Submit expense | ✅ | ✅ | ✅ | ❌ | ❌ |
| Decide expense (approve/reject/request changes) | ✅** | ❌ | ❌ | ✅ | ❌ |
| Tạo activity / evidence | ✅ | ✅ | ✅ | ❌ | ❌ |
| Cập nhật KPI | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tạo report draft / submit | ✅ | ✅ | ✅ | ❌ | ❌ |
| Approve & publish report | ✅ | ❌ | ❌ | ✅*** | ❌ |
| Xem chứng từ gốc | ✅ | ✅ | ✅ | ✅ | ❌ mặc định |
| Xem báo cáo published | ✅ | ✅ | ✅ | ✅ | ◐ |
| Xuất PDF published | ✅ | ✅ | ✅ | ✅ | ◐ |

\* PM tạo dự án nếu org policy cho phép; mặc định org_admin hoặc PM.  
\*\* Org admin được duyệt **trừ** khi là người tạo expense (cùng rule anti-self-approve).  
\*\*\* `Proposed`: report approve = reviewer hoặc org_admin; publish chỉ org_admin.

## Enforcement

1. Mọi API và file access kiểm tra quyền **server-side** (RBAC + project scope).
2. Ẩn nút UI chỉ là UX — không thay thế authorization.
3. Truy cập bằng URL/API ngoài quyền → `403`; không leak tồn tại resource nếu cần (`404` khi cross-tenant) — `Proposed`: cross-org dùng `404`.
4. Mọi quyết định approve/reject/publish ghi `audit_events`.

## Invitation

| Trường | Quy tắc |
|--------|---------|
| Token | Unique, single-use hoặc reusable đến khi revoke (`Proposed`: single-use) |
| Expiry | `Proposed`: 7 ngày |
| Revoke | Org admin thu hồi → token invalid ngay |
| Role gắn sẵn | Invitation mang role + project_ids (nếu có) |

## Acceptance (shared)

- [ ] User A org X không đọc được project org Y qua API/URL.
- [ ] Finance không gọi thành công `POST .../decision` trên expense mình tạo.
- [ ] Sponsor chỉ thấy project trong `SponsorAccess` và report `published`.
