const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

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

const {
  applyOfficialRatioPrecedence,
  buildAggregateTrendSeries,
  trendPointSourceType,
  trendSegmentSourceType,
} = loadModule();

function point(admissionYear, applicants, admitted, overrides = {}) {
  return {
    admissionYear,
    primaryRatio: applicants / admitted,
    ratioKind: 'applicants_admitted',
    counts: {
      applicants,
      examinees: null,
      admitted,
    },
    ...overrides,
  };
}

function series(sourceType, points, overrides = {}) {
  return {
    id: `${sourceType}-series`,
    sourceType,
    degree: 'master',
    period: 'summer',
    selection: '一般選抜',
    points,
    ...overrides,
  };
}

test('official computed ratios replace community points only for the overlapping year', () => {
  const official = series('official', [point(2026, 120, 40)], {
    comparisonKey: 'master-overall-final-admission',
  });
  const community = series('community', [
    point(2025, 100, 40),
    point(2026, 118, 39, {ratioKind: 'reported'}),
  ], {comparisonKey: 'master-overall-final-admission'});

  const result = applyOfficialRatioPrecedence([official, community], {
    defaultEntityId: 'university/school/program',
  });

  assert.deepEqual(result[1].points.map((item) => item.admissionYear), [2025]);
  assert.equal(result[0], official);
});

test('different periods, selections, and explicit ratio bases remain separate', () => {
  const official = series('official', [point(2026, 120, 40)]);
  const differentPeriod = series('community', [point(2026, 118, 39)], {
    id: 'winter-community',
    period: 'annual',
  });
  const differentSelection = series('community', [point(2026, 118, 39)], {
    id: 'recommendation-community',
    selection: '推薦入試',
  });
  const differentBasis = series('community', [point(2026, 80, 40, {
    ratioKind: 'examinees_admitted',
    counts: {applicants: null, examinees: 80, admitted: 40},
  })]);
  const reportedWithoutKey = series('community', [point(2026, 118, 39, {
    ratioKind: 'reported',
  })], {id: 'reported-without-key'});

  const result = applyOfficialRatioPrecedence([
    official,
    differentPeriod,
    differentSelection,
    differentBasis,
    reportedWithoutKey,
  ], {defaultEntityId: 'university/school/program'});

  assert.equal(result.length, 5);
  assert.ok(result.slice(1).every((item) => item.points.length === 1));
});

test('identical official count pairs remove a redundant derived community point', () => {
  const official = series('official', [point(2026, 147, 45)], {
    selection: '公表された第1次募集合計',
  });
  const duplicate = series('community', [point(2026, 147, 45)], {
    id: 'derived-total',
    period: 'annual',
    selection: '全部志愿者（作者依据官网二次计算）',
  });
  const externalOnly = series('community', [point(2026, 122, 23)], {
    id: 'external-only',
    period: 'annual',
    selection: '外部志愿者（作者依据官网二次计算）',
  });

  const result = applyOfficialRatioPrecedence([
    official,
    duplicate,
    externalOnly,
  ], {defaultEntityId: 'university/school/program'});

  assert.deepEqual(result.map((item) => item.id), ['official-series', 'external-only']);
});

test('official reported ratios and other entities do not suppress community data', () => {
  const reportedOfficial = series('official', [point(2026, 120, 40, {
    ratioKind: 'reported',
    counts: {applicants: null, examinees: null, admitted: null},
  })]);
  const community = series('community', [point(2026, 118, 39)], {
    originEntityId: 'university/school/program-a',
  });
  reportedOfficial.originEntityId = 'university/school/program-b';

  const result = applyOfficialRatioPrecedence([reportedOfficial, community]);

  assert.equal(result.length, 2);
});

