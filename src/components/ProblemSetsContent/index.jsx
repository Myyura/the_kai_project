import React from 'react';
import Link from '@docusaurus/Link';
import {
  FaArchive,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaClone,
  FaEdit,
  FaExclamationTriangle,
  FaLayerGroup,
  FaPlus,
  FaRedo,
  FaSave,
  FaSearch,
  FaTrashAlt,
} from 'react-icons/fa';
import {useProblemSet, useProblemSets} from '@site/src/hooks/useProblemSets';
import {useUiText} from '@site/src/i18n/useUiText';
import {
  PROBLEM_SET_KIND,
  archiveMyProblemSet,
  createMyProblemSet,
  deleteMyProblemSet,
  removeProblemSetItems,
  reorderProblemSetItems,
  transferProblemSetItems,
  updateMyProblemSet,
  updateProblemSetItemAnnotation,
} from '@site/src/services/problemSetService';
import {getDocumentTitle} from '@site/src/services/documentMetadata';
import styles from './styles.module.css';

const getSetId = () => {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('setId') || '';
};

const setName = (problemSet, t) => {
  if (problemSet.kind === PROBLEM_SET_KIND.LATER) return t.later;
  if (problemSet.kind === PROBLEM_SET_KIND.MISTAKES) return t.mistakes;
  return problemSet.title || t.untitled;
};

const withSetContext = (permalink, setId) => {
  try {
    const url = new URL(permalink, window.location.origin);
    url.searchParams.set('set', setId);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    const separator = String(permalink).includes('?') ? '&' : '?';
    return `${permalink}${separator}set=${encodeURIComponent(setId)}`;
  }
};

function EmptyState({t}) {
  return (
    <div className={styles.emptyState}>
      <FaLayerGroup />
      <p>{t.empty}</p>
      <Link to="/docs/intro">{t.browseProblems} <FaArrowRight /></Link>
    </div>
  );
}

