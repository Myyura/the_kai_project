/**
 * Recover from stale PWA caches after deploy.
 *
 * When pages-runtime serves outdated HTML, script tags may point at removed
 * bundles. GitHub Pages then returns 404 HTML, which triggers:
 *   Uncaught SyntaxError: Invalid or unexpected token
 *
 * Unregister SW + clear caches once, then reload.
 */
(function () {
  if (typeof window === 'undefined') return;

  const RECOVERY_KEY = 'kai_pwa_recovery_attempted';

  const isStaleBundleSyntaxError = (event) => {
    const message = String(event?.message || '');
    const source = String(event?.filename || '');
    return (
      source.includes('/assets/js/') &&
      (message.includes('Invalid or unexpected token') ||
        message.includes('Unexpected token'))
    );
  };

  const recoverFromStaleCache = () => {
    if (sessionStorage.getItem(RECOVERY_KEY)) return;
    sessionStorage.setItem(RECOVERY_KEY, '1');

    const clearCaches = () => (
      'caches' in window
        ? caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
        : Promise.resolve()
    );

    const unregisterWorkers = () => (
      'serviceWorker' in navigator
        ? navigator.serviceWorker.getRegistrations()
          .then((registrations) => Promise.all(registrations.map((item) => item.unregister())))
        : Promise.resolve()
    );

    void unregisterWorkers()
      .then(clearCaches)
      .finally(() => {
        window.location.reload();
      });
  };

  window.addEventListener('error', (event) => {
    if (!isStaleBundleSyntaxError(event)) return;
    recoverFromStaleCache();
  }, true);
})();
