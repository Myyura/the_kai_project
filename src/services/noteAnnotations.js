export const ANNOTATIONS_START_PREFIX = '<!-- kai-annotations:start:v1:';
export const ANNOTATIONS_END = '<!-- kai-annotations:end -->';
export const ANNOTATION_BODY_MARKER = '<!-- kai-ann:body -->';
export const ANNOTATION_END = '<!-- /kai-ann -->';

const DEFAULT_NEXT_NUMBER = 1;

const toTimestamp = (value, fallback = 0) => {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback;
};

const safeDecode = (value) => {
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
};

const safeEncode = (value) => encodeURIComponent(JSON.stringify(value));

const createId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `ann_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
};

const normalizeLine = (value) => {
  const line = Number(value);
  return Number.isInteger(line) && line > 0 ? line : 1;
};

export const normalizeAnnotation = (raw, fallbackNow = Date.now()) => {
  if (!raw || typeof raw !== 'object') return null;
  const exact = typeof raw.exact === 'string' ? raw.exact.trim() : '';
  if (!exact) return null;

  const createdAt = toTimestamp(raw.createdAt, fallbackNow);
  return {
    id: typeof raw.id === 'string' && raw.id.trim() ? raw.id.trim() : createId(),
    title: typeof raw.title === 'string' && raw.title.trim() ? raw.title.trim() : '注释',
    exact,
    line: normalizeLine(raw.line),
    documentHash: typeof raw.documentHash === 'string' ? raw.documentHash : '',
    bodyMarkdown: typeof raw.bodyMarkdown === 'string' ? raw.bodyMarkdown : '',
    createdAt,
    updatedAt: toTimestamp(raw.updatedAt, createdAt),
  };
};

const escapeHeading = (value) => String(value || '')
  .replace(/\r?\n/g, ' ')
  .replace(/#/g, '\\#')
  .trim();

const quoteMarkdown = (value) => String(value || '')
  .split(/\r?\n/)
  .map((line) => `> ${line}`)
  .join('\n');

const serializeAnnotation = (annotation) => {
  const meta = {
    id: annotation.id,
    title: annotation.title,
    exact: annotation.exact,
    line: annotation.line,
    documentHash: annotation.documentHash,
    createdAt: annotation.createdAt,
    updatedAt: annotation.updatedAt,
  };

  return [
    `<!-- kai-ann:v1:${safeEncode(meta)} -->`,
    `### ${escapeHeading(annotation.title)}`,
    '',
    quoteMarkdown(annotation.exact),
    '',
    ANNOTATION_BODY_MARKER,
    annotation.bodyMarkdown.trim(),
    ANNOTATION_END,
  ].join('\n').trimEnd();
};

const parseStartMeta = (managed) => {
  const firstLineEnd = managed.indexOf('-->');
  if (firstLineEnd < 0) return {nextNumber: DEFAULT_NEXT_NUMBER};
  const encoded = managed.slice(ANNOTATIONS_START_PREFIX.length, firstLineEnd).trim();
  const decoded = safeDecode(encoded);
  const nextNumber = Number(decoded?.nextNumber);
  return {
    nextNumber: Number.isInteger(nextNumber) && nextNumber > 0
      ? nextNumber
      : DEFAULT_NEXT_NUMBER,
  };
};

const parseManagedAnnotations = (managed) => {
  const annotations = [];
  const startPattern = /<!-- kai-ann:v1:([^\s]+) -->/g;
  let match;

  while ((match = startPattern.exec(managed))) {
    const blockStart = match.index + match[0].length;
    const blockEnd = managed.indexOf(ANNOTATION_END, blockStart);
    if (blockEnd < 0) break;

    const rawMeta = safeDecode(match[1]);
    const block = managed.slice(blockStart, blockEnd);
    const bodyMarkerIndex = block.indexOf(ANNOTATION_BODY_MARKER);
    const bodyMarkdown = bodyMarkerIndex >= 0
      ? block.slice(bodyMarkerIndex + ANNOTATION_BODY_MARKER.length).trim()
      : '';
    const annotation = normalizeAnnotation({...rawMeta, bodyMarkdown}, rawMeta?.createdAt);
    if (annotation) annotations.push(annotation);
    startPattern.lastIndex = blockEnd + ANNOTATION_END.length;
  }

  return annotations;
};

