import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
  FaCloud, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus,
  FaSyncAlt, FaUser, FaGithub,
  FaSignOutAlt, FaArrowRight, FaKey,
} from 'react-icons/fa';
import { useAuth } from '@site/src/hooks/useAuth';
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
import {AuthCard, AuthField, AuthMessage, AuthPasswordRequirements} from '@site/src/components/AuthForm';
import authStyles from '@site/src/components/AuthForm/styles.module.css';
import loginStyles from './login.module.css';

const styles = {...authStyles, ...loginStyles};

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
  } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { text, isError }
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
    try {
      await signOut();
      showMsg(t.logoutOk);
    } catch (err) {
      showMsg(sanitizeAuthError(err, lang), true);
    }
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

  if (!isConfigured) {
    return (
      <AuthCard icon={FaCloud} title={t.title}>
        <p>{t.notConfigured}</p>
        <Link to="/me" className={styles.backLink}>{t.backProgress}</Link>
      </AuthCard>
    );
  }

  if (!authReady) {
    return (
      <AuthCard icon={FaCloud} title={t.title}>
        <div className={styles.loading} role="status" aria-label={t.logging}>
          <FaSyncAlt className={styles.spin} aria-hidden="true" />
        </div>
      </AuthCard>
    );
  }

  if (isLoggedIn) {
    return (
      <AuthCard icon={FaCloud} title={t.title}>
        <AuthMessage {...msg} />
        <div className={styles.loggedInCard}>
          <FaUser className={styles.userIcon} aria-hidden="true" />
          <p>{t.alreadyIn}</p>
          <p className={styles.userEmail}>{user?.email}</p>
          <div className={styles.loggedInActions}>
            <Link to="/me" className={`${styles.btn} ${styles.btnPrimary}`}>
              <FaArrowRight aria-hidden="true" /> {t.goProgress}
            </Link>
            <button onClick={handleSignOut} className={`${styles.btn} ${styles.btnDanger}`}>
              <FaSignOutAlt aria-hidden="true" /> {t.logout}
            </button>
          </div>
        </div>
      </AuthCard>
    );
  }

  const authMessage = msg || (error ? {text: error, isError: true} : null);
  const changeMode = (nextMode) => {
    setMode(nextMode);
    setMsg(null);
  };
  const handleModeKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextMode = event.key === 'Home' ? 'login'
      : event.key === 'End' ? 'register'
        : mode === 'login' ? 'register' : 'login';
    changeMode(nextMode);
    document.getElementById(`auth-tab-${nextMode}`)?.focus();
  };

  return (
    <AuthCard icon={FaCloud} title={mode === 'login' ? t.tabLogin : t.tabRegister} subtitle={t.subtitle}>
      <div className={styles.authToggle} role="tablist" aria-label={t.title}>
        {[
          {id: 'login', label: t.tabLogin, Icon: FaSignInAlt},
          {id: 'register', label: t.tabRegister, Icon: FaUserPlus},
        ].map(({id, label, Icon}) => (
          <button
            key={id}
            id={`auth-tab-${id}`}
            type="button"
            role="tab"
            aria-selected={mode === id}
            aria-controls="auth-panel"
            tabIndex={mode === id ? 0 : -1}
            className={`${styles.authTab} ${mode === id ? styles.authTabActive : ''}`}
            onClick={() => changeMode(id)}
            onKeyDown={handleModeKeyDown}
          >
            <Icon aria-hidden="true" /> {label}
          </button>
        ))}
      </div>

      <div id="auth-panel" role="tabpanel" aria-labelledby={`auth-tab-${mode}`}>
        <AuthMessage {...authMessage} />
        {lockCountdown > 0 && (
          <AuthMessage text={getRateLimitMessage(lockCountdown, lang)} isError announce={false} />
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
            <div className={styles.oauthDivider}><span>{t.oauthOr}</span></div>
          </>
        )}

        <form onSubmit={handleSubmit} noValidate aria-busy={loading}>
          <AuthField
            id="auth-email"
            label={t.email}
            icon={FaEnvelope}
            type="email"
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
          />
          <AuthField
            id="auth-password"
            label={t.password}
            icon={FaLock}
            type="password"
            placeholder={t.passwordPlaceholderLogin}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={mode === 'register' ? 8 : 6}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            aria-describedby={mode === 'register' ? 'auth-password-rules' : undefined}
          >
            {mode === 'register' && <AuthPasswordRequirements id="auth-password-rules" password={password} />}
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
          </AuthField>

          {hcaptchaSiteKey && (
            <div className={styles.captcha}>
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
      </div>
      <Link to="/me" className={styles.backLink}>{t.backProgress}</Link>
    </AuthCard>
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
