import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import matter from 'gray-matter';

import {stripDocusaurusNumberPrefixes} from '../scripts/rspress-path-compatibility.mjs';

const MARKDOWN_EXTENSION_RE = /\.mdx?$/i;
const BLOG_FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;
const BLOG_TRUNCATE_RE = /<!--\s*truncate\s*-->/i;
const BLOG_WORD_SEGMENTER = new Intl.Segmenter(undefined, {granularity: 'word'});
const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SITE_DIR = path.resolve(MODULE_DIR, '..');
const require = createRequire(import.meta.url);

const DEFAULT_CUSTOM_PAGES = Object.freeze([
  {routePath: '/', component: 'index.js', title: 'The Kai Project'},
  {routePath: '/login', component: 'login.js', title: 'Login'},
  {routePath: '/me', component: 'me.js', title: 'Personal Center'},
  {routePath: '/help', component: 'help.js', title: 'Help'},
  {routePath: '/support', component: 'support.js', title: 'Support'},
  {routePath: '/links', component: 'links.js', title: 'Links'},
  {
    routePath: '/search',
    component: '../rspress/SearchPage.jsx',
    title: 'Search',
  },
  {
    routePath: '/reset-password',
    component: 'reset-password.js',
    title: 'Reset Password',
  },
  {
    routePath: '/auth/callback',
    component: 'auth/callback.js',
    title: 'Auth Callback',
  },
]);

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function resolveFrom(baseDir, candidate) {
  return path.isAbsolute(candidate)
    ? path.normalize(candidate)
    : path.resolve(baseDir, candidate);
}

function assertDirectory(directory, label) {
  if (!existsSync(directory)) {
    throw new Error(`[rspress-kai-routes] ${label} does not exist: ${directory}`);
  }
}

function assertSafeRelativePath(relativePath, sourcePath) {
  const normalized = toPosixPath(relativePath);
  if (
    normalized === '..'
    || normalized.startsWith('../')
    || path.isAbsolute(relativePath)
    || normalized.includes('\0')
  ) {
    throw new Error(
      `[rspress-kai-routes] Refusing a path outside its content root: ${sourcePath}`,
    );
  }
  return normalized;
}

function normalizeInternalRoute(routePath, {keepTrailingSlash = false} = {}) {
  if (typeof routePath !== 'string' || routePath.trim() === '') {
    throw new TypeError('[rspress-kai-routes] routePath must be a non-empty string');
  }

  const raw = routePath.trim().replace(/\\/g, '/');
  if (
    raw.includes('\0')
    || raw.includes('?')
    || raw.includes('#')
    || /^[a-z][a-z\d+.-]*:/i.test(raw)
  ) {
    throw new Error(`[rspress-kai-routes] Unsafe internal route: ${routePath}`);
  }

  const segments = raw.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '.' || segment === '..')) {
    throw new Error(`[rspress-kai-routes] Unsafe internal route: ${routePath}`);
  }

  const normalized = `/${segments.join('/')}`;
  if (normalized === '/') return normalized;
  return keepTrailingSlash ? `${normalized}/` : normalized;
}

function canonicalRoute(routePath) {
  return routePath === '/' ? routePath : routePath.replace(/\/+$/, '');
}

function walkFiles(directory, predicate, recursive = true) {
  if (!existsSync(directory)) return [];

  const files = [];
  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (recursive) files.push(...walkFiles(absolutePath, predicate, true));
      continue;
    }
    // Deliberately do not follow symlinks: content roots cannot escape through one.
    if (entry.isFile() && predicate(entry.name, absolutePath)) {
      files.push(absolutePath);
    }
  }
  return files.sort((left, right) => (
    toPosixPath(left).localeCompare(toPosixPath(right), 'en')
  ));
}

