# Demo 01 — Đăng nhập & tổ chức (F01)

**Thời lượng gợi ý:** 5–7 phút  
**Mục tiêu trình bày:** User vào hệ thống an toàn → tạo/tham gia tổ chức → mời thành viên & phân quyền theo dự án.  
**Spec:** [f01-auth-organisation.md](../features/f01-auth-organisation.md)

---

## Trước khi bắt đầu

1. Chạy app:

```bash
cd web
python -m http.server 5173
```

2. Mở http://localhost:5173 — nếu chưa đăng nhập sẽ vào `#/login`.
3. (Tuỳ chọn) Xóa session cũ để demo từ đầu: DevTools → Application → Local Storage → xóa key `sf_session`, `sf_org`, rồi refresh.

---

## Tài khoản mẫu (mock)

| Email | Mật khẩu | Vai trò | Sau login |
|-------|----------|---------|-----------|
| `admin@greenhope.vn` | `demo123` | Admin tổ chức | Workspace + Thành viên |
| `finance@greenhope.vn` | `demo123` | Finance/Ops | Workspace |
| `reviewer@greenhope.vn` | `demo123` | Reviewer | Workspace |
| `sponsor@fund.vn` | `demo123` | Nhà tài trợ | `#/sponsor` |
| _(đăng ký mới)_ | bất kỳ ≥ 6 ký tự | User mới | `#/org-setup` |

> Mọi mật khẩu demo đều chấp nhận nếu đúng email trong bảng; form đăng ký tạo session local, không gọi server.

---

## Kịch bản A — Login Admin & xem quyền (happy path)

| Bước | Hành động | Kỳ vọng | Nói với audience |
|------|-----------|---------|------------------|
| 1 | Mở `#/login` | Form email/password + nút điền nhanh demo | “Demo không có backend; session lưu localStorage.” |
| 2 | Bấm **Admin tổ chức** (quick fill) hoặc nhập `admin@greenhope.vn` / `demo123` | Form điền sẵn | — |
| 3 | Bấm **Đăng nhập** | Toast + chuyển `#/overview` (hoặc org-setup nếu chưa có org) | “Sau login vào workspace dự án.” |
| 4 | Mở sidebar → **Thành viên** (`#/members`) | Danh sách member + role | “Phân quyền theo tổ chức / dự án.” |
| 5 | Bấm **Mời thành viên** | Modal/form invite | “Mời bằng email, gắn role sẵn.” |
| 6 | Nhập email ví dụ `lan@greenhope.vn`, chọn role Finance, bấm gửi | Toast “Đã gửi lời mời (demo)” + dòng invitation pending | “Invitation có hạn; thu hồi được.” |
| 7 | Bấm **Thu hồi** trên một invitation | Dòng biến mất / trạng thái revoked | “Quyền enforce phía server ở bản thật — demo chỉ mô phỏng UI.” |

---

## Kịch bản B — User mới tạo tổ chức

| Bước | Hành động | Kỳ vọng |
|------|-----------|---------|
| 1 | Đăng xuất (avatar menu → Đăng xuất) hoặc xóa localStorage | Về `#/login` |
| 2 | Bấm **Đăng ký** → `#/register` | Form tạo tài khoản |
| 3 | Email mới (vd `moi@demo.vn`), mật khẩu `demo123`, họ tên | — |
| 4 | **Tạo tài khoản** | Vào `#/org-setup` |
| 5 | Nhập tên org (vd `Quỹ Xanh Hy Vọng`), mô tả ngắn | — |
| 6 | **Tạo tổ chức** | Lưu org, vào `#/overview`, user là Admin |

**Điểm nhấn:** Org isolation — admin org này không thấy org khác (trong demo: chỉ một org local).

---

## Kịch bản C — Nhà tài trợ vào portal

| Bước | Hành động | Kỳ vọng |
|------|-----------|---------|
| 1 | Login `sponsor@fund.vn` / `demo123` | Redirect `#/sponsor` |
| 2 | Quan sát UI read-only | Không có nút upload chứng từ / sửa ngân sách |

**Điểm nhấn:** Sponsor tách workspace; không sửa dữ liệu nội bộ (F11 sẽ demo sâu hơn).

---

## Kịch bản D — Invitation link (mock)

1. Login admin → Thành viên → copy link invite (nút **Sao chép link**).
2. Đăng xuất → mở `#/invite?token=demo-invite` (hoặc paste link).
3. Thấy tóm tắt org + role → **Chấp nhận** → login/register nếu cần → vào workspace.

---

## Checklist nghiệm thu khi demo

- [ ] Login sai mật khẩu (email đúng, pass sai) → báo lỗi, không vào app
- [ ] Login đúng → vào đúng workspace theo role
- [ ] Đăng ký mới → bắt buộc tạo org trước khi dùng overview
- [ ] Mời / thu hồi invitation hiện trên UI
- [ ] Sponsor không vào được luồng upload như finance

---

## Hạn chế của bản demo này

- Không có API/backend; không hash password thật.
- “Gửi email” chỉ toast — không gửi mail.
- Invitation token cố định / giả lập.
- Phân quyền API chưa enforce (static SPA).

---

## Route liên quan

| Route | Màn hình |
|-------|----------|
| `#/login` | Đăng nhập |
| `#/register` | Đăng ký |
| `#/org-setup` | Tạo tổ chức |
| `#/invite` | Chấp nhận lời mời |
| `#/members` | Thành viên & phân quyền |
| `#/overview` | Workspace sau login |
| `#/sponsor` | Portal sponsor |

---

## Demo tiếp theo

→ **Demo 02 — Dự án & Dashboard** (sau khi hoàn thành file hướng dẫn tương ứng).
