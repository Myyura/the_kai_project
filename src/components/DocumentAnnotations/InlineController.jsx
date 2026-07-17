import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createPortal} from 'react-dom';
import {FaNoteSticky} from 'react-icons/fa6';
import {useDocumentAnnotations} from './context';
import styles from './styles.module.css';

const BLOCK_SELECTOR = '[data-kai-annotatable="true"][data-kai-source-line]';

const getLine = (element) => Number(element?.getAttribute('data-kai-source-line')) || 1;

const hashText = (value) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `v1-${(hash >>> 0).toString(36)}`;
};

const computeDocumentHash = (container) => {
  const blocks = Array.from(container.querySelectorAll(BLOCK_SELECTOR));
  const source = blocks
    .map((block) => `${getLine(block)}:${block.textContent || ''}`)
    .join('\n');
  return hashText(source);
};

const findTextRange = (block, exact) => {
  if (!block || !exact) return null;
  const textNodes = [];
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  let node;
  let fullText = '';
  while ((node = walker.nextNode())) {
    textNodes.push({node, start: fullText.length, end: fullText.length + node.nodeValue.length});
    fullText += node.nodeValue;
  }

  const startOffset = fullText.indexOf(exact);
  if (startOffset < 0) return null;
  const endOffset = startOffset + exact.length;
  const startNode = textNodes.find((item) => startOffset >= item.start && startOffset < item.end);
  const endNode = textNodes.find((item) => endOffset > item.start && endOffset <= item.end);
  if (!startNode || !endNode) return null;

  const range = document.createRange();
  range.setStart(startNode.node, startOffset - startNode.start);
  range.setEnd(endNode.node, endOffset - endNode.start);
  return range;
};

const resolveAnnotation = (container, annotation) => {
  const blocks = Array.from(container.querySelectorAll(BLOCK_SELECTOR));
  const candidates = blocks
    .filter((block) => (block.textContent || '').includes(annotation.exact))
    .sort((a, b) => {
      const lineDistance = Math.abs(getLine(a) - annotation.line) - Math.abs(getLine(b) - annotation.line);
      if (lineDistance !== 0) return lineDistance;
      return (a.textContent || '').length - (b.textContent || '').length;
    });
  const block = candidates[0] || null;
  const range = block ? findTextRange(block, annotation.exact) : null;
  const currentLine = block ? getLine(block) : null;
  return {
    found: Boolean(block),
    block,
    range,
    currentLine,
    moved: Boolean(block && currentLine !== annotation.line),
  };
};

