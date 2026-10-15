const assert = require('node:assert/strict');
const test = require('node:test');
const {
  assertPublishedContentBudget,
  getPublishedContentBudget,
} = require('../scripts/published-content-budget');

// The failing build exported 2,988 documents, including intro.mdx, but the
// published API corpus excludes that introduction and contains 2,987 files.
const regressionDocumentCount = 2987;
const regressionBytes = 14963287;

test('compact corpus growth can exceed the former fixed 14 MiB ceiling', () => {
  // Regression: the 2026-10-15 Pages build published about 14.27 MiB.
  assert.doesNotThrow(() => assertPublishedContentBudget(regressionBytes, regressionDocumentCount));
  assert.doesNotThrow(() => assertPublishedContentBudget(regressionBytes * 2, regressionDocumentCount * 2));
});

test('duplicating content without adding documents still exceeds the budget', () => {
  assert.throws(
    () => assertPublishedContentBudget(regressionBytes * 2, regressionDocumentCount),
    /Published document content .* exceeds .* for 2987 documents/,
  );
});

test('small corpora use the per-document allowance without a fixed minimum', () => {
  const budget = 1000 * 6 * 1024;
  assert.equal(getPublishedContentBudget(1000), budget);
  assert.doesNotThrow(() => assertPublishedContentBudget(budget, 1000));
  assert.throws(() => assertPublishedContentBudget(budget + 1, 1000), /exceeds/);
});

test('an empty corpus has no content allowance', () => {
  assert.equal(assertPublishedContentBudget(0, 0), 0);
  assert.throws(() => assertPublishedContentBudget(1, 0), /exceeds/);
});

test('the scaled corpus limit remains an enforced boundary', () => {
  const budget = getPublishedContentBudget(3000);
  assert.doesNotThrow(() => assertPublishedContentBudget(budget, 3000));
  assert.throws(() => assertPublishedContentBudget(budget + 1, 3000), /exceeds/);
});