function ProblemSetList() {
  const t = useUiText('problemSets');
  const {sets, loading, error, refresh} = useProblemSets();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [creating, setCreating] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const createSet = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    setCreating(true);
    setMessage('');
    try {
      await createMyProblemSet({title: title.trim(), description});
      setTitle('');
      setDescription('');
      setMessage(t.created);
      await refresh();
    } catch (createError) {
      setMessage(createError?.message === 'offline_read_only' ? t.offlineReadOnly : t.saveFailed);
    } finally {
      setCreating(false);
    }
  };

  const toggleArchive = async (problemSet) => {
    setMessage('');
    try {
      await archiveMyProblemSet(problemSet.id, !problemSet.archivedAt);
      await refresh();
    } catch (archiveError) {
      setMessage(archiveError?.message === 'offline_read_only' ? t.offlineReadOnly : t.saveFailed);
    }
  };

  const activeSets = sets.filter((item) => !item.archivedAt);
  const archivedSets = sets.filter((item) => item.archivedAt);

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <h2><FaLayerGroup /> {t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <button type="button" className={styles.iconButton} onClick={refresh} disabled={loading} title={t.refresh}>
          <FaRedo className={loading ? styles.spin : ''} />
        </button>
      </header>

      <form className={styles.createPanel} onSubmit={createSet}>
        <div>
          <label htmlFor="problem-set-title">{t.newSet}</label>
          <input
            id="problem-set-title"
            value={title}
            maxLength={80}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={t.titlePlaceholder}
          />
        </div>
        <div className={styles.descriptionField}>
          <label htmlFor="problem-set-description">{t.description}</label>
          <input
            id="problem-set-description"
            value={description}
            maxLength={2000}
            onChange={(event) => setDescription(event.target.value)}
            placeholder={t.descriptionPlaceholder}
          />
        </div>
        <button type="submit" disabled={creating || !title.trim()}>
          <FaPlus /> {creating ? t.saving : t.create}
        </button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
      {error && !sets.length && (
        <button type="button" className={styles.errorState} onClick={refresh}>
          <FaExclamationTriangle /> {t.loadFailed}
        </button>
      )}

      {!loading && activeSets.length === 0 ? <EmptyState t={t} /> : (
        <div className={styles.setGrid}>
          {activeSets.map((problemSet) => {
            const total = problemSet.itemCount || 0;
            const percentage = total ? Math.round((problemSet.completedCount / total) * 100) : 0;
            return (
              <article key={problemSet.id} className={`${styles.setCard} ${problemSet.kind !== PROBLEM_SET_KIND.CUSTOM ? styles.systemCard : ''}`}>
                <Link to={`/me?tab=sets&setId=${encodeURIComponent(problemSet.id)}`} className={styles.cardLink}>
                  <div className={styles.cardHeading}>
                    <h3>{setName(problemSet, t)}</h3>
                    {problemSet.kind !== PROBLEM_SET_KIND.CUSTOM && <span>{t.systemSet}</span>}
                  </div>
                  <p>{problemSet.description || t.defaultDescriptions[problemSet.kind] || t.noDescription}</p>
                  <div className={styles.cardStats}>
                    <span>{t.problemCount(problemSet.itemCount)}</span>
                    <span><FaCheckCircle /> {problemSet.completedCount}</span>
                    <span>{t.reviewingCount(problemSet.reviewingCount)}</span>
                  </div>
                  <div className={styles.progressTrack}><span style={{width: `${percentage}%`}} /></div>
                </Link>
                {problemSet.kind === PROBLEM_SET_KIND.CUSTOM && (
                  <button type="button" className={styles.archiveButton} onClick={() => toggleArchive(problemSet)}>
                    <FaArchive /> {t.archive}
                  </button>
                )}
              </article>
            );
          })}
        </div>
      )}

      {archivedSets.length > 0 && (
        <section className={styles.archivedSection}>
          <h3>{t.archived}</h3>
          {archivedSets.map((problemSet) => (
            <div key={problemSet.id} className={styles.archivedRow}>
              <span>{setName(problemSet, t)} · {t.problemCount(problemSet.itemCount)}</span>
              <button type="button" onClick={() => toggleArchive(problemSet)}>{t.restore}</button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

function ProblemSetDetail({setId}) {
  const t = useUiText('problemSets');
  const {problemSet, loading, error, refresh} = useProblemSet(setId);
  const {sets} = useProblemSets();
  const [query, setQuery] = React.useState('');
  const [status, setStatus] = React.useState('all');
  const [selected, setSelected] = React.useState([]);
  const [targetSetId, setTargetSetId] = React.useState('');
  const [editingSet, setEditingSet] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [annotationDrafts, setAnnotationDrafts] = React.useState({});
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    setTitle(problemSet?.title || '');
    setDescription(problemSet?.description || '');
    setAnnotationDrafts(Object.fromEntries((problemSet?.items || []).map((item) => [item.id, item.annotation])));
  }, [problemSet]);

  if (loading && !problemSet) return <div className={styles.loadingState}><FaRedo className={styles.spin} /> {t.loading}</div>;
  if (error && !problemSet) {
    return <button type="button" className={styles.errorState} onClick={refresh}><FaExclamationTriangle /> {t.loadFailed}</button>;
  }
  if (!problemSet) return null;

  const isCustom = problemSet.kind === PROBLEM_SET_KIND.CUSTOM;
  const items = (problemSet.items || []).map((item) => ({
    ...item,
    title: getDocumentTitle(item.docId, item.title),
  }));
  const filtered = items.filter((item) => {
    const matchesText = !query.trim()
      || item.title.toLowerCase().includes(query.trim().toLowerCase())
      || item.docId.toLowerCase().includes(query.trim().toLowerCase());
    return matchesText && (status === 'all' || item.progressStatus === status);
  });
  const nextItem = items.find((item) => item.contentAvailable && item.progressStatus !== 'completed')
    || items.find((item) => item.contentAvailable);
  const targets = sets.filter((item) => item.id !== setId && !item.archivedAt);

  const runAction = async (action, successText = t.saved) => {
    setMessage('');
    try {
      await action();
      setSelected([]);
      setMessage(successText);
      await refresh();
    } catch (actionError) {
      setMessage(actionError?.message === 'offline_read_only' ? t.offlineReadOnly : t.saveFailed);
    }
  };

  const saveSet = () => runAction(async () => {
    await updateMyProblemSet(setId, {title, description});
    setEditingSet(false);
  });

  const moveItem = (itemId, direction) => {
    const currentIndex = items.findIndex((item) => item.id === itemId);
    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const ordered = [...items];
    [ordered[currentIndex], ordered[targetIndex]] = [ordered[targetIndex], ordered[currentIndex]];
    void runAction(() => reorderProblemSetItems(setId, ordered.map((item) => item.id)));
  };

  const transfer = (copy) => {
    if (!targetSetId || selected.length === 0) return;
    void runAction(() => transferProblemSetItems({
      sourceSetId: setId,
      targetSetId,
      itemIds: selected,
      copy,
    }), copy ? t.copied : t.moved);
  };

  const toggleSelected = (itemId) => {
    setSelected((current) => current.includes(itemId)
      ? current.filter((id) => id !== itemId)
      : [...current, itemId]);
  };

  return (
    <div className={styles.shell}>
      <Link className={styles.backLink} to="/me?tab=sets"><FaArrowLeft /> {t.back}</Link>
      <header className={styles.detailHeader}>
        <div>
          <div className={styles.detailTitleRow}>
            <h2>{setName(problemSet, t)}</h2>
            {!isCustom && <span>{t.systemSet}</span>}
          </div>
          <p>{problemSet.description || t.defaultDescriptions[problemSet.kind] || t.noDescription}</p>
          <div className={styles.cardStats}>
            <span>{t.problemCount(problemSet.itemCount)}</span>
            <span>{t.completedCount(problemSet.completedCount)}</span>
            <span>{t.reviewingCount(problemSet.reviewingCount)}</span>
          </div>
        </div>
        <div className={styles.detailActions}>
          {nextItem && <Link to={withSetContext(nextItem.permalink, setId)}>{t.continue} <FaArrowRight /></Link>}
          {isCustom && <button type="button" onClick={() => setEditingSet((value) => !value)}><FaEdit /> {t.edit}</button>}
        </div>
      </header>

      {editingSet && isCustom && (
        <div className={styles.editSetPanel}>
          <input value={title} maxLength={80} onChange={(event) => setTitle(event.target.value)} />
          <textarea value={description} maxLength={2000} rows={3} onChange={(event) => setDescription(event.target.value)} />
          <div>
            <button type="button" onClick={saveSet}><FaSave /> {t.save}</button>
            <button type="button" onClick={() => runAction(() => archiveMyProblemSet(setId, true), t.archivedOk)}>
              <FaArchive /> {t.archive}
            </button>
            <button type="button" className={styles.dangerButton} onClick={() => {
              if (window.confirm(t.deleteConfirm)) {
                void runAction(async () => {
                  await deleteMyProblemSet(setId);
                  window.location.assign('/me?tab=sets');
                });
              }
            }}><FaTrashAlt /> {t.delete}</button>
          </div>
        </div>
      )}

      {message && <p className={styles.message}>{message}</p>}

      <div className={styles.toolbar}>
        <label className={styles.searchBox}>
          <FaSearch />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} />
        </label>
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="all">{t.allStatuses}</option>
          <option value="not_started">{t.notStarted}</option>
          <option value="reviewing">{t.reviewing}</option>
          <option value="completed">{t.completed}</option>
        </select>
      </div>

      {selected.length > 0 && (
        <div className={styles.bulkBar}>
          <strong>{t.selected(selected.length)}</strong>
          <select value={targetSetId} onChange={(event) => setTargetSetId(event.target.value)}>
            <option value="">{t.chooseTarget}</option>
            {targets.map((item) => <option key={item.id} value={item.id}>{setName(item, t)}</option>)}
          </select>
          <button type="button" disabled={!targetSetId} onClick={() => transfer(false)}>{t.move}</button>
          <button type="button" disabled={!targetSetId} onClick={() => transfer(true)}><FaClone /> {t.copy}</button>
          <button type="button" className={styles.dangerButton} onClick={() => runAction(() => removeProblemSetItems(setId, selected), t.removed)}>
            <FaTrashAlt /> {t.remove}
          </button>
        </div>
      )}

      {filtered.length === 0 ? <EmptyState t={t} /> : (
        <div className={styles.itemList}>
          {filtered.map((item) => (
            <article key={item.id} className={styles.itemRow}>
              <input type="checkbox" checked={selected.includes(item.id)} onChange={() => toggleSelected(item.id)} aria-label={t.selectItem(item.title)} />
              <div className={styles.itemMain}>
                <div className={styles.itemTop}>
                  {item.contentAvailable
                    ? <Link to={withSetContext(item.permalink, setId)}>{item.title}</Link>
                    : <strong>{item.title}</strong>}
                  <span className={`${styles.statusBadge} ${styles[`status_${item.progressStatus}`]}`}>{t.statusLabels[item.progressStatus]}</span>
                  {!item.contentAvailable && <span className={styles.unavailable}>{t.unavailable}</span>}
                </div>
                <small>{item.docId}</small>
                <div className={styles.annotationEditor}>
                  <textarea
                    rows={2}
                    maxLength={1000}
                    value={annotationDrafts[item.id] || ''}
                    placeholder={t.annotationPlaceholder}
                    onChange={(event) => setAnnotationDrafts((current) => ({...current, [item.id]: event.target.value}))}
                  />
                  <button type="button" onClick={() => runAction(
                    () => updateProblemSetItemAnnotation(setId, item.id, annotationDrafts[item.id] || ''),
                  )}><FaSave /> {t.saveAnnotation}</button>
                </div>
              </div>
              {isCustom && (
                <div className={styles.orderButtons}>
                  <button type="button" onClick={() => moveItem(item.id, -1)} title={t.moveUp}><FaArrowUp /></button>
                  <button type="button" onClick={() => moveItem(item.id, 1)} title={t.moveDown}><FaArrowDown /></button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProblemSetsContent() {
  const setId = getSetId();
  return setId ? <ProblemSetDetail setId={setId} /> : <ProblemSetList />;
}
