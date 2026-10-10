const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');
const {generateAdmissionStats} = require('../scripts/generate-admission-stats');

function loadModule() {
  const filename = path.resolve(
    __dirname,
    '..',
    'src',
    'components',
    'AdmissionTrendCard',
    'seriesPrecedence.js',
  );
  const transformed = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

const {hasWinterAdmissionData, buildSeasonAdmissionView} = loadModule();

function point(admissionYear, counts = {}, overrides = {}) {
  return {
    admissionYear,
    primaryRatio: null,
    ratioKind: null,
    counts: {
      capacity: null,
      applicants: null,
      examinees: null,
      admitted: null,
      enrolled: null,
      ...counts,
    },
    ...overrides,
  };
}

function ratioPoint(admissionYear, ratio) {
  return point(admissionYear, {applicants: ratio * 10, admitted: 10}, {
    primaryRatio: ratio,
    ratioKind: 'applicants_admitted',
  });
}

function series(id, points, overrides = {}) {
  return {
    id,
    key: id,
    sourceType: 'official',
    degree: 'master',
    period: 'winter',
    selection: '一般選抜',
    points,
    ...overrides,
  };
}

test('winter availability requires usable data in an exact winter series', () => {
  assert.equal(hasWinterAdmissionData(), false);
  assert.equal(hasWinterAdmissionData([]), false);
  assert.equal(hasWinterAdmissionData([
    series('summer', [ratioPoint(2026, 2)], {period: 'summer'}),
    series('april', [point(2026, {admitted: 3})], {period: 'april_admission'}),
    series('october', [point(2026, {admitted: 2})], {period: 'october_admission'}),
    series('empty-winter', []),
    series('unknown-winter', [point(2026)]),
  ]), false);
  assert.equal(hasWinterAdmissionData([
    series('winter', [point(2026, {}, {primaryRatio: 2.5, ratioKind: 'reported'})]),
  ]), true);
});

test('winter availability accepts each published count, including zero', () => {
  for (const field of ['capacity', 'applicants', 'examinees', 'admitted', 'enrolled']) {
    for (const value of [0, 3]) {
      assert.equal(hasWinterAdmissionData([
        series(`${field}-${value}`, [point(2026, {[field]: value})]),
      ]), true, `${field}=${value} must count as published data`);
    }
  }
  assert.equal(hasWinterAdmissionData([
    series('zero-ratio', [point(2026, {}, {primaryRatio: 0})]),
  ]), true);
});

test('invalid years and nonfinite or negative counts cannot enable winter data', () => {
  const invalidPoints = [
    ...[null, undefined, NaN, Infinity, 2026.5].map((year) => point(year, {admitted: 3})),
    point(2026, {admitted: -1}),
    point(2026, {applicants: Infinity, examinees: NaN}),
    point(2026, {}, {primaryRatio: Infinity}),
    point(2026, {}, {primaryRatio: NaN}),
  ];
  assert.equal(hasWinterAdmissionData([series('invalid', invalidPoints)]), false);
  assert.deepEqual(buildSeasonAdmissionView([series('invalid', invalidPoints)], {
    season: 'winter',
  }), {trendSeries: [], detailSeries: []});
});

test('the default summer view preserves every nonwinter period and direct counts', () => {
  const nonwinter = [
    'summer',
    'general_exam',
    'april_admission',
    'october_admission',
    'annual',
  ].map((period) => series(period, [ratioPoint(2026, 2)], {period}));
  nonwinter.push(series('annual-counts', [point(2026, {admitted: 0})], {
    period: 'annual',
    selection: '別選抜',
  }));
  const input = [...nonwinter, series('winter', [ratioPoint(2026, 3)])];
  const before = structuredClone(input);

  const result = buildSeasonAdmissionView(input);

  assert.deepEqual(result.trendSeries, nonwinter);
  assert.deepEqual(result.detailSeries, nonwinter);
  assert.deepEqual(input, before);
});

test('direct winter views retain counts-only and zero-admission years without ratios', () => {
  const winter = series('winter', [
    point(2025, {admitted: 3}),
    point(2026, {applicants: 8, admitted: 0}),
    point(2027),
  ]);

  const result = buildSeasonAdmissionView([
    series('summer', [ratioPoint(2026, 2)], {period: 'summer'}),
    winter,
  ], {season: 'winter'});

  const expected = [{...winter, points: winter.points.slice(0, 2)}];
  assert.deepEqual(result.trendSeries, expected);
  assert.deepEqual(result.detailSeries, expected);
  assert.deepEqual(result.detailSeries[0].points.map((item) => item.primaryRatio), [null, null]);
  assert.equal(result.detailSeries[0].points[1].counts.admitted, 0);
});

test('aggregate winter details retain distinct April and October counts without a trend', () => {
  const dsApril = series('ds-april-winter', [point(2026, {admitted: 3})], {
    originEntityId: 'kyoto/informatics/ds',
    selection: '4月入学 一般選抜',
  });
  const dsOctober = series('ds-october-winter', [point(2026, {admitted: 2})], {
    originEntityId: 'kyoto/informatics/ds',
    selection: '10月入学 一般選抜',
  });
  const zero = series('zero-admissions', [point(2026, {applicants: 4, admitted: 0})], {
    originEntityId: 'kyoto/informatics/other',
  });
  const details = [dsApril, dsOctober, zero];

  const result = buildSeasonAdmissionView([
    ...details,
    series('unknown', [point(2026)]),
    series('summer', [ratioPoint(2026, 100)], {period: 'summer'}),
  ], {season: 'winter', isAggregate: true});

  assert.deepEqual(result.trendSeries, []);
  assert.deepEqual(result.detailSeries, details);
  assert.deepEqual(
    result.detailSeries.map((item) => item.points[0].counts.admitted),
    [3, 2, 0],
  );
});

test('aggregate winter trends select one line per course while preserving other selections in details', () => {
  const official = series('official-general', [ratioPoint(2026, 2)], {
    originEntityId: 'program-a',
  });
  const community = series('community-general', [ratioPoint(2025, 1.5)], {
    sourceType: 'community',
    originEntityId: 'program-a',
  });
  const october = series('october-selection', [ratioPoint(2026, 5)], {
    originEntityId: 'program-a',
    selection: '10月入学',
  });
  const otherCourse = series('other-course', [ratioPoint(2026, 3)], {
    originEntityId: 'program-b',
  });
  const input = [official, community, october, otherCourse];

  const result = buildSeasonAdmissionView(input, {season: 'winter', isAggregate: true});

  assert.deepEqual(result.detailSeries, input);
  assert.equal(result.trendSeries.length, 2);
  assert.deepEqual(
    result.trendSeries.find((item) => item.originEntityId === 'program-a')
      .points.map((item) => [item.admissionYear, item.primaryRatio, item.trendSourceType]),
    [[2025, 1.5, 'community'], [2026, 2, 'official']],
  );
  assert.equal(
    result.trendSeries.find((item) => item.originEntityId === 'program-b')
      .points[0].primaryRatio,
    3,
  );
});

test('aggregate summer retains official summer precedence and comparable community gap filling', () => {
  const common = {originEntityId: 'program-a'};
  const annual = series('annual', [ratioPoint(2024, 8), ratioPoint(2025, 9)], {
    ...common,
    period: 'annual',
  });
  const april = series('april', [ratioPoint(2025, 7)], {
    ...common,
    period: 'april_admission',
  });
  const summer = series('summer', [ratioPoint(2025, 2)], {
    ...common,
    period: 'summer',
  });
  const community = series('community', [ratioPoint(2024, 1.5), ratioPoint(2025, 6)], {
    ...common,
    period: 'summer',
    sourceType: 'community',
  });
  const winter = series('winter', [ratioPoint(2026, 100)], common);

  const result = buildSeasonAdmissionView([annual, april, community, winter, summer], {
    isAggregate: true,
  });

  assert.equal(result.trendSeries.length, 1);
  assert.equal(result.trendSeries[0].period, 'summer');
  assert.deepEqual(
    result.trendSeries[0].points.map((item) => [
      item.admissionYear,
      item.primaryRatio,
      item.trendSourceType,
    ]),
    [[2024, 1.5, 'community'], [2025, 2, 'official']],
  );
  assert.deepEqual(result.detailSeries, result.trendSeries);
});

test('aggregate season views use the supplied entity when series lack an origin', () => {
  const input = [
    series('official', [ratioPoint(2026, 2)]),
    series('community', [ratioPoint(2025, 1.5)], {sourceType: 'community'}),
  ];

  const result = buildSeasonAdmissionView(input, {
    season: 'winter',
    isAggregate: true,
    defaultEntityId: 'kyoto/informatics/ds',
  });

  assert.equal(result.trendSeries.length, 1);
  assert.deepEqual(result.trendSeries[0].points.map((item) => item.admissionYear), [2025, 2026]);
  assert.deepEqual(result.detailSeries, input);
});

test('Kyoto aggregate summer includes all courses and keeps AMS historical totals in course details', () => {
  const data = generateAdmissionStats({docsDir: path.resolve(__dirname, '..', 'docs')});
  const page = data.aggregatePagesBySlug['/category/kyoto-university-informatics'];
  const input = page.childEntityIds.flatMap((entityId) => (
    data.statsByEntity[entityId].series.map((item) => ({
      ...item,
      key: `${entityId}::${item.id}`,
      originEntityId: entityId,
      points: item.points.map((entry) => ({
        ...entry,
        counts: Object.fromEntries(
          ['capacity', 'applicants', 'examinees', 'admitted', 'enrolled']
            .map((field) => [field, entry[field]]),
        ),
      })),
    }))
  ));
  const amsEntityId = 'kyoto-university/informatics/ams';
  const aggregate = buildSeasonAdmissionView(input, {isAggregate: true});
  assert.deepEqual(
    aggregate.trendSeries.map((item) => item.originEntityId).sort(),
    ['amp', 'ams', 'cce', 'ds', 'ist', 'soc', 'sys']
      .map((courseId) => `kyoto-university/informatics/${courseId}`),
    'every Kyoto course must have a summer comparison line',
  );
  const socTrend = aggregate.trendSeries.find((item) => (
    item.originEntityId === 'kyoto-university/informatics/soc'
  ));
  assert.deepEqual(
    socTrend.points.filter((entry) => entry.admissionYear >= 2023 && entry.admissionYear <= 2027)
      .map((entry) => entry.admissionYear),
    [2023, 2024, 2025, 2026, 2027],
    'the separately rated 2024 archive must join the same summer selection',
  );
  const amsTrend = aggregate.trendSeries.find((item) => item.originEntityId === amsEntityId);

  assert.equal(amsTrend.period, 'summer');
  assert.equal(amsTrend.sourceType, 'official');
  assert.deepEqual(
    amsTrend.points.filter((entry) => entry.admissionYear >= 2025 && entry.admissionYear <= 2027)
      .map((entry) => [entry.admissionYear, entry.primaryRatio]),
    [[2025, 39 / 14], [2026, 23 / 14], [2027, 41 / 14]],
  );

  const course = buildSeasonAdmissionView(
    input.filter((item) => item.originEntityId === amsEntityId),
  );
  const historical = course.detailSeries.find((item) => (
    item.period === 'april_admission'
    && item.points.some((entry) => entry.admissionYear === 2001)
  ));
  assert.ok(historical, 'historical all-selection totals remain available separately');
  assert.deepEqual(
    historical.points.filter((entry) => entry.primaryRatio !== null)
      .map((entry) => entry.admissionYear),
    Array.from({length: 12}, (_, index) => 2001 + index),
  );
});
