import { useCallback, useEffect, useRef, useState } from 'react';

export const useExamDifficulty = (docId, { enabled = true, refreshKey = 0 } = {}) => {
  const [difficulty, setDifficulty] = useState(null);
  const [loading, setLoading] = useState(Boolean(enabled && docId));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const requestSeqRef = useRef(0);

  const load = useCallback(async () => {
    if (!enabled || !docId) {
      setDifficulty(null);
      setLoading(false);
      return null;
    }

    const seq = requestSeqRef.current + 1;
    requestSeqRef.current = seq;
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
  }, [docId, enabled]);

  useEffect(() => {
    void load();
  }, [load, refreshKey]);

  const rate = useCallback(async (value) => {
    if (!docId || saving) return null;
    setSaving(true);
    setError(null);

    try {
      const {setExamDifficultyVote} = await import('../services/difficultyService');
      const next = await setExamDifficultyVote(docId, value);
      setDifficulty(next);
      return next;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setSaving(false);
    }
  }, [docId, saving]);

  return {
    difficulty,
    loading,
    saving,
    error,
    refresh: load,
    rate,
  };
};
