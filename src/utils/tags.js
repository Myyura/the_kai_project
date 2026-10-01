import tagTaxonomy from '../data/tagTaxonomy';
import {universities} from '../data/universities';
import {getLanguageLocale, normalizeLanguage} from '../i18n/config';

const DOC_TAGS_BASE_PATH = '/docs/tags';
const TOPIC_ANCHOR_PREFIX = 'topic-';

const subjects = tagTaxonomy.subjects || {};
const subsubjects = tagTaxonomy.subsubjects || {};
const topics = tagTaxonomy.topics || {};
const schoolTags = tagTaxonomy.schoolTags || {};
const schoolArchives = new Map(universities.map(({id, archiveUrl}) => [id, archiveUrl]));

const aliasLookup = new Map();

function registerAliases(entries) {
  for (const [canonicalId, meta] of Object.entries(entries)) {
    for (const alias of meta.aliases || []) {
      if (!aliasLookup.has(alias)) aliasLookup.set(alias, canonicalId);
    }
  }
}

registerAliases(schoolTags);

const metadata = {...subjects, ...subsubjects, ...topics, ...schoolTags};
const languageSuffix = {zh: 'Zh', ja: 'Ja', en: 'En'};
const collators = new Map();

/** Labels are required in all three languages; IDs are never translated. */
export function getTagLabel(value, language) {
  const id = resolveCanonicalTagId(value);
  return metadata[id]?.[`label${languageSuffix[normalizeLanguage(language)]}`] || id;
}

export function getTagDescription(value, language) {
  const meta = metadata[resolveCanonicalTagId(value)];
  return meta?.[`description${languageSuffix[normalizeLanguage(language)]}`];
}

export function compareTagLabels(leftId, rightId, language) {
  const locale = getLanguageLocale(language);
  if (!collators.has(locale)) collators.set(locale, new Intl.Collator(locale, {numeric: true}));
  return collators.get(locale).compare(getTagLabel(leftId, language), getTagLabel(rightId, language))
    || String(leftId).localeCompare(String(rightId), 'en');
}

function normalizeSearch(value) {
  return String(value || '').normalize('NFKC').toLowerCase().replace(/[\s._-]+/g, ' ').trim();
}

// Search all languages regardless of the selected UI language.
const searchIndex = new Map(Object.entries(metadata).map(([id, meta]) => [
  id,
  normalizeSearch([
    id, meta.universityId, ...(meta.aliases || []),
    ...Object.values(languageSuffix).map((suffix) => meta[`label${suffix}`]),
    ...Object.values(meta.searchAliases || {}).flat(),
  ].filter(Boolean).join('\n')),
]));

export function matchesTagSearch(value, query) {
  const id = resolveCanonicalTagId(value);
  const text = searchIndex.get(id) || normalizeSearch(id);
  return normalizeSearch(query).split(' ').every((term) => text.includes(term));
}

function tagBrowseSlug(value) {
  return String(value || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function resolveCanonicalTagId(value) {
  const tagId = String(value || '').trim();
  return aliasLookup.get(tagId) || tagId;
}

function getSubsubjectShortId(value) {
  const subsubjectId = resolveCanonicalTagId(value);
  const subjectId = subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

function getTopicShortId(value) {
  const topicId = resolveCanonicalTagId(value);
  const subsubjectId = topics[topicId]?.subsubject;
  const prefix = subsubjectId ? `${subsubjectId}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
}

export function getTopicAnchorId(topicId) {
  return `${TOPIC_ANCHOR_PREFIX}${tagBrowseSlug(getTopicShortId(topicId))}`;
}

function getSubsubjectPath(subsubjectId) {
  const subsubject = subsubjects[subsubjectId] || {};
  const subjectId = subsubject.subject || 'General';
  return [
    DOC_TAGS_BASE_PATH,
    'subsubject',
    tagBrowseSlug(subjectId),
    tagBrowseSlug(getSubsubjectShortId(subsubjectId)),
  ].join('/');
}

/**
 * Resolve the single in-site browse target for a taxonomy tag.
 *
 * Topic IDs remain document metadata, but browse inside their parent
 * subsubject page. Unknown tags retain the framework-provided permalink so
 * this helper remains safe for blog and inline tags outside the taxonomy.
 */
export function resolveTagBrowseTarget(value, fallbackHref = '') {
  const rawId = String(value || '').trim();
  const id = resolveCanonicalTagId(rawId);
  const safeFallbackHref = typeof fallbackHref === 'string' ? fallbackHref : '';
  const fallbackIsOutsideDocsTags = safeFallbackHref
    && !safeFallbackHref.startsWith(DOC_TAGS_BASE_PATH);

  const schoolArchive = schoolTags[id]
    ? schoolArchives.get(schoolTags[id].universityId)
    : null;
  if (schoolArchive && (!fallbackIsOutsideDocsTags || safeFallbackHref === schoolArchive)) {
    return {
      kind: 'school',
      id,
      pathname: schoolArchive,
      anchorId: null,
      href: schoolArchive,
    };
  }

  if (fallbackIsOutsideDocsTags) {
    return {
      kind: 'unknown',
      id,
      pathname: safeFallbackHref,
      anchorId: null,
      href: safeFallbackHref,
    };
  }

  if (subsubjects[id]) {
    const pathname = getSubsubjectPath(id);
    return {
      kind: 'subsubject',
      id,
      subjectId: subsubjects[id].subject || null,
      pathname,
      anchorId: null,
      href: pathname,
    };
  }

  if (topics[id]) {
    const subsubjectId = topics[id].subsubject;
    const pathname = getSubsubjectPath(subsubjectId);
    const anchorId = getTopicAnchorId(id);
    return {
      kind: 'topic',
      id,
      subjectId: subsubjects[subsubjectId]?.subject || null,
      subsubjectId,
      pathname,
      anchorId,
      href: `${pathname}#${anchorId}`,
    };
  }

  const pathname = safeFallbackHref || (
    rawId ? `${DOC_TAGS_BASE_PATH}/${tagBrowseSlug(rawId)}` : DOC_TAGS_BASE_PATH
  );
  return {
    kind: subjects[id] ? 'subject' : 'unknown',
    id,
    pathname,
    anchorId: null,
    href: pathname,
  };
}
