import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuth} from './useAuth';
import {
  confirmOrChangeMyNickname,
  fetchMyPublicProfile,
} from '../services/publicProfileService';

const UPDATED_EVENT = 'kai_public_profile_updated';
const profileCache = new Map();
const loadPromises = new Map();

const loadProfile = (userId, force = false) => {
  if (!force && profileCache.has(userId)) return Promise.resolve(profileCache.get(userId));
  if (loadPromises.has(userId)) return loadPromises.get(userId);
  const promise = fetchMyPublicProfile().then((value) => {
    if (loadPromises.get(userId) === promise) profileCache.set(userId, value);
    return value;
  }).finally(() => {
    if (loadPromises.get(userId) === promise) loadPromises.delete(userId);
  });
  loadPromises.set(userId, promise);
  return promise;
};

export function usePublicProfile() {
  const {isConfigured, isLoggedIn, authReady, user} = useAuth();
  const userId = user?.id || '';
  const [profileState, setProfileState] = useState(() => ({userId, value: profileCache.get(userId) || null}));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const requestRef = useRef(0);
  const currentUserIdRef = useRef(userId);
  currentUserIdRef.current = userId;

  const load = useCallback(async (force = false) => {
    const requestId = ++requestRef.current;
    setError(null);
    if (!isConfigured || !authReady || !isLoggedIn || !userId) {
      setProfileState({userId, value: null});
      setLoading(false);
      return null;
    }
    setLoading(true);
    try {
      const value = await loadProfile(userId, force);
      if (requestRef.current === requestId && currentUserIdRef.current === userId) {
        setProfileState({userId, value});
      }
      return value;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      return null;
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [authReady, isConfigured, isLoggedIn, userId]);

  useEffect(() => {
    void load();
    const handleUpdated = (event) => {
      if (event.detail?.userId !== userId) return;
      if (profileCache.has(userId)) {
        requestRef.current += 1;
        setProfileState({userId, value: profileCache.get(userId)});
        setLoading(false);
      }
    };
    window.addEventListener(UPDATED_EVENT, handleUpdated);
    return () => {
      requestRef.current += 1;
      window.removeEventListener(UPDATED_EVENT, handleUpdated);
    };
  }, [load, userId]);

  const saveNickname = useCallback(async (nickname) => {
    const requestId = ++requestRef.current;
    setLoading(true);
    setError(null);
    try {
      const value = await confirmOrChangeMyNickname(nickname);
      // A read started before this mutation must not replace the saved profile.
      loadPromises.delete(userId);
      profileCache.set(userId, value);
      if (requestRef.current === requestId && currentUserIdRef.current === userId) {
        setProfileState({userId, value});
      }
      window.dispatchEvent(new CustomEvent(UPDATED_EVENT, {detail: {userId}}));
      return value;
    } catch (nextError) {
      if (requestRef.current === requestId) setError(nextError);
      throw nextError;
    } finally {
      if (requestRef.current === requestId) setLoading(false);
    }
  }, [userId]);

  const refresh = useCallback(() => load(true), [load]);
  return {
    profile: profileState.userId === userId ? profileState.value : null,
    loading,
    error,
    refresh,
    saveNickname,
  };
}
