// Shared by lazy database services and hooks without importing the Supabase SDK.
export const PROGRESS_UPDATED_EVENT = 'kai_progress_updated';
export const NOTES_UPDATED_EVENT = 'kai_notes_updated';
export const PROBLEM_SETS_UPDATED_EVENT = 'kai_problem_sets_updated';

export function emitStudyEvent(name, detail = {}) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(name, {detail}));
  }
}

export function addStudyEventListener(name, listener) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(name, listener);
  return () => window.removeEventListener(name, listener);
}
