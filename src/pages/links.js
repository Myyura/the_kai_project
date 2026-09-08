import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  FaBookOpen,
  FaBriefcase,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useCurrentLanguage } from '../context/LanguageContext';
import { useUiText } from '../i18n/useUiText';
import styles from './links.module.css';
import BrowseSearchField from '../components/BrowseSearchField';
import BrowseEmptyState from '../components/BrowseEmptyState';
import content from '../data/links.json';

function safeHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function isAllowedHost(host, allowedHost) {
  return host === allowedHost || host.endsWith(`.${allowedHost}`);
}

const sourceHostRules = [
  { source: 'GitHub', hosts: ['github.com'] },
  { source: 'YouTube', hosts: ['youtube.com', 'youtu.be'] },
  { source: 'Zhihu', hosts: ['zhihu.com'] },
  { source: 'Xiaohongshu', hosts: ['xiaohongshu.com', 'xhslink.com'] },
  { source: 'Qiita', hosts: ['qiita.com'] },
  { source: 'Google', hosts: ['sites.google.com'] },
  { source: 'Hatena', hosts: ['hatenablog.jp', 'hatenadiary.jp'] },
  { source: 'Mathlog', hosts: ['mathlog.info'] },
];

function detectSource(url) {
  const host = safeHostname(url).toLowerCase();
  if (!host) return 'Other';
  const rule = sourceHostRules.find((item) => (
    item.hosts.some((allowedHost) => isAllowedHost(host, allowedHost))
  ));
  return rule?.source || 'Web';
}

const ResourceCard = React.memo(function ResourceCard({ resource, pageCopy }) {
  const host = safeHostname(resource.url);
  const source = detectSource(resource.url);
  const CategoryIcon = resource.category === 'career' ? FaBriefcase : FaBookOpen;

  return (
    <a
      className={clsx(styles.resourceCard, resource.category === 'career' && styles.careerCard)}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.resourceCardTop}>
        <span className={styles.resourceIcon} aria-hidden="true"><CategoryIcon /></span>
        <span className={styles.sourceTag}>{source}</span>
      </div>
      <h3>{resource.name}</h3>
      <p>{resource.desc || pageCopy.noDescription}</p>
      <div className={styles.resourceCardFooter}>
        <span>{host}</span>
        <FaExternalLinkAlt aria-hidden="true" />
      </div>
    </a>
  );
});

export default function Links() {
  const language = useCurrentLanguage();
  const pageCopy = useUiText('linksPage');
  const linkContent = content[language] || content.zh;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchText, setSearchText] = useState('');

  const resources = useMemo(() => [
    ...linkContent.links.map((item) => ({ ...item, category: 'study' })),
    ...linkContent.jobLinks.map((item) => ({ ...item, category: 'career' })),
  ], [linkContent]);

  const filteredResources = useMemo(() => {
    const query = searchText.trim().toLocaleLowerCase();
    return resources.filter((resource) => {
      if (activeCategory !== 'all' && resource.category !== activeCategory) return false;
      if (!query) return true;
      return [resource.name, resource.desc, safeHostname(resource.url), detectSource(resource.url)]
        .some((value) => String(value || '').toLocaleLowerCase().includes(query));
    });
  }, [activeCategory, resources, searchText]);

  const categoryOptions = [
    { key: 'all', label: pageCopy.filterAll, count: resources.length },
    { key: 'study', label: pageCopy.filterStudy, count: linkContent.links.length },
    { key: 'career', label: pageCopy.filterCareer, count: linkContent.jobLinks.length },
  ];

  return (
    <Layout title={pageCopy.title} description={pageCopy.subtitle}>
      <main className={styles.linksPage}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>{pageCopy.eyebrow}</span>
          <h1>{pageCopy.heading}</h1>
          <p>{pageCopy.subtitle}</p>
        </section>

        <section id="resources" className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>{pageCopy.resourcesEyebrow}</span>
              <h2>{pageCopy.resourcesTitle}</h2>
              <p>{pageCopy.resourcesSubtitle}</p>
            </div>
            <span className={styles.resultCount} role="status" aria-live="polite">{pageCopy.resultCount(filteredResources.length)}</span>
          </div>

          <div className={styles.resourceToolbar}>
            <BrowseSearchField
              id="resource-search"
              className={styles.searchBox}
              label={pageCopy.searchLabel}
              placeholder={pageCopy.searchPlaceholder}
              value={searchText}
              onChange={setSearchText}
              resultsId="resource-results"
            />
            <div className={styles.categoryTabs} role="group" aria-label={pageCopy.categoryLabel}>
              {categoryOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={activeCategory === option.key ? styles.activeCategory : ''}
                  aria-pressed={activeCategory === option.key}
                  onClick={() => setActiveCategory(option.key)}
                >
                  {option.label}
                  <span className={styles.categoryCount}>{option.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="resource-results">
          {filteredResources.length > 0 ? (
            <div className={styles.resourcesGrid}>
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.url} resource={resource} pageCopy={pageCopy} />
              ))}
            </div>
          ) : (
            <BrowseEmptyState
              focusTargetId="resource-search"
              message={pageCopy.noResults}
              resetLabel={pageCopy.clearFilters}
              onReset={() => {
                setSearchText('');
                setActiveCategory('all');
              }}
            />
          )}
          </div>
          <p className={styles.sourceNote}>{pageCopy.heroNote}</p>
        </section>
      </main>
    </Layout>
  );
}
