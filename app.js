// HK Insurance Dashboard application

/*
 * Icon library
 *
 * To give the UI a cohesive, premium feel we embed a handful of Lucide
 * SVG icons inline. Each icon is defined as a template literal and then
 * injected wherever it is needed. All icons are sized via CSS using
 * the `.icon svg` selectors defined in `style.css`. New icons can be
 * added here as needed. Keys correspond to either a section name or
 * action. Icons use `stroke="currentColor"` so they inherit colour
 * from their parent element.
 */
const ICONS = {
  home: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
  `,
  users: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
  `,
  'file-text': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  `,
  quote: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
  `,
  'credit-card': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
  `,
  award: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
  `,
  folder: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
  `,
  car: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
  `,
  handshake: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
  `,
  building: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
  `,
  calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  `,
  'rotate-cw': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
  `,
  settings: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
  `,
  plus: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  `,
  moon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
  `,
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
  `,
  pencil: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
  `,
  trash: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
  `,
  phone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
  `,
  mail: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  `
  ,
  clipboard: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
  `
  ,
  /* Additional icons for new modules and navigation */
  timeline: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
  `,
  alerts: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
  `,
  pie: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
  `,
  bar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/></svg>
  `,
  alertCircle: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
  `
  ,
  info: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
  `
  ,
  /* Additional icons for new controls */
  sync: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
  `,
  menu: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  `,
  /*
   * Additional vehicle icons
   *
   * The existing icon set only provided a generic car. To better differentiate
   * between two‑wheelers and four‑wheelers in the Vehicles and Policies
   * sections we introduce a simple bicycle icon. The drawing is intentionally
   * minimal – two circles for the wheels connected via a frame. The
   * proportion roughly matches the other Lucide icons so the size feels
   * consistent. Should additional vehicle types be needed in the future a
   * similar pattern can be followed to add them here.
   */
  bike: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- wheels -->
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <!-- frame -->
      <line x1="6" y1="17" x2="10" y2="14" />
      <line x1="10" y1="14" x2="14" y2="17" />
      <line x1="10" y1="14" x2="10" y2="10" />
      <line x1="10" y1="10" x2="14" y2="10" />
      <line x1="14" y1="10" x2="18" y2="17" />
      <!-- handle and seat -->
      <line x1="10" y1="10" x2="9" y2="8" />
      <line x1="14" y1="10" x2="15" y2="8" />
    </svg>
  `
  ,
  // Download icon for document download
  download: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
  `
};

/**
 * Injects SVG icons into the navigation, quick‑add button and dark mode toggle.
 * This ensures that the markup remains light and that icons inherit current
 * colours. Sidebar links must define a `data-icon` attribute. The quick add
 * button and dark mode toggle are identified by their IDs and replaced with
 * the appropriate SVGs.
 */
function applyIcons() {
  // Sidebar links
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const iconName = link.dataset.icon;
    const iconSpan = link.querySelector('.icon');
    if (iconSpan && iconName && ICONS[iconName]) {
      iconSpan.innerHTML = ICONS[iconName].trim();
    }
  });
  // Quick add button
  const quickBtn = document.getElementById('quick-add-btn');
  if (quickBtn) {
    // Inject the plus icon into the button's inner span
    const span = quickBtn.querySelector('.icon');
    if (span) span.innerHTML = ICONS.plus;
  }
  // Dark mode toggle icon is initialised in setupEventListeners

  // Quick add menu buttons: each has a data-icon attribute
  document.querySelectorAll('#quick-add-menu button').forEach(btn => {
    const iconName = btn.dataset.icon;
    const iconSpan = btn.querySelector('.icon');
    if (iconSpan && iconName && ICONS[iconName]) {
      iconSpan.innerHTML = ICONS[iconName].trim();
    }
  });

  // Global cloud sync button
  const syncBtn = document.getElementById('cloud-sync-button');
  if (syncBtn) {
    const span = syncBtn.querySelector('.icon');
    if (span) span.innerHTML = ICONS.sync;
  }
  // Sidebar toggle button
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  if (toggleBtn) {
    const span = toggleBtn.querySelector('.icon');
    if (span) span.innerHTML = ICONS.menu;
  }
}

// Application version (increment when breaking changes occur). Used to prevent stale localStorage from persisting across new installs.
const APP_VERSION = '2.0';

// -----------------------------------------------------------------------------
// Authentication handling
//
// To secure the app when hosted publicly, we add a simple username/password
// mechanism. Credentials are stored locally in localStorage under a single
// key. A session flag in sessionStorage indicates whether the current user
// has authenticated. When the app first loads, checkAuth() is invoked to
// determine whether to show the registration/login modal or initialise
// the application. After a successful login or registration, the page
// reloads to allow init() to run normally. A logout function clears the
// session and reloads the page.

// Key used to store registered users in localStorage. Each entry is
// keyed by username and stores the password hash and role. Using an
// object allows multiple accounts to be stored for multi‑user access.
const USERS_KEY = 'users';

/**
 * Encode a password using base64. This is not cryptographically secure but
 * suffices to avoid storing plaintext. A proper hash function would be
 * preferable, but is beyond the scope of this offline‑first app.
 * @param {string} pwd
 * @returns {string}
 */
function hashPassword(pwd) {
  try {
    return btoa(pwd);
  } catch (e) {
    return pwd;
  }
}

/**
 * Display the authentication modal. When registerMode is true, the form asks
 * the user to choose a username and password; otherwise it prompts for
 * existing credentials. The toggle link allows switching between modes.
 * @param {boolean} registerMode
 */
function showAuthModal(registerMode) {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  const titleEl = document.getElementById('auth-title');
  const submitBtn = document.getElementById('auth-submit-btn');
  const confirmLabel = document.getElementById('auth-confirm-password-label');
  const roleLabel = document.getElementById('auth-role-label');
  const toggleLink = document.getElementById('auth-toggle');
  const toggleWrapper = document.getElementById('auth-toggle-wrapper');
  const errorMsg = document.getElementById('auth-error-msg');

  // Google authentication disabled: always show the manual login form
  // Hide the Google wrapper if present
  const googleWrapper = document.getElementById('google-auth-wrapper');
  if (googleWrapper) {
    googleWrapper.classList.add('hidden');
    googleWrapper.style.display = 'none';
  }
  const manualForm = document.getElementById('auth-form');
  if (manualForm) manualForm.style.display = '';
  // Reset fields and errors
  const emailInput = document.getElementById('auth-email');
  const usernameInput = document.getElementById('auth-username');
  if (emailInput) emailInput.value = '';
  if (usernameInput) usernameInput.value = '';
  document.getElementById('auth-password').value = '';
  document.getElementById('auth-confirm-password').value = '';
  errorMsg.style.display = 'none';
  errorMsg.textContent = '';
  // Configure mode
  if (registerMode) {
    titleEl.textContent = 'Register';
    submitBtn.textContent = 'Register';
    confirmLabel.classList.remove('hidden');
    // Show role select when registering
    if (roleLabel) {
      roleLabel.classList.remove('hidden');
      roleLabel.style.display = 'flex';
    }
    toggleWrapper.innerHTML = '<a href="#" id="auth-toggle">Login</a>';
  } else {
    titleEl.textContent = 'Login';
    submitBtn.textContent = 'Login';
    confirmLabel.classList.add('hidden');
    // Hide role select when logging in
    if (roleLabel) {
      roleLabel.classList.add('hidden');
      roleLabel.style.display = 'none';
    }
    toggleWrapper.innerHTML = '<a href="#" id="auth-toggle">Register</a>';
  }
  // Show modal
  modal.classList.remove('hidden');
  // Handle toggle link (rebind each time to capture closure)
  const newToggle = document.getElementById('auth-toggle');
  if (newToggle) {
    newToggle.onclick = (e) => {
      e.preventDefault();
      showAuthModal(!registerMode);
    };
  }
  // Handle form submission
  const form = document.getElementById('auth-form');
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      // Use email/password authentication via Firebase Auth for both registration
      // and login. This stores credentials centrally in Firebase so they can be
      // reused across devices. Local storage is used only for offline fallback.
      const email = (document.getElementById('auth-email')?.value || '').trim().toLowerCase();
      const password = document.getElementById('auth-password')?.value || '';
      if (!email || !password) {
        errorMsg.textContent = 'Please enter email and password.';
        errorMsg.style.display = 'block';
        return;
      }
      if (!auth) {
        errorMsg.textContent = 'Authentication service is not available.';
        errorMsg.style.display = 'block';
        return;
      }
      if (registerMode) {
        const confirmPwd = document.getElementById('auth-confirm-password')?.value || '';
        if (password !== confirmPwd) {
          errorMsg.textContent = 'Passwords do not match.';
          errorMsg.style.display = 'block';
          return;
        }
        const roleSel = document.getElementById('auth-role');
        const role = roleSel ? roleSel.value : 'Agent';
        try {
          // Create user in Firebase Auth
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
          // Save role and metadata to Firestore
          if (firestoreDb) {
            const userId = email; // doc id uses raw email
            await firestoreDb.collection('users').doc(userId).set({ email: email, role: role, createdAt: Date.now() });
          }
          // onAuthStateChanged will handle the rest (set session, load data)
        } catch (ex) {
          // If user already exists or other error
          const message = ex && ex.message ? ex.message : String(ex);
          errorMsg.textContent = 'Registration failed: ' + message;
          errorMsg.style.display = 'block';
        }
      } else {
        try {
          // Sign in existing user
          await auth.signInWithEmailAndPassword(email, password);
          // onAuthStateChanged will handle the rest
        } catch (ex) {
          const message = ex && ex.message ? ex.message : String(ex);
          errorMsg.textContent = 'Login failed: ' + message;
          errorMsg.style.display = 'block';
        }
      }
    };
  }
}

/**
 * Check whether a user is registered and/or logged in. If no user exists the
 * registration form is displayed. If a user exists but is not logged in,
 * the login form is shown. Otherwise the application is initialised.
 */
/**
 * Check whether any users are registered either locally or in the cloud, and
 * whether the current session is authenticated. If no users exist (either
 * locally or remotely), display the registration form. If users exist but
 * the session is not authenticated, show the login form. Otherwise
 * initialise the application normally.
 * This function must be asynchronous because cloud queries are asynchronous.
 */
async function checkAuthLegacy() {
  // Always initialise Firebase before performing auth checks. This sets up
  // Firestore and Auth instances if a config is provided.
  initFirebase();
  // If Firebase Auth is configured, use it to manage authentication via
  // Google sign‑in. The auth.onAuthStateChanged listener handles both
  // initial login state and future changes. When a user is signed in,
  // load or create their user record in Firestore to determine their role,
  // persist the session locally and then initialise the application. When no
  // user is signed in, display the auth modal prompting Google sign‑in. If
  // Firebase is not configured, fall back to the previous local username
  // mechanism.
  if (firebaseConfig && firebaseConfig.apiKey && auth) {
    return new Promise((resolve) => {
      // Handle redirect result first to capture sign‑in via signInWithRedirect().
      auth.getRedirectResult().then(async (redirectResult) => {
        if (redirectResult && redirectResult.user) {
          // User signed in via redirect; process the user object
          const user = redirectResult.user;
          await handleAuthenticatedUser(user);
          resolve();
        } else {
          // Fallback to onAuthStateChanged for popup sign‑in or existing session
          auth.onAuthStateChanged(async (user) => {
            if (user) {
              await handleAuthenticatedUser(user);
              resolve();
            } else {
              // No user signed in: show auth modal (Google sign‑in)
              showAuthModal(false);
              resolve();
            }
          });
        }
      }).catch((err) => {
        console.warn('Error during getRedirectResult:', err);
        // Fallback to onAuthStateChanged even if getRedirectResult errors
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            await handleAuthenticatedUser(user);
          } else {
            showAuthModal(false);
          }
          resolve();
        });
      });
    });
  }
  // -------------------------------------------------------------------------
  // Fallback to legacy local username/password authentication when Firebase
  // authentication is not configured.
  // Attempt to load users from localStorage
  let hasLocalUsers = false;
  try {
    const storedUsers = localStorage.getItem(USERS_KEY);
    if (storedUsers) {
      const usersObj = JSON.parse(storedUsers);
      hasLocalUsers = usersObj && Object.keys(usersObj).length > 0;
    }
  } catch (ex) {
    hasLocalUsers = false;
  }
  // Also check remote users if Firebase is configured (for legacy accounts)
  let hasRemoteUsers = false;
  if (firestoreDb) {
    try {
      const snapshot = await firestoreDb.collection('users').limit(1).get();
      hasRemoteUsers = !snapshot.empty;
    } catch (ex) {
      console.warn('Failed to fetch users from cloud during auth check:', ex);
    }
  }
  const anyUsersExist = hasLocalUsers || hasRemoteUsers;
  // If no users anywhere, prompt registration
  if (!anyUsersExist) {
    showAuthModal(true);
    return;
  }
  // If not logged in, prompt login
  if (!sessionStorage.getItem('loggedIn')) {
    showAuthModal(false);
    return;
  }
  // If logged in, initialise the app
  init();
}

/**
 * Log out the current user by clearing the session flag and reloading.
 */
function logout() {
  // Sign out from Firebase Auth if available
  if (auth) {
    try {
      auth.signOut().catch(() => {});
    } catch (ex) {
      console.warn('Failed to sign out from Firebase:', ex);
    }
  }
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('currentUser');
  // reload page to show login
  location.reload();
}

// Global data object stored in localStorage
// Core data model storing all entities. Additional domains added (brokers, companies, quotes, commissions).
// Include a lastUpdated property so the app can detect which copy of the
// data (local vs. cloud) is newer. This timestamp is updated any time
// data is saved locally. When downloading data from Firestore the
// timestamp is preserved so that two‑way sync can decide which copy
// should win. See saveData() and syncWithCloud() for details.
// Include a lastUpdated property so the app can detect which copy of the
// data (local vs. cloud) is newer. This timestamp is updated any time
// data is saved locally. When downloading data from Firestore the
// timestamp is preserved so that two‑way sync can decide which copy
// should win. See saveData() and syncWithCloud() for details.
let data = {
  customers: [],
  policies: [],
  payments: [],
  documents: [],
  brokers: [],
  companies: [],
  quotes: [],
  // Timestamp of when this data was last saved locally. This will be
  // updated automatically by saveData() unless preserveTimestamp is true.
  lastUpdated: Date.now(),
  commissions: [],
  vehicles: []
  ,
  settings: {}
};

/**
 * Sanitises an email address so it can be used as part of a Firestore document ID.
 * Firestore document IDs must not contain forward slashes or control characters,
 * and certain characters are discouraged. This function lowercases the email
 * and replaces any characters that are not alphanumeric with a dash. For
 * example, "user.name@example.com" becomes "user-name-example-com".
 * @param {string} email The email address to sanitise.
 * @returns {string} A sanitised string safe for use as a document ID.
 */
function sanitizeEmail(email) {
  return (email || '').toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// -----------------------------------------------------------------------------
// Optional Cloud Sync via Firebase Firestore
//
// This section enables syncing the application's data across multiple devices
// using Google Cloud Firestore. To activate cloud sync you must create your
// own Firebase project at https://console.firebase.google.com, enable the
// Firestore database and obtain your web app’s configuration. Paste the
// configuration values into the firebaseConfig object below. You should also
// configure Firestore security rules to restrict read/write access to your
// document. For personal use the simplest rule is to only allow access to
// authenticated users; you can also restrict to a specific user ID. See
// Firebase documentation for details.
//
// Once configured, the settings page will show Cloud Sync controls where you
// can specify a document ID, upload your data to Firestore and download the
// latest version. Firestore automatically persists data offline and merges
// changes across devices. Note: if firebaseConfig is left blank the Cloud Sync
// buttons will display an error message when clicked.

// Replace these placeholder values with your Firebase project's credentials.
// Firebase configuration for hk-insurance-app project. These values must
// match your Firebase console credentials. Replace with your own if
// deploying under a different project.
const firebaseConfig = {
  apiKey: "AIzaSyCd1txPy3_uzZ3uotcuDc48JqYy4ASM5OE",
  authDomain: "hk-insurance-app.firebaseapp.com",
  projectId: "hk-insurance-app",
  storageBucket: "hk-insurance-app.firebasestorage.app",
  messagingSenderId: "845972477048",
  appId: "1:845972477048:web:94611f0bc405a0eb1e498d",
  measurementId: "G-LRPCSN45EH"
};

// Firebase app and Firestore database instances
let firebaseApp = null;
let firestoreDb = null;
// Firebase authentication instance and Google provider.
let auth = null;
let googleProvider = null;
// Firebase storage instance (initialised in initFirebase when the storage library loads)
let storage = null;

function initFirebase() {
  // Initialise Firebase only if config appears to be set
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    return;
  }
  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firestoreDb = firebase.firestore();
    // Initialise Firebase Authentication and Google provider
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    // Dynamically load the Storage library if it hasn't been loaded yet. This
    // avoids the need to modify index.html and ensures storage is available
    // before attempting to upload files. Once loaded, initialise the storage
    // instance. If the storage script is already present, firebase.storage()
    // will be defined immediately.
    function initStorage() {
      try {
        storage = firebase.storage();
      } catch (e) {
        // ignore if storage cannot be initialised yet
      }
    }
    if (typeof firebase.storage === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/firebasejs/9.22.2/firebase-storage-compat.js';
      script.onload = () => {
        initStorage();
      };
      document.head.appendChild(script);
    } else {
      initStorage();
    }
    // Enable offline persistence so Firestore caches data locally and
    // automatically synchronises when a network connection is available.
    firestoreDb.enablePersistence().catch(function(err) {
      console.warn('Firestore offline persistence could not be enabled:', err);
    });
  } catch (err) {
    console.error('Firebase initialisation error:', err);
  }
}

/**
 * Authenticate the user via Firebase Auth if configured.
 *
 * This version simplifies the original logic by relying solely on
 * auth.onAuthStateChanged() to determine when a user is signed in. In
 * Firebase Authentication, the auth state listener is triggered both for
 * normal sign‑in flows (popup) and after returning from a redirect flow.
 * Thus it is sufficient to wait on this listener to decide whether to
 * initialise the app or display the login modal. The previous implementation
 * attempted to call getRedirectResult() before onAuthStateChanged(), but
 * that complexity led to cases where the login modal did not disappear
 * after signing in. By simplifying the flow, we ensure the app always
 * initialises once Firebase reports a signed‑in user.
 *
 * @returns {Promise<void>} A promise that resolves once authentication
 *          handling completes (either sign‑in or showing the auth modal).
 */
async function checkAuth() {
  // Always initialise Firebase first so auth and firestoreDb are available
  initFirebase();
  // Use Firebase Email/Password authentication for all accounts. When
  // Firebase Auth is configured, this function waits for auth state changes
  // and initialises the app accordingly. A user record in the 'users'
  // collection controls roles and the Firestore document ID. If no users
  // exist in Firestore, the registration form is displayed by default.
  // Determine if any user records exist in Firestore (to decide whether to
  // show login or registration when no auth session). Note: this check is
  // asynchronous and not perfect for large user counts but suffices here.
  let hasRemoteUsers = false;
  if (firestoreDb) {
    try {
      const snapshot = await firestoreDb.collection('users').limit(1).get();
      hasRemoteUsers = !snapshot.empty;
    } catch (ex) {
      console.warn('Failed to fetch users from cloud during auth check:', ex);
    }
  }
  // If Firebase Auth is available, listen for authentication state changes
  if (auth) {
    return new Promise((resolve) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in: handle user and initialise app
          await handleAuthenticatedUser(user);
          resolve();
        } else {
          // No user signed in: decide whether to show login or registration
          if (hasRemoteUsers) {
            showAuthModal(false);
          } else {
            showAuthModal(true);
          }
          resolve();
        }
      });
    });
  }
  // If Firebase Auth is not available, fall back to localStorage mechanism (offline)
  let hasLocalUsers = false;
  try {
    const storedUsers = localStorage.getItem(USERS_KEY);
    if (storedUsers) {
      const usersObj = JSON.parse(storedUsers);
      hasLocalUsers = usersObj && Object.keys(usersObj).length > 0;
    }
  } catch (ex) {
    hasLocalUsers = false;
  }
  const anyUsersExist = hasLocalUsers || hasRemoteUsers;
  if (!anyUsersExist) {
    showAuthModal(true);
    return;
  }
  if (!sessionStorage.getItem('loggedIn')) {
    showAuthModal(false);
    return;
  }
  init();
}

/**
 * Handles a successfully authenticated Firebase user. This helper extracts
 * the common logic for setting the session, determining the user's role,
 * deriving the cloud document ID, synchronising with Firestore, hiding the
 * auth modal and initialising the app. It is invoked both when a user
 * signs in via popup and when returning from a redirect.
 * @param {firebase.User} user The authenticated user object.
 */
async function handleAuthenticatedUser(user) {
  try {
    // Determine user role by loading from Firestore or creating a default
    let role = 'Agent';
    const emailLower = (user.email || '').toLowerCase();
    if (firestoreDb && emailLower) {
      const userRef = firestoreDb.collection('users').doc(emailLower);
      const docSnap = await userRef.get();
      if (docSnap.exists) {
        const docData = docSnap.data();
        if (docData && docData.role) {
          role = docData.role;
        }
      } else {
        // If user record does not exist, create one with default role
        await userRef.set({
          role: role,
          email: user.email || '',
          createdAt: Date.now()
        });
      }
    }
    // Persist current user in session
    const currentUserObj = { email: user.email || '', role: role };
    sessionStorage.setItem('currentUser', JSON.stringify(currentUserObj));
    sessionStorage.setItem('loggedIn', '1');
    // Derive and persist the cloud document ID based on the email.
    const derivedDocId = emailLower ? `hk-insurance-app-${emailLower}` : 'hk-insurance-app';
    currentCloudDocId = derivedDocId;
    try {
      localStorage.setItem('cloudDocId', derivedDocId);
    } catch (_) {}
    // Load local data and synchronise with the user's cloud document before initialising the UI.
    try {
      loadData();
      if (currentCloudDocId) {
        await syncWithCloud();
      }
    } catch (syncErr) {
      console.warn('Cloud sync during login failed:', syncErr);
    }
    // Hide auth modal if visible
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
    // Initialise the application UI (will reload data from localStorage)
    await init();
  } catch (error) {
    console.error('Error processing authenticated user:', error);
  }
}

// Upload the current data object to Firestore. Returns a promise that
// resolves when the upload completes or rejects on error. The documentId
// should be a simple string (no slashes).
function uploadDataToCloud(documentId) {
  return new Promise((resolve, reject) => {
    if (!firestoreDb) {
      reject(new Error('Firebase not configured')); return;
    }
    const docRef = firestoreDb.collection('hkInsurance').doc(documentId);
    // Ensure lastUpdated is set before uploading. If it doesn't exist or is
    // not numeric, update it now and persist locally (preserving this
    // timestamp in localStorage). We don't want saveData() to bump the
    // timestamp again immediately.
    try {
      if (typeof data.lastUpdated !== 'number') {
        data.lastUpdated = Date.now();
      } else {
        // Always bump timestamp on upload so remote knows when the last
        // change occurred
        data.lastUpdated = Date.now();
      }
      // Persist the new timestamp locally without overriding again
      saveData(true);
    } catch (e) {
      console.warn('Failed to update timestamp before upload', e);
    }
    const payload = JSON.parse(JSON.stringify(data));
    docRef.set(payload)
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Fetches data from the cloud without mutating the local data. This helper
 * is used in syncWithCloud() to decide which copy (remote or local) is
 * newer based on the lastUpdated timestamp. It resolves with the raw
 * remote object or null if the document does not exist. Any errors are
 * forwarded to the caller.
 * @param {string} documentId
 * @returns {Promise<Object|null>}
 */

// Download data from Firestore and replace local storage. Returns a promise
// resolving to true on success. Warning: this will overwrite your current
// local data. Data format must match the schema used by this application.
function downloadDataFromCloud(documentId) {
  return new Promise((resolve, reject) => {
    if (!firestoreDb) {
      reject(new Error('Firebase not configured')); return;
    }
    const docRef = firestoreDb.collection('hkInsurance').doc(documentId);
    docRef.get().then(doc => {
      if (!doc.exists) {
        reject(new Error('No data found at the specified document ID'));
        return;
      }
      try {
        const remoteData = doc.data();
        if (!remoteData || typeof remoteData !== 'object') {
          throw new Error('Invalid data format');
        }
        // Overwrite local data with remote and save locally. Use the
        // preserve flag to avoid changing the remote's lastUpdated
        // timestamp. This ensures that the timestamp comparison in
        // syncWithCloud() works correctly.
        data = remoteData;
        saveData(true);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    }).catch(reject);
  });
}

// Fetches data from Firestore without mutating the current local data. Returns
// the remote data object, or null if the document does not exist. Rejects
// on any other error.
function fetchDataFromCloud(documentId) {
  return new Promise((resolve, reject) => {
    if (!firestoreDb) {
      reject(new Error('Firebase not configured'));
      return;
    }
    const docRef = firestoreDb.collection('hkInsurance').doc(documentId);
    docRef.get().then(doc => {
      if (!doc.exists) {
        resolve(null);
      } else {
        resolve(doc.data());
      }
    }).catch(reject);
  });
}

// Stores the current document ID used for cloud sync. Defaults to 'hk-insurance-app'.
let currentCloudDocId = '';

/**
 * Loads the cloud document ID from localStorage (key: cloudDocId). If none
 * exists it falls back to 'hk-insurance-app'. Also updates any input field
 * with id 'cloud-doc-id' to reflect the current value. This should be
 * called on initialisation and whenever settings are rendered.
 */
function loadCloudDocId() {
  try {
    const stored = localStorage.getItem('cloudDocId');
    if (stored && stored.trim()) {
      currentCloudDocId = stored.trim();
    } else {
      // If no stored doc ID, derive a default based on current user when available
      let defaultDoc = 'hk-insurance-app';
      try {
        const currentUserJson = sessionStorage.getItem('currentUser');
        if (currentUserJson) {
          const userObj = JSON.parse(currentUserJson);
          // Use email rather than username when available. Sanitize to remove disallowed characters.
          if (userObj && userObj.email) {
            defaultDoc = `hk-insurance-app-${sanitizeEmail(userObj.email)}`;
          } else if (userObj && userObj.username) {
            defaultDoc = `hk-insurance-app-${userObj.username}`;
          }
        }
      } catch (_) {}
      currentCloudDocId = defaultDoc;
    }
  } catch (e) {
    // On error, use a generic default
    let defaultDoc = 'hk-insurance-app';
    try {
      const currentUserJson = sessionStorage.getItem('currentUser');
      if (currentUserJson) {
        const userObj = JSON.parse(currentUserJson);
        if (userObj && userObj.username) {
          defaultDoc = `hk-insurance-app-${userObj.username}`;
        }
      }
    } catch (_) {}
    currentCloudDocId = defaultDoc;
  }
  const docInput = document.getElementById('cloud-doc-id');
  if (docInput) {
    docInput.value = currentCloudDocId;
  }
}

/**
 * Persists the given document ID for cloud sync and updates the global
 * variable. Also updates the document ID input if present.
 * @param {string} id
 */
function saveCloudDocId(id) {
  currentCloudDocId = id.trim();
  try {
    localStorage.setItem('cloudDocId', currentCloudDocId);
  } catch (e) {
    console.warn('Failed to save cloud doc id', e);
  }
  const docInput = document.getElementById('cloud-doc-id');
  if (docInput) {
    docInput.value = currentCloudDocId;
  }
}

/**
 * Deletes the remote data document from Firestore. Use with caution.
 * @param {string} documentId
 * @returns {Promise<void>}
 */
function deleteDataFromCloud(documentId) {
  return new Promise((resolve, reject) => {
    if (!firestoreDb) {
      reject(new Error('Firebase not configured'));
      return;
    }
    firestoreDb.collection('hkInsurance').doc(documentId).delete()
      .then(() => resolve())
      .catch(reject);
  });
}

/**
 * Performs a two‑way sync with the cloud document. First downloads
 * the remote data (if any) and replaces local data, then immediately
 * uploads the merged local data back to Firestore. This ensures both
 * local and remote versions end up identical. If the remote document
 * does not exist, the download step will reject but the function
 * continues by uploading the local data. Any errors are surfaced to
 * the caller. Returns a promise that resolves when sync completes.
 */
async function syncWithCloud() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('Firebase is not configured. Update firebaseConfig in app.js.');
  }
  const docId = currentCloudDocId || 'hk-insurance-app';
  // Fetch remote data without mutating local. If nothing exists, remoteData will be null.
  let remoteData = null;
  try {
    remoteData = await fetchDataFromCloud(docId);
  } catch (err) {
    // If the error is not due to missing document, rethrow.
    // Missing document simply means remoteData remains null.
    if (!/No data found/.test(err.message)) {
      throw err;
    }
    remoteData = null;
  }
  // Helper to determine if the dataset is effectively empty (no records).
  function isEmpty(d) {
    if (!d) return true;
    const keys = ['customers','policies','payments','commissions','vehicles','brokers','companies','documents','quotes'];
    return keys.every(k => Array.isArray(d[k]) && d[k].length === 0);
  }
  const localIsEmpty = isEmpty(data);
  const remoteIsEmpty = isEmpty(remoteData);
  // If the local dataset is empty and there is remote data, always use the
  // remote copy. This avoids accidental deletion of cloud data when the
  // app is freshly installed or has been reset locally.
  if (!remoteIsEmpty && localIsEmpty) {
    data = remoteData;
    saveData(true);
    return;
  }
  // Otherwise, treat the local copy as authoritative and push it to
  // Firestore. We still update the local timestamp so subsequent syncs
  // recognise this change as newer than any prior remote copies.
  if (data) {
    data.lastUpdated = Date.now();
  }
  await uploadDataToCloud(docId);
  // Preserve the updated timestamp when saving locally
  saveData(true);
}

/**
 * Toggles the collapsed state of the sidebar. When collapsed it reduces
 * the sidebar width and hides labels. The state is persisted in
 * localStorage under the key 'sidebarCollapsed'.
 */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  const collapsed = sidebar.classList.toggle('collapsed');
  try {
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  } catch (e) {
    // ignore
  }
}

/**
 * Applies the collapsed state to the sidebar based on localStorage.
 * Call this during initialisation to restore previous state.
 */
function initSidebarState() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  let collapsed = false;
  try {
    collapsed = localStorage.getItem('sidebarCollapsed') === '1';
  } catch (e) {
    collapsed = false;
  }
  if (collapsed) {
    sidebar.classList.add('collapsed');
  }
}


// Page-level search terms for each list. These values are updated by search inputs on each section
// and are used by render functions to filter the displayed data. Keys correspond to entity plural names.
const pageSearchTerms = {
  customers: '',
  policies: '',
  payments: '',
  documents: '',
  brokers: '',
  companies: '',
  quotes: '',
  commissions: '',
  vehicles: ''
};

// Page‑level sort configuration for each list.  Each entry stores the
// currently selected field and the direction (1 = ascending, -1 = descending).
// When a table header is clicked the appropriate sort settings are toggled
// and the relevant render function re‑runs.  See attachTableSorting() for
// details.  If no field is defined then the natural order (insertion order)
// is used.
const pageSortStates = {
  customers: { field: '', dir: 1 },
  policies: { field: '', dir: 1 },
  payments: { field: '', dir: 1 },
  documents: { field: '', dir: 1 },
  brokers: { field: '', dir: 1 },
  companies: { field: '', dir: 1 },
  quotes: { field: '', dir: 1 },
  commissions: { field: '', dir: 1 },
  vehicles: { field: '', dir: 1 }
};

/**
 * Returns an array of plan objects for a given company and policy type.
 * Plans are defined under data.settings.policyPlans.
 * @param {string} companyId
 * @param {string} type
 */
function getPlansFor(companyId, type) {
  if (!data.settings || !Array.isArray(data.settings.policyPlans)) return [];
  return data.settings.policyPlans.filter(p => {
    return p.companyId === companyId && p.type === type;
  });
}

/**
 * Renders the Plan and Add‑ons fields inside the policy form. The plan dropdown is
 * populated based on the selected company and policy type. When a plan with
 * associated add‑ons is selected, a set of checkboxes is shown to allow
 * selection of add‑ons. Existing selections are preserved when editing.
 * @param {Object|null} policy Optional existing policy object when editing
 */
function renderPolicyPlanFields(policy) {
  const planContainer = document.getElementById('policy-plan-fields');
  const form = document.getElementById('policy-form');
  if (!planContainer || !form) return;
  // clear previous content
  planContainer.innerHTML = '';
  const companyId = form.elements['policy-company'].value;
  const type = form.elements['policy-type'].value;
  // Always render plan select
  const labelPlan = document.createElement('label');
  labelPlan.textContent = 'Plan';
  const selectPlan = document.createElement('select');
  selectPlan.id = 'policy-plan';
  const defOpt = document.createElement('option');
  defOpt.value = '';
  defOpt.textContent = 'Select plan';
  selectPlan.appendChild(defOpt);
  const plans = getPlansFor(companyId, type);
  plans.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    selectPlan.appendChild(opt);
  });
  // if editing, preselect plan id by looking up plan object by name or id
  if (policy && policy.plan) {
    // plan may store either plan id or plan name; handle both
    const stored = policy.plan;
    // if stored matches id
    selectPlan.value = stored;
    if (!selectPlan.value) {
      // match by name
      const planByName = plans.find(p => p.name === stored);
      if (planByName) selectPlan.value = planByName.id;
    }
  }
  labelPlan.appendChild(selectPlan);
  planContainer.appendChild(labelPlan);
  // Add‑ons container
  const addonsLabel = document.createElement('label');
  addonsLabel.id = 'policy-addons-label';
  addonsLabel.textContent = 'Add‑ons';
  const addonsDiv = document.createElement('div');
  addonsDiv.id = 'policy-addons-container';
  addonsLabel.appendChild(addonsDiv);
  planContainer.appendChild(addonsLabel);
  // Hide add-ons initially
  addonsLabel.style.display = 'none';
  function updateAddOns() {
    const selectedPlanId = selectPlan.value;
    addonsDiv.innerHTML = '';
    if (!selectedPlanId) {
      addonsLabel.style.display = 'none';
      return;
    }
    const selectedPlan = data.settings.policyPlans.find(p => p.id === selectedPlanId);
    if (!selectedPlan || !selectedPlan.addons || selectedPlan.addons.length === 0) {
      addonsLabel.style.display = 'none';
      return;
    }
    addonsLabel.style.display = '';
    selectedPlan.addons.forEach(addonName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.marginRight = '0.75rem';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = addonName;
      cb.id = 'addon-' + addonName.replace(/\s+/g, '-');
      if (policy && Array.isArray(policy.addons) && policy.addons.includes(addonName)) {
        cb.checked = true;
      }
      const lbl = document.createElement('span');
      lbl.style.marginLeft = '0.25rem';
      lbl.textContent = addonName;
      wrapper.appendChild(cb);
      wrapper.appendChild(lbl);
      addonsDiv.appendChild(wrapper);
    });
  }
  // initial call
  updateAddOns();
  // update when plan selection changes
  selectPlan.addEventListener('change', updateAddOns);
}

/**
 * Renders the dynamic category/type/plan/add-on fields inside the policy form. This replaces
 * the legacy renderPolicyPlanFields by using the master data configuration. It populates
 * the category (policy-type select), subtype (policy-subtype select), plan select and
 * add-on checkboxes based on the current master configuration. When editing a policy,
 * it preselects the appropriate values.
 */
function renderPolicyMasterFields(policy) {
  const master = data.settings.master || { categories: [], types: [], plans: [], addons: [] };
  const form = document.getElementById('policy-form');
  if (!form) return;
  const catSelect = form.elements['policy-type'];
  const subSelect = form.elements['policy-subtype'];
  const planContainer = document.getElementById('policy-plan-fields');
  // get company select for dynamic plan filtering
  const companySelect = form.elements['policy-company'];
  // populate category select
  catSelect.innerHTML = '';
  master.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    catSelect.appendChild(opt);
  });
  // function to update subtype options based on selected category
  function updateSubtypes() {
    /**
     * The policy type select may hold either the master category id or the
     * human‑readable name (e.g. "Motor"). To support both we normalise the
     * value to an id. If the value isn't recognised as an id we look up the
     * category by name. This allows backward compatibility when the user
     * selects a legacy option before configuring master data.
     */
    let catVal = catSelect.value;
    // find a matching category by id or by name
    let catObj = master.categories.find(c => c.id === catVal || c.name === catVal);
    const categoryId = catObj ? catObj.id : catVal;
    subSelect.innerHTML = '';
    master.types.filter(t => t.categoryId === categoryId).forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.name;
      subSelect.appendChild(opt);
    });
    // ensure a value is selected
    if (!subSelect.value && subSelect.options.length) subSelect.value = subSelect.options[0].value;
    updatePlans();
  }
  // function to update plan select and add-on checkboxes based on selected subtype
  function updatePlans() {
    const planFields = planContainer;
    planFields.innerHTML = '';
    // Determine the selected type id (allow id or name)
    let selectedTypeVal = subSelect.value;
    let typeObj = master.types.find(t => t.id === selectedTypeVal || t.name === selectedTypeVal);
    const typeId = typeObj ? typeObj.id : selectedTypeVal;
    // Determine selected company id
    const selectedCompanyId = companySelect && companySelect.value;
    // build plan select
    const planLabel = document.createElement('label');
    planLabel.textContent = 'Plan Type';
    const planSelect = document.createElement('select');
    planSelect.id = 'policy-plan';
    // placeholder
    const defOpt = document.createElement('option');
    defOpt.value = '';
    defOpt.textContent = 'Select plan';
    planSelect.appendChild(defOpt);
    // populate plans for this type
    master.plans.filter(p => {
      if (p.typeId !== typeId) return false;
      // If plan has specific companyIds, ensure the selected company matches; otherwise show plan universally
      if (Array.isArray(p.companyIds) && p.companyIds.length > 0) {
        // Include if plan assigned to selected company or if editing policy and plan matches existing
        if (selectedCompanyId && p.companyIds.includes(selectedCompanyId)) {
          return true;
        }
        // When editing, always include the currently selected plan even if company doesn't match
        if (policy && policy.plan === p.id) return true;
        return false;
      }
      return true;
    }).forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      planSelect.appendChild(opt);
    });
    // preselect if editing
    if (policy && policy.plan) {
      planSelect.value = policy.plan;
    }
    planLabel.appendChild(planSelect);
    planFields.appendChild(planLabel);
    // create add‑ons container
    const addonsLabel = document.createElement('label');
    addonsLabel.textContent = 'Add‑Ons';
    const addonsDiv = document.createElement('div');
    addonsDiv.id = 'policy-addons-container';
    addonsDiv.className = 'addon-checkboxes';
    addonsLabel.appendChild(addonsDiv);
    planFields.appendChild(addonsLabel);
    // helper to update add‑ons when plan changes
    function updateAddons() {
      const selectedPlanId = planSelect.value;
      addonsDiv.innerHTML = '';
      if (!selectedPlanId) {
        addonsLabel.style.display = 'none';
        return;
      }
      // determine selected category id (resolve from name if necessary)
      let catVal = catSelect.value;
      let catObj = master.categories.find(c => c.id === catVal || c.name === catVal);
      const realCatId = catObj ? catObj.id : catVal;
      // determine selected type id (resolve from name if necessary)
      let tVal = subSelect.value;
      let tObj = master.types.find(t => t.id === tVal || t.name === tVal);
      const realTypeId = tObj ? tObj.id : tVal;
      // filter add‑ons by category, type and selected plan
      const relevantAddons = master.addons.filter(a => {
        return a.categoryId === realCatId && a.typeId === realTypeId && Array.isArray(a.planIds) && a.planIds.includes(selectedPlanId);
      });
      if (relevantAddons.length === 0) {
        addonsLabel.style.display = 'none';
        return;
      }
      addonsLabel.style.display = '';
      relevantAddons.forEach(ad => {
        const lbl = document.createElement('label');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = ad.id;
        // mark checked if editing and previously selected
        if (policy && Array.isArray(policy.addons) && policy.addons.includes(ad.id)) {
          cb.checked = true;
        }
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(' ' + ad.name));
        addonsDiv.appendChild(lbl);
      });
    }
    // initial update
    updateAddons();
    planSelect.addEventListener('change', updateAddons);
  }
  // attach change handlers to update subtypes/plans
  catSelect.onchange = updateSubtypes;
  subSelect.onchange = updatePlans;
  // update plans when company changes
  if (companySelect) {
    companySelect.addEventListener('change', () => {
      // When company changes we need to update plan and add-ons
      updatePlans();
    });
  }
  // set initial selections when editing
  if (policy) {
    // find category id from policy.plan or from policyType
    // if policy has plan, derive category via type -> category chain
    let defaultCategory = null;
    if (policy.plan) {
      const planObj = master.plans.find(p => p.id === policy.plan);
      const typeObj = planObj && master.types.find(t => t.id === planObj.typeId);
      defaultCategory = typeObj && typeObj.categoryId;
    }
    // fallback to category stored in policy.categoryId or policy.policyType if matches category id
    if (!defaultCategory) {
      // see if policy.policyType equals a category name
      const categoryMatch = master.categories.find(c => c.name === policy.policyType);
      if (categoryMatch) defaultCategory = categoryMatch.id;
    }
    if (defaultCategory) catSelect.value = defaultCategory;
  }
  // update subtypes and plans after setting initial category
  updateSubtypes();
  // if editing policy, set subtype value and plan value afterwards
  if (policy) {
    // set subtype if saved
    if (policy.policySubType) {
      subSelect.value = policy.policySubType;
    }
    // after subSelect value set, update plans again to preserve selection
    updatePlans();
  }
}

/**
 * Attaches sorting handlers to a table’s header cells.  Each <th> must
 * declare a data‑field attribute that maps to the property on the
 * underlying objects.  When clicked, the function toggles between
 * ascending and descending order.  The provided render function is
 * re‑executed to reflect the new sort.  Sorting state is stored in
 * pageSortStates keyed by the page name.  This helper is idempotent –
 * attaching handlers multiple times will not duplicate listeners.
 *
 * @param {string} pageKey The key in pageSortStates to update
 * @param {HTMLElement} table The table element containing the <th> headers
 * @param {Function} renderFn The render function to call after sorting
 */
function attachTableSorting(pageKey, table, renderFn) {
  if (!table) return;
  const headers = table.querySelectorAll('thead th');
  headers.forEach(th => {
    const field = th.getAttribute('data-field');
    if (!field) return;
    // avoid attaching multiple listeners
    if (th._sortListenerAttached) return;
    th._sortListenerAttached = true;
    th.style.cursor = 'pointer';
    th.addEventListener('click', () => {
      const current = pageSortStates[pageKey];
      if (current.field === field) {
        // toggle direction
        current.dir = current.dir * -1;
      } else {
        current.field = field;
        current.dir = 1;
      }
      renderFn();
    });
  });
}

/**
 * Attach input listeners to page search boxes. When the user types in a
 * section's search field, update the corresponding term in
 * `pageSearchTerms` and re‑render the list.  This enables instant
 * filtering without requiring the user to press Enter.  For best
 * performance the render functions should apply the filter to their
 * underlying dataset on each call.
 */
function setupPageSearches() {
  const mapping = {
    customers: { id: 'customers-search', render: renderCustomersList },
    policies: { id: 'policies-search', render: renderPoliciesList },
    payments: { id: 'payments-search', render: renderPaymentsList },
    documents: { id: 'documents-search', render: renderDocumentsList },
    brokers: { id: 'brokers-search', render: renderBrokersList },
    companies: { id: 'companies-search', render: renderCompaniesList },
    quotes: { id: 'quotes-search', render: renderQuotesList },
    commissions: { id: 'commissions-search', render: renderCommissionsList },
    vehicles: { id: 'vehicles-search', render: renderVehiclesList }
  };
  Object.keys(mapping).forEach(key => {
    const info = mapping[key];
    const input = document.getElementById(info.id);
    if (input) {
      input.addEventListener('input', () => {
        pageSearchTerms[key] = input.value.trim();
        try {
          info.render();
        } catch (e) {
          console.error('Search render error', key, e);
        }
      });
    }
  });
}

// Load data from localStorage on startup
function loadData() {
  try {
    const saved = localStorage.getItem('insuranceData');
    if (saved) {
      data = JSON.parse(saved);
      // ensure new domains exist
      if (!Array.isArray(data.brokers)) data.brokers = [];
      if (!Array.isArray(data.companies)) data.companies = [];
      if (!Array.isArray(data.quotes)) data.quotes = [];
      if (!Array.isArray(data.commissions)) data.commissions = [];
      if (!Array.isArray(data.documents)) data.documents = [];
      if (!Array.isArray(data.vehicles)) data.vehicles = [];
      // ensure relationships array on customers
      if (Array.isArray(data.customers)) {
        data.customers.forEach(c => {
          if (!Array.isArray(c.relationships)) c.relationships = [];
        });
      }
      // ensure settings object exists with defaults
      if (typeof data.settings !== 'object' || data.settings === null) data.settings = {};
      const defaultSettings = {
        safeGivebackMin: 0.4,
        safeGivebackMax: 0.5,
        bankAccounts: [],
        upiIds: [],
        wallets: [],
        // whether dark mode is enabled
        darkMode: false,
        // master list of policy plans and their allowed add-ons
        // (deprecated; replaced by master data below)
        policyPlans: [],
        // new master data hierarchy: categories -> types -> plans -> addons
        master: {
          categories: [], // { id, name }
          types: [],      // { id, categoryId, name }
          plans: [],      // { id, typeId, name }
          addons: []      // { id, name, categoryId, typeId, planIds: [] }
        }
      };
      data.settings = Object.assign({}, defaultSettings, data.settings);
      // ensure policyPlans array exists (legacy)
      if (!Array.isArray(data.settings.policyPlans)) data.settings.policyPlans = [];
      // ensure master data exists
      if (!data.settings.master) data.settings.master = { categories: [], types: [], plans: [], addons: [] };
      ['categories','types','plans','addons'].forEach(key => {
        if (!Array.isArray(data.settings.master[key])) data.settings.master[key] = [];
      });
      // ensure commission records have new fields
      if (Array.isArray(data.commissions)) {
        data.commissions.forEach(c => {
          // ensure base fields
          if (c.received === undefined) c.received = 0;
          if (c.points === undefined) c.points = 0;
          if (c.charges === undefined) c.charges = 0;
          if (c.net === undefined) c.net = 0;
          if (c.expected === undefined) c.expected = 0;
          // cashback fields
          if (c.cashback === undefined) c.cashback = 0;
          if (c.cashbackCustomerId === undefined) c.cashbackCustomerId = '';
          if (c.cashbackMode === undefined) c.cashbackMode = '';
          if (!Array.isArray(c.redemptions)) c.redemptions = [];
        });
      }
      // ensure quotes have linking fields
      if (Array.isArray(data.quotes)) {
        data.quotes.forEach(q => {
          if (q.convertedToPolicyId === undefined) q.convertedToPolicyId = '';
          if (q.conversionDate === undefined) q.conversionDate = '';
          if (q.conversionStatus === undefined) q.conversionStatus = '';
        });
      }
      // ensure policies have quoteId field
      if (Array.isArray(data.policies)) {
        data.policies.forEach(p => {
          if (p.quoteId === undefined) p.quoteId = '';
          if (p.plan === undefined) p.plan = '';
          if (!Array.isArray(p.addons)) p.addons = [];
        });
      }
      // ensure payment fields exist
      if (Array.isArray(data.payments)) {
        data.payments.forEach(pay => {
          if (pay.account === undefined) pay.account = '';
          if (pay.tax === undefined) pay.tax = 0;
          if (pay.receiverType === undefined) pay.receiverType = 'Company';
          if (pay.receiver === undefined) pay.receiver = '';
          if (pay.mode === undefined) pay.mode = '';
        });
      }

      // ensure lastUpdated exists and is numeric. If not present
      // default to 0 so that remote data will be considered newer
      // during initial sync. Any subsequent saveData() calls will
      // update lastUpdated appropriately.
      if (typeof data.lastUpdated !== 'number') {
        data.lastUpdated = 0;
      }
    }
  } catch (e) {
    console.error('Failed to load local data', e);
  }
}

// Save current data to localStorage
function saveData() {
  // If preserveTimestamp flag is set then do not update the lastUpdated
  // field. This is primarily used when loading data from Firestore so
  // we keep the remote timestamp intact. Otherwise, bump the timestamp
  // to the current moment. A local copy without a lastUpdated field
  // will be considered older than a remote copy during sync.
  const preserve = arguments.length > 0 && arguments[0] === true;
  if (!preserve) {
    try {
      // Only update lastUpdated if data object exists
      if (data) {
        data.lastUpdated = Date.now();
      }
    } catch (err) {
      console.warn('Failed to update lastUpdated timestamp', err);
    }
  }
  localStorage.setItem('insuranceData', JSON.stringify(data));
  // Whenever data is saved, refresh dashboard metrics so summary cards
  // reflect the latest counts and totals. renderDashboard() will no‑op
  // if the dashboard is not currently mounted.
  try {
    renderDashboard();
  } catch (e) {
    // ignore if renderDashboard is not defined or fails
  }
}

// Generate a pseudo‑unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

/**
 * Upload a file to Google Drive via the Netlify backend. This function
 * converts the file to a base64 encoded string, posts it to the
 * `/.netlify/functions/uploadToDrive` endpoint with the file name and
 * mimeType, and returns the Drive response containing the file ID,
 * size and MIME type. The backend must be configured with
 * `GOOGLE_SERVICE_ACCOUNT_JSON` and `DRIVE_FOLDER_ID`.
 *
 * @param {File} file The file selected from the file input.
 * @returns {Promise<{id:string,size:string,mimeType:string}>}
 */
async function uploadFileToDrive(file) {
  // Read the file into an ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  // Convert to a binary string, then to base64
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  const payload = {
    fileName: file.name,
    mimeType: file.type || 'application/octet-stream',
    data: base64
  };
  const response = await fetch('/.netlify/functions/uploadToDrive', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('Drive upload failed');
  }
  return await response.json();
}

/**
 * Upload a binary blob to Google Drive. Used during migration when
 * converting legacy base64 data into Drive files. This helper accepts a
 * Blob and file name, converts it to base64 and posts to the backend.
 *
 * @param {Blob} blob The blob to upload
 * @param {string} fileName The original file name (for naming in Drive)
 * @returns {Promise<{id:string,size:string,mimeType:string}>}
 */
async function uploadBlobToDrive(blob, fileName) {
  const arrayBuffer = await blob.arrayBuffer();
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  const payload = {
    fileName: fileName,
    mimeType: blob.type || 'application/octet-stream',
    data: base64
  };
  const response = await fetch('/.netlify/functions/uploadToDrive', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('Drive upload failed');
  }
  return await response.json();
}

/**
 * Migrate legacy documents that embed file data directly in Firestore to
 * Google Drive. Earlier versions of this application stored base64
 * DataURLs directly in the `data` field of each document within the
 * `documents` array. This migration uploads the data to Drive via the
 * backend and replaces the document fields with the Drive file ID and
 * metadata. The migration is idempotent: if a document already
 * contains a `driveFileId` it is skipped.
 */
async function migrateOldDocuments() {
  try {
    if (!data || !Array.isArray(data.documents)) return;
    for (const doc of data.documents) {
      if (doc && doc.data && !doc.driveFileId) {
        const base64 = doc.data;
        try {
          const res = await fetch(base64);
          const blob = await res.blob();
          // Derive a file name from document name or fallback
          let fileName = doc.name;
          if (!fileName) {
            const match = base64.match(/^data:([^;]+);/);
            const ext = match ? match[1].split('/').pop() : 'bin';
            fileName = `${doc.id || generateId()}.${ext}`;
          }
          const result = await uploadBlobToDrive(blob, fileName);
          doc.driveFileId = result.id;
          doc.size = result.size;
          doc.mimeType = result.mimeType;
          delete doc.data;
        } catch (e) {
          console.warn('Migration failed for document', doc.id, e);
        }
      }
    }
    saveData(true);
  } catch (err) {
    console.warn('Migration error', err);
  }
}

// Format a date to local string
function formatDate(str) {
  if (!str) return '';
  try {
    return new Date(str).toLocaleDateString();
  } catch (e) {
    return str;
  }
}

// Format a timestamp into a relative phrase (e.g., "2 days ago") or date fallback
function formatRelative(str) {
  if (!str) return '';
  const date = new Date(str);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (isNaN(diffDays)) return formatDate(str);
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  }
  return formatDate(str);
}

// Compute age from DOB (years)
function calculateAge(dob) {
  if (!dob) return '';
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/*
 * Summary card renderers
 * These helpers generate high‑level metrics for each section and populate the
 * summary cards at the top of list pages. They should be lightweight and
 * avoid expensive computations. If a section container is missing, they
 * gracefully do nothing.
 */
function renderCustomersSummary() {
  const container = document.getElementById('customers-summary');
  if (!container) return;
  const total = data.customers.length;
  const verified = data.customers.filter(c => c.kyc === 'Verified').length;
  const pending = data.customers.filter(c => c.kyc === 'Pending').length;
  const rejected = data.customers.filter(c => c.kyc === 'Rejected').length;
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Customers</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${verified}</span><span class="summary-label">Verified</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${pending}</span><span class="summary-label">Pending</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${rejected}</span><span class="summary-label">Rejected</span></div>`);
  container.innerHTML = cards.join('');
}

