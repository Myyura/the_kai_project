import React, { useState, useRef, useCallback, useEffect, useId } from 'react';
import { FaShareAlt, FaDownload, FaCheck, FaTimes, FaImage } from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';
import {checkAborted, paginateContent, ShareImageLimitError} from './pagination';
import {captureLongImage, cloneArticleContent, fitDisplayMath, waitForFonts, waitForImage, yieldToMain} from './render';

// 白名单样式：仅覆盖导出图片所需的排版元素，避免复制全站 style rules。
const SHARE_STYLE_WHITELIST = `
  .share-image-container,
  .share-image-container * {
    box-sizing: border-box;
  }

  .share-image-container .share-markdown {
    position: relative;
    z-index: 0;
    color: #1a1a2e;
    font-size: 16px;
    line-height: 1.8;
    word-break: break-word;
  }

  .share-image-container .share-markdown h1,
  .share-image-container .share-markdown h2,
  .share-image-container .share-markdown h3,
  .share-image-container .share-markdown h4 {
    color: #111827;
    font-weight: 700;
    line-height: 1.35;
    margin: 1.15em 0 0.55em;
  }

  .share-image-container .share-markdown > #author,
  .share-image-container .share-markdown > #author + p {
    color: #334155;
  }

  .share-image-container .share-markdown h1 {
    font-size: 1.9rem;
  }

  .share-image-container .share-markdown h2 {
    font-size: 1.45rem;
  }

  .share-image-container .share-markdown h3 {
    font-size: 1.2rem;
  }

  .share-image-container .share-markdown p,
  .share-image-container .share-markdown ul,
  .share-image-container .share-markdown ol,
  .share-image-container .share-markdown blockquote,
  .share-image-container .share-markdown pre,
  .share-image-container .share-markdown table {
    margin: 0.75em 0;
  }

  .share-image-container .share-markdown ul,
  .share-image-container .share-markdown ol {
    padding-left: 1.4em;
  }

  .share-image-container .share-markdown li {
    margin: 0.3em 0;
  }

  .share-image-container .share-markdown a {
    color: var(--kai-blue);
    text-decoration: none;
  }

  .share-image-container .share-markdown img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 0.85em 0;
  }

  .share-image-container .share-markdown code {
    background: #f1f5f9;
    border-radius: 6px;
    padding: 0.15em 0.38em;
    font-size: 0.9em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
    color: #0f172a;
  }

  .share-image-container .share-markdown pre {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0.8em 1em;
    overflow-x: auto;
  }

  .share-image-container .share-markdown pre code {
    background: transparent;
    padding: 0;
    border-radius: 0;
  }

  .share-image-container .share-markdown table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dbe3ee;
    font-size: 0.96em;
  }

  .share-image-container .share-markdown th,
  .share-image-container .share-markdown td {
    border: 1px solid #dbe3ee;
    padding: 0.5em 0.65em;
    text-align: left;
    vertical-align: top;
  }

  .share-image-container .share-markdown th {
    background: #eef3fb;
    font-weight: 700;
  }

  .share-image-container .share-markdown blockquote {
    margin: 0.85em 0;
    padding: 0.55em 0.9em;
    background: #f8fafc;
    /* 品牌蓝在两种主题下保持一致，适用于固定白纸底的导出图。 */
    border-left: 4px solid var(--kai-blue);
    color: #334155;
  }

  .share-image-container .share-markdown hr {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 1.2em 0;
  }

  .share-image-container [data-share-continued-before] {
    margin-top: 0 !important;
    padding-top: 0 !important;
    border-top-width: 0 !important;
  }

  .share-image-container [data-share-continued-after] {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    border-bottom-width: 0 !important;
  }

  .share-image-container li[data-share-continued-before] {
    list-style-type: none;
  }
`;

