import {getSupabaseClient} from './supabaseClient';
import {getScopedStorageKey, getStorageOwner, getStorageOwnerForUser} from './localStorageScope';

const CACHE_KEY = 'kai_problem_sets_cache';
const UPDATED_EVENT = 'kai_problem_sets_updated';

export const PROBLEM_SET_KIND = {
  LATER: 'system_later',
  MISTAKES: 'system_mistakes',
  CUSTOM: 'custom',
};

const normalizeSet = (row) => ({
  id: row.id || row.set_id,
  kind: row.kind,
  title: row.title ?? row.set_title ?? null,
  description: row.description ?? row.set_description ?? '',
  itemCount: Number(row.item_count || 0),
  completedCount: Number(row.completed_count || 0),
  reviewingCount: Number(row.reviewing_count || 0),
  containsDoc: Boolean(row.contains_doc),
  archivedAt: row.archived_at || null,
  updatedAt: row.updated_at || null,
  createdAt: row.created_at || null,
});

const normalizeItem = (row) => ({
  id: row.item_id,
  docId: row.doc_id,
  position: Number(row.position || 0),
  annotation: row.annotation_markdown || '',
  title: row.title || row.doc_id || '',
  permalink: row.permalink || `/docs/${row.doc_id}`,
  tags: Array.isArray(row.tags) ? row.tags : [],
  contentAvailable: Boolean(row.content_available),
  progressStatus: row.progress_status || 'not_started',
  reviewCount: Number(row.review_count || 0),
  updatedAt: row.item_updated_at || null,
  createdAt: row.item_created_at || null,
});

const cacheKey = (userId, storageOwner) => getScopedStorageKey(
  CACHE_KEY,
  storageOwner || (userId === undefined ? undefined : getStorageOwnerForUser(userId)),
);

const readCache = (userId, storageOwner) => {
  if (typeof window === 'undefined') return {lists: {}, details: {}};
  try {
    const raw = localStorage.getItem(cacheKey(userId, storageOwner));
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object'
      ? {...parsed, lists: parsed.lists || {}, details: parsed.details || {}}
      : {lists: {}, details: {}};
  } catch {
    return {lists: {}, details: {}};
  }
};

const writeCache = (cache, userId, storageOwner) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(cacheKey(userId, storageOwner), JSON.stringify({
      ...cache,
      cachedAt: Date.now(),
    }));
  } catch {}
};

const notifyUpdated = (detail = {}) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(UPDATED_EVENT, {detail}));
  }
};

const getClient = () => {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase 未配置');
  return client;
};

const assertOnline = () => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('offline_read_only');
  }
};

const rpc = async (name, params) => {
  const {data, error} = await getClient().rpc(name, params);
  if (error) throw error;
  return data;
};

const canUseOfflineCache = (error) => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) return true;
  return /failed to fetch|network|load failed|connection/i.test(error?.message || '');
};

export const readCachedProblemSets = (docId = '', userId) => {
  const cache = readCache(userId);
  return cache.lists[docId || '__all__'] || cache.lists.__all__ || [];
};

export const readCachedProblemSet = (setId, userId) => readCache(userId).details[setId] || null;

export const fetchMyProblemSets = async (docId = '', userId) => {
  try {
    const data = await rpc('get_my_problem_sets', {p_doc_id: docId || null});
    const sets = (data || []).map(normalizeSet);
    const cache = readCache(userId);
    cache.lists[docId || '__all__'] = sets;
    if (!docId) cache.lists.__all__ = sets;
    writeCache(cache, userId);
    return sets;
  } catch (error) {
    const cached = readCachedProblemSets(docId, userId);
    if (cached.length > 0 && canUseOfflineCache(error)) return cached;
    throw error;
  }
};