function renderPoliciesSummary() {
  const container = document.getElementById('policies-summary');
  if (!container) return;
  const total = data.policies.length;
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  let thisMonth = 0;
  let totalPremium = 0;
  let pendingPayments = 0;
  data.policies.forEach(p => {
    totalPremium += (parseFloat(p.premiumAmount) || 0) + (parseFloat(p.taxAmount) || 0);
    if (p.paymentStatus && p.paymentStatus.toLowerCase() !== 'paid') pendingPayments++;
    if (p.startDate) {
      const d = new Date(p.startDate);
      if (d.getFullYear() === year && d.getMonth() === month) thisMonth++;
    }
  });
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Policies</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${thisMonth}</span><span class="summary-label">This Month</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">₹${totalPremium.toFixed(0)}</span><span class="summary-label">Total Premium</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${pendingPayments}</span><span class="summary-label">Pending Payment</span></div>`);
  container.innerHTML = cards.join('');
}

function renderQuotesSummary() {
  const container = document.getElementById('quotes-summary');
  if (!container) return;
  const total = data.quotes.length;
  const accepted = data.quotes.filter(q => q.conversionStatus === 'Accepted').length;
  const rejected = data.quotes.filter(q => q.status === 'Rejected' || q.conversionStatus === 'Rejected').length;
  const active = data.quotes.filter(q => !q.conversionStatus && q.status !== 'Rejected' && q.status !== 'Expired').length;
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Quotes</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${accepted}</span><span class="summary-label">Accepted</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${active}</span><span class="summary-label">Active</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${rejected}</span><span class="summary-label">Lost</span></div>`);
  container.innerHTML = cards.join('');
}

function renderPaymentsSummary() {
  const container = document.getElementById('payments-summary');
  if (!container) return;
  const total = data.payments.length;
  let sum = 0;
  let thisMonth = 0;
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  data.payments.forEach(p => {
    sum += (parseFloat(p.amount) || 0) + (parseFloat(p.tax) || 0);
    if (p.date) {
      const d = new Date(p.date);
      if (d.getFullYear() === year && d.getMonth() === month) thisMonth++;
    }
  });
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Payments</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">₹${sum.toFixed(0)}</span><span class="summary-label">Total Amount</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${thisMonth}</span><span class="summary-label">This Month</span></div>`);
  container.innerHTML = cards.join('');
}

function renderCommissionsSummary() {
  const container = document.getElementById('commissions-summary');
  if (!container) return;
  const total = data.commissions.length;
  let expectedSum = 0;
  let receivedSum = 0;
  let netSum = 0;
  data.commissions.forEach(c => {
    expectedSum += parseFloat(c.expected) || 0;
    receivedSum += parseFloat(c.received) || 0;
    netSum += parseFloat(c.net) || 0;
  });
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Commission Records</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">₹${expectedSum.toFixed(0)}</span><span class="summary-label">Expected</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">₹${receivedSum.toFixed(0)}</span><span class="summary-label">Received</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">₹${netSum.toFixed(0)}</span><span class="summary-label">Net</span></div>`);
  container.innerHTML = cards.join('');
}

function renderDocumentsSummary() {
  const container = document.getElementById('documents-summary');
  if (!container) return;
  const total = data.documents.length;
  const types = {};
  data.documents.forEach(d => {
    if (d.type) types[d.type] = true;
  });
  const typeCount = Object.keys(types).length;
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Documents</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${typeCount}</span><span class="summary-label">Doc Types</span></div>`);
  container.innerHTML = cards.join('');
}

function renderVehiclesSummary() {
  const container = document.getElementById('vehicles-summary');
  if (!container) return;
  const total = data.vehicles.length;
  let cars = 0, bikes = 0, other = 0;
  data.vehicles.forEach(v => {
    const t = (v.type || '').toLowerCase();
    if (t.includes('car')) cars++;
    else if (t.includes('bike') || t.includes('two')) bikes++;
    else other++;
  });
  const cards = [];
  cards.push(`<div class="summary-card"><span class="summary-value">${total}</span><span class="summary-label">Vehicles</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${cars}</span><span class="summary-label">Cars</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${bikes}</span><span class="summary-label">Bikes</span></div>`);
  cards.push(`<div class="summary-card"><span class="summary-value">${other}</span><span class="summary-label">Other</span></div>`);
  container.innerHTML = cards.join('');
}

// Compute tenure (years) between two dates
function calculateTenure(start, end) {
  if (!start || !end) return '';
  const s = new Date(start);
  const e = new Date(end);
  const diff = e - s;
  if (diff <= 0) return 0;
  const years = diff / (1000 * 60 * 60 * 24 * 365);
  return parseFloat(years.toFixed(2));
}

// Compute total payable from premium and tax
function calculateTotal(premium, tax) {
  const p = parseFloat(premium) || 0;
  const t = parseFloat(tax) || 0;
  return parseFloat((p + t).toFixed(2));
}

// Helper to push timeline entry
function addTimeline(entity, action) {
  const entry = { timestamp: new Date().toISOString(), action };
  if (!entity.timeline) entity.timeline = [];
  entity.timeline.push(entry);
}

// Create a profile section with collapsible content and optional preview of items
// title: section heading
// items: array of data items
// itemRenderer: function(item) => HTMLElement to render each item
// previewCount: how many items to show before "View all" toggle appears
function createProfileSection(title, items, itemRenderer, previewCount = 3) {
  const section = document.createElement('div');
  section.className = 'profile-section collapsed';
  const header = document.createElement('div');
  header.className = 'section-header';
  // Add toggle icon; will rotate when collapsed via CSS
  header.innerHTML = `<h4>${title}</h4><span class="toggle-icon">▾</span>`;
  header.addEventListener('click', () => {
    section.classList.toggle('collapsed');
  });
  section.appendChild(header);
  const content = document.createElement('div');
  content.className = 'section-content';
  let expanded = false;
  function renderItems(list) {
    content.innerHTML = '';
    list.forEach(item => {
      const el = itemRenderer(item);
      if (el) content.appendChild(el);
    });
  }
  function updateView() {
    if (expanded) {
      renderItems(items);
    } else {
      renderItems(items.slice(0, previewCount));
    }
    // add view toggle if more items than previewCount
    if (items.length > previewCount) {
      const viewToggle = document.createElement('div');
      viewToggle.className = 'view-all';
      viewToggle.textContent = expanded ? 'Show less' : `View all (${items.length})`;
      viewToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        expanded = !expanded;
        updateView();
      });
      content.appendChild(viewToggle);
    }
  }
  updateView();
  section.appendChild(content);
  return section;
}

// Navigation logic
function setupNavigation() {
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
      showSection(section);
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Invoke custom rendering for sections not covered by showSection
      if (section === 'alerts') {
        renderAlerts();
      } else if (section === 'timeline') {
        renderBusinessTimeline();
      }
    });
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  const sectionEl = document.getElementById(sectionId);
  if (sectionEl) sectionEl.classList.add('active');
  // refresh list when switching
  if (sectionId === 'customers') {
    renderCustomersList();
  } else if (sectionId === 'policies') {
    renderPoliciesList();
  } else if (sectionId === 'payments') {
    renderPaymentsList();
  } else if (sectionId === 'documents') {
    renderDocumentsList();
  } else if (sectionId === 'brokers') {
    renderBrokersList();
  } else if (sectionId === 'companies') {
    renderCompaniesList();
  } else if (sectionId === 'quotes') {
    renderQuotesList();
  } else if (sectionId === 'commissions') {
    renderCommissionsList();
  } else if (sectionId === 'vehicles') {
    renderVehiclesList();
  } else if (sectionId === 'calendar') {
    renderCalendar();
  } else if (sectionId === 'dashboard') {
    renderDashboard();
  } else if (sectionId === 'settings') {
    renderSettings();
  } else if (sectionId === 'alerts') {
    renderAlerts();
  } else if (sectionId === 'timeline') {
    renderBusinessTimeline();
  } else if (sectionId === 'reports') {
    // Render the reports section when selected
    renderReports();
  }
}

// -----------------------------------------------------------------------------
// Reporting and summary functions
//
// Utilities to compute date ranges and summarise transactions and commissions
// over specified periods. These functions support the Reports section and
// customer-level summaries.

/**
 * Compute a start and end date based on the selected range. For pre-defined
 * ranges we count back from today. The 'year' option resets the start to the
 * beginning of the current calendar year. For custom ranges the caller
 * provides start and end dates via the reports-date inputs.
 * @param {string} rangeVal
 * @returns {{start: Date|null, end: Date|null}}
 */
function getDateRange(rangeVal) {
  const now = new Date();
  let start = null;
  let end = null;
  if (rangeVal === 'custom') {
    const sVal = document.getElementById('reports-start')?.value;
    const eVal = document.getElementById('reports-end')?.value;
    start = sVal ? new Date(sVal) : null;
    end = eVal ? new Date(eVal) : null;
    if (end) {
      end.setHours(23,59,59,999);
    }
  } else if (rangeVal === 'year') {
    start = new Date(now.getFullYear(), 0, 1);
    end = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
  } else {
    const days = parseInt(rangeVal, 10);
    if (!isNaN(days)) {
      end = new Date(now);
      end.setHours(23,59,59,999);
      start = new Date(now);
      start.setDate(start.getDate() - days);
      start.setHours(0,0,0,0);
    }
  }
  return { start, end };
}

/**
 * Compute summary statistics for a single customer within a date range.
 * The summary includes the count of payments, total premium paid, commission
 * received, cashback given and net commission.
 * @param {string} customerId
 * @param {Date|null} start
 * @param {Date|null} end
 * @returns {{paymentsCount:number, premiumPaid:number, commissionReceived:number, cashback:number, netCommission:number}}
 */
function computeCustomerSummary(customerId, start, end) {
  const summary = { paymentsCount: 0, premiumPaid: 0, commissionReceived: 0, cashback: 0, netCommission: 0 };
  // Payments
  data.payments.forEach(pay => {
    if (pay.payer === customerId && pay.date) {
      try {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          summary.paymentsCount++;
          summary.premiumPaid += parseFloat(pay.amount || 0);
        }
      } catch (_) {}
    }
  });
  // Commissions via policies
  // Determine policy IDs linked to this customer
  const linkedPolicyIds = [];
  data.policies.forEach(p => {
    if ([p.proposer, p.insured, p.owner, p.nominee].includes(customerId)) {
      linkedPolicyIds.push(p.id);
    }
  });
  data.commissions.forEach(c => {
    if (linkedPolicyIds.includes(c.policyId)) {
      const recDate = c.date ? new Date(c.date) : null;
      const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
      if (inRange) {
        summary.commissionReceived += parseFloat(c.received || 0);
        summary.cashback += parseFloat(c.cashback || 0);
        summary.netCommission += parseFloat(c.net || 0);
      }
    }
  });
  return summary;
}

/**
 * Compute global summary statistics across all customers within a date range.
 * @param {Date|null} start
 * @param {Date|null} end
 * @returns {{paymentsCount:number, totalPremium:number, totalCommissionReceived:number, totalCashback:number, totalNetCommission:number}}
 */
function computeGlobalSummary(start, end) {
  let totalPremium = 0;
  let paymentsCount = 0;
  let totalCommissionReceived = 0;
  let totalCashback = 0;
  let totalNetCommission = 0;
  data.payments.forEach(pay => {
    if (pay.date) {
      try {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          paymentsCount++;
          totalPremium += parseFloat(pay.amount || 0);
        }
      } catch (_) {}
    }
  });
  data.commissions.forEach(c => {
    const recDate = c.date ? new Date(c.date) : null;
    const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
    if (inRange) {
      totalCommissionReceived += parseFloat(c.received || 0);
      totalCashback += parseFloat(c.cashback || 0);
      totalNetCommission += parseFloat(c.net || 0);
    }
  });
  return { paymentsCount, totalPremium, totalCommissionReceived, totalCashback, totalNetCommission };
}

/**
 * Compute summary statistics for a single policy within a date range.
 * The summary includes number of payments, premium paid, commission received,
 * cashback and net commission. It aggregates payments that reference this
 * policy (payment.policy) and commissions with matching policyId.
 * @param {string} policyId
 * @param {Date|null} start
 * @param {Date|null} end
 * @returns {{paymentsCount:number, premiumPaid:number, commissionReceived:number, cashback:number, netCommission:number}}
 */
function computePolicySummary(policyId, start, end) {
  const summary = { paymentsCount: 0, premiumPaid: 0, commissionReceived: 0, cashback: 0, netCommission: 0 };
  // Payments
  data.payments.forEach(pay => {
    if (pay.policy === policyId && pay.date) {
      try {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          summary.paymentsCount++;
          summary.premiumPaid += parseFloat(pay.amount || 0);
        }
      } catch (_) {}
    }
  });
  // Commissions
  data.commissions.forEach(c => {
    if (c.policyId === policyId) {
      const recDate = c.date ? new Date(c.date) : null;
      const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
      if (inRange) {
        summary.commissionReceived += parseFloat(c.received || 0);
        summary.cashback += parseFloat(c.cashback || 0);
        summary.netCommission += parseFloat(c.net || 0);
      }
    }
  });
  return summary;
}

/**
 * Compute summary statistics for a given customer with optional filters. Filters are applied to
 * underlying policy attributes (brokerId, companyId, policy type, vehicleId) so that only
 * transactions associated with policies matching the filters are included.
 * @param {string} customerId
 * @param {Date|null} start
 * @param {Date|null} end
 * @param {string} brokerFilter
 * @param {string} companyFilter
 * @param {string} typeFilter
 * @param {string} vehicleFilter
 * @returns {{paymentsCount:number, premiumPaid:number, commissionReceived:number, cashback:number, netCommission:number}}
 */
function computeFilteredCustomerSummary(customerId, start, end, brokerFilter, companyFilter, typeFilter, vehicleFilter) {
  const summary = { paymentsCount: 0, premiumPaid: 0, commissionReceived: 0, cashback: 0, netCommission: 0 };
  // Determine policy IDs linked to this customer
  const linkedPolicyIds = [];
  data.policies.forEach(p => {
    if ([p.proposer, p.insured, p.owner, p.nominee].includes(customerId)) {
      linkedPolicyIds.push(p.id);
    }
  });
  // Helper to check if a policy passes filters
  function policyPasses(p) {
    if (brokerFilter && p.brokerId !== brokerFilter) return false;
    if (companyFilter && p.companyId !== companyFilter) return false;
    if (vehicleFilter && p.vehicleId !== vehicleFilter) return false;
    if (typeFilter) {
      // Check both simple policyType and master category name
      if (p.policyType && p.policyType === typeFilter) {
        // passes
      } else if (p.policyCategoryId) {
        const cat = data.settings?.master?.categories?.find(cat => cat.id === p.policyCategoryId);
        if (!cat || cat.name !== typeFilter) return false;
      } else {
        return false;
      }
    }
    return true;
  }
  // Aggregate payments
  data.payments.forEach(pay => {
    if (pay.payer === customerId && pay.date) {
      try {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          // If this payment references a policy, ensure policy passes filters
          if (pay.policy) {
            const p = data.policies.find(pol => pol.id === pay.policy);
            if (p && !policyPasses(p)) return;
          }
          summary.paymentsCount++;
          summary.premiumPaid += parseFloat(pay.amount || 0);
        }
      } catch (_) {}
    }
  });
  // Aggregate commissions associated with linked policies
  data.commissions.forEach(c => {
    if (linkedPolicyIds.includes(c.policyId)) {
      const p = data.policies.find(pol => pol.id === c.policyId);
      if (p && !policyPasses(p)) return;
      const recDate = c.date ? new Date(c.date) : null;
      const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
      if (inRange) {
        summary.commissionReceived += parseFloat(c.received || 0);
        summary.cashback += parseFloat(c.cashback || 0);
        summary.netCommission += parseFloat(c.net || 0);
      }
    }
  });
  return summary;
}

/**
 * Compute global summary statistics across all policies with optional filters. Only
 * transactions associated with policies that match the filters will be included.
 * @param {Date|null} start
 * @param {Date|null} end
 * @param {string} brokerFilter
 * @param {string} companyFilter
 * @param {string} typeFilter
 * @param {string} vehicleFilter
 * @returns {{paymentsCount:number, totalPremium:number, totalCommissionReceived:number, totalCashback:number, totalNetCommission:number}}
 */
function computeFilteredGlobalSummary(start, end, brokerFilter, companyFilter, typeFilter, vehicleFilter) {
  let totalPremium = 0;
  let paymentsCount = 0;
  let totalCommissionReceived = 0;
  let totalCashback = 0;
  let totalNetCommission = 0;
  // Helper to check if a policy passes filters
  function policyPasses(p) {
    if (brokerFilter && p.brokerId !== brokerFilter) return false;
    if (companyFilter && p.companyId !== companyFilter) return false;
    if (vehicleFilter && p.vehicleId !== vehicleFilter) return false;
    if (typeFilter) {
      if (p.policyType && p.policyType === typeFilter) {
        // ok
      } else if (p.policyCategoryId) {
        const cat = data.settings?.master?.categories?.find(cat => cat.id === p.policyCategoryId);
        if (!cat || cat.name !== typeFilter) return false;
      } else {
        return false;
      }
    }
    return true;
  }
  // Payments
  data.payments.forEach(pay => {
    if (pay.date) {
      try {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          // Check policy filter if payment references a policy
          if (pay.policy) {
            const p = data.policies.find(pol => pol.id === pay.policy);
            if (p && !policyPasses(p)) return;
          }
          paymentsCount++;
          totalPremium += parseFloat(pay.amount || 0);
        }
      } catch (_) {}
    }
  });
  // Commissions
  data.commissions.forEach(c => {
    const recDate = c.date ? new Date(c.date) : null;
    const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
    if (inRange) {
      const p = data.policies.find(pol => pol.id === c.policyId);
      if (p && !policyPasses(p)) return;
      totalCommissionReceived += parseFloat(c.received || 0);
      totalCashback += parseFloat(c.cashback || 0);
      totalNetCommission += parseFloat(c.net || 0);
    }
  });
  return { paymentsCount, totalPremium, totalCommissionReceived, totalCashback, totalNetCommission };
}

/**
 * Compute summary for a given vehicle across all policies referencing that vehicle. Only
 * policies that match additional filters for broker, company and policy type are considered.
 * @param {string} vehicleId
 * @param {Date|null} start
 * @param {Date|null} end
 * @param {string} brokerFilter
 * @param {string} companyFilter
 * @param {string} typeFilter
 * @returns {{paymentsCount:number, premiumPaid:number, commissionReceived:number, cashback:number, netCommission:number}}
 */
function computeVehicleSummary(vehicleId, start, end, brokerFilter, companyFilter, typeFilter) {
  const summary = { paymentsCount: 0, premiumPaid: 0, commissionReceived: 0, cashback: 0, netCommission: 0 };
  // Get policies with this vehicle
  const vehiclePolicies = data.policies.filter(p => p.vehicleId === vehicleId);
  // Helper to check if a policy passes filters
  function policyPasses(p) {
    if (brokerFilter && p.brokerId !== brokerFilter) return false;
    if (companyFilter && p.companyId !== companyFilter) return false;
    if (typeFilter) {
      if (p.policyType && p.policyType === typeFilter) {
        // ok
      } else if (p.policyCategoryId) {
        const cat = data.settings?.master?.categories?.find(cat => cat.id === p.policyCategoryId);
        if (!cat || cat.name !== typeFilter) return false;
      } else {
        return false;
      }
    }
    return true;
  }
  vehiclePolicies.forEach(p => {
    if (!policyPasses(p)) return;
    // Sum payments and commissions associated with this policy
    data.payments.forEach(pay => {
      if (pay.policy === p.id && pay.date) {
        const d = new Date(pay.date);
        if ((!start || d >= start) && (!end || d <= end)) {
          summary.paymentsCount++;
          summary.premiumPaid += parseFloat(pay.amount || 0);
        }
      }
    });
    data.commissions.forEach(c => {
      if (c.policyId === p.id) {
        const recDate = c.date ? new Date(c.date) : null;
        const inRange = (!start || !recDate || recDate >= start) && (!end || !recDate || recDate <= end);
        if (inRange) {
          summary.commissionReceived += parseFloat(c.received || 0);
          summary.cashback += parseFloat(c.cashback || 0);
          summary.netCommission += parseFloat(c.net || 0);
        }
      }
    });
  });
  return summary;
}

/**
 * Convert current report rows into CSV and trigger download. The global
 * variable currentReportRows is set each time renderReports() runs. Each row
 * contains label, transactions, premium, commission, cashback and net.
 */
function downloadReportCsv() {
  const rows = window.currentReportRows;
  if (!rows || rows.length === 0) {
    alert('No data to export');
    return;
  }
  const header = ['Entity','Transactions','Premium','Commission','Cashback','Net'];
  let csv = header.join(',') + '\n';
  rows.forEach(r => {
    csv += `${r.label},${r.transactions},${r.premium.toFixed(2)},${r.commission.toFixed(2)},${r.cashback.toFixed(2)},${r.net.toFixed(2)}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'report.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Render the reports section. Uses the selected date range to compute global
 * and per-customer summaries, builds a table of results and injects it into
 * the reports-summary container.
 */
function renderReports() {
  const summaryContainer = document.getElementById('reports-summary');
  const chartContainer = document.getElementById('report-chart');
  if (!summaryContainer || !chartContainer) return;
  // Determine date range
  const rangeSelect = document.getElementById('reports-range');
  const rangeVal = rangeSelect ? rangeSelect.value : '30';
  let start, end;
  if (rangeVal === 'custom') {
    const startInput = document.getElementById('reports-start');
    const endInput = document.getElementById('reports-end');
    if (startInput && endInput && startInput.value && endInput.value) {
      start = new Date(startInput.value);
      end = new Date(endInput.value);
    } else {
      alert('Please select both start and end dates for custom range');
      return;
    }
  } else {
    const rangeObj = getDateRange(rangeVal);
    start = rangeObj.start;
    end = rangeObj.end;
  }
  // Determine entity type and selection
  const typeSelect = document.getElementById('report-entity-type');
  const entityType = typeSelect ? typeSelect.value : 'all';
  const entitySelect = document.getElementById('report-entity-select');
  const entityId = entitySelect ? entitySelect.value : null;
  // Additional filters
  const brokerFilter = document.getElementById('report-broker')?.value || '';
  const companyFilter = document.getElementById('report-company')?.value || '';
  const typeFilter = document.getElementById('report-policy-type')?.value || '';
  const vehicleFilter = document.getElementById('report-vehicle')?.value || '';
  // Chart type
  const chartTypeSel = document.getElementById('report-chart-type');
  const chartType = chartTypeSel ? chartTypeSel.value : 'bar';
  let summary;
  let chartLabel = '';
  let reportRows = [];
  if (entityType === 'customer') {
    if (!entityId) {
      alert('Please select a customer');
      return;
    }
    summary = computeFilteredCustomerSummary(entityId, start, end, brokerFilter, companyFilter, typeFilter, vehicleFilter);
    const cust = data.customers.find(c => c.id === entityId);
    chartLabel = cust ? (cust.fullName || 'Customer') : 'Customer';
    reportRows.push({
      label: chartLabel,
      transactions: summary.paymentsCount,
      premium: summary.premiumPaid,
      commission: summary.commissionReceived,
      cashback: summary.cashback,
      net: summary.netCommission
    });
  } else if (entityType === 'policy') {
    if (!entityId) {
      alert('Please select a policy');
      return;
    }
    // Compute summary for a single policy if it passes filters
    const pol = data.policies.find(p => p.id === entityId);
    if (!pol) {
      alert('Policy not found');
      return;
    }
    const passes = (!brokerFilter || pol.brokerId === brokerFilter) && (!companyFilter || pol.companyId === companyFilter) && (!typeFilter || (pol.policyType === typeFilter || (function(){
      const cat = data.settings?.master?.categories?.find(cat => cat.id === pol.policyCategoryId);
      return cat && cat.name === typeFilter;
    })())) && (!vehicleFilter || pol.vehicleId === vehicleFilter);
    if (passes) {
      summary = computePolicySummary(entityId, start, end);
      chartLabel = pol.policyNumber || 'Policy';
      reportRows.push({
        label: chartLabel,
        transactions: summary.paymentsCount,
        premium: summary.premiumPaid,
        commission: summary.commissionReceived,
        cashback: summary.cashback,
        net: summary.netCommission
      });
    } else {
      // If policy does not meet filter criteria, summary is zero
      summary = { paymentsCount: 0, premiumPaid: 0, commissionReceived: 0, cashback: 0, netCommission: 0 };
      chartLabel = pol.policyNumber || 'Policy';
      reportRows.push({ label: chartLabel, transactions: 0, premium: 0, commission: 0, cashback: 0, net: 0 });
    }
  } else if (entityType === 'vehicle') {
    if (!entityId) {
      alert('Please select a vehicle');
      return;
    }
    // Compute summary for selected vehicle across its policies
    const veh = data.vehicles.find(v => v.id === entityId);
    chartLabel = veh ? (veh.regNumber || veh.model || 'Vehicle') : 'Vehicle';
    summary = computeVehicleSummary(entityId, start, end, brokerFilter, companyFilter, typeFilter);
    reportRows.push({
      label: chartLabel,
      transactions: summary.paymentsCount,
      premium: summary.premiumPaid,
      commission: summary.commissionReceived,
      cashback: summary.cashback,
      net: summary.netCommission
    });
  } else {
    // All: global summary and per-customer breakdown with filters applied
    const global = computeFilteredGlobalSummary(start, end, brokerFilter, companyFilter, typeFilter, vehicleFilter);
    chartLabel = 'All Data';
    summary = {
      paymentsCount: global.paymentsCount,
      premiumPaid: global.totalPremium,
      commissionReceived: global.totalCommissionReceived,
      cashback: global.totalCashback,
      netCommission: global.totalNetCommission
    };
    // Build rows per customer for CSV
    data.customers.forEach(cust => {
      const s = computeFilteredCustomerSummary(cust.id, start, end, brokerFilter, companyFilter, typeFilter, vehicleFilter);
      if (s.paymentsCount > 0 || s.commissionReceived > 0 || s.netCommission !== 0) {
        reportRows.push({
          label: cust.fullName || '(Unnamed)',
          transactions: s.paymentsCount,
          premium: s.premiumPaid,
          commission: s.commissionReceived,
          cashback: s.cashback,
          net: s.netCommission
        });
      }
    });
  }
  // Prepare chart data
  const chartData = [
    summary.premiumPaid || summary.totalPremium || 0,
    summary.commissionReceived || summary.totalCommissionReceived || 0,
    summary.cashback || summary.totalCashback || 0,
    summary.netCommission || summary.totalNetCommission || 0
  ];
  const metricLabels = ['Premium', 'Commission', 'Cashback', 'Net'];
  // Update or create chart based on selected type. If the chart type changes, destroy and recreate.
  const ctx = chartContainer.getContext('2d');
  if (!window.reportChart || window.reportChart.config.type !== chartType) {
    if (window.reportChart) {
      window.reportChart.destroy();
    }
    window.reportChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: metricLabels,
        datasets: [
          {
            label: chartLabel,
            data: chartData,
            backgroundColor: ['#00bcd4','#4caf50','#ff9800','#673ab7'],
            borderColor: ['#0097a7','#388e3c','#f57c00','#512da8'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '₹' + value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let val;
                if (Array.isArray(context.parsed)) {
                  val = context.parsed;
                } else {
                  val = context.parsed.y;
                }
                const label = context.label;
                if (Array.isArray(val)) {
                  return label + ': ₹' + val.map(v => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })).join(', ');
                }
                return label + ': ₹' + val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              }
            }
          }
        }
      }
    });
  } else {
    // update dataset
    window.reportChart.data.labels = metricLabels;
    window.reportChart.data.datasets[0].label = chartLabel;
    window.reportChart.data.datasets[0].data = chartData;
    window.reportChart.update();
  }
  // Render summary cards for the selected dataset
  let html = '';
  html += '<div class="summary-cards-container">';
  function buildCard(title, value) {
    return `<div class="summary-card"><h5>${title}</h5><p>₹${value.toFixed(2)}</p></div>`;
  }
  html += buildCard('Premium', chartData[0]);
  html += buildCard('Commission', chartData[1]);
  html += buildCard('Cashback', chartData[2]);
  html += buildCard('Net', chartData[3]);
  html += `<div class="summary-card"><h5>Transactions</h5><p>${summary.paymentsCount || summary.paymentsCount === 0 ? summary.paymentsCount : reportRows.reduce((acc,row) => acc + row.transactions, 0)}</p></div>`;
  html += '</div>';
  // Add detailed table when showing all entities
  if (entityType === 'all' && reportRows.length > 0) {
    html += '<h3 style="margin-top:1rem;">Customer Breakdown</h3>';
    html += '<table class="data-table" style="margin-top:0.5rem;"><thead><tr><th>Customer</th><th>Transactions</th><th>Premium</th><th>Commission</th><th>Cashback</th><th>Net</th></tr></thead><tbody>';
    reportRows.sort((a,b) => b.net - a.net);
    reportRows.forEach(r => {
      html += `<tr><td>${r.label}</td><td>${r.transactions}</td><td>₹${r.premium.toFixed(2)}</td><td>₹${r.commission.toFixed(2)}</td><td>₹${r.cashback.toFixed(2)}</td><td>₹${r.net.toFixed(2)}</td></tr>`;
    });
    html += '</tbody></table>';
  }
  summaryContainer.innerHTML = html;
  // Store current report rows for CSV export
  window.currentReportRows = reportRows;
}

