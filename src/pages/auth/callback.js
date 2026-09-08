import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import { FaCloud, FaSyncAlt } from 'react-icons/fa';
import { useAuth } from '@site/src/hooks/useAuth';
import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import {getAuthReturnTarget} from '@site/src/services/authReturn';
import {AuthCard, AuthMessage} from '@site/src/components/AuthForm';
import styles from '@site/src/components/AuthForm/styles.module.css';

function AuthCallbackContent() {
  const history = useHistory();
  const t = useUiText('authCallback');
  const { isConfigured, completeAuthCallback } = useAuth();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState(t.processing);

  useEffect(() => {
    if (!isConfigured) {
      setStatus('error');
      setMessage(t.notConfigured);
      return undefined;
    }

    let disposed = false;
    const run = async () => {
      try {
        const result = await completeAuthCallback();
        if (disposed) return;

        if (result?.redirectToResetPassword) {
          window.location.replace(`/reset-password${window.location.search}${window.location.hash}`);
          return;
        }

        const successMessage = result?.type === 'signup'
          ? t.signupSuccess
          : t.loginSuccess;
        setStatus('success');
        setMessage(successMessage);
        window.setTimeout(() => {
          if (!disposed) history.replace(getAuthReturnTarget('/me'));
        }, 900);
      } catch (error) {
        if (disposed) return;
        setStatus('error');
        setMessage(error?.message || t.failed);
      }
    };

    void run();
    return () => {
      disposed = true;
    };
  }, [completeAuthCallback, history, isConfigured, t]);

  const isError = status === 'error';

  return (
    <AuthCard icon={FaCloud} title={t.title} subtitle={t.subtitle}>
      {status === 'loading' ? (
        <div className={styles.loading} role="status">
          <FaSyncAlt className={styles.spin} aria-hidden="true" />
          <span>{message}</span>
        </div>
      ) : (
        <AuthMessage text={message} isError={isError} />
      )}
      {isError && (
        <Link to="/login" className={`${styles.btn} ${styles.btnPrimary}`}>
          {t.backLogin}
        </Link>
      )}
    </AuthCard>
  );
}

export default function AuthCallbackPage() {
  return (
    <Layout title="Auth Callback">
      <NoIndex />
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <AuthCallbackContent />}
      </BrowserOnly>
    </Layout>
  );
}
