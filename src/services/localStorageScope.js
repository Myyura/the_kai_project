const ANON_OWNER = 'anon';
const OWNER_CHANGE_EVENT = 'kai_storage_scope_changed';

let currentOwner = ANON_OWNER;

const normalizeOwner = (userId) => {
  if (typeof userId !== 'string' || !userId.trim()) return ANON_OWNER;
  return `user:${userId.trim()}`;
};

export const getStorageOwner = () => currentOwner;

export const getStorageOwnerForUser = (userId) => normalizeOwner(userId);

export const getScopedStorageKey = (baseKey, owner = currentOwner) => `${baseKey}:${owner}`;

export const setStorageOwner = (userId, { notify = true } = {}) => {
  const nextOwner = normalizeOwner(userId);
  if (nextOwner === currentOwner) return false;
  currentOwner = nextOwner;
  if (notify && typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OWNER_CHANGE_EVENT, {
      detail: { owner: currentOwner },
    }));
  }
  return true;
};

export const addStorageOwnerChangeListener = (handler) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(OWNER_CHANGE_EVENT, handler);
  return () => window.removeEventListener(OWNER_CHANGE_EVENT, handler);
};
