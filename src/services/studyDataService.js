import {getSupabaseClient} from './supabaseClient';
import {resolveCurrentDocId, resolveDocumentUuid} from './documentIdentity';

const PAGE_SIZE = 500;
const PROGRESS_UPDATED_EVENT = 'kai_progress_updated';
const NOTES_UPDATED_EVENT = 'kai_notes_updated';

const requireClient = () => {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase 未配置');
  return client;
};

const requireUserId = async (client) => {
  const {data, error} = await client.auth.getSession();
  const userId = data?.session?.user?.id;
  if (error || !userId) throw new Error('请先登录。');
  return userId;
};

const toTimestamp = (value) => {
  const timestamp = value ? new Date(value).getTime() : 0;
  return Number.isFinite(timestamp) ? timestamp : 0;
};

const notify = (name, detail = {}) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(name, {detail}));
  }
};

const normalizeProgress = (row) => row ? ({
  id: resolveCurrentDocId(row),
  documentUuid: row.document_uuid || null,
  status: row.status,
  title: row.title || row.doc_id,
  permalink: row.permalink || `/docs/${row.doc_id}`,
  tags: Array.isArray(row.tags) ? row.tags : [],
  reviewCount: Math.max(0, Number(row.review_count) || 0),
  updatedAt: toTimestamp(row.updated_at),
}) : null;

const normalizeNote = (row) => row ? ({
  id: resolveCurrentDocId(row),
  documentUuid: row.document_uuid || null,
  content: row.content || '',
  version: Math.max(1, Number(row.version) || 1),
  updatedAt: toTimestamp(row.updated_at),
}) : null;

async function fetchAllRows(table, columns) {
  const client = requireClient();
  await requireUserId(client);
  const rows = [];
  for (let from = 0; ; from += PAGE_SIZE) {
    const {data, error} = await client
      .from(table)
      .select(columns)
      .is('deleted_at', null)
      .order('updated_at', {ascending: false})
      .range(from, from + PAGE_SIZE - 1);
    if (error) throw error;
    rows.push(...(data || []));
    if (!data || data.length < PAGE_SIZE) break;
  }
  return rows;
}

export async function fetchDocProgress(docId) {
  const client = requireClient();
  await requireUserId(client);
  let query = client
    .from('user_progress_items')
    .select('doc_id,document_uuid,status,title,permalink,tags,review_count,updated_at')
    .is('deleted_at', null);
  const documentUuid = await resolveDocumentUuid(docId);
  query = documentUuid ? query.eq('document_uuid', documentUuid) : query.eq('doc_id', docId);
  const {data, error} = await query.maybeSingle();
  if (error) throw error;
  return normalizeProgress(data);
}

export async function fetchAllProgress() {
  const rows = await fetchAllRows(
    'user_progress_items',
    'doc_id,document_uuid,status,title,permalink,tags,review_count,updated_at',
  );
  return rows.map(normalizeProgress).filter(Boolean);
}

export async function saveDocProgress({docId, status, title, permalink, tags, reviewCount, eventType, expectedUserId = ''}) {
  const client = requireClient();
  const userId = await requireUserId(client);
  if (expectedUserId && userId !== expectedUserId) {
    throw new Error('账号已切换，请重新保存进度。');
  }
  const now = Date.now();
  const documentUuid = await resolveDocumentUuid(docId);
  const payload = {
    user_id: userId,
    doc_id: docId,
    status,
    title: title || docId,
    permalink: permalink || `/docs/${docId}`,
    tags: Array.isArray(tags) ? tags : [],
    review_count: Math.max(0, Number(reviewCount) || 0),
    client_updated_at: now,
    deleted_at: null,
  };
  if (documentUuid) payload.document_uuid = documentUuid;
  const {data, error} = await client
    .from('user_progress_items')
    .upsert(payload, {onConflict: documentUuid ? 'user_id,document_uuid' : 'user_id,doc_id'})
    .select('doc_id,document_uuid,status,title,permalink,tags,review_count,updated_at')
    .single();
  if (error) throw error;

  if (eventType) {
    const eventId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : null;
    if (eventId) {
      const {error: eventError} = await client.rpc('record_practice_events', {
        p_events: [{id: eventId, docId, eventType, occurredAt: now}],
      });
      // The progress row is the primary user record. A secondary leaderboard
      // event must never make a successful progress write look like it failed.
      if (eventError) console.warn('Failed to record practice event', eventError);
    }
  }

  const value = normalizeProgress(data);
  notify(PROGRESS_UPDATED_EVENT, {userId, docId, value});
  return value;
}

