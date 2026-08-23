const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {pathToFileURL} = require('node:url');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function importProjectModule(relativePath) {
  return import(pathToFileURL(path.join(PROJECT_ROOT, relativePath)).href);
}

function walkMarkdown(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const filepath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkMarkdown(filepath);
    return entry.isFile() && /\.mdx?$/i.test(entry.name) ? [filepath] : [];
  });
}

test('Rspress owns the site commands and dependencies', () => {
  const packageJson = require('../package.json');
  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  assert.equal(fs.existsSync(path.join(PROJECT_ROOT, 'rspress.config.mjs')), true);
  assert.equal(fs.existsSync(path.join(PROJECT_ROOT, 'docusaurus.config.js')), false);
  assert.equal(fs.existsSync(path.join(PROJECT_ROOT, 'sidebars.js')), false);
  assert.match(packageJson.scripts.start, /rspress dev/);
  assert.match(packageJson.scripts['build:site'], /run-rspress-build\.mjs/);
  assert.equal(packageJson.engines.node, '^20.19.0 || >=22.12.0');
  assert.equal(allDependencies['@rspress/core'], '2.0.19');
  assert.equal(
    Object.keys(allDependencies).some((name) => name.startsWith('@docusaurus/')),
    false,
  );
});

test('legacy public URLs are registered exactly once in Rspress', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const pages = createKaiRoutesPlugin({siteDir: PROJECT_ROOT}).addPages();
  const routes = pages.map((page) => page.routePath);

  assert.equal(routes.length, 2256);
  assert.equal(new Set(routes.map((route) => route.replace(/\/$/, ''))).size, 2256);
  assert.equal(routes.filter((route) => route.startsWith('/docs/category/')).length, 630);
  const generatedPages = pages.filter((page) => (
    /(?:GeneratedIndexPage|CategoryGeneratedPage|BlogGeneratedPage)\.jsx$/.test(
      page.filepath || '',
    )
  ));
  assert.equal(generatedPages.length, 739);
  assert.equal(
    pages.filter((page) => page.filepath?.endsWith('CategoryGeneratedPage.jsx')).length,
    630,
  );
  assert.equal(
    pages.filter((page) => page.filepath?.endsWith('BlogGeneratedPage.jsx')).length,
    7,
  );
  const customPages = pages.filter((page) => typeof page.content === 'string');
  assert.equal(customPages.length, 9);
  assert.ok(customPages.every((page) => page.content.includes('search: false')));
  for (const route of [
    '/',
    '/docs/intro',
    '/docs/category/TITech',
    '/docs/category/kanazawa-university-nst',
    '/docs/category/kanazawa-university-nst-eice',
    '/docs/category/kanazawa-university-nst-eice-2023',
    '/docs/tags',
    '/docs/tags/school/tokyo-university',
    '/docs/tokyo-university/IST/kyotsu/tendencies_and_remedies',
    '/docs/tokyo-university/engineering/eeis/tendencies_and_remedies',
    '/docs/osaka-university/IST/ie/useful_info',
    '/docs/kyoto-university/management/2023/math_1',
    '/blog',
    '/blog/archive',
    '/blog/authors',
    '/blog/tags/kyoto-university-blog',
    '/blog/tags/nagoya-university-blog',
    '/blog/tags/tokyo-university-blog',
    '/blog/2025/04/02/furry',
    '/blog/tags',
    '/auth/callback',
    '/search',
  ]) {
    assert.ok(routes.includes(route), `missing route ${route}`);
  }
  for (const retiredRoute of [
    '/category/TITech',
    '/docs/category/keio-university-nst',
    '/docs/category/keio-university-nst-eice',
    '/docs/category/keio-university-nst-eice-2023',
    '/docs/tokyo-university/IST/kyotsu/01-tendencies_and_remedies',
    '/docs/tokyo-university/engineering/eeis/01-tendencies_and_remedies',
    '/docs/osaka-university/IST/ie/02-useful_info',
    '/docs/kyoto-university/management/2023/202208_math_1',
  ]) {
    assert.equal(routes.includes(retiredRoute), false, `retired route ${retiredRoute}`);
  }
});

