#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { buildApiData } = require('./api-data');

const OUTPUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'siteStats.json');
const DOCUMENT_TITLES_FILE = path.resolve(__dirname, '..', 'src', 'data', 'documentTitles.json');

function uniqueCount(values) {
  return new Set(values.filter(Boolean)).size;
}

function main() {
  const data = buildApiData();
  const errors = data.issues.filter((issue) => issue.severity === 'error');
  if (errors.length) {
    console.error('API data has validation errors. Refusing to generate site stats.');
    for (const issue of errors.slice(0, 20)) {
      console.error(`  [ERROR] ${issue.doc_id}: ${issue.message}`);
    }
    process.exit(1);
  }

  const examDocuments = data.documents.filter((doc) => doc.type === 'exam');
  const guideDocuments = data.documents.filter((doc) => doc.type === 'guide');

  const stats = {
    totalDocuments: data.documents.length,
    examDocuments: examDocuments.length,
    guideDocuments: guideDocuments.length,
    universities: uniqueCount(data.documents.map((doc) => doc.university_id)),
    departments: uniqueCount(data.documents.map((doc) => `${doc.university_id}/${doc.department_id}`)),
    programs: uniqueCount(data.documents.map((doc) => {
      if (!doc.program_id) return null;
      return `${doc.university_id}/${doc.department_id}/${doc.program_id}`;
    })),
  };

  const documentTitles = Object.fromEntries(
    data.documents
      .filter((doc) => doc.doc_id && doc.title)
      .sort((a, b) => a.doc_id.localeCompare(b.doc_id))
      .map((doc) => [doc.doc_id, doc.title])
  );

  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(stats, null, 2)}\n`, 'utf-8');
  fs.writeFileSync(DOCUMENT_TITLES_FILE, `${JSON.stringify(documentTitles, null, 2)}\n`, 'utf-8');
  console.log(`Generated site stats: ${OUTPUT_FILE}`);
  console.log(`  exams: ${stats.examDocuments}`);
  console.log(`  universities: ${stats.universities}`);
  console.log(`Generated document titles: ${DOCUMENT_TITLES_FILE}`);
  console.log(`  documents: ${Object.keys(documentTitles).length}`);
}

main();
