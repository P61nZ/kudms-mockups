class KudmsSidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['active-item'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const activeItem = this.getAttribute('active-item') || 'dashboard';

    this.innerHTML = `
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand-logo">
            <h2><span class="text-kud">KUD</span><span class="text-ms">MS</span></h2>
            <p class="brand-subtitle thai-text">ระบบจัดการเอกสาร</p>
          </div>
          <div class="sidebar-toggle"></div>
        </div>

        <!-- Search in Sidebar -->
        <div class="sidebar-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input type="text" placeholder="Search">
        </div>

        <nav class="nav-menu">
          <a href="#" class="nav-item thai-text ${activeItem === 'dashboard' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M4 13h6V3H4v10zm0 8h6v-6H4v6zm8 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            แดชบอร์ด
          </a>
          
          <a href="#" class="nav-item thai-text ${activeItem === 'template' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            เทมเพลต
          </a>
          
          <a href="#" class="nav-item thai-text ${activeItem === 'create-project' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
            สร้างโครงการ
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'approval-process' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M16 11l-4-4-4 4h3v4h-3l4 4 4-4h-3v-4h3z"/></svg>
            กระบวนการอนุมัติโครงการ
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'pending-approval' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-8v-2h8v2zm0-4h-8v-2h8v2z"/></svg>
            รายการรออนุมัติ
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'tracking' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            ติดตามเอกสาร
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'reports' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            รายงานสรุปโครงการ
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'permissions' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            จัดการสมาชิกและสิทธิ์
          </a>

          <a href="#" class="nav-item thai-text ${activeItem === 'manual' ? 'active' : ''}">
            <svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            คู่มือการใช้งาน
          </a>
          
          <div class="nav-bottom">
            <a href="#" class="nav-item thai-text ${activeItem === 'settings' ? 'active' : ''}">
              <svg viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
              การตั้งค่า
            </a>
            <a href="#" class="nav-item thai-text ${activeItem === 'support' ? 'active' : ''}">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
              สนับสนุน
            </a>
          </div>
        </nav>

        <!-- User Profile Box -->
        <div class="user-profile">
          <div class="avatar">D</div>
          <div class="profile-info">
            <span class="profile-name">Test Club</span>
            <span class="profile-email">test@compaxtech.com</span>
          </div>
          <div class="profile-options">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </aside>
    `;
  }
}

customElements.define('kudms-sidebar', KudmsSidebar);
