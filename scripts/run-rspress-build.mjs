#!/usr/bin/env node

import {existsSync} from 'node:fs';
import {cp, mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

import {PluginDriver, RouteService} from '@rspress/core';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import {unified} from 'unified';
import {pluginVirtualModule} from '@rspress/core/dist/6305~0.js';
import {modifyConfigWithAutoNavSide} from '@rspress/core/dist/node/auto-nav-sidebar/index.js';
import {checkLanguageParity} from '@rspress/core/dist/node/utils/checkLanguageParity.js';
import {
  importStatementRegex,
  NODE_SSG_BUNDLE_FOLDER,
  NODE_SSG_BUNDLE_NAME,
} from '@rspress/core/dist/node/constants.js';
import {initRsbuild} from '@rspress/core/dist/node/initRsbuild.js';
import {parseToc} from '@rspress/core/dist/node/mdx/remarkPlugins/toc.js';
import {getRouteChunkName} from '@rspress/core/dist/node/route/routeChunkAssets.js';
import {renderPages} from '@rspress/core/dist/node/ssg/renderPages.js';
import {
  loadConfigFile,
  resolveDocRoot,
} from '@rspress/core/dist/config/loadConfigFile.js';

const SCRIPT_PATH = fileURLToPath(import.meta.url);
const PROJECT_ROOT = path.resolve(path.dirname(SCRIPT_PATH), '..');
const INNER_SSG_PLUGIN = 'rspress-inner-rsbuild-plugin-ssg';
const INNER_SEARCH_PLUGIN = 'rsbuild-plugin-searchIndex';
const PHASES = new Set(['node', 'web', 'render']);
const PAGE_DATA_CACHE_PATH = path.join(
  PROJECT_ROOT,
  'node_modules/.rspress/kai-page-data.json',
);
const PAGE_DATA_MODULE_PATH = path.join(
  PROJECT_ROOT,
  'node_modules/.rspress/kai-page-data.mjs',
);
const MARKDOWN_EXTENSION_RE = /\.mdx?$/i;
const markdownProcessor = unified().use(remarkParse).use(remarkGfm);
const SEARCH_SKIP_TYPES = new Set([
  'image',
  'imageReference',
  'definition',
  'footnoteDefinition',
  'footnoteReference',
  'html',
  'thematicBreak',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
  'mdxFlowExpression',
  'mdxTextExpression',
  'mdxjsEsm',
]);
const SEARCH_BLOCK_TYPES = new Set(['paragraph', 'heading', 'listItem', 'tableRow']);
const DESCRIPTION_SKIP_TYPES = new Set([
  'code',
  'html',
  'mdxjsEsm',
  'mdxFlowExpression',
  'thematicBreak',
  'image',
  'table',
]);

function runChildPhase(phase) {
  const result = spawnSync(process.execPath, [SCRIPT_PATH, phase], {
    cwd: PROJECT_ROOT,
    env: {
      ...process.env,
      KAI_RSPRESS_SPLIT_BUILD: 'true',
      NODE_ENV: 'production',
    },
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.signal) {
    throw new Error(`Rspress ${phase} phase stopped by signal ${result.signal}.`);
  }
  if (result.status !== 0) {
    throw new Error(`Rspress ${phase} phase exited with status ${result.status}.`);
  }
}

async function prepareBuild() {
  const {config, configFilePath} = await loadConfigFile();
  const docDirectory = resolveDocRoot(PROJECT_ROOT, undefined, config.root);
  const pluginDriver = await PluginDriver.create(config, configFilePath, true);
  const modifiedConfig = await pluginDriver.modifyConfig();
  const additionalPages = await pluginDriver.addPages();
  const routeService = await RouteService.create({
    config: modifiedConfig,
    scanDir: docDirectory,
    externalPages: additionalPages,
  });
  await pluginDriver.routeGenerated(routeService.getRoutes());
  await pluginDriver.routeServiceGenerated(routeService);
  await modifyConfigWithAutoNavSide(modifiedConfig);
  await pluginDriver.beforeBuild();
  return {
    config,
    docDirectory,
    modifiedConfig,
    pluginDriver,
    routeService,
  };
}

function pageDataAlias() {
  return {'virtual-page-data': PAGE_DATA_MODULE_PATH};
}

async function copyPublicAssets(config, outDir) {
  const publicDirConfig = config.builderConfig?.server?.publicDir;
  if (publicDirConfig === false) return;
  const configuredName = typeof publicDirConfig === 'string'
    ? publicDirConfig
    : publicDirConfig?.name;
  if (!configuredName) return;
  const publicDir = path.isAbsolute(configuredName)
    ? configuredName
    : path.resolve(PROJECT_ROOT, configuredName);
  if (!existsSync(publicDir)) return;

  // Calling the compiler directly is what allows the node/web split, but it
  // bypasses Rsbuild's top-level publicDir lifecycle. Copy the configured
  // directory after the web compiler has cleaned and emitted its assets.
  await cp(publicDir, outDir, {recursive: true, force: true});
}

function configurePageDataAlias(config) {
  const existingResolve = config.builderConfig?.resolve || {};
  const existingAlias = existingResolve.alias || {};
  if (typeof existingAlias === 'function' || Array.isArray(existingAlias)) {
    throw new Error('The split Rspress build requires an object resolve.alias config.');
  }
  config.builderConfig = {
    ...(config.builderConfig || {}),
    resolve: {
      ...existingResolve,
      alias: {
        ...existingAlias,
        ...pageDataAlias(),
      },
    },
  };
}

function pageDataVirtualModulePlugin() {
  return pluginVirtualModule({
    // Use a separate path from Rspress' stock module so this later plugin can
    // deliberately replace its alias without conflicting in VirtualModulesPlugin.
    tempDir: '.rspress/kai-virtual',
    virtualModules: {
      'virtual-page-data': async () => readFile(PAGE_DATA_MODULE_PATH, 'utf8'),
    },
  });
}

function deletePrivateFields(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([key]) => !key.startsWith('_')),
  );
}

