/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
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
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import {universities} from '@site/src/data/universities';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {normalizeLanguage} from '@site/src/i18n/config';
import {getUiMessages} from '@site/src/i18n/messages';
import styles from './styles.module.css';

type DocListItem = Props['tag']['items'][number];

interface TopicMeta {
  subsubject?: string;
  subjects?: string[];
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
}

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
    const primarySubject = topic.subsubject ? subsubjects[topic.subsubject]?.subject : topic.subjects?.[0];
    const subjectLabel = getSubjectLabel(primarySubject || 'General', language);
    const relatedSubjects = (topic.subjects || [])
      .filter((subjectId) => subjectId !== primarySubject)
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
  return getCopy(language).pageTitle(props.tag.count, getTagDisplayName(props.tag.label));
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

function DocTagDocListPageMetadata({
  title,
  tag,
}: Props & {title: string}): ReactNode {
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

function DocTagDocListPageContent({
  tag,
  title,
  language,
}: Props & {title: string; language: Language}): ReactNode {
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
      <DocTagDocListPageMetadata {...props} title={title} />
      <DocTagDocListPageContent {...props} title={title} language={language} />
    </>
  );
}
