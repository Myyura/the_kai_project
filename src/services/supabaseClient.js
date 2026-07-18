/**
 * Supabase 客户端初始化
 *
 * Project URL 和 Anon Key 通过环境变量在构建时注入：
 *   SUPABASE_URL / SUPABASE_ANON_KEY
 * 在 GitHub Actions 中设定为 Repository Secrets 即可。
 *
 * 本地开发时也可在 .env 或终端中 export 这两个变量。
 */

import { createClient } from '@supabase/supabase-js';
import {
  AUTH_STORAGE_KEY,
  getSupabaseCredentials,
  isSupabaseConfigured,
} from './runtimeConfig';

// ── 构建时注入的凭据 ─────────────────────────────────────────

// Docusaurus 在构建时会把 customFields 内联到 JS bundle 中，
// 这里用一个懒加载方式获取以兼容 SSR（Node 环境无 siteConfig）。
const getCredentials = getSupabaseCredentials;

/**
 * 判断 Supabase 是否已配置（构建时是否注入了有效凭据）
 */
export {getSupabaseCredentials, isSupabaseConfigured};

// ── 单例客户端 ───────────────────────────────────────────────

let _clientCache = null;

const createConfiguredClient = (authOverrides = {}) => {
  const { url, anonKey } = getCredentials();
  if (!url || !anonKey) return null;

  return createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: AUTH_STORAGE_KEY,
      flowType: 'pkce',             // 使用 PKCE 流程，防止授权码拦截攻击
      detectSessionInUrl: false,     // 禁止自动从 URL 中读取 token，防止 token 泄露
      ...authOverrides,
    },
  });
};

/**
 * 获取 Supabase 客户端实例（单例）
 * 如果构建时未注入凭据则返回 null
 */
export const getSupabaseClient = () => {
  if (_clientCache) return _clientCache;

  _clientCache = createConfiguredClient();
  return _clientCache;
};

/**
 * 邮件动作（注册确认/密码重置）使用 implicit link，避免依赖发起请求浏览器中的 PKCE verifier。
 */
export const getSupabaseEmailActionClient = () => createConfiguredClient({
  persistSession: false,
  autoRefreshToken: false,
  flowType: 'implicit',
});

export const getSupabasePasswordResetClient = getSupabaseEmailActionClient;
