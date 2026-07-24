import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import SearchMetadata from '@theme/SearchMetadata';
import BlogBrowseHeader from '@site/src/components/BlogBrowseHeader';
import BlogTagExplorer from '@site/src/components/BlogTagExplorer';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/BlogTagsListPage';

export default function BlogTagsListPage({tags, sidebar}: Props): ReactNode {
  const t = useUiText('blogPage');
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={t.tagsTitle} description={t.tagsSubtitle} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout sidebar={sidebar}>
        <BlogBrowseHeader activeMode="tags" />
        <BlogTagExplorer tags={tags} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