function sanitizeFileNameLocal(raw) {
  return String(raw || 'share')
    .replace(/[^a-zA-Z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80) || 'share';
}

function computeWatermarkLayout({
  height,
  rowGap = 160,
  colGap = 260,
  offsetX = 130,
  maxRows = 32,
  maxCols = 4,
}) {
  const rows = Math.max(1, Math.min(Math.ceil(height / rowGap), maxRows));
  const cols = Math.max(1, Math.min(maxCols, 10));
  const positions = [];

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      positions.push({
        top: r * rowGap,
        left: c * colGap + (r % 2 === 0 ? 0 : offsetX),
      });
    }
  }

  return positions;
}

/** Get the document title from the article header */
function getDocTitle() {
  const article = document.querySelector('article .theme-doc-markdown');
  if (!article) return '';
  const header = article.querySelector('header h1') || article.querySelector('h1');
  return header?.textContent?.trim() || document.title;
}

/** Get the document tags from breadcrumbs */
function getDocBreadcrumbs() {
  const breadcrumbs = document.querySelector('.theme-doc-breadcrumbs');
  if (!breadcrumbs) return '';
  const items = breadcrumbs.querySelectorAll('.breadcrumbs__link');
  return Array.from(items).map(a => a.textContent.trim()).join(' > ');
}

