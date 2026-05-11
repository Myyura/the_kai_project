#!/usr/bin/env node

const { buildApiData } = require('./api-data');
const { classifyTag, getKnownTagIds, validateTags } = require('./tag-taxonomy');

function increment(map, key, by = 1) {
  map.set(key, (map.get(key) || 0) + by);
}

function sortCounts(map) {
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function printCountTable(title, rows, limit = 40) {
  console.log(`\n${title}`);
  if (rows.length === 0) {
    console.log('  none');
    return;
  }
  for (const [tag, count] of rows.slice(0, limit)) {
    console.log(`  ${String(count).padStart(4)}  ${tag}`);
  }
  if (rows.length > limit) {
    console.log(`  ... ${rows.length - limit} more`);
  }
}

function main() {
  const strict = process.argv.includes('--strict');
  const json = process.argv.includes('--json');
  const data = buildApiData();
  const schoolCounts = new Map();
  const topicCounts = new Map();
  const unknownCounts = new Map();
  const deprecatedCounts = new Map();
  const noTopicDocs = [];
  const tagIssues = [];

  for (const doc of data.documents) {
    const issues = validateTags(doc.tags);
    tagIssues.push(...issues.map((issue) => ({ ...issue, doc_id: doc.doc_id })));

    let hasTopicLikeTag = false;
    for (const tag of doc.tags || []) {
      const info = classifyTag(tag);
      if (info.kind === 'school') increment(schoolCounts, info.id);
      else if (info.kind === 'topic') {
        hasTopicLikeTag = true;
        increment(topicCounts, info.id);
      } else if (info.kind === 'deprecated') {
        increment(deprecatedCounts, `${info.id} -> ${info.replaceWith}`);
      } else if (info.kind === 'unknown') {
        hasTopicLikeTag = true;
        increment(unknownCounts, tag);
      }
    }

    if ((doc.tags || []).length > 0 && !hasTopicLikeTag) {
      noTopicDocs.push(doc.doc_id);
    }
  }

  const known = getKnownTagIds();
  const errors = tagIssues.filter((issue) => issue.severity === 'ERROR');
  const warnings = tagIssues.filter((issue) => issue.severity === 'WARNING');

  const result = {
    documents: data.documents.length,
    knownSchoolTags: known.schools.length,
    knownTopicTags: known.topics.length,
    deprecatedTags: known.deprecated.length,
    usedSchoolTags: schoolCounts.size,
    usedKnownTopicTags: topicCounts.size,
    usedUnknownTags: unknownCounts.size,
    docsWithoutTopicTag: noTopicDocs.length,
    errors: errors.length,
    warnings: warnings.length,
    unknownTags: sortCounts(unknownCounts).map(([tag, count]) => ({ tag, count })),
    deprecatedTagUsage: sortCounts(deprecatedCounts).map(([tag, count]) => ({ tag, count })),
    noTopicDocExamples: noTopicDocs.slice(0, 30),
  };

  if (json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else {
    console.log('Tag audit completed.');
    console.log(`  documents: ${result.documents}`);
    console.log(`  known school tags: ${result.knownSchoolTags}`);
    console.log(`  known topic tags: ${result.knownTopicTags}`);
    console.log(`  used known topic tags: ${result.usedKnownTopicTags}`);
    console.log(`  unknown tags: ${result.usedUnknownTags}`);
    console.log(`  docs without topic tag: ${result.docsWithoutTopicTag}`);
    console.log(`  tag errors: ${result.errors}`);
    console.log(`  tag warnings: ${result.warnings}`);

    printCountTable('Top school tags', sortCounts(schoolCounts), 25);
    printCountTable('Top topic tags', sortCounts(topicCounts), 50);
    printCountTable('Unknown tags', sortCounts(unknownCounts), 80);
    printCountTable('Deprecated tag usage', sortCounts(deprecatedCounts), 80);

    if (noTopicDocs.length) {
      console.log('\nDocs without topic tag');
      for (const docId of noTopicDocs.slice(0, 40)) console.log(`  ${docId}`);
      if (noTopicDocs.length > 40) console.log(`  ... ${noTopicDocs.length - 40} more`);
    }
  }

  if (strict && errors.length > 0) {
    process.exit(1);
  }
}

main();