export default function InlineAnnotationController() {
  const {
    enabled,
    annotations,
    activeId,
    setSelectionDraft,
    dismissSelection,
    setDocumentHash,
    setResolutions,
    focusAnnotation,
    registerFocusHandler,
  } = useDocumentAnnotations();
  const [container, setContainer] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const next = document.querySelector('.theme-doc-markdown');
    setContainer(next || null);
  }, []);

  const resolved = useMemo(() => {
    if (!container) return {};
    return Object.fromEntries(annotations.map((annotation) => [
      annotation.id,
      resolveAnnotation(container, annotation),
    ]));
  }, [annotations, container]);

  const updateMarkerPositions = useCallback(() => {
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const grouped = new Map();

    annotations.forEach((annotation) => {
      const resolution = resolved[annotation.id];
      if (!resolution?.block) return;
      const existing = grouped.get(resolution.block) || [];
      existing.push(annotation.id);
      grouped.set(resolution.block, existing);
    });

    setMarkers(Array.from(grouped.entries()).map(([block, ids]) => {
      const rect = block.getBoundingClientRect();
      return {
        ids,
        top: rect.top - containerRect.top + Math.min(10, rect.height / 2),
        left: container.clientWidth + 4,
      };
    }));
  }, [annotations, container, resolved]);

  useEffect(() => {
    if (!container) return undefined;
    setDocumentHash(computeDocumentHash(container));
    setResolutions(Object.fromEntries(Object.entries(resolved).map(([id, value]) => [id, {
      found: value.found,
      currentLine: value.currentLine,
      moved: value.moved,
    }])));

    const previousPosition = container.style.position;
    if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
    updateMarkerPositions();

    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(updateMarkerPositions)
      : null;
    resizeObserver?.observe(container);
    window.addEventListener('resize', updateMarkerPositions);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateMarkerPositions);
      container.style.position = previousPosition;
    };
  }, [container, resolved, setDocumentHash, setResolutions, updateMarkerPositions]);

  useEffect(() => {
    if (!container || !enabled) return undefined;

    const captureSelection = () => {
      requestAnimationFrame(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
          return;
        }
        const range = selection.getRangeAt(0);
        if (!container.contains(range.commonAncestorContainer)) return;

        const startElement = range.startContainer.nodeType === Node.TEXT_NODE
          ? range.startContainer.parentElement
          : range.startContainer;
        const endElement = range.endContainer.nodeType === Node.TEXT_NODE
          ? range.endContainer.parentElement
          : range.endContainer;
        const startBlock = startElement?.closest?.(BLOCK_SELECTOR);
        const endBlock = endElement?.closest?.(BLOCK_SELECTOR);
        if (!startBlock || startBlock !== endBlock) return;

        const exact = selection.toString().trim();
        if (!exact) return;
        const rect = range.getBoundingClientRect();
        setSelectionDraft({
          exact,
          line: getLine(startBlock),
          rect: {
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom,
          },
        });
      });
    };

    container.addEventListener('mouseup', captureSelection);
    container.addEventListener('touchend', captureSelection);
    container.addEventListener('keyup', captureSelection);
    return () => {
      container.removeEventListener('mouseup', captureSelection);
      container.removeEventListener('touchend', captureSelection);
      container.removeEventListener('keyup', captureSelection);
    };
  }, [container, dismissSelection, enabled, setSelectionDraft]);

  useEffect(() => {
    if (!container || typeof CSS === 'undefined' || !CSS.highlights || typeof Highlight === 'undefined') {
      return undefined;
    }
    const ranges = Object.values(resolved).map((item) => item.range).filter(Boolean);
    if (ranges.length > 0) CSS.highlights.set('kai-annotations', new Highlight(...ranges));
    else CSS.highlights.delete('kai-annotations');

    const activeRange = activeId ? resolved[activeId]?.range : null;
    if (activeRange) CSS.highlights.set('kai-active-annotation', new Highlight(activeRange));
    else CSS.highlights.delete('kai-active-annotation');

    return () => {
      CSS.highlights.delete('kai-annotations');
      CSS.highlights.delete('kai-active-annotation');
    };
  }, [activeId, container, resolved]);

  useEffect(() => registerFocusHandler((annotationId) => {
    const resolution = resolved[annotationId];
    resolution?.block?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }), [registerFocusHandler, resolved]);

  useEffect(() => {
    if (!container) return undefined;
    const handleClick = (event) => {
      for (const annotation of annotations) {
        const range = resolved[annotation.id]?.range;
        if (!range) continue;
        const hit = Array.from(range.getClientRects()).some((rect) => (
          event.clientX >= rect.left && event.clientX <= rect.right
          && event.clientY >= rect.top && event.clientY <= rect.bottom
        ));
        if (hit) {
          event.preventDefault();
          focusAnnotation(annotation.id, {openMobile: window.innerWidth <= 996});
          return;
        }
      }
    };
    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [annotations, container, focusAnnotation, resolved]);

  if (!container || markers.length === 0) return null;

  return createPortal(
    <div className={styles.markerLayer} aria-hidden="false">
      {markers.map((marker) => (
        <button
          key={marker.ids.join(':')}
          type="button"
          className={styles.annotationMarker}
          style={{top: marker.top, left: marker.left}}
          onClick={() => focusAnnotation(marker.ids[0], {openMobile: window.innerWidth <= 996})}
          aria-label={`${marker.ids.length} annotations`}>
          <FaNoteSticky aria-hidden="true" />
          {marker.ids.length > 1 && <span>{marker.ids.length}</span>}
        </button>
      ))}
    </div>,
    container
  );
}