// Render customers table
function renderCustomersList() {
  const container = document.getElementById('customers-list');
  if (!container) return;
  const term = (pageSearchTerms.customers || '').toLowerCase();
  const list = (!term
    ? data.customers.slice()
    : data.customers.filter(c => {
        const name = (c.fullName || '').toLowerCase();
        const mobile = (c.primaryMobile || '').toLowerCase();
        const email = (c.email || '').toLowerCase();
        const type = (c.customerType || '').toLowerCase();
        return name.includes(term) || mobile.includes(term) || email.includes(term) || type.includes(term);
      })
  );
  if (list.length === 0) {
    // Empty state with icon and guidance
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.users}</div><p>No customers found.</p><p class="small-note">Use the + button or quick add menu to create your first customer.</p></div>`;
    // update summary metrics even when empty
    renderCustomersSummary();
    return;
  }
  // Build a modern table view
  let html = '<div class="table-container"><table class="data-table"><thead><tr><th>Name</th><th>Type</th><th>Mobile</th><th>Email</th><th>Actions</th></tr></thead><tbody>';
  list.forEach(c => {
    const name = c.fullName || '(Unnamed)';
    const type = c.customerType || '';
    const mobile = c.primaryMobile || '';
    const email = c.email || '';
    html += `<tr data-id="${c.id}">
      <td>${name}</td>
      <td>${type}</td>
      <td>${mobile}</td>
      <td>${email}</td>
      <td class="actions">
        <button class="view-customer" data-id="${c.id}" title="View">${ICONS.eye}</button>
        <button class="edit-customer" data-id="${c.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-customer" data-id="${c.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // attach event handlers
  container.querySelectorAll('.view-customer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openCustomerDetail(id);
    });
  });
  container.querySelectorAll('.edit-customer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openCustomerForm(id);
    });
  });
  container.querySelectorAll('.delete-customer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (confirm('Delete this customer?')) {
        deleteCustomer(id);
      }
    });
  });
  // update summary metrics
  renderCustomersSummary();
}

function deleteCustomer(id) {
  // remove from policies references
  data.policies.forEach(p => {
    if (p.proposer === id) p.proposer = '';
    if (p.insured === id) p.insured = '';
    if (p.owner === id) p.owner = '';
    if (p.nominee === id) p.nominee = '';
  });
  data.customers = data.customers.filter(c => c.id !== id);
  saveData();
  renderCustomersList();
  updateSelectOptions();
}

// Open customer form for add or edit
function openCustomerForm(id) {
  const modal = document.getElementById('customer-form-modal');
  const title = document.getElementById('customer-form-title');
  const form = document.getElementById('customer-form');
  // reset form
  form.reset();
  form.elements['customer-id'].value = '';
  // default values
  // populate relationships select with all customers (except editing one)
  const relSelect = document.getElementById('customer-relationships');
  // clear options
  relSelect.innerHTML = '';
  data.customers.forEach(cust => {
    // do not include the current customer in relationships select
    if (id && cust.id === id) return;
    const opt = document.createElement('option');
    opt.value = cust.id;
    opt.textContent = cust.fullName || '';
    relSelect.appendChild(opt);
  });
  if (id) {
    const customer = data.customers.find(c => c.id === id);
    if (!customer) return;
    title.textContent = 'Edit Customer';
    form.elements['customer-id'].value = customer.id;
    form.elements['customer-full-name'].value = customer.fullName || '';
    form.elements['customer-gender'].value = customer.gender || '';
    form.elements['customer-dob'].value = customer.dob || '';
    form.elements['customer-age'].value = customer.age || '';
    form.elements['customer-type'].value = customer.customerType || 'Individual';
    form.elements['customer-pan'].value = customer.pan || '';
    form.elements['customer-aadhaar'].value = customer.aadhaar || '';
    form.elements['customer-gst'].value = customer.gst || '';
    form.elements['customer-primary-mobile'].value = customer.primaryMobile || '';
    form.elements['customer-alt-mobile'].value = customer.altMobile || '';
    form.elements['customer-email'].value = customer.email || '';
    form.elements['customer-res-address'].value = customer.resAddress || '';
    form.elements['customer-office-address'].value = customer.officeAddress || '';
    form.elements['customer-language'].value = customer.language || '';
    form.elements['customer-occupation'].value = customer.occupation || '';
    form.elements['customer-nominee'].value = customer.nominee || '';
    form.elements['customer-kyc'].value = customer.kycStatus || 'Pending';
    form.elements['customer-remarks'].value = customer.remarks || '';
    // set relationships selections
    if (Array.isArray(customer.relationships)) {
      customer.relationships.forEach(rel => {
        const opt = Array.from(relSelect.options).find(o => o.value === rel.id);
        if (opt) opt.selected = true;
      });
    }
  } else {
    title.textContent = 'Add Customer';
  }
  modal.classList.remove('hidden');
  // Move focus into the form for accessibility
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

// Compute age when DOB changes
function handleCustomerDOBChange() {
  const dobInput = document.getElementById('customer-dob');
  dobInput.addEventListener('change', () => {
    const ageInput = document.getElementById('customer-age');
    const age = calculateAge(dobInput.value);
    ageInput.value = age;
  });
}

// Handle customer form submit
function handleCustomerForm() {
  const form = document.getElementById('customer-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['customer-id'].value;
    const customerObj = {
      id: id || generateId(),
      fullName: form.elements['customer-full-name'].value.trim(),
      gender: form.elements['customer-gender'].value,
      dob: form.elements['customer-dob'].value,
      age: form.elements['customer-age'].value,
      customerType: form.elements['customer-type'].value,
      pan: form.elements['customer-pan'].value,
      aadhaar: form.elements['customer-aadhaar'].value,
      gst: form.elements['customer-gst'].value,
      primaryMobile: form.elements['customer-primary-mobile'].value,
      altMobile: form.elements['customer-alt-mobile'].value,
      email: form.elements['customer-email'].value,
      resAddress: form.elements['customer-res-address'].value,
      officeAddress: form.elements['customer-office-address'].value,
      language: form.elements['customer-language'].value,
      occupation: form.elements['customer-occupation'].value,
      nominee: form.elements['customer-nominee'].value,
      kycStatus: form.elements['customer-kyc'].value,
      remarks: form.elements['customer-remarks'].value
      ,
      relationships: []
    };
    // collect selected relationships
    const relSelect = document.getElementById('customer-relationships');
    const selected = Array.from(relSelect.selectedOptions).map(opt => opt.value);
    customerObj.relationships = selected.map(relId => ({ id: relId }));
    if (id) {
      // update existing
      const existing = data.customers.find(c => c.id === id);
      Object.assign(existing, customerObj);
      addTimeline(existing, 'Updated customer');
    } else {
      addTimeline(customerObj, 'Created customer');
      data.customers.push(customerObj);
    }
    saveData();
    renderCustomersList();
    updateSelectOptions();
    // hide modal
    document.getElementById('customer-form-modal').classList.add('hidden');
  });
  // close button
  document.getElementById('close-customer-form').addEventListener('click', () => {
    document.getElementById('customer-form-modal').classList.add('hidden');
  });
}

