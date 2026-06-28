import { getScopedStorageKey } from './localStorageScope';

const PENDING_EVENTS_KEY = 'kai_practice_events_pending';
const MAX_PENDING_EVENTS = 2000;

const createEventId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const value = Math.floor(Math.random() * 16);
    const nibble = char === 'x' ? value : ((value & 0x3) | 0x8);
    return nibble.toString(16);
  });
};

export const readPendingPracticeEvents = ({ storageOwner } = {}) => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(getScopedStorageKey(PENDING_EVENTS_KEY, storageOwner));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writePendingPracticeEvents = (events, storageOwner) => {
  if (typeof window === 'undefined') return;
  try {
    const key = getScopedStorageKey(PENDING_EVENTS_KEY, storageOwner);
    if (events.length === 0) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(events.slice(-MAX_PENDING_EVENTS)));
  } catch {}
};

export const queuePracticeEvent = (docId, eventType, occurredAt, { storageOwner } = {}) => {
  if (typeof window === 'undefined' || !docId) return;
  const events = readPendingPracticeEvents({ storageOwner });
  events.push({
    id: createEventId(),
    docId: String(docId).slice(0, 500),
    eventType: eventType === 'review' ? 'review' : 'practice',
    occurredAt: Number(occurredAt) || Date.now(),
  });
  writePendingPracticeEvents(events, storageOwner);
  import('./syncService').then(({ markSyncDirty }) => markSyncDirty({ storageOwner })).catch(() => {});
  window.dispatchEvent(new Event('kai_practice_event_queued'));
};

export const removePendingPracticeEvents = (eventIds, { storageOwner } = {}) => {
  if (!Array.isArray(eventIds) || eventIds.length === 0) return;
  const removed = new Set(eventIds);
  const remaining = readPendingPracticeEvents({ storageOwner })
    .filter((event) => !removed.has(event.id));
  writePendingPracticeEvents(remaining, storageOwner);
};
