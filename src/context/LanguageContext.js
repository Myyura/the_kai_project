import React, { createContext, useContext, useCallback, useSyncExternalStore } from 'react';

// 定义翻译内容
// key 必须与 docusaurus.config.js 中的 label 完全一致
export const translations = {
  zh: {
    navbar: {
      '过去问': '过去问',
      '经验贴': '经验贴',
      'Tags': 'Tags',
      '参考链接': '参考链接',
      '进度': '进度',
      '登录': '登录',
      '法律声明': '法律声明',
      'GitHub': 'GitHub',
    },
    footer: {
      'Kai Project': 'Kai Project',
      '过去问': '过去问',
      '经验贴': '经验贴',
      'Tags': 'Tags',
      '参考链接': '参考链接',
      '法律声明': '法律声明',
      'Community': '社区',
      'QQ group: 925154731': 'QQ群: 925154731',
      'More': '更多',
      'GitHub': 'GitHub',
    }
  },
  ja: {
    navbar: {
      '过去问': '過去問',
      '经验贴': '合格体験記',
      'Tags': 'タグ',
      '参考链接': '参考リンク',
      '进度': '進捗',
      '登录': 'ログイン',
      '法律声明': '法的事項',
      'GitHub': 'GitHub',
    },
    footer: {
      'Kai Project': 'Kai Project',
      '过去问': '過去問',
      '经验贴': '合格体験記',
      'Tags': 'タグ',
      '参考链接': '参考リンク',
      '法律声明': '法的事項',
      'Community': 'コミュニティ',
      'QQ group: 925154731': 'QQグループ: 925154731',
      'More': 'その他',
      'GitHub': 'GitHub',
    }
  }
};

// ─── 语言检测核心（单一来源） ────────────────────────────────

/**
 * 从 DOM data-lang 属性同步读取语言（SSR 安全）
 */
export const getLanguage = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

/**
 * 切换语言：写 localStorage + 更新 DOM + 触发事件
 */
export const setLanguage = (lang) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.setAttribute('data-lang', lang);
  window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
};

/**
 * 单例 observer + 订阅集合模式
 * 无论多少组件调用 useSyncExternalStore，始终只有 1 个 MutationObserver 和 1 个事件监听
 */
const languageSubscribers = new Set();
let singletonObserver = null;

const notifySubscribers = () => {
  languageSubscribers.forEach((cb) => cb());
};

const startObserving = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.addEventListener('languageChange', notifySubscribers);
  singletonObserver = new MutationObserver(notifySubscribers);
  singletonObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-lang'],
  });
};

const stopObserving = () => {
  if (typeof window === 'undefined') return;
  window.removeEventListener('languageChange', notifySubscribers);
  if (singletonObserver) {
    singletonObserver.disconnect();
    singletonObserver = null;
  }
};

const subscribeToLanguage = (callback) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

  // 第一个订阅者加入时启动 observer
  if (languageSubscribers.size === 0) {
    startObserving();
  }
  languageSubscribers.add(callback);

  return () => {
    languageSubscribers.delete(callback);
    // 最后一个订阅者离开时停止 observer
    if (languageSubscribers.size === 0) {
      stopObserving();
    }
  };
};

// ─── 公共 Hooks ──────────────────────────────────────────────

/**
 * 独立 hook：读取当前语言 + 提供 toggle 函数
 * 不依赖 LanguageProvider，可在任何组件中使用
 *
 * @returns {[string, () => void]} [language, toggleLanguage]
 */
export const useStoredLanguage = () => {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguage,
    () => 'zh'
  );

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'zh' ? 'ja' : 'zh');
  }, [language]);

  return [language, toggleLanguage];
};

/**
 * 只读 hook：仅获取当前语言（不需要切换功能时使用）
 *
 * @returns {string} 当前语言 'zh' | 'ja'
 */
export const useCurrentLanguage = () => {
  return useSyncExternalStore(
    subscribeToLanguage,
    getLanguage,
    () => 'zh'
  );
};

// ─── Context-based API（用于 Navbar/Footer 等需要翻译函数的场景） ──

const LanguageContext = createContext({
  language: 'zh',
  setLanguage: () => {},
  t: (key, section = 'navbar') => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const language = useCurrentLanguage();

  // 翻译函数
  const t = useCallback((key, section = 'navbar') => {
    return translations[language]?.[section]?.[key] || key;
  }, [language]);

  const value = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
