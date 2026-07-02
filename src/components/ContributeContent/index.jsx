import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import {
  FaCheck,
  FaClipboardList,
  FaCodeBranch,
  FaEdit,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaRedo,
  FaSignInAlt,
} from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import { getLanguageLocale, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import { getSupabaseClient } from '@site/src/services/supabaseClient';
import { getVerifiedAccessToken } from '@site/src/services/syncService';
import { getEdgeFunctionErrorMessage } from '@site/src/services/edgeFunctionErrors';
import { universities } from '@site/src/data/universities';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import styles from './styles.module.css';

const CUSTOM_OPTION = '__custom__';
const CLA_URL = 'https://github.com/Myyura/the_kai_project/blob/main/CLA.md';
const defaultUniversityId = universities[0]?.id || '';
const defaultDepartmentId = universities[0]?.departments?.[0]?.id || '';

const initialForm = {
  submissionType: 'new_solution',
  title: '',
  sidebarLabel: '',
  authorName: '',
  universityId: defaultUniversityId,
  customUniversityId: '',
  departmentId: defaultDepartmentId,
  customDepartmentId: '',
  programId: '',
  customProgramId: '',
  year: '',
  fileSlug: '',
  targetDocId: '',
  targetTitle: '',
  tagsText: '',
  descriptionMarkdown: '',
  kaiMarkdown: '',
  correctionMarkdown: '',
  claAccepted: false,
};

function splitTags(value) {
  return String(value || '')
    .split(/[\n,]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function resolveOptionValue(value, customValue) {
  return value === CUSTOM_OPTION ? String(customValue || '').trim() : value;
}

function formatDate(value, language) {
  if (!value) return '';
  try {
    return new Date(value).toLocaleString(getLanguageLocale(language), {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return value;
  }
}

function statusClass(status) {
  if (status === 'issue_created' || status === 'converted') return styles.statusIssue;
  if (status === 'failed') return styles.statusFailed;
  return styles.statusPending;
}

function statusText(status, t) {
  return t.statusLabels?.[status] || status || t.statusLabels?.unknown || 'Unknown';
}

export function ContributeContent({ embedded = false } = {}) {
  const language = useCurrentLanguage();
  const t = useUiText('contributions');
  const { isConfigured, isLoggedIn, authReady, user } = useSync();
  const [form, setForm] = useState(initialForm);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastIssueUrl, setLastIssueUrl] = useState('');
  const isCorrectionMode = form.submissionType === 'correction';

  const selectedUniversity = useMemo(
    () => universities.find((item) => item.id === form.universityId),
    [form.universityId],
  );

  const selectedDepartments = selectedUniversity?.departments || [];
  const selectedDepartment = useMemo(
    () => selectedDepartments.find((item) => item.id === form.departmentId),
    [form.departmentId, selectedDepartments],
  );
  const programOptions = selectedDepartment?.programs || [];

  const tagOptions = useMemo(() => {
    const tags = [
      ...Object.keys(tagTaxonomy.subsubjects || {}),
      ...Object.keys(tagTaxonomy.topics || {}),
      ...Object.keys(tagTaxonomy.schoolTags || {}),
    ];
    return Array.from(new Set(tags)).sort();
  }, []);

  const invokeSubmissionFunction = useCallback(async (method, body) => {
    const supabase = getSupabaseClient();
    if (!supabase) throw new Error(t.notConfigured);

    const accessToken = await getVerifiedAccessToken();
    if (!accessToken) throw new Error(t.sessionMissing);

    const { data, error } = await supabase.functions.invoke('content-submissions', {
      method,
      body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error) {
      throw new Error(await getEdgeFunctionErrorMessage(error, t.requestFailed));
    }
    if (data?.error) throw new Error(data.error.message || data.error.code);
    return data;
  }, [t.notConfigured, t.requestFailed, t.sessionMissing]);

  const loadSubmissions = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    try {
      const data = await invokeSubmissionFunction('GET');
      setSubmissions(data?.submissions || []);
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.loadFailed });
    } finally {
      setLoading(false);
    }
  }, [invokeSubmissionFunction, isLoggedIn, t.loadFailed]);

  useEffect(() => {
    if (authReady && isLoggedIn) {
      void loadSubmissions();
    }
  }, [authReady, isLoggedIn, loadSubmissions]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const docId = params.get('docId');
    const title = params.get('title');
    if (docId) {
      setForm((current) => ({
        ...current,
        submissionType: 'correction',
        targetDocId: docId || current.targetDocId,
        targetTitle: title || current.targetTitle,
      }));
    } else if (type === 'correction') {
      setMessage({ type: 'error', text: t.enterFromDocPage });
    }
  }, [t.enterFromDocPage]);

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleUniversityChange = (universityId) => {
    if (universityId === CUSTOM_OPTION) {
      setForm((current) => ({
        ...current,
        universityId,
        customUniversityId: '',
        departmentId: CUSTOM_OPTION,
        customDepartmentId: '',
        programId: '',
        customProgramId: '',
      }));
      return;
    }

    const nextUniversity = universities.find((item) => item.id === universityId);
    setForm((current) => ({
      ...current,
      universityId,
      customUniversityId: '',
      departmentId: nextUniversity?.departments?.[0]?.id || '',
      customDepartmentId: '',
      programId: '',
      customProgramId: '',
    }));
  };

  const handleDepartmentChange = (departmentId) => {
    setForm((current) => ({
      ...current,
      departmentId,
      customDepartmentId: departmentId === CUSTOM_OPTION ? current.customDepartmentId : '',
      programId: '',
      customProgramId: '',
    }));
  };

  const handleProgramChange = (programId) => {
    setForm((current) => ({
      ...current,
      programId,
      customProgramId: programId === CUSTOM_OPTION ? current.customProgramId : '',
    }));
  };

  const validateForm = () => {
    const universityId = resolveOptionValue(form.universityId, form.customUniversityId);
    const departmentId = resolveOptionValue(form.departmentId, form.customDepartmentId);
    const programId = resolveOptionValue(form.programId, form.customProgramId);
    if (!form.authorName.trim()) return t.authorRequired;
    if (!form.claAccepted) return t.claRequired;
    if (form.submissionType === 'new_solution') {
      if (!form.title.trim()) return t.titleRequired;
      if (!universityId || !departmentId || !form.year) return t.metaRequired;
      if (form.programId === CUSTOM_OPTION && !programId) return t.customProgramRequired;
      if (!form.descriptionMarkdown.trim() && !form.kaiMarkdown.trim()) return t.markdownRequired;
    }
    if (form.submissionType === 'correction') {
      if (!form.targetDocId.trim()) return t.targetRequired;
      if (!form.correctionMarkdown.trim()) return t.correctionRequired;
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    setLastIssueUrl('');

    const formError = validateForm();
    if (formError) {
      setMessage({ type: 'error', text: formError });
      return;
    }

    setSubmitting(true);
    try {
      const universityId = resolveOptionValue(form.universityId, form.customUniversityId);
      const departmentId = resolveOptionValue(form.departmentId, form.customDepartmentId);
      const programId = resolveOptionValue(form.programId, form.customProgramId);
      const data = await invokeSubmissionFunction('POST', {
        submissionType: form.submissionType,
        title: form.title,
        sidebarLabel: form.sidebarLabel,
        authorName: form.authorName,
        universityId,
        departmentId,
        programId,
        year: form.year,
        fileSlug: form.fileSlug,
        targetDocId: form.targetDocId,
        targetTitle: form.targetTitle,
        tags: splitTags(form.tagsText),
        descriptionMarkdown: form.descriptionMarkdown,
        kaiMarkdown: form.kaiMarkdown,
        correctionMarkdown: form.correctionMarkdown,
        claAccepted: form.claAccepted,
      });

      const issueUrl = data?.submission?.issueUrl || '';
      setLastIssueUrl(issueUrl);
      setMessage({ type: 'success', text: t.submitSuccess });
      setForm((current) => ({
        ...initialForm,
        submissionType: current.submissionType,
        targetDocId: current.submissionType === 'correction' ? current.targetDocId : '',
        targetTitle: current.submissionType === 'correction' ? current.targetTitle : '',
        authorName: current.authorName,
      }));
      await loadSubmissions();
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.submitFailed });
    } finally {
      setSubmitting(false);
    }
  };

  if (!authReady) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <div className={styles.loadingPanel}>
          <FaRedo className={styles.spin} />
        </div>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.noticePanel}>
          <FaExclamationTriangle className={styles.noticeIcon} />
          <h1>{t.pageTitle}</h1>
          <p>{t.notConfigured}</p>
        </section>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.noticePanel}>
          <FaClipboardList className={styles.noticeIcon} />
          <h1>{t.pageTitle}</h1>
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
          <h1>{isCorrectionMode ? t.correctionTitle : t.pageTitle}</h1>
          <p>
            {isCorrectionMode
              ? t.headerCorrection
              : t.headerNew}
          </p>
        </div>
        <button type="button" className={styles.secondaryButton} onClick={loadSubmissions} disabled={loading}>
          <FaRedo className={loading ? styles.spin : ''} /> {t.refreshRecords}
        </button>
      </header>

      {message && (
        <div className={`${styles.message} ${message.type === 'error' ? styles.messageError : styles.messageSuccess}`}>
          {message.type === 'error' ? <FaExclamationTriangle /> : <FaCheck />}
          <span>{message.text}</span>
          {lastIssueUrl && (
            <a href={lastIssueUrl} target="_blank" rel="noreferrer">
              {t.viewIssue} <FaExternalLinkAlt />
            </a>
          )}
        </div>
      )}

      <div className={styles.layoutGrid}>
        <form className={styles.panel} onSubmit={handleSubmit}>
          <div className={styles.modeNotice}>
            {isCorrectionMode ? <FaEdit /> : <FaPaperPlane />}
            <div>
              <strong>{isCorrectionMode ? t.modeCorrection : t.modeNew}</strong>
              <span>
                {isCorrectionMode
                  ? t.modeCorrectionHint
                  : t.modeNewHint}
              </span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <label>
              <span>{t.author}</span>
              <input
                value={form.authorName}
                onChange={(event) => updateForm('authorName', event.target.value)}
                placeholder={t.authorPlaceholder}
                maxLength={120}
              />
              <small className={styles.smallHint}>{t.authorHint}</small>
            </label>

            {isCorrectionMode ? (
              <div className={`${styles.targetSummary} ${styles.fullSpan}`}>
                <span>{t.targetSolution}</span>
                <strong>{form.targetTitle || form.targetDocId || t.unknownTarget}</strong>
                {form.targetDocId && <small>{form.targetDocId}</small>}
              </div>
            ) : (
              <label>
                <span>{t.year}</span>
                <input
                  type="number"
                  min="1900"
                  max="2100"
                  value={form.year}
                  onChange={(event) => updateForm('year', event.target.value)}
                  placeholder="2025"
                />
              </label>
            )}

            {!isCorrectionMode && (
              <>
                <label>
                  <span>{t.university}</span>
                  <select value={form.universityId} onChange={(event) => handleUniversityChange(event.target.value)}>
                    {universities.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>{t.customOption}</option>
                  </select>
                  {form.universityId === CUSTOM_OPTION && (
                    <input
                      value={form.customUniversityId}
                      onChange={(event) => updateForm('customUniversityId', event.target.value)}
                      placeholder={t.customUniversityPlaceholder}
                      maxLength={120}
                    />
                  )}
                  <small className={styles.smallHint}>{t.universityHint}</small>
                </label>
                <label>
                  <span>{t.department}</span>
                  <select value={form.departmentId} onChange={(event) => handleDepartmentChange(event.target.value)}>
                    {selectedDepartments.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>{t.customOption}</option>
                  </select>
                  {form.departmentId === CUSTOM_OPTION && (
                    <input
                      value={form.customDepartmentId}
                      onChange={(event) => updateForm('customDepartmentId', event.target.value)}
                      placeholder={t.customDepartmentPlaceholder}
                      maxLength={120}
                    />
                  )}
                  <small className={styles.smallHint}>{t.departmentHint}</small>
                </label>
                <label>
                  <span>{t.program}</span>
                  <select value={form.programId} onChange={(event) => handleProgramChange(event.target.value)}>
                    <option value="">{t.programNone}</option>
                    {programOptions.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>{t.customOption}</option>
                  </select>
                  {form.programId === CUSTOM_OPTION && (
                    <input
                      value={form.customProgramId}
                      onChange={(event) => updateForm('customProgramId', event.target.value)}
                      placeholder={t.customProgramPlaceholder}
                      maxLength={160}
                    />
                  )}
                  <small className={styles.smallHint}>{t.programHint}</small>
                </label>
                <label>
                  <span>{t.fileSlug}</span>
                  <input
                    value={form.fileSlug}
                    onChange={(event) => updateForm('fileSlug', event.target.value)}
                    placeholder={t.fileSlugPlaceholder}
                    maxLength={120}
                  />
                  <small className={styles.smallHint}>{t.fileSlugHint}</small>
                </label>
                <label>
                  <span>{t.title}</span>
                  <input
                    value={form.title}
                    onChange={(event) => updateForm('title', event.target.value)}
                    placeholder={t.titlePlaceholder}
                    maxLength={180}
                  />
                </label>
                <label>
                  <span>{t.sidebarLabel}</span>
                  <input
                    value={form.sidebarLabel}
                    onChange={(event) => updateForm('sidebarLabel', event.target.value)}
                    placeholder={t.sidebarPlaceholder}
                    maxLength={120}
                  />
                </label>
                <label className={styles.fullSpan}>
                  <span>{t.tags}</span>
                  <input
                    list="submission-tag-options"
                    value={form.tagsText}
                    onChange={(event) => updateForm('tagsText', event.target.value)}
                    placeholder={t.tagsPlaceholder}
                  />
                  <small className={styles.smallHint}>{t.tagsHint}</small>
                </label>
              </>
            )}

            {!isCorrectionMode ? (
              <>
                <label className={styles.fullSpan}>
                  <span>{t.descriptionLabel}</span>
                  <textarea
                    value={form.descriptionMarkdown}
                    onChange={(event) => updateForm('descriptionMarkdown', event.target.value)}
                    rows={9}
                    placeholder={t.descriptionPlaceholder}
                  />
                </label>
                <label className={styles.fullSpan}>
                  <span>{t.kaiLabel}</span>
                  <textarea
                    value={form.kaiMarkdown}
                    onChange={(event) => updateForm('kaiMarkdown', event.target.value)}
                    rows={12}
                    placeholder={t.kaiPlaceholder}
                  />
                </label>
              </>
            ) : (
              <label className={styles.fullSpan}>
                <span>{t.correctionLabel}</span>
                <textarea
                  value={form.correctionMarkdown}
                  onChange={(event) => updateForm('correctionMarkdown', event.target.value)}
                  rows={12}
                  placeholder={t.correctionPlaceholder}
                />
              </label>
            )}
          </div>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={form.claAccepted}
              onChange={(event) => updateForm('claAccepted', event.target.checked)}
            />
            <span>
              {t.claTextPrefix}
              <a
                className={styles.inlineTextLink}
                href={CLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                {t.claLinkText}
                <FaExternalLinkAlt className={styles.inlineLinkIcon} aria-hidden="true" />
              </a>
              {t.claTextSuffix}
              <br />
              <small className={styles.smallHint}>{t.claHint}</small>
            </span>
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryButton} disabled={submitting}>
              {submitting ? <FaRedo className={styles.spin} /> : <FaPaperPlane />}
              {submitting ? t.submitting : t.createIssue}
            </button>
            <span className={styles.hint}>{t.currentAccount(user?.email)}</span>
          </div>
          <datalist id="submission-tag-options">
            {tagOptions.map((tag) => <option key={tag} value={tag} />)}
          </datalist>
        </form>

        <aside className={styles.panel}>
          <div className={styles.sectionHeader}>
            <h2><FaCodeBranch /> {t.recentSubmissions}</h2>
          </div>
          {submissions.length === 0 ? (
            <p className={styles.emptyText}>{t.noSubmissions}</p>
          ) : (
            <div className={styles.submissionList}>
              {submissions.map((item) => (
                <div key={item.id} className={styles.submissionItem}>
                  <strong>{item.title || item.targetDocId || item.id}</strong>
                  <div className={styles.submissionMeta}>
                    <span className={`${styles.statusBadge} ${statusClass(item.status)}`}>{statusText(item.status, t)}</span>
                    <span>{item.submissionType === 'new_solution' ? t.modeNew : t.modeCorrection}</span>
                    <span>{formatDate(item.createdAt, language)}</span>
                  </div>
                  <div className={styles.actions} style={{ marginTop: '0.7rem' }}>
                    {item.issueUrl && (
                      <a className={styles.secondaryButton} href={item.issueUrl} target="_blank" rel="noreferrer">
                        Issue #{item.issueNumber} <FaExternalLinkAlt />
                      </a>
                    )}
                    {item.prUrl && (
                      <a className={styles.secondaryButton} href={item.prUrl} target="_blank" rel="noreferrer">
                        PR #{item.prNumber} <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
