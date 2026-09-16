import React from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from '@docusaurus/router';
import {LANGUAGE_OPTIONS, useStoredLanguage} from '@site/src/context/LanguageContext';
import {buildLanguageUrl} from '@site/src/i18n/languageUrl';
import styles from './styles.module.css';

export default function LanguageSwitcher({
  className,
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
          {index > 0 && <span className={styles.divider} aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => language !== option.code && switchLanguage(option.code)}
            aria-pressed={language === option.code}
            aria-label={option.label}
            lang={option.locale}
            className={clsx(
              styles.button,
              language === option.code && styles.buttonActive,
            )}
          >
            {option.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