export default function ShareAsImage({ docId, title: docTitle }) {
  const L = useUiText('shareAsImage');

  const [generating, setGenerating] = useState(false);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(null);
  const previewUrl = preview?.url;
  const [toast, setToast] = useState(null);
  const [shareScope, setShareScope] = useState('all');
  const previewTitleId = useId();
  const toastTimerRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const previewModalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const generationRef = useRef(null);
  const previewRef = useRef(null);

  const releasePreview = useCallback(() => {
    if (previewRef.current) URL.revokeObjectURL(previewRef.current.url);
    previewRef.current = null;
  }, []);

  useEffect(() => {
    setPreview(null);
    setGenerating(false);
    setProgress(null);
    return () => {
      generationRef.current?.abort();
      generationRef.current = null;
      releasePreview();
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [docId, releasePreview]);

  const showToast = useCallback((msg, type = 'info') => {
    setToast({ msg, type });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 3000);
  }, []);

  const generateImage = useCallback(async () => {
    if (generationRef.current) return;
    const controller = new AbortController();
    const {signal} = controller;
    generationRef.current = controller;
    releasePreview();
    setGenerating(true);
    setProgress(null);
    setPreview(null);

    let container = null;

    try {
      const article = document.querySelector('article .theme-doc-markdown');
      await yieldToMain(signal);
      const contentClone = await cloneArticleContent(article, shareScope, signal);

      // Build a temporary container to render the image
      container = document.createElement('div');
      container.className = 'share-image-container';
      container.setAttribute('aria-hidden', 'true');
      container.setAttribute('data-theme', 'light');
      container.inert = true;
      container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 800px;
        padding: 40px;
        background: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #1a1a2e;
        z-index: -1;
      `;

      const styleEl = document.createElement('style');
      styleEl.textContent = SHARE_STYLE_WHITELIST;
      container.appendChild(styleEl);

      // Header with logo and title
      const header = document.createElement('div');
      header.style.cssText = `
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--kai-blue);
      `;

      const logoImg = document.createElement('img');
      logoImg.src = '/img/kai-icon.png';
      logoImg.style.cssText = 'width: 48px; height: 48px; border-radius: 10px;';
      logoImg.crossOrigin = 'anonymous';
      header.appendChild(logoImg);

      const titleBlock = document.createElement('div');
      titleBlock.style.cssText = 'flex: 1;';

      const pageTitle = document.createElement('div');
      pageTitle.style.cssText = 'font-size: 20px; font-weight: 700; color: #1a1a2e; line-height: 1.3;';
      pageTitle.textContent = docTitle || getDocTitle();
      titleBlock.appendChild(pageTitle);

      const breadcrumb = getDocBreadcrumbs();
      if (breadcrumb) {
        const breadcrumbEl = document.createElement('div');
        breadcrumbEl.style.cssText = 'font-size: 12px; color: #666; margin-top: 4px;';
        breadcrumbEl.textContent = breadcrumb;
        titleBlock.appendChild(breadcrumbEl);
      }

      header.appendChild(titleBlock);
      container.appendChild(header);

      // Wrap content in a relative container for watermark overlay
      const contentWrapper = document.createElement('div');
      contentWrapper.style.cssText = 'position: relative;';
      contentWrapper.appendChild(contentClone);
      container.appendChild(contentWrapper);

      // Footer bar
      const footer = document.createElement('div');
      footer.style.cssText = `
        margin-top: 24px;
        padding: 16px 20px;
        background: var(--kai-action);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: #fff;
      `;

      const watermarkLeft = document.createElement('span');
      watermarkLeft.style.cssText = 'font-weight: 600; letter-spacing: 0.5px;';
      watermarkLeft.textContent = L.watermark;
      footer.appendChild(watermarkLeft);

      const url = document.createElement('span');
      url.style.cssText = 'opacity: 0.85; font-size: 12px;';
      url.textContent = window.location.href.replace(/https?:\/\//, '');
      footer.appendChild(url);

      container.appendChild(footer);

      document.body.appendChild(container);
      await yieldToMain(signal);
      await Promise.all(Array.from(container.querySelectorAll('img'), img => waitForImage(img, signal)));
      await waitForFonts(container, signal);
      await fitDisplayMath(contentClone, signal);
      checkAborted(signal);
      const fragments = await paginateContent(contentClone, {signal, yieldToMain: () => yieldToMain(signal)});
      if (!fragments.length) fragments.push(document.createDocumentFragment());
      contentClone.replaceChildren();
      const {toCanvas} = await import('html-to-image');
      checkAborted(signal);
      // Build bounded internal strips; the user still receives one full image.
      contentWrapper.remove();
      header.remove();
      footer.remove();
      container.style.padding = '0';
      const strips = [];
      for (let index = 0; index < fragments.length; index += 1) {
        const strip = document.createElement('div');
        strip.style.cssText = `width: 800px; padding: ${index === 0 ? 40 : 0}px 40px ${index === fragments.length - 1 ? 40 : 0}px; background: #fff;`;
        if (index === 0) strip.appendChild(header);
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position: relative; display: flow-root;';
        const stripContent = contentClone.cloneNode(false);
        if (index > 0) stripContent.setAttribute('data-share-continued-before', '');
        if (index < fragments.length - 1) stripContent.setAttribute('data-share-continued-after', '');
        stripContent.appendChild(fragments[index]);
        wrapper.appendChild(stripContent);
        strip.appendChild(wrapper);
        if (index === fragments.length - 1) strip.appendChild(footer);
        container.appendChild(strip);
        strips.push(strip);
        await yieldToMain(signal);
      }
      for (const strip of strips) {
        const wrapper = strip.querySelector('.share-markdown').parentElement;
        const watermarkOverlay = document.createElement('div');
        watermarkOverlay.style.cssText = 'position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1;';
        for (const pos of computeWatermarkLayout({height: wrapper.scrollHeight})) {
          const span = document.createElement('span');
          span.textContent = 'runjp.com';
          span.style.cssText = `position: absolute; top: ${pos.top}px; left: ${pos.left}px;
            font-size: 18px; font-weight: 700; color: rgba(var(--kai-blue-rgb), 0.08);
            transform: rotate(-30deg); white-space: nowrap; letter-spacing: 2px;`;
          watermarkOverlay.appendChild(span);
        }
        wrapper.appendChild(watermarkOverlay);
      }
      const blob = await captureLongImage(strips, toCanvas, signal,
        (current, total) => setProgress({current, total}));
      checkAborted(signal);
      const result = {blob, url: URL.createObjectURL(blob)};
      previewRef.current = result;
      setPreview(result);
    } catch (err) {
      if (err.name !== 'AbortError' && !signal.aborted) {
        console.error('Failed to generate image:', err);
        showToast(err instanceof ShareImageLimitError ? L.tooLarge : L.shareFail, 'error');
      }
    } finally {
      controller.abort();
      container?.remove();
      if (generationRef.current === controller) {
        generationRef.current = null;
        setGenerating(false);
        setProgress(null);
      }
    }
  }, [docTitle, L, shareScope, showToast, releasePreview]);

  const getSafeFileName = useCallback(() => (
    sanitizeFileNameLocal(docTitle || docId || 'share')
  ), [docId, docTitle]);

  const downloadImage = useCallback(() => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    link.download = `${getSafeFileName()}.png`;
    link.href = previewUrl;
    link.click();
    showToast(L.download + ' ✓', 'success');
  }, [previewUrl, getSafeFileName, L, showToast]);

  const shareImage = useCallback(async () => {
    if (!previewUrl) return;

    try {
      const {blob} = preview;
      const fileName = getSafeFileName();
      const file = new File([blob], `${fileName}.png`, { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: docTitle || 'The Kai Project',
          files: [file],
        });
        showToast(L.shareSuccess, 'success');
      } else {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob }),
          ]);
          showToast(L.copied, 'success');
        } catch {
          downloadImage();
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        showToast(L.shareFail, 'error');
      }
    }
  }, [previewUrl, preview, getSafeFileName, docTitle, L, showToast, downloadImage]);

  const closePreview = useCallback(() => {
    setPreview(null);
    releasePreview();
  }, [releasePreview]);

  const hasPreview = Boolean(previewUrl);
  useEffect(() => {
    if (!hasPreview) return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePreview();
        return;
      }

      if (event.key !== 'Tab' || !previewModalRef.current) return;
      const focusable = Array.from(
        previewModalRef.current.querySelectorAll(
          'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) {
        event.preventDefault();
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
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      const focusTarget = previousFocusRef.current;
      if (focusTarget instanceof HTMLElement) {
        window.requestAnimationFrame(() => focusTarget.focus());
      } else {
        window.requestAnimationFrame(() => triggerButtonRef.current?.focus());
      }
    };
  }, [closePreview, hasPreview]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.triggerRow}>
        <label className={styles.scopeControl}>
          <span>{L.scope}</span>
          <select
            value={shareScope}
            onChange={(event) => setShareScope(event.target.value)}
            disabled={generating}
            aria-label={L.scope}>
            <option value="all">{L.scopeAll}</option>
            <option value="problem">{L.scopeProblem}</option>
            <option value="solution">{L.scopeSolution}</option>
          </select>
        </label>

        {/* Trigger button */}
        <button
          ref={triggerButtonRef}
          type="button"
          className={styles.triggerBtn}
          onClick={generateImage}
          disabled={generating}
          title={L.heading}
        >
          {generating ? (
            <>
              <span className={styles.spinner} />
              <span role="status">{progress ? L.generatingProgress(Math.round(progress.current / progress.total * 100)) : L.generating}</span>
            </>
          ) : (
            <>
              <FaImage className={styles.triggerIcon} />
              <span>{L.heading}</span>
            </>
          )}
        </button>
        {generating && (
          <button type="button" className={styles.actionBtn} onClick={() => generationRef.current?.abort()}>
            {L.cancel}
          </button>
        )}
      </div>

      {/* Preview modal */}
      {previewUrl && (
        <div className={styles.previewOverlay} onClick={closePreview}>
          <div
            ref={previewModalRef}
            className={styles.previewModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={previewTitleId}
            onClick={e => e.stopPropagation()}>
            <div className={styles.previewHeader}>
              <span id={previewTitleId}>{L.preview}</span>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeBtn}
                aria-label={L.close}
                onClick={closePreview}>
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <div className={styles.previewBody}>
              <img
                src={previewUrl}
                alt={L.previewAlt}
                className={styles.previewImage}
              />
            </div>
            <div className={styles.previewFooter}>
              <button type="button" className={`${styles.actionBtn} ${styles.downloadBtn}`} onClick={downloadImage}>
                <FaDownload />
                {L.download}
              </button>
              <button type="button" className={`${styles.actionBtn} ${styles.shareBtn}`} onClick={shareImage}>
                <FaShareAlt />
                {L.share}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`${styles.toast} ${styles[`toast_${toast.type}`]}`}
          role="status"
          aria-live="polite">
          {toast.type === 'success' && <FaCheck />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
