/**
 * Markdown → HTML using markdown-it + KaTeX for math rendering
 * Supports: headers, nested lists, tables, blockquotes, fenced code,
 *           strikethrough, links, images, inline/block math
 */

import MarkdownIt from 'markdown-it';
import {drawSmiles, getDocumentColorMode} from '@site/src/components/Chemistry/smilesRenderer';

const MAX_SMILES_PER_CONTAINER = 24;

// ─── URL 安全校验（防止 javascript: 等 XSS 协议） ──────────────
const SAFE_PROTOCOLS = /^(?:https?|mailto|tel|ftp):/i;
const DATA_IMAGE = /^data:image\/(?:png|jpe?g|gif|webp);base64,[a-z0-9+/]+=*$/i;

function sanitizeUrl(url) {
  const s = (url || '').trim();
  if (!s) return null;
  if (!s.includes(':') || s.startsWith('/') || s.startsWith('.') || s.startsWith('#')) return s;
  if (SAFE_PROTOCOLS.test(s) || DATA_IMAGE.test(s)) return s;
  return null; // 拒绝 javascript:, vbscript:, data:text/html 等危险协议
}

// ─── markdown-it 实例 ────────────────────────────────────────
const md = new MarkdownIt({
  html: false,        // 禁止用户输入原始 HTML（XSS 防护）
  linkify: true,      // 自动将纯 URL 转为链接
  typographer: false,
  breaks: true,       // 单换行 → <br>（与原行为一致）
});

// 链接：加 target="_blank" + rel，并清理 URL
const _origLinkOpen = md.renderer.rules.link_open
  || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const hrefIdx = token.attrIndex('href');
  if (hrefIdx >= 0) {
    const safe = sanitizeUrl(token.attrs[hrefIdx][1]);
    token.attrs[hrefIdx][1] = safe !== null ? safe : '#';
  }
  token.attrSet('target', '_blank');
  token.attrSet('rel', 'noopener noreferrer');
  return _origLinkOpen(tokens, idx, options, env, self);
};

// 图片：清理 src，限制最大宽度
md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx];
  const srcIdx = token.attrIndex('src');
  const rawSrc = srcIdx >= 0 ? token.attrs[srcIdx][1] : '';
  const safeSrc = sanitizeUrl(rawSrc);
  const alt = token.children
    ? token.children.reduce((acc, t) => acc + (t.content || ''), '')
    : '';
  const escapedSrc = safeSrc ? md.utils.escapeHtml(safeSrc) : '';
  const escapedAlt = md.utils.escapeHtml(alt);
  return `<img src="${escapedSrc}" alt="${escapedAlt}" style="max-width:100%"/>`;
};

// 代码块：保持原有 CSS 类名
md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];
  const info = token.info ? token.info.trim() : '';
  const language = info.split(/\s+/, 1)[0].toLowerCase();

  if (language === 'smiles') {
    const smiles = token.content.trim();
    const encodedSmiles = encodeURIComponent(smiles);
    const escapedSmiles = md.utils.escapeHtml(smiles);
    const ariaLabel = md.utils.escapeHtml(`Chemical structure: ${smiles}`);
    return [
      `<figure class="note-smiles-figure" data-smiles="${encodedSmiles}" data-smiles-state="loading">`,
      '<div class="note-smiles-surface">',
      `<svg class="note-smiles-structure" role="img" aria-label="${ariaLabel}"></svg>`,
      '<span class="note-smiles-status" role="status">Rendering structure…</span>',
      '</div>',
      `<figcaption class="note-smiles-caption"><code>${escapedSmiles}</code></figcaption>`,
      '</figure>\n',
    ].join('');
  }

  const lang = token.info ? ` class="language-${md.utils.escapeHtml(token.info.trim())}"` : '';
  const code = md.utils.escapeHtml(token.content.trimEnd());
  return `<pre class="note-code-block"><code${lang}>${code}</code></pre>\n`;
};

md.renderer.rules.code_block = (tokens, idx) => {
  const code = md.utils.escapeHtml(tokens[idx].content.trimEnd());
  return `<pre class="note-code-block"><code>${code}</code></pre>\n`;
};

// 行内代码：保持原有 CSS 类名
md.renderer.rules.code_inline = (tokens, idx) => {
  const code = md.utils.escapeHtml(tokens[idx].content);
  return `<code class="note-inline-code">${code}</code>`;
};

