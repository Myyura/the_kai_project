import {useDeferredValue, useEffect, useMemo, useState} from 'react';
import {Head, Link, usePage} from '@rspress/core/runtime';

import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import {useUiText} from '@site/src/i18n/useUiText';
import {
  getSubsubjectShortId,
  getTopicShortId,
  humanizeTagShortId,
  resolveTagBrowseTarget,
} from '@site/src/utils/tagBrowseTarget';
import styles from './GeneratedIndexPage.module.css';

export const frontmatter = {
  pageType: 'doc-wide',
  sidebar: false,
  outline: false,
  footer: false,
  search: false,
};

function IndexLink({entry}) {
  const [label, href, meta, children = []] = entry;
  const content = (
    <>
      <span className={styles.indexCardTitle}>{label}</span>
      {meta ? <span className={styles.indexCardMeta}>{meta}</span> : null}
      {href ? <span className={styles.indexCardArrow} aria-hidden="true">→</span> : null}
    </>
  );
  return (
    <article className={styles.indexCard}>
      {href ? (
        <Link to={href} className={styles.indexCardMain}>{content}</Link>
      ) : <div className={styles.indexCardMain}>{content}</div>}
      {children.length ? (
        <div className={styles.indexCardChildren}>
          {children.map((child) => (
            child[1] ? (
              <Link
                key={`${child[1]}:${child[0]}`}
                to={child[1]}
                className={styles.indexChildLink}>
                <span>{child[0]}</span>
                {child[2] ? <span>{child[2]}</span> : null}
              </Link>
            ) : (
              <span
                key={`label:${child[0]}`}
                className={styles.indexChildLink}>
                <span>{child[0]}</span>
                {child[2] ? <span>{child[2]}</span> : null}
              </span>
            )
          ))}
        </div>
      ) : null}
    </article>
  );
}

function IndexSection({section, index}) {
  const [title, anchor, entries] = section;
  if (!title && !entries?.length) return null;
  return (
    <section id={anchor || undefined} className={styles.indexSection}>
      {title ? (
        <div className={styles.sectionHeadingRow}>
          <h2 className={styles.sectionHeading}>{title}</h2>
          {entries?.length ? (
            <span className={styles.sectionCount}>{entries.length}</span>
          ) : null}
        </div>
      ) : null}
      {entries?.length ? (
        <div className={styles.indexGrid}>
          {entries.map((entry) => (
            <IndexLink key={`${entry[1] || index}:${entry[0]}`} entry={entry} />
          ))}
        </div>
      ) : <p className={styles.emptyState}>暂无相关内容。</p>}
    </section>
  );
}

function normalizeSearchText(value) {
  return String(value || '').normalize('NFKC').toLocaleLowerCase();
}

const createTagLookup = (entries) => new Map(
  Object.entries(entries || {}).map(([id, meta]) => [
    resolveTagBrowseTarget(id).href,
    {id, meta},
  ]),
);

const SCHOOL_BY_HREF = createTagLookup(tagTaxonomy.schoolTags);
const SUBSUBJECT_BY_HREF = createTagLookup(tagTaxonomy.subsubjects);
const TOPIC_BY_HREF = createTagLookup(tagTaxonomy.topics);
const SCHOOL_BY_UNIVERSITY_ID = new Map(
  Object.entries(tagTaxonomy.schoolTags || {}).flatMap(([id, meta]) => {
    const info = {id, meta};
    return [meta.universityId, ...(meta.aliases || [])]
      .filter(Boolean)
      .map((value) => [normalizeSearchText(value), info]);
  }),
);

function localizedTaxonomyLabel(meta, fallback, language) {
  if (language === 'en') {
    return meta?.labelEn || humanizeTagShortId(fallback);
  }
  if (language === 'ja') {
    return meta?.labelJa || meta?.label || meta?.labelZh || humanizeTagShortId(fallback);
  }
  return meta?.labelZh || meta?.label || meta?.labelJa || humanizeTagShortId(fallback);
}

