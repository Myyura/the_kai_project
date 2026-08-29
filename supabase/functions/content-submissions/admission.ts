export type AdmissionSourceType = 'official' | 'community';

export type AdmissionDataSubmission = {
  entityId: string;
  targetTitle: string;
  sourcePath: string;
  intent: 'addition' | 'correction';
  existingSeries: {
    id: string;
    label: string;
    sourceType: AdmissionSourceType | null;
  };
  series: {
    label: string;
    degree: string;
    period: string;
    selection: string;
  };
  admissionYear: number;
  values: {
    capacity: number | null;
    applicants: number | null;
    examinees: number | null;
    admitted: number | null;
    enrolled: number | null;
    reportedRatio: number | null;
    reportedRatioBasis: string;
  };
  source: {
    type: AdmissionSourceType;
    title: string;
    url: string;
    evidenceLocator: string;
  };
  sourceTypeMismatch: boolean;
  notes: string;
};

export type AdmissionValidationError = {
  code: string;
  message: string;
};

const COUNT_FIELDS = [
  'capacity',
  'applicants',
  'examinees',
  'admitted',
  'enrolled',
] as const;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

type OptionalNumberResult = { value: number | null } | { error: true };

function optionalNumber(value: unknown): OptionalNumberResult {
  if (value === null || value === undefined) return { value: null };
  if (typeof value === 'string' && value.trim() === '') return { value: null };
  if (typeof value !== 'number' && typeof value !== 'string') return { error: true };
  const parsed = Number(value);
  return Number.isFinite(parsed) ? { value: parsed } : { error: true };
}

function sourceTypeFrom(value: unknown): AdmissionSourceType | null {
  return value === 'official' || value === 'community' ? value : null;
}

function validEntityId(value: string) {
  return Boolean(
    value
    && /^[A-Za-z0-9._/-]+$/.test(value)
    && !value.split('/').some((segment) => !segment || segment === '.' || segment === '..'),
  );
}

function validationError(code: string, message: string): { error: AdmissionValidationError } {
  return { error: { code, message } };
}

/**
 * Normalize and validate the public admission-data request before it is signed.
 * Numeric form controls arrive as strings, so valid numeric strings are accepted
 * and converted to numbers. Empty strings remain explicit nulls.
 */
