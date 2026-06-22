import { getSupabaseClient } from './supabaseClient';
import { getVerifiedAccessToken } from './syncService';
import { getEdgeFunctionErrorMessage } from './edgeFunctionErrors';

const FUNCTION_NAME = 'agent-session';

async function invokeAgentSession(method = 'GET', body) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error('Supabase is not configured.');

  const accessToken = await getVerifiedAccessToken();
  if (!accessToken) throw new Error('Login session is missing or expired.');

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  if (body !== undefined) options.body = body;

  const { data, error } = await supabase.functions.invoke(FUNCTION_NAME, options);
  if (error) {
    throw new Error(await getEdgeFunctionErrorMessage(error, 'Agent bridge request failed.'));
  }
  if (data?.error) throw new Error(data.error.message || data.error.code);
  return data;
}

export function loadAgentBridgeStatus() {
  return invokeAgentSession('GET');
}

export function updateAgentConsents(consents) {
  return invokeAgentSession('POST', {
    action: 'update_consents',
    consents,
  });
}

export function createAgentSession() {
  return invokeAgentSession('POST', {
    action: 'create_session',
  });
}
