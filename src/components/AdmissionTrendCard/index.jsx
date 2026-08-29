import React, {useEffect, useId, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {FaEdit} from 'react-icons/fa';
import admissionStats from '@site/src/data/admissionStats.generated.json';
import {useAuth} from '@site/src/hooks/useAuth';
import {saveAuthReturnIntent} from '@site/src/services/authReturn';

import styles from './styles.module.css';

const COUNT_FIELDS = [
  ['capacity', '招生名额'],
  ['applicants', '志愿者'],
  ['examinees', '受验者'],
  ['admitted', '合格者'],
  ['enrolled', '入学者'],
];

const RATIO_KIND_LABELS = {
  'applicants/admitted': '志愿 / 合格',
  applicants_admitted: '志愿 / 合格',
  applicantsPerAdmitted: '志愿 / 合格',
  applicant_to_admitted: '志愿 / 合格',
  application: '志愿 / 合格',
  'examinees/admitted': '受验 / 合格',
  examinees_admitted: '受验 / 合格',
  examineesPerAdmitted: '受验 / 合格',
  examinee_to_admitted: '受验 / 合格',
  examination: '受验 / 合格',
  reported: '来源报告倍率',
};

const SCOPE_LABELS = {
  graduate_school_total: '研究科合计',
  program: '专攻级',
  course: '课程级',
  aggregate: '上位合计',
};

const CHART = {
  width: 760,
  height: 320,
  left: 54,
  right: 22,
  top: 22,
  bottom: 48,
};

const AGGREGATE_COLOR_COUNT = 8;

function toFiniteNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeYear(value) {
  const year = toFiniteNumber(value);
  return year !== null && Number.isInteger(year) ? year : null;
}

function getCounts(point) {
  const nested = point?.counts && typeof point.counts === 'object'
    ? point.counts
    : {};
  return Object.fromEntries(
    COUNT_FIELDS.map(([field]) => [
      field,
      toFiniteNumber(nested[field] ?? point?.[field]),
    ]),
  );
}

function inferRatioKind(point, counts) {
  if (point?.ratioKind || point?.primaryRatioBasis) {
    return point.ratioKind || point.primaryRatioBasis;
  }
  if (counts.applicants !== null && counts.admitted !== null) {
    return 'applicants_admitted';
  }
  if (counts.examinees !== null && counts.admitted !== null) {
    return 'examinees_admitted';
  }
  return null;
}

function getPrimaryRatio(point, counts, ratioKind) {
  const explicit = toFiniteNumber(point?.primaryRatio);
  if (explicit !== null && explicit >= 0) return explicit;
  if (counts.admitted === null || counts.admitted <= 0) return null;

  const kind = String(ratioKind || '').toLowerCase();
  if (kind.includes('examine') || kind.includes('受验')) {
    return counts.examinees === null
      ? null
      : counts.examinees / counts.admitted;
  }
  if (kind.includes('applicant') || kind.includes('application') || kind.includes('志愿')) {
    return counts.applicants === null
      ? null
      : counts.applicants / counts.admitted;
  }
  if (counts.applicants !== null) return counts.applicants / counts.admitted;
  if (counts.examinees !== null) return counts.examinees / counts.admitted;
  return null;
}

function normalizeSourceIds(point, series) {
  const values = [
    ...(Array.isArray(series?.sourceIds) ? series.sourceIds : []),
    series?.sourceId,
    ...(Array.isArray(point?.sourceIds) ? point.sourceIds : []),
    point?.sourceId,
  ];
  return [...new Set(values.filter(Boolean).map(String))];
}

function hasCountData(counts) {
  return COUNT_FIELDS.some(([field]) => counts[field] !== null);
}

function normalizeSeries(rawSeries, index) {
  const sourceType = rawSeries?.sourceType === 'community'
    ? 'community'
    : 'official';
  const points = (Array.isArray(rawSeries?.points) ? rawSeries.points : [])
    .map((point) => {
      const admissionYear = normalizeYear(point?.admissionYear);
      const counts = getCounts(point);
      const ratioKind = inferRatioKind(point, counts);
      const primaryRatio = getPrimaryRatio(point, counts, ratioKind);
      return {
        ...point,
        admissionYear,
        counts,
        ratioKind,
        primaryRatio,
        sourceIds: normalizeSourceIds(point, rawSeries),
      };
    })
    .filter((point) => (
      point.admissionYear !== null
      && (point.primaryRatio !== null || hasCountData(point.counts))
    ))
    .sort((a, b) => a.admissionYear - b.admissionYear);

  return {
    ...rawSeries,
    key: rawSeries?.originEntityId
      ? `${rawSeries.originEntityId}::${rawSeries?.id || `${sourceType}-${index}`}`
      : `${rawSeries?.id || sourceType}-${index}`,
    label: rawSeries?.label || `系列 ${index + 1}`,
    sourceType,
    points,
  };
}

function resolveEntityId(slug) {
  const pagesBySlug = admissionStats?.pagesBySlug;
  if (!pagesBySlug || !Object.prototype.hasOwnProperty.call(pagesBySlug, slug)) {
    return null;
  }
  const pageEntry = pagesBySlug[slug];
  if (typeof pageEntry === 'string') return pageEntry;
  return pageEntry?.dataEntityId || pageEntry?.entityId || null;
}

function resolveAdmissionContext(slug) {
  const directEntityId = resolveEntityId(slug);
  const directEntity = directEntityId
    ? admissionStats?.statsByEntity?.[directEntityId]
    : null;
  if (directEntityId && directEntity) {
    return {
      entityId: directEntityId,
      entity: directEntity,
      isAggregate: false,
      childEntities: [],
    };
  }

  const aggregatePage = admissionStats?.aggregatePagesBySlug?.[slug];
  if (!aggregatePage || !Array.isArray(aggregatePage.childEntityIds)) return null;

  const childEntities = aggregatePage.childEntityIds
    .map((childEntityId, colorIndex) => {
      const child = admissionStats?.statsByEntity?.[childEntityId];
      return child
        ? {
          ...child,
          aggregateColorIndex: colorIndex % AGGREGATE_COLOR_COUNT,
        }
        : null;
    })
    .filter(Boolean);
  if (childEntities.length === 0) return null;

  return {
    entityId: aggregatePage.entityId,
    isAggregate: true,
    childEntities,
    entity: {
      entityId: aggregatePage.entityId,
      label: aggregatePage.label,
      slug,
      scope: 'aggregate',
      series: childEntities.flatMap((child) => (
        (Array.isArray(child.series) ? child.series : []).map((series) => ({
          ...series,
          originEntityId: child.entityId,
          originLabel: child.label,
          originSlug: child.slug,
          aggregateColorIndex: child.aggregateColorIndex,
        }))
      )),
    },
  };
}

function ratioKindLabel(kind) {
  if (!kind) return '倍率';
  return RATIO_KIND_LABELS[kind] || String(kind);
}

function formatRatio(value) {
  if (value === null) return '未公开';
  return Number(value).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

function formatPointRatio(point) {
  if (point.primaryRatio !== null) return formatRatio(point.primaryRatio);
  if (
    point.counts.admitted === 0
    && (point.counts.applicants !== null || point.counts.examinees !== null)
  ) {
    return '不适用';
  }
  return '未公开';
}

function formatCount(value) {
  if (value === null) return '未公开';
  return Number.isInteger(value)
    ? String(value)
    : Number(value).toFixed(1).replace(/\.0$/, '');
}

function formatTick(value) {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1).replace(/\.0$/, '');
}

function sourceTypeLabel(sourceType) {
  return sourceType === 'community' ? '民间数据' : '官方数据';
}

function seriesDisplayLabel(series) {
  return series.originLabel
    ? `${series.originLabel} · ${series.label}`
    : series.label;
}

function aggregateSeriesStyle(series, isAggregate) {
  if (!isAggregate || !Number.isInteger(series.aggregateColorIndex)) return undefined;
  return {
    '--admission-series-color': `var(--admission-entity-${series.aggregateColorIndex + 1})`,
  };
}

function confidenceLabel(confidence) {
  if (confidence === 'high') return '高可信度';
  if (confidence === 'medium') return '中可信度';
  if (confidence === 'low') return '低可信度';
  return null;
}

function niceUpperBound(maximum) {
  if (!Number.isFinite(maximum) || maximum <= 0) return 1;
  let step = 0.5;
  if (maximum > 3) step = 1;
  if (maximum > 7) step = 2;
  if (maximum > 14) step = 5;
  if (maximum > 35) step = 10;
  const upper = Math.ceil((maximum * 1.08) / step) * step;
  return Math.max(step, upper);
}

function shortLabel(value, length = 30) {
  const text = String(value || '');
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}

function notesText(...values) {
  const notes = values
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .filter((value) => typeof value === 'string' && value.trim())
    .map((value) => value.trim());
  return [...new Set(notes)].join('；');
}

function pointDescription(series, point) {
  const countText = COUNT_FIELDS
    .filter(([field]) => point.counts[field] !== null)
    .map(([field, label]) => `${label} ${formatCount(point.counts[field])}人`)
    .join('、');
  const zeroAdmissionDenominator = point.counts.admitted === 0
    && (point.counts.applicants !== null || point.counts.examinees !== null);
  const ratioText = point.primaryRatio === null
    ? (zeroAdmissionDenominator ? '合格者为 0，倍率不适用' : '倍率未公开')
    : `${ratioKindLabel(point.ratioKind)} ${formatRatio(point.primaryRatio)}倍`;
  const notes = notesText(series.notes, point.notes);
  return `${seriesDisplayLabel(series)}、${sourceTypeLabel(series.sourceType)}、${point.admissionYear}年度、${ratioText}${countText ? `、${countText}` : ''}${notes ? `、注记：${notes}` : ''}`;
}

function buildSegments(series, visibleYears, xForYear, yForRatio) {
  const pointByYear = new Map(
    series.points
      .filter((point) => point.primaryRatio !== null)
      .map((point) => [point.admissionYear, point]),
  );
  const segments = [];
  let current = [];
  let previousYear = null;

  visibleYears.forEach((year) => {
    const point = pointByYear.get(year);
    if (!point || (previousYear !== null && year - previousYear > 1)) {
      if (current.length) segments.push(current);
      current = [];
    }
    if (point) {
      current.push({
        point,
        x: xForYear(year),
        y: yForRatio(point.primaryRatio),
      });
      previousYear = year;
    } else {
      previousYear = null;
    }
  });
  if (current.length) segments.push(current);
  return segments;
}

function SourceList({sourceIds, sourcesById}) {
  const sources = sourceIds.map((id) => ({id, ...(sourcesById?.[id] || {})}));
  if (!sources.length) return null;

  return (
    <details className={styles.sources}>
      <summary>查看数据来源（{sources.length}）</summary>
      <ul>
        {sources.map((source) => {
          const title = source.title || source.sourceTitle || source.id;
          const type = source.sourceType === 'community' || source.type === 'community'
            ? 'community'
            : 'official';
          return (
            <li key={source.id}>
              <div className={styles.sourceTitleRow}>
                <span className={`${styles.sourceBadge} ${styles[type]}`}>
                  {sourceTypeLabel(type)}
                </span>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                ) : title}
              </div>
              {(confidenceLabel(source.confidence) || source.checkedAt) && (
                <div className={styles.sourceMeta}>
                  {[
                    confidenceLabel(source.confidence),
                    source.checkedAt ? `核对于 ${String(source.checkedAt).slice(0, 10)}` : null,
                  ].filter(Boolean).join(' · ')}
                </div>
              )}
              {source.evidenceLocator && (
                <div className={styles.sourceEvidence}>证据位置：{source.evidenceLocator}</div>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}

export default function AdmissionTrendCard({slug}) {
  const {isLoggedIn} = useAuth();
  const context = useMemo(() => resolveAdmissionContext(slug), [slug]);
  const entityId = context?.entityId;
  const entity = context?.entity;
  const isAggregate = Boolean(context?.isAggregate);
  const normalizedSeries = useMemo(
    () => (Array.isArray(entity?.series) ? entity.series : [])
      .map(normalizeSeries)
      .filter((series) => series.points.length > 0),
    [entity],
  );
  const displayedSeries = useMemo(
    () => normalizedSeries.filter((series) => (
      series.period !== 'winter'
      && (!isAggregate || series.points.some((point) => point.primaryRatio !== null))
    )),
    [isAggregate, normalizedSeries],
  );
  const [activeSeriesKeys, setActiveSeriesKeys] = useState(
    () => displayedSeries.map((series) => series.key),
  );
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const chartScrollerRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  const contributionUrl = entityId && !isAggregate
    ? `/me?tab=contribute&type=admission_data&entityId=${encodeURIComponent(entityId)}`
    : null;

  useEffect(() => {
    setActiveSeriesKeys(displayedSeries.map((series) => series.key));
    setHoveredPoint(null);
  }, [displayedSeries]);

  useEffect(() => {
    const scroller = chartScrollerRef.current;
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
  }, [entityId]);

  if (!context || !entityId || !entity || displayedSeries.length === 0) return null;

  const allYears = [...new Set(
    displayedSeries.flatMap((series) => (
      series.points.map((point) => point.admissionYear)
    )),
  )].sort((a, b) => a - b);
  const visibleYears = allYears.slice(-10);
  const visibleYearSet = new Set(visibleYears);
  const chartSeries = displayedSeries.filter((series) => (
    series.points.some((point) => (
      visibleYearSet.has(point.admissionYear) && point.primaryRatio !== null
    ))
  ));
  const aggregateLegendGroups = new Map();
  chartSeries.forEach((series) => {
    if (!series.originEntityId) return;
    const group = aggregateLegendGroups.get(series.originEntityId) || {
      originEntityId: series.originEntityId,
      originLabel: series.originLabel,
      aggregateColorIndex: series.aggregateColorIndex,
      series: [],
    };
    group.series.push(series);
    aggregateLegendGroups.set(series.originEntityId, group);
  });
  const aggregateLegendItems = [...aggregateLegendGroups.values()];
  const aggregateProgramCount = aggregateLegendItems.length;
  const activeSeries = chartSeries.filter((series) => (
    activeSeriesKeys.includes(series.key)
  ));
  const ratios = activeSeries.flatMap((series) => (
    series.points
      .filter((point) => visibleYearSet.has(point.admissionYear))
      .map((point) => point.primaryRatio)
      .filter((ratio) => ratio !== null)
  ));
  const ratioYearCount = new Set(activeSeries.flatMap((series) => (
    series.points
      .filter((point) => (
        visibleYearSet.has(point.admissionYear) && point.primaryRatio !== null
      ))
      .map((point) => point.admissionYear)
  ))).size;
  const upperBound = niceUpperBound(Math.max(0, ...ratios));
  const plotWidth = CHART.width - CHART.left - CHART.right;
  const plotHeight = CHART.height - CHART.top - CHART.bottom;
  const xForYear = (year) => {
    const index = visibleYears.indexOf(year);
    if (visibleYears.length <= 1) return CHART.left + plotWidth / 2;
    return CHART.left + (index / (visibleYears.length - 1)) * plotWidth;
  };
  const yForRatio = (ratio) => (
    CHART.top + plotHeight - (ratio / upperBound) * plotHeight
  );
  const yTicks = Array.from({length: 5}, (_, index) => (
    (upperBound / 4) * index
  ));

  const latestEntries = displayedSeries.map((series) => {
    const point = [...series.points]
      .reverse()
      .find((candidate) => visibleYearSet.has(candidate.admissionYear));
    return point ? {series, point} : null;
  }).filter(Boolean);

  const visibleSourceIds = [...new Set(
    displayedSeries.flatMap((series) => (
      series.points
        .filter((point) => visibleYearSet.has(point.admissionYear))
        .flatMap((point) => point.sourceIds)
    )),
  )];

  const toggleSeries = (seriesKey) => {
    setHoveredPoint(null);
    setActiveSeriesKeys((current) => (
      current.includes(seriesKey)
        ? current.filter((key) => key !== seriesKey)
        : [...current, seriesKey]
    ));
  };

  const toggleAggregateGroup = (group) => {
    setHoveredPoint(null);
    const groupKeys = new Set(group.series.map((series) => series.key));
    setActiveSeriesKeys((current) => {
      const allActive = [...groupKeys].every((key) => current.includes(key));
      return allActive
        ? current.filter((key) => !groupKeys.has(key))
        : [...new Set([...current, ...groupKeys])];
    });
  };

  return (
    <section
      className={`${styles.card} ${isAggregate ? styles.aggregateCard : ''}`}
      aria-labelledby={`${titleId}-heading`}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <p className={styles.eyebrow}>
            {isAggregate ? '招生数据 · 专攻对比' : '招生数据'}
          </p>
          <h2 id={`${titleId}-heading`}>
            {isAggregate ? '直属专攻入试趋势' : '入试趋势'}
          </h2>
        </div>
        <div className={styles.headerMeta}>
          {visibleYears.length > 0 && (
            <span className={styles.yearRange}>
              {visibleYears[0]}–{visibleYears[visibleYears.length - 1]}年度
            </span>
          )}
          {isAggregate && aggregateProgramCount > 0 ? (
            <span className={styles.scopeBadge}>
              {aggregateProgramCount} 个专攻
            </span>
          ) : (entity.scopeLabel || SCOPE_LABELS[entity.scope]) && (
            <span className={styles.scopeBadge}>
              {entity.scopeLabel || SCOPE_LABELS[entity.scope]}
            </span>
          )}
          {!isAggregate && contributionUrl && (
            <Link
              className={styles.contributionButton}
              to={contributionUrl}
              title="仅注册用户可提交"
              onClick={() => {
                if (!isLoggedIn) {
                  saveAuthReturnIntent({
                    returnTo: contributionUrl,
                    intent: 'admission-data',
                    docId: entityId,
                  });
                }
              }}>
              <FaEdit aria-hidden="true" />
              <span>补充 / 修正数据</span>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.legendRegion}>
        <div className={styles.legend} role="group" aria-label="切换趋势数据系列">
          {isAggregate ? aggregateLegendItems.map((group) => {
            const active = group.series.every((series) => (
              activeSeriesKeys.includes(series.key)
            ));
            return (
              <button
                key={group.originEntityId}
                type="button"
                className={`${styles.legendButton} ${!active ? styles.legendButtonInactive : ''}`}
                style={aggregateSeriesStyle(group, true)}
                aria-pressed={active}
                title={`${group.originLabel}（${group.series.length} 个数据系列）`}
                onClick={() => toggleAggregateGroup(group)}>
                <span className={styles.colorSwatch} aria-hidden="true" />
                <span>{group.originLabel}</span>
              </button>
            );
          }) : chartSeries.map((series) => {
            const active = activeSeriesKeys.includes(series.key);
            return (
              <button
                key={series.key}
                type="button"
                className={`${styles.legendButton} ${!active ? styles.legendButtonInactive : ''}`}
                aria-pressed={active}
                title={series.label}
                onClick={() => toggleSeries(series.key)}>
                <span className={`${styles.lineSample} ${styles[series.sourceType]}`} />
                <span>{series.label}</span>
                <small>{sourceTypeLabel(series.sourceType)}</small>
              </button>
            );
          })}
        </div>
        {isAggregate && (
          <div className={styles.sourceKey} aria-label="数据来源线型说明">
            <span><i className={`${styles.lineSample} ${styles.official}`} aria-hidden="true" />官方</span>
            <span><i className={`${styles.lineSample} ${styles.community}`} aria-hidden="true" />民间</span>
          </div>
        )}
      </div>

      {ratios.length > 0 && ratioYearCount > 1 ? (
        <div className={styles.chartScroller} ref={chartScrollerRef}>
          <svg
            className={styles.chart}
            viewBox={`0 0 ${CHART.width} ${CHART.height}`}
            role="img"
            aria-labelledby={`${titleId} ${descriptionId}`}>
            <title id={titleId}>
              {isAggregate ? '直属专攻历年入试倍率对比图' : '历年入试倍率趋势图'}
            </title>
            <desc id={descriptionId}>
              {isAggregate
                ? '不同颜色表示不同专攻，实线表示官方数据，虚线表示民间数据。可使用图例切换系列，并聚焦数据点查看明细。'
                : '蓝色实线表示官方数据，橙色虚线表示民间数据。可使用图例切换系列，并聚焦数据点查看明细。'}
            </desc>

            {yTicks.map((tick) => {
              const y = yForRatio(tick);
              return (
                <g key={tick}>
                  <line
                    className={styles.gridLine}
                    x1={CHART.left}
                    x2={CHART.width - CHART.right}
                    y1={y}
                    y2={y}
                  />
                  <text className={styles.axisLabel} x={CHART.left - 10} y={y + 4} textAnchor="end">
                    {formatTick(tick)}×
                  </text>
                </g>
              );
            })}

            {visibleYears.map((year) => (
              <g key={year}>
                <line
                  className={styles.tickLine}
                  x1={xForYear(year)}
                  x2={xForYear(year)}
                  y1={CHART.height - CHART.bottom}
                  y2={CHART.height - CHART.bottom + 5}
                />
                <text
                  className={styles.axisLabel}
                  x={xForYear(year)}
                  y={CHART.height - 20}
                  textAnchor="middle">
                  {year}
                </text>
              </g>
            ))}

            {activeSeries.map((series) => {
              const segments = buildSegments(series, visibleYears, xForYear, yForRatio);
              return (
                <g
                  className={styles[series.sourceType]}
                  style={aggregateSeriesStyle(series, isAggregate)}
                  key={series.key}>
                  {segments.map((segment, segmentIndex) => {
                    const path = segment.map(({x, y}, pointIndex) => (
                      `${pointIndex === 0 ? 'M' : 'L'} ${x} ${y}`
                    )).join(' ');
                    return (
                      <path
                        className={styles.seriesLine}
                        d={path}
                        key={`${series.key}-line-${segmentIndex}`}
                      />
                    );
                  })}
                  {segments.flat().map(({point, x, y}) => {
                    const description = pointDescription(series, point);
                    const sharedProps = {
                      className: styles.dataPoint,
                      tabIndex: 0,
                      'aria-label': description,
                      onMouseEnter: () => setHoveredPoint({series, point, x, y}),
                      onMouseLeave: () => setHoveredPoint(null),
                      onFocus: () => setHoveredPoint({series, point, x, y}),
                      onBlur: () => setHoveredPoint(null),
                    };
                    return series.sourceType === 'community' ? (
                      <rect
                        {...sharedProps}
                        key={`${series.key}-${point.admissionYear}`}
                        x={x - 4.5}
                        y={y - 4.5}
                        width="9"
                        height="9"
                        rx="1"
                        transform={`rotate(45 ${x} ${y})`}>
                        <title>{description}</title>
                      </rect>
                    ) : (
                      <circle
                        {...sharedProps}
                        key={`${series.key}-${point.admissionYear}`}
                        cx={x}
                        cy={y}
                        r="4.5">
                        <title>{description}</title>
                      </circle>
                    );
                  })}
                </g>
              );
            })}

            {hoveredPoint && (() => {
              const tooltipWidth = 232;
              const tooltipHeight = 80;
              const tooltipX = Math.min(
                CHART.width - CHART.right - tooltipWidth,
                Math.max(CHART.left, hoveredPoint.x - tooltipWidth / 2),
              );
              const tooltipY = hoveredPoint.y < CHART.top + 90
                ? hoveredPoint.y + 14
                : hoveredPoint.y - tooltipHeight - 14;
              const compactCounts = COUNT_FIELDS
                .filter(([field]) => hoveredPoint.point.counts[field] !== null)
                .slice(0, 3)
                .map(([field, label]) => `${label} ${formatCount(hoveredPoint.point.counts[field])}`)
                .join(' · ');
              const note = notesText(
                hoveredPoint.series.notes,
                hoveredPoint.point.notes,
              );
              return (
                <g className={styles.tooltip} aria-hidden="true">
                  <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height={tooltipHeight} rx="8" />
                  <text x={tooltipX + 12} y={tooltipY + 19}>
                    {shortLabel(seriesDisplayLabel(hoveredPoint.series))}
                  </text>
                  <text x={tooltipX + 12} y={tooltipY + 38}>
                    {hoveredPoint.point.admissionYear}年度 · {formatRatio(hoveredPoint.point.primaryRatio)}×
                  </text>
                  <text className={styles.tooltipMuted} x={tooltipX + 12} y={tooltipY + 55}>
                    {shortLabel(compactCounts || ratioKindLabel(hoveredPoint.point.ratioKind), 38)}
                  </text>
                  <text className={styles.tooltipMuted} x={tooltipX + 12} y={tooltipY + 70}>
                    {shortLabel(`${sourceTypeLabel(hoveredPoint.series.sourceType)}${note ? ` · ${note}` : ''}`, 38)}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>
      ) : ratios.length > 0 ? (
        <p className={styles.emptyNotice}>
          目前只有一个有倍率的年度；可以展开下方明细查看人数与口径。
        </p>
      ) : (
        <p className={styles.emptyNotice}>
          当前没有可绘制的倍率；可以展开下方明细查看已公开人数。
        </p>
      )}

      <details className={styles.dataDetails}>
        <summary>
          <span>查看最新数据与人数明细</span>
          <small>{latestEntries.length} 个系列</small>
        </summary>
        {latestEntries.length > 0 ? (
          <div className={styles.summaryGrid}>
            {latestEntries.map(({series, point}) => (
              <div className={styles.summaryItem} key={series.key}>
                <div className={styles.summaryItemHeader}>
                  <strong title={seriesDisplayLabel(series)}>
                    {seriesDisplayLabel(series)}
                  </strong>
                  <span className={`${styles.sourceBadge} ${styles[series.sourceType]}`}>
                    {sourceTypeLabel(series.sourceType)}
                  </span>
                </div>
                <div className={styles.ratioRow}>
                  <span className={styles.ratioValue}>
                    {formatPointRatio(point)}
                    {point.primaryRatio !== null && <small>×</small>}
                  </span>
                  <span>
                    {point.admissionYear}年度 · {ratioKindLabel(point.ratioKind)}
                  </span>
                </div>
                {notesText(series.notes, point.notes) && (
                  <p
                    className={styles.dataNote}
                    title={notesText(series.notes, point.notes)}>
                    {notesText(series.notes, point.notes)}
                  </p>
                )}
                <dl className={styles.counts}>
                  {COUNT_FIELDS.filter(([field]) => point.counts[field] !== null)
                    .map(([field, label]) => (
                      <div key={field}>
                        <dt>{label}</dt>
                        <dd>{formatCount(point.counts[field])}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyNotice}>当前没有可显示的数据明细。</p>
        )}
      </details>

      <SourceList sourceIds={visibleSourceIds} sourcesById={admissionStats?.sourcesById} />

      <div className={styles.srOnly}>
        <table>
          <caption>入试趋势图数据明细</caption>
          <thead>
            <tr>
              <th>系列</th>
              <th>来源</th>
              <th>年度</th>
              <th>倍率口径</th>
              <th>倍率</th>
              {COUNT_FIELDS.map(([field, label]) => <th key={field}>{label}</th>)}
            </tr>
          </thead>
          <tbody>
            {displayedSeries.flatMap((series) => series.points
              .filter((point) => visibleYearSet.has(point.admissionYear))
              .map((point) => (
                <tr key={`${series.key}-table-${point.admissionYear}`}>
                  <td>{seriesDisplayLabel(series)}</td>
                  <td>{sourceTypeLabel(series.sourceType)}</td>
                  <td>{point.admissionYear}</td>
                  <td>{ratioKindLabel(point.ratioKind)}</td>
                  <td>{formatPointRatio(point)}</td>
                  {COUNT_FIELDS.map(([field]) => (
                    <td key={field}>{formatCount(point.counts[field])}</td>
                  ))}
                </tr>
              ))) }
          </tbody>
        </table>
      </div>
    </section>
  );
}