export function normalizeAdmissionDataRequest(
  body: Record<string, unknown>,
): { data: AdmissionDataSubmission } | { error: AdmissionValidationError } {
  const entityId = cleanText(body.entityId, 300).replace(/^\/+|\/+$/g, '');
  if (!validEntityId(entityId)) {
    return validationError('invalid_admission_entity', 'A valid admission-data entityId is required.');
  }

  const targetTitle = cleanText(body.title, 180);
  if (!targetTitle) {
    return validationError('missing_admission_title', 'The school, graduate school, or program title is required.');
  }

  const sourcePath = cleanText(body.sourcePath, 500).replace(/^@site\//, '').replace(/^\/+/, '');
  const expectedSourcePath = `docs/${entityId}/_admissions.json`;
  if (sourcePath !== expectedSourcePath) {
    return validationError(
      'invalid_admission_target',
      `sourcePath must be exactly ${expectedSourcePath}.`,
    );
  }

  const intent = cleanText(body.intent, 40);
  if (intent !== 'addition' && intent !== 'correction') {
    return validationError('invalid_admission_intent', 'intent must be addition or correction.');
  }

  const rawYear = optionalNumber(body.admissionYear);
  if (
    'error' in rawYear
    || rawYear.value === null
    || !Number.isInteger(rawYear.value)
    || rawYear.value < 1900
    || rawYear.value > 2200
  ) {
    return validationError(
      'invalid_admission_year',
      'admissionYear must be an integer between 1900 and 2200.',
    );
  }

  const degree = cleanText(body.degree, 80);
  const period = cleanText(body.period, 80);
  const selection = cleanText(body.selection, 180);
  const seriesLabel = cleanText(body.seriesLabel, 240);
  if (!degree || !period || !selection || !seriesLabel) {
    return validationError(
      'missing_admission_scope',
      'degree, period, selection, and seriesLabel are required.',
    );
  }

  const values: AdmissionDataSubmission['values'] = {
    capacity: null,
    applicants: null,
    examinees: null,
    admitted: null,
    enrolled: null,
    reportedRatio: null,
    reportedRatioBasis: cleanText(body.reportedRatioBasis, 240),
  };
  for (const field of COUNT_FIELDS) {
    const parsed = optionalNumber(body[field]);
    if (
      'error' in parsed
      || (parsed.value !== null && (!Number.isSafeInteger(parsed.value) || parsed.value < 0))
    ) {
      return validationError(
        'invalid_admission_count',
        `${field} must be a non-negative integer or blank.`,
      );
    }
    values[field] = parsed.value;
  }

  const ratio = optionalNumber(body.reportedRatio);
  if ('error' in ratio || (ratio.value !== null && ratio.value < 0)) {
    return validationError(
      'invalid_admission_ratio',
      'reportedRatio must be a finite non-negative number or blank.',
    );
  }
  values.reportedRatio = ratio.value;
  if (values.reportedRatio !== null && !values.reportedRatioBasis) {
    return validationError(
      'missing_admission_ratio_basis',
      'reportedRatioBasis is required when reportedRatio is provided.',
    );
  }
  if (!COUNT_FIELDS.some((field) => values[field] !== null) && values.reportedRatio === null) {
    return validationError(
      'missing_admission_values',
      'At least one exact count or reported ratio is required.',
    );
  }

  const sourceType = sourceTypeFrom(body.sourceType);
  if (!sourceType) {
    return validationError(
      'invalid_admission_source_type',
      'sourceType must be official or community.',
    );
  }
  const sourceTitle = cleanText(body.sourceTitle, 300);
  const rawSourceUrl = cleanText(body.sourceUrl, 2000);
  const evidenceLocator = cleanText(body.evidenceLocator, 1000);
  if (!sourceTitle || !rawSourceUrl || !evidenceLocator) {
    return validationError(
      'missing_admission_evidence',
      'sourceTitle, sourceUrl, and evidenceLocator are required.',
    );
  }

  let sourceUrl: URL;
  try {
    sourceUrl = new URL(rawSourceUrl);
  } catch {
    return validationError('invalid_admission_source_url', 'sourceUrl must be a valid HTTP(S) URL.');
  }
  if (sourceUrl.protocol !== 'https:' && sourceUrl.protocol !== 'http:') {
    return validationError('invalid_admission_source_url', 'sourceUrl must be a valid HTTP(S) URL.');
  }
  if (sourceUrl.username || sourceUrl.password) {
    return validationError(
      'invalid_admission_source_url',
      'sourceUrl must not contain embedded credentials because the review Issue is public.',
    );
  }

  const existingSeriesSourceTypeRaw = cleanText(body.existingSeriesSourceType, 40);
  const existingSeriesSourceType = existingSeriesSourceTypeRaw
    ? sourceTypeFrom(existingSeriesSourceTypeRaw)
    : null;
  if (existingSeriesSourceTypeRaw && !existingSeriesSourceType) {
    return validationError(
      'invalid_existing_series_source_type',
      'existingSeriesSourceType must be official, community, or blank.',
    );
  }

  return {
    data: {
      entityId,
      targetTitle,
      sourcePath,
      intent,
      existingSeries: {
        id: cleanText(body.existingSeriesId, 180),
        label: cleanText(body.existingSeriesLabel, 240),
        sourceType: existingSeriesSourceType,
      },
      series: {
        label: seriesLabel,
        degree,
        period,
        selection,
      },
      admissionYear: rawYear.value,
      values,
      source: {
        type: sourceType,
        title: sourceTitle,
        url: sourceUrl.toString(),
        evidenceLocator,
      },
      sourceTypeMismatch: Boolean(
        existingSeriesSourceType && existingSeriesSourceType !== sourceType
      ),
      notes: cleanText(body.notes, 4000),
    },
  };
}
