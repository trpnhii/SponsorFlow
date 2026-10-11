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
  showInviteForm: false,
  authError: "",
  importPreview: null,
  importErrors: [],
  ocrMode: localStorage.getItem("sf_ocr_mode") || "success",
};

const AUTH_ROUTES = new Set(["login", "register", "org-setup", "invite"]);

const DEMO_USERS = {
  "admin@greenhope.vn": {
    name: "An Nguyễn",
    role: "org_admin",
    roleLabel: "Admin tổ chức",
    orgId: "org-greenhope",
    orgName: "Quỹ Xanh Hy Vọng",
  },
  "finance@greenhope.vn": {
    name: "Bình Trần",
    role: "finance_ops",
    roleLabel: "Finance / Ops",
    orgId: "org-greenhope",
    orgName: "Quỹ Xanh Hy Vọng",
  },
  "reviewer@greenhope.vn": {
    name: "Chi Lê",
    role: "reviewer",
    roleLabel: "Reviewer",
    orgId: "org-greenhope",
    orgName: "Quỹ Xanh Hy Vọng",
  },
  "sponsor@fund.vn": {
    name: "Dana Fund",
    role: "sponsor",
    roleLabel: "Nhà tài trợ",
    orgId: null,
    orgName: null,
  },
};

const DEFAULT_MEMBERS = [
  { name: "An Nguyễn", email: "admin@greenhope.vn", role: "Admin tổ chức", projects: "Tất cả", status: "active" },
  { name: "Bình Trần", email: "finance@greenhope.vn", role: "Finance / Ops", projects: "Tiếp sức đến trường 2026", status: "active" },
  { name: "Chi Lê", email: "reviewer@greenhope.vn", role: "Reviewer", projects: "Tiếp sức đến trường 2026", status: "active" },
];

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem("sf_session") || "null");
  } catch {
    return null;
  }
}

