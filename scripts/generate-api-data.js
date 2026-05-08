#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { buildApiData } = require('./api-data');

const REPO_ROOT = path.resolve(__dirname, '..');

function getArgValue(flagName) {
  const index = process.argv.indexOf(flagName);
  if (index < 0) return null;
  return process.argv[index + 1] || null;
}

function hasFlag(flagName) {
  return process.argv.includes(flagName);
}

function printSummary(data) {
  const examCount = data.documents.filter((doc) => doc.type === 'exam').length;
  const guideCount = data.documents.filter((doc) => doc.type === 'guide').length;
  const errorCount = data.issues.filter((issue) => issue.severity === 'error').length;
  const warningCount = data.issues.filter((issue) => issue.severity === 'warning').length;

  console.log('API data scan completed.');
  console.log(`  documents: ${data.documents.length}`);
  console.log(`  exams: ${examCount}`);
  console.log(`  guides: ${guideCount}`);
  console.log(`  errors: ${errorCount}`);
  console.log(`  warnings: ${warningCount}`);

  for (const issue of data.issues.slice(0, 30)) {
    const label = issue.severity.toUpperCase();
    console.log(`  [${label}] ${issue.doc_id}: ${issue.message}`);
  }
  if (data.issues.length > 30) {
    console.log(`  ... ${data.issues.length - 30} more issues omitted`);
  }
}

function main() {
  const data = buildApiData();
  const outPath = getArgValue('--out');
  const jsonOnly = hasFlag('--json');
  const validateOnly = hasFlag('--validate');

  if (outPath) {
    const absoluteOutPath = path.isAbsolute(outPath)
      ? outPath
      : path.resolve(REPO_ROOT, outPath);
    fs.mkdirSync(path.dirname(absoluteOutPath), { recursive: true });
    fs.writeFileSync(absoluteOutPath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8');
  }

  if (jsonOnly) {
    process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
  } else {
    printSummary(data);
    if (outPath) console.log(`  output: ${outPath}`);
  }

  const hasErrors = data.issues.some((issue) => issue.severity === 'error');
  if (hasErrors || (validateOnly && data.documents.length === 0)) {
    process.exitCode = 1;
  }
}

main();
