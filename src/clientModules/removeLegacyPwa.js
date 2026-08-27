const CLEANUP_KEY = 'kai_legacy_pwa_removed_v1';
const LEGACY_CACHE_NAMES = new Set([
  'pages-runtime',
  'assets-runtime',
  'images-runtime',
  'katex-cdn',
  'search-index',
]);

function isLegacyPwaCache(name) {
  return LEGACY_CACHE_NAMES.has(name) || name.startsWith('workbox-precache');
}

function cleanupAlreadyCompleted() {
  try {
    return window.localStorage.getItem(CLEANUP_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberCompletedCleanup() {
  try {
    window.localStorage.setItem(CLEANUP_KEY, '1');
  } catch {
    // Storage can be blocked on iOS Safari; cleanup itself has still succeeded.
  }
}

async function removeLegacyPwa() {
  if (typeof window === 'undefined') return;
  try {
    let registrations = [];
    if ('serviceWorker' in navigator) {
      registrations = await navigator.serviceWorker.getRegistrations();
    }

    const controlledByWorker = Boolean(navigator.serviceWorker?.controller);
    if (cleanupAlreadyCompleted() && registrations.length === 0 && !controlledByWorker) {
      return;
    }

    await Promise.all(registrations.map((registration) => registration.unregister()));
    if ('caches' in window) {
      const names = await caches.keys();
      await Promise.all(names.filter(isLegacyPwaCache).map((name) => caches.delete(name)));
    }
    rememberCompletedCleanup();
  } catch {
    // Retry on the next page load. A failed cleanup must not block the website.
  }
}

void removeLegacyPwa();
