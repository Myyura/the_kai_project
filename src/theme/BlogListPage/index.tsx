import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/BlogListPage';
import styles from './styles.module.css';

function BlogListPageMetadata({metadata}: Props): ReactNode {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const title = permalink === '/' ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  const t = useUiText('blogPage');
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogLayout sidebar={sidebar}>
        <header className={styles.hero}>
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <small>{t.contentLanguage}</small>
        </header>
        <div className={styles.postList}>
          <BlogPostItems items={items} />
        </div>
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
