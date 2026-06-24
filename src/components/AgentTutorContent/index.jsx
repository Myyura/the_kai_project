import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlay,
  FaRedo,
  FaRobot,
  FaShieldAlt,
} from 'react-icons/fa';
import { useCurrentLanguage } from '@site/src/context/LanguageContext';
import { useSync } from '@site/src/hooks/useSync';
import {
  loadAgentBridgeStatus,
  startChat,
  updateAgentConsents,
} from '@site/src/services/agentBridgeService';
import styles from './styles.module.css';

const TEXT = {
  zh: {
    title: 'AI Tutor',
    subtitle: '管理学习辅导 agent 的授权、额度和短期会话。',
    loading: '正在加载 AI Tutor 状态...',
    notConfiguredTitle: 'Agent Bridge 尚未配置',
    notConfiguredText: '数据库骨架可用，但还需要配置 agent 服务地址和 JWK 密钥后才能创建会话。',
    unavailable: 'AI Tutor 暂不可用',
    loginRequired: '请先登录后再使用 AI Tutor。',
    loadFailed: '加载 AI Tutor 状态失败。',
    saveFailed: '更新授权失败。',
    sessionFailed: '创建会话失败。',
    retry: '重试',
    configured: '已配置',
    notConfigured: '未配置',
    bridgeStatus: 'Bridge 状态',
    plan: '套餐',
    usage: '本月消息',
    tokens: '本月 Token',
    unlimited: '不限',
    reserved: '预占',
    consentsTitle: '上下文授权',
    sessionTitle: 'Chat Session',
    startSession: '创建会话',
    starting: '创建中...',
    sessionReady: '会话已创建',
    copyToken: '复制 token',
    copied: '已复制',
    agentEndpoint: 'Agent endpoint',
    agentUserId: 'Agent user ID',
    sessionId: 'Session ID',
    expiresAt: '过期时间',
    tokenPreview: 'Session token',
    replyPreview: '回复',
    consentProgress: '学习进度',
    consentProgressDesc: '允许 agent 读取题目完成状态、复习状态和标签摘要。',
    consentNotes: '题目笔记',
    consentNotesDesc: '允许 agent 读取你保存的题目笔记。',
    consentHistory: '聊天历史',
    consentHistoryDesc: '允许后续私有 agent 使用跨会话对话历史。',
  },
  ja: {
    title: 'AI Tutor',
    subtitle: '学習支援 agent の権限、利用枠、短期セッションを管理します。',
    loading: 'AI Tutor の状態を読み込んでいます...',
    notConfiguredTitle: 'Agent Bridge は未設定です',
    notConfiguredText: 'データベースの骨格は利用できますが、セッション作成には agent URL と JWK 鍵の設定が必要です。',
    unavailable: 'AI Tutor は現在利用できません',
    loginRequired: 'AI Tutor を使うにはログインしてください。',
    loadFailed: 'AI Tutor の状態を読み込めませんでした。',
    saveFailed: '権限の更新に失敗しました。',
    sessionFailed: 'セッションを作成できませんでした。',
    retry: '再試行',
    configured: '設定済み',
    notConfigured: '未設定',
    bridgeStatus: 'Bridge 状態',
    plan: 'プラン',
    usage: '今月のメッセージ',
    tokens: '今月の Token',
    unlimited: '無制限',
    reserved: '予約',
    consentsTitle: 'コンテキスト権限',
    sessionTitle: 'Chat Session',
    startSession: 'セッション作成',
    starting: '作成中...',
    sessionReady: 'セッションを作成しました',
    copyToken: 'token をコピー',
    copied: 'コピー済み',
    agentEndpoint: 'Agent endpoint',
    agentUserId: 'Agent user ID',
    sessionId: 'Session ID',
    expiresAt: '有効期限',
    tokenPreview: 'Session token',
    replyPreview: '応答',
    consentProgress: '学習進捗',
    consentProgressDesc: 'agent が問題の完了状態、復習状態、タグ概要を読めるようにします。',
    consentNotes: '問題ノート',
    consentNotesDesc: 'agent が保存済みの問題ノートを読めるようにします。',
    consentHistory: 'チャット履歴',
    consentHistoryDesc: '今後の private agent がセッションをまたいだ会話履歴を使えるようにします。',
  },
  en: {
    title: 'AI Tutor',
    subtitle: 'Manage tutoring agent access, quota, and short-lived chat sessions.',
    loading: 'Loading AI Tutor status...',
    notConfiguredTitle: 'Agent Bridge is not configured',
    notConfiguredText: 'The database skeleton is available, but an agent URL and JWK keys are required before sessions can be created.',
    unavailable: 'AI Tutor is unavailable',
    loginRequired: 'Log in to use AI Tutor.',
    loadFailed: 'Failed to load AI Tutor status.',
    saveFailed: 'Failed to update consent.',
    sessionFailed: 'Failed to create a session.',
    retry: 'Retry',
    configured: 'Configured',
    notConfigured: 'Not configured',
    bridgeStatus: 'Bridge status',
    plan: 'Plan',
    usage: 'Messages this month',
    tokens: 'Tokens this month',
    unlimited: 'Unlimited',
    reserved: 'reserved',
    consentsTitle: 'Context Access',
    sessionTitle: 'Chat Session',
    startSession: 'Create session',
    starting: 'Creating...',
    sessionReady: 'Session created',
    copyToken: 'Copy token',
    copied: 'Copied',
    agentEndpoint: 'Agent endpoint',
    agentUserId: 'Agent user ID',
    sessionId: 'Session ID',
    expiresAt: 'Expires at',
    tokenPreview: 'Session token',
    replyPreview: 'Reply',
    consentProgress: 'Study progress',
    consentProgressDesc: 'Allow the agent to read problem status, review status, and tag summaries.',
    consentNotes: 'Problem notes',
    consentNotesDesc: 'Allow the agent to read saved problem notes.',
    consentHistory: 'Chat history',
    consentHistoryDesc: 'Allow the future private agent to use conversation history across sessions.',
  },
};

