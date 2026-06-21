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
import { getSupabaseClient } from '@site/src/services/supabaseClient';
import { getVerifiedAccessToken } from '@site/src/services/syncService';
import { getEdgeFunctionErrorMessage } from '@site/src/services/edgeFunctionErrors';
import { universities } from '@site/src/data/universities';
import tagTaxonomy from '@site/src/data/tagTaxonomy.json';
import styles from './styles.module.css';

const CUSTOM_OPTION = '__custom__';
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

function formatDate(value) {
  if (!value) return '';
  try {
    return new Date(value).toLocaleString('zh-CN', {
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

function statusText(status) {
  const map = {
    pending_issue: '创建 Issue 中',
    issue_created: 'Issue 已创建',
    failed: '创建失败',
    converted: '已转为 PR',
    closed: '已关闭',
  };
  return map[status] || status || '未知';
}

export function ContributeContent({ embedded = false } = {}) {
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
    if (!supabase) throw new Error('Supabase 未配置');

    const accessToken = await getVerifiedAccessToken();
    if (!accessToken) throw new Error('登录会话已过期，请重新登录');

    const { data, error } = await supabase.functions.invoke('content-submissions', {
      method,
      body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error) {
      throw new Error(await getEdgeFunctionErrorMessage(error, '投稿服务请求失败，请稍后重试。'));
    }
    if (data?.error) throw new Error(data.error.message || data.error.code);
    return data;
  }, []);

  const loadSubmissions = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    try {
      const data = await invokeSubmissionFunction('GET');
      setSubmissions(data?.submissions || []);
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || '投稿记录加载失败' });
    } finally {
      setLoading(false);
    }
  }, [invokeSubmissionFunction, isLoggedIn]);

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
      setMessage({ type: 'error', text: '请从具体题解页底部的「纠错/补充」进入，系统会自动带入目标题解。' });
    }
  }, []);

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
    if (!form.authorName.trim()) return '请填写公开署名。';
    if (!form.claAccepted) return '请先确认已阅读并同意 CLA。';
    if (form.submissionType === 'new_solution') {
      if (!form.title.trim()) return '请填写题解标题。';
      if (!universityId || !departmentId || !form.year) return '请选择或填写学校、院系，并填写考试年度。';
      if (form.programId === CUSTOM_OPTION && !programId) return '请填写项目/专业目录，或选择“不清楚/不填写”。';
      if (!form.descriptionMarkdown.trim() && !form.kaiMarkdown.trim()) return 'Description 或 Kai 至少填写一项。';
    }
    if (form.submissionType === 'correction') {
      if (!form.targetDocId.trim()) return '请从具体题解页底部的「纠错/补充」进入。';
      if (!form.correctionMarkdown.trim()) return '请填写纠错或补充内容。';
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
      setMessage({ type: 'success', text: '投稿已创建为 GitHub Issue，维护者会在那里继续审核。' });
      setForm((current) => ({
        ...initialForm,
        submissionType: current.submissionType,
        targetDocId: current.submissionType === 'correction' ? current.targetDocId : '',
        targetTitle: current.submissionType === 'correction' ? current.targetTitle : '',
        authorName: current.authorName,
      }));
      await loadSubmissions();
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || '投稿失败，请稍后重试。' });
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
          <h1>站内投稿</h1>
          <p>当前站点尚未配置 Supabase，投稿功能暂不可用。</p>
        </section>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.noticePanel}>
          <FaClipboardList className={styles.noticeIcon} />
          <h1>站内投稿</h1>
          <p>请先登录，再提交新题解或从题解页发起纠错。投稿会被创建为公开 GitHub Issue。</p>
          <Link to="/login" className={styles.primaryButton}>
            <FaSignInAlt /> 登录
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
      <header className={styles.header}>
        <div>
          <h1>{isCorrectionMode ? '题解纠错/补充' : '站内投稿'}</h1>
          <p>
            {isCorrectionMode
              ? '当前题解的信息已自动带入。请只填写需要更正或补充的内容。'
              : '提交新的题目描述或解答，系统会创建公开 GitHub Issue；维护者确认后，bot 会整理成规范 PR。'}
          </p>
        </div>
        <button type="button" className={styles.secondaryButton} onClick={loadSubmissions} disabled={loading}>
          <FaRedo className={loading ? styles.spin : ''} /> 刷新记录
        </button>
      </header>

      {message && (
        <div className={`${styles.message} ${message.type === 'error' ? styles.messageError : styles.messageSuccess}`}>
          {message.type === 'error' ? <FaExclamationTriangle /> : <FaCheck />}
          <span>{message.text}</span>
          {lastIssueUrl && (
            <a href={lastIssueUrl} target="_blank" rel="noreferrer">
              查看 Issue <FaExternalLinkAlt />
            </a>
          )}
        </div>
      )}

      <div className={styles.layoutGrid}>
        <form className={styles.panel} onSubmit={handleSubmit}>
          <div className={styles.modeNotice}>
            {isCorrectionMode ? <FaEdit /> : <FaPaperPlane />}
            <div>
              <strong>{isCorrectionMode ? '纠错/补充' : '新增题解'}</strong>
              <span>
                {isCorrectionMode
                  ? '这个入口只能从具体题解页进入，目标文档由系统自动填写。'
                  : '如果只是修正某篇现有题解，请回到该题解页底部点击「纠错/补充」。'}
              </span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <label>
              <span>公开署名</span>
              <input
                value={form.authorName}
                onChange={(event) => updateForm('authorName', event.target.value)}
                placeholder="例如：祭音Myyura"
                maxLength={120}
              />
              <small className={styles.smallHint}>会展示在 Issue 和最终文档中；登录邮箱不会公开。</small>
            </label>

            {isCorrectionMode ? (
              <div className={`${styles.targetSummary} ${styles.fullSpan}`}>
                <span>目标题解</span>
                <strong>{form.targetTitle || form.targetDocId || '未识别题解'}</strong>
                {form.targetDocId && <small>{form.targetDocId}</small>}
              </div>
            ) : (
              <label>
                <span>考试年度</span>
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
                  <span>学校</span>
                  <select value={form.universityId} onChange={(event) => handleUniversityChange(event.target.value)}>
                    {universities.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>其他（手动填写）</option>
                  </select>
                  {form.universityId === CUSTOM_OPTION && (
                    <input
                      value={form.customUniversityId}
                      onChange={(event) => updateForm('customUniversityId', event.target.value)}
                      placeholder="学校目录名，例如：ritsumeikan-university"
                      maxLength={120}
                    />
                  )}
                  <small className={styles.smallHint}>列表里没有时选择“其他”，建议填写英文、罗马字或官网常用英文。</small>
                </label>
                <label>
                  <span>院系</span>
                  <select value={form.departmentId} onChange={(event) => handleDepartmentChange(event.target.value)}>
                    {selectedDepartments.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>其他（手动填写）</option>
                  </select>
                  {form.departmentId === CUSTOM_OPTION && (
                    <input
                      value={form.customDepartmentId}
                      onChange={(event) => updateForm('customDepartmentId', event.target.value)}
                      placeholder="院系目录名，例如：information-science"
                      maxLength={120}
                    />
                  )}
                  <small className={styles.smallHint}>不在列表中时可手动填写，维护者会在 Issue 中确认最终目录。</small>
                </label>
                <label>
                  <span>项目/专业目录（可选）</span>
                  <select value={form.programId} onChange={(event) => handleProgramChange(event.target.value)}>
                    <option value="">不清楚 / 不填写</option>
                    {programOptions.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    <option value={CUSTOM_OPTION}>其他（手动填写）</option>
                  </select>
                  {form.programId === CUSTOM_OPTION && (
                    <input
                      value={form.customProgramId}
                      onChange={(event) => updateForm('customProgramId', event.target.value)}
                      placeholder="项目/专业目录名"
                      maxLength={160}
                    />
                  )}
                  <small className={styles.smallHint}>不确定时保持“不清楚 / 不填写”，维护者可以在 PR 前补正。</small>
                </label>
                <label>
                  <span>文件标识（可选）</span>
                  <input
                    value={form.fileSlug}
                    onChange={(event) => updateForm('fileSlug', event.target.value)}
                    placeholder="可留空，系统会根据标题自动生成"
                    maxLength={120}
                  />
                  <small className={styles.smallHint}>留空时会先去掉标题中的空格，再生成文件名；维护者仍可在 PR 中调整。</small>
                </label>
                <label>
                  <span>题解标题</span>
                  <input
                    value={form.title}
                    onChange={(event) => updateForm('title', event.target.value)}
                    placeholder="例如：神戸大学 システム情報学研究科 2025年度 第一期 数学 1"
                    maxLength={180}
                  />
                </label>
                <label>
                  <span>侧边栏标题（可选）</span>
                  <input
                    value={form.sidebarLabel}
                    onChange={(event) => updateForm('sidebarLabel', event.target.value)}
                    placeholder="例如：2025年度 第一期 数学 1"
                    maxLength={120}
                  />
                </label>
                <label className={styles.fullSpan}>
                  <span>Tags</span>
                  <input
                    list="submission-tag-options"
                    value={form.tagsText}
                    onChange={(event) => updateForm('tagsText', event.target.value)}
                    placeholder="用逗号分隔，例如：Mathematics.Linear-Algebra, Mathematics.Calculus"
                  />
                  <small className={styles.smallHint}>可以先填你知道的 tag；不确定也可以留空，维护者会整理。</small>
                </label>
              </>
            )}

            {!isCorrectionMode ? (
              <>
                <label className={styles.fullSpan}>
                  <span>Description Markdown</span>
                  <textarea
                    value={form.descriptionMarkdown}
                    onChange={(event) => updateForm('descriptionMarkdown', event.target.value)}
                    rows={9}
                    placeholder="题面摘要、转写或说明。支持 Markdown / LaTeX。"
                  />
                </label>
                <label className={styles.fullSpan}>
                  <span>Kai Markdown</span>
                  <textarea
                    value={form.kaiMarkdown}
                    onChange={(event) => updateForm('kaiMarkdown', event.target.value)}
                    rows={12}
                    placeholder="题解正文。支持 Markdown / LaTeX。"
                  />
                </label>
              </>
            ) : (
              <label className={styles.fullSpan}>
                <span>纠错或补充内容</span>
                <textarea
                  value={form.correctionMarkdown}
                  onChange={(event) => updateForm('correctionMarkdown', event.target.value)}
                  rows={12}
                  placeholder="请说明哪里有误、建议如何修改，或直接给出可追加的 Markdown 内容。"
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
              我已阅读并同意 The Kai Project CLA，并确认有权提交这些内容。
              <br />
              <small className={styles.smallHint}>该确认会被写入 Issue 的签名 payload，供后续转换 PR 时校验。</small>
            </span>
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryButton} disabled={submitting}>
              {submitting ? <FaRedo className={styles.spin} /> : <FaPaperPlane />}
              {submitting ? '提交中' : '创建投稿 Issue'}
            </button>
            <span className={styles.hint}>当前账号：{user?.email}</span>
          </div>
          <datalist id="submission-tag-options">
            {tagOptions.map((tag) => <option key={tag} value={tag} />)}
          </datalist>
        </form>

        <aside className={styles.panel}>
          <div className={styles.sectionHeader}>
            <h2><FaCodeBranch /> 最近投稿</h2>
          </div>
          {submissions.length === 0 ? (
            <p className={styles.emptyText}>还没有投稿记录。</p>
          ) : (
            <div className={styles.submissionList}>
              {submissions.map((item) => (
                <div key={item.id} className={styles.submissionItem}>
                  <strong>{item.title || item.targetDocId || item.id}</strong>
                  <div className={styles.submissionMeta}>
                    <span className={`${styles.statusBadge} ${statusClass(item.status)}`}>{statusText(item.status)}</span>
                    <span>{item.submissionType === 'new_solution' ? '新增题解' : '纠错/补充'}</span>
                    <span>{formatDate(item.createdAt)}</span>
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
