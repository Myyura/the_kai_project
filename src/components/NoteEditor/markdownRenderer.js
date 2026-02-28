/**
 * 轻量级 Markdown → HTML 转换器 + KaTeX 动态加载
 * 无需额外 npm 依赖，LaTeX 渲染通过 CDN 动态加载 KaTeX
 */

// ─── HTML 转义 ───────────────────────────────────────────────
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── URL 安全校验（防止 javascript: 等 XSS 协议） ──────────────
const SAFE_URL_PROTOCOLS = /^(?:https?|mailto|tel|ftp):/i;
const DATA_IMAGE_PATTERN = /^data:image\/[a-z+]+;base64,/i;

function sanitizeUrl(url) {
  const trimmed = url.trim();
  // 允许相对路径（以 / . # 开头或不含冒号）
  if (trimmed.startsWith('/') || trimmed.startsWith('.') || trimmed.startsWith('#') || !trimmed.includes(':')) {
    return escapeHtml(trimmed);
  }
  // 允许安全协议
  if (SAFE_URL_PROTOCOLS.test(trimmed)) {
    return escapeHtml(trimmed);
  }
  // 允许 base64 图片
  if (DATA_IMAGE_PATTERN.test(trimmed)) {
    return escapeHtml(trimmed);
  }
  // 拒绝其他协议（javascript:, vbscript:, data:text/html 等）
  return '';
}

// ─── 行内元素处理 ────────────────────────────────────────────
function processInline(text) {
  // 图片 ![alt](url) — URL 经过 sanitize 防止 XSS
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    const safeUrl = sanitizeUrl(url);
    if (!safeUrl) return escapeHtml(`![${alt}](${url})`);
    return `<img src="${safeUrl}" alt="${escapeHtml(alt)}" style="max-width:100%"/>`;
  });
  // 链接 [text](url) — URL 经过 sanitize 防止 XSS
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safeUrl = sanitizeUrl(url);
    if (!safeUrl) return escapeHtml(`[${label}](${url})`);
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
  });
  // 粗斜体 ***text***
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // 粗体 **text**
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // 斜体 *text*
  text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  // 删除线 ~~text~~
  text = text.replace(/~~(.+?)~~/g, '<del>$1</del>');
  return text;
}

// ─── Markdown → HTML 主函数 ──────────────────────────────────
export function markdownToHtml(text) {
  if (!text) return '';

  // 保护区块：代码块、数学块、行内代码、行内公式
  const blocks = [];

  let html = text;

  // 栅栏代码块 ```lang\n...\n```
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const idx = blocks.length;
    blocks.push(`<pre class="note-code-block"><code>${escapeHtml(code.trimEnd())}</code></pre>`);
    return `\n%%B${idx}%%\n`;
  });

  // 显示数学 $$...$$
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    const idx = blocks.length;
    blocks.push(`<div class="note-math-display" data-math="${encodeURIComponent(math.trim())}"></div>`);
    return `\n%%B${idx}%%\n`;
  });

  // 行内代码 `...`
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    const idx = blocks.length;
    blocks.push(`<code class="note-inline-code">${escapeHtml(code)}</code>`);
    return `%%B${idx}%%`;
  });

  // 行内数学 $...$（不匹配跨行、不匹配 $$）
  html = html.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, (_, math) => {
    const idx = blocks.length;
    blocks.push(`<span class="note-math-inline" data-math="${encodeURIComponent(math)}"></span>`);
    return `%%B${idx}%%`;
  });

  // 按行处理块级元素
  const lines = html.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 已保护的区块
    if (/^%%B\d+%%$/.test(line.trim())) {
      result.push(line.trim());
      i++;
      continue;
    }

    // 标题 # ~ ######
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      result.push(`<h${level}>${processInline(headerMatch[2])}</h${level}>`);
      i++;
      continue;
    }

    // 水平线
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      result.push('<hr/>');
      i++;
      continue;
    }

    // 引用块 >
    if (/^>\s?/.test(line)) {
      const quoteLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      result.push(`<blockquote>${quoteLines.map(l => processInline(l)).join('<br/>')}</blockquote>`);
      continue;
    }

    // 无序列表 - / * / +
    if (/^[-*+]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*+]\s+/, ''));
        i++;
      }
      result.push('<ul>' + items.map(it => `<li>${processInline(it)}</li>`).join('') + '</ul>');
      continue;
    }

    // 有序列表 1. 2. 3.
    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      result.push('<ol>' + items.map(it => `<li>${processInline(it)}</li>`).join('') + '</ol>');
      continue;
    }

    // 空行
    if (line.trim() === '') {
      i++;
      continue;
    }

    // 段落（合并连续非空行）
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^[-*+]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim()) &&
      !/^%%B\d+%%$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      result.push(`<p>${processInline(paraLines.join('<br/>'))}</p>`);
    }
  }

  html = result.join('\n');

  // 还原保护区块
  html = html.replace(/%%B(\d+)%%/g, (_, idx) => blocks[parseInt(idx)]);

  return html;
}

// ─── KaTeX 动态加载 ─────────────────────────────────────────
let katexPromise = null;

export function loadKaTeX() {
  if (typeof window === 'undefined') return Promise.reject();
  if (window.katex) return Promise.resolve(window.katex);
  if (katexPromise) return katexPromise;

  katexPromise = new Promise((resolve, reject) => {
    // 加载 CSS
    if (!document.querySelector('link[href*="katex"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }

    // 加载 JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve(window.katex);
    script.onerror = () => {
      katexPromise = null;
      reject(new Error('Failed to load KaTeX'));
    };
    document.head.appendChild(script);
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
        katex.render(math, el, { displayMode, throwOnError: false });
      } catch {
        el.textContent = math;
      }
    });
  } catch {
    // KaTeX 加载失败，显示原始公式
    mathElements.forEach((el) => {
      const math = decodeURIComponent(el.getAttribute('data-math'));
      el.textContent = displayPrefix(el) + math;
    });
  }
}

function displayPrefix(el) {
  return el.classList.contains('note-math-display') ? '$$' : '$';
}
