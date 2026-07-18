import {useCallback, useEffect, useState} from 'react';
import {useAuth} from './useAuth';
import {
  confirmOrChangeMyNickname,
  fetchMyPublicProfile,
} from '../services/publicProfileService';

const UPDATED_EVENT = 'kai_public_profile_updated';
let cachedUserId = '';
let cachedProfile = null;
let loadPromise = null;

const notify = () => {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(UPDATED_EVENT));
};

const loadProfile = async (userId, force = false) => {
  if (!force && cachedUserId === userId && cachedProfile) return cachedProfile;
  if (!force && loadPromise) return loadPromise;
  loadPromise = fetchMyPublicProfile().then((value) => {
    cachedUserId = userId;
    cachedProfile = value;
    return value;
  }).finally(() => {
    loadPromise = null;
  });
  return loadPromise;
};

export function usePublicProfile() {
  const {isConfigured, isLoggedIn, authReady, user} = useAuth();
  const userId = user?.id || '';
  const [profile, setProfile] = useState(() => (
    cachedUserId === userId ? cachedProfile : null
  ));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!isConfigured || !authReady || !isLoggedIn || !userId) {
      setProfile(null);
      return null;
    }
    setLoading(true);
    setError(null);
    try {
      const value = await loadProfile(userId, true);
      setProfile(value);
      return value;
    } catch (nextError) {
      setError(nextError);
      return null;
    } finally {
      setLoading(false);
    }
  }, [authReady, isConfigured, isLoggedIn, userId]);

  useEffect(() => {
    if (!isLoggedIn || !userId) {
      setProfile(null);
      return undefined;
    }
    let active = true;
    setLoading(true);
    loadProfile(userId).then((value) => {
      if (active) setProfile(value);
    }).catch((nextError) => {
      if (active) setError(nextError);
    }).finally(() => {
      if (active) setLoading(false);
    });
    const handleUpdated = () => {
      if (active && cachedUserId === userId) setProfile(cachedProfile);
    };
    window.addEventListener(UPDATED_EVENT, handleUpdated);
    return () => {
      active = false;
      window.removeEventListener(UPDATED_EVENT, handleUpdated);
    };
  }, [isLoggedIn, userId]);

  const saveNickname = useCallback(async (nickname) => {
    setLoading(true);
    setError(null);
    try {
      const value = await confirmOrChangeMyNickname(nickname);
      cachedUserId = userId;
      cachedProfile = value;
      setProfile(value);
      notify();
      return value;
    } catch (nextError) {
      setError(nextError);
      throw nextError;
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return {profile, loading, error, refresh, saveNickname};
}
