function normalizedText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function finiteNumber(value) {
  const number = Number(value);
  return value === null || value === undefined || value === '' || !Number.isFinite(number)
    ? null
    : number;
}

function ratioFamily(point) {
  const rawKind = normalizedText(point?.ratioKind || point?.primaryRatioBasis);
  if (rawKind.includes('examine') || rawKind.includes('受验')) {
    return 'examinees/admitted';
  }
  if (
    rawKind.includes('applicant')
    || rawKind.includes('application')
    || rawKind.includes('志愿')
  ) {
    return 'applicants/admitted';
  }
  if (rawKind === 'reported') return 'reported';

  const counts = point?.counts || {};
  if (finiteNumber(counts.applicants) !== null && finiteNumber(counts.admitted) !== null) {
    return 'applicants/admitted';
  }
  if (finiteNumber(counts.examinees) !== null && finiteNumber(counts.admitted) !== null) {
    return 'examinees/admitted';
  }
  return finiteNumber(point?.primaryRatio) !== null ? 'reported' : null;
}

function seriesEntityId(series, defaultEntityId) {
  return normalizedText(series?.originEntityId || defaultEntityId);
}

function semanticTypeKey(series, defaultEntityId) {
  return [
    seriesEntityId(series, defaultEntityId),
    normalizedText(series?.degree),
    normalizedText(series?.period),
    normalizedText(series?.selection),
  ].join('\u001f');
}

function explicitComparisonKey(series) {
  return normalizedText(series?.comparisonKey);
}

function chartablePointCount(series) {
  return (Array.isArray(series?.points) ? series.points : [])
    .filter((point) => finiteNumber(point?.primaryRatio) !== null)
    .length;
}

function periodPreference(period) {
  const value = normalizedText(period);
  if (value === 'summer' || value === 'general_exam') return 0;
  if (value === 'april_admission') return 1;
  if (value === 'annual') return 2;
  return 3;
}

function selectionPreference(selection) {
  const value = normalizedText(selection);
  if (value.includes('一般') || value.includes('general')) return 0;
  if (
    value.includes('合計')
    || value.includes('合计')
    || value.includes('全部')
    || value.includes('全类别')
    || value.includes('全選抜')
  ) return 1;
  if (value.includes('推薦') || value.includes('社会人')) return 3;
  return 2;
}

function comparePreferredSeries(left, right) {
  const periodDifference = periodPreference(left?.period) - periodPreference(right?.period);
  if (periodDifference !== 0) return periodDifference;

  const selectionDifference = selectionPreference(left?.selection)
    - selectionPreference(right?.selection);
  if (selectionDifference !== 0) return selectionDifference;

  const pointDifference = chartablePointCount(right) - chartablePointCount(left);
  if (pointDifference !== 0) return pointDifference;

  return String(left?.id || left?.key || '').localeCompare(
    String(right?.id || right?.key || ''),
  );
}

function seriesRatioFamily(series) {
  const families = (Array.isArray(series?.points) ? series.points : [])
    .map(ratioFamily)
    .filter(Boolean);
  return families[0] || null;
}

function seriesAreComparable(left, right, defaultEntityId) {
  if (seriesEntityId(left, defaultEntityId) !== seriesEntityId(right, defaultEntityId)) {
    return false;
  }

  const leftComparisonKey = explicitComparisonKey(left);
  const rightComparisonKey = explicitComparisonKey(right);
  if (leftComparisonKey || rightComparisonKey) {
    return Boolean(
      leftComparisonKey
      && rightComparisonKey
      && leftComparisonKey === rightComparisonKey,
    );
  }

  const leftFamily = seriesRatioFamily(left);
  const rightFamily = seriesRatioFamily(right);
  return semanticTypeKey(left, defaultEntityId) === semanticTypeKey(right, defaultEntityId)
    && leftFamily !== null
    && leftFamily === rightFamily;
}

function candidateKey(series, point, defaultEntityId) {
  return [
    seriesEntityId(series, defaultEntityId),
    normalizedText(series?.degree),
    String(point?.admissionYear ?? ''),
  ].join('\u001f');
}

function officialRatioIsComputed(point) {
  if (finiteNumber(point?.primaryRatio) === null) return false;
  const family = ratioFamily(point);
  const counts = point?.counts || {};
  const admitted = finiteNumber(counts.admitted);
  if (admitted === null || admitted <= 0) return false;
  if (family === 'applicants/admitted') {
    return finiteNumber(counts.applicants) !== null;
  }
  if (family === 'examinees/admitted') {
    return finiteNumber(counts.examinees) !== null;
  }
  return false;
}

function officialRatioIsNotApplicable(point) {
  const counts = point?.counts || {};
  return finiteNumber(counts.admitted) === 0
    && (
      finiteNumber(counts.applicants) !== null
      || finiteNumber(counts.examinees) !== null
    );
}

function ratioFamiliesMatch(communityPoint, officialPoint) {
  const communityFamily = ratioFamily(communityPoint);
  const officialFamily = ratioFamily(officialPoint);
  return communityFamily !== null && communityFamily === officialFamily;
}

function pointsShareExactRatioCounts(communityPoint, officialPoint) {
  if (!ratioFamiliesMatch(communityPoint, officialPoint)) return false;
  const officialFamily = ratioFamily(officialPoint);
  const numeratorField = officialFamily === 'applicants/admitted'
    ? 'applicants'
    : officialFamily === 'examinees/admitted'
      ? 'examinees'
      : null;
  if (!numeratorField) return false;

  const communityCounts = communityPoint?.counts || {};
  const officialCounts = officialPoint?.counts || {};
  const communityNumerator = finiteNumber(communityCounts[numeratorField]);
  const officialNumerator = finiteNumber(officialCounts[numeratorField]);
  const communityAdmitted = finiteNumber(communityCounts.admitted);
  const officialAdmitted = finiteNumber(officialCounts.admitted);
  return communityNumerator !== null
    && communityAdmitted !== null
    && communityNumerator === officialNumerator
    && communityAdmitted === officialAdmitted;
}