export const parseNoteDocument = (content) => {
  const source = typeof content === 'string' ? content : '';
  const start = source.indexOf(ANNOTATIONS_START_PREFIX);
  if (start < 0) {
    return {
      freeContent: source.trimEnd(),
      annotations: [],
      nextNumber: DEFAULT_NEXT_NUMBER,
    };
  }

  const end = source.indexOf(ANNOTATIONS_END, start);
  if (end < 0) {
    // A malformed marker must never hide or discard the user's note.
    return {
      freeContent: source.trimEnd(),
      annotations: [],
      nextNumber: DEFAULT_NEXT_NUMBER,
    };
  }

  const managedEnd = end + ANNOTATIONS_END.length;
  const before = source.slice(0, start).trimEnd();
  const after = source.slice(managedEnd).trim();
  const freeContent = [before, after].filter(Boolean).join('\n\n');
  const managed = source.slice(start, managedEnd);
  const meta = parseStartMeta(managed);
  const annotations = parseManagedAnnotations(managed);
  const inferredNext = annotations.reduce((max, item) => {
    const match = item.title.match(/(?:注释|注釈|Annotation)\s*(\d+)$/i);
    return match ? Math.max(max, Number(match[1]) + 1) : max;
  }, DEFAULT_NEXT_NUMBER);

  return {
    freeContent,
    annotations,
    nextNumber: Math.max(meta.nextNumber, inferredNext),
  };
};

export const serializeNoteDocument = ({freeContent = '', annotations = [], nextNumber = 1}) => {
  const normalized = annotations
    .map((item) => normalizeAnnotation(item, item?.createdAt))
    .filter(Boolean);
  const free = String(freeContent || '').trimEnd();

  if (normalized.length === 0) return free;

  const startMeta = safeEncode({
    nextNumber: Math.max(DEFAULT_NEXT_NUMBER, Number(nextNumber) || DEFAULT_NEXT_NUMBER),
  });
  const managed = [
    `${ANNOTATIONS_START_PREFIX}${startMeta} -->`,
    '',
    '## 文中注释',
    '',
    normalized.map(serializeAnnotation).join('\n\n'),
    '',
    ANNOTATIONS_END,
  ].join('\n');

  return free ? `${free}\n\n${managed}` : managed;
};

export const updateFreeNoteContent = (content, freeContent) => {
  const parsed = parseNoteDocument(content);
  return serializeNoteDocument({...parsed, freeContent});
};

export const createAnnotation = (documentState, draft, now = Date.now()) => {
  const current = documentState || {freeContent: '', annotations: [], nextNumber: 1};
  const number = Math.max(DEFAULT_NEXT_NUMBER, Number(current.nextNumber) || DEFAULT_NEXT_NUMBER);
  const annotation = normalizeAnnotation({
    id: createId(),
    title: `${draft.defaultTitlePrefix || '注释'} ${number}`,
    exact: draft.exact,
    line: draft.line,
    documentHash: draft.documentHash,
    bodyMarkdown: draft.bodyMarkdown || '',
    createdAt: now,
    updatedAt: now,
  }, now);

  if (!annotation) return {document: current, annotation: null};
  return {
    annotation,
    document: {
      ...current,
      annotations: [...current.annotations, annotation],
      nextNumber: number + 1,
    },
  };
};

export const updateAnnotation = (documentState, annotationId, patch, now = Date.now()) => ({
  ...documentState,
  annotations: documentState.annotations.map((item) => (
    item.id === annotationId
      ? normalizeAnnotation({...item, ...patch, id: item.id, updatedAt: now}, item.createdAt)
      : item
  )).filter(Boolean),
});

export const deleteAnnotation = (documentState, annotationId) => ({
  ...documentState,
  annotations: documentState.annotations.filter((item) => item.id !== annotationId),
});

export const restoreAnnotation = (documentState, annotation) => {
  if (!annotation || documentState.annotations.some((item) => item.id === annotation.id)) {
    return documentState;
  }
  return {
    ...documentState,
    annotations: [...documentState.annotations, annotation],
  };
};

export const stripAnnotationMetadata = (content) => String(content || '')
  .replace(/<!-- kai-annotations:start:v1:[^\n]* -->/g, '')
  .replace(/<!-- kai-ann:v1:[^\n]* -->/g, '')
  .replaceAll(ANNOTATION_BODY_MARKER, '')
  .replaceAll(ANNOTATION_END, '')
  .replaceAll(ANNOTATIONS_END, '')
  .replace(/\n{3,}/g, '\n\n')
  .trim();