function saveSession(session) {
  localStorage.setItem("sf_session", JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem("sf_session");
}

function loadOrg() {
  try {
    return JSON.parse(localStorage.getItem("sf_org") || "null");
  } catch {
    return null;
  }
}

function saveOrg(org) {
  localStorage.setItem("sf_org", JSON.stringify(org));
}

function loadInvites() {
  try {
    return JSON.parse(localStorage.getItem("sf_invites") || "null") || [
      { email: "lan@greenhope.vn", role: "Finance / Ops", status: "pending", token: "demo-invite" },
    ];
  } catch {
    return [{ email: "lan@greenhope.vn", role: "Finance / Ops", status: "pending", token: "demo-invite" }];
  }
}

function saveInvites(list) {
  localStorage.setItem("sf_invites", JSON.stringify(list));
}

function getSession() {
  return loadSession();
}

function requireAuthRedirect(route) {
  const session = getSession();
  const publicAuth = route === "login" || route === "register" || route === "invite" || route === "home" || route === "solution";

  if (!session && !publicAuth) {
    navigate("#/login");
    return true;
  }
  if (session && (route === "login" || route === "register")) {
    if (session.role === "sponsor") navigate("#/sponsor");
    else if (session.orgId || loadOrg()) navigate("#/overview");
    else navigate("#/org-setup");
    return true;
  }
  if (session?.role === "sponsor" && !publicAuth && route !== "sponsor") {
    navigate("#/sponsor");
    return true;
  }
  if (
    session &&
    session.role !== "sponsor" &&
    !session.orgId &&
    !loadOrg() &&
    route !== "org-setup" &&
    !publicAuth
  ) {
    navigate("#/org-setup");
    return true;
  }
  return false;
}

const NAV = [
  { id: "overview", label: "Tổng quan", icon: "grid", path: "#/overview" },
  { id: "projects", label: "Dự án", icon: "folder", path: "#/projects" },
  { id: "documents", label: "Chứng từ", icon: "file", path: "#/documents" },
  { id: "budget", label: "Ngân sách", icon: "refresh", path: "#/budget" },
  { id: "funding", label: "Nguồn tài trợ", icon: "wallet", path: "#/funding" },
  { id: "approvals", label: "Phê duyệt", icon: "shield", path: "#/approvals" },
  { id: "activity", label: "Hoạt động", icon: "activity", path: "#/activity" },
  { id: "impact", label: "Tác động", icon: "chart", path: "#/impact" },
  { id: "reports", label: "Báo cáo", icon: "report", path: "#/reports" },
  { id: "members", label: "Thành viên", icon: "users", path: "#/members" },
  { id: "settings", label: "Cài đặt", icon: "info", path: "#/settings" },
  { sep: true },
  { id: "sponsor", label: "Góc nhìn nhà tài trợ", icon: "eye", path: "#/sponsor" },
];

const DEFAULT_BUDGET_LINES = [
  { category: "Học liệu", item_name: "Bộ dụng cụ học tập", quantity: 120, unit: "bộ", unit_price: 150_000, funding_source_id: "fs-1", notes: "" },
  { category: "Học liệu", item_name: "Sách tham khảo", quantity: 80, unit: "quyển", unit_price: 25_000, funding_source_id: "fs-1", notes: "" },
  { category: "Vận chuyển", item_name: "Thuê xe tải đợt 1", quantity: 2, unit: "chuyến", unit_price: 2_600_000, funding_source_id: "fs-2", notes: "" },
  { category: "Suất ăn", item_name: "Suất ăn học sinh", quantity: 120, unit: "suất", unit_price: 40_000, funding_source_id: "fs-1", notes: "" },
  { category: "Vận hành sự kiện", item_name: "Thuê địa điểm", quantity: 1, unit: "ngày", unit_price: 5_000_000, funding_source_id: "fs-2", notes: "" },
];

const DEFAULT_FUNDING = [
  { id: "fs-1", sponsor: "Quỹ Dana Education", committed: 30_000_000, received: 28_000_000, conditions: "Chỉ học liệu & suất ăn" },
  { id: "fs-2", sponsor: "Nhà tài trợ XYZ", committed: 20_000_000, received: 17_000_000, conditions: "Vận chuyển & sự kiện" },
];

function loadBudgetLines() {
  try {
    const saved = JSON.parse(localStorage.getItem("sf_budget_lines") || "null");
    if (saved?.length) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_BUDGET_LINES.map((l, i) => ({ ...l, budget_line_id: `bl-${i + 1}` }));
}

function saveBudgetLines(lines) {
  localStorage.setItem("sf_budget_lines", JSON.stringify(lines));
}

function loadBudgetMeta() {
  try {
    return (
      JSON.parse(localStorage.getItem("sf_budget_meta") || "null") || {
        version: 1,
        status: "draft",
        reason: "",
      }
    );
  } catch {
    return { version: 1, status: "draft", reason: "" };
  }
}

function saveBudgetMeta(meta) {
  localStorage.setItem("sf_budget_meta", JSON.stringify(meta));
}

function loadFunding() {
  try {
    const saved = JSON.parse(localStorage.getItem("sf_funding") || "null");
    if (saved?.length) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_FUNDING.map((f) => ({ ...f }));
}

function saveFunding(list) {
  localStorage.setItem("sf_funding", JSON.stringify(list));
}

function lineAmount(line) {
  return Number(line.quantity || 0) * Number(line.unit_price || 0);
}

function budgetStatusBadge(status) {
  const v = loadBudgetMeta().version;
  if (status === "approved") return `<span class="badge badge-success">Approved v${v}</span>`;
  if (status === "submitted") return `<span class="badge badge-warning">Submitted — chờ duyệt</span>`;
  if (status === "returned") return `<span class="badge badge-warning">Returned — cần sửa</span>`;
  if (status === "rejected") return `<span class="badge badge-danger">Rejected v${v}</span>`;
  return `<span class="badge badge-warning">Draft v${v}</span>`;
}

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

const DEFAULT_REPORT_META = {
  version: 1,
  status: "draft",
  period: "25/05/2026 - 31/05/2026",
  approvedBy: "",
  publishedAt: "",
};

const DEFAULT_METRICS = [
  { id: "m1", name: "Học sinh được hỗ trợ", unit: "học sinh", target: 120, actual: 120, period: "05/2026", evidence: "Biên bản bàn giao + danh sách nhận" },
  { id: "m2", name: "Trường được tiếp cận", unit: "trường", target: 3, actual: 3, period: "05/2026", evidence: "Lịch hoạt động + ảnh địa điểm" },
  { id: "m3", name: "Bộ dụng cụ đã trao", unit: "bộ", target: 120, actual: 118, period: "05/2026", evidence: "" },
];

function loadReportMeta() {
  try {
    return JSON.parse(localStorage.getItem("sf_report_meta") || "null") || { ...DEFAULT_REPORT_META };
  } catch {
    return { ...DEFAULT_REPORT_META };
  }
}

function saveReportMeta(meta) {
  localStorage.setItem("sf_report_meta", JSON.stringify(meta));
}

function reportStatusBadge(status) {
  if (status === "published") return `<span class="badge badge-success">Published</span>`;
  if (status === "approved") return `<span class="badge badge-success">Approved</span>`;
  if (status === "submitted") return `<span class="badge badge-warning">Submitted</span>`;
  return `<span class="badge badge-neutral">Draft</span>`;
}

function loadValidationResolution() {
  try {
    return JSON.parse(localStorage.getItem("sf_validation_resolution") || "null") || null;
  } catch {
    return null;
  }
}

function saveValidationResolution(value) {
  localStorage.setItem("sf_validation_resolution", JSON.stringify(value));
}

function loadMetrics() {
  try {
    const saved = JSON.parse(localStorage.getItem("sf_metrics") || "null");
    if (saved?.length) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_METRICS.map((m) => ({ ...m }));
}

function saveMetrics(list) {
  localStorage.setItem("sf_metrics", JSON.stringify(list));
}

function metricPct(metric) {
  if (!Number(metric.target)) return 0;
  return Math.min(100, Math.round((Number(metric.actual || 0) / Number(metric.target)) * 100));
}

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
  if (route === "members") return "members";
  if (route === "projects" || route === "project-create" || route === "project-detail") return "projects";
  if (route === "budget" || route === "budget-import" || route === "budget-editor" || route === "budget-review") return "budget";
  if (route === "funding") return "funding";
  if (route === "approvals") return "approvals";
  if (route === "report-review") return "reports";
  if (route === "settings") return "settings";
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
  const session = getSession();
  const org = loadOrg();
  const title = opts.title || "Tiếp sức đến trường 2026";
  const showUpload = opts.showUpload !== false && session?.role !== "sponsor";
  const primaryLabel = opts.primaryLabel || "Tải chứng từ lên";
  const primaryHref = opts.primaryHref || "#/upload";
  const primaryIcon = opts.primaryIcon || "upload";
  const initial = (session?.name || "A").trim().charAt(0).toUpperCase();
  const orgLabel = session?.orgName || org?.name || "";

  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" id="btn-menu" type="button" aria-label="Menu">${icon("menu")}</button>
        <button class="project-select" type="button">
          ${title}
          ${icon("chevronD", 16)}
        </button>
        <span class="badge badge-success"><span class="badge-dot"></span>Đang hoạt động</span>
        ${orgLabel ? `<span class="org-chip">${orgLabel}</span>` : ""}
      </div>
      <div class="topbar-right">
        ${
          showUpload
            ? `<a class="btn btn-primary" href="${primaryHref}">${icon(primaryIcon)}<span>${primaryLabel}</span></a>
               <a class="btn btn-outline" href="#/reports">${icon("chart")}<span>Xem báo cáo</span></a>`
            : session?.role === "sponsor"
              ? `<a class="btn btn-primary" href="#/sponsor">${icon("eye")}<span>Portal tài trợ</span></a>`
              : `<a class="btn btn-primary" href="${primaryHref}">${icon(primaryIcon)}<span>${primaryLabel}</span></a>`
        }
        <button class="icon-btn" type="button" title="Trợ giúp">${icon("help")}</button>
        <button class="icon-btn" type="button" title="Thông báo">${icon("bell")}</button>
        <div class="user-menu-wrap">
          <button class="user-menu" id="btn-user-menu" type="button">
            <span class="avatar">${initial}</span>
            ${icon("chevronD", 14)}
          </button>
          <div class="user-dropdown" id="user-dropdown" hidden>
            <div class="user-dropdown-head">
              <strong>${session?.name || "User"}</strong>
              <span>${session?.roleLabel || session?.role || ""}</span>
              <span class="text-muted">${session?.email || ""}</span>
            </div>
            <button type="button" id="btn-logout">Đăng xuất</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

// ---------- Auth pages (Demo 01) ----------
function pageLogin() {
  const err = state.authError
    ? `<div class="auth-error">${state.authError}</div>`
    : "";
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>Đăng nhập</h1>
        <p class="auth-sub">Demo F01 — tài khoản mẫu bên dưới, không cần backend.</p>
        ${err}
        <form id="form-login" class="auth-form">
          <div class="form-group">
            <label for="login-email">Email</label>
            <input class="form-control" id="login-email" type="email" required placeholder="admin@greenhope.vn" />
          </div>
          <div class="form-group">
            <label for="login-password">Mật khẩu</label>
            <input class="form-control" id="login-password" type="password" required placeholder="demo123" />
          </div>
          <button class="btn btn-primary w-full" type="submit">${icon("arrowR")} Đăng nhập</button>
        </form>
        <div class="demo-accounts">
          <div class="demo-accounts-title">Điền nhanh tài khoản demo</div>
          <div class="demo-account-grid">
            <button type="button" class="demo-account-btn" data-fill="admin@greenhope.vn">Admin tổ chức</button>
            <button type="button" class="demo-account-btn" data-fill="finance@greenhope.vn">Finance</button>
            <button type="button" class="demo-account-btn" data-fill="reviewer@greenhope.vn">Reviewer</button>
            <button type="button" class="demo-account-btn" data-fill="sponsor@fund.vn">Nhà tài trợ</button>
          </div>
        </div>
        <p class="auth-footer">Chưa có tài khoản? <a href="#/register">Đăng ký</a> · <a href="#/invite">Có lời mời?</a></p>
      </div>
    </div>
  `;
}

function pageRegister() {
  const err = state.authError ? `<div class="auth-error">${state.authError}</div>` : "";
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>Đăng ký</h1>
        <p class="auth-sub">Tạo tài khoản mới rồi thiết lập tổ chức.</p>
        ${err}
        <form id="form-register" class="auth-form">
          <div class="form-group">
            <label for="reg-name">Họ và tên</label>
            <input class="form-control" id="reg-name" required placeholder="Nguyễn Văn A" />
          </div>
          <div class="form-group">
            <label for="reg-email">Email</label>
            <input class="form-control" id="reg-email" type="email" required placeholder="ban@tochuc.vn" />
          </div>
          <div class="form-group">
            <label for="reg-password">Mật khẩu (≥ 6 ký tự)</label>
            <input class="form-control" id="reg-password" type="password" required minlength="6" />
          </div>
          <button class="btn btn-primary w-full" type="submit">Tạo tài khoản</button>
        </form>
        <p class="auth-footer">Đã có tài khoản? <a href="#/login">Đăng nhập</a></p>
      </div>
    </div>
  `;
}

function pageOrgSetup() {
  const session = getSession();
  return `
    <div class="auth-shell">
      <div class="auth-card auth-card-wide">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>Tạo tổ chức</h1>
        <p class="auth-sub">Xin chào ${session?.name || ""} — tạo tổ chức để bắt đầu quản lý dự án tài trợ.</p>
        <form id="form-org" class="auth-form">
          <div class="form-group">
            <label for="org-name">Tên tổ chức</label>
            <input class="form-control" id="org-name" required placeholder="Quỹ Xanh Hy Vọng" value="Quỹ Xanh Hy Vọng" />
          </div>
          <div class="form-group">
            <label for="org-desc">Mô tả (tuỳ chọn)</label>
            <textarea class="form-control" id="org-desc" rows="3" placeholder="Tổ chức phi lợi nhuận hỗ trợ giáo dục cộng đồng"></textarea>
          </div>
          <button class="btn btn-primary w-full" type="submit">${icon("folder")} Tạo tổ chức</button>
        </form>
      </div>
    </div>
  `;
}

function pageInvite() {
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>Lời mời tham gia</h1>
        <div class="invite-summary">
          <div><span class="text-muted">Tổ chức</span><strong>Quỹ Xanh Hy Vọng</strong></div>
          <div><span class="text-muted">Vai trò</span><strong>Finance / Ops</strong></div>
          <div><span class="text-muted">Dự án</span><strong>Tiếp sức đến trường 2026</strong></div>
          <div><span class="text-muted">Token</span><code>demo-invite</code></div>
        </div>
        <p class="text-sm text-muted mb-16">Demo: token mẫu luôn hợp lệ. Bản thật sẽ kiểm tra hạn & revoke.</p>
        <button class="btn btn-primary w-full" id="btn-accept-invite" type="button">Chấp nhận lời mời</button>
        <p class="auth-footer"><a href="#/login">Đăng nhập tài khoản khác</a></p>
      </div>
    </div>
  `;
}

function pageMembers() {
  const invites = loadInvites().filter((i) => i.status === "pending");
  const memberRows = DEFAULT_MEMBERS.map(
    (m) => `
    <tr>
      <td>
        <div class="member-cell">
          <span class="avatar sm">${m.name.charAt(0)}</span>
          <div>
            <strong>${m.name}</strong>
            <div class="text-muted text-sm">${m.email}</div>
          </div>
        </div>
      </td>
      <td>${m.role}</td>
      <td>${m.projects}</td>
      <td><span class="badge badge-success">Đang hoạt động</span></td>
    </tr>`
  ).join("");

  const inviteRows =
    invites.length === 0
      ? `<tr><td colspan="4" class="text-muted">Không có lời mời đang chờ</td></tr>`
      : invites
          .map(
            (i) => `
      <tr>
        <td>${i.email}</td>
        <td>${i.role}</td>
        <td><span class="badge badge-warning">Chờ chấp nhận</span></td>
        <td class="member-actions">
          <button type="button" class="btn btn-outline btn-sm" data-copy-invite="${i.token}">Sao chép link</button>
          <button type="button" class="btn btn-ghost btn-sm" data-revoke="${i.email}">Thu hồi</button>
        </td>
      </tr>`
          )
          .join("");

  const formHtml = state.showInviteForm
    ? `
    <div class="card card-pad mb-16" id="invite-panel">
      <h3 class="card-title">Mời thành viên</h3>
      <form id="form-invite" class="form-grid">
        <div class="form-group">
          <label for="invite-email">Email</label>
          <input class="form-control" id="invite-email" type="email" required placeholder="lan@greenhope.vn" />
        </div>
        <div class="form-group">
          <label for="invite-role">Vai trò</label>
          <select class="form-control" id="invite-role">
            <option>Finance / Ops</option>
            <option>Project Manager</option>
            <option>Reviewer</option>
            <option>Admin tổ chức</option>
          </select>
        </div>
        <div class="form-group" style="grid-column:1/-1">
          <button class="btn btn-primary" type="submit">Gửi lời mời</button>
          <button class="btn btn-outline" type="button" id="btn-cancel-invite">Huỷ</button>
        </div>
      </form>
    </div>`
    : "";

  return `
    <div class="page-head">
      <div>
        <h1>Thành viên & phân quyền</h1>
        <p class="text-muted">Quản lý thành viên tổ chức, lời mời và vai trò theo dự án (Demo 01).</p>
      </div>
      <button class="btn btn-primary" type="button" id="btn-open-invite">${icon("users")} Mời thành viên</button>
    </div>
    ${formHtml}
    <div class="card card-pad mb-16">
      <h3 class="card-title">Thành viên</h3>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Người dùng</th><th>Vai trò</th><th>Dự án</th><th>Trạng thái</th></tr></thead>
          <tbody>${memberRows}</tbody>
        </table>
      </div>
    </div>
    <div class="card card-pad">
      <h3 class="card-title">Lời mời đang chờ</h3>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Email</th><th>Vai trò</th><th>Trạng thái</th><th></th></tr></thead>
          <tbody>${inviteRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

// ---------- Pages ----------
function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem("sf_projects") || "null");
    if (saved?.length) return saved;
  } catch {
    /* ignore */
  }
  return [
    {
      id: "proj-default",
      name: "Tiếp sức đến trường 2026",
      goal: "Hỗ trợ học liệu và suất ăn cho học sinh vùng khó khăn",
      start: "2026-01-01",
      end: "2026-12-31",
      status: "active",
      team: "An, Bình, Chi",
    },
  ];
}

function saveProjects(list) {
  localStorage.setItem("sf_projects", JSON.stringify(list));
}

function pageProjects() {
  const projects = loadProjects();
  const rows = projects
    .map(
      (p) => `
    <tr>
      <td>
        <strong>${p.name}</strong>
        <div class="text-muted text-sm">${p.goal || ""}</div>
      </td>
      <td>${p.start || "—"} → ${p.end || "—"}</td>
      <td>${p.team || "—"}</td>
      <td><span class="badge ${p.status === "active" ? "badge-success" : "badge-warning"}">${
        p.status === "active" ? "Đang hoạt động" : p.status === "draft" ? "Nháp" : p.status
      }</span></td>
      <td><a class="btn btn-outline btn-sm" href="#/project-detail">Chi tiết</a></td>
    </tr>`
    )
    .join("");

  return `
    <div class="page-head">
      <div>
        <h1>Dự án</h1>
        <p class="text-muted">Danh sách dự án trong tổ chức (Demo 02).</p>
      </div>
      <a class="btn btn-primary" href="#/project-create">${icon("folder")} Tạo dự án</a>
    </div>
    <div class="card card-pad">
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Dự án</th><th>Thời gian</th><th>Team</th><th>Trạng thái</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function pageProjectCreate() {
  return `
    <div class="page-head">
      <div>
        <h1>Tạo dự án</h1>
        <p class="text-muted">Nhập thông tin dự án tài trợ — lưu nháp hoặc kích hoạt.</p>
      </div>
      <a class="btn btn-outline" href="#/projects">Quay lại</a>
    </div>
    <div class="card card-pad" style="max-width:720px">
      <form id="form-project" class="auth-form">
        <div class="form-group">
          <label for="proj-name">Tên dự án *</label>
          <input class="form-control" id="proj-name" required placeholder="Tiếp sức đến trường 2026" />
        </div>
        <div class="form-group">
          <label for="proj-goal">Mục tiêu</label>
          <textarea class="form-control" id="proj-goal" rows="2" placeholder="Mô tả mục tiêu dự án"></textarea>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label for="proj-start">Ngày bắt đầu</label>
            <input class="form-control" id="proj-start" type="date" value="2026-03-01" />
          </div>
          <div class="form-group">
            <label for="proj-end">Ngày kết thúc</label>
            <input class="form-control" id="proj-end" type="date" value="2026-12-31" />
          </div>
        </div>
        <div class="form-group">
          <label for="proj-team">Team (tên, cách nhau bởi dấu phẩy)</label>
          <input class="form-control" id="proj-team" placeholder="An, Bình, Chi" value="An, Bình" />
        </div>
        <div class="form-group">
          <label for="proj-status">Trạng thái</label>
          <select class="form-control" id="proj-status">
            <option value="draft">Nháp</option>
            <option value="active" selected>Đang hoạt động</option>
          </select>
        </div>
        <div class="gap-12" style="display:flex">
          <button class="btn btn-primary" type="submit">Lưu dự án</button>
          <a class="btn btn-outline" href="#/projects">Huỷ</a>
        </div>
      </form>
    </div>
  `;
}

function pageProjectDetail() {
  const meta = loadBudgetMeta();
  const report = loadReportMeta();
  const lines = loadBudgetLines();
  const total = lines.reduce((s, l) => s + lineAmount(l), 0);
  const tabs = [
    ["Tổng quan", "#/overview", "grid"],
    ["Nguồn tài trợ", "#/funding", "wallet"],
    ["Dự trù", "#/budget", "refresh"],
    ["Chi phí & chứng từ", "#/documents", "receipt"],
    ["Phê duyệt", "#/approvals", "shield"],
    ["Hoạt động", "#/activity", "activity"],
    ["Chỉ số", "#/impact", "chart"],
    ["Báo cáo", "#/reports", "report"],
  ];
  return `
    <div class="page-head">
      <div>
        <h1>Tiếp sức đến trường 2026</h1>
        <p class="text-muted">Project hub theo sitemap: từ funding, budget, chi phí, hoạt động tới báo cáo.</p>
      </div>
      <a class="btn btn-outline" href="#/projects">Danh sách dự án</a>
    </div>
    <div class="detail-hero card card-pad mb-16">
      <div>
        <span class="badge badge-success">Đang hoạt động</span>
        <h2>Minh bạch chuỗi dữ liệu tài trợ</h2>
        <p>Project Manager xem được toàn bộ trạng thái, nhưng từng tab vẫn giữ quyền riêng cho finance, reviewer và sponsor.</p>
      </div>
      <div class="detail-hero-grid">
        <div><span>Cam kết</span><strong>50.000.000đ</strong></div>
        <div><span>Thực nhận</span><strong>45.000.000đ</strong></div>
        <div><span>Dự trù hiện tại</span><strong>${fmt(total)}</strong></div>
        <div><span>Báo cáo</span><strong>${report.status}</strong></div>
      </div>
    </div>
    <div class="project-tabs mb-16">
      ${tabs.map(([label, href, ic]) => `<a href="${href}" class="project-tab">${icon(ic, 16)} ${label}</a>`).join("")}
    </div>
    <div class="split-2">
      <div class="card card-pad">
        <h3 class="card-title">Trạng thái triển khai</h3>
        <div class="timeline">
          <div class="timeline-row done"><span></span><div><strong>Funding khai báo</strong><p>2 nguồn tài trợ, điều kiện được gắn với budget line.</p></div></div>
          <div class="timeline-row ${meta.status === "approved" ? "done" : "active"}"><span></span><div><strong>Budget ${meta.status}</strong><p>Version ${meta.version}; ${meta.reason || "chưa có lý do revision"}.</p></div></div>
          <div class="timeline-row done"><span></span><div><strong>Expense + OCR</strong><p>Chứng từ mẫu có extract editable, validation và queue duyệt.</p></div></div>
          <div class="timeline-row active"><span></span><div><strong>Report ${report.status}</strong><p>Snapshot tài chính/tác động chờ publish cho sponsor.</p></div></div>
        </div>
      </div>
      <div class="card card-pad">
        <h3 class="card-title">Rủi ro cần xử lý</h3>
        <div class="check-list">
          <div class="check-item warn">${icon("warn", 16)} Budget review cần xác nhận funding coverage.</div>
          <div class="check-item warn">${icon("warn", 16)} Một KPI còn thiếu bằng chứng đính kèm.</div>
          <div class="check-item ok">${icon("check", 16)} Sponsor chỉ xem dữ liệu published.</div>
        </div>
        <div class="action-footer">
          <a class="btn btn-primary" href="#/budget-review">${icon("shield")} Review budget</a>
          <a class="btn btn-outline" href="#/report-review">${icon("report")} Review report</a>
        </div>
      </div>
    </div>
  `;
}

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

  // Demo 02 KPIs — phân biệt cam kết / thực nhận; actual chỉ từ approved; pending tách riêng
  const committed = 50_000_000;
  const received = 45_000_000;
  const approvedSpend = 32_450_000;
  const pendingSpend = 2_150_000;
  const balance = received - approvedSpend;

  return `
    <div class="page-head" style="margin-bottom:12px">
      <div>
        <h1 style="font-size:18px;font-weight:600">Dashboard dự án</h1>
        <p class="text-muted">KPI theo F02: cam kết ≠ thực nhận; chờ duyệt không cộng vào thực chi.</p>
      </div>
      <a class="btn btn-outline btn-sm" href="#/projects">Danh sách dự án</a>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card">
        <div class="stat-icon blue">${icon("wallet", 20)}</div>
        <div>
          <div class="stat-label">Cam kết tài trợ</div>
          <div class="stat-value">${fmt(committed)}</div>
          <div class="stat-meta">Committed — chưa chắc đã về quỹ</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">${icon("download", 20)}</div>
        <div>
          <div class="stat-label">Thực nhận</div>
          <div class="stat-value">${fmt(received)}</div>
          <div class="stat-meta up">Received — dùng tính số dư</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">${icon("cart", 20)}</div>
        <div>
          <div class="stat-label">Thực chi đã duyệt</div>
          <div class="stat-value">${fmt(approvedSpend)}</div>
          <div class="stat-meta">Chỉ expense Approved</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon yellow">${icon("clock", 20)}</div>
        <div>
          <div class="stat-label">Chờ duyệt</div>
          <div class="stat-value">${fmt(pendingSpend)}</div>
          <div class="stat-meta warn">Không tính vào Actual</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orange">${icon("pie", 20)}</div>
        <div>
          <div class="stat-label">Số dư (theo thực nhận)</div>
          <div class="stat-value">${fmt(balance)}</div>
          <div class="stat-meta">Received − Approved spend</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">${icon("files", 20)}</div>
        <div>
          <div class="stat-label">Thiếu minh chứng / báo cáo</div>
          <div class="stat-value">3 · 1</div>
          <div class="stat-meta">Hoạt động thiếu evidence · báo cáo kỳ</div>
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
  const failed = state.ocrMode === "failed";
  const title = failed ? "OCR không đọc được đầy đủ" : "Kết quả trích xuất & kiểm tra";
  const confidence = failed ? 42 : 96;
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
          <h3 style="font-size:15px">${title}</h3>
          <span class="badge ${failed ? "badge-danger" : "badge-warning"}">${icon(failed ? "warn" : "clock", 12)} ${failed ? "Cần nhập tay" : "Chờ phê duyệt"}</span>
        </div>

        <div class="action-row mb-16">
          <button class="btn ${failed ? "btn-primary" : "btn-outline"} btn-sm" id="btn-ocr-fail" type="button">${icon("warn")} Demo OCR fail</button>
          <button class="btn ${failed ? "btn-outline" : "btn-primary"} btn-sm" id="btn-ocr-ok" type="button">${icon("spark")} Demo OCR OK</button>
        </div>

        <div class="section-label" style="margin-top:0">${failed ? "Manual fallback: user nhập/sửa fields" : "Thông tin được AI trích xuất"}</div>
        <div class="kv-list">
          <div class="kv-row"><span class="k">Nhà cung cấp</span><span class="v">${failed ? `<input class="form-control cell-input" value="ABC Education Supplies" />` : "ABC Education Supplies"}</span></div>
          <div class="kv-row"><span class="k">Ngày hóa đơn</span><span class="v">${failed ? `<input class="form-control cell-input" value="05/08/2026" />` : "05/08/2026"}</span></div>
          <div class="kv-row"><span class="k">Mã hóa đơn</span><span class="v">${failed ? `<input class="form-control cell-input" value="" placeholder="Nhập mã nếu có" />` : "HD-2026-0815"}</span></div>
          <div class="kv-row"><span class="k">Số tiền</span><span class="v">${failed ? `<input class="form-control cell-input" value="2450000" />` : "2.450.000đ"}</span></div>
          <div class="kv-row"><span class="k">Hạng mục gợi ý</span><span class="v"><span class="tag">${failed ? "Chọn thủ công" : "Học liệu"}</span></span></div>
          <div class="kv-row">
            <span class="k">Độ tin cậy AI</span>
            <span class="v" style="min-width:120px">
              <div class="progress-cell">
                <span>${confidence}%</span>
                <div class="progress-bar ${failed ? "warn" : ""}"><i style="width:${confidence}%"></i></div>
              </div>
            </span>
          </div>
        </div>

        <div class="section-label">Kết quả kiểm tra</div>
        <div class="check-list">
          <div class="check-item ${failed ? "warn" : "ok"}">${icon(failed ? "warn" : "check", 16)} ${failed ? "OCR thiếu mã hóa đơn; cho phép nhập tay trước khi submit" : "Đủ trường thông tin bắt buộc"}</div>
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
  const resolution = loadValidationResolution();
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
        <div class="card card-pad mt-16">
          <h3 class="card-title">Giải trình override</h3>
          <div class="form-grid">
            <div class="form-group">
              <label>Quyết định</label>
              <select class="form-control" id="dup-resolution">
                <option value="keep_both" ${resolution?.decision === "keep_both" ? "selected" : ""}>Giữ cả hai chứng từ</option>
                <option value="mark_duplicate" ${resolution?.decision === "mark_duplicate" ? "selected" : ""}>Đánh dấu trùng</option>
                <option value="request_change" ${resolution?.decision === "request_change" ? "selected" : ""}>Yêu cầu bổ sung</option>
              </select>
            </div>
            <div class="form-group">
              <label>Lý do bắt buộc</label>
              <textarea class="form-control" id="dup-reason">${resolution?.reason || "Hai chứng từ cùng nhà cung cấp nhưng thuộc hai đợt giao hàng khác nhau; giữ lại để reviewer kiểm tra."}</textarea>
            </div>
          </div>
          ${resolution ? `<div class="info-soft">${icon("shield", 16)} Đã lưu bởi ${resolution.actor} lúc ${resolution.time}. Audit trail sẵn sàng cho reviewer.</div>` : ""}
          <button class="btn btn-primary" type="button" id="btn-save-resolution">${icon("save")} Lưu giải trình</button>
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
          <div class="form-grid">
            <div class="form-group">
              <label>Quyền xem minh chứng</label>
              <select class="form-control">
                <option>Nội bộ + reviewer</option>
                <option selected>Chia sẻ cho sponsor sau khi redaction</option>
                <option>Private - không công bố ảnh người hưởng lợi</option>
              </select>
            </div>
            <div class="form-group">
              <label>Redaction</label>
              <select class="form-control">
                <option selected>Ẩn mặt trẻ em trước khi publish</option>
                <option>Chỉ chia sẻ biên bản, không chia sẻ ảnh</option>
              </select>
            </div>
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
  const meta = loadBudgetMeta();
  const lines = loadBudgetLines();
  const totalPlanned = lines.reduce((s, l) => s + lineAmount(l), 0);
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
    <div class="page-head">
      <div>
        <h1 class="page-title" style="margin:0">Ngân sách</h1>
        <p class="page-sub" style="margin:4px 0 0">Budget vs Actual + dự trù (Demo 03). ${budgetStatusBadge(meta.status)}</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn btn-outline" href="#/budget-import">${icon("upload")} Import Excel/CSV</a>
        <a class="btn btn-primary" href="#/budget-editor">${icon("pencil")} Sửa dự trù</a>
      </div>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card"><div class="stat-icon blue">${icon("wallet", 20)}</div><div><div class="stat-label">Tổng dự trù (version hiện tại)</div><div class="stat-value">${fmt(totalPlanned)}</div><div class="stat-meta">Σ quantity × unit_price</div></div></div>
      <div class="stat-card"><div class="stat-icon green">${icon("cart", 20)}</div><div><div class="stat-label">Đã chi (Approved)</div><div class="stat-value">32.450.000đ</div></div></div>
      <div class="stat-card"><div class="stat-icon yellow">${icon("clock", 20)}</div><div><div class="stat-label">Còn lại (baseline)</div><div class="stat-value">17.550.000đ</div></div></div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Budget vs Actual theo hạng mục</h3><button class="select-like" type="button">Tất cả hạng mục ${icon("chevronD", 14)}</button></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Hạng mục</th><th>Duyệt</th><th>Đã chi</th><th>Còn lại</th><th>Mức sử dụng</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function pageBudgetImport() {
  const preview = state.importPreview;
  const errors = state.importErrors || [];
  let previewHtml = `<p class="text-muted">Chưa có file. Chọn <code>.csv</code> mẫu hoặc tải <a href="./assets/sample-budget.csv" download>sample-budget.csv</a>.</p>`;
  if (preview?.length) {
    previewHtml = `
      <div class="table-wrap mb-16">
        <table class="data-table">
          <thead><tr><th>#</th><th>category</th><th>item_name</th><th>qty</th><th>unit</th><th>unit_price</th><th>Thành tiền</th><th></th></tr></thead>
          <tbody>
            ${preview
              .map(
                (r, i) => `
              <tr class="${r._error ? "row-error" : ""}">
                <td>${i + 1}</td>
                <td>${r.category || ""}</td>
                <td>${r.item_name || ""}</td>
                <td>${r.quantity ?? ""}</td>
                <td>${r.unit || ""}</td>
                <td>${r.unit_price ?? ""}</td>
                <td>${r._error ? "—" : fmt(lineAmount(r))}</td>
                <td>${r._error ? `<span class="text-danger text-sm">${r._error}</span>` : "OK"}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="flex gap-8" style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" type="button" id="btn-confirm-import">Nhập dòng hợp lệ vào bản nháp</button>
        <button class="btn btn-outline" type="button" id="btn-clear-import">Xoá preview</button>
      </div>`;
  }

  return `
    <div class="page-head">
      <div>
        <h1>Import dự trù Excel/CSV</h1>
        <p class="text-muted">Demo 03 — parse CSV phía client; .xlsx mô phỏng bằng CSV mẫu.</p>
      </div>
      <a class="btn btn-outline" href="#/budget">Quay lại ngân sách</a>
    </div>
    <div class="card card-pad mb-16">
      <div class="form-group">
        <label>Chọn file (.csv)</label>
        <input class="form-control" type="file" id="budget-file" accept=".csv,text/csv" />
      </div>
      <p class="text-sm text-muted">Giới hạn demo: CSV, map cột cố định category,item_name,quantity,unit,unit_price. Dòng lỗi vẫn hiện; chỉ import dòng OK.</p>
      ${errors.length ? `<div class="auth-error">${errors.join("<br>")}</div>` : ""}
    </div>
    <div class="card card-pad">
      <h3 class="card-title">Preview &amp; validation</h3>
      ${previewHtml}
    </div>
  `;
}

function pageBudgetEditor() {
  const meta = loadBudgetMeta();
  const lines = loadBudgetLines();
  const editable = meta.status === "draft" || meta.status === "returned";
  const total = lines.reduce((s, l) => s + lineAmount(l), 0);
  const funding = loadFunding();

  const rows = lines
    .map((l, i) => {
      if (!editable) {
        return `<tr>
          <td>${l.category}</td><td>${l.item_name}</td><td>${l.quantity}</td><td>${l.unit}</td>
          <td>${fmt(l.unit_price)}</td><td>${fmt(lineAmount(l))}</td><td>${funding.find((f) => f.id === l.funding_source_id)?.sponsor || "—"}</td><td></td>
        </tr>`;
      }
      const fundingOpts = funding
        .map(
          (f) =>
            `<option value="${f.id}" ${f.id === l.funding_source_id ? "selected" : ""}>${f.sponsor}</option>`
        )
        .join("");
      return `<tr data-idx="${i}">
        <td><input class="form-control cell-input" data-f="category" value="${l.category || ""}" /></td>
        <td><input class="form-control cell-input" data-f="item_name" value="${l.item_name || ""}" /></td>
        <td><input class="form-control cell-input" data-f="quantity" type="number" min="0" value="${l.quantity}" /></td>
        <td><input class="form-control cell-input" data-f="unit" value="${l.unit || ""}" /></td>
        <td><input class="form-control cell-input" data-f="unit_price" type="number" min="0" value="${l.unit_price}" /></td>
        <td class="line-total">${fmt(lineAmount(l))}</td>
        <td><select class="form-control cell-input" data-f="funding_source_id">${fundingOpts}</select></td>
        <td><button type="button" class="btn-ghost btn-sm" data-del-line="${i}">Xoá</button></td>
      </tr>`;
    })
    .join("");

  return `
    <div class="page-head">
      <div>
        <h1>Editor dự trù</h1>
        <p class="text-muted">${budgetStatusBadge(meta.status)} · Tổng: <strong>${fmt(total)}</strong> · planned = qty × unit_price</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn btn-outline" href="#/budget-import">Import</a>
        <a class="btn btn-outline" href="#/budget">Tổng quan</a>
      </div>
    </div>
    ${
      !editable
        ? `<div class="auth-error mb-16">Version đang <strong>${meta.status}</strong> — không sửa trực tiếp. Dùng «Tạo revision» để clone sang draft mới.</div>`
        : ""
    }
    <div class="card card-pad mb-16">
      <div class="table-wrap">
        <table class="data-table budget-grid">
          <thead><tr><th>Category</th><th>Item</th><th>SL</th><th>ĐVT</th><th>Đơn giá</th><th>Thành tiền</th><th>Nguồn</th><th></th></tr></thead>
          <tbody id="budget-lines-body">${rows}</tbody>
        </table>
      </div>
      ${
        editable
          ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
              <button class="btn btn-outline" type="button" id="btn-add-line">+ Thêm dòng</button>
              <button class="btn btn-primary" type="button" id="btn-save-budget">Lưu nháp</button>
              <button class="btn btn-primary" type="button" id="btn-submit-budget">Gửi duyệt</button>
            </div>`
          : `<div style="margin-top:12px"><button class="btn btn-primary" type="button" id="btn-revise-budget">Tạo revision (v${meta.version + 1} draft)</button></div>`
      }
    </div>
    ${
      meta.status === "submitted"
        ? `<div class="card card-pad"><p class="text-muted mb-16">Reviewer duyệt tại hàng đợi phê duyệt.</p><a class="btn btn-outline" href="#/approvals">Mở phê duyệt</a></div>`
        : ""
    }
  `;
}

function pageBudgetReview() {
  const meta = loadBudgetMeta();
  const lines = loadBudgetLines();
  const funding = loadFunding();
  const total = lines.reduce((s, l) => s + lineAmount(l), 0);
  const baseline = [
    { category: "Học liệu", old: 18_000_000, now: lines.filter((l) => l.category === "Học liệu").reduce((s, l) => s + lineAmount(l), 0) },
    { category: "Vận chuyển", old: 5_200_000, now: lines.filter((l) => l.category === "Vận chuyển").reduce((s, l) => s + lineAmount(l), 0) },
    { category: "Suất ăn", old: 4_800_000, now: lines.filter((l) => l.category === "Suất ăn").reduce((s, l) => s + lineAmount(l), 0) },
    { category: "Vận hành sự kiện", old: 5_000_000, now: lines.filter((l) => l.category === "Vận hành sự kiện").reduce((s, l) => s + lineAmount(l), 0) },
  ];
  const diffRows = baseline
    .map((r) => {
      const delta = r.now - r.old;
      return `<tr><td>${r.category}</td><td>${fmt(r.old)}</td><td>${fmt(r.now)}</td><td class="${delta > 0 ? "text-danger" : ""}">${delta >= 0 ? "+" : ""}${fmt(delta)}</td></tr>`;
    })
    .join("");
  const coverageRows = funding
    .map((f) => {
      const allocated = lines.filter((l) => l.funding_source_id === f.id).reduce((s, l) => s + lineAmount(l), 0);
      const pct = Math.min(100, Math.round((allocated / Math.max(f.received, 1)) * 100));
      return `<tr><td><strong>${f.sponsor}</strong><div class="text-sm text-muted">${f.conditions}</div></td><td>${fmt(f.received)}</td><td>${fmt(allocated)}</td><td><div class="progress-cell"><span>${pct}%</span><div class="progress-bar ${pct > 90 ? "warn" : ""}"><i style="width:${pct}%"></i></div></div></td></tr>`;
    })
    .join("");
  return `
    <div class="page-head">
      <div>
        <h1>Budget review</h1>
        <p class="text-muted">Version, diff và funding coverage trước khi approve/return. ${budgetStatusBadge(meta.status)}</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn btn-outline" href="#/budget-editor">${icon("pencil")} Editor</a>
        <a class="btn btn-outline" href="#/approvals">${icon("shield")} Queue</a>
      </div>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card"><div class="stat-icon blue">${icon("refresh", 20)}</div><div><div class="stat-label">Version</div><div class="stat-value">v${meta.version}</div><div class="stat-meta">${meta.status}</div></div></div>
      <div class="stat-card"><div class="stat-icon green">${icon("wallet", 20)}</div><div><div class="stat-label">Tổng dự trù</div><div class="stat-value">${fmt(total)}</div></div></div>
      <div class="stat-card"><div class="stat-icon yellow">${icon("info", 20)}</div><div><div class="stat-label">Lý do revision</div><div class="stat-value" style="font-size:14px">${meta.reason || "Bản nháp ban đầu"}</div></div></div>
    </div>
    <div class="split-2">
      <div class="card card-pad">
        <h3 class="card-title">Diff so với baseline</h3>
        <div class="table-wrap">
          <table class="data-table"><thead><tr><th>Hạng mục</th><th>Baseline</th><th>Version hiện tại</th><th>Chênh lệch</th></tr></thead><tbody>${diffRows}</tbody></table>
        </div>
      </div>
      <div class="card card-pad">
        <h3 class="card-title">Funding coverage</h3>
        <div class="table-wrap">
          <table class="data-table"><thead><tr><th>Nguồn</th><th>Thực nhận</th><th>Phân bổ</th><th>Coverage</th></tr></thead><tbody>${coverageRows}</tbody></table>
        </div>
      </div>
    </div>
    <div class="card card-pad mt-16">
      <h3 class="card-title">Reviewer decision</h3>
      <div class="form-grid">
        <div class="form-group">
          <label>Ghi chú reviewer</label>
          <textarea class="form-control" id="budget-review-note">Funding coverage hợp lệ; không phát hiện dòng âm hoặc thiếu nguồn tài trợ.</textarea>
        </div>
        <div class="check-list">
          <div class="check-item ok">${icon("check", 16)} Tổng dự trù tự tính từ quantity x unit_price.</div>
          <div class="check-item ok">${icon("check", 16)} Approved version sẽ bị khóa, chỉnh sửa tạo version mới.</div>
          <div class="check-item warn">${icon("warn", 16)} Một nguồn đã dùng trên 90%, cần theo dõi khi phát sinh expense.</div>
        </div>
      </div>
      <div class="action-footer">
        <button class="btn btn-primary" id="btn-budget-review-approve" type="button">${icon("check")} Approve budget</button>
        <button class="btn btn-outline" id="btn-budget-review-return" type="button">${icon("x")} Return changes</button>
      </div>
    </div>
  `;
}

function pageFunding() {
  const list = loadFunding();
  const lines = loadBudgetLines();
  const rows = list
    .map((f) => {
      const allocated = lines.filter((l) => l.funding_source_id === f.id).reduce((s, l) => s + lineAmount(l), 0);
      return `
      <tr>
        <td><strong>${f.sponsor}</strong><div class="text-sm text-muted">${f.conditions}</div></td>
        <td>${fmt(f.committed)}</td>
        <td>${fmt(f.received)}</td>
        <td>${fmt(allocated)}</td>
        <td>${fmt(f.received - allocated)}</td>
        <td>
          <button class="btn btn-outline btn-sm" type="button" data-edit-funding="${f.id}">Cập nhật thực nhận</button>
        </td>
      </tr>`;
    })
    .join("");

  const sumC = list.reduce((s, f) => s + f.committed, 0);
  const sumR = list.reduce((s, f) => s + f.received, 0);

  return `
    <div class="page-head">
      <div>
        <h1>Nguồn tài trợ &amp; phân bổ</h1>
        <p class="text-muted">Demo 04 — tách cam kết / thực nhận; phân bổ theo budget line.</p>
      </div>
      <button class="btn btn-primary" type="button" id="btn-add-funding">+ Thêm nguồn</button>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(2,1fr)">
      <div class="stat-card"><div class="stat-icon blue">${icon("wallet", 20)}</div><div><div class="stat-label">Tổng cam kết</div><div class="stat-value">${fmt(sumC)}</div></div></div>
      <div class="stat-card"><div class="stat-icon green">${icon("download", 20)}</div><div><div class="stat-label">Tổng thực nhận</div><div class="stat-value">${fmt(sumR)}</div></div></div>
    </div>
    <div class="card card-pad">
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Nhà tài trợ</th><th>Cam kết</th><th>Thực nhận</th><th>Đã phân bổ (dự trù)</th><th>Còn lại (received − allocated)</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="text-sm text-muted mt-16">Gán nguồn trên từng dòng tại <a href="#/budget-editor">Budget editor</a>. Expense split anti-double-count sẽ demo ở F06.</p>
    </div>
  `;
}

function pageApprovals() {
  const meta = loadBudgetMeta();
  const session = getSession();
  return `
    <div class="page-head">
      <div>
        <h1>Hàng đợi phê duyệt</h1>
        <p class="text-muted">Demo 07 — duyệt ngân sách &amp; khoản chi. Đăng nhập reviewer để quyết định.</p>
      </div>
      <span class="text-sm text-muted">Bạn: ${session?.roleLabel || "—"}</span>
    </div>
    <div class="card card-pad mb-16">
      <h3 class="card-title">Ngân sách</h3>
      <div class="task-item" style="cursor:default">
        <span class="task-icon" style="background:#fef3c7;color:#ca8a04">${icon("refresh", 16)}</span>
        <div class="task-body" style="flex:1">
          <div class="task-title">Budget version ${meta.version} — ${meta.status}</div>
          <div class="task-desc">Dự trù dự án Tiếp sức đến trường 2026</div>
        </div>
        ${
          meta.status === "submitted"
            ? `<div style="display:flex;gap:8px">
                <button class="btn btn-primary btn-sm" type="button" id="btn-approve-budget">Approve</button>
                <button class="btn btn-outline btn-sm" type="button" id="btn-return-budget">Request changes</button>
                <button class="btn btn-ghost btn-sm" type="button" id="btn-reject-budget">Reject</button>
              </div>`
            : `<a class="btn btn-outline btn-sm" href="#/budget-review">Xem review</a>`
        }
      </div>
    </div>
    <div class="card card-pad">
      <h3 class="card-title">Khoản chi chờ duyệt</h3>
      <div class="task-item" data-go="#/extract">
        <span class="task-icon" style="background:#fee2e2;color:#dc2626">${icon("receipt", 16)}</span>
        <div class="task-body">
          <div class="task-title">Hóa đơn học liệu — 2.450.000đ</div>
          <div class="task-desc">Có cảnh báo validation · bấm để xem chứng từ + duyệt</div>
        </div>
        <a class="btn btn-outline btn-sm" href="#/extract">Xử lý</a>
      </div>
      <div class="task-item" data-go="#/duplicate">
        <span class="task-icon" style="background:#ffedd5;color:#ea580c">${icon("copy", 16)}</span>
        <div class="task-body">
          <div class="task-title">Hóa đơn nghi trùng — 2.450.000đ</div>
          <div class="task-desc">Rule DUP_POTENTIAL</div>
        </div>
        <a class="btn btn-outline btn-sm" href="#/duplicate">Xử lý</a>
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
    <div class="page-head">
      <div>
        <h1>Hoạt động & minh chứng</h1>
        <p class="text-muted">Các hoạt động đã và đang triển khai trong dự án.</p>
      </div>
      <button class="btn btn-primary" id="btn-create-activity" type="button">${icon("activity")} Tạo hoạt động</button>
    </div>
    <div class="card card-pad mb-16">
      <h3 class="card-title">Tạo/sửa hoạt động nhanh</h3>
      <div class="form-grid">
        <div class="form-group"><label>Tên hoạt động</label><input class="form-control" value="Phát bộ dụng cụ học tập - An Giang" /></div>
        <div class="form-group"><label>Người phụ trách</label><input class="form-control" value="Bình Trần" /></div>
        <div class="form-group"><label>Liên kết expense</label><select class="form-control"><option>Hóa đơn học liệu - 2.450.000đ</option><option>Thuê xe tải - 5.200.000đ</option></select></div>
        <div class="form-group"><label>Minh chứng</label><input class="form-control" type="file" /></div>
      </div>
      <div class="info-soft">${icon("info", 16)} Minh chứng có quyền truy cập riêng; ảnh người hưởng lợi không mặc định công khai.</div>
    </div>
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
  const metrics = loadMetrics();
  const metricRows = metrics
    .map((m) => {
      const pct = metricPct(m);
      return `<tr data-metric="${m.id}">
        <td><input class="form-control cell-input metric-input" data-mf="name" value="${m.name}" /></td>
        <td><input class="form-control cell-input metric-input" data-mf="target" type="number" value="${m.target}" /></td>
        <td><input class="form-control cell-input metric-input" data-mf="actual" type="number" value="${m.actual}" /></td>
        <td>${m.unit}</td>
        <td><div class="progress-cell"><span>${pct}%</span><div class="progress-bar ${pct < 80 ? "warn" : ""}"><i style="width:${pct}%"></i></div></div></td>
        <td>${m.evidence ? `<span class="badge badge-success">Có</span>` : `<span class="badge badge-warning">Thiếu</span>`}</td>
      </tr>`;
    })
    .join("");
  return `
    <div class="page-head">
      <div>
        <h1>Tác động</h1>
        <p class="text-muted">Chỉ số đầu ra và hiệu quả xã hội của dự án.</p>
      </div>
      <button class="btn btn-primary" id="btn-save-metrics" type="button">${icon("save")} Cập nhật KPI</button>
    </div>
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
    <div class="card card-pad mt-16">
      <h3 class="card-title">Metric detail: target, actual, evidence</h3>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Metric</th><th>Target</th><th>Actual</th><th>Đơn vị</th><th>Tiến độ</th><th>Evidence</th></tr></thead>
          <tbody>${metricRows}</tbody>
        </table>
      </div>
      <div class="info-soft">${icon("info", 16)} Số liệu tự khai báo không được gắn nhãn xác thực độc lập; metric thiếu evidence sẽ bị chú thích trong report.</div>
    </div>
  `;
}

function pageSponsor() {
  const meta = loadReportMeta();
  const published = meta.status === "published";
  return `
    <h1 class="page-title">Bảng điều khiển dành cho nhà tài trợ</h1>
    <p class="page-sub">Tổng quan minh bạch từ tài trợ → chi tiêu → hoạt động → tác động.</p>
    <div class="warning-banner" style="background:${published ? "#f0fdf4" : "#fffbeb"};border-color:${published ? "#bbf7d0" : "#fde68a"}">
      ${icon(published ? "check" : "warn", 22)}
      <div>
        <h3 style="color:${published ? "#15803d" : "#c2410c"}">${published ? "Đang xem dữ liệu đã publish" : "Chưa publish report mới nhất"}</h3>
        <p style="color:${published ? "#166534" : "#92400e"}">Sponsor chỉ thấy báo cáo và minh chứng đã được phê duyệt/công bố. Dữ liệu draft hoặc chứng từ nhạy cảm bị ẩn mặc định.</p>
      </div>
    </div>

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
          <button class="quick-link" id="btn-sponsor-deny" type="button">
            ${icon("shield", 18)}
            <div style="flex:1"><strong>Kiểm thử sponsor B</strong><span>Thử truy cập dữ liệu ngoài quyền</span></div>
            ${icon("chevronR", 16)}
          </button>
        </div>
      </div>
    </div>
  `;
}

function pageReports() {
  const meta = loadReportMeta();
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
        <p class="page-sub">Báo cáo tổng hợp tài chính, hoạt động và tác động. ${reportStatusBadge(meta.status)}</p>

        <div class="card card-pad mb-16">
          <div class="flex gap-12 items-center">
            <span class="stat-icon" style="background:#fee2e2;color:#dc2626">${icon("pdf", 20)}</span>
            <div style="flex:1">
              <h3 style="font-size:15px">Báo cáo dự án Tiếp sức đến trường 2026</h3>
              <div class="report-meta">
                <span>Nhà tài trợ: <strong>ABC Foundation</strong></span>
                <span>Thời gian: ${meta.period}</span>
                ${reportStatusBadge(meta.status)}
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
        <button class="btn btn-primary btn-block" id="btn-submit-report" type="button">${icon("check")} Gửi duyệt report</button>
        <a class="btn btn-outline btn-block" href="#/report-review">${icon("shield")} Màn review/publish</a>
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

function pageReportReview() {
  const meta = loadReportMeta();
  const metrics = loadMetrics();
  const missing = metrics.filter((m) => !m.evidence).length;
  return `
    <div class="page-head">
      <div>
        <h1>Report review & publish</h1>
        <p class="text-muted">Snapshot cố định trước khi publish cho sponsor. ${reportStatusBadge(meta.status)}</p>
      </div>
      <a class="btn btn-outline" href="#/reports">${icon("report")} Preview</a>
    </div>
    <div class="split-2">
      <div class="card card-pad">
        <h3 class="card-title">Snapshot dữ liệu</h3>
        <div class="kv-list">
          <div class="kv-row"><span class="k">Report version</span><span class="v">v${meta.version}</span></div>
          <div class="kv-row"><span class="k">Period</span><span class="v">${meta.period}</span></div>
          <div class="kv-row"><span class="k">Finance snapshot</span><span class="v">50.000.000đ budget / 32.450.000đ actual</span></div>
          <div class="kv-row"><span class="k">Impact snapshot</span><span class="v">${metrics.length} metrics, ${missing} thiếu evidence</span></div>
          <div class="kv-row"><span class="k">Published</span><span class="v">${meta.publishedAt || "Chưa publish"}</span></div>
        </div>
        <div class="info-soft">${icon("shield", 16)} Sau khi publish, thay đổi expense/KPI mới sẽ tạo report version sau, không âm thầm đổi snapshot cũ.</div>
      </div>
      <div class="card card-pad">
        <h3 class="card-title">Approval checklist</h3>
        <div class="check-list">
          <div class="check-item ok">${icon("check", 16)} Chỉ approved expenses vào actual.</div>
          <div class="check-item ok">${icon("check", 16)} Sponsor portal chỉ đọc dữ liệu published.</div>
          <div class="check-item ${missing ? "warn" : "ok"}">${icon(missing ? "warn" : "check", 16)} ${missing ? `${missing} metric thiếu evidence, report sẽ ghi chú.` : "Tất cả metric có evidence."}</div>
        </div>
        <div class="form-group mt-16">
          <label>Reviewer note</label>
          <textarea class="form-control" id="report-note">Số liệu tài chính khớp snapshot; KPI thiếu evidence đã được đánh dấu trong phụ lục.</textarea>
        </div>
        <div class="action-footer">
          <button class="btn btn-primary" id="btn-approve-report" type="button">${icon("check")} Approve</button>
          <button class="btn btn-outline" id="btn-publish-report" type="button">${icon("eye")} Publish sponsor</button>
          <button class="btn btn-danger-outline" id="btn-return-report" type="button">${icon("x")} Return</button>
        </div>
      </div>
    </div>
  `;
}

function pageSettings() {
  return `
    <div class="page-head">
      <div>
        <h1>Cài đặt</h1>
        <p class="text-muted">Thiết lập demo cho bảo mật, retention và quyền xem chứng từ.</p>
      </div>
    </div>
    <div class="split-2">
      <div class="card card-pad">
        <h3 class="card-title">Security & privacy</h3>
        <div class="check-list">
          <label class="settings-row"><input type="checkbox" checked /> Enforce RBAC/ABAC ở backend trong bản thật</label>
          <label class="settings-row"><input type="checkbox" checked /> Signed URL cho file private</label>
          <label class="settings-row"><input type="checkbox" checked /> Redaction ảnh người hưởng lợi trước khi publish</label>
          <label class="settings-row"><input type="checkbox" /> Malware scan storage upload</label>
        </div>
      </div>
      <div class="card card-pad">
        <h3 class="card-title">Demo environment</h3>
        <div class="kv-list">
          <div class="kv-row"><span class="k">Partner sandbox</span><span class="v">Tách dữ liệu theo org/sponsor</span></div>
          <div class="kv-row"><span class="k">Currency</span><span class="v">VND</span></div>
          <div class="kv-row"><span class="k">OCR provider</span><span class="v">Mock client-side</span></div>
          <div class="kv-row"><span class="k">Audit log</span><span class="v">localStorage demo</span></div>
        </div>
      </div>
    </div>
  `;
}

function pageHome() {
  return `
    <div class="auth-shell">
      <div class="auth-card auth-card-wide">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>SponsorFlow</h1>
        <p class="auth-sub">Nền tảng minh bạch tài trợ: dự trù, chứng từ, duyệt, minh chứng, KPI và báo cáo cho nhà tài trợ.</p>
        <div class="project-tabs mb-16">
          <a class="project-tab" href="#/solution">${icon("info", 16)} Giải pháp</a>
          <a class="project-tab" href="#/login">${icon("shield", 16)} Đăng nhập</a>
          <a class="project-tab" href="#/register">${icon("users", 16)} Đăng ký</a>
        </div>
        <div class="value-chain" style="padding:0">
          <div class="chain-node"><div class="ci" style="background:#dbeafe;color:#2563eb">${icon("wallet", 18)}</div><strong>Tài trợ</strong><span>Funding source</span></div>
          <div class="chain-arrow">${icon("arrowR", 18)}</div>
          <div class="chain-node"><div class="ci" style="background:#dcfce7;color:#16a34a">${icon("receipt", 18)}</div><strong>Chứng từ</strong><span>OCR + approval</span></div>
          <div class="chain-arrow">${icon("arrowR", 18)}</div>
          <div class="chain-node"><div class="ci" style="background:#fef3c7;color:#ca8a04">${icon("report", 18)}</div><strong>Báo cáo</strong><span>Published portal</span></div>
        </div>
      </div>
    </div>
  `;
}

function pageSolution() {
  return `
    <div class="auth-shell">
      <div class="auth-card auth-card-wide">
        <img class="auth-logo" src="${LOGO_SRC}" alt="SponsorFlow" />
        <h1>Giải pháp</h1>
        <p class="auth-sub">MVP chứng minh truy xuất dữ liệu từ nguồn tài trợ tới ngân sách, khoản chi, chứng từ, hoạt động, KPI và báo cáo đã publish.</p>
        <div class="check-list mb-16">
          <div class="check-item ok">${icon("check", 16)} Budget import/editor + version review.</div>
          <div class="check-item ok">${icon("check", 16)} Receipt OCR với manual fallback.</div>
          <div class="check-item ok">${icon("check", 16)} Approval, audit, validation override.</div>
          <div class="check-item ok">${icon("check", 16)} Sponsor portal read-only theo dữ liệu published.</div>
        </div>
        <a class="btn btn-primary btn-block" href="#/login">${icon("shield")} Vào demo</a>
      </div>
    </div>
  `;
}

// ---------- Router & mount ----------
const PAGES = {
  home: { render: pageHome, auth: true },
  solution: { render: pageSolution, auth: true },
  login: { render: pageLogin, auth: true },
  register: { render: pageRegister, auth: true },
  "org-setup": { render: pageOrgSetup, auth: true },
  invite: { render: pageInvite, auth: true },
  members: { render: pageMembers, header: { title: "Thành viên & phân quyền", showUpload: false, primaryLabel: "Mời thành viên", primaryHref: "#/members", primaryIcon: "users" } },
  projects: { render: pageProjects, header: { title: "Dự án", showUpload: false, primaryLabel: "Tạo dự án", primaryHref: "#/project-create", primaryIcon: "folder" } },
  "project-create": { render: pageProjectCreate, header: { title: "Tạo dự án", showUpload: false, primaryLabel: "Danh sách dự án", primaryHref: "#/projects", primaryIcon: "folder" } },
  "project-detail": { render: pageProjectDetail, header: { title: "Chi tiết dự án", showUpload: false, primaryLabel: "Report review", primaryHref: "#/report-review", primaryIcon: "report" } },
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
  "budget-import": { render: pageBudgetImport, header: { title: "Import dự trù", showUpload: false, primaryLabel: "Mở editor", primaryHref: "#/budget-editor", primaryIcon: "pencil" } },
  "budget-editor": { render: pageBudgetEditor, header: { title: "Editor dự trù", showUpload: false, primaryLabel: "Gửi duyệt", primaryHref: "#/budget-editor", primaryIcon: "check" } },
  "budget-review": { render: pageBudgetReview, header: { title: "Budget review", showUpload: false, primaryLabel: "Approval queue", primaryHref: "#/approvals", primaryIcon: "shield" } },
  funding: { render: pageFunding, header: { title: "Nguồn tài trợ", showUpload: false, primaryLabel: "Budget editor", primaryHref: "#/budget-editor", primaryIcon: "pencil" } },
  approvals: { render: pageApprovals, header: { title: "Phê duyệt", showUpload: false, primaryLabel: "Hàng đợi", primaryHref: "#/approvals", primaryIcon: "shield" } },
  activity: { render: pageActivity, header: {} },
  impact: { render: pageImpact, header: {} },
  reports: { render: pageReports, header: {} },
  "report-review": { render: pageReportReview, header: { title: "Report review", showUpload: false, primaryLabel: "Preview report", primaryHref: "#/reports", primaryIcon: "report" } },
  settings: { render: pageSettings, header: { title: "Cài đặt", showUpload: false, primaryLabel: "Project hub", primaryHref: "#/project-detail", primaryIcon: "folder" } },
  sponsor: {
    render: pageSponsor,
    header: {
      primaryLabel: "Tải báo cáo PDF",
      primaryHref: "#/sponsor",
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
    document.getElementById("btn-ocr-fail")?.addEventListener("click", () => {
      state.ocrMode = "failed";
      localStorage.setItem("sf_ocr_mode", "failed");
      toast("Đã chuyển sang case OCR fail/manual fallback");
      render();
    });
    document.getElementById("btn-ocr-ok")?.addEventListener("click", () => {
      state.ocrMode = "success";
      localStorage.setItem("sf_ocr_mode", "success");
      toast("Đã chuyển về OCR thành công");
      render();
    });
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
    document.getElementById("btn-save-resolution")?.addEventListener("click", () => {
      const decision = document.getElementById("dup-resolution")?.value || "keep_both";
      const reason = document.getElementById("dup-reason")?.value.trim();
      if (!reason) {
        toast("Cần nhập lý do giải trình");
        return;
      }
      saveValidationResolution({
        decision,
        reason,
        actor: getSession()?.name || "Reviewer",
        time: "09/10/2026 14:30",
      });
      toast("Đã lưu giải trình override vào audit log");
      render();
    });
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
    document.getElementById("btn-submit-report")?.addEventListener("click", () => {
      const meta = loadReportMeta();
      saveReportMeta({ ...meta, status: "submitted" });
      toast("Đã gửi report vào hàng đợi review");
      navigate("#/report-review");
    });
    document.getElementById("btn-share")?.addEventListener("click", () => {
      navigator.clipboard?.writeText(location.href).catch(() => {});
      toast("Đã sao chép liên kết chia sẻ");
    });
    document.getElementById("btn-dl-ev")?.addEventListener("click", () => toast("Tải minh chứng (demo)"));
    document.getElementById("btn-sponsor-deny")?.addEventListener("click", () => {
      toast("403 demo: Sponsor này không có quyền xem dữ liệu của sponsor khác");
    });
  }

  if (route === "login") {
    document.querySelectorAll("[data-fill]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const email = btn.getAttribute("data-fill");
        document.getElementById("login-email").value = email;
        document.getElementById("login-password").value = "demo123";
        state.authError = "";
      });
    });
    document.getElementById("form-login")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim().toLowerCase();
      const password = document.getElementById("login-password").value;
      const profile = DEMO_USERS[email];
      if (!profile || password !== "demo123") {
        state.authError = "Email hoặc mật khẩu không đúng. Thử tài khoản demo (mật khẩu: demo123).";
        render();
        return;
      }
      state.authError = "";
      const org = loadOrg();
      const session = {
        email,
        name: profile.name,
        role: profile.role,
        roleLabel: profile.roleLabel,
        orgId: profile.orgId || org?.id || null,
        orgName: profile.orgName || org?.name || null,
      };
      if (profile.orgId && !org) {
        saveOrg({ id: profile.orgId, name: profile.orgName, desc: "" });
        session.orgId = profile.orgId;
        session.orgName = profile.orgName;
      }
      saveSession(session);
      toast(`Xin chào ${session.name}`);
      if (session.role === "sponsor") navigate("#/sponsor");
      else if (!session.orgId) navigate("#/org-setup");
      else navigate("#/overview");
    });
  }

  if (route === "register") {
    document.getElementById("form-register")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim().toLowerCase();
      const password = document.getElementById("reg-password").value;
      if (password.length < 6) {
        state.authError = "Mật khẩu cần ít nhất 6 ký tự.";
        render();
        return;
      }
      if (DEMO_USERS[email]) {
        state.authError = "Email demo đã tồn tại — hãy đăng nhập hoặc dùng email khác.";
        render();
        return;
      }
      state.authError = "";
      saveSession({
        email,
        name,
        role: "org_admin",
        roleLabel: "Admin tổ chức",
        orgId: null,
        orgName: null,
      });
      localStorage.removeItem("sf_org");
      toast("Tạo tài khoản thành công");
      navigate("#/org-setup");
    });
  }

  if (route === "org-setup") {
    document.getElementById("form-org")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("org-name").value.trim();
      const desc = document.getElementById("org-desc").value.trim();
      const org = { id: "org-" + Date.now(), name, desc };
      saveOrg(org);
      const session = getSession() || {};
      session.orgId = org.id;
      session.orgName = org.name;
      session.role = session.role || "org_admin";
      session.roleLabel = session.roleLabel || "Admin tổ chức";
      saveSession(session);
      toast(`Đã tạo tổ chức «${name}»`);
      navigate("#/overview");
    });
  }

  if (route === "invite") {
    document.getElementById("btn-accept-invite")?.addEventListener("click", () => {
      const session = getSession();
      if (!session) {
        toast("Hãy đăng nhập hoặc đăng ký rồi chấp nhận lại");
        navigate("#/login");
        return;
      }
      saveOrg({ id: "org-greenhope", name: "Quỹ Xanh Hy Vọng", desc: "" });
      session.orgId = "org-greenhope";
      session.orgName = "Quỹ Xanh Hy Vọng";
      session.role = "finance_ops";
      session.roleLabel = "Finance / Ops";
      saveSession(session);
      const invites = loadInvites().map((i) =>
        i.token === "demo-invite" ? { ...i, status: "accepted" } : i
      );
      saveInvites(invites);
      toast("Đã chấp nhận lời mời");
      navigate("#/overview");
    });
  }

  if (route === "budget-import") {
    const parseCsv = (text) => {
      const lines = text.trim().split(/\r?\n/).filter(Boolean);
      if (lines.length < 2) return { rows: [], errors: ["File trống hoặc thiếu header"] };
      const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
      const need = ["category", "item_name", "quantity", "unit", "unit_price"];
      const missing = need.filter((c) => !header.includes(c));
      if (missing.length) return { rows: [], errors: [`Thiếu cột: ${missing.join(", ")}`] };
      const rows = [];
      const errors = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",").map((c) => c.trim());
        const get = (name) => cols[header.indexOf(name)] ?? "";
        let rawPrice = get("unit_price");
        if (rawPrice.startsWith("=")) {
          errors.push(`Dòng ${i + 1}: loại bỏ công thức nguy hiểm`);
          rawPrice = rawPrice.replace(/^=+/, "");
        }
        const row = {
          category: get("category"),
          item_name: get("item_name"),
          quantity: Number(get("quantity")),
          unit: get("unit"),
          unit_price: Number(rawPrice),
          funding_source_id: "fs-1",
          notes: "",
        };
        if (!row.category || !row.item_name) row._error = "Thiếu category/item";
        else if (!(row.quantity >= 0) || Number.isNaN(row.quantity)) row._error = "quantity không hợp lệ";
        else if (!(row.unit_price >= 0) || Number.isNaN(row.unit_price)) row._error = "unit_price không hợp lệ";
        else if (!row.unit) row._error = "Thiếu unit";
        rows.push(row);
      }
      return { rows, errors };
    };

    document.getElementById("budget-file")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.name.toLowerCase().endsWith(".csv")) {
        state.importErrors = ["Demo chỉ nhận .csv (dùng sample-budget.csv)."];
        state.importPreview = null;
        render();
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const { rows, errors } = parseCsv(String(reader.result || ""));
        state.importPreview = rows;
        state.importErrors = errors;
        render();
      };
      reader.readAsText(file);
    });
    document.getElementById("btn-clear-import")?.addEventListener("click", () => {
      state.importPreview = null;
      state.importErrors = [];
      render();
    });
    document.getElementById("btn-confirm-import")?.addEventListener("click", () => {
      const ok = (state.importPreview || []).filter((r) => !r._error);
      if (!ok.length) {
        toast("Không có dòng hợp lệ để nhập");
        return;
      }
      const meta = loadBudgetMeta();
      if (meta.status === "approved" || meta.status === "submitted") {
        saveBudgetMeta({ version: meta.version + 1, status: "draft", reason: "Import tạo version mới" });
      } else {
        saveBudgetMeta({ ...meta, status: "draft" });
      }
      const existing = loadBudgetLines();
      const merged = [
        ...existing,
        ...ok.map((r, i) => ({
          budget_line_id: `bl-imp-${Date.now()}-${i}`,
          category: r.category,
          item_name: r.item_name,
          quantity: r.quantity,
          unit: r.unit,
          unit_price: r.unit_price,
          funding_source_id: r.funding_source_id || "fs-1",
          notes: "",
        })),
      ];
      saveBudgetLines(merged);
      state.importPreview = null;
      toast(`Đã nhập ${ok.length} dòng vào draft`);
      navigate("#/budget-editor");
    });
  }

  if (route === "budget-editor") {
    const readLinesFromDom = () => {
      const rows = [...document.querySelectorAll("#budget-lines-body tr[data-idx]")];
      return rows.map((tr) => {
        const get = (f) => tr.querySelector(`[data-f="${f}"]`)?.value;
        return {
          budget_line_id: loadBudgetLines()[Number(tr.dataset.idx)]?.budget_line_id || `bl-${Date.now()}`,
          category: get("category"),
          item_name: get("item_name"),
          quantity: Number(get("quantity")),
          unit: get("unit"),
          unit_price: Number(get("unit_price")),
          funding_source_id: get("funding_source_id"),
          notes: "",
        };
      });
    };
    const refreshTotals = () => {
      document.querySelectorAll("#budget-lines-body tr[data-idx]").forEach((tr) => {
        const q = Number(tr.querySelector('[data-f="quantity"]')?.value || 0);
        const p = Number(tr.querySelector('[data-f="unit_price"]')?.value || 0);
        const cell = tr.querySelector(".line-total");
        if (cell) cell.textContent = fmt(q * p);
      });
    };
    document.querySelectorAll(".cell-input").forEach((el) => {
      el.addEventListener("input", refreshTotals);
      el.addEventListener("change", refreshTotals);
    });
    document.getElementById("btn-add-line")?.addEventListener("click", () => {
      const lines = readLinesFromDom();
      lines.push({
        budget_line_id: `bl-${Date.now()}`,
        category: "Học liệu",
        item_name: "Khoản mục mới",
        quantity: 1,
        unit: "cái",
        unit_price: 0,
        funding_source_id: "fs-1",
        notes: "",
      });
      saveBudgetLines(lines);
      render();
    });
    document.querySelectorAll("[data-del-line]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-del-line"));
        const lines = readLinesFromDom().filter((_, i) => i !== idx);
        saveBudgetLines(lines);
        render();
      });
    });
    document.getElementById("btn-save-budget")?.addEventListener("click", () => {
      saveBudgetLines(readLinesFromDom());
      toast("Đã lưu nháp dự trù");
      render();
    });
    document.getElementById("btn-submit-budget")?.addEventListener("click", () => {
      const lines = readLinesFromDom();
      saveBudgetLines(lines);
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "submitted" });
      toast("Đã gửi duyệt ngân sách");
      navigate("#/approvals");
    });
    document.getElementById("btn-revise-budget")?.addEventListener("click", () => {
      const meta = loadBudgetMeta();
      const reason = prompt("Lý do điều chỉnh (bắt buộc cho revision):", "Cập nhật số lượng học liệu");
      if (!reason?.trim()) {
        toast("Cần lý do revision");
        return;
      }
      saveBudgetMeta({ version: meta.version + 1, status: "draft", reason: reason.trim() });
      toast(`Đã tạo Budget v${meta.version + 1} draft`);
      render();
    });
  }

  if (route === "budget-review") {
    const canReview = () => {
      const s = getSession();
      if (s?.role !== "reviewer" && s?.role !== "org_admin") {
        toast("Cần Reviewer hoặc Admin để quyết định ngân sách");
        return false;
      }
      return true;
    };
    document.getElementById("btn-budget-review-approve")?.addEventListener("click", () => {
      if (!canReview()) return;
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "approved" });
      toast("Budget approved; version hiện tại đã khóa");
      navigate("#/budget");
    });
    document.getElementById("btn-budget-review-return")?.addEventListener("click", () => {
      if (!canReview()) return;
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "returned" });
      toast("Budget returned để finance chỉnh sửa");
      navigate("#/budget-editor");
    });
  }

  if (route === "funding") {
    document.getElementById("btn-add-funding")?.addEventListener("click", () => {
      const sponsor = prompt("Tên nhà tài trợ:", "Nhà tài trợ mới");
      if (!sponsor) return;
      const list = loadFunding();
      list.push({
        id: "fs-" + Date.now(),
        sponsor,
        committed: 5_000_000,
        received: 0,
        conditions: "Chưa có điều kiện",
      });
      saveFunding(list);
      toast("Đã thêm nguồn tài trợ");
      render();
    });
    document.querySelectorAll("[data-edit-funding]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-edit-funding");
        const list = loadFunding();
        const item = list.find((f) => f.id === id);
        if (!item) return;
        const raw = prompt(`Thực nhận hiện tại ${fmt(item.received)}. Nhập số mới:`, String(item.received));
        if (raw == null) return;
        const n = Number(raw);
        if (Number.isNaN(n) || n < 0) {
          toast("Số không hợp lệ");
          return;
        }
        item.received = n;
        saveFunding(list);
        toast("Đã cập nhật thực nhận");
        render();
      });
    });
  }

  if (route === "approvals") {
    const guardReviewer = () => {
      const s = getSession();
      if (s?.role !== "reviewer" && s?.role !== "org_admin") {
        toast("Cần đăng nhập Reviewer hoặc Admin để duyệt (demo)");
        return false;
      }
      return true;
    };
    document.getElementById("btn-approve-budget")?.addEventListener("click", () => {
      if (!guardReviewer()) return;
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "approved" });
      toast("Đã approve ngân sách");
      render();
    });
    document.getElementById("btn-return-budget")?.addEventListener("click", () => {
      if (!guardReviewer()) return;
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "returned" });
      toast("Request changes — budget returned");
      navigate("#/budget-editor");
    });
    document.getElementById("btn-reject-budget")?.addEventListener("click", () => {
      if (!guardReviewer()) return;
      const meta = loadBudgetMeta();
      saveBudgetMeta({ ...meta, status: "rejected" });
      toast("Đã reject ngân sách");
      render();
    });
  }

  if (route === "activity") {
    document.getElementById("btn-create-activity")?.addEventListener("click", () => {
      toast("Đã lưu hoạt động và minh chứng (demo)");
    });
  }

  if (route === "impact") {
    document.getElementById("btn-save-metrics")?.addEventListener("click", () => {
      const rows = [...document.querySelectorAll("[data-metric]")];
      const current = loadMetrics();
      const next = rows.map((tr) => {
        const old = current.find((m) => m.id === tr.dataset.metric) || {};
        const get = (f) => tr.querySelector(`[data-mf="${f}"]`)?.value;
        return {
          ...old,
          name: get("name") || old.name,
          target: Number(get("target") || 0),
          actual: Number(get("actual") || 0),
        };
      });
      saveMetrics(next);
      toast("Đã cập nhật KPI actual/target");
      render();
    });
  }

  if (route === "report-review") {
    const canReview = () => {
      const s = getSession();
      if (s?.role !== "reviewer" && s?.role !== "org_admin") {
        toast("Cần Reviewer hoặc Admin để approve/publish report");
        return false;
      }
      return true;
    };
    document.getElementById("btn-approve-report")?.addEventListener("click", () => {
      if (!canReview()) return;
      const meta = loadReportMeta();
      saveReportMeta({ ...meta, status: "approved", approvedBy: getSession()?.name || "Reviewer" });
      toast("Report approved");
      render();
    });
    document.getElementById("btn-publish-report")?.addEventListener("click", () => {
      if (!canReview()) return;
      const meta = loadReportMeta();
      if (meta.status !== "approved" && meta.status !== "published") {
        toast("Cần approve report trước khi publish");
        return;
      }
      saveReportMeta({ ...meta, status: "published", publishedAt: "09/10/2026 14:45" });
      toast("Đã publish report cho sponsor portal");
      navigate("#/sponsor");
    });
    document.getElementById("btn-return-report")?.addEventListener("click", () => {
      if (!canReview()) return;
      const meta = loadReportMeta();
      saveReportMeta({ ...meta, status: "draft" });
      toast("Report returned về draft");
      navigate("#/reports");
    });
  }

  if (route === "project-create") {
    document.getElementById("form-project")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const start = document.getElementById("proj-start").value;
      const end = document.getElementById("proj-end").value;
      if (start && end && end < start) {
        toast("Ngày kết thúc phải sau ngày bắt đầu");
        return;
      }
      const project = {
        id: "proj-" + Date.now(),
        name: document.getElementById("proj-name").value.trim(),
        goal: document.getElementById("proj-goal").value.trim(),
        start,
        end,
        team: document.getElementById("proj-team").value.trim(),
        status: document.getElementById("proj-status").value,
      };
      const list = loadProjects();
      list.unshift(project);
      saveProjects(list);
      toast(`Đã tạo dự án «${project.name}»`);
      navigate("#/projects");
    });
  }

  if (route === "members") {
    document.getElementById("btn-open-invite")?.addEventListener("click", () => {
      state.showInviteForm = true;
      render();
    });
    document.getElementById("btn-cancel-invite")?.addEventListener("click", () => {
      state.showInviteForm = false;
      render();
    });
    document.getElementById("form-invite")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("invite-email").value.trim().toLowerCase();
      const role = document.getElementById("invite-role").value;
      const invites = loadInvites();
      invites.push({ email, role, status: "pending", token: "invite-" + Date.now() });
      saveInvites(invites);
      state.showInviteForm = false;
      toast(`Đã gửi lời mời tới ${email} (demo)`);
      render();
    });
    document.querySelectorAll("[data-revoke]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const email = btn.getAttribute("data-revoke");
        const invites = loadInvites().map((i) =>
          i.email === email && i.status === "pending" ? { ...i, status: "revoked" } : i
        );
        saveInvites(invites);
        toast(`Đã thu hồi lời mời ${email}`);
        render();
      });
    });
    document.querySelectorAll("[data-copy-invite]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const url = `${location.origin}${location.pathname}#/invite`;
        navigator.clipboard?.writeText(url).catch(() => {});
        toast("Đã sao chép link lời mời");
      });
    });
  }
}

function render() {
  const route = getRoute();
  if (requireAuthRedirect(route)) return;

  const page = PAGES[route] || PAGES.overview;
  const resolvedRoute = route in PAGES ? route : "overview";
  const app = document.getElementById("app");

  if (page.auth) {
    app.innerHTML = page.render();
    bindPageEvents(resolvedRoute);
    return;
  }

  const navId = activeNavId(resolvedRoute);
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar(navId)}
      <div class="main-wrap">
        ${renderHeader(page.header || {})}
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
  document.getElementById("btn-user-menu")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const dd = document.getElementById("user-dropdown");
    if (dd) dd.hidden = !dd.hidden;
  });
  document.getElementById("btn-logout")?.addEventListener("click", () => {
    clearSession();
    state.authError = "";
    toast("Đã đăng xuất");
    navigate("#/login");
  });
  document.addEventListener(
    "click",
    () => {
      const dd = document.getElementById("user-dropdown");
      if (dd) dd.hidden = true;
    },
    { once: true }
  );

  bindPageEvents(resolvedRoute);
}

window.addEventListener("hashchange", render);
if (!location.hash) {
  location.hash = getSession() ? "#/overview" : "#/login";
}
render();
