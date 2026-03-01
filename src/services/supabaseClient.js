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
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// ── 构建时注入的凭据 ─────────────────────────────────────────

// Docusaurus 在构建时会把 customFields 内联到 JS bundle 中，
// 这里用一个懒加载方式获取以兼容 SSR（Node 环境无 siteConfig）。
let _siteConfig = null;

/**
 * 在 React 组件中调用一次即可初始化 siteConfig。
 * 之后非 React 代码也能通过缓存拿到凭据。
 */
export const initSiteConfig = (siteConfig) => {
  _siteConfig = siteConfig;
};

const getCredentials = () => {
  const url = _siteConfig?.customFields?.supabaseUrl || '';
  const anonKey = _siteConfig?.customFields?.supabaseAnonKey || '';
  return { url, anonKey };
};

/**
 * 判断 Supabase 是否已配置（构建时是否注入了有效凭据）
 */
export const isSupabaseConfigured = () => {
  const { url, anonKey } = getCredentials();
  return !!(url && anonKey);
};

// ── 单例客户端 ───────────────────────────────────────────────

let _clientCache = null;

/**
 * 获取 Supabase 客户端实例（单例）
 * 如果构建时未注入凭据则返回 null
 */
export const getSupabaseClient = () => {
  if (_clientCache) return _clientCache;

  const { url, anonKey } = getCredentials();
  if (!url || !anonKey) return null;

  _clientCache = createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: 'kai_supabase_auth',
      flowType: 'pkce',             // 使用 PKCE 流程，防止授权码拦截攻击
      detectSessionInUrl: false,     // 禁止自动从 URL 中读取 token，防止 token 泄露
    },
  });
  return _clientCache;
};

/**
 * React Hook：在组件树顶层调用一次，用来把 siteConfig 注入到本模块
 */
export const useInitSupabase = () => {
  const { siteConfig } = useDocusaurusContext();
  initSiteConfig(siteConfig);
  return isSupabaseConfigured();
};

/**
 * 同步读取 localStorage 中缓存的 Supabase session user
 * 用于初始渲染时立即获取登录状态，避免异步请求导致的闪烁
 */
export const getCachedUser = () => {
  try {
    const raw = localStorage.getItem('kai_supabase_auth');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Supabase JS v2 在 localStorage 中存储的结构
    const user = parsed?.user || parsed?.session?.user || null;
    // 检查 token 是否已过期（粗略检查）
    const expiresAt = parsed?.expires_at || parsed?.session?.expires_at;
    if (expiresAt && expiresAt * 1000 < Date.now()) return null;
    return user;
  } catch {
    return null;
  }
};
