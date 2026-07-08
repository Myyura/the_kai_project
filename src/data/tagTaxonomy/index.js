const config = require('./config.json');
const schoolTags = require('./schoolTags.json');
const bioinformatics = require('./subjects/bioinformatics.json');
const chemistry = require('./subjects/chemistry.json');
const computerScience = require('./subjects/computer-science.json');
const dataScienceArtificialIntelligence = require('./subjects/data-science-artificial-intelligence.json');
const discreteMathematics = require('./subjects/discrete-mathematics.json');
const electricalElectronic = require('./subjects/electrical-electronic.json');
const engineering = require('./subjects/engineering.json');
const general = require('./subjects/general.json');
const graphTheoryCombinatorialOptimization = require('./subjects/graph-theory-combinatorial-optimization.json');
const mathematics = require('./subjects/mathematics.json');
const operationsResearch = require('./subjects/operations-research.json');
const physics = require('./subjects/physics.json');
const probabilityStatistics = require('./subjects/probability-statistics.json');

const subjectFiles = [
  bioinformatics,
  chemistry,
  computerScience,
  dataScienceArtificialIntelligence,
  discreteMathematics,
  electricalElectronic,
  engineering,
  general,
  graphTheoryCombinatorialOptimization,
  mathematics,
  operationsResearch,
  physics,
  probabilityStatistics,
];

function validateSubjectDefinition(definition) {
  const subsubjectIds = new Set(Object.keys(definition.subsubjects || {}));

  for (const [subsubjectId, subsubject] of Object.entries(definition.subsubjects || {})) {
    if (subsubject.subject !== definition.id) {
      throw new Error(
        `Subsubject "${subsubjectId}" belongs to "${subsubject.subject}", not "${definition.id}".`,
      );
    }
  }

  for (const [topicId, topic] of Object.entries(definition.topics || {})) {
    if (!subsubjectIds.has(topic.subsubject)) {
      throw new Error(
        `Topic "${topicId}" must be stored with its subsubject "${topic.subsubject}".`,
      );
    }
  }
}

function indexSubjectFiles() {
  const result = new Map();
  for (const definition of subjectFiles) {
    validateSubjectDefinition(definition);
    if (result.has(definition.id)) {
      throw new Error(`Duplicate tag taxonomy subject file for "${definition.id}".`);
    }
    result.set(definition.id, definition);
  }
  return result;
}

function mergeRecords(definitions, key, { sort = false } = {}) {
  const result = {};
  for (const definition of definitions) {
    for (const [id, value] of Object.entries(definition[key] || {})) {
      if (Object.hasOwn(result, id)) {
        throw new Error(`Duplicate tag taxonomy ${key} entry "${id}".`);
      }
      result[id] = value;
    }
  }

  return sort
    ? Object.fromEntries(Object.entries(result).sort(([left], [right]) => left.localeCompare(right, 'en')))
    : result;
}

const subjectFilesById = indexSubjectFiles();
const orderedSubjectFiles = config.subjectOrder.map((subjectId) => {
  const definition = subjectFilesById.get(subjectId);
  if (!definition) throw new Error(`Missing tag taxonomy subject file for "${subjectId}".`);
  return definition;
});

if (orderedSubjectFiles.length !== subjectFiles.length) {
  const unorderedIds = subjectFiles
    .map(({ id }) => id)
    .filter((subjectId) => !config.subjectOrder.includes(subjectId));
  throw new Error(`Tag taxonomy subject files missing from subjectOrder: ${unorderedIds.join(', ')}`);
}

const taxonomy = {
  ...config,
  subjects: Object.fromEntries(orderedSubjectFiles.map(({ id, subject }) => [id, subject])),
  subsubjects: mergeRecords(orderedSubjectFiles, 'subsubjects'),
  subsubjectOrder: orderedSubjectFiles.flatMap(({ subsubjectOrder }) => subsubjectOrder || []),
  schoolTags,
  topics: mergeRecords(orderedSubjectFiles, 'topics', { sort: true }),
};

module.exports = taxonomy;
