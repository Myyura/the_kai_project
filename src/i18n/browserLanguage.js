import {DEFAULT_LANGUAGE, getLanguageLocale, normalizeLanguage} from './config';

export function getStoredLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem('preferredLanguage'));
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function applyLanguage(language) {
  const nextLanguage = normalizeLanguage(language);
  try {
    localStorage.setItem('preferredLanguage', nextLanguage);
  } catch {
    // Storage may be blocked; changing the displayed language still works.
  }
  document.documentElement.setAttribute('data-lang', nextLanguage);
  document.documentElement.setAttribute('lang', getLanguageLocale(nextLanguage));
}
