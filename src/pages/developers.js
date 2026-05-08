import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
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
import { useSync } from '@site/src/hooks/useSync';
import { useStoredLanguage } from '@site/src/context/LanguageContext';
import { getSupabaseClient } from '@site/src/services/supabaseClient';
import styles from './developers.module.css';

const T = {
  zh: {
    pageTitle: '开发者中心',
    title: '开发者中心',
    subtitle: '管理面向第三方工具和自动化工作流的功能。',
    apiTitle: 'JSON API',
    apiSubtitle: '创建 API Key，调用 The Kai Project 的题目与答案 JSON 数据。',
    apiFeatureDesc: '题目目录、答案内容与来源信息的结构化访问。',
    apiFeatureCta: '管理 API Key',
    available: '可用',
    notConfigured: 'Supabase 尚未配置，暂时无法使用 JSON API。',
    loginRequired: '登录后可以申请 API 访问权限并管理 API Key。',
    login: '登录 / 注册',
    accessRequestTitle: '申请 API 访问权限',
    accessRequestDesc: '请简单说明你的使用场景。提交后由项目维护者审核，审核通过后即可创建 API Key。',
    applicantName: '姓名 / 昵称',
    applicantNamePlaceholder: '例如：山田太郎',
    organization: '组织 / 学校 / 项目',
    organizationPlaceholder: '可选',
    contactEmail: '联系邮箱',
    website: '项目网址 / GitHub',
    websitePlaceholder: '可选',
    intendedUse: '使用目的',
    intendedUsePlaceholder: '请说明你计划如何使用这些题目与答案数据，至少 20 个字符。',
    commercialUse: '包含商业用途',
    submitRequest: '提交申请',
    submittingRequest: '提交中...',
    requestSubmitted: '申请已提交，请等待项目维护者审核。',
    requestPendingTitle: '申请审核中',
    requestPendingDesc: '你的 API 访问申请正在等待审核。审核通过后，这里会开放 API Key 创建功能。',
    requestRejectedTitle: '申请未通过',
    requestRejectedDesc: '你可以修改使用说明后重新提交申请。',
    requestRevokedTitle: 'API 访问已暂停',
    requestRevokedDesc: '该账号的 API 访问权限已被暂停。如需恢复，请联系项目维护者。',
    reviewNote: '审核备注',
    accessStatus: '访问状态',
    accessNotApproved: 'API 访问权限审核通过后才能创建 API Key。',
    keyName: 'Key 名称',
    keyNamePlaceholder: '例如：我的题库机器人',
    createKey: '创建 API Key',
    creating: '创建中...',
    refresh: '刷新',
    activeKeys: 'Active Keys',
    totalRequests: '总调用量',
    rateLimit: '默认限流',
    requestsPerMinute: '次/分钟',
    newKeyTitle: '请立即保存这个 API Key',
    newKeyNotice: '出于安全原因，明文只会显示这一次。数据库仅保存 hash。',
    copy: '复制',
    copied: '已复制',
    keyList: 'API Keys',
    noKeys: '还没有 API Key。',
    name: '名称',
    prefix: '前缀',
    status: '状态',
    requests: '调用量',
    lastUsed: '最近调用',
    createdAt: '创建时间',
    actions: '操作',
    never: '从未',
    revoke: '撤销',
    revoked: '已撤销',
    active: '可用',
    apiExample: '调用示例',
    sessionMissing: '登录会话已过期，请重新登录。',
    loadFailed: '读取 API Key 失败。',
    createFailed: '创建 API Key 失败。',
    revokeFailed: '撤销 API Key 失败。',
    confirmRevoke: '确定要撤销这个 API Key 吗？撤销后无法恢复。',
    docsHint: '内容 API 使用 Authorization: Bearer kai_live_...，不接受匿名调用或登录 JWT。',
    requestFailed: '提交 API 访问申请失败。',
  },
  ja: {
    pageTitle: '開発者センター',
    title: '開発者センター',
    subtitle: 'サードパーティーツールと自動化向けの機能を管理できます。',
    apiTitle: 'JSON API',
    apiSubtitle: 'API Key を作成し、The Kai Project の問題と解答 JSON を利用できます。',
    apiFeatureDesc: '問題カタログ、解答本文、出典情報を構造化データとして利用できます。',
    apiFeatureCta: 'API Key を管理',
    available: '利用可能',
    notConfigured: 'Supabase が設定されていないため、JSON API は利用できません。',
    loginRequired: 'ログインすると API アクセスを申請し、API Key を管理できます。',
    login: 'ログイン / 登録',
    accessRequestTitle: 'API アクセスを申請',
    accessRequestDesc: '利用目的を簡単に記入してください。プロジェクトメンテナーの承認後、API Key を作成できます。',
    applicantName: '名前 / ニックネーム',
    applicantNamePlaceholder: '例：山田太郎',
    organization: '所属 / 学校 / プロジェクト',
    organizationPlaceholder: '任意',
    contactEmail: '連絡先メール',
    website: 'プロジェクト URL / GitHub',
    websitePlaceholder: '任意',
    intendedUse: '利用目的',
    intendedUsePlaceholder: '問題と解答データをどのように利用する予定かを 20 文字以上で記入してください。',
    commercialUse: '商用利用を含む',
    submitRequest: '申請を送信',
    submittingRequest: '送信中...',
    requestSubmitted: '申請を送信しました。プロジェクトメンテナーの確認をお待ちください。',
    requestPendingTitle: '申請は確認中です',
    requestPendingDesc: 'API アクセス申請は審査待ちです。承認後、このページで API Key を作成できます。',
    requestRejectedTitle: '申請は承認されませんでした',
    requestRejectedDesc: '利用目的を修正して再申請できます。',
    requestRevokedTitle: 'API アクセスは停止されています',
    requestRevokedDesc: 'このアカウントの API アクセスは停止されています。再開が必要な場合はメンテナーへ連絡してください。',
    reviewNote: '審査メモ',
    accessStatus: 'アクセス状態',
    accessNotApproved: 'API アクセスが承認されると API Key を作成できます。',
    keyName: 'Key 名称',
    keyNamePlaceholder: '例：自分の過去問ボット',
    createKey: 'API Key を作成',
    creating: '作成中...',
    refresh: '更新',
    activeKeys: 'Active Keys',
    totalRequests: '総リクエスト数',
    rateLimit: '既定の制限',
    requestsPerMinute: '回/分',
    newKeyTitle: 'この API Key を今すぐ保存してください',
    newKeyNotice: '安全のため、平文表示はこの一度だけです。データベースには hash のみ保存されます。',
    copy: 'コピー',
    copied: 'コピー済み',
    keyList: 'API Keys',
    noKeys: 'API Key はまだありません。',
    name: '名称',
    prefix: 'Prefix',
    status: '状態',
    requests: 'リクエスト数',
    lastUsed: '最終利用',
    createdAt: '作成日時',
    actions: '操作',
    never: '未使用',
    revoke: '無効化',
    revoked: '無効',
    active: '有効',
    apiExample: '利用例',
    sessionMissing: 'ログインセッションが期限切れです。再ログインしてください。',
    loadFailed: 'API Key の取得に失敗しました。',
    createFailed: 'API Key の作成に失敗しました。',
    revokeFailed: 'API Key の無効化に失敗しました。',
    confirmRevoke: 'この API Key を無効化しますか？元に戻すことはできません。',
    docsHint: 'Content API は Authorization: Bearer kai_live_... を使用します。匿名呼び出しやログイン JWT は受け付けません。',
    requestFailed: 'API アクセス申請の送信に失敗しました。',
  },
};

