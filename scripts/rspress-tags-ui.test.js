const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {pathToFileURL} = require('node:url');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(PROJECT_ROOT, relativePath), 'utf8');
}

test('docs tag index keeps a focused, progressively rendered explorer', () => {
  const component = read('src/rspress/GeneratedIndexPage.jsx');
  const styles = read('src/rspress/GeneratedIndexPage.module.css');

  assert.match(component, /function DocsTagBrowser/);
  assert.match(component, /useState\('subjects'\)/);
  assert.match(component, /useUiText\('tagsList'\)/);
  assert.match(component, /useCurrentLanguage\(\)/);
  assert.match(component, /taxonomySearchValues/);
  assert.match(component, /meta\.labelZh/);
  assert.match(component, /meta\.labelJa/);
  assert.match(component, /meta\.labelEn/);
  assert.match(component, /meta\.aliases/);
  assert.match(component, /disclosureOpen \? \(/);
  assert.match(component, /visibleChildren\.map/);
  assert.match(component, /<title>\{`\$\{t\.pageTitle\} \| The Kai Project`\}<\/title>/);
  assert.doesNotMatch(component, /\/docs\/tags\/topic\//);

  for (const selector of [
    '.tagHero',
    '.tagSearchBox',
    '.scopeTabs',
    '.sectionNav',
    '.topicDisclosure',
    '.tagEmptyState',
  ]) {
    assert.ok(styles.includes(selector), `missing ${selector}`);
  }
  assert.match(styles, /@media \(max-width: 720px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test('subsubject results expose topic, school, hash, and lazy document controls', () => {
  const component = read('src/rspress/GeneratedIndexPage.jsx');
  const styles = read('src/rspress/GeneratedIndexPage.module.css');

  assert.match(component, /function SubsubjectTagBrowser/);
  assert.match(component, /function SubsubjectSchoolGroup/);
  assert.match(component, /window\.addEventListener\('hashchange'/);
  assert.match(component, /window\.requestAnimationFrame/);
  assert.match(component, /scrollIntoView/);
  assert.match(component, /prefers-reduced-motion: reduce/);
  assert.match(component, /catch \{/);
  assert.match(component, /TOPIC_BY_HREF\.get\(`\$\{normalizedRoutePath\}#\$\{anchor\}`\)/);
  assert.match(component, /selectedSchool/);
  assert.match(component, /topicsExpanded/);
  assert.match(component, /expanded \? \(/);
  assert.match(component, /data\.kind === 'subsubject-tag'/);

  for (const selector of [
    '.subsubjectHero',
    '.topicDirectoryPanel',
    '.topicDirectoryLinks',
    '.schoolFilter',
    '.documentSchoolGroup',
    '.documentGrid',
  ]) {
    assert.ok(styles.includes(selector), `missing ${selector}`);
  }
});

test('generated taxonomy still supplies stable school, subsubject, and anchored topic targets', async () => {
  const {createKaiRoutesPlugin} = await import(
    pathToFileURL(path.join(PROJECT_ROOT, 'plugins/rspress-kai-routes.mjs')).href
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const pages = plugin.addPages();
  const indexPage = pages.find((page) => page.routePath === '/docs/tags');
  assert.ok(indexPage);

  const pageData = {
    routePath: indexPage.routePath,
    _filepath: indexPage.filepath,
    frontmatter: {},
  };
  plugin.extendPageData(pageData);
  const sections = pageData.generatedIndex.sections;
  const schools = sections[0][2];
  const subsubjects = sections.slice(1).flatMap((section) => section[2]);
  const topics = subsubjects.flatMap((entry) => entry[3] || []);

  assert.equal(schools.length, 21);
  assert.equal(subsubjects.length, 80);
  assert.equal(topics.length, 1220);
  assert.ok(topics.every((topic) => (
    /^\/docs\/tags\/subsubject\/.+#topic-[a-z0-9-]+$/.test(topic[1])
  )));
});
