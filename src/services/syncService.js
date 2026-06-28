/**
 * 云同步服务（V2）
 *
 * 新策略：
 * 1. 远端按 docId 分表存储（progress / notes 分离）
 * 2. 客户端仅同步增量（基于本地快照 + 游标）
 * 3. 删除使用 tombstone（deleted_at）避免跨端漏删
 * 4. 双端同条目都更新时返回冲突提示（仍按时间戳自动解）
 */

import {
  getSupabaseClient,
  getSupabaseEmailActionClient,
  getSupabasePasswordResetClient,
} from './supabaseClient';
import { getScopedStorageKey, getStorageOwnerForUser } from './localStorageScope';
import { validateSyncData } from './authSecurity';
import { readProgressData, writeProgressData } from '../hooks/useProgress';
import { readNotesData, writeNotesData } from '../hooks/useNotes';
import {
  readPendingPracticeEvents,
  removePendingPracticeEvents,
} from './practiceEvents';

// ── 存储键 ──────────────────────────────────────────────────

const SYNC_DIRTY_KEY = 'kai_sync_dirty';
const OFFSET_KEY = 'kai_server_time_offset';
const SYNC_CURSOR_KEY = 'kai_sync_cursor_ms';
const PROGRESS_SNAPSHOT_KEY = 'kai_sync_snapshot_progress';
const NOTES_SNAPSHOT_KEY = 'kai_sync_snapshot_notes';
const SYNC_CONFLICT_LOG_KEY = 'kai_sync_conflict_log';

const PROGRESS_TABLE = 'user_progress_items';
const NOTES_TABLE = 'user_note_items';
const PRACTICE_EVENT_BATCH_SIZE = 500;

// ── 基础状态 ────────────────────────────────────────────────

let _serverTimeOffset = null;
let _calibratePromise = null;

/** 标记本地数据已修改，待同步 */
export const markSyncDirty = ({ storageOwner } = {}) => {
  try { localStorage.setItem(getScopedStorageKey(SYNC_DIRTY_KEY, storageOwner), '1'); } catch {}
};

/** 检查是否有待同步的本地修改 */
export const isSyncDirty = ({ storageOwner } = {}) => {
  try { return localStorage.getItem(getScopedStorageKey(SYNC_DIRTY_KEY, storageOwner)) === '1'; } catch { return false; }
};

/** 清除脏标记（同步成功后调用） */
export const clearSyncDirty = ({ storageOwner } = {}) => {
  try { localStorage.removeItem(getScopedStorageKey(SYNC_DIRTY_KEY, storageOwner)); } catch {}
};

/**
 * 获取服务端时间偏移量（毫秒）。
 * 已缓存则直接返回，否则返回 0。
 */
export const getServerTimeOffset = () => {
  if (_serverTimeOffset !== null) return _serverTimeOffset;
  try {
    const cached = localStorage.getItem(OFFSET_KEY);
    if (cached !== null) {
      _serverTimeOffset = Number(cached);
      return _serverTimeOffset;
    }
  } catch {}
  return 0;
};

/**
 * 通过 RPC 获取 Supabase 服务端时间并计算偏移量。
 */
export const calibrateServerTime = async () => {
  if (_calibratePromise) return _calibratePromise;
  _calibratePromise = _calibrateServerTimeImpl();
  try { await _calibratePromise; } finally { _calibratePromise = null; }
};

const _calibrateServerTimeImpl = async () => {
  const sb = getSupabaseClient();
  if (!sb) return;
  try {
    const before = Date.now();
    const { data, error } = await sb.rpc('get_server_time');
    if (error || !data) return;
    const after = Date.now();
    const serverMs = new Date(data).getTime();
    const clientMs = Math.round((before + after) / 2);
    const offset = serverMs - clientMs;
    _serverTimeOffset = offset;
    try { localStorage.setItem(OFFSET_KEY, String(offset)); } catch {}
  } catch {
    // 失败时保持旧值或 0，不影响同步流程
  }
};

/**
 * 获取校准后的当前时间戳（毫秒）
 */
export const getCalibratedNow = () => Date.now() + getServerTimeOffset();

// ── 类型与工具 ──────────────────────────────────────────────

const toMs = (value, fallback = 0) => {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return Math.floor(n);
};

const toIsoFromMs = (ms) => new Date(toMs(ms, Date.now())).toISOString();

const readJsonObject = (key, storageOwner) => {
  try {
    const raw = localStorage.getItem(getScopedStorageKey(key, storageOwner));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
  } catch {}
  return {};
};

const writeJsonObject = (key, value, storageOwner) => {
  try { localStorage.setItem(getScopedStorageKey(key, storageOwner), JSON.stringify(value)); } catch {}
};

const readSyncCursorMs = (storageOwner) => {
  try {
    return toMs(localStorage.getItem(getScopedStorageKey(SYNC_CURSOR_KEY, storageOwner)), 0);
  } catch {
    return 0;
  }
};

const writeSyncCursorMs = (ms, storageOwner) => {
  try { localStorage.setItem(getScopedStorageKey(SYNC_CURSOR_KEY, storageOwner), String(toMs(ms, Date.now()))); } catch {}
};

