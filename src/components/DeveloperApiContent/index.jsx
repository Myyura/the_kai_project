import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  FaArrowRight,
  FaCheck,
  FaClipboard,
  FaCode,
  FaExclamationTriangle,
  FaKey,
  FaPlus,
  FaRedo,
  FaSignInAlt,
  FaTrashAlt,
} from 'react-icons/fa';
import { useAuth } from '@site/src/hooks/useAuth';
import { getLanguageLocale, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import { getSupabaseClient } from '@site/src/services/supabaseClient';
import { getVerifiedAccessToken } from '@site/src/services/authService';
import { getEdgeFunctionErrorMessage } from '@site/src/services/edgeFunctionErrors';
import styles from './styles.module.css';

function formatDate(value, language, fallback) {
  if (!value) return fallback;
  try {
    return new Date(value).toLocaleString(getLanguageLocale(language), {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return fallback;
  }
}

export function DeveloperApiContent({ embedded = false } = {}) {
  const language = useCurrentLanguage();
  const t = useUiText('developers');
  const { siteConfig } = useDocusaurusContext();
  const supabaseUrl = siteConfig?.customFields?.supabaseUrl || '';
  const apiBaseUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/kai-api` : '';
  const { isConfigured, user, isLoggedIn, authReady } = useAuth();

  const [keys, setKeys] = useState([]);
  const [accessRequest, setAccessRequest] = useState(null);
  const [requestForm, setRequestForm] = useState({
    applicantName: '',
    organization: '',
    contactEmail: '',
    website: '',
    intendedUse: '',
    commercialUse: false,
  });
  const [keyName, setKeyName] = useState('');
  const [newKey, setNewKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [revokingId, setRevokingId] = useState('');
  const [message, setMessage] = useState(null);

  const accessStatus = accessRequest?.status || 'none';
  const isApproved = accessStatus === 'approved';
  const canApply = !accessRequest || accessStatus === 'rejected';
  const maxActiveKeys = accessRequest?.maxActiveKeys || 3;
  const rateLimitPerMinute = accessRequest?.rateLimitPerMinute || 60;

  const activeCount = useMemo(
    () => keys.filter((key) => key.status === 'active').length,
    [keys],
  );
  const totalRequests = useMemo(
    () => keys.reduce((sum, key) => sum + Number(key.requestCount || 0), 0),
    [keys],
  );

  const invokeDeveloperFunction = useCallback(async (method, body) => {
    const supabase = getSupabaseClient();
    if (!supabase) throw new Error(t.notConfigured);

    const accessToken = await getVerifiedAccessToken();
    if (!accessToken) throw new Error(t.sessionMissing);

    const { data, error } = await supabase.functions.invoke('developer-api-keys', {
      method,
      body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error) {
      throw new Error(await getEdgeFunctionErrorMessage(error, t.loadFailed));
    }
    if (data?.error) throw new Error(data.error.message || data.error.code);
    return data;
  }, [t.notConfigured, t.sessionMissing]);

  const loadKeys = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    setMessage(null);
    try {
      const data = await invokeDeveloperFunction('GET');
      setKeys(data?.keys || []);
      setAccessRequest(data?.accessRequest || null);
      if (data?.accessRequest) {
        setRequestForm((current) => ({
          ...current,
          applicantName: data.accessRequest.applicantName || current.applicantName,
          organization: data.accessRequest.organization || current.organization,
          contactEmail: data.accessRequest.contactEmail || current.contactEmail || user?.email || '',
          website: data.accessRequest.website || current.website,
          intendedUse: data.accessRequest.intendedUse || current.intendedUse,
          commercialUse: Boolean(data.accessRequest.commercialUse),
        }));
      } else if (user?.email) {
        setRequestForm((current) => ({
          ...current,
          contactEmail: current.contactEmail || user.email,
        }));
      }
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.loadFailed });
    } finally {
      setLoading(false);
    }
  }, [invokeDeveloperFunction, isLoggedIn, t.loadFailed, user?.email]);

  useEffect(() => {
    if (authReady && isLoggedIn) {
      void loadKeys();
    }
  }, [authReady, isLoggedIn, loadKeys]);

  const handleCreate = async (event) => {
    event.preventDefault();
    if (!isApproved) {
      setMessage({ type: 'error', text: t.accessNotApproved });
      return;
    }
    setCreating(true);
    setMessage(null);
    setNewKey('');
    setCopied(false);
    try {
      const data = await invokeDeveloperFunction('POST', { name: keyName });
      setNewKey(data?.key || '');
      setKeyName('');
      await loadKeys();
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.createFailed });
    } finally {
      setCreating(false);
    }
  };

  const handleRequestChange = (field, value) => {
    setRequestForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleRequestAccess = async (event) => {
    event.preventDefault();
    setRequesting(true);
    setMessage(null);
    try {
      const data = await invokeDeveloperFunction('POST', {
        action: 'request_access',
        ...requestForm,
      });
      setAccessRequest(data?.accessRequest || null);
      setMessage({ type: 'success', text: t.requestSubmitted });
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.requestFailed });
    } finally {
      setRequesting(false);
    }
  };

  const handleRevoke = async (id) => {
    if (!window.confirm(t.confirmRevoke)) return;
    setRevokingId(id);
    setMessage(null);
    try {
      await invokeDeveloperFunction('DELETE', { id });
      await loadKeys();
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.revokeFailed });
    } finally {
      setRevokingId('');
    }
  };

  const handleCopy = async (value) => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const exampleKey = newKey || 'kai_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const curlExample = apiBaseUrl
    ? `curl -H "Authorization: Bearer ${exampleKey}" \\\n  "${apiBaseUrl}/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache&include=content"`
    : 'Supabase URL is not configured.';

  const renderAccessRequestPanel = () => {
    const statusClass = accessStatus === 'approved'
      ? styles.statusActive
      : accessStatus === 'rejected' || accessStatus === 'revoked'
        ? styles.statusRevoked
        : styles.statusPending;

    const statusTitle = accessStatus === 'pending'
      ? t.requestPendingTitle
      : accessStatus === 'rejected'
        ? t.requestRejectedTitle
        : accessStatus === 'revoked'
          ? t.requestRevokedTitle
          : t.accessRequestTitle;
    const statusDesc = accessStatus === 'pending'
      ? t.requestPendingDesc
      : accessStatus === 'rejected'
        ? t.requestRejectedDesc
        : accessStatus === 'revoked'
          ? t.requestRevokedDesc
          : t.accessRequestDesc;

    return (
      <section className={styles.panel}>
        <div className={styles.sectionHeader}>
          <h2>
            <FaKey /> {t.accessRequestTitle}
          </h2>
          {accessRequest && (
            <span className={`${styles.statusBadge} ${statusClass}`}>
              {accessStatus}
            </span>
          )}
        </div>
        <div className={styles.statusPanel}>
          <strong>{statusTitle}</strong>
          <p>{statusDesc}</p>
          {accessRequest?.reviewNote && (
            <p>
              <b>{t.reviewNote}: </b>
              {accessRequest.reviewNote}
            </p>
          )}
        </div>

        {canApply && (
          <form className={styles.requestForm} onSubmit={handleRequestAccess}>
            <div className={styles.formGrid}>
              <label>
                <span>{t.applicantName}</span>
                <input
                  value={requestForm.applicantName}
                  onChange={(event) => handleRequestChange('applicantName', event.target.value)}
                  placeholder={t.applicantNamePlaceholder}
                  maxLength={120}
                />
              </label>
              <label>
                <span>{t.contactEmail}</span>
                <input
                  type="email"
                  value={requestForm.contactEmail}
                  onChange={(event) => handleRequestChange('contactEmail', event.target.value)}
                  placeholder="you@example.com"
                  maxLength={180}
                />
              </label>
              <label>
                <span>{t.organization}</span>
                <input
                  value={requestForm.organization}
                  onChange={(event) => handleRequestChange('organization', event.target.value)}
                  placeholder={t.organizationPlaceholder}
                  maxLength={160}
                />
              </label>
              <label>
                <span>{t.website}</span>
                <input
                  type="url"
                  value={requestForm.website}
                  onChange={(event) => handleRequestChange('website', event.target.value)}
                  placeholder={t.websitePlaceholder}
                  maxLength={240}
                />
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={requestForm.commercialUse}
                  onChange={(event) => handleRequestChange('commercialUse', event.target.checked)}
                />
                <span>{t.commercialUse}</span>
              </label>
              <label className={styles.fullSpan}>
                <span>{t.intendedUse}</span>
                <textarea
                  value={requestForm.intendedUse}
                  onChange={(event) => handleRequestChange('intendedUse', event.target.value)}
                  placeholder={t.intendedUsePlaceholder}
                  maxLength={4000}
                  rows={5}
                />
              </label>
            </div>
            <button type="submit" className={styles.primaryButton} disabled={requesting}>
              {requesting ? <FaRedo className={styles.spin} /> : <FaArrowRight />}
              {requesting ? t.submittingRequest : t.submitRequest}
            </button>
          </form>
        )}
      </section>
    );
  };

  if (!isConfigured) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.noticePanel}>
          <FaExclamationTriangle className={styles.noticeIcon} />
          <h1>{t.apiTitle}</h1>
          <p>{t.notConfigured}</p>
        </section>
      </div>
    );
  }

  if (!authReady) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <div className={styles.loadingPanel}>
          <FaRedo className={styles.spin} />
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.noticePanel}>
          <FaKey className={styles.noticeIcon} />
          <h1>{t.apiTitle}</h1>
          <p>{t.loginRequired}</p>
          <Link to="/login" className={styles.primaryButton}>
            <FaSignInAlt /> {t.login}
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
      <header className={styles.header}>
        <div>
          <h1>{t.apiTitle}</h1>
          <p>{t.apiSubtitle}</p>
        </div>
        <button type="button" className={styles.secondaryButton} onClick={loadKeys} disabled={loading}>
          <FaRedo className={loading ? styles.spin : ''} /> {t.refresh}
        </button>
      </header>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span>{t.activeKeys}</span>
          <strong>{activeCount}/{maxActiveKeys}</strong>
        </div>
        <div className={styles.statItem}>
          <span>{t.totalRequests}</span>
          <strong>{totalRequests}</strong>
        </div>
        <div className={styles.statItem}>
          <span>{t.rateLimit}</span>
          <strong>{rateLimitPerMinute} {t.requestsPerMinute}</strong>
        </div>
      </div>

      {message && (
        <div className={`${styles.message} ${message.type === 'error' ? styles.messageError : styles.messageSuccess}`}>
          {message.type === 'error' ? <FaExclamationTriangle /> : <FaCheck />}
          <span>{message.text}</span>
        </div>
      )}

      {!isApproved && renderAccessRequestPanel()}

      {isApproved && (
        <section className={styles.panel}>
          <form className={styles.createForm} onSubmit={handleCreate}>
            <label>
              <span>{t.keyName}</span>
              <input
                value={keyName}
                onChange={(event) => setKeyName(event.target.value)}
                placeholder={t.keyNamePlaceholder}
                maxLength={80}
              />
            </label>
            <button type="submit" className={styles.primaryButton} disabled={creating || activeCount >= maxActiveKeys}>
              {creating ? <FaRedo className={styles.spin} /> : <FaPlus />}
              {creating ? t.creating : t.createKey}
            </button>
          </form>

          {newKey && (
            <div className={styles.newKeyBox}>
              <div>
                <strong>{t.newKeyTitle}</strong>
                <p>{t.newKeyNotice}</p>
              </div>
              <code>{newKey}</code>
              <button type="button" className={styles.secondaryButton} onClick={() => handleCopy(newKey)}>
                <FaClipboard /> {copied ? t.copied : t.copy}
              </button>
            </div>
          )}
        </section>
      )}

      <section className={styles.panel}>
        <div className={styles.sectionHeader}>
          <h2>
            <FaKey /> {t.keyList}
          </h2>
          <span>{user?.email}</span>
        </div>

        {keys.length === 0 ? (
          <p className={styles.emptyText}>{t.noKeys}</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.keyTable}>
              <thead>
                <tr>
                  <th>{t.name}</th>
                  <th>{t.prefix}</th>
                  <th>{t.status}</th>
                  <th>{t.requests}</th>
                  <th>{t.lastUsed}</th>
                  <th>{t.createdAt}</th>
                  <th>{t.actions}</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((key) => (
                  <tr key={key.id}>
                    <td>{key.name}</td>
                    <td><code>{key.keyPrefix}...</code></td>
                    <td>
                      <span className={`${styles.statusBadge} ${key.status === 'active' ? styles.statusActive : styles.statusRevoked}`}>
                        {key.status === 'active' ? t.active : t.revoked}
                      </span>
                    </td>
                    <td>{key.requestCount}</td>
                    <td>{formatDate(key.lastUsedAt, language, t.never)}</td>
                    <td>{formatDate(key.createdAt, language, t.never)}</td>
                    <td>
                      <button
                        type="button"
                        className={styles.dangerButton}
                        onClick={() => handleRevoke(key.id)}
                        disabled={key.status !== 'active' || revokingId === key.id}
                      >
                        {revokingId === key.id ? <FaRedo className={styles.spin} /> : <FaTrashAlt />}
                        {t.revoke}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className={styles.panel}>
        <div className={styles.sectionHeader}>
          <h2>
            <FaCode /> {t.apiExample}
          </h2>
        </div>
        <p className={styles.hint}>{t.docsHint}</p>
        <pre className={styles.codeBlock}><code>{curlExample}</code></pre>
      </section>
    </div>
  );
}
