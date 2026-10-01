import {normalizeLanguage} from './config';

const trimTrailingSlash = (value) => value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;

export function buildLanguageUrl(location, language) {
  const params = new URLSearchParams(location.search || '');
  params.set('lang', normalizeLanguage(language));
  return {
    pathname: trimTrailingSlash(location.pathname || '/'),
    search: `?${params.toString()}`,
    hash: location.hash || '',
  };
}
