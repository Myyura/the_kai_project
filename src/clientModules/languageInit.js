// 这个脚本会在客户端加载时立即同步执行
// 在任何 React 代码之前设置 data-lang 属性
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  (function() {
    var locales = {
      zh: 'zh-CN',
      ja: 'ja-JP',
      en: 'en-US',
    };

    function normalizeLanguage(lang) {
      return locales[lang] ? lang : 'zh';
    }

    function applyLanguage(lang) {
      var nextLang = normalizeLanguage(lang);
      document.documentElement.setAttribute('data-lang', nextLang);
      document.documentElement.setAttribute('lang', locales[nextLang]);
    }

    function getLegacyLocaleRoute(pathname) {
      var currentPathname = pathname || '/';
      function trimTrailingSlash(value) {
        return value.length > 1 && value.charAt(value.length - 1) === '/' ? value.slice(0, -1) : value;
      }

      if (currentPathname === '/en' || currentPathname.indexOf('/en/') === 0) {
        return {
          language: 'en',
          canonicalPathname: trimTrailingSlash(currentPathname.slice(3) || '/'),
        };
      }
      if (currentPathname === '/ja' || currentPathname.indexOf('/ja/') === 0) {
        return {
          language: 'ja',
          canonicalPathname: trimTrailingSlash(currentPathname.slice(3) || '/'),
        };
      }
      return null;
    }

    function setPreferredLanguage(lang) {
      try {
        localStorage.setItem('preferredLanguage', normalizeLanguage(lang));
      } catch (e) {
        // Ignore storage failures in private browsing or blocked storage contexts.
      }
    }

    function getStoredLanguage() {
      try {
        return normalizeLanguage(localStorage.getItem('preferredLanguage'));
      } catch (e) {
        return 'zh';
      }
    }

    function getQueryLanguage(params) {
      var value = params.get('lang');
      return locales[value] ? value : null;
    }

    function normalizeLegacyLocaleUrl(route, language, params) {
      if (!route || !window.history || !window.history.replaceState) return;
      params.set('lang', normalizeLanguage(language));
      var search = params.toString();
      var nextUrl = route.canonicalPathname + (search ? '?' + search : '') + window.location.hash;
      window.history.replaceState(window.history.state, document.title, nextUrl);
    }

    try {
      var params = new URLSearchParams(window.location.search || '');
      var legacyRoute = getLegacyLocaleRoute(window.location.pathname || '/');
      var queryLanguage = getQueryLanguage(params);
      var nextLanguage = queryLanguage || (legacyRoute && legacyRoute.language) || getStoredLanguage();

      setPreferredLanguage(nextLanguage);
      applyLanguage(nextLanguage);
      normalizeLegacyLocaleUrl(legacyRoute, nextLanguage, params);
    } catch (e) {
      applyLanguage('zh');
    }
  })();
}
