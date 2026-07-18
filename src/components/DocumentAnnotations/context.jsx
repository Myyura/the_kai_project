import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {FaPen, FaRotateLeft} from 'react-icons/fa6';
import {useAuth} from '@site/src/hooks/useAuth';
import useDocAnnotations from '@site/src/hooks/useDocAnnotations';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const AnnotationContext = createContext(null);

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function SelectionComposer() {
  const {
    selectionDraft,
    composerOpen,
    setComposerOpen,
    dismissSelection,
    saveSelection,
  } = useDocumentAnnotations();
  const t = useUiText('annotations');
  const [body, setBody] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    setBody('');
  }, [selectionDraft?.exact, selectionDraft?.line]);

  useEffect(() => {
    if (composerOpen) textareaRef.current?.focus();
  }, [composerOpen]);

  if (!selectionDraft) return null;

  const viewportWidth = typeof window === 'undefined' ? 1200 : window.innerWidth;
  const viewportHeight = typeof window === 'undefined' ? 800 : window.innerHeight;
  const left = clamp(selectionDraft.rect.left, 12, Math.max(12, viewportWidth - 340));
  const top = clamp(
    selectionDraft.rect.bottom + 8,
    12,
    Math.max(12, viewportHeight - (composerOpen ? 280 : 52))
  );
  const position = {left, top};

  if (!composerOpen) {
    return (
      <button
        type="button"
        className={styles.selectionAction}
        style={position}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setComposerOpen(true)}>
        <FaPen aria-hidden="true" />
        {t.writeAnnotation}
      </button>
    );
  }

  const handleSave = () => {
    saveSelection(body);
    setBody('');
  };

  return (
    <div className={styles.selectionComposer} style={position} role="dialog" aria-label={t.writeAnnotation}>
      <div className={styles.composerQuote}>“{selectionDraft.exact}”</div>
      <textarea
        ref={textareaRef}
        value={body}
        onChange={(event) => setBody(event.target.value)}
        onKeyDown={(event) => {
          if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
            event.preventDefault();
            handleSave();
          }
          if (event.key === 'Escape') dismissSelection();
        }}
        placeholder={t.annotationPlaceholder}
        rows={5}
      />
      <div className={styles.composerActions}>
        <button type="button" className={styles.textButton} onClick={dismissSelection}>
          {t.cancel}
        </button>
        <button type="button" className={styles.primaryButton} onClick={handleSave}>
          {t.save}
        </button>
      </div>
    </div>
  );
}

function UndoToast() {
  const {deletedAnnotation, undoDelete} = useDocumentAnnotations();
  const t = useUiText('annotations');
  if (!deletedAnnotation) return null;

  return (
    <div className={styles.undoToast} role="status">
      <span>{t.annotationDeleted(deletedAnnotation.title)}</span>
      <button type="button" onClick={undoDelete}>
        <FaRotateLeft aria-hidden="true" />
        {t.undo}
      </button>
    </div>
  );
}

