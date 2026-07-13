import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
  FaCloud, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus,
  FaCheck, FaExclamationTriangle, FaSyncAlt, FaUser, FaGithub,
  FaSignOutAlt, FaArrowRight, FaKey,
} from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import NoIndex from '@site/src/components/NoIndex';
import { normalizeLanguage, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import {getAuthReturnTarget} from '@site/src/services/authReturn';
import {
  checkRateLimit,
  recordFailedAttempt,
  resetAttempts,
  sanitizeAuthError,
  getRateLimitMessage,
  getAttemptsLeftMessage,
  isInvalidCredentialsError,
  validatePassword,
} from '@site/src/services/authSecurity';
import styles from './login.module.css';

// ── 主组件 ──────────────────────────────────────────────────

function LoginPageContent() {
  const language = useCurrentLanguage();
  const lang = normalizeLanguage(language);
  const t = useUiText('login');
  const { siteConfig } = useDocusaurusContext();
  const hcaptchaSiteKey = siteConfig?.customFields?.hcaptchaSiteKey || '';
  const history = useHistory();

  const {
    isConfigured, user, isLoggedIn, authReady, error,
    loginWithEmail, registerWithEmail, loginWithGitHub, requestPasswordReset, signOut,
  } = useSync();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { text, isError }
  const [pwChecks, setPwChecks] = useState(null); // [{ label, passed }] or null
  const [lockCountdown, setLockCountdown] = useState(0);
  const [captchaToken, setCaptchaToken] = useState('');
  const countdownRef = useRef(null);
  const captchaRef = useRef(null);

  // 锁定倒计时
  useEffect(() => {
    const { locked, remainingSeconds } = checkRateLimit();
    if (locked) startCountdown(remainingSeconds);
    return () => clearInterval(countdownRef.current);
  }, []);

  const startCountdown = (seconds) => {
    setLockCountdown(seconds);
    clearInterval(countdownRef.current);
    countdownRef.current = setInterval(() => {
      setLockCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const showMsg = (text, isError = false) => {
    setMsg({ text, isError });
    if (!isError) {
      setTimeout(() => setMsg(null), 5000);
    }
  };

  // 实时密码强度检查（仅注册模式）
  const pwRuleLabels = t.passwordRules;

  const pwRules = [
    { test: (pw) => pw.length >= 8, label: pwRuleLabels[0] },
    { test: (pw) => /[a-z]/.test(pw), label: pwRuleLabels[1] },
    { test: (pw) => /[A-Z]/.test(pw), label: pwRuleLabels[2] },
    { test: (pw) => /[0-9]/.test(pw), label: pwRuleLabels[3] },
  ];

  const handlePasswordChange = (val) => {
    setPassword(val);
    if (mode === 'register' && val.length > 0) {
      setPwChecks(pwRules.map((r) => ({ label: r.label, passed: r.test(val) })));
    } else {
      setPwChecks(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    // 邮箱格式校验
    if (!email.trim()) {
      showMsg(t.emailRequired, true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg(t.emailInvalid, true);
      return;
    }

    // 密码非空校验
    if (!password) {
      showMsg(t.passwordRequired, true);
      return;
    }

    // hCaptcha 验证检查
    if (hcaptchaSiteKey && !captchaToken) {
      showMsg(t.captchaRequired, true);
      return;
    }

    // 频率限制检查（仅登录模式）
    if (mode === 'login') {
      const rateCheck = checkRateLimit();
      if (rateCheck.locked) {
        showMsg(getRateLimitMessage(rateCheck.remainingSeconds, lang), true);
        startCountdown(rateCheck.remainingSeconds);
        return;
      }
    }

    // 注册时校验密码强度
    if (mode === 'register') {
      const { valid } = validatePassword(password, lang);
      if (!valid) {
        setPwChecks(pwRules.map((r) => ({ label: r.label, passed: r.test(password) })));
        return;
      }
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        await loginWithEmail(email, password, captchaToken || undefined);
        resetAttempts();
        showMsg(t.loginOk);
        setTimeout(() => {
          history.push(getAuthReturnTarget('/me'));
        }, 1000);
      } else {
        const emailRedirectTo = `${window.location.origin}/auth/callback`;
        await registerWithEmail(email, password, captchaToken || undefined, emailRedirectTo);
        resetAttempts();
        showMsg(t.registerOk);
      }
    } catch (err) {
      if (mode === 'login') {
        if (isInvalidCredentialsError(err)) {
          const result = recordFailedAttempt();
          if (result.locked) {
            showMsg(getRateLimitMessage(result.remainingSeconds, lang), true);
            startCountdown(result.remainingSeconds);
          } else if (result.attemptsLeft <= 3) {
            showMsg(getAttemptsLeftMessage(result.attemptsLeft, lang), true);
          } else {
            showMsg(sanitizeAuthError(err, lang), true);
          }
        } else {
          showMsg(sanitizeAuthError(err, lang), true);
        }
      } else {
        showMsg(err.message || 'Error', true);
      }
    } finally {
      setLoading(false);
      // 每次提交后重置 captcha，要求重新验证
      setCaptchaToken('');
      captchaRef.current?.resetCaptcha();
    }
  };

  const handleSignOut = async () => {
    await signOut();
    showMsg(t.logoutOk);
  };

  const handleGitHubLogin = async () => {
    if (typeof window === 'undefined') return;

    setMsg(null);
    setOauthLoading(true);
    try {
      const redirectTo = `${window.location.origin}/auth/callback`;
      await loginWithGitHub(redirectTo);
      showMsg(t.oauthRedirecting);
      // 正常情况下会立即跳转到 GitHub，不会执行到 finally
    } catch (err) {
      showMsg(err?.message || t.oauthFailed, true);
      setOauthLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    const trimmedEmail = email.trim();
    setMsg(null);
    if (!trimmedEmail) {
      showMsg(t.resetEmailHint, true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      showMsg(t.emailInvalid, true);
      return;
    }
    if (hcaptchaSiteKey && !captchaToken) {
      showMsg(t.captchaRequired, true);
      return;
    }

    setResetLoading(true);
    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      await requestPasswordReset(trimmedEmail, redirectTo, captchaToken || undefined);
      showMsg(t.resetEmailSent);
    } catch (err) {
      showMsg(err?.message || t.resetEmailHint, true);
    } finally {
      setResetLoading(false);
      setCaptchaToken('');
      captchaRef.current?.resetCaptcha();
    }
  };

  // 未配置 Supabase → 显示提示
  if (!isConfigured) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaCloud className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>{t.title}</h2>
          </div>
          <div className={styles.cardBody}>
            <p>{t.notConfigured}</p>
            <Link to="/me" className={styles.backLink}>{t.backProgress}</Link>
          </div>
        </div>
      </div>
    );
  }

  // 认证状态尚未确认 → 显示加载中，避免闪烁
  if (!authReady) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaCloud className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>{t.title}</h2>
          </div>
          <div className={styles.cardBody} style={{ textAlign: 'center', padding: '2rem' }}>
            <FaSyncAlt className={styles.spin} style={{ fontSize: '1.5rem', color: 'var(--ifm-color-primary)' }} />
          </div>
        </div>
      </div>
    );
  }

  // 已登录 → 显示用户信息 + 跳转按钮
  if (isLoggedIn) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaCloud className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>{t.title}</h2>
          </div>
          <div className={styles.cardBody}>
            {msg && (
              <div className={`${styles.message} ${msg.isError ? styles.messageError : styles.messageSuccess}`}>
                {msg.isError
                  ? <FaExclamationTriangle className={styles.messageIcon} />
                  : <FaCheck className={styles.messageIcon} />
                }
                <span>{msg.text}</span>
              </div>
            )}
            <div className={styles.loggedInCard}>
              <FaUser style={{ fontSize: '1.5rem', color: 'var(--ifm-color-primary)' }} />
              <p>{t.alreadyIn}</p>
              <p className={styles.userEmail}>{user?.email}</p>
              <div className={styles.loggedInActions}>
                <Link
                  to="/me"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  <FaArrowRight /> {t.goProgress}
                </Link>
                <button
                  onClick={handleSignOut}
                  className={`${styles.btn} ${styles.btnDanger}`}
                >
                  <FaSignOutAlt /> {t.logout}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 未登录 → 登录/注册表单
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <FaCloud className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>{t.title}</h2>
          <span className={styles.cardSubtitle}>{t.subtitle}</span>
        </div>

        <div className={styles.cardBody}>
          {/* 消息提示 */}
          {(msg || (!msg && error)) && (
            <div className={`${styles.message} ${(msg?.isError || (!msg && error)) ? styles.messageError : styles.messageSuccess}`}>
              {(msg?.isError || (!msg && error))
                ? <FaExclamationTriangle className={styles.messageIcon} />
                : <FaCheck className={styles.messageIcon} />
              }
              <span>{msg?.text || error}</span>
            </div>
          )}

          {/* 登录 / 注册 切换 */}
          <div className={styles.authToggle}>
            <button
              className={`${styles.authTab} ${mode === 'login' ? styles.authTabActive : ''}`}
              onClick={() => { setMode('login'); setMsg(null); setPwChecks(null); }}
            >
              <FaSignInAlt /> {t.tabLogin}
            </button>
            <button
              className={`${styles.authTab} ${mode === 'register' ? styles.authTabActive : ''}`}
              onClick={() => { setMode('register'); setMsg(null); }}
            >
              <FaUserPlus /> {t.tabRegister}
            </button>
          </div>

          {/* 锁定倒计时提示 */}
          {lockCountdown > 0 && (
            <div className={`${styles.message} ${styles.messageError}`}>
              <FaExclamationTriangle className={styles.messageIcon} />
              <span>{getRateLimitMessage(lockCountdown, lang)}</span>
            </div>
          )}

          {mode === 'login' && (
            <>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnGithub}`}
                onClick={handleGitHubLogin}
                disabled={loading || oauthLoading}
              >
                {oauthLoading
                  ? <><FaSyncAlt className={styles.spin} /> {t.oauthProcessing}</>
                  : <><FaGithub /> {t.githubLoginBtn}</>
                }
              </button>

              <div className={styles.oauthDivider}>
                <span>{t.oauthOr}</span>
              </div>
            </>
          )}

          {/* 表单 */}
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <FaEnvelope className={styles.inputIcon} /> {t.email}
              </label>
              <input
                type="email"
                className={styles.input}
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <FaLock className={styles.inputIcon} /> {t.password}
              </label>
              <input
                type="password"
                className={styles.input}
                placeholder={mode === 'register' ? t.passwordPlaceholder : t.passwordPlaceholderLogin}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
                minLength={mode === 'register' ? 8 : 6}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
              {/* 注册时显示密码要求清单 */}
              {mode === 'register' && pwChecks && (
                <ul style={{ fontSize: '0.82rem', margin: '6px 0 0', paddingLeft: '0.2em', listStyle: 'none' }}>
                  {pwChecks.map((c, i) => (
                    <li key={i} style={{ color: c.passed ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-500)', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '1px 0' }}>
                      {c.passed ? <FaCheck style={{ fontSize: '0.7rem' }} /> : <span style={{ display: 'inline-block', width: '0.7rem', height: '0.7rem', borderRadius: '50%', border: '1.5px solid var(--ifm-color-emphasis-400)' }} />}
                      <span style={{ textDecoration: c.passed ? 'line-through' : 'none', opacity: c.passed ? 0.6 : 1 }}>{c.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {mode === 'login' && (
                <button
                  type="button"
                  className={styles.forgotButton}
                  onClick={handlePasswordReset}
                  disabled={loading || oauthLoading || resetLoading || (hcaptchaSiteKey && !captchaToken)}
                >
                  {resetLoading
                    ? <><FaSyncAlt className={styles.spin} /> {t.resetSending}</>
                    : <><FaKey /> {t.forgotPassword}</>
                  }
                </button>
              )}
            </div>

            {/* hCaptcha 人机验证 */}
            {hcaptchaSiteKey && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                <HCaptcha
                  ref={captchaRef}
                  sitekey={hcaptchaSiteKey}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken('')}
                  onError={() => setCaptchaToken('')}
                />
              </div>
            )}

            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
              disabled={loading || oauthLoading || lockCountdown > 0 || (hcaptchaSiteKey && !captchaToken)}
            >
              {loading
                ? <><FaSyncAlt className={styles.spin} /> {mode === 'login' ? t.logging : t.registering}</>
                : <>{mode === 'login' ? <><FaSignInAlt /> {t.loginBtn}</> : <><FaUserPlus /> {t.registerBtn}</>}</>
              }
            </button>
          </form>

          <Link to="/me" className={styles.backLink}>{t.backProgress}</Link>
        </div>
      </div>
    </div>
  );
}

// ── 页面导出 ────────────────────────────────────────────────

export default function LoginPage() {
  return (
    <Layout title="登录 / ログイン / Login">
      <NoIndex />
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <LoginPageContent />}
      </BrowserOnly>
    </Layout>
  );
}
