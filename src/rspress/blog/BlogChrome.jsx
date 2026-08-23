import React from 'react';
import Link from '@site/src/rspress/Link';
import {
  getLanguageLocale,
  useCurrentLanguage,
} from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import {getBlogTagDisplayName} from '@site/src/utils/blogTags';

import styles from './blog.module.css';

function canonicalRoute(routePath) {
  const normalized = String(routePath || '/').replace(/\/+$/, '');
  return normalized || '/';
}

function formatDate(date, language) {
  if (!date) return '';
  return new Intl.DateTimeFormat(getLanguageLocale(language), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function PostMeta({post}) {
  const t = useUiText('blogPage');
  const language = useCurrentLanguage();
  return (
    <div className={styles.postMeta}>
      <time dateTime={post.date}>{formatDate(post.date, language)}</time>
      <span aria-hidden="true">·</span>
      <span>{t.readingTime(post.readingMinutes)}</span>
    </div>
  );
}

function AuthorList({authors = []}) {
  if (!authors.length) return null;
  return (
    <div className={styles.authors}>
      {authors.map((author, index) => (
        <span className={styles.author} key={`${author.name || 'author'}:${index}`}>
          <span className={styles.authorAvatar} aria-hidden="true">
            {Array.from(author.name || '?')[0].toLocaleUpperCase()}
          </span>
          <span className={styles.authorCopy}>
            <strong>{author.name}</strong>
            {author.title ? <small>{author.title}</small> : null}
          </span>
        </span>
      ))}
    </div>
  );
}

export function BlogTagLinks({tags = []}) {
  if (!tags.length) return null;
  return (
    <div className={styles.tagList}>
      {tags.map((tag) => (
        <Link key={tag.permalink} to={tag.permalink} className={styles.tagLink}>
          {getBlogTagDisplayName(tag.label)}
        </Link>
      ))}
    </div>
  );
}

export function BlogPostCard({post}) {
  const t = useUiText('blogPage');
  return (
    <article className={styles.postCard}>
      <header>
        <h2 className={styles.postCardTitle}>
          <Link to={post.routePath}>{post.title}</Link>
        </h2>
        <PostMeta post={post} />
        <AuthorList authors={post.authors} />
      </header>
      {post.excerpt ? <p className={styles.excerpt}>{post.excerpt}</p> : null}
      <footer className={styles.cardFooter}>
        <BlogTagLinks tags={post.tags} />
        <Link to={post.routePath} className={styles.readMore}>
          {t.readMore}<span aria-hidden="true"> →</span>
        </Link>
      </footer>
    </article>
  );
}

export function BlogSidebar({posts = [], activeRoute, embedded = false}) {
  const t = useUiText('blogPage');
  const currentRoute = canonicalRoute(activeRoute);
  const SidebarRoot = embedded ? 'div' : 'aside';
  const browseLinks = [
    ['/blog', t.allPosts],
    ['/blog/archive', t.archiveTitle],
    ['/blog/authors', t.authorsTitle],
    ['/blog/tags', t.tagsNavTitle],
  ];

  return (
    <SidebarRoot className={`${styles.sidebar} ${embedded ? styles.sidebarEmbedded : ''}`}>
      <nav aria-label={t.sidebarAria}>
        <div className={styles.sidebarSection}>
          <h2>{t.browseTitle}</h2>
          <ul className={styles.browseLinks}>
            {browseLinks.map(([href, label]) => (
              <li key={href}>
                <Link
                  to={href}
                  aria-current={currentRoute === href ? 'page' : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <h2>{t.sidebarTitle}</h2>
          <ul className={styles.sidebarPosts}>
            {posts.map((post) => (
              <li key={post.routePath}>
                <Link
                  to={post.routePath}
                  aria-current={currentRoute === post.routePath ? 'page' : undefined}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </SidebarRoot>
  );
}

export function BlogPostHeader({post}) {
  const t = useUiText('blogPage');
  return (
    <header className={styles.postHeader}>
      <span className={styles.postEyebrow}>{t.eyebrow}</span>
      <h1>{post.title}</h1>
      <PostMeta post={post} />
      <AuthorList authors={post.authors} />
      <BlogTagLinks tags={post.tags} />
    </header>
  );
}

function PaginatorLink({item, label, align}) {
  if (!item) return <span />;
  return (
    <Link to={item.routePath} className={`${styles.paginatorLink} ${styles[align]}`}>
      <small>{label}</small>
      <strong>{item.title}</strong>
    </Link>
  );
}

export function BlogPostFooter({post}) {
  const t = useUiText('blogPage');
  return (
    <footer className={styles.postFooter}>
      <BlogTagLinks tags={post.tags} />
      {(post.previous || post.next) ? (
        <nav className={styles.paginator} aria-label={t.postNavigation}>
          <PaginatorLink item={post.previous} label={t.previousPost} align="previous" />
          <PaginatorLink item={post.next} label={t.nextPost} align="next" />
        </nav>
      ) : null}
    </footer>
  );
}

export {formatDate};
