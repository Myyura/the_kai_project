import tagTaxonomy from '../data/tagTaxonomy';
import {resolveDocumentMetadata} from './documentMetadata';
import {parseNoteDocument, stripAnnotationMetadata} from './noteAnnotations';

const VALID_STATUSES = new Set(['completed', 'reviewing']);
const SCHOOL_TAGS = new Set(
  Object.entries(tagTaxonomy.schoolTags || {}).flatMap(([tag, meta]) => [
    tag,
    ...(meta.aliases || []),
  ])
);
const SUBJECT_TAGS = new Set(Object.keys(tagTaxonomy.subjects || {}));

const timestamp = (value) => {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
};

const tagSlug = (tag) => String(tag || '')
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/[^A-Za-z0-9]+/g, '-')
  .toLowerCase()
  .replace(/^-+|-+$/g, '');

export const getLearningTagPermalink = (tag) => {
  const tagId = String(tag || '');
  const subsubject = tagTaxonomy.subsubjects?.[tagId];
  if (subsubject) {
    const subjectId = subsubject.subject || 'General';
    const prefix = `${subjectId}.`;
    const shortId = tagId.startsWith(prefix) ? tagId.slice(prefix.length) : tagId;
    return `/docs/tags/subsubject/${tagSlug(subjectId)}/${tagSlug(shortId)}`;
  }

  const topic = tagTaxonomy.topics?.[tagId];
  if (topic) {
    const topicSubsubject = tagTaxonomy.subsubjects?.[topic.subsubject] || {};
    const subjectId = topicSubsubject.subject || 'General';
    const subsubjectPrefix = `${subjectId}.`;
    const subsubjectId = topic.subsubject?.startsWith(subsubjectPrefix)
      ? topic.subsubject.slice(subsubjectPrefix.length)
      : topic.subsubject;
    const topicPrefix = `${topic.subsubject}.`;
    const topicId = tagId.startsWith(topicPrefix) ? tagId.slice(topicPrefix.length) : tagId.split('.').pop();
    return `/docs/tags/topic/${tagSlug(subjectId)}/${tagSlug(subsubjectId)}/${tagSlug(topicId)}`;
  }

  return `/docs/tags/${tagSlug(tagId)}`;
};

const summarizeNote = (note) => {
  if (!note || typeof note.content !== 'string' || !note.content.trim()) return null;
  const content = stripAnnotationMetadata(note.content);
  const annotations = parseNoteDocument(note.content).annotations;
  const normalized = content.trim();
  return {
    content: note.content,
    updatedAt: timestamp(note.updatedAt),
    excerpt: normalized.replace(/\s+/g, ' ').slice(0, 180),
    charCount: normalized.length,
    annotationCount: annotations.length,
  };
};

const buildTagGroups = (progressItems) => {
  const groups = {};
  progressItems.forEach((item) => {
    item.tags.forEach((tag) => {
      if (SCHOOL_TAGS.has(tag) || SUBJECT_TAGS.has(tag)) return;
      if (!groups[tag]) {
        groups[tag] = {
          completed: 0,
          reviewing: 0,
          total: 0,
          permalink: getLearningTagPermalink(tag),
        };
      }
      groups[tag].total += 1;
      if (item.status === 'completed') groups[tag].completed += 1;
      if (item.status === 'reviewing') groups[tag].reviewing += 1;
    });
  });
  return Object.entries(groups).sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0]));
};

export const buildPersonalCenterData = ({
  progressEntries = [],
  noteEntries = [],
  unknownSchool = '',
} = {}) => {
  const progressById = new Map(
    progressEntries
      .filter((entry) => entry?.id && VALID_STATUSES.has(entry.status))
      .map((entry) => [entry.id, entry])
  );
  const notesById = new Map(
    noteEntries
      .filter((entry) => entry?.id)
      .map((entry) => [entry.id, entry])
  );
  const ids = new Set([...progressById.keys(), ...notesById.keys()]);

  const documents = Array.from(ids).map((id) => {
    const progress = progressById.get(id) || null;
    const note = summarizeNote(notesById.get(id));
    const metadata = resolveDocumentMetadata(id, progress || {}, unknownSchool);
    return {
      ...metadata,
      progress: progress ? {
        status: progress.status,
        tags: Array.isArray(progress.tags) ? progress.tags.filter((tag) => typeof tag === 'string') : [],
        reviewCount: Math.max(0, Number(progress.reviewCount) || 0),
        updatedAt: timestamp(progress.updatedAt),
      } : null,
      note,
      updatedAt: Math.max(timestamp(progress?.updatedAt), timestamp(note?.updatedAt)),
    };
  });

  const progressItems = documents
    .filter((item) => item.progress)
    .map((item) => ({...item, ...item.progress}))
    .sort((a, b) => b.updatedAt - a.updatedAt);
  const noteItems = documents
    .filter((item) => item.note)
    .map((item) => ({...item, ...item.note}))
    .sort((a, b) => b.updatedAt - a.updatedAt);
  const completedItems = progressItems.filter((item) => item.status === 'completed');
  const reviewingItems = progressItems.filter((item) => item.status === 'reviewing');
  const activityItems = documents.flatMap((item) => [
    ...(item.progress?.updatedAt ? [{id: `${item.id}:progress`, updatedAt: item.progress.updatedAt}] : []),
    ...(item.note?.updatedAt ? [{id: `${item.id}:note`, updatedAt: item.note.updatedAt}] : []),
  ]);

  const universityMap = new Map();
  progressItems.forEach((item) => {
    const group = universityMap.get(item.university) || {completed: 0, reviewing: 0, items: []};
    group.items.push(item);
    if (item.status === 'completed') group.completed += 1;
    if (item.status === 'reviewing') group.reviewing += 1;
    universityMap.set(item.university, group);
  });

  return {
    documents,
    progressItems,
    noteItems,
    completedItems,
    reviewingItems,
    activityItems,
    universityGroups: Array.from(universityMap.entries()).sort((a, b) => (
      b[1].items.length - a[1].items.length || a[0].localeCompare(b[0])
    )),
    tagGroups: buildTagGroups(progressItems),
    stats: {
      completed: completedItems.length,
      reviewing: reviewingItems.length,
      total: progressItems.length,
      notes: noteItems.length,
    },
    hasAnyData: progressItems.length > 0 || noteItems.length > 0,
  };
};