const buildSnapshot = (map) => {
  const snapshot = {};
  for (const [docId, value] of Object.entries(map || {})) {
    const ts = toMs(value?.updatedAt, 0);
    if (ts > 0) snapshot[docId] = ts;
  }
  return snapshot;
};

const readSnapshots = (storageOwner) => ({
  progress: readJsonObject(PROGRESS_SNAPSHOT_KEY, storageOwner),
  notes: readJsonObject(NOTES_SNAPSHOT_KEY, storageOwner),
});

const writeSnapshots = (progressMap, notesMap, storageOwner) => {
  writeJsonObject(PROGRESS_SNAPSHOT_KEY, buildSnapshot(progressMap), storageOwner);
  writeJsonObject(NOTES_SNAPSHOT_KEY, buildSnapshot(notesMap), storageOwner);
};

const saveConflictHints = (conflicts, storageOwner) => {
  if (!Array.isArray(conflicts) || conflicts.length === 0) return;
  writeJsonObject(SYNC_CONFLICT_LOG_KEY, {
    at: Date.now(),
    count: conflicts.length,
    conflicts: conflicts.slice(0, 30),
  }, storageOwner);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('kai_sync_conflict_log_updated'));
  }
};

export const readSyncConflictLog = ({ storageOwner } = {}) => {
  const log = readJsonObject(SYNC_CONFLICT_LOG_KEY, storageOwner);
  if (!log || !Array.isArray(log.conflicts) || log.conflicts.length === 0) return null;
  return log;
};

export const clearSyncConflictLog = ({ storageOwner } = {}) => {
  try {
    localStorage.removeItem(getScopedStorageKey(SYNC_CONFLICT_LOG_KEY, storageOwner));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('kai_sync_conflict_log_updated'));
    }
  } catch {}
};

const normalizeProgressEntry = (docId, raw) => {
  if (!raw || typeof raw !== 'object') return null;
  const status = raw.status;
  if (status !== 'completed' && status !== 'reviewing') return null;
  const updatedAt = toMs(raw.updatedAt, 0);
  if (!updatedAt) return null;
  const title = (typeof raw.title === 'string' && raw.title.trim()) ? raw.title.trim() : docId;
  const permalink = (typeof raw.permalink === 'string' && raw.permalink.trim()) ? raw.permalink.trim() : null;
  const tags = Array.isArray(raw.tags)
    ? raw.tags.filter((t) => typeof t === 'string' && t.trim()).slice(0, 100)
    : [];
  const reviewCount = Math.max(0, toMs(raw.reviewCount, 0));
  return {
    status,
    title,
    permalink,
    tags,
    reviewCount,
    updatedAt,
  };
};

const normalizeNotesEntry = (raw) => {
  if (!raw || typeof raw !== 'object') return null;
  const content = typeof raw.content === 'string' ? raw.content : '';
  if (!content.trim()) return null;
  const updatedAt = toMs(raw.updatedAt, 0);
  if (!updatedAt) return null;
  return { content, updatedAt };
};

const sanitizeProgressMap = (rawMap) => {
  const next = {};
  for (const [docId, raw] of Object.entries(rawMap || {})) {
    const normalized = normalizeProgressEntry(docId, raw);
    if (normalized) next[docId] = normalized;
  }
  return next;
};

const sanitizeNotesMap = (rawMap) => {
  const next = {};
  for (const [docId, raw] of Object.entries(rawMap || {})) {
    const normalized = normalizeNotesEntry(raw);
    if (normalized) next[docId] = normalized;
  }
  return next;
};

const isProgressEqual = (a, b) => {
  if (!a || !b) return false;
  return a.status === b.status
    && a.title === b.title
    && (a.permalink || null) === (b.permalink || null)
    && (a.reviewCount ?? 0) === (b.reviewCount ?? 0)
    && JSON.stringify(a.tags || []) === JSON.stringify(b.tags || [])
    && toMs(a.updatedAt, 0) === toMs(b.updatedAt, 0);
};

const isNotesEqual = (a, b) => {
  if (!a || !b) return false;
  return a.content === b.content && toMs(a.updatedAt, 0) === toMs(b.updatedAt, 0);
};

const summarizeText = (text, limit = 180) => {
  const normalized = String(text || '').trim().replace(/\s+/g, ' ');
  if (!normalized) return '';
  return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
};

const summarizeProgressEntry = (entry, fallbackUpdatedAt = 0, deleted = false) => {
  if (deleted) return { deleted: true, updatedAt: fallbackUpdatedAt };
  if (!entry) return null;
  return {
    status: entry.status || null,
    reviewCount: Math.max(0, toMs(entry.reviewCount, 0)),
    updatedAt: toMs(entry.updatedAt, fallbackUpdatedAt),
  };
};

const summarizeNoteEntry = (entry, fallbackUpdatedAt = 0, deleted = false) => {
  if (deleted) return { deleted: true, updatedAt: fallbackUpdatedAt };
  if (!entry) return null;
  const content = typeof entry.content === 'string' ? entry.content : '';
  return {
    excerpt: summarizeText(content),
    charCount: content.trim().length,
    updatedAt: toMs(entry.updatedAt, fallbackUpdatedAt),
  };
};