// Display customer detail modal
function openCustomerDetail(id) {
  const customer = data.customers.find(c => c.id === id);
  if (!customer) return;
  const modal = document.getElementById('customer-detail-modal');
  const titleEl = document.getElementById('customer-detail-title');
  const content = document.getElementById('customer-detail-content');
  // Set the modal title for accessibility
  titleEl.textContent = customer.fullName || '';
  // Clear content
  content.innerHTML = '';
  // Header card
  const headerEl = document.createElement('div');
  headerEl.className = 'profile-header';
  const headerTop = document.createElement('div');
  headerTop.className = 'header-top';
  const nameEl = document.createElement('h3');
  nameEl.textContent = customer.fullName || '';
  headerTop.appendChild(nameEl);
  if (customer.customerType) {
    const badge = document.createElement('span');
    badge.className = 'status-badge';
    badge.textContent = customer.customerType;
    headerTop.appendChild(badge);
  }
  headerEl.appendChild(headerTop);
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  if (customer.primaryMobile) {
    const p = document.createElement('p');
    p.textContent = `📞 ${customer.primaryMobile}`;
    infoDiv.appendChild(p);
  }
  if (customer.email) {
    const p = document.createElement('p');
    p.textContent = `✉️ ${customer.email}`;
    infoDiv.appendChild(p);
  }
  if (customer.kycStatus) {
    const p = document.createElement('p');
    p.textContent = `KYC: ${customer.kycStatus}`;
    infoDiv.appendChild(p);
  }
  headerEl.appendChild(infoDiv);
  content.appendChild(headerEl);
  // Basic information section
  const basicItems = [];
  const pushItem = (label, val) => { if (val) basicItems.push({ label, value: val }); };
  pushItem('Gender', customer.gender);
  pushItem('Date of Birth', formatDate(customer.dob));
  pushItem('Age', customer.age);
  pushItem('PAN', customer.pan);
  pushItem('Aadhaar', customer.aadhaar);
  pushItem('GST', customer.gst);
  pushItem('Language', customer.language);
  pushItem('Occupation', customer.occupation);
  pushItem('Nominee', customer.nominee);
  pushItem('Remarks', customer.remarks);
  if (basicItems.length) {
    const basicSection = createProfileSection('Basic Information', basicItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value || ''}</span>`;
      return el;
    });
    content.appendChild(basicSection);
  }
  // Addresses section
  const addrItems = [];
  if (customer.resAddress) addrItems.push({ label: 'Residential Address', value: customer.resAddress });
  if (customer.officeAddress) addrItems.push({ label: 'Office Address', value: customer.officeAddress });
  if (addrItems.length) {
    const addrSection = createProfileSection('Addresses', addrItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(addrSection);
  }
  // Policies section
  const linkedPolicies = data.policies.filter(p => [p.proposer, p.insured, p.owner, p.nominee].includes(id));
  if (linkedPolicies.length > 0) {
    const policiesSection = createProfileSection('Policies', linkedPolicies, policy => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      const premium = policy.premiumAmount ? `₹${policy.premiumAmount}` : '';
      el.innerHTML = `<span><strong>${policy.policyNumber || ''}</strong> (${policy.policyType || ''})</span><span>${premium}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        // close this modal and open policy detail
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openPolicyDetail(policy.id);
      });
      return el;
    });
    content.appendChild(policiesSection);
  }
  // Quotes section
  const linkedQuotes = data.quotes.filter(q => q.customer === id);
  if (linkedQuotes.length > 0) {
    const quotesSection = createProfileSection('Quotes', linkedQuotes, quote => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      const date = quote.quoteDate ? formatDate(quote.quoteDate) : '';
      el.innerHTML = `<span><strong>${quote.policyType || ''}</strong> (${quote.status || ''})</span><span>${date}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openQuoteDetail(quote.id);
      });
      return el;
    });
    content.appendChild(quotesSection);
  }
  // Vehicles section
  const ownedVehicles = data.vehicles.filter(v => v.owner === id);
  if (ownedVehicles.length > 0) {
    const vehiclesSection = createProfileSection('Vehicles', ownedVehicles, veh => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span><strong>${veh.vehicleNumber || ''}</strong> (${veh.make || ''} ${veh.model || ''})</span><span>${veh.type || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openVehicleDetail(veh.id);
      });
      return el;
    });
    content.appendChild(vehiclesSection);
  }
  // Payments section
  const linkedPayments = data.payments.filter(pay => pay.payer === id);
  if (linkedPayments.length > 0) {
    const paymentsSection = createProfileSection('Payments', linkedPayments, pay => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      const amt = pay.amount ? `₹${pay.amount}` : '';
      const mode = pay.mode || '';
      el.innerHTML = `<span>${formatDate(pay.date)} - ${mode}</span><span>${amt}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openPaymentDetail(pay.id);
      });
      return el;
    });
    content.appendChild(paymentsSection);
  }
  // Commissions section (via policies)
  const commissionEntries = [];
  linkedPolicies.forEach(p => {
    data.commissions.forEach(c => {
      if (c.policyId === p.id) commissionEntries.push({
        policyNumber: p.policyNumber,
        net: c.net || 0,
        expected: c.expected || 0,
        id: c.id
      });
    });
  });
  if (commissionEntries.length > 0) {
    const commissionsSection = createProfileSection('Commissions', commissionEntries, entry => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span><strong>${entry.policyNumber}</strong></span><span>Net ₹${entry.net} / Exp ₹${entry.expected}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openCommissionDetail(entry.id);
      });
      return el;
    });
    content.appendChild(commissionsSection);
  }
  // Documents section
  const linkedDocs = data.documents.filter(doc => doc.linkedEntities && doc.linkedEntities.some(le => le.entity === 'customer' && le.id === id));
  if (linkedDocs.length > 0) {
    const docsSection = createProfileSection('Documents', linkedDocs, d => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${d.name || ''}</span><span>${d.type || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        previewDocument(d.id);
      });
      return el;
    });
    content.appendChild(docsSection);
    // Add a view‑all link so the user can open the full documents list filtered by this customer
    const viewAllDocs = document.createElement('div');
    viewAllDocs.className = 'view-all-docs small-note';
    viewAllDocs.textContent = 'View all documents';
    viewAllDocs.style.cursor = 'pointer';
    viewAllDocs.addEventListener('click', (e) => {
      e.stopPropagation();
      // Filter documents page by customer name and navigate to Documents section
      const name = customer.fullName || '';
      pageSearchTerms.documents = name.toLowerCase();
      const searchInput = document.getElementById('documents-search');
      if (searchInput) searchInput.value = name;
      modal.classList.add('hidden');
      modal.classList.remove('open');
      showSection('documents');
      renderDocumentsList();
    });
    docsSection.appendChild(viewAllDocs);
  }
  // Relationships section
  if (Array.isArray(customer.relationships) && customer.relationships.length > 0) {
    const rels = customer.relationships.map(rel => {
      const other = data.customers.find(cu => cu.id === rel.id);
      return other ? { name: other.fullName } : null;
    }).filter(Boolean);
    if (rels.length) {
      const relationshipsSection = createProfileSection('Relationships', rels, item => {
        const el = document.createElement('div');
        el.className = 'profile-item';
        el.innerHTML = `<span>${item.name}</span><span></span>`;
        return el;
      });
      content.appendChild(relationshipsSection);
    }
  }
  // Timeline section
  if (customer.timeline && customer.timeline.length > 0) {
    // Use a custom section for timeline without preview limit
    const timelineSection = document.createElement('div');
    timelineSection.className = 'profile-section';
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = '<h4>Timeline</h4><span class="toggle-icon">▾</span>';
    // toggle
    timelineSection.classList.add('collapsed');
    header.addEventListener('click', () => {
      timelineSection.classList.toggle('collapsed');
    });
    timelineSection.appendChild(header);
    const tlContent = document.createElement('div');
    tlContent.className = 'section-content';
    const ul = document.createElement('ul');
    ul.className = 'timeline';
    customer.timeline.forEach(entry => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span>`;
      ul.appendChild(li);
    });
    tlContent.appendChild(ul);
    timelineSection.appendChild(tlContent);
    content.appendChild(timelineSection);
  }

  // Summary section: show payments and commission stats across common date ranges
  // Build a collapsible section similar to other profile sections.  It includes
  // predefined ranges (last 30 days, 3 months, 6 months, 12 months, current year,
  // all time) and a custom range option.  Each row displays the number of
  // transactions (payments), premium collected, commission received, cashback
  // returned and net commission for the selected period.
  {
    const summarySection = document.createElement('div');
    summarySection.className = 'profile-section collapsed';
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = '<h4>Summary</h4><span class="toggle-icon">▾</span>';
    header.addEventListener('click', () => {
      summarySection.classList.toggle('collapsed');
    });
    summarySection.appendChild(header);
    const summContent = document.createElement('div');
    summContent.className = 'section-content';
    // Custom range controls
    const customDiv = document.createElement('div');
    customDiv.className = 'custom-range-controls';
    customDiv.style.display = 'flex';
    customDiv.style.flexWrap = 'wrap';
    customDiv.style.gap = '0.5rem';
    customDiv.style.alignItems = 'center';
    customDiv.innerHTML = `
      <label>Custom Range:</label>
      <input type="date" id="cust-start-${id}">
      <span>to</span>
      <input type="date" id="cust-end-${id}">
      <button id="cust-apply-${id}" style="padding:0.3rem 0.6rem; border-radius:6px; border:none; background:var(--accent-color); color:white; cursor:pointer;">Apply</button>
    `;
    summContent.appendChild(customDiv);
    // Container for summary cards
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'summary-cards-container';
    summContent.appendChild(cardsContainer);
    // Function to compute and render cards
    function renderCustomerSummaryCards() {
      cardsContainer.innerHTML = '';
      const now = new Date();
      const monthsBack = (n) => {
        const d = new Date(now);
        d.setMonth(d.getMonth() - n);
        return d;
      };
      const ranges = [
        { label: 'Last 30 Days', start: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), end: now },
        { label: 'Last 3 Months', start: monthsBack(3), end: now },
        { label: 'Last 6 Months', start: monthsBack(6), end: now },
        { label: 'Last 12 Months', start: monthsBack(12), end: now },
        { label: 'Current Year', start: new Date(now.getFullYear(), 0, 1), end: now },
        { label: 'All Time', start: null, end: now }
      ];
      ranges.forEach(r => {
        const s = computeCustomerSummary(id, r.start, r.end);
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
          <h5>${r.label}</h5>
          <p><strong>Transactions:</strong> ${s.paymentsCount}</p>
          <p><strong>Premium:</strong> ₹${s.premiumPaid.toFixed(2)}</p>
          <p><strong>Commission:</strong> ₹${s.commissionReceived.toFixed(2)}</p>
          <p><strong>Cashback:</strong> ₹${s.cashback.toFixed(2)}</p>
          <p><strong>Net:</strong> ₹${s.netCommission.toFixed(2)}</p>
        `;
        cardsContainer.appendChild(card);
      });
      // Append custom range card if exists
      if (customCardData) {
        const { label, summary } = customCardData;
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
          <h5>${label}</h5>
          <p><strong>Transactions:</strong> ${summary.paymentsCount}</p>
          <p><strong>Premium:</strong> ₹${summary.premiumPaid.toFixed(2)}</p>
          <p><strong>Commission:</strong> ₹${summary.commissionReceived.toFixed(2)}</p>
          <p><strong>Cashback:</strong> ₹${summary.cashback.toFixed(2)}</p>
          <p><strong>Net:</strong> ₹${summary.netCommission.toFixed(2)}</p>
        `;
        cardsContainer.appendChild(card);
      }
    }
    // Store custom card data to persist across re-renders
    let customCardData = null;
    // Apply custom range handler
    setTimeout(() => {
      const applyBtn = document.getElementById(`cust-apply-${id}`);
      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          const startInput = document.getElementById(`cust-start-${id}`);
          const endInput = document.getElementById(`cust-end-${id}`);
          if (!startInput.value || !endInput.value) {
            alert('Please select start and end dates');
            return;
          }
          const startDate = new Date(startInput.value);
          const endDate = new Date(endInput.value);
          if (startDate > endDate) {
            alert('Start date cannot be after end date');
            return;
          }
          const summary = computeCustomerSummary(id, startDate, endDate);
          customCardData = { label: `${formatDate(startInput.value)} to ${formatDate(endInput.value)}`, summary };
          renderCustomerSummaryCards();
        });
      }
    }, 0);
    // Initial render
    renderCustomerSummaryCards();
    summarySection.appendChild(summContent);
    content.appendChild(summarySection);
  }
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('open');
  // Close handler
  document.getElementById('close-customer-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

// Policies
function renderPoliciesList() {
  const container = document.getElementById('policies-list');
  if (!container) return;
  const term = (pageSearchTerms.policies || '').toLowerCase();
  let list = (!term
    ? data.policies.slice()
    : data.policies.filter(p => {
        const num = (p.policyNumber || '').toLowerCase();
        const type = (p.policyType || '').toLowerCase();
        const companyName = p.company ? ((data.companies.find(c => c.id === p.company) || {}).name || '').toLowerCase() : '';
        const brokerName = p.broker ? ((data.brokers.find(b => b.id === p.broker) || {}).name || '').toLowerCase() : '';
        return num.includes(term) || type.includes(term) || companyName.includes(term) || brokerName.includes(term);
      })
  );
  // apply sorting if configured for policies
  const sortState = pageSortStates.policies;
  if (sortState.field) {
    list.sort((a, b) => {
      // for nested fields we support 'premiumAmount' and 'paymentStatus' and 'policyNumber'
      const fa = (a[sortState.field] || '').toString().toLowerCase();
      const fb = (b[sortState.field] || '').toString().toLowerCase();
      if (fa < fb) return -1 * sortState.dir;
      if (fa > fb) return 1 * sortState.dir;
      return 0;
    });
  }
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS['file-text']}</div><p>No policies found.</p><p class="small-note">Click the + button or quick add menu to create a new policy.</p></div>`;
    renderPoliciesSummary();
    return;
  }
  // Build a modern table view for policies
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="policyNumber">Policy</th>' +
    '<th data-field="policyType">Type</th>' +
    '<th data-field="proposer">Customer</th>' +
    '<th data-field="premiumAmount">Premium</th>' +
    '<th data-field="paymentStatus">Status</th>' +
    '<th>Actions</th></tr></thead><tbody>';
  list.forEach(p => {
    const proposerName = (data.customers.find(c => c.id === p.proposer) || {}).fullName || '';
    const premium = p.premiumAmount ? `₹${p.premiumAmount}` : '';
    const type = p.policyType || '';
    const status = p.paymentStatus || '';
    // derive vehicle type (if any) from the linked vehicle to decide icon
    let vehicleType = '';
    if (p.vehicle) {
      const veh = data.vehicles.find(v => v.id === p.vehicle);
      vehicleType = veh && veh.vehicleType ? veh.vehicleType : '';
    }
    // choose an icon: if policy type is motor, and the vehicleType includes 'bike', use bike icon; otherwise if policy type is motor use car; for other policy types use file-text icon
    let iconSvg;
    if (type && type.toLowerCase().includes('motor')) {
      iconSvg = (vehicleType && vehicleType.toLowerCase().includes('bike')) ? ICONS.bike : ICONS.car;
    } else {
      iconSvg = ICONS['file-text'];
    }
    html += `<tr data-id="${p.id}">
      <td><span class="vehicle-icon">${iconSvg}</span> ${p.policyNumber || ''}</td>
      <td>${type}</td>
      <td>${proposerName}</td>
      <td>${premium}</td>
      <td>${status}</td>
      <td class="actions">
        <button class="view-policy" data-id="${p.id}" title="View">${ICONS.eye}</button>
        <button class="edit-policy" data-id="${p.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-policy" data-id="${p.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // attach sorting to policy table
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('policies', tableElem, renderPoliciesList);
  // attach event handlers for table actions
  container.querySelectorAll('.view-policy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPolicyDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-policy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPolicyForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-policy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this policy?')) {
        deletePolicy(btn.getAttribute('data-id'));
      }
    });
  });
  // update summary metrics
  renderPoliciesSummary();
}

function deletePolicy(id) {
  // remove associated payments
  data.payments = data.payments.filter(pay => pay.policy !== id);
  data.policies = data.policies.filter(p => p.id !== id);
  saveData();
  renderPoliciesList();
  renderPaymentsList();
  renderCommissionsList();
  updateSelectOptions();
}

// Create or edit policy
function openPolicyForm(id) {
  const modal = document.getElementById('policy-form-modal');
  const title = document.getElementById('policy-form-title');
  const form = document.getElementById('policy-form');
  // reset form
  form.reset();
  form.elements['policy-id'].value = '';
  // fill dropdowns with customers
  populateCustomerSelect(form.elements['policy-proposer']);
  populateCustomerSelect(form.elements['policy-insured']);
  populateCustomerSelect(form.elements['policy-owner']);
  populateCustomerSelect(form.elements['policy-nominee']);
  // fill company and broker selects
  populateCompanySelect(form.elements['policy-company']);
  populateBrokerSelect(form.elements['policy-broker']);
  // helper to update companies based on selected broker
  function updateCompaniesFromBroker() {
    const companySelect = form.elements['policy-company'];
    const brokerId = form.elements['policy-broker'].value;
    // store previous selection to restore if still available
    const previous = companySelect.value;
    companySelect.innerHTML = '';
    if (!brokerId) {
      data.companies.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        companySelect.appendChild(opt);
      });
    } else {
      const broker = data.brokers.find(b => b.id === brokerId);
      data.companies.forEach(c => {
        const include = !broker || !Array.isArray(broker.companyIds) || broker.companyIds.length === 0 || broker.companyIds.includes(c.id);
        if (include) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = c.name;
          companySelect.appendChild(opt);
        }
      });
    }
    // restore previous selection if still valid
    const foundOpt = Array.from(companySelect.options).find(o => o.value === previous);
    if (foundOpt) {
      companySelect.value = previous;
    } else if (companySelect.options.length > 0) {
      companySelect.value = companySelect.options[0].value;
    }
    // after company update, refresh master fields (plan, add‑ons)
    renderPolicyMasterFields(id ? data.policies.find(p => p.id === id) : null);
  }
  // fill type-specific fields placeholder
  updateTypeSpecificFields('Motor');
  form.elements['policy-type'].addEventListener('change', () => {
    // when category changes, update type-specific fields (motor vs health etc.)
    const catId = form.elements['policy-type'].value;
    const catObj = (data.settings.master && data.settings.master.categories || []).find(c => c.id === catId);
    const catName = catObj ? catObj.name : catId;
    updateTypeSpecificFields(catName);
    // update master-driven fields (subtype, plan, add-ons)
    renderPolicyMasterFields(id ? data.policies.find(p => p.id === id) : null);
  });
  // update master-driven fields when company changes (no dependency but maintain legacy signature)
  form.elements['policy-company'].addEventListener('change', () => {
    renderPolicyMasterFields(id ? data.policies.find(p => p.id === id) : null);
  });
  // update available companies when broker changes
  form.elements['policy-broker'].addEventListener('change', updateCompaniesFromBroker);

  // Dynamically adjust the commission type options based on the selected broker's commission mode.
  function updateCommissionTypeBasedOnBroker() {
    const commissionSelect = form.elements['policy-commission-type'];
    if (!commissionSelect) return;
    const brokerId = form.elements['policy-broker'].value;
    const broker = brokerId ? data.brokers.find(b => b.id === brokerId) : null;
    const mode = broker ? broker.commissionMode : '';
    // Enable or disable commission type options so that users cannot pick an incompatible type
    Array.from(commissionSelect.options).forEach(opt => {
      if (mode === 'points') {
        // Only points type is allowed
        opt.disabled = (opt.value !== 'points');
      } else if (mode === 'money') {
        // Points type not allowed
        opt.disabled = (opt.value === 'points');
      } else {
        // No specific broker selected; allow all types
        opt.disabled = false;
      }
    });
    // Adjust current selection if it becomes invalid
    if (mode === 'points') {
      commissionSelect.value = 'points';
    } else if (mode === 'money' && commissionSelect.value === 'points') {
      // Default to percentage if available
      const firstEnabled = Array.from(commissionSelect.options).find(o => !o.disabled);
      if (firstEnabled) commissionSelect.value = firstEnabled.value;
    }
  }
  // update commission type when broker changes
  form.elements['policy-broker'].addEventListener('change', updateCommissionTypeBasedOnBroker);
  // call once to set initial state
  updateCommissionTypeBasedOnBroker();
  // populate vehicle select
  if (form.elements['policy-vehicle']) {
    populateVehicleSelect(form.elements['policy-vehicle']);
  }

  // populate quote select with available quotes (not rejected or expired and not converted)
  const quoteSelect = form.elements['policy-quote'];
  if (quoteSelect) {
    quoteSelect.innerHTML = '<option value="">None</option>';
    data.quotes.forEach(q => {
      const unavailable = q.status === 'Rejected' || q.status === 'Expired' || q.conversionStatus === 'Accepted' || q.convertedToPolicyId;
      if (!unavailable) {
        const opt = document.createElement('option');
        opt.value = q.id;
        const cust = data.customers.find(c => c.id === q.customer) || {};
        const company = data.companies.find(c => c.id === q.company) || {};
        const broker = data.brokers.find(b => b.id === q.broker) || {};
        opt.textContent = `${q.policyType} quote for ${cust.fullName || ''} (${company.name || ''} via ${broker.name || ''})`;
        quoteSelect.appendChild(opt);
      }
    });
  }
  // handler to prefill fields when quote selected
  function prefillFromQuote(q) {
    if (!q) return;
    // convert quote policyType (category name) to category id
    const master = data.settings.master || { categories: [] };
    const catObj2 = master.categories.find(c => c.name === q.policyType);
    if (catObj2) {
      form.elements['policy-type'].value = catObj2.id;
    } else {
      form.elements['policy-type'].value = q.policyType;
    }
    updateTypeSpecificFields(q.policyType);
    // refresh master-driven fields based on newly selected category
    renderPolicyMasterFields(null);
    form.elements['policy-company'].value = q.company || '';
    form.elements['policy-broker'].value = q.broker || '';
    form.elements['policy-proposer'].value = q.customer || '';
    form.elements['policy-insured'].value = q.customer || '';
    form.elements['policy-owner'].value = q.customer || '';
    // assign standard fields from quote
    form.elements['policy-start-date'].value = q.quoteDate || '';
    // we can't guess end date; keep blank
    form.elements['policy-sum-insured'].value = q.sumInsured || '';
    form.elements['policy-premium'].value = q.premium || '';
    form.elements['policy-tax'].value = q.tax || '';
    const total = calculateTotal(q.premium, q.tax);
    form.elements['policy-total-payable'].value = total;
    // copy type-specific fields
    const tsContainer = document.getElementById('type-specific-fields');
    tsContainer.querySelectorAll('input, textarea').forEach(el => {
      const key = el.getAttribute('data-key');
      if (q.typeSpecific && key && q.typeSpecific[key] !== undefined) {
        el.value = q.typeSpecific[key];
      }
    });
    // Commission fields remain user-specified
  }
  if (quoteSelect) {
    quoteSelect.addEventListener('change', () => {
      const selectedId = quoteSelect.value;
      if (selectedId) {
        const q = data.quotes.find(qu => qu.id === selectedId);
        prefillFromQuote(q);
      }
    });
  }
  // compute Tenure and Total on date change / premium change
  const startInput = form.elements['policy-start-date'];
  const endInput = form.elements['policy-end-date'];
  const tenureInput = form.elements['policy-tenure'];
  function updateTenure() {
    const tenure = calculateTenure(startInput.value, endInput.value);
    if (!isNaN(tenure)) tenureInput.value = tenure;
  }
  startInput.addEventListener('change', updateTenure);
  endInput.addEventListener('change', updateTenure);
  // compute total payable
  const premiumInput = form.elements['policy-premium'];
  const taxInput = form.elements['policy-tax'];
  const totalInput = form.elements['policy-total-payable'];
  function updateTotal() {
    const total = calculateTotal(premiumInput.value, taxInput.value);
    if (!isNaN(total)) totalInput.value = total;
  }
  premiumInput.addEventListener('input', updateTotal);
  taxInput.addEventListener('input', updateTotal);
  // track payment status manual override
  const paymentStatusSelect = form.elements['policy-payment-status'];
  if (paymentStatusSelect) {
    paymentStatusSelect.addEventListener('change', () => {
      form.dataset.paymentStatusChanged = 'true';
    });
  }
  // editing existing
  if (id) {
    const policy = data.policies.find(p => p.id === id);
    if (!policy) return;
    title.textContent = 'Edit Policy';
    form.elements['policy-id'].value = policy.id;
    form.elements['policy-number'].value = policy.policyNumber;
    // If stored, set category select to the saved category ID; fallback to name
    if (policy.policyCategoryId) {
      form.elements['policy-type'].value = policy.policyCategoryId;
    } else {
      // fallback: attempt to match category name to id
      const cat = (data.settings.master && data.settings.master.categories || []).find(c => c.name === policy.policyType);
      form.elements['policy-type'].value = cat ? cat.id : policy.policyType;
    }
    // update type-specific fields based on category name for legacy compatibility
    updateTypeSpecificFields(policy.policyType);
    form.elements['policy-company'].value = policy.company || '';
    form.elements['policy-broker'].value = policy.broker || '';
    form.elements['policy-proposer'].value = policy.proposer || '';
    form.elements['policy-insured'].value = policy.insured || '';
    form.elements['policy-owner'].value = policy.owner || '';
    form.elements['policy-nominee'].value = policy.nominee || '';
    form.elements['policy-start-date'].value = policy.startDate || '';
    form.elements['policy-end-date'].value = policy.endDate || '';
    form.elements['policy-tenure'].value = policy.tenure || '';
    form.elements['policy-sum-insured'].value = policy.sumInsured || '';
    form.elements['policy-premium'].value = policy.premiumAmount || '';
    form.elements['policy-tax'].value = policy.taxAmount || '';
    form.elements['policy-total-payable'].value = policy.totalPayable || '';
    form.elements['policy-payment-status'].value = policy.paymentStatus || 'Pending';
    form.elements['policy-commission-eligibility'].value = policy.commissionEligibility || 'Eligible';
    form.elements['policy-remarks'].value = policy.remarks || '';
    // vehicle
    if (form.elements['policy-vehicle']) {
      form.elements['policy-vehicle'].value = policy.vehicle || '';
    }
    // agency
    if (form.elements['policy-agency']) {
      form.elements['policy-agency'].value = policy.agency || '';
    }
    // linked quote
    if (quoteSelect) {
      quoteSelect.value = policy.quoteId || '';
    }
    // reset paymentStatusChanged flag
    form.dataset.paymentStatusChanged = '';
    // fill type-specific values
    const ts = policy.typeSpecific || {};
    const tsContainer = document.getElementById('type-specific-fields');
    tsContainer.querySelectorAll('input, textarea, select').forEach(el => {
      const key = el.getAttribute('data-key');
      if (key && ts[key] !== undefined) {
        el.value = ts[key];
      }
    });
    // render plan fields for existing policy
    renderPolicyMasterFields(policy);
  } else {
    title.textContent = 'Add Policy';
    // for new policy, render plan fields after initial dropdowns
    renderPolicyMasterFields(null);
  }
  modal.classList.remove('hidden');
  // Shift focus to the first form field when opening
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

// Populate a select with customer options
function populateCustomerSelect(selectEl) {
  selectEl.innerHTML = '<option value="">None</option>';
  data.customers.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.fullName;
    selectEl.appendChild(opt);
  });
}

// Populate a select with broker options
function populateBrokerSelect(selectEl) {
  selectEl.innerHTML = '<option value="">None</option>';
  data.brokers.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    selectEl.appendChild(opt);
  });
}

// Populate a select with company options
function populateCompanySelect(selectEl) {
  selectEl.innerHTML = '<option value="">None</option>';
  data.companies.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name;
    selectEl.appendChild(opt);
  });
}

// Populate a select with vehicle options
function populateVehicleSelect(selectEl) {
  selectEl.innerHTML = '<option value="">None</option>';
  data.vehicles.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = v.vehicleNumber;
    selectEl.appendChild(opt);
  });
}

// Update type-specific fields container
function updateTypeSpecificFields(type) {
  const container = document.getElementById('type-specific-fields');
  container.innerHTML = '';
  const fields = {
    Motor: [
      { key: 'vehicleNumber', label: 'Vehicle Number' },
      { key: 'chassisNumber', label: 'Chassis Number' },
      { key: 'engineNumber', label: 'Engine Number' },
      { key: 'vehicleType', label: 'Vehicle Type' },
      { key: 'make', label: 'Make' },
      { key: 'model', label: 'Model' },
      { key: 'fuelType', label: 'Fuel Type' },
      { key: 'registrationDate', label: 'Registration Date', type: 'date' },
      { key: 'idv', label: 'Insured Declared Value', type: 'number' }
    ],
    Health: [
      { key: 'insuredMembers', label: 'Insured Members (names/ages)', type: 'textarea' },
      { key: 'roomRentLimit', label: 'Room Rent Limit' },
      { key: 'waitingPeriod', label: 'Waiting Period' },
      { key: 'pedClauses', label: 'Pre-existing Disease Clauses', type: 'textarea' }
    ],
    Life: [
      { key: 'planName', label: 'Plan Name' },
      { key: 'maturityDate', label: 'Maturity Date', type: 'date' },
      { key: 'premiumFrequency', label: 'Premium Frequency' }
    ],
    Travel: [
      { key: 'travelStart', label: 'Travel Start Date', type: 'date' },
      { key: 'travelEnd', label: 'Travel End Date', type: 'date' },
      { key: 'destination', label: 'Destination(s)' }
    ],
    Home: [
      { key: 'propertyType', label: 'Property Type' },
      { key: 'location', label: 'Location' },
      { key: 'buildingAge', label: 'Building Age' },
      { key: 'structureType', label: 'Structure Type' }
    ],
    Commercial: [
      { key: 'businessType', label: 'Business Type' },
      { key: 'coverageDetails', label: 'Coverage Details', type: 'textarea' },
      { key: 'industryCode', label: 'Industry Code' }
    ]
  };
  const flds = fields[type] || [];
  flds.forEach(f => {
    const label = document.createElement('label');
    label.textContent = f.label;
    const inputType = f.type || 'text';
    let input;
    if (inputType === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.type = inputType;
    }
    input.setAttribute('data-key', f.key);
    label.appendChild(input);
    container.appendChild(label);
  });
}

// Handle policy form submit
function handlePolicyForm() {
  const form = document.getElementById('policy-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['policy-id'].value;
    // gather type-specific values
    const typeSpecific = {};
    const tsContainer = document.getElementById('type-specific-fields');
    tsContainer.querySelectorAll('input, textarea').forEach(el => {
      const key = el.getAttribute('data-key');
      if (key) {
        typeSpecific[key] = el.value;
      }
    });
    // commission information
    const commissionType = form.elements['policy-commission-type'].value;
    const commissionValue = parseFloat(form.elements['policy-commission-value'].value) || 0;
    let expectedCommission = 0;
    const premiumAmt = parseFloat(form.elements['policy-premium'].value) || 0;
    if (commissionType === 'percentage') {
      expectedCommission = premiumAmt * (commissionValue / 100);
    } else if (commissionType === 'fixed') {
      expectedCommission = commissionValue;
    } else if (commissionType === 'points') {
      expectedCommission = commissionValue; // points stored as numeric
    }
    const selectedCategoryId = form.elements['policy-type'].value;
    // derive category name for backward compatibility
    const categoryName = (data.settings.master.categories || []).find(c => c.id === selectedCategoryId)?.name || selectedCategoryId;
    const policyObj = {
      id: id || generateId(),
      policyNumber: form.elements['policy-number'].value.trim(),
      policyType: categoryName, // keep category name for filtering and legacy
      policyCategoryId: selectedCategoryId, // store id for master mapping
      policySubType: form.elements['policy-subtype'] ? form.elements['policy-subtype'].value : '',
      company: form.elements['policy-company'].value,
      broker: form.elements['policy-broker'].value,
      proposer: form.elements['policy-proposer'].value,
      insured: form.elements['policy-insured'].value,
      owner: form.elements['policy-owner'].value,
      nominee: form.elements['policy-nominee'].value,
      startDate: form.elements['policy-start-date'].value,
      endDate: form.elements['policy-end-date'].value,
      tenure: form.elements['policy-tenure'].value,
      sumInsured: form.elements['policy-sum-insured'].value,
      premiumAmount: form.elements['policy-premium'].value,
      taxAmount: form.elements['policy-tax'].value,
      totalPayable: form.elements['policy-total-payable'].value,
      paymentStatus: form.elements['policy-payment-status'].value,
      commissionEligibility: form.elements['policy-commission-eligibility'].value,
      commissionType: commissionType,
      commissionValue: commissionValue,
      expectedCommission: parseFloat(expectedCommission.toFixed(2)),
      remarks: form.elements['policy-remarks'].value,
      typeSpecific: typeSpecific,
      // reference to linked quote (if any)
      quoteId: (form.elements['policy-quote'] && form.elements['policy-quote'].value) || ''
    };
    // plan and add‑ons
    const planSelect = document.getElementById('policy-plan');
    if (planSelect) {
      policyObj.plan = planSelect.value;
    } else {
      policyObj.plan = '';
    }
    const addonsContainer = document.getElementById('policy-addons-container');
    const selectedAddons = [];
    if (addonsContainer) {
      addonsContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        if (cb.checked) selectedAddons.push(cb.value);
      });
    }
    policyObj.addons = selectedAddons;
    // vehicle link
    if (form.elements['policy-vehicle']) {
      policyObj.vehicle = form.elements['policy-vehicle'].value;
    }
    // agency
    if (form.elements['policy-agency']) {
      policyObj.agency = form.elements['policy-agency'].value;
    }
    // manual payment status override
    if (form.dataset.paymentStatusChanged === 'true') {
      policyObj.manualOverride = true;
    }
    let savedPolicy;
    if (id) {
      const existing = data.policies.find(p => p.id === id);
      // preserve existing manual override unless user changed payment status
      if (existing.manualOverride && !policyObj.manualOverride) {
        policyObj.manualOverride = existing.manualOverride;
      }
      // track previous quoteId to revert conversion if changed
      const previousQuoteId = existing.quoteId || '';
      Object.assign(existing, policyObj);
      savedPolicy = existing;
      addTimeline(existing, 'Updated policy');
      // If quote changed or removed, revert previous quote conversion
      if (previousQuoteId && previousQuoteId !== policyObj.quoteId) {
        const prevQuote = data.quotes.find(q => q.id === previousQuoteId);
        if (prevQuote) {
          // revert conversion details only if it was previously linked to this policy
          if (prevQuote.convertedToPolicyId === existing.id) {
            prevQuote.conversionStatus = '';
            prevQuote.convertedToPolicyId = '';
            prevQuote.conversionDate = '';
            // don't change quote.status back automatically; keep as Accepted if accepted earlier
          }
        }
      }
    } else {
      savedPolicy = policyObj;
      addTimeline(policyObj, 'Created policy');
      data.policies.push(policyObj);
    }
    // if policy linked to a quote, update quote conversion status
    if (policyObj.quoteId) {
      const q = data.quotes.find(qu => qu.id === policyObj.quoteId);
      if (q) {
        q.status = 'Accepted';
        q.conversionStatus = 'Accepted';
        q.convertedToPolicyId = savedPolicy.id;
        // use conversion date either from policy start date or current date if not provided
        q.conversionDate = (savedPolicy.startDate || new Date().toISOString());
        addTimeline(q, 'Converted to policy');
      }
    }
    saveData();
    renderPoliciesList();
    renderCommissionsList();
    renderPaymentsList();
    updateSelectOptions();
    document.getElementById('policy-form-modal').classList.add('hidden');
  });
  document.getElementById('close-policy-form').addEventListener('click', () => {
    document.getElementById('policy-form-modal').classList.add('hidden');
  });
}

// Policy detail modal
function openPolicyDetail(id) {
  const policy = data.policies.find(p => p.id === id);
  if (!policy) return;
  const modal = document.getElementById('policy-detail-modal');
  const titleEl = document.getElementById('policy-detail-title');
  const content = document.getElementById('policy-detail-content');
  // Title for accessibility
  titleEl.textContent = `Policy ${policy.policyNumber || ''}`;
  // Clear existing content
  content.innerHTML = '';
  // Resolve names for company, broker, proposer, insured, owner, nominee
  const companyName = (data.companies.find(c => c.id === policy.company) || {}).name || policy.company || '';
  const brokerName = (data.brokers.find(b => b.id === policy.broker) || {}).name || policy.broker || '';
  const proposerName = (data.customers.find(c => c.id === policy.proposer) || {}).fullName || '';
  const insuredName = (data.customers.find(c => c.id === policy.insured) || {}).fullName || '';
  const ownerName = (data.customers.find(c => c.id === policy.owner) || {}).fullName || '';
  const nomineeName = (data.customers.find(c => c.id === policy.nominee) || {}).fullName || '';
  const status = policy.paymentStatus || '';
  // Header card
  const headerEl = document.createElement('div');
  headerEl.className = 'profile-header';
  const headerTop = document.createElement('div');
  headerTop.className = 'header-top';
  const h3 = document.createElement('h3');
  h3.textContent = policy.policyNumber || '';
  headerTop.appendChild(h3);
  if (status) {
    const badge = document.createElement('span');
    badge.className = 'status-badge';
    badge.textContent = status;
    headerTop.appendChild(badge);
  }
  headerEl.appendChild(headerTop);
  // Info lines for type, company, broker
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  if (policy.policyType) {
    const p = document.createElement('p');
    p.textContent = `Type: ${policy.policyType}`;
    infoDiv.appendChild(p);
  }
  if (companyName) {
    const p = document.createElement('p');
    p.textContent = `Company: ${companyName}`;
    infoDiv.appendChild(p);
  }
  if (brokerName) {
    const p = document.createElement('p');
    p.textContent = `Broker: ${brokerName}`;
    infoDiv.appendChild(p);
  }
  if (policy.plan) {
    const pEl = document.createElement('p');
    // display plan name; if stored as id, resolve to name from master
    let planName = '';
    // support legacy policyPlans but prefer master plans
    let planObj = null;
    if (data.settings && data.settings.master && Array.isArray(data.settings.master.plans)) {
      planObj = data.settings.master.plans.find(pl => pl.id === policy.plan);
    }
    if (!planObj && Array.isArray(data.settings.policyPlans)) {
      planObj = data.settings.policyPlans.find(pl => pl.id === policy.plan);
    }
    if (planObj) planName = planObj.name;
    else planName = policy.plan;
    pEl.textContent = `Plan: ${planName}`;
    infoDiv.appendChild(pEl);
  }
  if (policy.addons && policy.addons.length > 0) {
    const pEl = document.createElement('p');
    // resolve add‑on names from master if available
    let addonNames = policy.addons;
    if (data.settings && data.settings.master && Array.isArray(data.settings.master.addons)) {
      addonNames = policy.addons.map(aid => {
        const ao = data.settings.master.addons.find(a => a.id === aid);
        return ao ? ao.name : aid;
      });
    }
    pEl.textContent = `Add‑ons: ${addonNames.join(', ')}`;
    infoDiv.appendChild(pEl);
  }
  headerEl.appendChild(infoDiv);
  content.appendChild(headerEl);
  // Basic information section
  const basicItems = [];
  const pushItem = (label, val) => { if (val !== undefined && val !== '') basicItems.push({ label, value: val }); };
  pushItem('Start Date', formatDate(policy.startDate));
  pushItem('End Date', formatDate(policy.endDate));
  pushItem('Tenure', policy.tenure);
  pushItem('Sum Insured', policy.sumInsured);
  pushItem('Premium Amount', policy.premiumAmount);
  pushItem('Tax Amount', policy.taxAmount);
  pushItem('Total Payable', policy.totalPayable);
  pushItem('Commission Type', policy.commissionType);
  pushItem('Commission Value', policy.commissionValue);
  pushItem('Expected Commission', policy.expectedCommission);
  pushItem('Commission Eligibility', policy.commissionEligibility);
  pushItem('Agency', policy.agency);
  pushItem('Remarks', policy.remarks);
  if (basicItems.length) {
    const basicSection = createProfileSection('Policy Details', basicItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value || ''}</span>`;
      return el;
    });
    content.appendChild(basicSection);
  }
  // Linked Entities section
  const entityItems = [];
  if (proposerName) entityItems.push({ label: 'Proposer', value: proposerName, id: policy.proposer, type: 'customer' });
  if (insuredName) entityItems.push({ label: 'Insured', value: insuredName, id: policy.insured, type: 'customer' });
  if (ownerName) entityItems.push({ label: 'Owner', value: ownerName, id: policy.owner, type: 'customer' });
  if (nomineeName) entityItems.push({ label: 'Nominee', value: nomineeName, id: policy.nominee, type: 'customer' });
  if (policy.vehicle) {
    const veh = data.vehicles.find(v => v.id === policy.vehicle) || {};
    entityItems.push({ label: 'Vehicle', value: veh.vehicleNumber || '', id: veh.id, type: 'vehicle' });
  }
  if (entityItems.length) {
    const entitySection = createProfileSection('Linked Entities', entityItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      el.style.cursor = item.type ? 'pointer' : '';
      if (item.type === 'customer') {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          modal.classList.add('hidden');
          modal.classList.remove('open');
          openCustomerDetail(item.id);
        });
      } else if (item.type === 'vehicle') {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          modal.classList.add('hidden');
          modal.classList.remove('open');
          openVehicleDetail(item.id);
        });
      }
      return el;
    });
    content.appendChild(entitySection);
  }
  // Quote section
  if (policy.quoteId) {
    const quote = data.quotes.find(q => q.id === policy.quoteId) || {};
    const quoteItems = [];
    quoteItems.push({ label: 'Policy Type', value: quote.policyType || '' });
    quoteItems.push({ label: 'Status', value: quote.status || '' });
    quoteItems.push({ label: 'Date', value: quote.quoteDate ? formatDate(quote.quoteDate) : '' });
    const quoteSection = createProfileSection('Linked Quote', quoteItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    }, 3);
    // Add link to open full quote detail on header click
    quoteSection.querySelector('.section-header').addEventListener('dblclick', (e) => {
      e.stopPropagation();
      modal.classList.add('hidden');
      modal.classList.remove('open');
      openQuoteDetail(policy.quoteId);
    });
    content.appendChild(quoteSection);
  }
  // Type specific section
  const typeSpecificKeys = Object.keys(policy.typeSpecific || {});
  if (typeSpecificKeys.length) {
    const tsItems = typeSpecificKeys.map(k => ({ label: k, value: policy.typeSpecific[k] }));
    const tsSection = createProfileSection('Type Specific', tsItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(tsSection);
  }
  // Payments section
  const linkedPayments = data.payments.filter(pay => pay.policy === id);
  if (linkedPayments.length) {
    const paymentsSection = createProfileSection('Payments', linkedPayments, pay => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      const payerName = (data.customers.find(c => c.id === pay.payer) || {}).fullName || '';
      el.innerHTML = `<span>${formatDate(pay.date)} - ${pay.mode || ''}</span><span>₹${pay.amount || 0}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openPaymentDetail(pay.id);
      });
      return el;
    });
    content.appendChild(paymentsSection);
  }
  // Commissions section
  const comms = data.commissions.filter(c => c.policyId === policy.id);
  if (comms.length) {
    const commSection = createProfileSection('Commissions', comms, c => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>Net ₹${c.net || 0} / Exp ₹${c.expected || 0}</span><span>Received ₹${c.received || 0}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openCommissionDetail(c.id);
      });
      return el;
    });
    content.appendChild(commSection);
  }
  // Documents section
  const linkedDocs = data.documents.filter(doc => doc.linkedEntities && doc.linkedEntities.some(le => le.entity === 'policy' && le.id === policy.id));
  if (linkedDocs.length) {
    const docsSection = createProfileSection('Documents', linkedDocs, d => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${d.name || ''}</span><span>${d.type || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        previewDocument(d.id);
      });
      return el;
    });
    content.appendChild(docsSection);
  }
  // Timeline section
  if (policy.timeline && policy.timeline.length > 0) {
    const timelineSection = document.createElement('div');
    timelineSection.className = 'profile-section';
    timelineSection.classList.add('collapsed');
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = '<h4>Timeline</h4><span class="toggle-icon">▾</span>';
    header.addEventListener('click', () => {
      timelineSection.classList.toggle('collapsed');
    });
    timelineSection.appendChild(header);
    const tlContent = document.createElement('div');
    tlContent.className = 'section-content';
    const ul = document.createElement('ul');
    ul.className = 'timeline';
    policy.timeline.forEach(entry => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span>`;
      ul.appendChild(li);
    });
    tlContent.appendChild(ul);
    timelineSection.appendChild(tlContent);
    content.appendChild(timelineSection);
  }
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('open');
  // Close handler
  document.getElementById('close-policy-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

// Payments
function renderPaymentsList() {
  const container = document.getElementById('payments-list');
  if (!container) return;
  const term = (pageSearchTerms.payments || '').toLowerCase();
  const list = (!term
    ? data.payments.slice()
    : data.payments.filter(pay => {
        const payerName = (data.customers.find(c => c.id === pay.payer) || {}).fullName || '';
        const policyNum = (data.policies.find(p => p.id === pay.policy) || {}).policyNumber || '';
        const receiverLabel = pay.receiverType === 'Company'
          ? ((data.companies.find(c => c.id === pay.receiver) || {}).name || '')
          : pay.receiverType === 'Broker'
            ? ((data.brokers.find(b => b.id === pay.receiver) || {}).name || '')
            : 'agent';
        const amountStr = pay.amount ? String(pay.amount) : '';
        const mode = (pay.mode || '').toLowerCase();
        return payerName.toLowerCase().includes(term) ||
               policyNum.toLowerCase().includes(term) ||
               receiverLabel.toLowerCase().includes(term) ||
               amountStr.toLowerCase().includes(term) ||
               mode.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS['credit-card']}</div><p>No payments recorded.</p><p class="small-note">Use the quick add menu or the Add Payment button to record a payment.</p></div>`;
    renderPaymentsSummary();
    return;
  }
  // sort payments according to pageSortStates
  const sortState = pageSortStates.payments;
  if (sortState.field) {
    list.sort((a, b) => {
      const fa = (a[sortState.field] || '').toString().toLowerCase();
      const fb = (b[sortState.field] || '').toString().toLowerCase();
      if (fa < fb) return -1 * sortState.dir;
      if (fa > fb) return 1 * sortState.dir;
      return 0;
    });
  }
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="amount">Amount</th>' +
    '<th data-field="mode">Mode</th>' +
    '<th data-field="date">Date</th>' +
    '<th data-field="payer">Payer</th>' +
    '<th data-field="policy">Policy</th>' +
    '<th data-field="receiverType">Receiver</th>' +
    '<th>Actions</th></tr></thead><tbody>';
  list.forEach(pay => {
    const payerName = (data.customers.find(c => c.id === pay.payer) || {}).fullName || '';
    const policyNumber = (data.policies.find(p => p.id === pay.policy) || {}).policyNumber || '';
    let receiverLabel = '';
    if (pay.receiverType === 'Company') {
      receiverLabel = (data.companies.find(c => c.id === pay.receiver) || {}).name || 'Company';
    } else if (pay.receiverType === 'Broker') {
      receiverLabel = (data.brokers.find(b => b.id === pay.receiver) || {}).name || 'Broker';
    } else {
      receiverLabel = 'Agent';
    }
    const amount = pay.amount ? `₹${pay.amount}` : '';
    const mode = pay.mode || '';
    const dateStr = pay.date ? formatDate(pay.date) : '';
    html += `<tr data-id="${pay.id}">
      <td>${amount}</td>
      <td>${mode}</td>
      <td>${dateStr}</td>
      <td>${payerName}</td>
      <td>${policyNumber}</td>
      <td>${receiverLabel}</td>
      <td class="actions">
        <button class="view-payment" data-id="${pay.id}" title="View">${ICONS.eye}</button>
        <button class="edit-payment" data-id="${pay.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-payment" data-id="${pay.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // attach sorting to payments table
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('payments', tableElem, renderPaymentsList);
  container.querySelectorAll('.view-payment').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPaymentDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-payment').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPaymentForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-payment').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this payment?')) deletePayment(btn.getAttribute('data-id'));
    });
  });
  renderPaymentsSummary();
}

function deletePayment(id) {
  data.payments = data.payments.filter(pay => pay.id !== id);
  saveData();
  renderPaymentsList();
  renderPoliciesList();
  renderCommissionsList();
}

function openPaymentForm(id) {
  const modal = document.getElementById('payment-form-modal');
  const title = document.getElementById('payment-form-title');
  const form = document.getElementById('payment-form');
  form.reset();
  form.elements['payment-id'].value = '';
  populateCustomerSelect(form.elements['payment-payer']);
  // populate policy select
  const policySelect = form.elements['payment-policy'];
  policySelect.innerHTML = '<option value="">None</option>';
  data.policies.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.policyNumber;
    policySelect.appendChild(opt);
  });
  // populate receiver select based on receiver type
  function updateReceiverOptions() {
    const receiverType = form.elements['payment-receiver-type'].value;
    const receiverSelect = form.elements['payment-receiver'];
    receiverSelect.innerHTML = '';
    if (receiverType === 'Company') {
      data.companies.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        receiverSelect.appendChild(opt);
      });
    } else if (receiverType === 'Broker') {
      data.brokers.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = b.name;
        receiverSelect.appendChild(opt);
      });
    } else {
      // Agent; receiver list not required; leave empty
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'Agent';
      receiverSelect.appendChild(opt);
    }
  }
  // attach change listeners for receiver type and receiver to update receiver list and accounts
  form.elements['payment-receiver-type'].addEventListener('change', () => {
    updateReceiverOptions();
    populatePaymentAccountSelect();
  });
  form.elements['payment-receiver'].addEventListener('change', () => {
    populatePaymentAccountSelect();
  });
  // run once to init
  updateReceiverOptions();
  populatePaymentAccountSelect();

  // populate account select based on selected receiver
  function populatePaymentAccountSelect() {
    const accountSelect = form.elements['payment-account'];
    if (!accountSelect) return;
    accountSelect.innerHTML = '<option value="">Select Account/UPI/Wallet</option>';
    // Determine receiver type and selected receiver to filter accounts
    const receiverType = form.elements['payment-receiver-type'].value;
    const receiverId = form.elements['payment-receiver'].value;
    // Helper to append accounts from arrays
    // Use a set to avoid duplicate accounts when combining broker‑specific and global lists
    const seen = new Set();
    function appendAccounts(bankList, upiList, walletList) {
      (bankList || []).forEach(ac => {
        if (ac && !seen.has(ac)) {
          seen.add(ac);
          const opt = document.createElement('option');
          opt.value = ac;
          opt.textContent = `Bank: ${ac}`;
          accountSelect.appendChild(opt);
        }
      });
      (upiList || []).forEach(upi => {
        if (upi && !seen.has(upi)) {
          seen.add(upi);
          const opt = document.createElement('option');
          opt.value = upi;
          opt.textContent = `UPI: ${upi}`;
          accountSelect.appendChild(opt);
        }
      });
      (walletList || []).forEach(wal => {
        if (wal && !seen.has(wal)) {
          seen.add(wal);
          const opt = document.createElement('option');
          opt.value = wal;
          opt.textContent = `Wallet: ${wal}`;
          accountSelect.appendChild(opt);
        }
      });
    }
    if (receiverType === 'Broker' && receiverId) {
      // Include accounts configured for selected broker
      const broker = data.brokers.find(b => b.id === receiverId);
      if (broker) {
        appendAccounts(broker.bankIds, broker.upiIds, broker.walletIds);
        // fall through to also include global accounts (if any)
      }
    }
    // Always include global settings to support manual deposits or shared accounts
    appendAccounts(data.settings.bankAccounts, data.settings.upiIds, data.settings.wallets);
  }
  populatePaymentAccountSelect();
  if (id) {
    const payment = data.payments.find(pay => pay.id === id);
    if (!payment) return;
    title.textContent = 'Edit Payment';
    form.elements['payment-id'].value = payment.id;
    form.elements['payment-payer'].value = payment.payer;
    form.elements['payment-policy'].value = payment.policy;
    form.elements['payment-amount'].value = payment.amount;
    form.elements['payment-tax'].value = payment.tax;
    form.elements['payment-receiver-type'].value = payment.receiverType || 'Company';
    // update receiver options before setting value
    if (typeof updateReceiverOptions === 'function') {
      updateReceiverOptions();
    }
    form.elements['payment-receiver'].value = payment.receiver || '';
    form.elements['payment-mode'].value = payment.mode;
    form.elements['payment-account'].value = payment.account || '';
    form.elements['payment-ref'].value = payment.ref;
    form.elements['payment-date'].value = payment.date;
    form.elements['payment-remarks'].value = payment.remarks;
  } else {
    title.textContent = 'Add Payment';
  }
  modal.classList.remove('hidden');
  // Set initial focus in payment form
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

