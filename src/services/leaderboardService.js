import {getSupabaseClient} from './supabaseClient';

export async function fetchPracticeLeaderboard(period = 'half_month') {
  const client = getSupabaseClient();
  if (!client) return [];
  const {data, error} = await client.rpc('get_practice_leaderboard', {p_period: period});
  if (error) throw error;
  return data || [];
}
