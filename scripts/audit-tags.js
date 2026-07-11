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
  const subjectCounts = new Map();
  const relatedSubjectCounts = new Map();
  const subsubjectCounts = new Map();
  const topicCounts = new Map();
  const unknownCounts = new Map();
  const noLearningTagDocs = [];
  const noTopicDocs = [];
  const tagIssues = [];

  for (const doc of data.documents) {
    const issues = validateTags(doc.tags);
    tagIssues.push(...issues.map((issue) => ({ ...issue, doc_id: doc.doc_id })));

    let hasLearningTag = false;
    let hasTopicTag = false;
    for (const tag of doc.tags || []) {
      const info = classifyTag(tag);
      if (info.kind === 'school') increment(schoolCounts, info.id);
      else if (info.kind === 'subject') increment(subjectCounts, info.id);
      else if (info.kind === 'subsubject') {
        hasLearningTag = true;
        increment(subsubjectCounts, info.id);
        if (info.subjectId) increment(subjectCounts, info.subjectId);
      }
      else if (info.kind === 'topic') {
        hasLearningTag = true;
        hasTopicTag = true;
        increment(topicCounts, info.id);
        for (const subjectId of info.subjectIds || [info.primarySubjectId].filter(Boolean)) {
          increment(subjectCounts, subjectId);
        }
        for (const subjectId of info.relatedSubjectIds || []) {
          increment(relatedSubjectCounts, subjectId);
        }
        if (info.subsubjectId) increment(subsubjectCounts, info.subsubjectId);
      } else if (info.kind === 'unknown') {
        hasLearningTag = true;
        hasTopicTag = true;
        increment(unknownCounts, tag);
      }
    }

    if ((doc.tags || []).length > 0 && !hasLearningTag) {
      noLearningTagDocs.push(doc.doc_id);
    } else if ((doc.tags || []).length > 0 && !hasTopicTag) {
      noTopicDocs.push(doc.doc_id);
    }
  }

  const known = getKnownTagIds();
  const errors = tagIssues.filter((issue) => issue.severity === 'ERROR');
  const warnings = tagIssues.filter((issue) => issue.severity === 'WARNING');
  const deprecatedAliases = tagIssues.filter((issue) => issue.rule === 'frontmatter-tags-alias');
  const redundantBroadTopics = tagIssues.filter(
    (issue) => issue.rule === 'frontmatter-tags-redundant-broad-topic',
  );

  const result = {
    documents: data.documents.length,
    knownSchoolTags: known.schools.length,
    knownSubjects: known.subjects.length,
    knownSubsubjects: known.subsubjects.length,
    knownTopicTags: known.topics.length,
    usedSchoolTags: schoolCounts.size,
    usedSubjects: subjectCounts.size,
    usedSubsubjects: subsubjectCounts.size,
    usedKnownTopicTags: topicCounts.size,
    usedUnknownTags: unknownCounts.size,
    docsWithoutLearningTag: noLearningTagDocs.length,
    docsWithoutTopicTag: noTopicDocs.length,
    errors: errors.length,
    warnings: warnings.length,
    deprecatedAliases: deprecatedAliases.length,
    redundantBroadTopics: redundantBroadTopics.length,
    subjectUsage: sortCounts(subjectCounts).map(([tag, count]) => ({ tag, count })),
    relatedSubjectUsage: sortCounts(relatedSubjectCounts).map(([tag, count]) => ({ tag, count })),
    subsubjectUsage: sortCounts(subsubjectCounts).map(([tag, count]) => ({ tag, count })),
    unknownTags: sortCounts(unknownCounts).map(([tag, count]) => ({ tag, count })),
    noLearningTagDocExamples: noLearningTagDocs.slice(0, 30),
    noTopicDocExamples: noTopicDocs.slice(0, 30),
  };

  if (json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else {
    console.log('Tag audit completed.');
    console.log(`  documents: ${result.documents}`);
    console.log(`  known school tags: ${result.knownSchoolTags}`);
    console.log(`  known subjects: ${result.knownSubjects}`);
    console.log(`  known subsubjects: ${result.knownSubsubjects}`);
    console.log(`  known topic tags: ${result.knownTopicTags}`);
    console.log(`  used subsubjects: ${result.usedSubsubjects}`);
    console.log(`  used known topic tags: ${result.usedKnownTopicTags}`);
    console.log(`  unknown tags: ${result.usedUnknownTags}`);
    console.log(`  docs without learning tag: ${result.docsWithoutLearningTag}`);
    console.log(`  docs without topic tag: ${result.docsWithoutTopicTag}`);
    console.log(`  tag errors: ${result.errors}`);
    console.log(`  tag warnings: ${result.warnings}`);
    console.log(`  deprecated aliases: ${result.deprecatedAliases}`);
    console.log(`  redundant broad topics: ${result.redundantBroadTopics}`);

    printCountTable('Top school tags', sortCounts(schoolCounts), 25);
    printCountTable('Top subjects', sortCounts(subjectCounts), 25);
    printCountTable('Related subject associations', sortCounts(relatedSubjectCounts), 25);
    printCountTable('Top subsubjects', sortCounts(subsubjectCounts), 40);
    printCountTable('Top topic tags', sortCounts(topicCounts), 50);
    printCountTable('Unknown tags', sortCounts(unknownCounts), 80);

    if (noLearningTagDocs.length) {
      console.log('\nDocs without learning tag');
      for (const docId of noLearningTagDocs.slice(0, 40)) console.log(`  ${docId}`);
      if (noLearningTagDocs.length > 40) console.log(`  ... ${noLearningTagDocs.length - 40} more`);
    }

    if (noTopicDocs.length) {
      console.log('\nDocs without concrete topic tag');
      for (const docId of noTopicDocs.slice(0, 40)) console.log(`  ${docId}`);
      if (noTopicDocs.length > 40) console.log(`  ... ${noTopicDocs.length - 40} more`);
    }
  }

  if (strict && errors.length > 0) {
    process.exit(1);
  }
}

main();
