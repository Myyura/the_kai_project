import React from 'react';
import {
  renderKaiMathFallbackToString,
  renderKaiMathToString,
} from './render.js';

const closingSpan = '</span>';

const resolveDisplayMode = (value) => (
  value === true || value === '' || value === 'true'
);

function unwrapKaTeXRoot(html, displayMode) {
  const className = displayMode ? 'katex-display' : 'katex';
  const openingSpan = `<span class="${className}">`;

  if (!html.startsWith(openingSpan) || !html.endsWith(closingSpan)) {
    throw new Error('KaTeX returned an unexpected root element.');
  }

  return {
    className,
    innerHtml: html.slice(openingSpan.length, -closingSpan.length),
  };
}

const joinClassNames = (...values) => values.filter(Boolean).join(' ');

const renderSuccessfulRoot = (html, displayMode, className, properties) => {
  const rendered = unwrapKaTeXRoot(html, displayMode);

  return React.createElement('span', {
    className: joinClassNames(rendered.className, className),
    ...properties,
    dangerouslySetInnerHTML: {__html: rendered.innerHtml},
  });
};

/**
 * Render compact TeX source at SSR time and again during hydration or SPA
 * navigation. The KaTeX root span is recreated by React so the successful
 * output is byte-for-byte identical to `katex.renderToString()` when no extra
 * DOM properties are supplied.
 */
function KaiMath({
  source = '',
  displayMode = false,
  className,
  ...properties
}) {
  const resolvedDisplayMode = resolveDisplayMode(displayMode);
  const resolvedSource = String(source ?? '');

  try {
    const html = renderKaiMathToString(resolvedSource, resolvedDisplayMode);
    return renderSuccessfulRoot(
      html,
      resolvedDisplayMode,
      className,
      properties,
    );
  } catch (error) {
    // Most parse failures still produce a complete htmlAndMathml tree. Keep
    // that accessible recovery output and its normal KaTeX root unchanged.
    try {
      const fallbackHtml = renderKaiMathFallbackToString(
        resolvedSource,
        resolvedDisplayMode,
      );
      return renderSuccessfulRoot(
        fallbackHtml,
        resolvedDisplayMode,
        className,
        properties,
      );
    } catch {
      // Some invalid expressions make KaTeX return its compact error span
      // instead. Recreate it with React to avoid introducing another wrapper.
    }

    return React.createElement(
      'span',
      {
        className: joinClassNames('katex-error', className),
        title: String(error),
        style: {color: '#cc0000'},
        ...properties,
      },
      resolvedSource,
    );
  }
}

export default React.memo(KaiMath);
