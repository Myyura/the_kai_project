import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FaCheck,
  FaEdit,
  FaExclamationTriangle,
  FaSearch,
  FaStickyNote,
  FaTimes,
  FaTrash,
} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import {useDocumentAnnotations} from './context';
import styles from './styles.module.css';

const excerpt = (value, limit = 180) => {
  const normalized = String(value || '').trim().replace(/\s+/g, ' ');
  return normalized.length > limit ? `${normalized.slice(0, limit)}…` : normalized;
};

export function AnnotationCard({annotation, surface = 'sidebar'}) {
  const {
    activeId,
    documentHash,
    resolutions,
    updateAnnotation,
    deleteWithUndo,
    confirmAnnotation,
    focusAnnotation,
  } = useDocumentAnnotations();
  const t = useUiText('annotations');
  const active = activeId === annotation.id;
  const [title, setTitle] = useState(annotation.title);
  const [body, setBody] = useState(annotation.bodyMarkdown);
  const dirtyRef = useRef(false);
  const saveTimerRef = useRef(null);
  const draftRef = useRef({title: annotation.title, body: annotation.bodyMarkdown});
  const resolution = resolutions[annotation.id];
  const stale = Boolean(documentHash && annotation.documentHash && annotation.documentHash !== documentHash);

  useEffect(() => {
    if (dirtyRef.current) return;
    setTitle(annotation.title);
    setBody(annotation.bodyMarkdown);
    draftRef.current = {title: annotation.title, body: annotation.bodyMarkdown};
  }, [annotation.bodyMarkdown, annotation.title]);

  const flush = useCallback(() => {
    if (!dirtyRef.current) return;
    dirtyRef.current = false;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = null;
    const draft = draftRef.current;
    updateAnnotation(annotation.id, {
      title: draft.title.trim() || annotation.title,
      bodyMarkdown: draft.body,
    });
  }, [annotation.id, annotation.title, updateAnnotation]);

  useEffect(() => {
    if (!dirtyRef.current) return undefined;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(flush, 600);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [body, flush, title]);

  useEffect(() => () => flush(), [flush]);

  const markDirty = (field, setter) => (event) => {
    dirtyRef.current = true;
    draftRef.current = {...draftRef.current, [field]: event.target.value};
    setter(event.target.value);
  };

  const status = stale
    ? !resolution?.found
      ? {tone: 'danger', label: t.sourceMissing}
      : resolution.moved
        ? {tone: 'warning', label: t.sourceMoved(resolution.currentLine)}
        : {tone: 'ok', label: t.sourceStillExists}
    : null;

  return (
    <article
      className={`${styles.annotationCard} ${active ? styles.annotationCardActive : ''} ${styles[`surface_${surface}`] || ''}`}
      onClick={() => !active && focusAnnotation(annotation.id, {openMobile: surface === 'mobile'})}>
      {active ? (
        <div className={styles.cardEditor} onClick={(event) => event.stopPropagation()}>
          <div className={styles.cardEditorHeader}>
            <input
              className={styles.titleInput}
              value={title}
              onChange={markDirty('title', setTitle)}
              onBlur={flush}
              aria-label={t.annotationName}
            />
            <span className={styles.lineLabel}>{t.line(annotation.line)}</span>
          </div>
          <blockquote>{annotation.exact}</blockquote>
          <textarea
            value={body}
            onChange={markDirty('body', setBody)}
            onBlur={flush}
            placeholder={t.annotationPlaceholder}
            rows={surface === 'sidebar' ? 5 : 4}
          />
          {status && (
            <div className={`${styles.statusRow} ${styles[`status_${status.tone}`]}`}>
              <FaExclamationTriangle aria-hidden="true" />
              <span>{status.label}</span>
            </div>
          )}
          <div className={styles.cardActions}>
            {stale && (
              <button type="button" className={styles.confirmButton} onClick={() => confirmAnnotation(annotation.id)}>
                <FaCheck aria-hidden="true" />
                {resolution?.found ? t.keepAndUpdate : t.keepAnnotation}
              </button>
            )}
            <button type="button" className={styles.deleteButton} onClick={() => deleteWithUndo(annotation.id)}>
              <FaTrash aria-hidden="true" />
              {t.delete}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.cardTopline}>
            <strong>{annotation.title}</strong>
            <span>{t.line(annotation.line)}</span>
          </div>
          <div className={styles.quoteExcerpt}>“{excerpt(annotation.exact, 90)}”</div>
          <p className={styles.bodyExcerpt}>{excerpt(annotation.bodyMarkdown, 150) || t.emptyAnnotation}</p>
          {status && (
            <div className={`${styles.statusBadge} ${styles[`status_${status.tone}`]}`}>
              {status.label}
            </div>
          )}
        </>
      )}
    </article>
  );
}

