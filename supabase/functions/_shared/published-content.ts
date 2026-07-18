export type CatalogContentPointer = Record<string, unknown>;

export const DOCUMENT_CATALOG_SELECT = [
  'document_uuid',
  'doc_id',
  'type',
  'title',
  'sidebar_label',
  'university_id',
  'university_name',
  'department_id',
  'department_name',
  'program_id',
  'program_name',
  'year',
  'year_label',
  'file_slug',
  'tags',
  'school_tags',
  'learning_tags',
  'subject_ids',
  'subsubject_ids',
  'topic_ids',
  'permalink',
  'source_path',
  'content_hash',
  'content_path',
  'updated_at',
].join(',');

export type PublishedDocument = {
  schemaVersion: number;
  documentUuid: string;
  docId: string;
  contentHash: string;
  sections: {
    authorMarkdown: string;
    descriptionMarkdown: string;
    kaiMarkdown: string;
  };
  fullMarkdown: string;
};

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SHA256_PATTERN = /^[0-9a-f]{64}$/i;
const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_LIMIT = 100;
const contentCache = new Map<string, { expiresAt: number; document: PublishedDocument }>();

function cacheDocument(key: string, document: PublishedDocument) {
  if (contentCache.size >= CACHE_LIMIT) {
    const oldestKey = contentCache.keys().next().value;
    if (typeof oldestKey === 'string') contentCache.delete(oldestKey);
  }
  contentCache.set(key, { expiresAt: Date.now() + CACHE_TTL_MS, document });
}

function validatePublishedDocument(value: unknown, expectedUuid: string, expectedHash: string): PublishedDocument {
  if (!value || typeof value !== 'object') throw new Error('Published document content is not an object.');
  const document = value as PublishedDocument;
  if (document.schemaVersion !== 1) throw new Error('Unsupported published document schema version.');
  if (document.documentUuid !== expectedUuid) throw new Error('Published document UUID does not match the catalog.');
  if (expectedHash && document.contentHash !== expectedHash) {
    throw new Error('Published document hash does not match the catalog.');
  }
  if (typeof document.docId !== 'string' || typeof document.fullMarkdown !== 'string') {
    throw new Error('Published document content is incomplete.');
  }
  if (
    !document.sections
    || typeof document.sections !== 'object'
    || typeof document.sections.authorMarkdown !== 'string'
    || typeof document.sections.descriptionMarkdown !== 'string'
    || typeof document.sections.kaiMarkdown !== 'string'
  ) {
    throw new Error('Published document sections are missing.');
  }
  return document;
}

export async function fetchPublishedDocument(
  pointer: CatalogContentPointer,
  siteUrl: string,
): Promise<PublishedDocument> {
  const documentUuid = typeof pointer.document_uuid === 'string'
    ? pointer.document_uuid.toLowerCase()
    : '';
  if (!UUID_PATTERN.test(documentUuid)) throw new Error('Catalog document UUID is invalid.');

  const expectedPath = `/api-content/v1/documents/${documentUuid}.json`;
  if (pointer.content_path !== expectedPath) throw new Error('Catalog content path is invalid.');

  const contentHash = typeof pointer.content_hash === 'string' ? pointer.content_hash.toLowerCase() : '';
  if (!SHA256_PATTERN.test(contentHash)) throw new Error('Catalog content hash is invalid.');
  const cacheKey = `${documentUuid}:${contentHash}`;
  const cached = contentCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.document;
  if (cached) contentCache.delete(cacheKey);

  const baseUrl = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`);
  if (baseUrl.protocol !== 'https:') throw new Error('Published content origin must use HTTPS.');
  const contentUrl = new URL(expectedPath, baseUrl);
  if (contentUrl.origin !== baseUrl.origin) throw new Error('Published content origin is invalid.');
  contentUrl.searchParams.set('v', contentHash);

  const response = await fetch(contentUrl, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    throw new Error(`Published document request failed with HTTP ${response.status}.`);
  }
  const document = validatePublishedDocument(await response.json(), documentUuid, contentHash);
  cacheDocument(cacheKey, document);
  return document;
}
