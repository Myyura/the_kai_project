import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
  FaCloud, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus,
  FaCheck, FaExclamationTriangle, FaSyncAlt, FaUser,
  FaSignOutAlt, FaArrowRight,
} from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import { useStoredLanguage } from '@site/src/context/LanguageContext';
import {
  checkRateLimit,
  recordFailedAttempt,
  resetAttempts,
  sanitizeAuthError,
  getRateLimitMessage,
  getAttemptsLeftMessage,
  validatePassword,
} from '@site/src/services/authSecurity';
import styles from './login.module.css';

// ── 翻译 ────────────────────────────────────────────────────

const T = {
  zh: {
    pageTitle: '登录 - 云同步',
    title: '云同步',
    subtitle: '登录后可跨设备同步你的做题进度和笔记',
    tabLogin: '登录',
    tabRegister: '注册',
    email: '邮箱',
    emailPlaceholder: 'you@example.com',
    password: '密码',
    passwordPlaceholder: '至少8位，含大小写字母和数字',
    passwordPlaceholderLogin: '请输入密码',
    loginBtn: '登录',
    registerBtn: '注册',
    logging: '登录中...',
    registering: '注册中...',
    loginOk: '登录成功！正在跳转进度页...',
    registerOk: '注册成功！请查收验证邮件，验证后即可登录。',
    alreadyIn: '你已登录',
    goProgress: '前往进度页',
    logout: '退出登录',
    logoutOk: '已退出登录。',
    backProgress: '← 返回进度页',
    notConfigured: '云同步尚未配置，请联系站长。',
  },
  ja: {
    pageTitle: 'ログイン - クラウド同期',
    title: 'クラウド同期',
    subtitle: 'ログインすると、デバイス間で進捗とメモを同期できます',
    tabLogin: 'ログイン',
    tabRegister: '新規登録',
    email: 'メール',
    emailPlaceholder: 'you@example.com',
    password: 'パスワード',
    passwordPlaceholder: '8文字以上、大小英字と数字を含む',
    passwordPlaceholderLogin: 'パスワードを入力',
    loginBtn: 'ログイン',
    registerBtn: '登録',
    logging: 'ログイン中...',
    registering: '登録中...',
    loginOk: 'ログイン成功！進捗ページへ移動中...',
    registerOk: '登録成功！確認メールをご確認ください。',
    alreadyIn: 'ログイン済み',
    goProgress: '進捗ページへ',
    logout: 'ログアウト',
    logoutOk: 'ログアウトしました。',
    backProgress: '← 進捗ページに戻る',
    notConfigured: 'クラウド同期が設定されていません。管理者にお問い合わせください。',
  },
};

// ── 主组件 ──────────────────────────────────────────────────

function LoginPageContent() {
  const language = useStoredLanguage();
  const lang = language === 'ja' ? 'ja' : 'zh';
  const t = language === 'ja' ? T.ja : T.zh;
  const { siteConfig } = useDocusaurusContext();
  const hcaptchaSiteKey = siteConfig?.customFields?.hcaptchaSiteKey || '';

  const {
    isConfigured, user, isLoggedIn, error,
    loginWithEmail, registerWithEmail, signOut,
  } = useSync();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { text, isError }
  const [pwErrors, setPwErrors] = useState([]);
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
  const handlePasswordChange = (val) => {
    setPassword(val);
    if (mode === 'register' && val.length > 0) {
      const { errors } = validatePassword(val, lang);
      setPwErrors(errors);
    } else {
      setPwErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    // hCaptcha 验证检查
    if (hcaptchaSiteKey && !captchaToken) {
      showMsg(lang === 'ja' ? 'CAPTCHA認証を完了してください。' : '请先完成人机验证。', true);
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
      const { valid, errors } = validatePassword(password, lang);
      if (!valid) {
        setPwErrors(errors);
        showMsg(errors.join('；'), true);
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
          window.location.href = '/progress';
        }, 1000);
      } else {
        await registerWithEmail(email, password, captchaToken || undefined);
        resetAttempts();
        showMsg(t.registerOk);
      }
    } catch (err) {
      if (mode === 'login') {
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
            <Link to="/progress" className={styles.backLink}>{t.backProgress}</Link>
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
                  to="/progress"
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
          {(msg || error) && (
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
              onClick={() => { setMode('login'); setMsg(null); setPwErrors([]); }}
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

          {/* 表单 */}
          <form onSubmit={handleSubmit}>
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
              {/* 注册时显示密码强度提示 */}
              {mode === 'register' && pwErrors.length > 0 && (
                <ul style={{ color: 'var(--ifm-color-danger)', fontSize: '0.85rem', margin: '4px 0 0', paddingLeft: '1.2em' }}>
                  {pwErrors.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
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
              disabled={loading || lockCountdown > 0 || (hcaptchaSiteKey && !captchaToken)}
            >
              {loading
                ? <><FaSyncAlt className={styles.spin} /> {mode === 'login' ? t.logging : t.registering}</>
                : <>{mode === 'login' ? <><FaSignInAlt /> {t.loginBtn}</> : <><FaUserPlus /> {t.registerBtn}</>}</>
              }
            </button>
          </form>

          <Link to="/progress" className={styles.backLink}>{t.backProgress}</Link>
        </div>
      </div>
    </div>
  );
}

// ── 页面导出 ────────────────────────────────────────────────

export default function LoginPage() {
  return (
    <Layout title="登录">
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <LoginPageContent />}
      </BrowserOnly>
    </Layout>
  );
}
