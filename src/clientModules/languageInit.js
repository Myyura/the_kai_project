import {DEFAULT_LANGUAGE, isSupportedLanguage} from '../i18n/config';
import {applyLanguage, getStoredLanguage} from '../i18n/browserLanguage';
import {buildLanguageUrl, getLegacyLocaleRoute} from '../i18n/languageUrl';

// Set the locale before React renders to avoid a flash of the wrong language.
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try {
    const params = new URLSearchParams(window.location.search || '');
    const legacyRoute = getLegacyLocaleRoute(window.location.pathname || '/');
    const queryLanguage = params.get('lang');
    const language = isSupportedLanguage(queryLanguage)
      ? queryLanguage
      : legacyRoute?.language || getStoredLanguage();
    applyLanguage(language);
    if (legacyRoute && window.history?.replaceState) {
      const {pathname, search, hash} = buildLanguageUrl(window.location, language);
      window.history.replaceState(window.history.state, document.title, pathname + search + hash);
    }
  } catch {
    applyLanguage(DEFAULT_LANGUAGE);
  }
}
