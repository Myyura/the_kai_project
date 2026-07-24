import React from 'react';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

export default function BlogBrowseHeader({activeMode}) {
  const t = useUiText('blogPage');
  const isTagView = activeMode === 'tags';

  return (
    <>
      <header className={styles.hero}>
        <span>{t.eyebrow}</span>
        <h1>{isTagView ? t.tagsTitle : t.title}</h1>
        <p>{isTagView ? t.tagsSubtitle : t.subtitle}</p>
        {!isTagView && <small>{t.contentLanguage}</small>}
      </header>
      <ContentBrowseModes section="stories" activeMode={activeMode} />
    </>
  );
}