test('school tag pages lead through university categories and programs', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const pages = plugin.addPages();
  const schoolPages = pages.filter((page) => (
    page.routePath.startsWith('/docs/tags/school/')
  ));

  assert.equal(schoolPages.length, 21);
  for (const schoolPage of schoolPages) {
    const pageData = {
      routePath: schoolPage.routePath,
      _filepath: schoolPage.filepath,
      frontmatter: {},
    };
    plugin.extendPageData(pageData);

    const generated = pageData.generatedIndex;
    assert.equal(generated.kind, 'school-tag', schoolPage.routePath);
    assert.equal(generated.sections[0][0], '研究科与专攻');
    assert.ok(generated.sections[0][2].length > 0, schoolPage.routePath);
    for (const [label, href, count, children] of generated.sections[0][2]) {
      assert.ok(label, schoolPage.routePath);
      assert.match(href, /^\/docs\/category\//, schoolPage.routePath);
      assert.match(count, /^\d+ 篇$/, schoolPage.routePath);
      assert.ok(Number.parseInt(count, 10) > 0, schoolPage.routePath);
      for (const [childLabel, childHref, childCount] of children) {
        assert.ok(childLabel, schoolPage.routePath);
        assert.match(childHref, /^\/docs\/category\//, schoolPage.routePath);
        assert.match(childCount, /^\d+ 篇$/, schoolPage.routePath);
      }
    }
  }

  const tokyoPage = schoolPages.find(
    (page) => page.routePath === '/docs/tags/school/tokyo-university',
  );
  const tokyoData = {
    routePath: tokyoPage.routePath,
    _filepath: tokyoPage.filepath,
    frontmatter: {},
  };
  plugin.extendPageData(tokyoData);
  const tokyoCategories = tokyoData.generatedIndex.sections[0][2];
  const ist = tokyoCategories.find(
    (entry) => entry[1] === '/docs/category/tokyo-university-IST',
  );
  assert.ok(ist, 'Tokyo school page should contain the IST category card');
  assert.ok(
    ist[3].some((entry) => (
      entry[1] === '/docs/category/tokyo-university-IST-ci'
    )),
    'IST card should expose its program cards before individual documents',
  );
});

test('university category routes retain the sidebar and category card hierarchy', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const pages = plugin.addPages();
  const hierarchySectionTitles = new Set([
    '研究科与专攻',
    '专攻与子分类',
    '子分类',
  ]);
  const readGeneratedData = (routePath) => {
    const route = pages.find((page) => page.routePath === routePath);
    assert.ok(route, `missing route ${routePath}`);
    assert.ok(
      route.filepath.endsWith('CategoryGeneratedPage.jsx'),
      `${routePath} must use the sidebar-enabled category component`,
    );
    const pageData = {routePath, _filepath: route.filepath, frontmatter: {}};
    plugin.extendPageData(pageData);
    return pageData.generatedIndex;
  };

  for (const categoryPage of pages.filter((page) => (
    page.routePath.startsWith('/docs/category/')
  ))) {
    const generated = readGeneratedData(categoryPage.routePath);
    for (const [sectionTitle, , entries] of generated.sections) {
      if (!hierarchySectionTitles.has(sectionTitle)) continue;
      for (const [label, href, , children = []] of entries) {
        assert.ok(label, categoryPage.routePath);
        assert.match(href, /^\/docs\/category\/.+/, categoryPage.routePath);
        for (const [childLabel, childHref] of children) {
          assert.ok(childLabel, categoryPage.routePath);
          assert.match(
            childHref,
            /^\/docs\/category\/.+/,
            categoryPage.routePath,
          );
        }
      }
    }
  }

  const university = readGeneratedData('/docs/category/tokyo-university');
  assert.equal(university.kind, 'university-category');
  assert.equal(university.sections[0][0], '研究科与专攻');
  const ist = university.sections[0][2].find(
    (entry) => entry[1] === '/docs/category/tokyo-university-IST',
  );
  assert.ok(ist, 'university overview should expose its graduate schools');
  assert.ok(
    ist[3].some((entry) => entry[1] === '/docs/category/tokyo-university-IST-ci'),
    'graduate-school card should expose its programs',
  );

  const graduateSchool = readGeneratedData('/docs/category/tokyo-university-IST');
  assert.equal(graduateSchool.kind, 'category');
  assert.equal(graduateSchool.sections[0][0], '专攻与子分类');
  assert.ok(
    graduateSchool.sections[0][2].some(
      (entry) => entry[1] === '/docs/category/tokyo-university-IST-cs',
    ),
  );

  const categoryComponent = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/CategoryGeneratedPage.jsx'),
    'utf8',
  );
  const tagComponent = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/GeneratedIndexPage.jsx'),
    'utf8',
  );
  assert.match(categoryComponent, /sidebar:\s*true/);
  assert.match(tagComponent, /sidebar:\s*false/);
});

