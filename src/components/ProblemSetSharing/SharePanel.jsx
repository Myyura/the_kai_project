import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {FaCheck, FaCopy, FaDownload, FaLink, FaRedo, FaShareAlt, FaTimes} from 'react-icons/fa';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {usePublicProfile} from '@site/src/hooks/usePublicProfile';
import {getProblemSetSharingMessages} from '@site/src/i18n/problemSetSharingMessages';
import {
  createProblemSetShareUrl,
  fetchMyProblemSetShare,
  getProblemSetShareErrorCode,
  publishProblemSet,
  setProblemSetShareActive,
} from '@site/src/services/problemSetSharingService';
import styles from './styles.module.css';

const signature = (set, includeAnnotations) => JSON.stringify({
  title: set?.title || '',
  description: set?.description || '',
  includeAnnotations,
  items: (set?.items || []).map(item => [item.documentUuid || item.docId, includeAnnotations ? item.annotation || '' : '']),
});

export function ShareChecklist({share, showCode = true}) {
  const language = useCurrentLanguage();
  const t = getProblemSetSharingMessages(language);
  const logoUrl = useBaseUrl('/img/kai-icon.svg');
  const name = share.author?.displayName || t.author;
  return (
    <article className={styles.preview} aria-label={t.preview}>
      <div className={styles.brand}><img src={logoUrl} alt="" /><div><strong>The Kai Project</strong><small>{t.community}</small></div></div>
      <h3 className={styles.title}>{share.title}</h3>
      <div className={styles.description}><strong>{t.description}</strong><p>{share.description || t.noDescription}</p></div>
      <div className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">{Array.from(name)[0] || 'K'}</span>
        <div><strong>{t.curatedBy} · {name}</strong>{share.author?.publicId && <small>{t.publicId} · {share.author.publicId}</small>}</div>
      </div>
      <p className={styles.listHeading}>{t.allItems} · {t.count(share.items.length)}</p>
      <ol className={styles.checklist}>
        {share.items.map((item, index) => (
          <li key={item.documentUuid || item.docId || index}>
            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.item}>
              <strong>{item.title || item.docId}</strong>
              {share.includeAnnotations !== false && <p className={!item.annotation?.trim() ? styles.muted : undefined}>{item.annotation?.trim() ? item.annotation : t.noAnnotation}</p>}
              {item.contentAvailable === false && <small className={styles.unavailable}>{t.unavailableItem}</small>}
            </div>
          </li>
        ))}
      </ol>
      {showCode && <footer className={styles.previewFooter}><small>{t.shareCode}</small><code>{share.code || t.unpublished}</code>{share.version > 0 && <small>{t.published(share.version)}</small>}</footer>}
    </article>
  );
}

