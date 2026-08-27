const RETRY_PARAM = '__kai_reload';
const RETRY_STORAGE_KEY = 'kai_chunk_reload_at_v1';
const RETRY_COOLDOWN_MS = 30000;

function getStoredRetryAt(browserWindow) {
  try {
    return Number(browserWindow.sessionStorage.getItem(RETRY_STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
}

function rememberRetry(browserWindow, timestamp) {
  try {
    browserWindow.sessionStorage.setItem(RETRY_STORAGE_KEY, String(timestamp));
  } catch {
    // The URL marker remains available when browser storage is restricted.
  }
}

export function requestFreshAssetReload(browserWindow, force = false, now = Date.now()) {
  if (!browserWindow) return;

  const recovery = browserWindow.__kaiChunkRecovery;
  if (typeof recovery?.reloadWithFreshAssets === 'function') {
    // A false return value means the recovery bootstrap deliberately suppressed
    // another reload (for example, because its cooldown is still active). The
    // request is still handled and must not fall through to an unguarded reload.
    recovery.reloadWithFreshAssets(force);
    return;
  }

  const url = new URL(browserWindow.location.href);
  const lastRetryAt = Math.max(
    Number(url.searchParams.get(RETRY_PARAM)) || 0,
    getStoredRetryAt(browserWindow),
  );
  if (!force && lastRetryAt > 0 && now - lastRetryAt < RETRY_COOLDOWN_MS) return;

  rememberRetry(browserWindow, now);
  url.searchParams.set(RETRY_PARAM, String(now));
  if (url.protocol === 'http:' && (url.hostname === 'runjp.com' || url.hostname === 'www.runjp.com')) {
    url.protocol = 'https:';
  }
  browserWindow.location.replace(url.toString());
}
