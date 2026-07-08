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
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LAST_SYNCED_KEY = 'kai_last_synced';
const AUTO_SYNC_INTERVAL_MS = 60_000;

let syncServicesPromise = null;

const loadSyncServices = () => {
  if (!syncServicesPromise) {
    syncServicesPromise = Promise.all([
      import('../services/supabaseClient'),
      import('../services/localStorageScope'),
      import('../services/syncService'),
    ]).then(([supabaseClient, localStorageScope, syncService]) => ({
      ...supabaseClient,
      ...localStorageScope,
      ...syncService,
    }));
  }
  return syncServicesPromise;
};

const readLastSynced = (getScopedStorageKey) => {
  if (!getScopedStorageKey) return null;
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
  const { siteConfig } = useDocusaurusContext();
  const [services, setServices] = useState(null);
  const [isConfigured, setIsConfigured] = useState(true);

  // 缓存用户仅用于过渡展示；正式登录态必须等待 getUser() 服务端校验。
  const [cachedUser, setCachedUser] = useState(null);
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);
  const initialPullUserRef = useRef(null);
  const initialPullDoneRef = useRef(false);

  useEffect(() => {
    let disposed = false;

    const initServices = async () => {
      try {
        const loadedServices = await loadSyncServices();
        loadedServices.initSiteConfig(siteConfig);
        if (disposed || !mountedRef.current) return;

        const configured = loadedServices.isSupabaseConfigured();
        setServices(loadedServices);
        setIsConfigured(configured);
        setLastSynced(readLastSynced(loadedServices.getScopedStorageKey));

        if (!configured) {
          setUser(null);
          setCachedUser(null);
          setAuthReady(true);
          return;
        }

        try {
          setCachedUser(loadedServices.getCachedUser());
        } catch {
          setCachedUser(null);
        }
      } catch {
        if (disposed || !mountedRef.current) return;
        setServices(null);
        setIsConfigured(false);
        setAuthReady(true);
        setError('云同步初始化失败。');
      }
    };

    void initServices();
    return () => {
      disposed = true;
    };
  }, [siteConfig]);

  const ensureServices = useCallback(() => {
    if (!services) {
      throw new Error('云同步正在初始化，请稍后再试。');
    }
    return services;
  }, [services]);

  // 认证状态监听（全局唯一）
  useEffect(() => {
    if (!services || !isConfigured) return;

    let disposed = false;
    let unsub = () => {};

    const init = async () => {
      try {
        const session = await services.getSession();
        if (!disposed && mountedRef.current) {
          setUser(session?.user ?? null);
          setCachedUser(session?.user ?? null);
        }
      } catch {
        if (!disposed && mountedRef.current) {
          setUser(null);
          setCachedUser(null);
        }
      }
      if (!disposed && mountedRef.current) setAuthReady(true);

      unsub = services.onAuthStateChange((event, session) => {
        if (disposed || !mountedRef.current) return;

        if (event === 'INITIAL_SESSION') {
          return;
        }

        if (event === 'TOKEN_REFRESHED' && !session) {
          setUser(null);
          setCachedUser(null);
          setError('会话已过期，请重新登录。');
          return;
        }

        const nextUser = session?.user ?? null;
        setUser(nextUser);
        setCachedUser(nextUser);
      });
    };

    init();
    return () => {
      disposed = true;
      unsub();
    };
  }, [services, isConfigured]);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  // 登录用户变化时，切换本地数据命名空间并重置“首次拉取”标记
  useEffect(() => {
    if (!services) return;
    const userId = user?.id ?? null;
    if (initialPullUserRef.current !== userId) {
      services.setStorageOwner(userId);
      setLastSynced(readLastSynced(services.getScopedStorageKey));
      initialPullUserRef.current = userId;
      initialPullDoneRef.current = false;
    }
  }, [services, user?.id]);

  const recordSync = useCallback((userId) => {
    const s = ensureServices();
    const storageOwner = s.getStorageOwnerForUser(userId);
    const ts = Date.now();
    localStorage.setItem(s.getScopedStorageKey(LAST_SYNCED_KEY, storageOwner), String(ts));
    s.clearSyncDirty({ storageOwner });
    if (s.getStorageOwner() === storageOwner) {
      setLastSynced(ts);
      window.dispatchEvent(new CustomEvent('kai_sync_completed', { detail: { at: ts } }));
    }
  }, [ensureServices]);

  const requireVerifiedUserId = useCallback(() => {
    if (!authReady || !user?.id) {
      throw new Error('请先登录。');
    }
    return user.id;
  }, [authReady, user?.id]);

  // ── 登录后自动同步（每分钟增量检查） ─────────────────────

  const autoSyncRef = useRef(false);

  useEffect(() => {
    if (!services || !isConfigured) return;

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
      const storageOwner = services.getStorageOwnerForUser(userId);
      const shouldMerge = services.isSyncDirty({ storageOwner });
      const shouldInitialPull = !initialPullDoneRef.current;
      if (!shouldMerge && !shouldInitialPull) return;

      autoSyncRef.current = true;
      try {
        if (shouldMerge) {
          await services.syncMerge(userId);
          if (initialPullUserRef.current === userId) {
            initialPullDoneRef.current = true;
          }
        } else if (shouldInitialPull) {
          await services.pullRemoteData(userId);
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
  }, [services, isConfigured, authReady, user, recordSync]);

  // ── 同步操作 ──────────────────────────────────────────────

  const sync = useCallback(async () => {
    const s = ensureServices();
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      const result = await s.syncMerge(userId);
      recordSync(userId);
      return result;
    } catch (err) {
      setError(err.message || '同步失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [ensureServices, recordSync, requireVerifiedUserId]);

  const push = useCallback(async () => {
    const s = ensureServices();
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      await s.pushLocalData(userId);
      recordSync(userId);
    } catch (err) {
      setError(err.message || '推送失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [ensureServices, recordSync, requireVerifiedUserId]);

  const pull = useCallback(async () => {
    const s = ensureServices();
    setSyncing(true);
    setError(null);
    try {
      const userId = requireVerifiedUserId();
      const result = await s.pullRemoteData(userId);
      if (result.pulled) recordSync(userId);
      return result;
    } catch (err) {
      setError(err.message || '拉取失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [ensureServices, recordSync, requireVerifiedUserId]);

  // ── 认证操作 ──────────────────────────────────────────────

  const loginWithEmail = useCallback(async (email, password, captchaToken) => {
    const s = ensureServices();
    setError(null);
    try {
      return await s.signInWithEmail(email, password, captchaToken);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, [ensureServices]);

  const registerWithEmail = useCallback(async (email, password, captchaToken, emailRedirectTo) => {
    const s = ensureServices();
    setError(null);
    try {
      return await s.signUpWithEmail(email, password, captchaToken, emailRedirectTo);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, [ensureServices]);

  const loginWithGitHub = useCallback(async (redirectTo) => {
    const s = ensureServices();
    setError(null);
    try {
      return await s.signInWithGitHub(redirectTo);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, [ensureServices]);

  const completeAuthCallback = useCallback(async () => {
    const s = ensureServices();
    setError(null);
    try {
      const data = await s.completeAuthCallbackFromUrl();
      const nextUser = data?.user ?? data?.session?.user ?? null;
      if (mountedRef.current && nextUser) {
        setUser(nextUser);
        setCachedUser(nextUser);
      }
      return data;
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, [ensureServices]);

  const requestPasswordReset = useCallback(async (email, redirectTo, captchaToken) => {
    const s = ensureServices();
    setError(null);
    try {
      return await s.sendPasswordResetEmail(email, redirectTo, captchaToken);
    } catch (err) {
      setError('操作失败');
      throw err;
    }
  }, [ensureServices]);

  const signOut = useCallback(async () => {
    const s = ensureServices();
    setError(null);
    try {
      await s.signOut();
      setUser(null);
      setCachedUser(null);
    } catch (err) {
      setError(err.message);
    }
  }, [ensureServices]);

  return {
    isConfigured,
    user,
    cachedUser,
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
