#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { buildTagsYaml } = require('./generate-docusaurus-tags');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const TAXONOMY_DIR = path.join(REPO_ROOT, 'src/data/tagTaxonomy');
const TAXONOMY_CONFIG_PATH = path.join(TAXONOMY_DIR, 'config.json');
const TAXONOMY_SUBJECTS_DIR = path.join(TAXONOMY_DIR, 'subjects');
const DOCS_TAGS_PATH = path.join(REPO_ROOT, 'docs/tags.yml');

function normalizePath(input) {
  return input.replace(/\\/g, '/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function writeTaxonomy(taxonomy) {
  const config = readJson(TAXONOMY_CONFIG_PATH);
  writeJson(TAXONOMY_CONFIG_PATH, {
    ...config,
    version: taxonomy.version,
    policy: taxonomy.policy,
    subjectOrder: taxonomy.subjectOrder,
  });

  for (const fileName of fs.readdirSync(TAXONOMY_SUBJECTS_DIR).filter((name) => name.endsWith('.json'))) {
    const filePath = path.join(TAXONOMY_SUBJECTS_DIR, fileName);
    const definition = readJson(filePath);
    const subsubjects = Object.fromEntries(
      Object.entries(taxonomy.subsubjects).filter(([, meta]) => meta.subject === definition.id),
    );
    const subsubjectIds = new Set(Object.keys(subsubjects));
    const topics = Object.fromEntries(
      Object.entries(taxonomy.topics).filter(([, meta]) => subsubjectIds.has(meta.subsubject)),
    );

    writeJson(filePath, {
      ...definition,
      subject: taxonomy.subjects[definition.id],
      subsubjects,
      subsubjectOrder: taxonomy.subsubjectOrder.filter((id) => subsubjectIds.has(id)),
      topics,
    });
  }
}

function listMarkdownFiles(dirPath) {
  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files.sort((a, b) => normalizePath(a).localeCompare(normalizePath(b)));
}

function stripLearningAliases(meta) {
  if (!meta || typeof meta !== 'object' || Array.isArray(meta)) return meta;
  const { aliases, ...rest } = meta;
  return rest;
}

function topicShortId(topicId, topic) {
  const prefix = topic?.subsubject ? `${topic.subsubject}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId;
}

function namespacedTopicId(topicId, topic) {
  if (!topic?.subsubject) return topicId;
  const shortId = topicShortId(topicId, topic);
  return `${topic.subsubject}.${shortId}`;
}

function addUnique(list, value) {
  if (value && !list.includes(value)) list.push(value);
}

function buildMigration(taxonomy) {
  const subjects = new Set(Object.keys(taxonomy.subjects || {}));
  const schools = new Map();
  const subsubjects = new Map();
  const topics = new Map();

  for (const [id, meta] of Object.entries(taxonomy.schoolTags || {})) {
    schools.set(id, id);
    for (const alias of meta.aliases || []) schools.set(alias, id);
  }

  for (const [id, meta] of Object.entries(taxonomy.subsubjects || {})) {
    subsubjects.set(id, id);
    for (const alias of meta.aliases || []) {
      subsubjects.set(alias, id);
    }
  }

  const nextTopics = {};
  for (const [id, meta] of Object.entries(taxonomy.topics || {})) {
    const nextId = namespacedTopicId(id, meta);
    if (nextTopics[nextId]) {
      throw new Error(`Duplicate namespaced topic id: ${nextId}`);
    }
    nextTopics[nextId] = stripLearningAliases(meta);
    topics.set(id, nextId);
    for (const alias of meta.aliases || []) {
      topics.set(alias, nextId);
    }
  }

  const nextSubsubjects = {};
  for (const [id, meta] of Object.entries(taxonomy.subsubjects || {})) {
    nextSubsubjects[id] = stripLearningAliases(meta);
  }

  const nextTaxonomy = {
    ...taxonomy,
    version: 3,
    policy: {
      ...(taxonomy.policy || {}),
      subsubjectTags: 'canonical-subsubject-only',
      topicTags: 'namespaced-topic-only',
      subjectTags: 'derived-from-subsubject',
    },
    subsubjects: nextSubsubjects,
    topics: nextTopics,
  };

  return {
    subjects,
    schools,
    subsubjects,
    topics,
    nextTaxonomy,
  };
}

function classifyMigratedTag(tag, migration) {
  if (migration.schools.has(tag)) return { kind: 'school', id: migration.schools.get(tag) };
  if (migration.topics.has(tag)) return { kind: 'topic', id: migration.topics.get(tag) };
  if (migration.subsubjects.has(tag)) return { kind: 'subsubject', id: migration.subsubjects.get(tag) };
  if (migration.subjects.has(tag)) return { kind: 'subject', id: tag };
  return { kind: 'unknown', id: tag };
}

function migrateTags(tags, migration) {
  const schools = [];
  const topics = [];
  const subsubjects = [];
  const unknown = [];
  const removedSubjects = [];

  for (const rawTag of tags || []) {
    const tag = String(rawTag || '').trim();
    if (!tag) continue;
    const info = classifyMigratedTag(tag, migration);
    if (info.kind === 'school') addUnique(schools, info.id);
    else if (info.kind === 'topic') addUnique(topics, info.id);
    else if (info.kind === 'subsubject') addUnique(subsubjects, info.id);
    else if (info.kind === 'subject') addUnique(removedSubjects, info.id);
    else addUnique(unknown, tag);
  }

  const topicSubsubjects = new Set(
    topics
      .map((topicId) => migration.nextTaxonomy.topics[topicId]?.subsubject)
      .filter(Boolean),
  );
  const keptSubsubjects = subsubjects.filter((id) => !topicSubsubjects.has(id));
  const redundantSubsubjects = subsubjects.filter((id) => topicSubsubjects.has(id));

  return {
    tags: [...schools, ...topics, ...keptSubsubjects, ...unknown],
    removedSubjects,
    redundantSubsubjects,
  };
}

function migrateDocument(filePath, migration, write) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  if (!Array.isArray(parsed.data.tags)) return null;

  const before = parsed.data.tags.map((tag) => String(tag));
  const result = migrateTags(before, migration);
  const changed = JSON.stringify(before) !== JSON.stringify(result.tags);
  if (!changed) {
    return {
      filePath,
      changed: false,
      removedSubjects: result.removedSubjects.length,
      redundantSubsubjects: result.redundantSubsubjects.length,
    };
  }

  if (write) {
    parsed.data.tags = result.tags;
    const next = matter.stringify(parsed.content, parsed.data, {
      lineWidth: -1,
    });
    fs.writeFileSync(filePath, next);
  }

  return {
    filePath,
    changed: true,
    before,
    after: result.tags,
    removedSubjects: result.removedSubjects.length,
    redundantSubsubjects: result.redundantSubsubjects.length,
  };
}

function printSummary(results, migration) {
  const changed = results.filter((item) => item?.changed);
  const removedSubjects = results.reduce((sum, item) => sum + (item?.removedSubjects || 0), 0);
  const redundantSubsubjects = results.reduce((sum, item) => sum + (item?.redundantSubsubjects || 0), 0);
  const topicMappings = Array.from(migration.topics.entries()).filter(([from, to]) => from !== to);

  console.log('Namespaced tag migration check');
  console.log(`  topic mappings: ${topicMappings.length}`);
  console.log(`  documents changed: ${changed.length}`);
  console.log(`  explicit subject tags removed: ${removedSubjects}`);
  console.log(`  redundant subsubject tags removed: ${redundantSubsubjects}`);

  if (topicMappings.length) {
    console.log('\nSample topic mappings');
    for (const [from, to] of topicMappings.slice(0, 20)) {
      console.log(`  ${from} -> ${to}`);
    }
  }

  if (changed.length) {
    console.log('\nSample document changes');
    for (const item of changed.slice(0, 10)) {
      console.log(`  ${normalizePath(path.relative(REPO_ROOT, item.filePath))}`);
      console.log(`    before: ${item.before.join(', ')}`);
      console.log(`    after:  ${item.after.join(', ')}`);
    }
  }
}

function main() {
  const write = process.argv.includes('--write');
  const check = process.argv.includes('--check') || !write;
  if (!check && !write) {
    console.error('Usage: node scripts/migrate-namespaced-tags.js --check|--write');
    process.exit(1);
  }

  const taxonomy = require('../src/data/tagTaxonomy');
  const migration = buildMigration(taxonomy);
  const files = listMarkdownFiles(DOCS_DIR);
  const results = files.map((file) => migrateDocument(file, migration, write)).filter(Boolean);

  if (write) {
    writeTaxonomy(migration.nextTaxonomy);
    fs.writeFileSync(DOCS_TAGS_PATH, buildTagsYaml(migration.nextTaxonomy));
  }

  printSummary(results, migration);
  if (write) {
    console.log('\nMigration written.');
  }
}

if (require.main === module) main();

module.exports = {
  buildMigration,
  migrateTags,
};