// Handle payment form submit
function handlePaymentForm() {
  const form = document.getElementById('payment-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['payment-id'].value;
    const paymentObj = {
      id: id || generateId(),
      payer: form.elements['payment-payer'].value,
      policy: form.elements['payment-policy'].value,
      amount: parseFloat(form.elements['payment-amount'].value) || 0,
      tax: parseFloat(form.elements['payment-tax'].value) || 0,
      receiverType: form.elements['payment-receiver-type'].value,
      receiver: form.elements['payment-receiver'].value,
      account: form.elements['payment-account'].value,
      mode: form.elements['payment-mode'].value,
      ref: form.elements['payment-ref'].value,
      date: form.elements['payment-date'].value,
      remarks: form.elements['payment-remarks'].value
    };
    if (id) {
      const existing = data.payments.find(p => p.id === id);
      Object.assign(existing, paymentObj);
      addTimeline(existing, 'Updated payment');
    } else {
      addTimeline(paymentObj, 'Recorded payment');
      data.payments.push(paymentObj);
    }
    // update policy payment status and pending amounts
    updatePolicyPaymentStatus(paymentObj.policy);
    saveData();
    renderPaymentsList();
    renderPoliciesList();
    renderCommissionsList();
    document.getElementById('payment-form-modal').classList.add('hidden');
  });
  document.getElementById('close-payment-form').addEventListener('click', () => {
    document.getElementById('payment-form-modal').classList.add('hidden');
  });
}

function updatePolicyPaymentStatus(policyId) {
  if (!policyId) return;
  const policy = data.policies.find(p => p.id === policyId);
  if (!policy) return;
  // sum all payments for this policy
  if (policy.manualOverride) {
    // manual override; do not auto update
    return;
  }
  const payments = data.payments.filter(pay => pay.policy === policyId);
  const totalPaid = payments.reduce((sum, p) => sum + (p.amount || 0) + (p.tax || 0), 0);
  const totalDue = parseFloat(policy.totalPayable) || 0;
  if (totalPaid >= totalDue) {
    policy.paymentStatus = 'Paid';
  } else if (totalPaid > 0) {
    policy.paymentStatus = 'Partially Paid';
  } else {
    policy.paymentStatus = 'Pending';
  }
  addTimeline(policy, 'Updated payment status');
}

// Payment detail modal
function openPaymentDetail(id) {
  const pay = data.payments.find(p => p.id === id);
  if (!pay) return;
  const modal = document.getElementById('payment-detail-modal');
  const title = document.getElementById('payment-detail-title');
  const content = document.getElementById('payment-detail-content');
  title.textContent = `Payment ${id}`;
  let html = '<h4>Details</h4><table class="detail-table">';
  function row(label, value) { return `<tr><th>${label}</th><td>${value || ''}</td></tr>`; }
  html += row('Payer', (data.customers.find(c => c.id === pay.payer) || {}).fullName || '');
  html += row('Policy', (data.policies.find(p => p.id === pay.policy) || {}).policyNumber || '');
  html += row('Amount', `₹${pay.amount}`);
  html += row('Tax', `₹${pay.tax}`);
  // Receiver display
  let receiverLabel = '';
  if (pay.receiverType === 'Company') {
    receiverLabel = (data.companies.find(c => c.id === pay.receiver) || {}).name || 'Company';
  } else if (pay.receiverType === 'Broker') {
    receiverLabel = (data.brokers.find(b => b.id === pay.receiver) || {}).name || 'Broker';
  } else {
    receiverLabel = 'Agent';
  }
  html += row('Receiver', receiverLabel);
  html += row('Receiver Type', pay.receiverType);
  html += row('Account', pay.account);
  html += row('Mode', pay.mode);
  html += row('Reference', pay.ref);
  html += row('Date', formatDate(pay.date));
  html += row('Remarks', pay.remarks);
  html += '</table>';
  if (pay.timeline && pay.timeline.length > 0) {
    html += '<h4>Timeline</h4><ul class="timeline">';
    pay.timeline.forEach(entry => {
      html += `<li><span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span></li>`;
    });
    html += '</ul>';
  }
  content.innerHTML = html;
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-payment-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

// Documents
function renderDocumentsList() {
  const container = document.getElementById('documents-list');
  if (!container) return;
  const term = (pageSearchTerms.documents || '').toLowerCase();
  const list = (!term
    ? data.documents.slice()
    : data.documents.filter(doc => {
        const name = (doc.name || '').toLowerCase();
        const type = (doc.type || '').toLowerCase();
        const tags = Array.isArray(doc.tags) ? doc.tags.join(',').toLowerCase() : '';
        // search in linked entity names
        let links = '';
        if (Array.isArray(doc.linkedEntities)) {
          doc.linkedEntities.forEach(link => {
            if (link.entity === 'customer') {
              const c = data.customers.find(cc => cc.id === link.id);
              if (c && c.fullName) links += ` ${c.fullName.toLowerCase()}`;
            } else if (link.entity === 'policy') {
              const p = data.policies.find(pp => pp.id === link.id);
              if (p && p.policyNumber) links += ` ${p.policyNumber.toLowerCase()}`;
            } else if (link.entity === 'quote') {
              const q = data.quotes.find(qq => qq.id === link.id);
              if (q && q.policyType) links += ` ${q.policyType.toLowerCase()}`;
            } else if (link.entity === 'vehicle') {
              const v = data.vehicles.find(vv => vv.id === link.id);
              if (v && v.vehicleNumber) links += ` ${v.vehicleNumber.toLowerCase()}`;
            }
          });
        }
        return name.includes(term) || type.includes(term) || tags.includes(term) || links.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.folder}</div><p>No documents uploaded.</p><p class="small-note">Use the Upload Document action to add your first document.</p></div>`;
    // update summary metrics when there are no documents
    renderDocumentsSummary();
    return;
  }
  // Build a modern table view instead of cards
  let htmlTable = '<div class="table-container"><table class="data-table"><thead><tr><th>Name</th><th>Type</th><th>Tags</th><th>Actions</th></tr></thead><tbody>';
    list.forEach(doc => {
    const name = doc.name || '(Untitled)';
    const type = doc.type || '';
    const tags = Array.isArray(doc.tags) ? doc.tags.join(', ') : (doc.tags || '');
    // Prefer Google Drive file download link. If unavailable, use storageUrl (legacy) or base64 data as fallback.
    let downloadLink = '';
    if (doc.driveFileId) {
      // Use Google Drive direct download link. uc endpoint triggers download.
      downloadLink = `https://drive.google.com/uc?id=${doc.driveFileId}&export=download`;
    } else if (doc.storageUrl) {
      downloadLink = doc.storageUrl;
    } else if (doc.data) {
      downloadLink = doc.data;
    }
    htmlTable += `<tr data-id="${doc.id}">` +
      `<td>${name}</td>` +
      `<td>${type}</td>` +
      `<td>${tags}</td>` +
      `<td class="actions">` +
      `<button class="view-document" data-id="${doc.id}" title="View">${ICONS.eye}</button>` +
      `<button class="edit-document" data-id="${doc.id}" title="Edit">${ICONS.pencil}</button>` +
      `<button class="delete-document" data-id="${doc.id}" title="Delete">${ICONS.trash}</button>` +
      `<a href="${downloadLink}" download="${name}" title="Download">${ICONS.download}</a>` +
      `</td></tr>`;
  });
  htmlTable += '</tbody></table></div>';
  container.innerHTML = htmlTable;
  // Attach event handlers for new action buttons
  container.querySelectorAll('.view-document').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      previewDocument(id);
    });
  });
  container.querySelectorAll('.edit-document').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openDocumentForm(id);
    });
  });
  container.querySelectorAll('.delete-document').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm('Delete this document?')) {
        deleteDocument(btn.getAttribute('data-id'));
      }
    });
  });
  // update summary metrics for documents
  renderDocumentsSummary();
}

function deleteDocument(id) {
  data.documents = data.documents.filter(doc => doc.id !== id);
  saveData();
  renderDocumentsList();
}

function openDocumentForm(id = '') {
  const modal = document.getElementById('document-form-modal');
  const fileInput = document.getElementById('document-file');
  const nameInput = document.getElementById('document-name');
  const typeSelect = document.getElementById('document-type');
  const tagsInput = document.getElementById('document-tags');
  const multi = document.getElementById('document-linked-entities');
  const hiddenId = document.getElementById('document-id');
  // repopulate multi-select options for customers, policies, quotes and vehicles
  multi.innerHTML = '';
  data.customers.forEach(c => {
    const opt = document.createElement('option');
    opt.value = 'customer:' + c.id;
    opt.textContent = `Customer: ${c.fullName}`;
    multi.appendChild(opt);
  });
  data.policies.forEach(p => {
    const opt = document.createElement('option');
    opt.value = 'policy:' + p.id;
    opt.textContent = `Policy: ${p.policyNumber}`;
    multi.appendChild(opt);
  });
  data.quotes.forEach(q => {
    const opt = document.createElement('option');
    opt.value = 'quote:' + q.id;
    opt.textContent = `Quote: ${q.policyType} (${formatDate(q.quoteDate) || ''})`;
    multi.appendChild(opt);
  });
  data.vehicles.forEach(v => {
    const opt = document.createElement('option');
    opt.value = 'vehicle:' + v.id;
    opt.textContent = `Vehicle: ${v.vehicleNumber}`;
    multi.appendChild(opt);
  });
  // Update title based on whether editing or creating
  const titleEl = modal.querySelector('h3');
  if (!id) {
    hiddenId.value = '';
    nameInput.value = '';
    typeSelect.value = 'Other';
    tagsInput.value = '';
    multi.selectedIndex = -1;
    fileInput.value = '';
    fileInput.required = true;
    if (titleEl) titleEl.textContent = 'Upload Document';
  } else {
    hiddenId.value = id;
    const doc = data.documents.find(d => d.id === id);
    if (doc) {
      if (titleEl) titleEl.textContent = 'Edit Document';
      nameInput.value = doc.name || '';
      typeSelect.value = doc.type || 'Other';
      tagsInput.value = Array.isArray(doc.tags) ? doc.tags.join(', ') : '';
      // pre-select linked entities
      const selectedValues = [];
      if (Array.isArray(doc.linkedEntities)) {
        doc.linkedEntities.forEach(link => {
          selectedValues.push(`${link.entity}:${link.id}`);
        });
      }
      Array.from(multi.options).forEach(opt => {
        opt.selected = selectedValues.includes(opt.value);
      });
      fileInput.value = '';
      fileInput.required = false;
    }
  }
  modal.classList.remove('hidden');
  modal.classList.add('open');
  // Focus the first field for accessibility
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleDocumentForm() {
  const form = document.getElementById('document-form');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fileInput = document.getElementById('document-file');
    const file = fileInput.files[0];
    // Determine whether editing existing doc or creating new
    const hiddenId = document.getElementById('document-id').value;
    const tags = document.getElementById('document-tags').value.split(',').map(t => t.trim()).filter(Boolean);
    const docType = document.getElementById('document-type').value || 'Other';
    const multi = document.getElementById('document-linked-entities');
    const linkedEntities = [];
    Array.from(multi.selectedOptions).forEach(opt => {
      const parts = opt.value.split(':');
      linkedEntities.push({ entity: parts[0], id: parts[1] });
    });
    // If editing an existing document
    if (hiddenId) {
      const existing = data.documents.find(d => d.id === hiddenId);
      if (!existing) {
        alert('Document not found');
        return;
      }
      // Upload new file if provided, otherwise keep existing
      let uploadResult = null;
      if (file) {
        try {
          uploadResult = await uploadFileToDrive(file);
        } catch (err) {
          console.error('File upload failed:', err);
          alert('Failed to upload file. Please try again.');
          return;
        }
      }
      existing.name = document.getElementById('document-name').value || existing.name;
      existing.type = docType;
      existing.tags = tags;
      existing.linkedEntities = linkedEntities;
      if (uploadResult) {
        existing.driveFileId = uploadResult.id;
        existing.size = uploadResult.size;
        existing.mimeType = uploadResult.mimeType;
        if (existing.data) delete existing.data;
      }
      addTimeline(existing, 'Updated document');
      saveData();
      renderDocumentsList();
      document.getElementById('document-form-modal').classList.add('hidden');
      form.reset();
      return;
    }
    // Creating a new document: file is mandatory
    if (!file) {
      alert('Please choose a file');
      return;
    }
    // Generate an ID up front so storage path is deterministic
    const docId = generateId();
    let uploadResultNew;
    try {
      uploadResultNew = await uploadFileToDrive(file);
    } catch (err) {
      console.error('File upload failed:', err);
      alert('Failed to upload file. Please try again.');
      return;
    }
    const docObj = {
      id: docId,
      name: document.getElementById('document-name').value || file.name,
      type: docType,
      tags: tags,
      linkedEntities: linkedEntities,
      driveFileId: uploadResultNew.id,
      size: uploadResultNew.size,
      mimeType: uploadResultNew.mimeType,
      createdAt: new Date().toISOString(),
      timeline: []
    };
    addTimeline(docObj, 'Uploaded document');
    data.documents.push(docObj);
    saveData();
    renderDocumentsList();
    document.getElementById('document-form-modal').classList.add('hidden');
    form.reset();
  });
  document.getElementById('close-document-form').addEventListener('click', () => {
    document.getElementById('document-form-modal').classList.add('hidden');
  });
}

// Document preview
function previewDocument(id) {
  const doc = data.documents.find(d => d.id === id);
  if (!doc) return;
  const modal = document.getElementById('document-preview-modal');
  const title = document.getElementById('document-preview-title');
  const content = document.getElementById('document-preview-content');
  title.textContent = doc.name;
  // Show image or embed PDF from storage or inline data. Prefer the
  // external storage URL when available; fall back to legacy base64 data.
  let html = '';
  if (doc.driveFileId) {
    // Derive a view link for Drive: use export=preview for PDF and images, rely on embed fallback otherwise
    const url = `https://drive.google.com/uc?id=${doc.driveFileId}&export=download`;
    const mime = doc.mimeType || '';
    const isImage = mime.startsWith('image/') || /(\.png|\.jpe?g|\.gif|\.bmp|\.webp)$/i.test(url);
    const isPdf = mime === 'application/pdf' || url.toLowerCase().endsWith('.pdf');
    if (isImage) {
      html = `<img src="${url}" alt="${doc.name}" style="max-width:100%; height:auto;" />`;
    } else if (isPdf) {
      html = `<embed src="${url}" type="application/pdf" width="100%" height="600px" />`;
    } else {
      html = '<p>Cannot preview this file type.</p>';
    }
  } else if (doc.storageUrl) {
    const url = doc.storageUrl;
    const mime = doc.mimeType || '';
    const isImage = mime.startsWith('image/') || /(\.png|\.jpe?g|\.gif|\.bmp|\.webp)$/i.test(url);
    const isPdf = mime === 'application/pdf' || url.toLowerCase().endsWith('.pdf');
    if (isImage) {
      html = `<img src="${url}" alt="${doc.name}" style="max-width:100%; height:auto;" />`;
    } else if (isPdf) {
      html = `<embed src="${url}" type="application/pdf" width="100%" height="600px" />`;
    } else {
      html = '<p>Cannot preview this file type.</p>';
    }
  } else if (doc.data) {
    if (doc.data.startsWith('data:image')) {
      html = `<img src="${doc.data}" alt="${doc.name}" style="max-width:100%; height:auto;" />`;
    } else if (doc.data.startsWith('data:application/pdf')) {
      html = `<embed src="${doc.data}" type="application/pdf" width="100%" height="600px" />`;
    } else {
      html = '<p>Cannot preview this file type.</p>';
    }
  } else {
    html = '<p>Cannot preview this file type.</p>';
  }
  // show linked entities
  if (doc.linkedEntities && doc.linkedEntities.length > 0) {
    html += '<h4>Linked To</h4><ul>';
    doc.linkedEntities.forEach(link => {
      let label = '';
      if (link.entity === 'customer') {
        const c = data.customers.find(cu => cu.id === link.id);
        if (c) label = `Customer: ${c.fullName}`;
      } else if (link.entity === 'policy') {
        const p = data.policies.find(pl => pl.id === link.id);
        if (p) label = `Policy: ${p.policyNumber}`;
      } else if (link.entity === 'quote') {
        const q = data.quotes.find(qt => qt.id === link.id);
        if (q) label = `Quote: ${q.policyType}`;
      } else if (link.entity === 'vehicle') {
        const v = data.vehicles.find(vh => vh.id === link.id);
        if (v) label = `Vehicle: ${v.vehicleNumber}`;
      }
      if (label) html += `<li>${label}</li>`;
    });
    html += '</ul>';
  }
  // timeline
  if (doc.timeline && doc.timeline.length > 0) {
    html += '<h4>Timeline</h4><ul class="timeline">';
    doc.timeline.forEach(entry => {
      html += `<li><span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span></li>`;
    });
    html += '</ul>';
  }
  // Append download link to allow saving the file locally
  // Always offer a download link. Prefer the storageUrl; fallback to inline data.
  const downloadLink = doc.storageUrl || doc.data || '';
  html += `<p class="download-link"><a href="${downloadLink}" download="${doc.name}">${ICONS.download} Download</a></p>`;
  content.innerHTML = html;
  // Set up edit button with icon and click handler
  const editBtn = document.getElementById('edit-document-btn');
  if (editBtn) {
    // populate pencil icon inside the button
    editBtn.innerHTML = `${ICONS.pencil} Edit`;
    editBtn.onclick = () => {
      // close preview modal before opening edit form
      modal.classList.add('hidden');
      modal.classList.remove('open');
      openDocumentForm(id);
    };
  }
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-document-preview').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

// Commissions
function renderCommissionsList() {
  const container = document.getElementById('commissions-list');
  if (!container) return;
  const term = (pageSearchTerms.commissions || '').toLowerCase();
  const list = (!term
    ? data.commissions.slice()
    : data.commissions.filter(c => {
        const policy = data.policies.find(p => p.id === c.policyId) || {};
        const str = `${policy.policyNumber || ''} ${c.type || ''} ${c.value || ''} ${c.expected || ''} ${c.received || ''} ${c.net || ''}`.toLowerCase();
        return str.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.award}</div><p>No commission records yet.</p><p class="small-note">Record commission data via the quick add menu or the Record Commission button.</p></div>`;
    // ensure summary updates when list empty
    renderCommissionsSummary();
    return;
  }
  // apply sorting
  const sortState = pageSortStates.commissions;
  if (sortState.field) {
    list.sort((a, b) => {
      const fa = (a[sortState.field] || '').toString().toLowerCase();
      const fb = (b[sortState.field] || '').toString().toLowerCase();
      if (fa < fb) return -1 * sortState.dir;
      if (fa > fb) return 1 * sortState.dir;
      return 0;
    });
  }
  // build table
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="policyId">Policy</th>' +
    '<th data-field="type">Type</th>' +
    '<th data-field="value">Value</th>' +
    '<th data-field="expected">Expected</th>' +
    '<th data-field="received">Received</th>' +
    '<th data-field="cashback">Cashback</th>' +
    '<th data-field="points">Points</th>' +
    '<th data-field="charges">Charges</th>' +
    '<th data-field="net">Net</th>' +
    '<th data-field="account">Account</th>' +
    '<th>Actions</th>' +
    '</tr></thead><tbody>';
  list.forEach(c => {
    const policy = data.policies.find(p => p.id === c.policyId) || {};
    const policyNumber = policy.policyNumber || '';
    const typeLabel = c.type || '';
    // Value: if percentage, show with %; if fixed or expected, show amount; if points then points
    let valueLabel = '';
    if (c.type === 'percentage') valueLabel = c.value + '%';
    else if (c.type === 'points') valueLabel = c.value + ' pts';
    else valueLabel = c.value ? `₹${c.value}` : '';
    const expected = c.expected ? `₹${c.expected}` : '';
    const received = c.received ? `₹${c.received}` : '';
    const cashback = c.cashback ? `₹${c.cashback}` : '';
    const points = c.points ? c.points : '';
    const charges = c.charges ? `₹${c.charges}` : '';
    const net = c.net ? `₹${c.net}` : '';
    const account = c.account || '';
    html += `<tr data-id="${c.id}">
      <td>${policyNumber}</td>
      <td>${typeLabel}</td>
      <td>${valueLabel}</td>
      <td>${expected}</td>
      <td>${received}</td>
      <td>${cashback}</td>
      <td>${points}</td>
      <td>${charges}</td>
      <td>${net}</td>
      <td>${account}</td>
      <td class="actions">
        <button class="view-commission" data-id="${c.id}" title="View">${ICONS.eye}</button>
        <button class="edit-commission" data-id="${c.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-commission" data-id="${c.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('commissions', tableElem, renderCommissionsList);
  // attach actions
  container.querySelectorAll('.view-commission').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCommissionDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-commission').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCommissionForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-commission').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this commission record?')) deleteCommission(btn.getAttribute('data-id'));
    });
  });
  // update summary metrics
  renderCommissionsSummary();
}

// Vehicles
function renderVehiclesList() {
  const container = document.getElementById('vehicles-list');
  if (!container) return;
  const term = (pageSearchTerms.vehicles || '').toLowerCase();
  let list = (!term
    ? data.vehicles.slice()
    : data.vehicles.filter(v => {
        const num = (v.vehicleNumber || '').toLowerCase();
        const makeModel = `${v.make || ''} ${v.model || ''}`.toLowerCase();
        const ownerName = (data.customers.find(c => c.id === v.owner) || {}).fullName || '';
        return num.includes(term) || makeModel.includes(term) || ownerName.toLowerCase().includes(term);
      })
  );
  // apply sorting if a field is defined for vehicles
  const sortState = pageSortStates.vehicles;
  if (sortState.field) {
    list.sort((a, b) => {
      const fa = (a[sortState.field] || '').toString().toLowerCase();
      const fb = (b[sortState.field] || '').toString().toLowerCase();
      if (fa < fb) return -1 * sortState.dir;
      if (fa > fb) return 1 * sortState.dir;
      return 0;
    });
  }
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.car}</div><p>No vehicles found.</p><p class="small-note">Add a vehicle via the + button or quick add menu.</p></div>`;
    renderVehiclesSummary();
    return;
  }
  // Build a modern table view for vehicles
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="vehicleNumber">Vehicle</th>' +
    '<th data-field="owner">Owner</th>' +
    '<th data-field="make">Make/Model</th>' +
    '<th data-field="vehicleType">Type</th>' +
    '<th>Actions</th></tr></thead><tbody>';
  list.forEach(v => {
    const ownerName = (data.customers.find(c => c.id === v.owner) || {}).fullName || '';
    const makeModel = `${v.make || ''} ${v.model || ''}`.trim();
    const type = v.vehicleType || v.type || '';
    // choose an icon based on the vehicleType – bikes get the bike icon, everything else defaults to the car icon
    const iconSvg = (type && type.toLowerCase().includes('bike')) ? ICONS.bike : ICONS.car;
    html += `<tr data-id="${v.id}">
      <td><span class="vehicle-icon">${iconSvg}</span> ${v.vehicleNumber || ''}</td>
      <td>${ownerName}</td>
      <td>${makeModel}</td>
      <td>${type}</td>
      <td class="actions">
        <button class="view-vehicle" data-id="${v.id}" title="View">${ICONS.eye}</button>
        <button class="edit-vehicle" data-id="${v.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-vehicle" data-id="${v.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // after the table is injected we can attach sorting behaviour.  Passing the
  // renderVehiclesList function ensures subsequent clicks re‑render the list.
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('vehicles', tableElem, renderVehiclesList);
  // attach action handlers
  container.querySelectorAll('.view-vehicle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVehicleDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-vehicle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVehicleForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-vehicle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this vehicle?')) deleteVehicle(btn.getAttribute('data-id'));
    });
  });
  renderVehiclesSummary();
}

function openVehicleForm(id) {
  const modal = document.getElementById('vehicle-form-modal');
  const title = document.getElementById('vehicle-form-title');
  const form = document.getElementById('vehicle-form');
  form.reset();
  form.elements['vehicle-id'].value = '';
  // populate owner select
  populateCustomerSelect(form.elements['vehicle-owner']);
  if (id) {
    const veh = data.vehicles.find(v => v.id === id);
    if (!veh) return;
    title.textContent = 'Edit Vehicle';
    form.elements['vehicle-id'].value = veh.id;
    form.elements['vehicle-owner'].value = veh.owner || '';
    form.elements['vehicle-number'].value = veh.vehicleNumber || '';
    form.elements['vehicle-chassis'].value = veh.chassisNumber || '';
    form.elements['vehicle-engine'].value = veh.engineNumber || '';
    form.elements['vehicle-type'].value = veh.vehicleType || '';
    form.elements['vehicle-make'].value = veh.make || '';
    form.elements['vehicle-model'].value = veh.model || '';
    form.elements['vehicle-fuel'].value = veh.fuelType || '';
    form.elements['vehicle-registration'].value = veh.registrationDate || '';
    form.elements['vehicle-idv'].value = veh.idv || '';
    form.elements['vehicle-remarks'].value = veh.remarks || '';
  } else {
    title.textContent = 'Add Vehicle';
  }
  modal.classList.remove('hidden');
  // Accessibility: move focus to the first field
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleVehicleForm() {
  const form = document.getElementById('vehicle-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['vehicle-id'].value;
    const vehObj = {
      id: id || generateId(),
      owner: form.elements['vehicle-owner'].value,
      vehicleNumber: form.elements['vehicle-number'].value.trim(),
      chassisNumber: form.elements['vehicle-chassis'].value.trim(),
      engineNumber: form.elements['vehicle-engine'].value.trim(),
      vehicleType: form.elements['vehicle-type'].value.trim(),
      make: form.elements['vehicle-make'].value.trim(),
      model: form.elements['vehicle-model'].value.trim(),
      fuelType: form.elements['vehicle-fuel'].value.trim(),
      registrationDate: form.elements['vehicle-registration'].value,
      idv: form.elements['vehicle-idv'].value,
      remarks: form.elements['vehicle-remarks'].value.trim(),
      timeline: []
    };
    if (id) {
      const existing = data.vehicles.find(v => v.id === id);
      Object.assign(existing, vehObj);
      addTimeline(existing, 'Updated vehicle');
    } else {
      addTimeline(vehObj, 'Created vehicle');
      data.vehicles.push(vehObj);
    }
    saveData();
    renderVehiclesList();
    // update selects for policies
    document.getElementById('vehicle-form-modal').classList.add('hidden');
  });
  document.getElementById('close-vehicle-form').addEventListener('click', () => {
    document.getElementById('vehicle-form-modal').classList.add('hidden');
  });
}

