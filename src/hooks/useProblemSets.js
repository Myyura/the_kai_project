import {useCallback, useEffect, useRef, useState} from 'react';
import {
  addProblemSetsUpdatedListener,
  fetchMyProblemSet,
  fetchMyProblemSets,
  readCachedProblemSet,
  readCachedProblemSets,
} from '@site/src/services/problemSetService';
import {useSync} from '@site/src/hooks/useSync';
import {getStorageOwnerForUser} from '@site/src/services/localStorageScope';

export function useProblemSets(docId = '', {enabled = true} = {}) {
  const {user} = useSync();
  const userId = user?.id || '';
  const [sets, setSets] = useState(() => readCachedProblemSets(docId, userId));
  const [loading, setLoading] = useState(Boolean(enabled));
  const [error, setError] = useState(null);
  const scopeRef = useRef('');
  const scope = `${userId}:${docId}:${enabled ? 'on' : 'off'}`;
  scopeRef.current = scope;

  const refresh = useCallback(async () => {
    if (!enabled) {
      setSets([]);
      setLoading(false);
      return [];
    }
    setLoading(true);
    setError(null);
    const requestedScope = scope;
    try {
      const next = await fetchMyProblemSets(docId, userId);
      if (scopeRef.current === requestedScope) setSets(next);
      return next;
    } catch (nextError) {
      if (scopeRef.current === requestedScope) setError(nextError);
      return readCachedProblemSets(docId, userId);
    } finally {
      if (scopeRef.current === requestedScope) setLoading(false);
    }
  }, [docId, enabled, scope, userId]);

  useEffect(() => {
    setSets(enabled ? readCachedProblemSets(docId, userId) : []);
    void refresh();
    return addProblemSetsUpdatedListener((event) => {
      if (event.detail?.storageOwner && event.detail.storageOwner !== getStorageOwnerForUser(userId)) return;
      if (event.detail?.optimistic || event.detail?.rollback) {
        setSets(enabled ? readCachedProblemSets(docId, userId) : []);
      } else {
        void refresh();
      }
    });
  }, [docId, enabled, refresh, userId]);

  return {sets, loading, error, refresh};
}

export function useProblemSet(setId, {enabled = true} = {}) {
  const {user} = useSync();
  const userId = user?.id || '';
  const [problemSet, setProblemSet] = useState(() => readCachedProblemSet(setId, userId));
  const [loading, setLoading] = useState(Boolean(enabled && setId));
  const [error, setError] = useState(null);
  const scopeRef = useRef('');
  const scope = `${userId}:${setId}:${enabled ? 'on' : 'off'}`;
  scopeRef.current = scope;

  const refresh = useCallback(async () => {
    if (!enabled || !setId) {
      setLoading(false);
      return null;
    }
    setLoading(true);
    setError(null);
    const requestedScope = scope;
    try {
      const next = await fetchMyProblemSet(setId, userId);
      if (scopeRef.current === requestedScope) setProblemSet(next);
      return next;
    } catch (nextError) {
      if (scopeRef.current === requestedScope) setError(nextError);
      return readCachedProblemSet(setId, userId);
    } finally {
      if (scopeRef.current === requestedScope) setLoading(false);
    }
  }, [enabled, scope, setId, userId]);

  useEffect(() => {
    setProblemSet(enabled ? readCachedProblemSet(setId, userId) : null);
    void refresh();
    const removeProblemSetsListener = addProblemSetsUpdatedListener((event) => {
      if (event.detail?.storageOwner && event.detail.storageOwner !== getStorageOwnerForUser(userId)) return;
      if (event.detail?.optimistic || event.detail?.rollback) {
        setProblemSet(enabled ? readCachedProblemSet(setId, userId) : null);
        return;
      }
      if (!event.detail?.setId || event.detail.setId === setId || event.detail.targetSetId === setId) {
        void refresh();
      }
    });
    const handleProgress = () => void refresh();
    window.addEventListener('kai_progress_updated', handleProgress);
    return () => {
      removeProblemSetsListener();
      window.removeEventListener('kai_progress_updated', handleProgress);
    };
  }, [enabled, refresh, setId, userId]);

  return {problemSet, loading, error, refresh};
}
