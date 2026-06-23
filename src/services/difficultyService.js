import { getSupabaseClient } from './supabaseClient';

export const DIFFICULTY = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

export const DIFFICULTY_KEYS = {
  [DIFFICULTY.EASY]: 'easy',
  [DIFFICULTY.MEDIUM]: 'medium',
  [DIFFICULTY.HARD]: 'hard',
};

const EMPTY_DIFFICULTY = {
  docId: '',
  userDifficulty: null,
  voteCount: 0,
  easyCount: 0,
  mediumCount: 0,
  hardCount: 0,
  averageScore: null,
  bayesianScore: null,
  effectiveVoteWeight: 0,
  weightedAverageScore: null,
  weightedBayesianScore: null,
  suggestedDifficulty: null,
  assignedDifficulty: null,
  confidence: 'collecting',
  stableThreshold: 10,
  updatedAt: null,
};

const firstRow = (data) => {
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
};

const toNumberOrNull = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const normalizeDifficultyRow = (row, fallbackDocId) => {
  if (!row) {
    return {
      ...EMPTY_DIFFICULTY,
      docId: fallbackDocId || '',
    };
  }

  return {
    docId: row.doc_id || fallbackDocId || '',
    userDifficulty: toNumberOrNull(row.user_difficulty),
    voteCount: Number(row.vote_count || 0),
    easyCount: Number(row.easy_count || 0),
    mediumCount: Number(row.medium_count || 0),
    hardCount: Number(row.hard_count || 0),
    averageScore: toNumberOrNull(row.average_score),
    bayesianScore: toNumberOrNull(row.bayesian_score),
    effectiveVoteWeight: toNumberOrNull(row.effective_vote_weight) || 0,
    weightedAverageScore: toNumberOrNull(row.weighted_average_score),
    weightedBayesianScore: toNumberOrNull(row.weighted_bayesian_score),
    suggestedDifficulty: row.suggested_difficulty || null,
    assignedDifficulty: row.assigned_difficulty || null,
    confidence: row.confidence || 'collecting',
    stableThreshold: Number(row.stable_threshold || 10),
    updatedAt: row.updated_at || null,
  };
};

export const fetchExamDifficulty = async (docId) => {
  const sb = getSupabaseClient();
  if (!sb || !docId) return normalizeDifficultyRow(null, docId);

  const { data, error } = await sb.rpc('get_exam_difficulty', {
    p_doc_id: docId,
  });
  if (error) throw error;
  return normalizeDifficultyRow(firstRow(data), docId);
};

export const setExamDifficultyVote = async (docId, difficulty) => {
  const sb = getSupabaseClient();
  if (!sb) throw new Error('Supabase is not configured.');
  if (!docId) throw new Error('Missing document id.');

  const value = Number(difficulty);
  if (!Object.values(DIFFICULTY).includes(value)) {
    throw new Error('Invalid difficulty.');
  }

  const { data, error } = await sb.rpc('set_exam_difficulty_vote', {
    p_doc_id: docId,
    p_difficulty: value,
  });
  if (error) throw error;
  return normalizeDifficultyRow(firstRow(data), docId);
};
