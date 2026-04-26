import { useState, useEffect, useCallback, useMemo } from 'react';
import { getCalibratedNow } from '../services/syncService';

export const STORAGE_KEY = 'kai_progress';

export const STATUS = {
  NOT_STARTED: 'not_started',
  COMPLETED: 'completed',
  REVIEWING: 'reviewing',
};

// 模块级缓存，避免多组件同时 JSON.parse
let _progressCache = null;
let _progressRaw = null;

// 从 localStorage 读取全部进度数据
export const readProgressData = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === _progressRaw && _progressCache) return _progressCache;
    _progressRaw = raw;
    _progressCache = raw ? JSON.parse(raw) : {};
    return _progressCache;
  } catch {
    return {};
  }
};

// 将进度数据写入 localStorage 并触发更新事件
export const writeProgressData = (data, { skipDirty = false } = {}) => {
  if (typeof window === 'undefined') return;
  try {
    const json = JSON.stringify(data);
    // 数据未变化时跳过写入和脏标记，减少无效同步请求
    if (json === _progressRaw) return;
    _progressRaw = json;
    _progressCache = data;
    localStorage.setItem(STORAGE_KEY, json);
    window.dispatchEvent(new Event('kai_progress_updated'));
    // 标记本地有未同步修改（从云端拉取写入时 skipDirty=true）
    if (!skipDirty) {
      import('../services/syncService').then(m => m.markSyncDirty()).catch(() => {});
    }
  } catch {}
};

// 遗忘曲线复习间隔（天）
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30, 60];

/**
 * 计算下次复习信息
 * @param {number} updatedAt  - 上次操作时间戳
 * @param {number} reviewCount - 已完成的复习次数（0=刚标记）
 * @returns {{ due: boolean, urgency: string, daysUntil?: number, overdueDays?: number, reviewCount: number, totalRounds: number }}
 */
export const getReviewInfo = (updatedAt, reviewCount = 0) => {
  if (!updatedAt) return null;
  const totalRounds = REVIEW_INTERVALS.length;
  const idx = Math.min(reviewCount, totalRounds - 1);
  const targetDays = REVIEW_INTERVALS[idx];
  const daysSince = (Date.now() - updatedAt) / 86400000;
  const daysUntil = targetDays - daysSince;
  if (daysUntil > 1)
    return { due: false, daysUntil: Math.ceil(daysUntil), urgency: 'soon', reviewCount, totalRounds };
  if (daysUntil > 0)
    return { due: true, daysUntil: 1, urgency: 'urgent', reviewCount, totalRounds };
  return {
    due: true,
    overdueDays: Math.floor(-daysUntil),
    urgency: 'critical',
    reviewCount,
    totalRounds,
  };
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
        const prev = current[docId];
        const statusChanged = !prev || prev.status !== newStatus;
        current[docId] = {
          status: newStatus,
          title: title ?? docId,
          permalink: permalink ?? `/docs/${docId}`,
          tags: Array.isArray(tags) ? tags : [],
          // 切換到复习时初始化次数；其他状态不减不加
          reviewCount: newStatus === STATUS.REVIEWING
            ? (statusChanged ? 0 : (prev?.reviewCount ?? 0))
            : (prev?.reviewCount ?? 0),
          updatedAt: statusChanged ? getCalibratedNow() : (prev?.updatedAt ?? getCalibratedNow()),
        };
      }
      writeProgressData(current);
      setData({ ...current });
    },
    [docId, title, permalink, tags]
  );

  const refreshReview = useCallback(() => {
    const current = readProgressData();
    if (!current[docId]) return;
    const newCount = (current[docId].reviewCount ?? 0) + 1;
    const isFinished = newCount >= REVIEW_INTERVALS.length;
    current[docId] = {
      ...current[docId],
      reviewCount: newCount,
      status: isFinished ? STATUS.COMPLETED : current[docId].status,
      updatedAt: getCalibratedNow(),
    };
    writeProgressData(current);
    setData({ ...current });
  }, [docId]);

  return [status, setStatus, refreshReview, entry?.updatedAt ?? null, entry?.reviewCount ?? 0];
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

  const entries = useMemo(
    () => Object.entries(data).map(([id, val]) => ({ id, ...val })),
    [data]
  );

  const stats = useMemo(() => {
    let completed = 0;
    let reviewing = 0;
    for (const e of entries) {
      if (e.status === STATUS.COMPLETED) completed++;
      else if (e.status === STATUS.REVIEWING) reviewing++;
    }
    return { completed, reviewing, total: entries.length };
  }, [entries]);

  const clearAll = useCallback(() => {
    writeProgressData({});
    setData({});
  }, []);

  const tagGroups = useMemo(() => {
    const tagStats = {};
    for (const e of entries) {
      if (!Array.isArray(e.tags)) continue;
      for (const tag of e.tags) {
        if (/university$/i.test(tag)) continue;
        if (!tagStats[tag]) tagStats[tag] = { completed: 0, reviewing: 0, total: 0 };
        tagStats[tag].total++;
        if (e.status === STATUS.COMPLETED) tagStats[tag].completed++;
        else if (e.status === STATUS.REVIEWING) tagStats[tag].reviewing++;
      }
    }
    return Object.entries(tagStats).sort((a, b) => b[1].total - a[1].total);
  }, [entries]);

  return { data, entries, stats, tagGroups, clearAll };
};
