import React, { createContext, useContext, useState, useEffect, useCallback, useSyncExternalStore } from 'react';

// 定义翻译内容
// key 必须与 docusaurus.config.js 中的 label 完全一致
export const translations = {
  zh: {
    navbar: {
      '过去问': '过去问',
      '经验贴': '经验贴',
      'Tags': 'Tags',
      '参考链接': '参考链接',
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

// 从 DOM 属性读取语言（由 Root.js 中的同步脚本设置）
const getLanguageFromDOM = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

// 订阅语言变化
const subscribeToLanguage = (callback) => {
  window.addEventListener('languageChange', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('languageChange', callback);
    window.removeEventListener('storage', callback);
  };
};

const LanguageContext = createContext({
  language: 'zh',
  setLanguage: () => {},
  t: (key, section = 'navbar') => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // 使用 useSyncExternalStore 来同步读取语言，避免 hydration 不匹配
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageFromDOM,  // 客户端
    () => 'zh'           // SSR 服务端始终返回 'zh'
  );

  const setLanguage = useCallback((lang) => {
    if (typeof window !== 'undefined') {
      // 更新 localStorage
      localStorage.setItem('preferredLanguage', lang);
      // 更新 DOM 属性
      document.documentElement.setAttribute('data-lang', lang);
      // 触发自定义事件通知其他组件
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }
  }, []);

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
