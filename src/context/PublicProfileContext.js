import React, {createContext, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useSync} from '@site/src/hooks/useSync';
import {
  confirmOrChangeMyNickname,
  fetchMyPublicProfile,
  setMyLeaderboardVisibility,
} from '@site/src/services/publicProfileService';

export const PublicProfileContext = createContext(null);

export function PublicProfileProvider({children}) {
  const {isConfigured, isLoggedIn, authReady, user} = useSync();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const activeUserIdRef = useRef(user?.id || '');
  activeUserIdRef.current = user?.id || '';

  const refresh = useCallback(async () => {
    if (!isConfigured || !authReady || !isLoggedIn) {
      setProfile(null);
      return null;
    }
    setLoading(true);
    setError(null);
    const requestedUserId = user?.id || '';
    try {
      const next = await fetchMyPublicProfile();
      if (activeUserIdRef.current === requestedUserId) setProfile(next);
      return next;
    } catch (nextError) {
      if (activeUserIdRef.current === requestedUserId) setError(nextError);
      return null;
    } finally {
      if (activeUserIdRef.current === requestedUserId) setLoading(false);
    }
  }, [authReady, isConfigured, isLoggedIn, user?.id]);

  useEffect(() => {
    if (!isLoggedIn) {
      setProfile(null);
      setError(null);
      setLoading(false);
      return;
    }
    setProfile(null);
    void refresh();
  }, [isLoggedIn, refresh, user?.id]);

  const saveNickname = useCallback(async (nickname) => {
    setLoading(true);
    setError(null);
    const requestedUserId = activeUserIdRef.current;
    try {
      const next = await confirmOrChangeMyNickname(nickname);
      if (activeUserIdRef.current === requestedUserId) {
        setProfile(next);
        window.dispatchEvent(new Event('kai_public_profile_updated'));
      }
      return next;
    } catch (nextError) {
      if (activeUserIdRef.current === requestedUserId) setError(nextError);
      throw nextError;
    } finally {
      if (activeUserIdRef.current === requestedUserId) setLoading(false);
    }
  }, []);

  const setLeaderboardVisible = useCallback(async (visible) => {
    setLoading(true);
    setError(null);
    const requestedUserId = activeUserIdRef.current;
    try {
      const next = await setMyLeaderboardVisibility(visible);
      if (activeUserIdRef.current === requestedUserId) {
        setProfile(next);
        window.dispatchEvent(new Event('kai_public_profile_updated'));
      }
      return next;
    } catch (nextError) {
      if (activeUserIdRef.current === requestedUserId) setError(nextError);
      throw nextError;
    } finally {
      if (activeUserIdRef.current === requestedUserId) setLoading(false);
    }
  }, []);

  const value = useMemo(() => ({
    profile,
    loading,
    error,
    refresh,
    saveNickname,
    setLeaderboardVisible,
  }), [error, loading, profile, refresh, saveNickname, setLeaderboardVisible]);

  return (
    <PublicProfileContext.Provider value={value}>
      {children}
    </PublicProfileContext.Provider>
  );
}
