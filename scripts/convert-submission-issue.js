#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {analyzeDisplayMath} = require('./display-math-format');
const {
  buildPullRequestBody,
  extractSubmissionFromIssueBody,
  verifySubmissionSignature,
  writeSubmissionToRepo,
} = require('./submission-utils');

const REPO_ROOT = path.resolve(__dirname, '..');

function getArgValue(flagName, fallback = null) {
  const index = process.argv.indexOf(flagName);
  if (index < 0) return fallback;
  return process.argv[index + 1] || fallback;
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function main() {
  const eventPath = getArgValue('--event') || process.env.GITHUB_EVENT_PATH;
  const resultPath = getArgValue('--result', path.join(REPO_ROOT, '.submission-result.json'));
  const prBodyPath = getArgValue('--pr-body', path.join(REPO_ROOT, '.submission-pr-body.md'));
  if (!eventPath) throw new Error('Missing --event or GITHUB_EVENT_PATH.');

  const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
  const issue = event.issue;
  if (!issue?.body || !issue?.number) {
    throw new Error('GitHub event does not contain an issue body.');
  }

  const submission = extractSubmissionFromIssueBody(issue.body);
  verifySubmissionSignature(submission, process.env.CLA_ATTESTATION_SECRET || '');

  const { payload } = submission;
  const writeResult = writeSubmissionToRepo({ repoRoot: REPO_ROOT, payload });
  if (payload.submissionType === 'new_solution' && !writeResult.conflict) {
    // Format the derived file only, after verifying the unchanged signed payload.
    const absolutePath = path.join(REPO_ROOT, writeResult.relativePath);
    const formatted = await analyzeDisplayMath(fs.readFileSync(absolutePath, 'utf8'));
    if (formatted.changed) fs.writeFileSync(absolutePath, formatted.fixedContent, 'utf8');
  }
  const branchName = `codex/submission-${issue.number}`;
  if (writeResult.skip) {
    writeJson(resultPath, {
      action: writeResult.action,
      branchName,
      filePath: writeResult.relativePath,
      filePaths: [],
      prTitle: '',
      prBodyPath: '',
      submissionId: payload.submissionId,
      submissionType: payload.submissionType,
      skip: true,
      skipReason: writeResult.skipReason || 'manual_review_required',
      conflict: false,
      conflictKind: null,
      expectedBlobSha: null,
      currentBlobSha: null,
    });
    console.log(`Skipped automatic conversion for ${payload.submissionType} issue #${issue.number}.`);
    return;
  }
  const titlePrefix = ['new_solution', 'experience'].includes(payload.submissionType) ? 'Add submission' : 'Update submission';
  const prTitle = `${titlePrefix} from issue #${issue.number}`;
  const filePaths = writeResult.conflict ? [] : writeResult.filePaths || [writeResult.relativePath];
  if (!writeResult.conflict) {
    const prBody = buildPullRequestBody({
      payload,
      issue,
      relativePath: writeResult.relativePath,
      filePaths,
    });
    fs.writeFileSync(prBodyPath, `${prBody}\n`, 'utf8');
  }
  writeJson(resultPath, {
    action: writeResult.action,
    branchName,
    filePath: writeResult.relativePath,
    filePaths,
    prTitle,
    prBodyPath,
    submissionId: payload.submissionId,
    submissionType: payload.submissionType,
    skip: false,
    skipReason: null,
    conflict: Boolean(writeResult.conflict),
    conflictKind: writeResult.conflictKind || null,
    expectedBlobSha: writeResult.expectedBlobSha || null,
    currentBlobSha: writeResult.currentBlobSha || null,
  });

  if (writeResult.conflict) {
    console.log(`Submission issue #${issue.number} conflicts with ${writeResult.relativePath}.`);
  } else {
    console.log(`Converted submission issue #${issue.number}: ${writeResult.relativePath}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
