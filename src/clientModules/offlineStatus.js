/**
 * Client module: shows a non-intrusive offline/online status banner.
 * Runs before React hydration (pure DOM, no React dependency).
 *
 * Reads document.documentElement.getAttribute('data-lang') to decide between
 * Chinese, Japanese, and English text.
 */

import {getUiMessages} from '@site/src/i18n/messages';

(function () {
  if (typeof window === 'undefined') return;

  // ─── Toast element ──────────────────────────────────────────────────────
  let toast = null;
  let hideTimer = null;

  function getLang() {
    var lang = document.documentElement.getAttribute('data-lang');
    return lang === 'ja' || lang === 'en' ? lang : 'zh';
  }

  const STYLES = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    padding: 10px 20px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    z-index: 9999;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
  `;

  function ensureToast() {
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(type) {
    const lang = getLang();
    const msg = getUiMessages('offlineStatus', lang)[type];
    const bg = type === 'offline' ? '#e74c3c' : '#27ae60';

    clearTimeout(hideTimer);

    const el = ensureToast();
    el.textContent = msg;
    el.style.cssText = STYLES + `background: ${bg};`;

    if (type === 'online') {
      // Auto-hide after 3 s
      hideTimer = setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50%) translateY(12px)';
      }, 3000);
    }
  }

  // ─── Event listeners ────────────────────────────────────────────────────
  window.addEventListener('offline', () => showToast('offline'));
  window.addEventListener('online', () => showToast('online'));

  // Show immediately if already offline on page load
  if (!navigator.onLine) {
    // Wait for body to be available
    if (document.body) {
      showToast('offline');
    } else {
      document.addEventListener('DOMContentLoaded', () => showToast('offline'));
    }
  }
})();
