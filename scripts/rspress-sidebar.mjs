import {existsSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import matter from 'gray-matter';

import {stripDocusaurusNumberPrefixes} from './rspress-path-compatibility.mjs';

const MARKDOWN_EXTENSION_RE = /\.mdx?$/i;
const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SITE_DIR = path.resolve(MODULE_DIR, '..');

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function resolveFrom(baseDir, candidate) {
  return path.isAbsolute(candidate)
    ? path.normalize(candidate)
    : path.resolve(baseDir, candidate);
}

function normalizeRouteBase(routeBase) {
  if (typeof routeBase !== 'string' || routeBase.trim() === '') {
    throw new TypeError('[rspress-sidebar] routeBase must be a non-empty string');
  }
  const raw = routeBase.trim().replace(/\\/g, '/');
  if (
    raw.includes('\0')
    || raw.includes('?')
    || raw.includes('#')
    || /^[a-z][a-z\d+.-]*:/i.test(raw)
  ) {
    throw new Error(`[rspress-sidebar] Unsafe route base: ${routeBase}`);
  }
  const segments = raw.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '.' || segment === '..')) {
    throw new Error(`[rspress-sidebar] Unsafe route base: ${routeBase}`);
  }
  return `/${segments.join('/')}`;
}

function normalizeCategoryLink(slug, metadataFile, routeBase) {
  if (typeof slug !== 'string' || slug.trim() === '') return undefined;
  const raw = slug.trim().replace(/\\/g, '/');
  if (
    raw.includes('\0')
    || raw.includes('?')
    || raw.includes('#')
    || /^[a-z][a-z\d+.-]*:/i.test(raw)
  ) {
    throw new Error(`[rspress-sidebar] Unsafe category slug in ${metadataFile}: ${slug}`);
  }
  const segments = raw.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '.' || segment === '..')) {
    throw new Error(`[rspress-sidebar] Unsafe category slug in ${metadataFile}: ${slug}`);
  }
  return `${routeBase}/${segments.join('/')}`;
}

function assertInsideDocs(docsDir, targetPath) {
  const relativePath = path.relative(docsDir, targetPath);
  const normalized = toPosixPath(relativePath);
  if (
    normalized === '..'
    || normalized.startsWith('../')
    || path.isAbsolute(relativePath)
    || normalized.includes('\0')
  ) {
    throw new Error(`[rspress-sidebar] Path escapes docs directory: ${targetPath}`);
  }
  return normalized;
}

