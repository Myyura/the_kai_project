const defaultSetTimer = (callback, delay) => setTimeout(callback, delay);
const defaultClearTimer = (timer) => clearTimeout(timer);

/**
 * Keep NoteEditor input paths on one debounce/flush implementation. Timer
 * functions are injectable so the behavior can be verified without sleeping.
 */
export function createDraftSaveScheduler({
  save,
  onFlushed = () => {},
  delay = 600,
  setTimer = defaultSetTimer,
  clearTimer = defaultClearTimer,
}) {
  if (typeof save !== 'function') throw new TypeError('save must be a function.');
  if (typeof onFlushed !== 'function') throw new TypeError('onFlushed must be a function.');

  let timer = null;
  let latestValue;
  let pending = false;

  const cancelTimer = () => {
    if (timer === null) return;
    clearTimer(timer);
    timer = null;
  };

  const flush = ({notify = true} = {}) => {
    if (!pending) return false;
    cancelTimer();
    const value = latestValue;
    pending = false;
    save(value);
    if (notify) onFlushed(value);
    return true;
  };

  const schedule = (value) => {
    latestValue = value;
    pending = true;
    cancelTimer();
    timer = setTimer(() => {
      timer = null;
      flush();
    }, delay);
  };

  return {
    flush,
    hasPending: () => pending,
    schedule,
  };
}
