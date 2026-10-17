const assert = require('node:assert/strict');
const childProcess = require('node:child_process');
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
  buildPullRequestBody,
  extractSubmissionFromIssueBody,
  gitBlobSha,
  stableStringify,
  verifySubmissionSignature,
  writeSubmissionToRepo,
} = require('../scripts/submission-utils');

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
    admissionData: null,
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

function admissionDataPayload(overrides = {}) {
  const payload = correctionPayload('unused');
  payload.submissionType = 'admission_data';
  payload.document = {
    ...payload.document,
    year: 2026,
    targetDocId: 'kyoto-university/informatics/ist',
    targetTitle: '知能情報学専攻',
  };
  payload.content = {descriptionMarkdown: '', kaiMarkdown: ''};
  payload.correction = null;
  payload.admissionData = {
    entityId: 'kyoto-university/informatics/ist',
    targetTitle: '知能情報学専攻',
    sourcePath: 'docs/kyoto-university/informatics/ist/_admissions.json',
    intent: 'correction',
    existingSeries: {
      id: 'master-summer-general',
      label: '修士課程 · 夏季 · 一般选拔',
      sourceType: 'official',
    },
    series: {
      label: '修士課程 · 夏季 · 一般选拔',
      degree: 'master',
      period: 'summer',
      selection: '一般选拔',
    },
    admissionYear: 2026,
    values: {
      capacity: 40,
      applicants: 82,
      examinees: 76,
      admitted: 38,
      enrolled: null,
      reportedRatio: 2.16,
      reportedRatioBasis: '出愿人数 ÷ 合格人数',
    },
    source: {
      type: 'community',
      title: '2026年度 入试结果',
      url: 'https://example.ac.jp/results.pdf',
      evidenceLocator: 'PDF 第 2 页“修士课程”表',
    },
    sourceTypeMismatch: true,
    notes: '2025 年夏季实施。',
    ...overrides,
  };
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

test('links generated pull requests with an Issue-closing keyword', () => {
  const body = buildPullRequestBody({
    payload: correctionPayload('first\nwrong\nlast\n'),
    issue: {
      number: 135,
      html_url: 'https://github.com/Myyura/the_kai_project/issues/135',
    },
    relativePath: 'docs/sample/problem.md',
  });

  assert.equal(body.split('\n')[0], 'Resolves #135.');
  assert.match(body, /- Source issue: https:\/\/github\.com\/Myyura\/the_kai_project\/issues\/135/);
});

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
    assert.deepEqual(result.filePaths, [
      result.relativePath,
      'docs/sample-university/_category_.json',
      'docs/sample-university/sample-department/_category_.json',
      'docs/sample-university/sample-department/2026/_category_.json',
    ]);
    assert.equal(JSON.parse(fs.readFileSync(path.join(repoRoot, result.filePaths[1]), 'utf8')).label, 'sample-university');
  } finally {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
});

test('adds the missing year category for the issue #145 target without changing existing metadata', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-submission-category-'));
  const payload = newSolutionPayload();
  Object.assign(payload.document, {
    universityId: 'kyoto-university', departmentId: 'informatics', programId: 'sys', year: 2027,
  });
  const parentPaths = [
    'docs/kyoto-university/_category_.json',
    'docs/kyoto-university/informatics/_category_.json',
    'docs/kyoto-university/informatics/sys/_category_.json',
  ];
  try {
    const originals = parentPaths.map((relativePath) => {
      const content = fs.readFileSync(path.resolve(__dirname, '..', relativePath), 'utf8');
      fs.mkdirSync(path.dirname(path.join(repoRoot, relativePath)), {recursive: true});
      fs.writeFileSync(path.join(repoRoot, relativePath), content);
      return content;
    });
    const result = writeSubmissionToRepo({repoRoot, payload});
    const yearPath = 'docs/kyoto-university/informatics/sys/2027/_category_.json';
    assert.deepEqual(result.filePaths, [result.relativePath, yearPath]);
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(repoRoot, yearPath), 'utf8')), {
      label: '2027年度', position: 2027,
      link: {type: 'generated-index', slug: '/category/kyoto-university-informatics-sys-2027'},
      key: 'kyoto-university-informatics-sys-2027',
    });
    parentPaths.forEach((relativePath, index) => {
      assert.equal(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'), originals[index]);
    });

    // Subsequent submissions also preserve a maintainer's custom year metadata.
    const customYear = '{"label":"Custom year","position":-1,"link":null,"customProps":{"note":"keep"}}\n';
    fs.writeFileSync(path.join(repoRoot, yearPath), customYear);
    payload.document.fileSlug = 'second-problem';
    const second = writeSubmissionToRepo({repoRoot, payload});
    assert.deepEqual(second.filePaths, [second.relativePath]);
    assert.equal(fs.readFileSync(path.join(repoRoot, yearPath), 'utf8'), customYear);
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
  }
});