function taxonomySearchValues(info, fallback = '') {
  if (!info) return [fallback];
  const {id, meta = {}} = info;
  return [
    fallback,
    id,
    getSubsubjectShortId(id),
    getTopicShortId(id),
    meta.label,
    meta.labelZh,
    meta.labelJa,
    meta.labelEn,
    meta.universityId,
    ...(meta.aliases || []),
  ];
}

function entryTaxonomyInfo(href) {
  return SCHOOL_BY_HREF.get(href)
    || SUBSUBJECT_BY_HREF.get(href)
    || TOPIC_BY_HREF.get(href)
    || null;
}

function localizedEntryLabel(label, href, language) {
  const school = SCHOOL_BY_HREF.get(href);
  if (school) {
    return localizedTaxonomyLabel(school.meta, school.id, language);
  }
  const subsubject = SUBSUBJECT_BY_HREF.get(href);
  if (subsubject) {
    return localizedTaxonomyLabel(
      subsubject.meta,
      getSubsubjectShortId(subsubject.id),
      language,
    );
  }
  const topic = TOPIC_BY_HREF.get(href);
  if (topic) {
    return localizedTaxonomyLabel(
      topic.meta,
      getTopicShortId(topic.id),
      language,
    );
  }
  return label;
}

function matchesTagSearch(query, ...values) {
  return values.flat().some((value) => (
    normalizeSearchText(value).includes(query)
  ));
}

function tagSectionId(index) {
  return `tag-section-${index + 1}`;
}

function DocsTagCard({match, searchActive, isSchool, language, t}) {
  const {
    entry: [label, href, meta, children = []],
    visibleChildren,
    revealChildren,
  } = match;
  const [expanded, setExpanded] = useState(false);
  const disclosureOpen = revealChildren || expanded;
  const displayLabel = localizedEntryLabel(label, href, language);
  const primaryContent = (
    <>
      <span className={styles.tagCardAccent} aria-hidden="true" />
      <span className={styles.tagCardTitle}>{displayLabel}</span>
      {meta ? (
        <span className={styles.tagCardCount}>
          {meta}
        </span>
      ) : null}
      {href ? <span className={styles.tagCardArrow} aria-hidden="true">→</span> : null}
    </>
  );

  return (
    <article className={`${styles.tagCard} ${isSchool ? styles.tagSchoolCard : ''}`}>
      {href ? (
        <Link to={href} className={styles.tagCardPrimary}>
          {primaryContent}
        </Link>
      ) : (
        <div className={styles.tagCardPrimary}>{primaryContent}</div>
      )}
      {children.length ? (
        <details
          className={styles.topicDisclosure}
          open={disclosureOpen}
          onToggle={(event) => {
            if (!revealChildren) setExpanded(event.currentTarget.open);
          }}>
          <summary>
            <span>
              {searchActive && visibleChildren.length !== children.length
                ? t.matchingTopics(visibleChildren.length)
                : t.topicsCount(children.length)}
            </span>
            <span className={styles.disclosureChevron} aria-hidden="true">⌄</span>
          </summary>
          {disclosureOpen ? (
            <div className={styles.topicGrid}>
              {visibleChildren.map((child) => (
                child[1] ? (
                  <Link
                    key={`${child[1]}:${child[0]}`}
                    to={child[1]}
                    className={styles.topicLink}>
                    <span>{localizedEntryLabel(child[0], child[1], language)}</span>
                    {child[2] ? (
                      <span className={styles.topicCount}>{child[2]}</span>
                    ) : null}
                  </Link>
                ) : (
                  <span key={`label:${child[0]}`} className={styles.topicLink}>
                    <span>{child[0]}</span>
                    {child[2] ? (
                      <span className={styles.topicCount}>{child[2]}</span>
                    ) : null}
                  </span>
                )
              ))}
            </div>
          ) : null}
        </details>
      ) : null}
    </article>
  );
}

