import { useCallback, useEffect, useRef, useState } from 'react';
import {useAuth} from './useAuth';

export const useExamDifficulty = (docId, { enabled = true } = {}) => {
  const {user} = useAuth();
  const [difficulty, setDifficulty] = useState(null);
  const [loading, setLoading] = useState(Boolean(enabled && docId));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const requestSeqRef = useRef(0);

  const load = useCallback(async () => {
    const seq = ++requestSeqRef.current;
    setSaving(false);
    if (!enabled || !docId) {
      setDifficulty(null);
      setLoading(false);
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const {fetchExamDifficulty} = await import('../services/difficultyService');
      const next = await fetchExamDifficulty(docId);
      if (requestSeqRef.current === seq) {
        setDifficulty(next);
      }
      return next;
    } catch (err) {
      if (requestSeqRef.current === seq) {
        setError(err);
      }
      return null;
    } finally {
      if (requestSeqRef.current === seq) {
        setLoading(false);
      }
    }
  }, [docId, enabled, user?.id]);

  useEffect(() => {
    void load();
    return () => {requestSeqRef.current += 1;};
  }, [load]);

  const rate = useCallback(async (value) => {
    if (!enabled || !docId || saving) return null;
    const seq = ++requestSeqRef.current;
    setLoading(false);
    setSaving(true);
    setError(null);

    try {
      const {setExamDifficultyVote} = await import('../services/difficultyService');
      const next = await setExamDifficultyVote(docId, value);
      if (requestSeqRef.current === seq) setDifficulty(next);
      return next;
    } catch (err) {
      if (requestSeqRef.current === seq) setError(err);
      return null;
    } finally {
      if (requestSeqRef.current === seq) setSaving(false);
    }
  }, [docId, enabled, saving, user?.id]);

  return {
    difficulty,
    loading,
    saving,
    error,
    refresh: load,
    rate,
  };
};
