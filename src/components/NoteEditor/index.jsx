import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaPen, FaEye, FaChevronDown, FaChevronUp,
  FaBold, FaItalic, FaHeading, FaCode, FaListUl, FaQuoteLeft,
} from 'react-icons/fa';
import { useDocNotes } from '@site/src/hooks/useNotes';
import { markdownToHtml, renderMathInContainer } from './markdownRenderer';
import styles from './styles.module.css';

// ─── 多语言标签 ──────────────────────────────────────────────
const LABELS = {
  zh: {
    heading: '笔记',
    edit: '编辑',
    preview: '预览',
    placeholder: '在此输入笔记，支持 Markdown 和 LaTeX 语法…\n\n示例：\n## 解题思路\n由 $f(x) = x^2$ 可得…\n\n$$\\int_0^1 f(x)\\,dx$$',
    saved: '已保存',
    lastSaved: (s) => `${s}前保存`,
    expand: '展开笔记',
    collapse: '收起笔记',
    empty: '暂无笔记，切换到编辑模式开始记录',
    charCount: (n) => `${n} 字`,
  },
  ja: {
    heading: 'ノート',
    edit: '編集',
    preview: 'プレビュー',
    placeholder: 'ここにノートを入力（Markdown・LaTeX 対応）…\n\n例：\n## 解法メモ\n$f(x) = x^2$ より…\n\n$$\\int_0^1 f(x)\\,dx$$',
    saved: '保存済み',
    lastSaved: (s) => `${s}前に保存`,
    expand: 'ノートを展開',
    collapse: 'ノートを折りたたむ',
    empty: 'ノートはまだありません。編集モードで入力してください',
    charCount: (n) => `${n} 文字`,
  },
};

const getLanguage = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

// ─── 时间格式化 ──────────────────────────────────────────────
function formatTimeSince(timestamp, lang) {
  if (!timestamp) return '';
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 5) return lang === 'ja' ? 'たった今' : '刚刚';
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

// ─── 工具栏操作定义 ──────────────────────────────────────────
const TOOLBAR_ACTIONS = [
  { key: 'bold', Icon: FaBold, before: '**', after: '**', placeholder: 'bold' },
  { key: 'italic', Icon: FaItalic, before: '*', after: '*', placeholder: 'italic' },
  { key: 'heading', Icon: FaHeading, before: '## ', after: '', placeholder: '', lineStart: true },
  { key: 'code', Icon: FaCode, before: '`', after: '`', placeholder: 'code' },
  { key: 'quote', Icon: FaQuoteLeft, before: '> ', after: '', placeholder: '', lineStart: true },
  { key: 'list', Icon: FaListUl, before: '- ', after: '', placeholder: '', lineStart: true },
  { key: 'math', label: '$', before: '$', after: '$', placeholder: 'x^2' },
  { key: 'displayMath', label: '$$', before: '\n$$\n', after: '\n$$\n', placeholder: '\\int_0^1 f(x)\\,dx' },
];

