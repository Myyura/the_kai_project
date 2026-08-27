/* kai-retired-pwa-tombstone
 *
 * The site no longer registers a Service Worker. This file only replaces old
 * /sw.js registrations, removes their caches, and unregisters itself. Keep it
 * available while previously installed Kai PWAs may still exist.
 */
(function retireLegacyPwa() {
  'use strict';

  var legacyCacheNames = {
    'pages-runtime': true,
    'assets-runtime': true,
    'images-runtime': true,
    'katex-cdn': true,
    'search-index': true,
  };

  function isLegacyCache(name) {
    return Boolean(legacyCacheNames[name]) || name.indexOf('workbox-precache') === 0;
  }

  self.addEventListener('install', function handleInstall(event) {
    event.waitUntil(self.skipWaiting());
  });

  self.addEventListener('activate', function handleActivate(event) {
    event.waitUntil(
      caches.keys()
        .then(function deleteLegacyCaches(names) {
          return Promise.all(names.filter(isLegacyCache).map(function deleteCache(name) {
            return caches.delete(name);
          }));
        })
        .then(function releaseClients() {
          return self.clients.claim();
        })
        .then(function unregisterTombstone() {
          return self.registration.unregister();
        }),
    );
  });
})();
