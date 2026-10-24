import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {
  FaCheckCircle, FaRedo, FaClipboardList, FaTrashAlt,
  FaFileAlt, FaArrowRight, FaBuilding, FaTag,
  FaBell, FaFire, FaCalendarAlt, FaStickyNote,
  FaSearch, FaUserCircle, FaLock, FaSignInAlt, FaCloud,
  FaPaperPlane, FaKey, FaRobot, FaEdit, FaSave, FaLayerGroup
} from 'react-icons/fa';
import { useAllProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import { useAllNotes } from '@site/src/hooks/useNotes';
import { getLanguageLocale, useCurrentLanguage } from '@site/src/context/LanguageContext';
import Leaderboard from '@site/src/components/Leaderboard';
import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import { useAuth } from '@site/src/hooks/useAuth';
import { useReputation } from '@site/src/hooks/useReputation';
import { usePublicProfile } from '@site/src/hooks/usePublicProfile';
import { useProblemSetsFeature } from '@site/src/hooks/useProblemSetsFeature';
import { ContributeContent } from '@site/src/components/ContributeContent';
import { DeveloperApiContent } from '@site/src/components/DeveloperApiContent';
import { AgentTutorContent } from '@site/src/components/AgentTutorContent';
import ProblemSetsContent from '@site/src/components/ProblemSetsContent';
import {buildPersonalCenterData} from '@site/src/services/personalCenterData';
import {getTagLabel} from '@site/src/utils/tags';
import styles from './me.module.css';

const toDateKey = (ts) => {
  const d = new Date(ts);
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-');
};

const MONTHS_CJK = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const GRID_COLS = 52;

const PERSONAL_CENTER_TABS = [
  { id: 'overview', labelKey: 'overview', icon: FaClipboardList, to: '/me' },
  { id: 'sets', labelKey: 'sets', icon: FaLayerGroup, to: '/me?tab=sets' },
  { id: 'ai-tutor', labelKey: 'aiTutor', icon: FaRobot, to: '/me?tab=ai-tutor', hidden: true },
  { id: 'contribute', labelKey: 'contribute', icon: FaPaperPlane, to: '/me?tab=contribute' },
  { id: 'developer-api', labelKey: 'developerApi', icon: FaKey, to: '/me?tab=developer-api' },
];

function getActivePersonalTab(search, problemSetsEnabled) {
  const tab = new URLSearchParams(search).get('tab');
  if (tab === 'sets' && !problemSetsEnabled) return 'overview';
  return PERSONAL_CENTER_TABS.some((item) => item.id === tab) ? tab : 'overview';
}

function PersonalCenterTabs({ activeTab = 'overview' }) {
  const centerT = useUiText('personalCenter');
  const problemSetsEnabled = useProblemSetsFeature();

  return (
    <nav className={styles.centerTabs} aria-label={centerT.tabsLabel}>
      {PERSONAL_CENTER_TABS.filter((item) => !item.hidden && (item.id !== 'sets' || problemSetsEnabled)).map((item) => {
        const Icon = item.icon;
        const active = item.id === activeTab;
        return (
          <Link
            key={item.id}
            to={item.to}
            aria-current={active ? 'page' : undefined}
            className={`${styles.centerTab} ${active ? styles.centerTabActive : ''}`}
          >
            <Icon aria-hidden="true" />
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
      </div>
      <PersonalCenterTabs activeTab={activeTab} />
    </header>
  );
}

// 热力图组件 —— 纯 CSS 自适应，不需要 JS 测量
const StudyHeatmap = ({ entries, t, centerT, language }) => {
  const MONTHS = language === 'en' ? MONTHS_EN : MONTHS_CJK;

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
        // Avoid crowded labels when the first visible month has only one week.
        if (monthLabels.length && w - monthLabels[monthLabels.length - 1].col < 3) monthLabels.pop();
        monthLabels.push({ col: w, label: MONTHS[m] });
        lastMonth = m;
      }
    }
    return { cells, monthLabels };
  }, [activityMap, MONTHS]);

  const totalActivity = cells.reduce((total, cell) => total + (cell.isFuture ? 0 : cell.count), 0);

  return (
    <section className={styles.section}>
      <div className={styles.heatmapHeader}>
        <h2 className={styles.sectionTitle}>
          <FaFire className={styles.sectionTitleIcon} style={{ color: 'var(--kai-danger)' }} />
          {centerT.recordHeatmap}
        </h2>
        <span className={styles.heatmapTotalCount}>{centerT.recordCount(totalActivity)}</span>
      </div>
      <p className={styles.sectionDescription}>{centerT.heatmapExplanation}</p>
      <div className={styles.heatmapWrap} tabIndex={0} role="region" aria-label={centerT.recordHeatmap}>
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
              title={cell.isFuture ? '' : `${cell.key}：${centerT.recordCount(cell.count)}`}
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

const DocumentEntryIdentity = React.memo(({entry}) => (
  <div className={styles.entryInfo}>
    <span className={styles.entryUniv}>
      <FaBuilding className={styles.entryUnivIcon} />
      {entry.university}
    </span>
    <Link to={entry.permalink} className={styles.entryTitle}>
      {entry.title}
    </Link>
  </div>
));

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
        <FaBell className={styles.sectionTitleIcon} style={{ color: 'var(--kai-danger)' }} />
        {t.reviewDue}
        <span className={`${styles.sectionCount} ${styles.sectionCountAlert}`}>{items.length}</span>
      </h2>
      <div className={styles.reminderList}>
        {items.map((entry) => (
          <div
            key={entry.id}
            className={`${styles.reminderRow} ${entry.reviewInfo.urgency === 'critical' ? styles.reminderCritical : entry.reviewInfo.urgency === 'urgent' ? styles.reminderUrgent : ''}`}
          >
            <DocumentEntryIdentity entry={entry} />
            <div className={styles.reminderMeta}>
              <UrgencyBadge reviewInfo={entry.reviewInfo} />
              {entry.reviewInfo.urgency === 'critical' && (
                <span className={styles.reminderSub}>{t.overdueDays(entry.reviewInfo.overdueDays)}</span>
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
        <FaCalendarAlt className={styles.sectionTitleIcon} style={{ color: 'var(--kai-blue)' }} />
        {t.recentPractice}
        <span className={styles.sectionCount}>{items.length}</span>
      </h2>
      <div className={styles.entryList}>
        {items.map((entry) => (
          <div key={entry.id} className={styles.entryRow}>
            <DocumentEntryIdentity entry={entry} />
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
      <DocumentEntryIdentity entry={entry} />
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
  <div className={styles.centerLocked} role="status">
    <div className={styles.centerLockedIcon}>
      <FaRedo className={styles.spinIcon} />
    </div>
    <h2 className={styles.centerLockedTitle}>{t.loading}</h2>
  </div>
);

const PublicProfileSettings = ({ t, profileState }) => {
  const {profile, loading, error, refresh, saveNickname} = profileState;
  const [editing, setEditing] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const editButton = React.useRef(null);
  const wasEditing = React.useRef(false);

  React.useEffect(() => {
    if (editing) wasEditing.current = true;
    else if (wasEditing.current && !saving && !loading) {
      editButton.current?.focus();
      wasEditing.current = false;
    }
  }, [editing, saving, loading]);

  React.useEffect(() => {
    setDraft(profile?.nickname || '');
  }, [profile?.nickname]);

  const finishEditing = () => {
    setEditing(false);
  };
  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    setMessage(null);
    try {
      await saveNickname(draft.trim());
      finishEditing();
      setMessage({type: 'success', text: t.nicknameSaved});
    } catch (error) {
      const raw = error?.message || '';
      const text = raw.includes('cooldown') ? t.nicknameCooldown
        : (raw.includes('characters') || raw.includes('length')) ? t.nicknameCharacters
          : t.nicknameSaveError;
      setMessage({type: 'error', text});
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.profileSettings}>
      <span className={styles.profileLabel}>{t.publicNickname}</span>
      <div className={styles.profileIdentityRow}>
        <strong className={styles.accountNickname}>{profile?.displayName || (error ? t.nicknameUnavailable : t.loadingShort)}</strong>
        <button ref={editButton} type="button" className={styles.profileButton}
          disabled={loading || !profile || saving || editing} aria-expanded={editing} aria-controls="profile-editor"
          onClick={() => {
            setDraft(profile?.nickname || '');
            setMessage(null);
            setEditing((value) => !value);
          }}>
          <FaEdit aria-hidden="true" /> {t.editNickname}
        </button>
      </div>
      <p className={styles.profileHint}>{t.nicknameUsage}</p>
      {profile && !profile.nicknameConfirmed && <p className={styles.profileWarning}>{t.nicknameNeedsConfirmation}</p>}
      {!profile && error && <p className={styles.profileMessageError} role="alert">
        {t.nicknameLoadError} <button type="button" className={styles.textButton} disabled={loading} onClick={() => void refresh()}>{t.retry}</button>
      </p>}
      {editing && (
        <form id="profile-editor" className={styles.profileEditor} onSubmit={(event) => { event.preventDefault(); void handleSave(); }}>
          <label>
            <span>{t.nicknameNamePart}</span>
            <input autoFocus required minLength={2} maxLength={24} disabled={saving}
              value={draft} aria-describedby="profile-nickname-rule"
              onChange={(event) => setDraft(event.target.value)} placeholder={t.nicknamePlaceholder} />
          </label>
          <small id="profile-nickname-rule">{t.nicknameRule} {t.nicknameCooldown}</small>
          <div className={styles.profileEditorActions}>
            <button type="submit" className={styles.profileSaveButton} disabled={saving || !draft.trim()}>
              <FaSave aria-hidden="true" /> {saving ? t.saving : t.saveNickname}
            </button>
            <button type="button" className={styles.profileButton} disabled={saving} onClick={() => {
              setDraft(profile?.nickname || ''); setMessage(null); finishEditing();
            }}>{t.cancel}</button>
          </div>
        </form>
      )}
      {message && (
        <p role={message.type === 'error' ? 'alert' : 'status'} className={`${styles.profileMessage} ${message.type === 'error' ? styles.profileMessageError : ''}`}>
          {message.text}
        </p>
      )}
    </div>
  );
};

const AccountOverview = ({ user, reputation, reputationLoading, reputationError, t }) => {
  const profileState = usePublicProfile();
  const levelKey = reputation?.levelKey || 'newcomer';
  const levelLabel = reputationLoading ? t.reputationLoading : reputationError ? '—'
    : (t.reputationLevels?.[levelKey] || t.reputationLevels?.newcomer || levelKey);

  return (
    <section className={styles.accountPanel} aria-labelledby="account-heading">
      <h2 id="account-heading" className={styles.accountTitle}>{t.accountTitle}</h2>
      <div className={styles.accountBody}>
        <div className={styles.accountIdentity}>
          <FaUserCircle className={styles.accountAvatar} aria-hidden="true" />
          <div className={styles.accountIdentityText}>
            <PublicProfileSettings t={t} profileState={profileState} />
            <p className={styles.accountEmail}><span>{t.loginEmail}</span> {user?.email || t.loggedIn}</p>
          </div>
        </div>
        <div className={styles.communitySummary}>
          <div className={styles.reputationSummary}>
            <span className={styles.reputationLabel}>{t.communityLevel}</span>
            <span className={styles.reputationBadge}>{levelLabel}</span>
          </div>
          <dl className={styles.contributionStats}>
            {[
              {id: 'solutions', value: reputation?.acceptedSolutionCount || 0, label: t.acceptedSolutions},
              {id: 'corrections', value: reputation?.acceptedCorrectionCount || 0, label: t.acceptedCorrections},
            ].map(({id, value, label}) => (
              <div key={id}><dt>{label}</dt><dd>{reputationLoading || reputationError ? '—' : value}</dd></div>
            ))}
          </dl>
          {reputationError && <p className={styles.profileMessageError} role="status">{t.reputationUnavailable}</p>}
          <Link to="/me?tab=contribute" className={styles.accountLink}>{t.tabs.contribute} <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
};

const StudySummary = ({stats, t, progressT, progressLoading, notesLoading, progressError, notesError, onRetry}) => (
  <section className={styles.studySummary} aria-labelledby="study-summary-heading">
    <h2 id="study-summary-heading" className={styles.sectionTitle}>{t.studySummary}</h2>
    <p className={styles.sectionDescription}>{t.studySummaryHint}</p>
    <dl className={styles.studyStats}>
      {[
        {id: 'tracked', value: stats.total, label: t.trackedProblems, unavailable: progressLoading || progressError},
        {id: 'completed', value: stats.completed, label: progressT.completed, unavailable: progressLoading || progressError},
        {id: 'reviewing', value: stats.reviewing, label: progressT.reviewing, unavailable: progressLoading || progressError},
        {id: 'notes', value: stats.notes, label: t.notedProblems, unavailable: notesLoading || notesError},
      ].map(({id, value, label, unavailable}) => (
        <div className={styles.studyStat} key={id}><dt>{label}</dt><dd>{unavailable ? '—' : value}</dd></div>
      ))}
    </dl>
    {(progressLoading || notesLoading) && <p className={styles.dataNotice} role="status">{t.studyLoading}</p>}
    {(progressError || notesError) && <p className={styles.dataNotice} role="alert">
      {progressError && t.progressLoadError}{' '}{notesError && t.notesLoadError}{' '}
      <button type="button" className={styles.textButton} disabled={progressLoading || notesLoading} onClick={onRetry}>{t.retry}</button>
    </p>}
  </section>
);

const NotesSection = ({ noteEntries, t, language }) => {
  const [query, setQuery] = React.useState('');

  const items = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return noteEntries
      .filter((note) => {
        if (!normalizedQuery) return true;
        return [
          note.id,
          note.title,
          note.university,
          note.excerpt,
          note.content,
        ].some((value) => String(value || '').toLowerCase().includes(normalizedQuery));
      });
  }, [noteEntries, query]);

  return (
    <section className={styles.section} id="study-notes">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <FaStickyNote className={styles.sectionTitleIcon} style={{ color: 'var(--kai-violet)' }} />
          {t.notesTitle}
          <span className={styles.sectionCount}>{noteEntries.length}</span>
        </h2>
        {noteEntries.length > 0 && <label className={styles.noteSearch}>
          <FaSearch />
          <input
            type="search"
            aria-label={t.searchNotes}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchNotes}
          />
        </label>}
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
                  {note.university}
                </span>
                <span className={styles.noteDate}>{formatDateTime(note.updatedAt, language)}</span>
              </div>
              <strong className={styles.noteTitle}>{note.title}</strong>
              <p className={styles.noteExcerpt}>{note.excerpt || t.emptyNoteExcerpt}</p>
              <span className={styles.noteCount}>
                {t.charCount(note.charCount)}
                {note.annotationCount > 0 ? ` · ${t.annotationCount(note.annotationCount)}` : ''}
              </span>
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
  const {entries: rawProgressEntries, clearAll, loading: progressLoading, error: progressError, refresh: refreshProgress} = useAllProgress();
  const {entries: rawNoteEntries, loading: notesLoading, error: notesError, refresh: refreshNotes} = useAllNotes();
  const { reputation, loading: reputationLoading, error: reputationError } = useReputation({ enabled: Boolean(user?.id) });
  const personalData = React.useMemo(() => buildPersonalCenterData({
    progressEntries: rawProgressEntries,
    noteEntries: rawNoteEntries,
    unknownSchool: centerT.unknownSchool,
  }), [centerT.unknownSchool, rawNoteEntries, rawProgressEntries]);
  const {
    progressItems: entries,
    noteItems: noteEntries,
    completedItems: completedEntries,
    reviewingItems: reviewingEntries,
    activityItems,
    universityGroups: univGroups,
    tagGroups,
    stats,
    hasAnyData: hasAnyPersonalData,
  } = personalData;

  const [clearing, setClearing] = React.useState(false);
  const [clearError, setClearError] = React.useState(false);
  const handleClear = async () => {
    if (clearing) return;
    if (!window.confirm(t.confirmClear)) return;
    setClearing(true);
    setClearError(false);
    try {
      await clearAll();
    } catch (error) {
      setClearError(true);
    } finally {
      setClearing(false);
    }
  };

  const total = stats.total;

  return (
    <div className={styles.page}>
      {/* 头部 */}
      <PersonalCenterHeader activeTab="overview" />

      <AccountOverview
        user={user}
        reputation={reputation}
        reputationLoading={reputationLoading}
        reputationError={reputationError}
        t={centerT}
      />

      <StudySummary stats={stats} t={centerT} progressT={t}
        progressLoading={progressLoading} notesLoading={notesLoading}
        progressError={progressError} notesError={notesError}
        onRetry={() => { void refreshProgress(); void refreshNotes(); }} />

      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardMain}>
          {!hasAnyPersonalData ? (progressLoading || notesLoading || progressError || notesError ? null : (
            <div className={styles.emptyState}>
              <FaFileAlt className={styles.emptyIcon} />
              <p className={styles.emptyText}>{t.noData}</p>
              <Link to="/docs/intro" className={styles.goBtn}>{t.goExam} <FaArrowRight style={{ fontSize: '0.8em' }} /></Link>
            </div>
          )) : (
            <>
          {/* 优先展示下一步可执行的学习任务 */}
          {total > 0 && <ReviewReminderSection entries={entries} t={t} />}
          {total > 0 && <RecentPracticeSection entries={entries} t={t} language={language} />}
          {(noteEntries.length > 0 || (!notesLoading && !notesError)) && <NotesSection noteEntries={noteEntries} t={centerT} language={language} />}
          {activityItems.length > 0 && <StudyHeatmap entries={activityItems} t={t} centerT={centerT} language={language} />}

          {/* 按知识点统计 */}
          {tagGroups.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FaTag className={styles.sectionTitleIcon} style={{ color: 'var(--kai-indigo)' }} />
                {t.byTag}
              </h2>
              <div className={styles.tagGrid}>
                {tagGroups.map(([tag, data]) => (
                  <Link key={tag} to={data.permalink} className={styles.tagCard}>
                    <div className={styles.tagName}>{getTagLabel(tag, language)}</div>
                    <div className={styles.univStats}>
                      <span className={styles.univDone}><FaCheckCircle style={{ marginRight: '0.25rem' }} />{t.completed} {data.completed}</span>
                      <span className={styles.univReview}><FaRedo style={{ marginRight: '0.25rem' }} />{t.reviewing} {data.reviewing}</span>
                      <span className={styles.univTotal}><FaClipboardList style={{ marginRight: '0.25rem' }} />{centerT.trackedProblems} {data.total}</span>
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
                <FaBuilding className={styles.sectionTitleIcon} style={{ color: 'var(--custom-text-muted)' }} />
                {t.byUniversity}
              </h2>
              <div className={styles.univGrid}>
                {univGroups.map(([univ, data]) => (
                  <div key={univ} className={styles.univCard}>
                    <div className={styles.univName}>{univ}</div>
                    <div className={styles.univStats}>
                      <span className={styles.univDone}><FaCheckCircle style={{ marginRight: '0.25rem' }} />{t.completed} {data.completed}</span>
                      <span className={styles.univReview}><FaRedo style={{ marginRight: '0.25rem' }} />{t.reviewing} {data.reviewing}</span>
                      <span className={styles.univTotal}><FaClipboardList style={{ marginRight: '0.25rem' }} />{centerT.trackedProblems} {data.items.length}</span>
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

          {[
            {id: 'reviewing', items: reviewingEntries, title: t.sectionReviewing, Icon: FaRedo, className: styles.sectionTitleReviewing},
            {id: 'completed', items: completedEntries, title: t.sectionCompleted, Icon: FaCheckCircle, className: styles.sectionTitleCompleted},
          ].filter(({items}) => items.length > 0).map(({id, items, title, Icon, className}) => (
            <section className={styles.section} id={`study-${id}`} key={id}>
              <h2 className={`${styles.sectionTitle} ${className}`}>
                <Icon className={styles.sectionTitleIcon} aria-hidden="true" />
                {title}
                <span className={styles.sectionCount}>{items.length}</span>
              </h2>
              <div className={styles.entryList}>
                {items.map((entry) => <EntryRow key={entry.id} entry={entry} t={t} language={language} />)}
              </div>
            </section>
          ))}
            </>
          )}
          {total > 0 && <details className={styles.studyManagement}>
            <summary>{centerT.manageProgress}</summary>
            <p>{centerT.clearProgressHint}</p>
            <button type="button" disabled={clearing} onClick={() => void handleClear()} className={styles.clearBtn}>
              <FaTrashAlt aria-hidden="true" /> {clearing ? centerT.clearing : t.clearAll}
            </button>
            {clearError && <p className={styles.profileMessageError} role="alert">{centerT.clearProgressError}</p>}
          </details>}
        </div>
        <aside className={styles.dashboardSidebar}>
          <Leaderboard language={language} />
        </aside>
      </div>

    </div>
  );
}

function MePageInner() {
  const centerT = useUiText('personalCenter');
  const { isConfigured, isLoggedIn, authReady, user } = useAuth();
  const problemSetsEnabled = useProblemSetsFeature();
  const {search} = useLocation();
  const activeTab = getActivePersonalTab(search, problemSetsEnabled);

  if (activeTab === 'contribute') {
    return (
      <div className={styles.page}>
        <PersonalCenterHeader activeTab="contribute" />
        <ContributeContent />
      </div>
    );
  }

  if (isConfigured && isLoggedIn) {
    if (activeTab === 'sets') {
      return (
        <div className={styles.page}>
          <PersonalCenterHeader activeTab="sets" />
          <ProblemSetsContent />
        </div>
      );
    }

    if (activeTab === 'developer-api') {
      return (
        <div className={styles.page}>
          <PersonalCenterHeader activeTab="developer-api" />
          <DeveloperApiContent />
        </div>
      );
    }

    if (activeTab === 'ai-tutor') {
      return (
        <>
          <div className={styles.page}>
            <PersonalCenterHeader activeTab="ai-tutor" />
          </div>
          <AgentTutorContent />
        </>
      );
    }

    return <PersonalCenterDashboard user={user} />;
  }

  return (
    <div className={styles.page}>
      <PersonalCenterHeader activeTab={activeTab} />
      {!isConfigured ? (
        <CenterLockedState t={centerT} type="unavailable" />
      ) : !authReady ? (
        <CenterLoadingState t={centerT} />
      ) : (
        <CenterLockedState t={centerT} />
      )}
    </div>
  );
}

export default function MePage() {
  const centerT = useUiText('personalCenter');

  return (
    <Layout title={centerT.pageTitle}>
      <NoIndex />
      <main>
        <BrowserOnly fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>{centerT.loadingShort}</div>}>
          {() => <MePageInner />}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
