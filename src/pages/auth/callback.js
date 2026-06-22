import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import { FaCheck, FaCloud, FaExclamationTriangle, FaSyncAlt } from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from '../login.module.css';

function AuthCallbackContent() {
  const history = useHistory();
  const t = useUiText('authCallback');
  const { isConfigured, completeAuthCallback } = useSync();
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
          if (!disposed) history.replace('/me');
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
  const isSuccess = status === 'success';

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <FaCloud className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>{t.title}</h2>
          <span className={styles.cardSubtitle}>{t.subtitle}</span>
        </div>

        <div className={styles.cardBody}>
          <div className={`${styles.message} ${isError ? styles.messageError : styles.messageSuccess}`}>
            {status === 'loading' && <FaSyncAlt className={`${styles.messageIcon} ${styles.spin}`} />}
            {isSuccess && <FaCheck className={styles.messageIcon} />}
            {isError && <FaExclamationTriangle className={styles.messageIcon} />}
            <span>{message}</span>
          </div>

          {isError && (
            <Link to="/login" className={`${styles.btn} ${styles.btnPrimary}`}>
              {t.backLogin}
            </Link>
          )}
        </div>
      </div>
    </div>
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
