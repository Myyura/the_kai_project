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
import {FiChevronDown, FiSearch} from 'react-icons/fi';
import tagTaxonomy from '@site/src/data/tagTaxonomy.json';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {normalizeLanguage} from '@site/src/i18n/config';
import {getUiMessages} from '@site/src/i18n/messages';
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
  subjects?: string[];
}

type Language = 'zh' | 'ja' | 'en';
type Tone = 'school' | 'subsubject' | 'topic' | 'pending' | 'deprecated';

const subjects = tagTaxonomy.subjects as Record<string, LocalizedMeta>;
const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;
const topics = tagTaxonomy.topics as Record<string, TopicMeta>;
const schoolTags = tagTaxonomy.schoolTags as Record<
  string,
  {label?: string; aliases?: string[]}
>;
const deprecatedTags = tagTaxonomy.deprecatedTags as Record<
  string,
  {replaceWith: string; reason?: string}
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
  return getTopicMeta(tagLabel)?.subsubject || 'General.Reference-Material';
}

function getSubsubjectShortId(subsubjectId: string): string {
  const subjectId = subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

function getSubsubjectDisplayId(subsubjectId: string): string {
  return getSubsubjectShortId(subsubjectId);
}

function getTopicShortId(topicId: string): string {
  const topic = getTopicMeta(topicId);
  const prefix = topic?.subsubject ? `${topic.subsubject}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
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
  return topicSubsubject?.subject || getTopicMeta(tagLabel)?.subjects?.[0] || 'General';
}

function isSchoolTag(tagLabel: string): boolean {
  return schoolTagLookup.has(tagLabel);
}

function isDeprecatedTag(tagLabel: string): boolean {
  return Boolean(deprecatedTags[tagLabel]);
}

function byCountThenName(a: TagType, b: TagType): number {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function TagPill({
  tag,
  displayName,
  detailLabel,
  detailValues,
  tone,
}: {
  tag: TagType;
  displayName?: string;
  detailLabel?: string;
  detailValues?: ReactNode[];
  tone?: Tone;
}) {
  const hasDetails = Boolean(detailLabel && detailValues?.length);

  return (
    <Link
      to={tag.permalink}
      className={`${styles.tagPill} ${tone ? styles[tone] : ''} ${hasDetails ? styles.withDetails : ''}`}>
      <span className={styles.tagMainRow}>
        <span className={styles.tagName}>{displayName || getTagDisplayName(tag.label)}</span>
        <span className={styles.tagPillCount}>{tag.count}</span>
      </span>
      {hasDetails && (
        <span className={styles.tagDetailRow}>
          <span className={styles.tagDetailLabel}>{detailLabel}</span>
          <span className={styles.tagDetailChips}>
            {detailValues!.map((value, index) => (
              <span key={index} className={styles.tagDetailChip}>
                {value}
              </span>
            ))}
          </span>
        </span>
      )}
    </Link>
  );
}

function SchoolSection({tags, language}: {tags: TagType[]; language: Language}) {
  if (tags.length === 0) return null;
  const t = getCopy(language);

  return (
    <section className={styles.schoolPanel} role="tabpanel" id="tags-panel-schools">
      <header className={styles.simplePanelHeader}>
        <Heading as="h2" className={styles.panelTitle}>{t.schoolTitle}</Heading>
        <span className={styles.panelCount}>{tags.length}</span>
      </header>
      <div className={styles.schoolGrid}>
        {tags.sort(byCountThenName).map((tag) => {
          const school = schoolTags[tag.label];
          return (
            <TagPill
              key={tag.permalink}
              tag={tag}
              displayName={tag.label}
              tone="school"
              detailLabel={school?.label && school.label !== tag.label ? t.schoolDisplayName : undefined}
              detailValues={school?.label && school.label !== tag.label ? [school.label] : undefined}
            />
          );
        })}
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
  subjectId,
  language,
}: {
  tag: TagType;
  subjectId: string;
  language: Language;
}) {
  const t = getCopy(language);
  const secondarySubjects = (getTopicMeta(tag.label)?.subjects || [])
    .filter((id) => id !== subjectId)
    .map((id) => getSubjectLabel(id, language));

  return (
    <Link
      to={tag.permalink}
      className={`${styles.topicLink} ${isDeprecatedTag(tag.label) ? styles.deprecated : ''}`}>
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

function SubjectPanel({
  subjectId,
  groups,
  language,
  isSearching,
}: {
  subjectId: string;
  groups: DisplaySubsubjectGroup[];
  language: Language;
  isSearching: boolean;
}) {
  const subjectDescription = getSubjectDescription(subjectId, language);

  return (
    <section className={styles.subjectPanel}>
      <header className={styles.subjectPanelHeader}>
        <div>
          <Heading as="h2" className={styles.subjectPanelTitle}>
            {getSubjectLabel(subjectId, language)}
          </Heading>
          {subjectDescription && (
            <p className={styles.subjectPanelDescription}>{subjectDescription}</p>
          )}
        </div>
        <span className={styles.subjectPanelCount}>{countGroupTags(groups)}</span>
      </header>
      <div className={styles.subsubjectRows}>
        {groups.map((group) => {
          const topicTags = [...group.topicTags].sort(byCountThenName);
          const subsubjectTitle = (
            <>
              <span>{getSubsubjectLabel(group.subsubjectId, language)}</span>
              <span className={styles.subsubjectId}>
                ({getSubsubjectDisplayId(group.subsubjectId)})
              </span>
            </>
          );
          const title = group.subsubjectTag ? (
            <Link to={group.subsubjectTag.permalink} className={styles.subsubjectLink}>
              {subsubjectTitle}
            </Link>
          ) : (
            <span className={styles.subsubjectName}>{subsubjectTitle}</span>
          );

          if (topicTags.length === 0) {
            return (
              <div key={group.subsubjectId} className={styles.subsubjectStaticRow}>
                <div>
                  {title}
                  {getSubsubjectDescription(group.subsubjectId, language) && (
                    <p className={styles.subsubjectDescription}>
                      {getSubsubjectDescription(group.subsubjectId, language)}
                    </p>
                  )}
                </div>
                {group.subsubjectTag && (
                  <span className={styles.rowCount}>{group.subsubjectTag.count}</span>
                )}
              </div>
            );
          }

          return (
            <details
              key={`${group.subsubjectId}-${isSearching ? 'search' : 'browse'}`}
              className={styles.subsubjectDisclosure}
              defaultOpen={Boolean(isSearching && group.autoOpen)}>
              <summary className={styles.subsubjectSummary}>
                <span className={styles.subsubjectSummaryText}>
                  {title}
                  {getSubsubjectDescription(group.subsubjectId, language) && (
                    <span className={styles.subsubjectDescription}>
                      {getSubsubjectDescription(group.subsubjectId, language)}
                    </span>
                  )}
                </span>
                <span className={styles.rowMeta}>
                  <span className={styles.rowCount}>{topicTags.length}</span>
                  <FiChevronDown className={styles.rowChevron} aria-hidden="true" />
                </span>
              </summary>
              <div className={styles.topicRows}>
                {topicTags.map((tag) => (
                  <TopicLink
                    key={tag.permalink}
                    tag={tag}
                    subjectId={subjectId}
                    language={language}
                  />
                ))}
              </div>
            </details>
          );
        })}
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
  const [selectedSubject, setSelectedSubject] = useState(orderedSubjects[0] || '');

  useEffect(() => {
    if (!orderedSubjects.includes(selectedSubject)) {
      setSelectedSubject(orderedSubjects[0] || '');
    }
  }, [orderedSubjects, selectedSubject]);

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
  const displayedSubjects = isSearching
    ? navigationSubjects
    : selectedSubject && visibleGroups.has(selectedSubject) ? [selectedSubject] : [];

  if (subsubjectTags.length + topicTags.length === 0) return null;

  return (
    <section className={styles.learningExplorer} role="tabpanel" id="tags-panel-learning">
      <header className={styles.explorerHeader}>
        <Heading as="h2" className={styles.explorerTitle}>{t.topicsTitle}</Heading>
        <label className={styles.searchField}>
          <FiSearch className={styles.searchIcon} aria-hidden="true" />
          <input
            className={styles.searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
          />
        </label>
      </header>
      <div className={styles.explorerLayout}>
        <nav className={styles.subjectNavigation} aria-label={t.subjectNavigation}>
          {navigationSubjects.map((subjectId) => (
            <button
              key={subjectId}
              type="button"
              className={`${styles.subjectNavItem} ${!isSearching && selectedSubject === subjectId ? styles.subjectNavItemActive : ''}`}
              onClick={() => {
                setQuery('');
                setSelectedSubject(subjectId);
              }}>
              <span>{getSubjectLabel(subjectId, language)}</span>
              <span className={styles.subjectNavCount}>
                {countGroupTags(orderedGroups(bySubject.get(subjectId)!))}
              </span>
            </button>
          ))}
        </nav>
        <div className={styles.subjectResults}>
          {displayedSubjects.map((subjectId) => (
            <SubjectPanel
              key={subjectId}
              subjectId={subjectId}
              groups={visibleGroups.get(subjectId)!}
              language={language}
              isSearching={isSearching}
            />
          ))}
          {isSearching && displayedSubjects.length === 0 && (
            <p className={styles.noResults}>{t.noResults}</p>
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
        {tags.sort(byCountThenName).map((tag) => (
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
  const normalizedTags = tags as TagType[];
  const universityTags = normalizedTags.filter((tag) => isSchoolTag(tag.label));
  const subsubjectTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && getSubsubjectMeta(tag.label));
  const topicTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && !getSubsubjectMeta(tag.label) && getTopicMeta(tag.label));
  const pendingTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && !getSubsubjectMeta(tag.label) && !getTopicMeta(tag.label));
  const learningCount = subsubjectTags.length + topicTags.length;

  return (
    <section className={styles.tagsContainer}>
      <div className={styles.viewTabs} role="tablist" aria-label={t.viewTabsLabel}>
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'learning'}
          aria-controls="tags-panel-learning"
          className={`${styles.viewTab} ${activeView === 'learning' ? styles.viewTabActive : ''}`}
          onClick={() => setActiveView('learning')}>
          <span>{t.learningView}</span>
          <span className={styles.viewTabCount}>{learningCount}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'schools'}
          aria-controls="tags-panel-schools"
          className={`${styles.viewTab} ${activeView === 'schools' ? styles.viewTabActive : ''}`}
          onClick={() => setActiveView('schools')}>
          <span>{t.schoolsView}</span>
          <span className={styles.viewTabCount}>{universityTags.length}</span>
        </button>
      </div>
      {activeView === 'learning' ? (
        <>
          <LearningSections
            subsubjectTags={[...subsubjectTags]}
            topicTags={[...topicTags]}
            language={language}
          />
          <PendingSection tags={[...pendingTags]} language={language} />
        </>
      ) : (
        <SchoolSection tags={[...universityTags]} language={language} />
      )}
    </section>
  );
}