const createConflict = ({
  type,
  docId,
  winner,
  reason,
  localUpdatedAt,
  remoteUpdatedAt,
  local,
  remote,
  remoteDeleted = false,
}) => {
  const title = type === 'progress'
    ? (local?.title || remote?.title || docId)
    : docId;
  const permalink = type === 'progress'
    ? (local?.permalink || remote?.permalink || `/docs/${docId}`)
    : `/docs/${docId}`;
  const localSummary = type === 'progress'
    ? summarizeProgressEntry(local, localUpdatedAt)
    : summarizeNoteEntry(local, localUpdatedAt);
  const remoteSummary = type === 'progress'
    ? summarizeProgressEntry(remote, remoteUpdatedAt, remoteDeleted)
    : summarizeNoteEntry(remote, remoteUpdatedAt, remoteDeleted);

  return {
    type,
    docId,
    title,
    permalink,
    winner,
    reason,
    localUpdatedAt,
    remoteUpdatedAt,
    localSummary,
    remoteSummary,
  };
};

const computeLocalDelta = (localMap, snapshotMap, ignoreUpsertIds = new Set()) => {
  const upserts = {};
  const deletes = [];
  for (const [docId, value] of Object.entries(localMap || {})) {
    if (ignoreUpsertIds.has(docId)) continue;
    const localTs = toMs(value?.updatedAt, 0);
    const snapTs = toMs(snapshotMap?.[docId], 0);
    if (!snapTs || localTs > snapTs) {
      upserts[docId] = value;
    }
  }
  for (const docId of Object.keys(snapshotMap || {})) {
    if (!Object.prototype.hasOwnProperty.call(localMap || {}, docId)) {
      deletes.push(docId);
    }
  }
  return { upserts, deletes };
};

const schemaUpgradeError = (err) => {
  const msg = String(err?.message || '');
  const code = String(err?.code || '');
  if (
    code === '42P01'
    || msg.includes(PROGRESS_TABLE)
    || msg.includes(NOTES_TABLE)
    || msg.includes('does not exist')
  ) {
    return new Error('云同步表结构未升级，请执行 src/services/schema.sql 里的 migration 段落后重试。');
  }
  return err;
};

const assertValidSyncData = (progressMap, notesMap) => {
  const progressCheck = validateSyncData(progressMap);
  if (!progressCheck.valid) {
    throw new Error(`同步数据异常（progress）: ${progressCheck.reason}`);
  }
  const notesCheck = validateSyncData(notesMap);
  if (!notesCheck.valid) {
    throw new Error(`同步数据异常（notes）: ${notesCheck.reason}`);
  }
};

// ── 远端行读写 ──────────────────────────────────────────────

