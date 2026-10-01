/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useMemo, useState, type ReactNode} from 'react';
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
  getTagLabel,
  getTagDescription,
  compareTagLabels,
  matchesTagSearch,
  resolveTagBrowseTarget,
} from '@site/src/utils/tags';
import styles from './styles.module.css';

interface TagType {
  label: string;
  permalink: string;
  count: number;
  description?: string;
}

interface SubsubjectMeta {
  subject?: string;
}

interface TopicMeta {
  subsubject?: string;
  relatedSubjects?: string[];
}

type Language = 'zh' | 'ja' | 'en';

const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;
const topics = tagTaxonomy.topics as Record<string, TopicMeta>;
const subjectOrder = tagTaxonomy.subjectOrder as string[];
const subsubjectOrder = tagTaxonomy.subsubjectOrder as string[];

const getCopy = (language: Language) => getUiMessages('tagsList', language);

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

function getPrimarySubject(tagLabel: string): string {
  const subsubjectId = getSubsubjectId(tagLabel);
  if (subsubjectId) return subsubjects[subsubjectId]?.subject || 'General';
  const topicSubsubject = subsubjects[getTopicSubsubjectId(tagLabel)];
  return topicSubsubject?.subject || 'General';
}

function byCountThenName(a: TagType, b: TagType, language: Language): number {
  return b.count - a.count || compareTagLabels(a.label, b.label, language);
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
    .map((id) => getTagLabel(id, language));

  return (
    <Link to={browseTarget.href} className={styles.topicLink}>
      <span className={styles.topicName}>{getTagLabel(tag.label, language)}</span>
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
  const topicTags = [...group.topicTags].sort((a, b) => byCountThenName(a, b, language));
  const label = getTagLabel(group.subsubjectId, language);
  const description = getTagDescription(group.subsubjectId, language);
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
  const subjectDescription = getTagDescription(subjectId, language);

  return (
    <section className={`${styles.subjectPanel} ${isActive ? styles.subjectPanelActive : ''}`}>
      <header className={styles.subjectPanelHeader}>
        <div>
          <Heading
            as="h2"
            id={getSubjectAnchorId(subjectId)}
            className={styles.subjectPanelTitle}>
            {getTagLabel(subjectId, language)}
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
      return compareTagLabels(a.subsubjectId, b.subsubjectId, language);
    });
  };

  const search = query.trim();
  const isSearching = search.length > 0;
  const visibleGroups = new Map<string, DisplaySubsubjectGroup[]>();

  for (const subjectId of orderedSubjects) {
    const sourceGroups = orderedGroups(bySubject.get(subjectId)!);
    if (!isSearching) {
      visibleGroups.set(subjectId, sourceGroups);
      continue;
    }

    const subjectMatches = matchesTagSearch(subjectId, search);
    const filteredGroups = sourceGroups.flatMap((group) => {
      const subsubjectMatches = matchesTagSearch(group.subsubjectId, search);
      const matchingTopics = group.topicTags.filter((tag) => matchesTagSearch(tag.label, search));

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
          {t.topicsTitle} · {Array.from(visibleGroups.values()).reduce((total, groups) => total + countGroupTags(groups), 0)} / {subsubjectTags.length + topicTags.length}
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
              <span>{getTagLabel(subjectId, language)}</span>
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

export default function TagsListByLetter({tags}: Props): ReactNode {
  const language = normalizeLanguage(useCurrentLanguage()) as Language;
  const {subsubjectTags, topicTags} = useMemo(() => {
    const groups = {
      subsubjectTags: [] as TagType[],
      topicTags: [] as TagType[],
    };
    for (const tag of tags as TagType[]) {
      if (getSubsubjectMeta(tag.label)) groups.subsubjectTags.push(tag);
      else if (getTopicMeta(tag.label)) groups.topicTags.push(tag);
    }
    return groups;
  }, [tags]);
  return (
    <section className={styles.tagsContainer}>
      <LearningSections
        subsubjectTags={subsubjectTags}
        topicTags={topicTags}
        language={language}
      />
    </section>
  );
}
