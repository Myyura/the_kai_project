/**
 * 云同步服务 — 负责在 Supabase 与 localStorage 之间同步 progress + notes
 *
 * 同步策略：
 * 1. 合并以「每条记录 updatedAt 较新者胜出」为准（字段级 last-write-wins）
 * 2. 支持手动拉取 / 推送 / 双向合并
 * 3. 数据冲突时，取 updatedAt 更大的版本
 */

import { getSupabaseClient } from './supabaseClient';
import { validateSyncData } from './authSecurity';
import { STORAGE_KEY as PROGRESS_KEY, readProgressData, writeProgressData } from '../hooks/useProgress';
import { NOTES_STORAGE_KEY, readNotesData, writeNotesData } from '../hooks/useNotes';

// ── 辅助 ────────────────────────────────────────────────────

/**
 * 合并两份数据（last-write-wins by updatedAt per key）
 * @param {Record<string, any>} local
 * @param {Record<string, any>} remote
 * @returns {Record<string, any>} 合并后的数据
 */
const mergeByTimestamp = (local, remote) => {
  const merged = { ...remote };
  for (const [key, localVal] of Object.entries(local)) {
    const remoteVal = merged[key];
    if (!remoteVal) {
      // 仅本地有
      merged[key] = localVal;
    } else {
      // 两侧都有 → 比较 updatedAt
      const localTs = localVal.updatedAt ?? 0;
      const remoteTs = remoteVal.updatedAt ?? 0;
      if (localTs >= remoteTs) {
        merged[key] = localVal;
      }
      // else keep remote (already in merged)
    }
  }
  return merged;
};

// ── 核心 API ────────────────────────────────────────────────

/**
 * 获取当前登录用户的 user_id
 */
export const getCurrentUserId = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user?.id ?? null;
};

/**
 * 从远端拉取数据
 * @returns {{ progress: object, notes: object, updated_at: string } | null}
 */
export const fetchRemoteData = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = await getCurrentUserId();
  if (!userId) throw new Error('未登录');

  const { data, error } = await sb
    .from('user_data')
    .select('progress, notes, updated_at')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  return data; // null = 远端无记录
};

/**
 * 推送本地数据到远端（upsert）
 */
export const pushLocalData = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = await getCurrentUserId();
  if (!userId) throw new Error('未登录');

  const progress = readProgressData();
  const notes = readNotesData();

  const { error } = await sb
    .from('user_data')
    .upsert(
      {
        user_id: userId,
        progress,
        notes,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    );

  if (error) throw error;
};

/**
 * 从远端拉取并替换本地数据
 */
export const pullRemoteData = async () => {
  const remote = await fetchRemoteData();
  if (!remote) return { pulled: false, reason: 'no_remote_data' };

  const progress = typeof remote.progress === 'object' ? remote.progress : {};
  const notes = typeof remote.notes === 'object' ? remote.notes : {};

  // 安全校验：验证远端数据结构，防止恶意数据注入 localStorage
  const progressCheck = validateSyncData(progress);
  if (!progressCheck.valid) {
    throw new Error(`远端 progress 数据异常: ${progressCheck.reason}`);
  }
  const notesCheck = validateSyncData(notes);
  if (!notesCheck.valid) {
    throw new Error(`远端 notes 数据异常: ${notesCheck.reason}`);
  }

  writeProgressData(progress);
  writeNotesData(notes);
  return { pulled: true };
};

/**
 * 双向合并（推荐）
 * local + remote → 按 updatedAt 合并 → 写回本地 + 远端
 */
export const syncMerge = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const userId = await getCurrentUserId();
  if (!userId) throw new Error('未登录');

  const remote = await fetchRemoteData();

  const localProgress = readProgressData();
  const localNotes = readNotesData();
  const remoteProgress = (remote && typeof remote.progress === 'object') ? remote.progress : {};
  const remoteNotes = (remote && typeof remote.notes === 'object') ? remote.notes : {};

  // 安全校验远端数据
  const progressCheck = validateSyncData(remoteProgress);
  if (!progressCheck.valid) {
    throw new Error(`远端 progress 数据异常: ${progressCheck.reason}`);
  }
  const notesCheck2 = validateSyncData(remoteNotes);
  if (!notesCheck2.valid) {
    throw new Error(`远端 notes 数据异常: ${notesCheck2.reason}`);
  }

  const mergedProgress = mergeByTimestamp(localProgress, remoteProgress);
  const mergedNotes = mergeByTimestamp(localNotes, remoteNotes);

  // 写回本地
  writeProgressData(mergedProgress);
  writeNotesData(mergedNotes);

  // 写回远端
  const { error } = await sb
    .from('user_data')
    .upsert(
      {
        user_id: userId,
        progress: mergedProgress,
        notes: mergedNotes,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    );

  if (error) throw error;

  return {
    progressKeys: Object.keys(mergedProgress).length,
    notesKeys: Object.keys(mergedNotes).length,
  };
};

// ── 认证辅助 ────────────────────────────────────────────────

/**
 * 邮箱 + 密码注册
 */
export const signUpWithEmail = async (email, password, captchaToken) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  const options = { email, password };
  if (captchaToken) options.options = { captchaToken };
  const { data, error } = await sb.auth.signUp(options);
  if (error) throw error;
  return data;
};

/**
 * 邮箱 + 密码登录
 */
export const signInWithEmail = async (email, password, captchaToken) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  const options = { email, password };
  if (captchaToken) options.options = { captchaToken };
  const { data, error } = await sb.auth.signInWithPassword(options);
  if (error) throw error;
  return data;
};

/**
 * 登出
 */
export const signOut = async () => {
  const sb = getSupabaseClient();
  if (!sb) return;
  await sb.auth.signOut();
};

/**
 * 获取当前会话（通过服务端验证 JWT）
 * 注意：使用 getUser() 而非 getSession()，
 * getSession() 仅读取本地存储不验证 JWT，存在被篡改风险
 */
export const getSession = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;
  const { data: { user }, error } = await sb.auth.getUser();
  if (error || !user) return null;
  // 构造兼容的 session-like 对象，供上层读取 user
  return { user };
};

/**
 * 监听认证状态变化
 * @param {(event: string, session: object|null) => void} callback
 * @returns {() => void} unsubscribe
 */
export const onAuthStateChange = (callback) => {
  const sb = getSupabaseClient();
  if (!sb) return () => {};
  const { data: { subscription } } = sb.auth.onAuthStateChange(callback);
  return () => subscription.unsubscribe();
};
