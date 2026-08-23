import tagTaxonomy from '../data/tagTaxonomy';

export const DOC_TAGS_BASE_PATH = '/docs/tags';
export const TOPIC_ANCHOR_PREFIX = 'topic-';

const subjects = tagTaxonomy.subjects || {};
const subsubjects = tagTaxonomy.subsubjects || {};
const topics = tagTaxonomy.topics || {};
const schoolTags = tagTaxonomy.schoolTags || {};

const aliasLookup = new Map();

function registerAliases(entries) {
  for (const [canonicalId, meta] of Object.entries(entries)) {
    for (const alias of meta.aliases || []) {
      if (!aliasLookup.has(alias)) aliasLookup.set(alias, canonicalId);
    }
  }
}

registerAliases(schoolTags);
registerAliases(subsubjects);
registerAliases(topics);

export function tagBrowseSlug(value) {
  return String(value || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function resolveCanonicalTagId(value) {
  const tagId = String(value || '').trim();
  return aliasLookup.get(tagId) || tagId;
}

export function getSubsubjectShortId(value) {
  const subsubjectId = resolveCanonicalTagId(value);
  const subjectId = subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

export function getTopicShortId(value) {
  const topicId = resolveCanonicalTagId(value);
  const subsubjectId = topics[topicId]?.subsubject;
  const prefix = subsubjectId ? `${subsubjectId}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
}

export function humanizeTagShortId(value) {
  return String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getTopicDisplayName(topicId) {
  return humanizeTagShortId(getTopicShortId(topicId));
}

export function getTopicAnchorId(topicId) {
  return `${TOPIC_ANCHOR_PREFIX}${tagBrowseSlug(getTopicShortId(topicId))}`;
}

function getSchoolPath(schoolId) {
  return `${DOC_TAGS_BASE_PATH}/school/${tagBrowseSlug(schoolId)}`;
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

  if (fallbackIsOutsideDocsTags) {
    return {
      kind: 'unknown',
      id,
      pathname: safeFallbackHref,
      anchorId: null,
      href: safeFallbackHref,
      displayName: rawId,
    };
  }

  if (schoolTags[id]) {
    const pathname = getSchoolPath(id);
    return {
      kind: 'school',
      id,
      pathname,
      anchorId: null,
      href: pathname,
      displayName: id,
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
      displayName: humanizeTagShortId(getSubsubjectShortId(id)),
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
      displayName: getTopicDisplayName(id),
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
    displayName: rawId,
  };
}
