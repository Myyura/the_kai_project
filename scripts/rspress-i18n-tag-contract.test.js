const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {createRequire} = require('node:module');
const {pathToFileURL} = require('node:url');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const moduleCache = new Map();

function importProjectModule(relativePath) {
  return import(pathToFileURL(path.join(PROJECT_ROOT, relativePath)).href);
}

function loadSourceModule(filename) {
  const resolvedFilename = path.resolve(filename);
  if (moduleCache.has(resolvedFilename)) return moduleCache.get(resolvedFilename).exports;

  const loaded = {exports: {}};
  moduleCache.set(resolvedFilename, loaded);
  const nativeRequire = createRequire(resolvedFilename);
  const localRequire = (request) => {
    const resolved = nativeRequire.resolve(request);
    if (resolved.includes(`${path.sep}src${path.sep}`) && resolved.endsWith('.js')) {
      return loadSourceModule(resolved);
    }
    return nativeRequire(request);
  };
  const source = fs.readFileSync(resolvedFilename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename: resolvedFilename,
    plugins: [transformModules],
  }).code;
  Function('module', 'exports', 'require', '__filename', '__dirname', transformed)(
    loaded,
    loaded.exports,
    localRequire,
    resolvedFilename,
    path.dirname(resolvedFilename),
  );
  return loaded.exports;
}

function messageShape(value, prefix = '') {
  return Object.entries(value || {}).flatMap(([key, nested]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    return nested && typeof nested === 'object' && !Array.isArray(nested)
      ? messageShape(nested, name)
      : [name];
  }).sort();
}

test('single-URL language switching remains separate from Rspress locale routes', () => {
  const config = fs.readFileSync(path.join(PROJECT_ROOT, 'rspress.config.mjs'), 'utf8');
  const switcher = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/components/LanguageSwitcher/index.jsx'),
    'utf8',
  );
  const initializer = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/clientModules/languageInit.js'),
    'utf8',
  );

  assert.match(config, /\n\s*lang:\s*'zh',/);
  assert.match(config, /localeRedirect:\s*'never'/);
  assert.doesNotMatch(
    config,
    /\n\s{2}locales\s*:/,
    'Rspress locales require duplicated locale content trees and prefixed routes',
  );
  assert.match(switcher, /params\.set\('lang', language\)/);
  assert.match(switcher, /stripLegacyLocalePrefix\(location\.pathname\)/);
  assert.match(initializer, /getQueryLanguage\(params\)/);
  assert.match(initializer, /normalizeLegacyLocaleUrl\(legacyRoute, nextLanguage, params\)/);
});

test('every configured navbar label has a complete three-language message', () => {
  const {UI_MESSAGES} = loadSourceModule(
    path.join(PROJECT_ROOT, 'src/i18n/messages.js'),
  );
  const config = fs.readFileSync(path.join(PROJECT_ROOT, 'rspress.config.mjs'), 'utf8');
  const navStart = config.indexOf('    nav: [');
  const navEnd = config.indexOf('    sidebar:', navStart);
  assert.ok(navStart >= 0 && navEnd > navStart, 'themeConfig.nav must remain discoverable');
  const configuredLabels = [...config.slice(navStart, navEnd).matchAll(/\btext:\s*'([^']+)'/g)]
    .map((match) => match[1]);

  assert.ok(configuredLabels.length > 0);
  assert.deepEqual(
    messageShape(UI_MESSAGES.navbar.zh),
    messageShape(UI_MESSAGES.navbar.ja),
  );
  assert.deepEqual(
    messageShape(UI_MESSAGES.navbar.zh),
    messageShape(UI_MESSAGES.navbar.en),
  );
  for (const label of configuredLabels) {
    for (const language of ['zh', 'ja', 'en']) {
      assert.equal(
        typeof UI_MESSAGES.navbar[language][label],
        'string',
        `missing navbar.${language}.${label}`,
      );
      assert.ok(UI_MESSAGES.navbar[language][label].trim());
    }
  }

  for (const label of ['过去问', '经验贴', '个人中心', '更多']) {
    assert.notEqual(UI_MESSAGES.navbar.ja[label], UI_MESSAGES.navbar.zh[label]);
    assert.notEqual(UI_MESSAGES.navbar.en[label], UI_MESSAGES.navbar.zh[label]);
  }
});

