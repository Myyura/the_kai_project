const test = require('node:test');
const assert = require('node:assert/strict');

const {
  normalizeDescriptionSections,
} = require('../scripts/normalize-description-sections');

test('normalizes a single language-qualified Description heading', () => {
  const source = [
    '## **description（English）**',
    '### Q.1',
    'Question text.',
    '',
    '## **Kai**',
    'Answer text.',
  ].join('\n');

  assert.equal(
    normalizeDescriptionSections(source),
    [
      '## **Description**',
      '### Q.1',
      'Question text.',
      '',
      '## **Kai**',
      'Answer text.',
    ].join('\n'),
  );
});

test('nests multilingual versions below one canonical Description section', () => {
  const source = [
    '## **Description**',
    '### 問1',
    '日本語の問題。',
    '',
    '## **Description (English) | AI Translated**',
    '### Q.1',
    'English problem.',
    '',
    '## **Kai**',
    'Answer text.',
  ].join('\n');

  assert.equal(
    normalizeDescriptionSections(source),
    [
      '## **Description**',
      '',
      '### 日本語',
      '',
      '#### 問1',
      '日本語の問題。',
      '',
      '### English (AI translated)',
      '#### Q.1',
      'English problem.',
      '',
      '## **Kai**',
      'Answer text.',
    ].join('\n'),
  );
});

test('preserves a memorized-version qualifier as a child section', () => {
  const source = [
    '## **Description (Memorized version, English)**',
    '',
    '### Q.1',
    'Question text.',
  ].join('\n');

  assert.equal(
    normalizeDescriptionSections(source),
    [
      '## **Description**',
      '',
      '### Memorized version (English)',
      '',
      '#### Q.1',
      'Question text.',
    ].join('\n'),
  );
});

test('collapses accidental duplicate Description headings', () => {
  const source = [
    '## **Description**',
    '## **Description**',
    '### (1)',
    'Question text.',
    '',
    '## **Kai**',
    'Answer text.',
  ].join('\n');

  assert.equal(
    normalizeDescriptionSections(source),
    [
      '## **Description**',
      '### (1)',
      'Question text.',
      '',
      '## **Kai**',
      'Answer text.',
    ].join('\n'),
  );
});

test('demotes headings inside existing language subsections', () => {
  const source = [
    '## **Description**',
    '### 日本語版',
    '#### 問1',
    '日本語の問題。',
    '### English Version',
    '### Figures',
    'English problem.',
    '',
    '## **Kai**',
    'Answer text.',
  ].join('\n');

  assert.equal(
    normalizeDescriptionSections(source),
    [
      '## **Description**',
      '### 日本語版',
      '#### 問1',
      '日本語の問題。',
      '### English Version',
      '#### Figures',
      'English problem.',
      '',
      '## **Kai**',
      'Answer text.',
    ].join('\n'),
  );
});

test('preserves the Chinese problem-description section after language subsections', () => {
  const source = [
    '## **Description**',
    '### 日本語版',
    '#### 問1',
    '日本語の問題。',
    '### English Version',
    '#### Q.1',
    'English problem.',
    '',
    '### 题目描述',
    '',
    '中文题目。',
    '',
    '#### 考点',
    '',
    '- 图论：分析题目中的图结构。',
    '',
    '## **Kai**',
    'Answer text.',
  ].join('\n');

  assert.equal(normalizeDescriptionSections(source), source);
});
