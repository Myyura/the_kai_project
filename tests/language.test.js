const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const createSourceLoader = require('./helpers/load-source.cjs');

function browser(url, stored = 'zh', blocked = false) {
  const attributes = {};
  const globals = {
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

test('language startup prioritizes valid query, old bookmark locale, stored choice, then default', () => {
  for (const [url, stored, expected] of [
    ['/ja/docs/a?lang=en#kai', 'zh', 'en'], ['/ja/docs/a?lang=bad', 'en', 'ja'],
    ['/en', 'ja', 'en'], ['/docs/a', 'ja', 'ja'], ['/docs/a?lang=bad', 'bad', 'zh'],
    ['/docs/a?lang=toString', 'zh', 'zh'],
  ]) {
    const result = browser(url, stored);
    assert.equal(result.attributes['data-lang'], expected);
    assert.equal(result.attributes.lang, {zh: 'zh-CN', ja: 'ja-JP', en: 'en-US'}[expected]);
    assert.equal(result.stored(), expected);
  }
});

test('old bookmark normalization and language switching preserve query, fragment, and history state', () => {
  const {globals, load} = browser('/ja/docs/a/?search=test&lang=en#kai');
  assert.deepEqual(globals.window.history.last, {state: {key: 'existing'}, title: 'Kai', url: '/docs/a?search=test&lang=en#kai'});
  const {buildLanguageUrl, getLegacyLocaleRoute} = load('src/i18n/languageUrl.js');
  assert.equal(getLegacyLocaleRoute('/engineering'), null);
  assert.equal(getLegacyLocaleRoute('/japan/docs'), null);
  assert.deepEqual(buildLanguageUrl({pathname: '/docs/a/', search: '?page=2', hash: '#answer'}, 'ja'), {
    pathname: '/docs/a', search: '?page=2&lang=ja', hash: '#answer',
  });
  assert.deepEqual(buildLanguageUrl({pathname: '/en/'}, 'en'), {pathname: '/', search: '?lang=en', hash: ''});
});

test('blocked storage does not prevent language initialization or switching', () => {
  const {attributes, load} = browser('/docs/a?lang=ja', 'en', true);
  assert.equal(attributes['data-lang'], 'ja');
  const {applyLanguage, getStoredLanguage} = load('src/i18n/browserLanguage.js');
  assert.equal(getStoredLanguage(), 'zh');
  applyLanguage('en');
  assert.equal(attributes.lang, 'en-US');
});

test('language startup is safe during server rendering', () => {
  assert.doesNotThrow(() => createSourceLoader({window: undefined, document: undefined})('src/clientModules/languageInit.js'));
});

test('every UI text namespace used by the application exists in all three languages', () => {
  const {getUiMessages, UI_MESSAGES} = createSourceLoader()('src/i18n/messages.js');
  const namespaces = new Set();
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(filename);
      else if (/\.(?:js|jsx|ts|tsx)$/.test(filename)) {
        for (const match of fs.readFileSync(filename, 'utf8').matchAll(/(?:useUiText|getUiMessages|getUiMessage)\(['"]([^'"]+)['"]/g)) namespaces.add(match[1]);
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
