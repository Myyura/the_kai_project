// Budget the whole corpus, not individual documents: long solutions can exceed
// this average. Compact schema v2 currently averages about 5 KiB per document.
const PUBLISHED_CONTENT_BYTES_PER_DOCUMENT = 6 * 1024;

function getPublishedContentBudget(documentCount) {
  return documentCount * PUBLISHED_CONTENT_BYTES_PER_DOCUMENT;
}

function assertPublishedContentBudget(bytes, documentCount) {
  const budget = getPublishedContentBudget(documentCount);
  if (bytes > budget) {
    const formatMiB = (value) => `${(value / 1024 / 1024).toFixed(2)} MiB`;
    throw new Error(
      `Published document content ${formatMiB(bytes)} exceeds ${formatMiB(budget)} `
        + `for ${documentCount} documents (6 KiB average allowance).`,
    );
  }
  return budget;
}

module.exports = {assertPublishedContentBudget, getPublishedContentBudget};
