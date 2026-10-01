/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useMemo, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props as DocusaurusProps} from '@theme/DocTagDocListPage';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import {FiChevronDown} from 'react-icons/fi';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import {universities} from '@site/src/data/universities';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {getLanguageLocale, normalizeLanguage} from '@site/src/i18n/config';
import {getUiMessages} from '@site/src/i18n/messages';
import {
  getTopicAnchorId,
  getTagLabel,
  getTagDescription,
  compareTagLabels,
} from '@site/src/utils/tags';
import {
  buildTopicBrowseUrl,
  readTopicBrowseSelection,
  UNCLASSIFIED_ANCHOR,
} from '@site/src/utils/topicBrowseUrl';
import styles from './styles.module.css';

type Language = 'zh' | 'ja' | 'en';

interface SubsubjectMeta {
  subject?: string;
}

interface CompactBrowseDocument {
  id: string;
  title: string;
  sidebarLabel?: string | null;
  permalink: string;
  universityId?: string | null;
  universityName?: string | null;
  departmentId?: string | null;
  departmentName?: string | null;
  programId?: string | null;
  programName?: string | null;
  year?: number | null;
  topicIds?: string[];
  subsubjectIds?: string[];
}

interface CompactBrowseTopic {
  id: string;
  shortId: string;
  count: number;
  anchor: string;
  docIds: string[];
}

interface CompactBrowseData {
  directDocIds: string[];
  docIds: string[];
  topics: CompactBrowseTopic[];
  documents: Record<string, CompactBrowseDocument>;
}

type Props = {
  tag: Omit<DocusaurusProps['tag'], 'items'> & {browse: CompactBrowseData};
};

type AggregateTopicSelection = 'all' | 'unclassified' | string;

const TOPIC_PREVIEW_LIMIT = 5;

const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;
const schoolTags = tagTaxonomy.schoolTags as Record<
  string,
  {universityId?: string}
>;

const getCopy = (language: Language) => getUiMessages('docTagList', language);

const schoolTagByUniversity = new Map(
  Object.entries(schoolTags).map(([id, meta]) => [meta.universityId, id]),
);

const universityLookup = new Map(
  universities.map((university) => [university.id, university]),
);

function getUniversityLabel(universityId: string | undefined, language: Language): string {
  if (!universityId) return getCopy(language).other;
  const schoolTagId = schoolTagByUniversity.get(universityId);
  return schoolTagId ? getTagLabel(schoolTagId, language) : universityLookup.get(universityId)?.name || universityId;
}

function compareBrowseDocuments(
  left: CompactBrowseDocument,
  right: CompactBrowseDocument,
): number {
  const yearDifference = (right.year || 0) - (left.year || 0);
  if (yearDifference !== 0) return yearDifference;
  const leftTitle = left.sidebarLabel || left.title;
  const rightTitle = right.sidebarLabel || right.title;
  return leftTitle.localeCompare(rightTitle, 'ja');
}

function getCompactExamDate(
  document: CompactBrowseDocument,
  language: Language,
): string {
  const source = [document.sidebarLabel, document.title, document.id]
    .filter(Boolean)
    .join(' ');
  const japaneseDate = source.match(/((?:19|20)\d{2})\s*年\s*(\d{1,2})\s*月/);
  const slugDate = source.match(/(?:^|[_/-])((?:19|20)\d{2})(0[1-9]|1[0-2])(?:[_/-]|$)/);
  const year = japaneseDate?.[1] || slugDate?.[1] || String(document.year || '—');
  const month = japaneseDate?.[2] || slugDate?.[2]?.replace(/^0/, '');

  if (!month) return year;
  if (language === 'en') return `${year} · ${month}`;
  return `${year} · ${month}月`;
}