test('university routes retain the complete multi-level university catalog', async () => {
  const {buildDocsSidebar} = await importProjectModule(
    'scripts/rspress-sidebar.mjs',
  );
  const {getSidebarDataGroup} = await import('@rspress/shared');
  const sidebar = buildDocsSidebar({siteDir: PROJECT_ROOT});

  assert.deepEqual(Object.keys(sidebar).sort(), ['/docs/', '/docs/intro']);
  assert.equal(sidebar['/docs/'].length, 22);

  const introSidebar = sidebar['/docs/intro'];
  const tokyoOverview = introSidebar.find((item) => item.text === '東京大学');
  assert.ok(tokyoOverview.items.length > 0);
  const informationSchool = tokyoOverview.items.find(
    (item) => item.text === '情報理工学系研究科',
  );
  assert.ok(informationSchool.items.length > 0);
  const computerScience = informationSchool.items.find(
    (item) => item.text === 'コンピュータ科学専攻',
  );
  assert.equal(computerScience.link, '/docs/category/tokyo-university-IST-cs');
  assert.equal('items' in computerScience, false);

  const universityRouteSidebar = sidebar['/docs/'];
  assert.deepEqual(
    universityRouteSidebar.map((item) => item.text),
    introSidebar.map((item) => item.text),
  );
  const tokyoRouteUniversity = universityRouteSidebar.find(
    (item) => item.text === '東京大学',
  );
  const kyotoRouteUniversity = universityRouteSidebar.find(
    (item) => item.text === '京都大学',
  );
  assert.ok(tokyoRouteUniversity.items.length > 0);
  assert.equal(kyotoRouteUniversity.link, '/docs/category/kyoto-university');
  assert.ok(kyotoRouteUniversity.items.length > 0);
  for (const route of [
    '/docs/category/tokyo-university',
    '/docs/category/kyoto-university-science-math',
    '/docs/tokyo-university/engineering/kyotsu/2020/kyotsu_201908_math_1',
    '/docs/kyoto-university/management/2023/math_1',
  ]) {
    assert.strictEqual(getSidebarDataGroup(sidebar, route), universityRouteSidebar);
  }
  assert.strictEqual(
    getSidebarDataGroup(sidebar, '/docs/intro'),
    introSidebar,
  );
  const tokyoSidebar = JSON.stringify(universityRouteSidebar);
  assert.match(
    tokyoSidebar,
    /\/docs\/tokyo-university\/IST\/kyotsu\/tendencies_and_remedies/,
  );
  assert.doesNotMatch(tokyoSidebar, /\/01-tendencies_and_remedies/);
  assert.match(tokyoSidebar, /\/docs\/category\/tokyo-university/);

  const kanazawaSidebar = JSON.stringify(universityRouteSidebar);
  assert.match(kanazawaSidebar, /\/docs\/category\/kanazawa-university-nst-eice/);
  assert.doesNotMatch(kanazawaSidebar, /\/docs\/category\/keio-university-nst/);
});