function hashSearchIndex(value) {
  return createHash('sha256').update(value).digest('hex').slice(0, 12);
}

async function forEachInBatches(items, batchSize, callback) {
  for (let index = 0; index < items.length; index += batchSize) {
    await Promise.all(items.slice(index, index + batchSize).map(callback));
  }
}

function extractNodeText(node) {
  if ('value' in node && typeof node.value === 'string') return node.value;
  if ('children' in node && Array.isArray(node.children)) {
    return node.children.map(extractNodeText).join('');
  }
  return '';
}

function extractSearchText(node, includeCodeBlocks) {
  if (SEARCH_SKIP_TYPES.has(node.type)) return [];
  if (node.type === 'code' && !includeCodeBlocks) return [];
  if (node.type === 'break') return ['\n'];
  if (node.type === 'text' || node.type === 'inlineCode') return [node.value];
  if (node.type === 'code') return [`\n${node.value}\n`];

  const result = [];
  if ('children' in node) {
    for (const child of node.children) {
      result.push(...extractSearchText(child, includeCodeBlocks));
    }
  }
  if (SEARCH_BLOCK_TYPES.has(node.type)) result.push('\n');
  if (node.type === 'tableCell') result.push('\t');
  return result;
}

function buildSearchContent(tree, rawToc, includeCodeBlocks) {
  const parts = [];
  const headingCharIndexes = [];
  let tocIndex = 0;
  let contentLength = 0;
  let skippedFirstH1 = false;

  for (const node of tree.children) {
    if (node.type === 'heading' && node.depth === 1 && !skippedFirstH1) {
      skippedFirstH1 = true;
      continue;
    }
    const value = extractSearchText(node, includeCodeBlocks)
      .join('')
      .replaceAll('\t\n', '\n')
      .trim();
    if (!value) continue;
    if (parts.length > 0) contentLength += 2;
    if (node.type === 'heading' && node.depth >= 2 && node.depth < 5) {
      if (tocIndex < rawToc.length) {
        headingCharIndexes.push(contentLength);
        tocIndex += 1;
      }
    }
    contentLength += value.length;
    parts.push(value);
  }

  return {
    content: parts.join('\n\n'),
    toc: rawToc.map((item, index) => ({
      ...item,
      charIndex: index < headingCharIndexes.length
        ? headingCharIndexes[index]
        : -1,
    })),
  };
}