test('tag explorer message contracts stay complete across all three languages', () => {
  const {UI_MESSAGES} = loadSourceModule(
    path.join(PROJECT_ROOT, 'src/i18n/messages.js'),
  );

  for (const namespace of ['tagsList', 'docTagList']) {
    const messages = UI_MESSAGES[namespace];
    assert.ok(messages, `missing ${namespace} messages`);
    assert.deepEqual(messageShape(messages.zh), messageShape(messages.ja));
    assert.deepEqual(messageShape(messages.zh), messageShape(messages.en));
  }

  for (const key of ['resultSummary', 'matchingTopics', 'topicsCount']) {
    for (const language of ['zh', 'ja', 'en']) {
      assert.equal(
        typeof UI_MESSAGES.tagsList[language][key],
        'function',
        `tagsList.${language}.${key} must remain a formatter`,
      );
    }
  }
  for (const key of ['docCount', 'resultCount', 'documentStat', 'topicStat', 'schoolStat']) {
    for (const language of ['zh', 'ja', 'en']) {
      assert.equal(
        typeof UI_MESSAGES.docTagList[language][key],
        'function',
        `docTagList.${language}.${key} must remain a formatter`,
      );
    }
  }
});

test('tag taxonomy exposes localized labels and descriptions to the client UI', () => {
  const taxonomy = require('../src/data/tagTaxonomy');
  for (const [kind, records] of [
    ['subject', taxonomy.subjects],
    ['subsubject', taxonomy.subsubjects],
  ]) {
    assert.ok(Object.keys(records).length > 0);
    for (const [id, metadata] of Object.entries(records)) {
      for (const suffix of ['Zh', 'Ja', 'En']) {
        for (const field of ['label', 'description']) {
          const value = metadata[`${field}${suffix}`];
          assert.equal(typeof value, 'string', `${kind} ${id} is missing ${field}${suffix}`);
          assert.ok(value.trim(), `${kind} ${id} has an empty ${field}${suffix}`);
        }
      }
    }
  }
});

test('tag index links preserve one stable route per school/subsubject and anchored topics', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const pages = plugin.addPages();
  const routePaths = new Set(pages.map(({routePath}) => routePath));
  const indexPage = pages.find(({routePath}) => routePath === '/docs/tags');
  assert.ok(indexPage, 'missing /docs/tags');

  const pageData = {
    routePath: indexPage.routePath,
    _filepath: indexPage.filepath,
    frontmatter: {},
  };
  plugin.extendPageData(pageData);
  const {kind, sections} = pageData.generatedIndex;
  assert.equal(kind, 'docs-tag-index');
  assert.ok(sections.length > 1);

  const linkedDetails = new Set();
  const topicLinks = new Set();
  for (const [, , entries] of sections) {
    for (const [, href, count, children = []] of entries) {
      if (href) {
        assert.match(href, /^\/docs\/tags\/(?:school|subsubject)\//);
        assert.ok(routePaths.has(href), `missing generated tag route ${href}`);
        assert.equal(linkedDetails.has(href), false, `duplicate tag entry ${href}`);
        linkedDetails.add(href);
        assert.match(count, /^\d+$/);
        assert.ok(Number(count) > 0, `${href} should not be an empty browse target`);
      }
      for (const [, topicHref, topicCount] of children) {
        const [pathname, anchor] = topicHref.split('#');
        assert.ok(routePaths.has(pathname), `missing topic parent route ${pathname}`);
        assert.match(anchor, /^topic-[a-z0-9-]+$/);
        assert.equal(topicLinks.has(topicHref), false, `duplicate topic target ${topicHref}`);
        topicLinks.add(topicHref);
        assert.match(topicCount, /^\d+$/);
        assert.ok(Number(topicCount) > 0);
      }
    }
  }

  assert.ok(linkedDetails.size > 0);
  assert.ok(topicLinks.size > 0);
  assert.equal(
    pages.some(({routePath}) => routePath.startsWith('/docs/tags/topic/')),
    false,
    'topics browse inside their parent subsubject page rather than duplicate routes',
  );
});
