import {pluginSitemap} from '@rspress/plugin-sitemap';

export const EXCLUDED_SITEMAP_ROUTES = Object.freeze([
  '/auth/callback',
  '/login',
  '/me',
  '/reset-password',
  '/search',
]);

const excludedRoutes = new Set(EXCLUDED_SITEMAP_ROUTES);

export function shouldIncludeInSitemap(routePath) {
  const normalized = String(routePath || '/').replace(/\/+$/, '') || '/';
  return !excludedRoutes.has(normalized);
}

/**
 * Preserve the old site's sitemap privacy boundary while retaining the
 * official Rspress sitemap implementation for URL and timestamp generation.
 */
export function createKaiSitemapPlugin(options) {
  const sitemapPlugin = pluginSitemap(options);
  const extendPageData = sitemapPlugin.extendPageData?.bind(sitemapPlugin);

  return {
    ...sitemapPlugin,
    name: 'rspress-kai-sitemap',
    extendPageData(pageData, isProd) {
      if (!shouldIncludeInSitemap(pageData?.routePath)) return undefined;
      return extendPageData?.(pageData, isProd);
    },
  };
}
