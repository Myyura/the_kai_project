export const DEFAULT_LANGUAGE = 'zh';

export const LANGUAGE_OPTIONS = [
  { code: 'zh', label: '中文', locale: 'zh-CN' },
  { code: 'ja', label: '日本語', locale: 'ja-JP' },
  { code: 'en', label: 'English', locale: 'en-US' },
];

const SUPPORTED_LANGUAGE_CODES = new Set(LANGUAGE_OPTIONS.map((item) => item.code));

export const normalizeLanguage = (language) =>
  SUPPORTED_LANGUAGE_CODES.has(language) ? language : DEFAULT_LANGUAGE;

export const getLanguageLocale = (language) =>
  LANGUAGE_OPTIONS.find((item) => item.code === normalizeLanguage(language))?.locale || 'zh-CN';
