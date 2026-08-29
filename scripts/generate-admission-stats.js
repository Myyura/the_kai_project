#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DEFAULT_DOCS_DIR = path.join(REPO_ROOT, 'docs');
const DEFAULT_OUTPUT_FILE = path.join(REPO_ROOT, 'src', 'data', 'admissionStats.generated.json');
const COUNT_FIELDS = ['capacity', 'applicants', 'examinees', 'admitted', 'enrolled'];
const VALID_SCOPES = new Set(['graduate_school_total', 'program', 'course', 'aggregate']);
const EMPTY_GENERATED_AT = '1970-01-01T00:00:00.000Z';

class AdmissionStatsValidationError extends Error {
  constructor(issues) {
    const sortedIssues = [...issues].sort(compareIssues);
    super(
      `Admission statistics validation failed with ${sortedIssues.length} issue(s):\n${sortedIssues
        .map((issue) => `- ${formatIssue(issue)}`)
        .join('\n')}`,
    );
    this.name = 'AdmissionStatsValidationError';
    this.issues = sortedIssues;
  }
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function compareStrings(left, right) {
  return String(left).localeCompare(String(right), 'en');
}

function compareIssues(left, right) {
  return (
    compareStrings(left.file, right.file) ||
    compareStrings(left.location, right.location) ||
    compareStrings(left.message, right.message)
  );
}

function formatIssue(issue) {
  const location = issue.location ? ` (${issue.location})` : '';
  return `${issue.file}${location}: ${issue.message}`;
}

function addIssue(issues, file, location, message) {
  issues.push({file, location, message});
}

function readJson(filePath, docsDir, issues) {
  const displayPath = toPosixPath(path.relative(docsDir, filePath));
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    addIssue(issues, displayPath, '', `invalid JSON: ${error.message}`);
    return null;
  }
}

function findAdmissionFiles(docsDir) {
  if (!fs.existsSync(docsDir)) return [];

  const files = [];
  function walk(currentDir) {
    const entries = fs
      .readdirSync(currentDir, {withFileTypes: true})
      .sort((left, right) => compareStrings(left.name, right.name));

    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name.startsWith('_') && entry.name !== '_admissions.json') {
        continue;
      }
      const entryPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) walk(entryPath);
      else if (entry.isFile() && entry.name === '_admissions.json') files.push(entryPath);
    }
  }

  walk(docsDir);
  return files.sort(compareStrings);
}

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function requireString(value, issues, file, location) {
  if (typeof value !== 'string' || value.trim() === '') {
    addIssue(issues, file, location, 'must be a non-empty string');
    return '';
  }
  return value.trim();
}

function normalizeNullableNumber(value, options) {
  const {issues, file, location, integer = false} = options;
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    addIssue(issues, file, location, 'must be a finite number or null');
    return null;
  }
  if (value < 0) addIssue(issues, file, location, 'must not be negative');
  if (integer && !Number.isInteger(value)) {
    addIssue(issues, file, location, 'must be an integer or null');
  }
  return value;
}

function normalizeSourceIds(value, options) {
  const {issues, file, location, required = false} = options;
  if (value === undefined || value === null) {
    if (required) addIssue(issues, file, location, 'must contain at least one source ID');
    return [];
  }
  if (!Array.isArray(value)) {
    addIssue(issues, file, location, 'must be an array of source IDs');
    return [];
  }

  const ids = [];
  const seen = new Set();
  value.forEach((sourceId, index) => {
    if (typeof sourceId !== 'string' || sourceId.trim() === '') {
      addIssue(issues, file, `${location}[${index}]`, 'must be a non-empty string');
      return;
    }
    const normalizedId = sourceId.trim();
    if (seen.has(normalizedId)) {
      addIssue(issues, file, `${location}[${index}]`, `duplicates source ID "${normalizedId}"`);
      return;
    }
    seen.add(normalizedId);
    ids.push(normalizedId);
  });

  if (required && ids.length === 0) {
    addIssue(issues, file, location, 'must contain at least one source ID');
  }
  return ids.sort(compareStrings);
}

