import React from 'react';
import Link from '@docusaurus/Link';
import {
  FaListUl,
  FaTag,
  FaTags,
  FaUniversity,
} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const MODE_CONFIG = {
  exams: {
    ariaKey: 'examsAria',
    modes: [
      {
        key: 'catalog',
        labelKey: 'examCatalogLabel',
        descriptionKey: 'examCatalogDescription',
        to: '/docs/intro',
        icon: FaUniversity,
      },
      {
        key: 'tags',
        labelKey: 'examTagsLabel',
        descriptionKey: 'examTagsDescription',
        to: '/docs/tags',
        icon: FaTags,
      },
    ],
  },
  stories: {
    ariaKey: 'storiesAria',
    modes: [
      {
        key: 'list',
        labelKey: 'storyListLabel',
        descriptionKey: 'storyListDescription',
        to: '/blog',
        icon: FaListUl,
      },
      {
        key: 'tags',
        labelKey: 'storyTagsLabel',
        descriptionKey: 'storyTagsDescription',
        to: '/blog/tags',
        icon: FaTag,
      },
    ],
  },
};

export default function ContentBrowseModes({section, activeMode}) {
  const t = useUiText('contentBrowse');
  const config = MODE_CONFIG[section];

  return (
    <nav className={styles.browseNav} aria-label={t[config.ariaKey]}>
      <span className={styles.browseLabel}>{t.browseLabel}</span>
      <div className={styles.modeGrid}>
        {config.modes.map((mode) => {
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
