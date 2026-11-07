export const SHARE_WATERMARK = 'The Kai Project | runjp.com';

/** Add the same faint branding to an already measured, positioned content area. */
export function appendShareWatermark(container, {height = container.scrollHeight, text = SHARE_WATERMARK} = {}) {
  const overlay = document.createElement('div');
  overlay.setAttribute('data-share-watermark', '');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.style.cssText = 'position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1;';
  const rows = Math.max(1, Math.min(Math.ceil(height / 180), 32));
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < 3; column++) {
      const label = document.createElement('span');
      label.textContent = text;
      label.style.cssText = `position: absolute; top: ${row * 180}px; left: ${column * 360 + (row % 2 ? 180 : 0)}px;
        font-size: 22px; font-weight: 700; color: rgba(11, 103, 201, 0.08);
        transform: rotate(-30deg); white-space: nowrap; letter-spacing: 2px;`;
      overlay.appendChild(label);
    }
  }
  container.appendChild(overlay);
  return overlay;
}
