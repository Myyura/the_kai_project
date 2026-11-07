import React from 'react';
import Link from '@docusaurus/Link';
import {FaArrowRight, FaCheckCircle, FaDownload, FaLayerGroup, FaRedo, FaSearch, FaSignInAlt, FaTimes} from 'react-icons/fa';
import {useAuth} from '@site/src/hooks/useAuth';
import {normalizeLanguage, useCurrentLanguage} from '@site/src/context/LanguageContext';
import {consumeAuthReturnIntent, saveAuthReturnIntent} from '@site/src/services/authReturn';
import {
  fetchSharedProblemSet,
  getProblemSetShareErrorCode,
  importSharedProblemSet,
  normalizeProblemSetShareCode,
} from '@site/src/services/problemSetSharingService';
import messages from './importMessages';
import styles from './import.module.css';

const NAME_DRAFT_KEY = 'kai_problem_set_import_name';
const NAME_DRAFT_MAX_AGE = 15 * 60 * 1000;

// Only relative same-site routes are permitted in a shared snapshot.
const safePermalink = (value) => typeof value === 'string'
  && value.startsWith('/') && !value.startsWith('//')
  && !/[\\\u0000-\u0020\u007f]/.test(value) ? value : null;

const readNameDraft = (code) => {
  if (typeof window === 'undefined') return null;
  try {
    const draft = JSON.parse(window.sessionStorage.getItem(NAME_DRAFT_KEY) || 'null');
    if (!draft || typeof draft.code !== 'string' || typeof draft.title !== 'string'
      || draft.title.length > 80 || !Number.isFinite(draft.createdAt)
      || draft.createdAt > Date.now() || Date.now() - draft.createdAt > NAME_DRAFT_MAX_AGE) {
      window.sessionStorage.removeItem(NAME_DRAFT_KEY);
      return null;
    }
    return normalizeProblemSetShareCode(draft.code) === normalizeProblemSetShareCode(code) ? draft.title : null;
  } catch {
    return null;
  }
};

const clearNameDraft = (code) => {
  if (typeof window === 'undefined') return;
  try {
    const draft = JSON.parse(window.sessionStorage.getItem(NAME_DRAFT_KEY) || 'null');
    if (draft?.code && normalizeProblemSetShareCode(draft.code) === normalizeProblemSetShareCode(code)) {
      window.sessionStorage.removeItem(NAME_DRAFT_KEY);
    }
  } catch {}
};

