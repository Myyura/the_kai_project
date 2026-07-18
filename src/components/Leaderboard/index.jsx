import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {FaSyncAlt, FaTrophy, FaUser} from 'react-icons/fa';
import {useAuth} from '@site/src/hooks/useAuth';
import {usePublicProfile} from '@site/src/hooks/usePublicProfile';
import {fetchPracticeLeaderboard} from '@site/src/services/leaderboardService';
import {getUiMessages} from '@site/src/i18n/messages';
import styles from './styles.module.css';

const PERIODS = ['half_month', 'six_months'];

const localeFor = (language) => (
  language === 'ja' ? 'ja-JP' : language === 'en' ? 'en-US' : 'zh-CN'
);

const formatPeriodRange = (start, end, language) => {
  if (!start || !end) return '';
  const formatter = new Intl.DateTimeFormat(localeFor(language), {
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  });
  return `${formatter.format(new Date(`${start}T00:00:00+09:00`))} – ${formatter.format(new Date(`${end}T00:00:00+09:00`))}`;
};

export default function Leaderboard({language = 'zh', compact = false}) {
  const {isConfigured, isLoggedIn} = useAuth();
  const {profile} = usePublicProfile();
  const t = getUiMessages('leaderboard', language);
  const [period, setPeriod] = useState('half_month');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(null);
  const requestSeqRef = useRef(0);

  const load = useCallback(async ({silent = false} = {}) => {
    if (!isConfigured || !isLoggedIn) return;
    const seq = requestSeqRef.current + 1;
    requestSeqRef.current = seq;
    if (silent) setRefreshing(true);
    else setLoading(true);
    setError(null);
    try {
      const next = await fetchPracticeLeaderboard(period);
      if (requestSeqRef.current === seq) {
        setData(next);
        setFetched(true);
      }
    } catch (loadError) {
      if (requestSeqRef.current === seq) setError(loadError.message || 'Error');
    } finally {
      if (requestSeqRef.current === seq) {
        setLoading(false);
        setRefreshing(false);
      }
    }
  }, [isConfigured, isLoggedIn, period]);

  useEffect(() => { void load(); }, [load]);
  useEffect(() => {
    const handleRefresh = () => void load({silent: true});
    window.addEventListener('kai_progress_updated', handleRefresh);
    window.addEventListener('kai_public_profile_updated', handleRefresh);
    return () => {
      window.removeEventListener('kai_progress_updated', handleRefresh);
      window.removeEventListener('kai_public_profile_updated', handleRefresh);
    };
  }, [load]);

  const topRows = useMemo(() => data.filter((item) => item.is_top_ten), [data]);
  const currentUser = useMemo(() => data.find((item) => item.is_current_user) || null, [data]);
  const maxCount = topRows[0]?.problem_count || 1;
  const periodRange = formatPeriodRange(
    currentUser?.period_start || topRows[0]?.period_start,
    currentUser?.period_end || topRows[0]?.period_end,
    language,
  );

  if (!isConfigured || !isLoggedIn) return null;

  const currentCount = Number(currentUser?.problem_count) || 0;
  const currentRank = currentUser?.rank_position;
  const gap = Number(currentUser?.gap_to_previous) || 0;
  const percentile = Number(currentUser?.percentile) || 0;
  const participantCount = Number(currentUser?.participant_count || topRows[0]?.participant_count) || 0;
  const currentOutsideTop = currentUser && !currentUser.is_top_ten && currentCount > 0 && currentRank;

  return (
    <section className={`${styles.section} ${compact ? styles.compactSection : ''}`}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.sectionTitle}>
            <FaTrophy className={styles.sectionTitleIcon} />
            {t.title}
          </h2>
          <span className={styles.periodRange}>
            {periodRange}{periodRange ? ` · ${t.japanTime}` : ''}
          </span>
        </div>
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => load({silent: true})}
          disabled={loading || refreshing}
          aria-label={t.refresh}
          title={t.refresh}
        >
          <FaSyncAlt className={loading || refreshing ? styles.spin : ''} />
        </button>
      </div>

      <div className={styles.periodTabs} role="group" aria-label={t.periodLabel}>
        {PERIODS.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.periodTab} ${period === item ? styles.periodTabActive : ''}`}
            onClick={() => setPeriod(item)}
            aria-pressed={period === item}
          >
            {t.periods[item]}
          </button>
        ))}
      </div>

      {loading && !fetched && (
        <div className={styles.loading}><FaSyncAlt className={styles.spin} /> {t.loading}</div>
      )}
      {error && !loading && (
        <button type="button" className={styles.errorState} onClick={() => load()}>{t.error}</button>
      )}

      {!error && fetched && (
        <>
          <div className={styles.mySummary}>
            <div className={styles.summaryIdentity}>
              <span className={styles.summaryAvatar}><FaUser /></span>
              <div>
                <span className={styles.summaryEyebrow}>{t.myPerformance}</span>
                <strong>{currentUser?.display_name || profile?.displayName || t.you}</strong>
              </div>
            </div>
            <div className={styles.summaryMetrics}>
              <div><strong>{currentRank ? `#${currentRank}` : '–'}</strong><span>{t.rank}</span></div>
              <div><strong>{currentCount}</strong><span>{t.problemCount}</span></div>
              <div><strong>{`${percentile}%`}</strong><span>{t.surpassed}</span></div>
            </div>
            <div className={styles.summaryMessage}>
              {currentCount === 0 ? (
                <Link to="/docs/intro">{t.startPracticing}</Link>
              ) : currentRank === 1 ? t.firstPlace
                : gap > 0 ? t.gapToPrevious(gap)
                  : t.keepGoing}
            </div>
          </div>

          <div className={styles.listHeader}>
            <span>{t.topLearners}</span>
            <span>{t.participants(participantCount)}</span>
          </div>

          {topRows.length === 0 ? (
            <div className={styles.emptyState}>{t.empty}</div>
          ) : (
            <div className={styles.leaderboardList}>
              {topRows.map((item) => {
                const rank = Number(item.rank_position);
                const rankClass = rank === 1 ? styles.rank1
                  : rank === 2 ? styles.rank2
                    : rank === 3 ? styles.rank3 : '';
                const barPct = Math.round((Number(item.problem_count) / maxCount) * 100);
                return (
                  <div
                    key={`${item.rank_position}-${item.display_name}-${item.is_current_user}`}
                    className={`${styles.row} ${item.is_current_user ? styles.rowCurrent : ''}`}
                  >
                    <span className={`${styles.rank} ${rankClass}`}>{rank}</span>
                    <span className={styles.avatar}>{item.display_name?.[0] || <FaUser />}</span>
                    <div className={styles.learner}>
                      <div className={styles.learnerName}>
                        <span>{item.display_name}</span>
                        {item.is_current_user && <span className={styles.youTag}>{t.you}</span>}
                      </div>
                      <div className={styles.bar}>
                        <div
                          className={`${styles.barFill} ${rank <= 3 ? styles.barFillTop : ''}`}
                          style={{width: `${barPct}%`}}
                        />
                      </div>
                    </div>
                    <span className={styles.count}>{item.problem_count}<span>{t.unit}</span></span>
                  </div>
                );
              })}
            </div>
          )}

          {currentOutsideTop && (
            <div className={styles.currentOutside}>
              <span className={styles.outsideDivider}>{t.yourPosition}</span>
              <div className={`${styles.row} ${styles.rowCurrent}`}>
                <span className={styles.rank}>{currentRank}</span>
                <span className={styles.avatar}><FaUser /></span>
                <div className={styles.learner}>
                  <div className={styles.learnerName}>
                    <span>{currentUser.display_name}</span>
                    <span className={styles.youTag}>{t.you}</span>
                  </div>
                </div>
                <span className={styles.count}>{currentCount}<span>{t.unit}</span></span>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
