/**
 * CloudSyncPanel — 云同步区块
 *
 * 风格与 progress 页面其他 section 保持一致：
 *   section → sectionTitle（icon + text） → 内容区
 * 未登录显示提示卡片，已登录显示用户信息 + 同步按钮网格。
 */

import React, { useState } from 'react';
import {
  FaCloud, FaCloudUploadAlt, FaCloudDownloadAlt, FaSyncAlt,
  FaSignOutAlt, FaCheck, FaExclamationTriangle,
  FaSignInAlt, FaUser,
} from 'react-icons/fa';
import Link from '@docusaurus/Link';
import { useSync } from '@site/src/hooks/useSync';
import styles from './styles.module.css';

export default function CloudSyncPanel({ language = 'zh' }) {
  const {
    isConfigured, user, isLoggedIn, syncing,
    lastSynced, error,
    sync, push, pull, signOut,
  } = useSync();

  const [actionMsg, setActionMsg] = useState(null);
  const t = language === 'ja' ? T.ja : T.zh;

  if (!isConfigured) return null;

  const showMsg = (msg, isError = false) => {
    setActionMsg({ text: msg, isError });
    setTimeout(() => setActionMsg(null), 4000);
  };

  const handleSync = async () => {
    try {
      const result = await sync();
      showMsg(t.syncDone(result.progressKeys, result.notesKeys));
    } catch (e) { showMsg(e.message, true); }
  };

  const handlePush = async () => {
    try {
      await push();
      showMsg(t.pushDone);
    } catch (e) { showMsg(e.message, true); }
  };

  const handlePull = async () => {
    try {
      const r = await pull();
      showMsg(r.pulled ? t.pullDone : t.pullEmpty);
    } catch (e) { showMsg(e.message, true); }
  };

  const handleSignOut = async () => {
    await signOut();
    showMsg(t.logoutOk);
  };

  const msgData = actionMsg || (error ? { text: error, isError: true } : null);

  return (
    <section className={styles.section}>
      {/* 标题行 — 与页面其他 section 一致 */}
      <h2 className={styles.sectionTitle}>
        <FaCloud className={styles.sectionTitleIcon} />
        {t.title}
        {isLoggedIn && (
          <span className={styles.statusBadge}>{t.loggedIn}</span>
        )}
      </h2>

      {/* 消息提示 */}
      {msgData && (
        <div className={`${styles.toast} ${msgData.isError ? styles.toastError : styles.toastSuccess}`}>
          {msgData.isError
            ? <FaExclamationTriangle className={styles.toastIcon} />
            : <FaCheck className={styles.toastIcon} />}
          <span>{msgData.text}</span>
        </div>
      )}

      {!isLoggedIn ? (
        /* ─── 未登录卡片 ─── */
        <div className={styles.promptCard}>
          <p className={styles.promptText}>{t.loginFirst}</p>
          <Link to="/login" className={styles.promptBtn}>
            <FaSignInAlt /> {t.goLogin}
          </Link>
        </div>
      ) : (
        /* ─── 已登录 ─── */
        <>
          {/* 用户行 */}
          <div className={styles.userRow}>
            <span className={styles.userLabel}>
              <FaUser className={styles.userIcon} />
              {user.email || t.loggedIn}
            </span>
            <button onClick={handleSignOut} className={styles.logoutBtn}>
              <FaSignOutAlt /> {t.logout}
            </button>
          </div>

          {/* 同步按钮网格 */}
          <div className={styles.syncGrid}>
            <button onClick={handleSync} className={`${styles.syncCard} ${styles.syncCardPrimary}`} disabled={syncing}>
              <FaSyncAlt className={`${styles.syncCardIcon} ${syncing ? styles.spin : ''}`} />
              <span className={styles.syncCardLabel}>{t.syncMerge}</span>
              <span className={styles.syncCardDesc}>{t.syncMergeDesc}</span>
            </button>
            <button onClick={handlePush} className={styles.syncCard} disabled={syncing}>
              <FaCloudUploadAlt className={styles.syncCardIcon} />
              <span className={styles.syncCardLabel}>{t.push}</span>
              <span className={styles.syncCardDesc}>{t.pushDesc}</span>
            </button>
            <button onClick={handlePull} className={styles.syncCard} disabled={syncing}>
              <FaCloudDownloadAlt className={styles.syncCardIcon} />
              <span className={styles.syncCardLabel}>{t.pull}</span>
              <span className={styles.syncCardDesc}>{t.pullDesc}</span>
            </button>
          </div>

          {/* 上次同步 */}
          {lastSynced && (
            <p className={styles.lastSynced}>
              {t.lastSynced}: {new Date(lastSynced).toLocaleString()}
            </p>
          )}
        </>
      )}
    </section>
  );
}

// ── 翻译 ────────────────────────────────────────────────────

const T = {
  zh: {
    title: '云同步',
    loginFirst: '登录后可跨设备同步做题进度和笔记。数据通过 Supabase 加密存储。',
    goLogin: '前往登录',
    loggedIn: '已登录',
    logout: '退出',
    syncMerge: '双向合并',
    syncMergeDesc: '按时间戳合并（推荐）',
    push: '推送到云端',
    pushDesc: '本地覆盖云端',
    pull: '从云端拉取',
    pullDesc: '云端覆盖本地',
    lastSynced: '上次同步',
    syncDone: (p, n) => `同步完成！进度 ${p} 条，笔记 ${n} 条`,
    pushDone: '推送成功！',
    pullDone: '拉取成功！',
    pullEmpty: '云端暂无数据。',
    logoutOk: '已退出登录。',
  },
  ja: {
    title: 'クラウド同期',
    loginFirst: 'ログインすると、デバイス間で進捗とメモを同期できます。Supabaseで暗号化保存。',
    goLogin: 'ログインページへ',
    loggedIn: 'ログイン中',
    logout: 'ログアウト',
    syncMerge: '双方向マージ',
    syncMergeDesc: 'タイムスタンプで統合（推奨）',
    push: 'クラウドへ送信',
    pushDesc: 'ローカルで上書き',
    pull: 'クラウドから取得',
    pullDesc: 'クラウドで上書き',
    lastSynced: '最終同期',
    syncDone: (p, n) => `同期完了！進捗 ${p} 件、メモ ${n} 件`,
    pushDone: '送信成功！',
    pullDone: '取得成功！',
    pullEmpty: 'クラウドにデータがありません。',
    logoutOk: 'ログアウトしました。',
  },
};
