#!/usr/bin/env node

const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const REPO_ROOT = path.resolve(__dirname, '..');
const DEFAULT_ENV_FILE = path.join(REPO_ROOT, '.env.production.local');
const SOURCE_BRANCH = 'main';
const DEPLOYMENT_BRANCH = 'gh-pages';
const DEPLOYMENT_ORGANIZATION = 'Myyura';
const DEPLOYMENT_PROJECT = 'the_kai_project';
const GIT_DEPLOYMENT_ENVIRONMENT_NAMES = Object.freeze([
  'GIT_PASS',
  'GIT_USER',
  'GIT_USER_EMAIL',
  'GIT_USER_NAME',
  'USE_SSH',
]);
const DEPLOY_COMMAND_ARGUMENTS = Object.freeze([
  'run',
  'docusaurus',
  'deploy',
  '--skip-build',
]);
const REQUIRED_BUILD_ENVIRONMENT = Object.freeze([
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'HCAPTCHA_SITE_KEY',
]);

function printUsage() {
  console.log(`Usage: yarn deploy:local [options]

Build the production site on this machine and replace the gh-pages branch of
Myyura/the_kai_project with the verified build/ output.

Options:
  --allow-dirty       Allow tracked or untracked source changes
  --allow-non-main    Allow deployment from a branch other than main
  --env-file <path>   Load deployment variables from a different file
  -h, --help          Show this help

By default, variables are loaded from .env.production.local when it exists.
Values already present in the shell take precedence over the file.`);
}

function parseArguments(args) {
  const options = {
    allowDirty: false,
    allowNonMain: false,
    envFile: DEFAULT_ENV_FILE,
    envFileWasExplicit: false,
    help: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '--allow-dirty') {
      options.allowDirty = true;
    } else if (argument === '--allow-non-main') {
      options.allowNonMain = true;
    } else if (argument === '--env-file') {
      const value = args[index + 1];
      if (!value || value.startsWith('-')) {
        throw new Error('--env-file requires a path.');
      }
      options.envFile = path.resolve(REPO_ROOT, value);
      options.envFileWasExplicit = true;
      index += 1;
    } else if (argument === '--help' || argument === '-h') {
      options.help = true;
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  return options;
}

function decodeQuotedValue(value, quote, filePath, lineNumber) {
  if (!value.endsWith(quote)) {
    throw new Error(`Unterminated quoted value in ${filePath}:${lineNumber}.`);
  }

  const inner = value.slice(1, -1);
  if (quote === "'") return inner;
  return inner.replace(/\\([nrt"\\])/g, (_, escaped) => ({
    n: '\n',
    r: '\r',
    t: '\t',
    '"': '"',
    '\\': '\\',
  })[escaped]);
}

function parseEnvironmentFile(contents, filePath = '.env.production.local') {
  const values = {};

  for (const [index, rawLine] of contents.split(/\r?\n/).entries()) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const match = line.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) {
      throw new Error(`Invalid environment entry in ${filePath}:${index + 1}.`);
    }

    const [, name, rawValue] = match;
    const trimmedValue = rawValue.trim();
    if (trimmedValue.startsWith("'") || trimmedValue.startsWith('"')) {
      values[name] = decodeQuotedValue(
        trimmedValue,
        trimmedValue[0],
        filePath,
        index + 1,
      );
    } else {
      values[name] = trimmedValue.replace(/\s+#.*$/, '').trim();
    }
  }

  return values;
}

function getDeploymentEnvironment(source, {
  envFile = DEFAULT_ENV_FILE,
  envFileWasExplicit = false,
  remoteUrl = '',
} = {}) {
  let fileEnvironment = {};
  if (fs.existsSync(envFile)) {
    fileEnvironment = parseEnvironmentFile(fs.readFileSync(envFile, 'utf8'), envFile);
  } else if (envFileWasExplicit) {
    throw new Error(`Environment file does not exist: ${envFile}`);
  }

  const environment = {
    ...fileEnvironment,
    ...source,
    CURRENT_BRANCH: source.CURRENT_BRANCH || SOURCE_BRANCH,
    DEPLOYMENT_BRANCH,
    GITHUB_HOST: 'github.com',
    ORGANIZATION_NAME: DEPLOYMENT_ORGANIZATION,
    PROBLEM_SETS_ENABLED: 'true',
    PROJECT_NAME: DEPLOYMENT_PROJECT,
  };
  delete environment.CI_PULL_REQUEST;
  delete environment.CIRCLE_PULL_REQUEST;
  delete environment.GITHUB_PORT;

  const sshRemote = /^(?:git@|ssh:\/\/)/.test(remoteUrl);
  if (!environment.USE_SSH && sshRemote) environment.USE_SSH = 'true';
  if (environment.USE_SSH !== 'true' && !environment.GIT_USER) {
    environment.GIT_USER = DEPLOYMENT_ORGANIZATION;
  }

  return environment;
}

