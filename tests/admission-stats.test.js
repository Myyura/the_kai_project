const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const {
  AdmissionStatsValidationError,
  checkGeneratedOutput,
  generateAdmissionStats,
  runCli,
  serializeAdmissionStats,
  writeGeneratedOutput,
} = require('../scripts/generate-admission-stats');

function makeWorkspace(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'admission-stats-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, {recursive: true});
  return {root, docsDir};
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeEntity(docsDir, entityId, admissions, options = {}) {
  const directory = path.join(docsDir, ...entityId.split('/'));
  writeJson(path.join(directory, '_category_.json'), {
    label: options.label || entityId,
    link: {type: 'generated-index', slug: options.slug || `/category/${entityId.replaceAll('/', '-')}`},
  });
  writeJson(path.join(directory, '_admissions.json'), admissions);
}

function writeCategory(docsDir, entityId, options = {}) {
  const directory = path.join(docsDir, ...entityId.split('/'));
  writeJson(path.join(directory, '_category_.json'), {
    label: options.label || entityId,
    link: {type: 'generated-index', slug: options.slug || `/category/${entityId.replaceAll('/', '-')}`},
  });
}

function source(id, overrides = {}) {
  return {
    id,
    title: `${id} title`,
    url: `https://example.edu/${id}`,
    checkedAt: '2026-08-29',
    ...overrides,
  };
}

function baseSeries(overrides = {}) {
  return {
    id: 'official-master',
    label: '硕士・全年',
    sourceType: 'official',
    confidence: 'high',
    degree: 'master',
    period: 'annual',
    selection: 'all',
    points: [
      {
        admissionYear: 2026,
        capacity: 10,
        applicants: 20,
        examinees: 18,
        admitted: 10,
        enrolled: 9,
        reportedRatio: null,
        sourceIds: ['official-2026'],
      },
    ],
    ...overrides,
  };
}

test('generates stable, namespaced page data and applies the ratio priority', (t) => {
  const {docsDir} = makeWorkspace(t);
  writeEntity(
    docsDir,
    'sample-university/engineering/cs',
    {
      schemaVersion: 1,
      scope: 'program',
      sources: {
        'official-2026': source('ignored-map-id', {
          id: undefined,
          title: 'Official results',
          url: 'https://example.edu/results',
          checkedAt: '2026-08-28',
        }),
      },
      series: [
        {
          ...baseSeries({
            id: 'z-community',
            label: 'Community estimate',
            sourceType: 'community',
            confidence: 'medium',
            sources: [source('community-post', {checkedAt: '2026-08-29'})],
            sourceIds: ['community-post'],
            points: [
              {
                admissionYear: 2025,
                capacity: null,
                applicants: null,
                examinees: null,
                admitted: null,
                enrolled: null,
                reportedRatio: 1.75,
                sourceIds: ['community-post'],
              },
            ],
          }),
        },
        baseSeries({
          id: 'a-official',
          comparisonKey: 'master-overall-final-admission',
          sourceIds: ['official-2026'],
          points: [
            {
              admissionYear: 2026,
              capacity: 10,
              applicants: 20,
              examinees: 18,
              admitted: 10,
              enrolled: 9,
              reportedRatio: 99,
              sourceIds: ['official-2026'],
            },
            {
              admissionYear: 2024,
              capacity: null,
              applicants: null,
              examinees: 12,
              admitted: 6,
              enrolled: null,
              reportedRatio: 99,
              sourceIds: ['official-2026'],
            },
          ],
        }),
      ],
    },
    {label: 'Computer Science', slug: '/category/sample-cs'},
  );

  const first = generateAdmissionStats({docsDir});
  const second = generateAdmissionStats({docsDir});

  assert.deepEqual(second, first);
  assert.equal(first.generatedAt, '2026-08-29T00:00:00.000Z');
  assert.deepEqual(first.pagesBySlug, {'/category/sample-cs': 'sample-university/engineering/cs'});

  const entity = first.statsByEntity['sample-university/engineering/cs'];
  assert.equal(entity.label, 'Computer Science');
  assert.equal(entity.scope, 'program');
  assert.deepEqual(entity.series.map((series) => series.id), ['a-official', 'z-community']);
  assert.equal(entity.series[0].comparisonKey, 'master-overall-final-admission');
  assert.deepEqual(entity.series[0].points.map((point) => point.admissionYear), [2024, 2026]);
  assert.equal(entity.series[0].points[0].primaryRatio, 2);
  assert.equal(entity.series[0].points[0].primaryRatioBasis, 'examinees/admitted');
  assert.equal(entity.series[0].points[1].primaryRatio, 2);
  assert.equal(entity.series[0].points[1].primaryRatioBasis, 'applicants/admitted');
  assert.equal(entity.series[1].points[0].primaryRatio, 1.75);
  assert.equal(entity.series[1].points[0].primaryRatioBasis, 'reported');

  assert.deepEqual(entity.series[0].points[0].sourceIds, [
    'sample-university/engineering/cs::official-2026',
  ]);
  assert.deepEqual(Object.keys(first.sourcesById), [
    'sample-university/engineering/cs::community-post',
    'sample-university/engineering/cs::official-2026',
  ]);
  assert.equal(
    first.sourcesById['sample-university/engineering/cs::official-2026'].sourceType,
    'official',
  );
  assert.equal(
    first.sourcesById['sample-university/engineering/cs::community-post'].confidence,
    'medium',
  );
});

test('reports duplicate series/year, invalid counts, missing sources, invalid scopes, and slug conflicts', (t) => {
  const {docsDir} = makeWorkspace(t);
  const validSource = {'official-2026': source('unused-id', {id: undefined})};
  writeEntity(
    docsDir,
    'alpha/program',
    {
      schemaVersion: 1,
      scope: 'program',
      sources: validSource,
      series: [baseSeries()],
    },
    {slug: '/category/shared'},
  );
  writeEntity(
    docsDir,
    'beta/program',
    {
      schemaVersion: 1,
      scope: 'invalid-scope',
      sources: validSource,
      series: [
        baseSeries({
          id: 'duplicate',
          points: [
            {
              admissionYear: 2026,
              capacity: -1,
              applicants: 3,
              examinees: null,
              admitted: 0,
              enrolled: null,
              reportedRatio: null,
              sourceIds: ['missing-source'],
            },
            {
              admissionYear: 2026,
              capacity: null,
              applicants: null,
              examinees: null,
              admitted: null,
              enrolled: null,
              reportedRatio: null,
              sourceIds: ['official-2026'],
            },
          ],
        }),
        baseSeries({id: 'duplicate'}),
      ],
    },
    {slug: '/category/shared'},
  );

  assert.throws(
    () => generateAdmissionStats({docsDir}),
    (error) => {
      assert.ok(error instanceof AdmissionStatsValidationError);
      const messages = error.issues.map((issue) => issue.message).join('\n');
      assert.match(messages, /duplicates series ID "duplicate"/);
      assert.match(messages, /duplicates admission year 2026/);
      assert.match(messages, /must not be negative/);
      assert.match(messages, /references missing source "missing-source"/);
      assert.match(messages, /slug "\/category\/shared" conflicts/);
      assert.match(messages, /must be one of "graduate_school_total"/);
      return true;
    },
  );
});

test('preserves zero admissions while leaving its ratio uncomputed', (t) => {
  const {docsDir} = makeWorkspace(t);
  writeEntity(docsDir, 'university/zero-admissions', {
    schemaVersion: 1,
    scope: 'program',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries({
      points: [{
        admissionYear: 2026,
        capacity: 5,
        applicants: 3,
        examinees: 2,
        admitted: 0,
        enrolled: 0,
        reportedRatio: null,
        sourceIds: ['official-2026'],
      }],
    })],
  });

  const generated = generateAdmissionStats({docsDir});
  const point = generated.statsByEntity['university/zero-admissions'].series[0].points[0];
  assert.equal(point.admitted, 0);
  assert.equal(point.primaryRatio, null);
  assert.equal(point.primaryRatioBasis, null);
});