test('fills every missing nested category using canonical labels when available', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-submission-nested-'));
  const payload = newSolutionPayload();
  Object.assign(payload.document, {
    universityId: 'hosei-university', departmentId: 'science_and_engineering',
    programId: 'systems_engineering/management_systems',
  });
  try {
    const result = writeSubmissionToRepo({repoRoot, payload});
    const categories = result.filePaths.slice(1).map((relativePath) => (
      JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'))
    ));
    assert.equal(categories.length, 5);
    assert.equal(categories[0].label, '法政大学');
    assert.equal(categories[1].label, '理工学研究科');
    assert.equal(categories[3].label, '経営システム系');
    assert.equal(categories[3].link.slug, '/category/hosei-university-science_and_engineering-systems_engineering-management_systems');
    assert.equal(categories[4].label, '2026年度');
    assert.equal(fs.existsSync(path.join(repoRoot, 'docs/_category_.json')), false);
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
  }
});

test('automatic filenames distinguish CJK titles that share the same ASCII date', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-submission-slugs-'));
  try {
    const paths = [];
    for (const [index, subject] of ['複素関数論', '確率統計', '制御工学', '信号処理'].entries()) {
      const payload = newSolutionPayload();
      payload.submissionId = `${index + 1}1111111-1111-4111-8111-111111111111`;
      payload.document.fileSlug = '';
      payload.document.title = `京都大学 2026年8月実施 ${subject}`;
      const result = writeSubmissionToRepo({repoRoot, payload});
      assert.equal(result.action, 'create');
      paths.push(result.relativePath);
      assert.ok(result.relativePath.endsWith(`/2026-8-${payload.submissionId.slice(0, 8)}.md`));
      // Rerunning the same submission must retain its path and conflict protection.
      const repeated = writeSubmissionToRepo({repoRoot, payload});
      assert.equal(repeated.relativePath, result.relativePath);
      assert.equal(repeated.conflictKind, 'target_exists');
    }
    assert.equal(new Set(paths).size, 4);
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
  }
});