function AnnotationList({surface = 'sidebar', showHeader = true}) {
  const {
    enabled,
    annotations,
    reviewMode,
    staleAnnotations,
    setReviewMode,
  } = useDocumentAnnotations();
  const t = useUiText('annotations');
  const [query, setQuery] = useState('');
  const staleIds = useMemo(() => new Set(staleAnnotations.map((item) => item.id)), [staleAnnotations]);
  const items = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return annotations
      .filter((item) => !reviewMode || staleIds.has(item.id))
      .filter((item) => !normalized || [item.title, item.exact, item.bodyMarkdown]
        .some((value) => String(value || '').toLowerCase().includes(normalized)))
      .sort((a, b) => a.line - b.line || a.createdAt - b.createdAt);
  }, [annotations, query, reviewMode, staleIds]);

  if (!enabled) return null;

  return (
    <section className={`${styles.annotationPanel} ${styles[`panel_${surface}`] || ''}`} aria-label={t.panelTitle}>
      {showHeader && (
        <header className={styles.panelHeader}>
          <div>
            <FaStickyNote aria-hidden="true" />
            <strong>{reviewMode ? t.reviewTitle : t.panelTitle}</strong>
            <span>{reviewMode ? staleAnnotations.length : annotations.length}</span>
          </div>
          {reviewMode && (
            <button type="button" className={styles.iconButton} onClick={() => setReviewMode(false)} aria-label={t.closeReview}>
              <FaTimes aria-hidden="true" />
            </button>
          )}
        </header>
      )}
      {(annotations.length > 3 || query) && (
        <label className={styles.annotationSearch}>
          <FaSearch aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
          />
        </label>
      )}
      <div className={styles.annotationList}>
        {items.length > 0 ? items.map((annotation) => (
          <AnnotationCard key={annotation.id} annotation={annotation} surface={surface} />
        )) : (
          <div className={styles.emptyPanel}>
            {annotations.length === 0 ? t.emptyPanel : t.noSearchResults}
          </div>
        )}
      </div>
    </section>
  );
}

export function AnnotationSidebar() {
  return <AnnotationList surface="sidebar" />;
}

export function FooterAnnotationSection() {
  const {enabled, annotations} = useDocumentAnnotations();
  const t = useUiText('annotations');
  if (!enabled || annotations.length === 0) return null;

  return (
    <section className={styles.footerAnnotations}>
      <div className={styles.footerTitle}>
        <FaStickyNote aria-hidden="true" />
        <strong>{t.inlineAnnotations}</strong>
        <span>{annotations.length}</span>
      </div>
      <AnnotationList surface="footer" showHeader={false} />
    </section>
  );
}

export function MobileAnnotationAccess() {
  const {enabled, annotations, mobileOpen, setMobileOpen} = useDocumentAnnotations();
  const t = useUiText('annotations');
  if (!enabled || annotations.length === 0) return null;

  return (
    <>
      <button type="button" className={styles.mobileAccessButton} onClick={() => setMobileOpen(true)}>
        <FaStickyNote aria-hidden="true" />
        {t.mobileButton(annotations.length)}
      </button>
      {mobileOpen && (
        <div className={styles.mobileBackdrop} onMouseDown={() => setMobileOpen(false)}>
          <div className={styles.mobileSheet} role="dialog" aria-label={t.panelTitle} onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <button type="button" className={styles.sheetClose} onClick={() => setMobileOpen(false)} aria-label={t.close}>
              <FaTimes aria-hidden="true" />
            </button>
            <AnnotationList surface="mobile" />
          </div>
        </div>
      )}
    </>
  );
}

export function DocumentChangeNotice() {
  const {enabled, staleAnnotations, openReview} = useDocumentAnnotations();
  const t = useUiText('annotations');
  if (!enabled || staleAnnotations.length === 0) return null;

  return (
    <div className={styles.changeNotice} role="status">
      <FaExclamationTriangle aria-hidden="true" />
      <div>
        <strong>{t.documentChangedTitle}</strong>
        <p>{t.documentChangedText(staleAnnotations.length)}</p>
      </div>
      <button type="button" onClick={openReview}>
        <FaEdit aria-hidden="true" />
        {t.reviewAnnotations}
      </button>
    </div>
  );
}