const fetchRemoteRows = async (sb, userId, sinceMs = 0) => {
  const sinceIso = sinceMs > 0 ? toIsoFromMs(sinceMs) : null;

  let progressQuery = sb
    .from(PROGRESS_TABLE)
    .select('doc_id, status, title, permalink, tags, review_count, client_updated_at, deleted_at, updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: true });

  let notesQuery = sb
    .from(NOTES_TABLE)
    .select('doc_id, content, client_updated_at, deleted_at, updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: true });

  if (sinceIso) {
    progressQuery = progressQuery.gt('updated_at', sinceIso);
    notesQuery = notesQuery.gt('updated_at', sinceIso);
  }

  const [progressRes, notesRes] = await Promise.all([
    progressQuery,
    notesQuery,
  ]);

  if (progressRes.error) throw schemaUpgradeError(progressRes.error);
  if (notesRes.error) throw schemaUpgradeError(notesRes.error);

  return {
    progressRows: progressRes.data || [],
    noteRows: notesRes.data || [],
  };
};

const upsertProgressRows = async (sb, userId, entries) => {
  const rows = Object.entries(entries || {}).map(([docId, value]) => ({
    user_id: userId,
    doc_id: docId,
    status: value.status,
    title: value.title || docId,
    permalink: value.permalink || null,
    tags: Array.isArray(value.tags) ? value.tags : [],
    review_count: Math.max(0, toMs(value.reviewCount, 0)),
    client_updated_at: toMs(value.updatedAt, Date.now()),
    deleted_at: null,
  }));

  if (rows.length === 0) return 0;

  const { error } = await sb
    .from(PROGRESS_TABLE)
    .upsert(rows, { onConflict: 'user_id,doc_id' });
  if (error) throw schemaUpgradeError(error);
  return rows.length;
};

const upsertNotesRows = async (sb, userId, entries) => {
  const rows = Object.entries(entries || {}).map(([docId, value]) => ({
    user_id: userId,
    doc_id: docId,
    content: value.content,
    client_updated_at: toMs(value.updatedAt, Date.now()),
    deleted_at: null,
  }));

  if (rows.length === 0) return 0;

  const { error } = await sb
    .from(NOTES_TABLE)
    .upsert(rows, { onConflict: 'user_id,doc_id' });
  if (error) throw schemaUpgradeError(error);
  return rows.length;
};

const markProgressDeleted = async (sb, userId, docIds, deletedAtMs) => {
  if (!Array.isArray(docIds) || docIds.length === 0) return 0;
  const whenMs = toMs(deletedAtMs, Date.now());
  const rows = docIds.map((docId) => ({
    user_id: userId,
    doc_id: docId,
    status: null,
    title: null,
    permalink: null,
    tags: [],
    review_count: 0,
    client_updated_at: whenMs,
    deleted_at: toIsoFromMs(whenMs),
  }));

  const { error } = await sb
    .from(PROGRESS_TABLE)
    .upsert(rows, { onConflict: 'user_id,doc_id' });
  if (error) throw schemaUpgradeError(error);
  return rows.length;
};

const markNotesDeleted = async (sb, userId, docIds, deletedAtMs) => {
  if (!Array.isArray(docIds) || docIds.length === 0) return 0;
  const whenMs = toMs(deletedAtMs, Date.now());
  const rows = docIds.map((docId) => ({
    user_id: userId,
    doc_id: docId,
    content: null,
    client_updated_at: whenMs,
    deleted_at: toIsoFromMs(whenMs),
  }));

  const { error } = await sb
    .from(NOTES_TABLE)
    .upsert(rows, { onConflict: 'user_id,doc_id' });
  if (error) throw schemaUpgradeError(error);
  return rows.length;
};

const uploadPracticeEvents = async (sb, events) => {
  if (!Array.isArray(events) || events.length === 0) return 0;
  let uploaded = 0;
  for (let offset = 0; offset < events.length; offset += PRACTICE_EVENT_BATCH_SIZE) {
    const batch = events.slice(offset, offset + PRACTICE_EVENT_BATCH_SIZE);
    const { data, error } = await sb.rpc('record_practice_events', { p_events: batch });
    if (error) throw schemaUpgradeError(error);
    uploaded += Number(data) || 0;
  }
  return uploaded;
};

// ── 远端增量应用到本地 ───────────────────────────────────────

const rowClientTs = (row) => toMs(row?.client_updated_at, toMs(new Date(row?.updated_at).getTime(), 0));

const progressRowToLocal = (docId, row, remoteTs) => {
  const normalized = normalizeProgressEntry(docId, {
    status: row.status,
    title: row.title,
    permalink: row.permalink,
    tags: row.tags,
    reviewCount: row.review_count,
    updatedAt: remoteTs,
  });
  return normalized;
};

const noteRowToLocal = (row, remoteTs) => normalizeNotesEntry({
  content: row.content,
  updatedAt: remoteTs,
});

const applyRemoteProgressRows = (localMap, rows, cursorMs, conflicts) => {
  const next = { ...localMap };
  const remoteAppliedIds = new Set();
  let applied = 0;

  for (const row of rows) {
    const docId = row?.doc_id;
    if (!docId) continue;
    const remoteTs = rowClientTs(row);
    const local = next[docId];
    const localTs = toMs(local?.updatedAt, 0);
    const bothChanged = localTs > cursorMs && remoteTs > cursorMs;

    if (row.deleted_at) {
      if (!local) continue;
      if (localTs > remoteTs) {
        if (bothChanged) {
          conflicts.push(createConflict({
            type: 'progress',
            docId,
            winner: 'local',
            reason: 'delete_vs_edit',
            localUpdatedAt: localTs,
            remoteUpdatedAt: remoteTs,
            local,
            remote: null,
            remoteDeleted: true,
          }));
        }
        continue;
      }
      if (bothChanged) {
        conflicts.push(createConflict({
          type: 'progress',
          docId,
          winner: 'remote',
          reason: 'delete_vs_edit',
          localUpdatedAt: localTs,
          remoteUpdatedAt: remoteTs,
          local,
          remote: null,
          remoteDeleted: true,
        }));
      }
      delete next[docId];
      applied += 1;
      remoteAppliedIds.add(docId);
      continue;
    }

    const remoteEntry = progressRowToLocal(docId, row, remoteTs);
    if (!remoteEntry) continue;

    if (!local) {
      next[docId] = remoteEntry;
      applied += 1;
      remoteAppliedIds.add(docId);
      continue;
    }

    const same = isProgressEqual(local, remoteEntry);
    if (remoteTs > localTs) {
      if (!same) {
        next[docId] = remoteEntry;
        applied += 1;
        remoteAppliedIds.add(docId);
        if (bothChanged) {
          conflicts.push(createConflict({
            type: 'progress',
            docId,
            winner: 'remote',
            reason: 'both_modified',
            localUpdatedAt: localTs,
            remoteUpdatedAt: remoteTs,
            local,
            remote: remoteEntry,
          }));
        }
      }
      continue;
    }

    if (localTs > remoteTs) {
      if (!same && bothChanged) {
        conflicts.push(createConflict({
          type: 'progress',
          docId,
          winner: 'local',
          reason: 'both_modified',
          localUpdatedAt: localTs,
          remoteUpdatedAt: remoteTs,
          local,
          remote: remoteEntry,
        }));
      }
      continue;
    }

    if (!same) {
      conflicts.push(createConflict({
        type: 'progress',
        docId,
        winner: 'local',
        reason: 'same_timestamp',
        localUpdatedAt: localTs,
        remoteUpdatedAt: remoteTs,
        local,
        remote: remoteEntry,
      }));
    }
  }

  return { nextMap: next, applied, remoteAppliedIds };
};

const applyRemoteNoteRows = (localMap, rows, cursorMs, conflicts) => {
  const next = { ...localMap };
  const remoteAppliedIds = new Set();
  let applied = 0;

  for (const row of rows) {
    const docId = row?.doc_id;
    if (!docId) continue;
    const remoteTs = rowClientTs(row);
    const local = next[docId];
    const localTs = toMs(local?.updatedAt, 0);
    const bothChanged = localTs > cursorMs && remoteTs > cursorMs;

    if (row.deleted_at) {
      if (!local) continue;
      if (localTs > remoteTs) {
        if (bothChanged) {
          conflicts.push(createConflict({
            type: 'note',
            docId,
            winner: 'local',
            reason: 'delete_vs_edit',
            localUpdatedAt: localTs,
            remoteUpdatedAt: remoteTs,
            local,
            remote: null,
            remoteDeleted: true,
          }));
        }
        continue;
      }
      if (bothChanged) {
        conflicts.push(createConflict({
          type: 'note',
          docId,
          winner: 'remote',
          reason: 'delete_vs_edit',
          localUpdatedAt: localTs,
          remoteUpdatedAt: remoteTs,
          local,
          remote: null,
          remoteDeleted: true,
        }));
      }
      delete next[docId];
      applied += 1;
      remoteAppliedIds.add(docId);
      continue;
    }

    const remoteEntry = noteRowToLocal(row, remoteTs);
    if (!remoteEntry) continue;

    if (!local) {
      next[docId] = remoteEntry;
      applied += 1;
      remoteAppliedIds.add(docId);
      continue;
    }

    const same = isNotesEqual(local, remoteEntry);
    if (remoteTs > localTs) {
      if (!same) {
        next[docId] = remoteEntry;
        applied += 1;
        remoteAppliedIds.add(docId);
        if (bothChanged) {
          conflicts.push(createConflict({
            type: 'note',
            docId,
            winner: 'remote',
            reason: 'both_modified',
            localUpdatedAt: localTs,
            remoteUpdatedAt: remoteTs,
            local,
            remote: remoteEntry,
          }));
        }
      }
      continue;
    }

    if (localTs > remoteTs) {
      if (!same && bothChanged) {
        conflicts.push(createConflict({
          type: 'note',
          docId,
          winner: 'local',
          reason: 'both_modified',
          localUpdatedAt: localTs,
          remoteUpdatedAt: remoteTs,
          local,
          remote: remoteEntry,
        }));
      }
      continue;
    }

    if (!same) {
      conflicts.push(createConflict({
        type: 'note',
        docId,
        winner: 'local',
        reason: 'same_timestamp',
        localUpdatedAt: localTs,
        remoteUpdatedAt: remoteTs,
        local,
        remote: remoteEntry,
      }));
    }
  }

  return { nextMap: next, applied, remoteAppliedIds };
};

const checkpointSync = ({ progressMap, notesMap, cursorMs, storageOwner }) => {
  writeSnapshots(progressMap, notesMap, storageOwner);
  writeSyncCursorMs(cursorMs, storageOwner);
  clearSyncDirty({ storageOwner });
};

// ── 核心 API ────────────────────────────────────────────────

/**
 * 获取当前登录用户的 user_id
 */
export const getCurrentUserId = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user?.id ?? null;
};

/**
 * 拉取远端全量（兼容旧调用）
 * @param {string} [_userId]
 */
export const fetchRemoteData = async (_userId) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = _userId || await getCurrentUserId();
  if (!userId) throw new Error('未登录');

  const { progressRows, noteRows } = await fetchRemoteRows(sb, userId, 0);
  const conflicts = [];
  const progressApplied = applyRemoteProgressRows({}, progressRows, 0, conflicts).nextMap;
  const notesApplied = applyRemoteNoteRows({}, noteRows, 0, conflicts).nextMap;

  assertValidSyncData(progressApplied, notesApplied);

  return {
    progress: progressApplied,
    notes: notesApplied,
    progressRows,
    noteRows,
  };
};

