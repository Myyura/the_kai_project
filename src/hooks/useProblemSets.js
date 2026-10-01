import {addStudyEventListener, PROBLEM_SETS_UPDATED_EVENT} from '../services/studyEvents';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuth} from './useAuth';

export function useProblemSets(docId = '', {enabled = true} = {}) {
  const {user, isLoggedIn} = useAuth();
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(Boolean(enabled && isLoggedIn));
  const [error, setError] = useState(null);
  const requestRef = useRef(0);

  const refresh = useCallback(async () => {
    const requestId = ++requestRef.current;
    if (!enabled || !isLoggedIn) {
      setSets([]);
      setLoading(false);
      return [];
    }
    setLoading(true);
    setError(null);
    try {
      const {fetchMyProblemSets} = await import('../services/problemSetService');
      const values = await fetchMyProblemSets(docId);
      if (requestRef.current === requestId) setSets(values);
      return values;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return [];
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [docId, enabled, isLoggedIn, user?.id]);

  useEffect(() => {
    void refresh();
    const removeListener = addStudyEventListener(PROBLEM_SETS_UPDATED_EVENT, () => void refresh());
    return () => {requestRef.current += 1; removeListener();};
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
    const requestId = ++requestRef.current;
    if (!enabled || !setId || !isLoggedIn) {
      setProblemSet(null);
      setLoading(false);
      return null;
    }
    setLoading(true);
    setError(null);
    try {
      const {fetchMyProblemSet} = await import('../services/problemSetService');
      const value = await fetchMyProblemSet(setId);
      if (requestRef.current === requestId) setProblemSet(value);
      return value;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return null;
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [enabled, isLoggedIn, setId, user?.id]);

  useEffect(() => {
    void refresh();
    const removeListener = addStudyEventListener(PROBLEM_SETS_UPDATED_EVENT, (event) => {
      if (!event.detail?.setId || event.detail.setId === setId || event.detail.targetSetId === setId) {
        void refresh();
      }
    });
    return () => {requestRef.current += 1; removeListener();};
  }, [refresh, setId, user?.id]);

  return {problemSet, loading, error, refresh};
}
