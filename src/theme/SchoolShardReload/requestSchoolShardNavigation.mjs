export const SCHOOL_SHARD_RETRY_PARAM = '__kai_shard_reload';
export const SCHOOL_SHARD_RETRY_STORAGE_KEY = 'kai_school_shard_reload_v1';
export const SCHOOL_SHARD_RETRY_COOLDOWN_MS = 30000;

function getTargetKey(url) {
  const target = new URL(url.toString());
  target.searchParams.delete(SCHOOL_SHARD_RETRY_PARAM);
  return `${target.pathname}${target.search}`;
}

function getStoredAttempt(browserWindow) {
  try {
    const value = JSON.parse(
      browserWindow.sessionStorage.getItem(SCHOOL_SHARD_RETRY_STORAGE_KEY),
    );
    return value && typeof value === 'object' ? value : null;
  } catch {
    return null;
  }
}

function rememberAttempt(browserWindow, attempt) {
  try {
    browserWindow.sessionStorage.setItem(
      SCHOOL_SHARD_RETRY_STORAGE_KEY,
      JSON.stringify(attempt),
    );
  } catch {
    // The URL marker remains the primary loop guard when storage is blocked.
  }
}

function clearAttempt(browserWindow) {
  try {
    browserWindow.sessionStorage.removeItem(SCHOOL_SHARD_RETRY_STORAGE_KEY);
  } catch {
    // The URL marker is cleared separately when browser storage is blocked.
  }
}

export function createSchoolShardRetryUrl(href, timestamp = Date.now()) {
  const url = new URL(href);
  url.searchParams.set(SCHOOL_SHARD_RETRY_PARAM, String(timestamp));
  return url.toString();
}

export function requestSchoolShardNavigation(
  browserWindow,
  now = Date.now(),
) {
  if (!browserWindow?.location?.href) {
    return {started: false, retryUrl: '#'};
  }

  const currentUrl = new URL(browserWindow.location.href);
  const target = getTargetKey(currentUrl);
  const retryUrl = createSchoolShardRetryUrl(currentUrl.toString(), now);
  const urlAlreadyRetried = currentUrl.searchParams.has(
    SCHOOL_SHARD_RETRY_PARAM,
  );
  const storedAttempt = getStoredAttempt(browserWindow);
  const storageAlreadyRetried = storedAttempt?.target === target
    && Number.isFinite(storedAttempt.at)
    && now - storedAttempt.at < SCHOOL_SHARD_RETRY_COOLDOWN_MS;

  if (urlAlreadyRetried || storageAlreadyRetried) {
    return {started: false, retryUrl};
  }

  rememberAttempt(browserWindow, {target, at: now});
  browserWindow.location.replace(retryUrl);
  return {started: true, retryUrl};
}

export function markSchoolShardNavigationSuccessful(browserWindow) {
  if (!browserWindow?.location?.href) return false;

  clearAttempt(browserWindow);
  try {
    const url = new URL(browserWindow.location.href);
    if (!url.searchParams.has(SCHOOL_SHARD_RETRY_PARAM)) return true;
    url.searchParams.delete(SCHOOL_SHARD_RETRY_PARAM);
    browserWindow.history.replaceState(
      browserWindow.history.state,
      '',
      url.toString(),
    );
  } catch {
    // A stale marker is harmless once the destination page rendered successfully.
  }
  return true;
}
