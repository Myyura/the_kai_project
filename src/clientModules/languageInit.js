// 这个脚本会在客户端加载时立即同步执行
// 在任何 React 代码之前设置 data-lang 属性
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  (function() {
    try {
      var lang = localStorage.getItem('preferredLanguage');
      if (lang === 'zh' || lang === 'ja') {
        document.documentElement.setAttribute('data-lang', lang);
      } else {
        document.documentElement.setAttribute('data-lang', 'zh');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-lang', 'zh');
    }
  })();
}
