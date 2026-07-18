import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuth} from '@site/src/hooks/useAuth';

const addProblemSetsUpdatedListener = (listener) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('kai_problem_sets_updated', listener);
  return () => window.removeEventListener('kai_problem_sets_updated', listener);
};

export function useProblemSets(docId = '', {enabled = true} = {}) {
  const {user, isLoggedIn} = useAuth();
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(Boolean(enabled && isLoggedIn));
  const [error, setError] = useState(null);
  const requestRef = useRef(0);

  const refresh = useCallback(async () => {
    if (!enabled || !isLoggedIn) {
      setSets([]);
      setLoading(false);
      return [];
    }
    const requestId = ++requestRef.current;
    setLoading(true);
    setError(null);
    try {
      const {fetchMyProblemSets} = await import('@site/src/services/problemSetService');
      const values = await fetchMyProblemSets(docId);
      if (requestRef.current === requestId) setSets(values);
      return values;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return [];
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [docId, enabled, isLoggedIn]);

  useEffect(() => {
    void refresh();
    return addProblemSetsUpdatedListener(() => void refresh());
  }, [refresh, user?.id]);

  return {sets, loading, error, refresh};
}

export function useProblemSet(setId, {enabled = true} = {}) {
  const {user, isLoggedIn} = useAuth();
  const [problemSet, setProblemSet] = useState(null);
  const [loading, setLoading] = useState(Boolean(enabled && setId && isLoggedIn));
  const [error, setError] = useState(null);
  const requestRef = useRef(0);

  const refresh = useCallback(async () => {
    if (!enabled || !setId || !isLoggedIn) {
      setProblemSet(null);
      setLoading(false);
      return null;
    }
    const requestId = ++requestRef.current;
    setLoading(true);
    setError(null);
    try {
      const {fetchMyProblemSet} = await import('@site/src/services/problemSetService');
      const value = await fetchMyProblemSet(setId);
      if (requestRef.current === requestId) setProblemSet(value);
      return value;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return null;
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [enabled, isLoggedIn, setId]);

  useEffect(() => {
    void refresh();
    return addProblemSetsUpdatedListener((event) => {
      if (!event.detail?.setId || event.detail.setId === setId || event.detail.targetSetId === setId) {
        void refresh();
      }
    });
  }, [refresh, setId, user?.id]);

  return {problemSet, loading, error, refresh};
}
