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
import styles from './styles.module.css';

interface TagType {
  label: string;
  permalink: string;
  count: number;
  description?: string;
}

interface SubjectMeta {
  labelZh?: string;
  labelJa?: string;
  descriptionZh?: string;
  descriptionJa?: string;
}

interface TopicMeta {
  subjects?: string[];
  aliases?: string[];
}

const subjects = tagTaxonomy.subjects as Record<string, SubjectMeta>;
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

type Language = 'zh' | 'ja';

const COPY = {
  zh: {
    summarySchools: '学校入口',
    summaryTopics: '已归类考点',
    summaryPending: '待归类 tag',
    tagsUnit: 'tags',
    schoolTitle: '学校',
    schoolSubtitle: '学校 tag 由目录结构辅助识别；页面展示仍兼容现有 frontmatter。',
    topicsTitle: '科目与考点',
    topicsSubtitle: '考点 tag 按主科目展示；跨科目 tag 会在条目中标出相关方向。',
    relatedSubjects: '关联科目',
    schoolDisplayName: '学校名',
    pendingTitle: '待归类',
    pendingSubtitle: '这些 tag 暂未进入 tag 池；它们仍可访问，维护者可在 review 后决定是否收录。',
  },
  ja: {
    summarySchools: '大学タグ',
    summaryTopics: '分類済みトピック',
    summaryPending: '未分類タグ',
    tagsUnit: 'タグ',
    schoolTitle: '大学',
    schoolSubtitle: '大学タグはディレクトリ構造からも判定します。既存の frontmatter 表示にも対応しています。',
    topicsTitle: '科目とトピック',
    topicsSubtitle: 'トピックタグは主科目ごとに表示します。複数科目にまたがるタグは関連分野も併記します。',
    relatedSubjects: '関連科目',
    schoolDisplayName: '大学名',
    pendingTitle: '未分類',
    pendingSubtitle: 'まだタグプールに登録されていないタグです。ページは表示され、レビュー後に採用可否を判断できます。',
  },
} as const;

function normalizeLanguage(language: string): Language {
  return language === 'ja' ? 'ja' : 'zh';
}

function getSubjectLabel(subjectId: string, language: Language): string {
  const subject = subjects[subjectId];
  return (language === 'ja' ? subject?.labelJa : subject?.labelZh) || subjectId;
}

function getSubjectDescription(subjectId: string, language: Language): string | undefined {
  const subject = subjects[subjectId];
  return language === 'ja' ? subject?.descriptionJa : subject?.descriptionZh;
}

const schoolTagLookup = new Set(
  Object.entries(schoolTags).flatMap(([tag, meta]) => [
    tag,
    ...(meta.aliases || []),
  ]),
);

const topicAliasLookup = new Map<string, string>();
for (const [tag, meta] of Object.entries(topics)) {
  for (const alias of meta.aliases || []) {
    if (!topics[alias]) {
      topicAliasLookup.set(alias, tag);
    }
  }
}

function getTopicMeta(tagLabel: string): TopicMeta | null {
  if (topics[tagLabel]) return topics[tagLabel];
  const aliasOf = topicAliasLookup.get(tagLabel);
  return aliasOf ? topics[aliasOf] : null;
}

function getPrimarySubject(tagLabel: string): string {
  return getTopicMeta(tagLabel)?.subjects?.[0] || 'General';
}

function isSchoolTag(tagLabel: string): boolean {
  return schoolTagLookup.has(tagLabel);
}

function isDeprecatedTag(tagLabel: string): boolean {
  return Boolean(deprecatedTags[tagLabel]);
}

function byCountThenName(a: TagType, b: TagType): number {
  return b.count - a.count || a.label.localeCompare(b.label);
}

