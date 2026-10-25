const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const createSourceLoader = require('./helpers/load-source.cjs');

function browser(url, stored = null, blocked = false, languagePreferences = {}) {
  const attributes = {};
  const globals = {
    navigator: languagePreferences,
    localStorage: {
      getItem() { if (blocked) throw new Error('Blocked storage'); return stored; },
      setItem(key, value) { if (blocked) throw new Error('Blocked storage'); stored = value; },
    },
    document: {title: 'Kai', documentElement: {setAttribute: (key, value) => {attributes[key] = value;}}},
    window: {
      location: new URL(url, 'https://runjp.com'),
      history: {state: {key: 'existing'}, replaceState(state, title, url) {this.last = {state, title, url};}},
    },
  };
  const load = createSourceLoader(globals);
  load('src/clientModules/languageInit.js');
  return {attributes, globals, load, stored: () => stored};
}

test('language startup prioritizes valid query, stored choice, browser preferences, then default', () => {
  for (const [url, stored, expected] of [
    ['/docs/a?lang=en#kai', 'zh', 'en'], ['/docs/a?lang=bad', 'en', 'en'], ['/docs/a', 'zh', 'zh'], ['/docs/a?lang=bad', 'bad', 'ja'],
    ['/docs/a?lang=toString', 'zh', 'zh'], ['/docs/a', null, 'ja'],
  ]) {
    const result = browser(url, stored, false, {languages: ['ja-JP', 'en-US'], language: 'ja-JP'});
    assert.equal(result.attributes['data-lang'], expected);
    assert.equal(result.attributes.lang, {zh: 'zh-CN', ja: 'ja-JP', en: 'en-US'}[expected]);
    assert.equal(result.stored(), expected);
  }
  assert.equal(browser('/docs/a').attributes['data-lang'], 'zh');
});

test('first visits match browser language variants in preference order', () => {
  for (const [languagePreferences, expected] of [
    [{languages: ['en-US', 'ja-JP'], language: 'ja-JP'}, 'en'],
    [{languages: ['fr-FR', 'ja-JP', 'en-US']}, 'ja'],
    [{languages: ['zh-Hant-TW', 'en-US']}, 'zh'],
    [{languages: ['zh-CN']}, 'zh'],
    [{languages: ['EN-gb']}, 'en'],
    [{language: 'ja-JP'}, 'ja'],
    [{languages: [], language: 'en-GB'}, 'en'],
    [{languages: ['fr-FR', 'de-DE'], language: 'fr-FR'}, 'zh'],
    [{}, 'zh'],
  ]) {
    const {attributes} = browser('/docs/a', null, false, languagePreferences);
    assert.equal(attributes['data-lang'], expected, JSON.stringify(languagePreferences));
    assert.equal(attributes.lang, {zh: 'zh-CN', ja: 'ja-JP', en: 'en-US'}[expected]);
  }
});

test('a manual language choice is retained over browser preferences on the next visit', () => {
  const firstVisit = browser('/docs/a', null, false, {languages: ['ja-JP']});
  assert.equal(firstVisit.attributes['data-lang'], 'ja');
  firstVisit.load('src/i18n/browserLanguage.js').applyLanguage('en');
  const nextVisit = browser('/docs/b', firstVisit.stored(), false, {languages: ['ja-JP']});
  assert.equal(nextVisit.attributes['data-lang'], 'en');
});

test('language switching preserves the current route, query, fragment, and history', () => {
  const {globals, load} = browser('/docs/a/?search=test&lang=en#kai');
  assert.equal(globals.window.history.last, undefined);
  const {buildLanguageUrl} = load('src/i18n/languageUrl.js');
  assert.deepEqual(buildLanguageUrl({pathname: '/docs/a/', search: '?page=2', hash: '#answer'}, 'ja'), {
    pathname: '/docs/a', search: '?page=2&lang=ja', hash: '#answer',
  });
  assert.deepEqual(buildLanguageUrl({pathname: '/docs/a', search: '?school=tokyo&lang=en'}, 'ja'), {
    pathname: '/docs/a', search: '?school=tokyo&lang=ja', hash: '',
  });
});

test('blocked storage does not prevent language initialization or switching', () => {
  const {attributes, load} = browser('/docs/a?lang=ja', 'en', true);
  assert.equal(attributes['data-lang'], 'ja');
  const {applyLanguage, getStoredLanguage} = load('src/i18n/browserLanguage.js');
  assert.equal(getStoredLanguage(), null);
  applyLanguage('en');
  assert.equal(attributes.lang, 'en-US');
  const withoutQuery = browser('/docs/a', 'zh', true, {languages: ['en-US']});
  assert.equal(withoutQuery.attributes['data-lang'], 'en');
});

test('language startup is safe during server rendering', () => {
  assert.doesNotThrow(() => createSourceLoader({window: undefined, document: undefined})('src/clientModules/languageInit.js'));
  const {getBrowserLanguage} = createSourceLoader({navigator: undefined})('src/i18n/browserLanguage.js');
  assert.equal(getBrowserLanguage(), 'zh');
});

test('every UI text namespace used by the application exists in all three languages', () => {
  const {getUiMessages, UI_MESSAGES} = createSourceLoader()('src/i18n/messages.js');
  const namespaces = new Set();
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(filename);
      else if (/\.(?:js|jsx|ts|tsx)$/.test(filename)) {
        for (const match of fs.readFileSync(filename, 'utf8').matchAll(/(?:useUiText|getUiMessages)\(['"]([^'"]+)['"]/g)) namespaces.add(match[1]);
      }
    }
  };
  walk(path.resolve(__dirname, '../src'));
  assert.ok(namespaces.has('developers'));
  for (const namespace of namespaces) {
    for (const lang of ['zh', 'ja', 'en']) {
      assert.ok(UI_MESSAGES[namespace]?.[lang], `${namespace}/${lang} has its own translations`);
      assert.ok(Object.keys(getUiMessages(namespace, lang)).length, `${namespace}/${lang} is populated`);
    }
  }
  assert.equal(getUiMessages('developers', 'ja').apiTitle, 'JSON API');
});
