import {checkAborted, MAX_SHARE_NODES, ShareImageLimitError} from './pagination';

// Keep each raster within a predictable memory budget, including tall figures.
export const MAX_CANVAS_PIXELS = 16_000_000;
export const MAX_CANVAS_EDGE = 16384;

// Copy the properties used by document layout and KaTeX, rather than hundreds
// of browser defaults onto every span in every formula.
export const SHARE_STYLE_PROPERTIES = [
  'display', 'position', 'box-sizing', 'float', 'clear',
  'top', 'right', 'bottom', 'left', 'z-index',
  'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'border-top', 'border-right', 'border-bottom', 'border-left',
  'border-radius', 'border-collapse', 'border-spacing', 'table-layout',
  'color', 'background-color', 'background-image', 'background-size',
  'background-position', 'background-repeat', 'background-clip',
  'font-family', 'font-size', 'font-style', 'font-weight', 'font-variant',
  'font-feature-settings', 'line-height', 'letter-spacing', 'word-spacing',
  'text-align', 'text-indent', 'text-transform', 'text-decoration',
  'text-shadow', 'text-overflow', 'white-space', 'word-break', 'overflow-wrap',
  'vertical-align', 'direction', 'list-style-type', 'list-style-position',
  'overflow', 'overflow-x', 'overflow-y', 'visibility', 'opacity',
  'transform', 'transform-origin', 'box-shadow', 'clip', 'clip-path',
  'content', 'counter-reset', 'counter-increment',
  'flex', 'flex-direction', 'flex-wrap', 'align-items', 'align-self',
  'justify-content', 'gap', 'order', 'grid-template-columns', 'grid-template-rows',
  'grid-column', 'grid-row', 'object-fit', 'object-position',
  'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'stroke-linecap',
  'stroke-linejoin', 'fill-rule', 'text-anchor', 'dominant-baseline',
];

// A timer yields a browser task (unlike a resolved Promise), so input and the
// progress indicator can run between chunks of DOM work.
export async function yieldToMain(signal) {
  checkAborted(signal);
  await new Promise(resolve => setTimeout(resolve, 0));
  checkAborted(signal);
}

export function getCapturePixelRatio(width, height) {
  if (!(width > 0 && height > 0 && Number.isFinite(width * height))) {
    throw new Error('Invalid share image dimensions');
  }
  return Math.min(2, Math.sqrt(MAX_CANVAS_PIXELS / (width * height)),
    MAX_CANVAS_EDGE / width, MAX_CANVAS_EDGE / height);
}

const EXCLUDED = 'button, input, textarea, select, script, style, .hash-link, a.anchor, '
  + '.katex-mathml, [data-kai-study-tabs-host], [data-kai-study-tools-host], '
  + '[data-kai-study-panel="notes"], [class*="copyButton"]';

/** Copy only the requested content, yielding even for formula-heavy articles. */
export async function cloneArticleContent(article, scope, signal) {
  if (!article) throw new Error('Article not found');
  const root = article.cloneNode(false);
  root.classList.add('share-markdown');
  const stack = [{source: article, target: root, index: 0}];
  let processed = 0;
  while (stack.length) {
    checkAborted(signal);
    const frame = stack[stack.length - 1];
    const source = frame.source.childNodes[frame.index++];
    if (!source) {
      stack.pop();
      continue;
    }
    if (++processed % 200 === 0) await yieldToMain(signal);
    if (processed > MAX_SHARE_NODES) throw new ShareImageLimitError();
    if (source.nodeType === 1) {
      const panel = source.getAttribute('data-kai-study-panel');
      const section = source.getAttribute('data-kai-study-section');
      const excludedSection = scope === 'problem' ? 'solution' : scope === 'solution' ? 'problem' : null;
      const svgStyle = source.tagName.toLowerCase() === 'style' && source.closest('svg');
      if ((!svgStyle && source.matches(EXCLUDED)) || (excludedSection && (panel === excludedSection || section === excludedSection))) continue;
    }
    const target = source.cloneNode(false);
    if (source.nodeType === 1) {
      if (source.hasAttribute('data-kai-study-panel')) target.removeAttribute('hidden');
      if (source.tagName === 'IMG') {
        // The off-screen export must also load images from the inactive tab.
        target.loading = 'eager';
        target.src = source.currentSrc || source.src;
        target.removeAttribute('srcset');
        target.removeAttribute('sizes');
      }
    }
    frame.target.appendChild(target);
    if (source.childNodes.length) stack.push({source, target, index: 0});
  }
  return root;
}