test('aggregate trend stitches comparable community gaps into one official-first line', () => {
  const official = series('official', [
    point(2022, 80, 40),
    point(2024, 96, 40),
  ], {
    id: 'official-final',
    key: 'program-a::official-final',
    originEntityId: 'university/school/program-a',
    originLabel: 'Program A',
    comparisonKey: 'master-overall-final-admission',
  });
  const community = series('community', [
    point(2021, 72, 40, {sourceIds: ['community-source']}),
    point(2022, 396, 40, {ratioKind: 'reported'}),
    point(2023, 88, 40),
    point(2024, 396, 40, {ratioKind: 'reported'}),
  ], {
    id: 'community-final',
    key: 'program-a::community-final',
    originEntityId: 'university/school/program-a',
    originLabel: 'Program A',
    comparisonKey: 'master-overall-final-admission',
  });

  const result = buildAggregateTrendSeries([community, official]);

  assert.equal(result.length, 1);
  assert.equal(result[0].key, 'aggregate-trend::university/school/program-a');
  assert.deepEqual(
    result[0].points.map((item) => item.admissionYear),
    [2021, 2022, 2023, 2024],
  );
  assert.deepEqual(
    result[0].points.map((item) => item.trendSourceType),
    ['community', 'official', 'community', 'official'],
  );
  assert.deepEqual(
    result[0].points.map((item) => item.primaryRatio),
    [1.8, 2, 2.2, 2.4],
  );
  assert.deepEqual(result[0].points[0].sourceIds, ['community-source']);
});

test('aggregate trend excludes community points from a different comparison basis', () => {
  const official = series('official', [point(2026, 100, 50)], {
    id: 'official-final',
    key: 'program-a::official-final',
    originEntityId: 'university/school/program-a',
    comparisonKey: 'master-overall-final-admission',
  });
  const screening = series('community', [point(2025, 90, 50)], {
    id: 'community-screening',
    key: 'program-a::community-screening',
    originEntityId: 'university/school/program-a',
    comparisonKey: 'master-document-screening-pass',
  });

  const [result] = buildAggregateTrendSeries([official, screening]);

  assert.deepEqual(result.points.map((item) => item.admissionYear), [2026]);
  assert.equal(result.points[0].trendSourceType, 'official');
});

test('aggregate trend prefers the main summer official series and keeps entities separate', () => {
  const annual = series('official', [
    point(2024, 100, 40),
    point(2025, 120, 40),
  ], {
    id: 'annual-total',
    key: 'program-a::annual-total',
    originEntityId: 'university/school/program-a',
    period: 'annual',
    selection: '年度合計',
  });
  const summer = series('official', [point(2025, 80, 40)], {
    id: 'summer-general',
    key: 'program-a::summer-general',
    originEntityId: 'university/school/program-a',
    period: 'summer',
    selection: '一般選抜',
  });
  const otherProgram = series('community', [point(2025, 60, 40)], {
    id: 'program-b-community',
    key: 'program-b::community',
    originEntityId: 'university/school/program-b',
  });

  const result = buildAggregateTrendSeries([annual, otherProgram, summer]);

  assert.equal(result.length, 2);
  assert.deepEqual(result[0].points.map((item) => item.primaryRatio), [2]);
  assert.equal(result[0].id, 'aggregate-trend-university/school/program-a');
  assert.equal(result[1].points[0].trendSourceType, 'community');
});

test('segment source becomes community when either endpoint is a community fill', () => {
  const composite = {sourceType: 'mixed'};
  const official = {trendSourceType: 'official'};
  const community = {trendSourceType: 'community'};

  assert.equal(trendPointSourceType(composite, official), 'official');
  assert.equal(trendSegmentSourceType(composite, official, official), 'official');
  assert.equal(trendSegmentSourceType(composite, official, community), 'community');
  assert.equal(trendSegmentSourceType(composite, community, official), 'community');
  assert.equal(trendSegmentSourceType(composite, community, community), 'community');
});

test('an official zero-admission year blocks a community ratio fallback', () => {
  const official = series('official', [
    point(2025, 80, 40),
    point(2026, 20, 1, {
      primaryRatio: null,
      counts: {applicants: 20, examinees: null, admitted: 0},
    }),
  ], {
    id: 'official-final',
    key: 'program-a::official-final',
    originEntityId: 'university/school/program-a',
    comparisonKey: 'master-overall-final-admission',
  });
  const community = series('community', [point(2026, 20, 10)], {
    id: 'community-final',
    key: 'program-a::community-final',
    originEntityId: 'university/school/program-a',
    comparisonKey: 'master-overall-final-admission',
  });

  const [result] = buildAggregateTrendSeries([official, community]);

  assert.deepEqual(result.points.map((item) => item.admissionYear), [2025]);
});
