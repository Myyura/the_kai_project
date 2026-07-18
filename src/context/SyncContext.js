/**
 * SyncContext — 全局云同步状态 Context
 *
 * 将认证状态、同步操作等提升为全局单例，避免多个组件各自创建
 * getSession() + onAuthStateChange 监听器。
 *
 * 用法：
 *   - 在 Root.js 中用 <SyncProvider> 包裹应用
 *   - 组件中通过 useSync() 消费（从 hooks/useSync 导入，接口不变）
 */

import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { useInitSupabase } from '../services/supabaseClient';
import {
  getScopedStorageKey,
  getStorageOwner,
  getStorageOwnerForUser,
  setStorageOwner,
} from '../services/localStorageScope';
import {
  syncMerge,
  pushLocalData,
  pullRemoteData,
  signInWithEmail,
  signUpWithEmail,
  signInWithGitHub,
  completeAuthCallbackFromUrl,
  sendPasswordResetEmail,
  signOut as doSignOut,
  getSession,
  onAuthStateChange,
  isSyncDirty,
  clearSyncDirty,
} from '../services/syncService';

const LAST_SYNCED_KEY = 'kai_last_synced';
const AUTO_SYNC_INTERVAL_MS = 60_000;

const readLastSynced = () => {
  try {
    const ts = localStorage.getItem(getScopedStorageKey(LAST_SYNCED_KEY));
    const parsed = ts ? Number(ts) : null;
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

/** @type {React.Context<ReturnType<typeof useSyncInternal> | null>} */
export const SyncContext = createContext(null);

/**
 * 内部 Hook — 包含所有同步/认证逻辑，仅在 SyncProvider 中调用一次
 */
function useSyncInternal() {
  // 从 Docusaurus siteConfig 初始化 Supabase 凭据
  const isConfigured = useInitSupabase();

  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(() => readLastSynced());
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);
  const initialPullUserRef = useRef(null);
  const initialPullDoneRef = useRef(false);

  // 认证状态监听（全局唯一）
  useEffect(() => {
    if (!isConfigured) return;

    let unsub = () => {};

    const init = async () => {
      try {
        const session = await getSession();
        if (mountedRef.current) {
          setStorageOwner(session?.user?.id ?? null);
          setUser(session?.user ?? null);
        }
      } catch {
        if (mountedRef.current) {
          setStorageOwner(null);
          setUser(null);
        }
      }
      if (mountedRef.current) setAuthReady(true);

      unsub = onAuthStateChange((event, session) => {
        if (!mountedRef.current) return;

        if (event === 'INITIAL_SESSION') {
          return;
        }

        if (event === 'TOKEN_REFRESHED' && !session) {
          setStorageOwner(null);
          setUser(null);
          setError('会话已过期，请重新登录。');
          return;
        }

        const nextUser = session?.user ?? null;
        setStorageOwner(nextUser?.id ?? null);
        setUser(nextUser);
      });
    };

    init();
    return () => { unsub(); };
  }, [isConfigured]);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  // 登录用户变化时，切换本地数据命名空间并重置“首次拉取”标记
  useEffect(() => {
    const userId = user?.id ?? null;
    if (initialPullUserRef.current !== userId) {
      setStorageOwner(userId);
      setLastSynced(readLastSynced());
      initialPullUserRef.current = userId;
      initialPullDoneRef.current = false;
    }
  }, [user?.id]);

  const recordSync = useCallback((userId) => {
    const storageOwner = getStorageOwnerForUser(userId);
    const ts = Date.now();
    localStorage.setItem(getScopedStorageKey(LAST_SYNCED_KEY, storageOwner), String(ts));
    clearSyncDirty({ storageOwner });
    if (getStorageOwner() === storageOwner) {
      setLastSynced(ts);
      window.dispatchEvent(new CustomEvent('kai_sync_completed', { detail: { at: ts } }));
    }
  }, []);

  const requireVerifiedUserId = useCallback(() => {
    if (!authReady || !user?.id) {
      throw new Error('请先登录。');
    }
    return user.id;
  }, [authReady, user?.id]);

  // ── 登录后自动同步（每分钟增量检查） ─────────────────────

  const autoSyncRef = useRef(false);

  useEffect(() => {
    if (!isConfigured) return;

    const tryAutoSync = async () => {
      if (
        !mountedRef.current
        || !authReady
        || !user
        || !navigator.onLine
        || document.visibilityState === 'hidden'
        || autoSyncRef.current
      ) return;

      const userId = user.id;
      const storageOwner = getStorageOwnerForUser(userId);
      const shouldMerge = isSyncDirty({ storageOwner });
      const shouldInitialPull = !initialPullDoneRef.current;
      if (!shouldMerge && !shouldInitialPull) return;

      autoSyncRef.current = true;
      try {
        if (shouldMerge) {
          await syncMerge(userId);
          if (initialPullUserRef.current === userId) {
            initialPullDoneRef.current = true;
          }
        } else if (shouldInitialPull) {
          await pullRemoteData(userId);
          if (initialPullUserRef.current === userId) {
            initialPullDoneRef.current = true;
          }
        }

        if (mountedRef.current) {
          recordSync(userId);
        }
      } catch {
        // 静默失败，等待下一次定时/online/可见时重试
      } finally {
        autoSyncRef.current = false;
      }
    };

    const timerId = window.setInterval(() => {
      void tryAutoSync();
    }, AUTO_SYNC_INTERVAL_MS);

    const handleOnline = () => {
      void tryAutoSync();
    };
    const handleVisible = () => {
      if (document.visibilityState === 'visible') {
        void tryAutoSync();
      }
    };

    window.addEventListener('online', handleOnline);
    document.addEventListener('visibilitychange', handleVisible);
    void tryAutoSync();

    return () => {
      window.clearInterval(timerId);
      window.removeEventListener('online', handleOnline);
      document.removeEventListener('visibilitychange', handleVisible);
    };
  }, [isConfigured, authReady, user, recordSync]);

  // ── 同步操作 ──────────────────────────────────────────────

  const sync = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      const result = await syncMerge(userId);
      recordSync(userId);
      return result;
    } catch (err) {
      setError(err.message || '同步失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, requireVerifiedUserId]);

  const push = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      await pushLocalData(userId);
      recordSync(userId);
    } catch (err) {
      setError(err.message || '推送失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, requireVerifiedUserId]);

  const pull = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      const result = await pullRemoteData(userId);
      if (result.pulled) recordSync(userId);
      return result;
    } catch (err) {
      setError(err.message || '拉取失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, requireVerifiedUserId]);

  // ── 认证操作 ──────────────────────────────────────────────

  const loginWithEmail = useCallback(async (email, password, captchaToken) => {
    setError(null);
    try {
      return await signInWithEmail(email, password, captchaToken);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const registerWithEmail = useCallback(async (email, password, captchaToken, emailRedirectTo) => {
    setError(null);
    try {
      return await signUpWithEmail(email, password, captchaToken, emailRedirectTo);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const loginWithGitHub = useCallback(async (redirectTo) => {
    setError(null);
    try {
      return await signInWithGitHub(redirectTo);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const completeAuthCallback = useCallback(async () => {
    setError(null);
    try {
      const data = await completeAuthCallbackFromUrl();
      const nextUser = data?.user ?? data?.session?.user ?? null;
      if (mountedRef.current && nextUser) {
        setStorageOwner(nextUser.id);
        setUser(nextUser);
      }
      return data;
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const requestPasswordReset = useCallback(async (email, redirectTo, captchaToken) => {
    setError(null);
    try {
      return await sendPasswordResetEmail(email, redirectTo, captchaToken);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    try {
      await doSignOut();
      setStorageOwner(null);
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  return {
    isConfigured,
    user,
    isLoggedIn: authReady && !!user,
    authReady,
    syncing,
    lastSynced,
    error,
    sync,
    push,
    pull,
    loginWithEmail,
    registerWithEmail,
    loginWithGitHub,
    completeAuthCallback,
    requestPasswordReset,
    signOut,
  };
}

/**
 * SyncProvider — 在组件树顶层挂载一次，全局共享同步状态
 */
export function SyncProvider({ children }) {
  const value = useSyncInternal();
  return (
    <SyncContext.Provider value={value}>
      {children}
    </SyncContext.Provider>
  );
}