function stripContainerDirectives(value) {
  const lines = value.split('\n');
  const output = [];
  let insideDirective = false;
  for (const line of lines) {
    if (!insideDirective && /^\s*:::\s*\w+/.test(line)) {
      insideDirective = true;
      continue;
    }
    if (insideDirective) {
      if (/^\s*:::\s*$/.test(line)) insideDirective = false;
      continue;
    }
    output.push(line);
  }
  return output.join('\n');
}

function extractDescription(tree) {
  const textParts = [];
  let foundH1 = false;
  for (const node of tree.children) {
    if (node.type === 'heading' && node.depth === 1) {
      foundH1 = true;
      continue;
    }
    if (node.type === 'heading' && node.depth === 2) break;
    if (foundH1 && !DESCRIPTION_SKIP_TYPES.has(node.type)) {
      const value = extractNodeText(node).trim();
      if (value) textParts.push(value);
    }
  }
  return stripContainerDirectives(textParts.join('\n'))
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

function applyReplaceRulesToValue(value, replaceRules) {
  if (typeof value === 'string') {
    return replaceRules.reduce(
      (result, rule) => result.replace(rule.search, rule.replace),
      value,
    );
  }
  if (Array.isArray(value)) {
    return value.map((item) => applyReplaceRulesToValue(item, replaceRules));
  }
  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        applyReplaceRulesToValue(item, replaceRules),
      ]),
    );
  }
  return value;
}

async function extractSourcePageData(filepath, context) {
  const defaultData = {
    title: '',
    content: '',
    _flattenContent: '',
    toc: [],
    frontmatter: {},
  };
  if (!MARKDOWN_EXTENSION_RE.test(filepath)) return defaultData;

  const raw = await readFile(filepath, 'utf8');
  // Passing options disables gray-matter's process-wide source cache. Rspress'
  // stock extractor keeps the full corpus in that cache during cold builds.
  const parsed = matter(raw, {});
  const replaceRules = context.modifiedConfig.replaceRules || [];
  const frontmatter = applyReplaceRulesToValue(parsed.data || {}, replaceRules);
  const content = applyReplaceRulesToValue(parsed.content, replaceRules)
    .replace(new RegExp(importStatementRegex.source, importStatementRegex.flags), '');
  const tree = markdownProcessor.parse(content);
  const {title, toc: rawToc} = parseToc(tree);
  const searchConfig = context.modifiedConfig.search;
  const searchEnabled = searchConfig !== false;
  const includeCodeBlocks = typeof searchConfig === 'object'
    ? searchConfig.codeBlocks !== false
    : true;
  const description = frontmatter.description
    || (context.modifiedConfig.markdown?.extractDescription === false
      ? ''
      : extractDescription(tree));

  if (!searchEnabled) {
    return {
      ...defaultData,
      title: frontmatter.title || title,
      toc: rawToc.map((item) => ({...item, charIndex: -1})),
      description: description || undefined,
      frontmatter: {...frontmatter, __content: undefined},
    };
  }

  const search = buildSearchContent(tree, rawToc, includeCodeBlocks);
  return {
    ...defaultData,
    title: frontmatter.title || title,
    toc: search.toc,
    content: search.content,
    description: description || undefined,
    frontmatter: {...frontmatter, __content: undefined},
  };
}

