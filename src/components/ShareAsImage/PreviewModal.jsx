import React, {useEffect, useId, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {FaDownload, FaShareAlt, FaTimes} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

/** Preview generated images without initiating a download until the user asks. */
export default function PreviewModal({image, title, onClose, children, busy = false, error = '', imageAlt, returnFocusRef}) {
  const L = useUiText('shareAsImage');
  const headingId = useId();
  const modalRef = useRef(null);
  const bodyRef = useRef(null);
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const mountedRef = useRef(false);
  const imageRef = useRef(image);
  imageRef.current = image;
  const sharingRef = useRef(false);
  const [sharing, setSharing] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    mountedRef.current = true;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(modalRef.current?.querySelectorAll(
        'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
      ) || []);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) {
        event.preventDefault();
      } else if (event.shiftKey && (document.activeElement === first || !modalRef.current.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !modalRef.current.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      mountedRef.current = false;
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => {
        const focusTarget = [returnFocusRef?.current, previousFocus].find(element =>
          element && element !== document.body && element.isConnected && !element.disabled,
        );
        focusTarget?.focus();
      });
    };
  }, []);

  useEffect(() => {
    setFeedback('');
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [image.url]);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = image.filename;
    document.body.appendChild(link);
    try {
      link.click();
      if (mountedRef.current) setFeedback(`${L.download} ✓`);
    } finally {
      link.remove();
    }
  };

  const shareImage = async () => {
    if (busy || sharingRef.current) return;
    const imageUrl = image.url;
    const isCurrentImage = () => mountedRef.current && imageRef.current.url === imageUrl;
    sharingRef.current = true;
    setSharing(true);
    setFeedback('');
    try {
      const file = new File([image.blob], image.filename, {type: 'image/png'});
      if (navigator.share && navigator.canShare?.({files: [file]})) {
        await navigator.share({title: title || 'The Kai Project', files: [file]});
        if (isCurrentImage()) setFeedback(L.shareSuccess);
      } else {
        try {
          await navigator.clipboard.write([new ClipboardItem({'image/png': image.blob})]);
          if (isCurrentImage()) setFeedback(L.copied);
        } catch {
          if (isCurrentImage()) downloadImage();
        }
      }
    } catch (nextError) {
      if (isCurrentImage() && nextError.name !== 'AbortError') setFeedback(L.shareFail);
    } finally {
      sharingRef.current = false;
      if (mountedRef.current) setSharing(false);
    }
  };

  if (typeof document === 'undefined') return null;
  return createPortal(
    <div className={styles.previewOverlay} onClick={() => onCloseRef.current()}>
      <div ref={modalRef} className={styles.previewModal} role="dialog" aria-modal="true"
        aria-labelledby={headingId} onClick={event => event.stopPropagation()}>
        <div className={styles.previewHeader}>
          <span id={headingId}>{L.preview}</span>
          <button ref={closeButtonRef} type="button" className={styles.closeBtn} aria-label={L.close} onClick={() => onCloseRef.current()}>
            <FaTimes aria-hidden="true" />
          </button>
        </div>
        {children && <fieldset className={styles.previewControls} disabled={busy || sharing} aria-label={L.preview}>{children}</fieldset>}
        <div ref={bodyRef} className={styles.previewBody} aria-busy={busy}>
          {busy && <p className={styles.previewStatus} role="status">{L.generating}</p>}
          <img src={image.url} alt={imageAlt || L.previewAlt} className={styles.previewImage} />
        </div>
        {(error || feedback) && <p className={styles.previewFeedback} role={error ? 'alert' : 'status'}>{error || feedback}</p>}
        <div className={styles.previewFooter}>
          <button type="button" className={`${styles.actionBtn} ${styles.downloadBtn}`} disabled={busy || sharing} onClick={downloadImage}>
            <FaDownload aria-hidden="true" />{L.download}
          </button>
          <button type="button" className={`${styles.actionBtn} ${styles.shareBtn}`} disabled={busy || sharing} onClick={shareImage}>
            <FaShareAlt aria-hidden="true" />{L.share}
          </button>
        </div>
      </div>
    </div>, document.body,
  );
}
