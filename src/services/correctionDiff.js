function normalizeMarkdown(value) {
  return String(value || '').replace(/\r\n?/g, '\n');
}

function appendEntry(entries, type, line, oldLine, newLine) {
  entries.push({ type, line, oldLine, newLine });
}

export function createLineDiff(originalValue, proposedValue) {
  const original = normalizeMarkdown(originalValue).split('\n');
  const proposed = normalizeMarkdown(proposedValue).split('\n');
  const rows = original.length + 1;
  const columns = proposed.length + 1;
  const table = Array.from({ length: rows }, () => new Uint32Array(columns));

  for (let oldIndex = original.length - 1; oldIndex >= 0; oldIndex -= 1) {
    for (let newIndex = proposed.length - 1; newIndex >= 0; newIndex -= 1) {
      table[oldIndex][newIndex] = original[oldIndex] === proposed[newIndex]
        ? table[oldIndex + 1][newIndex + 1] + 1
        : Math.max(table[oldIndex + 1][newIndex], table[oldIndex][newIndex + 1]);
    }
  }

  const entries = [];
  let oldIndex = 0;
  let newIndex = 0;
  let oldLine = 1;
  let newLine = 1;

  while (oldIndex < original.length && newIndex < proposed.length) {
    if (original[oldIndex] === proposed[newIndex]) {
      appendEntry(entries, 'context', original[oldIndex], oldLine, newLine);
      oldIndex += 1;
      newIndex += 1;
      oldLine += 1;
      newLine += 1;
    } else if (table[oldIndex + 1][newIndex] >= table[oldIndex][newIndex + 1]) {
      appendEntry(entries, 'delete', original[oldIndex], oldLine, null);
      oldIndex += 1;
      oldLine += 1;
    } else {
      appendEntry(entries, 'insert', proposed[newIndex], null, newLine);
      newIndex += 1;
      newLine += 1;
    }
  }

  while (oldIndex < original.length) {
    appendEntry(entries, 'delete', original[oldIndex], oldLine, null);
    oldIndex += 1;
    oldLine += 1;
  }
  while (newIndex < proposed.length) {
    appendEntry(entries, 'insert', proposed[newIndex], null, newLine);
    newIndex += 1;
    newLine += 1;
  }

  return entries;
}

export function buildDiffPreview(originalValue, proposedValue, contextLines = 3) {
  const entries = createLineDiff(originalValue, proposedValue);
  const changedIndexes = entries
    .map((entry, index) => (entry.type === 'context' ? -1 : index))
    .filter((index) => index >= 0);
  const additions = entries.filter((entry) => entry.type === 'insert').length;
  const deletions = entries.filter((entry) => entry.type === 'delete').length;

  if (changedIndexes.length === 0) {
    return { additions: 0, deletions: 0, hunks: [] };
  }

  const ranges = [];
  for (const index of changedIndexes) {
    const start = Math.max(0, index - contextLines);
    const end = Math.min(entries.length, index + contextLines + 1);
    const previous = ranges[ranges.length - 1];
    if (previous && start <= previous.end) {
      previous.end = Math.max(previous.end, end);
    } else {
      ranges.push({ start, end });
    }
  }

  const hunks = ranges.map(({ start, end }) => {
    const before = entries.slice(0, start);
    const lines = entries.slice(start, end);
    const oldBefore = before.filter((entry) => entry.type !== 'insert').length;
    const newBefore = before.filter((entry) => entry.type !== 'delete').length;
    const oldCount = lines.filter((entry) => entry.type !== 'insert').length;
    const newCount = lines.filter((entry) => entry.type !== 'delete').length;
    const oldStart = oldCount === 0 ? oldBefore : oldBefore + 1;
    const newStart = newCount === 0 ? newBefore : newBefore + 1;

    return {
      header: `@@ -${oldStart},${oldCount} +${newStart},${newCount} @@`,
      lines,
    };
  });

  return { additions, deletions, hunks };
}

export function markdownHasChanges(originalValue, proposedValue) {
  return normalizeMarkdown(originalValue) !== normalizeMarkdown(proposedValue);
}