async function extractPageDataInBatches(context) {
  const routes = context.routeService.getRoutes();
  const requestedConcurrency = Number(
    process.env.KAI_RSPRESS_INDEX_CONCURRENCY || 4,
  );
  const batchSize = Number.isInteger(requestedConcurrency) && requestedConcurrency > 0
    ? requestedConcurrency
    : 4;
  const pages = [];
  const sourceCache = new Map();
  for (let index = 0; index < routes.length; index += batchSize) {
    const batch = routes.slice(index, index + batchSize);
    const extracted = await Promise.all(batch.map(async (route) => {
      let sourcePromise = sourceCache.get(route.absolutePath);
      if (!sourcePromise) {
        sourcePromise = extractSourcePageData(route.absolutePath, context);
        sourceCache.set(route.absolutePath, sourcePromise);
      }
      const source = await sourcePromise;
      const page = {
        ...source,
        frontmatter: {...source.frontmatter},
        routePath: route.routePath,
        lang: route.lang,
        version: route.version,
        _filepath: route.absolutePath,
        _relativePath: path.relative(context.docDirectory, route.absolutePath)
          .split(path.sep)
          .join('/'),
      };
      context.routeService.getRoutePageByRoutePath(route.routePath)
        ?.setPageIndexInfo(page);
      return page;
    }));
    pages.push(...extracted);
    if (index === 0 || index + batchSize >= routes.length || index % 200 === 0) {
      process.stdout.write(
        `  page data: ${Math.min(index + batchSize, routes.length)}/${routes.length}\n`,
      );
    }
  }
  return pages;
}

