import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import { FaCheck, FaExclamationTriangle, FaKey, FaLock, FaSyncAlt } from 'react-icons/fa';
import { normalizeLanguage, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import { useSync } from '@site/src/hooks/useSync';
import {
  recoverPasswordSessionFromUrl,
  signOut as signOutCurrentSession,
  updateCurrentUserPassword,
} from '@site/src/services/syncService';
import { validatePassword } from '@site/src/services/authSecurity';
import styles from './reset-password.module.css';

function ResetPasswordContent() {
  const history = useHistory();
  const language = useCurrentLanguage();
  const lang = normalizeLanguage(language);
  const t = useUiText('resetPassword');
  const { isConfigured } = useSync();

  const [ready, setReady] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const redirectTimerRef = useRef(null);

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

  useEffect(() => () => {
    if (redirectTimerRef.current) window.clearTimeout(redirectTimerRef.current);
  }, []);

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
      setReady(false);
      setCompleted(true);
      try {
        await signOutCurrentSession();
      } catch {}
      showSuccess(t.success);
      redirectTimerRef.current = window.setTimeout(() => {
        history.replace('/login');
      }, 1600);
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

          {ready && !completed && (
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
    <Layout title="重置密码 / Reset Password">
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <ResetPasswordContent />}
      </BrowserOnly>
    </Layout>
  );
}
