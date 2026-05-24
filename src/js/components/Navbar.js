class KudmsNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Dashboard';
    const isThai = /[ก-๙]/.test(title);
    const titleClass = isThai ? 'navbar-title thai-text' : 'navbar-title';
    
    // Check if inline style is needed
    let styleAttr = '';
    if (this.hasAttribute('title-style')) {
      styleAttr = `style="${this.getAttribute('title-style')}"`;
    }

    this.innerHTML = `
      <header class="top-navbar">
        <div class="navbar-left">
          <h2 class="${titleClass}" ${styleAttr}>${title}</h2>
        </div>
        <div class="navbar-right">
          <button class="notification-btn">
            <!-- Notification Bell Icon (Solid) -->
            <svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            <div class="notification-badge"></div>
          </button>
        </div>
      </header>
    `;
  }
}

customElements.define('kudms-navbar', KudmsNavbar);
