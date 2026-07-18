/**
 * Authentication-only Supabase service.
 *
 * Learning data is written directly to the database and does not pass through
 * a browser synchronization layer.
 */

import {
  getSupabaseClient,
  getSupabaseEmailActionClient,
  getSupabasePasswordResetClient,
} from './supabaseClient';


/**
 * 邮箱 + 密码注册
 */
export const signUpWithEmail = async (email, password, captchaToken, emailRedirectTo) => {
  const sb = getSupabaseEmailActionClient();
  if (!sb) throw new Error('Supabase 未配置');
  const options = { email, password };
  const actionOptions = {};
  if (captchaToken) actionOptions.captchaToken = captchaToken;
  if (emailRedirectTo) actionOptions.emailRedirectTo = emailRedirectTo;
  if (Object.keys(actionOptions).length > 0) options.options = actionOptions;
  const { data, error } = await sb.auth.signUp(options);
  if (error) throw error;
  // Projects with email confirmation disabled return a session immediately.
  // The email-action client intentionally does not persist it, so transfer the
  // session to the normal application client before reporting registration as
  // complete.
  if (data?.session?.access_token && data?.session?.refresh_token) {
    const appClient = getSupabaseClient();
    const {data: persisted, error: persistError} = await appClient.auth.setSession({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
    if (persistError) throw persistError;
    return persisted;
  }
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
 * GitHub OAuth 登录（跳转授权页）
 * @param {string} [redirectTo] - 授权完成后回跳地址
 */
export const signInWithGitHub = async (redirectTo) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const options = redirectTo ? { redirectTo } : undefined;
  const { data, error } = await sb.auth.signInWithOAuth({
    provider: 'github',
    options,
  });
  if (error) throw error;
  return data;
};

/**
 * 处理 OAuth 回跳 code，交换为 session
 * 注意：detectSessionInUrl=false 时需手动调用
 */
export const exchangeOAuthCodeForSession = async (code) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (!code) throw new Error('缺少 OAuth 授权码');

  const { data, error } = await sb.auth.exchangeCodeForSession(code);
  if (error) throw error;
  return data;
};

const clearRecoveryUrlParams = (url) => {
  url.searchParams.delete('code');
  url.searchParams.delete('token_hash');
  url.searchParams.delete('type');
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}`);
};

const clearAuthUrlParams = (url) => {
  url.searchParams.delete('code');
  url.searchParams.delete('token_hash');
  url.searchParams.delete('type');
  url.searchParams.delete('error');
  url.searchParams.delete('error_description');
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}`);
};

const CALLBACK_TOKEN_HASH_TYPES = new Set(['signup', 'invite', 'magiclink', 'email']);

/**
 * 统一处理登录/注册类 Auth 回调。密码 recovery 仍交给 reset-password 页面。
 */
export const completeAuthCallbackFromUrl = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (typeof window === 'undefined') return null;

  const url = new URL(window.location.href);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const errorDescription = url.searchParams.get('error_description') || hashParams.get('error_description');
  if (errorDescription) {
    clearAuthUrlParams(url);
    throw new Error(decodeURIComponent(errorDescription));
  }

  const type = url.searchParams.get('type') || hashParams.get('type') || null;
  if (type === 'recovery') {
    return { redirectToResetPassword: true };
  }

  const code = url.searchParams.get('code');
  if (code) {
    const data = await exchangeOAuthCodeForSession(code);
    clearAuthUrlParams(url);
    return { ...data, type: type || 'oauth' };
  }

  const tokenHash = url.searchParams.get('token_hash') || hashParams.get('token_hash');
  if (tokenHash) {
    if (!CALLBACK_TOKEN_HASH_TYPES.has(type)) {
      throw new Error('认证链接类型不正确，请重新发送邮件。');
    }
    const { data, error } = await sb.auth.verifyOtp({
      token_hash: tokenHash,
      type,
    });
    if (error) throw error;
    clearAuthUrlParams(url);
    return { ...data, type };
  }

  const accessToken = hashParams.get('access_token');
  const refreshToken = hashParams.get('refresh_token');
  if (accessToken && refreshToken) {
    if (type && type !== 'signup' && type !== 'invite' && type !== 'magiclink' && type !== 'email') {
      throw new Error('认证链接类型不正确，请重新发送邮件。');
    }
    const { data, error } = await sb.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) throw error;
    clearAuthUrlParams(url);
    return { ...data, type: type || 'email' };
  }

  const { data, error } = await sb.auth.getSession();
  if (error) throw error;
  if (!data?.session) throw new Error('认证链接无效或已过期，请重新登录。');
  return { ...data, type };
};

/**
 * 发送密码重置邮件
 */
export const sendPasswordResetEmail = async (email, redirectTo, captchaToken) => {
  const sb = getSupabasePasswordResetClient();
  if (!sb) throw new Error('Supabase 未配置');

  const options = {};
  if (redirectTo) options.redirectTo = redirectTo;
  if (captchaToken) options.captchaToken = captchaToken;

  const { data, error } = await sb.auth.resetPasswordForEmail(email, options);
  if (error) throw error;
  return data;
};

/**
 * 从密码重置链接恢复会话。只接受明确的 recovery 链接，旧版 PKCE code 链接需重新发送。
 */
export const recoverPasswordSessionFromUrl = async () => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  if (typeof window === 'undefined') return null;

  const url = new URL(window.location.href);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const errorDescription = url.searchParams.get('error_description') || hashParams.get('error_description');
  if (errorDescription) throw new Error(decodeURIComponent(errorDescription));

  const type = url.searchParams.get('type') || hashParams.get('type');
  const hasLegacyCode = url.searchParams.has('code');
  if (hasLegacyCode) {
    throw new Error('这是一封旧版重置链接，请重新发送重置邮件并打开最新链接。');
  }

  const tokenHash = url.searchParams.get('token_hash') || hashParams.get('token_hash');
  if (tokenHash) {
    if (type !== 'recovery') throw new Error('重置链接类型不正确，请重新发送重置邮件。');
    const { data, error } = await sb.auth.verifyOtp({
      token_hash: tokenHash,
      type: 'recovery',
    });
    if (error) throw error;
    clearRecoveryUrlParams(url);
    return data;
  }

  const accessToken = hashParams.get('access_token');
  const refreshToken = hashParams.get('refresh_token');
  if (accessToken && refreshToken) {
    if (type !== 'recovery') throw new Error('重置链接类型不正确，请重新发送重置邮件。');
    const { data, error } = await sb.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) throw error;
    clearRecoveryUrlParams(url);
    return data;
  }

  const { data, error } = await sb.auth.getSession();
  if (error) throw error;
  return data;
};

/**
 * 更新当前登录/恢复会话用户的密码
 */
export const updateCurrentUserPassword = async (password) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');

  const { data, error } = await sb.auth.updateUser({ password });
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
 * 获取经过服务端验证的当前 access token。
 * getSession() 只读本地存储；这里先 getUser() 校验 JWT，再返回 token。
 */
export const getVerifiedAccessToken = async () => {
  const sb = getSupabaseClient();
  if (!sb) return null;

  const { data: { session }, error: sessionError } = await sb.auth.getSession();
  if (sessionError || !session?.access_token) return null;

  const { data: { user }, error: userError } = await sb.auth.getUser();
  if (userError || !user) return null;

  return session.access_token;
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

