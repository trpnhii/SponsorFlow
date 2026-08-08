/**
 * SponsorFlow Web Demo
 * Static SPA matching the product mockups (no real AI).
 */

// ---------- Icons (inline SVG) ----------
const I = {
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  chevronL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevronR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 18l6-6-6-6"/></svg>`,
  chevronD: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 9l6 6 6-6"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  files: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  meal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/><path d="M19 15l.75 2.75L22.5 18.5 19.75 19.25 19 22l-.75-2.75L15.5 18.5l2.75-.75L19 15z"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 12v6M9 15l3-3 3 3"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z"/><path d="M8 10h8M8 14h5"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  more: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  arrowLR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M8 12H2m0 0l3-3M2 12l3 3M16 12h6m0 0l-3-3m3 3l-3 3"/></svg>`,
  arrowR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  school: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>`,
  pie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>`,
  zoomOut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/></svg>`,
  pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 13h1a1.5 1.5 0 0 1 0 3h-1v2m3-5h2.5a1.5 1.5 0 0 1 0 3H14m0 0v2"/></svg>`,
};

const fmt = (n) =>
  n.toLocaleString("vi-VN") + "đ";

const LOGO_SRC = "./assets/logo.jpg";

// ---------- State ----------
const state = {
  collapsed: false,
  mobileOpen: false,
  docType: "invoice",
  selectedFile: true,
  analyzeTimer: null,
};

const NAV = [
  { id: "overview", label: "Tổng quan", icon: "grid", path: "#/overview" },
  { id: "documents", label: "Chứng từ", icon: "file", path: "#/documents" },
  { id: "budget", label: "Ngân sách", icon: "refresh", path: "#/budget" },
  { id: "activity", label: "Hoạt động", icon: "activity", path: "#/activity" },
  { id: "impact", label: "Tác động", icon: "chart", path: "#/impact" },
  { id: "reports", label: "Báo cáo", icon: "report", path: "#/reports" },
  { sep: true },
  { id: "sponsor", label: "Góc nhìn nhà tài trợ", icon: "eye", path: "#/sponsor" },
];

const BUDGET_ROWS = [
  { name: "Học liệu", icon: "book", color: "#dbeafe", ic: "#2563eb", approved: 20_000_000, spent: 18_400_000 },
  { name: "Vận chuyển", icon: "truck", color: "#ffedd5", ic: "#ea580c", approved: 10_000_000, spent: 5_200_000 },
  { name: "Suất ăn", icon: "meal", color: "#fef3c7", ic: "#ca8a04", approved: 8_000_000, spent: 4_800_000 },
  { name: "Vận hành sự kiện", icon: "calendar", color: "#f3e8ff", ic: "#9333ea", approved: 12_000_000, spent: 4_050_000 },
];

const TASKS = [
  { title: "2 chứng từ cần xem lại", desc: "Vui lòng kiểm tra và cập nhật thông tin", due: "25/05/2026", prio: "Cao", prioClass: "cao", iconBg: "#fee2e2", iconColor: "#dc2626", icon: "warn", go: "#/extract" },
  { title: "1 hóa đơn có khả năng bị trùng", desc: "Đối chiếu để xác nhận tính hợp lệ", due: "26/05/2026", prio: "Trung bình", prioClass: "tb", iconBg: "#ffedd5", iconColor: "#ea580c", icon: "copy", go: "#/duplicate" },
  { title: "Tải chứng từ tháng 05", desc: "Còn 3 chứng từ chưa được tải lên", due: "31/05/2026", prio: "Thấp", prioClass: "thap", iconBg: "#dbeafe", iconColor: "#2563eb", icon: "upload", go: "#/upload" },
  { title: "Cập nhật chi phí vận chuyển", desc: "Bổ sung chứng từ cho chi phí phát sinh", due: "28/05/2026", prio: "Trung bình", prioClass: "tb", iconBg: "#dcfce7", iconColor: "#16a34a", icon: "truck", go: "#/upload" },
  { title: "Báo cáo tiến độ tháng 05", desc: "Hoàn thiện báo cáo gửi nhà tài trợ", due: "05/06/2026", prio: "Thấp", prioClass: "thap", iconBg: "#f3e8ff", iconColor: "#9333ea", icon: "report", go: "#/reports" },
];

// ---------- Helpers ----------
function icon(name, size = 18) {
  return `<span class="icon" style="width:${size}px;height:${size}px;display:inline-flex">${I[name] || ""}</span>`;
}

function donutStyle(pct, color = "#16a34a") {
  const deg = (pct / 100) * 360;
  return `background: conic-gradient(${color} ${deg}deg, #e5e7eb 0)`;
}

