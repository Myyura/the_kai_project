import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { usePublicProfile } from '@site/src/hooks/usePublicProfile';
import { getLanguageLocale, useCurrentLanguage } from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import useDocumentColorMode from '@site/src/components/Chemistry/useDocumentColorMode';
import { getSupabaseClient } from '@site/src/services/supabaseClient';
import { getVerifiedAccessToken } from '@site/src/services/syncService';
import { getEdgeFunctionErrorMessage } from '@site/src/services/edgeFunctionErrors';
import {getDocumentTitle} from '@site/src/services/documentMetadata';
import { buildDiffPreview, markdownHasChanges } from '@site/src/services/correctionDiff';
import {
  markdownToHtml,
  renderMathInContainer,
  renderSmilesInContainer,
} from '@site/src/components/NoteEditor/markdownRenderer';
import { universities } from '@site/src/data/universities';
import tagTaxonomy from '@site/src/data/tagTaxonomy';
import styles from './styles.module.css';

const CUSTOM_OPTION = '__custom__';
const CLA_URL = 'https://github.com/Myyura/the_kai_project/blob/main/CLA.md';
const MAX_NEW_SOLUTION_MARKDOWN_LENGTH = 50000;
const defaultUniversityId = universities[0]?.id || '';
const defaultDepartmentId = universities[0]?.departments?.[0]?.id || '';

