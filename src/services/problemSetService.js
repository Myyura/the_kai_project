import {getSupabaseClient} from './supabaseClient';
import {emitStudyEvent, PROBLEM_SETS_UPDATED_EVENT} from './studyEvents';

const normalizeSet = (row) => ({
  id: row.id,
  kind: row.kind,
  title: row.title ?? null,
  description: row.description ?? '',
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
  documentUuid: row.document_uuid || null,
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

const client = () => {
  const value = getSupabaseClient();
  if (!value) throw new Error('Supabase 未配置');
  return value;
};

const rpc = async (name, params) => {
  const {data, error} = await client().rpc(name, params);
  if (error) throw error;
  return data;
};

export async function fetchMyProblemSets(docId = '') {
  const data = await rpc('get_my_problem_sets', {p_doc_id: docId || null});
  return (data || []).map(normalizeSet);
}

export async function fetchMyProblemSet(setId) {
  const rows = await rpc('get_my_problem_set', {p_set_id: setId}) || [];
  if (rows.length === 0) throw new Error('problem_set_not_found');
  const value = {
    ...normalizeSet({
      id: rows[0].set_id,
      kind: rows[0].kind,
      title: rows[0].set_title,
      description: rows[0].set_description,
      archived_at: rows[0].archived_at,
    }),
    items: rows.filter((row) => row.item_id).map(normalizeItem),
  };
  value.itemCount = value.items.length;
  value.completedCount = value.items.filter((item) => item.progressStatus === 'completed').length;
  value.reviewingCount = value.items.filter((item) => item.progressStatus === 'reviewing').length;
  return value;
}

const mutate = async (name, params, detail) => {
  const result = await rpc(name, params);
  emitStudyEvent(PROBLEM_SETS_UPDATED_EVENT, detail);
  return result;
};

export const createMyProblemSet = async ({title, description = ''}) => {
  const id = await rpc('create_my_problem_set', {
    p_title: title,
    p_description: description,
  });
  emitStudyEvent(PROBLEM_SETS_UPDATED_EVENT, {setId: id, action: 'created'});
  return id;
};

export const updateMyProblemSet = (setId, {title, description = ''}) => mutate(
  'update_my_problem_set',
  {p_set_id: setId, p_title: title, p_description: description},
  {setId, action: 'updated'},
);

export const archiveMyProblemSet = (setId, archived) => mutate(
  'archive_my_problem_set',
  {p_set_id: setId, p_archived: Boolean(archived)},
  {setId, action: archived ? 'archived' : 'restored'},
);

export const deleteMyProblemSet = (setId) => mutate(
  'delete_my_problem_set',
  {p_set_id: setId},
  {setId, action: 'deleted'},
);

export const setDocProblemSetMemberships = (docId, setIds) => mutate(
  'set_doc_problem_set_memberships',
  {p_doc_id: docId, p_set_ids: Array.from(new Set(setIds || []))},
  {docId, action: 'memberships'},
);

export const reorderProblemSetItems = (setId, itemIds) => mutate(
  'reorder_problem_set_items',
  {p_set_id: setId, p_item_ids: itemIds},
  {setId, action: 'reordered'},
);

export const updateProblemSetItemAnnotation = (setId, itemId, annotation) => mutate(
  'update_problem_set_item_annotation',
  {p_item_id: itemId, p_annotation: annotation},
  {setId, action: 'annotation'},
);

export const removeProblemSetItems = (setId, itemIds) => mutate(
  'remove_problem_set_items',
  {p_set_id: setId, p_item_ids: itemIds},
  {setId, action: 'removed'},
);

export const transferProblemSetItems = ({sourceSetId, targetSetId, itemIds, copy = false}) => mutate(
  'transfer_problem_set_items',
  {
    p_source_set_id: sourceSetId,
    p_target_set_id: targetSetId,
    p_item_ids: itemIds,
    p_copy: Boolean(copy),
  },
  {setId: sourceSetId, targetSetId, action: copy ? 'copied' : 'moved'},
);
