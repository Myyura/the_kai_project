import React, { useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
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
function cloneArticleContent() {
  const article = document.querySelector('article .theme-doc-markdown');
  if (!article) return null;
  const clone = article.cloneNode(true);
  // Remove anchor links from headings
  clone.querySelectorAll('.hash-link, a.anchor').forEach(a => a.remove());
  // Remove interactive / share elements
  clone.querySelectorAll('button, input, .share-as-image-wrapper, [class*="ShareAsImage"], [class*="ProgressTracker"], [class*="NoteEditor"]').forEach(el => el.remove());
  return clone;
}

export default function ShareAsImage({ docId, title: docTitle }) {
  const lang = useCurrentLanguage();
  const L = LABELS[lang] || LABELS.zh;

  const [generating, setGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  const showToast = useCallback((msg, type = 'info') => {
    setToast({ msg, type });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 3000);
  }, []);

  const generateImage = useCallback(async () => {
    setGenerating(true);
    setPreviewUrl(null);

    try {
      const contentClone = cloneArticleContent();
      if (!contentClone) {
        showToast(L.shareFail, 'error');
        setGenerating(false);
        return;
      }

      // Build a temporary container to render the image
      const container = document.createElement('div');
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
      // Create a grid of watermark texts
      const rows = 60;
      const cols = 4;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const span = document.createElement('span');
          span.textContent = watermarkText;
          span.style.cssText = `
            position: absolute;
            top: ${r * 160}px;
            left: ${c * 260 + (r % 2 === 0 ? 0 : 130)}px;
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
      }
      contentWrapper.appendChild(watermarkOverlay);
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

      // Copy computed styles from the original document for KaTeX, code blocks, etc.
      const styleSheets = Array.from(document.styleSheets);
      const styleEl = document.createElement('style');
      let cssText = '';
      for (const sheet of styleSheets) {
        try {
          const rules = Array.from(sheet.cssRules || []);
          for (const rule of rules) {
            cssText += rule.cssText + '\n';
          }
        } catch (e) {
          // Cross-origin stylesheets can't be accessed
        }
      }
      styleEl.textContent = cssText;
      container.prepend(styleEl);

      // Wait for fonts/images to load
      await new Promise(r => setTimeout(r, 500));

      const dataUrl = await toPng(container, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        style: {
          position: 'static',
          left: 'auto',
          top: 'auto',
        },
      });

      document.body.removeChild(container);
      setPreviewUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate image:', err);
      showToast(L.shareFail, 'error');
    } finally {
      setGenerating(false);
    }
  }, [docTitle, L, showToast]);

  const downloadImage = useCallback(() => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    const fileName = (docTitle || docId || 'share').replace(/[^a-zA-Z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g, '_');
    link.download = `${fileName}.png`;
    link.href = previewUrl;
    link.click();
    showToast(L.download + ' ✓', 'success');
  }, [previewUrl, docTitle, docId, L, showToast]);

  const shareImage = useCallback(async () => {
    if (!previewUrl) return;

    try {
      const res = await fetch(previewUrl);
      const blob = await res.blob();
      const file = new File([blob], `${docTitle || 'share'}.png`, { type: 'image/png' });

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
  }, [previewUrl, docTitle, L, showToast, downloadImage]);

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
