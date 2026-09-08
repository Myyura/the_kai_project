import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import { FaKey, FaLock, FaSyncAlt } from 'react-icons/fa';
import { normalizeLanguage, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import NoIndex from '@site/src/components/NoIndex';
import { useAuth } from '@site/src/hooks/useAuth';
import {
  recoverPasswordSessionFromUrl,
  signOut as signOutCurrentSession,
  updateCurrentUserPassword,
} from '@site/src/services/authService';
import { validatePassword } from '@site/src/services/authSecurity';
import {AuthCard, AuthField, AuthMessage, AuthPasswordRequirements} from '@site/src/components/AuthForm';
import styles from '@site/src/components/AuthForm/styles.module.css';

function ResetPasswordContent() {
  const history = useHistory();
  const language = useCurrentLanguage();
  const lang = normalizeLanguage(language);
  const t = useUiText('resetPassword');
  const authT = useUiText('login');
  const { isConfigured } = useAuth();

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
    <AuthCard icon={FaKey} title={t.title} subtitle={t.subtitle}>
      {checking && (
        <div className={styles.loading} role="status">
          <FaSyncAlt className={styles.spin} aria-hidden="true" />
          <span>{t.loading}</span>
        </div>
      )}
      <AuthMessage text={message?.text || (!isConfigured ? authT.notConfigured : '')} isError={!isConfigured || message?.type === 'error'} />

      {ready && !completed && (
        <form onSubmit={handleSubmit} noValidate aria-busy={submitting}>
          <AuthField
            id="reset-password"
            label={t.password}
            icon={FaLock}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
            aria-describedby="reset-password-rules"
          >
            <AuthPasswordRequirements id="reset-password-rules" password={password} />
          </AuthField>
          <AuthField
            id="reset-password-confirm"
            label={t.confirmPassword}
            icon={FaLock}
            type="password"
            placeholder={t.confirmPlaceholder}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
          />
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
    </AuthCard>
  );
}

export default function ResetPasswordPage() {
  return (
    <Layout title="重置密码 / Reset Password">
      <NoIndex />
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <ResetPasswordContent />}
      </BrowserOnly>
    </Layout>
  );
}
