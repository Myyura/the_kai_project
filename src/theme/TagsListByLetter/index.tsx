/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/TagsListByLetter';
import Heading from '@theme/Heading';
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

function TaxonomySummary({
  schoolCount,
  subsubjectCount,
  topicCount,
  pendingCount,
  language,
}: {
  schoolCount: number;
  subsubjectCount: number;
  topicCount: number;
  pendingCount: number;
  language: Language;
}) {
  const t = getCopy(language);
  return (
    <div className={styles.summaryGrid}>
      <div className={styles.summaryItem}>
        <span className={styles.summaryNumber}>{schoolCount}</span>
        <span className={styles.summaryLabel}>{t.summarySchools}</span>
      </div>
      <div className={styles.summaryItem}>
        <span className={styles.summaryNumber}>{subsubjectCount}</span>
        <span className={styles.summaryLabel}>{t.summarySubsubjects}</span>
      </div>
      <div className={styles.summaryItem}>
        <span className={styles.summaryNumber}>{topicCount}</span>
        <span className={styles.summaryLabel}>{t.summaryTopics}</span>
      </div>
      <div className={styles.summaryItem}>
        <span className={styles.summaryNumber}>{pendingCount}</span>
        <span className={styles.summaryLabel}>{t.summaryPending}</span>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  count,
  language,
}: {
  title: string;
  subtitle?: string;
  count: number;
  language: Language;
}) {
  return (
    <div className={styles.sectionHeader}>
      <div>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      </div>
      <span className={styles.tagCount}>{count} {getCopy(language).tagsUnit}</span>
    </div>
  );
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
    <section className={styles.sectionCard}>
      <SectionHeader
        title={t.schoolTitle}
        subtitle={t.schoolSubtitle}
        count={tags.length}
        language={language}
      />
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

function SubjectSection({
  subjectId,
  groups,
  language,
}: {
  subjectId: string;
  groups: SubsubjectGroup[];
  language: Language;
}) {
  if (groups.length === 0) return null;
  const t = getCopy(language);
  const subjectDescription = getSubjectDescription(subjectId, language);
  const tagCount = groups.reduce(
    (sum, group) => sum + group.topicTags.length + (group.subsubjectTag ? 1 : 0),
    0,
  );

  return (
    <section className={styles.subjectBlock}>
      <div className={styles.subjectHeader}>
        <div>
          <Heading as="h3" id={subjectId} className={styles.subjectTitle}>
            {getSubjectLabel(subjectId, language)}
          </Heading>
          {subjectDescription && (
            <p className={styles.subjectDescription}>{subjectDescription}</p>
          )}
        </div>
        <span className={styles.subjectCount}>{tagCount}</span>
      </div>
      <div className={styles.subsubjectList}>
        {groups.map((group) => {
          const topicTags = group.topicTags.sort(byCountThenName);
          const subsubjectLabel = getSubsubjectLabel(group.subsubjectId, language);
          const subsubjectDisplayId = getSubsubjectDisplayId(group.subsubjectId);
          const subsubjectTitle = (
            <span className={styles.subsubjectTitleText}>
              <span>{subsubjectLabel}</span>
              <span className={styles.subsubjectTitleId}>（{subsubjectDisplayId}）</span>
            </span>
          );
          return (
            <section key={group.subsubjectId} className={styles.subsubjectBlock}>
              <div className={styles.subsubjectHeader}>
                <div>
                  <Heading as="h4" className={styles.subsubjectTitle}>
                    {group.subsubjectTag ? (
                      <Link
                        to={group.subsubjectTag.permalink}
                        className={styles.subsubjectTitleLink}>
                        {subsubjectTitle}
                      </Link>
                    ) : (
                      subsubjectTitle
                    )}
                  </Heading>
                  {getSubsubjectDescription(group.subsubjectId, language) && (
                    <p className={styles.subsubjectDescription}>
                      {getSubsubjectDescription(group.subsubjectId, language)}
                    </p>
                  )}
                </div>
                <span className={styles.subsubjectCount}>
                  {topicTags.length + (group.subsubjectTag ? 1 : 0)}
                </span>
              </div>
              <div className={styles.tagGrid}>
                {topicTags.map((tag) => {
                  const tagSubjects = getTopicMeta(tag.label)?.subjects || [];
                  const secondarySubjects = tagSubjects
                    .filter((id) => id !== subjectId)
                    .map((id) => getSubjectLabel(id, language));
                  return (
                    <TagPill
                      key={tag.permalink}
                      tag={tag}
                      displayName={getTopicShortId(tag.label)}
                      tone={isDeprecatedTag(tag.label) ? 'deprecated' : 'topic'}
                      detailLabel={secondarySubjects.length ? t.relatedSubjects : undefined}
                      detailValues={secondarySubjects.length ? secondarySubjects : undefined}
                    />
                  );
                })}
              </div>
            </section>
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
  const total = subsubjectTags.length + topicTags.length;
  if (total === 0) return null;
  const t = getCopy(language);

  const bySubject = new Map<string, Map<string, SubsubjectGroup>>();
  const ensureGroup = (subjectId: string, subsubjectId: string): SubsubjectGroup => {
    if (!bySubject.has(subjectId)) bySubject.set(subjectId, new Map());
    const subjectGroups = bySubject.get(subjectId)!;
    if (!subjectGroups.has(subsubjectId)) {
      subjectGroups.set(subsubjectId, {subsubjectId, topicTags: []});
    }
    return subjectGroups.get(subsubjectId)!;
  };

  for (const tag of subsubjectTags) {
    const subsubjectId = getSubsubjectId(tag.label) || 'General.Reference-Material';
    const subjectId = getPrimarySubject(tag.label);
    ensureGroup(subjectId, subsubjectId).subsubjectTag = tag;
  }

  for (const tag of topicTags) {
    const subsubjectId = getTopicSubsubjectId(tag.label);
    const subjectId = getPrimarySubject(tag.label);
    ensureGroup(subjectId, subsubjectId).topicTags.push(tag);
  }

  const orderedSubjects = [
    ...subjectOrder.filter((subject) => bySubject.has(subject)),
    ...Array.from(bySubject.keys()).filter((subject) => !subjectOrder.includes(subject)),
  ];

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

  return (
    <section className={styles.sectionCard}>
      <SectionHeader
        title={t.topicsTitle}
        subtitle={t.topicsSubtitle}
        count={total}
        language={language}
      />
      <div className={styles.subjectList}>
        {orderedSubjects.map((subjectId) => (
          <SubjectSection
            key={subjectId}
            subjectId={subjectId}
            groups={orderedGroups(bySubject.get(subjectId)!)}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}

function PendingSection({tags, language}: {tags: TagType[]; language: Language}) {
  if (tags.length === 0) return null;
  const t = getCopy(language);

  return (
    <section className={styles.sectionCard}>
      <SectionHeader
        title={t.pendingTitle}
        subtitle={t.pendingSubtitle}
        count={tags.length}
        language={language}
      />
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
  const normalizedTags = tags as TagType[];
  const universityTags = normalizedTags.filter((tag) => isSchoolTag(tag.label));
  const subsubjectTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && getSubsubjectMeta(tag.label));
  const topicTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && !getSubsubjectMeta(tag.label) && getTopicMeta(tag.label));
  const pendingTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && !getSubsubjectMeta(tag.label) && !getTopicMeta(tag.label));

  return (
    <section className={styles.tagsContainer}>
      <TaxonomySummary
        schoolCount={universityTags.length}
        subsubjectCount={subsubjectTags.length}
        topicCount={topicTags.length}
        pendingCount={pendingTags.length}
        language={language}
      />
      <SchoolSection tags={[...universityTags]} language={language} />
      <LearningSections
        subsubjectTags={[...subsubjectTags]}
        topicTags={[...topicTags]}
        language={language}
      />
      <PendingSection tags={[...pendingTags]} language={language} />
    </section>
  );
}
