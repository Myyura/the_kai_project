import {normalizeLanguage} from './config';

const trimTrailingSlash = (value) => value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;

// Old bookmarks still arrive via the 404 page; startup and switching share
// this normalization without maintaining duplicate localized routes.
export function getLegacyLocaleRoute(pathname = '/') {
  const match = pathname.match(/^\/(en|ja)(?:\/|$)/);
  return match ? {
    language: match[1],
    canonicalPathname: trimTrailingSlash(pathname.slice(3) || '/'),
  } : null;
}

export function buildLanguageUrl(location, language) {
  const params = new URLSearchParams(location.search || '');
  params.set('lang', normalizeLanguage(language));
  return {
    pathname: getLegacyLocaleRoute(location.pathname)?.canonicalPathname || trimTrailingSlash(location.pathname || '/'),
    search: `?${params.toString()}`,
    hash: location.hash || '',
  };
}
