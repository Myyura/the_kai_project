#!/usr/bin/env node

const {spawnSync} = require('node:child_process');
const {getBuildEnvironment, MAX_OLD_SPACE_MB} = require('./build-with-memory-limit');
const {
  describeMeasurementSource,
  hasActiveParentMemoryGuard,
  runWithMemoryGuard,
} = require('./process-memory-guard');

function getCommandInvocation(args, {
  nodePath = process.execPath,
  cliPath = require.resolve('@docusaurus/core/bin/docusaurus.mjs'),
  phasedBuildPath = require.resolve('./docusaurus-build-phases'),
} = {}) {
  return args[0] === 'build'
    ? {command: nodePath, args: [phasedBuildPath, ...args.slice(1)]}
    : {command: nodePath, args: [cliPath, ...args]};
}

function isMemoryIntensiveCommand(args) {
  return args[0] === 'build'
    || (args[0] === 'deploy' && !args.includes('--skip-build'));
}

function getCommandEnvironment(args, source = process.env) {
  return isMemoryIntensiveCommand(args) ? getBuildEnvironment(source) : {...source};
}

function shouldStartMemoryGuard(args, source = process.env, guardOptions) {
  return isMemoryIntensiveCommand(args)
    && !hasActiveParentMemoryGuard(source, guardOptions);
}

async function main() {
  const args = process.argv.slice(2);
  const environment = getCommandEnvironment(args);
  const invocation = getCommandInvocation(args);
  const startMemoryGuard = shouldStartMemoryGuard(args);

  if (isMemoryIntensiveCommand(args)) {
    console.log(
      `Enforcing the 16 GiB build profile (${MAX_OLD_SPACE_MB} MiB V8 heap, `
        + `${environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT} SSG worker, `
        + 'isolated sequential bundles).',
    );
  }

  const result = startMemoryGuard
    ? await runWithMemoryGuard(invocation.command, invocation.args, {
      env: environment,
      label: `Docusaurus ${args[0]}`,
    })
    : spawnSync(invocation.command, invocation.args, {
      env: environment,
      stdio: 'inherit',
    });

  if (result.error) throw result.error;
  if (result.watchdogAvailable) {
    console.log(
      `Peak sampled command memory (${describeMeasurementSource(result.measurementSource)}): `
        + `${(result.maxUsageBytes / 1024 / 1024 / 1024).toFixed(2)} GiB.`,
    );
  }
  if (result.exceeded) process.exit(1);
  if (result.signal) {
    console.error(`Docusaurus stopped by signal ${result.signal}.`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  getCommandInvocation,
  getCommandEnvironment,
  isMemoryIntensiveCommand,
  shouldStartMemoryGuard,
};
