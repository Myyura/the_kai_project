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

    try {
      var pathname = window.location.pathname || '';
      if (pathname === '/en' || pathname.indexOf('/en/') === 0) {
        localStorage.setItem('preferredLanguage', 'en');
        applyLanguage('en');
        return;
      }
      if (pathname === '/ja' || pathname.indexOf('/ja/') === 0) {
        localStorage.setItem('preferredLanguage', 'ja');
        applyLanguage('ja');
        return;
      }

      localStorage.setItem('preferredLanguage', 'zh');
      applyLanguage('zh');
    } catch (e) {
      applyLanguage('zh');
    }
  })();
}
