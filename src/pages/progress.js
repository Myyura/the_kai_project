import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {
  FaCheckCircle, FaRedo, FaClipboardList, FaTrashAlt,
  FaFileAlt, FaArrowRight, FaBuilding, FaTag,
  FaBell, FaFire, FaCalendarAlt
} from 'react-icons/fa';
import { useAllProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import styles from './progress.module.css';

const toTagSlug = (tag) =>
  tag
    .toLowerCase()
    .replace(/[^\w\u3000-\u9fff\uac00-\ud7af\u3040-\u30ff]+/g, '-')
    .replace(/^-+|-+$/g, '');

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

const toDateKey = (ts) => {
  const d = new Date(ts);
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-');
};

const MONTHS_ZH = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const MONTHS_JA = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

const CELL_PX = 13;
const GAP_PX = 3;
const GRID_COLS = 52;

// 热力图组件
const StudyHeatmap = ({ entries, t, language }) => {
  const MONTHS = language === 'ja' ? MONTHS_JA : MONTHS_ZH;

  const activityMap = React.useMemo(() => {
    const map = {};
    entries.forEach((e) => {
      if (!e.updatedAt) return;
      const key = toDateKey(e.updatedAt);
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [entries]);

  const { cells, monthLabels } = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // 从51周前的周日开始
    const gridStart = new Date(today);
    gridStart.setDate(today.getDate() - today.getDay() - 51 * 7);

    const cells = [];
    for (let i = 0; i < GRID_COLS * 7; i++) {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);
      const key = toDateKey(d.getTime());
      const count = activityMap[key] || 0;
      const isFuture = d > today;
      const level = isFuture ? 'future'
        : count === 0 ? '0'
        : count === 1 ? '1'
        : count <= 3 ? '2'
        : count <= 5 ? '3'
        : '4';
      cells.push({ key, count, isFuture, level });
    }

    const monthLabels = [];
    let lastMonth = -1;
    for (let w = 0; w < GRID_COLS; w++) {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + w * 7);
      const m = d.getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ col: w, label: MONTHS[m] });
        lastMonth = m;
      }
    }
    return { cells, monthLabels };
  }, [activityMap, MONTHS]);

  const totalActivity = Object.values(activityMap).reduce((a, b) => a + b, 0);

  return (
    <section className={styles.section}>
      <div className={styles.heatmapHeader}>
        <h2 className={styles.sectionTitle}>
          <FaFire className={styles.sectionTitleIcon} style={{ color: '#ef4444' }} />
          {t.heatmap}
        </h2>
        <span className={styles.heatmapTotalCount}>{totalActivity} {t.activitiesUnit}</span>
      </div>
      <div className={styles.heatmapScrollWrap}>
        <div className={styles.heatmapInner}>
          <div className={styles.heatmapMonthRow}>
            {monthLabels.map(({ col, label }) => (
              <span
                key={col}
                className={styles.heatmapMonthLabel}
                style={{ left: `${col * (CELL_PX + GAP_PX)}px` }}
              >
                {label}
              </span>
            ))}
          </div>
          <div className={styles.heatmapGrid}>
            {cells.map((cell, i) => (
              <div
                key={i}
                className={`${styles.heatmapCell} ${styles[`heatmapL${cell.level}`]}`}
                title={cell.isFuture ? '' : `${cell.key}：${cell.count} ${t.activitiesUnit}`}
              />
            ))}
          </div>
          <div className={styles.heatmapLegend}>
            <span>{t.less}</span>
            {['0','1','2','3','4'].map((l) => (
              <div key={l} className={`${styles.heatmapCell} ${styles[`heatmapL${l}`]}`} />
            ))}
            <span>{t.more}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const URGENCY_ORDER = { critical: 0, urgent: 1, normal: 2, soon: 3 };

// 遗忘曲线提醒组件
const ReviewReminderSection = ({ entries, t }) => {
  const items = React.useMemo(() => {
    return entries
      .filter((e) => e.status === STATUS.REVIEWING)
      .map((e) => ({ ...e, reviewInfo: getReviewInfo(e.updatedAt, e.reviewCount ?? 0) }))
      .filter((e) => e.reviewInfo && e.reviewInfo.due)
      .sort((a, b) => (URGENCY_ORDER[a.reviewInfo.urgency] ?? 9) - (URGENCY_ORDER[b.reviewInfo.urgency] ?? 9));
  }, [entries]);

  if (items.length === 0) return null;

  const UrgencyBadge = ({ reviewInfo }) => {
    if (reviewInfo.urgency === 'critical')
      return <span className={`${styles.urgencyBadge} ${styles.urgencyCritical}`}>{t.critical}</span>;
    if (reviewInfo.urgency === 'urgent')
      return <span className={`${styles.urgencyBadge} ${styles.urgencyUrgent}`}>{t.urgent}</span>;
    return <span className={`${styles.urgencyBadge} ${styles.urgencyNormal}`}>{t.dueNow}</span>;
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <FaBell className={styles.sectionTitleIcon} style={{ color: '#ef4444' }} />
        {t.reviewDue}
        <span className={`${styles.sectionCount} ${styles.sectionCountAlert}`}>{items.length}</span>
      </h2>
      <div className={styles.reminderList}>
        {items.map((entry) => (
          <div
            key={entry.id}
            className={`${styles.reminderRow} ${entry.reviewInfo.urgency === 'critical' ? styles.reminderCritical : entry.reviewInfo.urgency === 'urgent' ? styles.reminderUrgent : ''}`}
          >
            <div className={styles.entryInfo}>
              <span className={styles.entryUniv}>
                <FaBuilding className={styles.entryUnivIcon} />
                {extractUniv(entry.id)}
              </span>
              <a href={entry.permalink || `/docs/${entry.id}`} className={styles.entryTitle}>
                {entry.title || entry.id}
              </a>
            </div>
            <div className={styles.reminderMeta}>
              <UrgencyBadge reviewInfo={entry.reviewInfo} />
              {entry.reviewInfo.urgency === 'critical' && (
                <span className={styles.reminderSub}>{t.overdueDays(entry.reviewInfo.overdueDays)}</span>
              )}
              {entry.reviewInfo.urgency === 'normal' && (
                <span className={styles.reminderSub}>{t.daysLater(entry.reviewInfo.daysUntil)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 最近练习组件
const RecentPracticeSection = ({ entries, t }) => {
  const items = React.useMemo(() => {
    const sevenDaysAgo = Date.now() - 7 * 86400000;
    return entries
      .filter((e) => e.updatedAt && e.updatedAt >= sevenDaysAgo)
      .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
  }, [entries]);

  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <FaCalendarAlt className={styles.sectionTitleIcon} style={{ color: '#3b82f6' }} />
        {t.recentPractice}
        <span className={styles.sectionCount}>{items.length}</span>
      </h2>
      <div className={styles.entryList}>
        {items.map((entry) => (
          <div key={entry.id} className={styles.entryRow}>
            <div className={styles.entryInfo}>
              <span className={styles.entryUniv}>
                <FaBuilding className={styles.entryUnivIcon} />
                {extractUniv(entry.id)}
              </span>
              <a href={entry.permalink || `/docs/${entry.id}`} className={styles.entryTitle}>
                {entry.title || entry.id}
              </a>
            </div>
            <div className={styles.entryMeta}>
              <StatusBadge status={entry.status} t={t} />
              {entry.updatedAt && (
                <span className={styles.entryDate}>
                  {new Date(entry.updatedAt).toLocaleDateString('zh-CN')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
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
    byTag: '按知识点统计',
    byUniversity: '按大学统计',
    sectionCompleted: '已完成题目',
    sectionReviewing: '待复习题目',
    univName: '大学',
    done: '完成',
    review: '复习',
    lastUpdated: '更新于',
    open: '查看',
    heatmap: '学习热力图',
    less: '少',
    more: '多',
    activitiesUnit: '题',
    reviewDue: '遗忘曲线提醒',
    recentPractice: '最近7天练习',
    critical: '严重逾期',
    urgent: '今日到期',
    dueNow: '需要复习',
    overdueDays: (d) => `逾期 ${d} 天`,
    daysLater: (d) => `还有 ${d} 天`,
    nextReview: '下次复习',
    nextReviewToday: '今日复习',
    nextReviewOverdue: (d) => `已逾期 ${d} 天`,
    nextReviewIn: (d) => `${d} 天后`,
    round: (n, total) => `第 ${n + 1} / ${total} 轮`,
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
    byTag: 'タグ別集計',
    byUniversity: '大学別集計',
    sectionCompleted: '完了問題',
    sectionReviewing: '要復習問題',
    univName: '大学',
    done: '完了',
    review: '復習',
    lastUpdated: '更新',
    open: '開く',
    heatmap: '学習ヒートマップ',
    less: '少',
    more: '多',
    activitiesUnit: '問',
    reviewDue: '忘却曲線リマインダー',
    recentPractice: '直近7日の練習',
    critical: '大幅超過',
    urgent: '本日期限',
    dueNow: '要復習',
    overdueDays: (d) => `${d}日超過`,
    daysLater: (d) => `あと${d}日`,
    nextReview: '次回復習',
    nextReviewToday: '今日復習',
    nextReviewOverdue: (d) => `${d}日超過`,
    nextReviewIn: (d) => `${d}日後`,
    round: (n, total) => `第 ${n + 1} / ${total} 回目`,
  },
};

const StatusBadge = ({ status, t }) => {
  if (status === STATUS.COMPLETED)
    return (
      <span className={`${styles.badge} ${styles.badgeCompleted}`}>
        <FaCheckCircle className={styles.badgeIcon} /> {t.completed}
      </span>
    );
  if (status === STATUS.REVIEWING)
    return (
      <span className={`${styles.badge} ${styles.badgeReviewing}`}>
        <FaRedo className={styles.badgeIcon} /> {t.reviewing}
      </span>
    );
  return null;
};

const EntryRow = ({ entry, t }) => {
  const reviewInfo = entry.status === STATUS.REVIEWING ? getReviewInfo(entry.updatedAt, entry.reviewCount ?? 0) : null;
  const nextReviewText = reviewInfo
    ? reviewInfo.urgency === 'critical'
      ? t.nextReviewOverdue(reviewInfo.overdueDays)
      : reviewInfo.urgency === 'urgent'
      ? t.nextReviewToday
      : t.nextReviewIn(reviewInfo.daysUntil)
    : null;
  const nextReviewColor = reviewInfo?.urgency === 'critical'
    ? styles.nextReviewOverdue
    : reviewInfo?.urgency === 'urgent'
    ? styles.nextReviewUrgent
    : styles.nextReviewSoon;

  return (
    <div className={styles.entryRow}>
      <div className={styles.entryInfo}>
        <span className={styles.entryUniv}>
          <FaBuilding className={styles.entryUnivIcon} />
          {extractUniv(entry.id)}
        </span>
        <a href={entry.permalink || `/docs/${entry.id}`} className={styles.entryTitle}>
          {entry.title || entry.id}
        </a>
      </div>
      <div className={styles.entryMeta}>
        {nextReviewText && (
          <span className={`${styles.nextReviewBadge} ${nextReviewColor}`}>
            <FaCalendarAlt style={{ marginRight: '0.25rem', fontSize: '0.85em' }} />
            {t.nextReview}: {nextReviewText}
            {reviewInfo && <span className={styles.reviewRound}>{t.round(entry.reviewCount ?? 0, reviewInfo.totalRounds)}</span>}
          </span>
        )}
        {entry.updatedAt && (
          <span className={styles.entryDate}>
            {t.lastUpdated}: {new Date(entry.updatedAt).toLocaleDateString('zh-CN')}
          </span>
        )}
      </div>
    </div>
  );
};

function ProgressPageInner() {
  const [language, toggleLanguage] = useStoredLanguage();
  const t = T[language] ?? T.zh;
  const { entries, stats, tagGroups, clearAll } = useAllProgress();

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

  // 分类按类别排序
  const completedEntries = React.useMemo(
    () => entries
      .filter(e => e.status === STATUS.COMPLETED)
      .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)),
    [entries]
  );
  const reviewingEntries = React.useMemo(
    () => entries
      .filter(e => e.status === STATUS.REVIEWING)
      .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)),
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
          <FaCheckCircle className={styles.statIcon} style={{ color: '#10b981' }} />
          <span className={styles.statNumber}>{stats.completed}</span>
          <span className={styles.statLabel}>{t.completed}</span>
        </div>
        <div className={`${styles.statCard} ${styles.statCardReviewing}`}>
          <FaRedo className={styles.statIcon} style={{ color: '#f59e0b' }} />
          <span className={styles.statNumber}>{stats.reviewing}</span>
          <span className={styles.statLabel}>{t.reviewing}</span>
        </div>
        <div className={styles.statCard}>
          <FaClipboardList className={styles.statIcon} style={{ color: '#6b7280' }} />
          <span className={styles.statNumber}>{total}</span>
          <span className={styles.statLabel}>{t.totalTracked}</span>
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
          <FaFileAlt className={styles.emptyIcon} />
          <p className={styles.emptyText}>{t.noData}</p>
          <Link to="/docs/intro" className={styles.goBtn}>{t.goExam} <FaArrowRight style={{ fontSize: '0.8em' }} /></Link>
        </div>
      ) : (
        <>
          {/* 学习热力图 */}
          <StudyHeatmap entries={entries} t={t} language={language} />

          {/* 遗忘曲线提醒 */}
          <ReviewReminderSection entries={entries} t={t} />

          {/* 最近练习 */}
          <RecentPracticeSection entries={entries} t={t} />

          {/* 按知识点统计 */}
          {tagGroups.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FaTag className={styles.sectionTitleIcon} style={{ color: '#6366f1' }} />
                {t.byTag}
              </h2>
              <div className={styles.tagGrid}>
                {tagGroups.map(([tag, data]) => (
                  <Link key={tag} to={`/docs/tags/${toTagSlug(tag)}`} className={styles.tagCard}>
                    <div className={styles.tagName}>{tag}</div>
                    <div className={styles.univStats}>
                      <span className={styles.univDone}><FaCheckCircle style={{ marginRight: '0.25rem' }} />{data.completed}</span>
                      <span className={styles.univReview}><FaRedo style={{ marginRight: '0.25rem' }} />{data.reviewing}</span>
                      <span className={styles.univTotal}><FaClipboardList style={{ marginRight: '0.25rem' }} />{data.total}</span>
                    </div>
                    <div className={styles.univBar}>
                      <div
                        className={`${styles.univBarFill} ${styles.tagBarCompleted}`}
                        style={{ width: `${(data.completed / data.total) * 100}%` }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 按大学统计 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaBuilding className={styles.sectionTitleIcon} style={{ color: '#6b7280' }} />
              {t.byUniversity}
            </h2>
            <div className={styles.univGrid}>
              {univGroups.map(([univ, data]) => (
                <div key={univ} className={styles.univCard}>
                  <div className={styles.univName}>{univ}</div>
                  <div className={styles.univStats}>
                    <span className={styles.univDone}><FaCheckCircle style={{ marginRight: '0.25rem' }} />{data.completed}</span>
                    <span className={styles.univReview}><FaRedo style={{ marginRight: '0.25rem' }} />{data.reviewing}</span>
                    <span className={styles.univTotal}><FaClipboardList style={{ marginRight: '0.25rem' }} />{data.items.length}</span>
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

          {/* 已完成题目 */}
          {completedEntries.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleCompleted}`}>
                  <FaCheckCircle className={styles.sectionTitleIcon} />
                  {t.sectionCompleted}
                  <span className={styles.sectionCount}>{completedEntries.length}</span>
                </h2>
                <button onClick={handleClear} className={styles.clearBtn}>
                  <FaTrashAlt style={{ marginRight: '0.35rem' }} />{t.clearAll}
                </button>
              </div>
              <div className={styles.entryList}>
                {completedEntries.map((entry) => (
                  <EntryRow key={entry.id} entry={entry} t={t} />
                ))}
              </div>
            </section>
          )}

          {/* 待复习题目 */}
          {reviewingEntries.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleReviewing}`}>
                  <FaRedo className={styles.sectionTitleIcon} />
                  {t.sectionReviewing}
                  <span className={styles.sectionCount}>{reviewingEntries.length}</span>
                </h2>
                {completedEntries.length === 0 && (
                  <button onClick={handleClear} className={styles.clearBtn}>
                    <FaTrashAlt style={{ marginRight: '0.35rem' }} />{t.clearAll}
                  </button>
                )}
              </div>
              <div className={styles.entryList}>
                {reviewingEntries.map((entry) => (
                  <EntryRow key={entry.id} entry={entry} t={t} />
                ))}
              </div>
            </section>
          )}
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