function createSearchArtifacts(pages, config) {
  if (config.search === false) {
    return {searchIndex: {}, indexHashByGroup: {}};
  }
  const versioned = typeof config.search === 'object'
    ? config.search.versioned !== false
    : true;
  const groups = new Map();
  for (const page of pages) {
    if (page.frontmatter?.pageType === 'home' || page.frontmatter?.search === false) {
      continue;
    }
    const version = versioned ? page.version : '';
    const key = `${version || ''}###${page.lang || ''}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(deletePrivateFields(page));
  }
  const searchIndex = {};
  const indexHashByGroup = {};
  for (const [group, groupPages] of groups) {
    const serialized = JSON.stringify(groupPages);
    const hash = hashSearchIndex(serialized);
    const [version, lang] = group.split('###');
    const versionPart = version ? `.${version.replaceAll('.', '_')}` : '';
    const langPart = lang ? `.${lang}` : '';
    const filename = `search_index${versionPart}${langPart}.${hash}.json`;
    searchIndex[filename] = serialized;
    indexHashByGroup[group] = hash;
  }
  return {searchIndex, indexHashByGroup};
}

function createRuntimePageData(pages) {
  return {
    pages: pages.map((page) => {
      const {
        content: _content,
        _filepath,
        _flattenContent,
        ...runtimePage
      } = page;
      return runtimePage;
    }),
  };
}

async function writePageDataModule(cache) {
  await mkdir(path.dirname(PAGE_DATA_MODULE_PATH), {recursive: true});
  await writeFile(
    PAGE_DATA_MODULE_PATH,
    `export const pageData=${JSON.stringify(cache.pageData)};\n`
      + `export const searchIndexHash=${JSON.stringify(cache.indexHashByGroup)};\n`,
  );
}

async function createPageDataCache(context) {
  process.stdout.write('Extracting Rspress page data with bounded concurrency...\n');
  const pages = await extractPageDataInBatches(context);
  await context.pluginDriver.modifySearchIndexData(pages);
  const {searchIndex, indexHashByGroup} = createSearchArtifacts(
    pages,
    context.modifiedConfig,
  );
  await forEachInBatches(
    pages,
    16,
    (page) => context.pluginDriver.extendPageData(page),
  );
  const cache = {
    pages,
    pageData: createRuntimePageData(pages),
    searchIndex,
    indexHashByGroup,
  };
  await mkdir(path.dirname(PAGE_DATA_CACHE_PATH), {recursive: true});
  await Promise.all([
    writeFile(PAGE_DATA_CACHE_PATH, JSON.stringify(cache)),
    writePageDataModule(cache),
  ]);
  process.stdout.write(`Extracted ${pages.length} Rspress pages.\n`);
  return cache;
}

async function loadOrCreatePageDataCache(context) {
  if (!existsSync(PAGE_DATA_CACHE_PATH)) return createPageDataCache(context);
  const cache = JSON.parse(await readFile(PAGE_DATA_CACHE_PATH, 'utf8'));
  await writePageDataModule(cache);
  return cache;
}

async function emitSearchIndexes(cache, outDir) {
  const searchDir = path.join(outDir, 'static');
  await mkdir(searchDir, {recursive: true});
  await Promise.all(
    Object.entries(cache.searchIndex).map(([filename, content]) => (
      writeFile(path.join(searchDir, filename), content)
    )),
  );
}

function configureOutputCleaning(config, shouldClean) {
  config.builderConfig = {
    ...(config.builderConfig || {}),
    output: {
      ...(config.builderConfig?.output || {}),
      cleanDistPath: shouldClean,
    },
  };
}

function resolveSafeOutputDirectory(config) {
  const outDir = path.resolve(config.outDir || 'doc_build');
  const relative = path.relative(PROJECT_ROOT, outDir);
  if (
    relative === ''
    || relative === '..'
    || relative.startsWith(`..${path.sep}`)
    || path.isAbsolute(relative)
  ) {
    throw new Error(`Refusing to clean unsafe Rspress output directory: ${outDir}`);
  }
  return outDir;
}

async function prepareOutputDirectory(config, environmentName) {
  const outDir = resolveSafeOutputDirectory(config);
  if (environmentName === 'node') {
    await rm(outDir, {recursive: true, force: true});
    return outDir;
  }

  await mkdir(outDir, {recursive: true});
  const entries = await readdir(outDir);
  await Promise.all(entries
    .filter((entry) => entry !== NODE_SSG_BUNDLE_FOLDER)
    .map((entry) => rm(path.join(outDir, entry), {recursive: true, force: true})));
  return outDir;
}

function runCompiler(compiler) {
  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
        return;
      }
      if (!stats) {
        reject(new Error('Rspack completed without build statistics.'));
        return;
      }
      if (stats.hasErrors()) {
        reject(new Error(stats.toString({all: false, errors: true, colors: true})));
        return;
      }
      const warnings = stats.toString({all: false, warnings: true, colors: true});
      if (warnings.trim()) process.stderr.write(`${warnings}\n`);
      resolve(stats);
    });
  });
}

function closeCompiler(compiler) {
  return new Promise((resolve, reject) => {
    compiler.close((error) => (error ? reject(error) : resolve()));
  });
}

function selectEnvironmentCompiler(compiler, environmentName) {
  if (!Array.isArray(compiler.compilers)) {
    if (compiler.name === environmentName) return compiler;
    throw new Error(`Rspress did not create the ${environmentName} compiler.`);
  }
  const selected = compiler.compilers.find((item) => item.name === environmentName);
  if (!selected) throw new Error(`Rspress did not create the ${environmentName} compiler.`);
  return selected;
}

function buildRouteAssetManifest(stats, routeService, publicPath) {
  const chunksByName = new Map();
  for (const chunk of stats.compilation.chunks) {
    if (chunk.name) chunksByName.set(chunk.name, chunk);
  }
  const assets = {};
  for (const route of routeService.getRoutes()) {
    const chunk = chunksByName.get(getRouteChunkName(route));
    if (!chunk) continue;
    assets[route.routePath] = [...chunk.files]
      .filter((filename) => /\.[cm]?js$/i.test(filename));
  }
  return {
    assetPrefix: typeof publicPath === 'string' ? publicPath : '/',
    assets,
  };
}

async function compilePhase(environmentName) {
  const context = await prepareBuild();
  configurePageDataAlias(context.modifiedConfig);
  const pageDataCache = await loadOrCreatePageDataCache(context);
  const outDir = await prepareOutputDirectory(
    context.modifiedConfig,
    environmentName,
  );
  configureOutputCleaning(context.modifiedConfig, environmentName === 'node');
  const rsbuild = await initRsbuild(
    context.docDirectory,
    context.modifiedConfig,
    context.pluginDriver,
    context.routeService,
    true,
  );
  // The stock plugin intentionally coordinates both compilers in one process.
  // Rendering is performed in the dedicated phase below instead.
  rsbuild.removePlugins([INNER_SSG_PLUGIN, INNER_SEARCH_PLUGIN]);
  // Rspress' stock page-data virtual module is populated by the removed search
  // plugin. Register our bounded extraction cache as the final alias instead.
  rsbuild.addPlugins([pageDataVirtualModulePlugin()]);
  const multiCompiler = await rsbuild.createCompiler();
  const compiler = selectEnvironmentCompiler(multiCompiler, environmentName);
  process.stdout.write(`Rspress ${environmentName} bundle...\n`);
  let stats;
  try {
    stats = await runCompiler(compiler);
    if (environmentName === 'web') {
      const manifestPath = path.join(
        outDir,
        NODE_SSG_BUNDLE_FOLDER,
        'route-assets.json',
      );
      const manifest = buildRouteAssetManifest(
        stats,
        context.routeService,
        compiler.options.output.publicPath,
      );
      await mkdir(path.dirname(manifestPath), {recursive: true});
      await Promise.all([
        writeFile(manifestPath, JSON.stringify(manifest)),
        emitSearchIndexes(pageDataCache, outDir),
        copyPublicAssets(context.modifiedConfig, outDir),
      ]);
    }
  } finally {
    await closeCompiler(compiler);
  }
  process.stdout.write(`Rspress ${environmentName} bundle completed.\n`);
}

async function renderPhase() {
  const context = await prepareBuild();
  const pageDataCache = await loadOrCreatePageDataCache(context);
  // Rehydrate afterBuild plugin state in this fresh process. The cached pages
  // already contain the same extension data bundled into the site.
  await forEachInBatches(
    pageDataCache.pages,
    16,
    (page) => context.pluginDriver.extendPageData(page),
  );
  const outDir = path.resolve(context.modifiedConfig.outDir || 'doc_build');
  const ssgDir = path.join(outDir, NODE_SSG_BUNDLE_FOLDER);
  const serverBundle = path.join(ssgDir, NODE_SSG_BUNDLE_NAME);
  const manifestPath = path.join(ssgDir, 'route-assets.json');
  const htmlTemplatePath = path.join(outDir, 'index.html');
  for (const requiredPath of [serverBundle, manifestPath, htmlTemplatePath]) {
    if (!existsSync(requiredPath)) {
      throw new Error(`Missing split-build artifact: ${requiredPath}`);
    }
  }

  const [htmlTemplate, routeChunkAssets] = await Promise.all([
    readFile(htmlTemplatePath, 'utf8'),
    readFile(manifestPath, 'utf8').then(JSON.parse),
  ]);
  process.stdout.write('Rspress SSG render...\n');
  try {
    await renderPages(
      context.routeService,
      context.modifiedConfig,
      serverBundle,
      htmlTemplate,
      async (assetName, content) => {
        const destination = path.join(outDir, assetName);
        await mkdir(path.dirname(destination), {recursive: true});
        await writeFile(destination, content);
      },
      outDir,
      routeChunkAssets,
    );
    await context.pluginDriver.afterBuild();
    await checkLanguageParity(context.config);
  } finally {
    await rm(ssgDir, {recursive: true, force: true});
  }
  process.stdout.write('Rspress SSG render completed.\n');
}

async function main() {
  const phase = process.argv[2];
  if (!phase) {
    try {
      await rm(PAGE_DATA_CACHE_PATH, {force: true});
      await rm(PAGE_DATA_MODULE_PATH, {force: true});
      for (const childPhase of PHASES) runChildPhase(childPhase);
    } finally {
      await rm(PAGE_DATA_CACHE_PATH, {force: true});
      await rm(PAGE_DATA_MODULE_PATH, {force: true});
    }
    return;
  }
  if (!PHASES.has(phase)) throw new Error(`Unknown Rspress build phase: ${phase}`);
  if (phase === 'render') await renderPhase();
  else await compilePhase(phase);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
