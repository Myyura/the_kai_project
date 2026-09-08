/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useMemo, useRef, useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/TagsListByLetter';
import Heading from '@theme/Heading';
import {FiChevronDown} from 'react-icons/fi';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {normalizeLanguage} from '@site/src/i18n/config';
import {getUiMessages} from '@site/src/i18n/messages';
import {
  getSubsubjectShortId,
  getTopicShortId,
  resolveTagBrowseTarget,
} from '@site/src/utils/tagBrowseTarget';
import styles from './styles.module.css';

interface TagType {
  label: string;
  permalink: string;
  count: number;
  description?: string;
}

interface LocalizedMeta {
  labelZh?: string;
  labelJa?: string;
  labelEn?: string;
  descriptionZh?: string;
  descriptionJa?: string;
  descriptionEn?: string;
}

interface SubsubjectMeta extends LocalizedMeta {
  subject?: string;
}

interface TopicMeta {
  subsubject?: string;
  relatedSubjects?: string[];
}

type Language = 'zh' | 'ja' | 'en';
type Tone = 'school' | 'subsubject' | 'topic' | 'pending';

const subjects = tagTaxonomy.subjects as Record<string, LocalizedMeta>;
const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;
const topics = tagTaxonomy.topics as Record<string, TopicMeta>;
const schoolTags = tagTaxonomy.schoolTags as Record<
  string,
  {label?: string; universityId?: string; aliases?: string[]}
>;
const subjectOrder = tagTaxonomy.subjectOrder as string[];
const subsubjectOrder = tagTaxonomy.subsubjectOrder as string[];

const getCopy = (language: Language) => getUiMessages('tagsList', language);

function getLocalizedLabel(meta: LocalizedMeta | undefined, fallback: string, language: Language): string {
  if (language === 'en') return meta?.labelEn || fallback;
  return (language === 'ja' ? meta?.labelJa : meta?.labelZh) || fallback;
}

function getLocalizedDescription(meta: LocalizedMeta | undefined, language: Language): string | undefined {
  if (language === 'en') return meta?.descriptionEn;
  return language === 'ja' ? meta?.descriptionJa : meta?.descriptionZh;
}

function getSubjectLabel(subjectId: string, language: Language): string {
  return getLocalizedLabel(subjects[subjectId], subjectId, language);
}

function getSubjectDescription(subjectId: string, language: Language): string | undefined {
  return getLocalizedDescription(subjects[subjectId], language);
}

