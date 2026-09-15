const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');
const {buildCatalog} = require('../plugins/experience-blog/catalog.cjs');
const {readExternalExperiences} = require('../src/data/experiences/external.cjs');
const {readFilters, filterSearch, filterEntries} = require('../src/components/ExperienceCatalog/model.cjs');
const {catalogScopes, examUniversities} = require('../src/data/universityCatalog.cjs');

const universities = [
  {id: 'tokyo', name: '東京大学', aliases: ['东大'], departments: [
    {id: 'ist', name: '情報理工学系研究科', aliases: ['IST'], programs: [{id: 'cs', name: 'コンピュータ科学', aliases: ['CS']}]},
    {id: 'frontier', name: '新領域創成科学研究科', programs: [{id: 'cbms', name: 'メディカル情報生命', aliases: ['CBMS']}]},
  ]},
  {id: 'kyoto', name: '京都大学', departments: [
    {id: 'informatics', name: '情報学研究科', programs: [{id: 'cce', name: '通信情報システム'}]},
  ]},
];
const external = [{title: '跨专攻经验', url: 'https://example.com/story', placements: [{scope: 'tokyo/ist/cs', examYear: 2024, season: 'summer'}, {scope: 'tokyo/frontier/cbms', examYear: 2025, season: 'winter'}]}];
const native = (frontMatter = {experience: [{scope: 'kyoto/informatics/cce', season: 'winter'}]}) => ({metadata: {title: '站内经验', date: '2025-04-02T00:00:00.000Z', permalink: '/blog/native', source: '@site/blog/native.md', authors: [{name: 'Alice'}], frontMatter}});
const build = (overrides = {}) => buildCatalog({universities, external, blogPosts: [native()], siteUrl: 'https://runjp.com', ...overrides});

test('catalog keeps direct external URLs and canonical native permalinks without article bodies', () => {
  const catalog = build();
  assert.equal(catalog.entries[0].url, external[0].url);
  assert.equal(catalog.entries[0].kind, 'external');
  assert.equal(catalog.entries[1].url, '/blog/native');
  assert.equal(catalog.entries[1].kind, 'internal');
  assert.deepEqual(catalog.entries[1].authors, ['Alice']);
  assert.equal(catalog.entries[1].placements[0].year, 2025);
  assert.equal(catalog.entries[1].placements[0].yearSource, 'publication');
  assert.equal(JSON.stringify(catalog).includes('@site/blog/native.md'), false);
});

test('drafts and unlisted articles never enter the directory', () => {
  const hidden = native({});
  hidden.metadata.unlisted = true;
  assert.equal(build({blogPosts: [hidden, native({draft: true})]}).entries.length, 1);
});

test('invalid classifications, years, duplicate URLs and unsafe links fail the build', () => {
  assert.throws(() => build({blogPosts: [native({})]}), /needs experience classifications/);
  assert.throws(() => build({blogPosts: [native({experience: [{scope: 'missing'}]})]}), /unknown catalog scope/);
  assert.throws(() => build({blogPosts: [native({experience: [{scope: 'tokyo/ist/cs', examYear: '2025'}]})]}), /invalid examYear/);
  assert.throws(() => build({external: [...external, ...external]}), /duplicate external URL/);
  for (const url of ['javascript:alert(1)', '/blog/local', 'https://runjp.com/blog/local', 'https://user:pass@example.com']) {
    assert.throws(() => build({external: [{...external[0], url}]}), /Experience catalog/);
  }
});

test('program and year must match the same placement, and multi-program stories appear once', () => {
  const catalog = build();
  assert.equal(filterEntries(catalog, {school: 'tokyo'}).length, 1);
  assert.equal(filterEntries(catalog, {program: 'tokyo/ist/cs', year: '2024'}).length, 0);
  assert.equal(filterEntries(catalog, {program: 'tokyo/frontier/cbms', year: '2025'}).length, 1);
  assert.equal(filterEntries(catalog, {school: 'kyoto', year: '2025'}).length, 1);
  assert.equal(filterEntries(catalog, {kind: 'internal'}).length, 1);
});

test('title, author, school aliases and program aliases filter without indexing bodies', () => {
  const catalog = build();
  for (const q of ['东大', 'ｃｂｍｓ', '跨专攻', 'alice', 'IST']) assert.equal(filterEntries(catalog, {q}).length, 1);
  assert.equal(filterEntries(catalog, {q: '东大 cbms'}).length, 1);
  assert.equal(filterEntries(catalog, {program: 'tokyo/ist/cs', q: 'cbms'}).length, 0);
  assert.equal(filterEntries(catalog, {q: 'does not exist'}).length, 0);
});

