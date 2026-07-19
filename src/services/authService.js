/**
 * Authentication-only Supabase service.
 *
 * Learning data is written directly to the database and does not pass through
 * a browser synchronization layer.
 */

import {
  createSupabaseAuthCallbackClient,
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

const clearAuthCallbackUrl = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const initializeCallbackSession = async ({flowType, persistSession = true}) => {
  const sb = createSupabaseAuthCallbackClient({flowType, persistSession});
  if (!sb) throw new Error('Supabase 未配置');

  const {error: initializeError} = await sb.auth.initialize();
  if (initializeError) return {data: null, error: initializeError};

  const {data, error} = await sb.auth.getSession();
  return {data, error};
};

const requireCallbackSession = ({data, error}) => {
  if (error) throw error;
  if (!data?.session) throw new Error('认证链接无效或已过期，请重新登录。');
  return data.session;
};

/**
 * 统一处理登录/注册类 Auth 回调。密码 recovery 仍交给 reset-password 页面。
 */
export const completeAuthCallbackFromUrl = async () => {
  if (typeof window === 'undefined') return null;

  // OAuth uses PKCE while cross-device email confirmations use the implicit
  // flow. Let the SDK validate both formats; only SDK results affect control
  // flow, never raw URL parameters.
  const pkceResult = await initializeCallbackSession({flowType: 'pkce'});
  const result = pkceResult.error
    ? await initializeCallbackSession({flowType: 'implicit'})
    : pkceResult;
  requireCallbackSession(result);
  clearAuthCallbackUrl();
  return {...result.data, type: 'authenticated'};
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
  if (typeof window === 'undefined') return null;

  // A non-persistent callback client cannot fall back to an unrelated stored
  // login session, so this page requires a freshly verified recovery link.
  const callbackResult = await initializeCallbackSession({
    flowType: 'implicit',
    persistSession: false,
  });
  const callbackSession = requireCallbackSession(callbackResult);

  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase 未配置');
  const {data, error} = await sb.auth.setSession({
    access_token: callbackSession.access_token,
    refresh_token: callbackSession.refresh_token,
  });
  if (error) throw error;
  clearAuthCallbackUrl();
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
