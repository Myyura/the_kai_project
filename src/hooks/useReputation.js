import { useCallback, useEffect, useRef, useState } from 'react';
import { emptyReputation, fetchMyReputation } from '../services/reputationService';

export const useReputation = ({ enabled = true } = {}) => {
  const [reputation, setReputation] = useState(emptyReputation);
  const [loading, setLoading] = useState(Boolean(enabled));
  const [error, setError] = useState(null);
  const requestSeqRef = useRef(0);

  const load = useCallback(async () => {
    if (!enabled) {
      setReputation(emptyReputation());
      setLoading(false);
      return null;
    }

    const seq = requestSeqRef.current + 1;
    requestSeqRef.current = seq;
    setLoading(true);
    setError(null);

    try {
      const next = await fetchMyReputation();
      if (requestSeqRef.current === seq) {
        setReputation(next);
      }
      return next;
    } catch (err) {
      if (requestSeqRef.current === seq) {
        setError(err);
        setReputation(emptyReputation());
      }
      return null;
    } finally {
      if (requestSeqRef.current === seq) {
        setLoading(false);
      }
    }
  }, [enabled]);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    reputation,
    loading,
    error,
    refresh: load,
  };
};
