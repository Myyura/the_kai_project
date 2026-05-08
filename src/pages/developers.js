import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
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
    subtitle: '为第三方工具创建 API Key，调用 The Kai Project 的题目与答案 JSON 数据。',
    notConfigured: 'Supabase 尚未配置，暂时无法使用开发者 API。',
    loginRequired: '登录后可以创建和管理 API Key。',
    login: '登录 / 注册',
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
  },
  ja: {
    pageTitle: '開発者センター',
    title: '開発者センター',
    subtitle: 'サードパーティーツール用の API Key を作成し、The Kai Project の問題と解答 JSON を利用できます。',
    notConfigured: 'Supabase が設定されていないため、開発者 API は利用できません。',
    loginRequired: 'ログインすると API Key を作成・管理できます。',
    login: 'ログイン / 登録',
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

function DevelopersContent() {
  const [language] = useStoredLanguage();
  const lang = language === 'ja' ? 'ja' : 'zh';
  const t = T[lang];
  const { siteConfig } = useDocusaurusContext();
  const supabaseUrl = siteConfig?.customFields?.supabaseUrl || '';
  const apiBaseUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/kai-api` : '';
  const { isConfigured, user, isLoggedIn, authReady } = useSync();

  const [keys, setKeys] = useState([]);
  const [keyName, setKeyName] = useState('');
  const [newKey, setNewKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [revokingId, setRevokingId] = useState('');
  const [message, setMessage] = useState(null);

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
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.loadFailed });
    } finally {
      setLoading(false);
    }
  }, [invokeDeveloperFunction, isLoggedIn, t.loadFailed]);

  useEffect(() => {
    if (authReady && isLoggedIn) {
      void loadKeys();
    }
  }, [authReady, isLoggedIn, loadKeys]);

  const handleCreate = async (event) => {
    event.preventDefault();
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
          <h1>{t.title}</h1>
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
          <h1>{t.title}</h1>
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
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
        <button type="button" className={styles.secondaryButton} onClick={loadKeys} disabled={loading}>
          <FaRedo className={loading ? styles.spin : ''} /> {t.refresh}
        </button>
      </header>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span>{t.activeKeys}</span>
          <strong>{activeCount}/3</strong>
        </div>
        <div className={styles.statItem}>
          <span>{t.totalRequests}</span>
          <strong>{totalRequests}</strong>
        </div>
        <div className={styles.statItem}>
          <span>{t.rateLimit}</span>
          <strong>60 {t.requestsPerMinute}</strong>
        </div>
      </div>

      {message && (
        <div className={`${styles.message} ${message.type === 'error' ? styles.messageError : styles.messageSuccess}`}>
          {message.type === 'error' ? <FaExclamationTriangle /> : <FaCheck />}
          <span>{message.text}</span>
        </div>
      )}

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
          <button type="submit" className={styles.primaryButton} disabled={creating || activeCount >= 3}>
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

export default function DevelopersPage() {
  return (
    <Layout title={T.zh.pageTitle}>
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <DevelopersContent />}
      </BrowserOnly>
    </Layout>
  );
}