/**
 * 推送本地增量到远端
 * @param {string} [_userId]
 */
export const pushLocalData = async (_userId) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = _userId || await getCurrentUserId();
  if (!userId) throw new Error('未登录');
  const storageOwner = getStorageOwnerForUser(userId);

  await calibrateServerTime();

  const localProgress = sanitizeProgressMap(readProgressData({ storageOwner }));
  const localNotes = sanitizeNotesMap(readNotesData({ storageOwner }));
  const pendingPracticeEvents = readPendingPracticeEvents({ storageOwner });
  assertValidSyncData(localProgress, localNotes);

  const snapshots = readSnapshots(storageOwner);
  const progressDelta = computeLocalDelta(localProgress, snapshots.progress);
  const notesDelta = computeLocalDelta(localNotes, snapshots.notes);

  const totalDelta =
    Object.keys(progressDelta.upserts).length
    + progressDelta.deletes.length
    + Object.keys(notesDelta.upserts).length
    + notesDelta.deletes.length
    + pendingPracticeEvents.length;

  if (totalDelta === 0) {
    const nowMs = getCalibratedNow();
    checkpointSync({ progressMap: localProgress, notesMap: localNotes, cursorMs: nowMs, storageOwner });
    return {
      pushed: false,
      reason: 'no_local_changes',
      progressKeys: Object.keys(localProgress).length,
      notesKeys: Object.keys(localNotes).length,
      conflictsCount: 0,
    };
  }

  const deletedAtMs = getCalibratedNow();
  const [progressUpserts, notesUpserts, progressDeletes, notesDeletes, practiceEvents] = await Promise.all([
    upsertProgressRows(sb, userId, progressDelta.upserts),
    upsertNotesRows(sb, userId, notesDelta.upserts),
    markProgressDeleted(sb, userId, progressDelta.deletes, deletedAtMs),
    markNotesDeleted(sb, userId, notesDelta.deletes, deletedAtMs),
    uploadPracticeEvents(sb, pendingPracticeEvents),
  ]);

  removePendingPracticeEvents(pendingPracticeEvents.map((event) => event.id), { storageOwner });
  const nowMs = getCalibratedNow();
  checkpointSync({ progressMap: localProgress, notesMap: localNotes, cursorMs: nowMs, storageOwner });

  return {
    pushed: true,
    progressUpserts,
    notesUpserts,
    progressDeletes,
    notesDeletes,
    practiceEvents,
    progressKeys: Object.keys(localProgress).length,
    notesKeys: Object.keys(localNotes).length,
    conflictsCount: 0,
  };
};