export async function deleteDocProgress(docId) {
  const client = requireClient();
  const userId = await requireUserId(client);
  let query = client
    .from('user_progress_items')
    .delete()
    .eq('user_id', userId);
  const documentUuid = await resolveDocumentUuid(docId);
  query = documentUuid ? query.eq('document_uuid', documentUuid) : query.eq('doc_id', docId);
  const {error} = await query;
  if (error) throw error;
  notify(PROGRESS_UPDATED_EVENT, {userId, docId, value: null});
}

export async function clearMyProgress() {
  const client = requireClient();
  const userId = await requireUserId(client);
  const {error} = await client.from('user_progress_items').delete().eq('user_id', userId);
  if (error) throw error;
  notify(PROGRESS_UPDATED_EVENT, {userId, clearAll: true});
}

export async function fetchDocNote(docId) {
  const client = requireClient();
  await requireUserId(client);
  let query = client
    .from('user_note_items')
    .select('doc_id,document_uuid,content,version,updated_at')
    .is('deleted_at', null);
  const documentUuid = await resolveDocumentUuid(docId);
  query = documentUuid ? query.eq('document_uuid', documentUuid) : query.eq('doc_id', docId);
  const {data, error} = await query.maybeSingle();
  if (error) throw error;
  return normalizeNote(data);
}

export async function fetchAllNotes() {
  const rows = await fetchAllRows(
    'user_note_items',
    'doc_id,document_uuid,content,version,updated_at',
  );
  return rows.map(normalizeNote).filter(Boolean);
}

export async function saveDocNote(docId, content, expectedUserId = '') {
  const client = requireClient();
  const userId = await requireUserId(client);
  if (expectedUserId && userId !== expectedUserId) {
    throw new Error('账号已切换，请重新保存笔记。');
  }
  const normalized = String(content || '');
  const documentUuid = await resolveDocumentUuid(docId);
  if (!normalized.trim()) {
    let query = client
      .from('user_note_items')
      .delete()
      .eq('user_id', userId);
    query = documentUuid ? query.eq('document_uuid', documentUuid) : query.eq('doc_id', docId);
    const {error} = await query;
    if (error) throw error;
    notify(NOTES_UPDATED_EVENT, {userId, docId, value: null});
    return null;
  }

  const payload = {
    user_id: userId,
    doc_id: docId,
    content: normalized,
    client_updated_at: Date.now(),
    deleted_at: null,
  };
  if (documentUuid) payload.document_uuid = documentUuid;
  const {data, error} = await client
    .from('user_note_items')
    .upsert(payload, {onConflict: documentUuid ? 'user_id,document_uuid' : 'user_id,doc_id'})
    .select('doc_id,document_uuid,content,version,updated_at')
    .single();
  if (error) throw error;
  const value = normalizeNote(data);
  notify(NOTES_UPDATED_EVENT, {userId, docId, value});
  return value;
}

export function addProgressUpdatedListener(listener) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(PROGRESS_UPDATED_EVENT, listener);
  return () => window.removeEventListener(PROGRESS_UPDATED_EVENT, listener);
}

export function addNotesUpdatedListener(listener) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(NOTES_UPDATED_EVENT, listener);
  return () => window.removeEventListener(NOTES_UPDATED_EVENT, listener);
}
