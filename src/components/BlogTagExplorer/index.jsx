import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {FaArrowRight, FaSearch, FaTag} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import {
  getBlogTagDisplayName,
  getBlogTagSearchText,
} from '@site/src/utils/blogTags';
import styles from './styles.module.css';

export default function BlogTagExplorer({tags}) {
  const t = useUiText('blogPage');
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
      <label className={styles.searchField}>
        <FaSearch aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.tagsSearchPlaceholder}
          aria-label={t.tagsSearchPlaceholder}
        />
      </label>

      {visibleTags.length > 0 ? (
        <div className={styles.tagGrid}>
          {visibleTags.map((tag) => (
            <Link key={tag.permalink} to={tag.permalink} className={styles.tagCard}>
              <span className={styles.tagIcon} aria-hidden="true">
                <FaTag />
              </span>
              <span className={styles.tagCopy}>
                <strong>{getBlogTagDisplayName(tag.label)}</strong>
                <small>
                  <span>{t.rawTagLabel}</span>
                  <code>{tag.label}</code>
                </small>
              </span>
              <span className={styles.tagMeta}>
                <span>{t.postsUnit(tag.count)}</span>
                <FaArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>{t.tagsNoResults}</p>
      )}
    </section>
  );
}