/**
 * 从远端增量拉取并合并到本地
 * @param {string} [_userId]
 */
export const pullRemoteData = async (_userId) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = _userId || await getCurrentUserId();
  if (!userId) throw new Error('未登录');
  const storageOwner = getStorageOwnerForUser(userId);

  await calibrateServerTime();

  const cursorMs = readSyncCursorMs(storageOwner);
  const { progressRows, noteRows } = await fetchRemoteRows(sb, userId, cursorMs);
  const noRemoteChanges = progressRows.length === 0 && noteRows.length === 0;

  const conflicts = [];
  const localProgress = sanitizeProgressMap(readProgressData({ storageOwner }));
  const localNotes = sanitizeNotesMap(readNotesData({ storageOwner }));

  const progressRes = applyRemoteProgressRows(localProgress, progressRows, cursorMs, conflicts);
  const notesRes = applyRemoteNoteRows(localNotes, noteRows, cursorMs, conflicts);
  const mergedProgress = progressRes.nextMap;
  const mergedNotes = notesRes.nextMap;

  assertValidSyncData(mergedProgress, mergedNotes);

  if (progressRes.applied > 0) writeProgressData(mergedProgress, { skipDirty: true, storageOwner });
  if (notesRes.applied > 0) writeNotesData(mergedNotes, { skipDirty: true, storageOwner });

  const nowMs = getCalibratedNow();
  checkpointSync({ progressMap: mergedProgress, notesMap: mergedNotes, cursorMs: nowMs, storageOwner });
  if (readPendingPracticeEvents({ storageOwner }).length > 0) markSyncDirty({ storageOwner });
  saveConflictHints(conflicts, storageOwner);

  return {
    pulled: !noRemoteChanges,
    reason: noRemoteChanges ? 'no_remote_changes' : undefined,
    progressKeys: Object.keys(mergedProgress).length,
    notesKeys: Object.keys(mergedNotes).length,
    conflictsCount: conflicts.length,
    conflicts: conflicts.slice(0, 20),
  };
};

/**
 * 双向增量同步（推荐）
 *
 * 流程：
 * 1. 拉取远端增量并合并到本地
 * 2. 基于本地快照计算本地增量
 * 3. 仅回写增量到远端（含 tombstone 删除）
 * 4. 返回冲突提示（按时间戳自动解决）
 */
