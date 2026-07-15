import { getSupabaseClient } from './supabaseClient';

export async function fetchSiteContributors() {
  const client = getSupabaseClient();
  if (!client) return [];

  const { data, error } = await client.rpc('get_site_contributors');
  if (error) throw error;

  return (data || []).map((row) => ({
    displayName: String(row.display_name || '').trim(),
    contributionCount: Number(row.contribution_count || 0),
    solutionCount: Number(row.solution_count || 0),
    correctionCount: Number(row.correction_count || 0),
    lastContributionAt: row.last_contribution_at || null,
  })).filter((row) => row.displayName && row.contributionCount > 0);
}
