/**
 * useSync — 云同步状态管理 Hook
 *
 * 提供：
 * - 认证状态 (user, isLoggedIn)
 * - Supabase 配置状态 (isConfigured，构建时注入)
 * - 同步操作 (sync, push, pull)
 * - 邮箱登录/注册/登出方法
 * - 同步状态指示 (syncing, lastSynced, error)
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useInitSupabase } from '../services/supabaseClient';
import {
  syncMerge,
  pushLocalData,
  pullRemoteData,
  signInWithEmail,
  signUpWithEmail,
  signOut as doSignOut,
  getSession,
  onAuthStateChange,
} from '../services/syncService';

const LAST_SYNCED_KEY = 'kai_last_synced';

export const useSync = () => {
  // 从 Docusaurus siteConfig 初始化 Supabase 凭据
  const isConfigured = useInitSupabase();

  const [user, setUser] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  // 读取上次同步时间
  useEffect(() => {
    try {
      const ts = localStorage.getItem(LAST_SYNCED_KEY);
      if (ts) setLastSynced(Number(ts));
    } catch {}
  }, []);

  // 认证状态监听
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

      unsub = onAuthStateChange((_event, session) => {
        if (mountedRef.current) {
          setUser(session?.user ?? null);
        }
      });
    };

    init();
    return () => {
      unsub();
    };
  }, [isConfigured]);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  const recordSync = useCallback(() => {
    const ts = Date.now();
    setLastSynced(ts);
    localStorage.setItem(LAST_SYNCED_KEY, String(ts));
  }, []);

  // ── 同步操作 ──────────────────────────────────────────────

  const sync = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const result = await syncMerge();
      recordSync();
      return result;
    } catch (err) {
      setError(err.message || '同步失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync]);

  const push = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      await pushLocalData();
      recordSync();
    } catch (err) {
      setError(err.message || '推送失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync]);

  const pull = useCallback(async () => {
    setSyncing(true);
    setError(null);
    try {
      const result = await pullRemoteData();
      if (result.pulled) recordSync();
      return result;
    } catch (err) {
      setError(err.message || '拉取失败');
      throw err;
    } finally {
      if (mountedRef.current) setSyncing(false);
    }
  }, [recordSync]);

  // ── 认证操作（仅邮箱） ────────────────────────────────────

  const loginWithEmail = useCallback(async (email, password) => {
    setError(null);
    try {
      return await signInWithEmail(email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const registerWithEmail = useCallback(async (email, password) => {
    setError(null);
    try {
      return await signUpWithEmail(email, password);
    } catch (err) {
      setError(err.message);
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
    // 状态
    isConfigured,
    user,
    isLoggedIn: !!user,
    syncing,
    lastSynced,
    error,
    // 同步
    sync,
    push,
    pull,
    // 认证
    loginWithEmail,
    registerWithEmail,
    signOut,
  };
};
