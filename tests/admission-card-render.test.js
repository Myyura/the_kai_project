const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const {parseFragment} = require('parse5');

const componentDir = path.resolve(__dirname, '../src/components/AdmissionTrendCard');

function renderCard(data) {
  const cache = new Map();
  const mocks = {
    '@docusaurus/Link': ({to, children, ...props}) => React.createElement('a', {...props, href: to}, children),
    '@site/src/data/admissionStats.generated.json': data,
    '@site/src/hooks/useAuth': {useAuth: () => ({isLoggedIn: false})},
    '@site/src/services/authReturn': {saveAuthReturnIntent: () => {}},
  };
  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports;
    const loaded = {exports: {}};
    cache.set(filename, loaded);
    const localRequire = (request) => {
      if (Object.hasOwn(mocks, request)) return mocks[request];
      if (request.endsWith('.css')) {
        return {__esModule: true, default: new Proxy({}, {get: (_, key) => key})};
      }
      if (request.startsWith('.')) return load(require.resolve(path.resolve(path.dirname(filename), request)));
      return require(request);
    };
    const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
      filename,
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    });
    Function('module', 'exports', 'require', code)(loaded, loaded.exports, localRequire);
    return loaded.exports;
  }
  const Card = load(path.join(componentDir, 'index.jsx')).default;
  return parseFragment(renderToStaticMarkup(React.createElement(Card, {slug: '/category/example'})));
}

function textContent(node) {
  return node.nodeName === '#text' ? node.value : (node.childNodes || []).map(textContent).join('');
}

function elements(node, predicate) {
  return [...(predicate(node) ? [node] : []), ...(node.childNodes || []).flatMap((child) => elements(child, predicate))];
}

function hasClass(node, name) {
  return node.attrs?.find((attr) => attr.name === 'class')?.value.split(' ').includes(name);
}

function point(admissionYear, applicants, admitted, sourceId) {
  return {admissionYear, applicants, admitted, sourceIds: [sourceId]};
}

function series(id, period, selection, points) {
  return {id, label: `${period}原系列 · ${selection}`, degree: 'master', sourceType: 'official', period, selection, points};
}

function aggregateData(scopes = ['graduate_school_total', 'graduate_school_total']) {
  return {
    pagesBySlug: {},
    aggregatePagesBySlug: {'/category/example': {entityId: 'example', label: 'Example', childEntityIds: ['first', 'second']}},
    statsByEntity: {
      first: {entityId: 'first', label: '情報科学研究科', scope: scopes[0], series: [
        series('summer', 'summer', '一般選抜', [point(2022, 200, 100, 'summer-source'), point(2023, 240, 100, 'summer-source')]),
        series('april', 'april_admission', '全类别合计', [point(2024, 361, 199, 'april-source')]),
      ]},
      second: {entityId: 'second', label: '工学研究科', scope: scopes[1], series: [
        series('other-april', 'april_admission', '全类别合计', [point(2024, 982, 858, 'other-source')]),
      ]},
    },
    sourcesById: {
      'summer-source': {title: '夏季原始证据'},
      'april-source': {title: '被隐藏的四月原始证据'},
      'other-source': {title: '工学原始证据'},
    },
  };
}

test('school aggregate names graduate schools and exposes each selected comparison basis', () => {
  const document = renderCard(aggregateData());
  const allText = textContent(document);
  assert.ok(allText.includes('直属研究科入试趋势'));
  assert.ok(allText.includes('2 个研究科'));
  assert.ok(!allText.includes('直属专攻'));
  const legend = elements(document, (node) => hasClass(node, 'legendButton')).map(textContent);
  assert.deepEqual(legend, ['情報科学研究科夏季 · 一般選抜 · 志愿 / 合格', '工学研究科4月入学 · 全类别合计 · 志愿 / 合格']);
  assert.ok(allText.includes('代表系列期间、选拔或倍率口径不同'));
  const ariaDescriptions = elements(document, (node) => hasClass(node, 'dataPoint'))
    .map((node) => node.attrs.find((attr) => attr.name === 'aria-label').value);
  assert.ok(ariaDescriptions.some((label) => label.includes('夏季 · 一般選抜')));
  assert.ok(ariaDescriptions.some((label) => label.includes('4月入学 · 全类别合计')));
});

