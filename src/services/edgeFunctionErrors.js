const GENERIC_FUNCTION_ERROR = 'Edge Function returned a non-2xx status code';

function messageFromPayload(payload) {
  if (!payload || typeof payload !== 'object') return '';
  if (typeof payload.error?.message === 'string') return payload.error.message;
  if (typeof payload.message === 'string') return payload.message;
  if (typeof payload.error === 'string') return payload.error;
  return '';
}

export async function getEdgeFunctionErrorMessage(error, fallback = '请求失败，请稍后重试。') {
  const response = error?.context;

  if (response && typeof response.clone === 'function') {
    try {
      const payload = await response.clone().json();
      const message = messageFromPayload(payload);
      if (message) return message;
    } catch {
      try {
        const text = await response.clone().text();
        if (text && !text.startsWith('<')) return text.slice(0, 240);
      } catch {}
    }
  }

  if (error?.message && error.message !== GENERIC_FUNCTION_ERROR) {
    return error.message;
  }
  return fallback;
}
