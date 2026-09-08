import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {FaArrowRight, FaTag} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import {
  getBlogTagDisplayName,
  getBlogTagSearchText,
} from '@site/src/utils/blogTags';
import styles from './styles.module.css';

export default function BlogTagExplorer({tags}) {
  const t = useUiText('blogPage');
  const framework = useUiText('framework');
  const [query, setQuery] = useState('');
  const search = query.trim().toLocaleLowerCase();
  const visibleTags = useMemo(
    () => [...tags]
      .filter((tag) => !search || getBlogTagSearchText(tag.label).includes(search))
      .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label, 'en')),
    [search, tags],
  );

  return (
    <section className={styles.explorer} aria-label={t.tagsTitle}>
      <div className={styles.toolbar}>
        <BrowseSearchField
          id="blog-tag-search"
          className={styles.searchField}
          value={query}
          onChange={setQuery}
          label={t.tagsSearchPlaceholder}
          resultsId="blog-tag-results"
        />
        <p className={styles.resultCount} role="status">
          {framework.tagsTitle} · {visibleTags.length} / {tags.length}
        </p>
      </div>

      <div id="blog-tag-results">
      {visibleTags.length > 0 ? (
        <div className={styles.tagGrid}>
          {visibleTags.map((tag) => (
            <Link key={tag.permalink} to={tag.permalink} className={styles.tagCard}>
              <span className={styles.tagIcon} aria-hidden="true">
                <FaTag />
              </span>
              <span className={styles.tagCopy}>
                <strong>{getBlogTagDisplayName(tag.label)}</strong>
                {getBlogTagDisplayName(tag.label) !== tag.label && <small>
                  <span>{t.rawTagLabel}</span>
                  <code>{tag.label}</code>
                </small>}
              </span>
              <span className={styles.tagMeta}>
                <span>{t.postsUnit(tag.count)}</span>
                <FaArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <BrowseEmptyState
          message={t.tagsNoResults}
          onReset={query ? () => setQuery('') : undefined}
          focusTargetId="blog-tag-search"
        />
      )}
      </div>
    </section>
  );
}