function toast(msg) {
  document.querySelectorAll(".toast").forEach((t) => t.remove());
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function navigate(path) {
  location.hash = path.startsWith("#") ? path : `#${path}`;
}

function getRoute() {
  const h = location.hash.replace(/^#/, "") || "/overview";
  return h.startsWith("/") ? h.slice(1) : h;
}

function activeNavId(route) {
  if (["upload", "analyzing", "extract", "duplicate", "link-impact", "documents"].includes(route)) {
    return "documents";
  }
  return route.split("/")[0] || "overview";
}

// ---------- Layout ----------
function renderSidebar(active) {
  const navHtml = NAV.map((item) => {
    if (item.sep) return `<div class="nav-sep"></div>`;
    const isActive = item.id === active;
    return `
      <a href="${item.path}" class="nav-item ${isActive ? "active" : ""}" data-nav="${item.id}">
        ${icon(item.icon)}
        <span class="nav-label">${item.label}</span>
      </a>`;
  }).join("");

  return `
    <aside class="sidebar ${state.collapsed ? "collapsed" : ""} ${state.mobileOpen ? "open" : ""}" id="sidebar">
      <a class="brand" href="#/overview" title="SponsorFlow">
        <img class="brand-logo" src="${LOGO_SRC}" alt="SponsorFlow" width="180" height="40" />
      </a>
      <nav class="nav">${navHtml}</nav>
      <div class="sidebar-footer">
        <div class="trust-card">
          ${icon("shield", 18)}
          <div>
            <strong>Minh bạch & Tin cậy</strong>
            <span>Mọi dữ liệu được xác thực và lưu trữ an toàn.</span>
          </div>
        </div>
        <div class="support-block">
          ${icon("headset", 16)}
          <div>
            <strong>Trung tâm hỗ trợ</strong>
            support@sponsorflow.vn
          </div>
        </div>
        <button class="collapse-btn" id="btn-collapse" type="button">
          ${icon("chevronL")}
          <span class="collapse-label">Thu gọn</span>
        </button>
      </div>
    </aside>
    <div class="overlay ${state.mobileOpen ? "show" : ""}" id="overlay"></div>
  `;
}

function renderHeader(opts = {}) {
  const title = opts.title || "Tiếp sức đến trường 2026";
  const showUpload = opts.showUpload !== false;
  const primaryLabel = opts.primaryLabel || "Tải chứng từ lên";
  const primaryHref = opts.primaryHref || "#/upload";
  const primaryIcon = opts.primaryIcon || "upload";

  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" id="btn-menu" type="button" aria-label="Menu">${icon("menu")}</button>
        <button class="project-select" type="button">
          ${title}
          ${icon("chevronD", 16)}
        </button>
        <span class="badge badge-success"><span class="badge-dot"></span>Đang hoạt động</span>
      </div>
      <div class="topbar-right">
        ${
          showUpload
            ? `<a class="btn btn-primary" href="${primaryHref}">${icon(primaryIcon)}<span>${primaryLabel}</span></a>
               <a class="btn btn-outline" href="#/reports">${icon("chart")}<span>Xem báo cáo</span></a>`
            : `<a class="btn btn-primary" href="${primaryHref}">${icon(primaryIcon)}<span>${primaryLabel}</span></a>`
        }
        <button class="icon-btn" type="button" title="Trợ giúp">${icon("help")}</button>
        <button class="icon-btn" type="button" title="Thông báo">${icon("bell")}</button>
        <button class="user-menu" type="button">
          <span class="avatar">A</span>
          ${icon("chevronD", 14)}
        </button>
      </div>
    </header>
  `;
}

// ---------- Pages ----------
function pageOverview() {
  const rows = BUDGET_ROWS.map((r) => {
    const remain = r.approved - r.spent;
    const pct = Math.round((r.spent / r.approved) * 1000) / 10;
    return `
      <tr>
        <td>
          <div class="cat-cell">
            <span class="cat-icon" style="background:${r.color};color:${r.ic}">${icon(r.icon, 14)}</span>
            ${r.name}
          </div>
        </td>
        <td>${fmt(r.approved)}</td>
        <td>${fmt(r.spent)}</td>
        <td>${fmt(remain)}</td>
        <td>
          <div class="progress-cell">
            <span style="min-width:36px;font-weight:600">${pct.toString().replace(".", ",")}%</span>
            <div class="progress-bar"><i style="width:${pct}%"></i></div>
          </div>
        </td>
      </tr>`;
  }).join("");

  const tasks = TASKS.map(
    (t) => `
    <button class="task-item" type="button" data-go="${t.go}">
      <span class="task-icon" style="background:${t.iconBg};color:${t.iconColor}">${icon(t.icon, 16)}</span>
      <div class="task-body">
        <div class="task-top">
          <span class="task-title">${t.title}</span>
          <span class="prio ${t.prioClass}">${t.prio}</span>
        </div>
        <div class="task-desc">${t.desc}</div>
        <div class="task-due">Hạn: ${t.due}</div>
      </div>
    </button>`
  ).join("");

  return `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon blue">${icon("wallet", 20)}</div>
        <div>
          <div class="stat-label">Tổng ngân sách</div>
          <div class="stat-value">50.000.000đ</div>
          <div class="stat-meta">— 0% so với kế hoạch</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">${icon("cart", 20)}</div>
        <div>
          <div class="stat-label">Đã chi</div>
          <div class="stat-value">32.450.000đ</div>
          <div class="stat-meta up">↗ 64,9% so với ngân sách</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon yellow">${icon("clock", 20)}</div>
        <div>
          <div class="stat-label">Còn lại</div>
          <div class="stat-value">17.550.000đ</div>
          <div class="stat-meta warn">— 35,1% so với ngân sách</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">${icon("files", 20)}</div>
        <div>
          <div class="stat-label">Chứng từ hợp lệ</div>
          <div class="stat-value">27/30</div>
          <div class="stat-meta up">↗ 90% đã hợp lệ</div>
        </div>
      </div>
    </div>

    <div class="alert-row">
      <button class="alert-item warn" type="button" data-go="#/extract">${icon("warn", 18)} 2 chứng từ cần xem lại</button>
      <button class="alert-item danger" type="button" data-go="#/duplicate">${icon("copy", 18)} 1 hóa đơn có khả năng bị trùng</button>
      <button class="alert-item info" type="button" data-go="#/budget">${icon("clock", 18)} Ngân sách hạng mục Học liệu đã dùng 92%</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-head">
          <h3>Tổng quan ngân sách</h3>
          <button class="select-like" type="button">Hiển thị: Tất cả hạng mục ${icon("chevronD", 14)}</button>
        </div>
        <div class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Duyệt</th>
                <th>Đã chi</th>
                <th>Còn lại</th>
                <th>Mức sử dụng</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
            <tfoot>
              <tr>
                <td>Tổng cộng</td>
                <td>50.000.000đ</td>
                <td>32.450.000đ</td>
                <td>17.550.000đ</td>
                <td>
                  <div class="progress-cell">
                    <span style="min-width:36px;font-weight:600">64,9%</span>
                    <div class="progress-bar"><i style="width:64.9%"></i></div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="budget-footer">
          <div class="donut" style="${donutStyle(64.9)}"><div class="donut-inner">64,9%</div></div>
          <div class="legend">
            <div><span class="legend-dot" style="background:#16a34a"></span>Đã chi: 32.450.000đ</div>
            <div><span class="legend-dot" style="background:#eab308"></span>Còn lại: 17.550.000đ</div>
          </div>
          <span class="muted">Cập nhật lần cuối: Hôm nay, 09:30 AM</span>
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div class="flex items-center gap-8">
            <h3>Việc cần xử lý</h3>
            <span class="count-badge">5</span>
          </div>
          <a class="link-all" href="#/documents">Xem tất cả</a>
        </div>
        <div class="task-list">${tasks}</div>
      </div>
    </div>
  `;
}

function pageDocuments() {
  return `
    <h1 class="page-title">Chứng từ</h1>
    <p class="page-sub">Quản lý hóa đơn, phiếu thu và tài liệu minh chứng của dự án.</p>
    <div class="card card-pad mb-16">
      <div class="flex items-center justify-between gap-12" style="flex-wrap:wrap">
        <div class="flex gap-8" style="flex-wrap:wrap">
          <button class="select-like" type="button">Trạng thái: Tất cả ${icon("chevronD", 14)}</button>
          <button class="select-like" type="button">Hạng mục: Tất cả ${icon("chevronD", 14)}</button>
        </div>
        <a class="btn btn-primary" href="#/upload">${icon("upload")} Tải chứng từ lên</a>
      </div>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table class="data">
          <thead>
            <tr>
              <th>Tên tệp</th>
              <th>Loại</th>
              <th>Số tiền</th>
              <th>Hạng mục</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>hoa_don_hoc_lieu_thang_05.jpg</strong></td>
              <td>Hóa đơn</td>
              <td>2.450.000đ</td>
              <td>Học liệu</td>
              <td><span class="badge badge-warning">${icon("clock", 12)} Chờ phê duyệt</span></td>
              <td><a class="link-all" href="#/extract">Xem</a></td>
            </tr>
            <tr>
              <td><strong>hoa_don_abc_dup.jpg</strong></td>
              <td>Hóa đơn</td>
              <td>2.450.000đ</td>
              <td>Học liệu</td>
              <td><span class="badge badge-danger">${icon("warn", 12)} Có thể trùng</span></td>
              <td><a class="link-all" href="#/duplicate">Xem</a></td>
            </tr>
            <tr>
              <td>bien_ban_ban_giao_thang_05.pdf</td>
              <td>Biên bản</td>
              <td>—</td>
              <td>Học liệu</td>
              <td><span class="badge badge-success">${icon("check", 12)} Đã xác minh</span></td>
              <td><a class="link-all" href="#/extract">Xem</a></td>
            </tr>
            <tr>
              <td>anh_hoat_dong_lop_hoc_26_05.jpg</td>
              <td>Ảnh</td>
              <td>—</td>
              <td>Hoạt động</td>
              <td><span class="badge badge-success">${icon("check", 12)} Đã xác minh</span></td>
              <td><a class="link-all" href="#/link-impact">Xem</a></td>
            </tr>
            <tr>
              <td>danh_sach_tham_gia_dot_2.xlsx</td>
              <td>Danh sách</td>
              <td>—</td>
              <td>Tác động</td>
              <td><span class="badge badge-success">${icon("check", 12)} Đã xác minh</span></td>
              <td><a class="link-all" href="#/impact">Xem</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function pageUpload() {
  const types = [
    { id: "invoice", label: "Hóa đơn / Phiếu thu", icon: "receipt" },
    { id: "handover", label: "Biên bản bàn giao", icon: "clipboard" },
    { id: "photo", label: "Ảnh hoạt động", icon: "image" },
    { id: "list", label: "Danh sách tham gia", icon: "users" },
    { id: "other", label: "Tài liệu khác", icon: "folder" },
  ];

  return `
    <div class="two-col">
      <div>
        <h1 class="page-title">Tải chứng từ lên</h1>
        <p class="page-sub">Tải hóa đơn, phiếu thu, biên bản và tài liệu minh chứng để hệ thống xử lý.</p>

        <div class="card card-pad">
          <div class="dropzone" id="dropzone" tabindex="0">
            <div class="cloud">${I.cloud}</div>
            <strong>Kéo thả tệp vào đây hoặc chọn từ máy tính</strong>
            <p>Hỗ trợ định dạng: JPG, PNG, PDF – Tối đa 20MB/tệp.</p>
            <input type="file" id="file-input" accept=".jpg,.jpeg,.png,.pdf" hidden />
          </div>

          <div class="section-label">Chọn loại tài liệu</div>
          <div class="doc-types" id="doc-types">
            ${types
              .map(
                (t) => `
              <button type="button" class="doc-type ${state.docType === t.id ? "selected" : ""}" data-type="${t.id}">
                <span class="radio"></span>
                <span class="itype">${I[t.icon]}</span>
                <span>${t.label}</span>
              </button>`
              )
              .join("")}
          </div>

          <div class="note-box">
            <h4>${icon("info", 16)} Lưu ý trước khi tải</h4>
            <ul>
              <li>Ảnh chụp rõ nét, đủ 4 góc tờ hóa đơn</li>
              <li>Tránh loá sáng hoặc bị che khuất nội dung</li>
              <li>Ưu tiên file PDF nếu có bản scan sạch</li>
              <li>Mỗi tệp tối đa 20MB</li>
            </ul>
          </div>

          <div class="action-row">
            <button class="btn btn-primary btn-lg" id="btn-analyze" type="button" style="flex:1">
              ${icon("spark")} Phân tích bằng AI
            </button>
            <button class="btn btn-outline btn-lg" id="btn-draft" type="button">
              ${icon("save")} Lưu nháp
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="card card-pad mb-16">
          <h3 style="font-size:14px;margin-bottom:12px">Tệp đã chọn (1)</h3>
          <div class="file-card">
            <div class="file-thumb img">JPG</div>
            <div class="file-meta">
              <strong>hoa_don_hoc_lieu_thang_05.jpg</strong>
              <span>2.4 MB</span>
              <div class="file-status">${icon("check", 12)} Sẵn sàng phân tích</div>
            </div>
            <button class="icon-btn" type="button">${icon("more", 16)}</button>
          </div>
        </div>

        <div class="card card-pad">
          <div class="flex items-center justify-between mb-12">
            <h3 style="font-size:14px">Chứng từ gần đây</h3>
            <a class="link-all" href="#/documents">Xem tất cả</a>
          </div>
          <div class="recent-list">
            <a class="file-card" href="#/extract">
              <div class="file-thumb" style="background:#fee2e2;color:#dc2626">PDF</div>
              <div class="file-meta">
                <strong>bien_ban_ban_giao_thang_05.pdf</strong>
                <span>Đã xác minh · 1.1 MB</span>
              </div>
              ${icon("chevronR", 16)}
            </a>
            <a class="file-card" href="#/extract">
              <div class="file-thumb img">IMG</div>
              <div class="file-meta">
                <strong>anh_hoat_dong_lop_hoc_26_05.jpg</strong>
                <span>Đã xác minh · 3.2 MB</span>
              </div>
              ${icon("chevronR", 16)}
            </a>
            <a class="file-card" href="#/documents">
              <div class="file-thumb" style="background:#dcfce7;color:#16a34a">XLS</div>
              <div class="file-meta">
                <strong>danh_sach_tham_gia_dot_2.xlsx</strong>
                <span>Đã xác minh · 0.4 MB</span>
              </div>
              ${icon("chevronR", 16)}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function pageAnalyzing() {
  return `
    <div class="analyze-wrap">
      <div class="card card-pad">
        <h1 class="page-title" style="font-size:18px">SponsorFlow AI đang phân tích chứng từ...</h1>
        <div class="file-card" style="margin:14px 0;background:#f9fafb">
          <div class="file-thumb img">JPG</div>
          <div class="file-meta">
            <strong>hoa_don_hoc_lieu_thang_05.jpg</strong>
            <span>Hóa đơn / Phiếu thu</span>
          </div>
        </div>

        <div class="step-list" id="analyze-steps">
          <div class="step done">
            <div class="step-dot">${icon("check", 14)}</div>
            <div class="step-body"><strong>Đã nhận diện tệp</strong><span>09:28:15 AM</span></div>
          </div>
          <div class="step done">
            <div class="step-dot">${icon("check", 14)}</div>
            <div class="step-body"><strong>OCR hoàn tất</strong><span>09:28:16 AM</span></div>
          </div>
          <div class="step done">
            <div class="step-dot">${icon("check", 14)}</div>
            <div class="step-body"><strong>Đã trích xuất dữ liệu</strong><span>09:28:18 AM</span></div>
          </div>
          <div class="step done">
            <div class="step-dot">${icon("check", 14)}</div>
            <div class="step-body"><strong>Đã gợi ý hạng mục chi</strong><span>09:28:20 AM</span></div>
          </div>
          <div class="step active" id="step-active">
            <div class="step-dot"><span class="spinner"></span></div>
            <div class="step-body"><strong>Đang kiểm tra trùng lặp và đối chiếu ngân sách</strong><span>Đang xử lý…</span></div>
          </div>
        </div>

        <div class="progress-wide">
          <div class="bar"><i id="analyze-bar" style="width:82%"></i></div>
          <div class="pct" id="analyze-pct">82%</div>
        </div>

        <button class="btn btn-outline" id="btn-cancel-analyze" type="button" style="margin-top:8px">
          ${icon("x")} Hủy xử lý
        </button>
      </div>

      <div class="card card-pad">
        <div class="flex items-center gap-8 mb-12">
          ${icon("file", 16)}
          <h3 style="font-size:14px">Tóm tắt</h3>
        </div>
        <div class="kv-list">
          <div class="kv-row"><span class="k">Loại tài liệu</span><span class="v">Hóa đơn / Phiếu thu</span></div>
          <div class="kv-row"><span class="k">Nguồn tải lên</span><span class="v">Thành viên dự án</span></div>
          <div class="kv-row"><span class="k">Thời gian tải</span><span class="v">09:28 AM</span></div>
        </div>
        <div class="info-soft">
          ${icon("spark", 16)}
          <span>Hệ thống đang OCR, trích xuất và đối chiếu chứng từ với ngân sách dự án. (Demo – không gọi AI thật.)</span>
        </div>
      </div>
    </div>
  `;
}

function fakeInvoice() {
  return `
    <div class="fake-invoice">
      <h4>ABC Education Supplies</h4>
      <div class="inv-sub">123 Nguyễn Văn Cừ, Q.5, TP.HCM · MST: 0312345678</div>
      <div class="flex justify-between text-sm">
        <div><strong>HÓA ĐƠN BÁN HÀNG</strong></div>
        <div style="text-align:right;color:var(--text-3)">
          Số: HD-2026-0815<br/>Ngày: 05/08/2026
        </div>
      </div>
      <table>
        <thead><tr><th>Mô tả</th><th>SL</th><th>Thành tiền</th></tr></thead>
        <tbody>
          <tr><td>Bộ dụng cụ học tập (cấp 1)</td><td>80</td><td>1.600.000</td></tr>
          <tr><td>Vở ô li + bút chì set</td><td>40</td><td>600.000</td></tr>
          <tr><td>Túi đựng dụng cụ</td><td>120</td><td>250.000</td></tr>
        </tbody>
      </table>
      <div class="total">Tổng: 2.450.000đ</div>
      <div style="margin-top:14px;font-size:11px;color:var(--text-4)">Cảm ơn quý khách!</div>
    </div>
  `;
}

function pageExtract() {
  return `
    <div class="extract-grid">
      <div class="card card-pad">
        <h3 style="font-size:15px;margin-bottom:12px">Xem trước chứng từ</h3>
        <div class="invoice-preview">${fakeInvoice()}</div>
        <div class="viewer-tools">
          <button class="icon-btn" type="button">${icon("zoomOut")}</button>
          <span style="font-size:12.5px;font-weight:600;min-width:40px;text-align:center">100%</span>
          <button class="icon-btn" type="button">${icon("zoomIn")}</button>
          <button class="btn btn-outline" type="button" style="margin-left:8px">${icon("image")} Phóng to</button>
          <button class="btn btn-outline" type="button">${icon("download")} Tải xuống</button>
        </div>
      </div>

      <div class="card card-pad">
        <div class="flex items-center justify-between mb-12">
          <h3 style="font-size:15px">Kết quả trích xuất & kiểm tra</h3>
          <span class="badge badge-warning">${icon("clock", 12)} Chờ phê duyệt</span>
        </div>

        <div class="section-label" style="margin-top:0">Thông tin được AI trích xuất</div>
        <div class="kv-list">
          <div class="kv-row"><span class="k">Nhà cung cấp</span><span class="v">ABC Education Supplies</span></div>
          <div class="kv-row"><span class="k">Ngày hóa đơn</span><span class="v">05/08/2026</span></div>
          <div class="kv-row"><span class="k">Mã hóa đơn</span><span class="v">HD-2026-0815</span></div>
          <div class="kv-row"><span class="k">Số tiền</span><span class="v">2.450.000đ</span></div>
          <div class="kv-row"><span class="k">Hạng mục gợi ý</span><span class="v"><span class="tag">Học liệu</span></span></div>
          <div class="kv-row">
            <span class="k">Độ tin cậy AI</span>
            <span class="v" style="min-width:120px">
              <div class="progress-cell">
                <span>96%</span>
                <div class="progress-bar"><i style="width:96%"></i></div>
              </div>
            </span>
          </div>
        </div>

        <div class="section-label">Kết quả kiểm tra</div>
        <div class="check-list">
          <div class="check-item ok">${icon("check", 16)} Đủ trường thông tin bắt buộc</div>
          <div class="check-item ok">${icon("check", 16)} Không phát hiện trùng lặp chính xác</div>
          <div class="check-item warn">${icon("warn", 16)} Ngân sách hạng mục Học liệu sẽ đạt 92% sau khi duyệt</div>
        </div>

        <div class="section-label">Liên kết với hoạt động</div>
        <select class="form-control">
          <option>Phát bộ dụng cụ học tập – An Giang</option>
          <option>Trao suất ăn tại trường TH A</option>
          <option>Vận chuyển học liệu đợt 2</option>
        </select>

        <div class="action-footer">
          <button class="btn btn-primary" id="btn-approve" type="button">${icon("check")} Duyệt khoản chi</button>
          <button class="btn btn-outline" id="btn-edit" type="button">${icon("pencil")} Chỉnh sửa thông tin</button>
          <button class="btn btn-danger-outline" id="btn-reject" type="button">${icon("x")} Từ chối</button>
        </div>
      </div>
    </div>
  `;
}

function pageDuplicate() {
  const fields = `
    <div class="kv-list">
      <div class="kv-row"><span class="k">Nhà cung cấp</span><span class="v">ABC Education Supplies</span></div>
      <div class="kv-row"><span class="k">Mã hóa đơn</span><span class="v">HD-2026-0815</span></div>
      <div class="kv-row"><span class="k">Ngày</span><span class="v">05/08/2026</span></div>
      <div class="kv-row"><span class="k">Số tiền</span><span class="v">2.450.000đ</span></div>
    </div>`;

  return `
    <a class="back-link" href="#/documents">${icon("chevronL")} Quay lại danh sách chứng từ</a>

    <div class="warning-banner">
      ${icon("warn", 22)}
      <div>
        <h3>Cảnh báo: Có khả năng chứng từ bị trùng</h3>
        <p>SponsorFlow phát hiện 2 chứng từ có thông tin gần như giống nhau. Vui lòng xác nhận trước khi ghi nhận chi phí.</p>
      </div>
    </div>

    <div class="dup-layout">
      <div>
        <div class="similarity"><strong>Độ tương đồng: 98%</strong></div>
        <div class="compare">
          <div class="compare-card">
            <div class="head new">${icon("upload", 16)} Chứng từ vừa tải lên</div>
            <div class="body">${fields}</div>
          </div>
          <div class="compare-arrow">${icon("arrowLR", 22)}</div>
          <div class="compare-card">
            <div class="head old">${icon("file", 16)} Chứng từ đã tồn tại trong hệ thống</div>
            <div class="body">${fields}</div>
          </div>
        </div>

        <div class="dup-actions">
          <button class="dup-action primary" id="btn-mark-dup" type="button">
            <strong>Đánh dấu là trùng</strong>
            <span>Không ghi nhận chi phí mới</span>
          </button>
          <button class="dup-action" id="btn-keep-both" type="button">
            <strong>Giữ cả hai</strong>
            <span>Lưu và xử lý sau</span>
          </button>
          <button class="dup-action" id="btn-view-detail" type="button">
            <strong>Xem chi tiết</strong>
            <span>So sánh chi tiết thông tin</span>
          </button>
        </div>

        <div class="tip-bar">
          <strong>Mẹo:</strong> Bạn có thể xem chi tiết để so sánh đầy đủ các trường thông tin và đính kèm trước khi đưa ra quyết định.
        </div>
      </div>

      <div class="card card-pad">
        <div class="flex items-center gap-8 mb-12">
          ${icon("target", 16)}
          <h3 style="font-size:14px">Tiêu chí phát hiện</h3>
        </div>
        <div class="criteria-item check-item ok">${icon("check", 16)} <div><strong>Trùng mã hóa đơn</strong><br/><span class="text-muted">HD-2026-0815</span></div></div>
        <div class="criteria-item check-item ok">${icon("check", 16)} <div><strong>Số tiền giống nhau</strong><br/><span class="text-muted">2.450.000đ</span></div></div>
        <div class="criteria-item check-item ok">${icon("check", 16)} <div><strong>Ngày gần trùng khớp</strong><br/><span class="text-muted">05/08/2026 (match 100%)</span></div></div>
        <div class="info-soft" style="margin-top:12px">
          ${icon("info", 16)}
          <span>Hệ thống có thể sai. Hãy kiểm tra kỹ trước khi đánh dấu trùng.</span>
        </div>
      </div>
    </div>
  `;
}

function pageLinkImpact() {
  return `
    <div class="two-col">
      <div>
        <h1 class="page-title">Liên kết khoản chi với hoạt động và tác động</h1>
        <p class="page-sub">Gắn chứng từ đã xác minh với hoạt động thực địa và chỉ số tác động dự kiến.</p>

        <div class="card expense-summary">
          <span class="stat-icon blue">${icon("book", 20)}</span>
          <div style="flex:1">
            <div class="amt">2.450.000đ</div>
            <div class="text-muted">Học liệu · Nhà cung cấp: ABC Education Supplies</div>
          </div>
          <span class="badge badge-success">${icon("check", 12)} Trạng thái: Đã xác minh</span>
        </div>

        <div class="form-grid">
          <div class="card card-pad">
            <h3 style="font-size:14px;margin-bottom:12px">Thông tin hoạt động</h3>
            <div class="form-group">
              <label>Hoạt động liên quan</label>
              <select class="form-control">
                <option>Phát bộ dụng cụ học tập – An Giang</option>
                <option>Trao suất ăn học sinh</option>
              </select>
            </div>
            <div class="form-group">
              <label>Ngày hoạt động</label>
              <input class="form-control" type="text" value="25/05/2026" />
            </div>
            <div class="form-group">
              <label>Địa điểm</label>
              <input class="form-control" type="text" value="Trường Tiểu học Vĩnh Xương, TX. Tân Châu, An Giang" />
            </div>
            <div class="form-group">
              <label>Mô tả ngắn</label>
              <textarea class="form-control" id="desc-act">Trao 120 bộ dụng cụ học tập cho học sinh tại 3 trường tiểu học trên địa bàn TX. Tân Châu.</textarea>
              <div class="char-count" id="desc-act-count">81/300</div>
            </div>
          </div>

          <div class="card card-pad">
            <h3 style="font-size:14px;margin-bottom:12px">Thông tin tác động</h3>
            <div class="form-group">
              <label>Số người tham gia</label>
              <input class="form-control" type="text" value="120 người" />
            </div>
            <div class="form-group">
              <label>Số người hưởng lợi</label>
              <input class="form-control" type="text" value="120 người" />
            </div>
            <div class="form-group">
              <label>Kết quả đầu ra</label>
              <textarea class="form-control" id="desc-out">120 bộ dụng cụ học tập, 3 trường được hỗ trợ.</textarea>
              <div class="char-count" id="desc-out-count">42/300</div>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <div class="flex items-center justify-between mb-12">
            <h3 style="font-size:14px">Minh chứng hoạt động</h3>
            <button class="btn btn-outline" type="button" id="btn-upload-more">${icon("upload")} Upload thêm</button>
          </div>
          <div class="evidence-grid">
            <div class="evidence-item photo1">Ảnh 1<span class="x">×</span></div>
            <div class="evidence-item photo2">Ảnh 2<span class="x">×</span></div>
            <div class="evidence-item photo3">Ảnh 3<span class="x">×</span></div>
            <div class="evidence-item" style="flex-direction:column;gap:4px">${icon("pdf", 20)}<span style="font-size:10px">bien_ban…</span><span class="x">×</span></div>
          </div>

          <div class="flow-track">
            <div class="flow-step"><span class="fi">${icon("wallet", 16)}</span>Khoản chi</div>
            <div class="flow-line"></div>
            <div class="flow-step"><span class="fi">${icon("calendar", 16)}</span>Hoạt động</div>
            <div class="flow-line"></div>
            <div class="flow-step"><span class="fi">${icon("file", 16)}</span>Minh chứng</div>
            <div class="flow-line"></div>
            <div class="flow-step"><span class="fi">${icon("users", 16)}</span>Tác động</div>
          </div>
        </div>

        <div class="bottom-bar">
          <a class="btn btn-outline" href="#/extract">${icon("chevronL")} Quay lại</a>
          <button class="btn btn-primary btn-lg" id="btn-save-link" type="button">${icon("check")} Lưu liên kết tác động</button>
        </div>
      </div>

      <div class="card card-pad">
        <h3 style="font-size:14px;margin-bottom:8px">Tóm tắt tác động dự kiến</h3>
        <div class="impact-stat">
          <span class="stat-icon green">${icon("users", 16)}</span>
          <div><div class="num">120</div><div class="text-muted">Số người tham gia</div></div>
        </div>
        <div class="impact-stat">
          <span class="stat-icon orange">${icon("users", 16)}</span>
          <div><div class="num">120</div><div class="text-muted">Số người hưởng lợi</div></div>
        </div>
        <div class="impact-stat">
          <span class="stat-icon blue">${icon("book", 16)}</span>
          <div><div class="num">120 bộ</div><div class="text-muted">Kết quả đầu ra</div></div>
        </div>
        <div class="impact-stat">
          <span class="stat-icon purple">${icon("school", 16)}</span>
          <div><div class="num">3 trường</div><div class="text-muted">Được hỗ trợ</div></div>
        </div>
        <div class="section-label">${icon("target", 14)} Tác động kỳ vọng</div>
        <ul style="margin-left:18px;font-size:13px;color:var(--text-2);line-height:1.6">
          <li>Hỗ trợ học sinh có hoàn cảnh khó khăn tiếp cận đủ dụng cụ học tập</li>
          <li>Giúp các em tự tin hơn khi bắt đầu năm học mới</li>
          <li>Minh bạch chi phí – nhà tài trợ theo dõi được đầu ra</li>
        </ul>
        <div class="info-soft">
          ${icon("info", 16)}
          Thông tin này sẽ hiển thị trên báo cáo gửi nhà tài trợ.
        </div>
      </div>
    </div>
  `;
}

function pageBudget() {
  const rows = BUDGET_ROWS.map((r) => {
    const remain = r.approved - r.spent;
    const pct = Math.round((r.spent / r.approved) * 1000) / 10;
    return `
      <tr>
        <td><div class="cat-cell"><span class="cat-icon" style="background:${r.color};color:${r.ic}">${icon(r.icon, 14)}</span>${r.name}</div></td>
        <td>${fmt(r.approved)}</td>
        <td>${fmt(r.spent)}</td>
        <td>${fmt(remain)}</td>
        <td><div class="progress-cell"><span style="min-width:36px;font-weight:600">${String(pct).replace(".", ",")}%</span><div class="progress-bar ${pct >= 90 ? "warn" : ""}"><i style="width:${pct}%"></i></div></div></td>
      </tr>`;
  }).join("");

  return `
    <h1 class="page-title">Ngân sách</h1>
    <p class="page-sub">Theo dõi phân bổ và mức sử dụng ngân sách theo từng hạng mục.</p>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card"><div class="stat-icon blue">${icon("wallet", 20)}</div><div><div class="stat-label">Tổng duyệt</div><div class="stat-value">50.000.000đ</div></div></div>
      <div class="stat-card"><div class="stat-icon green">${icon("cart", 20)}</div><div><div class="stat-label">Đã chi</div><div class="stat-value">32.450.000đ</div></div></div>
      <div class="stat-card"><div class="stat-icon yellow">${icon("clock", 20)}</div><div><div class="stat-label">Còn lại</div><div class="stat-value">17.550.000đ</div></div></div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Chi tiết hạng mục</h3><button class="select-like" type="button">Tất cả hạng mục ${icon("chevronD", 14)}</button></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Hạng mục</th><th>Duyệt</th><th>Đã chi</th><th>Còn lại</th><th>Mức sử dụng</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function pageActivity() {
  const acts = [
    { title: "Phát bộ dụng cụ học tập – An Giang", date: "25/05/2026", place: "TX. Tân Châu, An Giang", status: "Hoàn thành", people: 120 },
    { title: "Vận chuyển học liệu đợt 2", date: "24/05/2026", place: "Kho → 3 trường", status: "Hoàn thành", people: 8 },
    { title: "Tập huấn ghi nhận chứng từ", date: "20/05/2026", place: "Online", status: "Hoàn thành", people: 15 },
  ];
  return `
    <h1 class="page-title">Hoạt động</h1>
    <p class="page-sub">Các hoạt động đã và đang triển khai trong dự án.</p>
    <div class="card">
      ${acts
        .map(
          (a) => `
        <div class="task-item" style="cursor:default">
          <span class="task-icon" style="background:#dcfce7;color:#16a34a">${icon("activity", 16)}</span>
          <div class="task-body">
            <div class="task-top">
              <span class="task-title">${a.title}</span>
              <span class="badge badge-success">${a.status}</span>
            </div>
            <div class="task-desc">${a.place} · ${a.people} người tham gia</div>
            <div class="task-due">Ngày: ${a.date}</div>
          </div>
          <a class="link-all" href="#/link-impact">Liên kết</a>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function pageImpact() {
  return `
    <h1 class="page-title">Tác động</h1>
    <p class="page-sub">Chỉ số đầu ra và hiệu quả xã hội của dự án.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon green">${icon("users", 20)}</div><div><div class="stat-label">Người hưởng lợi</div><div class="stat-value">120</div><div class="stat-meta">Học sinh</div></div></div>
      <div class="stat-card"><div class="stat-icon blue">${icon("school", 20)}</div><div><div class="stat-label">Trường được hỗ trợ</div><div class="stat-value">3</div><div class="stat-meta">An Giang</div></div></div>
      <div class="stat-card"><div class="stat-icon purple">${icon("book", 20)}</div><div><div class="stat-label">Bộ dụng cụ</div><div class="stat-value">120</div><div class="stat-meta">Đã trao</div></div></div>
      <div class="stat-card"><div class="stat-icon orange">${icon("activity", 20)}</div><div><div class="stat-label">Hoạt động</div><div class="stat-value">3</div><div class="stat-meta">Đã triển khai</div></div></div>
    </div>
    <div class="card card-pad">
      <h3 style="margin-bottom:12px">Chuỗi giá trị</h3>
      <div class="value-chain" style="padding:8px 0">
        <div class="chain-node">
          <div class="ci" style="background:#dbeafe;color:#2563eb">${icon("book", 18)}</div>
          <strong>18.400.000đ</strong><span>Học liệu đã chi</span>
        </div>
        <div class="chain-arrow">${icon("arrowR", 20)}</div>
        <div class="chain-node">
          <div class="ci" style="background:#ffedd5;color:#ea580c">${icon("book", 18)}</div>
          <strong>120 bộ</strong><span>Dụng cụ học tập</span>
        </div>
        <div class="chain-arrow">${icon("arrowR", 20)}</div>
        <div class="chain-node">
          <div class="ci" style="background:#dcfce7;color:#16a34a">${icon("users", 18)}</div>
          <strong>120 học sinh</strong><span>Được hỗ trợ</span>
        </div>
      </div>
    </div>
  `;
}

function pageSponsor() {
  return `
    <h1 class="page-title">Bảng điều khiển dành cho nhà tài trợ</h1>
    <p class="page-sub">Tổng quan minh bạch từ tài trợ → chi tiêu → hoạt động → tác động.</p>

    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">${icon("wallet", 20)}</div><div><div class="stat-label">Tổng tài trợ</div><div class="stat-value">50.000.000đ</div><div class="stat-meta up">100% đã cam kết</div></div></div>
      <div class="stat-card"><div class="stat-icon green">${icon("pie", 20)}</div><div><div class="stat-label">Đã sử dụng</div><div class="stat-value">32.450.000đ</div><div class="stat-meta up">64,9% tổng tài trợ</div></div></div>
      <div class="stat-card"><div class="stat-icon purple">${icon("users", 20)}</div><div><div class="stat-label">Người hưởng lợi</div><div class="stat-value">120</div><div class="stat-meta">Học sinh</div></div></div>
      <div class="stat-card"><div class="stat-icon orange">${icon("calendar", 20)}</div><div><div class="stat-label">Hoạt động đã triển khai</div><div class="stat-value">3</div><div class="stat-meta">hoạt động</div></div></div>
    </div>

    <div class="card mb-16">
      <div class="card-head"><h3>Chuỗi giá trị từ tài trợ đến tác động</h3></div>
      <div class="value-chain">
        <div class="chain-node">
          <div class="ci" style="background:#dbeafe;color:#2563eb">${icon("book", 18)}</div>
          <strong>18.400.000đ</strong><span>Học liệu</span>
        </div>
        <div class="chain-arrow">${icon("arrowR", 22)}</div>
        <div class="chain-node">
          <div class="ci" style="background:#ffedd5;color:#ea580c">${icon("book", 18)}</div>
          <strong>120 bộ dụng cụ học tập</strong><span>Kết quả đầu ra</span>
        </div>
        <div class="chain-arrow">${icon("arrowR", 22)}</div>
        <div class="chain-node">
          <div class="ci" style="background:#dcfce7;color:#16a34a">${icon("users", 18)}</div>
          <strong>120 học sinh được hỗ trợ</strong><span>Tác động</span>
        </div>
      </div>
    </div>

    <div class="split-2">
      <div class="card card-pad">
        <h3 style="font-size:14px;margin-bottom:14px">Tiến độ giải ngân</h3>
        <div class="flex items-center gap-12 mb-16">
          <div class="donut" style="width:72px;height:72px;${donutStyle(64.9)}"><div class="donut-inner" style="inset:10px;font-size:13px">64,9%</div></div>
          <div class="legend">
            <div><span class="legend-dot" style="background:#16a34a"></span>Đã sử dụng: 32.450.000đ</div>
            <div><span class="legend-dot" style="background:#e5e7eb"></span>Tổng tài trợ: 50.000.000đ</div>
          </div>
        </div>
        <div class="progress-bar" style="height:8px"><i style="width:64.9%"></i></div>
        <div class="muted" style="margin:10px 0 0;margin-left:0">Cập nhật lần cuối: Hôm nay, 09:30 AM</div>
      </div>
      <div class="card card-pad">
        <h3 style="font-size:14px;margin-bottom:14px">Kết quả nổi bật</h3>
        <div class="highlight-list">
          <div class="highlight-item"><span style="color:#16a34a">${icon("check", 16)}</span><div><strong>3 trường được hỗ trợ</strong><div class="text-muted">Tiểu học A, THCS B, THCS C</div></div></div>
          <div class="highlight-item"><span style="color:#ea580c">${icon("check", 16)}</span><div><strong>120 học sinh nhận dụng cụ</strong><div class="text-muted">Bộ dụng cụ học tập đầy đủ</div></div></div>
          <div class="highlight-item"><span style="color:#9333ea">${icon("check", 16)}</span><div><strong>27/30 chứng từ đã xác minh</strong><div class="text-muted">90% đã hợp lệ</div></div></div>
        </div>
      </div>
    </div>

    <div class="split-2" style="margin-top:16px">
      <div class="card card-pad">
        <h3 style="font-size:14px;margin-bottom:12px">Minh chứng gần đây</h3>
        <div class="evidence-gallery">
          <div class="gallery-card">
            <div class="thumb" style="background:linear-gradient(145deg,#4ade80,#16a34a)">Trao tặng dụng cụ</div>
            <div class="meta"><strong>Trao tặng dụng cụ tại Trường THCS B</strong><br/><span>26/05/2026</span></div>
          </div>
          <div class="gallery-card">
            <div class="thumb" style="background:linear-gradient(145deg,#fbbf24,#d97706)">Học liệu</div>
            <div class="meta"><strong>Học liệu đã được mua</strong><br/><span>25/05/2026</span></div>
          </div>
          <div class="gallery-card">
            <div class="thumb" style="background:linear-gradient(145deg,#fca5a5,#ef4444);align-items:center;justify-content:center">${icon("pdf", 28)}</div>
            <div class="meta"><strong>Biên bản bàn giao dụng cụ</strong><br/><span>24/05/2026</span></div>
          </div>
        </div>
      </div>
      <div class="card card-pad">
        <h3 style="font-size:14px;margin-bottom:12px">Thao tác nhanh</h3>
        <div class="quick-links">
          <a class="quick-link" href="#/impact">
            ${icon("image", 18)}
            <div style="flex:1"><strong>Xem minh chứng</strong><span>Xem tất cả hình ảnh, video và tài liệu</span></div>
            ${icon("chevronR", 16)}
          </a>
          <a class="quick-link" href="#/reports">
            ${icon("report", 18)}
            <div style="flex:1"><strong>Xem báo cáo chi tiết</strong><span>Xem báo cáo tài chính và tác động đầy đủ</span></div>
            ${icon("chevronR", 16)}
          </a>
        </div>
      </div>
    </div>
  `;
}

function pageReports() {
  const rows = BUDGET_ROWS.map((r) => {
    const pct = Math.round((r.spent / r.approved) * 1000) / 10;
    return `
      <tr>
        <td>${r.name}</td>
        <td>${fmt(r.approved)}</td>
        <td>${fmt(r.spent)}</td>
        <td>
          <div class="progress-cell">
            <span style="min-width:36px;font-weight:600">${String(pct).replace(".", ",")}%</span>
            <div class="progress-bar"><i style="width:${pct}%"></i></div>
          </div>
        </td>
      </tr>`;
  }).join("");

  return `
    <div class="two-col">
      <div>
        <h1 class="page-title">Báo cáo tự động cho nhà tài trợ</h1>
        <p class="page-sub">Báo cáo tổng hợp tài chính, hoạt động và tác động — sẵn sàng xuất PDF.</p>

        <div class="card card-pad mb-16">
          <div class="flex gap-12 items-center">
            <span class="stat-icon" style="background:#fee2e2;color:#dc2626">${icon("pdf", 20)}</span>
            <div style="flex:1">
              <h3 style="font-size:15px">Báo cáo dự án Tiếp sức đến trường 2026</h3>
              <div class="report-meta">
                <span>Nhà tài trợ: <strong>ABC Foundation</strong></span>
                <span>Thời gian: 25/05/2026 – 31/05/2026</span>
                <span class="badge badge-success">Trạng thái: Đã gửi báo cáo</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card card-pad mb-16">
          <h3 style="font-size:14px;margin-bottom:12px">Tóm tắt tài chính</h3>
          <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin:0">
            <div class="stat-card" style="box-shadow:none"><div class="stat-icon blue">${icon("wallet", 18)}</div><div><div class="stat-label">Tổng ngân sách</div><div class="stat-value" style="font-size:16px">50.000.000đ</div></div></div>
            <div class="stat-card" style="box-shadow:none"><div class="stat-icon green">${icon("cart", 18)}</div><div><div class="stat-label">Tổng chi</div><div class="stat-value" style="font-size:16px">32.450.000đ</div></div></div>
            <div class="stat-card" style="box-shadow:none">
              <div class="donut" style="width:48px;height:48px;${donutStyle(64.9)}"><div class="donut-inner" style="inset:7px;font-size:10px">64,9%</div></div>
              <div><div class="stat-label">Tỷ lệ sử dụng</div><div class="stat-value" style="font-size:16px">64,9%</div></div>
            </div>
          </div>
        </div>

        <div class="card card-pad mb-16">
          <h3 style="font-size:14px;margin-bottom:8px">Hoạt động đã triển khai</h3>
          <p class="text-sm text-muted">
            Dự án đã tổ chức trao 120 bộ dụng cụ học tập tại 3 trường trên địa bàn TX. Tân Châu, An Giang;
            hoàn tất vận chuyển học liệu và lưu đầy đủ biên bản bàn giao cùng chứng từ chi tiêu.
          </p>
        </div>

        <div class="card mb-16">
          <div class="card-head"><h3>Tổng hợp chi phí theo hạng mục</h3></div>
          <div class="table-wrap">
            <table class="data">
              <thead><tr><th>Hạng mục</th><th>Ngân sách</th><th>Chi thực tế</th><th>Tỷ lệ sử dụng</th></tr></thead>
              <tbody>${rows}</tbody>
              <tfoot>
                <tr>
                  <td>Tổng cộng</td>
                  <td>50.000.000đ</td>
                  <td>32.450.000đ</td>
                  <td><div class="progress-cell"><span style="font-weight:600">64,9%</span><div class="progress-bar"><i style="width:64.9%"></i></div></div></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="card card-pad mb-16">
          <h3 style="font-size:14px;margin-bottom:12px">Kết quả và tác động</h3>
          <div class="flex gap-12" style="flex-wrap:wrap">
            <div class="stat-card" style="flex:1;min-width:180px">
              <div class="stat-icon green">${icon("users", 18)}</div>
              <div><div class="stat-value" style="font-size:16px">120</div><div class="stat-label">Học sinh được hỗ trợ</div></div>
            </div>
            <div class="stat-card" style="flex:1;min-width:180px">
              <div class="stat-icon blue">${icon("school", 18)}</div>
              <div><div class="stat-value" style="font-size:16px">3</div><div class="stat-label">Trường được tiếp cận</div></div>
            </div>
          </div>
        </div>

        <div class="card card-pad">
          <h3 style="font-size:14px;margin-bottom:8px">Minh chứng đính kèm</h3>
          <p class="text-sm text-muted mb-12">27 chứng từ đã xác minh</p>
          <div class="evidence-gallery">
            <div class="evidence-item photo1" style="width:90px;height:70px">HĐ 1</div>
            <div class="evidence-item photo2" style="width:90px;height:70px">Ảnh</div>
            <div class="evidence-item photo3" style="width:90px;height:70px">HĐ 2</div>
            <div class="evidence-item" style="width:90px;height:70px;background:#dcfce7;color:#15803d;font-weight:700">+23</div>
          </div>
        </div>
      </div>

      <div class="report-side">
        <div class="card verify-big">
          <div style="color:#16a34a;margin-bottom:8px">${icon("shield", 32)}</div>
          <div class="pct">90%</div>
          <div class="text-muted">chứng từ đã xác minh</div>
        </div>
        <button class="btn btn-danger-outline btn-block" id="btn-export-pdf" type="button">${icon("pdf")} Xuất PDF</button>
        <button class="btn btn-outline btn-block" id="btn-share" type="button">${icon("link")} Chia sẻ liên kết</button>
        <button class="btn btn-outline btn-block" id="btn-dl-ev" type="button">${icon("download")} Tải minh chứng</button>
        <div class="info-soft">Báo cáo được tạo tự động từ dữ liệu đã xác minh trên SponsorFlow.</div>
        <div class="info-soft" style="background:#f0fdf4;color:#166534;border:1px solid #bbf7d0">
          ${icon("shield", 16)} Dữ liệu được mã hóa và lưu trữ an toàn.
        </div>
      </div>
    </div>
  `;
}

// ---------- Router & mount ----------
const PAGES = {
  overview: { render: pageOverview, header: {} },
  documents: { render: pageDocuments, header: {} },
  upload: { render: pageUpload, header: {} },
  analyzing: { render: pageAnalyzing, header: { showUpload: false, primaryLabel: "Xem báo cáo", primaryHref: "#/reports", primaryIcon: "chart" } },
  extract: {
    render: pageExtract,
    header: { title: "Kết quả trích xuất & kiểm tra" },
  },
  duplicate: { render: pageDuplicate, header: {} },
  "link-impact": { render: pageLinkImpact, header: {} },
  budget: { render: pageBudget, header: {} },
  activity: { render: pageActivity, header: {} },
  impact: { render: pageImpact, header: {} },
  reports: { render: pageReports, header: {} },
  sponsor: {
    render: pageSponsor,
    header: {
      primaryLabel: "Tải báo cáo PDF",
      primaryHref: "#/reports",
      primaryIcon: "download",
      showUpload: false,
    },
  },
};

function bindPageEvents(route) {
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => navigate(el.getAttribute("data-go")));
  });

  if (route === "upload") {
    const dz = document.getElementById("dropzone");
    const fi = document.getElementById("file-input");
    dz?.addEventListener("click", () => fi?.click());
    fi?.addEventListener("change", () => {
      if (fi.files?.length) toast(`Đã chọn: ${fi.files[0].name}`);
    });
    ["dragenter", "dragover"].forEach((ev) =>
      dz?.addEventListener(ev, (e) => {
        e.preventDefault();
        dz.classList.add("dragover");
      })
    );
    ["dragleave", "drop"].forEach((ev) =>
      dz?.addEventListener(ev, (e) => {
        e.preventDefault();
        dz.classList.remove("dragover");
        if (ev === "drop" && e.dataTransfer?.files?.length) {
          toast(`Đã chọn: ${e.dataTransfer.files[0].name}`);
        }
      })
    );
    document.getElementById("doc-types")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-type]");
      if (!btn) return;
      state.docType = btn.getAttribute("data-type");
      render();
    });
    document.getElementById("btn-analyze")?.addEventListener("click", () => {
      navigate("#/analyzing");
    });
    document.getElementById("btn-draft")?.addEventListener("click", () => toast("Đã lưu nháp (demo)"));
  }

  if (route === "analyzing") {
    clearTimeout(state.analyzeTimer);
    let p = 82;
    const bar = document.getElementById("analyze-bar");
    const pct = document.getElementById("analyze-pct");
    const tick = () => {
      p = Math.min(100, p + 6);
      if (bar) bar.style.width = p + "%";
      if (pct) pct.textContent = p + "%";
      if (p >= 100) {
        navigate("#/extract");
      } else {
        state.analyzeTimer = setTimeout(tick, 350);
      }
    };
    state.analyzeTimer = setTimeout(tick, 500);
    document.getElementById("btn-cancel-analyze")?.addEventListener("click", () => {
      clearTimeout(state.analyzeTimer);
      navigate("#/upload");
      toast("Đã hủy xử lý");
    });
  } else {
    clearTimeout(state.analyzeTimer);
  }

  if (route === "extract") {
    document.getElementById("btn-approve")?.addEventListener("click", () => {
      toast("Đã duyệt khoản chi");
      setTimeout(() => navigate("#/link-impact"), 600);
    });
    document.getElementById("btn-edit")?.addEventListener("click", () => toast("Chế độ chỉnh sửa (demo)"));
    document.getElementById("btn-reject")?.addEventListener("click", () => {
      toast("Đã từ chối chứng từ");
      navigate("#/documents");
    });
  }

  if (route === "duplicate") {
    document.getElementById("btn-mark-dup")?.addEventListener("click", () => {
      toast("Đã đánh dấu trùng — không ghi nhận chi phí mới");
      navigate("#/documents");
    });
    document.getElementById("btn-keep-both")?.addEventListener("click", () => {
      toast("Đã giữ cả hai để xử lý sau");
    });
    document.getElementById("btn-view-detail")?.addEventListener("click", () => navigate("#/extract"));
  }

  if (route === "link-impact") {
    const wireCount = (id, countId) => {
      const el = document.getElementById(id);
      const c = document.getElementById(countId);
      if (!el || !c) return;
      const upd = () => {
        c.textContent = `${el.value.length}/300`;
      };
      el.addEventListener("input", upd);
      upd();
    };
    wireCount("desc-act", "desc-act-count");
    wireCount("desc-out", "desc-out-count");
    document.getElementById("btn-save-link")?.addEventListener("click", () => {
      toast("Đã lưu liên kết tác động");
      setTimeout(() => navigate("#/sponsor"), 500);
    });
    document.getElementById("btn-upload-more")?.addEventListener("click", () => toast("Upload thêm minh chứng (demo)"));
  }

  if (route === "reports" || route === "sponsor") {
    document.getElementById("btn-export-pdf")?.addEventListener("click", () => toast("Xuất PDF (demo) — file sẽ tải trong phiên bản đầy đủ"));
    document.getElementById("btn-share")?.addEventListener("click", () => {
      navigator.clipboard?.writeText(location.href).catch(() => {});
      toast("Đã sao chép liên kết chia sẻ");
    });
    document.getElementById("btn-dl-ev")?.addEventListener("click", () => toast("Tải minh chứng (demo)"));
  }
}

function render() {
  const route = getRoute();
  const page = PAGES[route] || PAGES.overview;
  const navId = activeNavId(route in PAGES ? route : "overview");
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar(navId)}
      <div class="main-wrap">
        ${renderHeader(page.header)}
        <main class="content">${page.render()}</main>
      </div>
    </div>
  `;

  document.getElementById("btn-collapse")?.addEventListener("click", () => {
    state.collapsed = !state.collapsed;
    render();
  });
  document.getElementById("btn-menu")?.addEventListener("click", () => {
    state.mobileOpen = !state.mobileOpen;
    render();
  });
  document.getElementById("overlay")?.addEventListener("click", () => {
    state.mobileOpen = false;
    render();
  });

  bindPageEvents(route in PAGES ? route : "overview");
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#/overview";
render();
