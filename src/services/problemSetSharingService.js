import {getSupabaseClient} from './supabaseClient';
import {emitStudyEvent, PROBLEM_SETS_UPDATED_EVENT} from './studyEvents';

export function normalizeProblemSetShareCode(input) {
  let value = String(input || '').trim();
  if (/^https?:\/\//i.test(value)) {
    try {value = new URL(value).searchParams.get('code') || '';} catch {return '';}
  }
  const compact = value.toUpperCase().replace(/[\s\-–—]/g, '');
  const match = /^(?:KAI)?([A-Z0-9]{12})$/.exec(compact);
  return match ? `KAI-${match[1].slice(0, 4)}-${match[1].slice(4, 8)}-${match[1].slice(8)}` : '';
}

const requireCode = (input) => {
  const code = normalizeProblemSetShareCode(input);
  if (!code) throw new Error('problem_set_share_code_invalid');
  return code;
};

const rpc = async (name, params) => {
  const client = getSupabaseClient();
  if (!client) throw new Error('problem_set_sharing_unavailable');
  const {data, error} = await client.rpc(name, params);
  if (error) throw error;
  return data;
};

// Only relative document routes may become clickable links. Public snapshots
// deliberately never expose account IDs, emails, or another user's progress.
const safePermalink = (value) => typeof value === 'string'
  && /^\/docs\//.test(value) && !/[\\\u0000-\u0020]/.test(value) ? value : null;

export const normalizeSharedProblemSet = (data) => {
  const value = Array.isArray(data) ? data[0] : data;
  if (!value) return null;
  return {
    code: String(value.code || ''),
    version: Number(value.version || 1),
    title: String(value.title || ''),
    description: String(value.description || ''),
    author: {
      publicId: String(value.author?.publicId || ''),
      displayName: String(value.author?.displayName || ''),
    },
    items: (Array.isArray(value.items) ? value.items : []).map((item) => ({
      documentUuid: item.documentUuid || null,
      docId: String(item.docId || ''),
      title: String(item.title || item.docId || ''),
      permalink: safePermalink(item.permalink),
      tags: Array.isArray(item.tags) ? item.tags : [],
      annotation: String(item.annotation || ''),
      contentAvailable: Boolean(item.contentAvailable),
      progressStatus: ['completed', 'reviewing'].includes(item.progressStatus) ? item.progressStatus : 'not_started',
    })),
    isActive: Boolean(value.isActive),
    includeAnnotations: Boolean(value.includeAnnotations),
    publishedAt: value.publishedAt || null,
  };
};

export const fetchMyProblemSetShare = async (setId) => normalizeSharedProblemSet(
  await rpc('get_my_problem_set_share', {p_set_id: setId}),
);

export const publishProblemSet = async (setId, {includeAnnotations = false} = {}) => normalizeSharedProblemSet(
  await rpc('publish_my_problem_set', {p_set_id: setId, p_include_annotations: includeAnnotations === true}),
);

export const setProblemSetShareActive = async (setId, active) => normalizeSharedProblemSet(
  await rpc('set_my_problem_set_share_active', {p_set_id: setId, p_active: Boolean(active)}),
);

export async function fetchSharedProblemSet(input) {
  const share = normalizeSharedProblemSet(await rpc('get_shared_problem_set', {p_code: requireCode(input)}));
  if (!share) throw new Error('problem_set_share_not_found');
  return share;
}

export async function importSharedProblemSet({code, title, expectedVersion = null}) {
  const name = title == null ? null : String(title).trim();
  if (name !== null && (!name || Array.from(name).length > 80)) throw new Error('problem_set_title_invalid');
  const setId = await rpc('import_shared_problem_set', {
    p_code: requireCode(code),
    p_title: name,
    p_expected_version: expectedVersion,
  });
  emitStudyEvent(PROBLEM_SETS_UPDATED_EVENT, {setId, action: 'imported'});
  return setId;
}

export function createProblemSetShareUrl(code) {
  const path = `/shared-set?code=${encodeURIComponent(requireCode(code))}`;
  return typeof window !== 'undefined' ? `${window.location.origin}${path}` : path;
}

export function buildProblemSetShareText(share, {intro = '', instructions = ''} = {}) {
  return [intro, share.title, share.description, share.author?.displayName, share.code,
    createProblemSetShareUrl(share.code), instructions].filter(Boolean).join('\n');
}

export function getProblemSetShareErrorCode(error) {
  const message = String(error?.message || '');
  if (error?.code === 'PGRST202' || /sharing_unavailable|function .* does not exist/i.test(message)) return 'unavailable';
  if (/unauthenticated|not_authenticated|authentication_required|not authenticated|jwt expired/i.test(message)) return 'unauthenticated';
  if (/version|stale/i.test(message)) return 'staleVersion';
  if (/code_invalid|invalid.*code/i.test(message)) return 'invalidCode';
  if (/title_invalid/i.test(message)) return 'invalidTitle';
  if (/limit_reached/i.test(message)) return 'limitReached';
  if (/not_found|revoked|inactive|unavailable.*share/i.test(message)) return 'notFound';
  return 'failed';
}
