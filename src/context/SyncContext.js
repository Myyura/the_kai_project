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
import { useInitSupabase, getCachedUser } from '../services/supabaseClient';
import {
  syncMerge,
  pushLocalData,
  pullRemoteData,
  signInWithEmail,
  signUpWithEmail,
  signInWithGitHub,
  exchangeOAuthCodeForSession,
  signOut as doSignOut,
  getSession,
  onAuthStateChange,
  isSyncDirty,
  clearSyncDirty,
} from '../services/syncService';

const LAST_SYNCED_KEY = 'kai_last_synced';
const AUTO_SYNC_INTERVAL_MS = 60_000;

/** @type {React.Context<ReturnType<typeof useSyncInternal> | null>} */
export const SyncContext = createContext(null);

/**
 * 内部 Hook — 包含所有同步/认证逻辑，仅在 SyncProvider 中调用一次
 */
function useSyncInternal() {
  // 从 Docusaurus siteConfig 初始化 Supabase 凭据
  const isConfigured = useInitSupabase();

  // 同步读取缓存的 user，避免异步 getSession 导致的闪烁
  const [user, setUser] = useState(() => {
    try { return getCachedUser(); } catch { return null; }
  });
  const [authReady, setAuthReady] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);
  const initialPullUserRef = useRef(null);
  const initialPullDoneRef = useRef(false);

  // 读取上次同步时间
  useEffect(() => {
    try {
      const ts = localStorage.getItem(LAST_SYNCED_KEY);
      if (ts) setLastSynced(Number(ts));
    } catch {}
  }, []);

  // 认证状态监听（全局唯一）
  useEffect(() => {
    if (!isConfigured) return;

    let unsub = () => {};

    const init = async () => {
      try {
        const session = await getSession();
        if (mountedRef.current) {
          setUser(session?.user ?? null);
        }
      } catch {}
      if (mountedRef.current) setAuthReady(true);

      unsub = onAuthStateChange((event, session) => {
        if (!mountedRef.current) return;

        if (event === 'TOKEN_REFRESHED' && !session) {
          setUser(null);
          setError('会话已过期，请重新登录。');
          return;
        }

        setUser(session?.user ?? null);
      });
    };

    init();
    return () => { unsub(); };
  }, [isConfigured]);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  // 登录用户变化时，重置“首次拉取”标记
  useEffect(() => {
    const userId = user?.id ?? null;
    if (initialPullUserRef.current !== userId) {
      initialPullUserRef.current = userId;
      initialPullDoneRef.current = false;
    }
  }, [user?.id]);

  const recordSync = useCallback(() => {
    const ts = Date.now();
    setLastSynced(ts);
    localStorage.setItem(LAST_SYNCED_KEY, String(ts));
    clearSyncDirty();
  }, []);

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
      const shouldMerge = isSyncDirty();
      const shouldInitialPull = !initialPullDoneRef.current;
      if (!shouldMerge && !shouldInitialPull) return;

      autoSyncRef.current = true;
      try {
        if (shouldMerge) {
          await syncMerge(userId);
          initialPullDoneRef.current = true;
        } else if (shouldInitialPull) {
          await pullRemoteData(userId);
          initialPullDoneRef.current = true;
        }

        if (mountedRef.current) {
          recordSync();
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
      const result = await syncMerge(user?.id);
      recordSync();
      return result;
    } catch (err) {
      setError(err.message || '同步失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, user?.id]);

  const push = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      await pushLocalData(user?.id);
      recordSync();
    } catch (err) {
      setError(err.message || '推送失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, user?.id]);

  const pull = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const result = await pullRemoteData(user?.id);
      if (result.pulled) recordSync();
      return result;
    } catch (err) {
      setError(err.message || '拉取失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync, user?.id]);

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

  const registerWithEmail = useCallback(async (email, password, captchaToken) => {
    setError(null);
    try {
      return await signUpWithEmail(email, password, captchaToken);
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

  const completeOAuthCallback = useCallback(async (code) => {
    setError(null);
    try {
      const data = await exchangeOAuthCodeForSession(code);
      const nextUser = data?.user ?? data?.session?.user ?? null;
      if (mountedRef.current && nextUser) {
        setUser(nextUser);
      }
      return data;
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    try {
      await doSignOut();
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return {
    isConfigured,
    user,
    isLoggedIn: !!user,
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
    completeOAuthCallback,
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
