import {addStudyEventListener, PROGRESS_UPDATED_EVENT} from '../services/studyEvents';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useAuth} from './useAuth';

export const STATUS = {
  NOT_STARTED: 'not_started',
  COMPLETED: 'completed',
  REVIEWING: 'reviewing',
};

const REVIEW_INTERVALS = [1, 3, 7, 14, 30, 60];

export const getReviewInfo = (updatedAt, reviewCount = 0) => {
  if (!updatedAt) return null;
  const totalRounds = REVIEW_INTERVALS.length;
  const idx = Math.min(reviewCount, totalRounds - 1);
  const targetDays = REVIEW_INTERVALS[idx];
  const daysSince = (Date.now() - updatedAt) / 86400000;
  const daysUntil = targetDays - daysSince;
  if (daysUntil > 1) {
    return {due: false, daysUntil: Math.ceil(daysUntil), urgency: 'soon', reviewCount, totalRounds};
  }
  if (daysUntil > 0) {
    return {due: true, daysUntil: 1, urgency: 'urgent', reviewCount, totalRounds};
  }
  return {
    due: true,
    overdueDays: Math.floor(-daysUntil),
    urgency: 'critical',
    reviewCount,
    totalRounds,
  };
};

export function useDocProgress(docId, title, permalink, tags) {
  const {isLoggedIn, user} = useAuth();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(Boolean(isLoggedIn));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const scope = `${user?.id || ''}:${docId}`;
  const currentScopeRef = useRef(scope);
  currentScopeRef.current = scope;
  const requestRef = useRef(0);
  const mutationRef = useRef(0);

  useEffect(() => {
    setEntry(null);
    setSaving(false);
    setError(null);
  }, [scope]);

  const refresh = useCallback(async () => {
    const requestId = ++requestRef.current;
    if (!isLoggedIn || !docId) {
      setEntry(null);
      setLoading(false);
      return null;
    }
    const isCurrent = () => currentScopeRef.current === scope && requestRef.current === requestId;
    setLoading(true);
    try {
      const {fetchDocProgress} = await import('../services/studyDataService');
      const value = await fetchDocProgress(docId);
      if (isCurrent()) {
        setEntry(value);
        setError(null);
      }
      return value;
    } catch (nextError) {
      if (isCurrent()) setError(nextError);
      return null;
    } finally {
      if (isCurrent()) setLoading(false);
    }
  }, [docId, isLoggedIn, scope]);

  useEffect(() => {
    void refresh();
    const removeListener = addStudyEventListener(PROGRESS_UPDATED_EVENT, (event) => {
      if (event.detail?.userId && event.detail.userId !== user?.id) return;
      if (event.detail?.docId && event.detail.docId !== docId) return;
      if (event.detail?.docId === docId) {
        requestRef.current += 1;
        setEntry(event.detail.value || null);
        setLoading(false);
      } else void refresh();
    });
    return () => {
      requestRef.current += 1;
      mutationRef.current += 1;
      removeListener();
    };
  }, [docId, refresh, user?.id]);

  const persist = useCallback(async (nextEntry, eventType) => {
    const operationUserId = user?.id || '';
    const mutationId = ++mutationRef.current;
    requestRef.current += 1;
    const isCurrent = () => currentScopeRef.current === scope && mutationRef.current === mutationId;
    const previous = entry;
    setEntry(nextEntry);
    setLoading(false);
    setSaving(true);
    setError(null);
    try {
      if (!nextEntry) {
        const {deleteDocProgress} = await import('../services/studyDataService');
        await deleteDocProgress(docId, operationUserId);
        if (isCurrent()) setEntry(null);
        return null;
      }
      const {saveDocProgress} = await import('../services/studyDataService');
      const saved = await saveDocProgress({
        ...nextEntry,
        docId,
        eventType,
        expectedUserId: operationUserId,
      });
      if (isCurrent()) setEntry(saved);
      return saved;
    } catch (nextError) {
      if (isCurrent()) {
        setEntry(previous);
        setError(nextError);
      }
      return null;
    } finally {
      if (isCurrent()) setSaving(false);
    }
  }, [docId, entry, scope, user?.id]);

  const setStatus = useCallback((newStatus) => {
    if (newStatus === STATUS.NOT_STARTED) return persist(null, null);
    const statusChanged = !entry || entry.status !== newStatus;
    return persist({
      docId,
      status: newStatus,
      title: title || docId,
      permalink: permalink || `/docs/${docId}`,
      tags: Array.isArray(tags) ? tags : [],
      reviewCount: newStatus === STATUS.REVIEWING && statusChanged
        ? 0
        : (entry?.reviewCount || 0),
      updatedAt: statusChanged ? Date.now() : (entry?.updatedAt || Date.now()),
    }, entry ? null : 'practice');
  }, [docId, entry, permalink, persist, tags, title]);

  const refreshReview = useCallback(() => {
    if (!entry) return Promise.resolve(null);
    const reviewCount = (entry.reviewCount || 0) + 1;
    return persist({
      ...entry,
      status: reviewCount >= REVIEW_INTERVALS.length ? STATUS.COMPLETED : entry.status,
      reviewCount,
      updatedAt: Date.now(),
    }, 'review');
  }, [entry, persist]);

  return [
    entry?.status || STATUS.NOT_STARTED,
    setStatus,
    refreshReview,
    entry?.updatedAt || null,
    entry?.reviewCount || 0,
    {loading, saving, error, refresh},
  ];
}

export function useAllProgress() {
  const {isLoggedIn, user} = useAuth();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(Boolean(isLoggedIn));
  const [error, setError] = useState(null);
  const requestRef = useRef(0);

  const refresh = useCallback(async () => {
    if (!isLoggedIn) {
      requestRef.current += 1;
      setEntries([]);
      setLoading(false);
      return [];
    }
    const requestId = ++requestRef.current;
    setLoading(true);
    try {
      const {fetchAllProgress} = await import('../services/studyDataService');
      const values = await fetchAllProgress();
      if (requestRef.current === requestId) {
        setEntries(values);
        setError(null);
      }
      return values;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return [];
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [isLoggedIn, user?.id]);

  useEffect(() => {
    void refresh();
    const removeListener = addStudyEventListener(PROGRESS_UPDATED_EVENT, (event) => {
      if (!event.detail?.userId || event.detail.userId === user?.id) void refresh();
    });
    return () => {requestRef.current += 1; removeListener();};
  }, [refresh, user?.id]);

  const stats = useMemo(() => entries.reduce((result, item) => {
    if (item.status === STATUS.COMPLETED) result.completed += 1;
    if (item.status === STATUS.REVIEWING) result.reviewing += 1;
    result.total += 1;
    return result;
  }, {completed: 0, reviewing: 0, total: 0}), [entries]);

  const clearAll = useCallback(async () => {
    const requestId = requestRef.current;
    const {clearMyProgress} = await import('../services/studyDataService');
    await clearMyProgress(user?.id || '');
    if (requestRef.current === requestId) setEntries([]);
  }, [user?.id]);

  const data = useMemo(() => Object.fromEntries(entries.map((item) => [item.id, item])), [entries]);
  return {data, entries, stats, clearAll, loading, error, refresh};
}
