/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useMemo, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/DocTagDocListPage';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import {FiChevronDown} from 'react-icons/fi';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import {universities} from '@site/src/data/universities';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {normalizeLanguage} from '@site/src/i18n/config';
import {getUiMessages} from '@site/src/i18n/messages';
import {
  getTopicAnchorId,
  getTopicDisplayName,
} from '@site/src/utils/tagBrowseTarget';
import styles from './styles.module.css';

type DocListItem = Props['tag']['items'][number];

interface TopicMeta {
  subsubject?: string;
  relatedSubjects?: string[];
}

type Language = 'zh' | 'ja' | 'en';

interface SubjectMeta {
  labelZh?: string;
  labelJa?: string;
  labelEn?: string;
}

interface SubsubjectMeta {
  subject?: string;
  labelZh?: string;
  labelJa?: string;
  labelEn?: string;
  descriptionZh?: string;
  descriptionJa?: string;
  descriptionEn?: string;
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

type TagWithBrowse = Props['tag'] & {browse?: CompactBrowseData};

type AggregateTopicSelection = 'all' | 'unclassified' | string;

const UNCLASSIFIED_ANCHOR = 'topic-unclassified';
const TOPIC_PREVIEW_LIMIT = 5;

const subjects = tagTaxonomy.subjects as Record<string, SubjectMeta>;
const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;
const topics = tagTaxonomy.topics as Record<string, TopicMeta>;
const schoolTags = tagTaxonomy.schoolTags as Record<
  string,
  {universityId?: string; label?: string; aliases?: string[]}
>;

const getCopy = (language: Language) => getUiMessages('docTagList', language);

function getSubjectLabel(subjectId: string, language: Language): string {
  const subject = subjects[subjectId];
  if (language === 'en') return subject?.labelEn || subjectId;
  return (language === 'ja' ? subject?.labelJa : subject?.labelZh) || subjectId;
}

function getSubsubjectLabel(subsubjectId: string, language: Language): string {
  const subsubject = subsubjects[subsubjectId];
  if (language === 'en') return subsubject?.labelEn || subsubjectId;
  return (language === 'ja' ? subsubject?.labelJa : subsubject?.labelZh) || subsubjectId;
}

function getSubsubjectDescription(
  subsubjectId: string,
  language: Language,
): string | undefined {
  const subsubject = subsubjects[subsubjectId];
  if (language === 'en') return subsubject?.descriptionEn;
  return language === 'ja' ? subsubject?.descriptionJa : subsubject?.descriptionZh;
}

function decodeHash(hash: string): string {
  try {
    return decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return hash.replace(/^#/, '');
  }
}

const schoolAliasLookup = new Map<string, string>();
for (const [tag, meta] of Object.entries(schoolTags)) {
  for (const alias of meta.aliases || []) {
    schoolAliasLookup.set(alias, tag);
  }
}

const universityLookup = new Map(
  universities.map((university) => [university.id, university]),
);

function getSchoolTag(tagLabel: string) {
  const canonical = schoolTags[tagLabel] ? tagLabel : schoolAliasLookup.get(tagLabel);
  return canonical ? {id: canonical, ...schoolTags[canonical]} : null;
}

function getSubsubjectId(tagLabel: string): string | null {
  if (subsubjects[tagLabel]) return tagLabel;
  return null;
}

function getTopicMeta(tagLabel: string): TopicMeta | null {
  if (topics[tagLabel]) return topics[tagLabel];
  return null;
}

function getSubsubjectShortId(subsubjectId: string): string {
  const subjectId = subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

function getTopicShortId(topicId: string): string {
  const topic = getTopicMeta(topicId);
  const prefix = topic?.subsubject ? `${topic.subsubject}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
}

function getTagDisplayName(tagLabel: string): string {
  const subsubjectId = getSubsubjectId(tagLabel);
  if (subsubjectId) return getSubsubjectShortId(subsubjectId);
  if (getTopicMeta(tagLabel)) return getTopicShortId(tagLabel);
  const school = getSchoolTag(tagLabel);
  if (school) return school.id;
  return tagLabel;
}

function getTagKind(tagLabel: string, language: Language): {
  label: string;
  tone: 'school' | 'subsubject' | 'topic' | 'pending';
  details?: string;
} {
  const t = getCopy(language);
  const school = getSchoolTag(tagLabel);
  if (school) {
    return {
      label: t.tagKinds.school,
      tone: 'school',
      details: school.label,
    };
  }

  const subsubjectId = getSubsubjectId(tagLabel);
  const subsubject = subsubjectId ? subsubjects[subsubjectId] : null;
  if (subsubjectId && subsubject) {
    return {
      label: t.tagKinds.subsubject,
      tone: 'subsubject',
      details: `${getSubjectLabel(subsubject.subject || 'General', language)} / ${getSubsubjectLabel(subsubjectId, language)}`,
    };
  }

  const topic = getTopicMeta(tagLabel);
  if (topic) {
    const subsubjectLabel = topic.subsubject ? getSubsubjectLabel(topic.subsubject, language) : null;
    const primarySubject = topic.subsubject ? subsubjects[topic.subsubject]?.subject : null;
    const subjectLabel = getSubjectLabel(primarySubject || 'General', language);
    const relatedSubjects = (topic.relatedSubjects || [])
      .map((subjectId) => getSubjectLabel(subjectId, language));
    const subjectLabels = [
      subsubjectLabel ? `${subjectLabel} / ${subsubjectLabel}` : subjectLabel,
      ...relatedSubjects,
    ].join(' · ');
    return {
      label: t.tagKinds.topic,
      tone: 'topic',
      details: subjectLabels,
    };
  }

  return {
    label: t.tagKinds.pending,
    tone: 'pending',
    details: t.pendingDetails,
  };
}

function getDocId(doc: DocListItem): string {
  const explicitId = (doc as {id?: string}).id;
  if (explicitId) return explicitId;
  const pathFromPermalink = doc.permalink.split('/docs/')[1] || doc.permalink;
  return decodeURIComponent(pathFromPermalink).replace(/^\/+/, '');
}

function getPathParts(doc: DocListItem): string[] {
  return getDocId(doc).split('/').filter(Boolean);
}

function getUniversityLabel(universityId: string | undefined, language: Language): string {
  if (!universityId) return getCopy(language).other;
  return universityLookup.get(universityId)?.name || universityId;
}

function getDepartmentLabel(
  universityId: string | undefined,
  departmentId: string | undefined,
  language: Language,
): string {
  if (!universityId || !departmentId) return getCopy(language).other;
  const university = universityLookup.get(universityId);
  const department = university?.departments?.find((item) => item.id === departmentId);
  return department?.name || departmentId;
}

function getDocMeta(doc: DocListItem, groupBy: 'school' | 'topic', language: Language): string {
  const parts = getPathParts(doc);
  const year = parts.find((part, index) => index >= 2 && /^\d{4}$/.test(part));
  const department = getDepartmentLabel(parts[0], parts[1], language);
  const programParts = year ? parts.slice(2, parts.indexOf(year)) : parts.slice(2, -1);
  const program = programParts.length ? programParts.join(' / ') : null;
  const bits = groupBy === 'school' ? [program, year] : [department, program, year];
  return bits.filter(Boolean).join(' · ');
}

function groupDocs(
  docs: DocListItem[],
  tagLabel: string,
  language: Language,
): {title: string; items: DocListItem[]; sortKey: string}[] {
  const school = getSchoolTag(tagLabel);
  const groups = new Map<string, {title: string; items: DocListItem[]; sortKey: string}>();

  for (const doc of docs) {
    const parts = getPathParts(doc);
    const key = school ? `${parts[0] || 'other'}/${parts[1] || 'other'}` : parts[0] || 'other';
    const title = school
      ? getDepartmentLabel(parts[0], parts[1], language)
      : getUniversityLabel(parts[0], language);

    if (!groups.has(key)) {
      groups.set(key, {title, items: [], sortKey: key});
    }
    groups.get(key)!.items.push(doc);
  }

  return Array.from(groups.values()).sort(
    (a, b) => b.items.length - a.items.length || a.title.localeCompare(b.title, 'en'),
  );
}

function getPageTitle(props: Props, language: Language): string {
  const tag = props.tag as TagWithBrowse;
  const isAggregateSubsubject = Boolean(tag.browse && getSubsubjectId(tag.label));
  const count = isAggregateSubsubject
    ? new Set(tag.browse!.docIds).size
    : tag.count;
  const displayName = isAggregateSubsubject
    ? getSubsubjectLabel(tag.label, language)
    : getTagDisplayName(tag.label);
  return getCopy(language).pageTitle(count, displayName);
}

function DocItem({
  doc,
  groupBy,
  language,
}: {
  doc: DocListItem;
  groupBy: 'school' | 'topic';
  language: Language;
}): ReactNode {
  const meta = getDocMeta(doc, groupBy, language);
  return (
    <Link to={doc.permalink} className={styles.docItem}>
      <span className={styles.docItemTitle}>{doc.title}</span>
      {meta && <span className={styles.docItemMeta}>{meta}</span>}
    </Link>
  );
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
      label: getTopicDisplayName(topic.id),
      anchor: getTopicAnchorId(topic.id),
    })),
  ];
  const visibleTopics = rowTopics.slice(0, 3);
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
              title={topic.title}
              className={styles.compactDocTopic}
              onClick={() => onSelectTopic(topic.id)}>
              {topic.label}
            </Link>
          ))}
          {hiddenTopicCount > 0 && (
            <span
              className={styles.compactDocTopicMore}
              aria-label={copy.moreTopics(hiddenTopicCount)}
              title={rowTopics.slice(3).map((topic) => topic.label).join(', ')}>
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
}: {
  schoolId: string;
  title: string;
  documents: CompactBrowseDocument[];
  parentPermalink: string;
  topicLookup: Map<string, CompactBrowseTopic>;
  directDocIds: Set<string>;
  language: Language;
  onSelectTopic: (topicId: AggregateTopicSelection) => void;
}): ReactNode {
  const copy = getCopy(language);
  const [expanded, setExpanded] = useState(true);
  const schoolColor = universityLookup.get(schoolId)?.color;
  const topicCount = new Set(
    documents.flatMap((document) => (
      (document.topicIds || []).filter((topicId) => topicLookup.has(topicId))
    )),
  ).size;

  return (
    <section className={styles.compactSchoolGroup}>
      <button
        type="button"
        className={styles.compactSchoolHeader}
        aria-expanded={expanded}
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
    </section>
  );
}

function SubsubjectBrowsePage({
  tag,
  browse,
  title,
  language,
}: {
  tag: TagWithBrowse;
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
        || getTopicDisplayName(left.id).localeCompare(getTopicDisplayName(right.id), 'en'),
    ),
    [browse.topics],
  );
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
  const [activeTopic, setActiveTopic] = useState<AggregateTopicSelection>('all');
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [topicsExpanded, setTopicsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const syncFromHash = () => {
      const hash = decodeHash(window.location.hash);
      if (hash === UNCLASSIFIED_ANCHOR && browse.directDocIds.length > 0) {
        setActiveTopic('unclassified');
        return;
      }
      const topic = browse.topics.find((item) => getTopicAnchorId(item.id) === hash);
      setActiveTopic(topic?.id || 'all');
      if (topic && sortedTopics.findIndex((item) => item.id === topic.id) >= TOPIC_PREVIEW_LIMIT) {
        setTopicsExpanded(true);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, [browse.directDocIds.length, browse.topics, sortedTopics]);

  useEffect(() => {
    if (activeTopic === 'all' || typeof document === 'undefined') return;
    const anchor = activeTopic === 'unclassified'
      ? UNCLASSIFIED_ANCHOR
      : getTopicAnchorId(activeTopic);
    if (!anchor) return;
    window.requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({block: 'nearest', inline: 'center'});
    });
  }, [activeTopic, topicLookup]);

  useEffect(() => {
    setSelectedSchool('all');
  }, [activeTopic]);

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
    for (const document of activeDocuments) {
      const schoolId = document.universityId || 'other';
      const label = document.universityName
        || getUniversityLabel(document.universityId || undefined, language);
      const current = counts.get(schoolId);
      counts.set(schoolId, {label, count: (current?.count || 0) + 1});
    }
    return Array.from(counts, ([id, value]) => ({id, ...value})).sort(
      (left, right) => right.count - left.count || left.label.localeCompare(right.label, 'ja'),
    );
  }, [activeDocuments, language]);

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
          title: document.universityName
            || getUniversityLabel(document.universityId || undefined, language),
          documents: [],
        });
      }
      groups.get(schoolId)!.documents.push(document);
    }
    return Array.from(groups, ([schoolId, group]) => ({schoolId, ...group})).sort(
      (left, right) => right.documents.length - left.documents.length
        || left.title.localeCompare(right.title, 'ja'),
    );
  }, [language, visibleDocuments]);

  const onSelectTopic = (topicId: AggregateTopicSelection) => {
    setActiveTopic(topicId);
  };

  const activeTopicTitle = activeTopic === 'all'
    ? t.allTopics
    : activeTopic === 'unclassified'
      ? t.unclassified
      : getTopicDisplayName(activeTopic);
  const remainingTopicCount = Math.max(0, sortedTopics.length - TOPIC_PREVIEW_LIMIT);
  const subsubjectRouteLabel = `/${getSubsubjectShortId(subsubjectId)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()}`;

  return (
    <div className={clsx('container', styles.pageContainer, styles.aggregatePageContainer)}>
      <div className="row">
        <main className="col col--12">
          {tag.unlisted && <Unlisted />}
          <ContentBrowseModes section="exams" activeMode="tags" />
          <header className={`${styles.pageHeader} ${styles.aggregateHeader}`}>
            <div className={styles.aggregateBreadcrumb}>
              <span>{getSubjectLabel(subjectId, language)}</span>
              <span aria-hidden="true">/</span>
              <span>{getSubsubjectLabel(subsubjectId, language)}</span>
            </div>
            <Heading as="h1" className={`${styles.pageTitle} ${styles.aggregateTitle}`}>
              {getSubsubjectLabel(subsubjectId, language)}
            </Heading>
            {(getSubsubjectDescription(subsubjectId, language) || tag.description) && (
              <p className={styles.pageDescription}>
                {getSubsubjectDescription(subsubjectId, language) || tag.description}
              </p>
            )}
            <div className={styles.aggregateStats}>
              <span>{t.documentStat(allDocuments.length)}</span>
              <span>{t.topicStat(browse.topics.length)}</span>
              <span>{t.schoolStat(allSchoolCount)}</span>
            </div>
          </header>
          <div className={styles.aggregateDivider} />

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
                    to={tag.permalink}
                    className={`${styles.topicDirectoryLink} ${activeTopic === 'all' ? styles.topicDirectoryLinkActive : ''}`}
                    aria-current={activeTopic === 'all' ? 'page' : undefined}
                    onClick={() => onSelectTopic('all')}>
                    <span>{t.allTopics}</span>
                    <span className={styles.topicDirectoryCount}>{allDocuments.length}</span>
                  </Link>
                  {browse.directDocIds.length > 0 && (
                    <Link
                      id={UNCLASSIFIED_ANCHOR}
                      to={`${tag.permalink}#${UNCLASSIFIED_ANCHOR}`}
                      title={t.directHint}
                      className={`${styles.topicDirectoryLink} ${activeTopic === 'unclassified' ? styles.topicDirectoryLinkActive : ''}`}
                      aria-current={activeTopic === 'unclassified' ? 'location' : undefined}
                      onClick={() => onSelectTopic('unclassified')}>
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
                        to={`${tag.permalink}#${anchor}`}
                        className={`${styles.topicDirectoryLink} ${activeTopic === topic.id ? styles.topicDirectoryLinkActive : ''}`}
                        aria-current={activeTopic === topic.id ? 'location' : undefined}
                        onClick={() => onSelectTopic(topic.id)}>
                        <span>{getTopicDisplayName(topic.id)}</span>
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
                    <span>{t.docCount(activeDocuments.length)}</span>
                    <span aria-hidden="true">·</span>
                    <span className={styles.aggregateRouteLabel}>{subsubjectRouteLabel}</span>
                  </p>
                </div>
                <label className={styles.schoolFilter}>
                  <span className={styles.schoolFilterLabel}>{t.schoolFilter}</span>
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

              <div className={styles.compactSchoolList}>
                {schoolGroups.length > 0 ? schoolGroups.map((group) => (
                  <CompactSchoolGroup
                    key={group.schoolId}
                    schoolId={group.schoolId}
                    title={group.title}
                    documents={group.documents}
                    parentPermalink={tag.permalink}
                    topicLookup={topicLookup}
                    directDocIds={directDocIds}
                    language={language}
                    onSelectTopic={onSelectTopic}
                  />
                )) : (
                  <p className={styles.aggregateEmpty}>{t.noResults}</p>
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
  const aggregateTag = tag as TagWithBrowse;
  const description = aggregateTag.browse && getSubsubjectId(tag.label)
    ? getSubsubjectDescription(tag.label, language) || tag.description
    : tag.description;
  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

function DocTagDocListPageContent({
  tag,
  title,
  language,
}: Props & {title: string; language: Language}): ReactNode {
  const aggregateTag = tag as TagWithBrowse;
  if (aggregateTag.browse && getSubsubjectId(tag.label)) {
    return (
      <HtmlClassNameProvider
        className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
        <SubsubjectBrowsePage
          tag={aggregateTag}
          browse={aggregateTag.browse}
          title={title}
          language={language}
        />
      </HtmlClassNameProvider>
    );
  }

  const tagKind = getTagKind(tag.label, language);
  const groupBy = getSchoolTag(tag.label) ? 'school' : 'topic';
  const groups = groupDocs(tag.items, tag.label, language);
  const t = getCopy(language);
  const displayName = getTagDisplayName(tag.label);

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
      <div className={clsx('container', styles.pageContainer)}>
        <div className="row">
          <main className="col col--10 col--offset-1">
            {tag.unlisted && <Unlisted />}
            <ContentBrowseModes section="exams" activeMode="tags" />
            <header className={styles.pageHeader}>
              <div className={styles.typeRow}>
                <span className={`${styles.typeBadge} ${styles[tagKind.tone]}`}>
                  {tagKind.label}
                </span>
                {tagKind.details && <span className={styles.typeDetails}>{tagKind.details}</span>}
              </div>
              <Heading as="h1" className={styles.pageTitle}>
                {displayName}
              </Heading>
              {tag.description && <p className={styles.pageDescription}>{tag.description}</p>}
              <div className={styles.headerActions}>
                <span className={styles.tagCount}>{t.docCount(tag.count)}</span>
                <Link href={tag.allTagsPath} className={styles.allTagsLink}>
                  {t.allTags}
                </Link>
              </div>
            </header>

            <section className={styles.groupList} aria-label={title}>
              {groups.map((group) => (
                <article key={group.sortKey} className={styles.docGroup}>
                  <div className={styles.docGroupHeader}>
                    <Heading as="h2" className={styles.docGroupTitle}>
                      {group.title}
                    </Heading>
                    <span className={styles.docGroupCount}>{group.items.length}</span>
                  </div>
                  <div className={styles.docList}>
                    {group.items.map((doc) => (
                      <DocItem
                        key={getDocId(doc)}
                        doc={doc}
                        groupBy={groupBy}
                        language={language}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagDocListPage(props: Props): ReactNode {
  const language = normalizeLanguage(useCurrentLanguage()) as Language;
  const title = getPageTitle(props, language);
  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} language={language} />
      <DocTagDocListPageContent {...props} title={title} language={language} />
    </>
  );
}