export function DocumentAnnotationsProvider({docId, children}) {
  const {
    annotations,
    addAnnotation,
    updateAnnotation,
    removeAnnotation,
    restoreAnnotation,
  } = useDocAnnotations(docId);
  const {isConfigured, isLoggedIn, authReady} = useAuth();
  const t = useUiText('annotations');
  const [selectionDraft, setSelectionDraftState] = useState(null);
  const [composerOpen, setComposerOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [documentHash, setDocumentHash] = useState('');
  const [resolutions, setResolutions] = useState({});
  const [deletedAnnotation, setDeletedAnnotation] = useState(null);
  const focusHandlerRef = useRef(null);
  const undoTimerRef = useRef(null);

  const enabled = Boolean(isConfigured && authReady && isLoggedIn);

  useEffect(() => () => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
  }, []);

  const setSelectionDraft = useCallback((draft) => {
    if (!enabled) return;
    setSelectionDraftState(draft);
    setComposerOpen(false);
  }, [enabled]);

  const dismissSelection = useCallback(() => {
    setSelectionDraftState(null);
    setComposerOpen(false);
  }, []);

  const saveSelection = useCallback((bodyMarkdown) => {
    if (!selectionDraft) return null;
    const created = addAnnotation({
      exact: selectionDraft.exact,
      line: selectionDraft.line,
      documentHash,
      bodyMarkdown,
      defaultTitlePrefix: t.defaultTitlePrefix,
    });
    dismissSelection();
    if (created) setActiveId(created.id);
    return created;
  }, [addAnnotation, dismissSelection, documentHash, selectionDraft, t.defaultTitlePrefix]);

  const registerFocusHandler = useCallback((handler) => {
    focusHandlerRef.current = handler;
    return () => {
      if (focusHandlerRef.current === handler) focusHandlerRef.current = null;
    };
  }, []);

  const focusAnnotation = useCallback((annotationId, {openMobile = false} = {}) => {
    setActiveId(annotationId);
    if (openMobile) setMobileOpen(true);
    focusHandlerRef.current?.(annotationId);
  }, []);

  const deleteWithUndo = useCallback((annotationId) => {
    const deleted = removeAnnotation(annotationId);
    if (!deleted) return;
    setDeletedAnnotation(deleted);
    if (activeId === annotationId) setActiveId(null);
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    undoTimerRef.current = setTimeout(() => {
      setDeletedAnnotation(null);
      undoTimerRef.current = null;
    }, 5000);
  }, [activeId, removeAnnotation]);

  const undoDelete = useCallback(() => {
    if (!deletedAnnotation) return;
    restoreAnnotation(deletedAnnotation);
    setDeletedAnnotation(null);
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    undoTimerRef.current = null;
  }, [deletedAnnotation, restoreAnnotation]);

  const confirmAnnotation = useCallback((annotationId) => {
    const resolution = resolutions[annotationId];
    updateAnnotation(annotationId, {
      documentHash,
      ...(resolution?.found && resolution.currentLine
        ? {line: resolution.currentLine}
        : {}),
    });
  }, [documentHash, resolutions, updateAnnotation]);

  const staleAnnotations = useMemo(() => (
    documentHash
      ? annotations.filter((item) => item.documentHash && item.documentHash !== documentHash)
      : []
  ), [annotations, documentHash]);

  const openReview = useCallback(() => {
    setReviewMode(true);
    if (typeof window !== 'undefined' && window.innerWidth <= 996) {
      setMobileOpen(true);
    }
    const first = staleAnnotations[0];
    if (first) focusAnnotation(first.id);
  }, [focusAnnotation, staleAnnotations]);

  const value = useMemo(() => ({
    docId,
    enabled,
    annotations,
    activeId,
    setActiveId,
    selectionDraft,
    setSelectionDraft,
    composerOpen,
    setComposerOpen,
    dismissSelection,
    saveSelection,
    updateAnnotation,
    deleteWithUndo,
    deletedAnnotation,
    undoDelete,
    mobileOpen,
    setMobileOpen,
    reviewMode,
    setReviewMode,
    documentHash,
    setDocumentHash,
    resolutions,
    setResolutions,
    staleAnnotations,
    confirmAnnotation,
    openReview,
    focusAnnotation,
    registerFocusHandler,
  }), [
    activeId,
    annotations,
    composerOpen,
    confirmAnnotation,
    deleteWithUndo,
    deletedAnnotation,
    dismissSelection,
    docId,
    documentHash,
    enabled,
    focusAnnotation,
    mobileOpen,
    openReview,
    registerFocusHandler,
    resolutions,
    reviewMode,
    saveSelection,
    selectionDraft,
    setSelectionDraft,
    staleAnnotations,
    undoDelete,
    updateAnnotation,
  ]);

  return (
    <AnnotationContext.Provider value={value}>
      {children}
      {enabled && <SelectionComposer />}
      <UndoToast />
    </AnnotationContext.Provider>
  );
}

export function useDocumentAnnotations() {
  const value = useContext(AnnotationContext);
  if (!value) {
    throw new Error('useDocumentAnnotations must be used inside DocumentAnnotationsProvider');
  }
  return value;
}
