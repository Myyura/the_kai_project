/**
 * authSecurity — 认证安全工具模块
 *
 * 提供：
 * - 客户端登录频率限制（防暴力破解）
 * - 错误信息脱敏
 * - 密码强度校验
 * - 远端数据结构验证
 */

// ── 频率限制（Rate Limiting） ──────────────────────────────

const RATE_LIMIT_KEY = 'kai_auth_attempts';
const MAX_ATTEMPTS = 5;           // 最多连续失败次数
const LOCKOUT_DURATION = 60_000;  // 锁定时长 60 秒

/**
 * 读取当前登录尝试记录
 * @returns {{ count: number, firstAttempt: number, lockedUntil: number }}
 */
const getAttempts = () => {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    return raw ? JSON.parse(raw) : { count: 0, firstAttempt: 0, lockedUntil: 0 };
  } catch {
    return { count: 0, firstAttempt: 0, lockedUntil: 0 };
  }
};

const saveAttempts = (data) => {
  try {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
  } catch {}
};

/**
 * 检查是否处于锁定状态
 * @returns {{ locked: boolean, remainingSeconds: number }}
 */
export const checkRateLimit = () => {
  const attempts = getAttempts();
  const now = Date.now();

  if (attempts.lockedUntil && now < attempts.lockedUntil) {
    return {
      locked: true,
      remainingSeconds: Math.ceil((attempts.lockedUntil - now) / 1000),
    };
  }

  // 锁定过期 → 重置
  if (attempts.lockedUntil && now >= attempts.lockedUntil) {
    saveAttempts({ count: 0, firstAttempt: 0, lockedUntil: 0 });
  }

  return { locked: false, remainingSeconds: 0 };
};

/**
 * 记录一次失败的登录尝试
 * @returns {{ locked: boolean, remainingSeconds: number, attemptsLeft: number }}
 */
export const recordFailedAttempt = () => {
  const attempts = getAttempts();
  const now = Date.now();

  // 如果第一次尝试是 10 分钟之前的，重置计数
  if (attempts.firstAttempt && now - attempts.firstAttempt > 600_000) {
    attempts.count = 0;
    attempts.firstAttempt = 0;
  }

  attempts.count += 1;
  if (!attempts.firstAttempt) attempts.firstAttempt = now;

  if (attempts.count >= MAX_ATTEMPTS) {
    attempts.lockedUntil = now + LOCKOUT_DURATION;
    saveAttempts(attempts);
    return {
      locked: true,
      remainingSeconds: Math.ceil(LOCKOUT_DURATION / 1000),
      attemptsLeft: 0,
    };
  }

  saveAttempts(attempts);
  return {
    locked: false,
    remainingSeconds: 0,
    attemptsLeft: MAX_ATTEMPTS - attempts.count,
  };
};

/**
 * 登录成功后重置计数
 */
export const resetAttempts = () => {
  saveAttempts({ count: 0, firstAttempt: 0, lockedUntil: 0 });
};

// ── 错误信息脱敏 ────────────────────────────────────────────

/**
 * Supabase 原始错误 → 安全的用户提示
 * 避免暴露"用户不存在"等可用于用户枚举的信息
 */
const ERROR_MAP = {
  'Invalid login credentials': 'auth_invalid_credentials',
  'Email not confirmed': 'auth_email_not_confirmed',
  'User already registered': 'auth_user_exists',
  'Password should be at least': 'auth_password_too_short',
  'Unable to validate email address': 'auth_invalid_email',
  'Email rate limit exceeded': 'auth_rate_limit',
  'For security purposes': 'auth_rate_limit',
  'over_email_send_rate_limit': 'auth_rate_limit',
  'Signups not allowed': 'auth_signups_disabled',
};

const SAFE_MESSAGES = {
  zh: {
    auth_invalid_credentials: '邮箱或密码不正确。',
    auth_email_not_confirmed: '请先查收验证邮件并完成确认。',
    auth_user_exists: '该邮箱已注册，请直接登录。',
    auth_password_too_short: '密码不符合要求，请检查后重试。',
    auth_invalid_email: '邮箱格式不正确。',
    auth_rate_limit: '操作过于频繁，请稍后再试。',
    auth_signups_disabled: '暂不开放注册，请联系管理员。',
    auth_unknown: '操作失败，请稍后重试。',
    auth_locked: (sec) => `登录尝试次数过多，请 ${sec} 秒后再试。`,
    auth_attempts_left: (n) => `邮箱或密码不正确，还可尝试 ${n} 次。`,
  },
  ja: {
    auth_invalid_credentials: 'メールアドレスまたはパスワードが正しくありません。',
    auth_email_not_confirmed: '確認メールを確認してください。',
    auth_user_exists: 'このメールアドレスは登録済みです。ログインしてください。',
    auth_password_too_short: 'パスワードが要件を満たしていません。',
    auth_invalid_email: 'メールアドレスの形式が正しくありません。',
    auth_rate_limit: '操作が頻繁すぎます。しばらくしてから再試行してください。',
    auth_signups_disabled: '現在登録を受け付けていません。管理者にお問い合わせください。',
    auth_unknown: '操作に失敗しました。しばらくしてから再試行してください。',
    auth_locked: (sec) => `ログイン試行回数が上限に達しました。${sec}秒後にお試しください。`,
    auth_attempts_left: (n) => `メールアドレスまたはパスワードが正しくありません。残り${n}回。`,
  },
};