export const syncMerge = async (_userId) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = _userId || await getCurrentUserId();
  if (!userId) throw new Error('未登录');
  const storageOwner = getStorageOwnerForUser(userId);

  await calibrateServerTime();

  const cursorMs = readSyncCursorMs(storageOwner);
  const snapshots = readSnapshots(storageOwner);

  const baseProgress = sanitizeProgressMap(readProgressData({ storageOwner }));
  const baseNotes = sanitizeNotesMap(readNotesData({ storageOwner }));
  const pendingPracticeEvents = readPendingPracticeEvents({ storageOwner });

  const { progressRows, noteRows } = await fetchRemoteRows(sb, userId, cursorMs);

  const conflicts = [];
  const progressRes = applyRemoteProgressRows(baseProgress, progressRows, cursorMs, conflicts);
  const notesRes = applyRemoteNoteRows(baseNotes, noteRows, cursorMs, conflicts);

  const mergedProgress = progressRes.nextMap;
  const mergedNotes = notesRes.nextMap;
  assertValidSyncData(mergedProgress, mergedNotes);

  if (progressRes.applied > 0) writeProgressData(mergedProgress, { skipDirty: true, storageOwner });
  if (notesRes.applied > 0) writeNotesData(mergedNotes, { skipDirty: true, storageOwner });

  const progressDelta = computeLocalDelta(
    mergedProgress,
    snapshots.progress,
    progressRes.remoteAppliedIds,
  );
  const notesDelta = computeLocalDelta(
    mergedNotes,
    snapshots.notes,
    notesRes.remoteAppliedIds,
  );

  const deletedAtMs = getCalibratedNow();
  const [progressUpserts, notesUpserts, progressDeletes, notesDeletes, practiceEvents] = await Promise.all([
    upsertProgressRows(sb, userId, progressDelta.upserts),
    upsertNotesRows(sb, userId, notesDelta.upserts),
    markProgressDeleted(sb, userId, progressDelta.deletes, deletedAtMs),
    markNotesDeleted(sb, userId, notesDelta.deletes, deletedAtMs),
    uploadPracticeEvents(sb, pendingPracticeEvents),
  ]);

  removePendingPracticeEvents(pendingPracticeEvents.map((event) => event.id), { storageOwner });
  const nowMs = getCalibratedNow();
  checkpointSync({ progressMap: mergedProgress, notesMap: mergedNotes, cursorMs: nowMs, storageOwner });
  saveConflictHints(conflicts, storageOwner);

  return {
    progressKeys: Object.keys(mergedProgress).length,
    notesKeys: Object.keys(mergedNotes).length,
    pulledProgressRows: progressRows.length,
    pulledNoteRows: noteRows.length,
    pushedProgressUpserts: progressUpserts,
    pushedNoteUpserts: notesUpserts,
    pushedProgressDeletes: progressDeletes,
    pushedNoteDeletes: notesDeletes,
    pushedPracticeEvents: practiceEvents,
    conflictsCount: conflicts.length,
    conflicts: conflicts.slice(0, 20),
  };
};

// ── 认证辅助 ────────────────────────────────────────────────

/**
 * 邮箱 + 密码注册
 */
export const signUpWithEmail = async (email, password, captchaToken, emailRedirectTo) => {
  const sb = getSupabaseEmailActionClient();
  if (!sb) throw new Error('Supabase 未配置');
  const options = { email, password };
  const actionOptions = {};
  if (captchaToken) actionOptions.captchaToken = captchaToken;
  if (emailRedirectTo) actionOptions.emailRedirectTo = emailRedirectTo;
  if (Object.keys(actionOptions).length > 0) options.options = actionOptions;
  const { data, error } = await sb.auth.signUp(options);
  if (error) throw error;
  return data;
};

/**
 * 邮箱 + 密码登录
 */
export const signInWithEmail = async (email, password, captchaToken) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  const options = { email, password };
  if (captchaToken) options.options = { captchaToken };
  const { data, error } = await sb.auth.signInWithPassword(options);
  if (error) throw error;
  return data;
};

/**
 * GitHub OAuth 登录（跳转授权页）
 * @param {string} [redirectTo] - 授权完成后回跳地址
 */
export const signInWithGitHub = async (redirectTo) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const options = redirectTo ? { redirectTo } : undefined;
  const { data, error } = await sb.auth.signInWithOAuth({
    provider: 'github',
    options,
  });
  if (error) throw error;
  return data;
};

/**
 * 处理 OAuth 回跳 code，交换为 session
 * 注意：detectSessionInUrl=false 时需手动调用
 */
export const exchangeOAuthCodeForSession = async (code) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (!code) throw new Error('缺少 OAuth 授权码');

  const { data, error } = await sb.auth.exchangeCodeForSession(code);
  if (error) throw error;
  return data;
};

const clearRecoveryUrlParams = (url) => {
  url.searchParams.delete('code');
  url.searchParams.delete('token_hash');
  url.searchParams.delete('type');
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}`);
};

const clearAuthUrlParams = (url) => {
  url.searchParams.delete('code');
  url.searchParams.delete('token_hash');
  url.searchParams.delete('type');
  url.searchParams.delete('error');
  url.searchParams.delete('error_description');
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}`);
};

const CALLBACK_TOKEN_HASH_TYPES = new Set(['signup', 'invite', 'magiclink', 'email']);

/**
 * 统一处理登录/注册类 Auth 回调。密码 recovery 仍交给 reset-password 页面。
 */
export const completeAuthCallbackFromUrl = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (typeof window === 'undefined') return null;

  const url = new URL(window.location.href);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const errorDescription = url.searchParams.get('error_description') || hashParams.get('error_description');
  if (errorDescription) {
    clearAuthUrlParams(url);
    throw new Error(decodeURIComponent(errorDescription));
  }

  const type = url.searchParams.get('type') || hashParams.get('type') || null;
  if (type === 'recovery') {
    return { redirectToResetPassword: true };
  }

  const code = url.searchParams.get('code');
  if (code) {
    const data = await exchangeOAuthCodeForSession(code);
    clearAuthUrlParams(url);
    return { ...data, type: type || 'oauth' };
  }

  const tokenHash = url.searchParams.get('token_hash') || hashParams.get('token_hash');
  if (tokenHash) {
    if (!CALLBACK_TOKEN_HASH_TYPES.has(type)) {
      throw new Error('认证链接类型不正确，请重新发送邮件。');
    }
    const { data, error } = await sb.auth.verifyOtp({
      token_hash: tokenHash,
      type,
    });
    if (error) throw error;
    clearAuthUrlParams(url);
    return { ...data, type };
  }

  const accessToken = hashParams.get('access_token');
  const refreshToken = hashParams.get('refresh_token');
  if (accessToken && refreshToken) {
    if (type && type !== 'signup' && type !== 'invite' && type !== 'magiclink' && type !== 'email') {
      throw new Error('认证链接类型不正确，请重新发送邮件。');
    }
    const { data, error } = await sb.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) throw error;
    clearAuthUrlParams(url);
    return { ...data, type: type || 'email' };
  }

  const { data, error } = await sb.auth.getSession();
  if (error) throw error;
  if (!data?.session) throw new Error('认证链接无效或已过期，请重新登录。');
  return { ...data, type };
};

