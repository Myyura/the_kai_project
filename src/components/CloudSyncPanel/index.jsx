/**
 * CloudSyncPanel — 云同步区块
 *
 * 风格与 progress 页面其他 section 保持一致：
 *   section → sectionTitle（icon + text） → 内容区
 * 未登录显示提示卡片，已登录显示用户信息 + 同步按钮网格。
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  FaCloud, FaCloudUploadAlt, FaCloudDownloadAlt, FaSyncAlt,
  FaSignOutAlt, FaCheck, FaExclamationTriangle,
  FaSignInAlt, FaUser,
} from 'react-icons/fa';
import Link from '@docusaurus/Link';
import { useSync } from '@site/src/hooks/useSync';
import {getUiMessages} from '@site/src/i18n/messages';
import styles from './styles.module.css';

export default function CloudSyncPanel({ language = 'zh' }) {
  const {
    isConfigured, user, isLoggedIn, syncing,
    lastSynced, error,
    sync, push, pull, signOut,
  } = useSync();

  const [actionMsg, setActionMsg] = useState(null);
  const msgTimerRef = useRef(null);
  const t = getUiMessages('cloudSync', language);

  useEffect(() => {
    return () => { if (msgTimerRef.current) clearTimeout(msgTimerRef.current); };
  }, []);

  if (!isConfigured) return null;

  const showMsg = (msg, isError = false) => {
    setActionMsg({ text: msg, isError });
    if (msgTimerRef.current) clearTimeout(msgTimerRef.current);
    msgTimerRef.current = setTimeout(() => setActionMsg(null), 4000);
  };

  const handleSync = async () => {
    try {
      const result = await sync();
      showMsg(t.syncDone(result.progressKeys, result.notesKeys, result.conflictsCount || 0));
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
      showMsg(r.pulled ? t.pullDone(r.conflictsCount || 0) : t.pullEmpty);
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
