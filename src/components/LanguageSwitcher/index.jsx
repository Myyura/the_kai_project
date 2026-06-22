import React from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from '@docusaurus/router';
import {LANGUAGE_OPTIONS, useStoredLanguage} from '@site/src/context/LanguageContext';
import styles from './styles.module.css';

const stripLegacyLocalePrefix = (pathname) => {
  const trimTrailingSlash = (value) => (
    value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value
  );

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return trimTrailingSlash(pathname.slice(3) || '/');
  }
  if (pathname === '/ja' || pathname.startsWith('/ja/')) {
    return trimTrailingSlash(pathname.slice(3) || '/');
  }
  return trimTrailingSlash(pathname || '/');
};

const buildLanguageUrl = (location, language) => {
  const params = new URLSearchParams(location.search || '');
  params.set('lang', language);
  const search = params.toString();
  return {
    pathname: stripLegacyLocalePrefix(location.pathname),
    search: search ? `?${search}` : '',
    hash: location.hash || '',
  };
};

export default function LanguageSwitcher({
  className,
  buttonClassName,
  activeButtonClassName,
  dividerClassName,
}) {
  const [language, setLanguage] = useStoredLanguage();
  const history = useHistory();
  const location = useLocation();

  const switchLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    history.replace(buildLanguageUrl(location, nextLanguage));
  };

  return (
    <div className={clsx(styles.switcher, className)}>
      {LANGUAGE_OPTIONS.map((option, index) => (
        <React.Fragment key={option.code}>
          {index > 0 && <span className={clsx(styles.divider, dividerClassName)}>/</span>}
          <button
            type="button"
            onClick={() => language !== option.code && switchLanguage(option.code)}
            className={clsx(
              styles.button,
              buttonClassName,
              language === option.code && styles.buttonActive,
              language === option.code && activeButtonClassName,
            )}
          >
            {option.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
