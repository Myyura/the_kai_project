import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useAllProgress, STATUS } from '@site/src/hooks/useProgress';
import styles from './progress.module.css';

// 路径段 → 大学显示名
const UNIV_MAP = {
  'tokyo-university': '東京大学',
  'kyoto-university': '京都大学',
  'osaka-university': '大阪大学',
  'tohoku-university': '東北大学',
  'nagoya-university': '名古屋大学',
  'hokkaido-university': '北海道大学',
  'kyushu-university': '九州大学',
  'TITech': '東京科学大学（旧東工大）',
  'tsukuba-university': '筑波大学',
  'kobe-university': '神戸大学',
  'hiroshima-university': '広島大学',
  'kanazawa-university': '金沢大学',
  'UEC': '電気通信大学',
  'TUAT': '東京農工大学',
  'waseda-university': '早稲田大学',
  'keio-university': '慶應義塾大学',
};

const extractUniv = (docId = '') => {
  const seg = docId.split('/')[0] || '';
  return UNIV_MAP[seg] || seg || '不明';
};

// 语言快照
const getLanguageFromDOM = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

const useStoredLanguage = () => {
  const language = React.useSyncExternalStore(
    (cb) => {
      window.addEventListener('languageChange', cb);
      return () => window.removeEventListener('languageChange', cb);
    },
    getLanguageFromDOM,
    () => 'zh'
  );
  const toggle = () => {
    const next = language === 'zh' ? 'ja' : 'zh';
    localStorage.setItem('preferredLanguage', next);
    document.documentElement.setAttribute('data-lang', next);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: next }));
  };
  return [language, toggle];
};

const T = {
  zh: {
    pageTitle: '做题进度总览',
    pageSubtitle: '所有标记过的过去问进度，数据保存在本地浏览器中',
    completed: '已完成',
    reviewing: '待复习',
    totalTracked: '已追踪',
    noData: '暂无记录，去做几道题并标记进度吧！',
    goExam: '浏览过去问',
    clearAll: '清除全部进度',
    confirmClear: '确定要清除所有进度记录吗？此操作不可恢复。',
    byUniversity: '按大学统计',
    recentActivity: '进度记录',
    univName: '大学',
    done: '完成',
    review: '复习',
    lastUpdated: '更新于',
    open: '查看',
  },
  ja: {
    pageTitle: '学習進捗一覧',
    pageSubtitle: 'マークした過去問の進捗。データはブラウザのローカルストレージに保存されます。',
    completed: '完了',
    reviewing: '要復習',
    totalTracked: '追跡中',
    noData: '記録がありません。問題を解いて進捗を記録してみよう！',
    goExam: '過去問を見る',
    clearAll: '全て削除',
    confirmClear: '全ての進捗記録を削除しますか？この操作は元に戻せません。',
    byUniversity: '大学別集計',
    recentActivity: '進捗記録',
    univName: '大学',
    done: '完了',
    review: '復習',
    lastUpdated: '更新',
    open: '開く',
  },
};

const StatusBadge = ({ status, t }) => {
  if (status === STATUS.COMPLETED)
    return <span className={`${styles.badge} ${styles.badgeCompleted}`}>✅ {t.completed}</span>;
  if (status === STATUS.REVIEWING)
    return <span className={`${styles.badge} ${styles.badgeReviewing}`}>🔄 {t.reviewing}</span>;
  return null;
};