function getMissingBuildEnvironment(environment) {
  return REQUIRED_BUILD_ENVIRONMENT.filter(
    (name) => !String(environment[name] || '').trim(),
  );
}

function assertSafeGitAuthentication(environment) {
  if (String(environment.GIT_PASS || '').trim()) {
    throw new Error(
      'GIT_PASS is intentionally unsupported because Docusaurus can retain it '
        + 'in a temporary Git checkout. Use SSH or the system Git credential helper.',
    );
  }
  if (environment.USE_SSH !== 'true' && !environment.GIT_USER) {
    throw new Error('Set GIT_USER for HTTPS deployment, or set USE_SSH=true.');
  }
}

function withoutGitDeploymentCredentials(environment) {
  const buildEnvironment = {...environment};
  for (const name of GIT_DEPLOYMENT_ENVIRONMENT_NAMES) {
    delete buildEnvironment[name];
  }
  return buildEnvironment;
}

function getYarnInvocation(platform = process.platform, comSpec = process.env.ComSpec) {
  if (platform === 'win32') {
    return {
      command: comSpec || 'cmd.exe',
      prefixArguments: ['/d', '/s', '/c', 'yarn.cmd'],
    };
  }
  return {command: 'yarn', prefixArguments: []};
}

function run(command, args, {environment, capture = false} = {}) {
  const result = spawnSync(command, args, {
    cwd: REPO_ROOT,
    env: environment || process.env,
    encoding: capture ? 'utf8' : undefined,
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });

  if (result.error) throw result.error;
  if (result.signal) {
    throw new Error(`${command} stopped by signal ${result.signal}.`);
  }
  if (result.status !== 0) {
    const detail = capture ? String(result.stderr || result.stdout || '').trim() : '';
    throw new Error(
      `${command} ${args.join(' ')} failed with exit code ${result.status}`
        + (detail ? `: ${detail}` : '.'),
    );
  }

  return capture ? String(result.stdout).trim() : '';
}

function getRepositoryState() {
  return {
    branch: run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {capture: true}),
    changes: run('git', ['status', '--porcelain', '--untracked-files=normal'], {
      capture: true,
    }),
    head: run('git', ['rev-parse', 'HEAD'], {capture: true}),
    remoteUrl: run('git', ['remote', 'get-url', 'origin'], {capture: true}),
  };
}

function assertExpectedRemote(remoteUrl) {
  const repositoryPath = `${DEPLOYMENT_ORGANIZATION}/${DEPLOYMENT_PROJECT}`;
  const expectedRemotes = [
    new RegExp(
      `^https?://(?:[^/@]+@)?github\\.com/${repositoryPath}(?:\\.git)?/?$`,
      'i',
    ),
    new RegExp(`^git@github\\.com:${repositoryPath}(?:\\.git)?/?$`, 'i'),
    new RegExp(
      `^ssh://(?:git@)?github\\.com(?::\\d+)?/${repositoryPath}(?:\\.git)?/?$`,
      'i',
    ),
  ];
  if (!expectedRemotes.some((pattern) => pattern.test(remoteUrl))) {
    throw new Error(
      `origin must point to ${DEPLOYMENT_ORGANIZATION}/${DEPLOYMENT_PROJECT}.`,
    );
  }
}

function parseRemoteHead(output, branch) {
  const [head, ref] = String(output).trim().split(/\s+/, 2);
  if (!/^[0-9a-f]{40,64}$/i.test(head || '') || ref !== `refs/heads/${branch}`) {
    throw new Error(`Unable to resolve origin/${branch}. Push the branch before deploying.`);
  }
  return head;
}

function getRemoteHead(branch) {
  return parseRemoteHead(run('git', [
    'ls-remote',
    '--exit-code',
    'origin',
    `refs/heads/${branch}`,
  ], {capture: true}), branch);
}

function assertRemoteHead(repositoryState, remoteHead) {
  if (repositoryState.head !== remoteHead) {
    throw new Error(
      `${repositoryState.branch} does not exactly match origin/${repositoryState.branch}. `
        + 'Pull remote changes or push local commits before deploying.',
    );
  }
}

function assertRepositoryState(state, options = {}) {
  if (state.branch === 'HEAD') {
    throw new Error('Refusing to deploy from a detached HEAD.');
  }
  if (state.branch !== SOURCE_BRANCH && !options.allowNonMain) {
    throw new Error(
      `Refusing to deploy from ${state.branch}; switch to ${SOURCE_BRANCH} or pass --allow-non-main.`,
    );
  }
  if (state.changes && !options.allowDirty) {
    throw new Error(
      'Refusing to deploy an uncommitted working tree. Commit/stash the changes, '
        + 'or pass --allow-dirty intentionally.',
    );
  }
}

