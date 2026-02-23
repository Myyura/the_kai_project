import { useState, useEffect, useCallback } from 'react';

export const STORAGE_KEY = 'kai_progress';

export const STATUS = {
  NOT_STARTED: 'not_started',
  COMPLETED: 'completed',
  REVIEWING: 'reviewing',
};

// 从 localStorage 读取全部进度数据
export const readProgressData = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

// 将进度数据写入 localStorage 并触发更新事件
export const writeProgressData = (data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('kai_progress_updated'));
  } catch {}
};

/**
 * 单文档进度钩子
 * @param {string} docId   - 文档 ID（来自 metadata.id）
 * @param {string} title   - 文档标题，用于在总览页显示
 * @param {string} permalink - 文档链接
 * @param {string[]} tags  - 文档标签列表
 */
export const useDocProgress = (docId, title, permalink, tags) => {
  const [data, setData] = useState(() => readProgressData());

  useEffect(() => {
    const handler = () => setData(readProgressData());
    window.addEventListener('kai_progress_updated', handler);
    return () => window.removeEventListener('kai_progress_updated', handler);
  }, []);

  const entry = data[docId];
  const status = entry?.status ?? STATUS.NOT_STARTED;

  const setStatus = useCallback(
    (newStatus) => {
      const current = readProgressData();
      if (newStatus === STATUS.NOT_STARTED) {
        delete current[docId];
      } else {
        current[docId] = {
          status: newStatus,
          title: title ?? docId,
          permalink: permalink ?? `/docs/${docId}`,
          tags: Array.isArray(tags) ? tags : [],
          updatedAt: Date.now(),
        };
      }
      writeProgressData(current);
      setData({ ...current });
    },
    [docId, title, permalink, tags]
  );

  return [status, setStatus];
};

/**
 * 全局进度统计钩子
 */
export const useAllProgress = () => {
  const [data, setData] = useState(() => readProgressData());

  useEffect(() => {
    setData(readProgressData());
    const handler = () => setData(readProgressData());
    window.addEventListener('kai_progress_updated', handler);
    return () => window.removeEventListener('kai_progress_updated', handler);
  }, []);

  const entries = Object.entries(data).map(([id, val]) => ({ id, ...val }));

  const stats = {
    completed: entries.filter((e) => e.status === STATUS.COMPLETED).length,
    reviewing: entries.filter((e) => e.status === STATUS.REVIEWING).length,
    total: entries.length,
  };

  const clearAll = useCallback(() => {
    writeProgressData({});
    setData({});
  }, []);

  const tagStats = {};
  entries.forEach((e) => {
    if (!Array.isArray(e.tags)) return;
    e.tags.forEach((tag) => {
      if (/university$/i.test(tag)) return;
      if (!tagStats[tag]) tagStats[tag] = { completed: 0, reviewing: 0, total: 0 };
      tagStats[tag].total++;
      if (e.status === STATUS.COMPLETED) tagStats[tag].completed++;
      if (e.status === STATUS.REVIEWING) tagStats[tag].reviewing++;
    });
  });
  const tagGroups = Object.entries(tagStats).sort((a, b) => b[1].total - a[1].total);

  return { data, entries, stats, tagGroups, clearAll };
};
