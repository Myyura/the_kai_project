const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const {parseFragment} = require('parse5');
const createHookRuntime = require('./helpers/hook-runtime.cjs');
const {buildCatalog} = require('../plugins/experience-blog/catalog.cjs');

const root = path.resolve(__dirname, '..');
const compiled = new Map();
const css = {__esModule: true, default: new Proxy({}, {get: (_, key) => key})};
const universities = [{id: 'tokyo', name: '東京大学', departments: [
  {id: 'ist', name: '情報理工学系研究科', programs: [{id: 'cs', name: 'コンピュータ科学'}]},
]}];
const Link = ({to, children, ...props}) => React.createElement('a', {...props, href: to}, children);
const Empty = () => null;

function sourceLoader(mocks = {}) {
  const cache = new Map();
  const load = (filename) => {
    const jsxPath = [filename + '.jsx', path.join(filename, 'index.jsx')].find(candidate => fs.existsSync(candidate));
    filename = jsxPath || require.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const loaded = {exports: {}};
    cache.set(filename, loaded);
    const localRequire = (request) => {
      if (Object.hasOwn(mocks, request)) return mocks[request];
      if (request.endsWith('.css')) return css;
      if (request.startsWith('@site/')) return load(path.join(root, request.slice(6)));
      if (request.startsWith('.')) return load(path.resolve(path.dirname(filename), request));
      return require(request);
    };
    if (!compiled.has(filename)) {
      compiled.set(filename, babel.transformSync(fs.readFileSync(filename, 'utf8'), {
        filename, babelrc: false, configFile: false,
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }).code);
    }
    Function('module', 'exports', 'require', compiled.get(filename))(loaded, loaded.exports, localRequire);
    return loaded.exports;
  };
  return load;
}

const load = sourceLoader();
const {experienceContributionHref, getContributionMode} = load(path.join(root, 'src/utils/contributionRoutes.js'));
const {getUiMessages} = load(path.join(root, 'src/i18n/messages.js'));

function dependencies(location, signedIn = true) {
  return {
    '@docusaurus/Link': Link,
    '@docusaurus/router': {useLocation: () => location, useHistory: () => ({}),
      Redirect: ({to}) => React.createElement('a', {'data-redirect': true, href: to})},
    '@docusaurus/BrowserOnly': ({children}) => children(),
    '@docusaurus/useIsBrowser': () => true,
    '@theme/Layout': ({children}) => React.createElement(React.Fragment, null, children),
    '@site/src/hooks/useAuth': {useAuth: () => ({isConfigured: true, isLoggedIn: signedIn,
      authReady: true, user: signedIn ? {email: 'reader@example.test'} : null})},
    '@site/src/hooks/usePublicProfile': {usePublicProfile: () => ({profile: {displayName: 'Reader', nicknameConfirmed: true}})},
    '@site/src/context/LanguageContext': {useCurrentLanguage: () => 'zh', getLanguageLocale: () => 'zh-CN'},
    '@site/src/i18n/useUiText': {useUiText: (namespace) => getUiMessages(namespace, 'zh')},
    '@site/src/components/Chemistry/useDocumentColorMode': () => 'light',
    '@site/src/services/supabaseClient': {getSupabaseClient: () => null},
    '@site/src/services/authService': {getVerifiedAccessToken: async () => null},
    '@site/src/services/authReturn': {saveAuthReturnIntent() {}, consumeAuthReturnIntent() {}},
    '@site/src/services/edgeFunctionErrors': {},
    '@site/src/services/documentMetadata': {getDocumentTitle: (_id, fallback) => fallback},
    '@site/src/services/correctionDiff': {},
    '@site/src/components/NoteEditor/markdownRenderer': {},
    '@site/src/data/universities': {universities},
    '@site/src/data/tagTaxonomy': {},
    '@site/src/utils/tags': {getTagLabel: (tag) => tag},
    '@site/src/utils/contributionRoutes': {experienceContributionHref, getContributionMode},
    '@site/supabase/functions/content-submissions/experience.ts': {},
    '@site/src/components/AdmissionDataContribution': Empty,
    '@site/src/hooks/useProgress': {},
    '@site/src/hooks/useNotes': {},
    '@site/src/hooks/useReputation': {},
    '@site/src/hooks/useProblemSetsFeature': {useProblemSetsFeature: () => false},
    '@site/src/services/personalCenterData': {},
    ...Object.fromEntries(['Leaderboard', 'NoIndex', 'DeveloperApiContent', 'AgentTutorContent',
      'ProblemSetsContent', 'BrowseSearchField', 'BrowseEmptyState']
      .map((name) => [`@site/src/components/${name}`, Empty])),
  };
}

