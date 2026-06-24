import { getSupabaseClient, getSupabaseCredentials } from './supabaseClient';
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

function parseSseEvent(raw) {
  let type = 'message';
  let data = '';
  for (const line of raw.split('\n')) {
    if (line.startsWith('event:')) type = line.slice(6).trim();
    else if (line.startsWith('data:')) data += line.slice(5).trim();
  }
  if (!data) return null;
  try {
    return { type, data: JSON.parse(data) };
  } catch {
    return { type, data: { text: data } };
  }
}

// 流式对话：fetch 直打 agent-session（仍经服务端代理转发 amaterasu 的 SSE），逐字回调 onEvent({type, data})，返回 final reply。
export async function streamChat({ sessionId, prompt, model, pics, signal } = {}, onEvent) {
  const accessToken = await getVerifiedAccessToken();
  if (!accessToken) throw new Error('Login session is missing or expired.');
  const { url, anonKey } = getSupabaseCredentials();
  if (!url || !anonKey) throw new Error('Supabase is not configured.');

  const res = await fetch(`${url}/functions/v1/agent-session`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: anonKey,
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
    },
    body: JSON.stringify({ action: sessionId ? 'chat_continue' : 'chat_start', sessionId, prompt, model, pics }),
    signal,
  });
  if (!res.ok || !res.body) {
    throw new Error((await res.text().catch(() => '')) || `Agent stream failed (${res.status}).`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let final = null;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buffer.indexOf('\n\n')) >= 0) {
      const event = parseSseEvent(buffer.slice(0, idx));
      buffer = buffer.slice(idx + 2);
      if (!event) continue;
      if (event.type === 'error') throw new Error(event.data.detail || 'Agent turn failed.');
      if (event.type === 'final') final = event.data;
      onEvent?.(event);
    }
  }
  return final;
}