function getCompactExamTitle(document: CompactBrowseDocument): string {
  const fallback = document.title.trim();
  const source = document.sidebarLabel?.trim() || fallback;
  const compact = source
    .replace(/(?:19|20)\d{2}\s*年\s*\d{1,2}\s*月\s*(?:実施|施行)?/g, '')
    .replace(/(?:19|20)\d{2}\s*年度?/g, '')
    .replace(/(?:^|[_/-])(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:[_/-]|$)/g, ' ')
    .replace(/^[\s·・:：\-–—]+|[\s·・:：\-–—]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return compact || fallback;
}

function CompactExamRow({
  document,
  parentPermalink,
  topicLookup,
  directDocIds,
  language,
  onSelectTopic,
}: {
  document: CompactBrowseDocument;
  parentPermalink: string;
  topicLookup: Map<string, CompactBrowseTopic>;
  directDocIds: Set<string>;
  language: Language;
  onSelectTopic: (topicId: AggregateTopicSelection) => void;
}): ReactNode {
  const copy = getCopy(language);
  const topicEntries = Array.from(new Set(document.topicIds || []))
    .map((topicId) => topicLookup.get(topicId))
    .filter((topic): topic is CompactBrowseTopic => Boolean(topic));
  const rowTopics: Array<
    {id: AggregateTopicSelection; label: string; anchor: string; title?: string}
  > = [
    ...(directDocIds.has(document.id)
      ? [{
        id: 'unclassified' as const,
        label: copy.unclassified,
        anchor: UNCLASSIFIED_ANCHOR,
        title: copy.directHint,
      }]
      : []),
    ...topicEntries.map((topic) => ({
      id: topic.id,
      label: getTagLabel(topic.id, language),
      anchor: getTopicAnchorId(topic.id),
    })),
  ];
  const visibleTopics = rowTopics.slice(0, 2);
  const hiddenTopicCount = rowTopics.length - visibleTopics.length;
  const metadata = Array.from(new Set([
    document.departmentName,
    document.programName,
  ].filter((value): value is string => Boolean(value))));
  const title = getCompactExamTitle(document);

  return (
    <li className={styles.compactDocRow}>
      <span className={styles.compactDocYear}>
        {getCompactExamDate(document, language)}
      </span>
      <div className={styles.compactDocBody}>
        <Link to={document.permalink} className={styles.compactDocTitle}>
          {title}
        </Link>
        {metadata.length > 0 && (
          <span className={styles.compactDocMeta}>{metadata.join(' · ')}</span>
        )}
      </div>
      {rowTopics.length > 0 && (
        <div className={styles.compactDocTopics}>
          {visibleTopics.map((topic) => (
            <Link
              key={`${document.id}-${topic.id}`}
              to={`${parentPermalink}#${topic.anchor}`}
              title={topic.title || topic.label}
              className={styles.compactDocTopic}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                onSelectTopic(topic.id);
              }}>
              {topic.label}
            </Link>
          ))}
          {hiddenTopicCount > 0 && (
            <span
              className={styles.compactDocTopicMore}
              aria-label={copy.moreTopics(hiddenTopicCount)}
              title={rowTopics.slice(2).map((topic) => topic.label).join(', ')}>
              +{hiddenTopicCount}
            </span>
          )}
        </div>
      )}
    </li>
  );
}

function CompactSchoolGroup({
  schoolId,
  title,
  documents,
  parentPermalink,
  topicLookup,
  directDocIds,
  language,
  onSelectTopic,
  initiallyExpanded,
  isFiltered,
}: {
  schoolId: string;
  title: string;
  documents: CompactBrowseDocument[];
  parentPermalink: string;
  topicLookup: Map<string, CompactBrowseTopic>;
  directDocIds: Set<string>;
  language: Language;
  onSelectTopic: (topicId: AggregateTopicSelection) => void;
  initiallyExpanded: boolean;
  isFiltered: boolean;
}): ReactNode {
  const copy = getCopy(language);
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const schoolColor = universityLookup.get(schoolId)?.color;
  const topicCount = new Set(
    documents.flatMap((document) => (
      (document.topicIds || []).filter((topicId) => topicLookup.has(topicId))
    )),
  ).size;

  useEffect(() => {
    if (isFiltered) setExpanded(true);
  }, [isFiltered]);

  return (
    <section className={styles.compactSchoolGroup}>
      <button
        type="button"
        className={styles.compactSchoolHeader}
        aria-expanded={expanded}
        aria-controls={`school-documents-${schoolId}`}
        aria-label={`${expanded ? copy.collapseSchool : copy.expandSchool}: ${title}`}
        onClick={() => setExpanded((value) => !value)}>
        <span
          className={styles.compactSchoolColor}
          style={schoolColor ? {backgroundColor: schoolColor} : undefined}
          aria-hidden="true"
        />
        <span className={styles.compactSchoolTitle}>{title}</span>
        <span className={styles.compactSchoolCount}>
          {copy.schoolSummary(documents.length, topicCount)}
        </span>
        <FiChevronDown
          className={`${styles.compactSchoolChevron} ${expanded ? styles.compactSchoolChevronOpen : ''}`}
          aria-hidden="true"
        />
      </button>
      <div id={`school-documents-${schoolId}`}>
      {expanded && (
        <ul className={styles.compactDocList}>
          {documents.map((document) => (
            <CompactExamRow
              key={document.id}
              document={document}
              parentPermalink={parentPermalink}
              topicLookup={topicLookup}
              directDocIds={directDocIds}
              language={language}
              onSelectTopic={onSelectTopic}
            />
          ))}
        </ul>
      )}
      </div>
    </section>
  );
}

