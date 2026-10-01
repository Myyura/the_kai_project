import { useCallback, useEffect, useRef, useState } from 'react';
import { emptyReputation, fetchMyReputation } from '../services/reputationService';
import {useAuth} from './useAuth';

export const useReputation = ({ enabled = true } = {}) => {
  const {user} = useAuth();
  const [reputation, setReputation] = useState(emptyReputation);
  const [loading, setLoading] = useState(Boolean(enabled));
  const [error, setError] = useState(null);
  const requestSeqRef = useRef(0);

  const load = useCallback(async () => {
    const seq = ++requestSeqRef.current;
    if (!enabled) {
      setReputation(emptyReputation());
      setLoading(false);
      return null;
    }

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
  }, [enabled, user?.id]);

  useEffect(() => {
    void load();
    return () => {requestSeqRef.current += 1;};
  }, [load]);

  return {
    reputation,
    loading,
    error,
    refresh: load,
  };
};
