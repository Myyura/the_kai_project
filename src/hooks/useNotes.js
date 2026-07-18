import { useState, useEffect, useCallback, useMemo } from 'react';
import { getCalibratedNow } from '../services/syncService';
import { addStorageOwnerChangeListener, getScopedStorageKey } from '../services/localStorageScope';

export const NOTES_STORAGE_KEY = 'kai_notes';

// 模块级缓存，避免多组件同时 JSON.parse
let _notesCache = null;
let _notesRaw = null;
let _notesStorageKey = null;

// 从 localStorage 读取全部笔记数据
export const readNotesData = ({ storageOwner } = {}) => {
  if (typeof window === 'undefined') return {};
  try {
    const key = getScopedStorageKey(NOTES_STORAGE_KEY, storageOwner);
    const raw = localStorage.getItem(key);
    if (key === _notesStorageKey && raw === _notesRaw && _notesCache) return _notesCache;
    _notesStorageKey = key;
    _notesRaw = raw;
    _notesCache = raw ? JSON.parse(raw) : {};
    return _notesCache;
  } catch {
    return {};
  }
};

// 将笔记数据写入 localStorage 并触发更新事件
export const writeNotesData = (data, { skipDirty = false, storageOwner } = {}) => {
  if (typeof window === 'undefined') return;
  try {
    const key = getScopedStorageKey(NOTES_STORAGE_KEY, storageOwner);
    const json = JSON.stringify(data);
    // 数据未变化时跳过写入和脏标记，减少无效同步请求
    if (key === _notesStorageKey && json === _notesRaw) return;
    _notesStorageKey = key;
    _notesRaw = json;
    _notesCache = data;
    localStorage.setItem(key, json);
    if (key === getScopedStorageKey(NOTES_STORAGE_KEY)) {
      window.dispatchEvent(new Event('kai_notes_updated'));
    }
    // 标记本地有未同步修改（从云端拉取写入时 skipDirty=true）
    if (!skipDirty) {
      import('../services/syncService').then(m => m.markSyncDirty({ storageOwner })).catch(() => {});
    }
  } catch {}
};

/**
 * Atomically update one document note against the latest cached value.
 * Inline annotations and the footer editor must both use this path so a
 * debounced save cannot replace changes made by the other surface.
 */
export const updateDocNoteContent = (docId, updater) => {
  const current = readNotesData();
  const previousContent = current[docId]?.content ?? '';
  const nextContent = typeof updater === 'function'
    ? updater(previousContent)
    : String(updater ?? '');

  if (nextContent === previousContent) return current[docId] ?? null;

  const next = {...current};
  if (nextContent.trim() === '') {
    delete next[docId];
  } else {
    next[docId] = {
      content: nextContent,
      updatedAt: getCalibratedNow(),
    };
  }
  writeNotesData(next);
  return next[docId] ?? null;
};

/**
 * 单文档笔记钩子
 * @param {string} docId - 文档 ID（来自 metadata.id）
 */
export const useDocNotes = (docId) => {
  const [data, setData] = useState(() => readNotesData());

  useEffect(() => {
    const handler = () => setData(readNotesData());
    window.addEventListener('kai_notes_updated', handler);
    const removeStorageOwnerListener = addStorageOwnerChangeListener(handler);
    return () => {
      window.removeEventListener('kai_notes_updated', handler);
      removeStorageOwnerListener();
    };
  }, []);

  const entry = data[docId];
  const content = entry?.content ?? '';
  const updatedAt = entry?.updatedAt ?? null;

  const saveNote = useCallback(
    (newContent) => {
      updateDocNoteContent(docId, newContent);
      setData({...readNotesData()});
    },
    [docId]
  );

  const patchNote = useCallback((updater) => {
    const entry = updateDocNoteContent(docId, updater);
    setData({...readNotesData()});
    return entry;
  }, [docId]);

  return { content, updatedAt, saveNote, patchNote };
};

/**
 * 全局笔记统计钩子（可用于笔记总览页面）
 */
export const useAllNotes = () => {
  const [data, setData] = useState(() => readNotesData());

  useEffect(() => {
    setData(readNotesData());
    const handler = () => setData(readNotesData());
    window.addEventListener('kai_notes_updated', handler);
    const removeStorageOwnerListener = addStorageOwnerChangeListener(handler);
    return () => {
      window.removeEventListener('kai_notes_updated', handler);
      removeStorageOwnerListener();
    };
  }, []);

  const entries = useMemo(
    () => Object.entries(data).map(([id, val]) => ({ id, ...val })),
    [data]
  );

  return { data, entries };
};
