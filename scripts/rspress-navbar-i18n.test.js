const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function loadLocalizeNavItems() {
  const filename = path.join(PROJECT_ROOT, 'src/rspress/localizeNav.js');
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformModules],
  }).code;
  const module = {exports: {}};
  Function('module', 'exports', transformed)(module, module.exports);
  return module.exports.localizeNavItems;
}

test('navbar localization translates nested Rspress nav items without mutation', () => {
  const localizeNavItems = loadLocalizeNavItems();
  const source = [
    {text: '过去问', link: '/docs/intro'},
    {
      text: '更多',
      items: [
        {text: '参考链接', link: '/links'},
        {text: '支持与合作', link: '/support'},
      ],
    },
  ];
  const translations = {
    过去问: 'Past Exams',
    更多: 'More',
    参考链接: 'Reference Links',
    支持与合作: 'Support & Partnerships',
  };

  const localized = localizeNavItems(source, (text) => translations[text] || text);

  assert.deepEqual(localized, [
    {text: 'Past Exams', link: '/docs/intro'},
    {
      text: 'More',
      items: [
        {text: 'Reference Links', link: '/links'},
        {text: 'Support & Partnerships', link: '/support'},
      ],
    },
  ]);
  assert.equal(source[0].text, '过去问');
  assert.equal(source[1].items[0].text, '参考链接');
  assert.notEqual(localized, source);
  assert.notEqual(localized[1].items, source[1].items);
});

test('custom theme wires the live language state into native Rspress nav chrome', () => {
  const theme = fs.readFileSync(
    path.join(PROJECT_ROOT, 'theme/index.tsx'),
    'utf8',
  );
  const localizedNav = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/LocalizedNav.tsx'),
    'utf8',
  );
  const localizedSearch = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/LocalizedSearch.tsx'),
    'utf8',
  );
  const messages = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/i18n/messages.js'),
    'utf8',
  );

  assert.match(theme, /export const Nav = LocalizedNav/);
  assert.match(localizedNav, /const language = useCurrentLanguage\(\)/);
  assert.match(localizedNav, /getUiMessage\('navbar', text, language\)/);
  assert.match(localizedNav, /<NavScreenMenu menuItems=\{menuItems\}/);
  assert.match(localizedNav, /<NavMenu menuItems=\{localizedNavList\} position="right"/);
  assert.match(localizedNav, /<LocalizedSearch \/>/);
  assert.match(localizedNav, /<LocalizedNavScreenAppearance \/>/);
  assert.match(localizedNav, /role="dialog"/);
  assert.match(localizedNav, /aria-modal="true"/);
  assert.match(localizedNav, /aria-haspopup="dialog"/);
  assert.match(localizedNav, /aria-controls=\{MOBILE_NAV_DIALOG_ID\}/);
  assert.match(localizedNav, /event\.key === 'Escape'/);
  assert.match(localizedNav, /firstFocusable \?\? activeScreen/);
  assert.match(localizedNav, /returnFocusRef\.current\?\.focus/);
  assert.match(localizedSearch, /<RspressSearchPanel focused=\{focused\}/);
  assert.match(localizedSearch, /useUiText\('rspressChrome'\)/);
  assert.match(localizedSearch, /\.rp-search-panel__input/);
  assert.match(localizedSearch, /\.rp-no-search-result__suggestion/);

  for (const label of [
    '过去问',
    '经验贴',
    '个人中心',
    '更多',
    '参考链接',
    '支持与合作',
    '帮助与声明',
  ]) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(messages, new RegExp(`['"]${escaped}['"]\\s*:`));
  }

  for (const text of [
    'Search',
    'Cancel',
    'No matching results',
    '検索',
    'キャンセル',
    '一致する結果が見つかりません',
  ]) {
    assert.match(messages, new RegExp(text));
  }
});
