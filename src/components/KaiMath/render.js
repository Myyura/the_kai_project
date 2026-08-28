import katex from 'katex';
import 'katex/contrib/mhchem';

export const KAI_MATH_RENDER_OPTIONS = Object.freeze({
  output: 'htmlAndMathml',
  strict: false,
  throwOnError: true,
  trust: false,
});

/**
 * SSR, hydration, and SPA navigation all use this function, so every runtime
 * path shares one KaTeX instance (including mhchem) and one option set.
 */
export function renderKaiMathToString(source, displayMode = false) {
  return katex.renderToString(String(source ?? ''), {
    ...KAI_MATH_RENDER_OPTIONS,
    displayMode: displayMode === true,
  });
}

/**
 * Render a non-throwing KaTeX recovery for content that already exists in the
 * archive. Parse errors remain visible without turning them into new build
 * blockers.
 */
export function renderKaiMathFallbackToString(source, displayMode = false) {
  return katex.renderToString(String(source ?? ''), {
    ...KAI_MATH_RENDER_OPTIONS,
    displayMode: displayMode === true,
    strict: 'ignore',
    throwOnError: false,
  });
}
