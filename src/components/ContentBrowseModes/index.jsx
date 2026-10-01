import React from 'react';
import Link from '@docusaurus/Link';
import {
  FaTags,
  FaUniversity,
} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const MODES = [
  {
    key: 'catalog',
    labelKey: 'examCatalogLabel',
    descriptionKey: 'examCatalogDescription',
    to: '/docs/intro',
    icon: FaUniversity,
  },
  {
    key: 'tags',
    labelKey: 'examTopicsLabel',
    descriptionKey: 'examTopicsDescription',
    to: '/docs/tags',
    icon: FaTags,
  },
];

export default function ContentBrowseModes({activeMode}) {
  const t = useUiText('contentBrowse');

  return (
    <nav className={styles.browseNav} aria-label={t.examsAria}>
      <span className={styles.browseLabel}>{t.browseLabel}</span>
      <div className={styles.modeGrid}>
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = mode.key === activeMode;
          return (
            <Link
              key={mode.key}
              to={mode.to}
              className={`${styles.modeLink} ${isActive ? styles.modeLinkActive : ''}`}
              aria-current={isActive ? 'page' : undefined}>
              <span className={styles.modeIcon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.modeCopy}>
                <strong>{t[mode.labelKey]}</strong>
                <small>{t[mode.descriptionKey]}</small>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