function normalizeNotes(value, options) {
  const {issues, file, location} = options;
  if (value === undefined || value === null || value === '') return [];
  const rawNotes = Array.isArray(value) ? value : [value];
  const notes = [];
  rawNotes.forEach((note, index) => {
    if (typeof note !== 'string' || note.trim() === '') {
      addIssue(issues, file, `${location}[${index}]`, 'must be a non-empty string');
      return;
    }
    notes.push(note.trim());
  });
  return notes;
}

function sourceEntries(rawSources, issues, file, location) {
  if (rawSources === undefined || rawSources === null) return [];
  if (Array.isArray(rawSources)) {
    return rawSources.map((source, index) => {
      const itemLocation = `${location}[${index}]`;
      if (!isRecord(source)) {
        addIssue(issues, file, itemLocation, 'must be an object');
        return ['', {}];
      }
      return [requireString(source.id, issues, file, `${itemLocation}.id`), source];
    });
  }
  if (isRecord(rawSources)) return Object.entries(rawSources);
  addIssue(issues, file, location, 'must be an object or an array');
  return [];
}

function normalizeCheckedAt(value, issues, file, location) {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string') {
    addIssue(issues, file, location, 'must be an ISO date string');
    return null;
  }
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const parsed = new Date(dateOnly ? `${value}T00:00:00.000Z` : value);
  if (Number.isNaN(parsed.valueOf())) {
    addIssue(issues, file, location, 'must be a valid ISO date string');
    return null;
  }
  return parsed.toISOString();
}