test('the signed converter and workflow stage all categories and the refreshed catalog, excluding unrelated files', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-submission-workflow-'));
  const sourceRoot = path.resolve(__dirname, '..');
  const payload = newSolutionPayload({
    descriptionMarkdown: 'Problem: $$x^2 + y^2 = 1$$',
    kaiMarkdown: 'Answer:\n$$x=1, y=0$$\n\n```text\n$$leave code unchanged$$\n```',
  });
  payload.document.programId = 'new-program/specialization';
  const secret = 'test-secret';
  const signature = crypto.createHmac('sha256', secret).update(stableStringify(payload)).digest('hex');
  const run = (command, args) => childProcess.execFileSync(command, args, {cwd: repoRoot, encoding: 'utf8'});
  try {
    for (const relativePath of [
      'scripts/convert-submission-issue.js', 'scripts/submission-utils.js',
      'scripts/display-math-format.js',
      'scripts/generate-universities.js', 'scripts/file-utils.js',
      'src/data/universities.js', 'src/data/universityMetadata.json',
    ]) {
      const target = path.join(repoRoot, relativePath);
      fs.mkdirSync(path.dirname(target), {recursive: true});
      fs.copyFileSync(path.join(sourceRoot, relativePath), target);
    }
    for (const relativePath of [
      'scripts/tag-taxonomy.js', 'plugins/experience-blog/catalog.cjs', 'src/data/experiences/external.cjs',
    ]) {
      const target = path.join(repoRoot, relativePath);
      fs.mkdirSync(path.dirname(target), {recursive: true});
      fs.symlinkSync(path.join(sourceRoot, relativePath), target);
    }
    fs.symlinkSync(path.join(sourceRoot, 'node_modules'), path.join(repoRoot, 'node_modules'), 'dir');
    fs.writeFileSync(path.join(repoRoot, 'event.json'), JSON.stringify({issue: {
      number: 145, html_url: 'https://github.com/Myyura/the_kai_project/issues/145',
      body: buildIssueBody(payload, signature),
    }}));
    const conversion = childProcess.spawnSync(process.execPath, [
      'scripts/convert-submission-issue.js', '--event', 'event.json',
    ], {cwd: repoRoot, encoding: 'utf8', env: {...process.env, CLA_ATTESTATION_SECRET: secret}});
    assert.equal(conversion.status, 0, conversion.stderr || conversion.stdout);
    const result = JSON.parse(fs.readFileSync(path.join(repoRoot, '.submission-result.json'), 'utf8'));
    assert.equal(result.filePaths.length, 6);
    assert.equal(result.filePath, result.filePaths[0]);
    const markdown = fs.readFileSync(path.join(repoRoot, result.filePath), 'utf8');
    assert.ok(markdown.includes('Problem:\n\n$$\nx^2 + y^2 = 1\n$$'));
    assert.ok(markdown.includes('Answer:\n\n$$\nx=1, y=0\n$$'));
    assert.ok(markdown.includes('```text\n$$leave code unchanged$$\n```'));
    const signed = extractSubmissionFromIssueBody(JSON.parse(fs.readFileSync(path.join(repoRoot, 'event.json'), 'utf8')).issue.body);
    assert.doesNotThrow(() => verifySubmissionSignature(signed, secret));
    assert.deepEqual(signed.payload, payload);
    const prBody = fs.readFileSync(path.join(repoRoot, '.submission-pr-body.md'), 'utf8');
    result.filePaths.forEach((filePath) => assert.ok(prBody.includes(filePath), filePath));

    // Run the generator against the fixture checkout, just as the workflow does.
    run(process.execPath, ['scripts/generate-universities.js']);
    run(process.execPath, ['scripts/generate-universities.js', '--check']);
    const {universities: catalog} = require(path.join(repoRoot, 'src/data/universities.js'));
    assert.equal(catalog[0].id, 'sample-university');
    assert.equal(catalog[0].departments[0].programs[0].id, 'new-program/specialization');
    assert.equal(catalog[0].departments[0].programs[0].archiveUrl,
      '/docs/category/sample-university-sample-department-new-program-specialization');

    const workflow = require('js-yaml').load(fs.readFileSync(path.join(sourceRoot, '.github/workflows/submission-issue-to-pr.yml'), 'utf8'));
    const validation = workflow.jobs.convert.steps.find((step) => step.name === 'Validate generated document');
    assert.match(validation.run, /submission_type.*new_solution[\s\S]*yarn generate:universities/);
    const commit = workflow.jobs.convert.steps.find((step) => step.name === 'Commit generated document');
    const stagingScript = commit.run.match(/node <<'NODE'\n([\s\S]*?)\nNODE/)[1];
    fs.writeFileSync(path.join(repoRoot, 'unrelated.txt'), 'Do not include in the PR.');
    run('git', ['init', '--quiet']);
    run(process.execPath, ['-e', stagingScript]);
    const staged = run('git', ['diff', '--cached', '--name-only']).trim().split('\n');
    assert.deepEqual(staged, [...result.filePaths, 'src/data/universities.js'].sort());
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
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

test('reports a missing correction target without a check-then-read race', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-missing-submission-'));
  try {
    assert.throws(
      () => writeSubmissionToRepo({
        repoRoot,
        payload: correctionPayload('first\nwrong\nlast\n'),
      }),
      /Target document does not exist/,
    );
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
  }
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

test('builds and verifies a signed admission-data review Issue', () => {
  const payload = admissionDataPayload();
  const secret = 'test-secret';
  const canonical = stableStringify(payload);
  const signature = crypto.createHmac('sha256', secret).update(canonical).digest('hex');
  const issueBody = buildIssueBody(payload, signature);

  assert.match(issueBody, /招生数据补充 \/ 修正（仅人工审核，不自动转换为 PR）/);
  assert.match(issueBody, /\| 出愿人数 \| 82 人 \|/);
  assert.match(issueBody, /\| 倍率口径 \| 出愿人数 ÷ 合格人数 \|/);
  assert.match(issueBody, /https:\/\/example\.ac\.jp\/results\.pdf/);
  assert.match(issueBody, /本次来源类型（community）与所选现有系列（official）不同/);

  const extracted = extractSubmissionFromIssueBody(issueBody);
  assert.doesNotThrow(() => verifySubmissionSignature(extracted, secret));
  assert.deepEqual(extracted.payload, payload);
});

test('admission Issue table cells preserve backslashes and pipes without splitting rows', () => {
  const markdown = require('markdown-it')();
  for (const [value, displayed] of [
    ['a|b|c', 'a|b|c'],
    ['a\\|b\\\\|c', 'a\\|b\\\\|c'],
    ['a\\b\\', 'a\\b\\'],
    ['a\r\nb\nc\rd', 'a b c d'],
    ['  ', '未提供'],
  ]) {
    const payload = admissionDataPayload();
    payload.admissionData.values.reportedRatioBasis = value;
    const issue = buildIssueBody(payload, 'a'.repeat(64));
    const html = markdown.render(issue);
    assert.ok(html.includes(`<td>倍率口径</td>\n<td style="text-align:right">${displayed}</td>`), value);
    assert.deepEqual(extractSubmissionFromIssueBody(issue).payload, payload);
  }
});

test('admission-data conversion is an explicit no-write manual-review skip', () => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-admission-submission-'));
  const payload = admissionDataPayload();
  try {
    const result = writeSubmissionToRepo({repoRoot, payload});
    assert.deepEqual(result, {
      relativePath: 'docs/kyoto-university/informatics/ist/_admissions.json',
      action: 'skip',
      skip: true,
      skipReason: 'admission_data_requires_manual_review',
      conflict: false,
    });
    assert.equal(fs.existsSync(path.join(repoRoot, 'docs')), false);
    assert.throws(
      () => buildPullRequestBody({
        payload,
        issue: {number: 1, html_url: 'https://example.test/issues/1'},
        relativePath: result.relativePath,
      }),
      /require manual review and cannot be converted automatically/,
    );
  } finally {
    fs.rmSync(repoRoot, {recursive: true, force: true});
  }
});

test('conversion command exits cleanly and emits a skip result for admission data', () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-admission-converter-'));
  const payload = admissionDataPayload();
  const secret = 'test-secret';
  const canonical = stableStringify(payload);
  const signature = crypto.createHmac('sha256', secret).update(canonical).digest('hex');
  const issueBody = buildIssueBody(payload, signature);
  const eventPath = path.join(tempRoot, 'event.json');
  const resultPath = path.join(tempRoot, 'result.json');
  const prBodyPath = path.join(tempRoot, 'pr-body.md');
  fs.writeFileSync(eventPath, JSON.stringify({
    issue: {
      number: 246,
      html_url: 'https://github.com/Myyura/the_kai_project/issues/246',
      body: issueBody,
    },
  }));

  try {
    const command = childProcess.spawnSync(process.execPath, [
      path.resolve(__dirname, '../scripts/convert-submission-issue.js'),
      '--event', eventPath,
      '--result', resultPath,
      '--pr-body', prBodyPath,
    ], {
      cwd: path.resolve(__dirname, '..'),
      encoding: 'utf8',
      env: {...process.env, CLA_ATTESTATION_SECRET: secret},
    });
    assert.equal(command.status, 0, command.stderr || command.stdout);
    const result = JSON.parse(fs.readFileSync(resultPath, 'utf8'));
    assert.equal(result.action, 'skip');
    assert.equal(result.skip, true);
    assert.equal(result.skipReason, 'admission_data_requires_manual_review');
    assert.deepEqual(result.filePaths, []);
    assert.equal(fs.existsSync(prBodyPath), false);
  } finally {
    fs.rmSync(tempRoot, {recursive: true, force: true});
  }
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
    assert.equal(fs.existsSync(path.join(path.dirname(existingPath), '_category_.json')), false);
    assert.equal(fs.existsSync(path.join(repoRoot, 'docs/sample-university/_category_.json')), false);
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
