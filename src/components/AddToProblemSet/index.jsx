import React from 'react';
import {FaBookmark, FaCheck, FaLayerGroup, FaPlus, FaSave, FaTimes} from 'react-icons/fa';
import {useAuth} from '@site/src/hooks/useAuth';
import {useProblemSets} from '@site/src/hooks/useProblemSets';
import {useProblemSetsFeature} from '@site/src/hooks/useProblemSetsFeature';
import {useUiText} from '@site/src/i18n/useUiText';
import {PROBLEM_SET_KIND} from '@site/src/services/problemSetTypes';
import {getProblemSetMembershipErrorCode} from '@site/src/services/problemSetErrors';
import {consumeAuthReturnIntent, saveAuthReturnIntent} from '@site/src/services/authReturn';
import styles from './styles.module.css';

const setName = (problemSet, t) => {
  if (problemSet.kind === PROBLEM_SET_KIND.LATER) return t.later;
  if (problemSet.kind === PROBLEM_SET_KIND.MISTAKES) return t.mistakes;
  return problemSet.title;
};

export default function AddToProblemSet({docId}) {
  const featureEnabled = useProblemSetsFeature();
  const {isLoggedIn, authReady, user} = useAuth();
  const t = useUiText('problemSets');
  const {sets, loading, error} = useProblemSets(docId, {enabled: featureEnabled && isLoggedIn});
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messageIsError, setMessageIsError] = React.useState(false);
  const triggerRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const pendingCreatedSetIdsRef = React.useRef(new Set());
  const savingRef = React.useRef(false);
  const mountedRef = React.useRef(false);
  const closeTimerRef = React.useRef(null);
  const scope = `${user?.id || ''}:${docId}`;
  const scopeRef = React.useRef(scope);
  scopeRef.current = scope;

  const activeSets = sets.filter((item) => !item.archivedAt);
  const containsAny = activeSets.some((item) => item.containsDoc);
  const busy = saving || loading;

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  React.useEffect(() => {
    savingRef.current = false;
    setSaving(false);
    setOpen(false);
    setMessage('');
    setNewTitle('');
    pendingCreatedSetIdsRef.current.clear();
    window.clearTimeout(closeTimerRef.current);
  }, [scope]);

  React.useEffect(() => {
    setSelected(activeSets
      .filter((item) => item.containsDoc || pendingCreatedSetIdsRef.current.has(item.id))
      .map((item) => item.id));
  }, [sets]);

  React.useEffect(() => {
    if (authReady && isLoggedIn && consumeAuthReturnIntent({intent: 'add-to-set', docId})) {
      setOpen(true);
    }
  }, [authReady, docId, isLoggedIn]);

  React.useEffect(() => {
    if (!open) return undefined;
    dialogRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        )].filter((element) => !element.hasAttribute('hidden'));
        if (focusable.length === 0) {
          event.preventDefault();
          dialogRef.current.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const openPicker = () => {
    if (!isLoggedIn) {
      const returnTo = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      saveAuthReturnIntent({returnTo, intent: 'add-to-set', docId});
      window.location.assign('/login');
      return;
    }
    setMessage('');
    setMessageIsError(false);
    window.clearTimeout(closeTimerRef.current);
    setOpen(true);
  };

  const toggleSet = (setId) => {
    setSelected((current) => current.includes(setId)
      ? current.filter((id) => id !== setId)
      : [...current, setId]);
  };

  const createSet = async () => {
    if (savingRef.current || loading || !newTitle.trim()) return;
    savingRef.current = true;
    const requestScope = scope;
    setSaving(true);
    setMessage('');
    setMessageIsError(false);
    try {
      const {createMyProblemSet} = await import('@site/src/services/problemSetService');
      const id = await createMyProblemSet({title: newTitle.trim()});
      if (!mountedRef.current || scopeRef.current !== requestScope) return;
      pendingCreatedSetIdsRef.current.add(id);
      setSelected((current) => [...current, id]);
      setNewTitle('');
    } catch (createError) {
      if (!mountedRef.current || scopeRef.current !== requestScope) return;
      setMessage(t.saveFailed);
      setMessageIsError(true);
    } finally {
      if (mountedRef.current && scopeRef.current === requestScope) {
        savingRef.current = false;
        setSaving(false);
      }
    }
  };

  const save = async () => {
    if (savingRef.current || loading) return;
    savingRef.current = true;
    const requestScope = scope;
    setSaving(true);
    setMessage('');
    setMessageIsError(false);
    try {
      const {setDocProblemSetMemberships} = await import('@site/src/services/problemSetService');
      await setDocProblemSetMemberships(docId, selected);
      if (!mountedRef.current || scopeRef.current !== requestScope) return;
      pendingCreatedSetIdsRef.current.clear();
      setMessage(t.saved);
      closeTimerRef.current = window.setTimeout(() => setOpen(false), 350);
    } catch (saveError) {
      if (!mountedRef.current || scopeRef.current !== requestScope) return;
      setMessage(t.membershipErrors[getProblemSetMembershipErrorCode(saveError)]);
      setMessageIsError(true);
    } finally {
      if (mountedRef.current && scopeRef.current === requestScope) {
        savingRef.current = false;
        setSaving(false);
      }
    }
  };

  if (!featureEnabled) return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${containsAny ? styles.triggerActive : ''}`}
        onClick={openPicker}
      >
        {containsAny ? <FaCheck /> : <FaBookmark />}
        <span>{containsAny ? t.added : t.addToSet}</span>
      </button>

      {open && (
        <div className={styles.overlay} role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <section
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="problem-set-dialog-title"
            tabIndex={-1}
          >
            <header>
              <div>
                <h2 id="problem-set-dialog-title"><FaLayerGroup /> {t.pickerTitle}</h2>
                <p>{t.pickerHint}</p>
              </div>
              <button type="button" className={styles.closeButton} onClick={() => setOpen(false)} aria-label={t.close}>
                <FaTimes />
              </button>
            </header>

            {loading && !sets.length ? <p className={styles.stateText}>{t.loading}</p> : (
              <div className={styles.optionList}>
                {activeSets.map((problemSet) => (
                  <label key={problemSet.id} className={styles.option}>
                    <input
                      type="checkbox"
                      checked={selected.includes(problemSet.id)}
                      disabled={busy}
                      onChange={() => toggleSet(problemSet.id)}
                    />
                    <span>
                      <strong>{setName(problemSet, t)}</strong>
                      <small>{t.problemCount(problemSet.itemCount)}</small>
                    </span>
                    {problemSet.kind !== PROBLEM_SET_KIND.CUSTOM && <em>{t.systemSet}</em>}
                  </label>
                ))}
              </div>
            )}

            <div className={styles.createRow}>
              <input
                value={newTitle}
                disabled={busy}
                maxLength={80}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder={t.quickCreatePlaceholder}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    void createSet();
                  }
                }}
              />
              <button type="button" className={styles.saveButton} disabled={busy || !newTitle.trim()} onClick={createSet}><FaPlus /> {t.create}</button>
            </div>

            {(message || error) && <p className={`${styles.message} ${messageIsError || error ? styles.errorMessage : ''}`}
              role={messageIsError || error ? 'alert' : 'status'}>{message || t.loadFailed}</p>}
            <footer>
              <button type="button" className={styles.cancelButton} onClick={() => setOpen(false)}>{t.cancel}</button>
              <button type="button" className={styles.saveButton} disabled={busy} onClick={save}>
                <FaSave /> {saving ? t.saving : t.saveMemberships}
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
