import {useSyncExternalStore} from 'react';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  getLanguageLocale,
  normalizeLanguage,
} from '@site/src/i18n/config';
import {applyLanguage} from '@site/src/i18n/browserLanguage';

export {LANGUAGE_OPTIONS, getLanguageLocale, normalizeLanguage};

// ─── 语言检测核心（单一来源） ────────────────────────────────

/**
 * 从 DOM data-lang 属性同步读取语言（SSR 安全）
 */
const getLanguage = () => {
  if (typeof document === 'undefined') return DEFAULT_LANGUAGE;
  return normalizeLanguage(document.documentElement.getAttribute('data-lang'));
};

/**
 * 切换语言：写 localStorage + 更新 DOM + 触发事件
 */
const setLanguage = (lang) => {
  if (typeof window === 'undefined') return;
  const nextLanguage = normalizeLanguage(lang);
  applyLanguage(nextLanguage);
  window.dispatchEvent(new CustomEvent('languageChange', { detail: nextLanguage }));
};

/**
 * 单例 observer + 订阅集合模式
 * 无论多少组件调用 useSyncExternalStore，始终只有 1 个 MutationObserver 和 1 个事件监听
 */
const languageSubscribers = new Set();
let singletonObserver = null;

const syncDocumentLocale = () => {
  if (typeof document === 'undefined') return;
  const expectedLocale = getLanguageLocale(getLanguage());
  if (document.documentElement.getAttribute('lang') !== expectedLocale) {
    document.documentElement.setAttribute('lang', expectedLocale);
  }
};

const notifySubscribers = () => {
  syncDocumentLocale();
  languageSubscribers.forEach((cb) => cb());
};

const startObserving = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.addEventListener('languageChange', notifySubscribers);
  singletonObserver = new MutationObserver(notifySubscribers);
  singletonObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-lang', 'lang'],
  });
  syncDocumentLocale();
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
 * 独立 hook：读取当前语言 + 提供切换函数
 * 使用与只读 hook 相同的外部 store
 *
 * @returns {[string, (nextLanguage: string) => void]} [language, setStoredLanguage]
 */
export const useStoredLanguage = () => [useCurrentLanguage(), setLanguage];

/**
 * 只读 hook：仅获取当前语言（不需要切换功能时使用）
 *
 * @returns {string} 当前语言 'zh' | 'ja' | 'en'
 */
export const useCurrentLanguage = () => {
  return useSyncExternalStore(
    subscribeToLanguage,
    getLanguage,
    () => DEFAULT_LANGUAGE
  );
};