function render(relativePath, search = '', signedIn = true, props = {}) {
  const location = {pathname: '/me', search, hash: ''};
  const module = sourceLoader(dependencies(location, signedIn))(path.join(root, relativePath));
  return parseFragment(renderToStaticMarkup(React.createElement(module.default || module.ContributeContent, props)));
}
const elements = (node, predicate) => [
  ...(predicate(node) ? [node] : []),
  ...(node.childNodes || []).flatMap((child) => elements(child, predicate)),
];
const attr = (node, name) => node.attrs?.find((value) => value.name === name)?.value;
const hasClass = (node, name) => attr(node, 'class')?.split(' ').includes(name);
const visible = (node) => attr(node, 'hidden') === undefined && (!node.parentNode || visible(node.parentNode));
const treeElements = (node, predicate) => !node || typeof node !== 'object' ? [] : [
  ...(predicate(node) ? [node] : []),
  ...[node.props?.children].flat(Infinity).flatMap(child => treeElements(child, predicate)),
];

test('experience links encode scopes without allowing them to alter the contribution route', () => {
  for (const scope of ['', 'tokyo/ist/cs', '東京大学/数理', 'scope?type=correction&tab=overview#draft']) {
    const url = new URL(experienceContributionHref(scope), 'https://example.test');
    assert.equal(url.pathname, '/me');
    assert.equal(url.searchParams.get('tab'), 'contribute');
    assert.equal(url.searchParams.get('type'), 'experience');
    assert.equal(url.searchParams.get('scope'), scope || null);
    assert.equal(url.hash, '');
  }
});

test('explicit experience and admission modes preserve stale correction context without selecting it', () => {
  for (const type of ['experience', 'admission_data']) {
    assert.equal(getContributionMode(`?tab=contribute&type=${type}&docId=tokyo/math`), type);
  }
  for (const search of ['', '?tab=contribute', '?type=new_solution', '?type=unknown']) {
    assert.equal(getContributionMode(search), 'new_solution');
  }
  for (const search of ['?type=correction', '?docId=tokyo/math', '?type=new_solution&docId=tokyo/math']) {
    assert.equal(getContributionMode(search), 'correction');
  }
});

test('legacy experience URLs redirect to the shared center with their scope and fragment', () => {
  const location = {pathname: '/submit-experience', search: '?scope=tokyo%2Fist%2Fcs', hash: '#draft'};
  const Page = sourceLoader(dependencies(location))(path.join(root, 'src/pages/submit-experience.jsx')).default;
  const document = parseFragment(renderToStaticMarkup(React.createElement(Page)));
  const target = new URL(attr(elements(document, node => attr(node, 'data-redirect') !== undefined)[0], 'href'), 'https://example.test');
  assert.equal(target.pathname, '/me');
  assert.equal(target.searchParams.get('scope'), 'tokyo/ist/cs');
  assert.equal(target.searchParams.get('type'), 'experience');
  assert.equal(target.hash, '#draft');
});

test('both contribution modes share navigation and one history while displaying the selected form', () => {
  for (const experience of [false, true]) {
    const document = render('src/components/ContributeContent/index.jsx', `?tab=contribute&type=${experience ? 'experience' : 'new_solution'}&scope=tokyo%2Fist%2Fcs`);
    assert.equal(elements(document, node => attr(node, 'id') === 'contribution-history').length, 1);
    const navigation = elements(document, node => hasClass(node, 'contributionModes'))[0];
    const links = elements(navigation, node => node.nodeName === 'a');
    assert.equal(links.length, 2);
    assert.ok(links.every(link => attr(link, 'href').startsWith('/me?') && attr(link, 'target') === undefined));
    const active = links.find(link => attr(link, 'aria-current') === 'page');
    assert.equal(new URL(attr(active, 'href'), 'https://example.test').searchParams.get('type'), experience ? 'experience' : 'new_solution');
    const visibleForms = elements(document, node => node.nodeName === 'form' && visible(node));
    assert.equal(visibleForms.length, 1);
    assert.equal(elements(visibleForms[0], node => node.nodeName === 'input' && attr(node, 'type') === 'url').length, experience ? 1 : 0);
    if (experience) {
      const records = elements(visibleForms[0], node => node.nodeName === 'a' && attr(node, 'href')?.endsWith('#contribution-history'));
      assert.equal(records.length, 1);
      const target = new URL(attr(records[0], 'href'), 'https://example.test/me');
      assert.equal(target.pathname, '/me');
      assert.equal(target.searchParams.get('tab'), 'contribute');
      assert.equal(target.searchParams.get('type'), 'experience');
      assert.equal(target.searchParams.get('scope'), 'tokyo/ist/cs');
      assert.equal(target.hash, '#contribution-history');
    }
    assert.equal(elements(document, node => node.nodeName === 'main').length, 0, 'embedded experience has no nested page shell');
  }
});

test('signed-out readers can reach the experience editor inside the personal center', () => {
  const document = render('src/pages/me.js', '?tab=contribute&type=experience&scope=tokyo%2Fist%2Fcs', false);
  const activeTabs = elements(document, node => node.nodeName === 'a' && attr(node, 'aria-current') === 'page');
  assert.ok(activeTabs.some(node => attr(node, 'href') === '/me?tab=contribute'));
  const forms = elements(document, node => node.nodeName === 'form' && visible(node));
  assert.equal(forms.length, 1);
  assert.ok(elements(forms[0], node => node.nodeName === 'input' && attr(node, 'type') === 'url').length);
  assert.ok(elements(forms[0], node => node.nodeName === 'a' && attr(node, 'href') === '/login').length);
  assert.equal(elements(document, node => node.nodeName === 'main').length, 1);
});

