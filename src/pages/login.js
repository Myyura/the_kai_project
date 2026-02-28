import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {
  FaCloud, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus,
  FaCheck, FaExclamationTriangle, FaSyncAlt, FaUser,
  FaSignOutAlt, FaArrowRight,
} from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import { useStoredLanguage } from '@site/src/context/LanguageContext';
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
    passwordPlaceholder: '至少 6 位',
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
    passwordPlaceholder: '6文字以上',
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
  const t = language === 'ja' ? T.ja : T.zh;

  const {
    isConfigured, user, isLoggedIn, error,
    loginWithEmail, registerWithEmail, signOut,
  } = useSync();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { text, isError }

  const showMsg = (text, isError = false) => {
    setMsg({ text, isError });
    if (!isError) {
      // 成功消息 5 秒后清除
      setTimeout(() => setMsg(null), 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    try {
      if (mode === 'login') {
        await loginWithEmail(email, password);
        showMsg(t.loginOk);
        // 登录成功后跳转进度页
        setTimeout(() => {
          window.location.href = '/progress';
        }, 1000);
      } else {
        await registerWithEmail(email, password);
        showMsg(t.registerOk);
      }
    } catch (err) {
      showMsg(err.message || 'Error', true);
    } finally {
      setLoading(false);
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
              onClick={() => { setMode('login'); setMsg(null); }}
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
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
              disabled={loading}
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
