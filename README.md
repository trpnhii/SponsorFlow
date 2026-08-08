# SponsorFlow

Demo web — nền tảng minh bạch tài trợ, chứng từ và tác động cho dự án cộng đồng.

- Proposal: `SponsorFlow_Proposal.pdf`
- Demo app: [`web/`](./web/)

### Chạy local

```bash
cd web
python -m http.server 5173
```

Mở http://localhost:5173

### Deploy (GitHub Pages)

Deploy folder `web/` qua Actions (`.github/workflows/deploy-pages.yml`).

1. Commit + push code (gồm thư mục `web/`)
2. GitHub → **Settings** → **Pages** → **Source**: *GitHub Actions*
3. Tab **Actions** → chờ workflow *Deploy SponsorFlow* xong
4. Demo public: `https://<user>.github.io/<repo>/`

(Remote hiện tại: https://trpnhii.github.io/build-profile-2026/)
