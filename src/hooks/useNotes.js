import {addStudyEventListener, NOTES_UPDATED_EVENT, emitStudyEvent} from '../services/studyEvents';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useAuth} from './useAuth';

const noteCache = new Map();
const saveChains = new Map();
const pendingContents = new Map();

const enqueueSave = (cacheKey, userId, docId, content) => {
  const previous = saveChains.get(cacheKey) || Promise.resolve();
  const operation = previous.catch(() => {}).then(async () => {
    const {saveDocNote} = await import('../services/studyDataService');
    return saveDocNote(docId, content, userId);
  });
  saveChains.set(cacheKey, operation);
  const release = () => {
    if (saveChains.get(cacheKey) === operation) saveChains.delete(cacheKey);
  };
  void operation.then(release, release);
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
  const requestRef = useRef(0);
  const entryRef = useRef(entry);
  entryRef.current = entry;

  useEffect(() => {
    setSaving(false);
    setError(null);
  }, [cacheKey]);

  const refresh = useCallback(async () => {
    const requestId = ++requestRef.current;
    if (!isLoggedIn || !docId) {
      setEntry(null);
      setLoading(false);
      return null;
    }
    setLoading(true);
    try {
      const {fetchDocNote} = await import('../services/studyDataService');
      const value = await fetchDocNote(docId);
      if (requestRef.current !== requestId) return value;
      const pendingContent = pendingContents.get(cacheKey);
      if (pendingContent !== undefined && (value?.content || '') !== pendingContent) {
        return noteCache.get(cacheKey) || null;
      }
      noteCache.set(cacheKey, value);
      if (activeCacheKeyRef.current === cacheKey) {
        entryCacheKeyRef.current = cacheKey;
        setEntry(value);
        setError(null);
      }
      return value;
    } catch (nextError) {
      if (requestRef.current === requestId && activeCacheKeyRef.current === cacheKey) setError(nextError);
      return null;
    } finally {
      if (requestRef.current === requestId && activeCacheKeyRef.current === cacheKey) setLoading(false);
    }
  }, [cacheKey, docId, isLoggedIn]);

  useEffect(() => {
    void refresh();
    const removeListener = addStudyEventListener(NOTES_UPDATED_EVENT, (event) => {
      if (event.detail?.userId && event.detail.userId !== userId) return;
      if (event.detail?.docId !== docId) return;
      const value = event.detail.value || null;
      const pendingContent = pendingContents.get(cacheKey);
      if (!event.detail?.optimistic && pendingContent !== undefined && (value?.content || '') !== pendingContent) {
        return;
      }
      requestRef.current += 1;
      setLoading(false);
      noteCache.set(cacheKey, value);
      entryCacheKeyRef.current = cacheKey;
      setEntry(value);
    });
    return () => {requestRef.current += 1; removeListener();};
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

    requestRef.current += 1;
    setLoading(false);
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
    emitStudyEvent(NOTES_UPDATED_EVENT, {userId, docId, value: optimistic, optimistic: true});

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

  const visibleEntry = entryCacheKeyRef.current === cacheKey ? entry : null;
  return {
    content: visibleEntry?.content || '',
    updatedAt: visibleEntry?.updatedAt || null,
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
        values.forEach((value) => {
          const cacheKey = `${user?.id}:${value.id}`;
          if (!pendingContents.has(cacheKey)) noteCache.set(cacheKey, value);
        });
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
    const removeListener = addStudyEventListener(NOTES_UPDATED_EVENT, (event) => {
      if ((!event.detail?.userId || event.detail.userId === user?.id) && !event.detail?.optimistic) {
        void refresh();
      }
    });
    return () => {requestRef.current += 1; removeListener();};
  }, [refresh, user?.id]);

  const data = useMemo(() => Object.fromEntries(entries.map((item) => [item.id, item])), [entries]);
  return {data, entries, loading, error, refresh};
}
