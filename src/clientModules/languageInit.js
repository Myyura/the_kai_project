import {DEFAULT_LANGUAGE, isSupportedLanguage} from '../i18n/config';
import {applyLanguage, getStoredLanguage} from '../i18n/browserLanguage';

// Set the locale before React renders to avoid a flash of the wrong language.
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try {
    const params = new URLSearchParams(window.location.search || '');
    const queryLanguage = params.get('lang');
    const language = isSupportedLanguage(queryLanguage)
      ? queryLanguage
      : getStoredLanguage();
    applyLanguage(language);
  } catch {
    applyLanguage(DEFAULT_LANGUAGE);
  }
}