test('sidebar categories without pages remain expandable non-link groups', async (t) => {
  const {buildDocsSidebar} = await importProjectModule(
    'scripts/rspress-sidebar.mjs',
  );
  const siteDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-rspress-sidebar-'));
  t.after(() => fs.rmSync(siteDir, {recursive: true, force: true}));

  const docsDir = path.join(siteDir, 'docs');
  const majorDir = path.join(
    docsDir,
    'sample-university',
    'sample-school',
    'sample-major',
    '2024',
  );
  fs.mkdirSync(majorDir, {recursive: true});
  fs.writeFileSync(
    path.join(docsDir, 'intro.md'),
    '---\ntitle: Intro\nsidebar_position: 1\n---\n',
  );
  fs.writeFileSync(
    path.join(docsDir, 'sample-university', '_category_.json'),
    JSON.stringify({label: 'Sample University', position: 2}),
  );
  fs.writeFileSync(
    path.join(docsDir, 'sample-university', 'sample-school', '_category_.json'),
    JSON.stringify({label: 'Sample School', position: 1}),
  );
  fs.writeFileSync(
    path.join(
      docsDir,
      'sample-university',
      'sample-school',
      'sample-major',
      '_category_.json',
    ),
    JSON.stringify({
      label: 'Sample Major',
      position: 1,
      link: {type: 'generated-index', slug: '/category/sample-major'},
    }),
  );
  fs.writeFileSync(
    path.join(majorDir, '_category_.json'),
    JSON.stringify({label: '2024年度', position: 2024}),
  );
  fs.writeFileSync(
    path.join(majorDir, 'exam.md'),
    '---\ntitle: Exam\nsidebar_label: Exam\nsidebar_position: 1\n---\n',
  );

  const sidebar = buildDocsSidebar({siteDir});
  const university = sidebar['/docs/intro'].find(
    (item) => item.text === 'Sample University',
  );
  assert.equal('link' in university, false);
  assert.ok(Array.isArray(university.items));
  assert.equal('link' in university.items[0], false);
  assert.ok(Array.isArray(university.items[0].items));
  assert.equal(university.items[0].items[0].link, '/docs/category/sample-major');
  const fallbackUniversity = sidebar['/docs/'].find(
    (item) => item.text === 'Sample University',
  );
  assert.equal('link' in fallbackUniversity, false);
  assert.ok(Array.isArray(fallbackUniversity.items));

  const fullUniversity = sidebar['/docs/'].find(
    (item) => item.text === 'Sample University',
  );
  assert.equal('link' in fullUniversity, false);
  assert.equal('link' in fullUniversity.items[0], false);
  assert.equal(
    fullUniversity.items[0].items[0].items[0].items[0].link,
    '/docs/sample-university/sample-school/sample-major/2024/exam',
  );
  assert.doesNotMatch(JSON.stringify(sidebar), /"link":""/);
});

test('sitemap retains the legacy private-route exclusions', async () => {
  const {
    EXCLUDED_SITEMAP_ROUTES,
    shouldIncludeInSitemap,
  } = await importProjectModule('plugins/rspress-kai-sitemap.mjs');

  assert.deepEqual(EXCLUDED_SITEMAP_ROUTES, [
    '/auth/callback',
    '/login',
    '/me',
    '/reset-password',
    '/search',
  ]);
  for (const route of EXCLUDED_SITEMAP_ROUTES) {
    assert.equal(shouldIncludeInSitemap(route), false, route);
    assert.equal(shouldIncludeInSitemap(`${route}/`), false, `${route}/`);
  }
  assert.equal(shouldIncludeInSitemap('/'), true);
  assert.equal(shouldIncludeInSitemap('/docs/intro'), true);
});

test('legacy blog authors and tags are adapted for Rspress feeds', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const post = plugin.addPages().find(
    (page) => page.routePath === '/blog/2025/04/02/furry',
  );
  assert.ok(post?.filepath);

  const pageData = {
    routePath: post.routePath,
    _filepath: post.filepath,
    frontmatter: {
      authors: 'furry',
      tags: ['Kyoto-University-Blog'],
    },
  };
  plugin.extendPageData(pageData);

  assert.deepEqual(pageData.frontmatter.author, [{
    name: '毛茸茸爱好者',
    title: 'Master Student at Kyoto University',
  }]);
  assert.deepEqual(pageData.frontmatter.categories, ['Kyoto-University-Blog']);
  assert.equal(pageData.frontmatter.date, '2025-04-02');
});

test('Markdown content does not import other Markdown files', () => {
  const importsMarkdown = /^\s*import\s+.+?\s+from\s+['"]([^'"]+\.mdx?)['"]/gm;
  const violations = [];
  for (const root of ['docs', 'blog']) {
    for (const filepath of walkMarkdown(path.join(PROJECT_ROOT, root))) {
      const source = fs.readFileSync(filepath, 'utf8');
      for (const match of source.matchAll(importsMarkdown)) {
        violations.push(`${path.relative(PROJECT_ROOT, filepath)} -> ${match[1]}`);
      }
    }
  }
  assert.deepEqual(violations, []);
});
