#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(process.cwd(), 'build');
const SITE_URL = 'https://runjp.com';
const LOCALES = [
  {code: 'en', htmlLang: 'en-US'},
  {code: 'ja', htmlLang: 'ja-JP'},
];

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (LOCALES.some((locale) => locale.code === entry.name)) {
        continue;
      }
      walkHtmlFiles(fullPath, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function routePathFromHtml(relativePath) {
  const normalized = toPosix(relativePath);
  if (normalized === 'index.html') {
    return '/';
  }
  if (normalized.endsWith('/index.html')) {
    return `/${normalized.slice(0, -'/index.html'.length)}/`;
  }
  return `/${normalized.slice(0, -'.html'.length)}`;
}

function getAssetTags(indexHtml) {
  const styleTags = indexHtml.match(/<link\b[^>]*rel=stylesheet[^>]*>/gi) || [];
  const scriptTags = indexHtml.match(/<script\b[^>]*src=\/assets\/js\/[^>]*><\/script>/gi) || [];

  if (styleTags.length === 0 || scriptTags.length === 0) {
    throw new Error('Could not find Docusaurus CSS/JS asset tags in build/index.html');
  }

  return {styleTags, scriptTags};
}

function buildShell({locale, routePath, assetTags}) {
  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '/' : routePath}`;

  return `<!doctype html>
<html lang="${locale.htmlLang}" dir="ltr" data-has-hydrated="false" data-lang="${locale.code}">
<head>
<meta charset="UTF-8">
<meta name="generator" content="Docusaurus locale alias">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${canonicalUrl}">
<title>The Kai Project</title>
${assetTags.styleTags.join('\n')}
${assetTags.scriptTags.join('\n')}
</head>
<body class="navigation-with-keyboard">
<div id="__docusaurus"></div>
</body>
</html>
`;
}

function getOutputPaths(locale, relativePath) {
  const outputPaths = [path.join(BUILD_DIR, locale.code, relativePath)];
  if (!relativePath.endsWith('index.html')) {
    outputPaths.push(path.join(BUILD_DIR, locale.code, relativePath.slice(0, -'.html'.length), 'index.html'));
  }
  return outputPaths;
}

function main() {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('build/index.html does not exist. Run docusaurus build first.');
  }

  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const assetTags = getAssetTags(indexHtml);
  const htmlFiles = walkHtmlFiles(BUILD_DIR);
  let generated = 0;

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(BUILD_DIR, htmlFile);
    const routePath = routePathFromHtml(relativePath);

    for (const locale of LOCALES) {
      for (const outputPath of getOutputPaths(locale, relativePath)) {
        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        fs.writeFileSync(
          outputPath,
          buildShell({locale, routePath, assetTags}),
        );
        generated += 1;
      }
    }
  }

  console.log(`Generated ${generated} locale alias pages for ${LOCALES.map((locale) => locale.code).join(', ')}.`);
}

main();