function getSubjectAnchorId(subjectId: string): string {
  return `subject-${subjectId.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function decodeHash(hash: string): string {
  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}

function getSubjectIdFromHash(hash: string, subjectIds: string[]): string | null {
  const normalizedHash = decodeHash(hash).replace(/^#/, '');
  return subjectIds.find((subjectId) => getSubjectAnchorId(subjectId) === normalizedHash) || null;
}

function getSubsubjectLabel(subsubjectId: string, language: Language): string {
  return getLocalizedLabel(subsubjects[subsubjectId], subsubjectId, language);
}

function getSubsubjectDescription(subsubjectId: string, language: Language): string | undefined {
  return getLocalizedDescription(subsubjects[subsubjectId], language);
}

const schoolTagLookup = new Set(
  Object.entries(schoolTags).flatMap(([tag, meta]) => [
    tag,
    ...(meta.aliases || []),
  ]),
);

function getSubsubjectId(tagLabel: string): string | null {
  if (subsubjects[tagLabel]) return tagLabel;
  return null;
}

function getSubsubjectMeta(tagLabel: string): SubsubjectMeta | null {
  const id = getSubsubjectId(tagLabel);
  return id ? subsubjects[id] : null;
}

function getTopicId(tagLabel: string): string | null {
  if (topics[tagLabel]) return tagLabel;
  return null;
}

function getTopicMeta(tagLabel: string): TopicMeta | null {
  const id = getTopicId(tagLabel);
  return id ? topics[id] : null;
}

function getTopicSubsubjectId(tagLabel: string): string {
  return getTopicMeta(tagLabel)?.subsubject || '';
}

function getSubsubjectDisplayId(subsubjectId: string): string {
  return getSubsubjectShortId(subsubjectId);
}

function getTagDisplayName(tagLabel: string): string {
  if (getTopicMeta(tagLabel)) return getTopicShortId(tagLabel);
  if (getSubsubjectMeta(tagLabel)) return getSubsubjectDisplayId(tagLabel);
  return tagLabel;
}

function getPrimarySubject(tagLabel: string): string {
  const subsubjectId = getSubsubjectId(tagLabel);
  if (subsubjectId) return subsubjects[subsubjectId]?.subject || 'General';
  const topicSubsubject = subsubjects[getTopicSubsubjectId(tagLabel)];
  return topicSubsubject?.subject || 'General';
}

function isSchoolTag(tagLabel: string): boolean {
  return schoolTagLookup.has(tagLabel);
}

function byCountThenName(a: TagType, b: TagType): number {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function TagPill({
  tag,
  displayName,
  tone,
}: {
  tag: TagType;
  displayName?: string;
  tone?: Tone;
}) {
  const browseTarget = resolveTagBrowseTarget(tag.label, tag.permalink);

  return (
    <Link
      to={browseTarget.href}
      className={`${styles.tagPill} ${tone ? styles[tone] : ''}`}>
      <span className={styles.tagMainRow}>
        <span className={styles.tagName}>{displayName || getTagDisplayName(tag.label)}</span>
        <span className={styles.tagPillCount}>{tag.count}</span>
      </span>
    </Link>
  );
}

function SchoolSection({tags, language}: {tags: TagType[]; language: Language}) {
  const t = getCopy(language);
  const [query, setQuery] = useState('');
  if (tags.length === 0) return null;
  const search = query.trim().toLocaleLowerCase();
  const filteredTags = tags.filter((tag) => {
    const school = schoolTags[tag.label];
    return !search || textMatches(
      search,
      tag.label,
      school?.label,
      school?.universityId,
      ...(school?.aliases || []),
    );
  });

  return (
    <section className={styles.schoolPanel}>
      <header className={styles.explorerHeader}>
        <Heading as="h2" className={styles.panelTitle}>{t.schoolTitle}</Heading>
        <BrowseSearchField
          id="school-tag-search"
          className={styles.searchField}
          value={query}
          onChange={setQuery}
          label={t.schoolSearchPlaceholder}
          resultsId="school-tag-results"
        />
      </header>
      <p className={styles.resultCount} role="status">{t.schoolsView} · {filteredTags.length} / {tags.length}</p>
      <div id="school-tag-results">
      {filteredTags.length > 0 ? (
        <div className={styles.schoolGrid}>
          {filteredTags.sort(byCountThenName).map((tag) => {
          const school = schoolTags[tag.label];
          return (
            <TagPill
              key={tag.permalink}
              tag={tag}
              displayName={school?.label || tag.label}
              tone="school"
            />
          );
          })}
        </div>
      ) : (
        <BrowseEmptyState
          message={t.noSchoolResults}
          onReset={query ? () => setQuery('') : undefined}
          focusTargetId="school-tag-search"
        />
      )}
      </div>
    </section>
  );
}

interface SubsubjectGroup {
  subsubjectId: string;
  subsubjectTag?: TagType;
  topicTags: TagType[];
}

interface DisplaySubsubjectGroup extends SubsubjectGroup {
  autoOpen?: boolean;
}

function countGroupTags(groups: SubsubjectGroup[]): number {
  return groups.reduce(
    (sum, group) => sum + group.topicTags.length + (group.subsubjectTag ? 1 : 0),
    0,
  );
}

function textMatches(query: string, ...values: Array<string | undefined>): boolean {
  return values.some((value) => value?.toLocaleLowerCase().includes(query));
}

function TopicLink({
  tag,
  language,
}: {
  tag: TagType;
  language: Language;
}) {
  const t = getCopy(language);
  const browseTarget = resolveTagBrowseTarget(tag.label, tag.permalink);
  const secondarySubjects = (getTopicMeta(tag.label)?.relatedSubjects || [])
    .map((id) => getSubjectLabel(id, language));

  return (
    <Link to={browseTarget.href} className={styles.topicLink}>
      <span className={styles.topicName}>{getTopicShortId(tag.label)}</span>
      {secondarySubjects.length > 0 && (
        <span className={styles.topicRelated}>
          <span className={styles.topicRelatedLabel}>{t.relatedSubjects}</span>
          {secondarySubjects.map((subject) => (
            <span key={subject} className={styles.topicRelatedChip}>{subject}</span>
          ))}
        </span>
      )}
      <span className={styles.topicCount}>{tag.count}</span>
    </Link>
  );
}

function SubsubjectRow({
  group,
  language,
  isSearching,
}: {
  group: DisplaySubsubjectGroup;
  language: Language;
  isSearching: boolean;
}) {
  const t = getCopy(language);
  const framework = getUiMessages('framework', language);
  const [expanded, setExpanded] = useState(Boolean(isSearching && group.autoOpen));
  const topicTags = [...group.topicTags].sort(byCountThenName);
  const label = getSubsubjectLabel(group.subsubjectId, language);
  const shortId = getSubsubjectDisplayId(group.subsubjectId);
  const description = getSubsubjectDescription(group.subsubjectId, language);
  const target = resolveTagBrowseTarget(group.subsubjectId);
  const panelId = `subsubject-topics-${group.subsubjectId}`;

  useEffect(() => {
    if (isSearching) setExpanded(Boolean(group.autoOpen));
  }, [isSearching, group.autoOpen]);

  return (
    <div>
      <div className={styles.subsubjectSummary}>
        <div className={styles.subsubjectSummaryText}>
          <Link to={target.href} className={styles.subsubjectLink}>
            <span>{label}</span>
            {label !== shortId && <span className={styles.subsubjectId}>({shortId})</span>}
          </Link>
          {description && <p className={styles.subsubjectDescription}>{description}</p>}
        </div>
        {topicTags.length > 0 ? (
          <button
            type="button"
            className={styles.topicToggle}
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-label={expanded ? framework.collapseCategory(label) : framework.expandCategory(label)}
            onClick={() => setExpanded((value) => !value)}>
            <span>{t.topicEntry}</span>
            <span className={styles.rowCount}>{topicTags.length}</span>
            <FiChevronDown className={styles.rowChevron} aria-hidden="true" />
          </button>
        ) : group.subsubjectTag && (
          <span className={styles.rowCount}>{group.subsubjectTag.count}</span>
        )}
      </div>
      {topicTags.length > 0 && (
        <div id={panelId} className={styles.topicRows} hidden={!expanded}>
          {topicTags.map((tag) => <TopicLink key={tag.permalink} tag={tag} language={language} />)}
        </div>
      )}
    </div>
  );
}

function SubjectPanel({
  subjectId,
  groups,
  language,
  isSearching,
  isActive,
}: {
  subjectId: string;
  groups: DisplaySubsubjectGroup[];
  language: Language;
  isSearching: boolean;
  isActive: boolean;
}) {
  const subjectDescription = getSubjectDescription(subjectId, language);

  return (
    <section className={`${styles.subjectPanel} ${isActive ? styles.subjectPanelActive : ''}`}>
      <header className={styles.subjectPanelHeader}>
        <div>
          <Heading
            as="h2"
            id={getSubjectAnchorId(subjectId)}
            className={styles.subjectPanelTitle}>
            {getSubjectLabel(subjectId, language)}
          </Heading>
          {subjectDescription && (
            <p className={styles.subjectPanelDescription}>{subjectDescription}</p>
          )}
        </div>
        <span className={styles.subjectPanelCount}>{countGroupTags(groups)}</span>
      </header>
      <div className={styles.subsubjectRows}>
        {groups.map((group) => (
          <SubsubjectRow
            key={group.subsubjectId}
            group={group}
            language={language}
            isSearching={isSearching}
          />
        ))}
      </div>
    </section>
  );
}

function LearningSections({
  subsubjectTags,
  topicTags,
  language,
}: {
  subsubjectTags: TagType[];
  topicTags: TagType[];
  language: Language;
}) {
  const t = getCopy(language);
  const [query, setQuery] = useState('');
  const bySubject = useMemo(() => {
    const grouped = new Map<string, Map<string, SubsubjectGroup>>();
    const ensureGroup = (subjectId: string, subsubjectId: string): SubsubjectGroup => {
      if (!grouped.has(subjectId)) grouped.set(subjectId, new Map());
      const subjectGroups = grouped.get(subjectId)!;
      if (!subjectGroups.has(subsubjectId)) {
        subjectGroups.set(subsubjectId, {subsubjectId, topicTags: []});
      }
      return subjectGroups.get(subsubjectId)!;
    };

    for (const tag of subsubjectTags) {
      const subsubjectId = getSubsubjectId(tag.label) || 'General.Reference-Material';
      ensureGroup(getPrimarySubject(tag.label), subsubjectId).subsubjectTag = tag;
    }
    for (const tag of topicTags) {
      const subsubjectId = getTopicSubsubjectId(tag.label);
      ensureGroup(getPrimarySubject(tag.label), subsubjectId).topicTags.push(tag);
    }
    return grouped;
  }, [subsubjectTags, topicTags]);

  const orderedSubjects = useMemo(() => [
    ...subjectOrder.filter((subject) => bySubject.has(subject)),
    ...Array.from(bySubject.keys()).filter((subject) => !subjectOrder.includes(subject)),
  ], [bySubject]);
  const [selectedSubject, setSelectedSubject] = useState(() => {
    if (typeof window === 'undefined') return orderedSubjects[0] || '';
    return getSubjectIdFromHash(window.location.hash, orderedSubjects) || orderedSubjects[0] || '';
  });

  useEffect(() => {
    if (!orderedSubjects.includes(selectedSubject)) {
      setSelectedSubject(orderedSubjects[0] || '');
    }
  }, [orderedSubjects, selectedSubject]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const syncSubjectFromHash = () => {
      const subjectFromHash = getSubjectIdFromHash(window.location.hash, orderedSubjects);
      if (subjectFromHash) {
        setQuery('');
        setSelectedSubject(subjectFromHash);
      }
    };

    syncSubjectFromHash();
    window.addEventListener('hashchange', syncSubjectFromHash);
    window.addEventListener('popstate', syncSubjectFromHash);
    return () => {
      window.removeEventListener('hashchange', syncSubjectFromHash);
      window.removeEventListener('popstate', syncSubjectFromHash);
    };
  }, [orderedSubjects]);

  const navigateToSubject = (event: React.MouseEvent<HTMLAnchorElement>, subjectId: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const anchorId = getSubjectAnchorId(subjectId);
    setQuery('');
    setSelectedSubject(subjectId);

    if (typeof window === 'undefined') return;
    window.history.pushState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${anchorId}`,
    );
    window.requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView({block: 'start'});
    });
  };

  const orderedGroups = (groups: Map<string, SubsubjectGroup>) => {
    const order = new Map(subsubjectOrder.map((id, index) => [id, index]));
    return Array.from(groups.values()).sort((a, b) => {
      const ai = order.get(a.subsubjectId) ?? Number.MAX_SAFE_INTEGER;
      const bi = order.get(b.subsubjectId) ?? Number.MAX_SAFE_INTEGER;
      if (ai !== bi) return ai - bi;
      return getSubsubjectLabel(a.subsubjectId, language)
        .localeCompare(getSubsubjectLabel(b.subsubjectId, language), 'en');
    });
  };

  const search = query.trim().toLocaleLowerCase();
  const isSearching = search.length > 0;
  const visibleGroups = new Map<string, DisplaySubsubjectGroup[]>();

  for (const subjectId of orderedSubjects) {
    const sourceGroups = orderedGroups(bySubject.get(subjectId)!);
    if (!isSearching) {
      visibleGroups.set(subjectId, sourceGroups);
      continue;
    }

    const subjectMatches = textMatches(
      search,
      subjectId,
      getSubjectLabel(subjectId, language),
      getSubjectDescription(subjectId, language),
    );
    const filteredGroups = sourceGroups.flatMap((group) => {
      const subsubjectMatches = textMatches(
        search,
        group.subsubjectId,
        getSubsubjectLabel(group.subsubjectId, language),
        getSubsubjectDescription(group.subsubjectId, language),
      );
      const matchingTopics = group.topicTags.filter((tag) => textMatches(
        search,
        tag.label,
        getTopicShortId(tag.label),
      ));

      if (!subjectMatches && !subsubjectMatches && matchingTopics.length === 0) return [];
      return [{
        ...group,
        topicTags: subjectMatches || subsubjectMatches ? group.topicTags : matchingTopics,
        autoOpen: !subjectMatches && (subsubjectMatches || matchingTopics.length > 0),
      }];
    });
    if (filteredGroups.length > 0) visibleGroups.set(subjectId, filteredGroups);
  }

  const navigationSubjects = isSearching
    ? orderedSubjects.filter((subjectId) => visibleGroups.has(subjectId))
    : orderedSubjects;
  const displayedSubjects = navigationSubjects;

  if (subsubjectTags.length + topicTags.length === 0) return null;

  return (
    <section className={styles.learningExplorer}>
      <header className={styles.explorerHeader}>
        <Heading as="h2" className={styles.explorerTitle}>{t.topicsTitle}</Heading>
        <BrowseSearchField
          id="learning-tag-search"
          className={styles.searchField}
          value={query}
          onChange={setQuery}
          label={t.searchPlaceholder}
          resultsId="learning-tag-results"
        />
      </header>
      {isSearching && (
        <p className={styles.resultCount} role="status">
          {t.learningView} · {Array.from(visibleGroups.values()).reduce((total, groups) => total + countGroupTags(groups), 0)} / {subsubjectTags.length + topicTags.length}
        </p>
      )}
      <div className={styles.explorerLayout}>
        <nav className={styles.subjectNavigation} aria-label={t.subjectNavigation}>
          {navigationSubjects.map((subjectId) => (
            <Link
              key={subjectId}
              to={`#${getSubjectAnchorId(subjectId)}`}
              className={`${styles.subjectNavItem} ${!isSearching && selectedSubject === subjectId ? styles.subjectNavItemActive : ''}`}
              aria-current={!isSearching && selectedSubject === subjectId ? 'true' : undefined}
              onClick={(event) => navigateToSubject(event, subjectId)}>
              <span>{getSubjectLabel(subjectId, language)}</span>
              <span className={styles.subjectNavCount}>
                {countGroupTags(orderedGroups(bySubject.get(subjectId)!))}
              </span>
            </Link>
          ))}
        </nav>
        <div className={styles.subjectResults} id="learning-tag-results">
          {displayedSubjects.map((subjectId) => (
            <SubjectPanel
              key={subjectId}
              subjectId={subjectId}
              groups={visibleGroups.get(subjectId)!}
              language={language}
              isSearching={isSearching}
              isActive={!isSearching && selectedSubject === subjectId}
            />
          ))}
          {isSearching && displayedSubjects.length === 0 && (
            <BrowseEmptyState message={t.noResults} onReset={() => setQuery('')} focusTargetId="learning-tag-search" />
          )}
        </div>
      </div>
    </section>
  );
}

