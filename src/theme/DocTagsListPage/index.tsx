import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import TagsListByLetter from '@theme/TagsListByLetter';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/DocTagsListPage';
import styles from './styles.module.css';

export default function DocTagsListPage({tags}: Props): ReactNode {
  const t = useUiText('tagsList');
  return (
    <>
      <PageMetadata title={t.pageTitle} />
      <SearchMetadata tag="doc_tags_list" />
      <HtmlClassNameProvider
        className={clsx(ThemeClassNames.page.docsTagsListPage)}>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--10 col--offset-1">
              <header className={styles.pageHeader}>
                <span>{t.eyebrow}</span>
                <Heading as="h1">{t.pageTitle}</Heading>
                <p>{t.pageSubtitle}</p>
              </header>
              <ContentBrowseModes section="exams" activeMode="tags" />
              <TagsListByLetter tags={tags} />
            </main>
          </div>
        </div>
      </HtmlClassNameProvider>
    </>
  );
}
