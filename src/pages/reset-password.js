import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { FaCheck, FaExclamationTriangle, FaKey, FaLock, FaSyncAlt } from 'react-icons/fa';
import { useStoredLanguage } from '@site/src/context/LanguageContext';
import { useSync } from '@site/src/hooks/useSync';
import {
  recoverPasswordSessionFromUrl,
  updateCurrentUserPassword,
} from '@site/src/services/syncService';
import { validatePassword } from '@site/src/services/authSecurity';
import styles from './reset-password.module.css';

const T = {
  zh: {
    pageTitle: '重置密码',
    title: '设置新密码',
    subtitle: '请输入一个新的登录密码',
    loading: '正在验证重置链接...',
    invalidLink: '重置链接无效或已过期，请重新发送重置邮件。',
    password: '新密码',
    passwordPlaceholder: '至少8位，含大小写字母和数字',
    confirmPassword: '确认新密码',
    confirmPlaceholder: '再次输入新密码',
    passwordRequired: '请输入新密码。',
    passwordWeak: '密码不符合要求。',
    passwordMismatch: '两次输入的密码不一致。',
    update: '更新密码',
    updating: '更新中...',
    success: '密码已更新，可以使用新密码登录。',
    backLogin: '返回登录',
  },
  ja: {
    pageTitle: 'パスワードリセット',
    title: '新しいパスワード',
    subtitle: '新しいログインパスワードを入力してください',
    loading: 'リセットリンクを確認しています...',
    invalidLink: 'リセットリンクが無効、または期限切れです。もう一度メールを送信してください。',
    password: '新しいパスワード',
    passwordPlaceholder: '8文字以上、大小英字と数字を含む',
    confirmPassword: '新しいパスワードの確認',
    confirmPlaceholder: 'もう一度入力',
    passwordRequired: '新しいパスワードを入力してください。',
    passwordWeak: 'パスワードが要件を満たしていません。',
    passwordMismatch: 'パスワードが一致しません。',
    update: 'パスワードを更新',
    updating: '更新中...',
    success: 'パスワードを更新しました。新しいパスワードでログインできます。',
    backLogin: 'ログインへ戻る',
  },
};

function ResetPasswordContent() {
  const [language] = useStoredLanguage();
  const lang = language === 'ja' ? 'ja' : 'zh';
  const t = T[lang];
  const { isConfigured } = useSync();

  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isConfigured) {
      setChecking(false);
      setReady(false);
      return;
    }

    let disposed = false;
    const run = async () => {
      setChecking(true);
      try {
        const data = await recoverPasswordSessionFromUrl();
        const session = data?.session ?? data?.data?.session ?? null;
        if (disposed) return;
        setReady(!!session);
        if (!session) {
          setMessage({ type: 'error', text: t.invalidLink });
        }
      } catch (error) {
        if (disposed) return;
        setReady(false);
        setMessage({ type: 'error', text: error?.message || t.invalidLink });
      } finally {
        if (!disposed) setChecking(false);
      }
    };

    void run();
    return () => {
      disposed = true;
    };
  }, [isConfigured, t.invalidLink]);

  const showError = (text) => setMessage({ type: 'error', text });
  const showSuccess = (text) => setMessage({ type: 'success', text });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);

    if (!password) {
      showError(t.passwordRequired);
      return;
    }
    if (!validatePassword(password, lang).valid) {
      showError(t.passwordWeak);
      return;
    }
    if (password !== confirmPassword) {
      showError(t.passwordMismatch);
      return;
    }

    setSubmitting(true);
    try {
      await updateCurrentUserPassword(password);
      setPassword('');
      setConfirmPassword('');
      showSuccess(t.success);
    } catch (error) {
      showError(error?.message || t.invalidLink);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <FaKey className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>{t.title}</h2>
          <span className={styles.cardSubtitle}>{t.subtitle}</span>
        </div>

        <div className={styles.cardBody}>
          {checking && (
            <div className={styles.loading}>
              <FaSyncAlt className={styles.spin} />
              <span>{t.loading}</span>
            </div>
          )}

          {message && (
            <div className={`${styles.message} ${message.type === 'error' ? styles.messageError : styles.messageSuccess}`}>
              {message.type === 'error'
                ? <FaExclamationTriangle className={styles.messageIcon} />
                : <FaCheck className={styles.messageIcon} />
              }
              <span>{message.text}</span>
            </div>
          )}

          {ready && (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  <FaLock className={styles.inputIcon} /> {t.password}
                </label>
                <input
                  type="password"
                  className={styles.input}
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  <FaLock className={styles.inputIcon} /> {t.confirmPassword}
                </label>
                <input
                  type="password"
                  className={styles.input}
                  placeholder={t.confirmPlaceholder}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
                disabled={submitting}
              >
                {submitting
                  ? <><FaSyncAlt className={styles.spin} /> {t.updating}</>
                  : <><FaKey /> {t.update}</>
                }
              </button>
            </form>
          )}

          <Link to="/login" className={styles.backLink}>{t.backLogin}</Link>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Layout title={T.zh.pageTitle}>
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <ResetPasswordContent />}
      </BrowserOnly>
    </Layout>
  );
}
