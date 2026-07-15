export type CorrectionChange = {
  oldStart: number;
  oldLines: string[];
  newLines: string[];
};

type DiffEntry = {
  type: 'context' | 'delete' | 'insert';
  line: string;
};

export function normalizeMarkdown(value: string) {
  return String(value || '').replace(/\r\n?/g, '\n');
}

function createLineDiff(originalValue: string, proposedValue: string) {
  const original = normalizeMarkdown(originalValue).split('\n');
  const proposed = normalizeMarkdown(proposedValue).split('\n');
  const table = Array.from(
    { length: original.length + 1 },
    () => new Uint32Array(proposed.length + 1),
  );

  for (let oldIndex = original.length - 1; oldIndex >= 0; oldIndex -= 1) {
    for (let newIndex = proposed.length - 1; newIndex >= 0; newIndex -= 1) {
      table[oldIndex][newIndex] = original[oldIndex] === proposed[newIndex]
        ? table[oldIndex + 1][newIndex + 1] + 1
        : Math.max(table[oldIndex + 1][newIndex], table[oldIndex][newIndex + 1]);
    }
  }

  const entries: DiffEntry[] = [];
  let oldIndex = 0;
  let newIndex = 0;
  while (oldIndex < original.length && newIndex < proposed.length) {
    if (original[oldIndex] === proposed[newIndex]) {
      entries.push({ type: 'context', line: original[oldIndex] });
      oldIndex += 1;
      newIndex += 1;
    } else if (table[oldIndex + 1][newIndex] >= table[oldIndex][newIndex + 1]) {
      entries.push({ type: 'delete', line: original[oldIndex] });
      oldIndex += 1;
    } else {
      entries.push({ type: 'insert', line: proposed[newIndex] });
      newIndex += 1;
    }
  }
  while (oldIndex < original.length) {
    entries.push({ type: 'delete', line: original[oldIndex] });
    oldIndex += 1;
  }
  while (newIndex < proposed.length) {
    entries.push({ type: 'insert', line: proposed[newIndex] });
    newIndex += 1;
  }

  return entries;
}

export function buildLineChanges(originalValue: string, proposedValue: string) {
  const entries = createLineDiff(originalValue, proposedValue);
  const changes: CorrectionChange[] = [];
  let oldCursor = 0;
  let pending: CorrectionChange | null = null;

  const flush = () => {
    if (!pending) return;
    changes.push(pending);
    pending = null;
  };

  for (const entry of entries) {
    if (entry.type === 'context') {
      flush();
      oldCursor += 1;
      continue;
    }
    if (!pending) {
      pending = { oldStart: oldCursor, oldLines: [], newLines: [] };
    }
    if (entry.type === 'delete') {
      pending.oldLines.push(entry.line);
      oldCursor += 1;
    } else {
      pending.newLines.push(entry.line);
    }
  }
  flush();
  return changes;
}

export function formatUnifiedDiff(
  originalValue: string,
  proposedValue: string,
  sourcePath: string,
  contextLines = 3,
) {
  const entries = createLineDiff(originalValue, proposedValue);
  const changedIndexes = entries
    .map((entry, index) => (entry.type === 'context' ? -1 : index))
    .filter((index) => index >= 0);
  if (changedIndexes.length === 0) return '';

  const ranges: Array<{ start: number; end: number }> = [];
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

  const output = [`--- a/${sourcePath}`, `+++ b/${sourcePath}`];
  for (const { start, end } of ranges) {
    const before = entries.slice(0, start);
    const lines = entries.slice(start, end);
    const oldBefore = before.filter((entry) => entry.type !== 'insert').length;
    const newBefore = before.filter((entry) => entry.type !== 'delete').length;
    const oldCount = lines.filter((entry) => entry.type !== 'insert').length;
    const newCount = lines.filter((entry) => entry.type !== 'delete').length;
    const oldStart = oldCount === 0 ? oldBefore : oldBefore + 1;
    const newStart = newCount === 0 ? newBefore : newBefore + 1;
    output.push(`@@ -${oldStart},${oldCount} +${newStart},${newCount} @@`);
    for (const entry of lines) {
      const prefix = entry.type === 'insert' ? '+' : entry.type === 'delete' ? '-' : ' ';
      output.push(`${prefix}${entry.line}`);
    }
  }
  return output.join('\n');
}
