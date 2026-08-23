const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');
const {pathToFileURL} = require('node:url');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function importProjectModule(relativePath) {
  return import(pathToFileURL(path.join(PROJECT_ROOT, relativePath)).href);
}

test('Rspress blog pages retain Docusaurus list and post metadata', async () => {
  const {createKaiRoutesPlugin} = await importProjectModule(
    'plugins/rspress-kai-routes.mjs',
  );
  const plugin = createKaiRoutesPlugin({siteDir: PROJECT_ROOT});
  const pages = plugin.addPages();
  const blogGeneratedPages = pages.filter((page) => (
    page.filepath?.endsWith('src/rspress/blog/BlogGeneratedPage.jsx')
  ));

  assert.deepEqual(
    blogGeneratedPages.map((page) => page.routePath).sort(),
    [
      '/blog',
      '/blog/archive',
      '/blog/authors',
      '/blog/tags',
      '/blog/tags/kyoto-university-blog',
      '/blog/tags/nagoya-university-blog',
      '/blog/tags/tokyo-university-blog',
    ],
  );

  const generatedData = (routePath) => {
    const page = pages.find((candidate) => candidate.routePath === routePath);
    assert.ok(page, `missing ${routePath}`);
    const pageData = {routePath, _filepath: page.filepath, frontmatter: {}};
    plugin.extendPageData(pageData);
    return pageData.generatedIndex;
  };

  const index = generatedData('/blog');
  assert.equal(index.kind, 'blog-index');
  assert.deepEqual(index.posts.map((post) => post.routePath), [
    '/blog/2025/09/06/utokyo',
    '/blog/2025/07/10/unagoya',
    '/blog/2025/04/22/issyugk3',
    '/blog/2025/04/02/furry',
    '/blog/2025/04/02/zephyr',
  ]);
  assert.equal(index.sidebarPosts.length, 5);
  for (const post of index.posts) {
    assert.ok(post.excerpt, post.routePath);
    assert.ok(post.readingTime > 0, post.routePath);
    assert.ok(post.readingMinutes >= 1, post.routePath);
    assert.equal(post.authors.length, 1, post.routePath);
    assert.equal(post.tags.length, 1, post.routePath);
    assert.match(post.tags[0].permalink, /^\/blog\/tags\//, post.routePath);
  }
  assert.equal(
    index.posts.find((post) => post.routePath.endsWith('/furry')).excerpt,
    '性价比修考！140h速通京大情报笔试和面试（附刷题心得和过去问考点总结）',
  );
  assert.deepEqual(
    Object.fromEntries(index.posts.map((post) => [post.routePath.split('/').pop(), post.readingTime])),
    {
      utokyo: 22.23,
      unagoya: 1.77,
      issyugk3: 9.9,
      furry: 14.49,
      zephyr: 7.93,
    },
  );

  const archive = generatedData('/blog/archive');
  assert.equal(archive.kind, 'blog-archive');
  assert.deepEqual(archive.years.map(({year}) => year), ['2025']);
  assert.equal(archive.years[0].posts.length, 5);

  const authors = generatedData('/blog/authors');
  assert.equal(authors.kind, 'blog-authors');
  assert.equal(authors.authors.length, 5);
  assert.deepEqual(
    authors.authors.find((author) => author.id === 'furry'),
    {
      id: 'furry',
      name: '毛茸茸爱好者',
      title: 'Master Student at Kyoto University',
      posts: [index.posts.find((post) => post.routePath.endsWith('/furry'))],
    },
  );

  const tags = generatedData('/blog/tags');
  assert.equal(tags.kind, 'blog-tags');
  assert.deepEqual(
    Object.fromEntries(tags.tags.map((tag) => [tag.label, tag.count])),
    {
      'Kyoto-University-Blog': 1,
      'Nagoya-University-Blog': 1,
      'Tokyo-University-Blog': 3,
    },
  );
  const tokyoTag = generatedData('/blog/tags/tokyo-university-blog');
  assert.equal(tokyoTag.kind, 'blog-tag');
  assert.equal(tokyoTag.tag.count, 3);
  assert.equal(tokyoTag.posts.length, 3);
  assert.equal(tokyoTag.sidebarPosts.length, 5);

  const furryPage = pages.find(
    (page) => page.routePath === '/blog/2025/04/02/furry',
  );
  const furry = {
    routePath: furryPage.routePath,
    _filepath: furryPage.filepath,
    frontmatter: {
      authors: 'furry',
      tags: ['Kyoto-University-Blog'],
    },
  };
  plugin.extendPageData(furry);

  assert.equal(furry.description, index.posts[3].excerpt);
  assert.equal(furry.frontmatter.sidebar, true);
  assert.equal(furry.frontmatter.footer, false);
  assert.deepEqual(furry.frontmatter.author, [{
    name: '毛茸茸爱好者',
    title: 'Master Student at Kyoto University',
  }]);
  assert.deepEqual(furry.frontmatter.categories, ['Kyoto-University-Blog']);
  assert.deepEqual(furry.blogPost.previous, {
    title: '25.2冬入东京大学CBMS-研究方向选择、套瓷与RP撰写经验分享',
    routePath: '/blog/2025/04/22/issyugk3',
  });
  assert.deepEqual(furry.blogPost.next, {
    title: '24.8 东京大学 CBMS 修士课程考试经验分享',
    routePath: '/blog/2025/04/02/zephyr',
  });
  assert.deepEqual(
    furry.blogPost.sidebarPosts.map((post) => post.routePath),
    index.posts.map((post) => post.routePath),
  );
});

test('blog theme exposes Docusaurus-equivalent chrome', () => {
  const fs = require('node:fs');
  const generatedPage = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/blog/BlogGeneratedPage.jsx'),
    'utf8',
  );
  const chrome = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/blog/BlogChrome.jsx'),
    'utf8',
  );
  const theme = fs.readFileSync(path.join(PROJECT_ROOT, 'theme/index.tsx'), 'utf8');
  const styles = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/rspress/blog/blog.module.css'),
    'utf8',
  );

  assert.match(generatedPage, /<BlogBrowseHeader activeMode="list"/);
  assert.match(generatedPage, /<BlogTagExplorer tags=\{data\.tags\}/);
  assert.match(generatedPage, /<ContentBrowseModes section="stories"/);
  assert.match(generatedPage, /function BlogArchive/);
  assert.match(generatedPage, /function BlogAuthors/);
  assert.match(chrome, /function BlogPostCard/);
  assert.match(chrome, /export function BlogSidebar/);
  assert.match(chrome, /export function BlogPostHeader/);
  assert.match(chrome, /export function BlogPostFooter/);
  assert.match(chrome, /const SidebarRoot = embedded \? 'div' : 'aside'/);
  assert.match(chrome, /className=\{styles\.authorAvatar\}/);
  assert.match(chrome, /className=\{styles\.postEyebrow\}/);
  assert.match(theme, /beforeDocContent: <BlogPostHeader post=\{blogPost\}/);
  assert.match(theme, /beforeDocFooter: <BlogPostFooter post=\{blogPost\}/);
  assert.match(theme, /generatedIndex\.kind\.startsWith\('blog-'\)/);
  assert.match(theme, /const blogNavigation = blogPost \?\? generatedBlog/);
  assert.match(theme, /beforeSidebar:/);
  assert.doesNotMatch(theme, /beforeOutline:\s*\(\s*<BlogSidebar/);
  assert.match(generatedPage, /sidebar:\s*true/);
  assert.doesNotMatch(generatedPage, /<BlogSidebar/);
  assert.match(styles, /\.blogMain\s*\{[^}]*width:\s*min\(100%, 54rem\)/s);
  assert.match(styles, /\.postHeader \+ :global\(\.rspress-doc\)/);
  assert.match(styles, /\.authorAvatar\s*\{/);
});
