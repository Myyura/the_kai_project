const IGNORABLE_TEXT = /[\s\u200B-\u200D\uFEFF]/u;

export const canonicalizeAnnotationText = (value) => String(value || '')
  .replace(/[\u200B-\u200D\uFEFF]/gu, '')
  .replace(/\s+/gu, ' ')
  .trim();

const allOccurrences = (source, query) => {
  const offsets = [];
  let from = 0;
  while (from <= source.length - query.length) {
    const start = source.indexOf(query, from);
    if (start < 0) break;
    offsets.push({start, end: start + query.length});
    from = start + 1;
  }
  return offsets;
};

const compactWithOffsets = (value) => {
  let text = '';
  const positions = [];

  for (let offset = 0; offset < value.length;) {
    const codePoint = value.codePointAt(offset);
    const character = String.fromCodePoint(codePoint);
    const end = offset + character.length;
    if (!IGNORABLE_TEXT.test(character)) {
      text += character;
      for (let unit = 0; unit < character.length; unit += 1) {
        positions.push({start: offset, end});
      }
    }
    offset = end;
  }

  return {text, positions};
};

/**
 * Locate an annotation inside rendered text. Exact matching remains the
 * primary strategy; the compact form only bridges whitespace inserted by
 * tables, line breaks, and formula layout nodes.
 */
export const findAnnotationTextOffsets = (fullText, exact) => {
  const source = String(fullText || '');
  const query = String(exact || '');
  if (!source || !query) return [];

  const direct = allOccurrences(source, query);
  if (direct.length > 0) return direct;

  const compactSource = compactWithOffsets(source);
  const compactQuery = compactWithOffsets(query).text;
  if (!compactSource.text || !compactQuery) return [];

  return allOccurrences(compactSource.text, compactQuery).map(({start, end}) => ({
    start: compactSource.positions[start].start,
    end: compactSource.positions[end - 1].end,
  }));
};