export const fetchMyProblemSet = async (setId, userId) => {
  try {
    const data = await rpc('get_my_problem_set', {p_set_id: setId});
    const rows = data || [];
    if (rows.length === 0) throw new Error('problem_set_not_found');
    const first = rows[0];
    const value = {
      ...normalizeSet(first),
      id: first.set_id,
      items: rows.filter((row) => row.item_id).map(normalizeItem),
    };
    value.itemCount = value.items.length;
    value.completedCount = value.items.filter((item) => item.progressStatus === 'completed').length;
    value.reviewingCount = value.items.filter((item) => item.progressStatus === 'reviewing').length;
    const cache = readCache(userId);
    cache.details[setId] = value;
    writeCache(cache, userId);
    return value;
  } catch (error) {
    const cached = readCachedProblemSet(setId, userId);
    if (cached && canUseOfflineCache(error)) return cached;
    throw error;
  }
};

const refreshCachesAfterMutation = (detail, storageOwner) => {
  const cache = readCache(undefined, storageOwner);
  cache.lists = {};
  if (detail?.setId) delete cache.details[detail.setId];
  writeCache(cache, undefined, storageOwner);
  notifyUpdated(detail);
};

const cloneCache = (cache) => JSON.parse(JSON.stringify(cache));

const updateSetInCache = (cache, setId, updater) => {
  Object.keys(cache.lists || {}).forEach((key) => {
    cache.lists[key] = cache.lists[key].map((problemSet) => (
      problemSet.id === setId ? updater(problemSet) : problemSet
    ));
  });
  if (cache.details?.[setId]) cache.details[setId] = updater(cache.details[setId]);
};

const recalculateDetailCounts = (problemSet) => ({
  ...problemSet,
  itemCount: problemSet.items.length,
  completedCount: problemSet.items.filter((item) => item.progressStatus === 'completed').length,
  reviewingCount: problemSet.items.filter((item) => item.progressStatus === 'reviewing').length,
});

const runOptimisticMutation = async (detail, updateCache, operation) => {
  const storageOwner = getStorageOwner();
  const previous = readCache(undefined, storageOwner);
  const optimistic = cloneCache(previous);
  updateCache(optimistic);
  writeCache(optimistic, undefined, storageOwner);
  notifyUpdated({...detail, optimistic: true, storageOwner});
  try {
    const result = await operation();
    refreshCachesAfterMutation({...detail, storageOwner}, storageOwner);
    return result;
  } catch (error) {
    writeCache(previous, undefined, storageOwner);
    notifyUpdated({...detail, rollback: true, storageOwner});
    throw error;
  }
};

export const createMyProblemSet = async ({title, description = ''}) => {
  assertOnline();
  const storageOwner = getStorageOwner();
  const id = await rpc('create_my_problem_set', {
    p_title: title,
    p_description: description,
  });
  refreshCachesAfterMutation({setId: id, action: 'created', storageOwner}, storageOwner);
  return id;
};

export const updateMyProblemSet = async (setId, {title, description = ''}) => {
  assertOnline();
  await runOptimisticMutation(
    {setId, action: 'updated'},
    (cache) => updateSetInCache(cache, setId, (problemSet) => ({
      ...problemSet, title, description, updatedAt: new Date().toISOString(),
    })),
    () => rpc('update_my_problem_set', {
      p_set_id: setId,
      p_title: title,
      p_description: description,
    }),
  );
};

export const archiveMyProblemSet = async (setId, archived) => {
  assertOnline();
  const archivedAt = archived ? new Date().toISOString() : null;
  await runOptimisticMutation(
    {setId, action: archived ? 'archived' : 'restored'},
    (cache) => updateSetInCache(cache, setId, (problemSet) => ({...problemSet, archivedAt})),
    () => rpc('archive_my_problem_set', {p_set_id: setId, p_archived: Boolean(archived)}),
  );
};

export const deleteMyProblemSet = async (setId) => {
  assertOnline();
  await runOptimisticMutation(
    {setId, action: 'deleted'},
    (cache) => {
      Object.keys(cache.lists || {}).forEach((key) => {
        cache.lists[key] = cache.lists[key].filter((problemSet) => problemSet.id !== setId);
      });
      delete cache.details?.[setId];
    },
    () => rpc('delete_my_problem_set', {p_set_id: setId}),
  );
};