function readBuildSource(buildDirectory) {
  const exportPath = path.join(
    buildDirectory,
    'content-export',
    'v1',
    'kai-content-v1.json.gz',
  );
  try {
    return JSON.parse(zlib.gunzipSync(fs.readFileSync(exportPath)).toString('utf8')).source;
  } catch (error) {
    throw new Error(`Unable to read build source metadata: ${error.message}`);
  }
}

function assertDeploymentArtifacts(buildDirectory, repositoryState) {
  const requiredFiles = [
    'index.html',
    '.nojekyll',
    'CNAME',
    path.join('content-export', 'v1', 'kai-content-v1.json.gz'),
  ];
  const missing = requiredFiles.filter(
    (relativePath) => !fs.existsSync(path.join(buildDirectory, relativePath)),
  );
  if (missing.length > 0) {
    throw new Error(`Build output is incomplete; missing: ${missing.join(', ')}`);
  }

  const cname = fs.readFileSync(path.join(buildDirectory, 'CNAME'), 'utf8').trim();
  if (cname !== 'runjp.com') {
    throw new Error(`Unexpected Pages CNAME: ${cname || '(empty)'}`);
  }

  const source = readBuildSource(buildDirectory);
  if (source?.commit !== repositoryState.head) {
    throw new Error(
      `The build belongs to commit ${source?.commit || '(unknown)'}, not ${repositoryState.head}.`,
    );
  }
  if (source?.ref !== repositoryState.branch) {
    throw new Error(
      `The build belongs to branch ${source?.ref || '(unknown)'}, not ${repositoryState.branch}.`,
    );
  }
}

function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    printUsage();
    return;
  }

  const repositoryState = getRepositoryState();
  assertRepositoryState(repositoryState, options);
  assertExpectedRemote(repositoryState.remoteUrl);
  assertRemoteHead(repositoryState, getRemoteHead(repositoryState.branch));

  const environment = getDeploymentEnvironment(process.env, {
    envFile: options.envFile,
    envFileWasExplicit: options.envFileWasExplicit,
    remoteUrl: repositoryState.remoteUrl,
  });
  environment.CURRENT_BRANCH = repositoryState.branch;

  const missingEnvironment = getMissingBuildEnvironment(environment);
  if (missingEnvironment.length > 0) {
    throw new Error(
      `Missing production build variables: ${missingEnvironment.join(', ')}. `
        + 'Set them in .env.production.local or in the shell.',
    );
  }
  assertSafeGitAuthentication(environment);

  const yarn = getYarnInvocation();
  const yarnArguments = (...args) => [...yarn.prefixArguments, ...args];
  console.log('Building the GitHub Pages production output locally...');
  run(yarn.command, yarnArguments('run', 'build:pages'), {
    environment: withoutGitDeploymentCredentials(environment),
  });

  const finalRepositoryState = getRepositoryState();
  assertRepositoryState(finalRepositoryState, options);
  assertExpectedRemote(finalRepositoryState.remoteUrl);
  assertRemoteHead(
    finalRepositoryState,
    getRemoteHead(finalRepositoryState.branch),
  );
  if (finalRepositoryState.head !== repositoryState.head
    || finalRepositoryState.branch !== repositoryState.branch) {
    throw new Error('The checked-out source changed during the build; run deployment again.');
  }

  const buildDirectory = path.join(REPO_ROOT, 'build');
  assertDeploymentArtifacts(buildDirectory, finalRepositoryState);

  console.log(
    `Publishing the verified build/ directory to ${DEPLOYMENT_BRANCH} `
      + `from ${repositoryState.branch}@${repositoryState.head.slice(0, 12)}...`,
  );
  run(yarn.command, yarnArguments(...DEPLOY_COMMAND_ARGUMENTS), {environment});
  console.log('The verified build was pushed to the gh-pages branch successfully.');
  console.log(
    'GitHub Pages will publish it only after Settings > Pages is configured as '
      + 'Deploy from a branch: gh-pages / (root).',
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`Local Pages deployment failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  DEFAULT_ENV_FILE,
  DEPLOY_COMMAND_ARGUMENTS,
  DEPLOYMENT_BRANCH,
  DEPLOYMENT_ORGANIZATION,
  DEPLOYMENT_PROJECT,
  GIT_DEPLOYMENT_ENVIRONMENT_NAMES,
  REQUIRED_BUILD_ENVIRONMENT,
  SOURCE_BRANCH,
  assertDeploymentArtifacts,
  assertExpectedRemote,
  assertRemoteHead,
  assertRepositoryState,
  assertSafeGitAuthentication,
  getDeploymentEnvironment,
  getMissingBuildEnvironment,
  getYarnInvocation,
  parseArguments,
  parseEnvironmentFile,
  parseRemoteHead,
  withoutGitDeploymentCredentials,
};