test('sorting uses years within the selected program, including publication-year fallbacks', () => {
  const catalog = build({external: [...external, {title: 'Recent CS', url: 'https://example.com/recent', placements: [{scope: 'tokyo/ist/cs', admissionYear: 2026}]}]});
  assert.equal(filterEntries(catalog, {program: 'tokyo/ist/cs'})[0].entry.title, 'Recent CS');
  assert.equal(filterEntries(catalog, {})[0].entry.title, 'Recent CS');
  assert.equal(filterEntries(catalog, {})[1].entry.kind, 'internal');
});

test('admission years combine summer and winter exams while preserving actual exam dates', () => {
  const catalog = build();
  assert.deepEqual(catalog.entries[0].placements.map(({year, examYear, yearSource}) => ({year, examYear, yearSource})), [
    {year: 2025, examYear: 2024, yearSource: 'exam'},
    {year: 2025, examYear: 2025, yearSource: 'exam'},
  ]);
  assert.equal(filterEntries(catalog, {year: '2025', school: 'tokyo'}).length, 1);
  assert.equal(filterEntries(catalog, {year: '2024', school: 'tokyo'}).length, 0);
});

test('explicit enrollment dates override inferred years; publication fallbacks are never shifted', () => {
  const placements = [
    {scope: 'tokyo/ist/cs', admissionYear: 2024, examYear: 2024, season: 'summer'},
    {scope: 'tokyo/ist/cs', examYear: 2025, season: 'summer'},
    {scope: 'kyoto/informatics/cce', season: 'summer'},
    {scope: 'tokyo/frontier/cbms', examYear: 2023},
  ];
  const post = native({experience: placements});
  const catalog = build({blogPosts: [post], external: [{...external[0], publishedYear: 2025, placements}]});
  for (const entry of catalog.entries) {
    assert.deepEqual(entry.placements.map(p => [p.year, p.yearSource]), [[2024, 'admission'], [2026, 'exam'], [2025, 'publication'], [2025, 'publication']]);
  }
  assert.equal(placements[0].year, undefined);
  assert.equal(filterEntries(catalog, {program: 'tokyo/ist/cs', year: '2026'}).length, 2);
  assert.throws(() => build({external: [{...external[0], publishedYear: '2026'}]}), /invalid publication year/);
  assert.throws(() => build({external: [{...external[0], placements: [{scope: 'tokyo/ist/cs', year: 2025}]}]}), /unexpected classification field/);
});

test('URL filters round trip, infer the parent school and reject stale combinations', () => {
  const catalog = build();
  const filters = readFilters('?program=tokyo/frontier/cbms&year=2025&kind=external&q=东大&page=2', catalog);
  assert.equal(filters.school, 'tokyo');
  assert.deepEqual(readFilters(filterSearch(filters), catalog), filters);
  assert.equal(readFilters('?school=kyoto&program=tokyo/ist/cs', catalog).program, '');
  assert.equal(readFilters('?school=missing&kind=oops&year=oops&page=-1', catalog).page, 1);
  assert.equal(filterSearch({page: 1, q: ''}), '');
});

test('partial classifications retain the known school or department without inventing a program', () => {
  const catalog = build({external: [{...external[0], placements: [{scope: 'tokyo/ist', admissionYear: 2024}, {scope: 'kyoto', admissionYear: 2024}]}], blogPosts: []});
  assert.equal(filterEntries(catalog, {school: 'tokyo'}).length, 1);
  assert.equal(filterEntries(catalog, {school: 'kyoto'}).length, 1);
  assert.equal(filterEntries(catalog, {program: 'tokyo/ist/cs'}).length, 0);
  assert.equal(catalog.programs.find((scope) => scope.id === 'tokyo/ist').level, 'department');
  assert.equal(catalog.programs.find((scope) => scope.id === 'kyoto').level, 'school');
});

