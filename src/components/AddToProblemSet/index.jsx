import React from 'react';
import {FaBookmark, FaCheck, FaLayerGroup, FaPlus, FaSave, FaTimes} from 'react-icons/fa';
import {useSync} from '@site/src/hooks/useSync';
import {useProblemSets} from '@site/src/hooks/useProblemSets';
import {useProblemSetsFeature} from '@site/src/hooks/useProblemSetsFeature';
import {useUiText} from '@site/src/i18n/useUiText';
import {
  PROBLEM_SET_KIND,
  createMyProblemSet,
  setDocProblemSetMemberships,
} from '@site/src/services/problemSetService';
import {consumeAuthReturnIntent, saveAuthReturnIntent} from '@site/src/services/authReturn';
import styles from './styles.module.css';

const setName = (problemSet, t) => {
  if (problemSet.kind === PROBLEM_SET_KIND.LATER) return t.later;
  if (problemSet.kind === PROBLEM_SET_KIND.MISTAKES) return t.mistakes;
  return problemSet.title;
};

export default function AddToProblemSet({docId}) {
  const featureEnabled = useProblemSetsFeature();
  const {isLoggedIn, authReady} = useSync();
  const t = useUiText('problemSets');
  const {sets, loading, error, refresh} = useProblemSets(docId, {enabled: featureEnabled && isLoggedIn});
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const triggerRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const pendingCreatedSetIdsRef = React.useRef(new Set());

  const activeSets = sets.filter((item) => !item.archivedAt);
  const containsAny = activeSets.some((item) => item.containsDoc);

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
    setOpen(true);
  };

  const toggleSet = (setId) => {
    setSelected((current) => current.includes(setId)
      ? current.filter((id) => id !== setId)
      : [...current, setId]);
  };

  const createSet = async () => {
    if (!newTitle.trim()) return;
    setSaving(true);
    setMessage('');
    try {
      const id = await createMyProblemSet({title: newTitle.trim()});
      pendingCreatedSetIdsRef.current.add(id);
      setSelected((current) => [...current, id]);
      setNewTitle('');
      await refresh();
    } catch (createError) {
      setMessage(createError?.message === 'offline_read_only' ? t.offlineReadOnly : t.saveFailed);
    } finally {
      setSaving(false);
    }
  };

  const save = async () => {
    setSaving(true);
    setMessage('');
    try {
      await setDocProblemSetMemberships(docId, selected);
      pendingCreatedSetIdsRef.current.clear();
      await refresh();
      setMessage(t.saved);
      window.setTimeout(() => setOpen(false), 350);
    } catch (saveError) {
      setMessage(saveError?.message === 'offline_read_only' ? t.offlineReadOnly : t.saveFailed);
    } finally {
      setSaving(false);
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
              <button type="button" disabled={saving || !newTitle.trim()} onClick={createSet}><FaPlus /> {t.create}</button>
            </div>

            {(message || error) && <p className={styles.message} aria-live="polite">{message || t.loadFailed}</p>}
            <footer>
              <button type="button" className={styles.cancelButton} onClick={() => setOpen(false)}>{t.cancel}</button>
              <button type="button" className={styles.saveButton} disabled={saving || loading} onClick={save}>
                <FaSave /> {saving ? t.saving : t.saveMemberships}
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
