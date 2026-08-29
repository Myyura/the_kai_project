import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {
  FaArrowLeft,
  FaEdit,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import admissionStats from '@site/src/data/admissionStats.generated.json';
import {getSupabaseClient} from '@site/src/services/supabaseClient';
import {getVerifiedAccessToken} from '@site/src/services/authService';
import {getEdgeFunctionErrorMessage} from '@site/src/services/edgeFunctionErrors';
import {consumeAuthReturnIntent} from '@site/src/services/authReturn';

import styles from './styles.module.css';

const CLA_URL = 'https://github.com/Myyura/the_kai_project/blob/main/CLA.md';
const ADMISSION_VALUE_FIELDS = [
  ['capacity', '招生名额'],
  ['applicants', '出愿人数'],
  ['examinees', '受验人数'],
  ['admitted', '合格人数'],
  ['enrolled', '入学人数'],
  ['reportedRatio', '来源直接记载的倍率'],
];

const INITIAL_FORM = {
  intent: 'addition',
  existingSeriesId: '',
  existingSeriesLabel: '',
  existingSeriesSourceType: '',
  admissionYear: '',
  degree: 'master',
  period: 'summer',
  selection: '',
  seriesLabel: '',
  capacity: '',
  applicants: '',
  examinees: '',
  admitted: '',
  enrolled: '',
  reportedRatio: '',
  reportedRatioBasis: '',
  sourceType: 'official',
  sourceTitle: '',
  sourceUrl: '',
  evidenceLocator: '',
  notes: '',
  claAccepted: false,
};

const VALUE_INPUT_META = {
  capacity: {placeholder: '40', step: '1'},
  applicants: {placeholder: '82', step: '1'},
  examinees: {placeholder: '76', step: '1'},
  admitted: {placeholder: '38', step: '1'},
  enrolled: {placeholder: '35', step: '1'},
  reportedRatio: {placeholder: '2.16', step: '0.01'},
};

export default function AdmissionDataContribution({entityId, profile, embedded = false}) {
  const entity = admissionStats?.statsByEntity?.[entityId] || null;
  const [form, setForm] = useState(INITIAL_FORM);
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [lastIssueUrl, setLastIssueUrl] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const sourcePath = entity ? `docs/${entity.entityId}/_admissions.json` : '';

  const seriesOptions = useMemo(
    () => (Array.isArray(entity?.series) ? entity.series : []),
    [entity],
  );

  useEffect(() => {
    consumeAuthReturnIntent({intent: 'admission-data', docId: entityId});
  }, [entityId]);

  const updateForm = (field, value) => {
    setLastIssueUrl('');
    setSubmitSuccess(false);
    setFormError('');
    setForm((current) => ({...current, [field]: value}));
  };

  const selectExistingSeries = (seriesId) => {
    const series = seriesOptions.find((item) => item.id === seriesId);
    setLastIssueUrl('');
    setSubmitSuccess(false);
    setFormError('');
    setForm((current) => ({
      ...current,
      existingSeriesId: seriesId,
      existingSeriesLabel: series?.label || '',
      existingSeriesSourceType: series?.sourceType || '',
      degree: series?.degree || current.degree,
      period: series?.period || current.period,
      selection: series?.selection || current.selection,
      seriesLabel: series?.label || current.seriesLabel,
      sourceType: series?.sourceType || current.sourceType,
    }));
  };

  const hasAdmissionValue = ADMISSION_VALUE_FIELDS.some(([field]) => (
    String(form[field] ?? '').trim() !== ''
  ));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLastIssueUrl('');
    setSubmitSuccess(false);
    if (!profile?.nicknameConfirmed) {
      setFormError('请先在个人中心确认公开昵称，再提交招生数据。');
      return;
    }
    if (!form.claAccepted) {
      setFormError('请先确认已阅读并同意 CLA。');
      return;
    }
    if (!hasAdmissionValue) {
      setFormError('请至少填写一项精确人数或来源直接记载的倍率。');
      return;
    }
    if (form.reportedRatio !== '' && !form.reportedRatioBasis) {
      setFormError('填写来源直接记载的倍率时，请同时选择该倍率的计算口径。');
      return;
    }

    setSubmitting(true);
    setFormError('');
    try {
      const supabase = getSupabaseClient();
      if (!supabase) throw new Error('投稿服务尚未配置。');
      const accessToken = await getVerifiedAccessToken();
      if (!accessToken) throw new Error('登录会话已过期，请重新登录。');
      const {data, error} = await supabase.functions.invoke('content-submissions', {
        method: 'POST',
        body: {
          submissionType: 'admission_data',
          claAccepted: form.claAccepted,
          entityId: entity.entityId,
          title: entity.label,
          sourcePath,
          intent: form.intent,
          existingSeriesId: form.existingSeriesId,
          existingSeriesLabel: form.existingSeriesLabel,
          existingSeriesSourceType: form.existingSeriesSourceType,
          admissionYear: form.admissionYear,
          degree: form.degree,
          period: form.period,
          selection: form.selection,
          seriesLabel: form.seriesLabel,
          capacity: form.capacity,
          applicants: form.applicants,
          examinees: form.examinees,
          admitted: form.admitted,
          enrolled: form.enrolled,
          reportedRatio: form.reportedRatio,
          reportedRatioBasis: form.reportedRatioBasis,
          sourceType: form.sourceType,
          sourceTitle: form.sourceTitle,
          sourceUrl: form.sourceUrl,
          evidenceLocator: form.evidenceLocator,
          notes: form.notes,
        },
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      if (error) {
        throw new Error(await getEdgeFunctionErrorMessage(error, '投稿服务请求失败，请稍后重试。'));
      }
      if (data?.error) throw new Error(data.error.message || data.error.code);
      setLastIssueUrl(data?.submission?.issueUrl || '');
      setSubmitSuccess(true);
    } catch (error) {
      setFormError(error?.message || '投稿失败，请稍后重试。');
    } finally {
      setSubmitting(false);
    }
  };

  if (!entity) {
    return (
      <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <section className={styles.invalidPanel}>
          <FaExclamationTriangle />
          <h1>找不到对应的招生数据页面</h1>
          <p>入口参数可能已经失效，请回到研究科或专攻首页重新点击投稿按钮。</p>
          <Link className={styles.secondaryButton} to="/me?tab=contribute">
            返回投稿中心
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>招生数据</p>
          <h1>补充 / 修正数据</h1>
          <p>请按原始来源填写精确值；未公开的字段保持空白，不要根据图表估算。</p>
        </div>
        <Link className={styles.secondaryButton} to={entity.slug}>
          <FaArrowLeft /> 返回趋势图
        </Link>
      </header>

      {formError && (
        <div className={styles.errorMessage} role="alert">
          <FaExclamationTriangle />
          <span>{formError}</span>
        </div>
      )}

      {submitSuccess && (
        <div className={styles.successMessage} role="status">
          <span>投稿已由站内账号创建为审核 Issue，维护者会核对来源后处理。</span>
          {lastIssueUrl && (
            <a href={lastIssueUrl} target="_blank" rel="noreferrer">
              查看 Issue <FaExternalLinkAlt />
            </a>
          )}
        </div>
      )}

      <form className={styles.panel} onSubmit={handleSubmit}>
        <div className={styles.modeNotice}>
          <FaEdit />
          <div>
            <strong>{entity.label}</strong>
            <span>{sourcePath}</span>
            <small>公开署名：{profile?.displayName || '尚未确认'}</small>
          </div>
        </div>

        <section className={styles.section} aria-labelledby="admission-context-heading">
          <h2 id="admission-context-heading">数据口径</h2>
          <div className={styles.formGrid}>
            <label>
              <span>投稿类型</span>
              <select value={form.intent} onChange={(event) => updateForm('intent', event.target.value)}>
                <option value="addition">补充新数据</option>
                <option value="correction">修正已有数据</option>
              </select>
            </label>
            <label>
              <span>对应现有系列（可选）</span>
              <select value={form.existingSeriesId} onChange={(event) => selectExistingSeries(event.target.value)}>
                <option value="">新增系列 / 不确定</option>
                {seriesOptions.map((series) => (
                  <option key={series.id} value={series.id}>
                    {series.label}（{series.sourceType === 'community' ? '民间' : '官方'}）
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>入学年度</span>
              <input
                required
                type="number"
                min="1900"
                max="2200"
                inputMode="numeric"
                value={form.admissionYear}
                onChange={(event) => updateForm('admissionYear', event.target.value)}
                placeholder="2026"
              />
              <small>填写入学年度；例如 2025 年夏季实施、2026 年 4 月入学，填 2026。</small>
            </label>
            <label>
              <span>学位阶段</span>
              <select value={form.degree} onChange={(event) => updateForm('degree', event.target.value)}>
                <option value="master">修士 / 博士前期</option>
                <option value="doctoral">博士 / 博士后期</option>
                <option value="professional">专业学位</option>
                <option value="other">其他</option>
              </select>
            </label>
            <label>
              <span>入试时期</span>
              <select value={form.period} onChange={(event) => updateForm('period', event.target.value)}>
                <option value="summer">夏季入试</option>
                <option value="winter">冬季入试（收集但暂不在趋势图展示）</option>
                <option value="annual">全年 / 未区分季节</option>
                <option value="other">其他</option>
              </select>
            </label>
            <label>
              <span>选拔类别</span>
              <input
                required
                value={form.selection}
                onChange={(event) => updateForm('selection', event.target.value)}
                placeholder="一般选拔 / 留学生特别选拔"
                maxLength={160}
              />
            </label>
            <label className={styles.fullSpan}>
              <span>系列名称</span>
              <input
                required
                value={form.seriesLabel}
                onChange={(event) => updateForm('seriesLabel', event.target.value)}
                placeholder="修士课程 · 夏季 · 一般选拔"
                maxLength={220}
              />
              <small>同一条折线必须保持统计范围与倍率口径一致；不确定时可按来源原文填写。</small>
            </label>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="admission-values-heading">
          <div className={styles.sectionHeading}>
            <h2 id="admission-values-heading">精确数据</h2>
            <span>至少填写一项</span>
          </div>
          <div className={styles.valueGrid}>
            {ADMISSION_VALUE_FIELDS.map(([field, label]) => (
              <label key={field}>
                <span>{label}</span>
                <input
                  type="number"
                  min="0"
                  step={VALUE_INPUT_META[field].step}
                  inputMode="decimal"
                  value={form[field]}
                  onChange={(event) => updateForm(field, event.target.value)}
                  placeholder={VALUE_INPUT_META[field].placeholder}
                />
              </label>
            ))}
          </div>
          <label className={styles.ratioBasisField}>
            <span>来源倍率的计算口径</span>
            <select
              value={form.reportedRatioBasis}
              onChange={(event) => updateForm('reportedRatioBasis', event.target.value)}>
              <option value="">未填写来源倍率</option>
              <option value="applicants/admitted">出愿人数 ÷ 合格人数</option>
              <option value="examinees/admitted">受验人数 ÷ 合格人数</option>
              <option value="applicants/capacity">出愿人数 ÷ 招生名额</option>
              <option value="source-defined">其他（请在补充说明中写清）</option>
            </select>
          </label>
          <p className={styles.sectionHint}>人数单位均为“人”。来源没有公布的字段请留空；只有明确写作 0 时才填写 0。</p>
        </section>

        <section className={styles.section} aria-labelledby="admission-source-heading">
          <h2 id="admission-source-heading">来源与证据</h2>
          <div className={styles.formGrid}>
            <label>
              <span>来源类型</span>
              <select value={form.sourceType} onChange={(event) => updateForm('sourceType', event.target.value)}>
                <option value="official">学校官方</option>
                <option value="community">民间整理（note、academ-aid 等）</option>
              </select>
            </label>
            <label>
              <span>来源标题</span>
              <input
                required
                value={form.sourceTitle}
                onChange={(event) => updateForm('sourceTitle', event.target.value)}
                placeholder="2026年度 入试结果"
                maxLength={240}
              />
            </label>
            <label className={styles.fullSpan}>
              <span>来源 URL</span>
              <input
                required
                type="url"
                value={form.sourceUrl}
                onChange={(event) => updateForm('sourceUrl', event.target.value)}
                placeholder="https://www.example.ac.jp/admission/results.pdf"
              />
            </label>
            <label className={styles.fullSpan}>
              <span>证据位置</span>
              <input
                required
                value={form.evidenceLocator}
                onChange={(event) => updateForm('evidenceLocator', event.target.value)}
                placeholder="PDF 第 2 页“修士课程”表，知能情報学行"
                maxLength={300}
              />
              <small>请写清 PDF 页码、表名、行列或网页段落，便于维护者快速核对。</small>
            </label>
            <label className={styles.fullSpan}>
              <span>补充说明（可选）</span>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(event) => updateForm('notes', event.target.value)}
                placeholder="统计范围、年度换算、是否包含其他选拔、来源中的例外说明等"
                maxLength={2000}
              />
            </label>
          </div>
        </section>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={form.claAccepted}
            onChange={(event) => updateForm('claAccepted', event.target.checked)}
          />
          <span>
            我已阅读并同意{' '}
            <a href={CLA_URL} target="_blank" rel="noopener noreferrer">
              The Kai Project CLA <FaExternalLinkAlt aria-hidden="true" />
            </a>
            ，并确认有权提交这些数据与来源信息。
          </span>
        </label>

        <div className={styles.actions}>
          <button type="submit" className={styles.primaryButton} disabled={submitting}>
            <FaPaperPlane /> {submitting ? '提交中…' : '创建审核 Issue'}
          </button>
          <span>只有已登录并确认公开昵称的注册用户可以提交。</span>
        </div>
      </form>
    </div>
  );
}