function formatNumber(value) {
  const number = Number(value || 0);
  return Number.isFinite(number) ? number.toLocaleString() : '0';
}

function formatLimit(used, limit, t) {
  const safeLimit = Number(limit || 0);
  return `${formatNumber(used)} / ${safeLimit > 0 ? formatNumber(safeLimit) : t.unlimited}`;
}

function StatItem({ label, value, sub }) {
  return (
    <div className={styles.statItem}>
      <span>{label}</span>
      <strong>{value}</strong>
      {sub ? <small>{sub}</small> : null}
    </div>
  );
}

function ToggleRow({ label, description, checked, disabled, saving, onChange }) {
  return (
    <label className={styles.toggleRow}>
      <span className={styles.toggleText}>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled || saving}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}

export function AgentTutorContent({ embedded = false } = {}) {
  const language = useCurrentLanguage();
  const t = TEXT[language] || TEXT.zh;
  const { isConfigured, isLoggedIn, authReady } = useSync();
  const [status, setStatus] = useState(null);
  const [session, setSession] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savingField, setSavingField] = useState('');
  const [creating, setCreating] = useState(false);

  const consents = status?.consents || {};
  const usage = status?.usage || {};
  const entitlement = status?.entitlements || {};
  const configured = Boolean(status?.configured);

  const loadStatus = useCallback(async () => {
    if (!authReady || !isLoggedIn) return;
    setLoading(true);
    setMessage(null);
    try {
      const data = await loadAgentBridgeStatus();
      setStatus(data);
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.loadFailed });
    } finally {
      setLoading(false);
    }
  }, [authReady, isLoggedIn, t.loadFailed]);

  useEffect(() => {
    void loadStatus();
  }, [loadStatus]);

  const consentItems = useMemo(() => [
    {
      key: 'progress',
      label: t.consentProgress,
      description: t.consentProgressDesc,
    },
    {
      key: 'notes',
      label: t.consentNotes,
      description: t.consentNotesDesc,
    },
    {
      key: 'history',
      label: t.consentHistory,
      description: t.consentHistoryDesc,
    },
  ], [t]);

  const handleConsentChange = async (key, value) => {
    const nextConsents = {
      progress: Boolean(consents.progress),
      notes: Boolean(consents.notes),
      history: Boolean(consents.history),
      [key]: value,
    };
    setSavingField(key);
    setMessage(null);
    setStatus((current) => current ? {
      ...current,
      consents: {
        ...current.consents,
        ...nextConsents,
      },
    } : current);
    try {
      const data = await updateAgentConsents(nextConsents);
      setStatus((current) => current ? {
        ...current,
        consents: data?.consents || nextConsents,
      } : current);
      setSession(null);
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.saveFailed });
      await loadStatus();
    } finally {
      setSavingField('');
    }
  };

  // 经 agent-session 服务端代理发一条测试消息，验证端到端链路（浏览器不直连 amaterasu、不接触 token）。
  const handleCreateSession = async () => {
    setCreating(true);
    setMessage(null);
    try {
      const data = await startChat({ prompt: 'ping' });
      setSession(data);
      setMessage({ type: 'success', text: t.sessionReady });
    } catch (error) {
      setMessage({ type: 'error', text: error?.message || t.sessionFailed });
    } finally {
      setCreating(false);
    }
  };

  if (!authReady || loading && !status) {
    return (
      <section className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <div className={styles.loadingPanel}>{t.loading}</div>
      </section>
    );
  }

  if (!isConfigured || !isLoggedIn) {
    return (
      <section className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
        <div className={styles.noticePanel}>
          <FaShieldAlt className={styles.noticeIcon} />
          <h1>{t.unavailable}</h1>
          <p>{!isConfigured ? t.notConfiguredText : t.loginRequired}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.shell} ${embedded ? styles.embeddedShell : ''}`}>
      <header className={styles.header}>
        <div>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
        <button className={styles.secondaryButton} type="button" onClick={loadStatus} disabled={loading}>
          <FaRedo />
          <span>{t.retry}</span>
        </button>
      </header>

      {message ? (
        <div className={`${styles.message} ${message.type === 'success' ? styles.messageSuccess : styles.messageError}`}>
          {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
          <span>{message.text}</span>
        </div>
      ) : null}

      {!configured ? (
        <div className={styles.statusPanel}>
          <FaExclamationTriangle />
          <div>
            <strong>{t.notConfiguredTitle}</strong>
            <p>{t.notConfiguredText}</p>
          </div>
        </div>
      ) : null}

      <div className={styles.stats}>
        <StatItem
          label={t.bridgeStatus}
          value={configured ? t.configured : t.notConfigured}
          sub={status?.agentUserId || '-'}
        />
        <StatItem
          label={t.plan}
          value={entitlement.plan || 'free'}
          sub={entitlement.status || 'active'}
        />
        <StatItem
          label={t.usage}
          value={formatLimit(usage.messagesUsed, usage.messageLimit || entitlement.monthlyMessageLimit, t)}
          sub={`${formatNumber(usage.messagesReserved)} ${t.reserved}`}
        />
        <StatItem
          label={t.tokens}
          value={formatLimit(usage.totalTokens, usage.tokenLimit || entitlement.monthlyTokenLimit, t)}
          sub={`${formatNumber(usage.inputTokens)} / ${formatNumber(usage.outputTokens)}`}
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.panel}>
          <h2>
            <FaShieldAlt />
            <span>{t.consentsTitle}</span>
          </h2>
          <div className={styles.toggleList}>
            {consentItems.map((item) => (
              <ToggleRow
                key={item.key}
                label={item.label}
                description={item.description}
                checked={Boolean(consents[item.key])}
                disabled={!configured}
                saving={savingField === item.key}
                onChange={(value) => handleConsentChange(item.key, value)}
              />
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <h2>
            <FaRobot />
            <span>{t.sessionTitle}</span>
          </h2>
          <div className={styles.sessionActions}>
            <button
              className={styles.primaryButton}
              type="button"
              disabled={!configured || creating}
              onClick={handleCreateSession}
            >
              <FaPlay />
              <span>{creating ? t.starting : t.startSession}</span>
            </button>
          </div>

          {session ? (
            <dl className={styles.sessionDetails}>
              <div>
                <dt>{t.sessionId}</dt>
                <dd>{session.sessionId || '-'}</dd>
              </div>
              <div>
                <dt>{t.replyPreview}</dt>
                <dd>{session.reply || '-'}</dd>
              </div>
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
