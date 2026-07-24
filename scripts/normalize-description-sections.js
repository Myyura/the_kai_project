#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const CANONICAL_HEADING = '## **Description**';

function parseDescriptionHeading(line) {
  if (!/^##\s+/.test(line)) return null;

  let title = line.replace(/^##\s+/, '').trim();
  if (title.startsWith('**') && title.endsWith('**')) {
    title = title.slice(2, -2).trim();
  }
  title = title.normalize('NFKC');

  const match = /^Description(.*)$/i.exec(title);
  if (!match) return null;

  const detail = match[1].trim();
  if (detail && !detail.startsWith('(')) return null;
  return {detail};
}

function languageLabel(detail, fallback) {
  const normalized = detail.toLocaleLowerCase();
  if (normalized.includes('日本語') || normalized.includes('japanese')) {
    return '日本語';
  }
  if (normalized.includes('english')) {
    return normalized.includes('ai translated')
      ? 'English (AI translated)'
      : 'English';
  }
  return fallback;
}

function memorizedLabel(detail) {
  const normalized = detail.toLocaleLowerCase();
  if (!normalized.includes('memorized version')) return null;
  return normalized.includes('english')
    ? 'Memorized version (English)'
    : 'Memorized version';
}

function isLanguageHeading(line) {
  return /^###\s+(?:日本語(?:版)?|English(?: Version)?(?: \(AI translated\))?|Japanese(?: Version)?|中文(?:版)?)\s*$/i.test(
    line,
  );
}

function fencedLineMap(lines) {
  const result = [];
  let fence = null;

  lines.forEach((line, index) => {
    result[index] = Boolean(fence);
    const match = /^\s*(`{3,}|~{3,})/.exec(line);
    if (!match) return;

    const marker = match[1][0];
    if (!fence) {
      fence = marker;
      return;
    }
    if (fence === marker) {
      fence = null;
    }
  });

  return result;
}

function demoteHeadings(lines, start, end, excludedIndexes) {
  const inFence = fencedLineMap(lines);
  for (let index = start; index < end; index += 1) {
    if (excludedIndexes.has(index) || inFence[index]) continue;
    if (/^######\s+/.test(lines[index])) {
      throw new Error(`cannot demote level-6 heading on line ${index + 1}`);
    }
    if (/^#{3,5}\s+/.test(lines[index])) {
      lines[index] = `#${lines[index]}`;
    }
  }
}

function demoteLanguageSectionPeers(lines, start, end) {
  const inFence = fencedLineMap(lines);
  let demotingSubtree = false;

  for (let index = start; index < end; index += 1) {
    if (inFence[index]) continue;
    if (isLanguageHeading(lines[index])) {
      demotingSubtree = false;
      continue;
    }
    if (/^###\s+/.test(lines[index])) {
      lines[index] = `#${lines[index]}`;
      demotingSubtree = true;
      continue;
    }
    if (!demotingSubtree) continue;
    if (/^######\s+/.test(lines[index])) {
      throw new Error(`cannot demote level-6 heading on line ${index + 1}`);
    }
    if (/^#{4,5}\s+/.test(lines[index])) {
      lines[index] = `#${lines[index]}`;
    }
  }
}

function insertChildHeading(lines, parentIndex, label) {
  if (lines[parentIndex + 1]?.trim() === '') {
    lines.splice(parentIndex + 2, 0, `### ${label}`, '');
    return;
  }
  lines.splice(parentIndex + 1, 0, '', `### ${label}`, '');
}

function normalizeDescriptionSections(source) {
  let lines = source.split(/\r?\n/);
  const descriptions = [];

  lines.forEach((line, index) => {
    const parsed = parseDescriptionHeading(line);
    if (parsed) descriptions.push({index, ...parsed});
  });

  if (descriptions.length === 0) return source;

  const duplicateIndexes = new Set();
  descriptions.forEach((description, index) => {
    if (index === 0) return;
    const previous = descriptions[index - 1];
    const onlyWhitespaceBetween = lines
      .slice(previous.index + 1, description.index)
      .every((line) => line.trim() === '');
    if (
      description.detail === previous.detail &&
      onlyWhitespaceBetween
    ) {
      duplicateIndexes.add(description.index);
    }
  });

  if (duplicateIndexes.size > 0) {
    lines = lines.filter((_, index) => !duplicateIndexes.has(index));
    return normalizeDescriptionSections(lines.join('\n'));
  }

  if (descriptions.length === 1) {
    const description = descriptions[0];
    const childLabel = memorizedLabel(description.detail);
    lines[description.index] = CANONICAL_HEADING;
    const nextTopLevelIndex = lines.findIndex(
      (line, index) => index > description.index && /^##\s+/.test(line),
    );
    const sectionEnd =
      nextTopLevelIndex < 0 ? lines.length : nextTopLevelIndex;

    if (childLabel) {
      demoteHeadings(
        lines,
        description.index + 1,
        sectionEnd,
        new Set([description.index]),
      );
      insertChildHeading(lines, description.index, childLabel);
    } else {
      const languageHeadingIndexes = new Set();
      for (
        let index = description.index + 1;
        index < sectionEnd;
        index += 1
      ) {
        if (isLanguageHeading(lines[index])) {
          languageHeadingIndexes.add(index);
        }
      }
      if (languageHeadingIndexes.size > 1) {
        demoteLanguageSectionPeers(
          lines,
          description.index + 1,
          sectionEnd,
        );
      }
    }

    return lines.join('\n');
  }

  const descriptionIndexes = new Set(descriptions.map(({index}) => index));
  const lastDescriptionIndex = descriptions.at(-1).index;
  const nextTopLevelIndex = lines.findIndex(
    (line, index) =>
      index > lastDescriptionIndex &&
      /^##\s+/.test(line) &&
      !parseDescriptionHeading(line),
  );
  const sectionEnd = nextTopLevelIndex < 0 ? lines.length : nextTopLevelIndex;

  demoteHeadings(
    lines,
    descriptions[0].index + 1,
    sectionEnd,
    descriptionIndexes,
  );

  descriptions.forEach((description, index) => {
    if (index === 0) {
      lines[description.index] = CANONICAL_HEADING;
      return;
    }
    lines[description.index] = `### ${languageLabel(
      description.detail,
      `Version ${index + 1}`,
    )}`;
  });

  insertChildHeading(
    lines,
    descriptions[0].index,
    languageLabel(descriptions[0].detail, '日本語'),
  );

  return lines.join('\n');
}

function listMarkdownFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(filePath));
    } else if (entry.isFile() && /\.mdx?$/i.test(entry.name)) {
      files.push(filePath);
    }
  }
  return files;
}

function main() {
  const checkOnly = process.argv.includes('--check');
  const changedFiles = [];

  for (const filePath of listMarkdownFiles(DOCS_DIR)) {
    const source = fs.readFileSync(filePath, 'utf8');
    let normalized;
    try {
      normalized = normalizeDescriptionSections(source);
    } catch (error) {
      const relativePath = path.relative(REPO_ROOT, filePath);
      throw new Error(`${relativePath}: ${error.message}`);
    }

    if (normalized === source) continue;
    changedFiles.push(path.relative(REPO_ROOT, filePath));
    if (!checkOnly) {
      fs.writeFileSync(filePath, normalized);
    }
  }

  if (checkOnly && changedFiles.length > 0) {
    console.error('Description section normalization is required:');
    changedFiles.forEach((filePath) => console.error(`  - ${filePath}`));
    process.exit(1);
  }

  const verb = checkOnly ? 'Validated' : 'Normalized';
  console.log(`${verb} Description sections in ${changedFiles.length} file(s).`);
}

if (require.main === module) {
  main();
}

module.exports = {
  normalizeDescriptionSections,
  parseDescriptionHeading,
};
