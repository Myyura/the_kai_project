import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FaShareAlt, FaDownload, FaCheck, FaTimes, FaImage } from 'react-icons/fa';
import { useCurrentLanguage } from '@site/src/context/LanguageContext';
import styles from './styles.module.css';

const LABELS = {
  zh: {
    heading: '分享为图片',
    generating: '生成中...',
    download: '下载图片',
    share: '分享',
    copied: '已复制到剪贴板',
    shareSuccess: '分享成功',
    shareFail: '生成失败，请重试',
    preview: '预览',
    watermark: 'The Kai Project · runjp.com',
  },
  ja: {
    heading: '画像として共有',
    generating: '生成中...',
    download: '画像をダウンロード',
    share: '共有',
    copied: 'クリップボードにコピーしました',
    shareSuccess: '共有に成功しました',
    shareFail: '生成に失敗しました。再試行してください',
    preview: 'プレビュー',
    watermark: 'The Kai Project · runjp.com',
  },
};

const WORKER_TIMEOUT_MS = 1200;

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
    color: #2563eb;
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
    border-left: 4px solid #2e8555;
    color: #334155;
  }

  .share-image-container .share-markdown hr {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 1.2em 0;
  }
`;

const SHARE_RENDER_WORKER_SCRIPT = `
self.onmessage = function(event) {
  var data = event.data || {};
  var id = data.id;
  var type = data.type;
  var payload = data.payload || {};

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  try {
    if (type === 'watermark-layout') {
      var height = Number(payload.height || 0);
      var rowGap = Number(payload.rowGap || 160);
      var colGap = Number(payload.colGap || 260);
      var offsetX = Number(payload.offsetX || 130);
      var maxRows = Number(payload.maxRows || 32);
      var maxCols = Number(payload.maxCols || 4);

      var rows = clamp(Math.ceil(height / rowGap), 1, maxRows);
      var cols = clamp(maxCols, 1, 10);
      var positions = [];

      for (var r = 0; r < rows; r += 1) {
        for (var c = 0; c < cols; c += 1) {
          positions.push({
            top: r * rowGap,
            left: c * colGap + (r % 2 === 0 ? 0 : offsetX),
          });
        }
      }

      self.postMessage({ id: id, ok: true, payload: { positions: positions } });
      return;
    }

    if (type === 'sanitize-filename') {
      var raw = String(payload.value || 'share');
      var safe = raw
        .replace(/[^a-zA-Z0-9\\u4e00-\\u9fff\\u3040-\\u309f\\u30a0-\\u30ff-]+/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 80);

      self.postMessage({ id: id, ok: true, payload: { fileName: safe || 'share' } });
      return;
    }

    self.postMessage({ id: id, ok: false, error: 'Unknown task type' });
  } catch (err) {
    self.postMessage({
      id: id,
      ok: false,
      error: (err && err.message) ? err.message : 'Worker failed',
    });
  }
};
`;

function createRenderWorker() {
  if (typeof window === 'undefined' || typeof Worker === 'undefined') {
    return null;
  }

  try {
    const blob = new Blob([SHARE_RENDER_WORKER_SCRIPT], { type: 'text/javascript' });
    const blobUrl = URL.createObjectURL(blob);
    const worker = new Worker(blobUrl);
    return { worker, blobUrl };
  } catch {
    return null;
  }
}

function sanitizeFileNameLocal(raw) {
  return String(raw || 'share')
    .replace(/[^a-zA-Z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80) || 'share';
}

function computeWatermarkLayoutFallback({
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

/** Clone the full article content */
function cloneArticleContent(article) {
  if (!article) return null;
  const clone = article.cloneNode(true);
  // Remove anchor links from headings
  clone.querySelectorAll('.hash-link, a.anchor').forEach(a => a.remove());
  // Remove interactive / share elements
  clone
    .querySelectorAll('button, input, textarea, select, script, style, .share-as-image-wrapper, [class*="ShareAsImage"], [class*="ProgressTracker"], [class*="NoteEditor"], [class*="copyButton"]')
    .forEach(el => el.remove());
  clone.classList.add('share-markdown');
  return clone;
}

export default function ShareAsImage({ docId, title: docTitle }) {
  const lang = useCurrentLanguage();
  const L = LABELS[lang] || LABELS.zh;

  const [generating, setGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const workerRef = useRef(null);
  const workerBlobUrlRef = useRef('');
  const requestIdRef = useRef(0);
  const pendingRequestMapRef = useRef(new Map());

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const workerBundle = createRenderWorker();
    if (!workerBundle) return undefined;

    workerRef.current = workerBundle.worker;
    workerBlobUrlRef.current = workerBundle.blobUrl;

    workerBundle.worker.onmessage = (event) => {
      const { id, ok, payload, error } = event.data || {};
      const pending = pendingRequestMapRef.current.get(id);
      if (!pending) return;

      clearTimeout(pending.timer);
      pendingRequestMapRef.current.delete(id);

      if (ok === false) {
        pending.reject(new Error(error || 'Worker task failed'));
        return;
      }
      pending.resolve(payload);
    };

    workerBundle.worker.onerror = () => {
      for (const pending of pendingRequestMapRef.current.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error('Worker crashed'));
      }
      pendingRequestMapRef.current.clear();
    };

    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

      for (const pending of pendingRequestMapRef.current.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error('Worker terminated'));
      }
      pendingRequestMapRef.current.clear();

      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }

      if (workerBlobUrlRef.current) {
        URL.revokeObjectURL(workerBlobUrlRef.current);
        workerBlobUrlRef.current = '';
      }
    };
  }, []);

  const requestWorkerTask = useCallback((type, payload, timeoutMs = WORKER_TIMEOUT_MS) => {
    const worker = workerRef.current;
    if (!worker) {
      return Promise.reject(new Error('Worker unavailable'));
    }

    const requestId = ++requestIdRef.current;

    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        pendingRequestMapRef.current.delete(requestId);
        reject(new Error('Worker timeout'));
      }, timeoutMs);

      pendingRequestMapRef.current.set(requestId, { resolve, reject, timer });
      worker.postMessage({ id: requestId, type, payload });
    });
  }, []);

  const buildWatermarkLayout = useCallback(async (height) => {
    const payload = {
      height,
      rowGap: 160,
      colGap: 260,
      offsetX: 130,
      maxRows: 32,
      maxCols: 4,
    };

    try {
      const result = await requestWorkerTask('watermark-layout', payload, 900);
      if (Array.isArray(result?.positions) && result.positions.length > 0) {
        return result.positions;
      }
    } catch {
      // Worker 不可用时回退到主线程轻量计算。
    }

    return computeWatermarkLayoutFallback(payload);
  }, [requestWorkerTask]);

  const getSafeFileName = useCallback(async () => {
    const raw = docTitle || docId || 'share';

    try {
      const result = await requestWorkerTask('sanitize-filename', { value: raw }, 500);
      if (result?.fileName) return result.fileName;
    } catch {
      // Worker 不可用时走本地回退。
    }

    return sanitizeFileNameLocal(raw);
  }, [docId, docTitle, requestWorkerTask]);

  const showToast = useCallback((msg, type = 'info') => {
    setToast({ msg, type });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 3000);
  }, []);

  const generateImage = useCallback(async () => {
    setGenerating(true);
    setPreviewUrl(null);

    let container = null;

    try {
      const article = document.querySelector('article .theme-doc-markdown');
      const contentClone = cloneArticleContent(article);
      if (!contentClone) {
        showToast(L.shareFail, 'error');
        return;
      }

      // Build a temporary container to render the image
      container = document.createElement('div');
      container.className = 'share-image-container';
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
        border-bottom: 2px solid #2e8555;
      `;

      const logoImg = document.createElement('img');
      logoImg.src = '/img/logo-96.png';
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
        background: linear-gradient(135deg, #2e8555 0%, #1a6b3f 100%);
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
      await new Promise((resolve) => requestAnimationFrame(resolve));

      const contentHeight = contentWrapper.scrollHeight || contentClone.scrollHeight || 2000;
      const positions = await buildWatermarkLayout(contentHeight);

      // Diagonal repeating watermark overlay
      const watermarkOverlay = document.createElement('div');
      watermarkOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 1;
      `;
      const watermarkText = 'runjp.com';

      for (const pos of positions) {
        const span = document.createElement('span');
        span.textContent = watermarkText;
        span.style.cssText = `
          position: absolute;
          top: ${pos.top}px;
          left: ${pos.left}px;
          font-size: 18px;
          font-weight: 700;
          color: rgba(46, 133, 85, 0.08);
          transform: rotate(-30deg);
          white-space: nowrap;
          user-select: none;
          letter-spacing: 2px;
        `;
        watermarkOverlay.appendChild(span);
      }

      contentWrapper.appendChild(watermarkOverlay);

      // Wait for fonts/images to load
      await new Promise(r => setTimeout(r, 300));

      const { toPng } = await import('html-to-image');
      const dataUrl = await toPng(container, {
        quality: 1,
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#ffffff',
        style: {
          position: 'static',
          left: 'auto',
          top: 'auto',
        },
      });

      setPreviewUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate image:', err);
      showToast(L.shareFail, 'error');
    } finally {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
      setGenerating(false);
    }
  }, [docTitle, L, buildWatermarkLayout, showToast]);

  const downloadImage = useCallback(async () => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    const fileName = await getSafeFileName();
    link.download = `${fileName}.png`;
    link.href = previewUrl;
    link.click();
    showToast(L.download + ' ✓', 'success');
  }, [previewUrl, getSafeFileName, L, showToast]);

  const shareImage = useCallback(async () => {
    if (!previewUrl) return;

    try {
      const res = await fetch(previewUrl);
      const blob = await res.blob();
      const fileName = await getSafeFileName();
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
  }, [previewUrl, getSafeFileName, docTitle, L, showToast, downloadImage]);

  const closePreview = useCallback(() => {
    setPreviewUrl(null);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Trigger button */}
      <button
        className={styles.triggerBtn}
        onClick={generateImage}
        disabled={generating}
        title={L.heading}
      >
        {generating ? (
          <>
            <span className={styles.spinner} />
            <span>{L.generating}</span>
          </>
        ) : (
          <>
            <FaImage className={styles.triggerIcon} />
            <span>{L.heading}</span>
          </>
        )}
      </button>

      {/* Preview modal */}
      {previewUrl && (
        <div className={styles.previewOverlay} onClick={closePreview}>
          <div className={styles.previewModal} onClick={e => e.stopPropagation()}>
            <div className={styles.previewHeader}>
              <span>{L.preview}</span>
              <button className={styles.closeBtn} onClick={closePreview}>
                <FaTimes />
              </button>
            </div>
            <div className={styles.previewBody}>
              <img
                src={previewUrl}
                alt="Preview"
                className={styles.previewImage}
              />
            </div>
            <div className={styles.previewFooter}>
              <button className={`${styles.actionBtn} ${styles.downloadBtn}`} onClick={downloadImage}>
                <FaDownload />
                {L.download}
              </button>
              <button className={`${styles.actionBtn} ${styles.shareBtn}`} onClick={shareImage}>
                <FaShareAlt />
                {L.share}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`${styles.toast} ${styles[`toast_${toast.type}`]}`}>
          {toast.type === 'success' && <FaCheck />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