export default function SharePanel({problemSet, onClose}) {
  const language = useCurrentLanguage();
  const t = getProblemSetSharingMessages(language);
  const {profile} = usePublicProfile();
  const logoUrl = useBaseUrl('/img/kai-icon.png');
  const setId = problemSet.id;
  const [shareState, setShareState] = React.useState({setId: '', value: null});
  const [loadedId, setLoadedId] = React.useState('');
  const [loadAttempt, setLoadAttempt] = React.useState(0);
  const [loadFailed, setLoadFailed] = React.useState(false);
  const [includeAnnotations, setIncludeAnnotations] = React.useState(true);
  const [pending, setPending] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [copyContent, setCopyContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [imagePage, setImagePage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);
  const scopeRef = React.useRef(0);
  const busyRef = React.useRef(false);
  const imagePlanRef = React.useRef(null);
  const imageAbortRef = React.useRef(null);
  const imageUrlRef = React.useRef('');
  const copyFieldRef = React.useRef(null);
  const share = shareState.setId === setId ? shareState.value : null;
  const loaded = loadedId === setId;
  const currentSignature = signature(problemSet, includeAnnotations);
  const signatureRef = React.useRef(currentSignature);
  signatureRef.current = currentSignature;
  const changed = share && currentSignature !== signature(share, share.includeAnnotations);

  const disposeImages = React.useCallback(() => {
    imageAbortRef.current?.abort();
    imageAbortRef.current = null;
    imagePlanRef.current?.dispose();
    imagePlanRef.current = null;
    if (imageUrlRef.current) URL.revokeObjectURL(imageUrlRef.current);
    imageUrlRef.current = '';
  }, []);

  React.useEffect(() => {
    const scope = ++scopeRef.current;
    busyRef.current = false;
    disposeImages();
    setImage(null);
    setPageCount(0);
    setImagePage(0);
    setLoadedId('');
    setShareState({setId, value: null});
    setLoadFailed(false);
    setIncludeAnnotations(true);
    setCopyContent('');
    setPending('');
    setError('');
    setMessage('');
    fetchMyProblemSetShare(setId).then(value => {
      if (scope !== scopeRef.current) return;
      setShareState({setId, value});
      setIncludeAnnotations(value?.includeAnnotations !== false);
      setLoadedId(setId);
    }).catch(nextError => {
      if (scope !== scopeRef.current) return;
      setLoadFailed(true);
      setError(getProblemSetShareErrorCode(nextError));
    });
    return () => { scopeRef.current++; disposeImages(); };
  }, [setId, loadAttempt, disposeImages]);

  React.useEffect(() => {
    disposeImages();
    setImage(null);
    setPageCount(0);
    setImagePage(0);
  }, [currentSignature, disposeImages]);

  React.useEffect(() => {
    if (copyContent && copyFieldRef.current) {
      copyFieldRef.current.focus();
      copyFieldRef.current.select();
    }
  }, [copyContent]);

  const applyShare = value => {
    disposeImages();
    setImage(null);
    setPageCount(0);
    setImagePage(0);
    setCopyContent('');
    setShareState({setId, value});
    setIncludeAnnotations(value?.includeAnnotations !== false);
  };

  const mutate = async (action, successMessage) => {
    if (busyRef.current || !loaded) return;
    busyRef.current = true;
    const scope = scopeRef.current;
    setPending('saving');
    setError('');
    setMessage('');
    try {
      const result = await action();
      if (scope !== scopeRef.current) return;
      applyShare(result);
      setMessage(successMessage);
    } catch (nextError) {
      if (scope === scopeRef.current) setError(getProblemSetShareErrorCode(nextError));
    } finally {
      if (scope === scopeRef.current) { busyRef.current = false; setPending(''); }
    }
  };

  const publish = () => {
    if (!share || changed) {
      return mutate(() => publishProblemSet(setId, {includeAnnotations}), share ? t.saved : t.created);
    }
    return mutate(() => setProblemSetShareActive(setId, true), t.resumed);
  };

  const copy = async value => {
    const scope = scopeRef.current;
    setMessage('');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      if (scope === scopeRef.current) { setCopyContent(''); setMessage(t.copied); }
    } catch {
      if (scope === scopeRef.current) { setCopyContent(value); setMessage(t.copyFallback); }
    }
  };

  const renderImage = async (page, exportCurrent = false) => {
    if (busyRef.current || !loaded || (!exportCurrent && !imagePlanRef.current)) return;
    busyRef.current = true;
    const scope = scopeRef.current;
    const requestedSignature = currentSignature;
    let abort;
    const isCurrent = () => scope === scopeRef.current
      && requestedSignature === signatureRef.current && !abort?.signal.aborted;
    let saving = exportCurrent && (!share || changed || !share.isActive);
    if (exportCurrent) {
      disposeImages();
      setImage(null);
      setPageCount(0);
      setImagePage(0);
    }
    setPending(saving ? 'saving' : 'image');
    setError('');
    setMessage('');
    try {
      let snapshot = share;
      if (saving) {
        snapshot = !share || changed
          ? await publishProblemSet(setId, {includeAnnotations})
          : await setProblemSetShareActive(setId, true);
        if (!isCurrent()) return;
        applyShare(snapshot);
        saving = false;
        setPending('image');
      }
      abort = new AbortController();
      imageAbortRef.current?.abort();
      imageAbortRef.current = abort;
      if (exportCurrent) {
        const {prepareProblemSetShareImages} = await import('./exportImage');
        if (!isCurrent()) return;
        const plan = await prepareProblemSetShareImages({share: snapshot, labels: t, logoUrl, signal: abort.signal});
        if (!isCurrent()) { plan.dispose(); return; }
        imagePlanRef.current = plan;
        setPageCount(plan.pageCount);
      }
      const result = await imagePlanRef.current.renderPage(page, abort.signal);
      if (!isCurrent()) return;
      const url = URL.createObjectURL(result.blob);
      if (imageUrlRef.current) URL.revokeObjectURL(imageUrlRef.current);
      imageUrlRef.current = url;
      setImage({url, filename: result.filename});
      setImagePage(page);
      setMessage(exportCurrent ? t.exportReady : t.imageReady);
      if (exportCurrent) {
        // Keep the URL and preview available if the browser blocks this download.
        const link = document.createElement('a');
        link.href = url;
        link.download = result.filename;
        document.body.appendChild(link);
        try { link.click(); } catch { /* The visible save link remains available. */ }
        finally { link.remove(); }
      }
    } catch (nextError) {
      if (isCurrent() && nextError?.name !== 'AbortError') {
        setError(saving ? getProblemSetShareErrorCode(nextError) : 'image');
      }
    } finally {
      if (scope === scopeRef.current) { busyRef.current = false; setPending(''); }
    }
  };

  const isDraft = !share || changed;
  const preview = {
    ...problemSet,
    code: isDraft ? '' : share.code,
    version: isDraft ? 0 : share.version,
    includeAnnotations,
    author: share?.author || {displayName: profile?.displayName || t.author, publicId: profile?.publicId || ''},
    items: (problemSet.items || []).map(item => ({...item, annotation: includeAnnotations ? item.annotation : ''})),
  };
  const disabled = !loaded || Boolean(pending);
  const publishLabel = !share ? t.create : !share.isActive ? changed ? t.updateAndResume : t.resume : changed ? t.update : t.current;
  const shareText = share ? `${share.title}\n${share.description}\n\n${t.curatedBy}：${share.author?.displayName || t.author}\n${t.shareCode}：${share.code}\n${t.instructions}\n${createProblemSetShareUrl(share.code)}` : '';
  return (
    <section className={styles.panel} aria-label={t.share}>
      <header className={styles.header}><div><h3><FaShareAlt /> {t.heading}</h3><p className={styles.muted}>{t.subtitle}</p></div><button type="button" className={styles.iconButton} onClick={onClose} aria-label={t.close}><FaTimes /></button></header>
      <div className={styles.layout}>
        <div className={styles.stack}>
          <div className={styles.settings}>
            <h4 className={styles.sectionTitle}>{t.setup}</h4>
            {!loaded && !loadFailed && <p className={styles.muted} role="status"><FaRedo className={styles.spin} /> {t.loading}</p>}
            {loadFailed && <button type="button" className={styles.secondaryButton} onClick={() => setLoadAttempt(value => value + 1)}><FaRedo /> {t.retry}</button>}
            <label className={styles.check}><input type="checkbox" checked={includeAnnotations} disabled={disabled} onChange={event => setIncludeAnnotations(event.target.checked)} /><span>{t.includeAnnotations}<small>{t.annotationNotice}</small></span></label>
            <p className={styles.muted}>{t.accessNotice}</p>
            {share && <div className={styles.codeBox}><div className={styles.codeHeader}><span>{t.shareCode}</span><span className={share.isActive ? styles.active : ''}>{share.isActive ? t.active : t.stopped} · V{share.version}</span></div><input className={styles.shareCode} aria-label={t.shareCode} value={share.code} readOnly onFocus={event => event.target.select()} /></div>}
            {changed && <p className={styles.notice}>{t.changed}</p>}
            {!problemSet.items?.length && <p className={styles.muted}>{t.empty}</p>}
            <button type="button" className={`${styles.primaryButton} ${styles.wideButton}`} disabled={disabled || !problemSet.items?.length || (share?.isActive && !changed)} onClick={publish}>{pending === 'saving' ? <><FaRedo className={styles.spin} /> {t.working}</> : <><FaLink /> {publishLabel}</>}</button>
            {share?.isActive && <><div className={styles.actions}><button type="button" className={styles.secondaryButton} disabled={Boolean(pending)} onClick={() => copy(share.code)}><FaCopy /> {t.copyCode}</button><button type="button" className={styles.secondaryButton} disabled={Boolean(pending)} onClick={() => copy(createProblemSetShareUrl(share.code))}><FaLink /> {t.copyLink}</button><button type="button" className={styles.secondaryButton} disabled={Boolean(pending)} onClick={() => copy(shareText)}><FaCopy /> {t.copyText}</button></div><button type="button" className={styles.dangerButton} disabled={Boolean(pending)} onClick={() => mutate(() => setProblemSetShareActive(setId, false), t.stoppedNotice)}>{t.stop}</button></>}
          </div>
          {error && <p className={styles.error} role="alert">{error === 'image' ? t.imageFailed : t.errors[error] || t.errors.failed}</p>}
          {message && <p className={styles.status} role="status"><FaCheck /> {message}</p>}
          {copyContent && <div className={styles.fallback}><label className={styles.label} htmlFor={`share-copy-${setId}`}>{t.copyContent}</label><textarea ref={copyFieldRef} id={`share-copy-${setId}`} className={styles.input} value={copyContent} readOnly /></div>}
        </div>
        <div><div className={styles.previewHeading}><div><h4 className={styles.sectionTitle}>{t.preview}</h4><small className={styles.muted}>{isDraft ? t.draft : share.isActive ? t.published(share.version) : t.stopped}</small></div><button type="button" className={styles.primaryButton} disabled={disabled || !problemSet.items?.length} onClick={() => renderImage(0, true)}>{pending ? <><FaRedo className={styles.spin} /> {pending === 'saving' ? t.working : t.preparing}</> : <><FaDownload /> {t.exportImage}</>}</button></div><p className={styles.imageHint}>{t.imageHint}</p><div className={styles.previewWrap}><ShareChecklist share={preview} showCode={isDraft || share.isActive} /></div>
          {image && <div className={styles.imagePanel}><div className={styles.pageControls}><button type="button" className={styles.secondaryButton} disabled={Boolean(pending) || imagePage === 0} onClick={() => renderImage(imagePage - 1)}>{t.previous}</button><select className={styles.input} aria-label={t.choosePage} value={imagePage} disabled={Boolean(pending)} onChange={event => renderImage(Number(event.target.value))}>{Array.from({length: pageCount}, (_, index) => <option key={index} value={index}>{t.page(index + 1, pageCount)}</option>)}</select><button type="button" className={styles.secondaryButton} disabled={Boolean(pending) || imagePage + 1 >= pageCount} onClick={() => renderImage(imagePage + 1)}>{t.next}</button></div><a className={styles.primaryButton} href={image.url} download={image.filename}><FaDownload /> {t.download}</a><img src={image.url} alt={`${t.imageAlt} · ${t.page(imagePage + 1, pageCount)}`} /></div>}
        </div>
      </div>
    </section>
  );
}
