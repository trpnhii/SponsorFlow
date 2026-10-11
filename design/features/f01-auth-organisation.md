# F01 — Đăng nhập & tổ chức

## Mục tiêu

Cho phép người dùng tạo tài khoản, đăng nhập, tạo/tham gia tổ chức, mời thành viên và gán quyền theo dự án.

## Actors

- Guest (chưa đăng nhập)
- Thành viên org (mọi role nội bộ)
- Org admin
- Platform admin (vận hành — ngoài luồng chính MVP)

## Entities

`users`, `organisations`, `memberships`, `invitations`, `project_members`, `audit_events`

---

## UC-01 Đăng ký / Đăng nhập

**Precondition:** Không có session hợp lệ.

**Main flow**

1. User mở `/login` hoặc `/register`.
2. Đăng ký bằng email + mật khẩu (hoặc đăng nhập).
3. Hệ thống hash password, tạo session an toàn.
4. Redirect: nếu chưa có org → Organisation setup; nếu có → Dashboard / chọn org.

**Alternate**

- A1: Có invitation token trên URL → sau login tự gắn vào luồng chấp nhận lời mời.

**Exception**

- E1: Sai mật khẩu → đếm thất bại; `Proposed`: khóa tạm sau 5 lần / 15 phút.
- E2: Email chưa verify (`Proposed`: MVP cho phép login ngay; verify email Phase 2).

**Postcondition:** Session hợp lệ; `GET /me` trả user + memberships.

---

## UC-02 Tạo tổ chức

**Precondition:** User đã login.

**Main flow**

1. Nhập tên org, (optional) mô tả.
2. `POST /organisations` → user trở thành `org_admin`.
3. Vào workspace org.

**Postcondition:** Org + membership admin tồn tại.

---

## UC-03 Mời thành viên

**Precondition:** Actor là `org_admin`.

**Main flow**

1. Nhập email, chọn role org/project, (optional) danh sách project.
2. Hệ thống tạo invitation (token, expiry 7 ngày), gửi email.
3. Người được mời mở link → login/register → chấp nhận → tạo membership / project_members.

**Alternate**

- A1: User đã có account → chỉ tạo membership.
- A2: User đã là member → báo đã tồn tại; có thể cập nhật role nếu admin xác nhận.

**Exception**

- E1: Token hết hạn → thông báo; admin gửi lại.
- E2: Token đã revoke → 410/403.
- E3: Email gửi fail → invitation vẫn `pending`; admin có thể copy link (`Proposed`).

**Postcondition:** Membership active hoặc invitation `pending`; audit log.

---

## UC-04 Thu hồi quyền

**Precondition:** Actor là `org_admin`.

**Main flow**

1. Chọn member → Remove hoặc đổi role / bỏ project access.
2. Session/permission cache invalidate (`Proposed`: check DB mỗi request MVP).
3. Invitation pending liên quan có thể revoke.

**Postcondition:** User không còn gọi được API project đó.

---

## UI

| Screen | Thành phần | Primary action |
|--------|------------|----------------|
| Login | Email, password, link register/invite | Đăng nhập |
| Register | Email, password, confirm | Tạo tài khoản |
| Org setup | Tên org | Tạo tổ chức |
| Members | Danh sách, role selector, invite form | Mời / Thu hồi |
| Invitation accept | Tóm tắt org + role | Chấp nhận |

## API gợi ý

```
POST /auth/login
POST /auth/logout
GET  /me
POST /organisations
POST /organisations/{id}/invitations
POST /invitations/{token}/accept
DELETE /organisations/{id}/members/{userId}
PATCH /projects/{id}/members
```

## Quy tắc

- Kiểm tra quyền tại backend mọi endpoint.
- Không dùng URL để bypass (xem [roles-and-permissions](./shared/roles-and-permissions.md)).
- HTTPS; password hashing; secure session cookie / token.

## Acceptance

- [ ] Không truy cập resource ngoài quyền qua URL/API.
- [ ] Admin mời và thu hồi quyền thành công trong demo.
- [ ] Invitation hết hạn không accept được.
