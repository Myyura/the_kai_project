const CLEANUP_KEY = 'kai_legacy_pwa_removed_v1';

async function removeLegacyPwa() {
  if (typeof window === 'undefined' || window.localStorage.getItem(CLEANUP_KEY) === '1') return;
  try {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
    if ('caches' in window) {
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));
    }
    window.localStorage.setItem(CLEANUP_KEY, '1');
  } catch {
    // Retry on the next page load. A failed cleanup must not block the website.
  }
}

void removeLegacyPwa();