/**
 * 将 Supabase 原始错误转换为安全的用户提示
 * @param {Error|string} err
 * @param {'zh'|'ja'} lang
 * @returns {string}
 */
export const sanitizeAuthError = (err, lang = 'zh') => {
  const msg = typeof err === 'string' ? err : (err?.message || '');
  const messages = SAFE_MESSAGES[lang] || SAFE_MESSAGES.zh;

  for (const [pattern, key] of Object.entries(ERROR_MAP)) {
    if (msg.toLowerCase().includes(pattern.toLowerCase())) {
      return messages[key] || messages.auth_unknown;
    }
  }

  // 不暴露未知错误的原始内容
  return messages.auth_unknown;
};

/**
 * 获取锁定相关的错误提示
 */
export const getRateLimitMessage = (seconds, lang = 'zh') => {
  const messages = SAFE_MESSAGES[lang] || SAFE_MESSAGES.zh;
  return messages.auth_locked(seconds);
};

export const getAttemptsLeftMessage = (attemptsLeft, lang = 'zh') => {
  const messages = SAFE_MESSAGES[lang] || SAFE_MESSAGES.zh;
  return messages.auth_attempts_left(attemptsLeft);
};

// ── 密码强度校验 ────────────────────────────────────────────

/**
 * 校验密码强度
 * 要求：至少 8 位，包含大写、小写、数字
 * @param {string} pw
 * @returns {{ valid: boolean, errors: string[] }}
 */
export const validatePassword = (pw, lang = 'zh') => {
  const errors = [];
  const t = lang === 'ja' ? PW_ERRORS.ja : PW_ERRORS.zh;

  if (pw.length < 8) errors.push(t.minLength);
  if (!/[a-z]/.test(pw)) errors.push(t.lowercase);
  if (!/[A-Z]/.test(pw)) errors.push(t.uppercase);
  if (!/[0-9]/.test(pw)) errors.push(t.digit);

  return { valid: errors.length === 0, errors };
};

const PW_ERRORS = {
  zh: {
    minLength: '至少 8 个字符',
    lowercase: '需包含小写字母',
    uppercase: '需包含大写字母',
    digit: '需包含数字',
  },
  ja: {
    minLength: '8文字以上',
    lowercase: '小文字を含む必要があります',
    uppercase: '大文字を含む必要があります',
    digit: '数字を含む必要があります',
  },
};

// ── 远端数据验证 ─────────────────────────────────────────────

const MAX_DATA_SIZE = 5 * 1024 * 1024; // 5 MB 上限

/**
 * 验证从远端拉取的同步数据结构是否合法
 * 防止恶意数据注入 localStorage
 * @param {any} data
 * @returns {{ valid: boolean, reason?: string }}
 */
export const validateSyncData = (data) => {
  if (data === null || data === undefined) {
    return { valid: true }; // 无数据是合法的
  }

  if (typeof data !== 'object' || Array.isArray(data)) {
    return { valid: false, reason: 'Data must be a plain object' };
  }

  // 检查序列化后大小
  let serialized;
  try {
    serialized = JSON.stringify(data);
  } catch {
    return { valid: false, reason: 'Data is not serializable' };
  }

  if (serialized.length > MAX_DATA_SIZE) {
    return { valid: false, reason: 'Data exceeds maximum size limit' };
  }

  // 递归检查所有层级（不能包含函数、不能有原型污染键）
  const DANGEROUS_KEYS = ['__proto__', 'constructor', 'prototype'];
  const MAX_DEPTH = 10;

  const checkObject = (obj, depth) => {
    if (depth > MAX_DEPTH) {
      return { valid: false, reason: 'Data nesting too deep' };
    }
    for (const key of Object.keys(obj)) {
      if (DANGEROUS_KEYS.includes(key)) {
        return { valid: false, reason: `Forbidden key: ${key}` };
      }
      const val = obj[key];
      if (typeof val === 'function') {
        return { valid: false, reason: 'Functions are not allowed in data' };
      }
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        const inner = checkObject(val, depth + 1);
        if (!inner.valid) return inner;
      }
    }
    return { valid: true };
  };

  return checkObject(data, 0);
};