function openVehicleDetail(id) {
  const veh = data.vehicles.find(v => v.id === id);
  if (!veh) return;
  const modal = document.getElementById('vehicle-detail-modal');
  const titleEl = document.getElementById('vehicle-detail-title');
  const content = document.getElementById('vehicle-detail-content');
  // Set title for accessibility
  titleEl.textContent = veh.vehicleNumber || '';
  // Clear content
  content.innerHTML = '';
  const ownerName = (data.customers.find(c => c.id === veh.owner) || {}).fullName || '';
  // Header
  const headerEl = document.createElement('div');
  headerEl.className = 'profile-header';
  const headerTop = document.createElement('div');
  headerTop.className = 'header-top';
  const h3 = document.createElement('h3');
  h3.textContent = veh.vehicleNumber || '';
  headerTop.appendChild(h3);
  if (veh.vehicleType) {
    const badge = document.createElement('span');
    badge.className = 'status-badge';
    badge.textContent = veh.vehicleType;
    headerTop.appendChild(badge);
  }
  headerEl.appendChild(headerTop);
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  if (veh.make || veh.model) {
    const p = document.createElement('p');
    p.textContent = `${veh.make || ''} ${veh.model || ''}`.trim();
    infoDiv.appendChild(p);
  }
  if (ownerName) {
    const p2 = document.createElement('p');
    p2.textContent = `Owner: ${ownerName}`;
    infoDiv.appendChild(p2);
  }
  headerEl.appendChild(infoDiv);
  content.appendChild(headerEl);
  // Basic details
  const basicItems = [];
  const pushItem = (label, val) => { if (val) basicItems.push({ label, value: val }); };
  pushItem('Chassis Number', veh.chassisNumber);
  pushItem('Engine Number', veh.engineNumber);
  pushItem('Fuel Type', veh.fuelType);
  pushItem('Registration Date', formatDate(veh.registrationDate));
  pushItem('IDV', veh.idv);
  pushItem('Remarks', veh.remarks);
  if (basicItems.length) {
    const basicSection = createProfileSection('Vehicle Details', basicItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(basicSection);
  }
  // Policies section
  const linkedPolicies = data.policies.filter(p => p.vehicle === veh.id);
  if (linkedPolicies.length) {
    const policiesSection = createProfileSection('Policies', linkedPolicies, p => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span><strong>${p.policyNumber || ''}</strong> (${p.policyType || ''})</span><span>₹${p.premiumAmount || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openPolicyDetail(p.id);
      });
      return el;
    });
    content.appendChild(policiesSection);
  }
  // Documents section
  const linkedDocs = data.documents.filter(doc => doc.linkedEntities && doc.linkedEntities.some(le => le.entity === 'vehicle' && le.id === veh.id));
  if (linkedDocs.length) {
    const docsSection = createProfileSection('Documents', linkedDocs, d => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${d.name || ''}</span><span>${d.type || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        previewDocument(d.id);
      });
      return el;
    });
    content.appendChild(docsSection);
  }
  // Timeline
  if (veh.timeline && veh.timeline.length > 0) {
    const timelineSection = document.createElement('div');
    timelineSection.className = 'profile-section';
    timelineSection.classList.add('collapsed');
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = '<h4>Timeline</h4><span class="toggle-icon">▾</span>';
    header.addEventListener('click', () => {
      timelineSection.classList.toggle('collapsed');
    });
    timelineSection.appendChild(header);
    const tlContent = document.createElement('div');
    tlContent.className = 'section-content';
    const ul = document.createElement('ul');
    ul.className = 'timeline';
    veh.timeline.forEach(entry => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span>`;
      ul.appendChild(li);
    });
    tlContent.appendChild(ul);
    timelineSection.appendChild(tlContent);
    content.appendChild(timelineSection);
  }
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-vehicle-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

function deleteVehicle(id) {
  // remove vehicle reference from policies
  data.policies.forEach(p => {
    if (p.vehicle === id) p.vehicle = '';
  });
  data.vehicles = data.vehicles.filter(v => v.id !== id);
  saveData();
  renderVehiclesList();
  renderPoliciesList();
}

// ===== Calendar =====
let calendarCurrentDate = new Date();
// Calendar view mode: 'month' or 'agenda'. Users can toggle between a monthly grid and agenda list.
let calendarViewMode = 'month';

function renderCalendar() {
  const view = document.getElementById('calendar-view');
  const monthLabel = document.getElementById('calendar-month-label');
  if (!view || !monthLabel) return;
  const year = calendarCurrentDate.getFullYear();
  const month = calendarCurrentDate.getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  // Build a map of events keyed by date string (YYYY-MM-DD)
  const eventsByDate = {};
  // Collect policy events
  data.policies.forEach(p => {
    if (p.startDate) {
      const d = new Date(p.startDate);
      const key = d.toISOString().split('T')[0];
      if (!eventsByDate[key]) eventsByDate[key] = [];
      eventsByDate[key].push({ type: 'Policy Start', label: p.policyNumber, id: p.id, entity: 'policy' });
    }
    if (p.endDate) {
      const d = new Date(p.endDate);
      const key = d.toISOString().split('T')[0];
      if (!eventsByDate[key]) eventsByDate[key] = [];
      eventsByDate[key].push({ type: 'Policy End', label: p.policyNumber, id: p.id, entity: 'policy' });
      eventsByDate[key].push({ type: 'Commission Expected', label: p.policyNumber, id: p.id, entity: 'policy' });
    }
  });
  // Collect quote shared events
  data.quotes.forEach(q => {
    if (q.status === 'Shared' && q.quoteDate) {
      const d = new Date(q.quoteDate);
      const key = d.toISOString().split('T')[0];
      if (!eventsByDate[key]) eventsByDate[key] = [];
      eventsByDate[key].push({ type: 'Quote Shared', label: q.policyType, id: q.id, entity: 'quote' });
    }
  });
  // Determine rendering based on view mode
  if (calendarViewMode === 'month') {
    monthLabel.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
    let html = '<table class="calendar-table"><thead><tr>';
    const weekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    weekday.forEach(w => { html += `<th>${w}</th>`; });
    html += '</tr></thead><tbody>';
    let day = 1;
    for (let i = 0; i < 6; i++) {
      html += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startWeekDay) {
          html += '<td></td>';
        } else if (day > totalDays) {
          html += '<td></td>';
        } else {
          const currentDate = new Date(year, month, day);
          const key = currentDate.toISOString().split('T')[0];
          html += `<td class="calendar-cell"><div class="date-number">${day}</div>`;
          if (eventsByDate[key]) {
            html += '<ul class="event-list">';
            eventsByDate[key].forEach(ev => {
              let color;
              if (ev.type === 'Policy Start') color = '#28a745';
              else if (ev.type === 'Policy End') color = '#dc3545';
              else if (ev.type === 'Commission Expected') color = '#0d6efd';
              else if (ev.type === 'Quote Shared') color = '#ffc107';
              html += `<li style="color:${color}" class="calendar-event" data-entity="${ev.entity}" data-id="${ev.id}">${ev.type}: ${ev.label}</li>`;
            });
            html += '</ul>';
          }
          html += '</td>';
          day++;
        }
      }
      html += '</tr>';
      if (day > totalDays) break;
    }
    html += '</tbody></table>';
    view.innerHTML = html;
  } else {
    // Agenda view: list events chronologically for current month
    monthLabel.textContent = `${monthNames[month]} ${year} (Agenda)`;
    // Build list of events within current month
    const agendaItems = [];
    Object.keys(eventsByDate).forEach(key => {
      const d = new Date(key);
      if (d.getFullYear() === year && d.getMonth() === month) {
        eventsByDate[key].forEach(ev => {
          agendaItems.push({ date: new Date(key), type: ev.type, label: ev.label, entity: ev.entity, id: ev.id });
        });
      }
    });
    agendaItems.sort((a, b) => a.date - b.date);
    let html = '<div class="agenda-list">';
    if (agendaItems.length === 0) {
      html += '<p>No events scheduled this month.</p>';
    } else {
      let lastDate = '';
      agendaItems.forEach(item => {
        const dateStr = item.date.toDateString();
        if (dateStr !== lastDate) {
          if (lastDate !== '') html += '</ul>';
          html += `<h4>${dateStr}</h4><ul class="agenda-day">`;
          lastDate = dateStr;
        }
        let color;
        if (item.type === 'Policy Start') color = '#28a745';
        else if (item.type === 'Policy End') color = '#dc3545';
        else if (item.type === 'Commission Expected') color = '#0d6efd';
        else if (item.type === 'Quote Shared') color = '#ffc107';
        html += `<li style="color:${color}" class="calendar-event" data-entity="${item.entity}" data-id="${item.id}">${item.type}: ${item.label}</li>`;
      });
      if (lastDate !== '') html += '</ul>';
    }
    html += '</div>';
    view.innerHTML = html;
  }
  // attach click handlers to events
  view.querySelectorAll('.calendar-event').forEach(el => {
    el.addEventListener('click', e => {
      const entity = el.getAttribute('data-entity');
      const entityId = el.getAttribute('data-id');
      if (entity === 'policy') {
        openPolicyDetail(entityId);
      } else if (entity === 'quote') {
        openQuoteDetail(entityId);
      }
      e.stopPropagation();
    });
  });
  // prev/next controls adjust month, then re-render
  const prevBtn = document.getElementById('calendar-prev');
  const nextBtn = document.getElementById('calendar-next');
  if (prevBtn) {
    prevBtn.onclick = () => {
      calendarCurrentDate = new Date(year, month - 1, 1);
      renderCalendar();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      calendarCurrentDate = new Date(year, month + 1, 1);
      renderCalendar();
    };
  }
  // toggle view button
  const toggleBtn = document.getElementById('calendar-view-toggle');
  if (toggleBtn) {
    toggleBtn.onclick = () => {
      calendarViewMode = calendarViewMode === 'month' ? 'agenda' : 'month';
      // update button label
      toggleBtn.textContent = calendarViewMode === 'month' ? 'Agenda' : 'Month';
      renderCalendar();
    };
    // update text on initial render
    toggleBtn.textContent = calendarViewMode === 'month' ? 'Agenda' : 'Month';
  }
}

// ===== Dashboard =====
function renderDashboard() {
  // populate broker and company selects and default date range
  const startEl = document.getElementById('dashboard-start');
  const endEl = document.getElementById('dashboard-end');
  const brokerSelect = document.getElementById('dashboard-broker');
  const companySelect = document.getElementById('dashboard-company');
  const typeSelect = document.getElementById('dashboard-policy-type');
  const applyBtn = document.getElementById('dashboard-apply');
  const exportBtn = document.getElementById('dashboard-export');
  const cardsContainer = document.getElementById('dashboard-cards');
  if (!cardsContainer) return;
  // populate broker select
  brokerSelect.innerHTML = '<option value="">All</option>';
  data.brokers.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    brokerSelect.appendChild(opt);
  });
  // populate company select
  companySelect.innerHTML = '<option value="">All</option>';
  data.companies.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name;
    companySelect.appendChild(opt);
  });
  // set default date range (current month)
  const now = new Date();
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
  const today = now.toISOString().split('T')[0];
  startEl.value = startEl.value || firstOfMonth;
  endEl.value = endEl.value || today;
  // function to compute and render cards
  function computeAndRender() {
    const startDate = new Date(startEl.value);
    const endDate = new Date(endEl.value);
    const brokerId = brokerSelect.value;
    const companyId = companySelect.value;
    const policyType = typeSelect.value;
    // filter policies based on criteria
    const filteredPolicies = data.policies.filter(p => {
      const sd = p.startDate ? new Date(p.startDate) : null;
      if (!sd) return false;
      if (sd < startDate || sd > endDate) return false;
      if (brokerId && p.broker !== brokerId) return false;
      if (companyId && p.company !== companyId) return false;
      if (policyType && p.policyType !== policyType) return false;
      return true;
    });
    // policies sold
    const policiesSold = filteredPolicies.length;
    // premium collected from payments within date range
    let premiumCollected = 0;
    data.payments.forEach(pay => {
      const d = pay.date ? new Date(pay.date) : null;
      if (!d) return;
      if (d < startDate || d > endDate) return;
      // filter by selected policy
      const policy = data.policies.find(p => p.id === pay.policy);
      if (!policy) return;
      if (brokerId && policy.broker !== brokerId) return;
      if (companyId && policy.company !== companyId) return;
      if (policyType && policy.policyType !== policyType) return;
      premiumCollected += parseFloat(pay.amount || 0);
    });
    // commission earned (expected) and received, cashback
    let commissionExpected = 0;
    let commissionReceived = 0;
    let cashbackTotal = 0;
    data.commissions.forEach(rec => {
      const pol = data.policies.find(p => p.id === rec.policyId);
      if (!pol) return;
      const sd = pol.startDate ? new Date(pol.startDate) : null;
      if (!sd) return;
      if (sd < startDate || sd > endDate) return;
      if (brokerId && pol.broker !== brokerId) return;
      if (companyId && pol.company !== companyId) return;
      if (policyType && pol.policyType !== policyType) return;
      commissionExpected += parseFloat(rec.expected || 0);
      commissionReceived += parseFloat(rec.received || 0);
      cashbackTotal += parseFloat(rec.cashback || 0);
    });
    // renewals due (policies ending within next 30 days of end date)
    const endWindow = new Date(endEl.value);
    const renewalsDue = data.policies.filter(p => {
      if (!p.endDate) return false;
      const ed = new Date(p.endDate);
      return ed >= startDate && ed <= endWindow;
    }).length;
    // quotes statuses
    let quotesShared = 0, quotesAccepted = 0, quotesRejected = 0, quotesExpired = 0;
    data.quotes.forEach(q => {
      const qd = q.quoteDate ? new Date(q.quoteDate) : null;
      if (!qd) return;
      if (qd < startDate || qd > endDate) return;
      // filter by broker, company, type if needed
      if (brokerId && q.broker !== brokerId) return;
      if (companyId && q.company !== companyId) return;
      if (policyType && q.policyType !== policyType) return;
      if (q.status === 'Shared') quotesShared++; else if (q.status === 'Accepted') quotesAccepted++; else if (q.status === 'Rejected') quotesRejected++; else if (q.status === 'Expired') quotesExpired++;
    });
    // clear container
    cardsContainer.innerHTML = '';
    // Card helper: simple metric card
    function addCard(title, value, color) {
      const card = document.createElement('div');
      card.className = 'dashboard-card';
      card.innerHTML = `<h4>${title}</h4><p class="card-value">${value}</p>`;
      if (color) card.querySelector('h4').style.color = color;
      cardsContainer.appendChild(card);
    }
    // Card helper: progress card with two values
    function addProgressCard(title, current, total, colour) {
      const pct = total > 0 ? (current / total) * 100 : 0;
      const card = document.createElement('div');
      card.className = 'dashboard-card';
      const formattedCurrent = typeof current === 'number' ? current.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : current;
      const formattedTotal = typeof total === 'number' ? total.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : total;
      card.innerHTML = `<h4>${title}</h4>
        <div class="metric-group">
          <span class="card-value">${formattedCurrent}</span>
          <span class="card-subvalue">/ ${formattedTotal}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%; background:${colour || 'var(--primary-color)'};"></div></div>`;
      cardsContainer.appendChild(card);
    }
    // Compute additional ratios
    const policiesActive = data.policies.filter(p => {
      if (!p.endDate) return true;
      const ed = new Date(p.endDate);
      return ed >= new Date();
    }).length;
    const policiesExpired = data.policies.length - policiesActive;
    const premiumTotal = data.policies.reduce((sum, p) => sum + (parseFloat(p.totalPayable) || 0), 0);
    const premiumPending = Math.max(premiumTotal - premiumCollected, 0);
    const commissionPending = Math.max(commissionExpected - commissionReceived, 0);
    // Summary cards
    addCard('Policies Sold', policiesSold);
    addProgressCard('Active Policies', policiesActive, data.policies.length, 'var(--success-color)');
    addProgressCard('Premium Collected', premiumCollected, premiumTotal, 'var(--primary-color)');
    addProgressCard('Commission Received', commissionReceived, commissionExpected, 'var(--accent-color)');
    addCard('Cashback Given', `₹${cashbackTotal.toFixed(2)}`);
    addCard('Renewals Due', renewalsDue, 'var(--warning-color)');
    // Quote status cards
    addCard('Quotes Shared', quotesShared);
    addCard('Quotes Accepted', quotesAccepted, 'var(--success-color)');
    addCard('Quotes Rejected', quotesRejected, 'var(--danger-color)');
    addCard('Quotes Expired', quotesExpired, 'var(--warning-color)');
  }
  // apply filters when clicking apply
  if (applyBtn) {
    applyBtn.onclick = (e) => {
      e.preventDefault();
      computeAndRender();
    };
  }
  // export CSV
  if (exportBtn) {
    exportBtn.onclick = (e) => {
      e.preventDefault();
      // create CSV with policies and payments filtered by current criteria
      const rows = [];
      rows.push(['PolicyNumber','PolicyType','Company','Broker','StartDate','EndDate','Premium','Tax','TotalPayable']);
      data.policies.forEach(p => {
        rows.push([p.policyNumber,p.policyType,p.company,p.broker,p.startDate,p.endDate,p.premiumAmount,p.taxAmount,p.totalPayable]);
      });
      let csv = '';
      rows.forEach(r => {
        csv += r.map(val => '"'+val+'"').join(',') + '\n';
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'insurance_data.csv';
      link.click();
    };
  }
  // compute on initial load
  computeAndRender();
}

// ===== Settings =====
function renderSettings() {
  // populate safe giveback range fields
  const minInput = document.getElementById('settings-safe-min');
  const maxInput = document.getElementById('settings-safe-max');
  if (minInput) minInput.value = data.settings.safeGivebackMin || 0;
  if (maxInput) maxInput.value = data.settings.safeGivebackMax || 0;
  // render lists of bank accounts, upi ids, wallets
  function renderList(listElId, items, removeCallback) {
    const container = document.getElementById(listElId);
    if (!container) return;
    container.innerHTML = '';
    if (!items || items.length === 0) {
      container.textContent = 'No entries';
      return;
    }
    items.forEach((item, idx) => {
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.alignItems = 'center';
      div.style.marginBottom = '0.25rem';
      const span = document.createElement('span');
      span.textContent = item;
      div.appendChild(span);
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.style.backgroundColor = '#dc3545';
      delBtn.style.color = 'white';
      delBtn.style.border = 'none';
      delBtn.style.padding = '0.25rem 0.5rem';
      delBtn.style.borderRadius = '4px';
      delBtn.onclick = () => {
        removeCallback(idx);
      };
      div.appendChild(delBtn);
      container.appendChild(div);
    });
  }
  renderList('settings-bank-list', data.settings.bankAccounts, (idx) => {
    data.settings.bankAccounts.splice(idx, 1);
    saveData();
    renderSettings();
  });
  renderList('settings-upi-list', data.settings.upiIds, (idx) => {
    data.settings.upiIds.splice(idx, 1);
    saveData();
    renderSettings();
  });
  renderList('settings-wallet-list', data.settings.wallets, (idx) => {
    data.settings.wallets.splice(idx, 1);
    saveData();
    renderSettings();
  });
  // handle forms
  const rangeForm = document.getElementById('settings-range-form');
  if (rangeForm && !rangeForm.dataset.bound) {
    rangeForm.dataset.bound = 'true';
    rangeForm.addEventListener('submit', e => {
      e.preventDefault();
      const min = parseFloat(minInput.value) || 0;
      const max = parseFloat(maxInput.value) || 0;
      if (min < 0 || max > 1 || min > max) {
        alert('Please enter valid percentages between 0 and 1 (min <= max).');
        return;
      }
      data.settings.safeGivebackMin = min;
      data.settings.safeGivebackMax = max;
      saveData();
      document.getElementById('settings-message').textContent = 'Save successful!';
      setTimeout(() => { document.getElementById('settings-message').textContent = ''; }, 3000);
    });
  }
  const bankForm = document.getElementById('settings-bank-form');
  if (bankForm && !bankForm.dataset.bound) {
    bankForm.dataset.bound = 'true';
    bankForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = document.getElementById('settings-bank-input').value.trim();
      if (val) {
        if (!data.settings.bankAccounts) data.settings.bankAccounts = [];
        data.settings.bankAccounts.push(val);
        saveData();
        document.getElementById('settings-bank-input').value = '';
        renderSettings();
      }
    });
  }
  const upiForm = document.getElementById('settings-upi-form');
  if (upiForm && !upiForm.dataset.bound) {
    upiForm.dataset.bound = 'true';
    upiForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = document.getElementById('settings-upi-input').value.trim();
      if (val) {
        if (!data.settings.upiIds) data.settings.upiIds = [];
        data.settings.upiIds.push(val);
        saveData();
        document.getElementById('settings-upi-input').value = '';
        renderSettings();
      }
    });
  }
  const walletForm = document.getElementById('settings-wallet-form');
  if (walletForm && !walletForm.dataset.bound) {
    walletForm.dataset.bound = 'true';
    walletForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = document.getElementById('settings-wallet-input').value.trim();
      if (val) {
        if (!data.settings.wallets) data.settings.wallets = [];
        data.settings.wallets.push(val);
        saveData();
        document.getElementById('settings-wallet-input').value = '';
        renderSettings();
      }
    });
  }
  // Export
  const exportBtn = document.getElementById('settings-export');
  if (exportBtn && !exportBtn.dataset.bound) {
    exportBtn.dataset.bound = 'true';
    exportBtn.onclick = () => {
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'insurance_backup.json';
      link.click();
    };
  }
  // Import
  const importBtn = document.getElementById('settings-import');
  const importFile = document.getElementById('settings-import-file');
  if (importBtn && !importBtn.dataset.bound) {
    importBtn.dataset.bound = 'true';
    importBtn.onclick = () => {
      importFile.click();
    };
  }
  if (importFile && !importFile.dataset.bound) {
    importFile.dataset.bound = 'true';
    importFile.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const imported = JSON.parse(reader.result);
          if (typeof imported !== 'object') throw new Error('Invalid file');
          if (!confirm('Importing will overwrite current data. Continue?')) return;
          // Replace local storage
          data = imported;
          saveData();
          location.reload();
        } catch (err) {
          alert('Failed to import backup: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
  }
  // Reset
  const resetBtn = document.getElementById('settings-reset');
  if (resetBtn && !resetBtn.dataset.bound) {
    resetBtn.dataset.bound = 'true';
    resetBtn.onclick = async () => {
      // Ask for confirmation to clear both local and cloud data
      if (confirm('This will erase all local data and delete your cloud data. Continue?')) {
        // Clear local data
        localStorage.removeItem('insuranceData');
        // Delete remote data if Firebase is configured
        try {
          if (firebaseConfig && firebaseConfig.apiKey && firestoreDb) {
            const docId = currentCloudDocId || 'hk-insurance-app';
            await deleteDataFromCloud(docId);
          }
        } catch (err) {
          console.warn('Failed to delete cloud data during reset:', err);
        }
        location.reload();
      }
    };
  }

  // Render master configuration (categories, types, plans, add-ons)
  renderMasterData();

  // Cloud Sync controls
  loadCloudDocId();
  const statusEl = document.getElementById('cloud-sync-status');
  function setCloudStatus(msg, isError) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.style.color = isError ? '#dc3545' : 'var(--accent-color)';
    if (msg) setTimeout(() => { statusEl.textContent = ''; }, 6000);
  }
  const saveBtn = document.getElementById('cloud-doc-save');
  if (saveBtn && !saveBtn.dataset.bound) {
    saveBtn.dataset.bound = 'true';
    saveBtn.addEventListener('click', () => {
      const input = document.getElementById('cloud-doc-id');
      const val = input ? input.value.trim() : '';
      if (!val) {
        setCloudStatus('Please enter a document ID.', true);
        return;
      }
      saveCloudDocId(val);
      setCloudStatus('Document ID saved.', false);
    });
  }
  const deleteBtn = document.getElementById('cloud-doc-delete');
  if (deleteBtn && !deleteBtn.dataset.bound) {
    deleteBtn.dataset.bound = 'true';
    deleteBtn.addEventListener('click', () => {
      if (!firebaseConfig || !firebaseConfig.apiKey) {
        setCloudStatus('Firebase is not configured. Update firebaseConfig in app.js.', true);
        return;
      }
      const docId = currentCloudDocId || 'hk-insurance-app';
      if (!confirm('This will permanently delete your cloud data for document "' + docId + '". Continue?')) return;
      setCloudStatus('Deleting…', false);
      deleteDataFromCloud(docId).then(() => {
        setCloudStatus('Cloud data deleted.', false);
      }).catch(err => {
        setCloudStatus('Delete failed: ' + err.message, true);
      });
    });
  }
  const syncNowBtn = document.getElementById('cloud-sync-now');
  if (syncNowBtn && !syncNowBtn.dataset.bound) {
    syncNowBtn.dataset.bound = 'true';
    syncNowBtn.addEventListener('click', async () => {
      if (!firebaseConfig || !firebaseConfig.apiKey) {
        setCloudStatus('Firebase is not configured. Update firebaseConfig in app.js.', true);
        return;
      }
      setCloudStatus('Syncing…', false);
      try {
        await syncWithCloud();
        setCloudStatus('Sync complete! Reloading…', false);
        setTimeout(() => { location.reload(); }, 1200);
      } catch (err) {
        setCloudStatus('Sync failed: ' + err.message, true);
      }
    });
  }

  // Account controls: handle logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn && !logoutBtn.dataset.bound) {
    logoutBtn.dataset.bound = 'true';
    logoutBtn.addEventListener('click', () => {
      if (confirm('Log out of the app?')) {
        logout();
      }
    });
  }
}

/**
 * Renders the policy plan management interface within the Settings page. Users can define
 * plans for each company and policy type, along with a list of allowed add-ons. Plans
 * are stored in data.settings.policyPlans as objects: { id, companyId, type, name, addons: [] }.
 */
function renderPlanSettings() {
  const planListContainer = document.getElementById('settings-plan-list');
  const companySelect = document.getElementById('settings-plan-company');
  const typeSelect = document.getElementById('settings-plan-type');
  const nameInput = document.getElementById('settings-plan-name');
  const addonsInput = document.getElementById('settings-plan-addons');
  const form = document.getElementById('settings-plan-form');
  if (!planListContainer || !companySelect || !typeSelect || !nameInput || !addonsInput || !form) return;
  // Populate company dropdown
  companySelect.innerHTML = '';
  if (data.companies.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'No Companies';
    companySelect.appendChild(opt);
  } else {
    data.companies.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.name;
      companySelect.appendChild(opt);
    });
  }
  // Render plans list
  const plans = data.settings.policyPlans || [];
  if (plans.length === 0) {
    planListContainer.innerHTML = '<p class="small-note">No policy plans configured yet.</p>';
  } else {
    let html = '<table class="data-table"><thead><tr>' +
      '<th>Company</th><th>Type</th><th>Plan</th><th>Add‑ons</th><th>Actions</th>' +
      '</tr></thead><tbody>';
    plans.forEach(p => {
      const companyName = (data.companies.find(c => c.id === p.companyId) || {}).name || '';
      const addonsStr = (p.addons && p.addons.length) ? p.addons.join(', ') : '';
      html += `<tr data-id="${p.id}">` +
        `<td>${companyName}</td>` +
        `<td>${p.type}</td>` +
        `<td>${p.name}</td>` +
        `<td>${addonsStr}</td>` +
        `<td class="actions"><button class="delete-plan" data-id="${p.id}" title="Delete">${ICONS.trash}</button></td>` +
        '</tr>';
    });
    html += '</tbody></table>';
    planListContainer.innerHTML = html;
    planListContainer.querySelectorAll('.delete-plan').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const planId = btn.getAttribute('data-id');
        if (confirm('Delete this plan?')) {
          data.settings.policyPlans = data.settings.policyPlans.filter(pl => pl.id !== planId);
          saveData();
          renderPlanSettings();
        }
      });
    });
  }
  // Attach form handler once
  if (!form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', e => {
      e.preventDefault();
      const companyId = companySelect.value;
      const type = typeSelect.value;
      const name = nameInput.value.trim();
      const addons = addonsInput.value
        .split(',')
        .map(s => s.trim())
        .filter(s => s);
      if (!companyId || !type || !name) {
        alert('Please select a company, type and enter a plan name.');
        return;
      }
      const planObj = {
        id: generateId(),
        companyId: companyId,
        type: type,
        name: name,
        addons: addons
      };
      data.settings.policyPlans.push(planObj);
      saveData();
      // reset form
      nameInput.value = '';
      addonsInput.value = '';
      renderPlanSettings();
    });
  }
}

/**
 * Render the master data configuration UI in the Settings page.
 * Users can manage policy categories, types (sub-types), plan types and add-ons.
 * This data drives the dynamic fields in the policy form. The hierarchy is:
 *  Category → Type → Plan → Add‑on (add‑ons can be mapped to multiple plans).
 */
function renderMasterData() {
  const master = data.settings.master || { categories: [], types: [], plans: [], addons: [] };
  // Helpers to get names by id
  const getCategoryName = (id) => (master.categories.find(c => c.id === id) || {}).name || '';
  const getTypeName = (id) => (master.types.find(t => t.id === id) || {}).name || '';
  const getPlanName = (id) => (master.plans.find(p => p.id === id) || {}).name || '';
  // Helper to get company names list for a plan's companyIds array
  const getCompanyNames = (ids) => {
    if (!Array.isArray(ids) || ids.length === 0) return '';
    return ids
      .map(cid => {
        const comp = (data.companies || []).find(c => c.id === cid);
        return comp && comp.name ? comp.name : '';
      })
      .filter(Boolean)
      .join(', ');
  };

  /** Render categories list and bind form */
  const catListEl = document.getElementById('category-list');
  const catForm = document.getElementById('category-form');
  if (catListEl) {
    if (master.categories.length === 0) {
      catListEl.innerHTML = '<p class="small-note">No categories defined.</p>';
    } else {
      let html = '<table class="data-table"><thead><tr><th>Name</th><th>Actions</th></tr></thead><tbody>';
      master.categories.forEach(cat => {
        html += `<tr data-id="${cat.id}"><td>${cat.name}</td><td class="actions"><button class="delete-category" data-id="${cat.id}" title="Delete">${ICONS.trash}</button></td></tr>`;
      });
      html += '</tbody></table>';
      catListEl.innerHTML = html;
      // Bind delete buttons
      catListEl.querySelectorAll('.delete-category').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          if (confirm('Delete this category? This will also remove its types, plans and add-ons.')) {
            // remove category and dependent entries
            master.categories = master.categories.filter(c => c.id !== id);
            // remove types, plans, addons referencing this category
            const typeIds = master.types.filter(t => t.categoryId === id).map(t => t.id);
            master.types = master.types.filter(t => t.categoryId !== id);
            const planIds = master.plans.filter(p => typeIds.includes(p.typeId)).map(p => p.id);
            master.plans = master.plans.filter(p => !planIds.includes(p.id));
            master.addons = master.addons.filter(a => a.categoryId !== id);
            saveData();
            renderMasterData();
          }
        });
      });
    }
  }
  if (catForm && !catForm.dataset.bound) {
    catForm.dataset.bound = 'true';
    catForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('category-name').value.trim();
      if (!name) return;
      // check duplicate
      if (master.categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        alert('Category already exists');
        return;
      }
      master.categories.push({ id: generateId(), name });
      saveData();
      document.getElementById('category-name').value = '';
      renderMasterData();
    });
  }

  /** Populate category selects for type, plan and addon forms */
  function populateCategorySelect(selectEl) {
    if (!selectEl) return;
    selectEl.innerHTML = '';
    master.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      selectEl.appendChild(opt);
    });
    if (!selectEl.value && master.categories.length) {
      selectEl.value = master.categories[0].id;
    }
  }
  populateCategorySelect(document.getElementById('type-category-select'));
  populateCategorySelect(document.getElementById('plan-category-select'));
  populateCategorySelect(document.getElementById('addon-category-select'));

  /** Populate company select for plan form */
  function populateCompanySelect(selectEl) {
    if (!selectEl) return;
    selectEl.innerHTML = '';
    // Allow selection of none; but list all companies
    (data.companies || []).forEach(comp => {
      const opt = document.createElement('option');
      opt.value = comp.id;
      opt.textContent = comp.name;
      selectEl.appendChild(opt);
    });
  }
  populateCompanySelect(document.getElementById('plan-company-select'));

  /** Render types list and bind form */
  const typeListEl = document.getElementById('type-list');
  const typeForm = document.getElementById('type-form');
  if (typeListEl) {
    if (master.types.length === 0) {
      typeListEl.innerHTML = '<p class="small-note">No policy types defined.</p>';
    } else {
      let html = '<table class="data-table"><thead><tr><th>Category</th><th>Name</th><th>Actions</th></tr></thead><tbody>';
      master.types.forEach(t => {
        html += `<tr data-id="${t.id}"><td>${getCategoryName(t.categoryId)}</td><td>${t.name}</td><td class="actions"><button class="delete-type" data-id="${t.id}" title="Delete">${ICONS.trash}</button></td></tr>`;
      });
      html += '</tbody></table>';
      typeListEl.innerHTML = html;
      // bind deletes
      typeListEl.querySelectorAll('.delete-type').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          if (confirm('Delete this type? All plans and add-ons under it will also be removed.')) {
            // remove type
            master.types = master.types.filter(t => t.id !== id);
            // remove plans and addons referencing this type
            const planIds = master.plans.filter(p => p.typeId === id).map(p => p.id);
            master.plans = master.plans.filter(p => p.typeId !== id);
            master.addons = master.addons.filter(a => a.typeId !== id);
            saveData();
            renderMasterData();
          }
        });
      });
    }
  }
  if (typeForm && !typeForm.dataset.bound) {
    typeForm.dataset.bound = 'true';
    typeForm.addEventListener('submit', e => {
      e.preventDefault();
      const categoryId = document.getElementById('type-category-select').value;
      const name = document.getElementById('type-name').value.trim();
      if (!categoryId || !name) return;
      // duplicate check within same category
      if (master.types.some(t => t.categoryId === categoryId && t.name.toLowerCase() === name.toLowerCase())) {
        alert('Type already exists in this category');
        return;
      }
      master.types.push({ id: generateId(), categoryId, name });
      saveData();
      document.getElementById('type-name').value = '';
      renderMasterData();
    });
  }

  /** Populate type selects for plan and add-on forms based on selected category */
  function updateTypeSelect(selectEl, categoryId) {
    if (!selectEl) return;
    selectEl.innerHTML = '';
    master.types.filter(t => t.categoryId === categoryId).forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.name;
      selectEl.appendChild(opt);
    });
    if (!selectEl.value && selectEl.options.length) selectEl.value = selectEl.options[0].value;
  }
  const planCatSelect = document.getElementById('plan-category-select');
  const planTypeSelect = document.getElementById('plan-type-select');
  if (planCatSelect && planTypeSelect) {
    // update types when category changes
    planCatSelect.onchange = () => {
      updateTypeSelect(planTypeSelect, planCatSelect.value);
    };
    // initial update
    if (planCatSelect.value) updateTypeSelect(planTypeSelect, planCatSelect.value);
  }
  const addonCatSelect = document.getElementById('addon-category-select');
  const addonTypeSelect = document.getElementById('addon-type-select');
  if (addonCatSelect && addonTypeSelect) {
    addonCatSelect.onchange = () => {
      updateTypeSelect(addonTypeSelect, addonCatSelect.value);
      // update plan checkboxes when type changes
      updateAddonPlanCheckboxes();
    };
    addonTypeSelect.onchange = () => {
      updateAddonPlanCheckboxes();
    };
    // initial update
    if (addonCatSelect.value) updateTypeSelect(addonTypeSelect, addonCatSelect.value);
  }

  /** Render plans list and bind form */
  const planListEl = document.getElementById('plan-list');
  const planForm = document.getElementById('plan-form');
  if (planListEl) {
    if (master.plans.length === 0) {
      planListEl.innerHTML = '<p class="small-note">No plans defined.</p>';
    } else {
      let html = '<table class="data-table"><thead><tr><th>Category</th><th>Type</th><th>Name</th><th>Companies</th><th>Actions</th></tr></thead><tbody>';
      master.plans.forEach(pl => {
        const compNames = getCompanyNames(pl.companyIds || []);
        html += `<tr data-id="${pl.id}"><td>${getCategoryName(master.types.find(t => t.id === pl.typeId)?.categoryId)}</td><td>${getTypeName(pl.typeId)}</td><td>${pl.name}</td><td>${compNames}</td><td class="actions"><button class="delete-plan-master" data-id="${pl.id}" title="Delete">${ICONS.trash}</button></td></tr>`;
      });
      html += '</tbody></table>';
      planListEl.innerHTML = html;
      planListEl.querySelectorAll('.delete-plan-master').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          if (confirm('Delete this plan? All add-ons mapped to it will lose this association.')) {
            // remove plan
            master.plans = master.plans.filter(p => p.id !== id);
            // remove plan id from addons planIds
            master.addons.forEach(a => {
              a.planIds = (a.planIds || []).filter(pid => pid !== id);
            });
            saveData();
            renderMasterData();
          }
        });
      });
    }
  }
  if (planForm && !planForm.dataset.bound) {
    planForm.dataset.bound = 'true';
    planForm.addEventListener('submit', e => {
      e.preventDefault();
      const categoryId = planCatSelect.value;
      const typeId = planTypeSelect.value;
      const name = document.getElementById('plan-name').value.trim();
      const companySelectEl = document.getElementById('plan-company-select');
      // collect selected company ids
      const companyIds = Array.from(companySelectEl && companySelectEl.selectedOptions ? companySelectEl.selectedOptions : []).map(opt => opt.value);
      if (!categoryId || !typeId || !name) return;
      // duplicate check within same type
      if (master.plans.some(p => p.typeId === typeId && p.name.toLowerCase() === name.toLowerCase())) {
        alert('Plan already exists for this type');
        return;
      }
      master.plans.push({ id: generateId(), typeId, name, companyIds: companyIds.slice() });
      saveData();
      document.getElementById('plan-name').value = '';
      // reset company select (clear selection)
      if (companySelectEl) companySelectEl.selectedIndex = -1;
      renderMasterData();
    });
  }

  /** Render add-ons list and bind form */
  const addonListEl = document.getElementById('addon-list');
  const addonForm = document.getElementById('addon-form');
  if (addonListEl) {
    if (master.addons.length === 0) {
      addonListEl.innerHTML = '<p class="small-note">No add‑ons defined.</p>';
    } else {
      let html = '<table class="data-table"><thead><tr><th>Category</th><th>Type</th><th>Name</th><th>Plans</th><th>Actions</th></tr></thead><tbody>';
      master.addons.forEach(ad => {
        const planNames = (ad.planIds || []).map(pid => getPlanName(pid)).join(', ');
        html += `<tr data-id="${ad.id}"><td>${getCategoryName(ad.categoryId)}</td><td>${getTypeName(ad.typeId)}</td><td>${ad.name}</td><td>${planNames}</td><td class="actions"><button class="delete-addon" data-id="${ad.id}" title="Delete">${ICONS.trash}</button></td></tr>`;
      });
      html += '</tbody></table>';
      addonListEl.innerHTML = html;
      addonListEl.querySelectorAll('.delete-addon').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          if (confirm('Delete this add‑on?')) {
            master.addons = master.addons.filter(a => a.id !== id);
            saveData();
            renderMasterData();
          }
        });
      });
    }
  }
  if (addonForm && !addonForm.dataset.bound) {
    addonForm.dataset.bound = 'true';
    addonForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('addon-name').value.trim();
      const categoryId = addonCatSelect.value;
      const typeId = addonTypeSelect.value;
      // gather selected plan ids
      const selectedPlanIds = [];
      document.querySelectorAll('#addon-plan-checkboxes input[type="checkbox"]:checked').forEach(cb => {
        selectedPlanIds.push(cb.value);
      });
      if (!name || !categoryId || !typeId) return;
      if (master.addons.some(a => a.name.toLowerCase() === name.toLowerCase() && a.typeId === typeId && a.categoryId === categoryId)) {
        alert('Add‑on already exists for this type');
        return;
      }
      master.addons.push({ id: generateId(), name, categoryId, typeId, planIds: selectedPlanIds.slice() });
      saveData();
      document.getElementById('addon-name').value = '';
      // uncheck boxes
      document.querySelectorAll('#addon-plan-checkboxes input[type="checkbox"]').forEach(cb => { cb.checked = false; });
      renderMasterData();
    });
  }

  /** Update plan checkboxes for add-on form based on selected category and type */
  function updateAddonPlanCheckboxes() {
    const planContainer = document.getElementById('addon-plan-checkboxes');
    if (!planContainer) return;
    planContainer.innerHTML = '';
    const categoryId = addonCatSelect.value;
    const typeId = addonTypeSelect.value;
    // Only show plans that belong to the selected type
    master.plans.filter(p => master.types.find(t => t.id === p.typeId && t.id === typeId)).forEach(pl => {
      const lbl = document.createElement('label');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = pl.id;
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(' ' + pl.name));
      planContainer.appendChild(lbl);
    });
  }
  // initial plan checkboxes update
  if (addonCatSelect && addonTypeSelect) updateAddonPlanCheckboxes();
}

// ===== Alerts & Renewals =====
// Build and display upcoming policy expiries grouped by due window
function renderAlerts() {
  const container = document.getElementById('alerts-list');
  if (!container) return;
  container.innerHTML = '';
  const now = new Date();
  const upcoming = [];
  const missed = [];
  // Identify policies with end dates within 90 days or already expired
  data.policies.forEach(p => {
    if (!p.endDate) return;
    const end = new Date(p.endDate);
    if (isNaN(end.getTime())) return;
    const diffDays = Math.floor((end - now) / (1000 * 60 * 60 * 24));
    const rec = { policy: p, diff: diffDays };
    if (diffDays < 0) missed.push(rec);
    else if (diffDays <= 90) upcoming.push(rec);
  });
  const groups = {
    'Due in 0–30 days': [],
    'Due in 31–60 days': [],
    'Due in 61–90 days': [],
    'Missed renewals': []
  };
  upcoming.forEach(rec => {
    if (rec.diff <= 30) groups['Due in 0–30 days'].push(rec);
    else if (rec.diff <= 60) groups['Due in 31–60 days'].push(rec);
    else groups['Due in 61–90 days'].push(rec);
  });
  missed.forEach(rec => groups['Missed renewals'].push(rec));
  let hasRecords = false;
  Object.keys(groups).forEach(groupName => {
    const records = groups[groupName];
    if (records.length === 0) return;
    hasRecords = true;
    // Heading for group
    const heading = document.createElement('h3');
    heading.textContent = groupName;
    container.appendChild(heading);
    // Sort by days until expiry ascending
    records.sort((a, b) => a.diff - b.diff);
    records.forEach(rec => {
      const p = rec.policy;
      const diff = rec.diff;
      const diffLabel = diff >= 0 ? `${diff} day${diff === 1 ? '' : 's'}` : `${Math.abs(diff)} day${Math.abs(diff) === 1 ? '' : 's'} overdue`;
      const card = document.createElement('div');
      card.className = 'card renewal-card';
      card.setAttribute('data-id', p.id);
      // Card header
      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';
      const title = document.createElement('span');
      title.className = 'card-title';
      title.textContent = `Policy ${p.policyNumber || ''}`;
      const badge = document.createElement('span');
      badge.className = 'status-badge';
      badge.textContent = diffLabel;
      cardHeader.appendChild(title);
      cardHeader.appendChild(badge);
      card.appendChild(cardHeader);
      // Card body
      const body = document.createElement('div');
      body.className = 'card-body';
      const customer = data.customers.find(c => c.id === p.proposer) || {};
      const endDateStr = formatDate(p.endDate);
      const premium = p.premium ? parseFloat(p.premium) : null;
      const premiumStr = premium ? premium.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) : '';
      body.innerHTML = `
        <p>Customer: ${customer.fullName || ''}</p>
        <p>Expiry Date: ${endDateStr}</p>
        ${premiumStr ? `<p>Last Premium: ${premiumStr}</p>` : ''}
      `;
      card.appendChild(body);
      // Card actions
      const actions = document.createElement('div');
      actions.className = 'card-actions';
      const viewBtn = document.createElement('button');
      viewBtn.className = 'view-policy';
      viewBtn.setAttribute('data-id', p.id);
      viewBtn.title = 'View Policy';
      viewBtn.innerHTML = ICONS.eye;
      const quoteBtn = document.createElement('button');
      quoteBtn.className = 'renew-create-quote';
      quoteBtn.setAttribute('data-id', p.id);
      quoteBtn.title = 'Create Renewal Quote';
      quoteBtn.innerHTML = ICONS.quote;
      const msgBtn = document.createElement('button');
      msgBtn.className = 'renew-copy-msg';
      msgBtn.setAttribute('data-id', p.id);
      msgBtn.title = 'Copy Message';
      msgBtn.innerHTML = ICONS.clipboard;
      actions.appendChild(viewBtn);
      actions.appendChild(quoteBtn);
      actions.appendChild(msgBtn);
      card.appendChild(actions);
      container.appendChild(card);
    });
  });
  if (!hasRecords) {
    container.innerHTML = '<p>No upcoming renewals within the next 90 days.</p>';
  }
  // Event handlers for action buttons
  container.querySelectorAll('.view-policy').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openPolicyDetail(id);
    });
  });
  container.querySelectorAll('.renew-create-quote').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const pol = data.policies.find(pp => pp.id === id);
      if (!pol) return;
      openQuoteForm();
      setTimeout(() => {
        const form = document.getElementById('quote-form');
        if (!form) return;
        // repopulate selects (ensures up-to-date options)
        populateCustomerSelect(form.elements['quote-customer']);
        populateBrokerSelect(form.elements['quote-broker']);
        populateCompanySelect(form.elements['quote-company']);
        form.elements['quote-customer'].value = pol.proposer || '';
        form.elements['quote-broker'].value = pol.broker || '';
        form.elements['quote-company'].value = pol.company || '';
        form.elements['quote-type'].value = pol.policyType || '';
        updateQuoteTypeSpecificFields(pol.policyType || '');
      }, 100);
    });
  });
  container.querySelectorAll('.renew-copy-msg').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const pol = data.policies.find(pp => pp.id === id);
      if (!pol) return;
      const customer = data.customers.find(c => c.id === pol.proposer) || {};
      const name = customer.fullName || 'Customer';
      const expiry = formatDate(pol.endDate);
      const msg = `Hi ${name}, your policy ${pol.policyNumber || ''} is expiring on ${expiry}. Please get in touch to renew.`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).then(() => {
          alert('Message copied to clipboard');
        }, () => {
          prompt('Copy this message:', msg);
        });
      } else {
        prompt('Copy this message:', msg);
      }
    });
  });
  }

