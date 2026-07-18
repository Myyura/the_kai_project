import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useAuth} from './useAuth';

const addNotesUpdatedListener = (listener) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('kai_notes_updated', listener);
  return () => window.removeEventListener('kai_notes_updated', listener);
};

const noteCache = new Map();
const saveChains = new Map();
const pendingContents = new Map();

const emitOptimisticNote = (userId, docId, value) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('kai_notes_updated', {
      detail: {userId, docId, value, optimistic: true},
    }));
  }
};

const enqueueSave = (cacheKey, userId, docId, content) => {
  const previous = saveChains.get(cacheKey) || Promise.resolve();
  const operation = previous.catch(() => {}).then(async () => {
    const {saveDocNote} = await import('../services/studyDataService');
    return saveDocNote(docId, content, userId);
  });
  saveChains.set(cacheKey, operation);
  operation.finally(() => {
    if (saveChains.get(cacheKey) === operation) saveChains.delete(cacheKey);
  });
  return operation;
};

export function useDocNotes(docId) {
  const {isLoggedIn, user} = useAuth();
  const userId = user?.id || '';
  const cacheKey = userId && docId ? `${userId}:${docId}` : '';
  const [entry, setEntry] = useState(() => noteCache.get(cacheKey) || null);
  const [loading, setLoading] = useState(Boolean(isLoggedIn));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const activeCacheKeyRef = useRef(cacheKey);
  activeCacheKeyRef.current = cacheKey;
  const entryCacheKeyRef = useRef(entry ? cacheKey : '');
  const entryRef = useRef(entry);
  entryRef.current = entry;

  useEffect(() => {
    setSaving(false);
    setError(null);
  }, [cacheKey]);

  const refresh = useCallback(async () => {
    if (!isLoggedIn || !docId) {
      setEntry(null);
      setLoading(false);
      return null;
    }
    setLoading(true);
    try {
      const {fetchDocNote} = await import('../services/studyDataService');
      const value = await fetchDocNote(docId);
      noteCache.set(cacheKey, value);
      if (activeCacheKeyRef.current === cacheKey) {
        entryCacheKeyRef.current = cacheKey;
        setEntry(value);
        setError(null);
      }
      return value;
    } catch (nextError) {
      if (activeCacheKeyRef.current === cacheKey) setError(nextError);
      return null;
    } finally {
      if (activeCacheKeyRef.current === cacheKey) setLoading(false);
    }
  }, [cacheKey, docId, isLoggedIn]);

  useEffect(() => {
    void refresh();
    return addNotesUpdatedListener((event) => {
      if (event.detail?.userId && event.detail.userId !== userId) return;
      if (event.detail?.docId !== docId) return;
      const value = event.detail.value || null;
      const pendingContent = pendingContents.get(cacheKey);
      if (!event.detail?.optimistic && pendingContent !== undefined && (value?.content || '') !== pendingContent) {
        return;
      }
      noteCache.set(cacheKey, value);
      entryCacheKeyRef.current = cacheKey;
      setEntry(value);
    });
  }, [cacheKey, docId, refresh, userId]);

  const patchNote = useCallback((updater) => {
    if (!isLoggedIn || !cacheKey) return null;
    const latest = noteCache.get(cacheKey)
      || (entryCacheKeyRef.current === cacheKey ? entryRef.current : null)
      || null;
    const previousContent = latest?.content || '';
    const nextContent = typeof updater === 'function'
      ? updater(previousContent)
      : String(updater || '');
    if (nextContent === previousContent) return latest;

    const optimistic = {
      id: docId,
      content: nextContent,
      version: latest?.version || 1,
      updatedAt: latest?.updatedAt || null,
    };
    noteCache.set(cacheKey, optimistic);
    pendingContents.set(cacheKey, nextContent);
    entryCacheKeyRef.current = cacheKey;
    setEntry(optimistic);
    setSaving(true);
    setError(null);
    emitOptimisticNote(userId, docId, optimistic);

    void enqueueSave(cacheKey, userId, docId, nextContent).then((saved) => {
      const current = noteCache.get(cacheKey);
      if ((current?.content || '') === nextContent) {
        if (pendingContents.get(cacheKey) === nextContent) pendingContents.delete(cacheKey);
        noteCache.set(cacheKey, saved);
        if (activeCacheKeyRef.current === cacheKey) {
          entryCacheKeyRef.current = cacheKey;
          setEntry(saved);
          setSaving(false);
        }
      }
    }).catch((nextError) => {
      if (pendingContents.get(cacheKey) === nextContent) {
        pendingContents.delete(cacheKey);
        if (activeCacheKeyRef.current === cacheKey) {
          setError(nextError);
          setSaving(false);
        }
      }
    });
    return optimistic;
  }, [cacheKey, docId, isLoggedIn, userId]);

  const saveNote = useCallback((content) => patchNote(content), [patchNote]);
  const visibleEntry = entryCacheKeyRef.current === cacheKey ? entry : null;
  return {
    content: visibleEntry?.content || '',
    updatedAt: visibleEntry?.updatedAt || null,
    saveNote,
    patchNote,
    loading,
    saving,
    error,
    refresh,
  };
}

export function useAllNotes() {
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
      const {fetchAllNotes} = await import('../services/studyDataService');
      const values = await fetchAllNotes();
      if (requestRef.current === requestId) {
        values.forEach((value) => noteCache.set(`${user?.id}:${value.id}`, value));
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
    return addNotesUpdatedListener((event) => {
      if ((!event.detail?.userId || event.detail.userId === user?.id) && !event.detail?.optimistic) {
        void refresh();
      }
    });
  }, [refresh, user?.id]);

  const data = useMemo(() => Object.fromEntries(entries.map((item) => [item.id, item])), [entries]);
  return {data, entries, loading, error, refresh};
}
