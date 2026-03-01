/**
 * useSync — 云同步状态消费 Hook
 *
 * 所有状态和逻辑由 SyncContext（全局单例）管理，
 * 本 Hook 仅从 Context 读取，保持原有 API 不变。
 *
 * 提供：
 * - 认证状态 (user, isLoggedIn)
 * - Supabase 配置状态 (isConfigured，构建时注入)
 * - 同步操作 (sync, push, pull)
 * - 邮箱登录/注册/登出方法
 * - 同步状态指示 (syncing, lastSynced, error)
 */

import { useContext } from 'react';
import { SyncContext } from '../context/SyncContext';

export const useSync = () => {
  const ctx = useContext(SyncContext);
  if (!ctx) {
    throw new Error('useSync must be used within <SyncProvider>. Check that Root.js wraps the app with SyncProvider.');
  }
  return ctx;
};