function SubsubjectBrowsePage({
  tag,
  browse,
  title,
  language,
}: {
  tag: Props['tag'];
  browse: CompactBrowseData;
  title: string;
  language: Language;
}): ReactNode {
  const t = getCopy(language);
  const subsubjectId = tag.label;
  const subsubject = subsubjects[subsubjectId];
  const subjectId = subsubject?.subject || 'General';
  const topicLookup = useMemo(
    () => new Map(browse.topics.map((topic) => [topic.id, topic])),
    [browse.topics],
  );
  const directDocIds = useMemo(
    () => new Set(browse.directDocIds),
    [browse.directDocIds],
  );
  const sortedTopics = useMemo(
    () => [...browse.topics].sort(
      (left, right) => right.count - left.count
        || compareTagLabels(left.id, right.id, language),
    ),
    [browse.topics, language],
  );
  const sortedTopicsRef = useRef(sortedTopics);
  // Hash navigation uses the latest order without rerunning when language changes.
  useEffect(() => {
    sortedTopicsRef.current = sortedTopics;
  }, [sortedTopics]);
  const allDocuments = useMemo(() => {
    const seen = new Set<string>();
    return browse.docIds.flatMap((docId) => {
      if (seen.has(docId)) return [];
      seen.add(docId);
      const document = browse.documents[docId];
      return document ? [document] : [];
    });
  }, [browse.docIds, browse.documents]);
  const allSchoolCount = useMemo(
    () => new Set(allDocuments.map((document) => document.universityId || 'other')).size,
    [allDocuments],
  );
  const [selection, setSelection] = useState({topic: 'all', school: 'all'});
  const {topic: activeTopic, school: selectedSchool} = selection;
  const [browseSearch, setBrowseSearch] = useState('');
  const [topicsExpanded, setTopicsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const syncFromUrl = () => {
      const nextSelection = readTopicBrowseSelection(window.location, browse);
      setSelection(nextSelection);
      setBrowseSearch(window.location.search);
      if (sortedTopicsRef.current.findIndex((item) => item.id === nextSelection.topic) >= TOPIC_PREVIEW_LIMIT) {
        setTopicsExpanded(true);
      }
    };
    syncFromUrl();
    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, [browse]);

  const activeDocIds = useMemo(() => {
    if (activeTopic === 'all') return browse.docIds;
    if (activeTopic === 'unclassified') return browse.directDocIds;
    return topicLookup.get(activeTopic)?.docIds || [];
  }, [activeTopic, browse.directDocIds, browse.docIds, topicLookup]);

  const activeDocuments = useMemo(() => {
    const seen = new Set<string>();
    return activeDocIds.flatMap((docId) => {
      if (seen.has(docId)) return [];
      seen.add(docId);
      const document = browse.documents[docId];
      return document ? [document] : [];
    }).sort(compareBrowseDocuments);
  }, [activeDocIds, browse.documents]);

  const schoolOptions = useMemo(() => {
    const counts = new Map<string, {label: string; count: number}>();
    for (const document of allDocuments) {
      const schoolId = document.universityId || 'other';
      const label = getUniversityLabel(document.universityId || undefined, language);
      const current = counts.get(schoolId);
      counts.set(schoolId, {label, count: current?.count || 0});
    }
    for (const document of activeDocuments) {
      counts.get(document.universityId || 'other')!.count += 1;
    }
    return Array.from(counts, ([id, value]) => ({id, ...value})).sort(
      (left, right) => right.count - left.count || left.label.localeCompare(right.label, getLanguageLocale(language)),
    );
  }, [activeDocuments, allDocuments, language]);

  const visibleDocuments = useMemo(
    () => activeDocuments.filter((document) => (
      selectedSchool === 'all' || (document.universityId || 'other') === selectedSchool
    )),
    [activeDocuments, selectedSchool],
  );

  const schoolGroups = useMemo(() => {
    const groups = new Map<string, {title: string; documents: CompactBrowseDocument[]}>();
    for (const document of visibleDocuments) {
      const schoolId = document.universityId || 'other';
      if (!groups.has(schoolId)) {
        groups.set(schoolId, {
          title: getUniversityLabel(document.universityId || undefined, language),
          documents: [],
        });
      }
      groups.get(schoolId)!.documents.push(document);
    }
    return Array.from(groups, ([schoolId, group]) => ({schoolId, ...group})).sort(
      (left, right) => right.documents.length - left.documents.length
        || left.title.localeCompare(right.title, getLanguageLocale(language)),
    );
  }, [language, visibleDocuments]);

  const updateSelection = (nextSelection: typeof selection) => {
    const nextUrl = buildTopicBrowseUrl(window.location, nextSelection);
    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.pushState(window.history.state, '', nextUrl);
    }
    setSelection(nextSelection);
    setBrowseSearch(window.location.search);
  };
  const onSelectTopic = (topic: AggregateTopicSelection) => updateSelection({...selection, topic});
  const topicUrl = (topic: AggregateTopicSelection) => buildTopicBrowseUrl(
    {pathname: tag.permalink, search: browseSearch},
    {...selection, topic},
  );
  const parentPermalink = topicUrl('all');

  const activeTopicTitle = activeTopic === 'all'
    ? t.allTopics
    : activeTopic === 'unclassified'
      ? t.unclassified
      : getTagLabel(activeTopic, language);
  const remainingTopicCount = Math.max(0, sortedTopics.length - TOPIC_PREVIEW_LIMIT);

  return (
    <div className={clsx('container', styles.pageContainer, styles.aggregatePageContainer)}>
      <div className="row">
        <main className="col col--10 col--offset-1">
          {tag.unlisted && <Unlisted />}
          <ContentBrowseModes activeMode="tags" />
          <header className={`${styles.pageHeader} ${styles.aggregateHeader}`}>
            <div className={styles.aggregateBreadcrumb}>
              <Link to={tag.allTagsPath}>{t.tagIndex}</Link>
              <span aria-hidden="true">/</span>
              <span>{getTagLabel(subjectId, language)}</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{getTagLabel(subsubjectId, language)}</span>
            </div>
            <Heading as="h1" className={`${styles.pageTitle} ${styles.aggregateTitle}`}>
              {getTagLabel(subsubjectId, language)}
            </Heading>
            {getTagDescription(subsubjectId, language) && (
              <p className={styles.pageDescription}>
                {getTagDescription(subsubjectId, language)}
              </p>
            )}
            <div className={styles.aggregateStats}>
              <span>{t.documentStat(allDocuments.length)}</span>
              <span>{t.topicStat(browse.topics.length)}</span>
              <span>{t.schoolStat(allSchoolCount)}</span>
            </div>
          </header>

          <div className={styles.aggregateWorkspace}>
            <aside className={styles.topicSidebar}>
              <div className={styles.topicDirectoryHeader}>
                <Heading as="h2" className={styles.topicDirectoryHeading}>
                  {t.topicNav}
                </Heading>
                <span>{t.topicNavHint}</span>
              </div>
              <nav className={styles.topicDirectory} aria-label={t.topicNav}>
                <div className={styles.topicScroller}>
                  <Link
                    to={parentPermalink}
                    className={`${styles.topicDirectoryLink} ${activeTopic === 'all' ? styles.topicDirectoryLinkActive : ''}`}
                    aria-current={activeTopic === 'all' ? 'page' : undefined}
                    onClick={(event) => {
                      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                      event.preventDefault();
                      onSelectTopic('all');
                    }}>
                    <span>{t.allTopics}</span>
                    <span className={styles.topicDirectoryCount}>{allDocuments.length}</span>
                  </Link>
                  {browse.directDocIds.length > 0 && (
                    <Link
                      id={UNCLASSIFIED_ANCHOR}
                      to={topicUrl('unclassified')}
                      title={t.directHint}
                      className={`${styles.topicDirectoryLink} ${activeTopic === 'unclassified' ? styles.topicDirectoryLinkActive : ''}`}
                      aria-current={activeTopic === 'unclassified' ? 'location' : undefined}
                      onClick={(event) => {
                        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        onSelectTopic('unclassified');
                      }}>
                      <span>{t.unclassified}</span>
                      <span className={styles.topicDirectoryCount}>
                        {new Set(browse.directDocIds).size}
                      </span>
                    </Link>
                  )}
                  {sortedTopics.map((topic, topicIndex) => {
                    const anchor = getTopicAnchorId(topic.id);
                    const isCollapsed = !topicsExpanded && topicIndex >= TOPIC_PREVIEW_LIMIT;
                    return (
                      <Link
                        id={anchor}
                        key={topic.id}
                        hidden={isCollapsed}
                        to={topicUrl(topic.id)}
                        className={`${styles.topicDirectoryLink} ${activeTopic === topic.id ? styles.topicDirectoryLinkActive : ''}`}
                        aria-current={activeTopic === topic.id ? 'location' : undefined}
                        onClick={(event) => {
                          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                          event.preventDefault();
                          onSelectTopic(topic.id);
                        }}>
                        <span>{getTagLabel(topic.id, language)}</span>
                        <span className={styles.topicDirectoryCount}>{topic.count}</span>
                      </Link>
                    );
                  })}
                </div>
                {remainingTopicCount > 0 && (
                  <button
                    type="button"
                    className={styles.topicExpansionButton}
                    aria-expanded={topicsExpanded}
                    onClick={() => setTopicsExpanded((value) => !value)}>
                    <span>
                      {topicsExpanded
                        ? t.collapseTopics
                        : t.expandTopics(remainingTopicCount)}
                    </span>
                    <FiChevronDown
                      className={topicsExpanded ? styles.topicExpansionIconOpen : ''}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </nav>
            </aside>

            <section className={styles.aggregateResults} aria-label={title}>
              <div className={styles.aggregateResultsHeader}>
                <div className={styles.aggregateResultsTitleGroup}>
                  <Heading as="h2" className={styles.aggregateResultsTitle}>
                    {activeTopicTitle}
                  </Heading>
                  <p className={styles.aggregateResultsMeta} role="status" aria-live="polite">
                    <span>{t.resultCount(visibleDocuments.length)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.schoolStat(schoolGroups.length)}</span>
                  </p>
                </div>
                <label className={styles.schoolFilter}>
                  <span className={styles.schoolFilterLabel}>{t.schoolFilter}</span>
                  <select
                    id="topic-school-filter"
                    aria-label={t.schoolFilter}
                    value={selectedSchool}
                    onChange={(event) => updateSelection({...selection, school: event.target.value})}>
                    <option value="all">{t.allSchools} ({schoolOptions.length})</option>
                    {schoolOptions.map((school) => (
                      <option key={school.id} value={school.id}>
                        {school.label} ({school.count})
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.compactSchoolList}>
                {schoolGroups.length > 0 ? schoolGroups.map((group, groupIndex) => (
                  <CompactSchoolGroup
                    key={group.schoolId}
                    schoolId={group.schoolId}
                    title={group.title}
                    documents={group.documents}
                    parentPermalink={parentPermalink}
                    topicLookup={topicLookup}
                    directDocIds={directDocIds}
                    language={language}
                    onSelectTopic={onSelectTopic}
                    initiallyExpanded={selectedSchool !== 'all' || groupIndex < 2}
                    isFiltered={selectedSchool !== 'all'}
                  />
                )) : (
                  <BrowseEmptyState
                    message={t.noResults}
                    resetLabel={t.allTopics}
                    focusTargetId="topic-school-filter"
                    onReset={() => {
                      updateSelection({topic: 'all', school: 'all'});
                    }}
                  />
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function DocTagDocListPageMetadata({
  title,
  tag,
  language,
}: Props & {title: string; language: Language}): ReactNode {
  const description = getTagDescription(tag.label, language);
  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

export default function DocTagDocListPage(props: Props): ReactNode {
  const language = normalizeLanguage(useCurrentLanguage()) as Language;
  const {tag} = props;
  const title = getCopy(language).pageTitle(tag.count, getTagLabel(tag.label, language));
  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} language={language} />
      <HtmlClassNameProvider className={ThemeClassNames.page.docsTagDocListPage}>
        <SubsubjectBrowsePage tag={tag} browse={tag.browse} title={title} language={language} />
      </HtmlClassNameProvider>
    </>
  );
}