function TaxonomySummary({
  schoolCount,
  topicCount,
  pendingCount,
  language,
}: {
  schoolCount: number;
  topicCount: number;
  pendingCount: number;
  language: Language;
}) {
  const t = COPY[language];
  return (
    <div className={styles.summaryGrid}>
      <div className={styles.summaryItem}>
        <span className={styles.summaryNumber}>{schoolCount}</span>
        <span className={styles.summaryLabel}>{t.summarySchools}</span>
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
      <span className={styles.tagCount}>{count} {COPY[language].tagsUnit}</span>
    </div>
  );
}

function TagPill({
  tag,
  detailLabel,
  detailValues,
  tone,
}: {
  tag: TagType;
  detailLabel?: string;
  detailValues?: ReactNode[];
  tone?: 'school' | 'topic' | 'pending' | 'deprecated';
}) {
  const hasDetails = Boolean(detailLabel && detailValues?.length);

  return (
    <Link
      to={tag.permalink}
      className={`${styles.tagPill} ${tone ? styles[tone] : ''} ${hasDetails ? styles.withDetails : ''}`}>
      <span className={styles.tagMainRow}>
        <span className={styles.tagName}>{tag.label}</span>
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
  const t = COPY[language];

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

function SubjectSection({
  subjectId,
  tags,
  language,
}: {
  subjectId: string;
  tags: TagType[];
  language: Language;
}) {
  if (tags.length === 0) return null;
  const subjectDescription = getSubjectDescription(subjectId, language);

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
        <span className={styles.subjectCount}>{tags.length}</span>
      </div>
      <div className={styles.tagGrid}>
        {tags.sort(byCountThenName).map((tag) => {
          const tagSubjects = getTopicMeta(tag.label)?.subjects || [];
          const secondarySubjects = tagSubjects
            .filter((id) => id !== subjectId)
            .map((id) => getSubjectLabel(id, language));
          return (
            <TagPill
              key={tag.permalink}
              tag={tag}
              tone={isDeprecatedTag(tag.label) ? 'deprecated' : 'topic'}
              detailLabel={secondarySubjects.length ? COPY[language].relatedSubjects : undefined}
              detailValues={secondarySubjects.length ? secondarySubjects : undefined}
            />
          );
        })}
      </div>
    </section>
  );
}

function TopicSections({tags, language}: {tags: TagType[]; language: Language}) {
  if (tags.length === 0) return null;
  const t = COPY[language];

  const bySubject = new Map<string, TagType[]>();
  for (const tag of tags) {
    const subject = getPrimarySubject(tag.label);
    if (!bySubject.has(subject)) bySubject.set(subject, []);
    bySubject.get(subject)!.push(tag);
  }

  const orderedSubjects = [
    ...subjectOrder.filter((subject) => bySubject.has(subject)),
    ...Array.from(bySubject.keys()).filter((subject) => !subjectOrder.includes(subject)),
  ];

  return (
    <section className={styles.sectionCard}>
      <SectionHeader
        title={t.topicsTitle}
        subtitle={t.topicsSubtitle}
        count={tags.length}
        language={language}
      />
      <div className={styles.subjectList}>
        {orderedSubjects.map((subjectId) => (
          <SubjectSection
            key={subjectId}
            subjectId={subjectId}
            tags={bySubject.get(subjectId) || []}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}

function PendingSection({tags, language}: {tags: TagType[]; language: Language}) {
  if (tags.length === 0) return null;
  const t = COPY[language];

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
  const language = normalizeLanguage(useCurrentLanguage());
  const normalizedTags = tags as TagType[];
  const universityTags = normalizedTags.filter((tag) => isSchoolTag(tag.label));
  const topicTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && getTopicMeta(tag.label));
  const pendingTags = normalizedTags.filter((tag) => !isSchoolTag(tag.label) && !getTopicMeta(tag.label));

  return (
    <section className={styles.tagsContainer}>
      <TaxonomySummary
        schoolCount={universityTags.length}
        topicCount={topicTags.length}
        pendingCount={pendingTags.length}
        language={language}
      />
      <SchoolSection tags={[...universityTags]} language={language} />
      <TopicSections tags={[...topicTags]} language={language} />
      <PendingSection tags={[...pendingTags]} language={language} />
    </section>
  );
}