export default function ImportPanel({initialCode = '', onImported, onClose, standalone = false}) {
  const t = messages[normalizeLanguage(useCurrentLanguage())];
  const {isLoggedIn, authReady, user} = useAuth();
  const codeId = React.useId();
  const nameId = React.useId();
  const headingId = React.useId();
  const errorId = React.useId();
  const nameHintId = React.useId();
  const [codeInput, setCodeInput] = React.useState(initialCode);
  const [share, setShare] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [importing, setImporting] = React.useState(false);
  const [errorCode, setErrorCode] = React.useState('');
  const [needsRefresh, setNeedsRefresh] = React.useState(false);
  const [importedSetId, setImportedSetId] = React.useState('');
  const mountedRef = React.useRef(false);
  const requestRef = React.useRef(0);
  const importingRef = React.useRef(false);
  const lastResolvedCodeRef = React.useRef('');
  const titleRef = React.useRef('');
  const titleEditedRef = React.useRef(false);
  const inputRef = React.useRef(initialCode);
  const identityRef = React.useRef(user?.id || '');
  identityRef.current = user?.id || '';

  const preview = React.useCallback(async (rawCode) => {
    if (importingRef.current) return;
    const requestId = ++requestRef.current;
    const identity = identityRef.current;
    setErrorCode('');
    setNeedsRefresh(false);
    setImportedSetId('');
    let code;
    try {
      code = normalizeProblemSetShareCode(rawCode);
      if (!code) throw new Error('share_code_invalid');
    } catch {
      setShare(null);
      setLoading(false);
      setErrorCode('invalidCode');
      return;
    }
    setLoading(true);
    setShare(null);
    try {
      const nextShare = await fetchSharedProblemSet(code);
      if (!mountedRef.current || requestRef.current !== requestId || identityRef.current !== identity) return;
      const sameCode = lastResolvedCodeRef.current === normalizeProblemSetShareCode(nextShare.code);
      const restoredName = readNameDraft(nextShare.code);
      const nextTitle = sameCode && titleEditedRef.current
        ? titleRef.current : restoredName ?? nextShare.title;
      titleRef.current = nextTitle;
      titleEditedRef.current = (sameCode && titleEditedRef.current) || restoredName !== null;
      lastResolvedCodeRef.current = normalizeProblemSetShareCode(nextShare.code);
      setTitle(nextTitle);
      setShare(nextShare);
    } catch (error) {
      if (mountedRef.current && requestRef.current === requestId && identityRef.current === identity) {
        setErrorCode(getProblemSetShareErrorCode(error));
      }
    } finally {
      if (mountedRef.current && requestRef.current === requestId && identityRef.current === identity) setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {mountedRef.current = false; requestRef.current += 1;};
  }, []);

  React.useEffect(() => {
    if (authReady && isLoggedIn) consumeAuthReturnIntent({intent: 'import-problem-set'});
  }, [authReady, isLoggedIn]);

  React.useEffect(() => {
    requestRef.current += 1;
    setCodeInput(initialCode);
    inputRef.current = initialCode;
    setShare(null);
    setErrorCode('');
    setNeedsRefresh(false);
    setImportedSetId('');
    setLoading(false);
    lastResolvedCodeRef.current = '';
    titleRef.current = '';
    titleEditedRef.current = false;
    setTitle('');
    if (initialCode.trim()) void preview(initialCode);
  }, [initialCode, preview]);

  // The public preview may resolve before auth; reload its recipient-specific progress
  // when the session changes, and discard responses belonging to the previous user.
  const previousIdentityRef = React.useRef(user?.id || '');
  React.useEffect(() => {
    const identity = user?.id || '';
    if (previousIdentityRef.current === identity) return;
    previousIdentityRef.current = identity;
    requestRef.current += 1;
    setShare(null);
    setLoading(false);
    setImportedSetId('');
    if (inputRef.current.trim()) void preview(inputRef.current);
  }, [user?.id, preview]);

  const changeCode = (value) => {
    if (importingRef.current) return;
    inputRef.current = value;
    requestRef.current += 1;
    setCodeInput(value);
    setShare(null);
    setLoading(false);
    setNeedsRefresh(false);
    setImportedSetId('');
    setErrorCode('');
  };

  const login = () => {
    if (!share) return;
    try {
      window.sessionStorage.setItem(NAME_DRAFT_KEY, JSON.stringify({
        code: share.code, title: titleRef.current, createdAt: Date.now(),
      }));
    } catch {}
    saveAuthReturnIntent({
      returnTo: `/shared-set?code=${encodeURIComponent(share.code)}`,
      intent: 'import-problem-set',
    });
  };

  const save = async (event) => {
    event.preventDefault();
    if (!share || importingRef.current || loading || needsRefresh || importedSetId) return;
    if (!title.trim() || Array.from(title.trim()).length > 80) {
      setErrorCode('invalidTitle');
      return;
    }
    if (!isLoggedIn || errorCode === 'unauthenticated') return;
    importingRef.current = true;
    setImporting(true);
    setErrorCode('');
    const requestId = requestRef.current;
    const identity = identityRef.current;
    let newSetId;
    try {
      newSetId = await importSharedProblemSet({code: share.code, title: title.trim(), expectedVersion: share.version});
      if (!mountedRef.current || requestRef.current !== requestId || identityRef.current !== identity) return;
      clearNameDraft(share.code);
      setImportedSetId(newSetId);
    } catch (error) {
      if (mountedRef.current && requestRef.current === requestId && identityRef.current === identity) {
        const code = getProblemSetShareErrorCode(error);
        setErrorCode(code);
        if (code === 'staleVersion') setNeedsRefresh(true);
      }
    } finally {
      importingRef.current = false;
      if (mountedRef.current) setImporting(false);
    }
    if (newSetId && mountedRef.current && requestRef.current === requestId && identityRef.current === identity) {
      onImported?.(newSetId);
    }
  };

  const completedCount = isLoggedIn ? (share?.items || []).filter((item) => item.progressStatus === 'completed').length : 0;
  const authorName = share?.author?.displayName || t.anonymous;
  const items = share?.items || [];

  return (
    <section className={`${styles.panel} ${standalone ? styles.standalone : ''}`} aria-labelledby={headingId}>
      <header className={styles.header}>
        <div className={styles.headingGroup}>
          <span className={styles.headingIcon}><FaDownload aria-hidden="true" /></span>
          <div><h2 id={headingId}>{t.heading}</h2><p>{t.intro}</p></div>
        </div>
        {onClose && <button type="button" className={styles.close} onClick={onClose} disabled={importing} aria-label={t.close}><FaTimes /></button>}
      </header>

      <form className={styles.codeForm} onSubmit={(event) => {event.preventDefault(); void preview(codeInput);}}>
        <label htmlFor={codeId}>{t.code}</label>
        <div className={styles.codeRow}>
          <input id={codeId} value={codeInput} onChange={(event) => changeCode(event.target.value)}
            placeholder={t.placeholder} autoComplete="off" spellCheck={false} maxLength={160}
            disabled={importing} aria-describedby={errorCode ? errorId : undefined} />
          <button type="submit" className={styles.primaryButton} disabled={loading || importing || !codeInput.trim()}>
            {loading ? <FaRedo className={styles.spin} aria-hidden="true" /> : <FaSearch aria-hidden="true" />}
            {loading ? t.loading : t.preview}
          </button>
        </div>
        <p className={styles.hint}>{t.codeHint}</p>
      </form>

      {errorCode && <div className={styles.error} id={errorId} role="alert">
        <p>{t.errors[errorCode] || t.errors.failed}</p>
        {needsRefresh && <button type="button" className={styles.textButton} onClick={() => void preview(codeInput)} disabled={loading || importing}><FaRedo /> {t.refresh}</button>}
      </div>}

      {loading && <p className={styles.loading} role="status"><FaRedo className={styles.spin} /> {t.loading}</p>}
      {!share && !loading && !errorCode && <div className={styles.empty}><FaLayerGroup aria-hidden="true" /><p>{t.empty}</p></div>}

      {share && <article className={styles.preview} aria-busy={importing}>
        <div className={styles.titleRow}><h3>{share.title}</h3><span className={styles.version}>{t.version(share.version)}</span></div>
        <div className={styles.description}><h4>{t.description}</h4><p>{share.description || t.noDescription}</p></div>
        <div className={styles.metadata}><span>{t.count(items.length)}</span>{completedCount > 0 && <span className={styles.completed}>{t.completed(completedCount)}</span>}</div>
        <div className={styles.author}><span className={styles.avatar} aria-hidden="true">{Array.from(authorName)[0]}</span><div><p>{authorName} <span>{t.curator}</span></p>{share.author?.publicId && <small>ID: {share.author.publicId}</small>}</div></div>

        <ol className={styles.list}>
          {items.map((item, index) => {
            const permalink = item.contentAvailable ? safePermalink(item.permalink) : null;
            return <li key={item.documentUuid || `${item.docId}-${index}`}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.itemContent}>
                <div className={styles.itemTitle}>{permalink ? <Link to={permalink}>{item.title || item.docId}</Link> : <strong>{item.title || item.docId}</strong>}
                  {isLoggedIn && item.progressStatus === 'completed' && <span className={styles.completedBadge}><FaCheckCircle aria-hidden="true" /> {t.completedItem}</span>}
                </div>
                <small className={styles.docId}>{item.docId}</small>
                {!item.contentAvailable && <span className={styles.unavailable}>{t.unavailable}</span>}
                {item.annotation && <p className={styles.annotation}><span>{t.annotation}：</span>{item.annotation}</p>}
              </div>
            </li>;
          })}
        </ol>

        {items.length === 0 && <p className={styles.emptySet}>{t.emptySet}</p>}

        {importedSetId ? <div className={styles.success} role="status"><p><FaCheckCircle /> {t.imported}</p><Link className={styles.primaryButton} to={`/me?tab=sets&setId=${encodeURIComponent(importedSetId)}`}>{t.open} <FaArrowRight /></Link></div> : <form className={styles.saveForm} onSubmit={save}>
          <label htmlFor={nameId}>{t.name}</label>
          <input id={nameId} value={title} maxLength={80} disabled={importing} aria-describedby={nameHintId}
            onChange={(event) => {titleRef.current = event.target.value; titleEditedRef.current = true; setTitle(event.target.value); if (errorCode === 'invalidTitle') setErrorCode('');}} />
          <p className={styles.hint} id={nameHintId}>{t.nameHint}</p>
          <div className={styles.saveRow}>
            <div className={styles.saveDescription}><p>{t.independent}</p><p>{t.progress}</p></div>
            {!authReady ? <button className={styles.primaryButton} disabled type="button">{t.checkingAuth}</button>
              : isLoggedIn && errorCode !== 'unauthenticated' ? <button type="submit" className={styles.primaryButton} disabled={importing || loading || needsRefresh || !title.trim() || items.length === 0}>
                {importing ? <FaRedo className={styles.spin} aria-hidden="true" /> : <FaDownload aria-hidden="true" />}{importing ? t.saving : t.save}
              </button> : <Link className={styles.primaryButton} to="/login" onClick={login}><FaSignInAlt aria-hidden="true" /> {t.login}</Link>}
          </div>
        </form>}
      </article>}
    </section>
  );
}
