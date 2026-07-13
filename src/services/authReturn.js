const STORAGE_KEY = 'kai_auth_return_intent';
const MAX_AGE_MS = 15 * 60 * 1000;

export const isSafeReturnTo = (value) => (
  typeof value === 'string'
  && value.startsWith('/')
  && !value.startsWith('//')
  && !value.includes('\\')
  && !/^[\/]+(?:https?:)?\/\//i.test(value)
);

export const saveAuthReturnIntent = ({returnTo, intent = '', docId = ''}) => {
  if (typeof window === 'undefined' || !isSafeReturnTo(returnTo)) return false;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      returnTo,
      intent,
      docId,
      createdAt: Date.now(),
    }));
    return true;
  } catch {
    return false;
  }
};

const readIntent = () => {
  if (typeof window === 'undefined') return null;
  try {
    const value = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
    if (!value || !isSafeReturnTo(value.returnTo) || Date.now() - Number(value.createdAt || 0) > MAX_AGE_MS) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return value;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export const getAuthReturnTarget = (fallback = '/me') => readIntent()?.returnTo || fallback;

export const consumeAuthReturnIntent = ({intent, docId = ''}) => {
  const value = readIntent();
  if (!value || value.intent !== intent || (docId && value.docId !== docId)) return false;
  try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
  return true;
};