function PendingSection({tags, language}: {tags: TagType[]; language: Language}) {
  if (tags.length === 0) return null;
  const t = getCopy(language);

  return (
    <section className={styles.pendingPanel}>
      <header className={styles.simplePanelHeader}>
        <Heading as="h2" className={styles.panelTitle}>{t.pendingTitle}</Heading>
        <span className={styles.panelCount}>{tags.length}</span>
      </header>
      <div className={styles.tagGrid}>
        {[...tags].sort(byCountThenName).map((tag) => (
          <TagPill key={tag.permalink} tag={tag} tone="pending" />
        ))}
      </div>
    </section>
  );
}

export default function TagsListByLetter({tags}: Props): ReactNode {
  const language = normalizeLanguage(useCurrentLanguage()) as Language;
  const t = getCopy(language);
  const [activeView, setActiveView] = useState<'learning' | 'schools'>('learning');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const {universityTags, subsubjectTags, topicTags, pendingTags} = useMemo(() => {
    const groups = {
      universityTags: [] as TagType[],
      subsubjectTags: [] as TagType[],
      topicTags: [] as TagType[],
      pendingTags: [] as TagType[],
    };
    for (const tag of tags as TagType[]) {
      if (isSchoolTag(tag.label)) groups.universityTags.push(tag);
      else if (getSubsubjectMeta(tag.label)) groups.subsubjectTags.push(tag);
      else if (getTopicMeta(tag.label)) groups.topicTags.push(tag);
      else groups.pendingTags.push(tag);
    }
    return groups;
  }, [tags]);
  const learningCount = subsubjectTags.length + topicTags.length;
  const views = [
    {id: 'learning' as const, label: t.learningView, count: learningCount},
    {id: 'schools' as const, label: t.schoolsView, count: universityTags.length},
  ];

  useEffect(() => {
    const revealSubject = () => {
      if (decodeHash(window.location.hash).startsWith('#subject-')) setActiveView('learning');
    };
    window.addEventListener('hashchange', revealSubject);
    window.addEventListener('popstate', revealSubject);
    return () => {
      window.removeEventListener('hashchange', revealSubject);
      window.removeEventListener('popstate', revealSubject);
    };
  }, []);

  const handleTabKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % views.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index + views.length - 1) % views.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = views.length - 1;
    else return;
    event.preventDefault();
    setActiveView(views[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className={styles.tagsContainer}>
      <div className={styles.viewTabs} role="tablist" aria-label={t.viewTabsLabel}>
        {views.map((view, index) => (
          <button
            key={view.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            id={`tags-tab-${view.id}`}
            type="button"
            role="tab"
            aria-selected={activeView === view.id}
            aria-controls={`tags-panel-${view.id}`}
            tabIndex={activeView === view.id ? 0 : -1}
            className={`${styles.viewTab} ${activeView === view.id ? styles.viewTabActive : ''}`}
            onClick={() => setActiveView(view.id)}
            onKeyDown={(event) => handleTabKey(event, index)}>
            <span>{view.label}</span>
            <span className={styles.viewTabCount}>{view.count}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id="tags-panel-learning" aria-labelledby="tags-tab-learning" hidden={activeView !== 'learning'}>
          <LearningSections
            subsubjectTags={subsubjectTags}
            topicTags={topicTags}
            language={language}
          />
          <PendingSection tags={pendingTags} language={language} />
      </div>
      <div role="tabpanel" id="tags-panel-schools" aria-labelledby="tags-tab-schools" hidden={activeView !== 'schools'}>
        <SchoolSection tags={universityTags} language={language} />
      </div>
    </section>
  );
}
