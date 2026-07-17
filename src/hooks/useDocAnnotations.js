import {useCallback, useMemo} from 'react';
import {useDocNotes} from './useNotes';
import {getCalibratedNow} from '../services/syncService';
import {
  createAnnotation as createAnnotationInDocument,
  deleteAnnotation as deleteAnnotationInDocument,
  parseNoteDocument,
  restoreAnnotation as restoreAnnotationInDocument,
  serializeNoteDocument,
  updateAnnotation as updateAnnotationInDocument,
} from '../services/noteAnnotations';

export default function useDocAnnotations(docId) {
  const {content, patchNote} = useDocNotes(docId);
  const documentState = useMemo(() => parseNoteDocument(content), [content]);

  const patchDocument = useCallback((updater) => {
    let result = null;
    patchNote((latestContent) => {
      const latest = parseNoteDocument(latestContent);
      const next = updater(latest);
      result = next;
      return serializeNoteDocument(next);
    });
    return result;
  }, [patchNote]);

  const addAnnotation = useCallback((draft) => {
    let created = null;
    patchDocument((latest) => {
      const result = createAnnotationInDocument(latest, draft, getCalibratedNow());
      created = result.annotation;
      return result.document;
    });
    return created;
  }, [patchDocument]);

  const updateAnnotation = useCallback((annotationId, patch) => (
    patchDocument((latest) => updateAnnotationInDocument(
      latest,
      annotationId,
      patch,
      getCalibratedNow()
    ))
  ), [patchDocument]);

  const removeAnnotation = useCallback((annotationId) => {
    let existing = null;
    patchDocument((latest) => {
      existing = latest.annotations.find((item) => item.id === annotationId) || null;
      return deleteAnnotationInDocument(latest, annotationId);
    });
    return existing;
  }, [patchDocument]);

  const restoreAnnotation = useCallback((annotation) => (
    patchDocument((latest) => restoreAnnotationInDocument(latest, annotation))
  ), [patchDocument]);

  return {
    annotations: documentState.annotations,
    nextNumber: documentState.nextNumber,
    addAnnotation,
    updateAnnotation,
    removeAnnotation,
    restoreAnnotation,
  };
}