test('aggregate details retain newer different-basis data with its original label and source', () => {
  const document = renderCard(aggregateData());
  const cards = elements(document, (node) => hasClass(node, 'summaryItem')).map(textContent);
  assert.equal(cards.length, 3);
  assert.ok(cards.some((text) => text.includes('april_admission原系列 · 全类别合计')
    && text.includes('2024年度') && text.includes('志愿者361') && text.includes('合格者199')));
  assert.ok(textContent(document).includes('被隐藏的四月原始证据'));
});

test('aggregate headings follow program, course, and mixed child scopes', () => {
  for (const [scopes, unit] of [
    [['program', 'program'], '专攻'],
    [['course', 'course'], '课程'],
    [['graduate_school_total', 'program'], '招生单位'],
    [['program', undefined], '招生单位'],
  ]) {
    assert.ok(textContent(renderCard(aggregateData(scopes))).includes(`直属${unit}入试趋势`));
  }
});

test('aggregate summer counts-only evidence remains visible and distinguishes missing counts from zero', () => {
  const data = aggregateData();
  data.statsByEntity.first.series = [series('zero', 'summer', '一般選抜', [point(2026, 8, 0, 'summer-source')])];
  data.statsByEntity.second.series = [series('unknown', 'april_admission', '全类别合计', [point(2026, null, 3, 'other-source')])];
  const document = renderCard(data);
  const cards = elements(document, (node) => hasClass(node, 'summaryItem')).map(textContent);
  assert.equal(cards.length, 2);
  assert.ok(cards[0].includes('不适用'));
  assert.ok(cards[0].includes('合格者0'));
  assert.ok(cards[1].includes('未公开'));
  assert.ok(!cards[1].includes('志愿者0'));
  assert.ok(textContent(document).includes('当前没有可绘制的倍率'));
});

test('counts-only history and its source limitations stay accessible beyond the chart window', () => {
  const data = {
    pagesBySlug: {'/category/example': 'sample'}, aggregatePagesBySlug: {},
    statsByEntity: {sample: {scope: 'program', series: [
      series('enrollment', 'april_admission', '全部', Array.from({length: 15}, (_, i) => ({
        admissionYear: 2010 + i, enrolled: 20 + i, sourceIds: [i === 0 ? 'old' : 'recent'],
      }))),
    ]}},
    sourcesById: {old: {title: '旧官方资料', url: 'https://example.edu/old', notes: ['旧原件暂时无法重取。']}, recent: {title: '新官方资料'}},
  };
  const document = renderCard(data);
  const history = elements(document, node => node.nodeName === 'details' && hasClass(node, 'history'))[0];
  assert.ok(history);
  const rows = elements(history, node => node.nodeName === 'tbody').flatMap(node => elements(node, child => child.nodeName === 'tr'));
  assert.equal(rows.length, 15);
  assert.ok(textContent(history).includes('2010'));
  assert.ok(textContent(document).includes('旧原件暂时无法重取。'));
  assert.ok(elements(history, node => node.nodeName === 'a').some(node => node.attrs.some(attr => attr.name === 'href' && attr.value === 'https://example.edu/old')));
});

test('direct pages retain zero admissions and suppress a same-basis community ratio', () => {
  const official = series('zero', 'summer', '一般選抜', [point(2026, 8, 0, 'official')]);
  const community = {...series('community', 'summer', '一般選抜', [point(2026, 8, 4, 'community')]), sourceType: 'community'};
  const data = {pagesBySlug: {'/category/example': 'sample'}, aggregatePagesBySlug: {},
    statsByEntity: {sample: {scope: 'program', series: [official, community]}}, sourcesById: {}};
  const document = renderCard(data);
  assert.ok(textContent(document).includes('不适用'));
  assert.ok(!textContent(document).includes('民间数据'));
});