function formatDate(value, language, fallback) {
  if (!value) return fallback;
  try {
    return new Date(value).toLocaleString(language === 'ja' ? 'ja-JP' : 'zh-CN', {
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

export function DeveloperApiContent() {
  const [language] = useStoredLanguage();
  const lang = language === 'ja' ? 'ja' : 'zh';
  const t = T[lang];
  const { siteConfig } = useDocusaurusContext();
  const supabaseUrl = siteConfig?.customFields?.supabaseUrl || '';
  const apiBaseUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/kai-api` : '';
  const { isConfigured, user, isLoggedIn, authReady } = useSync();

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

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;
    if (!accessToken) throw new Error(t.sessionMissing);

    const { data, error } = await supabase.functions.invoke('developer-api-keys', {
      method,
      body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (error) throw error;
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
    ? `curl -H "Authorization: Bearer ${exampleKey}" \\\n  "${apiBaseUrl}/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"`
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
                  minLength={20}
                  maxLength={4000}
                  rows={5}
                  required
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

  if (!authReady && !user) {
    return (
      <div className={styles.shell}>
        <div className={styles.loadingPanel}>
          <FaRedo className={styles.spin} />
        </div>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div className={styles.shell}>
        <section className={styles.noticePanel}>
          <FaExclamationTriangle className={styles.noticeIcon} />
          <h1>{t.apiTitle}</h1>
          <p>{t.notConfigured}</p>
        </section>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className={styles.shell}>
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
    <div className={styles.shell}>
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
                    <td>{formatDate(key.lastUsedAt, lang, t.never)}</td>
                    <td>{formatDate(key.createdAt, lang, t.never)}</td>
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

function DevelopersContent() {
  const [language] = useStoredLanguage();
  const lang = language === 'ja' ? 'ja' : 'zh';
  const t = T[lang];

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </header>

      <div className={styles.featureGrid}>
        <Link to="/developers/api" className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <FaCode />
          </div>
          <div className={styles.featureMeta}>
            <span>{t.available}</span>
            <h2>{t.apiTitle}</h2>
            <p>{t.apiFeatureDesc}</p>
          </div>
          <strong>
            {t.apiFeatureCta}
            <FaArrowRight />
          </strong>
        </Link>
      </div>
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <Layout title={T.zh.pageTitle}>
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <DevelopersContent />}
      </BrowserOnly>
    </Layout>
  );
}