export function waitForImage(image, signal) {
  checkAborted(signal);
  if (image.complete) {
    return image.naturalWidth ? Promise.resolve() : Promise.reject(new Error('Image failed to load'));
  }
  return new Promise((resolve, reject) => {
    const finish = (error) => {
      clearTimeout(timer);
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
      signal?.removeEventListener('abort', onAbort);
      if (error) reject(error); else resolve();
    };
    const onLoad = () => finish();
    const onError = () => finish(new Error('Image failed to load'));
    const onAbort = () => finish(new DOMException('Image generation cancelled', 'AbortError'));
    const timer = setTimeout(() => finish(new Error('Image loading timed out')), 15000);
    image.addEventListener('load', onLoad, {once: true});
    image.addEventListener('error', onError, {once: true});
    signal?.addEventListener('abort', onAbort, {once: true});
  });
}

export async function waitForFonts(container, signal) {
  // Trigger layout before consulting FontFaceSet.ready, including fonts used
  // only in the formerly hidden solution panel.
  void container.offsetHeight;
  if (!document.fonts) return;
  checkAborted(signal);
  await new Promise((resolve, reject) => {
    const finish = (error) => {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
      if (error) reject(error); else resolve();
    };
    const onAbort = () => finish(new DOMException('Image generation cancelled', 'AbortError'));
    const timer = setTimeout(() => finish(new Error('Font loading timed out')), 15000);
    signal?.addEventListener('abort', onAbort, {once: true});
    document.fonts.ready.then(() => finish(), finish);
  });
  checkAborted(signal);
}

function computedCss(style) {
  return SHARE_STYLE_PROPERTIES.map(name => `${name}:${style.getPropertyValue(name)};`).join('');
}

export async function fitDisplayMath(root, signal) {
  // Scrollable equations must fit the exported image instead of losing their
  // right-hand side. KaTeX uses em units, so reducing its base font scales the
  // entire formula without breaking fractions or matrix alignment.
  let count = 0;
  for (const display of root.querySelectorAll('.katex-display')) {
    checkAborted(signal);
    const math = display.querySelector('.katex');
    const html = math?.querySelector('.katex-html');
    const available = display.clientWidth;
    if (math && available > 0) {
      // Measure the intrinsic formula, not its scroll viewport. Centered
      // overflow otherwise understates the width of a long aligned equation.
      math.style.display = 'inline-block';
      math.style.width = 'max-content';
      math.style.maxWidth = 'none';
      display.style.overflow = 'visible';
      math.style.overflow = 'visible';
      if (html) html.style.overflow = 'visible';
      for (let attempt = 0; attempt < 3; attempt++) {
        const width = Math.max(math.scrollWidth, math.getBoundingClientRect().width, html?.scrollWidth || 0);
        if (width <= available) break;
        const size = parseFloat(window.getComputedStyle(math).fontSize);
        math.style.fontSize = `${size * available / width * 0.98}px`;
      }
    }
    if (++count % 20 === 0) await yieldToMain(signal);
  }
}

/** Freeze styles in small browser tasks before handing the snapshot to the
 * SVG encoder. html-to-image's own async clone uses only microtasks, so doing
 * all computed-style work inside that clone would still block user input. */