// ─── 主组件 ──────────────────────────────────────────────────
export default function NoteEditor({ docId }) {
  const { content, updatedAt, saveNote } = useDocNotes(docId);
  const [text, setText] = useState(content);
  const [mode, setMode] = useState('edit');
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState(getLanguage);
  const [saveFlash, setSaveFlash] = useState(false);

  const textareaRef = useRef(null);
  const previewRef = useRef(null);
  const saveTimerRef = useRef(null);
  const textRef = useRef(text);
  textRef.current = text;

  const t = LABELS[lang] ?? LABELS.zh;

  // 外部数据同步（其他标签页修改等）
  useEffect(() => {
    setText(content);
  }, [content]);

  // 语言切换监听
  useEffect(() => {
    const handler = () => setLang(getLanguage());
    window.addEventListener('languageChange', handler);
    return () => window.removeEventListener('languageChange', handler);
  }, []);

  // 有内容时自动展开
  useEffect(() => {
    if (content) setExpanded(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 卸载时刷新未保存的内容
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
        saveNote(textRef.current);
      }
    };
  }, [saveNote]);

  // ─── 防抖保存 ────────────────────────────────────────────
  const handleChange = useCallback(
    (e) => {
      const val = e.target.value;
      setText(val);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        saveNote(val);
        setSaveFlash(true);
        setTimeout(() => setSaveFlash(false), 1500);
      }, 600);
    },
    [saveNote]
  );

  // ─── 预览渲染 ────────────────────────────────────────────
  useEffect(() => {
    if (mode === 'preview' && previewRef.current) {
      const html = markdownToHtml(text);
      previewRef.current.innerHTML = html;
      renderMathInContainer(previewRef.current);
    }
  }, [mode, text]);

  // ─── 工具栏插入 ──────────────────────────────────────────
  const handleToolbar = useCallback(
    (action) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const { selectionStart, selectionEnd, value } = textarea;
      const selected = value.substring(selectionStart, selectionEnd);
      const replacement = selected || action.placeholder;

      let newValue, cursorStart, cursorEnd;

      if (action.lineStart) {
        const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
        newValue =
          value.substring(0, lineStart) +
          action.before +
          value.substring(lineStart);
        cursorStart = selectionStart + action.before.length;
        cursorEnd = selectionEnd + action.before.length;
      } else {
        newValue =
          value.substring(0, selectionStart) +
          action.before +
          replacement +
          action.after +
          value.substring(selectionEnd);
        cursorStart = selectionStart + action.before.length;
        cursorEnd = cursorStart + replacement.length;
      }

      setText(newValue);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        saveNote(newValue);
        setSaveFlash(true);
        setTimeout(() => setSaveFlash(false), 1500);
      }, 600);

      requestAnimationFrame(() => {
        textarea.focus();
        textarea.setSelectionRange(cursorStart, cursorEnd);
      });
    },
    [saveNote]
  );

  // ─── Tab 缩进支持 ────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const textarea = textareaRef.current;
        if (!textarea) return;
        const { selectionStart, selectionEnd, value } = textarea;
        const newValue =
          value.substring(0, selectionStart) + '  ' + value.substring(selectionEnd);
        setText(newValue);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 2;
        });
      }
    },
    []
  );

  const hasContent = text.trim().length > 0;

  return (
    <div className={styles.noteContainer}>
      {/* 折叠/展开头部 */}
      <button
        className={styles.noteToggle}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span className={styles.noteToggleLeft}>
          <FaPen className={styles.noteIcon} />
          <span className={styles.noteHeading}>{t.heading}</span>
          {hasContent && !expanded && (
            <span className={styles.noteBadge}>{t.charCount(text.trim().length)}</span>
          )}
        </span>
        {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>

      {/* 展开区域 */}
      {expanded && (
        <div className={styles.noteBody}>
          {/* 工具栏 */}
          <div className={styles.noteToolbar}>
            <div className={styles.toolbarLeft}>
              {TOOLBAR_ACTIONS.map((action) => (
                <button
                  key={action.key}
                  className={styles.toolbarBtn}
                  onClick={() => handleToolbar(action)}
                  title={action.key}
                  disabled={mode !== 'edit'}
                >
                  {action.Icon ? <action.Icon size={13} /> : <span>{action.label}</span>}
                </button>
              ))}
            </div>
            <div className={styles.toolbarRight}>
              <button
                className={`${styles.modeBtn} ${mode === 'edit' ? styles.modeBtnActive : ''}`}
                onClick={() => setMode('edit')}
              >
                <FaPen size={11} />
                <span>{t.edit}</span>
              </button>
              <button
                className={`${styles.modeBtn} ${mode === 'preview' ? styles.modeBtnActive : ''}`}
                onClick={() => setMode('preview')}
              >
                <FaEye size={11} />
                <span>{t.preview}</span>
              </button>
            </div>
          </div>

          {/* 编辑/预览区域 */}
          {mode === 'edit' ? (
            <textarea
              ref={textareaRef}
              className={styles.noteTextarea}
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              rows={10}
              spellCheck={false}
            />
          ) : (
            <div ref={previewRef} className={styles.notePreview}>
              {!hasContent && (
                <span className={styles.emptyPreview}>{t.empty}</span>
              )}
            </div>
          )}

          {/* 底部状态栏 */}
          <div className={styles.noteFooter}>
            {updatedAt && (
              <span className={`${styles.saveIndicator} ${saveFlash ? styles.saveFlash : ''}`}>
                ✓ {t.lastSaved(formatTimeSince(updatedAt, lang))}
              </span>
            )}
            {hasContent && (
              <span className={styles.charCount}>
                {t.charCount(text.trim().length)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
