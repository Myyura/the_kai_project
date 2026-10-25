import {DEFAULT_LANGUAGE, isSupportedLanguage} from '../i18n/config';
import {applyLanguage, getBrowserLanguage, getStoredLanguage} from '../i18n/browserLanguage';

// Set the locale before React renders to avoid a flash of the wrong language.
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try {
    const params = new URLSearchParams(window.location.search || '');
    const queryLanguage = params.get('lang');
    // Explicit choices take priority over the browser's ordered preferences.
    const language = isSupportedLanguage(queryLanguage)
      ? queryLanguage
      : getStoredLanguage() || getBrowserLanguage();
    applyLanguage(language);
  } catch {
    applyLanguage(DEFAULT_LANGUAGE);
  }
}
