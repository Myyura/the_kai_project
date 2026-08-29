const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');
const transformTypescript = require('@babel/plugin-transform-typescript');

function loadTypeScriptModule(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformTypescript, transformModules],
  }).code;
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

const {normalizeAdmissionDataRequest} = loadTypeScriptModule(
  'supabase/functions/content-submissions/admission.ts',
);

function validRequest(overrides = {}) {
  return {
    entityId: 'kyoto-university/informatics/ist',
    title: '知能情報学専攻',
    sourcePath: 'docs/kyoto-university/informatics/ist/_admissions.json',
    intent: 'correction',
    existingSeriesId: 'master-summer-general',
    existingSeriesLabel: '修士課程 · 夏季 · 一般选拔',
    existingSeriesSourceType: 'official',
    admissionYear: '2026',
    degree: 'master',
    period: 'summer',
    selection: '一般选拔',
    seriesLabel: '修士課程 · 夏季 · 一般选拔',
    capacity: '40',
    applicants: '82',
    examinees: '0',
    admitted: '38',
    enrolled: '',
    reportedRatio: '2.16',
    reportedRatioBasis: '出愿人数 ÷ 合格人数',
    sourceType: 'community',
    sourceTitle: '2026年度 入试结果',
    sourceUrl: 'https://example.ac.jp/results.pdf',
    evidenceLocator: 'PDF 第 2 页“修士课程”表',
    notes: '2025 年夏季实施。',
    ...overrides,
  };
}

test('normalizes an exact admission-data request and records source-type mismatch', () => {
  const result = normalizeAdmissionDataRequest(validRequest());
  assert.ok('data' in result);
  assert.equal(result.data.admissionYear, 2026);
  assert.equal(result.data.values.examinees, 0);
  assert.equal(result.data.values.enrolled, null);
  assert.equal(result.data.values.reportedRatio, 2.16);
  assert.equal(result.data.values.reportedRatioBasis, '出愿人数 ÷ 合格人数');
  assert.equal(result.data.source.url, 'https://example.ac.jp/results.pdf');
  assert.equal(result.data.sourceTypeMismatch, true);
});

test('requires at least one exact admission value', () => {
  const result = normalizeAdmissionDataRequest(validRequest({
    capacity: '',
    applicants: '',
    examinees: '',
    admitted: '',
    enrolled: '',
    reportedRatio: '',
    reportedRatioBasis: '',
  }));
  assert.deepEqual(result, {
    error: {
      code: 'missing_admission_values',
      message: 'At least one exact count or reported ratio is required.',
    },
  });
});

test('requires a stated basis for a source-reported ratio', () => {
  const result = normalizeAdmissionDataRequest(validRequest({reportedRatioBasis: ''}));
  assert.equal(result.error.code, 'missing_admission_ratio_basis');
});

test('rejects invalid admission years, counts, ratios, source types, targets, and URLs', () => {
  const cases = [
    [{admissionYear: '2026.5'}, 'invalid_admission_year'],
    [{admissionYear: '2201'}, 'invalid_admission_year'],
    [{applicants: '-1'}, 'invalid_admission_count'],
    [{applicants: '1.5'}, 'invalid_admission_count'],
    [{reportedRatio: 'Infinity'}, 'invalid_admission_ratio'],
    [{reportedRatio: '-0.1'}, 'invalid_admission_ratio'],
    [{sourceType: 'blog'}, 'invalid_admission_source_type'],
    [{sourcePath: 'docs/other/_admissions.json'}, 'invalid_admission_target'],
    [{sourceUrl: 'ftp://example.ac.jp/results.pdf'}, 'invalid_admission_source_url'],
    [{sourceUrl: 'https://user:secret@example.ac.jp/results.pdf'}, 'invalid_admission_source_url'],
  ];

  for (const [overrides, expectedCode] of cases) {
    const result = normalizeAdmissionDataRequest(validRequest(overrides));
    assert.equal(result.error.code, expectedCode, JSON.stringify(overrides));
  }
});
