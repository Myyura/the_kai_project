const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {extractImageSources} = require('./content-export-images');

const MIME_TYPES = new Map([
  ['.gif', 'image/gif'], ['.jpeg', 'image/jpeg'], ['.jpg', 'image/jpeg'],
  ['.png', 'image/png'], ['.svg', 'image/svg+xml'], ['.webp', 'image/webp'],
  ['.avif', 'image/avif'], ['.bmp', 'image/bmp'], ['.ico', 'image/x-icon'],
]);
const EXTENSIONS = new Map([...MIME_TYPES].map(([extension, mime]) => [mime, extension]));
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const normalizePath = (value) => value.replaceAll('\\', '/');

function containedPath(root, relativePath) {
  const absoluteRoot = fs.realpathSync(root);
  const candidate = fs.realpathSync(path.resolve(root, relativePath));
  if (candidate !== absoluteRoot && !candidate.startsWith(`${absoluteRoot}${path.sep}`)) {
    throw new Error(`Image path is outside ${root}: ${relativePath}`);
  }
  return candidate;
}

function resolveImageSource(source, document, {repoRoot, siteUrl}) {
  // Data URLs already carry their image bytes in the unchanged Markdown.
  if (/^data:image\//i.test(source)) return null;
  if (/^(?:https?:)?\/\//i.test(source)) {
    const url = new URL(source, siteUrl);
    url.hash = '';
    return {key: url.href, url: url.href};
  }
  if (/^[a-z][a-z\d+.-]*:/i.test(source)) throw new Error(`Unsupported image URL: ${source}`);
  const localPath = decodeURIComponent(source.split(/[?#]/, 1)[0]);
  let root;
  let relativePath;
  let kind;
  if (localPath.startsWith('/') || localPath.startsWith('@site/static/')) {
    root = path.join(repoRoot, 'static');
    relativePath = localPath.startsWith('@site/static/')
      ? localPath.slice('@site/static/'.length) : localPath.slice(1);
    kind = 'static';
  } else {
    root = path.join(repoRoot, 'docs');
    relativePath = localPath.startsWith('@site/docs/')
      ? localPath.slice('@site/docs/'.length)
      : path.relative(root, path.resolve(repoRoot, path.dirname(document.sourcePath), localPath));
    kind = 'docs';
  }
  const filePath = containedPath(root, relativePath);
  const assetPath = normalizePath(path.relative(fs.realpathSync(root), filePath));
  return {
    key: filePath,
    filePath,
    path: kind === 'docs' ? assetPath : `_static/${assetPath}`,
    sourcePath: `${kind}/${assetPath}`,
    directoryPath: kind === 'docs' && path.posix.dirname(assetPath) !== '.'
      ? path.posix.dirname(assetPath) : null,
  };
}

/** Add referenced images and an explicit source-to-asset map without rewriting Markdown. */
async function collectImageAssets({documents, assets = [], repoRoot, siteUrl, downloadImage, concurrency = 6, onProgress}) {
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new Error('Image concurrency must be positive');
  const assetsByPath = new Map(assets.map((asset) => [asset.path, asset]));
  const sources = new Map();
  const failures = [];
  for (const document of documents) {
    document.imageAssets = [];
    for (const source of extractImageSources(document.markdown)) {
      try {
        const target = resolveImageSource(source, document, {repoRoot, siteUrl});
        if (!target) continue;
        if (!sources.has(target.key)) sources.set(target.key, {...target, references: []});
        sources.get(target.key).references.push({document, source});
      } catch (error) {
        failures.push(`${document.sourcePath}: ${source}\n  ${error.message}`);
      }
    }
  }

  const entries = [...sources.values()];
  let nextIndex = 0;
  let completed = 0;
  async function worker() {
    while (nextIndex < entries.length) {
      const target = entries[nextIndex++];
      let failureMessage;
      try {
        let asset;
        if (target.url) {
          const {content, mimeType} = await downloadImage(target.url);
          const extension = EXTENSIONS.get(mimeType) || '.img';
          asset = {
            path: `_remote/${hash(target.url)}${extension}`,
            directoryPath: null,
            sourcePath: target.url,
            sourceUrl: target.url,
            mimeType,
            contentHash: hash(content),
            encoding: 'base64',
            data: content.toString('base64'),
          };
        } else {
          asset = assetsByPath.get(target.path);
          if (!asset) {
            const mimeType = MIME_TYPES.get(path.extname(target.filePath).toLowerCase());
            if (!mimeType) throw new Error(`Unsupported image format: ${target.filePath}`);
            const content = fs.readFileSync(target.filePath);
            asset = {
              path: target.path,
              directoryPath: target.directoryPath,
              sourcePath: target.sourcePath,
              mimeType,
              contentHash: hash(content),
              encoding: 'base64',
              data: content.toString('base64'),
            };
          }
        }
        const existing = assetsByPath.get(asset.path);
        if (existing && existing.sourcePath !== asset.sourcePath) {
          throw new Error(`Conflicting exported asset path: ${asset.path}`);
        }
        assetsByPath.set(asset.path, asset);
        for (const {document, source} of target.references) {
          document.imageAssets.push({source, assetPath: asset.path});
        }
      } catch (error) {
        const affected = [...new Set(target.references.map(({document}) => document.sourcePath))];
        failureMessage = `${target.url || target.sourcePath}\n  ${error.message}\n  Referenced by: ${affected.join(', ')}`;
        failures.push(failureMessage);
      } finally {
        completed += 1;
        onProgress?.({completed, total: entries.length, failed: failures.length, error: failureMessage});
      }
    }
  }
  await Promise.all(Array.from({length: Math.min(concurrency, entries.length)}, () => worker()));
  if (failures.length) {
    throw new Error(`Cannot export all images (${failures.length} failures):\n${failures.sort().join('\n')}`);
  }
  for (const document of documents) {
    document.imageAssets.sort((left, right) => left.source.localeCompare(right.source));
  }
  return [...assetsByPath.values()].sort((left, right) => left.path.localeCompare(right.path));
}

module.exports = {MIME_TYPES, collectImageAssets, resolveImageSource};
