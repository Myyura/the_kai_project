// 这个脚本会在客户端加载时立即同步执行
// 在任何 React 代码之前设置 data-lang 属性
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  (function() {
    var locales = {
      zh: 'zh-CN',
      ja: 'ja-JP',
      en: 'en-US',
    };

    function applyLanguage(lang) {
      var nextLang = locales[lang] ? lang : 'zh';
      document.documentElement.setAttribute('data-lang', nextLang);
      document.documentElement.setAttribute('lang', locales[nextLang]);
    }

    function getLocalizedRoute(pathname) {
      var currentPathname = pathname || '/';
      function trimTrailingSlash(value) {
        return value.length > 1 && value.charAt(value.length - 1) === '/' ? value.slice(0, -1) : value;
      }

      if (currentPathname === '/en' || currentPathname.indexOf('/en/') === 0) {
        return {
          language: 'en',
          prefix: '/en',
          canonicalPathname: trimTrailingSlash(currentPathname.slice(3) || '/'),
        };
      }
      if (currentPathname === '/ja' || currentPathname.indexOf('/ja/') === 0) {
        return {
          language: 'ja',
          prefix: '/ja',
          canonicalPathname: trimTrailingSlash(currentPathname.slice(3) || '/'),
        };
      }
      return {
        language: 'zh',
        prefix: '',
        canonicalPathname: trimTrailingSlash(currentPathname),
      };
    }

    function setPreferredLanguage(lang) {
      try {
        localStorage.setItem('preferredLanguage', lang);
      } catch (e) {
        // Ignore storage failures in private browsing or blocked storage contexts.
      }
    }

    function installLocaleUrlShim(route) {
      if (!route.prefix || window.__KAI_LOCALE_ROUTING_INSTALLED__) return;
      if (!window.history || !window.history.pushState || !window.history.replaceState) return;

      window.__KAI_LOCALE_ROUTING_INSTALLED__ = true;
      window.__KAI_LOCALE_PREFIX__ = route.prefix;

      var nativePushState = window.history.pushState.bind(window.history);
      var nativeReplaceState = window.history.replaceState.bind(window.history);

      function stripLocalePrefix(pathname) {
        var localizedRoute = getLocalizedRoute(pathname);
        return localizedRoute.prefix ? localizedRoute.canonicalPathname : pathname;
      }

      function currentCanonicalUrl() {
        return stripLocalePrefix(window.location.pathname) + window.location.search + window.location.hash;
      }

      function currentLocalizedUrl() {
        var activePrefix = window.__KAI_LOCALE_PREFIX__ || route.prefix;
        var pathname = window.location.pathname || '/';
        if (pathname === activePrefix || pathname.indexOf(activePrefix + '/') === 0) {
          return pathname + window.location.search + window.location.hash;
        }
        return activePrefix + (pathname === '/' ? '/' : pathname) + window.location.search + window.location.hash;
      }

      function canonicalizeForRouter() {
        var localizedRoute = getLocalizedRoute(window.location.pathname || '/');
        if (!localizedRoute.prefix) return;
        window.__KAI_LOCALE_PREFIX__ = localizedRoute.prefix;
        setPreferredLanguage(localizedRoute.language);
        applyLanguage(localizedRoute.language);
        nativeReplaceState(window.history.state, document.title, currentCanonicalUrl());
      }

      function showLocalizedUrl() {
        if (!window.__KAI_LOCALE_PREFIX__) return;
        nativeReplaceState(window.history.state, document.title, currentLocalizedUrl());
      }

      function showLocalizedUrlAfterHydration() {
        if (document.documentElement.getAttribute('data-has-hydrated') === 'true') {
          window.requestAnimationFrame(showLocalizedUrl);
          return;
        }

        var observer = new MutationObserver(function() {
          if (document.documentElement.getAttribute('data-has-hydrated') === 'true') {
            observer.disconnect();
            window.requestAnimationFrame(showLocalizedUrl);
          }
        });
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['data-has-hydrated'],
        });
      }

      function prefixHistoryUrl(url) {
        if (typeof url === 'undefined' || url === null || !window.__KAI_LOCALE_PREFIX__) {
          return url;
        }

        var parsedUrl;
        try {
          parsedUrl = new URL(String(url), window.location.href);
        } catch (e) {
          return url;
        }

        if (parsedUrl.origin !== window.location.origin) {
          return url;
        }

        var localizedRoute = getLocalizedRoute(parsedUrl.pathname);
        if (localizedRoute.prefix) {
          return parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
        }

        return window.__KAI_LOCALE_PREFIX__ +
          (parsedUrl.pathname === '/' ? '/' : parsedUrl.pathname) +
          parsedUrl.search +
          parsedUrl.hash;
      }

      window.history.pushState = function(state, title, url) {
        return nativePushState(state, title, prefixHistoryUrl(url));
      };

      window.history.replaceState = function(state, title, url) {
        return nativeReplaceState(state, title, prefixHistoryUrl(url));
      };

      window.addEventListener('popstate', function() {
        var localizedRoute = getLocalizedRoute(window.location.pathname || '/');
        window.__KAI_LOCALE_PREFIX__ = localizedRoute.prefix;
        setPreferredLanguage(localizedRoute.language);
        applyLanguage(localizedRoute.language);
        canonicalizeForRouter();
        window.requestAnimationFrame(showLocalizedUrl);
      }, true);

      canonicalizeForRouter();
      showLocalizedUrlAfterHydration();
    }

    try {
      var route = getLocalizedRoute(window.location.pathname || '/');
      setPreferredLanguage(route.language);
      applyLanguage(route.language);
      installLocaleUrlShim(route);
    } catch (e) {
      applyLanguage('zh');
    }
  })();
}