export async function snapshotStrip(source, signal) {
  const root = source.cloneNode(false);
  const stack = [{source, target: root}];
  let count = 0;
  while (stack.length) {
    checkAborted(signal);
    const {source: node, target} = stack.pop();
    if (node.nodeType === 1 && target.style) {
      target.style.cssText = computedCss(window.getComputedStyle(node));
      for (const pseudo of ['::before', '::after']) {
        const style = window.getComputedStyle(node, pseudo);
        const content = style.getPropertyValue('content');
        if (!content || content === 'none' || content === 'normal') continue;
        const className = `kai-share-pseudo-${count}-${pseudo.slice(2)}`;
        target.classList.add(className);
        const rule = source.ownerDocument.createElement('style');
        rule.textContent = `.${className}${pseudo}{${computedCss(style)}}`;
        target.appendChild(rule);
      }
    }
    const children = [];
    for (const child of node.childNodes) {
      const copy = child.cloneNode(false);
      target.appendChild(copy);
      children.push({source: child, target: copy});
    }
    for (let index = children.length - 1; index >= 0; index--) stack.push(children[index]);
    if (++count % 100 === 0) await yieldToMain(signal);
  }
  return root;
}

export function waitForCanvas(pending, signal) {
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(new DOMException('Image generation cancelled', 'AbortError'));
    signal?.addEventListener('abort', onAbort, {once: true});
    if (signal?.aborted) onAbort();
    pending.then(canvas => {
      signal?.removeEventListener('abort', onAbort);
      if (signal?.aborted) {
        // A SVG decode already in progress may finish after cancellation.
        canvas.width = 0;
        canvas.height = 0;
        return;
      }
      resolve(canvas);
    }, error => {
      signal?.removeEventListener('abort', onAbort);
      reject(error);
    });
  });
}

/** Render bounded strips sequentially and return ONE PNG, without retaining
 * intermediate PNGs, base64 strings, or page-sized canvas backing stores. */
export async function captureLongImage(strips, toCanvas, signal, onProgress = () => {}) {
  checkAborted(signal);
  // Source whitespace between large atomic formulas can form an empty strip.
  // A zero-height SVG cannot be decoded into a canvas in some browsers.
  strips = strips.filter(strip => strip.scrollHeight > 0);
  const widths = strips.map(strip => strip.offsetWidth);
  const heights = strips.map(strip => strip.scrollHeight);
  const width = Math.max(...widths);
  const height = heights.reduce((sum, value) => sum + value, 0);
  const ratio = getCapturePixelRatio(width, height);
  const output = document.createElement('canvas');
  output.width = Math.max(1, Math.floor(width * ratio));
  output.height = Math.max(1, Math.floor(height * ratio));
  try {
    const context = output.getContext('2d');
    if (!context) throw new Error('Canvas unavailable');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, output.width, output.height);
    let offset = 0;
    for (let index = 0; index < strips.length; index++) {
      onProgress(index, strips.length);
      const snapshot = await snapshotStrip(strips[index], signal);
      await yieldToMain(signal);
      let canvas;
      try {
        canvas = await waitForCanvas(toCanvas(snapshot, {
          width: widths[index], height: heights[index], pixelRatio: ratio,
          cacheBust: false, preferredFontFormat: 'woff2',
          // Do not abort the library's resource fetches: it caches failed
          // fetches as empty data, which would break subsequent retries.
          // waitForCanvas cancels our wait and frees any late result instead.
          // The detached snapshot already has computed styles, including
          // pseudo-elements. Do not expand all browser defaults a second time.
          includeStyleProperties: [],
          backgroundColor: '#ffffff',
          style: {position: 'static', left: 'auto', top: 'auto'},
        }), signal);
        checkAborted(signal);
        const top = Math.round(offset * ratio);
        offset += heights[index];
        const bottom = Math.min(output.height, Math.round(offset * ratio));
        context.drawImage(canvas, 0, top, output.width, bottom - top);
      } finally {
        if (canvas) { canvas.width = 0; canvas.height = 0; }
      }
      await yieldToMain(signal);
    }
    onProgress(strips.length, strips.length);
    const blob = await new Promise((resolve, reject) => {
      output.toBlob(result => result ? resolve(result) : reject(new Error('Image encoding failed')), 'image/png');
    });
    checkAborted(signal);
    return blob;
  } finally {
    output.width = 0;
    output.height = 0;
  }
}