test('experience directory share links retain the selected school or program in the shared editor', () => {
  const catalog = buildCatalog({universities, external: [{title: 'Story', url: 'https://example.test/story',
    placements: [{scope: 'tokyo/ist/cs', admissionYear: 2026}]}], blogPosts: [], siteUrl: 'https://runjp.com'});
  for (const [search, expectedScope] of [['', null], ['?school=tokyo', 'tokyo'], ['?program=tokyo%2Fist%2Fcs', 'tokyo/ist/cs']]) {
    const document = render('src/components/ExperienceCatalog/index.jsx', search, false, {catalog});
    const link = elements(document, node => node.nodeName === 'a' && hasClass(node, 'submitLink'))[0];
    const target = new URL(attr(link, 'href'), 'https://example.test');
    assert.equal(target.pathname, '/me');
    assert.equal(target.searchParams.get('type'), 'experience');
    assert.equal(target.searchParams.get('scope'), expectedScope);
  }
});

test('switching to experience and back keeps the selected correction document', async () => {
  const location = {pathname: '/me', search: '?tab=contribute&type=correction&docId=tokyo%2Fmath&title=Sample&sourcePath=docs%2Ftokyo%2Fmath.md', hash: ''};
  const runtime = createHookRuntime({...dependencies(location, false), './styles.module.css': css,
    '@site/src/components/ExperienceContribution': Empty});
  const {ContributeContent} = runtime.load(path.join(root, 'src/components/ContributeContent/index.jsx'));
  const modeLinks = () => {
    const nav = treeElements(runtime.current, node => node.type === 'nav')[0];
    return treeElements(nav, node => node.type === Link);
  };
  try {
    runtime.mount(ContributeContent);
    await runtime.flush();
    let links = modeLinks();
    location.search = new URL(links[1].props.to, 'https://example.test').search;
    runtime.render();
    await runtime.flush();
    links = modeLinks();
    const back = new URL(links[0].props.to, 'https://example.test');
    assert.equal(back.searchParams.get('type'), 'correction');
    assert.equal(back.searchParams.get('docId'), 'tokyo/math');
    assert.equal(back.searchParams.get('title'), 'Sample');
    assert.equal(back.searchParams.get('sourcePath'), 'docs/tokyo/math.md');
    assert.equal(links[1].props['aria-current'], 'page');
  } finally {
    runtime.unmount();
  }
});

test('experience login preserves the draft and returns to its canonical scoped editor', async () => {
  const location = {pathname: '/me', search: '?tab=contribute&type=experience&scope=tokyo%2Fist%2Fcs', hash: ''};
  const stored = new Map();
  const sessionStorage = {getItem: key => stored.get(key) || null, setItem: (key, value) => stored.set(key, value),
    removeItem: key => stored.delete(key)};
  let loginIntent;
  const createEditor = (signedIn) => {
    const runtime = createHookRuntime({...dependencies(location, signedIn), './styles.module.css': css,
      './SubmissionSuccess': Empty,
      '@site/src/data/universityCatalog.cjs': require('../src/data/universityCatalog.cjs'),
      '@site/src/services/authReturn': {saveAuthReturnIntent: intent => {loginIntent = intent;}, consumeAuthReturnIntent() {}},
    }, {sessionStorage});
    const Editor = runtime.load(path.join(root, 'src/components/ExperienceContribution/index.jsx')).default;
    runtime.mount(() => Editor({embedded: true}));
    return runtime;
  };
  const findInput = (runtime, predicate) => treeElements(runtime.current, node => node.type === 'input' && predicate(node.props))[0];
  const signedOut = createEditor(false);
  try {
    await signedOut.flush();
    findInput(signedOut, props => props.maxLength === 240).props.onChange({target: {value: 'My exam experience'}});
    findInput(signedOut, props => props.type === 'url').props.onChange({target: {value: 'https://example.test/my-story'}});
    await signedOut.flush();
    treeElements(signedOut.current, node => node.type === Link && node.props.to === '/login')[0].props.onClick();
    assert.equal(loginIntent.returnTo, location.pathname + location.search);
    assert.equal(loginIntent.intent, 'submit-experience');
    assert.equal(JSON.parse(stored.get('kai_experience_login_draft')).attempts[0].program, 'cs');
  } finally {
    signedOut.unmount();
  }
  const signedIn = createEditor(true);
  try {
    await signedIn.flush();
    assert.equal(findInput(signedIn, props => props.maxLength === 240).props.value, 'My exam experience');
    assert.equal(findInput(signedIn, props => props.type === 'url').props.value, 'https://example.test/my-story');
    assert.equal(stored.has('kai_experience_login_draft'), false);
  } finally {
    signedIn.unmount();
  }
});
