import { useState, useEffect, useCallback } from 'react';
import { getCalibratedNow } from '../services/syncService';

export const NOTES_STORAGE_KEY = 'kai_notes';

// 从 localStorage 读取全部笔记数据
export const readNotesData = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

// 将笔记数据写入 localStorage 并触发更新事件
export const writeNotesData = (data, { skipDirty = false } = {}) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(data));
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

  const entries = Object.entries(data).map(([id, val]) => ({ id, ...val }));

  const clearAll = useCallback(() => {
    writeNotesData({});
    setData({});
  }, []);

  return { data, entries, clearAll };
};
