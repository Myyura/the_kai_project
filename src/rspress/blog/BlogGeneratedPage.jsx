import React from 'react';
import {Head, usePage} from '@rspress/core/runtime';
import BlogBrowseHeader from '@site/src/components/BlogBrowseHeader';
import BlogTagExplorer from '@site/src/components/BlogTagExplorer';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import Link from '@site/src/rspress/Link';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import {getBlogTagDisplayName} from '@site/src/utils/blogTags';

import {
  BlogPostCard,
  formatDate,
} from './BlogChrome';
import styles from './blog.module.css';

export const frontmatter = {
  pageType: 'doc-wide',
  // Generated blog pages use the same native Rspress sidebar shell as an
  // individual post. The theme injects BlogSidebar for both page kinds.
  sidebar: true,
  outline: false,
  footer: false,
  hide_title: true,
  search: false,
};

function BlogPageLayout({children}) {
  return <div className={styles.blogMain}>{children}</div>;
}

function BlogIndex({data}) {
  const t = useUiText('blogPage');
  return (
    <BlogPageLayout>
      <BlogBrowseHeader activeMode="list" />
      <div className={styles.postList}>
        {data.posts.length
          ? data.posts.map((post) => <BlogPostCard key={post.routePath} post={post} />)
          : <p className={styles.emptyState}>{t.noPosts}</p>}
      </div>
    </BlogPageLayout>
  );
}

function BlogTags({data}) {
  return (
    <BlogPageLayout>
      <BlogBrowseHeader activeMode="tags" />
      <BlogTagExplorer tags={data.tags} />
    </BlogPageLayout>
  );
}

function BlogTag({data}) {
  const t = useUiText('blogPage');
  const displayName = getBlogTagDisplayName(data.tag.label);
  return (
    <BlogPageLayout>
      <ContentBrowseModes section="stories" activeMode="tags" />
      <header className={styles.tagHeader}>
        <div className={styles.tagIdentity}>
          <span>{t.rawTagLabel}</span>
          <code>{data.tag.label}</code>
        </div>
        <h1>{displayName}</h1>
        <div className={styles.tagActions}>
          <span>{t.postsUnit(data.tag.count)}</span>
          <Link to="/blog/tags">{t.allTags}</Link>
        </div>
      </header>
      <div className={styles.postList}>
        {data.posts.map((post) => <BlogPostCard key={post.routePath} post={post} />)}
      </div>
    </BlogPageLayout>
  );
}

function PageHeader({eyebrow, title, subtitle}) {
  return (
    <header className={styles.sectionHeader}>
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

function BlogArchive({data}) {
  const t = useUiText('blogPage');
  const language = useCurrentLanguage();
  return (
    <BlogPageLayout>
      <ContentBrowseModes section="stories" activeMode="list" />
      <PageHeader eyebrow={t.eyebrow} title={t.archiveTitle} subtitle={t.archiveSubtitle} />
      <div className={styles.archiveYears}>
        {data.years.map(({year, posts}) => (
          <section key={year} className={styles.archiveYear}>
            <h2>{year}</h2>
            <ul>
              {posts.map((post) => (
                <li key={post.routePath}>
                  <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                  <Link to={post.routePath}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </BlogPageLayout>
  );
}

function BlogAuthors({data}) {
  const t = useUiText('blogPage');
  const language = useCurrentLanguage();
  return (
    <BlogPageLayout>
      <ContentBrowseModes section="stories" activeMode="list" />
      <PageHeader eyebrow={t.eyebrow} title={t.authorsTitle} subtitle={t.authorsSubtitle} />
      <div className={styles.authorGrid}>
        {data.authors.map((author) => (
          <section key={author.id} id={`author-${author.id}`} className={styles.authorCard}>
            <h2>{author.name}</h2>
            {author.title ? <p>{author.title}</p> : null}
            <h3>{t.postsByAuthor(author.posts.length)}</h3>
            <ul>
              {author.posts.map((post) => (
                <li key={post.routePath}>
                  <Link to={post.routePath}>{post.title}</Link>
                  <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </BlogPageLayout>
  );
}

function pageMetadata(data, t) {
  if (data.kind === 'blog-index') return [t.title, t.subtitle];
  if (data.kind === 'blog-tags') return [t.tagsTitle, t.tagsSubtitle];
  if (data.kind === 'blog-tag') {
    const displayName = getBlogTagDisplayName(data.tag.label);
    return [t.tagResultsTitle(data.tag.count, displayName), t.tagsSubtitle];
  }
  if (data.kind === 'blog-archive') return [t.archiveTitle, t.archiveSubtitle];
  if (data.kind === 'blog-authors') return [t.authorsTitle, t.authorsSubtitle];
  return [data.title, t.subtitle];
}

export default function BlogGeneratedPage() {
  const {page} = usePage();
  const data = page.generatedIndex;
  const t = useUiText('blogPage');
  if (!data) return null;

  const [title, description] = pageMetadata(data, t);
  let content = null;
  if (data.kind === 'blog-index') content = <BlogIndex data={data} />;
  if (data.kind === 'blog-tags') content = <BlogTags data={data} />;
  if (data.kind === 'blog-tag') content = <BlogTag data={data} />;
  if (data.kind === 'blog-archive') content = <BlogArchive data={data} />;
  if (data.kind === 'blog-authors') content = <BlogAuthors data={data} />;

  return (
    <>
      <Head>
        <title>{`${title} | The Kai Project`}</title>
        <meta name="description" content={description} />
      </Head>
      {content}
    </>
  );
}
