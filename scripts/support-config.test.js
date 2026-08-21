const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const configPath = path.resolve(__dirname, '../src/data/supportConfig.js');
const configSource = fs.readFileSync(configPath, 'utf8');

function getConfigObject() {
  const executableSource = configSource
    .replace('export const supportConfig =', 'const supportConfig =')
    .replace(/export function getLocalizedSupportValue[\s\S]*$/, '')
    .concat('\nreturn supportConfig;');
  return Function(executableSource)();
}

function assertLocalized(value, label) {
  assert.equal(typeof value, 'object', `${label} must be localized`);
  for (const language of ['zh', 'ja', 'en']) {
    assert.equal(typeof value[language], 'string', `${label}.${language} must be a string`);
    assert.ok(value[language].trim(), `${label}.${language} must not be empty`);
  }
}

function assertStaticAsset(assetPath, label) {
  assert.match(assetPath, /^\/[^/]/, `${label} must be an absolute site path`);
  const filePath = path.resolve(__dirname, '../static', assetPath.slice(1));
  assert.ok(fs.existsSync(filePath), `${label} must resolve to an existing file under static/`);
}

test('support configuration keeps enabled entries publishable', () => {
  const config = getConfigObject();
  assert.match(config.contactEmail, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);

  for (const [collectionName, entries] of [
    ['strategicPartners', config.strategicPartners],
    ['sustainingPartners', config.sustainingPartners],
  ]) {
    assert.ok(Array.isArray(entries), `${collectionName} must be an array`);
    const ids = new Set();
    entries.forEach((entry, index) => {
      const label = `${collectionName}[${index}]`;
      assert.ok(entry.id, `${label}.id is required`);
      assert.equal(ids.has(entry.id), false, `${label}.id must be unique`);
      ids.add(entry.id);
      assertLocalized(entry.name, `${label}.name`);
      if (!entry.enabled) return;
      if (entry.shortDescription) assertLocalized(entry.shortDescription, `${label}.shortDescription`);
      assert.ok(entry.logo?.src, `${label}.logo.src is required when enabled`);
      assertStaticAsset(entry.logo.src, `${label}.logo.src`);
      if (entry.logo.darkSrc) assertStaticAsset(entry.logo.darkSrc, `${label}.logo.darkSrc`);
      assertLocalized(entry.logo.alt, `${label}.logo.alt`);
      if (collectionName === 'strategicPartners') {
        assertLocalized(entry.description, `${label}.description`);
        if (entry.kaiCommunityOffer) {
          assertLocalized(entry.kaiCommunityOffer, `${label}.kaiCommunityOffer`);
        }
      }
      if (entry.website) assert.match(entry.website, /^https?:\/\//, `${label}.website must be an URL`);
      if (entry.detailsUrl) {
        assert.ok(
          entry.detailsUrl.startsWith('/') || /^https?:\/\//.test(entry.detailsUrl),
          `${label}.detailsUrl must be a local path or URL`,
        );
      }
    });
  }

  assert.ok(Array.isArray(config.supportMethods));
  config.supportMethods.forEach((method, index) => {
    const label = `supportMethods[${index}]`;
    assert.ok(method.id, `${label}.id is required`);
    if (!method.enabled) return;
    assert.ok(['qr', 'link'].includes(method.type), `${label}.type is invalid`);
    if (method.type === 'qr') {
      assert.ok(method.qrImage, `${label}.qrImage is required`);
      assertStaticAsset(method.qrImage, `${label}.qrImage`);
    }
    if (method.type === 'link') assert.match(method.url, /^https?:\/\//, `${label}.url must be an URL`);
  });
});