export function applyOfficialRatioPrecedence(seriesList, {defaultEntityId = ''} = {}) {
  const sourceSeries = Array.isArray(seriesList) ? seriesList : [];
  const officialByCandidate = new Map();

  sourceSeries
    .filter((series) => series.sourceType === 'official')
    .forEach((series) => {
      series.points.forEach((point) => {
        if (!officialRatioIsComputed(point)) return;
        const key = candidateKey(series, point, defaultEntityId);
        const candidates = officialByCandidate.get(key) || [];
        candidates.push({
          comparisonKey: explicitComparisonKey(series),
          point,
          typeKey: semanticTypeKey(series, defaultEntityId),
        });
        officialByCandidate.set(key, candidates);
      });
    });

  return sourceSeries
    .map((series) => {
      if (series.sourceType !== 'community') return series;
      const communityComparisonKey = explicitComparisonKey(series);
      const communityTypeKey = semanticTypeKey(series, defaultEntityId);
      const points = series.points.filter((point) => {
        if (finiteNumber(point.primaryRatio) === null) return true;
        const candidates = officialByCandidate.get(
          candidateKey(series, point, defaultEntityId),
        ) || [];
        return !candidates.some((candidate) => (
          (
            communityComparisonKey
            && communityComparisonKey === candidate.comparisonKey
          )
          || (
            candidate.typeKey === communityTypeKey
            && ratioFamiliesMatch(point, candidate.point)
          )
          || pointsShareExactRatioCounts(point, candidate.point)
        ));
      });
      return points.length === series.points.length ? series : {...series, points};
    })
    .filter((series) => series.points.length > 0);
}

export function trendPointSourceType(series, point) {
  if (point?.trendSourceType === 'community') return 'community';
  if (point?.trendSourceType === 'official') return 'official';
  return series?.sourceType === 'community' ? 'community' : 'official';
}

export function trendSegmentSourceType(series, fromPoint, toPoint) {
  return (
    trendPointSourceType(series, fromPoint) === 'community'
    || trendPointSourceType(series, toPoint) === 'community'
  ) ? 'community' : 'official';
}

/**
 * Build one chart line per child entity for aggregate pages.
 *
 * The preferred official series defines the comparison basis. Comparable
 * community points fill only years where that official series has no ratio.
 * Raw series remain untouched for evidence/source views.
 */
export function buildAggregateTrendSeries(seriesList, {defaultEntityId = ''} = {}) {
  const groups = new Map();

  (Array.isArray(seriesList) ? seriesList : []).forEach((series, index) => {
    const entityId = series?.originEntityId || defaultEntityId || `entity-${index}`;
    const group = groups.get(entityId) || [];
    group.push(series);
    groups.set(entityId, group);
  });

  return [...groups.entries()].flatMap(([entityId, entitySeries]) => {
    const supportingSeries = entitySeries.filter((series) => (
      chartablePointCount(series) > 0
      || (
        series.sourceType === 'official'
        && series.points.some(officialRatioIsNotApplicable)
      )
    ));
    const chartableSeries = supportingSeries
      .filter((series) => chartablePointCount(series) > 0);
    if (chartableSeries.length === 0) return [];

    const officialSeries = chartableSeries
      .filter((series) => series.sourceType === 'official')
      .sort(comparePreferredSeries);
    const communitySeries = chartableSeries
      .filter((series) => series.sourceType === 'community')
      .sort(comparePreferredSeries);
    const anchor = officialSeries[0] || communitySeries[0];
    if (!anchor) return [];

    const comparableSeries = supportingSeries
      .filter((series) => series === anchor || seriesAreComparable(
        anchor,
        series,
        defaultEntityId,
      ))
      .sort((left, right) => {
        if (left.sourceType !== right.sourceType) {
          return left.sourceType === 'official' ? -1 : 1;
        }
        return comparePreferredSeries(left, right);
      });
    const blockedCommunityYears = new Set(
      comparableSeries
        .filter((series) => series.sourceType === 'official')
        .flatMap((series) => series.points)
        .filter(officialRatioIsNotApplicable)
        .map((point) => point.admissionYear),
    );
    const pointByYear = new Map();

    comparableSeries.forEach((series) => {
      series.points.forEach((point) => {
        if (finiteNumber(point?.primaryRatio) === null) return;
        if (
          series.sourceType === 'community'
          && blockedCommunityYears.has(point.admissionYear)
        ) return;
        if (pointByYear.has(point.admissionYear)) return;
        pointByYear.set(point.admissionYear, {
          ...point,
          trendSourceType: series.sourceType,
          trendSourceSeriesId: series.id || series.key,
          trendSourceSeriesLabel: series.label,
          trendSourceSeriesNotes: series.notes,
        });
      });
    });

    const points = [...pointByYear.values()]
      .sort((left, right) => left.admissionYear - right.admissionYear);
    if (points.length === 0) return [];
    const sourceTypes = new Set(points.map((point) => point.trendSourceType));

    return [{
      ...anchor,
      id: `aggregate-trend-${entityId}`,
      key: `aggregate-trend::${entityId}`,
      label: anchor.originLabel || anchor.label,
      sourceType: sourceTypes.size > 1 ? 'mixed' : points[0]?.trendSourceType,
      points,
      trendSeriesKeys: comparableSeries.map((series) => series.key),
    }];
  });
}