// ─── Markdown → HTML 主函数 ──────────────────────────────────
export function markdownToHtml(text) {
  if (!text) return '';

  const mathBlocks = [];
  let src = text;

  // 1. 保护 Docusaurus 文档常用的 \[...\] 块级公式
  src = src.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(`<div class="note-math-display" data-math="${encodeURIComponent(math.trim())}"></div>`);
    return `\n\nMD_MATH_BLOCK_${idx}\n\n`;
  });

  // 2. 保护 \(...\) 行内公式
  src = src.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(`<span class="note-math-inline" data-math="${encodeURIComponent(math)}"></span>`);
    return `MD_MATH_INLINE_${idx}`;
  });

  // 3. 保护显示数学公式 $$...$$（多行支持），用空行隔离使其成为独立块
  src = src.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(`<div class="note-math-display" data-math="${encodeURIComponent(math.trim())}"></div>`);
    return `\n\nMD_MATH_BLOCK_${idx}\n\n`;
  });

  // 4. 保护行内数学公式 $...$（单行，不匹配 $$）
  src = src.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(`<span class="note-math-inline" data-math="${encodeURIComponent(math)}"></span>`);
    return `MD_MATH_INLINE_${idx}`;
  });

  // 5. 通过 markdown-it 渲染（支持表格、嵌套列表等）
  let html = md.render(src);

  // 6. 还原块级数学公式（markdown-it 将其包裹为 <p>MD_MATH_BLOCK_N</p>）
  html = html.replace(/<p>\s*MD_MATH_BLOCK_(\d+)\s*<\/p>/g, (_, i) => mathBlocks[parseInt(i)]);
  html = html.replace(/MD_MATH_BLOCK_(\d+)/g, (_, i) => mathBlocks[parseInt(i)]);

  // 7. 还原行内数学公式
  html = html.replace(/MD_MATH_INLINE_(\d+)/g, (_, i) => mathBlocks[parseInt(i)]);

  return html;
}

// ─── KaTeX + mhchem 动态加载 ────────────────────────────────
let katexPromise = null;

export function loadKaTeX() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('KaTeX is only loaded in the browser.'));
  }
  if (katexPromise) return katexPromise;

  katexPromise = Promise.all([
    import('katex'),
    import('katex/contrib/mhchem'),
  ]).then(([katexModule]) => katexModule.default || katexModule)
    .catch((error) => {
      katexPromise = null;
      throw error;
    });

  return katexPromise;
}

/**
 * 渲染容器内所有 data-math 元素
 * @param {HTMLElement} container
 */
export async function renderMathInContainer(container) {
  if (!container) return;
  const mathElements = container.querySelectorAll('[data-math]');
  if (mathElements.length === 0) return;

  try {
    const katex = await loadKaTeX();
    mathElements.forEach((el) => {
      const math = decodeURIComponent(el.getAttribute('data-math'));
      const displayMode = el.classList.contains('note-math-display');
      try {
        katex.render(math, el, {
          displayMode,
          throwOnError: false,
          strict: false,
          trust: false,
          maxSize: 20,
          maxExpand: 1000,
        });
      } catch {
        el.textContent = math;
      }
    });
  } catch {
    // KaTeX 加载失败，显示原始公式
    mathElements.forEach((el) => {
      const math = decodeURIComponent(el.getAttribute('data-math'));
      el.textContent = displaySource(el, math);
    });
  }
}

/**
 * 渲染容器内由 ```smiles fenced block 生成的结构式占位符。
 * @param {HTMLElement} container
 * @param {'light'|'dark'} [theme]
 */
export async function renderSmilesInContainer(container, theme = getDocumentColorMode()) {
  if (!container) return;
  const figures = Array.from(container.querySelectorAll('[data-smiles]'));
  if (figures.length === 0) return;

  const renderable = figures.slice(0, MAX_SMILES_PER_CONTAINER);
  figures.slice(MAX_SMILES_PER_CONTAINER).forEach((figure) => {
    figure.dataset.smilesState = 'error';
    const status = figure.querySelector('.note-smiles-status');
    if (status) status.textContent = 'Too many SMILES structures in one preview.';
  });

  await Promise.all(renderable.map(async (figure) => {
    const svg = figure.querySelector('.note-smiles-structure');
    const status = figure.querySelector('.note-smiles-status');
    figure.setAttribute('aria-busy', 'true');

    try {
      const smiles = decodeURIComponent(figure.getAttribute('data-smiles') || '');
      const result = await drawSmiles(svg, smiles, theme, {
        isCurrent: () => figure.isConnected && container.contains(figure),
      });
      if (!result) return;
      figure.dataset.smilesState = 'ready';
      figure.removeAttribute('aria-busy');
      if (status) status.hidden = true;
    } catch {
      figure.dataset.smilesState = 'error';
      figure.removeAttribute('aria-busy');
      if (status) {
        status.hidden = false;
        status.setAttribute('role', 'alert');
        status.textContent = 'Unable to render this SMILES structure.';
      }
    }
  }));
}

function displaySource(el, math) {
  return el.classList.contains('note-math-display') ? `$$${math}$$` : `$${math}$`;
}