/**
 * 发送密码重置邮件
 */
export const sendPasswordResetEmail = async (email, redirectTo, captchaToken) => {
  const sb = getSupabasePasswordResetClient();
  if (!sb) throw new Error('Supabase 未配置');

  const options = {};
  if (redirectTo) options.redirectTo = redirectTo;
  if (captchaToken) options.captchaToken = captchaToken;

  const { data, error } = await sb.auth.resetPasswordForEmail(email, options);
  if (error) throw error;
  return data;
};

/**
 * 从密码重置链接恢复会话。只接受明确的 recovery 链接，旧版 PKCE code 链接需重新发送。
 */
export const recoverPasswordSessionFromUrl = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (typeof window === 'undefined') return null;

  const url = new URL(window.location.href);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const errorDescription = url.searchParams.get('error_description') || hashParams.get('error_description');
  if (errorDescription) throw new Error(decodeURIComponent(errorDescription));

  const type = url.searchParams.get('type') || hashParams.get('type');
  const hasLegacyCode = url.searchParams.has('code');
  if (hasLegacyCode) {
    throw new Error('这是一封旧版重置链接，请重新发送重置邮件并打开最新链接。');
  }

  const tokenHash = url.searchParams.get('token_hash') || hashParams.get('token_hash');
  if (tokenHash) {
    if (type !== 'recovery') throw new Error('重置链接类型不正确，请重新发送重置邮件。');
    const { data, error } = await sb.auth.verifyOtp({
      token_hash: tokenHash,
      type: 'recovery',
    });
    if (error) throw error;
    clearRecoveryUrlParams(url);
    return data;
  }

  const accessToken = hashParams.get('access_token');
  const refreshToken = hashParams.get('refresh_token');
  if (accessToken && refreshToken) {
    if (type !== 'recovery') throw new Error('重置链接类型不正确，请重新发送重置邮件。');
    const { data, error } = await sb.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) throw error;
    clearRecoveryUrlParams(url);
    return data;
  }

  const { data, error } = await sb.auth.getSession();
  if (error) throw error;
  return data;
};

/**
 * 更新当前登录/恢复会话用户的密码
 */
export const updateCurrentUserPassword = async (password) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const { data, error } = await sb.auth.updateUser({ password });
  if (error) throw error;
  return data;
};

/**
 * 登出
 */
export const signOut = async () => {
  const sb = getSupabaseClient();
  if (!sb) return;
  await sb.auth.signOut();
};

/**
 * 获取当前会话（通过服务端验证 JWT）
 * 注意：使用 getUser() 而非 getSession()，
 * getSession() 仅读取本地存储不验证 JWT，存在被篡改风险
 */
export const getSession = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;
  const { data: { user }, error } = await sb.auth.getUser();
  if (error || !user) return null;
  // 构造兼容的 session-like 对象，供上层读取 user
  return { user };
};

/**
 * 获取经过服务端验证的当前 access token。
 * getSession() 只读本地存储；这里先 getUser() 校验 JWT，再返回 token。
 */
export const getVerifiedAccessToken = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;

  const { data: { session }, error: sessionError } = await sb.auth.getSession();
  if (sessionError || !session?.access_token) return null;

  const { data: { user }, error: userError } = await sb.auth.getUser();
  if (userError || !user) return null;

  return session.access_token;
};

/**
 * 监听认证状态变化
 * @param {(event: string, session: object|null) => void} callback
 * @returns {() => void} unsubscribe
 */
export const onAuthStateChange = (callback) => {
  const sb = getSupabaseClient();
  if (!sb) return () => {};
  const { data: { subscription } } = sb.auth.onAuthStateChange(callback);
  return () => subscription.unsubscribe();
};

// ── 排行榜 ──────────────────────────────────────────────────

export const fetchPracticeLeaderboard = async (period = 'half_month') => {
  const sb = getSupabaseClient();
  if (!sb) return [];
  const { data, error } = await sb.rpc('get_practice_leaderboard', { p_period: period });
  if (error) throw error;
  return data || [];
};

export const fetchLeaderboardProfile = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;
  const { data, error } = await sb.rpc('get_my_leaderboard_profile');
  if (error) throw error;
  return data?.[0] || null;
};

export const updateLeaderboardProfile = async ({ displayName, isAnonymous }) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  const { data, error } = await sb.rpc('set_my_leaderboard_profile', {
    p_display_name: displayName,
    p_is_anonymous: Boolean(isAnonymous),
  });
  if (error) throw error;
  return data?.[0] || null;
};
