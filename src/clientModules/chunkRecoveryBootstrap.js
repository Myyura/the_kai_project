(function installChunkRecovery() {
  'use strict';

  if (typeof window === 'undefined') return;

  var RETRY_PARAM = '__kai_reload';
  var RETRY_STORAGE_KEY = 'kai_chunk_reload_at_v1';
  var RETRY_COOLDOWN_MS = 30000;
  var reloadStarted = false;

  function getErrorText(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    return [value.name, value.message].filter(Boolean).join(': ');
  }

  function isChunkMessage(value) {
    return /ChunkLoadError|Loading chunk \d+ failed|Failed to fetch dynamically imported module|Importing a module script failed/i
      .test(getErrorText(value));
  }

  function isJavaScriptAssetError(event) {
    var target = event && event.target;
    if (!target || String(target.tagName).toUpperCase() !== 'SCRIPT' || !target.src) return false;

    try {
      var assetUrl = new URL(target.src, window.location.href);
      var pageUrl = new URL(window.location.href);
      return assetUrl.origin === pageUrl.origin
        && /^\/assets\/js\/.+\.js$/i.test(assetUrl.pathname);
    } catch (_error) {
      return false;
    }
  }

  function getLastRetryAt() {
    try {
      return Number(window.sessionStorage.getItem(RETRY_STORAGE_KEY)) || 0;
    } catch (_error) {
      return 0;
    }
  }

  function rememberRetry(timestamp) {
    try {
      window.sessionStorage.setItem(RETRY_STORAGE_KEY, String(timestamp));
    } catch (_error) {
      // The URL marker remains as a loop guard when storage is unavailable.
    }
  }

  function reloadWithFreshAssets(force) {
    if (reloadStarted) return false;

    var now = Date.now();
    var url = new URL(window.location.href);
    var urlRetryAt = Number(url.searchParams.get(RETRY_PARAM)) || 0;
    var lastRetryAt = Math.max(urlRetryAt, getLastRetryAt());

    if (!force && lastRetryAt > 0 && now - lastRetryAt < RETRY_COOLDOWN_MS) {
      return false;
    }

    reloadStarted = true;
    rememberRetry(now);
    url.searchParams.set(RETRY_PARAM, String(now));

    if (
      url.protocol === 'http:'
      && (url.hostname === 'runjp.com' || url.hostname === 'www.runjp.com')
    ) {
      url.protocol = 'https:';
    }

    window.location.replace(url.toString());
    return true;
  }

  function handleWindowError(event) {
    if (isJavaScriptAssetError(event) || isChunkMessage(event && (event.error || event.message))) {
      reloadWithFreshAssets(false);
    }
  }

  function handleUnhandledRejection(event) {
    if (isChunkMessage(event && event.reason)) {
      reloadWithFreshAssets(false);
    }
  }

  window.__kaiChunkRecovery = {
    isChunkLoadError: isChunkMessage,
    reloadWithFreshAssets: reloadWithFreshAssets,
  };

  window.addEventListener('error', handleWindowError, true);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);

  var currentUrl = new URL(window.location.href);
  if (
    currentUrl.protocol === 'http:'
    && (currentUrl.hostname === 'runjp.com' || currentUrl.hostname === 'www.runjp.com')
  ) {
    reloadWithFreshAssets(true);
  }
})();