const initialForm = {
  submissionType: 'new_solution',
  title: '',
  sidebarLabel: '',
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
  targetSourcePath: '',
  tagsText: '',
  descriptionMarkdown: '',
  kaiMarkdown: '',
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

function normalizedMarkdownLength(value) {
  return String(value || '').replace(/\r\n?/g, '\n').trim().length;
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
  const colorMode = useDocumentColorMode();
  const t = useUiText('contributions');
  const { isConfigured, isLoggedIn, authReady, user } = useSync();
  const { profile } = usePublicProfile();
  const [form, setForm] = useState(initialForm);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastIssueUrl, setLastIssueUrl] = useState('');
  const [sourceLoading, setSourceLoading] = useState(false);
  const [sourceError, setSourceError] = useState('');
  const [sourcePath, setSourcePath] = useState('');
  const [baseBlobSha, setBaseBlobSha] = useState('');
  const [originalMarkdown, setOriginalMarkdown] = useState('');
  const [proposedMarkdown, setProposedMarkdown] = useState('');
  const [correctionView, setCorrectionView] = useState('edit');
  const [newSolutionView, setNewSolutionView] = useState('edit');
  const newSolutionPreviewRef = useRef(null);
  const isCorrectionMode = form.submissionType === 'correction';
  const newSolutionMarkdownLength = normalizedMarkdownLength(form.descriptionMarkdown)
    + normalizedMarkdownLength(form.kaiMarkdown);
  const newSolutionMarkdownTooLong = newSolutionMarkdownLength > MAX_NEW_SOLUTION_MARKDOWN_LENGTH;

  const diffPreview = useMemo(
    () => correctionView === 'diff'
      ? buildDiffPreview(originalMarkdown, proposedMarkdown)
      : { additions: 0, deletions: 0, hunks: [] },
    [correctionView, originalMarkdown, proposedMarkdown],
  );

  const newSolutionPreviewMarkdown = useMemo(() => {
    const title = form.title.trim() || t.previewUntitled;
    const author = profile?.displayName || t.nicknameNotReady;
    const description = form.descriptionMarkdown.trim();
    const kai = form.kaiMarkdown.trim();
    const sections = [
      `# ${title}`,
      '',
      '## **Author**',
      author,
    ];

    if (description) sections.push('', '## **Description**', description);
    if (kai) sections.push('', '## **Kai**', kai);
    return sections.join('\n');
  }, [
    form.descriptionMarkdown,
    form.kaiMarkdown,
    form.title,
    profile?.displayName,
    t.nicknameNotReady,
    t.previewUntitled,
  ]);

  useEffect(() => {
    if (newSolutionView !== 'preview' || !newSolutionPreviewRef.current) return;
    const container = newSolutionPreviewRef.current;
    container.innerHTML = markdownToHtml(newSolutionPreviewMarkdown);
    void Promise.all([
      renderMathInContainer(container),
      renderSmilesInContainer(container, colorMode),
    ]);
  }, [colorMode, newSolutionPreviewMarkdown, newSolutionView]);

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

  const invokeSubmissionFunction = useCallback(async (method, body, endpoint = '') => {
    const supabase = getSupabaseClient();
    if (!supabase) throw new Error(t.notConfigured);

    const accessToken = await getVerifiedAccessToken();
    if (!accessToken) throw new Error(t.sessionMissing);

    const { data, error } = await supabase.functions.invoke(`content-submissions${endpoint}`, {
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
    const sourcePathParam = params.get('sourcePath');
    if (docId) {
      setForm((current) => ({
        ...current,
        submissionType: 'correction',
        targetDocId: docId || current.targetDocId,
        targetTitle: title || current.targetTitle,
        targetSourcePath: sourcePathParam || current.targetSourcePath,
      }));
    } else if (type === 'correction') {
      setMessage({ type: 'error', text: t.enterFromDocPage });
    }
  }, [t.enterFromDocPage]);

  const loadCorrectionSource = async () => {
    if (!isCorrectionMode || !form.targetDocId || !isLoggedIn) return;
    setSourceLoading(true);
    setSourceError('');
    try {
      const data = await invokeSubmissionFunction('POST', {
        targetDocId: form.targetDocId,
        sourcePath: form.targetSourcePath,
      }, '/source');
      const content = data?.source?.content;
      const sha = data?.source?.blobSha;
      if (typeof content !== 'string' || !sha) throw new Error(t.sourceInvalid);
      setSourcePath(data.source.path || `docs/${form.targetDocId}.md`);
      setBaseBlobSha(sha);
      setOriginalMarkdown(content);
      setProposedMarkdown(content);
      setCorrectionView('edit');
    } catch (error) {
      setSourcePath('');
      setBaseBlobSha('');
      setOriginalMarkdown('');
      setProposedMarkdown('');
      setSourceError(error?.message || t.sourceLoadFailed);
    } finally {
      setSourceLoading(false);
    }
  };

  useEffect(() => {
    void loadCorrectionSource();
    // Reload only when the selected document or login state changes. Switching
    // the UI language must not discard an in-progress edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.targetDocId, isCorrectionMode, isLoggedIn]);

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
    if (!profile?.nicknameConfirmed) return t.nicknameRequired;
    if (!form.claAccepted) return t.claRequired;
    if (form.submissionType === 'new_solution') {
      if (!form.title.trim()) return t.titleRequired;
      if (!universityId || !departmentId || !form.year) return t.metaRequired;
      if (form.programId === CUSTOM_OPTION && !programId) return t.customProgramRequired;
      if (!form.descriptionMarkdown.trim() && !form.kaiMarkdown.trim()) return t.markdownRequired;
      if (newSolutionMarkdownTooLong) return t.markdownTooLong;
    }
    if (form.submissionType === 'correction') {
      if (!form.targetDocId.trim()) return t.targetRequired;
      if (sourceLoading) return t.sourceLoading;
      if (!baseBlobSha || sourceError) return t.sourceRequired;
      if (!markdownHasChanges(originalMarkdown, proposedMarkdown)) return t.correctionRequired;
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
      const commonPayload = {
        submissionType: form.submissionType,
        claAccepted: form.claAccepted,
      };
      const requestPayload = form.submissionType === 'new_solution'
        ? {
          ...commonPayload,
          title: form.title,
          sidebarLabel: form.sidebarLabel,
          universityId,
          departmentId,
          programId,
          year: form.year,
          fileSlug: form.fileSlug,
          tags: splitTags(form.tagsText),
          descriptionMarkdown: form.descriptionMarkdown,
          kaiMarkdown: form.kaiMarkdown,
        }
        : {
          ...commonPayload,
          targetDocId: form.targetDocId,
          targetTitle: form.targetTitle,
          sourcePath,
          baseBlobSha,
          proposedMarkdown,
        };
      const data = await invokeSubmissionFunction('POST', requestPayload);

      const issueUrl = data?.submission?.issueUrl || '';
      setLastIssueUrl(issueUrl);
      setMessage({
        type: 'success',
        text: data?.conflict ? t.submitConflictSuccess : t.submitSuccess,
      });
      if (form.submissionType === 'correction') {
        setProposedMarkdown(originalMarkdown);
        setCorrectionView('edit');
      } else {
        setNewSolutionView('edit');
      }
      setForm((current) => ({
        ...initialForm,
        submissionType: current.submissionType,
        targetDocId: current.submissionType === 'correction' ? current.targetDocId : '',
        targetTitle: current.submissionType === 'correction' ? current.targetTitle : '',
        targetSourcePath: current.submissionType === 'correction' ? current.targetSourcePath : '',
      }));
      await loadSubmissions();
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.submitFailed });
    } finally {
      setSubmitting(false);
    }
  };

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
            <div className={styles.targetSummary}>
              <span>{t.author}</span>
              <strong>{profile?.displayName || t.nicknameNotReady}</strong>
              {!profile?.nicknameConfirmed && (
                <small><Link to="/me">{t.confirmNickname}</Link></small>
              )}
            </div>

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
              <section className={`${styles.correctionEditor} ${styles.fullSpan}`}>
                <div className={styles.editorToolbar}>
                  <div>
                    <strong>{t.submissionEditorTitle}</strong>
                    <small className={styles.editorHint}>{t.submissionEditorHint}</small>
                  </div>
                  <div className={styles.editorTabs} role="group" aria-label={t.editorViewLabel}>
                    <button
                      type="button"
                      className={newSolutionView === 'edit' ? styles.activeTab : ''}
                      aria-pressed={newSolutionView === 'edit'}
                      onClick={() => setNewSolutionView('edit')}
                    >
                      {t.editSubmission}
                    </button>
                    <button
                      type="button"
                      className={newSolutionView === 'preview' ? styles.activeTab : ''}
                      aria-pressed={newSolutionView === 'preview'}
                      onClick={() => setNewSolutionView('preview')}
                    >
                      {t.previewSubmission}
                    </button>
                  </div>
                </div>

                {newSolutionView === 'edit' ? (
                  <div className={styles.solutionEditFields}>
                    <label>
                      <span>{t.descriptionLabel}</span>
                      <textarea
                        value={form.descriptionMarkdown}
                        onChange={(event) => updateForm('descriptionMarkdown', event.target.value)}
                        rows={9}
                        placeholder={t.descriptionPlaceholder}
                        maxLength={MAX_NEW_SOLUTION_MARKDOWN_LENGTH}
                      />
                    </label>
                    <label>
                      <span>{t.kaiLabel}</span>
                      <textarea
                        value={form.kaiMarkdown}
                        onChange={(event) => updateForm('kaiMarkdown', event.target.value)}
                        rows={12}
                        placeholder={t.kaiPlaceholder}
                        maxLength={MAX_NEW_SOLUTION_MARKDOWN_LENGTH}
                      />
                    </label>
                  </div>
                ) : (
                  <div
                    ref={newSolutionPreviewRef}
                    className={`${styles.solutionPreview} markdown`}
                    role="region"
                    aria-label={t.previewSubmission}
                  />
                )}
                <small
                  className={`${styles.smallHint} ${newSolutionMarkdownTooLong ? styles.lengthExceeded : ''}`}
                  aria-live="polite">
                  {t.markdownLength
                    .replace('{current}', newSolutionMarkdownLength.toLocaleString(getLanguageLocale(language)))
                    .replace('{max}', MAX_NEW_SOLUTION_MARKDOWN_LENGTH.toLocaleString(getLanguageLocale(language)))}
                </small>
              </section>
            ) : (
              <section className={`${styles.correctionEditor} ${styles.fullSpan}`}>
                <div className={styles.editorToolbar}>
                  <div>
                    <strong>{t.sourceEditorTitle}</strong>
                    <small>{sourcePath || t.sourcePathPending}</small>
                  </div>
                  <div className={styles.editorTabs} role="group" aria-label={t.editorViewLabel}>
                    <button
                      type="button"
                      className={correctionView === 'edit' ? styles.activeTab : ''}
                      aria-pressed={correctionView === 'edit'}
                      onClick={() => setCorrectionView('edit')}
                    >
                      {t.editSource}
                    </button>
                    <button
                      type="button"
                      className={correctionView === 'diff' ? styles.activeTab : ''}
                      aria-pressed={correctionView === 'diff'}
                      onClick={() => setCorrectionView('diff')}
                      disabled={sourceLoading || Boolean(sourceError)}
                    >
                      {t.previewDiff}
                    </button>
                  </div>
                </div>

                {sourceLoading ? (
                  <div className={styles.editorState}><FaRedo className={styles.spin} /> {t.sourceLoading}</div>
                ) : sourceError ? (
                  <div className={styles.editorState}>
                    <FaExclamationTriangle />
                    <span>{sourceError}</span>
                    <button type="button" className={styles.secondaryButton} onClick={loadCorrectionSource}>
                      {t.retrySource}
                    </button>
                  </div>
                ) : correctionView === 'edit' ? (
                  <>
                    <textarea
                      className={styles.sourceTextarea}
                      value={proposedMarkdown}
                      onChange={(event) => setProposedMarkdown(event.target.value)}
                      rows={24}
                      spellCheck={false}
                      aria-label={t.sourceEditorTitle}
                    />
                    <small className={styles.smallHint}>{t.sourceEditorHint}</small>
                  </>
                ) : (
                  <div className={styles.diffPanel}>
                    <div className={styles.diffStats}>
                      <span className={styles.additionText}>+{diffPreview.additions}</span>
                      <span className={styles.deletionText}>−{diffPreview.deletions}</span>
                    </div>
                    {diffPreview.hunks.length === 0 ? (
                      <p className={styles.emptyText}>{t.noChanges}</p>
                    ) : (
                      <pre className={styles.diffCode} aria-label={t.previewDiff}>
                        <code>
                          <span className={styles.diffFileLine}>--- a/{sourcePath}</span>{'\n'}
                          <span className={styles.diffFileLine}>+++ b/{sourcePath}</span>{'\n'}
                          {diffPreview.hunks.map((hunk, hunkIndex) => (
                            <React.Fragment key={`${hunk.header}-${hunkIndex}`}>
                              <span className={styles.diffHunkLine}>{hunk.header}</span>{'\n'}
                              {hunk.lines.map((line, lineIndex) => (
                                <React.Fragment key={`${hunkIndex}-${lineIndex}`}>
                                  <span className={
                                    line.type === 'insert'
                                      ? styles.diffAddedLine
                                      : line.type === 'delete'
                                        ? styles.diffDeletedLine
                                        : styles.diffContextLine
                                  }>
                                    {line.type === 'insert' ? '+' : line.type === 'delete' ? '-' : ' '}{line.line}
                                  </span>{'\n'}
                                </React.Fragment>
                              ))}
                            </React.Fragment>
                          ))}
                        </code>
                      </pre>
                    )}
                  </div>
                )}
              </section>
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
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={submitting || (isCorrectionMode && sourceLoading)}
            >
              {submitting ? <FaRedo className={styles.spin} /> : <FaPaperPlane />}
              {submitting ? t.submitting : t.createIssue}
            </button>
            <span className={styles.hint}>{t.currentAccount(user?.email)}</span>
          </div>
          <datalist id="submission-tag-options">
            {tagOptions.map((tag) => <option key={tag} value={tag} />)}
          </datalist>
        </form>

        <aside className={`${styles.panel} ${styles.historyPanel}`}>
          <div className={styles.sectionHeader}>
            <h2><FaCodeBranch /> {t.recentSubmissions}</h2>
          </div>
          {submissions.length === 0 ? (
            <p className={styles.emptyText}>{t.noSubmissions}</p>
          ) : (
            <div className={styles.submissionList}>
              {submissions.map((item) => (
                <div key={item.id} className={styles.submissionItem}>
                  <strong>{getDocumentTitle(item.targetDocId, item.title || item.id)}</strong>
                  <div className={styles.submissionMeta}>
                    <span className={`${styles.statusBadge} ${statusClass(item.status)}`}>{statusText(item.status, t)}</span>
                    {item.correctionConflict && (
                      <span className={`${styles.statusBadge} ${styles.statusFailed}`}>{t.conflictBadge}</span>
                    )}
                    <span>{item.submissionType === 'new_solution' ? t.modeNew : t.modeCorrection}</span>
                    <span>{formatDate(item.createdAt, language)}</span>
                  </div>
                  <div className={styles.submissionLinks}>
                    {item.issueUrl && (
                      <a className={styles.submissionLink} href={item.issueUrl} target="_blank" rel="noreferrer">
                        Issue #{item.issueNumber} <FaExternalLinkAlt />
                      </a>
                    )}
                    {item.prUrl && (
                      <a className={styles.submissionLink} href={item.prUrl} target="_blank" rel="noreferrer">
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