// ===== Alerts & Renewals wrapper =====
// Delegate to the renewal renderer. See renderRenewals() for details.
function renderAlerts() {
  renderRenewals();
}

// ===== Business Timeline =====
// Aggregate timeline entries from all entities into a single chronological feed.
// Each event displays its description, the related entity type and identifier,
// and a relative timestamp (e.g. '2 days ago'). Clicking an event will open
// the appropriate detail view for that entity.
function renderBusinessTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;
  container.innerHTML = '';
  // Collect all timeline events with metadata
  const events = [];
  // Helper to push events from an entity array
  const pushEvents = (list, type, getLabel) => {
    if (!Array.isArray(list)) return;
    list.forEach(item => {
      const timeline = item.timeline || [];
      timeline.forEach(entry => {
        events.push({
          timestamp: entry.timestamp,
          action: entry.action,
          entity: type,
          id: item.id,
          label: getLabel(item)
        });
      });
    });
  };
  // Collect from each domain
  pushEvents(data.customers, 'customer', c => c.fullName || 'Customer');
  pushEvents(data.policies, 'policy', p => p.policyNumber || 'Policy');
  pushEvents(data.quotes, 'quote', q => q.policyType || 'Quote');
  pushEvents(data.payments, 'payment', pay => pay.amount ? `₹${parseFloat(pay.amount).toLocaleString('en-IN')}` : 'Payment');
  pushEvents(data.commissions, 'commission', c => c.policyId || 'Commission');
  pushEvents(data.documents, 'document', doc => doc.name || 'Document');
  pushEvents(data.brokers, 'broker', b => b.name || 'Broker');
  pushEvents(data.companies, 'company', c => c.name || 'Company');
  pushEvents(data.vehicles, 'vehicle', v => v.number || 'Vehicle');
  // Sort events by timestamp descending
  events.sort((a, b) => {
    const da = new Date(a.timestamp);
    const db = new Date(b.timestamp);
    return db - da;
  });
  if (events.length === 0) {
    container.innerHTML = '<p>No business activity recorded yet.</p>';
    return;
  }
  const ul = document.createElement('ul');
  ul.className = 'timeline global-timeline';
  events.forEach(ev => {
    const li = document.createElement('li');
    li.className = 'timeline-item';
    // Determine icon based on entity
    let iconHtml = '';
    switch (ev.entity) {
      case 'customer': iconHtml = ICONS.users; break;
      case 'policy': iconHtml = ICONS['file-text']; break;
      case 'quote': iconHtml = ICONS.quote; break;
      case 'payment': iconHtml = ICONS['credit-card']; break;
      case 'commission': iconHtml = ICONS.award; break;
      case 'document': iconHtml = ICONS.folder; break;
      case 'vehicle': iconHtml = ICONS.car; break;
      case 'broker': iconHtml = ICONS.handshake; break;
      case 'company': iconHtml = ICONS.building; break;
      default: iconHtml = ICONS.activity || ICONS.timeline; break;
    }
    li.innerHTML = `
      <div class="timeline-icon">${iconHtml}</div>
      <div class="timeline-content">
        <div class="timeline-action">${ev.action}</div>
        <div class="timeline-meta">${ev.entity.charAt(0).toUpperCase() + ev.entity.slice(1)}: ${ev.label}</div>
        <div class="timeline-time">${formatRelative(ev.timestamp)}</div>
      </div>
    `;
    // Click handler opens appropriate detail
    li.addEventListener('click', () => {
      switch (ev.entity) {
        case 'customer': openCustomerDetail(ev.id); break;
        case 'policy': openPolicyDetail(ev.id); break;
        case 'quote': openQuoteDetail(ev.id); break;
        case 'payment': openPaymentDetail(ev.id); break;
        case 'commission': openCommissionDetail(ev.id); break;
        case 'document': previewDocument(ev.id); break;
        case 'vehicle': openVehicleDetail(ev.id); break;
        case 'broker': openBrokerDetail(ev.id); break;
        case 'company': openCompanyDetail(ev.id); break;
      }
    });
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

  // Update all selects when data changes
function updateSelectOptions() {
  // update selects used in forms (policy proposer etc.) when customers list changes
  // This will be handled when opening forms by populating selects on demand
  // update commissions and payments lists
}

// Commission management
function openCommissionForm(id) {
  const modal = document.getElementById('commission-form-modal');
  const title = document.getElementById('commission-form-title');
  const form = document.getElementById('commission-form');
  form.reset();
  // populate policy select
  const policySelect = form.elements['commission-policy'];
  policySelect.innerHTML = '<option value="">Select Policy</option>';
  data.policies.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.policyNumber;
    policySelect.appendChild(opt);
  });
  // update expected commission when policy changes
  function updateExpected() {
    const polId = policySelect.value;
    const pol = data.policies.find(p => p.id === polId);
    if (pol) {
      form.elements['commission-expected'].value = pol.expectedCommission || 0;
      form.elements['commission-policy'].value = pol.id;
    } else {
      form.elements['commission-expected'].value = '';
    }
  }
  policySelect.addEventListener('change', updateExpected);
  policySelect.addEventListener('change', updateCommissionFields);
  // call once to initialise points and accounts
  updateCommissionFields();

  // populate cashback customer select
  const cashbackCustomerSelect = form.elements['commission-cashback-customer'];
  if (cashbackCustomerSelect) {
    cashbackCustomerSelect.innerHTML = '<option value="">Select Customer</option>';
    data.customers.forEach(cust => {
      const opt = document.createElement('option');
      opt.value = cust.id;
      opt.textContent = cust.fullName || '';
      cashbackCustomerSelect.appendChild(opt);
    });
  }
  // dynamic update of points field and account select based on broker
  function updateCommissionFields() {
    const polId = policySelect.value;
    const pol = data.policies.find(p => p.id === polId);
    const brokerId = pol ? pol.broker : '';
    const broker = brokerId ? data.brokers.find(b => b.id === brokerId) : null;
    // Show/hide points field based on broker commission mode
    const pointsInput = form.elements['commission-points'];
    // Show/hide received commission field based on broker commission mode
    const receivedInput = form.elements['commission-received'];
    const receivedLabel = receivedInput ? receivedInput.parentElement : null;
    if (pointsInput) {
      const labelEl = pointsInput.parentElement;
      if (broker && broker.commissionMode === 'points') {
        // show points field
        if (labelEl) labelEl.style.display = '';
        // hide received commission input; for points mode we capture points instead of rupee amount
        if (receivedLabel) receivedLabel.style.display = 'none';
        if (receivedInput) receivedInput.value = '';
      } else {
        if (labelEl) labelEl.style.display = 'none';
        pointsInput.value = '';
        // show received commission input for money mode
        if (receivedLabel) receivedLabel.style.display = '';
      }
    }
    // populate account select with broker-linked accounts or global
    const accountSelect = form.elements['commission-account'];
    if (accountSelect) {
      accountSelect.innerHTML = '<option value="">Select Account/Wallet</option>';
      // Use a set to avoid duplicate accounts across broker‑specific and global lists
      const seenAccs = new Set();
      function appendAccounts(bankList, upiList, walletList) {
        (bankList || []).forEach(ac => {
          if (ac && !seenAccs.has(ac)) {
            seenAccs.add(ac);
            const opt = document.createElement('option');
            opt.value = ac;
            opt.textContent = `Bank: ${ac}`;
            accountSelect.appendChild(opt);
          }
        });
        (upiList || []).forEach(upi => {
          if (upi && !seenAccs.has(upi)) {
            seenAccs.add(upi);
            const opt = document.createElement('option');
            opt.value = upi;
            opt.textContent = `UPI: ${upi}`;
            accountSelect.appendChild(opt);
          }
        });
        (walletList || []).forEach(wal => {
          if (wal && !seenAccs.has(wal)) {
            seenAccs.add(wal);
            const opt = document.createElement('option');
            opt.value = wal;
            opt.textContent = `Wallet: ${wal}`;
            accountSelect.appendChild(opt);
          }
        });
      }
      // Always include broker accounts first if a broker exists
      if (broker) {
        appendAccounts(broker.bankIds, broker.upiIds, broker.walletIds);
      }
      // Also include global accounts so that the agent can record manual deposits or shared accounts
      appendAccounts(data.settings.bankAccounts, data.settings.upiIds, data.settings.wallets);
    }
  }

  // helper to update safe giveback range note and slider configuration
  function updateCashbackRange() {
    const expectedVal = parseFloat(form.elements['commission-expected'].value) || 0;
    const minPerc = data.settings.safeGivebackMin || 0;
    const maxPerc = data.settings.safeGivebackMax || 0;
    const minAmt = expectedVal * minPerc;
    const maxAmt = expectedVal * maxPerc;
    const noteEl = document.getElementById('cashback-range-note');
    if (noteEl) {
      if (expectedVal > 0) {
        noteEl.textContent = `Safe give‑back range: ₹${minAmt.toFixed(2)} – ₹${maxAmt.toFixed(2)}`;
      } else {
        noteEl.textContent = '';
      }
    }
    // update slider max to expected commission and adjust its value
    const slider = document.getElementById('cashback-slider');
    if (slider) {
      slider.max = expectedVal || 0;
      // if current numeric value > max, clamp slider value to max
      const cashVal = parseFloat(form.elements['commission-cashback'].value) || 0;
      slider.value = cashVal;
    }
  }
  // recalc net when financial fields change
  function recalcNet() {
    const receivedVal = parseFloat(form.elements['commission-received'].value) || 0;
    const cashbackVal = parseFloat(form.elements['commission-cashback'].value) || 0;
    const chargesVal = parseFloat(form.elements['commission-charges'].value) || 0;
    const netVal = receivedVal - cashbackVal - chargesVal;
    if (!isNaN(netVal)) form.elements['commission-net'].value = netVal.toFixed(2);
  }
  ['commission-received','commission-cashback','commission-charges'].forEach(fld => {
    const el = form.elements[fld];
    if (el) {
      el.addEventListener('input', recalcNet);
    }
  });

  // sync slider and cashback numeric input
  const cashbackInput = form.elements['commission-cashback'];
  const slider = document.getElementById('cashback-slider');
  if (slider && cashbackInput) {
    // when slider moves, update numeric cashback
    slider.addEventListener('input', () => {
      cashbackInput.value = slider.value;
      recalcNet();
    });
    // when numeric input changes, update slider (if within max)
    cashbackInput.addEventListener('input', () => {
      const val = parseFloat(cashbackInput.value) || 0;
      slider.value = val;
    });
  }

  // update range and net when expected changes
  policySelect.addEventListener('change', () => {
    updateExpected();
    updateCashbackRange();
    recalcNet();
  });
  // initial range update
  updateCashbackRange();
  // Set default date. If editing, use stored date; otherwise today
  const dateInput = form.elements['commission-date'];
  if (dateInput) {
    if (id) {
      const rec = data.commissions.find(c => c.id === id);
      if (rec && rec.date) {
        dateInput.value = rec.date;
      } else {
        dateInput.value = new Date().toISOString().slice(0, 10);
      }
    } else {
      dateInput.value = new Date().toISOString().slice(0, 10);
    }
  }
  if (id) {
    const rec = data.commissions.find(c => c.id === id);
    if (!rec) return;
    title.textContent = 'Edit Commission';
    form.elements['commission-id'].value = rec.id;
    form.elements['commission-policy'].value = rec.policyId;
    updateExpected();
    // update points and account fields based on broker for this policy
    updateCommissionFields();
    // populate values
    form.elements['commission-received'].value = rec.received || '';
    form.elements['commission-cashback'].value = rec.cashback || '';
    if (form.elements['commission-cashback-customer']) {
      form.elements['commission-cashback-customer'].value = rec.cashbackCustomerId || '';
    }
    if (form.elements['commission-cashback-mode']) {
      form.elements['commission-cashback-mode'].value = rec.cashbackMode || '';
    }
    form.elements['commission-points'].value = rec.points || '';
    form.elements['commission-charges'].value = rec.charges || '';
    form.elements['commission-net'].value = rec.net || '';
    if (form.elements['commission-account']) {
      form.elements['commission-account'].value = rec.account || '';
    }
    if (form.elements['commission-override-reason']) {
      form.elements['commission-override-reason'].value = rec.overrideReason || '';
    }
    // update range note
    updateCashbackRange();
    // recalc net to display
    recalcNet();
  } else {
    title.textContent = 'Record Commission';
    // ensure net is zero on new form
    form.elements['commission-net'].value = '';
  }
  modal.classList.remove('hidden');
  // Focus on the first input for accessibility
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleCommissionForm() {
  const form = document.getElementById('commission-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['commission-id'].value;
    const policyId = form.elements['commission-policy'].value;
    const expected = parseFloat(form.elements['commission-expected'].value) || 0;
    const received = parseFloat(form.elements['commission-received'].value) || 0;
    const cashback = parseFloat(form.elements['commission-cashback'].value) || 0;
    const cashbackCustomerId = form.elements['commission-cashback-customer'] ? form.elements['commission-cashback-customer'].value : '';
    const cashbackMode = form.elements['commission-cashback-mode'] ? form.elements['commission-cashback-mode'].value : '';
    const points = parseFloat(form.elements['commission-points'].value) || 0;
    const charges = parseFloat(form.elements['commission-charges'].value) || 0;
    // compute net automatically: received - cashback - charges
    const net = received - cashback - charges;
    const account = form.elements['commission-account'] ? form.elements['commission-account'].value : '';
    const overrideReason = form.elements['commission-override-reason'] ? form.elements['commission-override-reason'].value : '';
    const dateVal = form.elements['commission-date'] ? form.elements['commission-date'].value : '';
    // find policy for type and value
    const pol = data.policies.find(p => p.id === policyId);
    const type = pol ? pol.commissionType : '';
    const value = pol ? pol.commissionValue : '';
    // check safe give-back range
    const maxRange = expected * (data.settings.safeGivebackMax || 0);
    if (cashback > maxRange && !overrideReason) {
      // if cashback exceeds maximum and no override reason, alert user but still allow if they confirm
      if (!confirm('Cashback exceeds the safe maximum range. Do you want to proceed without override reason?')) {
        return;
      }
    }
    if (id) {
      const rec = data.commissions.find(c => c.id === id);
      Object.assign(rec, { policyId, expected, received, cashback, cashbackCustomerId, cashbackMode, points, charges, net, account, overrideReason, date: dateVal });
      addTimeline(rec, 'Updated commission record');
    } else {
      const newRec = { id: generateId(), policyId, type, value, expected, received, cashback, cashbackCustomerId, cashbackMode, points, charges, net, account, overrideReason, date: dateVal, redemptions: [], timeline: [] };
      addTimeline(newRec, 'Recorded commission');
      data.commissions.push(newRec);
    }
    saveData();
    renderCommissionsList();
    document.getElementById('commission-form-modal').classList.add('hidden');
  });
  document.getElementById('close-commission-form').addEventListener('click', () => {
    document.getElementById('commission-form-modal').classList.add('hidden');
  });
}

function openCommissionDetail(id) {
  const rec = data.commissions.find(c => c.id === id);
  if (!rec) return;
  const modal = document.getElementById('commission-detail-modal');
  const title = document.getElementById('commission-detail-title');
  const content = document.getElementById('commission-detail-content');
  const pol = data.policies.find(p => p.id === rec.policyId) || {};
  title.textContent = `Commission for Policy ${pol.policyNumber || ''}`;
  let html = '<h4>Details</h4><table class="detail-table">';
  function row(label, value) { return `<tr><th>${label}</th><td>${value || ''}</td></tr>`; }
  html += row('Policy', pol.policyNumber || '');
  html += row('Commission Type', rec.type);
  html += row('Commission Value', rec.value);
  html += row('Expected Commission', `₹${rec.expected}`);
  html += row('Received Commission', `₹${rec.received || 0}`);
  html += row('Cashback', `₹${rec.cashback || 0}`);
  if (rec.cashbackCustomerId) {
    const cust = data.customers.find(c => c.id === rec.cashbackCustomerId) || {};
    html += row('Cashback Customer', cust.fullName || '');
  }
  if (rec.cashbackMode) {
    html += row('Cashback Mode', rec.cashbackMode);
  }
  html += row('Redeemed Points', rec.points || 0);
  html += row('Charges', `₹${rec.charges || 0}`);
  html += row('Net Commission', `₹${rec.net || 0}`);
  html += row('Account', rec.account || '');
  if (rec.overrideReason) {
    html += row('Override Reason', rec.overrideReason);
  }
  html += '</table>';
  // redemption history
  if (Array.isArray(rec.redemptions) && rec.redemptions.length > 0) {
    html += '<h4>Redemptions</h4><ul>';
    rec.redemptions.forEach(r => {
      const when = formatRelative(r.date);
      html += `<li><span class="time">${when}</span> <span class="desc">Redeemed ₹${r.amount.toFixed ? r.amount.toFixed(2) : r.amount} (Charges ₹${r.charges.toFixed ? r.charges.toFixed(2) : r.charges}) to ${r.account || ''}</span></li>`;
    });
    html += '</ul>';
  }
  if (rec.timeline && rec.timeline.length > 0) {
    html += '<h4>Timeline</h4><ul class="timeline">';
    rec.timeline.forEach(entry => {
      html += `<li><span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span></li>`;
    });
    html += '</ul>';
  }
  content.innerHTML = html;
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-commission-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

function deleteCommission(id) {
  data.commissions = data.commissions.filter(c => c.id !== id);
  saveData();
  renderCommissionsList();
}

// Global search functionality
function setupGlobalSearch() {
  const searchInput = document.getElementById('global-search');
  const overlay = document.getElementById('search-overlay');
  if (!searchInput || !overlay) return;
  // hide overlay when clicking outside
  document.addEventListener('click', (e) => {
    if (!overlay.contains(e.target) && e.target !== searchInput) {
      overlay.classList.add('hidden');
    }
  });
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    if (!term) {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
      return;
    }
    // group results by entity
    const groups = { customers: [], policies: [], quotes: [], vehicles: [], documents: [] };
    // search customers
    data.customers.forEach(c => {
      if (c.fullName && c.fullName.toLowerCase().includes(term)) {
        groups.customers.push({ label: c.fullName, id: c.id });
      }
    });
    // search policies
    data.policies.forEach(p => {
      if (p.policyNumber && p.policyNumber.toLowerCase().includes(term)) {
        groups.policies.push({ label: p.policyNumber, id: p.id });
      }
    });
    // search quotes
    data.quotes.forEach(q => {
      const cust = data.customers.find(c => c.id === q.customer) || {};
      const label = `${q.policyType} for ${cust.fullName || ''}`;
      if (label.toLowerCase().includes(term)) {
        groups.quotes.push({ label, id: q.id });
      }
    });
    // search vehicles
    data.vehicles.forEach(v => {
      if (v.vehicleNumber && v.vehicleNumber.toLowerCase().includes(term)) {
        groups.vehicles.push({ label: v.vehicleNumber, id: v.id });
      }
    });
    // search documents by name
    data.documents.forEach(d => {
      if (d.name && d.name.toLowerCase().includes(term)) {
        groups.documents.push({ label: d.name, id: d.id });
      }
    });
    overlay.innerHTML = '';
    let any = false;
    Object.keys(groups).forEach(key => {
      const items = groups[key];
      if (items.length > 0) {
        any = true;
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('search-results-group');
        // group name
        let title = '';
        if (key === 'customers') title = 'Customers';
        else if (key === 'policies') title = 'Policies';
        else if (key === 'quotes') title = 'Quotes';
        else if (key === 'vehicles') title = 'Vehicles';
        else if (key === 'documents') title = 'Documents';
        groupDiv.innerHTML = `<h4>${title}</h4>`;
        items.slice(0, 10).forEach(item => {
          const a = document.createElement('a');
          a.href = '#';
          a.classList.add('search-result-item');
          a.textContent = item.label;
          a.dataset.entity = key.slice(0, -1); // e.g., customers -> customer
          a.dataset.id = item.id;
          a.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('hidden');
            searchInput.value = '';
            const entity = a.dataset.entity;
            const id = a.dataset.id;
            if (entity === 'customer') openCustomerDetail(id);
            else if (entity === 'policy') openPolicyDetail(id);
            else if (entity === 'quote') openQuoteDetail(id);
            else if (entity === 'vehicle') openVehicleDetail(id);
            else if (entity === 'document') previewDocument(id);
          });
          groupDiv.appendChild(a);
        });
        overlay.appendChild(groupDiv);
      }
    });
    if (!any) {
      const noDiv = document.createElement('div');
      noDiv.textContent = 'No results found';
      noDiv.style.color = '#ccc';
      overlay.appendChild(noDiv);
    }
    overlay.classList.remove('hidden');
  });
}

