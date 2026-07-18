import React from 'react';
import Link from '@docusaurus/Link';
import { DIFFICULTY, DIFFICULTY_KEYS } from '@site/src/services/difficultyService';
import { useExamDifficulty } from '@site/src/hooks/useDifficulty';
import { useAuth } from '@site/src/hooks/useAuth';
import { useUiText } from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const OPTIONS = [
  { value: DIFFICULTY.EASY, key: 'easy' },
  { value: DIFFICULTY.MEDIUM, key: 'medium' },
  { value: DIFFICULTY.HARD, key: 'hard' },
];

function getDifficultyKey(value) {
  return DIFFICULTY_KEYS[value] || null;
}

function getBadgeText(t, difficulty) {
  const assigned = difficulty?.assignedDifficulty;
  if (assigned) return t.stableBadge(t.labels[assigned]);
  return t.collectingBadge;
}

function getSummaryText(t, difficulty) {
  if (!difficulty || difficulty.voteCount === 0) return t.noVotes;

  const assigned = difficulty.assignedDifficulty;
  if (assigned) {
    return t.stableSummary(t.labels[assigned], difficulty.voteCount);
  }

  return t.collectingSummary(
    difficulty.voteCount,
    Math.max(0, difficulty.stableThreshold - difficulty.voteCount),
  );
}

function DifficultyUnavailable({ t }) {
  return (
    <div className={`${styles.rating} ${styles.ratingGate}`}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>{t.heading}</span>
        <span className={styles.statusBadge}>{t.unavailableBadge}</span>
      </div>
      <p className={styles.helperText}>{t.unavailableText}</p>
    </div>
  );
}

export default function DifficultyRating({ docId }) {
  const { isConfigured, isLoggedIn, authReady } = useAuth();
  const t = useUiText('difficultyRating');
  const {
    difficulty,
    loading,
    saving,
    error,
    refresh,
    rate,
  } = useExamDifficulty(docId, {
    enabled: isConfigured && authReady && isLoggedIn,
    refreshKey: isLoggedIn ? 'in' : 'out',
  });

  if (!isConfigured) return <DifficultyUnavailable t={t} />;
  if (!authReady) return null;
  if (!isLoggedIn) {
    return (
      <div className={styles.rating}>
        <span className={styles.ratingLabel}>{t.heading}</span>
        <p className={styles.helperText}>
          {t.loginRequired} <Link to="/login">{t.loginCta}</Link>
        </p>
      </div>
    );
  }

  const selectedKey = getDifficultyKey(difficulty?.userDifficulty);
  const disabled = saving;

  return (
    <div className={styles.rating}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>{t.heading}</span>
        <span className={`${styles.statusBadge} ${difficulty?.assignedDifficulty ? styles.statusStable : ''}`}>
          {loading ? t.loading : getBadgeText(t, difficulty)}
        </span>
      </div>

      <p className={styles.summaryText}>
        {loading ? t.loadingSummary : getSummaryText(t, difficulty)}
      </p>

      <div className={styles.segmented} aria-label={t.heading}>
        {OPTIONS.map((option) => {
          const active = selectedKey === option.key;
          return (
            <button
              key={option.key}
              type="button"
              className={`${styles.segmentBtn} ${styles[`segment_${option.key}`]} ${active ? styles.segmentActive : ''}`}
              onClick={() => rate(option.value)}
              disabled={disabled}
              title={isLoggedIn ? t.voteTitle(t.labels[option.key]) : t.loginRequired}
              aria-pressed={active}
            >
              <span className={styles.segmentDot} />
              <span>{t.labels[option.key]}</span>
            </button>
          );
        })}
      </div>

      {isLoggedIn && selectedKey && (
        <p className={styles.helperText}>
          {saving ? t.saving : t.myVote(t.labels[selectedKey])}
        </p>
      )}

      {error && (
        <button type="button" className={styles.errorText} onClick={refresh}>
          {t.error}
        </button>
      )}
    </div>
  );
}