function readFrontmatter(filepath) {
  try {
    // Passing an options object disables gray-matter's process-wide content cache.
    return matter(readFileSync(filepath, 'utf8'), {}).data ?? {};
  } catch (error) {
    throw new Error(
      `[rspress-kai-routes] Cannot parse frontmatter in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
}

function readCategory(filepath) {
  try {
    return JSON.parse(readFileSync(filepath, 'utf8'));
  } catch (error) {
    throw new Error(
      `[rspress-kai-routes] Cannot parse category metadata in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
}

function readBlogAuthors(blogDir) {
  const filepath = path.join(blogDir, 'authors.yml');
  if (!existsSync(filepath)) return {};
  try {
    const authors = matter.engines.yaml.parse(readFileSync(filepath, 'utf8'));
    if (!authors || typeof authors !== 'object' || Array.isArray(authors)) {
      throw new TypeError('expected an author mapping');
    }
    return authors;
  } catch (error) {
    throw new Error(
      `[rspress-kai-routes] Cannot parse blog authors in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
}

function resolveBlogAuthors(value, authorProfiles) {
  const authors = Array.isArray(value) ? value : value == null ? [] : [value];
  return authors.flatMap((author) => {
    if (typeof author === 'string') {
      const profile = authorProfiles[author];
      return [profile && typeof profile === 'object'
        ? {...profile}
        : {name: author}];
    }
    return author && typeof author === 'object' ? [{...author}] : [];
  });
}

function markdownToPlainText(value) {
  return String(value || '')
    .replace(/^\s*(?:import|export)\s+.*$/gm, ' ')
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, ' ')
    .replace(/<!--([\s\S]*?)-->/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s*:::\s*\w+.*$/gm, ' ')
    .replace(/^\s*:::\s*$/gm, ' ')
    .replace(/^\s{0,3}(?:#{1,6}|>|[-+*]\s|\d+[.)]\s)\s*/gm, '')
    .replace(/[*_~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getBlogReadingTime(content) {
  // Docusaurus 3.9 uses Intl.Segmenter and 200 words/minute. Keeping the
  // calculation identical preserves the reading-time labels users already saw.
  let words = 0;
  for (const segment of BLOG_WORD_SEGMENTER.segment(String(content || ''))) {
    if (segment.isWordLike) words += 1;
  }
  const minutes = words / 200;
  return Math.max(0.01, Math.round(minutes * 100) / 100);
}

function getBlogExcerpt(content, frontmatter) {
  if (typeof frontmatter.description === 'string' && frontmatter.description.trim()) {
    return frontmatter.description.trim();
  }
  const excerptSource = String(content || '').split(BLOG_TRUNCATE_RE, 1)[0];
  return markdownToPlainText(excerptSource);
}

function routeForDocument(filepath, docsDir, docsRouteBase) {
  const relativePath = assertSafeRelativePath(path.relative(docsDir, filepath), filepath);
  const withoutExtension = stripDocusaurusNumberPrefixes(
    relativePath.replace(MARKDOWN_EXTENSION_RE, ''),
  );
  const isIndex = withoutExtension === 'index' || withoutExtension.endsWith('/index');
  const routeSuffix = isIndex
    ? withoutExtension.replace(/(?:^|\/)index$/, '')
    : withoutExtension;
  return normalizeInternalRoute(`${docsRouteBase}/${routeSuffix}`, {
    keepTrailingSlash: isIndex,
  });
}

function normalizedTags(value) {
  const values = Array.isArray(value) ? value : value == null ? [] : [value];
  return [...new Set(values
    .filter((tag) => typeof tag === 'string' || typeof tag === 'number')
    .map((tag) => String(tag).trim())
    .filter(Boolean))];
}

function tagBrowseSlug(value) {
  return String(value || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function getSubsubjectShortId(subsubjectId, taxonomy) {
  const subjectId = taxonomy.subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

function getTopicShortId(topicId, taxonomy) {
  const subsubjectId = taxonomy.topics[topicId]?.subsubject;
  const prefix = subsubjectId ? `${subsubjectId}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
}

function schoolTagRoute(schoolId, docsRouteBase) {
  return `${docsRouteBase}/tags/school/${tagBrowseSlug(schoolId)}`;
}

function subsubjectTagRoute(subsubjectId, taxonomy, docsRouteBase) {
  const subjectId = taxonomy.subsubjects[subsubjectId]?.subject || 'General';
  return [
    docsRouteBase,
    'tags/subsubject',
    tagBrowseSlug(subjectId),
    tagBrowseSlug(getSubsubjectShortId(subsubjectId, taxonomy)),
  ].join('/');
}

function topicAnchor(topicId, taxonomy) {
  return `topic-${tagBrowseSlug(getTopicShortId(topicId, taxonomy))}`;
}

function humanizeTag(value) {
  return String(value || '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function localizedTaxonomyLabel(metadata, fallback) {
  return metadata?.labelZh
    || metadata?.labelJa
    || metadata?.labelEn
    || metadata?.label
    || fallback;
}

function loadTagTaxonomy(siteDir, providedTaxonomy) {
  if (providedTaxonomy) return providedTaxonomy;
  const taxonomyEntry = path.join(siteDir, 'src/data/tagTaxonomy/index.js');
  if (!existsSync(taxonomyEntry)) return null;
  try {
    return require(taxonomyEntry);
  } catch (error) {
    throw new Error(
      `[rspress-kai-routes] Cannot load tag taxonomy from ${taxonomyEntry}: ${error.message}`,
      {cause: error},
    );
  }
}

function titleForDocument(filepath, frontmatter) {
  const explicitTitle = frontmatter.sidebar_label ?? frontmatter.title;
  if (typeof explicitTitle === 'string' && explicitTitle.trim()) {
    return explicitTitle.trim();
  }
  return path.basename(filepath).replace(MARKDOWN_EXTENSION_RE, '');
}

function normalizeDateParts(year, month, day, filepath) {
  const numericYear = Number(year);
  const numericMonth = Number(month);
  const numericDay = Number(day);
  const date = new Date(Date.UTC(numericYear, numericMonth - 1, numericDay));
  if (
    date.getUTCFullYear() !== numericYear
    || date.getUTCMonth() + 1 !== numericMonth
    || date.getUTCDate() !== numericDay
  ) {
    throw new Error(`[rspress-kai-routes] Invalid blog date in ${filepath}`);
  }
  return {
    year: String(numericYear).padStart(4, '0'),
    month: String(numericMonth).padStart(2, '0'),
    day: String(numericDay).padStart(2, '0'),
  };
}

function dateFromFrontmatter(value, filepath) {
  if (value == null) return null;
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return normalizeDateParts(
      value.getUTCFullYear(),
      value.getUTCMonth() + 1,
      value.getUTCDate(),
      filepath,
    );
  }

  const match = String(value).trim().match(/^(\d{4})-(\d{2})-(\d{2})(?:\D|$)/);
  if (!match) {
    throw new Error(`[rspress-kai-routes] Invalid blog frontmatter date in ${filepath}`);
  }
  return normalizeDateParts(match[1], match[2], match[3], filepath);
}

function normalizeBlogSlug(value, filepath) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`[rspress-kai-routes] Blog post has no slug: ${filepath}`);
  }

  const raw = value.trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
  if (
    raw === ''
    || raw.includes('\0')
    || raw.includes('?')
    || raw.includes('#')
    || raw.split('/').some((segment) => !segment || segment === '.' || segment === '..')
  ) {
    throw new Error(`[rspress-kai-routes] Unsafe blog slug in ${filepath}: ${value}`);
  }
  return raw;
}

function blogRecord(filepath, blogRouteBase) {
  let parsed;
  try {
    parsed = matter(readFileSync(filepath, 'utf8'), {});
  } catch (error) {
    throw new Error(
      `[rspress-kai-routes] Cannot parse blog post in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
  const frontmatter = parsed.data ?? {};
  const stem = path.basename(filepath).replace(MARKDOWN_EXTENSION_RE, '');
  const filenameMatch = stem.match(BLOG_FILENAME_RE);
  const frontmatterDate = dateFromFrontmatter(frontmatter.date, filepath);

  if (!filenameMatch && !frontmatterDate) {
    throw new Error(
      `[rspress-kai-routes] Blog filename must start with YYYY-MM-DD: ${filepath}`,
    );
  }

  const date = frontmatterDate ?? normalizeDateParts(
    filenameMatch[1],
    filenameMatch[2],
    filenameMatch[3],
    filepath,
  );
  const filenameSlug = filenameMatch?.[4];
  const slug = normalizeBlogSlug(frontmatter.slug ?? filenameSlug, filepath);
  const routePath = normalizeInternalRoute(
    `${blogRouteBase}/${date.year}/${date.month}/${date.day}/${slug}`,
  );
  const title = typeof frontmatter.title === 'string' && frontmatter.title.trim()
    ? frontmatter.title.trim()
    : slug;

  return {
    filepath,
    frontmatter,
    routePath,
    slug,
    title,
    tags: normalizedTags(frontmatter.tags),
    date: `${date.year}-${date.month}-${date.day}`,
    excerpt: getBlogExcerpt(parsed.content, frontmatter),
    readingTime: getBlogReadingTime(parsed.content),
  };
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function escapeMdxText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]');
}

function markdownLink(label, routePath) {
  return `[${escapeMdxText(label)}](<${routePath}>)`;
}

function pageFrontmatter(title, extra = []) {
  return [
    '---',
    `title: ${yamlString(title)}`,
    'sidebar: false',
    ...extra,
    '---',
    '',
  ].join('\n');
}

function customPageContent(componentFile, title) {
  // Rspress writes `content` pages into a temporary directory, so a relative
  // request would resolve from node_modules/.rspress. Rspack accepts normalized
  // absolute module requests on both POSIX and Windows.
  const moduleRequest = toPosixPath(path.resolve(componentFile));
  return `${pageFrontmatter(title, [
    'pageType: custom',
    'outline: false',
    'search: false',
  ])}import CustomPage from ${JSON.stringify(moduleRequest)};\n\n<CustomPage />\n`;
}

function blogIndexContent(posts) {
  const lines = [
    pageFrontmatter('经验分享'),
    '# 经验分享',
    '',
  ];
  for (const post of [...posts].sort((left, right) => (
    right.date.localeCompare(left.date, 'en')
    || left.title.localeCompare(right.title, 'zh-Hans')
  ))) {
    lines.push(`- ${markdownLink(post.title, post.routePath)} · ${post.date}`);
  }
  if (posts.length === 0) lines.push('暂无文章。');
  return `${lines.join('\n')}\n`;
}

function toIndexEntry(item, meta = '') {
  return [item.title, item.routePath, meta];
}

function sortBlogPosts(posts) {
  // Keep source order for posts published on the same day. Docusaurus used the
  // blog file discovery order as the stable tiebreaker (furry before zephyr),
  // which also determines the public sidebar and previous/next post links.
  return [...posts].sort((left, right) => right.date.localeCompare(left.date, 'en'));
}

function blogTagMetadata(tag, blogRouteBase, count = undefined) {
  return {
    label: tag,
    permalink: `${blogRouteBase}/tags/${tagBrowseSlug(tag)}`,
    ...(count === undefined ? {} : {count}),
  };
}

function blogPostSummary(post, authorProfiles, blogRouteBase) {
  return {
    title: post.title,
    routePath: post.routePath,
    date: post.date,
    excerpt: post.excerpt,
    readingTime: post.readingTime,
    readingMinutes: Math.max(1, Math.ceil(post.readingTime)),
    authors: resolveBlogAuthors(
      post.frontmatter.author ?? post.frontmatter.authors,
      authorProfiles,
    ),
    tags: post.tags.map((tag) => blogTagMetadata(tag, blogRouteBase)),
  };
}

function blogSidebarPosts(posts) {
  return sortBlogPosts(posts).map((post) => ({
    title: post.title,
    routePath: post.routePath,
    date: post.date,
  }));
}

function blogPostDetail(post, posts, authorProfiles, blogRouteBase) {
  const sortedPosts = sortBlogPosts(posts);
  const index = sortedPosts.findIndex((candidate) => candidate.filepath === post.filepath);
  const adjacent = (candidate) => candidate ? {
    title: candidate.title,
    routePath: candidate.routePath,
  } : null;
  return {
    ...blogPostSummary(post, authorProfiles, blogRouteBase),
    previous: adjacent(sortedPosts[index - 1]),
    next: adjacent(sortedPosts[index + 1]),
    sidebarPosts: blogSidebarPosts(posts),
  };
}

function blogIndexData(posts, authorProfiles, blogRouteBase) {
  const sortedPosts = sortBlogPosts(posts);
  const entries = sortedPosts.map((post) => toIndexEntry(post, post.date));
  return {
    kind: 'blog-index',
    title: '经验分享',
    posts: sortedPosts.map((post) => blogPostSummary(post, authorProfiles, blogRouteBase)),
    sidebarPosts: blogSidebarPosts(posts),
    sections: [
      ['浏览', null, [
        ['归档', '/blog/archive'],
        ['作者', '/blog/authors'],
        ['标签', '/blog/tags'],
      ]],
      ['文章', null, entries],
    ],
  };
}

function blogArchiveData(posts, authorProfiles, blogRouteBase) {
  const postsByYear = new Map();
  for (const post of sortBlogPosts(posts)) {
    const year = post.date.slice(0, 4);
    if (!postsByYear.has(year)) postsByYear.set(year, []);
    postsByYear.get(year).push(post);
  }
  return {
    kind: 'blog-archive',
    title: '文章归档',
    years: [...postsByYear].map(([year, yearPosts]) => ({
      year,
      posts: yearPosts.map((post) => blogPostSummary(post, authorProfiles, blogRouteBase)),
    })),
    sidebarPosts: blogSidebarPosts(posts),
    sections: [...postsByYear].map(([year, yearPosts]) => [
      year,
      null,
      yearPosts.map((post) => toIndexEntry(post, post.date)),
    ]),
  };
}

function blogAuthorsData(posts, authorProfiles, blogRouteBase) {
  const postsByAuthor = new Map();
  for (const post of posts) {
    for (const authorId of normalizedTags(
      post.frontmatter.author ?? post.frontmatter.authors,
    )) {
      if (!postsByAuthor.has(authorId)) postsByAuthor.set(authorId, []);
      postsByAuthor.get(authorId).push(post);
    }
  }
  return {
    kind: 'blog-authors',
    title: '作者',
    authors: [...postsByAuthor]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))
      .map(([authorId, authorPosts]) => ({
        id: authorId,
        name: authorProfiles[authorId]?.name || authorId,
        title: authorProfiles[authorId]?.title || '',
        posts: sortBlogPosts(authorPosts).map((post) => (
          blogPostSummary(post, authorProfiles, blogRouteBase)
        )),
      })),
    sidebarPosts: blogSidebarPosts(posts),
    sections: [...postsByAuthor]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))
      .map(([authorId, authorPosts]) => [
        authorProfiles[authorId]?.name || authorId,
        null,
        [...authorPosts]
          .sort((left, right) => right.date.localeCompare(left.date))
          .map((post) => toIndexEntry(post, post.date)),
      ]),
  };
}

function blogTagsData(posts, blogRouteBase) {
  const byTag = new Map();
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag).push(post);
    }
  }
  return {
    kind: 'blog-tags',
    title: '文章标签',
    tags: [...byTag]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))
      .map(([tag, taggedPosts]) => blogTagMetadata(tag, blogRouteBase, taggedPosts.length)),
    sidebarPosts: blogSidebarPosts(posts),
    sections: [['标签', null, [...byTag]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))
      .map(([tag, taggedPosts]) => [
        tag,
        `${blogRouteBase}/tags/${tagBrowseSlug(tag)}`,
        String(taggedPosts.length),
      ])]],
  };
}

function blogTagData(tag, posts, allPosts, authorProfiles, blogRouteBase) {
  return {
    kind: 'blog-tag',
    title: `标签：${tag}`,
    tag: blogTagMetadata(tag, blogRouteBase, posts.length),
    posts: sortBlogPosts(posts).map((post) => (
      blogPostSummary(post, authorProfiles, blogRouteBase)
    )),
    sidebarPosts: blogSidebarPosts(allPosts),
    sections: [[null, null, [...posts]
      .sort((left, right) => right.date.localeCompare(left.date))
      .map((post) => toIndexEntry(post, post.date))]],
  };
}

function tagIndexContent({title, entries, emptyText}) {
  const byTag = new Map();
  for (const entry of entries) {
    for (const tag of entry.tags) {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag).push(entry);
    }
  }

  const lines = [pageFrontmatter(title), `# ${escapeMdxText(title)}`, ''];
  const tags = [...byTag].sort(([left], [right]) => left.localeCompare(right, 'en'));
  if (tags.length === 0) {
    lines.push(emptyText);
    return `${lines.join('\n')}\n`;
  }

  for (const [tag, taggedEntries] of tags) {
    lines.push(`## ${escapeMdxText(tag)}`, '');
    for (const entry of taggedEntries.sort((left, right) => (
      left.title.localeCompare(right.title, 'zh-Hans')
    ))) {
      lines.push(`- ${markdownLink(entry.title, entry.routePath)}`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function tagIndexData({title, entries}) {
  const byTag = new Map();
  for (const entry of entries) {
    for (const tag of entry.tags) {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag).push(entry);
    }
  }
  return {
    kind: 'tag-index',
    title,
    sections: [...byTag]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))
      .map(([tag, taggedEntries]) => [
        tag,
        null,
        uniqueDocuments(taggedEntries).map((entry) => toIndexEntry(entry)),
      ]),
  };
}

function compareDocuments(left, right) {
  return left.routePath.localeCompare(right.routePath, 'en')
    || left.title.localeCompare(right.title, 'zh-Hans');
}

function uniqueDocuments(documents) {
  return [...new Map(documents.map((document) => [document.routePath, document])).values()]
    .sort(compareDocuments);
}

function analyzeTaxonomyDocuments(documents, taxonomy) {
  const schoolTags = taxonomy.schoolTags || {};
  const subsubjects = taxonomy.subsubjects || {};
  const topics = taxonomy.topics || {};
  const aliases = new Map();
  for (const entries of [schoolTags, subsubjects, topics]) {
    for (const [id, metadata] of Object.entries(entries)) {
      for (const alias of metadata.aliases || []) {
        if (!aliases.has(alias)) aliases.set(alias, id);
      }
    }
  }
  const schoolByUniversityId = new Map(
    Object.entries(schoolTags)
      .filter(([, metadata]) => metadata.universityId)
      .map(([id, metadata]) => [metadata.universityId, id]),
  );

  const schoolDocuments = new Map(
    Object.keys(schoolTags).map((id) => [id, []]),
  );
  const subsubjectDocuments = new Map();
  const directSubsubjectDocuments = new Map();
  const topicDocuments = new Map();
  const unknownTags = new Map();

  const addDocument = (collection, id, document) => {
    if (!id) return;
    if (!collection.has(id)) collection.set(id, []);
    collection.get(id).push(document);
  };

  for (const document of documents) {
    const canonicalTags = document.tags.map((tag) => aliases.get(tag) || tag);
    const schoolIds = new Set();
    const subsubjectIds = new Set();
    const directSubsubjectIds = new Set();
    const topicIds = new Set();
    const relativeParts = document.relativePath.split('/').filter(Boolean);
    const derivedSchoolId = schoolByUniversityId.get(relativeParts[0]);
    if (derivedSchoolId) schoolIds.add(derivedSchoolId);

    for (const tag of canonicalTags) {
      if (schoolTags[tag]) {
        schoolIds.add(tag);
      } else if (subsubjects[tag]) {
        subsubjectIds.add(tag);
        directSubsubjectIds.add(tag);
      } else if (topics[tag]) {
        topicIds.add(tag);
        if (topics[tag].subsubject) subsubjectIds.add(topics[tag].subsubject);
      } else if (!taxonomy.subjects?.[tag]) {
        addDocument(unknownTags, tag, document);
      }
    }

    for (const id of schoolIds) addDocument(schoolDocuments, id, document);
    for (const id of subsubjectIds) addDocument(subsubjectDocuments, id, document);
    for (const id of directSubsubjectIds) {
      addDocument(directSubsubjectDocuments, id, document);
    }
    for (const id of topicIds) addDocument(topicDocuments, id, document);
  }

  for (const collection of [
    schoolDocuments,
    subsubjectDocuments,
    directSubsubjectDocuments,
    topicDocuments,
    unknownTags,
  ]) {
    for (const [id, taggedDocuments] of collection) {
      collection.set(id, uniqueDocuments(taggedDocuments));
    }
  }

  return {
    schoolDocuments,
    subsubjectDocuments,
    directSubsubjectDocuments,
    topicDocuments,
    unknownTags,
  };
}

function taxonomySubsubjectOrder(taxonomy, activeIds) {
  const configuredOrder = new Map(
    (taxonomy.subsubjectOrder || []).map((id, index) => [id, index]),
  );
  const subjectOrder = new Map(
    (taxonomy.subjectOrder || []).map((id, index) => [id, index]),
  );
  return [...activeIds].sort((left, right) => {
    const leftSubject = taxonomy.subsubjects[left]?.subject || 'General';
    const rightSubject = taxonomy.subsubjects[right]?.subject || 'General';
    return (subjectOrder.get(leftSubject) ?? Number.POSITIVE_INFINITY)
      - (subjectOrder.get(rightSubject) ?? Number.POSITIVE_INFINITY)
      || (configuredOrder.get(left) ?? Number.POSITIVE_INFINITY)
      - (configuredOrder.get(right) ?? Number.POSITIVE_INFINITY)
      || left.localeCompare(right, 'en');
  });
}

function schoolTagPageContent(schoolId, metadata, documents) {
  const displayLabel = localizedTaxonomyLabel(metadata, schoolId);
  const title = displayLabel === schoolId ? schoolId : `${schoolId} · ${displayLabel}`;
  const lines = [pageFrontmatter(title), `# ${escapeMdxText(title)}`, ''];
  if (documents.length === 0) {
    lines.push('暂无相关文档。', '');
  } else {
    lines.push(`共 ${documents.length} 篇文档`, '');
    for (const document of documents) {
      lines.push(`- ${markdownLink(document.title, document.routePath)}`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function isPathInsideDirectory(filepath, directory) {
  const relativePath = path.relative(directory, filepath);
  return relativePath === '' || (
    relativePath !== '..'
    && !relativePath.startsWith(`..${path.sep}`)
    && !path.isAbsolute(relativePath)
  );
}

function countCategoryDocuments(category, documents) {
  return documents.filter((document) => (
    isPathInsideDirectory(document.filepath, category.directory)
  )).length;
}

function sortCategoryRecords(categories) {
  return [...categories].sort((left, right) => compareIndexEntries(
    {
      title: left.title,
      position: left.metadata.position,
    },
    {
      title: right.title,
      position: right.metadata.position,
    },
  ));
}

function schoolCategoryEntry(category, categories, documents) {
  const children = sortCategoryRecords(categories.filter((candidate) => (
    candidate.routePath
    && candidate.directory !== category.directory
    && path.dirname(candidate.directory) === category.directory
  )))
    .map((child) => ({
      category: child,
      count: countCategoryDocuments(child, documents),
    }))
    .filter(({count}) => count > 0)
    .map(({category: child, count}) => [
      child.title,
      child.routePath,
      `${count} 篇`,
    ]);
  const documentCount = countCategoryDocuments(category, documents);
  return [
    category.title,
    category.routePath,
    `${documentCount} 篇`,
    children,
  ];
}

function schoolTagPageData(
  schoolId,
  metadata,
  documents,
  categories,
  docsDir,
  docsRouteBase,
) {
  const displayLabel = localizedTaxonomyLabel(metadata, schoolId);
  const title = displayLabel === schoolId ? schoolId : `${schoolId} · ${displayLabel}`;
  const universityId = metadata.universityId
    || documents[0]?.relativePath.split('/').filter(Boolean)[0];
  const universityDirectory = universityId
    ? path.join(docsDir, universityId)
    : null;
  const rootCategory = universityDirectory
    ? categories.find((category) => category.directory === universityDirectory)
    : null;
  const categoryEntries = universityDirectory
    ? sortCategoryRecords(categories.filter((category) => (
      category.routePath
      && path.dirname(category.directory) === universityDirectory
    )))
      .map((category) => schoolCategoryEntry(category, categories, documents))
      .filter((entry) => entry[2] !== '0 篇')
    : [];

  // All current schools have a generated root category. Keep a useful route
  // even for a downstream taxonomy whose directory has no immediate children.
  if (categoryEntries.length === 0 && rootCategory?.routePath) {
    categoryEntries.push([
      rootCategory.title,
      rootCategory.routePath,
      `${documents.length} 篇`,
      [],
    ]);
  }

  return {
    kind: 'school-tag',
    title,
    schoolId,
    schoolLabel: displayLabel,
    intro: `共 ${documents.length} 篇文档`,
    allTagsHref: `${docsRouteBase}/tags`,
    rootCategoryHref: rootCategory?.routePath,
    sections: [['研究科与专攻', null, categoryEntries]],
  };
}

function subsubjectTagPageContent(
  subsubjectId,
  taxonomy,
  analysis,
) {
  const metadata = taxonomy.subsubjects[subsubjectId] || {};
  const shortId = getSubsubjectShortId(subsubjectId, taxonomy);
  const displayLabel = localizedTaxonomyLabel(metadata, humanizeTag(shortId));
  const subjectId = metadata.subject || 'General';
  const documents = analysis.subsubjectDocuments.get(subsubjectId) || [];
  const directDocuments = analysis.directSubsubjectDocuments.get(subsubjectId) || [];
  const activeTopics = Object.keys(taxonomy.topics || {})
    .filter((topicId) => (
      taxonomy.topics[topicId]?.subsubject === subsubjectId
      && analysis.topicDocuments.has(topicId)
    ))
    .sort((left, right) => (
      (analysis.topicDocuments.get(right)?.length || 0)
        - (analysis.topicDocuments.get(left)?.length || 0)
      || left.localeCompare(right, 'en')
    ));
  const description = metadata.descriptionZh
    || metadata.descriptionJa
    || metadata.descriptionEn;
  const lines = [
    pageFrontmatter(displayLabel),
    `# ${escapeMdxText(displayLabel)}`,
    '',
    `${escapeMdxText(subjectId)} / ${escapeMdxText(shortId)} · ${documents.length} 篇文档`,
    '',
  ];
  if (description) lines.push(escapeMdxText(description), '');

  if (directDocuments.length > 0) {
    lines.push('<span id="topic-unclassified" />', '', '## 未细分', '');
    for (const document of directDocuments) {
      lines.push(`- ${markdownLink(document.title, document.routePath)}`);
    }
    lines.push('');
  }

  for (const topicId of activeTopics) {
    const topicDocs = analysis.topicDocuments.get(topicId) || [];
    const shortTopicId = getTopicShortId(topicId, taxonomy);
    lines.push(
      `<span id=${JSON.stringify(topicAnchor(topicId, taxonomy))} />`,
      '',
      `## ${escapeMdxText(humanizeTag(shortTopicId))}`,
      '',
    );
    for (const document of topicDocs) {
      lines.push(`- ${markdownLink(document.title, document.routePath)}`);
    }
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function subsubjectTagPageData(subsubjectId, taxonomy, analysis) {
  const metadata = taxonomy.subsubjects[subsubjectId] || {};
  const shortId = getSubsubjectShortId(subsubjectId, taxonomy);
  const title = localizedTaxonomyLabel(metadata, humanizeTag(shortId));
  const subjectId = metadata.subject || 'General';
  const documents = analysis.subsubjectDocuments.get(subsubjectId) || [];
  const directDocuments = analysis.directSubsubjectDocuments.get(subsubjectId) || [];
  const sections = [];
  if (directDocuments.length > 0) {
    sections.push([
      '未细分',
      'topic-unclassified',
      directDocuments.map((document) => toIndexEntry(document)),
    ]);
  }
  const activeTopics = Object.keys(taxonomy.topics || {})
    .filter((topicId) => (
      taxonomy.topics[topicId]?.subsubject === subsubjectId
      && analysis.topicDocuments.has(topicId)
    ))
    .sort((left, right) => (
      (analysis.topicDocuments.get(right)?.length || 0)
        - (analysis.topicDocuments.get(left)?.length || 0)
      || left.localeCompare(right, 'en')
    ));
  for (const topicId of activeTopics) {
    sections.push([
      humanizeTag(getTopicShortId(topicId, taxonomy)),
      topicAnchor(topicId, taxonomy),
      (analysis.topicDocuments.get(topicId) || [])
        .map((document) => toIndexEntry(document)),
    ]);
  }
  return {
    kind: 'subsubject-tag',
    title,
    intro: `${subjectId} / ${shortId} · ${documents.length} 篇文档`,
    description: metadata.descriptionZh
      || metadata.descriptionJa
      || metadata.descriptionEn
      || '',
    sections,
  };
}

function docsTaxonomyIndexContent(taxonomy, analysis, docsRouteBase) {
  const activeSubsubjects = taxonomySubsubjectOrder(
    taxonomy,
    analysis.subsubjectDocuments.keys(),
  );
  const subsubjectsBySubject = new Map();
  for (const subsubjectId of activeSubsubjects) {
    const subjectId = taxonomy.subsubjects[subsubjectId]?.subject || 'General';
    if (!subsubjectsBySubject.has(subjectId)) subsubjectsBySubject.set(subjectId, []);
    subsubjectsBySubject.get(subjectId).push(subsubjectId);
  }

  const lines = [pageFrontmatter('文档标签'), '# 文档标签', '', '## 学校', ''];
  for (const [schoolId, metadata] of Object.entries(taxonomy.schoolTags || {})) {
    const routePath = schoolTagRoute(schoolId, docsRouteBase);
    const displayLabel = localizedTaxonomyLabel(metadata, schoolId);
    const count = analysis.schoolDocuments.get(schoolId)?.length || 0;
    const label = displayLabel === schoolId ? schoolId : `${schoolId} · ${displayLabel}`;
    lines.push(`- ${markdownLink(label, routePath)} (${count})`);
  }

  lines.push('', '## 科目与考点', '');
  for (const [subjectId, subsubjectIds] of subsubjectsBySubject) {
    const subjectLabel = localizedTaxonomyLabel(taxonomy.subjects?.[subjectId], subjectId);
    lines.push(`### ${escapeMdxText(subjectLabel)}`, '');
    for (const subsubjectId of subsubjectIds) {
      const routePath = subsubjectTagRoute(subsubjectId, taxonomy, docsRouteBase);
      const metadata = taxonomy.subsubjects[subsubjectId] || {};
      const shortId = getSubsubjectShortId(subsubjectId, taxonomy);
      const displayLabel = localizedTaxonomyLabel(metadata, humanizeTag(shortId));
      const count = analysis.subsubjectDocuments.get(subsubjectId)?.length || 0;
      lines.push(`- ${markdownLink(displayLabel, routePath)} (${count})`);

      const activeTopics = Object.keys(taxonomy.topics || {})
        .filter((topicId) => (
          taxonomy.topics[topicId]?.subsubject === subsubjectId
          && analysis.topicDocuments.has(topicId)
        ))
        .sort((left, right) => left.localeCompare(right, 'en'));
      for (const topicId of activeTopics) {
        const topicHref = `${routePath}#${topicAnchor(topicId, taxonomy)}`;
        const topicLabel = humanizeTag(getTopicShortId(topicId, taxonomy));
        const topicCount = analysis.topicDocuments.get(topicId)?.length || 0;
        lines.push(`  - ${markdownLink(topicLabel, topicHref)} (${topicCount})`);
      }
    }
    lines.push('');
  }

  if (analysis.unknownTags.size > 0) {
    lines.push('## 待整理标签', '');
    for (const [tag, taggedDocuments] of [...analysis.unknownTags]
      .sort(([left], [right]) => left.localeCompare(right, 'en'))) {
      lines.push(`- ${escapeMdxText(tag)} (${taggedDocuments.length})`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function docsTaxonomyIndexData(taxonomy, analysis, docsRouteBase) {
  const activeSubsubjects = taxonomySubsubjectOrder(
    taxonomy,
    analysis.subsubjectDocuments.keys(),
  );
  const subsubjectsBySubject = new Map();
  for (const subsubjectId of activeSubsubjects) {
    const subjectId = taxonomy.subsubjects[subsubjectId]?.subject || 'General';
    if (!subsubjectsBySubject.has(subjectId)) subsubjectsBySubject.set(subjectId, []);
    subsubjectsBySubject.get(subjectId).push(subsubjectId);
  }

  const schoolEntries = Object.entries(taxonomy.schoolTags || {})
    .map(([schoolId, metadata]) => {
      const displayLabel = localizedTaxonomyLabel(metadata, schoolId);
      const label = displayLabel === schoolId ? schoolId : `${schoolId} · ${displayLabel}`;
      return [
        label,
        schoolTagRoute(schoolId, docsRouteBase),
        String(analysis.schoolDocuments.get(schoolId)?.length || 0),
      ];
    });
  const sections = [['学校', null, schoolEntries]];

  for (const [subjectId, subsubjectIds] of subsubjectsBySubject) {
    const subjectLabel = localizedTaxonomyLabel(taxonomy.subjects?.[subjectId], subjectId);
    const entries = subsubjectIds.map((subsubjectId) => {
      const routePath = subsubjectTagRoute(subsubjectId, taxonomy, docsRouteBase);
      const metadata = taxonomy.subsubjects[subsubjectId] || {};
      const shortId = getSubsubjectShortId(subsubjectId, taxonomy);
      const displayLabel = localizedTaxonomyLabel(metadata, humanizeTag(shortId));
      const topics = Object.keys(taxonomy.topics || {})
        .filter((topicId) => (
          taxonomy.topics[topicId]?.subsubject === subsubjectId
          && analysis.topicDocuments.has(topicId)
        ))
        .sort((left, right) => left.localeCompare(right, 'en'))
        .map((topicId) => [
          humanizeTag(getTopicShortId(topicId, taxonomy)),
          `${routePath}#${topicAnchor(topicId, taxonomy)}`,
          String(analysis.topicDocuments.get(topicId)?.length || 0),
        ]);
      return [
        displayLabel,
        routePath,
        String(analysis.subsubjectDocuments.get(subsubjectId)?.length || 0),
        topics,
      ];
    });
    sections.push([subjectLabel, null, entries]);
  }

  if (analysis.unknownTags.size > 0) {
    sections.push([
      '待整理标签',
      null,
      [...analysis.unknownTags]
        .sort(([left], [right]) => left.localeCompare(right, 'en'))
        .map(([tag, documents]) => [tag, null, String(documents.length)]),
    ]);
  }

  return {kind: 'docs-tag-index', title: '文档标签', sections};
}

function categoryRecords(docsDir, docsRouteBase) {
  return walkFiles(docsDir, (name) => name === '_category_.json')
    .map((filepath) => {
      const metadata = readCategory(filepath);
      const link = metadata?.link;
      const routePath = link?.type === 'generated-index' && typeof link.slug === 'string'
        // Docusaurus treats a leading slash in a docs slug as relative to the
        // docs route base, not to the origin. Preserve `/docs/category/*`.
        ? normalizeInternalRoute(`${docsRouteBase}/${link.slug}`)
        : null;
      return {
        filepath,
        directory: path.dirname(filepath),
        metadata,
        routePath,
        title: typeof metadata.label === 'string' && metadata.label.trim()
          ? metadata.label.trim()
          : path.basename(path.dirname(filepath)),
      };
    });
}

function positionValue(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : Number.POSITIVE_INFINITY;
}

function compareIndexEntries(left, right) {
  return positionValue(left.position) - positionValue(right.position)
    || left.title.localeCompare(right.title, 'zh-Hans');
}

function categoryIndexContent(category, documents, categories) {
  const directDocuments = documents
    .filter((document) => path.dirname(document.filepath) === category.directory)
    .map((document) => ({
      title: document.title,
      routePath: document.routePath,
      position: document.frontmatter.sidebar_position,
    }))
    .sort(compareIndexEntries);
  const childCategories = categories
    .filter((candidate) => (
      candidate.routePath
      && candidate.directory !== category.directory
      && path.dirname(candidate.directory) === category.directory
    ))
    .map((candidate) => ({
      title: candidate.title,
      routePath: candidate.routePath,
      position: candidate.metadata.position,
    }))
    .sort(compareIndexEntries);

  const description = category.metadata.description ?? category.metadata.link?.description;
  const lines = [
    pageFrontmatter(category.title),
    `# ${escapeMdxText(category.title)}`,
    '',
  ];
  if (typeof description === 'string' && description.trim()) {
    lines.push(escapeMdxText(description.trim()), '');
  }
  if (childCategories.length > 0) {
    lines.push('## 分类', '');
    for (const item of childCategories) {
      lines.push(`- ${markdownLink(item.title, item.routePath)}`);
    }
    lines.push('');
  }
  if (directDocuments.length > 0) {
    lines.push('## 文档', '');
    for (const item of directDocuments) {
      lines.push(`- ${markdownLink(item.title, item.routePath)}`);
    }
    lines.push('');
  }
  if (childCategories.length === 0 && directDocuments.length === 0) {
    lines.push('该分类暂时没有内容。', '');
  }
  return `${lines.join('\n')}\n`;
}

function categoryIndexData(
  category,
  documents,
  categories,
  docsDir,
  docsRouteBase,
) {
  const directDocuments = documents
    .filter((document) => path.dirname(document.filepath) === category.directory)
    .map((document) => ({
      title: document.title,
      routePath: document.routePath,
      position: document.frontmatter.sidebar_position,
    }))
    .sort(compareIndexEntries);
  const childCategories = categories
    .filter((candidate) => (
      candidate.routePath
      && candidate.directory !== category.directory
      && path.dirname(candidate.directory) === category.directory
    ))
    .sort((left, right) => compareIndexEntries(
      {title: left.title, position: left.metadata.position},
      {title: right.title, position: right.metadata.position},
    ));
  const relativeDirectory = path.relative(docsDir, category.directory);
  const categoryDepth = relativeDirectory.split(path.sep).filter(Boolean).length;
  const categorySectionTitle = categoryDepth === 1
    ? '研究科与专攻'
    : categoryDepth === 2
      ? '专攻与子分类'
      : '子分类';
  const sections = [];
  if (childCategories.length > 0) {
    sections.push([
      categorySectionTitle,
      null,
      childCategories.map((item) => (
        schoolCategoryEntry(item, categories, documents)
      )),
    ]);
  }
  if (directDocuments.length > 0) {
    sections.push([
      '文档',
      null,
      directDocuments.map((item) => toIndexEntry(item)),
    ]);
  }
  return {
    kind: categoryDepth === 1 ? 'university-category' : 'category',
    title: category.title,
    categoryDepth,
    intro: categoryDepth === 1
      ? `共 ${countCategoryDocuments(category, documents)} 篇文档。`
      : undefined,
    allTagsHref: `${docsRouteBase}/tags`,
    description: category.metadata.description
      ?? category.metadata.link?.description
      ?? '',
    sections,
  };
}

/**
 * Register the legacy Kai Project URL space through Rspress' `addPages` hook.
 *
 * @param {object} [options]
 * @param {string} [options.siteDir] Project root. Defaults to this plugin's parent directory.
 * @param {string} [options.docsDir='docs'] Absolute path or path relative to siteDir.
 * @param {string} [options.blogDir='blog'] Absolute path or path relative to siteDir.
 * @param {string} [options.pagesDir='src/pages'] Absolute path or path relative to siteDir.
 * @param {string} [options.generatedIndexPage='src/rspress/GeneratedIndexPage.jsx'] Shared generated page component.
 * @param {string} [options.categoryGeneratedPage='src/rspress/CategoryGeneratedPage.jsx'] Generated category component with sidebar.
 * @param {string} [options.blogGeneratedPage='src/rspress/blog/BlogGeneratedPage.jsx'] Blog index component.
 * @param {string} [options.docsRouteBase='/docs'] Public docs route prefix.
 * @param {string} [options.blogRouteBase='/blog'] Public blog route prefix.
 * @param {boolean} [options.categoryIndexes=true] Generate old generated-index category routes.
 * @param {boolean} [options.tagIndexes=true] Generate docs taxonomy routes and tag indexes.
 * @param {object} [options.taxonomy] Optional taxonomy override (primarily for tests).
 * @returns {{name: string, addPages: Function, modifySearchIndexData: Function, extendPageData: Function}}
 */
export function createKaiRoutesPlugin(options = {}) {
  const normalizedOptions = typeof options === 'string' ? {siteDir: options} : options;
  const siteDir = path.resolve(normalizedOptions.siteDir ?? DEFAULT_SITE_DIR);
  const docsDir = resolveFrom(siteDir, normalizedOptions.docsDir ?? 'docs');
  const blogDir = resolveFrom(siteDir, normalizedOptions.blogDir ?? 'blog');
  const pagesDir = resolveFrom(siteDir, normalizedOptions.pagesDir ?? 'src/pages');
  const generatedIndexPage = resolveFrom(
    siteDir,
    normalizedOptions.generatedIndexPage ?? 'src/rspress/GeneratedIndexPage.jsx',
  );
  const categoryGeneratedPage = resolveFrom(
    siteDir,
    normalizedOptions.categoryGeneratedPage ?? 'src/rspress/CategoryGeneratedPage.jsx',
  );
  const blogGeneratedPage = resolveFrom(
    siteDir,
    normalizedOptions.blogGeneratedPage ?? 'src/rspress/blog/BlogGeneratedPage.jsx',
  );
  const docsRouteBase = normalizeInternalRoute(
    normalizedOptions.docsRouteBase ?? '/docs',
  );
  const blogRouteBase = normalizeInternalRoute(
    normalizedOptions.blogRouteBase ?? '/blog',
  );
  const shouldCreateCategoryIndexes = normalizedOptions.categoryIndexes !== false;
  const shouldCreateTagIndexes = normalizedOptions.tagIndexes !== false;
  const generatedPageDataByRoute = new Map();
  let blogAuthors = {};
  let blogPosts = [];

  return {
    name: 'rspress-kai-routes',
    addPages() {
      assertDirectory(docsDir, 'docs directory');
      assertDirectory(blogDir, 'blog directory');
      assertDirectory(pagesDir, 'pages directory');
      if (!existsSync(generatedIndexPage)) {
        throw new Error(
          `[rspress-kai-routes] Shared generated page does not exist: ${generatedIndexPage}`,
        );
      }
      if (!existsSync(categoryGeneratedPage)) {
        throw new Error(
          `[rspress-kai-routes] Category generated page does not exist: ${categoryGeneratedPage}`,
        );
      }
      if (!existsSync(blogGeneratedPage)) {
        throw new Error(
          `[rspress-kai-routes] Blog generated page does not exist: ${blogGeneratedPage}`,
        );
      }

      generatedPageDataByRoute.clear();
      blogAuthors = readBlogAuthors(blogDir);

      const pages = [];
      const routeSources = new Map();
      const addPage = (page, source) => {
        const key = canonicalRoute(page.routePath);
        const previousSource = routeSources.get(key);
        if (previousSource) {
          throw new Error(
            `[rspress-kai-routes] Duplicate route ${page.routePath}: `
              + `${previousSource} and ${source}`,
          );
        }
        routeSources.set(key, source);
        pages.push(page);
      };
      const addGeneratedPage = (
        routePath,
        data,
        source,
        componentFile = generatedIndexPage,
      ) => {
        const normalizedRoutePath = normalizeInternalRoute(routePath, {
          keepTrailingSlash: routePath.endsWith('/'),
        });
        generatedPageDataByRoute.set(canonicalRoute(normalizedRoutePath), data);
        addPage(
          {routePath: normalizedRoutePath, filepath: componentFile},
          source,
        );
      };

      const documents = walkFiles(
        docsDir,
        (name) => MARKDOWN_EXTENSION_RE.test(name),
      ).map((filepath) => {
        const frontmatter = readFrontmatter(filepath);
        const relativePath = assertSafeRelativePath(
          path.relative(docsDir, filepath),
          filepath,
        );
        return {
          filepath,
          relativePath,
          frontmatter,
          routePath: routeForDocument(filepath, docsDir, docsRouteBase),
          title: titleForDocument(filepath, frontmatter),
          tags: normalizedTags(frontmatter.tags),
        };
      });

      for (const document of documents) {
        addPage(
          {routePath: document.routePath, filepath: document.filepath},
          document.filepath,
        );
      }

      const posts = walkFiles(
        blogDir,
        (name) => MARKDOWN_EXTENSION_RE.test(name),
        false,
      ).map((filepath) => blogRecord(filepath, blogRouteBase));
      blogPosts = posts;
      for (const post of posts) {
        addPage(
          {routePath: post.routePath, filepath: post.filepath},
          post.filepath,
        );
      }

      addGeneratedPage(
        blogRouteBase,
        blogIndexData(posts, blogAuthors, blogRouteBase),
        '<generated blog index>',
        blogGeneratedPage,
      );
      addGeneratedPage(
        `${blogRouteBase}/archive`,
        blogArchiveData(posts, blogAuthors, blogRouteBase),
        '<generated blog archive>',
        blogGeneratedPage,
      );
      addGeneratedPage(
        `${blogRouteBase}/authors`,
        blogAuthorsData(posts, blogAuthors, blogRouteBase),
        '<generated blog authors>',
        blogGeneratedPage,
      );

      const categories = shouldCreateCategoryIndexes
        ? categoryRecords(docsDir, docsRouteBase)
        : [];
      for (const category of categories) {
        if (!category.routePath) continue;
        addGeneratedPage(
          category.routePath,
          categoryIndexData(
            category,
            documents,
            categories,
            docsDir,
            docsRouteBase,
          ),
          category.filepath,
          categoryGeneratedPage,
        );
      }

      if (shouldCreateTagIndexes) {
        const taxonomy = loadTagTaxonomy(siteDir, normalizedOptions.taxonomy);
        if (taxonomy) {
          const analysis = analyzeTaxonomyDocuments(documents, taxonomy);
          addGeneratedPage(
            `${docsRouteBase}/tags`,
            docsTaxonomyIndexData(taxonomy, analysis, docsRouteBase),
            '<generated docs taxonomy index>',
          );

          for (const [schoolId, metadata] of Object.entries(taxonomy.schoolTags || {})) {
            addGeneratedPage(
              schoolTagRoute(schoolId, docsRouteBase),
              schoolTagPageData(
                schoolId,
                metadata,
                analysis.schoolDocuments.get(schoolId) || [],
                categories,
                docsDir,
                docsRouteBase,
              ),
              `<generated school tag: ${schoolId}>`,
            );
          }

          const activeSubsubjects = taxonomySubsubjectOrder(
            taxonomy,
            analysis.subsubjectDocuments.keys(),
          );
          for (const subsubjectId of activeSubsubjects) {
            addGeneratedPage(
              subsubjectTagRoute(
                subsubjectId,
                taxonomy,
                docsRouteBase,
              ),
              subsubjectTagPageData(subsubjectId, taxonomy, analysis),
              `<generated subsubject tag: ${subsubjectId}>`,
            );
          }
        } else {
          // A fixture or downstream consumer may not ship Kai's taxonomy.
          // Keep the public aggregate route useful without inventing detail URLs.
          addGeneratedPage(
            `${docsRouteBase}/tags`,
            tagIndexData({title: '文档标签', entries: documents}),
            '<generated docs tag index>',
          );
        }
        addGeneratedPage(
          `${blogRouteBase}/tags`,
          blogTagsData(posts, blogRouteBase),
          '<generated blog tag index>',
          blogGeneratedPage,
        );
        const postsByTag = new Map();
        for (const post of posts) {
          for (const tag of post.tags) {
            if (!postsByTag.has(tag)) postsByTag.set(tag, []);
            postsByTag.get(tag).push(post);
          }
        }
        for (const [tag, taggedPosts] of postsByTag) {
          addGeneratedPage(
            `${blogRouteBase}/tags/${tagBrowseSlug(tag)}`,
            blogTagData(tag, taggedPosts, posts, blogAuthors, blogRouteBase),
            `<generated blog tag: ${tag}>`,
            blogGeneratedPage,
          );
        }
      }

      for (const customPage of DEFAULT_CUSTOM_PAGES) {
        const componentFile = path.resolve(pagesDir, customPage.component);
        if (!existsSync(componentFile)) {
          throw new Error(
            `[rspress-kai-routes] Custom page component does not exist: ${componentFile}`,
          );
        }
        addPage(
          {
            routePath: customPage.routePath,
            content: customPageContent(componentFile, customPage.title),
          },
          componentFile,
        );
      }

      return pages;
    },
    modifySearchIndexData(pages) {
      for (const page of pages) {
        if (!generatedPageDataByRoute.has(canonicalRoute(page.routePath))) continue;
        page.frontmatter = {...page.frontmatter, search: false};
      }
    },
    extendPageData(pageData) {
      const generatedData = generatedPageDataByRoute.get(
        canonicalRoute(pageData?.routePath || '/'),
      );
      if (generatedData) {
        pageData.generatedIndex = generatedData;
        pageData.title = generatedData.title;
        pageData.headingTitle = generatedData.title;
        if (generatedData.description) pageData.description = generatedData.description;
        return;
      }

      const filepath = pageData?._filepath;
      if (typeof filepath !== 'string' || filepath === '') return;

      const docsRelative = path.relative(docsDir, filepath);
      const normalizedDocsRelative = toPosixPath(docsRelative);
      const isDocsFile = MARKDOWN_EXTENSION_RE.test(filepath)
        && normalizedDocsRelative !== '..'
        && !normalizedDocsRelative.startsWith('../')
        && !path.isAbsolute(docsRelative);
      if (isDocsFile) {
        pageData.docId = normalizedDocsRelative.replace(MARKDOWN_EXTENSION_RE, '');
        pageData.source = `docs/${normalizedDocsRelative}`;
        return;
      }

      const blogRelative = path.relative(blogDir, filepath);
      const normalizedBlogRelative = toPosixPath(blogRelative);
      const isBlogFile = MARKDOWN_EXTENSION_RE.test(filepath)
        && !normalizedBlogRelative.includes('/')
        && normalizedBlogRelative !== '..'
        && !path.isAbsolute(blogRelative);
      if (isBlogFile) {
        const post = blogPosts.find((candidate) => candidate.filepath === filepath)
          ?? blogRecord(filepath, blogRouteBase);
        pageData.source = `blog/${normalizedBlogRelative}`;
        pageData.date = post.date;
        const frontmatter = pageData.frontmatter || {};
        const authors = resolveBlogAuthors(
          frontmatter.author ?? frontmatter.authors,
          blogAuthors,
        );
        pageData.frontmatter = {
          ...frontmatter,
          // Blog navigation is rendered in Rspress' native left sidebar via
          // the theme's `beforeSidebar` slot. Keeping the sidebar enabled also
          // preserves the responsive drawer on narrow screens.
          sidebar: true,
          footer: false,
          date: frontmatter.date ?? post.date,
          ...(authors.length > 0 ? {author: authors} : {}),
          categories: frontmatter.categories ?? frontmatter.category ?? post.tags,
        };
        if (!pageData.description && post.excerpt) pageData.description = post.excerpt;
        pageData.blogPost = blogPostDetail(
          post,
          blogPosts,
          blogAuthors,
          blogRouteBase,
        );
      }
    },
  };
}

export default createKaiRoutesPlugin;