test('experience labels and aliases come from the exam hierarchy, including categories without exam pages', () => {
  const {universities: shared} = require('../src/data/universities');
  const scopes = catalogScopes(shared);
  const entries = readExternalExperiences();
  const catalog = build({universities: shared, external: entries, blogPosts: []});
  for (const scope of catalog.programs) {
    const category = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs', scope.id, '_category_.json'), 'utf8'));
    assert.equal(scope.name, category.label);
    assert.deepEqual(scope.aliases, category.customProps?.aliases || []);
  }
  assert.ok(scopes.has('naist/science_and_technology/information_science'));
  const exams = catalogScopes(examUniversities(shared));
  assert.equal(exams.has('naist'), false);
  assert.equal(exams.has('kyoto-university/informatics/ds'), false);
  assert.ok(exams.has('kyoto-university/informatics/ist'));
  // A former school name is an alias of the same current catalog identity.
  assert.equal(catalog.schools.some((school) => school.id === 'tokyo-tech'), false);
  assert.ok(filterEntries(catalog, {school: 'institute-of-science-tokyo', q: '东京工业大学'}).length > 0);
});

test('reviewed multi-school stories appear under every confirmed classification, once per result', () => {
  const catalog = build({universities: require('../src/data/universities').universities, external: readExternalExperiences(), blogPosts: []});
  const story = catalog.entries.find((entry) => entry.url.endsWith('/15649718406'));
  for (const scope of ['tokyo-university/IST/ci', 'tokyo-university/engineering/eeis', 'kyoto-university/informatics/ist', 'osaka-university/IST/ie']) {
    assert.equal(filterEntries(catalog, {program: scope}).filter(({entry}) => entry.url === story.url).length, 1);
  }
  assert.equal(filterEntries(catalog, {school: 'tokyo-university'}).filter(({entry}) => entry.url === story.url).length, 1);
  const corrected = catalog.entries.find((entry) => entry.url.endsWith('/97064397'));
  assert.deepEqual(corrected.placements.map((placement) => placement.scope), ['tokyo-university/engineering/eeis']);
  const fivePrograms = catalog.entries.find((entry) => entry.url.endsWith('/48528328'));
  assert.equal(fivePrograms.placements.length, 5);
  assert.ok(fivePrograms.placements.some((placement) => placement.scope === 'institute-of-science-tokyo/engineering/ict'));
});

test('all repository experiences have valid classifications and unique external destinations', () => {
  const blogDirectory = path.join(__dirname, '../blog');
  const blogPosts = fs.readdirSync(blogDirectory).filter((file) => /\.mdx?$/.test(file)).map((file) => {
    const {data} = matter(fs.readFileSync(path.join(blogDirectory, file), 'utf8'));
    return {metadata: {title: data.title, date: data.date || file.slice(0, 10), source: file, permalink: `/blog/${file}`, authors: [], frontMatter: data}};
  });
  const catalog = build({universities: require('../scripts/generate-universities').generateUniversities({check: true}), external: readExternalExperiences(), blogPosts});
  assert.ok(catalog.entries.length > 0);
  assert.equal(new Set(catalog.entries.map((entry) => entry.url)).size, catalog.entries.length);
});

test('reviewed timelines use admission cohorts, retain separate exam attempts and remove dead links', () => {
  const catalog = build({universities: require('../src/data/universities').universities, external: readExternalExperiences(), blogPosts: []});
  const story = (id) => catalog.entries.find((entry) => entry.url.endsWith(`/${id}`));
  assert.equal(story('713849111').placements[0].year, 2025);
  assert.equal(story('713849111').placements[0].examYear, 2024);
  for (const id of ['83878409', '81424796']) {
    assert.equal(story(id).placements.length, 1);
    assert.equal(story(id).placements[0].year, 2020);
    assert.equal(story(id).placements[0].examYear, 2019);
  }
  assert.equal(story('107750734').placements[0].year, 2020);
  assert.equal(story('44068710').placements[0].year, 2019);
  assert.deepEqual(story('77564287').placements.map(p => p.year), [2020, 2020, 2019]);
  const attempts = story('408304074').placements.filter(p => p.scope === 'tokyo-university/IST/denshi');
  assert.equal(attempts.length, 3);
  assert.deepEqual(attempts.map(p => p.year), [2020, 2020, 2021]);
  assert.equal(filterEntries(catalog, {program: 'tokyo-university/IST/denshi', year: '2020'}).filter(({entry}) => entry === story('408304074')).length, 1);
  for (const id of ['662568837', '203042189']) assert.equal(story(id).placements[0].yearSource, 'publication');
  for (const id of ['718738875', '409460463']) assert.equal(story(id), undefined);
});