/**
 * Enable keyboard shortcuts to improve accessibility and productivity.
 * - ESC closes any open modals, drawers, search overlay or quick‑add menu.
 * - Enter submits focused forms (handled by native form submission).
 * Focus automatically moves to the first interactive element when a modal opens via openForm functions.
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // ESC closes search overlay, quick add menu and any visible modal
    if (e.key === 'Escape' || e.key === 'Esc') {
      const overlay = document.getElementById('search-overlay');
      if (overlay && !overlay.classList.contains('hidden')) {
        overlay.classList.add('hidden');
      }
      const quickMenu = document.getElementById('quick-add-menu');
      if (quickMenu && !quickMenu.classList.contains('hidden')) {
        quickMenu.classList.add('hidden');
      }
      // close any open modal/drawer
      document.querySelectorAll('.modal').forEach(modal => {
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
      });
    }
  });
}

// Setup modal interactions: clicking outside of the modal content closes the modal.
function setupModalInteractions() {
  document.querySelectorAll('.modal').forEach(modal => {
    if (!modal.dataset.bound) {
      modal.dataset.bound = 'true';
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    }
  });
}

// Setup quick add menu functionality
function setupQuickAddMenu() {
  const btn = document.getElementById('quick-add-btn');
  const menu = document.getElementById('quick-add-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });
  // hide when clicking outside
  document.addEventListener('click', (e) => {
    if (menu.contains(e.target) || e.target === btn) return;
    menu.classList.add('hidden');
  });
  menu.querySelectorAll('button[data-action]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const action = item.getAttribute('data-action');
      menu.classList.add('hidden');
      if (action === 'customer') {
        openCustomerForm();
      } else if (action === 'policy') {
        openPolicyForm();
      } else if (action === 'quote') {
        openQuoteForm();
      } else if (action === 'payment') {
        openPaymentForm();
      } else if (action === 'document') {
        openDocumentForm();
      } else if (action === 'vehicle') {
        openVehicleForm();
      }
    });
  });
}

// Redeem points across multiple commission records
function openRedeemPointsModal() {
  const modal = document.getElementById('redeem-points-modal');
  const listDiv = document.getElementById('redeem-points-list');
  const accountSelect = document.getElementById('redeem-account');
  // clear previous
  listDiv.innerHTML = '';
  // populate list with commission records having points > 0
  let any = false;
  data.commissions.forEach(rec => {
    if (rec.points && rec.points > 0) {
      any = true;
      const policy = data.policies.find(p => p.id === rec.policyId) || {};
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = rec.id;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` Policy ${policy.policyNumber || ''} – ${rec.points} points`));
      listDiv.appendChild(label);
      listDiv.appendChild(document.createElement('br'));
    }
  });
  if (!any) {
    listDiv.innerHTML = '<p>No commission records have points available for redemption.</p>';
  }
  // populate account select from settings
  if (accountSelect) {
    accountSelect.innerHTML = '<option value="">Select Account/Wallet</option>';
    (data.settings.bankAccounts || []).forEach(ac => {
      const opt = document.createElement('option');
      opt.value = ac;
      opt.textContent = `Bank: ${ac}`;
      accountSelect.appendChild(opt);
    });
    (data.settings.upiIds || []).forEach(upi => {
      const opt = document.createElement('option');
      opt.value = upi;
      opt.textContent = `UPI: ${upi}`;
      accountSelect.appendChild(opt);
    });
    (data.settings.wallets || []).forEach(wal => {
      const opt = document.createElement('option');
      opt.value = wal;
      opt.textContent = `Wallet: ${wal}`;
      accountSelect.appendChild(opt);
    });
  }
  // reset form values
  document.getElementById('redeem-total-amount').value = '';
  document.getElementById('redeem-total-charges').value = 0;
  document.getElementById('redeem-date').value = '';
  // Compute a suggested total amount based on points and broker conversion rates. If records belong to
  // brokers with point modes, multiply points by the broker's pointRate to estimate the total rupee value.
  // This value is shown as a default in the total amount field but can be edited by the user.
  let suggestedTotal = 0;
  data.commissions.forEach(rec => {
    if (rec.points && rec.points > 0) {
      // Determine broker and conversion rate
      const policy = data.policies.find(p => p.id === rec.policyId);
      const brokerId = policy ? policy.broker : '';
      const broker = brokerId ? data.brokers.find(b => b.id === brokerId) : null;
      const rate = broker && broker.pointRate ? parseFloat(broker.pointRate) : 1;
      suggestedTotal += rec.points * rate;
    }
  });
  if (suggestedTotal > 0) {
    document.getElementById('redeem-total-amount').value = suggestedTotal.toFixed(2);
  }
  // show modal
  modal.classList.remove('hidden');
  // close handler
  document.getElementById('close-redeem-points').addEventListener('click', () => {
    modal.classList.add('hidden');
  }, { once: true });
}

function handleRedeemPointsForm() {
  const form = document.getElementById('redeem-points-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const modal = document.getElementById('redeem-points-modal');
    // get selected commission IDs
    const selectedIds = Array.from(document.querySelectorAll('#redeem-points-list input[type=checkbox]:checked')).map(ch => ch.value);
    if (selectedIds.length === 0) {
      alert('Please select at least one commission record to redeem.');
      return;
    }
    const totalAmount = parseFloat(document.getElementById('redeem-total-amount').value) || 0;
    const totalCharges = parseFloat(document.getElementById('redeem-total-charges').value) || 0;
    const account = document.getElementById('redeem-account').value || '';
    const date = document.getElementById('redeem-date').value || new Date().toISOString();
    // compute total points
    let sumPoints = 0;
    selectedIds.forEach(id => {
      const rec = data.commissions.find(c => c.id === id);
      if (rec && rec.points) sumPoints += rec.points;
    });
    if (sumPoints <= 0) {
      alert('Selected records do not have points to redeem.');
      return;
    }
    // for each selected record allocate amount and charges proportionally
    selectedIds.forEach(id => {
      const rec = data.commissions.find(c => c.id === id);
      if (!rec || !rec.points || rec.points <= 0) return;
      const ratio = rec.points / sumPoints;
      const amountPortion = totalAmount * ratio;
      const chargesPortion = totalCharges * ratio;
      // update commission record
      rec.received = (rec.received || 0) + amountPortion;
      rec.charges = (rec.charges || 0) + chargesPortion;
      // net = received - cashback - charges
      rec.net = rec.received - (rec.cashback || 0) - rec.charges;
      rec.account = account;
      // reduce points to zero (fully redeemed)
      rec.points = 0;
      // record redemption entry
      if (!Array.isArray(rec.redemptions)) rec.redemptions = [];
      rec.redemptions.push({ date: date, amount: amountPortion, charges: chargesPortion, account: account });
      addTimeline(rec, 'Redeemed points');
    });
    saveData();
    renderCommissionsList();
    modal.classList.add('hidden');
  });
}

// Brokers
function renderBrokersList() {
  const container = document.getElementById('brokers-list');
  if (!container) return;
  const term = (pageSearchTerms.brokers || '').toLowerCase();
  const list = (!term
    ? data.brokers.slice()
    : data.brokers.filter(b => {
        const name = (b.name || '').toLowerCase();
        const remarks = (b.remarks || '').toLowerCase();
        return name.includes(term) || remarks.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.handshake}</div><p>No brokers found.</p><p class="small-note">Add a broker via the + button or quick add menu.</p></div>`;
    return;
  }
  // Build a modern table view with logo
  // Build table with a combined logo/name column. We remove the dedicated Logo column
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="name">Name</th>' +
    '<th>Remarks</th>' +
    '<th>Actions</th>' +
    '</tr></thead><tbody>';
  list.forEach(b => {
    // Use a small logo if available; otherwise use the handshake icon. Place logo next to the broker name within the same cell.
    let logo = '';
    if (b.logo) {
      logo = `<img src="${b.logo}" alt="Logo" class="list-logo-inline">`;
    } else {
      // Insert the handshake icon and wrap it in a span so we can style it via CSS
      logo = `<span class="inline-icon">${ICONS.handshake}</span>`;
    }
    html += `<tr data-id="${b.id}">
      <td class="logo-name-cell">${logo}<span class="list-name">${b.name}</span></td>
      <td>${b.remarks || ''}</td>
      <td class="actions">
        <button class="view-broker" data-id="${b.id}" title="View">${ICONS.eye}</button>
        <button class="edit-broker" data-id="${b.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-broker" data-id="${b.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // Attach sorting by name
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('brokers', tableElem, renderBrokersList);
  // attach actions
  container.querySelectorAll('.view-broker').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openBrokerDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-broker').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openBrokerForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-broker').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this broker?')) deleteBroker(btn.getAttribute('data-id'));
    });
  });
}

function openBrokerForm(id) {
  const modal = document.getElementById('broker-form-modal');
  const title = document.getElementById('broker-form-title');
  const form = document.getElementById('broker-form');
  form.reset();
  form.elements['broker-id'].value = '';
  // Populate select options for companies and payment details using current data
  function populateBrokerFormOptions() {
    const companySelect = form.elements['broker-companies'];
    if (companySelect) {
      companySelect.innerHTML = '';
      data.companies.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        companySelect.appendChild(opt);
      });
    }
    const bankSelect = form.elements['broker-banks'];
    if (bankSelect) {
      bankSelect.innerHTML = '';
      (data.settings.bankAccounts || []).forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac;
        opt.textContent = ac;
        bankSelect.appendChild(opt);
      });
    }
    const upiSelect = form.elements['broker-upis'];
    if (upiSelect) {
      upiSelect.innerHTML = '';
      (data.settings.upiIds || []).forEach(upi => {
        const opt = document.createElement('option');
        opt.value = upi;
        opt.textContent = upi;
        upiSelect.appendChild(opt);
      });
    }
    const walletSelect = form.elements['broker-wallets'];
    if (walletSelect) {
      walletSelect.innerHTML = '';
      (data.settings.wallets || []).forEach(wal => {
        const opt = document.createElement('option');
        opt.value = wal;
        opt.textContent = wal;
        walletSelect.appendChild(opt);
      });
    }
  }
  populateBrokerFormOptions();
  if (id) {
    const broker = data.brokers.find(b => b.id === id);
    if (!broker) return;
    title.textContent = 'Edit Broker';
    form.elements['broker-id'].value = broker.id;
    form.elements['broker-name'].value = broker.name;
    if (form.elements['broker-owner']) form.elements['broker-owner'].value = broker.owner || '';
    form.elements['broker-remarks'].value = broker.remarks || '';
    // Set selected companies
    if (form.elements['broker-companies'] && broker.companyIds) {
      Array.from(form.elements['broker-companies'].options).forEach(opt => {
        opt.selected = broker.companyIds.includes(opt.value);
      });
    }
    // Set selected banks, upis, wallets
    if (form.elements['broker-banks'] && broker.bankIds) {
      Array.from(form.elements['broker-banks'].options).forEach(opt => {
        opt.selected = broker.bankIds.includes(opt.value);
      });
    }
    if (form.elements['broker-upis'] && broker.upiIds) {
      Array.from(form.elements['broker-upis'].options).forEach(opt => {
        opt.selected = broker.upiIds.includes(opt.value);
      });
    }
    if (form.elements['broker-wallets'] && broker.walletIds) {
      Array.from(form.elements['broker-wallets'].options).forEach(opt => {
        opt.selected = broker.walletIds.includes(opt.value);
      });
    }
    if (form.elements['broker-commission-mode']) {
      form.elements['broker-commission-mode'].value = broker.commissionMode || 'money';
    }
    if (form.elements['broker-point-rate']) {
      form.elements['broker-point-rate'].value = broker.pointRate || '';
    }
    if (form.elements['broker-pay-cycle']) {
      form.elements['broker-pay-cycle'].value = broker.payCycle || 'adhoc';
    }
  } else {
    title.textContent = 'Add Broker';
  }
  // Show/hide point rate input based on commission mode
  const modeSelect = form.elements['broker-commission-mode'];
  const rateContainer = document.getElementById('broker-point-rate-container');
  function updatePointRateVisibility() {
    if (!rateContainer) return;
    if (modeSelect && modeSelect.value === 'points') {
      rateContainer.style.display = '';
    } else {
      rateContainer.style.display = 'none';
    }
  }
  if (modeSelect) {
    modeSelect.removeEventListener('change', updatePointRateVisibility);
    modeSelect.addEventListener('change', updatePointRateVisibility);
  }
  updatePointRateVisibility();
  modal.classList.remove('hidden');
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleBrokerForm() {
  const form = document.getElementById('broker-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['broker-id'].value;
    const name = form.elements['broker-name'].value.trim();
    const owner = form.elements['broker-owner'] ? form.elements['broker-owner'].value.trim() : '';
    const remarks = form.elements['broker-remarks'].value.trim();
    // gather selected companies, banks, upi and wallet IDs
    const companyIds = form.elements['broker-companies'] ? Array.from(form.elements['broker-companies'].selectedOptions).map(opt => opt.value) : [];
    const bankIds = form.elements['broker-banks'] ? Array.from(form.elements['broker-banks'].selectedOptions).map(opt => opt.value) : [];
    const upiIds = form.elements['broker-upis'] ? Array.from(form.elements['broker-upis'].selectedOptions).map(opt => opt.value) : [];
    const walletIds = form.elements['broker-wallets'] ? Array.from(form.elements['broker-wallets'].selectedOptions).map(opt => opt.value) : [];
    const commissionMode = form.elements['broker-commission-mode'] ? form.elements['broker-commission-mode'].value : 'money';
    const pointRate = form.elements['broker-point-rate'] ? parseFloat(form.elements['broker-point-rate'].value) || 0 : 0;
    const payCycle = form.elements['broker-pay-cycle'] ? form.elements['broker-pay-cycle'].value : 'adhoc';
    const logoFile = form.elements['broker-logo'] && form.elements['broker-logo'].files && form.elements['broker-logo'].files[0];
    // function to persist broker after reading logo
    const saveBroker = (logoData) => {
      const brokerObj = {
        id: id || generateId(),
        name: name,
        owner: owner,
        remarks: remarks,
        logo: logoData || (id ? (data.brokers.find(b => b.id === id) || {}).logo : ''),
        companyIds: companyIds,
        bankIds: bankIds,
        upiIds: upiIds,
        walletIds: walletIds,
        commissionMode: commissionMode,
        pointRate: pointRate,
        payCycle: payCycle,
        timeline: []
      };
      if (id) {
        const existing = data.brokers.find(b => b.id === id);
        Object.assign(existing, brokerObj);
        addTimeline(existing, 'Updated broker');
      } else {
        addTimeline(brokerObj, 'Created broker');
        data.brokers.push(brokerObj);
      }
      saveData();
      renderBrokersList();
      document.getElementById('broker-form-modal').classList.add('hidden');
    };
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = () => {
        saveBroker(reader.result);
      };
      reader.readAsDataURL(logoFile);
    } else {
      saveBroker();
    }
  });
  document.getElementById('close-broker-form').addEventListener('click', () => {
    document.getElementById('broker-form-modal').classList.add('hidden');
  });
}

function openBrokerDetail(id) {
  const broker = data.brokers.find(b => b.id === id);
  if (!broker) return;
  const modal = document.getElementById('broker-detail-modal');
  const title = document.getElementById('broker-detail-title');
  const content = document.getElementById('broker-detail-content');
  title.textContent = broker.name;
  let html = '<h4>Details</h4><table class="detail-table">';
  function row(label, value) { return `<tr><th>${label}</th><td>${value || ''}</td></tr>`; }
  html += row('Name', broker.name);
  if (broker.owner) html += row('Agency/Owner', broker.owner);
  if (broker.remarks) html += row('Remarks', broker.remarks);
  if (broker.companyIds && broker.companyIds.length) {
    const names = broker.companyIds.map(cid => {
      const comp = data.companies.find(c => c.id === cid);
      return comp ? comp.name : cid;
    }).join(', ');
    html += row('Companies', names);
  }
  if (broker.bankIds && broker.bankIds.length) {
    html += row('Bank Accounts', broker.bankIds.join(', '));
  }
  if (broker.upiIds && broker.upiIds.length) {
    html += row('UPI IDs', broker.upiIds.join(', '));
  }
  if (broker.walletIds && broker.walletIds.length) {
    html += row('Wallets', broker.walletIds.join(', '));
  }
  if (broker.commissionMode) {
    const modeLabel = broker.commissionMode === 'points' ? 'Points' : 'Money';
    html += row('Commission Mode', modeLabel);
  }
  if (broker.pointRate) {
    html += row('Point Rate', `₹${broker.pointRate} per point`);
  }
  if (broker.payCycle) {
    const cycleLabel = broker.payCycle.charAt(0).toUpperCase() + broker.payCycle.slice(1);
    html += row('Pay Cycle', cycleLabel);
  }
  html += '</table>';
  // linked policies
  const linkedPolicies = data.policies.filter(p => p.broker === broker.id);
  if (linkedPolicies.length > 0) {
    html += '<h4>Policies</h4><ul>';
    linkedPolicies.forEach(p => {
      html += `<li>${p.policyNumber} (${p.policyType})</li>`;
    });
    html += '</ul>';
  }
  // linked quotes
  const linkedQuotes = data.quotes.filter(q => q.broker === broker.id);
  if (linkedQuotes.length > 0) {
    html += '<h4>Quotes</h4><ul>';
    linkedQuotes.forEach(q => {
      const custName = (data.customers.find(c => c.id === q.customer) || {}).fullName || '';
      html += `<li>${q.policyType} for ${custName}</li>`;
    });
    html += '</ul>';
  }
  // timeline
  if (broker.timeline && broker.timeline.length > 0) {
    html += '<h4>Timeline</h4><ul class="timeline">';
    broker.timeline.forEach(entry => {
      html += `<li><span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span></li>`;
    });
    html += '</ul>';
  }
  content.innerHTML = html;
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-broker-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

function deleteBroker(id) {
  // remove broker references from policies
  data.policies.forEach(p => {
    if (p.broker === id) p.broker = '';
  });
  data.brokers = data.brokers.filter(b => b.id !== id);
  saveData();
  renderBrokersList();
  renderPoliciesList();
}

// Companies
function renderCompaniesList() {
  const container = document.getElementById('companies-list');
  if (!container) return;
  const term = (pageSearchTerms.companies || '').toLowerCase();
  const list = (!term
    ? data.companies.slice()
    : data.companies.filter(c => {
        const name = (c.name || '').toLowerCase();
        const remarks = (c.remarks || '').toLowerCase();
        return name.includes(term) || remarks.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.building}</div><p>No insurance companies found.</p><p class="small-note">Add a company via the + button or quick add menu.</p></div>`;
    return;
  }
  // Build table view for companies with logo embedded in the name column
  let html = '<div class="table-container"><table class="data-table"><thead><tr>' +
    '<th data-field="name">Name</th>' +
    '<th>Remarks</th>' +
    '<th>Actions</th>' +
    '</tr></thead><tbody>';
  list.forEach(c => {
    // Use company's logo if available; otherwise use building icon
    let logo = '';
    if (c.logo) {
      logo = `<img src="${c.logo}" alt="Logo" class="list-logo-inline">`;
    } else {
      logo = `<span class="inline-icon">${ICONS.building}</span>`;
    }
    html += `<tr data-id="${c.id}">
      <td class="logo-name-cell">${logo}<span class="list-name">${c.name}</span></td>
      <td>${c.remarks || ''}</td>
      <td class="actions">
        <button class="view-company" data-id="${c.id}" title="View">${ICONS.eye}</button>
        <button class="edit-company" data-id="${c.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-company" data-id="${c.id}" title="Delete">${ICONS.trash}</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
  // attach sorting
  const tableElem = container.querySelector('table.data-table');
  attachTableSorting('companies', tableElem, renderCompaniesList);
  // Attach actions
  container.querySelectorAll('.view-company').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCompanyDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-company').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCompanyForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-company').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this company?')) deleteCompany(btn.getAttribute('data-id'));
    });
  });
}

function openCompanyForm(id) {
  const modal = document.getElementById('company-form-modal');
  const title = document.getElementById('company-form-title');
  const form = document.getElementById('company-form');
  form.reset();
  form.elements['company-id'].value = '';
  if (id) {
    const company = data.companies.find(c => c.id === id);
    if (!company) return;
    title.textContent = 'Edit Company';
    form.elements['company-id'].value = company.id;
    form.elements['company-name'].value = company.name;
    form.elements['company-remarks'].value = company.remarks || '';
  } else {
    title.textContent = 'Add Company';
  }
  modal.classList.remove('hidden');
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleCompanyForm() {
  const form = document.getElementById('company-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['company-id'].value;
    const name = form.elements['company-name'].value.trim();
    const remarks = form.elements['company-remarks'].value.trim();
    const logoFile = form.elements['company-logo'] && form.elements['company-logo'].files && form.elements['company-logo'].files[0];
    const saveCompany = (logoData) => {
      const companyObj = {
        id: id || generateId(),
        name: name,
        remarks: remarks,
        logo: logoData || (id ? (data.companies.find(c => c.id === id) || {}).logo : ''),
        timeline: []
      };
      if (id) {
        const existing = data.companies.find(c => c.id === id);
        Object.assign(existing, companyObj);
        addTimeline(existing, 'Updated company');
      } else {
        addTimeline(companyObj, 'Created company');
        data.companies.push(companyObj);
      }
      saveData();
      renderCompaniesList();
      // update master data UI (e.g., plan company select) when companies change
      if (typeof renderMasterData === 'function') {
        renderMasterData();
      }
      document.getElementById('company-form-modal').classList.add('hidden');
    };
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = () => {
        saveCompany(reader.result);
      };
      reader.readAsDataURL(logoFile);
    } else {
      saveCompany();
    }
  });
  document.getElementById('close-company-form').addEventListener('click', () => {
    document.getElementById('company-form-modal').classList.add('hidden');
  });
}

function openCompanyDetail(id) {
  const company = data.companies.find(c => c.id === id);
  if (!company) return;
  const modal = document.getElementById('company-detail-modal');
  const title = document.getElementById('company-detail-title');
  const content = document.getElementById('company-detail-content');
  title.textContent = company.name;
  let html = '<h4>Details</h4><table class="detail-table">';
  function row(label, value) { return `<tr><th>${label}</th><td>${value || ''}</td></tr>`; }
  html += row('Name', company.name);
  html += row('Remarks', company.remarks);
  html += '</table>';
  // linked policies
  const linkedPolicies = data.policies.filter(p => p.company === company.id);
  if (linkedPolicies.length > 0) {
    html += '<h4>Policies</h4><ul>';
    linkedPolicies.forEach(p => {
      html += `<li>${p.policyNumber} (${p.policyType})</li>`;
    });
    html += '</ul>';
  }
  // linked quotes
  const linkedQuotes = data.quotes.filter(q => q.company === company.id);
  if (linkedQuotes.length > 0) {
    html += '<h4>Quotes</h4><ul>';
    linkedQuotes.forEach(q => {
      const custName = (data.customers.find(c => c.id === q.customer) || {}).fullName || '';
      html += `<li>${q.policyType} for ${custName}</li>`;
    });
    html += '</ul>';
  }
  // timeline
  if (company.timeline && company.timeline.length > 0) {
    html += '<h4>Timeline</h4><ul class="timeline">';
    company.timeline.forEach(entry => {
      html += `<li><span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span></li>`;
    });
    html += '</ul>';
  }
  content.innerHTML = html;
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-company-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

function deleteCompany(id) {
  // remove references from policies
  data.policies.forEach(p => {
    if (p.company === id) p.company = '';
  });
  data.companies = data.companies.filter(c => c.id !== id);
  saveData();
  renderCompaniesList();
  renderPoliciesList();
}

// Quotes
function renderQuotesList() {
  const container = document.getElementById('quotes-list');
  if (!container) return;
  const term = (pageSearchTerms.quotes || '').toLowerCase();
  const list = (!term
    ? data.quotes.slice()
    : data.quotes.filter(q => {
        const cust = data.customers.find(c => c.id === q.customer) || {};
        const comp = data.companies.find(c => c.id === q.company) || {};
        const bro = data.brokers.find(b => b.id === q.broker) || {};
        const str = `${q.policyType || ''} ${cust.fullName || ''} ${comp.name || ''} ${bro.name || ''} ${q.status || ''}`.toLowerCase();
        return str.includes(term);
      })
  );
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.quote}</div><p>No quotes found.</p><p class="small-note">Use the + button or quick add menu to create a new quote.</p></div>`;
    renderQuotesSummary();
    return;
  }
  let html = '';
  list.forEach(q => {
    const cust = data.customers.find(c => c.id === q.customer) || {};
    const comp = data.companies.find(c => c.id === q.company) || {};
    const bro = data.brokers.find(b => b.id === q.broker) || {};
    const premium = q.premium ? `₹${q.premium}` : '';
    html += `<div class="card quote-card" data-id="${q.id}">
      <div class="card-header">
        <span class="card-title">${q.policyType} Quote</span>
        ${q.status ? `<span class="status-badge">${q.status}</span>` : ''}
      </div>
      <div class="card-body">
        ${q.quoteDate ? `<p>Date: ${formatDate(q.quoteDate)}</p>` : ''}
        ${cust.fullName ? `<p>Customer: ${cust.fullName}</p>` : ''}
        ${comp.name ? `<p>Company: ${comp.name}</p>` : ''}
        ${bro.name ? `<p>Broker: ${bro.name}</p>` : ''}
        ${premium ? `<p>Premium: ${premium}</p>` : ''}
      </div>
      <div class="card-actions">
        <button class="view-quote" data-id="${q.id}" title="View">${ICONS.eye}</button>
        <button class="edit-quote" data-id="${q.id}" title="Edit">${ICONS.pencil}</button>
        <button class="delete-quote" data-id="${q.id}" title="Delete">${ICONS.trash}</button>
      </div>
    </div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.view-quote').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuoteDetail(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.edit-quote').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuoteForm(btn.getAttribute('data-id'));
    });
  });
  container.querySelectorAll('.delete-quote').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this quote?')) deleteQuote(btn.getAttribute('data-id'));
    });
  });
  renderQuotesSummary();
}

function updateQuoteTypeSpecificFields(type) {
  const container = document.getElementById('quote-type-specific-fields');
  if (!container) return;
  container.innerHTML = '';
  const fields = {
    Motor: [
      { key: 'vehicleNumber', label: 'Vehicle Number' },
      { key: 'chassisNumber', label: 'Chassis Number' },
      { key: 'engineNumber', label: 'Engine Number' },
      { key: 'vehicleType', label: 'Vehicle Type' },
      { key: 'make', label: 'Make' },
      { key: 'model', label: 'Model' },
      { key: 'fuelType', label: 'Fuel Type' },
      { key: 'registrationDate', label: 'Registration Date', type: 'date' },
      { key: 'idv', label: 'Insured Declared Value', type: 'number' }
    ],
    Health: [
      { key: 'insuredMembers', label: 'Insured Members (names/ages)', type: 'textarea' },
      { key: 'roomRentLimit', label: 'Room Rent Limit' },
      { key: 'waitingPeriod', label: 'Waiting Period' },
      { key: 'pedClauses', label: 'Pre-existing Disease Clauses', type: 'textarea' }
    ],
    Life: [
      { key: 'planName', label: 'Plan Name' },
      { key: 'maturityDate', label: 'Maturity Date', type: 'date' },
      { key: 'premiumFrequency', label: 'Premium Frequency' }
    ],
    Travel: [
      { key: 'travelStart', label: 'Travel Start Date', type: 'date' },
      { key: 'travelEnd', label: 'Travel End Date', type: 'date' },
      { key: 'destination', label: 'Destination(s)' }
    ],
    Home: [
      { key: 'propertyType', label: 'Property Type' },
      { key: 'location', label: 'Location' },
      { key: 'buildingAge', label: 'Building Age' },
      { key: 'structureType', label: 'Structure Type' }
    ],
    Commercial: [
      { key: 'businessType', label: 'Business Type' },
      { key: 'coverageDetails', label: 'Coverage Details', type: 'textarea' },
      { key: 'industryCode', label: 'Industry Code' }
    ]
  };
  const flds = fields[type] || [];
  flds.forEach(f => {
    const label = document.createElement('label');
    label.textContent = f.label;
    const inputType = f.type || 'text';
    let input;
    if (inputType === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.type = inputType;
    }
    input.setAttribute('data-key', f.key);
    label.appendChild(input);
    container.appendChild(label);
  });
}

function openQuoteForm(id) {
  const modal = document.getElementById('quote-form-modal');
  const title = document.getElementById('quote-form-title');
  const form = document.getElementById('quote-form');
  form.reset();
  form.elements['quote-id'].value = '';
  populateCustomerSelect(form.elements['quote-customer']);
  populateBrokerSelect(form.elements['quote-broker']);
  populateCompanySelect(form.elements['quote-company']);
  // update type-specific fields
  updateQuoteTypeSpecificFields(form.elements['quote-type'].value);
  form.elements['quote-type'].addEventListener('change', () => {
    updateQuoteTypeSpecificFields(form.elements['quote-type'].value);
  });
  // compute total
  const premiumInput = form.elements['quote-premium'];
  const taxInput = form.elements['quote-tax'];
  const totalInput = form.elements['quote-total'];
  function updateTotal() {
    const total = calculateTotal(premiumInput.value, taxInput.value);
    if (!isNaN(total)) totalInput.value = total;
  }
  premiumInput.addEventListener('input', updateTotal);
  taxInput.addEventListener('input', updateTotal);
  if (id) {
    const quote = data.quotes.find(q => q.id === id);
    if (!quote) return;
    title.textContent = 'Edit Quote';
    form.elements['quote-id'].value = quote.id;
    form.elements['quote-customer'].value = quote.customer;
    form.elements['quote-broker'].value = quote.broker;
    form.elements['quote-company'].value = quote.company;
    form.elements['quote-type'].value = quote.policyType;
    updateQuoteTypeSpecificFields(quote.policyType);
    form.elements['quote-date'].value = quote.quoteDate;
    form.elements['quote-sum-insured'].value = quote.sumInsured;
    form.elements['quote-premium'].value = quote.premium;
    form.elements['quote-tax'].value = quote.tax;
    form.elements['quote-total'].value = quote.total;
    form.elements['quote-status'].value = quote.status;
    form.elements['quote-remarks'].value = quote.remarks;
    // type-specific values
    const ts = quote.typeSpecific || {};
    const tsContainer = document.getElementById('quote-type-specific-fields');
    tsContainer.querySelectorAll('input, textarea, select').forEach(el => {
      const key = el.getAttribute('data-key');
      if (key && ts[key] !== undefined) {
        el.value = ts[key];
      }
    });
  } else {
    title.textContent = 'Add Quote';
  }
  modal.classList.remove('hidden');
  setTimeout(() => {
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }, 50);
}

function handleQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = form.elements['quote-id'].value;
    // gather type-specific fields
    const ts = {};
    const tsContainer = document.getElementById('quote-type-specific-fields');
    tsContainer.querySelectorAll('input, textarea').forEach(el => {
      const key = el.getAttribute('data-key');
      if (key) ts[key] = el.value;
    });
    const premium = parseFloat(form.elements['quote-premium'].value) || 0;
    const tax = parseFloat(form.elements['quote-tax'].value) || 0;
    const total = parseFloat(form.elements['quote-total'].value) || calculateTotal(premium, tax);
    const quoteObj = {
      id: id || generateId(),
      customer: form.elements['quote-customer'].value,
      broker: form.elements['quote-broker'].value,
      company: form.elements['quote-company'].value,
      policyType: form.elements['quote-type'].value,
      quoteDate: form.elements['quote-date'].value,
      sumInsured: form.elements['quote-sum-insured'].value,
      premium: premium,
      tax: tax,
      total: total,
      status: form.elements['quote-status'].value,
      remarks: form.elements['quote-remarks'].value,
      typeSpecific: ts,
      timeline: []
    };
    if (id) {
      const existing = data.quotes.find(q => q.id === id);
      Object.assign(existing, quoteObj);
      addTimeline(existing, 'Updated quote');
    } else {
      addTimeline(quoteObj, 'Created quote');
      data.quotes.push(quoteObj);
    }
    saveData();
    renderQuotesList();
    document.getElementById('quote-form-modal').classList.add('hidden');
  });
  document.getElementById('close-quote-form').addEventListener('click', () => {
    document.getElementById('quote-form-modal').classList.add('hidden');
  });
}

function openQuoteDetail(id) {
  const quote = data.quotes.find(q => q.id === id);
  if (!quote) return;
  const modal = document.getElementById('quote-detail-modal');
  const titleEl = document.getElementById('quote-detail-title');
  const content = document.getElementById('quote-detail-content');
  const customer = data.customers.find(c => c.id === quote.customer) || {};
  const broker = data.brokers.find(b => b.id === quote.broker) || {};
  const company = data.companies.find(c => c.id === quote.company) || {};
  // Set title for accessibility
  titleEl.textContent = `Quote`;
  // Clear content
  content.innerHTML = '';
  // Header card
  const headerEl = document.createElement('div');
  headerEl.className = 'profile-header';
  const headerTop = document.createElement('div');
  headerTop.className = 'header-top';
  const h3 = document.createElement('h3');
  h3.textContent = quote.policyType || '';
  headerTop.appendChild(h3);
  if (quote.status) {
    const badge = document.createElement('span');
    badge.className = 'status-badge';
    badge.textContent = quote.status;
    headerTop.appendChild(badge);
  }
  headerEl.appendChild(headerTop);
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  if (customer.fullName) {
    const p = document.createElement('p');
    p.textContent = `Customer: ${customer.fullName}`;
    infoDiv.appendChild(p);
  }
  if (broker.name) {
    const p2 = document.createElement('p');
    p2.textContent = `Broker: ${broker.name}`;
    infoDiv.appendChild(p2);
  }
  if (company.name) {
    const p3 = document.createElement('p');
    p3.textContent = `Company: ${company.name}`;
    infoDiv.appendChild(p3);
  }
  headerEl.appendChild(infoDiv);
  content.appendChild(headerEl);
  // Basic details section
  const basicItems = [];
  const pushItem = (label, val) => { if (val) basicItems.push({ label, value: val }); };
  pushItem('Date', quote.quoteDate ? formatDate(quote.quoteDate) : '');
  pushItem('Sum Insured', quote.sumInsured);
  pushItem('Premium', quote.premium);
  pushItem('Tax', quote.tax);
  pushItem('Total', quote.total);
  pushItem('Remarks', quote.remarks);
  if (basicItems.length) {
    const basicSection = createProfileSection('Quote Details', basicItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(basicSection);
  }
  // Type Specific section
  const tsKeys = Object.keys(quote.typeSpecific || {});
  if (tsKeys.length) {
    const tsItems = tsKeys.map(k => ({ label: k, value: quote.typeSpecific[k] }));
    const tsSection = createProfileSection('Type Specific', tsItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(tsSection);
  }
  // Conversion section
  if (quote.conversionStatus || quote.convertedToPolicyId) {
    const convItems = [];
    // Helper function inside scope to push conversion items
    const pushConv = (label, val) => { if (val) convItems.push({ label, value: val }); };
    pushConv('Conversion Status', quote.conversionStatus);
    pushConv('Conversion Date', quote.conversionDate ? formatDate(quote.conversionDate) : '');
    const convSection = createProfileSection('Conversion', convItems, item => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${item.label}</span><span>${item.value}</span>`;
      return el;
    });
    content.appendChild(convSection);
    // Add link to converted policy at the end of this section if applicable
    if (quote.convertedToPolicyId) {
      const pol = data.policies.find(p => p.id === quote.convertedToPolicyId) || {};
      const convLink = document.createElement('div');
      convLink.className = 'profile-item';
      convLink.innerHTML = `<span>Policy</span><span>${pol.policyNumber || 'View Policy'}</span>`;
      convLink.style.cursor = 'pointer';
      convLink.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        openPolicyDetail(quote.convertedToPolicyId);
      });
      convSection.querySelector('.section-content').appendChild(convLink);
    }
  }
  // Documents section
  const linkedDocs = data.documents.filter(doc => doc.linkedEntities && doc.linkedEntities.some(le => le.entity === 'quote' && le.id === quote.id));
  if (linkedDocs.length) {
    const docsSection = createProfileSection('Documents', linkedDocs, d => {
      const el = document.createElement('div');
      el.className = 'profile-item';
      el.innerHTML = `<span>${d.name || ''}</span><span>${d.type || ''}</span>`;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('hidden');
        modal.classList.remove('open');
        previewDocument(d.id);
      });
      return el;
    });
    content.appendChild(docsSection);
  }
  // Timeline section
  if (quote.timeline && quote.timeline.length > 0) {
    const timelineSection = document.createElement('div');
    timelineSection.className = 'profile-section';
    timelineSection.classList.add('collapsed');
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = '<h4>Timeline</h4><span class="toggle-icon">▾</span>';
    header.addEventListener('click', () => {
      timelineSection.classList.toggle('collapsed');
    });
    timelineSection.appendChild(header);
    const tlContent = document.createElement('div');
    tlContent.className = 'section-content';
    const ul = document.createElement('ul');
    ul.className = 'timeline';
    quote.timeline.forEach(entry => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="time">${formatRelative(entry.timestamp)}</span> <span class="desc">${entry.action}</span>`;
      ul.appendChild(li);
    });
    tlContent.appendChild(ul);
    timelineSection.appendChild(tlContent);
    content.appendChild(timelineSection);
  }
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.getElementById('close-quote-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  });
}

function deleteQuote(id) {
  data.quotes = data.quotes.filter(q => q.id !== id);
  saveData();
  renderQuotesList();
}

// Setup event listeners for Add buttons and forms
function setupEventListeners() {
  // Add customer
  document.getElementById('add-customer-btn').addEventListener('click', () => {
    openCustomerForm();
  });
  // handle forms
  handleCustomerDOBChange();
  handleCustomerForm();
  // Add policy
  document.getElementById('add-policy-btn').addEventListener('click', () => {
    openPolicyForm();
  });
  handlePolicyForm();
  // Add payment
  document.getElementById('add-payment-btn').addEventListener('click', () => {
    openPaymentForm();
  });
  handlePaymentForm();
  // Add document
  document.getElementById('add-document-btn').addEventListener('click', () => {
    openDocumentForm();
  });
  handleDocumentForm();

  // Brokers
  const addBrokerBtn = document.getElementById('add-broker-btn');
  if (addBrokerBtn) {
    addBrokerBtn.addEventListener('click', () => openBrokerForm());
    handleBrokerForm();
  }

  // Companies
  const addCompanyBtn = document.getElementById('add-company-btn');
  if (addCompanyBtn) {
    addCompanyBtn.addEventListener('click', () => openCompanyForm());
    handleCompanyForm();
  }

  // Quotes
  const addQuoteBtn = document.getElementById('add-quote-btn');
  if (addQuoteBtn) {
    addQuoteBtn.addEventListener('click', () => openQuoteForm());
    handleQuoteForm();
  }

  // Commissions
  const addCommissionBtn = document.getElementById('add-commission-btn');
  if (addCommissionBtn) {
    addCommissionBtn.addEventListener('click', () => openCommissionForm());
    handleCommissionForm();
  }

  // Redeem points
  const redeemPointsBtn = document.getElementById('redeem-points-btn');
  if (redeemPointsBtn) {
    redeemPointsBtn.addEventListener('click', () => {
      openRedeemPointsModal();
    });
    // set up handler for redeem form
    handleRedeemPointsForm();
  }

  // Vehicles
  const addVehicleBtn = document.getElementById('add-vehicle-btn');
  if (addVehicleBtn) {
    addVehicleBtn.addEventListener('click', () => openVehicleForm());
    handleVehicleForm();
  }

  // Dark mode toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    const iconSpan = darkToggle.querySelector('.icon');
    // click handler toggles body class and updates icon
    darkToggle.addEventListener('click', () => {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      data.settings.darkMode = isDark;
      if (iconSpan) {
        iconSpan.innerHTML = isDark ? ICONS.sun : ICONS.moon;
      }
      saveData();
    });
    // apply initial state from settings
    const isDark = !!data.settings.darkMode;
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
    if (iconSpan) {
      iconSpan.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    }
  }

  // Inject sidebar and top‑level icons after the DOM is ready
  applyIcons();

  // ---------------------------------------------------------------------------
  // Google sign‑in handling
  // When Firebase authentication is enabled, the login modal displays a
  // "Sign in with Google" button. Bind a click handler here to trigger
  // Firebase authentication. The handler is idempotent (it will only bind
  // once per element via a dataset flag).
  const googleBtn = document.getElementById('google-signin-btn');
  if (googleBtn && !googleBtn.dataset.bound) {
    googleBtn.dataset.bound = 'true';
    googleBtn.addEventListener('click', async () => {
      if (!auth || !googleProvider) {
        const errorMsg = document.getElementById('auth-error-msg');
        if (errorMsg) {
          errorMsg.textContent = 'Google sign‑in is not available. Check Firebase configuration.';
          errorMsg.style.display = 'block';
        }
        return;
      }
      try {
        await auth.signInWithPopup(googleProvider);
      } catch (ex) {
        // Fallback to redirect if popup sign‑in not supported
        if (ex && ex.code === 'auth/operation-not-supported-in-this-environment') {
          try {
            await auth.signInWithRedirect(googleProvider);
            return;
          } catch (redirectEx) {
            const errorMsg = document.getElementById('auth-error-msg');
            if (errorMsg) {
              errorMsg.textContent = 'Google sign‑in failed: ' + (redirectEx && redirectEx.message ? redirectEx.message : redirectEx);
              errorMsg.style.display = 'block';
            }
            return;
          }
        }
        const errorMsg = document.getElementById('auth-error-msg');
        if (errorMsg) {
          errorMsg.textContent = 'Google sign‑in failed: ' + (ex && ex.message ? ex.message : ex);
          errorMsg.style.display = 'block';
        }
      }
    });
  }

  // Global cloud sync button
  const globalSyncBtn = document.getElementById('cloud-sync-button');
  if (globalSyncBtn && !globalSyncBtn.dataset.bound) {
    globalSyncBtn.dataset.bound = 'true';
    globalSyncBtn.addEventListener('click', async () => {
      // Use persisted doc ID; ensure Firebase is configured
      const statusEl = document.getElementById('cloud-sync-status');
      function setGlobalStatus(msg, isError) {
        if (!statusEl) return;
        statusEl.textContent = msg;
        statusEl.style.color = isError ? '#dc3545' : 'var(--accent-color)';
        if (msg) setTimeout(() => { statusEl.textContent = ''; }, 6000);
      }
      if (!firebaseConfig || !firebaseConfig.apiKey) {
        setGlobalStatus('Firebase is not configured. Update firebaseConfig in app.js.', true);
        return;
      }
      setGlobalStatus('Syncing…', false);
      try {
        await syncWithCloud();
        setGlobalStatus('Sync complete! Reloading…', false);
        setTimeout(() => { location.reload(); }, 1200);
      } catch (err) {
        setGlobalStatus('Sync failed: ' + err.message, true);
      }
    });
  }

  // Reports controls: show/hide custom date inputs, populate entity selects and generate/export reports
  const reportsRange = document.getElementById('reports-range');
  const customSpan = document.querySelector('.report-filters .custom-range');
  if (reportsRange) {
    reportsRange.addEventListener('change', () => {
      if (customSpan) {
        if (reportsRange.value === 'custom') {
          customSpan.style.display = 'inline-flex';
        } else {
          customSpan.style.display = 'none';
        }
      }
    });
  }
  // Update entity select visibility and options when entity type changes
  const entityTypeSelect = document.getElementById('report-entity-type');
  const entitySelectLabel = document.getElementById('report-entity-select-label');
  const entitySelect = document.getElementById('report-entity-select');
  function updateReportEntitySelect() {
    if (!entityTypeSelect || !entitySelectLabel || !entitySelect) return;
    const type = entityTypeSelect.value;
    // Clear previous options
    entitySelect.innerHTML = '';
    if (type === 'customer') {
      // Populate with customers
      data.customers.forEach(cust => {
        const opt = document.createElement('option');
        opt.value = cust.id;
        opt.textContent = cust.fullName || '(Unnamed)';
        entitySelect.appendChild(opt);
      });
      entitySelectLabel.style.display = 'flex';
    } else if (type === 'policy') {
      // Populate with policies
      data.policies.forEach(pol => {
        const opt = document.createElement('option');
        opt.value = pol.id;
        opt.textContent = pol.policyNumber || pol.id;
        entitySelect.appendChild(opt);
      });
      entitySelectLabel.style.display = 'flex';
    } else if (type === 'vehicle') {
      // Populate with vehicles
      data.vehicles.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.id;
        opt.textContent = v.regNumber || v.model || v.id;
        entitySelect.appendChild(opt);
      });
      entitySelectLabel.style.display = 'flex';
    } else {
      entitySelectLabel.style.display = 'none';
    }
  }
  if (entityTypeSelect) {
    entityTypeSelect.addEventListener('change', () => {
      updateReportEntitySelect();
    });
  }
  // Generate report
  const generateBtn = document.getElementById('reports-generate');
  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.dataset.bound = 'true';
    generateBtn.addEventListener('click', () => {
      renderReports();
    });
  }
  // Download report CSV
  const downloadBtn = document.getElementById('reports-download');
  if (downloadBtn && !downloadBtn.dataset.bound) {
    downloadBtn.dataset.bound = 'true';
    downloadBtn.addEventListener('click', () => {
      downloadReportCsv();
    });
  }
  // Initial entity select population
  updateReportEntitySelect();

  // Populate additional report filter selects with dynamic data
  function populateReportFilters() {
    // Broker select
    const brokerSel = document.getElementById('report-broker');
    if (brokerSel) {
      // Remove existing options except first
      brokerSel.innerHTML = '<option value="">All</option>';
      data.brokers.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = b.name || '(Unnamed)';
        brokerSel.appendChild(opt);
      });
    }
    // Company select
    const compSel = document.getElementById('report-company');
    if (compSel) {
      compSel.innerHTML = '<option value="">All</option>';
      data.companies.forEach(cmp => {
        const opt = document.createElement('option');
        opt.value = cmp.id;
        opt.textContent = cmp.name || '(Unnamed)';
        compSel.appendChild(opt);
      });
    }
    // Policy Type select: gather unique policy categories/subtypes
    const typeSel = document.getElementById('report-policy-type');
    if (typeSel) {
      typeSel.innerHTML = '<option value="">All</option>';
      const types = new Set();
      data.policies.forEach(p => {
        if (p.policyCategoryId) {
          // Use master category name if available
          const cat = data.settings.master.categories.find(cat => cat.id === p.policyCategoryId);
          if (cat) types.add(cat.name);
        } else if (p.policyType) {
          types.add(p.policyType);
        }
      });
      Array.from(types).forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        typeSel.appendChild(opt);
      });
    }
    // Vehicle select
    const vehicleSel = document.getElementById('report-vehicle');
    if (vehicleSel) {
      vehicleSel.innerHTML = '<option value="">All</option>';
      data.vehicles.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.id;
        opt.textContent = v.regNumber || v.model || v.id;
        vehicleSel.appendChild(opt);
      });
    }
  }
  // Call once on load
  populateReportFilters();
  // Expose for reuse in renderReports (since renderReports may need to refresh filter lists)
  window.populateReportFilters = populateReportFilters;
  // Sidebar toggle button
  const sidebarBtn = document.getElementById('toggle-sidebar-btn');
  if (sidebarBtn && !sidebarBtn.dataset.bound) {
    sidebarBtn.dataset.bound = 'true';
    sidebarBtn.addEventListener('click', () => {
      toggleSidebar();
    });
  }
}

// Initialise the app
async function init() {
  // Check version and reset data if this is a fresh install or version upgrade
  try {
    const storedVersion = localStorage.getItem('insuranceAppVersion');
    if (storedVersion !== APP_VERSION) {
      localStorage.setItem('insuranceAppVersion', APP_VERSION);
      // remove old data if any
      localStorage.removeItem('insuranceData');
    }
  } catch (e) {
    console.error('Version check failed', e);
  }
  // Load local data
  loadData();
  // Load persisted cloud document ID; if none set, derive from current user
  loadCloudDocId();
  // Attempt to synchronise with cloud on initialisation. If data exists remotely it
  // will be pulled down before the UI renders. Ignore errors (e.g. offline, no config).
  try {
    await syncWithCloud();
  } catch (ex) {
    console.warn('Initial sync with cloud failed', ex);
  }
  // Initialise sidebar state and Firebase
  initSidebarState();
  initFirebase();
  // Migrate any legacy documents stored inline to Firebase Storage. This must be
  // run after Firebase initialisation so that storage and auth are available.
  try {
    await migrateOldDocuments();
  } catch (err) {
    console.warn('Document migration skipped or failed:', err);
  }
  setupNavigation();
  setupEventListeners();
  setupGlobalSearch();
  setupPageSearches();
  setupQuickAddMenu();
  setupKeyboardShortcuts();
  setupModalInteractions();
  // Initially show home
  showSection('home');
}

// On DOM ready, verify authentication before initialising the app
document.addEventListener('DOMContentLoaded', async () => {
  // When DOM is ready, perform asynchronous authentication check.
  try {
    await checkAuth();
  } catch (ex) {
    console.error('Authentication check failed:', ex);
    // Fallback: show login
    showAuthModal(false);
  }
});