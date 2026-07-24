import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import {useUiText} from '@site/src/i18n/useUiText';
import {getBlogTagDisplayName} from '@site/src/utils/blogTags';
import type {Props} from '@theme/BlogTagsPostsPage';
import styles from './styles.module.css';

export default function BlogTagsPostsPage({
  tag,
  items,
  sidebar,
  listMetadata,
}: Props): ReactNode {
  const t = useUiText('blogPage');
  const displayName = getBlogTagDisplayName(tag.label);
  const title = t.tagResultsTitle(tag.count, displayName);

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
      <BlogLayout sidebar={sidebar}>
        <ContentBrowseModes section="stories" activeMode="tags" />
        {tag.unlisted && <Unlisted />}
        <header className={styles.tagHeader}>
          <div className={styles.tagIdentity}>
            <span>{t.rawTagLabel}</span>
            <code>{tag.label}</code>
          </div>
          <Heading as="h1">{displayName}</Heading>
          {tag.description && <p>{tag.description}</p>}
          <div className={styles.tagActions}>
            <span>{t.postsUnit(tag.count)}</span>
            <Link to={tag.allTagsPath}>{t.allTags}</Link>
          </div>
        </header>
        <div className={styles.postList}>
          <BlogPostItems items={items} />
        </div>
        <BlogListPaginator metadata={listMetadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
