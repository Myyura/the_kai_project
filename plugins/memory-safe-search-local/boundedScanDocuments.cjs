const fs = require('node:fs');
const path = require('node:path');
const {
  debugVerbose: upstreamDebugVerbose,
  parse: upstreamParse,
} = require('./upstream.cjs');

const DEFAULT_SCAN_CONCURRENCY = 4;
const MAX_SCAN_CONCURRENCY = 32;

function validateScanConcurrency(value = DEFAULT_SCAN_CONCURRENCY) {
  if (!Number.isInteger(value) || value < 1 || value > MAX_SCAN_CONCURRENCY) {
    throw new RangeError(
      `boundedScanConcurrency must be an integer between 1 and ${MAX_SCAN_CONCURRENCY}; `
        + `received ${String(value)}.`,
    );
  }
  return value;
}

function getTrimmedHash(hash, url) {
  if (hash && !hash.startsWith('#') && hash.includes('#')) {
    if (hash.startsWith(url) && hash[url.length] === '#') {
      return hash.slice(url.length);
    }
    return false;
  }
  return hash;
}

function appendParsedDocument(result, allDocuments, getNextDocId) {
  if (!result) return;

  const [
    titleDocuments,
    headingDocuments,
    descriptionDocuments,
    keywordsDocuments,
    contentDocuments,
  ] = allDocuments;
  const {parsed, url} = result;
  const {pageTitle, description, keywords, sections, breadcrumb} = parsed;
  const titleId = getNextDocId();

  titleDocuments.push({
    i: titleId,
    t: pageTitle,
    u: url,
    b: breadcrumb,
  });
  if (description) {
    descriptionDocuments.push({
      i: titleId,
      t: description,
      s: pageTitle,
      u: url,
      p: titleId,
    });
  }
  if (keywords) {
    keywordsDocuments.push({
      i: titleId,
      t: keywords,
      s: pageTitle,
      u: url,
      p: titleId,
    });
  }

  for (const section of sections) {
    const trimmedHash = getTrimmedHash(section.hash, url);
    if (section.title !== pageTitle) {
      if (trimmedHash === false) continue;
      headingDocuments.push({
        i: getNextDocId(),
        t: section.title,
        u: url,
        h: trimmedHash,
        p: titleId,
      });
    }
    if (section.content) {
      if (trimmedHash === false) continue;
      contentDocuments.push({
        i: getNextDocId(),
        t: section.content,
        s: section.title || pageTitle,
        u: url,
        h: trimmedHash,
        p: titleId,
      });
    }
  }
}

async function scanDocumentsBounded(
  docInfoWithFilePathList,
  config,
  {
    concurrency = DEFAULT_SCAN_CONCURRENCY,
    idState = {next: 0},
    readFile = fs.promises.readFile,
    parse = upstreamParse,
    debugVerbose = upstreamDebugVerbose,
    onProgress,
  } = {},
) {
  validateScanConcurrency(concurrency);
  if (!idState || !Number.isInteger(idState.next) || idState.next < 0) {
    throw new TypeError('idState.next must be a non-negative integer.');
  }

  const allDocuments = [[], [], [], [], []];
  let nextDocId = idState.next;
  const getNextDocId = () => {
    nextDocId += 1;
    return nextDocId;
  };

  for (let start = 0; start < docInfoWithFilePathList.length; start += concurrency) {
    const batch = docInfoWithFilePathList.slice(start, start + concurrency);
    const settled = await Promise.allSettled(
      batch.map(async ({filePath, url, type}) => {
        debugVerbose(
          'parsing %s file %o of %o',
          type,
          path.relative(process.cwd(), filePath),
          url,
        );
        const html = await readFile(filePath, {encoding: 'utf8'});
        const parsed = parse(html, type, url, config);
        return parsed ? {parsed, url} : null;
      }),
    );

    const failed = settled.find((result) => result.status === 'rejected');
    if (failed) throw failed.reason;

    for (const result of settled) {
      appendParsedDocument(result.value, allDocuments, getNextDocId);
    }

    if (onProgress) {
      onProgress({
        completed: Math.min(start + batch.length, docInfoWithFilePathList.length),
        total: docInfoWithFilePathList.length,
      });
    }
  }

  // Commit IDs only after the complete scan succeeds. A failed scan therefore
  // cannot leave a later retry with gaps.
  idState.next = nextDocId;
  return allDocuments;
}

module.exports = {
  DEFAULT_SCAN_CONCURRENCY,
  MAX_SCAN_CONCURRENCY,
  appendParsedDocument,
  getTrimmedHash,
  scanDocumentsBounded,
  validateScanConcurrency,
};
