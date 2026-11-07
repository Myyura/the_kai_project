import {getCapturePixelRatio, waitForFonts, waitForImage, yieldToMain} from '../ShareAsImage/render';
import {checkAborted} from '../ShareAsImage/pagination';

const WIDTH = 800;
const PAGE_HEIGHT = 3600;
const ITEMS_PER_PAGE = 18;

const element = (tag, text, css = '') => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  node.style.cssText = css;
  return node;
};

function createPage(share, labels, logoUrl, pageNumber, pageCount) {
  const root = element('div', undefined, `position:absolute;left:-10000px;top:0;width:${WIDTH}px;padding:40px;box-sizing:border-box;background:#fff;color:#172a43;font:18px/1.7 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;overflow-wrap:anywhere;`);
  root.setAttribute('aria-hidden', 'true');
  const brand = element('div', undefined, 'display:flex;align-items:center;gap:14px;');
  const logo = element('img', undefined, 'width:42px;height:42px;');
  logo.src = logoUrl;
  logo.alt = 'The Kai Project';
  brand.append(logo, element('strong', 'The Kai Project', 'font-size:21px;'), element('span', labels.community, 'font-size:14px;color:#5e6e80;'));
  root.append(brand, element('h1', share.title, 'font-size:31px;line-height:1.4;margin:28px 0 18px;'));
  const description = element('div', undefined, 'background:#f0f5fc;border-left:4px solid #245bb0;padding:18px 20px;margin-bottom:20px;');
  description.append(element('strong', labels.description, 'display:block;color:#245bb0;font-size:15px;margin-bottom:7px;'), element('div', share.description || labels.noDescription, 'white-space:pre-wrap;font-size:19px;line-height:1.8;'));
  root.append(description);
  const author = element('div', undefined, 'display:flex;align-items:center;gap:14px;margin:18px 0;');
  const name = share.author?.displayName || labels.author;
  author.append(element('div', Array.from(name)[0] || 'K', 'width:44px;height:44px;flex:none;display:flex;justify-content:center;align-items:center;border-radius:50%;background:#edf3fc;color:#245bb0;font-weight:700;'));
  const attribution = element('div');
  attribution.append(element('strong', `${labels.curatedBy} · ${name}`, 'display:block;font-size:17px;'));
  if (share.author?.publicId) attribution.append(element('small', `${labels.publicId} · ${share.author.publicId}`, 'display:block;font-size:13px;color:#5e6e80;'));
  author.append(attribution);
  root.append(author, element('div', `${labels.allItems} · ${labels.count(share.items.length)}`, 'font-size:15px;color:#5e6e80;margin:20px 0 10px;'));
  const list = element('div');
  const footer = element('div', undefined, 'border-top:3px solid #245bb0;margin-top:22px;padding-top:18px;');
  footer.append(element('div', labels.shareCode, 'font-size:14px;color:#5e6e80;'), element('strong', share.code, 'display:block;font:700 26px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace;color:#245bb0;margin:4px 0;'));
  const bottom = element('div', undefined, 'display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px;color:#5e6e80;');
  bottom.append(element('span', labels.published(share.version)), element('span', labels.page(pageNumber, pageCount)));
  footer.append(bottom);
  root.append(list, footer);
  return {root, list, logo};
}

function createRow(item, index, labels, includeAnnotations) {
  const row = element('div', undefined, 'display:flex;align-items:flex-start;gap:14px;border-top:1px solid #dce4ee;padding:18px 0;');
  row.append(element('span', String(index + 1).padStart(2, '0'), 'color:#245bb0;min-width:32px;flex:none;font:16px/1.7 ui-monospace,monospace;'));
  const content = element('div', undefined, 'min-width:0;flex:1;');
  content.append(element('strong', item.title || item.docId, 'display:block;font-size:19px;line-height:1.6;'));
  if (includeAnnotations !== false) content.append(element('div', item.annotation?.trim() ? item.annotation : labels.noAnnotation, 'white-space:pre-wrap;font-size:16px;line-height:1.7;margin-top:7px;color:#5e6e80;'));
  if (item.contentAvailable === false) content.append(element('small', labels.unavailableItem, 'display:block;color:#9b3040;font-size:13px;margin-top:5px;'));
  row.append(content);
  return row;
}

/** Lay out a bounded page at a time; render only the page the user requests. */
export async function prepareProblemSetShareImages({share, labels, logoUrl, signal}) {
  checkAborted(signal);
  const pages = [];
  const measuring = createPage(share, labels, logoUrl, 999, 999);
  let current = [];
  document.body.appendChild(measuring.root);
  try {
    await Promise.all([waitForImage(measuring.logo, signal), waitForFonts(measuring.root, signal)]);
    for (let index = 0; index < share.items.length; index++) {
      checkAborted(signal);
      const row = createRow(share.items[index], index, labels, share.includeAnnotations);
      measuring.list.appendChild(row);
      if (current.length && (measuring.root.scrollHeight > PAGE_HEIGHT || current.length >= ITEMS_PER_PAGE)) {
        pages.push(current);
        current = [];
        measuring.list.replaceChildren(row);
      }
      current.push(index);
      // A pathological single row must fail explicitly, never disappear or clip.
      if (measuring.root.scrollHeight > PAGE_HEIGHT) throw new Error('problem_set_share_image_page_too_tall');
      if (index % 20 === 0) await yieldToMain(signal);
    }
    if (current.length || !pages.length) pages.push(current);
  } finally {
    measuring.root.remove();
  }
  checkAborted(signal);
  let disposed = false;
  let rendering = false;
  let mounted = null;
  const safeName = share.title.replace(/[^a-zA-Z0-9\u4e00-\u9fff\u3040-\u30ff-]+/g, '_').slice(0, 70) || 'kai-problem-set';
  return {
    pageCount: pages.length,
    dispose() { disposed = true; mounted?.remove(); },
    async renderPage(index, renderSignal = signal) {
      checkAborted(renderSignal);
      if (disposed) throw new DOMException('Image generation cancelled', 'AbortError');
      if (rendering || !Number.isInteger(index) || !pages[index]) throw new Error('Invalid share image page');
      rendering = true;
      const page = createPage(share, labels, logoUrl, index + 1, pages.length);
      let canvas;
      try {
        for (const itemIndex of pages[index]) page.list.appendChild(createRow(share.items[itemIndex], itemIndex, labels, share.includeAnnotations));
        document.body.appendChild(page.root);
        mounted = page.root;
        await Promise.all([waitForImage(page.logo, renderSignal), waitForFonts(page.root, renderSignal)]);
        const {toCanvas} = await import('html-to-image');
        checkAborted(renderSignal);
        const height = page.root.scrollHeight;
        canvas = await toCanvas(page.root, {
          width: WIDTH,
          height,
          pixelRatio: getCapturePixelRatio(WIDTH, height),
          backgroundColor: '#fff',
          cacheBust: false,
          skipFonts: true,
          // The measuring surface lives off-screen; its captured clone must not.
          style: {position: 'static', left: 'auto', top: 'auto'},
        });
        checkAborted(renderSignal);
        if (disposed) throw new DOMException('Image generation cancelled', 'AbortError');
        const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Image encoding failed')), 'image/png'));
        checkAborted(renderSignal);
        return {blob, filename: `${safeName}-V${share.version}-${index + 1}-${pages.length}.png`};
      } finally {
        if (canvas) { canvas.width = 0; canvas.height = 0; }
        page.root.remove();
        mounted = null;
        rendering = false;
      }
    },
  };
}
