import React from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {LANGUAGE_OPTIONS, useStoredLanguage} from '@site/src/context/LanguageContext';

const stripLocalePrefix = (pathname) => {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return pathname.slice(3) || '/';
  }
  if (pathname === '/ja' || pathname.startsWith('/ja/')) {
    return pathname.slice(3) || '/';
  }
  return pathname || '/';
};

const getLocalizedPath = (pathname, language) => {
  const basePath = stripLocalePrefix(pathname);
  if (language === 'en') {
    return `/en${basePath === '/' ? '/' : basePath}`;
  }
  if (language === 'ja') {
    return `/ja${basePath === '/' ? '/' : basePath}`;
  }
  return basePath;
};

export default function LanguageSwitcher({
  className,
  buttonClassName,
  activeButtonClassName,
  dividerClassName,
}) {
  const [language, setLanguage] = useStoredLanguage();
  const location = useLocation();

  const switchLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    const nextPath = getLocalizedPath(location.pathname, nextLanguage);
    const nextUrl = `${nextPath}${location.search || ''}${location.hash || ''}`;
    const currentUrl = `${location.pathname}${location.search || ''}${location.hash || ''}`;
    if (nextUrl !== currentUrl && typeof window !== 'undefined') {
      window.location.assign(nextUrl);
    }
  };

  return (
    <div className={className}>
      {LANGUAGE_OPTIONS.map((option, index) => (
        <React.Fragment key={option.code}>
          {index > 0 && <span className={dividerClassName}>/</span>}
          <button
            type="button"
            onClick={() => language !== option.code && switchLanguage(option.code)}
            className={clsx(buttonClassName, language === option.code && activeButtonClassName)}
          >
            {option.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
