const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');
const transformTypescript = require('@babel/plugin-transform-typescript');
const {
  applyLineChanges,
  extractSubmissionFromIssueBody,
  gitBlobSha,
  stableStringify,
  verifySubmissionSignature,
  writeSubmissionToRepo,
} = require('./submission-utils');

function loadTypeScriptModule(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformTypescript, transformModules],
  }).code;
  const loaded = { exports: {} };
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

const { buildIssueBody } = loadTypeScriptModule('supabase/functions/content-submissions/issue.ts');

function correctionPayload(content, overrides = {}) {
  return {
    version: 3,
    submissionId: '11111111-1111-4111-8111-111111111111',
    submissionType: 'correction',
    createdAt: '2026-07-15T00:00:00.000Z',
    publicAuthor: 'Kai #00001',
    cla: {
      acceptedAt: '2026-07-15T00:00:00.000Z',
      statement: 'I have read and agree to The Kai Project CLA.',
    },
    document: {
      title: '',
      sidebarLabel: '',
      universityId: '',
      departmentId: '',
      programId: '',
      year: null,
      fileSlug: '',
      tags: [],
      targetDocId: 'sample/problem',
      targetTitle: 'Sample problem',
    },
    content: { descriptionMarkdown: '', kaiMarkdown: '' },
    correction: {
      sourcePath: 'docs/sample/problem.md',
      baseBlobSha: gitBlobSha(content),
      changes: [{ oldStart: 1, oldLines: ['wrong'], newLines: ['correct'] }],
      conflict: false,
      ...overrides,
    },
  };
}

function newSolutionPayload(content = {}) {
  const payload = correctionPayload('unused');
  payload.submissionType = 'new_solution';
  payload.document = {
    ...payload.document,
    title: 'Sample title',
    sidebarLabel: 'Sample',
    universityId: 'sample-university',
    departmentId: 'sample-department',
    programId: '',
    year: 2026,
    fileSlug: 'sample-title',
    targetDocId: '',
    targetTitle: '',
  };
  payload.content = {
    descriptionMarkdown: content.descriptionMarkdown ?? 'Problem text',
    kaiMarkdown: content.kaiMarkdown ?? 'Solution text',
  };
  payload.correction = null;
  return payload;
}

function withRepo(content, run) {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-submission-'));
  const filePath = path.join(repoRoot, 'docs/sample/problem.md');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  try {
    return run({ repoRoot, filePath });
  } finally {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
}

test('applies signed line changes exactly when the base blob matches', () => {
  const original = 'first\nwrong\nlast\n';
  withRepo(original, ({ repoRoot, filePath }) => {
    const result = writeSubmissionToRepo({ repoRoot, payload: correctionPayload(original) });
    assert.equal(result.conflict, false);
    assert.equal(result.action, 'update');
    assert.equal(fs.readFileSync(filePath, 'utf8'), 'first\ncorrect\nlast\n');
  });
});

test('generates a new solution from the v3 payload protocol', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-new-submission-'));
  const payload = newSolutionPayload();
  try {
    const result = writeSubmissionToRepo({ repoRoot, payload });
    assert.equal(result.action, 'create');
    assert.match(
      fs.readFileSync(path.join(repoRoot, result.relativePath), 'utf8'),
      /## \*\*Kai\*\*\nSolution text/,
    );
  } finally {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
});

test('returns a conflict without writing when the current blob changed', () => {
  const base = 'first\nwrong\nlast\n';
  const current = 'first\nalready changed\nlast\n';
  withRepo(current, ({ repoRoot, filePath }) => {
    const result = writeSubmissionToRepo({ repoRoot, payload: correctionPayload(base) });
    assert.equal(result.conflict, true);
    assert.equal(result.expectedBlobSha, gitBlobSha(base));
    assert.equal(result.currentBlobSha, gitBlobSha(current));
    assert.equal(fs.readFileSync(filePath, 'utf8'), current);
  });
});

test('keeps an Issue-time conflict blocked even if the file later returns to the base blob', () => {
  const original = 'first\nwrong\nlast\n';
  withRepo(original, ({ repoRoot, filePath }) => {
    const payload = correctionPayload(original, { conflict: true });
    const result = writeSubmissionToRepo({ repoRoot, payload });
    assert.equal(result.conflict, true);
    assert.equal(fs.readFileSync(filePath, 'utf8'), original);
  });
});

test('line changes preserve final-newline edits', () => {
  assert.equal(
    applyLineChanges('one\ntwo\n', [{ oldStart: 2, oldLines: [''], newLines: [] }]),
    'one\ntwo',
  );
});

test('extracts and verifies a v3 signed correction Issue payload', () => {
  const payload = correctionPayload('first\nwrong\nlast\n');
  const secret = 'test-secret';
  const canonical = stableStringify(payload);
  const signature = crypto.createHmac('sha256', secret).update(canonical).digest('hex');
  const issueBody = buildIssueBody(payload, signature, 'signed diff');
  const extracted = extractSubmissionFromIssueBody(issueBody);
  assert.doesNotThrow(() => verifySubmissionSignature(extracted, secret));
  assert.deepEqual(extracted.payload, payload);
});

test('stores new-solution Markdown once and reconstructs it before signature verification', () => {
  const payload = newSolutionPayload({
    descriptionMarkdown: 'Prompt with a fence:\n```js\nconst answer = 42;\n```',
    kaiMarkdown: 'A longer fence also works:\n````text\ndone\n````',
  });
  const secret = 'test-secret';
  const canonical = stableStringify(payload);
  const signature = crypto.createHmac('sha256', secret).update(canonical).digest('hex');
  const issueBody = buildIssueBody(payload, signature);
  const encoded = issueBody.match(/kai-submission-payload:([A-Za-z0-9_-]+)/)[1];
  const hiddenPayload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));

  assert.deepEqual(hiddenPayload.content, { descriptionMarkdown: '', kaiMarkdown: '' });
  assert.equal(issueBody.split(payload.content.descriptionMarkdown).length - 1, 1);
  assert.equal(issueBody.split(payload.content.kaiMarkdown).length - 1, 1);

  const extracted = extractSubmissionFromIssueBody(issueBody);
  assert.doesNotThrow(() => verifySubmissionSignature(extracted, secret));
  assert.deepEqual(extracted.payload, payload);

  const tampered = extractSubmissionFromIssueBody(issueBody.replace('answer = 42', 'answer = 41'));
  assert.throws(() => verifySubmissionSignature(tampered, secret), /signature verification failed/);
});

