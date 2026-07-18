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
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

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

    const verifyStoredSession = async () => {
      try {
        const {getSession} = await import('../services/authService');
        const session = await getSession();
        if (!disposed && mountedRef.current) setUser(session?.user ?? null);
      } catch {
        if (!disposed && mountedRef.current) setUser(null);
      } finally {
        if (!disposed && mountedRef.current) setAuthReady(true);
      }
    };

    const handleStorage = (event) => {
      if (event.key !== AUTH_STORAGE_KEY) return;
      if (!event.newValue) {
        setUser(null);
        setAuthReady(true);
      } else {
        void verifyStoredSession();
      }
    };
    window.addEventListener('storage', handleStorage);

    if (!window.localStorage.getItem(AUTH_STORAGE_KEY)) {
      setUser(null);
      setAuthReady(true);
      return () => {
        disposed = true;
        window.removeEventListener('storage', handleStorage);
      };
    }

    const initialize = async () => {
      await verifyStoredSession();

      if (disposed) return;
      const {onAuthStateChange} = await import('../services/authService');
      unsubscribe = onAuthStateChange((event, session) => {
        if (!mountedRef.current || event === 'INITIAL_SESSION') return;
        if (event === 'TOKEN_REFRESHED' && !session) {
          setUser(null);
          setError('会话已过期，请重新登录。');
          return;
        }
        setUser(session?.user ?? null);
      });
    };

    void initialize();
    return () => {
      disposed = true;
      unsubscribe();
      window.removeEventListener('storage', handleStorage);
    };
  }, [isConfigured]);

  const runAuthAction = useCallback(async (action) => {
    setError(null);
    try {
      return await action();
    } catch (nextError) {
      setError(nextError?.message || '操作失败');
      throw nextError;
    }
  }, []);

  const loginWithEmail = useCallback((email, password, captchaToken) => (
    runAuthAction(async () => {
      const {signInWithEmail} = await import('../services/authService');
      const result = await signInWithEmail(email, password, captchaToken);
      if (mountedRef.current) setUser(result?.user ?? result?.session?.user ?? null);
      return result;
    })
  ), [runAuthAction]);

  const registerWithEmail = useCallback((email, password, captchaToken, emailRedirectTo) => (
    runAuthAction(async () => {
      const {signUpWithEmail} = await import('../services/authService');
      const result = await signUpWithEmail(email, password, captchaToken, emailRedirectTo);
      if (mountedRef.current) setUser(result?.user ?? result?.session?.user ?? null);
      return result;
    })
  ), [runAuthAction]);

  const loginWithGitHub = useCallback((redirectTo) => (
    runAuthAction(async () => {
      const {signInWithGitHub} = await import('../services/authService');
      return signInWithGitHub(redirectTo);
    })
  ), [runAuthAction]);

  const completeAuthCallback = useCallback(() => (
    runAuthAction(async () => {
      const {completeAuthCallbackFromUrl} = await import('../services/authService');
      const result = await completeAuthCallbackFromUrl();
      const nextUser = result?.user ?? result?.session?.user ?? null;
      if (mountedRef.current && nextUser) setUser(nextUser);
      return result;
    })
  ), [runAuthAction]);

  const requestPasswordReset = useCallback((email, redirectTo, captchaToken) => (
    runAuthAction(async () => {
      const {sendPasswordResetEmail} = await import('../services/authService');
      return sendPasswordResetEmail(email, redirectTo, captchaToken);
    })
  ), [runAuthAction]);

  const signOut = useCallback(() => runAuthAction(async () => {
    const {signOut: signOutFromSupabase} = await import('../services/authService');
    await signOutFromSupabase();
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