function ProgressPageInner() {
  const [language, toggleLanguage] = useStoredLanguage();
  const t = T[language] ?? T.zh;
  const { entries, stats, clearAll } = useAllProgress();

  // 按大学分组
  const univGroups = React.useMemo(() => {
    const map = {};
    entries.forEach((e) => {
      const univ = extractUniv(e.id);
      if (!map[univ]) map[univ] = { completed: 0, reviewing: 0, items: [] };
      map[univ].items.push(e);
      if (e.status === STATUS.COMPLETED) map[univ].completed++;
      if (e.status === STATUS.REVIEWING) map[univ].reviewing++;
    });
    return Object.entries(map).sort((a, b) => b[1].items.length - a[1].items.length);
  }, [entries]);

  // 按更新时间降序排列
  const sortedEntries = React.useMemo(
    () => [...entries].sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)),
    [entries]
  );

  const handleClear = () => {
    if (window.confirm(t.confirmClear)) clearAll();
  };

  const total = stats.total;

  return (
    <div className={styles.page}>
      {/* 头部 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
          <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
        </div>
        <div className={styles.langSwitch}>
          <button
            onClick={() => language !== 'zh' && toggleLanguage()}
            className={`${styles.langBtn} ${language === 'zh' ? styles.langBtnActive : ''}`}
          >中文</button>
          <span className={styles.langDivider}>/</span>
          <button
            onClick={() => language !== 'ja' && toggleLanguage()}
            className={`${styles.langBtn} ${language === 'ja' ? styles.langBtnActive : ''}`}
          >日本語</button>
        </div>
      </header>

      {/* 统计卡片 */}
      <div className={styles.statsRow}>
        <div className={`${styles.statCard} ${styles.statCardCompleted}`}>
          <span className={styles.statNumber}>{stats.completed}</span>
          <span className={styles.statLabel}>✅ {t.completed}</span>
        </div>
        <div className={`${styles.statCard} ${styles.statCardReviewing}`}>
          <span className={styles.statNumber}>{stats.reviewing}</span>
          <span className={styles.statLabel}>🔄 {t.reviewing}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{total}</span>
          <span className={styles.statLabel}>📋 {t.totalTracked}</span>
        </div>
      </div>

      {/* 总进度条 */}
      {total > 0 && (
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${styles.progressFillCompleted}`}
              style={{ width: `${(stats.completed / total) * 100}%` }}
            />
            <div
              className={`${styles.progressFill} ${styles.progressFillReviewing}`}
              style={{ width: `${(stats.reviewing / total) * 100}%` }}
            />
          </div>
          <span className={styles.progressLabel}>
            {stats.completed}/{total}
          </span>
        </div>
      )}

      {total === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📝</div>
          <p className={styles.emptyText}>{t.noData}</p>
          <Link to="/docs/intro" className={styles.goBtn}>{t.goExam} →</Link>
        </div>
      ) : (
        <>
          {/* 按大学统计 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.byUniversity}</h2>
            <div className={styles.univGrid}>
              {univGroups.map(([univ, data]) => (
                <div key={univ} className={styles.univCard}>
                  <div className={styles.univName}>{univ}</div>
                  <div className={styles.univStats}>
                    <span className={styles.univDone}>✅ {data.completed}</span>
                    <span className={styles.univReview}>🔄 {data.reviewing}</span>
                    <span className={styles.univTotal}>📋 {data.items.length}</span>
                  </div>
                  <div className={styles.univBar}>
                    <div
                      className={`${styles.univBarFill} ${styles.univBarCompleted}`}
                      style={{ width: `${(data.completed / data.items.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 题目列表 */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t.recentActivity}</h2>
              <button onClick={handleClear} className={styles.clearBtn}>
                🗑 {t.clearAll}
              </button>
            </div>
            <div className={styles.entryList}>
              {sortedEntries.map((entry) => (
                <div key={entry.id} className={styles.entryRow}>
                  <div className={styles.entryInfo}>
                    <span className={styles.entryUniv}>{extractUniv(entry.id)}</span>
                    <a href={entry.permalink || `/docs/${entry.id}`} className={styles.entryTitle}>
                      {entry.title || entry.id}
                    </a>
                  </div>
                  <div className={styles.entryMeta}>
                    <StatusBadge status={entry.status} t={t} />
                    {entry.updatedAt && (
                      <span className={styles.entryDate}>
                        {t.lastUpdated}: {new Date(entry.updatedAt).toLocaleDateString('zh-CN')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default function ProgressPage() {
  return (
    <Layout title="进度总览 | Progress">
      <BrowserOnly fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>}>
        {() => <ProgressPageInner />}
      </BrowserOnly>
    </Layout>
  );
}
