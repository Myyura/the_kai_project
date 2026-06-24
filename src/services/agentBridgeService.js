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

// 以下聊天接口全部经 agent-session 服务端代理转发到 amaterasu，浏览器永不直连计算平面。
export function startChat({ prompt, model, title, description, pics } = {}) {
  return invokeAgentSession('POST', { action: 'chat_start', prompt, model, title, description, pics });
}

export function continueChat({ sessionId, prompt, model, pics } = {}) {
  return invokeAgentSession('POST', { action: 'chat_continue', sessionId, prompt, model, pics });
}

export function listChats({ search, cursor, limit } = {}) {
  return invokeAgentSession('POST', { action: 'chat_list', search, cursor, limit });
}

export function getChatHistory(sessionId) {
  return invokeAgentSession('POST', { action: 'chat_history', sessionId });
}

export function renameChat(sessionId, title) {
  return invokeAgentSession('POST', { action: 'chat_rename', sessionId, title });
}

export function deleteChat(sessionId) {
  return invokeAgentSession('POST', { action: 'chat_delete', sessionId });
}