function readFrontmatter(filepath) {
  try {
    return matter(readFileSync(filepath, 'utf8'), {}).data ?? {};
  } catch (error) {
    throw new Error(
      `[rspress-sidebar] Cannot parse frontmatter in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
}

function readCategory(directory) {
  const filepath = path.join(directory, '_category_.json');
  if (!existsSync(filepath)) return {filepath, metadata: {}};
  try {
    return {filepath, metadata: JSON.parse(readFileSync(filepath, 'utf8'))};
  } catch (error) {
    throw new Error(
      `[rspress-sidebar] Cannot parse category metadata in ${filepath}: ${error.message}`,
      {cause: error},
    );
  }
}

function numericPosition(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : Number.POSITIVE_INFINITY;
}

function compareNodes(left, right) {
  return numericPosition(left.position) - numericPosition(right.position)
    || left.sortName.localeCompare(right.sortName, 'zh-Hans', {
      numeric: true,
      sensitivity: 'base',
    });
}

function reorderYearDirectories(nodes) {
  const normallySorted = [...nodes].sort(compareNodes);
  const years = normallySorted
    .filter((node) => node.type === 'directory' && node.year != null)
    .sort((left, right) => right.year - left.year);
  let yearIndex = 0;
  return normallySorted.map((node) => (
    node.type === 'directory' && node.year != null
      ? years[yearIndex++]
      : node
  ));
}

function overviewItem(item, depth = 0, maxDirectoryDepth = 2) {
  if (!Array.isArray(item.items)) return item;

  const common = {
    text: item.text,
    ...(item.link ? {link: item.link} : {}),
  };

  // The intro page only needs the catalog down to the major/specialization
  // level. A category with a real generated page becomes a navigable leaf at
  // that point. A category without a page must remain a group so Rspress
  // renders a toggleable <div>, never an anchor with an empty href.
  if (depth >= maxDirectoryDepth) {
    return item.link
      ? common
      : {
          ...common,
          items: [],
          collapsible: item.collapsible,
          collapsed: item.collapsed,
        };
  }

  return {
    ...common,
    items: item.items.map((child) => overviewItem(
      child,
      depth + 1,
      maxDirectoryDepth,
    )),
    collapsible: item.collapsible,
    collapsed: item.collapsed,
  };
}

function fallbackLabel(name) {
  return name.replace(/[-_]+/g, ' ').trim() || name;
}

function routeForMarkdown(filepath, docsDir, routeBase) {
  const relativePath = assertInsideDocs(docsDir, filepath);
  const withoutExtension = stripDocusaurusNumberPrefixes(
    relativePath.replace(MARKDOWN_EXTENSION_RE, ''),
  );
  const withoutIndex = withoutExtension.replace(/(?:^|\/)index$/, '');
  const suffix = withoutIndex ? `/${withoutIndex}` : '';
  return `${routeBase}${suffix}${withoutExtension !== withoutIndex ? '/' : ''}`;
}

function fileNode(filepath, docsDir, routeBase) {
  const frontmatter = readFrontmatter(filepath);
  if (frontmatter.sidebar === false) return null;
  const stem = path.basename(filepath).replace(MARKDOWN_EXTENSION_RE, '');
  const label = [frontmatter.sidebar_label, frontmatter.title]
    .find((value) => typeof value === 'string' && value.trim());
  return {
    type: 'file',
    position: frontmatter.sidebar_position,
    sortName: stem,
    item: {
      text: label?.trim() ?? fallbackLabel(stem),
      link: routeForMarkdown(filepath, docsDir, routeBase),
    },
  };
}

function directoryNode(directory, docsDir, routeBase, defaultCollapsed) {
  const {filepath: metadataFile, metadata} = readCategory(directory);
  const childNodes = [];

  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    if (entry.name === '_category_.json') continue;
    const absolutePath = path.join(directory, entry.name);
    // Do not follow symlinks; otherwise an innocuous docs entry could traverse
    // outside the configured content root.
    if (entry.isDirectory()) {
      childNodes.push(directoryNode(
        absolutePath,
        docsDir,
        routeBase,
        defaultCollapsed,
      ));
    } else if (entry.isFile() && MARKDOWN_EXTENSION_RE.test(entry.name)) {
      const node = fileNode(absolutePath, docsDir, routeBase);
      if (node) childNodes.push(node);
    }
  }

  const name = path.basename(directory);
  const label = typeof metadata.label === 'string' && metadata.label.trim()
    ? metadata.label.trim()
    : fallbackLabel(name);
  const generatedIndexSlug = metadata.link?.type === 'generated-index'
    ? metadata.link.slug
    : undefined;
  const generatedIndexLink = normalizeCategoryLink(
    generatedIndexSlug,
    metadataFile,
    routeBase,
  );
  let link = generatedIndexLink;
  if (!link && metadata.link?.type === 'doc' && typeof metadata.link.id === 'string') {
    const id = metadata.link.id.replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
    if (!id || id.split('/').some((segment) => segment === '.' || segment === '..')) {
      throw new Error(
        `[rspress-sidebar] Unsafe category document id in ${metadataFile}: ${metadata.link.id}`,
      );
    }
    link = `${routeBase}/${id}`;
  }

  const items = reorderYearDirectories(childNodes).map((node) => node.item);
  const yearMatch = name.match(/^(\d{4})$/) ?? label.match(/^(\d{4})年度$/);
  const item = {
    text: label,
    items,
    collapsible: typeof metadata.collapsible === 'boolean'
      ? metadata.collapsible
      : true,
    collapsed: typeof metadata.collapsed === 'boolean'
      ? metadata.collapsed
      : defaultCollapsed,
    ...(link ? {link} : {}),
  };

  return {
    type: 'directory',
    year: yearMatch ? Number(yearMatch[1]) : null,
    position: metadata.position,
    sortName: name,
    item,
  };
}

/**
 * Build a Rspress `themeConfig.sidebar` value from the existing content metadata.
 *
 * @param {object|string} [options] Pass a string as shorthand for `docsDir`.
 * @param {string} [options.siteDir] Project root. Defaults to this script's parent directory.
 * @param {string} [options.docsDir='docs'] Absolute path or path relative to siteDir.
 * @param {string} [options.routeBase='/docs'] Public route prefix and sidebar map key.
 * @param {boolean} [options.collapsed=true] Default collapsed state for directory groups.
 * @returns {Record<string, Array<object>>} Directly assignable to `themeConfig.sidebar`.
 */
export function buildDocsSidebar(options = {}) {
  const normalizedOptions = typeof options === 'string' ? {docsDir: options} : options;
  const siteDir = path.resolve(normalizedOptions.siteDir ?? DEFAULT_SITE_DIR);
  const docsDir = resolveFrom(siteDir, normalizedOptions.docsDir ?? 'docs');
  const routeBase = normalizeRouteBase(normalizedOptions.routeBase ?? '/docs');
  const defaultCollapsed = normalizedOptions.collapsed !== false;

  if (!existsSync(docsDir)) {
    throw new Error(`[rspress-sidebar] docs directory does not exist: ${docsDir}`);
  }

  const rootNodes = [];
  const sidebar = {};
  for (const entry of readdirSync(docsDir, {withFileTypes: true})) {
    const absolutePath = path.join(docsDir, entry.name);
    if (entry.isDirectory()) {
      const node = directoryNode(
        absolutePath,
        docsDir,
        routeBase,
        defaultCollapsed,
      );
      rootNodes.push(node);
    } else if (entry.isFile() && MARKDOWN_EXTENSION_RE.test(entry.name)) {
      const node = fileNode(absolutePath, docsDir, routeBase);
      if (node) rootNodes.push(node);
    }
  }

  const sortedRootNodes = reorderYearDirectories(rootNodes);
  const completeSidebar = sortedRootNodes.map((node) => node.item);

  // The docs landing page gets a lightweight browse tree through the
  // specialization level. University routes expose the complete tree below.
  sidebar[`${routeBase}/intro`] = sortedRootNodes.map((node) => (
    node.type === 'directory' ? overviewItem(node.item) : node.item
  ));

  // Every university document and generated category shares the complete
  // multi-level catalog. Rspress opens only the active route's ancestor groups
  // and leaves the other university trees collapsed but fully available.
  sidebar[`${routeBase}/`] = completeSidebar;
  return sidebar;
}

export default buildDocsSidebar;