function normalizeSource(localId, rawSource, options) {
  const {entityId, issues, file, location} = options;
  if (!isRecord(rawSource)) {
    addIssue(issues, file, location, 'must be an object');
    return null;
  }
  const normalizedLocalId = requireString(localId, issues, file, `${location}.id`);
  if (!normalizedLocalId) return null;

  const title = requireString(
    rawSource.title ?? rawSource.sourceTitle,
    issues,
    file,
    `${location}.title`,
  );
  const url = requireString(rawSource.url ?? rawSource.sourceUrl, issues, file, `${location}.url`);
  if (url && !/^https?:\/\//i.test(url)) {
    addIssue(issues, file, `${location}.url`, 'must use http:// or https://');
  }

  const sourceTypeValue = rawSource.sourceType ?? rawSource.type;
  let sourceType = null;
  if (sourceTypeValue !== undefined && sourceTypeValue !== null && sourceTypeValue !== '') {
    sourceType = requireString(sourceTypeValue, issues, file, `${location}.sourceType`);
    if (sourceType && !['official', 'community'].includes(sourceType)) {
      addIssue(issues, file, `${location}.sourceType`, 'must be "official" or "community"');
    }
  }

  const checkedAt = normalizeCheckedAt(rawSource.checkedAt, issues, file, `${location}.checkedAt`);
  const id = `${entityId}::${normalizedLocalId}`;
  const normalized = {
    id,
    localId: normalizedLocalId,
    entityId,
    title,
    url,
    sourceType,
    confidence:
      rawSource.confidence === undefined || rawSource.confidence === null
        ? null
        : String(rawSource.confidence),
    checkedAt,
    notes: normalizeNotes(rawSource.notes, {issues, file, location: `${location}.notes`}),
  };

  for (const optionalField of ['evidenceLocator']) {
    const value = rawSource[optionalField];
    if (value !== undefined && value !== null && value !== '') normalized[optionalField] = String(value);
  }
  return normalized;
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort(compareStrings)
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

function registerSources(rawSources, options) {
  const {entityId, issues, file, location, sourceRegistry} = options;
  for (const [localId, rawSource] of sourceEntries(rawSources, issues, file, location)) {
    const source = normalizeSource(localId, rawSource, {
      entityId,
      issues,
      file,
      location: `${location}.${localId || '?'}`,
    });
    if (!source) continue;
    const existing = sourceRegistry.get(source.localId);
    if (existing && stableStringify(existing) !== stableStringify(source)) {
      addIssue(
        issues,
        file,
        `${location}.${source.localId}`,
        `source ID "${source.localId}" is defined more than once with different values`,
      );
      continue;
    }
    sourceRegistry.set(source.localId, source);
  }
}

function calculatePrimaryRatio(point) {
  if (point.applicants !== null && point.admitted !== null && point.admitted > 0) {
    return {primaryRatio: point.applicants / point.admitted, primaryRatioBasis: 'applicants/admitted'};
  }
  if (point.examinees !== null && point.admitted !== null && point.admitted > 0) {
    return {primaryRatio: point.examinees / point.admitted, primaryRatioBasis: 'examinees/admitted'};
  }
  if (point.reportedRatio !== null) {
    return {primaryRatio: point.reportedRatio, primaryRatioBasis: 'reported'};
  }
  return {primaryRatio: null, primaryRatioBasis: null};
}

function normalizeSeries(rawSeries, options) {
  const {entityId, sourceRegistry, issues, file, seriesIndex} = options;
  const location = `series[${seriesIndex}]`;
  if (!isRecord(rawSeries)) {
    addIssue(issues, file, location, 'must be an object');
    return null;
  }

  registerSources(rawSeries.sources, {
    entityId,
    issues,
    file,
    location: `${location}.sources`,
    sourceRegistry,
  });

  const id = requireString(rawSeries.id, issues, file, `${location}.id`);
  const label = requireString(rawSeries.label, issues, file, `${location}.label`);
  const sourceType = requireString(rawSeries.sourceType, issues, file, `${location}.sourceType`);
  if (sourceType && !['official', 'community'].includes(sourceType)) {
    addIssue(issues, file, `${location}.sourceType`, 'must be "official" or "community"');
  }
  const confidence = requireString(rawSeries.confidence, issues, file, `${location}.confidence`);
  const degree = requireString(rawSeries.degree, issues, file, `${location}.degree`);
  const period = requireString(rawSeries.period, issues, file, `${location}.period`);
  const selection = requireString(rawSeries.selection, issues, file, `${location}.selection`);
  const seriesSourceIds = normalizeSourceIds(rawSeries.sourceIds, {
    issues,
    file,
    location: `${location}.sourceIds`,
  });
  const notes = normalizeNotes(rawSeries.notes, {
    issues,
    file,
    location: `${location}.notes`,
  });

  if (!Array.isArray(rawSeries.points)) {
    addIssue(issues, file, `${location}.points`, 'must be an array');
    return {
      id,
      label,
      sourceType,
      confidence,
      degree,
      period,
      selection,
      sourceIds: seriesSourceIds,
      notes,
      points: [],
      _location: location,
    };
  }

  const seenYears = new Set();
  const points = rawSeries.points.map((rawPoint, pointIndex) => {
    const pointLocation = `${location}.points[${pointIndex}]`;
    if (!isRecord(rawPoint)) {
      addIssue(issues, file, pointLocation, 'must be an object');
      return null;
    }

    const admissionYear = rawPoint.admissionYear;
    if (!Number.isInteger(admissionYear)) {
      addIssue(issues, file, `${pointLocation}.admissionYear`, 'must be an integer');
    } else if (seenYears.has(admissionYear)) {
      addIssue(
        issues,
        file,
        `${pointLocation}.admissionYear`,
        `duplicates admission year ${admissionYear} in series "${id}"`,
      );
    } else {
      seenYears.add(admissionYear);
    }

    const point = {admissionYear};
    for (const field of COUNT_FIELDS) {
      point[field] = normalizeNullableNumber(rawPoint[field], {
        issues,
        file,
        location: `${pointLocation}.${field}`,
        integer: true,
      });
    }
    point.reportedRatio = normalizeNullableNumber(rawPoint.reportedRatio, {
      issues,
      file,
      location: `${pointLocation}.reportedRatio`,
    });

    const localSourceIds = normalizeSourceIds(rawPoint.sourceIds, {
      issues,
      file,
      location: `${pointLocation}.sourceIds`,
      required: true,
    });
    point.sourceIds = localSourceIds;
    point.notes = normalizeNotes(rawPoint.notes, {
      issues,
      file,
      location: `${pointLocation}.notes`,
    });
    Object.assign(point, calculatePrimaryRatio(point));
    return {...point, _location: pointLocation};
  }).filter(Boolean);

  return {
    id,
    label,
    sourceType,
    confidence,
    degree,
    period,
    selection,
    sourceIds: seriesSourceIds,
    notes,
    points,
    _location: location,
  };
}

function namespaceAndValidateSourceIds(series, options) {
  const {entityId, sourceRegistry, issues, file} = options;
  function namespace(ids, location) {
    return ids.map((localId, index) => {
      const source = sourceRegistry.get(localId);
      if (!source) {
        addIssue(issues, file, `${location}[${index}]`, `references missing source "${localId}"`);
      } else {
        if (source.sourceType && source.sourceType !== series.sourceType) {
          addIssue(
            issues,
            file,
            `${location}[${index}]`,
            `source "${localId}" is ${source.sourceType} but the series is ${series.sourceType}`,
          );
        } else if (!source.sourceType) {
          source.sourceType = series.sourceType;
        }
        if (source.confidence && source.confidence !== series.confidence) {
          addIssue(
            issues,
            file,
            `${location}[${index}]`,
            `source "${localId}" has confidence "${source.confidence}" but the series uses "${series.confidence}"`,
          );
        } else if (!source.confidence) {
          source.confidence = series.confidence;
        }
      }
      return `${entityId}::${localId}`;
    });
  }

  series.sourceIds = namespace(series.sourceIds, `${series._location}.sourceIds`);
  series.points.forEach((point) => {
    point.sourceIds = namespace(point.sourceIds, `${point._location}.sourceIds`);
    delete point._location;
  });
  delete series._location;
}

function validateAndNormalizeFile(filePath, docsDir, issues) {
  const file = toPosixPath(path.relative(docsDir, filePath));
  const entityDirectory = path.dirname(filePath);
  const entityId = toPosixPath(path.relative(docsDir, entityDirectory));
  const raw = readJson(filePath, docsDir, issues);
  if (!isRecord(raw)) {
    if (raw !== null) addIssue(issues, file, '', 'top-level value must be an object');
    return null;
  }

  if (raw.schemaVersion !== 1) {
    addIssue(issues, file, 'schemaVersion', 'must equal 1');
  }
  const scope = requireString(raw.scope, issues, file, 'scope');
  if (scope && !VALID_SCOPES.has(scope)) {
    addIssue(
      issues,
      file,
      'scope',
      'must be one of "graduate_school_total", "program", "course", or "aggregate"',
    );
  }

  const categoryPath = path.join(entityDirectory, '_category_.json');
  let category = null;
  if (!fs.existsSync(categoryPath)) {
    addIssue(issues, file, '_category_.json', 'missing in the same directory');
  } else {
    category = readJson(categoryPath, docsDir, issues);
  }
  const slug = requireString(category?.link?.slug, issues, file, '_category_.json.link.slug');
  if (slug && !slug.startsWith('/')) {
    addIssue(issues, file, '_category_.json.link.slug', 'must start with "/"');
  }

  const sourceRegistry = new Map();
  registerSources(raw.sources, {
    entityId,
    issues,
    file,
    location: 'sources',
    sourceRegistry,
  });

  if (!Array.isArray(raw.series)) {
    addIssue(issues, file, 'series', 'must be an array');
    return {
      file,
      entityId,
      label: typeof category?.label === 'string' ? category.label : '',
      slug,
      scope,
      series: [],
      sources: sourceRegistry,
    };
  }

  const seenSeriesIds = new Map();
  const series = raw.series
    .map((item, seriesIndex) => {
      const normalized = normalizeSeries(item, {
        entityId,
        sourceRegistry,
        issues,
        file,
        seriesIndex,
      });
      if (!normalized) return null;
      if (normalized.id) {
        if (seenSeriesIds.has(normalized.id)) {
          addIssue(
            issues,
            file,
            `series[${seriesIndex}].id`,
            `duplicates series ID "${normalized.id}" (first used at series[${seenSeriesIds.get(normalized.id)}])`,
          );
        } else {
          seenSeriesIds.set(normalized.id, seriesIndex);
        }
      }
      return normalized;
    })
    .filter(Boolean);

  series.forEach((item) => namespaceAndValidateSourceIds(item, {
    entityId,
    sourceRegistry,
    issues,
    file,
  }));

  return {
    file,
    entityId,
    label: typeof category?.label === 'string' ? category.label : '',
    slug,
    scope,
    series,
    sources: sourceRegistry,
  };
}

function normalizeGeneratedAt(sources) {
  const checkedDates = sources
    .map((source) => source.checkedAt)
    .filter(Boolean)
    .map((value) => new Date(value).valueOf())
    .filter(Number.isFinite);
  if (checkedDates.length === 0) return EMPTY_GENERATED_AT;
  return new Date(Math.max(...checkedDates)).toISOString();
}

function sortObject(entries) {
  return Object.fromEntries([...entries].sort(([left], [right]) => compareStrings(left, right)));
}

function buildAggregatePages(normalizedFiles, docsDir, slugOwners, issues) {
  const directEntityIds = new Set(normalizedFiles.map((item) => item.entityId));
  const childrenByParent = new Map();

  normalizedFiles.forEach((item) => {
    const parentEntityId = path.posix.dirname(item.entityId);
    if (
      !parentEntityId
      || parentEntityId === '.'
      || directEntityIds.has(parentEntityId)
    ) {
      return;
    }
    const children = childrenByParent.get(parentEntityId) || [];
    children.push(item.entityId);
    childrenByParent.set(parentEntityId, children);
  });

  const aggregateEntries = [];
  const aggregateSlugOwners = new Map();
  [...childrenByParent.entries()]
    .sort(([left], [right]) => compareStrings(left, right))
    .forEach(([parentEntityId, childEntityIds]) => {
      const categoryPath = path.join(
        docsDir,
        ...parentEntityId.split('/'),
        '_category_.json',
      );
      if (!fs.existsSync(categoryPath)) return;

      const categoryFile = toPosixPath(path.relative(docsDir, categoryPath));
      const category = readJson(categoryPath, docsDir, issues);
      if (!isRecord(category)) return;
      if (
        category?.link?.type !== 'generated-index'
        || typeof category.link.slug !== 'string'
        || !category.link.slug.trim()
      ) {
        return;
      }
      const slug = category.link.slug.trim();
      if (!slug.startsWith('/')) {
        addIssue(issues, categoryFile, 'link.slug', 'must start with "/"');
        return;
      }
      const conflictingOwner = slugOwners.get(slug) || aggregateSlugOwners.get(slug);
      if (conflictingOwner) {
        addIssue(
          issues,
          categoryFile,
          'link.slug',
          `aggregate slug "${slug}" conflicts with ${conflictingOwner}`,
        );
        return;
      }
      aggregateSlugOwners.set(slug, categoryFile);
      aggregateEntries.push([
        slug,
        {
          entityId: parentEntityId,
          label: typeof category.label === 'string' ? category.label : parentEntityId,
          childEntityIds: [...new Set(childEntityIds)].sort(compareStrings),
        },
      ]);
    });

  return aggregateEntries;
}

function generateAdmissionStats(options = {}) {
  const docsDir = path.resolve(options.docsDir || DEFAULT_DOCS_DIR);
  const issues = [];
  const normalizedFiles = findAdmissionFiles(docsDir)
    .map((filePath) => validateAndNormalizeFile(filePath, docsDir, issues))
    .filter(Boolean);

  const slugOwners = new Map();
  const entityOwners = new Map();
  for (const item of normalizedFiles) {
    if (entityOwners.has(item.entityId)) {
      addIssue(
        issues,
        item.file,
        '',
        `entity ID "${item.entityId}" conflicts with ${entityOwners.get(item.entityId)}`,
      );
    } else {
      entityOwners.set(item.entityId, item.file);
    }
    if (!item.slug) continue;
    if (slugOwners.has(item.slug)) {
      addIssue(
        issues,
        item.file,
        '_category_.json.link.slug',
        `slug "${item.slug}" conflicts with ${slugOwners.get(item.slug)}`,
      );
    } else {
      slugOwners.set(item.slug, item.file);
    }
  }

  const aggregatePagesBySlugEntries = buildAggregatePages(
    normalizedFiles,
    docsDir,
    slugOwners,
    issues,
  );

  if (issues.length > 0) throw new AdmissionStatsValidationError(issues);

  const pagesBySlugEntries = [];
  const statsByEntityEntries = [];
  const sourcesByIdEntries = [];

  normalizedFiles
    .sort((left, right) => compareStrings(left.entityId, right.entityId))
    .forEach((item) => {
      pagesBySlugEntries.push([item.slug, item.entityId]);
      const sortedSeries = [...item.series]
        .sort((left, right) => compareStrings(left.id, right.id))
        .map((series) => ({
          ...series,
          sourceIds: [...series.sourceIds].sort(compareStrings),
          points: [...series.points]
            .sort((left, right) => left.admissionYear - right.admissionYear)
            .map((point) => ({...point, sourceIds: [...point.sourceIds].sort(compareStrings)})),
        }));
      statsByEntityEntries.push([
        item.entityId,
        {
          entityId: item.entityId,
          slug: item.slug,
          label: item.label,
          scope: item.scope,
          series: sortedSeries,
        },
      ]);
      [...item.sources.values()]
        .sort((left, right) => compareStrings(left.id, right.id))
        .forEach((source) => sourcesByIdEntries.push([source.id, source]));
    });

  const allSources = sourcesByIdEntries.map(([, source]) => source);
  return {
    schemaVersion: 1,
    generatedAt: options.generatedAt || normalizeGeneratedAt(allSources),
    pagesBySlug: sortObject(pagesBySlugEntries),
    aggregatePagesBySlug: sortObject(aggregatePagesBySlugEntries),
    statsByEntity: sortObject(statsByEntityEntries),
    sourcesById: sortObject(sourcesByIdEntries),
  };
}

function serializeAdmissionStats(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

function writeGeneratedOutput(outputFile, content) {
  fs.mkdirSync(path.dirname(outputFile), {recursive: true});
  fs.writeFileSync(outputFile, content, 'utf8');
}

function checkGeneratedOutput(outputFile, content) {
  if (!fs.existsSync(outputFile)) return false;
  return fs.readFileSync(outputFile, 'utf8') === content;
}

function parseArguments(args) {
  const options = {check: false, docsDir: DEFAULT_DOCS_DIR, outputFile: DEFAULT_OUTPUT_FILE};
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '--check') {
      options.check = true;
    } else if (argument === '--docs-dir') {
      options.docsDir = path.resolve(args[index + 1] || '');
      index += 1;
    } else if (argument === '--output') {
      options.outputFile = path.resolve(args[index + 1] || '');
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }
  return options;
}

function runCli(args = process.argv.slice(2)) {
  const options = parseArguments(args);
  const generated = generateAdmissionStats({docsDir: options.docsDir});
  const content = serializeAdmissionStats(generated);

  if (options.check) {
    if (!checkGeneratedOutput(options.outputFile, content)) {
      console.error(
        `Admission statistics are out of date: ${toPosixPath(path.relative(REPO_ROOT, options.outputFile))}`,
      );
      return 1;
    }
    console.log(`Admission statistics are valid and up to date (${Object.keys(generated.statsByEntity).length} page(s)).`);
    return 0;
  }

  writeGeneratedOutput(options.outputFile, content);
  console.log(
    `Generated ${toPosixPath(path.relative(REPO_ROOT, options.outputFile))} for ${Object.keys(generated.statsByEntity).length} page(s).`,
  );
  return 0;
}

if (require.main === module) {
  try {
    process.exitCode = runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}

module.exports = {
  AdmissionStatsValidationError,
  calculatePrimaryRatio,
  checkGeneratedOutput,
  findAdmissionFiles,
  generateAdmissionStats,
  parseArguments,
  runCli,
  serializeAdmissionStats,
  writeGeneratedOutput,
};