function DocsTagBrowser({data}) {
  const {sections = []} = data;
  const language = useCurrentLanguage();
  const t = useUiText('tagsList');
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState('subjects');
  const deferredQuery = useDeferredValue(query.trim());
  const normalizedQuery = normalizeSearchText(deferredQuery);
  const searchActive = normalizedQuery.length > 0;

  const sectionModels = useMemo(() => sections.map((section, index) => {
    const [title, , entries = []] = section;
    const isSchool = index === 0 && title === '学校';
    const subsubjectInfo = SUBSUBJECT_BY_HREF.get(entries[0]?.[1]);
    const subjectId = subsubjectInfo?.meta?.subject;
    const subjectMeta = tagTaxonomy.subjects?.[subjectId];
    return {
      id: tagSectionId(index),
      title: isSchool
        ? t.schoolTitle
        : localizedTaxonomyLabel(subjectMeta, subjectId || title, language),
      entries,
      isSchool,
      searchValues: isSchool
        ? [title, t.schoolTitle, t.schoolsView]
        : taxonomySearchValues(
          subjectId ? {id: subjectId, meta: subjectMeta} : null,
          title,
        ),
      topicCount: entries.reduce((sum, entry) => sum + (entry[3]?.length || 0), 0),
    };
  }), [language, sections, t.schoolTitle, t.schoolsView]);

  const totals = useMemo(() => {
    const schoolSection = sectionModels.find((section) => section.isSchool);
    const subjectSections = sectionModels.filter((section) => !section.isSchool);
    return {
      schools: schoolSection?.entries.length || 0,
      subjects: subjectSections.reduce((sum, section) => sum + section.entries.length, 0),
      topics: subjectSections.reduce((sum, section) => sum + section.topicCount, 0),
    };
  }, [sectionModels]);

  const filteredSections = useMemo(() => sectionModels
    .filter((section) => (
      (scope === 'schools' && section.isSchool)
      || (scope === 'subjects' && !section.isSchool)
    ))
    .map((section) => {
      const sectionMatches = searchActive
        && matchesTagSearch(normalizedQuery, section.searchValues);
      const matches = section.entries.map((entry) => {
        const [, , , children = []] = entry;
        const entryMatches = matchesTagSearch(
          normalizedQuery,
          taxonomySearchValues(entryTaxonomyInfo(entry[1]), entry[0]),
        );
        const matchedChildren = searchActive
          ? children.filter((child) => (
            matchesTagSearch(
              normalizedQuery,
              taxonomySearchValues(entryTaxonomyInfo(child[1]), child[0]),
            )
          ))
          : children;
        const visibleChildren = searchActive && !sectionMatches && !entryMatches
          ? matchedChildren
          : children;
        return {
          entry,
          visibleChildren,
          matchedTopicCount: matchedChildren.length,
          revealChildren: searchActive
            && !sectionMatches
            && !entryMatches
            && matchedChildren.length > 0,
          matches: !searchActive
            || sectionMatches
            || entryMatches
            || matchedChildren.length > 0,
        };
      }).filter((match) => match.matches);
      return {...section, matches};
    })
    .filter((section) => section.matches.length > 0), [
      normalizedQuery,
      scope,
      searchActive,
      sectionModels,
    ]);

  const visibleEntryCount = filteredSections.reduce(
    (sum, section) => sum + section.matches.length,
    0,
  );
  const visibleTopicCount = filteredSections.reduce((sectionSum, section) => (
    sectionSum + section.matches.reduce((entrySum, match) => (
      entrySum + (searchActive ? match.matchedTopicCount : 0)
    ), 0)
  ), 0);
  const quickSections = sectionModels.filter((section) => (
    (scope === 'schools' && section.isSchool)
    || (scope === 'subjects' && !section.isSchool)
  ));
  const scopeOptions = [
    {id: 'subjects', label: t.learningView},
    {id: 'schools', label: t.schoolsView},
  ];

  const clearSearch = () => setQuery('');

  return (
    <div className={styles.tagBrowsePage}>
      <Head>
        <title>{`${t.pageTitle} | The Kai Project`}</title>
        <meta name="description" content={t.pageSubtitle} />
      </Head>
      <header className={styles.tagHero}>
        <span className={styles.tagEyebrow}>{t.eyebrow}</span>
        <h1>{t.pageTitle}</h1>
        <p>{t.pageSubtitle}</p>
        <dl className={styles.tagStats} aria-label={t.summaryLabel}>
          <div><dt>{totals.schools}</dt><dd>{t.summarySchools}</dd></div>
          <div><dt>{totals.subjects}</dt><dd>{t.summarySubsubjects}</dd></div>
          <div><dt>{totals.topics}</dt><dd>{t.summaryTopics}</dd></div>
        </dl>
      </header>

      <ContentBrowseModes section="exams" activeMode="tags" />

      <section className={styles.tagControls} aria-labelledby="tag-search-label">
        <label id="tag-search-label" className={styles.tagSearchLabel} htmlFor="tag-search">
          {t.searchLabel}
        </label>
        <div className={styles.tagSearchRow}>
          <div className={styles.tagSearchBox}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m21 21-4.35-4.35m2.35-5.4A7.75 7.75 0 1 1 3.5 11.25a7.75 7.75 0 0 1 15.5 0Z" />
            </svg>
            <input
              id="tag-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={scope === 'schools'
                ? t.schoolSearchPlaceholder
                : t.searchPlaceholder}
              autoComplete="off"
              spellCheck="false"
            />
            {query ? (
              <button type="button" onClick={clearSearch} aria-label={t.clearSearch}>
                ×
              </button>
            ) : null}
          </div>
          <div className={styles.scopeTabs} role="group" aria-label={t.viewTabsLabel}>
            {scopeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={scope === option.id ? styles.scopeTabActive : undefined}
                aria-pressed={scope === option.id}
                onClick={() => setScope(option.id)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <p className={styles.resultSummary} aria-live="polite">
          {searchActive
            ? t.resultSummary(visibleEntryCount, visibleTopicCount)
            : t.browseHint}
        </p>
      </section>

      {!searchActive && quickSections.length > 1 ? (
        <nav className={styles.sectionNav} aria-label={t.quickJump}>
          <span>{t.quickJump}</span>
          <div>
            {quickSections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
                <small>{section.entries.length}</small>
              </a>
            ))}
          </div>
        </nav>
      ) : null}

      {filteredSections.length ? (
        <div className={styles.tagResults}>
          {filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.tagSection}
              aria-labelledby={`${section.id}-heading`}>
              <div className={styles.tagSectionHeading}>
                <div>
                  <span>{section.isSchool ? t.schoolsView : t.learningView}</span>
                  <h2 id={`${section.id}-heading`}>{section.title}</h2>
                </div>
                <span className={styles.tagSectionCount}>
                  {section.matches.length}
                </span>
              </div>
              <div className={`${styles.tagCardGrid} ${section.isSchool ? styles.tagSchoolGrid : ''}`}>
                {section.matches.map((match) => (
                  <DocsTagCard
                    key={`${match.entry[1] || section.id}:${match.entry[0]}`}
                    match={match}
                    searchActive={searchActive}
                    isSchool={section.isSchool}
                    language={language}
                    t={t}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className={styles.tagEmptyState} role="status">
          <span aria-hidden="true">⌕</span>
          <h2>{scope === 'schools' ? t.noSchoolResults : t.noResults}</h2>
          <p>{t.noResultsHint}</p>
          <button type="button" onClick={clearSearch}>{t.clearSearch}</button>
        </div>
      )}
    </div>
  );
}

function documentUniversityInfo(href) {
  const pathname = String(href || '').split('#')[0];
  const universityId = decodeURIComponent(pathname).split('/').filter(Boolean)[1] || '';
  return {
    universityId,
    school: SCHOOL_BY_UNIVERSITY_ID.get(normalizeSearchText(universityId)) || null,
  };
}

function localizedSchoolName(universityId, school, language) {
  if (!school) return humanizeTagShortId(universityId);
  return localizedTaxonomyLabel(school.meta, school.id, language);
}

function documentYear(entry) {
  const source = `${entry[0] || ''} ${entry[1] || ''}`;
  return source.match(/(?:19|20)\d{2}/)?.[0] || '';
}

function SubsubjectSchoolGroup({group, t, defaultOpen}) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <details
      className={styles.documentSchoolGroup}
      open={expanded}
      onToggle={(event) => setExpanded(event.currentTarget.open)}>
      <summary>
        <span className={styles.schoolGroupTitle}>{group.label}</span>
        <span className={styles.schoolGroupMeta}>
          <span>{t.docCount(group.documents.length)}</span>
          <span className={styles.disclosureChevron} aria-hidden="true">⌄</span>
        </span>
      </summary>
      {expanded ? (
        <div className={styles.documentGrid}>
          {group.documents.map((entry) => {
            const year = documentYear(entry);
            return (
              <Link
                key={`${entry[1]}:${entry[0]}`}
                to={entry[1]}
                className={styles.documentLink}>
                <span>{entry[0]}</span>
                <span className={styles.documentLinkMeta}>
                  {year ? <small>{year}</small> : null}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </details>
  );
}

function SubsubjectTagBrowser({data, routePath}) {
  const language = useCurrentLanguage();
  const t = useUiText('docTagList');
  const normalizedRoutePath = String(routePath || '').replace(/\/$/, '');
  const subsubjectInfo = SUBSUBJECT_BY_HREF.get(normalizedRoutePath);
  const subjectId = subsubjectInfo?.meta?.subject;
  const subjectMeta = tagTaxonomy.subjects?.[subjectId];
  const title = subsubjectInfo
    ? localizedTaxonomyLabel(
      subsubjectInfo.meta,
      getSubsubjectShortId(subsubjectInfo.id),
      language,
    )
    : data.title;
  const subjectLabel = localizedTaxonomyLabel(subjectMeta, subjectId || '', language);
  const description = language === 'en'
    ? subsubjectInfo?.meta?.descriptionEn
    : language === 'ja'
      ? subsubjectInfo?.meta?.descriptionJa
      : subsubjectInfo?.meta?.descriptionZh;

  const topicModels = useMemo(() => (data.sections || []).map((section, index) => {
    const [sectionTitle, anchor, entries = []] = section;
    const topicInfo = anchor
      ? TOPIC_BY_HREF.get(`${normalizedRoutePath}#${anchor}`)
      : null;
    return {
      id: anchor || `topic-group-${index + 1}`,
      title: anchor === 'topic-unclassified'
        ? t.unclassified
        : topicInfo
          ? localizedTaxonomyLabel(
            topicInfo.meta,
            getTopicShortId(topicInfo.id),
            language,
          )
          : sectionTitle,
      entries,
      isDirect: anchor === 'topic-unclassified',
    };
  }), [data.sections, language, normalizedRoutePath, t.unclassified]);
  const sortedTopics = useMemo(() => [...topicModels].sort((left, right) => (
    Number(right.isDirect) - Number(left.isDirect)
    || right.entries.length - left.entries.length
    || left.title.localeCompare(right.title, 'en')
  )), [topicModels]);
  const allDocuments = useMemo(() => [...new Map(
    topicModels.flatMap((topic) => topic.entries)
      .map((entry) => [entry[1], entry]),
  ).values()], [topicModels]);
  const allSchoolCount = useMemo(() => new Set(
    allDocuments.map((entry) => documentUniversityInfo(entry[1]).universityId),
  ).size, [allDocuments]);
  const topicIds = useMemo(() => new Set(topicModels.map((topic) => topic.id)), [topicModels]);
  const [activeTopic, setActiveTopic] = useState('all');
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [topicsExpanded, setTopicsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const syncHash = () => {
      let hash = '';
      try {
        hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      } catch {
        hash = '';
      }
      if (hash && topicIds.has(hash)) {
        setActiveTopic(hash);
        if (sortedTopics.findIndex((topic) => topic.id === hash) >= 6) {
          setTopicsExpanded(true);
        }
      } else {
        setActiveTopic('all');
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [sortedTopics, topicIds]);

  useEffect(() => {
    if (typeof window === 'undefined' || activeTopic === 'all') return undefined;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(activeTopic);
      if (!target) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeTopic, topicsExpanded]);

  const activeModel = topicModels.find((topic) => topic.id === activeTopic);
  const activeDocuments = activeTopic === 'all'
    ? allDocuments
    : activeModel?.entries || [];
  const schoolOptions = useMemo(() => {
    const counts = new Map();
    for (const entry of activeDocuments) {
      const info = documentUniversityInfo(entry[1]);
      if (!counts.has(info.universityId)) {
        counts.set(info.universityId, {count: 0, school: info.school});
      }
      counts.get(info.universityId).count += 1;
    }
    return [...counts].map(([id, info]) => ({
      id,
      count: info.count,
      label: localizedSchoolName(id, info.school, language),
    })).sort((left, right) => (
      right.count - left.count || left.label.localeCompare(right.label, 'ja')
    ));
  }, [activeDocuments, language]);

  useEffect(() => {
    if (selectedSchool !== 'all'
      && !schoolOptions.some((school) => school.id === selectedSchool)) {
      setSelectedSchool('all');
    }
  }, [schoolOptions, selectedSchool]);

  const visibleDocuments = selectedSchool === 'all'
    ? activeDocuments
    : activeDocuments.filter((entry) => (
      documentUniversityInfo(entry[1]).universityId === selectedSchool
    ));
  const schoolGroups = useMemo(() => {
    const groups = new Map();
    for (const entry of visibleDocuments) {
      const info = documentUniversityInfo(entry[1]);
      if (!groups.has(info.universityId)) {
        groups.set(info.universityId, {
          id: info.universityId,
          label: localizedSchoolName(info.universityId, info.school, language),
          documents: [],
        });
      }
      groups.get(info.universityId).documents.push(entry);
    }
    return [...groups.values()]
      .map((group) => ({
        ...group,
        documents: [...group.documents].sort((left, right) => (
          documentYear(right).localeCompare(documentYear(left))
          || left[0].localeCompare(right[0], 'ja')
        )),
      }))
      .sort((left, right) => (
        right.documents.length - left.documents.length
        || left.label.localeCompare(right.label, 'ja')
      ));
  }, [language, visibleDocuments]);
  const visibleTopics = sortedTopics.filter((topic, index) => (
    topicsExpanded || index < 6 || topic.id === activeTopic
  ));
  const activeTitle = activeTopic === 'all' ? t.allTopics : activeModel?.title || title;

  return (
    <div className={styles.subsubjectBrowsePage}>
      <Head>
        <title>{`${title} | The Kai Project`}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <ContentBrowseModes section="exams" activeMode="tags" />
      <header className={styles.subsubjectHero}>
        <div className={styles.subsubjectBreadcrumb}>
          <span>{t.tagKinds.subsubject}</span>
          <span aria-hidden="true">/</span>
          <span>{subjectLabel}</span>
        </div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
        <div className={styles.subsubjectHeroFooter}>
          <div className={styles.subsubjectStats}>
            <span>{t.documentStat(allDocuments.length)}</span>
            <span>{t.topicStat(topicModels.length)}</span>
            <span>{t.schoolStat(allSchoolCount)}</span>
          </div>
          <Link to="/docs/tags" className={styles.allTagsLink}>{t.allTags}</Link>
        </div>
      </header>

      <section className={styles.topicDirectoryPanel} aria-labelledby="topic-directory-title">
        <div className={styles.topicDirectoryHeader}>
          <div>
            <h2 id="topic-directory-title">{t.topicNav}</h2>
            <p>{t.topicNavHint}</p>
          </div>
          <span>{t.topicStat(topicModels.length)}</span>
        </div>
        <nav className={styles.topicDirectoryLinks} aria-label={t.topicNav}>
          <Link
            to={normalizedRoutePath}
            className={activeTopic === 'all' ? styles.topicDirectoryLinkActive : undefined}
            aria-current={activeTopic === 'all' ? 'page' : undefined}
            onClick={() => setActiveTopic('all')}>
            <span>{t.allTopics}</span>
            <small>{allDocuments.length}</small>
          </Link>
          {visibleTopics.map((topic) => (
            <Link
              id={topic.id}
              key={topic.id}
              to={`${normalizedRoutePath}#${topic.id}`}
              className={activeTopic === topic.id ? styles.topicDirectoryLinkActive : undefined}
              aria-current={activeTopic === topic.id ? 'location' : undefined}
              onClick={() => setActiveTopic(topic.id)}>
              <span>{topic.title}</span>
              <small>{topic.entries.length}</small>
            </Link>
          ))}
        </nav>
        {sortedTopics.length > 6 ? (
          <button
            type="button"
            className={styles.topicExpansionButton}
            aria-expanded={topicsExpanded}
            onClick={() => setTopicsExpanded((value) => !value)}>
            {topicsExpanded ? t.collapseTopics : t.expandTopics(sortedTopics.length - 6)}
            <span className={styles.disclosureChevron} aria-hidden="true">⌄</span>
          </button>
        ) : null}
      </section>

      <section className={styles.subsubjectResults} aria-labelledby="subsubject-results-title">
        <div className={styles.subsubjectResultsHeader}>
          <div>
            <span>{t.tagKinds.topic}</span>
            <h2 id="subsubject-results-title">{activeTitle}</h2>
            <p role="status" aria-live="polite">{t.resultCount(visibleDocuments.length)}</p>
          </div>
          <label className={styles.schoolFilter}>
            <span>{t.schoolFilter}</span>
            <select
              aria-label={t.schoolFilter}
              value={selectedSchool}
              onChange={(event) => setSelectedSchool(event.target.value)}>
              <option value="all">{t.allSchools} ({schoolOptions.length})</option>
              {schoolOptions.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.label} ({school.count})
                </option>
              ))}
            </select>
          </label>
        </div>
        {schoolGroups.length ? (
          <div className={styles.documentSchoolGroups}>
            {schoolGroups.map((group) => (
              <SubsubjectSchoolGroup
                key={`${activeTopic}:${selectedSchool}:${group.id}`}
                group={group}
                t={t}
                defaultOpen={schoolGroups.length === 1 && group.documents.length <= 12}
              />
            ))}
          </div>
        ) : <p className={styles.subsubjectEmptyState}>{t.noResults}</p>}
      </section>
    </div>
  );
}

function CategoryCard({entry, childrenLabel}) {
  const [label, href, meta, children = []] = entry;
  return (
    <article className={styles.categoryCard}>
      <Link to={href} className={styles.categoryHeader}>
        <span className={styles.categoryAccent} aria-hidden="true" />
        <span className={styles.categoryTitle}>{label}</span>
        {meta ? <span className={styles.categoryCount}>{meta}</span> : null}
        <span className={styles.categoryArrow} aria-hidden="true">→</span>
      </Link>
      {children.length ? (
        <div className={styles.subcategoryPanel}>
          <span className={styles.subcategoryLabel}>{childrenLabel}</span>
          <div className={styles.subcategoryGrid}>
            {children.map((child) => (
              <Link
                key={`${child[1] || ''}:${child[0]}`}
                to={child[1]}
                className={styles.subcategoryLink}>
                <span className={styles.subcategoryTitle}>{child[0]}</span>
                {child[2] ? (
                  <span className={styles.subcategoryCount}>{child[2]}</span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className={styles.categoryHint}>进入分类查看历年试题</p>
      )}
    </article>
  );
}

function CategoryHierarchyIndex({data, hierarchySectionIndex}) {
  const {
    kind,
    title,
    description,
    schoolId,
    schoolLabel,
    intro,
    allTagsHref,
    rootCategoryHref,
    sections = [],
  } = data;
  const hierarchySection = sections[hierarchySectionIndex];
  const categoryEntries = hierarchySection?.[2] || [];
  const heading = hierarchySection?.[0] || '子分类';
  const remainingSections = sections.filter((_, index) => (
    index !== hierarchySectionIndex
  ));
  const isSchoolTag = kind === 'school-tag';
  const isUniversity = isSchoolTag || kind === 'university-category';
  const pageTitle = isSchoolTag ? schoolId || title : title;
  const childrenLabel = isUniversity ? '专攻与子分类' : '下级分类';

  return (
    <div className={styles.schoolPage}>
      <header className={styles.schoolHeader}>
        <div className={styles.schoolTypeRow}>
          <span className={styles.schoolBadge}>{isUniversity ? '大学' : '分类'}</span>
          {isSchoolTag && schoolLabel && schoolLabel !== schoolId ? (
            <span className={styles.schoolLabel}>{schoolLabel}</span>
          ) : null}
        </div>
        <h1 className={styles.schoolTitle}>{pageTitle}</h1>
        {description ? <p className={styles.schoolDescription}>{description}</p> : null}
        <div className={styles.schoolActions}>
          {intro ? <span className={styles.documentCount}>{intro}</span> : null}
          {rootCategoryHref ? (
            <Link to={rootCategoryHref} className={styles.secondaryLink}>
              全部分类
            </Link>
          ) : null}
          {allTagsHref ? (
            <Link to={allTagsHref} className={styles.secondaryLink}>
              全部标签
            </Link>
          ) : null}
        </div>
      </header>

      <section aria-labelledby="school-category-heading">
        <div className={styles.sectionHeadingRow}>
          <h2 id="school-category-heading" className={styles.sectionHeading}>
            {heading}
          </h2>
          <span className={styles.sectionCount}>{categoryEntries.length}</span>
        </div>
        {categoryEntries.length ? (
          <div className={styles.categoryGrid}>
            {categoryEntries.map((entry) => (
              <CategoryCard
                key={`${entry[1] || ''}:${entry[0]}`}
                entry={entry}
                childrenLabel={childrenLabel}
              />
            ))}
          </div>
        ) : <p className={styles.emptyState}>暂无相关分类。</p>}
      </section>
      {remainingSections.map((section, index) => (
        <IndexSection
          key={`${section[1] || ''}:${section[0] || index}`}
          section={section}
          index={index}
        />
      ))}
    </div>
  );
}

const HIERARCHY_SECTION_TITLES = new Set([
  '研究科与专攻',
  '专攻与子分类',
  '子分类',
]);

export default function GeneratedIndexPage() {
  const {page} = usePage();
  const data = page.generatedIndex;
  if (!data) return null;

  const {title, description, intro, sections = []} = data;
  const hierarchySectionIndex = sections.findIndex((section) => (
    HIERARCHY_SECTION_TITLES.has(section[0])
  ));
  const hasCategoryHierarchy = (
    data.kind === 'school-tag'
    || data.kind === 'university-category'
    || data.kind === 'category'
  ) && hierarchySectionIndex >= 0;
  return (
    <>
      <Head>
        <title>{`${title} | The Kai Project`}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      {data.kind === 'docs-tag-index' ? (
        <DocsTagBrowser data={data} />
      ) : data.kind === 'subsubject-tag' ? (
        <SubsubjectTagBrowser data={data} routePath={page.routePath} />
      ) : hasCategoryHierarchy ? (
        <CategoryHierarchyIndex
          data={data}
          hierarchySectionIndex={hierarchySectionIndex}
        />
      ) : (
        <div className={styles.indexPage}>
          <header className={styles.indexPageHeader}>
            <h1>{title}</h1>
            {intro ? <p>{intro}</p> : null}
            {description ? <p>{description}</p> : null}
          </header>
          {sections.length ? sections.map((section, index) => (
            <IndexSection
              key={`${section[1] || ''}:${section[0] || index}`}
              section={section}
              index={index}
            />
          )) : <p className={styles.emptyState}>暂无相关内容。</p>}
        </div>
      )}
    </>
  );
}
