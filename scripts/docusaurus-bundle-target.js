#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');
const {
  BUILD_LOCALE,
  BUNDLING_CONTROL_ENV,
  SITE_DIR,
  assertPhasedBuildProfile,
  assertSupportedDocusaurusVersion,
} = require('./docusaurus-build-phases');
const {
  applySchoolShardToSite,
  discoverSchoolIds,
  parseSchoolShardEnvironment,
} = require('./docusaurus-school-shards');
const {buildRouteOwnership} = require('./docusaurus-school-route-ownership');

const BUILD_TARGETS = Object.freeze(['server', 'client']);

function getDocusaurusInternals() {
  const {compile, registerBundlerTracing} = require('@docusaurus/bundler');
  const {loadSite} = require('@docusaurus/core/lib/server/site');
  const {createBuildClientConfig} = require('@docusaurus/core/lib/webpack/client');
  const {default: createBuildServerConfig} = require('@docusaurus/core/lib/webpack/server');
  const {
    createConfigureWebpackUtils,
    executePluginsConfigureWebpack,
  } = require('@docusaurus/core/lib/webpack/configure');

  return {
    compile,
    createBuildClientConfig,
    createBuildServerConfig,
    createConfigureWebpackUtils,
    executePluginsConfigureWebpack,
    loadSite,
    registerBundlerTracing,
  };
}

function withoutCompilerDependencies(config) {
  const independentConfig = {...config};
  delete independentConfig.dependencies;
  return independentConfig;
}

function assertSingleLocale(i18n, locale = BUILD_LOCALE) {
  if (
    i18n.defaultLocale !== locale
    || i18n.currentLocale !== locale
    || i18n.locales.length !== 1
    || i18n.locales[0] !== locale
  ) {
    throw new Error(
      `The phased build requires exactly one ${locale} locale. Received `
        + `${JSON.stringify({
          currentLocale: i18n.currentLocale,
          defaultLocale: i18n.defaultLocale,
          locales: i18n.locales,
        })}.`,
    );
  }
}

function assertSafeOutputDirectory(outputDirectory, siteDirectory = SITE_DIR) {
  const resolvedOutput = path.resolve(outputDirectory);
  const resolvedSite = path.resolve(siteDirectory);
  const isSiteChild = resolvedOutput.startsWith(`${resolvedSite}${path.sep}`);

  if (
    !isSiteChild
    || resolvedOutput === resolvedSite
    || resolvedOutput === path.parse(resolvedOutput).root
  ) {
    throw new Error(
      `Refusing to clear unsafe Docusaurus output directory ${resolvedOutput}; `
        + `it must be a child of ${resolvedSite}.`,
    );
  }
}

function prepareProcessEnvironment(target, environment = process.env) {
  if (!BUILD_TARGETS.includes(target)) {
    throw new Error(
      `Unknown bundle target ${JSON.stringify(target)}; expected server or client.`,
    );
  }
  for (const name of BUNDLING_CONTROL_ENV) {
    delete environment[name];
  }
  environment.BABEL_ENV = 'production';
  environment.NODE_ENV = 'production';
  environment.DOCUSAURUS_CURRENT_LOCALE = BUILD_LOCALE;
}

async function createTargetConfig(target, props, internals) {
  const {plugins, siteConfig} = props;
  const configureWebpackUtils = await internals.createConfigureWebpackUtils({siteConfig});

  if (target === 'server') {
    const result = await internals.createBuildServerConfig({
      props,
      configureWebpackUtils,
    });
    const configured = internals.executePluginsConfigureWebpack({
      plugins,
      config: result.config,
      isServer: true,
      configureWebpackUtils,
    });
    return {
      config: withoutCompilerDependencies(configured),
      configureWebpackUtils,
      outputPath: result.serverBundlePath,
    };
  }

  const result = await internals.createBuildClientConfig({
    props,
    minify: true,
    faster: siteConfig.future.experimental_faster,
    configureWebpackUtils,
    bundleAnalyzer: false,
  });
  const configured = internals.executePluginsConfigureWebpack({
    plugins,
    config: result.config,
    isServer: false,
    configureWebpackUtils,
  });
  return {
    // The low-memory plugin adds a dependency on the server compiler to make
    // Docusaurus' normal MultiCompiler sequential. Here each target already
    // has its own process, so retaining that dependency would reference a
    // compiler that is deliberately absent.
    config: withoutCompilerDependencies(configured),
    configureWebpackUtils,
    outputPath: result.clientManifestPath,
  };
}

async function runBundleTarget(target, {
  internals = getDocusaurusInternals(),
  removeOutput = fs.rm,
  siteDir = SITE_DIR,
} = {}) {
  prepareProcessEnvironment(target);
  const buildProfile = assertPhasedBuildProfile();
  assertSupportedDocusaurusVersion();
  const shard = parseSchoolShardEnvironment();
  if (buildProfile === 'pages' && !shard) {
    throw new Error('Every GitHub Pages bundle target must select a school shard.');
  }
  if (buildProfile !== 'pages' && shard) {
    throw new Error('School-sharded bundle targets are reserved for GitHub Pages.');
  }

  let site = await internals.loadSite({
    siteDir,
    locale: BUILD_LOCALE,
    automaticBaseUrlLocalizationDisabled: true,
  });
  if (shard) {
    const allSchoolIds = discoverSchoolIds(siteDir);
    site = await applySchoolShardToSite(site, shard, allSchoolIds, {
      createRouteOwnership: buildRouteOwnership,
    });
  }
  const {props} = site;
  assertSingleLocale(props.i18n);
  if (props.siteConfig.future.experimental_router === 'hash') {
    throw new Error('The phased server/client build requires the browser router.');
  }

  const {config, configureWebpackUtils, outputPath} = await createTargetConfig(
    target,
    props,
    internals,
  );
  if (target === 'server') {
    if (shard) {
      // Each shard has already written client assets and earlier shards may
      // have written HTML. Only replace the ephemeral server hand-off.
      const serverDirectory = path.dirname(outputPath);
      assertSafeOutputDirectory(serverDirectory, siteDir);
      await removeOutput(serverDirectory, {recursive: true, force: true});
    } else {
      // The local non-sharded adapter still starts with the server phase.
      assertSafeOutputDirectory(props.outDir, siteDir);
      await removeOutput(props.outDir, {recursive: true, force: true});
    }
  } else {
    // Do not let a manifest left by an interrupted earlier build satisfy the
    // coordinator's hand-off check.
    await removeOutput(outputPath, {force: true});
  }

  const cleanupBundlerTracing = await internals.registerBundlerTracing({
    currentBundler: props.currentBundler,
  });
  try {
    await internals.compile({
      configs: [config],
      currentBundler: configureWebpackUtils.currentBundler,
    });
  } finally {
    await cleanupBundlerTracing();
  }
  return outputPath;
}

async function main(args = process.argv.slice(2)) {
  const [target, ...extraArgs] = args;
  if (extraArgs.length > 0) {
    throw new Error(`Unexpected bundle target arguments: ${extraArgs.join(' ')}`);
  }
  const shard = parseSchoolShardEnvironment();
  console.log(
    `[phased build] Loading and compiling the ${target} bundle`
      + `${shard ? ` for ${shard.id}` : ''}...`,
  );
  const outputPath = await runBundleTarget(target);
  console.log(`[phased build] ${target} bundle output: ${outputPath}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  BUILD_TARGETS,
  assertSafeOutputDirectory,
  assertSingleLocale,
  createTargetConfig,
  getDocusaurusInternals,
  main,
  prepareProcessEnvironment,
  runBundleTarget,
  withoutCompilerDependencies,
};
