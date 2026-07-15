import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  FaBookOpen,
  FaBriefcase,
  FaExternalLinkAlt,
  FaSearch,
} from 'react-icons/fa';
import { useCurrentLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useUiText } from '../i18n/useUiText';
import styles from './links.module.css';
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
    { key: 'all', label: pageCopy.filterAll },
    { key: 'study', label: pageCopy.filterStudy },
    { key: 'career', label: pageCopy.filterCareer },
  ];

  return (
    <Layout title={pageCopy.title} description={pageCopy.subtitle}>
      <main className={styles.linksPage}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{pageCopy.eyebrow}</span>
            <h1>{pageCopy.heading}</h1>
            <p>{pageCopy.subtitle}</p>
            <div className={styles.heroActions}>
              <a href="#resources" className={styles.primaryAction}>{pageCopy.exploreResources}</a>
            </div>
          </div>
          <div className={styles.heroSide}>
            <LanguageSwitcher
              className={styles.langSwitch}
              buttonClassName={styles.langBtn}
              activeButtonClassName={styles.langBtnActive}
              dividerClassName={styles.langDivider}
            />
            <div className={styles.heroStats}>
              <div>
                <strong>{linkContent.links.length}</strong>
                <span>{pageCopy.studyStat}</span>
              </div>
              <div>
                <strong>{linkContent.jobLinks.length}</strong>
                <span>{pageCopy.careerStat}</span>
              </div>
              <div>
                <strong>{resources.length}</strong>
                <span>{pageCopy.resourcesStat}</span>
              </div>
            </div>
            <p className={styles.heroNote}>{pageCopy.heroNote}</p>
          </div>
        </section>

        <section id="resources" className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>{pageCopy.resourcesEyebrow}</span>
              <h2>{pageCopy.resourcesTitle}</h2>
              <p>{pageCopy.resourcesSubtitle}</p>
            </div>
            <span className={styles.resultCount}>{pageCopy.resultCount(filteredResources.length)}</span>
          </div>

          <div className={styles.resourceToolbar}>
            <label className={styles.searchBox}>
              <FaSearch aria-hidden="true" />
              <span className="sr-only">{pageCopy.searchLabel}</span>
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder={pageCopy.searchPlaceholder}
              />
            </label>
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
                </button>
              ))}
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className={styles.resourcesGrid}>
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.url} resource={resource} pageCopy={pageCopy} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <FaSearch aria-hidden="true" />
              <strong>{pageCopy.noResults}</strong>
              <button
                type="button"
                onClick={() => {
                  setSearchText('');
                  setActiveCategory('all');
                }}
              >
                {pageCopy.clearFilters}
              </button>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
