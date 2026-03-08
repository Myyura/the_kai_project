/**
 * Custom Service Worker extensions for offline support.
 * Compiled and bundled by Rspack together with the Docusaurus-generated SW.
 *
 * Adds runtime caching for:
 *  1. CDN KaTeX assets (CacheFirst, 30-day TTL) — so NoteEditor math works offline
 *  2. /search-index.json (StaleWhileRevalidate) — so local search works offline
 *     after the first page visit
 */

import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// ─── 1. KaTeX CDN (jsdelivr) ────────────────────────────────────────────────
// Cache KaTeX JS, CSS and font files with CacheFirst.
// Versioned URLs don't change, so a long TTL is safe.
registerRoute(
  ({ url }) => url.hostname === 'cdn.jsdelivr.net',
  new CacheFirst({
    cacheName: 'katex-cdn',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
);

// ─── 2. Local search index ───────────────────────────────────────────────────
// The search-index.json is ~11.6 MB — too large for the Workbox precache
// (default 2 MB limit).  Use StaleWhileRevalidate so it is cached on the
// first search request and served instantly from cache on every subsequent
// visit, including offline.
registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('search-index.json'),
  new StaleWhileRevalidate({
    cacheName: 'search-index',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  }),
);