export const setDocProblemSetMemberships = async (docId, setIds) => {
  assertOnline();
  const uniqueSetIds = Array.from(new Set(setIds || []));
  await runOptimisticMutation(
    {docId, action: 'memberships'},
    (cache) => {
      if (cache.lists?.[docId]) {
        cache.lists[docId] = cache.lists[docId].map((problemSet) => ({
          ...problemSet,
          containsDoc: uniqueSetIds.includes(problemSet.id),
        }));
      }
    },
    () => rpc('set_doc_problem_set_memberships', {
      p_doc_id: docId,
      p_set_ids: uniqueSetIds,
    }),
  );
};

export const reorderProblemSetItems = async (setId, itemIds) => {
  assertOnline();
  await runOptimisticMutation(
    {setId, action: 'reordered'},
    (cache) => updateSetInCache(cache, setId, (problemSet) => {
      if (!problemSet.items) return problemSet;
      const byId = new Map(problemSet.items.map((item) => [item.id, item]));
      return {...problemSet, items: itemIds.map((id, position) => ({...byId.get(id), position}))};
    }),
    () => rpc('reorder_problem_set_items', {p_set_id: setId, p_item_ids: itemIds}),
  );
};

export const updateProblemSetItemAnnotation = async (setId, itemId, annotation) => {
  assertOnline();
  await runOptimisticMutation(
    {setId, action: 'annotation'},
    (cache) => updateSetInCache(cache, setId, (problemSet) => ({
      ...problemSet,
      items: (problemSet.items || []).map((item) => (
        item.id === itemId ? {...item, annotation} : item
      )),
    })),
    () => rpc('update_problem_set_item_annotation', {
      p_item_id: itemId,
      p_annotation: annotation,
    }),
  );
};

export const removeProblemSetItems = async (setId, itemIds) => {
  assertOnline();
  const removed = new Set(itemIds);
  await runOptimisticMutation(
    {setId, action: 'removed'},
    (cache) => updateSetInCache(cache, setId, (problemSet) => {
      if (!problemSet.items) return problemSet;
      return recalculateDetailCounts({
        ...problemSet,
        items: problemSet.items
          .filter((item) => !removed.has(item.id))
          .map((item, position) => ({...item, position})),
      });
    }),
    () => rpc('remove_problem_set_items', {p_set_id: setId, p_item_ids: itemIds}),
  );
};

export const transferProblemSetItems = async ({sourceSetId, targetSetId, itemIds, copy = false}) => {
  assertOnline();
  const selected = new Set(itemIds);
  await runOptimisticMutation(
    {setId: sourceSetId, targetSetId, action: copy ? 'copied' : 'moved'},
    (cache) => {
      const source = cache.details?.[sourceSetId];
      const target = cache.details?.[targetSetId];
      const moving = (source?.items || []).filter((item) => selected.has(item.id));
      if (source && !copy) {
        cache.details[sourceSetId] = recalculateDetailCounts({
          ...source,
          items: source.items
            .filter((item) => !selected.has(item.id))
            .map((item, position) => ({...item, position})),
        });
      }
      if (target && moving.length) {
        const existingDocs = new Set(target.items.map((item) => item.docId));
        const appended = moving
          .filter((item) => !existingDocs.has(item.docId))
          .map((item, offset) => ({...item, id: `optimistic:${item.id}`, position: target.items.length + offset}));
        cache.details[targetSetId] = recalculateDetailCounts({...target, items: [...target.items, ...appended]});
      }
    },
    () => rpc('transfer_problem_set_items', {
      p_source_set_id: sourceSetId,
      p_target_set_id: targetSetId,
      p_item_ids: itemIds,
      p_copy: Boolean(copy),
    }),
  );
};

export const addProblemSetsUpdatedListener = (listener) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(UPDATED_EVENT, listener);
  return () => window.removeEventListener(UPDATED_EVENT, listener);
};
