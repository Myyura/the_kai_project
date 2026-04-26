import { useState, useEffect, useCallback, useMemo } from 'react';
import { getCalibratedNow } from '../services/syncService';

export const NOTES_STORAGE_KEY = 'kai_notes';

// 模块级缓存，避免多组件同时 JSON.parse
let _notesCache = null;
let _notesRaw = null;

// 从 localStorage 读取全部笔记数据
export const readNotesData = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    if (raw === _notesRaw && _notesCache) return _notesCache;
    _notesRaw = raw;
    _notesCache = raw ? JSON.parse(raw) : {};
    return _notesCache;
  } catch {
    return {};
  }
};

// 将笔记数据写入 localStorage 并触发更新事件
export const writeNotesData = (data, { skipDirty = false } = {}) => {
  if (typeof window === 'undefined') return;
  try {
    const json = JSON.stringify(data);
    // 数据未变化时跳过写入和脏标记，减少无效同步请求
    if (json === _notesRaw) return;
    _notesRaw = json;
    _notesCache = data;
    localStorage.setItem(NOTES_STORAGE_KEY, json);
    window.dispatchEvent(new Event('kai_notes_updated'));
    // 标记本地有未同步修改（从云端拉取写入时 skipDirty=true）
    if (!skipDirty) {
      import('../services/syncService').then(m => m.markSyncDirty()).catch(() => {});
    }
  } catch {}
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
    return () => window.removeEventListener('kai_notes_updated', handler);
  }, []);

  const entry = data[docId];
  const content = entry?.content ?? '';
  const updatedAt = entry?.updatedAt ?? null;

  const saveNote = useCallback(
    (newContent) => {
      const current = readNotesData();
      if (newContent.trim() === '') {
        delete current[docId];
      } else {
        current[docId] = {
          content: newContent,
          updatedAt: getCalibratedNow(),
        };
      }
      writeNotesData(current);
      setData({ ...current });
    },
    [docId]
  );

  return { content, updatedAt, saveNote };
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
    return () => window.removeEventListener('kai_notes_updated', handler);
  }, []);

  const entries = useMemo(
    () => Object.entries(data).map(([id, val]) => ({ id, ...val })),
    [data]
  );

  const clearAll = useCallback(() => {
    writeNotesData({});
    setData({});
  }, []);

  return { data, entries, clearAll };
};