test('builds a parent aggregate from direct child entities only when the parent has no data', (t) => {
  const {docsDir} = makeWorkspace(t);
  writeCategory(docsDir, 'university/engineering', {
    label: 'Engineering Graduate School',
    slug: '/category/university-engineering',
  });
  writeEntity(docsDir, 'university/engineering/cs', {
    schemaVersion: 1,
    scope: 'program',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries()],
  });
  writeEntity(docsDir, 'university/engineering/ee', {
    schemaVersion: 1,
    scope: 'program',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries()],
  });
  writeCategory(docsDir, 'university', {
    label: 'University',
    slug: '/category/university',
  });
  writeJson(path.join(docsDir, 'university', 'sidebar-only', '_category_.json'), {
    label: 'Sidebar only',
  });
  writeEntity(docsDir, 'university/sidebar-only/program', {
    schemaVersion: 1,
    scope: 'program',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries()],
  });

  const generated = generateAdmissionStats({docsDir});
  assert.deepEqual(generated.aggregatePagesBySlug, {
    '/category/university-engineering': {
      entityId: 'university/engineering',
      label: 'Engineering Graduate School',
      childEntityIds: [
        'university/engineering/cs',
        'university/engineering/ee',
      ],
    },
  });
  assert.equal(generated.aggregatePagesBySlug['/category/university'], undefined);

  writeEntity(docsDir, 'university/engineering', {
    schemaVersion: 1,
    scope: 'graduate_school_total',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries()],
  }, {
    label: 'Engineering Graduate School',
    slug: '/category/university-engineering',
  });
  const withParentData = generateAdmissionStats({docsDir});
  assert.equal(
    withParentData.aggregatePagesBySlug['/category/university-engineering'],
    undefined,
  );
});

test('--check compares without writing and normal generation creates parent directories', (t) => {
  const {root, docsDir} = makeWorkspace(t);
  writeEntity(docsDir, 'university/school', {
    schemaVersion: 1,
    scope: 'graduate_school_total',
    sources: {'official-2026': source('unused-id', {id: undefined})},
    series: [baseSeries()],
  });

  const outputFile = path.join(root, 'deep', 'generated', 'admissionStats.generated.json');
  const originalConsoleError = console.error;
  const originalConsoleLog = console.log;
  console.error = () => {};
  console.log = () => {};
  t.after(() => {
    console.error = originalConsoleError;
    console.log = originalConsoleLog;
  });

  assert.equal(
    runCli(['--check', '--docs-dir', docsDir, '--output', outputFile]),
    1,
  );
  assert.equal(fs.existsSync(outputFile), false, '--check must not create a missing output file');

  assert.equal(runCli(['--docs-dir', docsDir, '--output', outputFile]), 0);
  assert.equal(fs.existsSync(outputFile), true);
  const originalContent = fs.readFileSync(outputFile, 'utf8');
  assert.equal(checkGeneratedOutput(outputFile, originalContent), true);
  assert.deepEqual(JSON.parse(originalContent), generateAdmissionStats({docsDir}));

  const stale = JSON.parse(originalContent);
  stale.generatedAt = '2000-01-01T00:00:00.000Z';
  const staleContent = serializeAdmissionStats(stale);
  writeGeneratedOutput(outputFile, staleContent);
  assert.equal(runCli(['--check', '--docs-dir', docsDir, '--output', outputFile]), 1);
  assert.equal(fs.readFileSync(outputFile, 'utf8'), staleContent, '--check must not update stale output');
});
