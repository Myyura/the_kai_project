import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
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

export function AnnotationCard({
  annotation,
  surface = 'sidebar',
  expanded,
  onExpand,
  onCollapse,
}) {
  const {
    activeId,
    setActiveId,
    documentHash,
    resolutions,
    updateAnnotation,
    deleteWithUndo,
    confirmAnnotation,
    focusAnnotation,
  } = useDocumentAnnotations();
  const t = useUiText('annotations');
  const selected = activeId === annotation.id;
  const detailOpen = typeof expanded === 'boolean' ? expanded : selected;
  const [title, setTitle] = useState(annotation.title);
  const [body, setBody] = useState(annotation.bodyMarkdown);
  const dirtyRef = useRef(false);
  const saveTimerRef = useRef(null);
  const draftRef = useRef({title: annotation.title, body: annotation.bodyMarkdown});
  const compactButtonRef = useRef(null);
  const titleInputRef = useRef(null);
  const previousDetailOpenRef = useRef(detailOpen);
  const requestEditorFocusRef = useRef(false);
  const restoreCompactFocusRef = useRef(false);
  const resolution = resolutions[annotation.id];
  const stale = Boolean(documentHash && annotation.documentHash && annotation.documentHash !== documentHash);

  useEffect(() => {
    if (dirtyRef.current) return;
    setTitle(annotation.title);
    setBody(annotation.bodyMarkdown);
    draftRef.current = {title: annotation.title, body: annotation.bodyMarkdown};
  }, [annotation.bodyMarkdown, annotation.title]);

  useEffect(() => {
    const wasOpen = previousDetailOpenRef.current;
    previousDetailOpenRef.current = detailOpen;
    if (wasOpen === detailOpen) return undefined;

    const focusFrame = window.requestAnimationFrame(() => {
      if (detailOpen) {
        if (requestEditorFocusRef.current) {
          requestEditorFocusRef.current = false;
          titleInputRef.current?.focus();
        }
      } else if (restoreCompactFocusRef.current) {
        restoreCompactFocusRef.current = false;
        compactButtonRef.current?.focus();
      }
    });
    return () => window.cancelAnimationFrame(focusFrame);
  }, [detailOpen]);

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
  const compactSummary = excerpt(annotation.bodyMarkdown || annotation.exact, 120) || t.emptyAnnotation;

  const openDetails = () => {
    if (detailOpen) return;
    requestEditorFocusRef.current = true;
    focusAnnotation(annotation.id, {openMobile: surface === 'mobile'});
    onExpand?.();
  };

  const renderStatusIcon = (className) => status?.tone === 'ok' ? (
    <FaCheck className={className} aria-hidden="true" />
  ) : (
    <FaExclamationTriangle className={className} aria-hidden="true" />
  );

  const closeDetails = (event) => {
    event.stopPropagation();
    flush();
    restoreCompactFocusRef.current = true;
    setActiveId(null);
    onCollapse?.();
  };

  const CardRoot = detailOpen ? 'article' : 'button';

  return (
    <CardRoot
      ref={detailOpen ? undefined : compactButtonRef}
      type={detailOpen ? undefined : 'button'}
      className={`${styles.annotationCard} ${selected || detailOpen ? styles.annotationCardActive : ''} ${styles[`surface_${surface}`] || ''}`}
      onClick={openDetails}>
      {detailOpen ? (
        <div className={styles.cardEditor} onClick={(event) => event.stopPropagation()}>
          <div className={styles.cardEditorHeader}>
            <input
              ref={titleInputRef}
              className={styles.titleInput}
              value={title}
              onChange={markDirty('title', setTitle)}
              onBlur={flush}
              aria-label={t.annotationName}
            />
            <div className={styles.cardEditorMeta}>
              <span className={styles.lineLabel}>{t.line(annotation.line)}</span>
              <button type="button" className={styles.detailClose} onClick={closeDetails} aria-label={t.close}>
                <FaChevronUp aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className={styles.sourceQuote}>
            <span>{t.sourceText}</span>
            <blockquote>{annotation.exact}</blockquote>
          </div>
          <textarea
            value={body}
            onChange={markDirty('body', setBody)}
            onBlur={flush}
            placeholder={t.annotationPlaceholder}
            rows={4}
            aria-label={t.annotationPlaceholder}
          />
          {status && (
            <div className={`${styles.statusRow} ${styles[`status_${status.tone}`]}`}>
              {renderStatusIcon(styles.statusIcon)}
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
        <div className={styles.cardCompact} title={`${annotation.title} · ${compactSummary}`}>
          <strong>{annotation.title}</strong>
          <span className={styles.cardSummary}>{compactSummary}</span>
          {status && (
            <span
              className={`${styles.compactStatus} ${styles[`statusText_${status.tone}`]}`}
              role="img"
              aria-label={status.label}
              title={status.label}>
              {renderStatusIcon()}
            </span>
          )}
          <span className={styles.compactLine}>{t.line(annotation.line)}</span>
        </div>
      )}
    </CardRoot>
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
  const [expandedFooterId, setExpandedFooterId] = useState(null);
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
            aria-label={t.searchPlaceholder}
          />
        </label>
      )}
      <div className={styles.annotationList}>
        {items.length > 0 ? items.map((annotation) => (
          <AnnotationCard
            key={annotation.id}
            annotation={annotation}
            surface={surface}
            expanded={surface === 'footer' ? expandedFooterId === annotation.id : undefined}
            onExpand={surface === 'footer' ? () => setExpandedFooterId(annotation.id) : undefined}
            onCollapse={surface === 'footer' ? () => setExpandedFooterId(null) : undefined}
          />
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
  const [expanded, setExpanded] = useState(false);
  if (!enabled || annotations.length === 0) return null;

  return (
    <section className={styles.footerAnnotations}>
      <button
        type="button"
        className={styles.footerToggle}
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}>
        <span className={styles.footerTitle}>
          <FaStickyNote aria-hidden="true" />
          <strong>{t.inlineAnnotations}</strong>
          <span>{annotations.length}</span>
        </span>
        {expanded ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
      </button>
      {expanded && <AnnotationList surface="footer" showHeader={false} />}
    </section>
  );
}

export function MobileAnnotationAccess() {
  const {enabled, annotations, mobileOpen, setMobileOpen} = useDocumentAnnotations();
  const t = useUiText('annotations');
  const accessButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const sheetRef = useRef(null);
  const available = enabled && annotations.length > 0;

  useEffect(() => {
    if (!mobileOpen || !available) {
      if (mobileOpen && !available) setMobileOpen(false);
      return undefined;
    }

    const mobileMedia = window.matchMedia('(max-width: 996px)');
    if (!mobileMedia.matches) {
      setMobileOpen(false);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const closeAboveMobile = (event) => {
      if (!event.matches) setMobileOpen(false);
    };
    const handleDialogKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = Array.from(sheetRef.current?.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      ) || []).filter((element) => element.offsetWidth > 0 || element.offsetHeight > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !sheetRef.current?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleDialogKeyDown);
    if (mobileMedia.addEventListener) mobileMedia.addEventListener('change', closeAboveMobile);
    else mobileMedia.addListener(closeAboveMobile);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleDialogKeyDown);
      if (mobileMedia.removeEventListener) mobileMedia.removeEventListener('change', closeAboveMobile);
      else mobileMedia.removeListener(closeAboveMobile);
      accessButtonRef.current?.focus();
    };
  }, [available, mobileOpen, setMobileOpen]);

  if (!available) return null;

  return (
    <>
      <button
        ref={accessButtonRef}
        type="button"
        className={styles.mobileAccessButton}
        onClick={() => setMobileOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={mobileOpen}
        tabIndex={mobileOpen ? -1 : undefined}
        aria-controls="kai-annotation-mobile-sheet">
        <FaStickyNote aria-hidden="true" />
        {t.mobileButton(annotations.length)}
      </button>
      {mobileOpen && (
        <div className={styles.mobileBackdrop} onMouseDown={() => setMobileOpen(false)}>
          <div
            ref={sheetRef}
            id="kai-annotation-mobile-sheet"
            className={styles.mobileSheet}
            role="dialog"
            aria-modal="true"
            aria-label={t.panelTitle}
            onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.sheetClose}
              onClick={() => setMobileOpen(false)}
              aria-label={t.close}>
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
