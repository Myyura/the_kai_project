import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {
  FaCheckCircle, FaRedo, FaClipboardList, FaTrashAlt,
  FaFileAlt, FaArrowRight, FaBuilding, FaTag,
  FaBell, FaFire, FaCalendarAlt, FaStickyNote,
  FaSearch, FaUserCircle, FaLock, FaSignInAlt, FaCloud,
  FaPaperPlane, FaKey, FaRobot
} from 'react-icons/fa';
import { useAllProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import { useAllNotes } from '@site/src/hooks/useNotes';
import { UNIV_MAP } from '@site/src/data/universities';
import { getLanguageLocale, useCurrentLanguage } from '@site/src/context/LanguageContext';
import CloudSyncPanel from '@site/src/components/CloudSyncPanel';
import Leaderboard from '@site/src/components/Leaderboard';
import LanguageSwitcher from '@site/src/components/LanguageSwitcher';
import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import { useSync } from '@site/src/hooks/useSync';
import { useReputation } from '@site/src/hooks/useReputation';
import { ContributeContent } from '@site/src/components/ContributeContent';
import { DeveloperApiContent } from '@site/src/components/DeveloperApiContent';
import { AgentTutorContent } from '@site/src/components/AgentTutorContent';
import styles from './me.module.css';

const toTagSlug = (tag) =>
  tag
    .toLowerCase()
    .replace(/[^\w\u3000-\u9fff\uac00-\ud7af\u3040-\u30ff]+/g, '-')
    .replace(/^-+|-+$/g, '');

const extractUniv = (docId = '', fallback = '') => {
  const seg = docId.split('/')[0] || '';
  return UNIV_MAP[seg] || seg || fallback;
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
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const GRID_COLS = 52;

const PERSONAL_CENTER_TABS = [
  { id: 'overview', labelKey: 'overview', icon: FaClipboardList, to: '/me' },
  { id: 'ai-tutor', labelKey: 'aiTutor', icon: FaRobot, to: '/me?tab=ai-tutor', hidden: true },
  { id: 'contribute', labelKey: 'contribute', icon: FaPaperPlane, to: '/me?tab=contribute' },
  { id: 'developer-api', labelKey: 'developerApi', icon: FaKey, to: '/me?tab=developer-api' },
];

function getActivePersonalTab() {
  if (typeof window === 'undefined') return 'overview';
  const tab = new URLSearchParams(window.location.search).get('tab');
  return PERSONAL_CENTER_TABS.some((item) => item.id === tab) ? tab : 'overview';
}

function PersonalCenterTabs({ activeTab = 'overview' }) {
  const centerT = useUiText('personalCenter');

  return (
    <nav className={styles.centerTabs} aria-label={centerT.tabsLabel}>
      {PERSONAL_CENTER_TABS.filter((item) => !item.hidden).map((item) => {
        const Icon = item.icon;
        const active = item.id === activeTab;
        return (
          <Link
            key={item.id}
            to={item.to}
            className={`${styles.centerTab} ${active ? styles.centerTabActive : ''}`}
          >
            <Icon />
            <span>{centerT.tabs?.[item.labelKey] || item.id}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function PersonalCenterHeader({ activeTab = 'overview' }) {
  const centerT = useUiText('personalCenter');

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>{centerT.pageTitle}</h1>
          <p className={styles.pageSubtitle}>{centerT.pageSubtitle}</p>
        </div>
        <LanguageSwitcher
          className={styles.langSwitch}
          buttonClassName={styles.langBtn}
          activeButtonClassName={styles.langBtnActive}
          dividerClassName={styles.langDivider}
        />
      </div>
      <PersonalCenterTabs activeTab={activeTab} />
    </header>
  );
}

// 热力图组件 —— 纯 CSS 自适应，不需要 JS 测量
const StudyHeatmap = ({ entries, t, language }) => {
  const MONTHS = language === 'en' ? MONTHS_EN : language === 'ja' ? MONTHS_JA : MONTHS_ZH;

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
    // 从 51 周前的周日开始
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
      <div className={styles.heatmapWrap}>
        <div className={styles.heatmapMonthRow}>
          {monthLabels.map(({ col, label }) => (
            <span
              key={col}
              className={styles.heatmapMonthLabel}
              style={{ left: `calc(${col} / ${GRID_COLS} * (100% + var(--hm-gap)))` }}
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
            <div key={l} className={`${styles.heatmapLegendCell} ${styles[`heatmapL${l}`]}`} />
          ))}
          <span>{t.more}</span>
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
                {extractUniv(entry.id, t.unknownSchool)}
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
const RecentPracticeSection = ({ entries, t, language }) => {
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
                {extractUniv(entry.id, t.unknownSchool)}
              </span>
              <a href={entry.permalink || `/docs/${entry.id}`} className={styles.entryTitle}>
                {entry.title || entry.id}
              </a>
            </div>
            <div className={styles.entryMeta}>
              <StatusBadge status={entry.status} t={t} />
              {entry.updatedAt && (
                <span className={styles.entryDate}>
                  {new Date(entry.updatedAt).toLocaleDateString(getLanguageLocale(language))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



const StatusBadge = React.memo(({ status, t }) => {
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
});

const EntryRow = React.memo(({ entry, t, language }) => {
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
          {extractUniv(entry.id, t.unknownSchool)}
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
            {t.lastUpdated}: {new Date(entry.updatedAt).toLocaleDateString(getLanguageLocale(language))}
          </span>
        )}
      </div>
    </div>
  );
});

const formatDateTime = (ts, language) => {
  if (!ts) return '';
  return new Date(ts).toLocaleString(getLanguageLocale(language), {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const CenterLockedState = ({ t, type = 'login' }) => {
  const unavailable = type === 'unavailable';
  return (
    <div className={styles.centerLocked}>
      <div className={styles.centerLockedIcon}>
        {unavailable ? <FaCloud /> : <FaLock />}
      </div>
      <h2 className={styles.centerLockedTitle}>
        {unavailable ? t.unavailableTitle : t.lockedTitle}
      </h2>
      <p className={styles.centerLockedText}>
        {unavailable ? t.unavailableText : t.lockedText}
      </p>
      {!unavailable && (
        <Link to="/login" className={styles.centerLockedBtn}>
          <FaSignInAlt /> {t.loginCta}
        </Link>
      )}
      <div className={styles.unlockGrid}>
        {t.unlockItems.map((item) => (
          <div key={item.title} className={styles.unlockCard}>
            <strong>{item.title}</strong>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CenterLoadingState = ({ t }) => (
  <div className={styles.centerLocked}>
    <div className={styles.centerLockedIcon}>
      <FaRedo className={styles.spinIcon} />
    </div>
    <h2 className={styles.centerLockedTitle}>{t.loading}</h2>
  </div>
);

const AccountOverview = ({ user, stats, notesCount, reputation, reputationLoading, t }) => {
  const levelKey = reputation?.levelKey || 'newcomer';
  const levelLabel = reputationLoading
    ? t.reputationLoading
    : (t.reputationLevels?.[levelKey] || t.reputationLevels?.newcomer || levelKey);

  return (
    <section className={styles.accountPanel}>
      <div className={styles.accountIdentity}>
        <FaUserCircle className={styles.accountAvatar} />
        <div className={styles.accountIdentityText}>
          <h2 className={styles.accountTitle}>{t.accountTitle}</h2>
          <p className={styles.accountEmail}>{user?.email || t.loggedIn}</p>
          <div className={styles.reputationSummary}>
            <span className={styles.reputationLabel}>{t.communityLevel}</span>
            <span className={styles.reputationBadge}>{levelLabel}</span>
          </div>
        </div>
      </div>
      <div className={styles.accountStats}>
        <div className={styles.accountStat}>
          <span>{stats.completed}</span>
          <small>{t.completed}</small>
        </div>
        <div className={styles.accountStat}>
          <span>{stats.reviewing}</span>
          <small>{t.reviewing}</small>
        </div>
        <div className={styles.accountStat}>
          <span>{notesCount}</span>
          <small>{t.notes}</small>
        </div>
        <div className={styles.accountStat}>
          <span>{reputation?.acceptedSolutionCount || 0}</span>
          <small>{t.acceptedSolutions}</small>
        </div>
        <div className={styles.accountStat}>
          <span>{reputation?.acceptedCorrectionCount || 0}</span>
          <small>{t.acceptedCorrections}</small>
        </div>
      </div>
    </section>
  );
};

const NotesSection = ({ noteEntries, progressEntries, t, language }) => {
  const [query, setQuery] = React.useState('');
  const progressById = React.useMemo(() => {
    const map = {};
    progressEntries.forEach((entry) => { map[entry.id] = entry; });
    return map;
  }, [progressEntries]);

  const items = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return noteEntries
      .map((note) => {
        const progress = progressById[note.id] || {};
        const content = note.content || '';
        return {
          ...note,
          title: progress.title || note.id,
          permalink: progress.permalink || `/docs/${note.id}`,
          univ: extractUniv(note.id, t.unknownSchool),
          excerpt: content.trim().replace(/\s+/g, ' ').slice(0, 180),
          charCount: content.trim().length,
        };
      })
      .filter((note) => {
        if (!normalizedQuery) return true;
        return [
          note.id,
          note.title,
          note.univ,
          note.excerpt,
        ].some((value) => String(value || '').toLowerCase().includes(normalizedQuery));
      })
      .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
  }, [noteEntries, progressById, query]);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <FaStickyNote className={styles.sectionTitleIcon} style={{ color: '#8b5cf6' }} />
          {t.notesTitle}
          <span className={styles.sectionCount}>{noteEntries.length}</span>
        </h2>
        <label className={styles.noteSearch}>
          <FaSearch />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchNotes}
          />
        </label>
      </div>
      {noteEntries.length === 0 ? (
        <div className={styles.notesEmpty}>{t.noNotes}</div>
      ) : items.length === 0 ? (
        <div className={styles.notesEmpty}>{t.noNoteResults}</div>
      ) : (
        <div className={styles.notesList}>
          {items.map((note) => (
            <Link key={note.id} to={note.permalink} className={styles.noteRow}>
              <div className={styles.noteRowTop}>
                <span className={styles.entryUniv}>
                  <FaBuilding className={styles.entryUnivIcon} />
                  {note.univ}
                </span>
                <span className={styles.noteDate}>{formatDateTime(note.updatedAt, language)}</span>
              </div>
              <strong className={styles.noteTitle}>{note.title}</strong>
              <p className={styles.noteExcerpt}>{note.excerpt || t.emptyNoteExcerpt}</p>
              <span className={styles.noteCount}>{t.charCount(note.charCount)}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

function PersonalCenterDashboard({ user }) {
  const language = useCurrentLanguage();
  const t = useUiText('progress');
  const centerT = useUiText('personalCenter');
  const { entries, stats, tagGroups, clearAll } = useAllProgress();
  const { entries: noteEntries } = useAllNotes();
  const { reputation, loading: reputationLoading } = useReputation({ enabled: Boolean(user?.id) });

  // 按大学分组
  const univGroups = React.useMemo(() => {
    const map = {};
    entries.forEach((e) => {
      const univ = extractUniv(e.id, centerT.unknownSchool);
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
  const hasAnyPersonalData = total > 0 || noteEntries.length > 0;

  return (
    <div className={styles.page}>
      {/* 头部 */}
      <PersonalCenterHeader activeTab="overview" />

      <AccountOverview
        user={user}
        stats={stats}
        notesCount={noteEntries.length}
        reputation={reputation}
        reputationLoading={reputationLoading}
        t={centerT}
      />

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

      {/* 半月 / 近半年刷题排行榜，新用户也可查看 */}
      <Leaderboard language={language} />

      {!hasAnyPersonalData ? (
        <div className={styles.emptyState}>
          <FaFileAlt className={styles.emptyIcon} />
          <p className={styles.emptyText}>{t.noData}</p>
          <Link to="/docs/intro" className={styles.goBtn}>{t.goExam} <FaArrowRight style={{ fontSize: '0.8em' }} /></Link>
        </div>
      ) : (
        <>
          {/* 学习热力图 */}
          {total > 0 && <StudyHeatmap entries={entries} t={t} language={language} />}

          {/* 用户笔记 */}
          <NotesSection
            noteEntries={noteEntries}
            progressEntries={entries}
            t={centerT}
            language={language}
          />

          {/* 遗忘曲线提醒 */}
          {total > 0 && <ReviewReminderSection entries={entries} t={t} />}

          {/* 最近练习 */}
          {total > 0 && <RecentPracticeSection entries={entries} t={t} language={language} />}

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
          {total > 0 && (
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
          )}

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
                  <EntryRow key={entry.id} entry={entry} t={t} language={language} />
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
                  <EntryRow key={entry.id} entry={entry} t={t} language={language} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* 云同步 — 放在页面最底部 */}
      <CloudSyncPanel language={language} />
    </div>
  );
}

function MePageInner() {
  const centerT = useUiText('personalCenter');
  const { isConfigured, isLoggedIn, authReady, user } = useSync();
  const activeTab = getActivePersonalTab();

  if (isConfigured && isLoggedIn) {
    if (activeTab === 'contribute') {
      return (
        <>
          <div className={styles.page}>
            <PersonalCenterHeader activeTab="contribute" />
          </div>
          <ContributeContent embedded />
        </>
      );
    }

    if (activeTab === 'developer-api') {
      return (
        <>
          <div className={styles.page}>
            <PersonalCenterHeader activeTab="developer-api" />
          </div>
          <DeveloperApiContent embedded />
        </>
      );
    }

    if (activeTab === 'ai-tutor') {
      return (
        <>
          <div className={styles.page}>
            <PersonalCenterHeader activeTab="ai-tutor" />
          </div>
          <AgentTutorContent embedded />
        </>
      );
    }

    return <PersonalCenterDashboard user={user} />;
  }

  return (
    <div className={styles.page}>
      <PersonalCenterHeader activeTab={activeTab} />
      {isConfigured && !authReady ? (
        <CenterLoadingState t={centerT} />
      ) : !isLoggedIn ? (
        <CenterLockedState t={centerT} />
      ) : (
        <CenterLockedState t={centerT} type="unavailable" />
      )}
    </div>
  );
}

export default function MePage() {
  const centerT = useUiText('personalCenter');

  return (
    <Layout title={centerT.pageTitle}>
      <NoIndex />
      <BrowserOnly fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>{centerT.loadingShort}</div>}>
        {() => <MePageInner />}
      </BrowserOnly>
    </Layout>
  );
}
