/**
 * Custom Service Worker extensions for offline support.
 * Compiled and bundled by Rspack together with the Docusaurus-generated SW.
 *
 * Adds runtime caching for:
 *  1. Same-origin navigations (NetworkOnly) — avoid stale HTML after deploy
 *  2. Route chunks, CSS, and images (CacheFirst) — versioned assets are cached on demand
 *  3. CDN KaTeX assets (CacheFirst, 30-day TTL) — so NoteEditor math works offline
 *  4. /search-index.json (StaleWhileRevalidate) — so local search works offline
 *     after the first page visit
 */

import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

const isSameOrigin = ({ url }) => url.origin === self.location.origin;

const isPrecachedPath = (pathname) => (
  pathname === '/' ||
  pathname === '/index.html' ||
  pathname === '/404.html' ||
  pathname === '/manifest.json' ||
  pathname === '/browserconfig.xml' ||
  /^\/assets\/js\/(?:runtime~main|main)\.[^/]+\.js$/.test(pathname) ||
  /^\/assets\/css\/styles\.[^/]+\.css$/.test(pathname) ||
  /^\/img\/(?:favicon\.ico|kai-icon(?:-light)?\.png|logo(?:-\d+)?\.png|logo(?:_dark)?\.svg)$/.test(pathname)
);

const isVersionedAsset = ({ url }) => {
  if (url.origin !== self.location.origin) return false;
  if (isPrecachedPath(url.pathname)) return false;
  return (
    /^\/assets\/js\/.+\.js$/.test(url.pathname) ||
    /^\/assets\/css\/.+\.css$/.test(url.pathname)
  );
};

const isImageAsset = ({ url }) => {
  if (url.origin !== self.location.origin) return false;
  if (isPrecachedPath(url.pathname)) return false;
  return (
    /^\/assets\/images\/.+\.(?:png|jpg|jpeg|gif|svg|webp|avif)$/.test(url.pathname) ||
    /^\/img\/.+\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico)$/.test(url.pathname)
  );
};

// ─── 1. Same-origin pages ───────────────────────────────────────────────────
// NetworkOnly: avoid serving stale HTML after deploy (old HTML → missing hashed
// bundles → browser parses 404 HTML as JS → SyntaxError on main.*.js:1).
registerRoute(
  ({ request, url }) => (
    isSameOrigin({ url }) &&
    request.mode === 'navigate' &&
    !isPrecachedPath(url.pathname)
  ),
  new NetworkOnly(),
);

// ─── 2. Route chunks, CSS, and images ───────────────────────────────────────
registerRoute(
  isVersionedAsset,
  new CacheFirst({
    cacheName: 'assets-runtime',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 180,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
);

registerRoute(
  isImageAsset,
  new CacheFirst({
    cacheName: 'images-runtime',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 120,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
);

// ─── 3. KaTeX CDN (jsdelivr) ────────────────────────────────────────────────
// Cache KaTeX JS, CSS and font files with CacheFirst.
// Versioned URLs don't change, so a long TTL is safe.
const isKaTeXAsset = ({ url }) => {
  if (url.hostname !== 'cdn.jsdelivr.net') return false;
  if (!url.pathname.startsWith('/npm/katex@')) return false;

  return (
    url.pathname.endsWith('/dist/katex.min.css') ||
    url.pathname.endsWith('/dist/katex.min.js') ||
    url.pathname.includes('/dist/fonts/')
  );
};

registerRoute(
  isKaTeXAsset,
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

// ─── Deploy safety: drop stale runtime caches on SW activate ──────────────────
const RUNTIME_CACHES_TO_PURGE_ON_ACTIVATE = [
  'pages-runtime',
  'assets-runtime',
  'images-runtime',
];

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      ...RUNTIME_CACHES_TO_PURGE_ON_ACTIVATE.map((name) => caches.delete(name)),
      self.clients.claim(),
    ]),
  );
});

// ─── 4. Local search index ───────────────────────────────────────────────────
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
