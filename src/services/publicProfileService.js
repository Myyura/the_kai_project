import { getSupabaseClient } from './supabaseClient';

const firstRow = (data) => (Array.isArray(data) ? data[0] || null : data || null);

const normalizeProfile = (row) => {
  if (!row) return null;
  return {
    publicId: row.public_id || '',
    nickname: row.nickname || '',
    discriminator: Number(row.discriminator || 0),
    displayName: row.display_name || '',
    nicknameConfirmed: Boolean(row.nickname_confirmed),
    nicknameChangedAt: row.nickname_changed_at || null,
    nextNicknameChangeAt: row.next_nickname_change_at || null,
    leaderboardVisible: Boolean(row.leaderboard_visible),
  };
};

const callProfileRpc = async (name, params) => {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase 未配置');
  const { data, error } = await client.rpc(name, params);
  if (error) throw error;
  return normalizeProfile(firstRow(data));
};

export const fetchMyPublicProfile = () => callProfileRpc('get_my_public_profile');

export const confirmOrChangeMyNickname = (nickname) => (
  callProfileRpc('confirm_or_change_my_nickname', { p_nickname: nickname })
);

export const setMyLeaderboardVisibility = (visible) => (
  callProfileRpc('set_my_leaderboard_visibility', { p_visible: Boolean(visible) })
);

