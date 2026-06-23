import { getSupabaseClient } from './supabaseClient';

const EMPTY_REPUTATION = {
  userId: '',
  level: 0,
  levelKey: 'newcomer',
  acceptedSolutionCount: 0,
  acceptedCorrectionCount: 0,
  submittedSolutionIssueCount: 0,
  submittedCorrectionIssueCount: 0,
  issueSubmissionCount: 0,
  convertedSubmissionCount: 0,
  lastContributionAt: null,
  recalculatedAt: null,
};

const firstRow = (data) => {
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
};

const toNumber = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

export const normalizeReputation = (row) => {
  if (!row) return { ...EMPTY_REPUTATION };

  return {
    userId: row.user_id || '',
    level: toNumber(row.level),
    levelKey: row.level_key || 'newcomer',
    acceptedSolutionCount: toNumber(row.accepted_solution_count),
    acceptedCorrectionCount: toNumber(row.accepted_correction_count),
    submittedSolutionIssueCount: toNumber(row.submitted_solution_issue_count),
    submittedCorrectionIssueCount: toNumber(row.submitted_correction_issue_count),
    issueSubmissionCount: toNumber(row.issue_submission_count),
    convertedSubmissionCount: toNumber(row.converted_submission_count),
    lastContributionAt: row.last_contribution_at || null,
    recalculatedAt: row.recalculated_at || null,
  };
};

export const fetchMyReputation = async () => {
  const sb = getSupabaseClient();
  if (!sb) return normalizeReputation(null);

  const { data, error } = await sb.rpc('get_my_reputation');
  if (error) throw error;
  return normalizeReputation(firstRow(data));
};

export const emptyReputation = () => normalizeReputation(null);