test('keeps the 50,000-character CJK limit below the Issue body guard', () => {
  const payload = newSolutionPayload({
    descriptionMarkdown: '解'.repeat(50000),
    kaiMarkdown: '',
  });
  const issueBody = buildIssueBody(payload, 'a'.repeat(64));
  assert.ok(issueBody.length < 62000, `Issue body was ${issueBody.length} characters.`);
});

test('rejects the removed v2 Issue protocol', () => {
  const payload = correctionPayload('first\nwrong\nlast\n');
  payload.version = 2;
  const canonical = stableStringify(payload);
  const encoded = Buffer.from(canonical, 'utf8').toString('base64url');
  const issueBody = `<!-- kai-submission-payload:${encoded} -->\n<!-- kai-submission-signature:${'a'.repeat(64)} -->`;
  assert.throws(() => extractSubmissionFromIssueBody(issueBody), /Unsupported submission payload version/);
});

test('returns a target-path conflict when a new-solution file already exists', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-existing-submission-'));
  const payload = newSolutionPayload();
  const existingPath = path.join(
    repoRoot,
    'docs/sample-university/sample-department/2026/sample-title.md',
  );
  fs.mkdirSync(path.dirname(existingPath), { recursive: true });
  fs.writeFileSync(existingPath, 'existing\n', 'utf8');
  try {
    const result = writeSubmissionToRepo({ repoRoot, payload });
    assert.deepEqual(result, {
      relativePath: 'docs/sample-university/sample-department/2026/sample-title.md',
      action: 'conflict',
      conflict: true,
      conflictKind: 'target_exists',
    });
    assert.equal(fs.readFileSync(existingPath, 'utf8'), 'existing\n');
  } finally {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
});

test('rejects unsafe MDX before writing a new-solution file', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-unsafe-submission-'));
  const payload = newSolutionPayload({ kaiMarkdown: '<DangerousComponent />' });
  try {
    assert.throws(
      () => writeSubmissionToRepo({ repoRoot, payload }),
      /Kai contains JSX-like markup/,
    );
    assert.equal(fs.existsSync(path.join(repoRoot, 'docs')), false);
  } finally {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
});

test('rejects a source path that does not match the target document', () => {
  const original = 'first\nwrong\nlast\n';
  withRepo(original, ({ repoRoot }) => {
    const payload = correctionPayload(original, { sourcePath: 'docs/other.md' });
    assert.throws(
      () => writeSubmissionToRepo({ repoRoot, payload }),
      /does not match targetDocId/,
    );
  });
});
