import {DEFAULT_LANGUAGE, getLanguageLocale, isSupportedLanguage, normalizeLanguage} from './config';

export function getStoredLanguage() {
  try {
    const language = localStorage.getItem('preferredLanguage');
    return isSupportedLanguage(language) ? language : null;
  } catch {
    return null;
  }
}

export function getBrowserLanguage() {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;

  const languages = [
    ...(navigator.languages || []),
    navigator.language,
  ];
  for (const locale of languages) {
    if (typeof locale !== 'string') continue;
    // Match regional/script variants such as ja-JP, en-US and zh-Hant-TW.
    const language = locale.toLowerCase().split('-')[0];
    if (isSupportedLanguage(language)) return language;
  }
  return DEFAULT_LANGUAGE;
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
