/**
 * Leaderboard — 本周刷题排行榜
 *
 * 展示已登录用户中本周刷题量 Top 10。
 * 通过 Supabase RPC 在服务端聚合数据，邮箱脱敏显示。
 * 未登录或 Supabase 未配置时不渲染。
 */

import React, { useState, useEffect, useCallback } from 'react';
import { FaTrophy, FaSyncAlt } from 'react-icons/fa';
import { useSync } from '@site/src/hooks/useSync';
import { fetchWeeklyLeaderboard } from '@site/src/services/syncService';
import styles from './styles.module.css';

const T = {
  zh: {
    title: '本周刷题排行榜',
    unit: '题',
    you: '← 你',
    userLabel: '用户',
    empty: '本周暂无刷题记录，来当第一名吧！',
    loading: '加载中...',
    error: '加载失败，点击重试',
    loginHint: '登录后可查看排行榜',
  },
  ja: {
    title: '今週の学習ランキング',
    unit: '問',
    you: '← あなた',
    userLabel: 'ユーザー',
    empty: '今週はまだ記録がありません。1位を目指しましょう！',
    loading: '読み込み中...',
    error: '読み込み失敗。クリックして再試行',
    loginHint: 'ログインするとランキングを確認できます',
  },
};

export default function Leaderboard({ language = 'zh' }) {
  const { isConfigured, isLoggedIn } = useSync();
  const t = language === 'ja' ? T.ja : T.zh;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchWeeklyLeaderboard();
      setData(result);
      setFetched(true);
    } catch (e) {
      setError(e.message || 'Error');
    } finally {
      setLoading(false);
    }
  }, []);

  // 登录状态就绪后自动加载一次
  useEffect(() => {
    if (isConfigured && isLoggedIn && !fetched) {
      load();
    }
  }, [isConfigured, isLoggedIn, fetched, load]);

  if (!isConfigured) return null;

  // 未登录 → 不渲染（排行榜需要登录才能查看）
  if (!isLoggedIn) return null;

  const maxCount = data.length > 0 ? data[0].weekly_count : 1;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <FaTrophy className={styles.sectionTitleIcon} />
        {t.title}
      </h2>

      {loading && (
        <div className={styles.loading}>
          <FaSyncAlt className={styles.spin} />
          {t.loading}
        </div>
      )}

      {error && !loading && (
        <div
          className={styles.emptyState}
          style={{ cursor: 'pointer' }}
          onClick={load}
        >
          {t.error}
        </div>
      )}

      {!loading && !error && data.length === 0 && fetched && (
        <div className={styles.emptyState}>{t.empty}</div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className={styles.leaderboardList}>
          {data.map((item, idx) => {
            const rank = idx + 1;
            const rankClass = rank === 1 ? styles.rank1
              : rank === 2 ? styles.rank2
              : rank === 3 ? styles.rank3
              : '';
            const barPct = Math.round((item.weekly_count / maxCount) * 100);

            return (
              <div
                key={idx}
                className={`${styles.row} ${item.is_current_user ? styles.rowCurrent : ''}`}
              >
                <div className={`${styles.rank} ${rankClass}`}>
                  {rank}
                </div>
                <div className={styles.bar}>
                  <div
                    className={`${styles.barFill} ${rank <= 3 ? styles.barFillTop : ''}`}
                    style={{ width: `${barPct}%` }}
                  />
                </div>
                <span className={styles.count}>
                  {item.weekly_count}
                  <span className={styles.countUnit}>{t.unit}</span>
                </span>
                {item.is_current_user && (
                  <span className={styles.youTag}>{t.you}</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
