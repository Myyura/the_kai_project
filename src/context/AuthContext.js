import React, {createContext, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {AUTH_STORAGE_KEY, initSiteConfig, isSupabaseConfigured} from '../services/runtimeConfig';

export const AuthContext = createContext(null);

function useAuthState() {
  const {siteConfig} = useDocusaurusContext();
  initSiteConfig(siteConfig);
  const isConfigured = isSupabaseConfigured();
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [authActivated, setAuthActivated] = useState(false);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);
  const verificationIdRef = useRef(0);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isConfigured) {
      setUser(null);
      setAuthReady(true);
      return undefined;
    }

    let unsubscribe = () => {};
    let disposed = false;
    let servicePromise;

    const loadAuthService = () => {
      if (!servicePromise) {
        servicePromise = import('../services/authService').then((service) => {
          if (disposed) return service;
          unsubscribe = service.onAuthStateChange((event, session) => {
            if (disposed || !mountedRef.current || event === 'INITIAL_SESSION') return;
            verificationIdRef.current += 1;
            setUser(session?.user ?? null);
            setAuthReady(true);
            if (event === 'TOKEN_REFRESHED' && !session) {
              setError('会话已过期，请重新登录。');
            }
          });
          return service;
        });
      }
      return servicePromise;
    };

    const verifyStoredSession = async () => {
      const requestId = ++verificationIdRef.current;
      const isCurrent = () => !disposed && mountedRef.current && requestId === verificationIdRef.current;
      try {
        const service = await loadAuthService();
        if (disposed) return;
        const verifiedUser = await service.getVerifiedUser();
        if (isCurrent()) setUser(verifiedUser);
      } catch {
        if (isCurrent()) setUser(null);
      } finally {
        if (isCurrent()) setAuthReady(true);
      }
    };

    const handleStorage = (event) => {
      if (event.key !== AUTH_STORAGE_KEY) return;
      if (!event.newValue) {
        verificationIdRef.current += 1;
        setUser(null);
        setAuthReady(true);
      } else {
        void verifyStoredSession();
      }
    };
    window.addEventListener('storage', handleStorage);

    let hasStoredSession = false;
    try {
      hasStoredSession = Boolean(window.localStorage.getItem(AUTH_STORAGE_KEY));
    } catch {
      // Blocked storage should not prevent a later explicit login attempt.
    }
    if (authActivated || hasStoredSession) {
      void verifyStoredSession();
    } else {
      // Anonymous browsing does not load the SDK. An auth action or storage
      // update activates the same verification and subscription path later.
      setUser(null);
      setAuthReady(true);
    }

    return () => {
      disposed = true;
      unsubscribe();
      window.removeEventListener('storage', handleStorage);
    };
  }, [authActivated, isConfigured]);

  const runAuthAction = useCallback(async (action) => {
    setAuthActivated(true);
    setError(null);
    try {
      return await action();
    } catch (nextError) {
      setError(nextError?.message || '操作失败');
      throw nextError;
    }
  }, []);

  const applyAuthResult = useCallback((result) => {
    verificationIdRef.current += 1;
    if (mountedRef.current) {
      setUser(result?.session?.user ?? null);
      setAuthReady(true);
    }
    return result;
  }, []);

  const loginWithEmail = useCallback((email, password, captchaToken) => (
    runAuthAction(async () => {
      const {signInWithEmail} = await import('../services/authService');
      return applyAuthResult(await signInWithEmail(email, password, captchaToken));
    })
  ), [applyAuthResult, runAuthAction]);

  const registerWithEmail = useCallback((email, password, captchaToken, emailRedirectTo) => (
    runAuthAction(async () => {
      const {signUpWithEmail} = await import('../services/authService');
      return applyAuthResult(await signUpWithEmail(email, password, captchaToken, emailRedirectTo));
    })
  ), [applyAuthResult, runAuthAction]);

  const loginWithGitHub = useCallback((redirectTo) => (
    runAuthAction(async () => {
      const {signInWithGitHub} = await import('../services/authService');
      return signInWithGitHub(redirectTo);
    })
  ), [runAuthAction]);

  const completeAuthCallback = useCallback(() => (
    runAuthAction(async () => {
      const {completeAuthCallbackFromUrl} = await import('../services/authService');
      return applyAuthResult(await completeAuthCallbackFromUrl());
    })
  ), [applyAuthResult, runAuthAction]);

  const requestPasswordReset = useCallback((email, redirectTo, captchaToken) => (
    runAuthAction(async () => {
      const {sendPasswordResetEmail} = await import('../services/authService');
      return sendPasswordResetEmail(email, redirectTo, captchaToken);
    })
  ), [runAuthAction]);

  const signOut = useCallback(() => runAuthAction(async () => {
    const {signOut: signOutFromSupabase} = await import('../services/authService');
    await signOutFromSupabase();
    verificationIdRef.current += 1;
    if (mountedRef.current) setUser(null);
  }), [runAuthAction]);

  return useMemo(() => ({
    isConfigured,
    user,
    isLoggedIn: authReady && Boolean(user),
    authReady,
    error,
    loginWithEmail,
    registerWithEmail,
    loginWithGitHub,
    completeAuthCallback,
    requestPasswordReset,
    signOut,
  }), [
    authReady,
    completeAuthCallback,
    error,
    isConfigured,
    loginWithEmail,
    loginWithGitHub,
    registerWithEmail,
    requestPasswordReset,
    signOut,
    user,
  ]);
}

export function AuthProvider({children}) {
  const value = useAuthState();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
