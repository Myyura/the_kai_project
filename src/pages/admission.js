import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import { useStoredLanguage } from '@site/src/context/LanguageContext';
import { universities } from '@site/src/data/universities';
import { admissionData, examTypes, getYears, sortOptions } from '@site/src/data/admissionData';
import {
  FaFilter,
  FaSortAmountDown,
  FaUniversity,
  FaUsers,
  FaUserCheck,
  FaPercentage,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaChartBar,
  FaInfoCircle,
} from 'react-icons/fa';
import styles from './admission.module.css';

const T = {
  zh: {
    pageTitle: '大学院录取数据(数据收集中，目前非真实数据)',
    pageSubtitle: '汇总各大学研究科的入试报名人数、合格人数与合格率，助你把握考学形势',
    filterUniversity: '筛选大学',
    filterYear: '年度',
    filterType: '入试类型',
    sortBy: '排序方式',
    all: '全部',
    statsTotal: '数据条目',
    statsAvgRate: '平均合格率',
    statsTotalApplicants: '总报名人数',
    statsTotalAdmitted: '总合格人数',
    cardApplicants: '报名',
    cardAdmitted: '合格',
    cardRate: '合格率',
    cardYear: '年度',
    cardType: '类型',
    emptyTitle: '暂无匹配数据',
    emptyDesc: '请尝试调整筛选条件',
    rateHigh: '高竞争',
    rateMedium: '中等',
    rateLow: '相对容易',
    sourceNote: '数据来源：各大学官网公开的入试结果统计，仅供参考',
    compareTip: '点击卡片可对比不同研究科的数据',
  },
  ja: {
    pageTitle: '大学院入試データ（データ収集中のため、現時点では実際のデータではありません）',
    pageSubtitle: '各大学研究科の志願者数、合格者数、合格率を集計。受験情勢の把握に役立ちます',
    filterUniversity: '大学で絞り込み',
    filterYear: '年度',
    filterType: '入試区分',
    sortBy: '並び替え',
    all: 'すべて',
    statsTotal: 'データ件数',
    statsAvgRate: '平均合格率',
    statsTotalApplicants: '総志願者数',
    statsTotalAdmitted: '総合格者数',
    cardApplicants: '志願者',
    cardAdmitted: '合格者',
    cardRate: '合格率',
    cardYear: '年度',
    cardType: '区分',
    emptyTitle: '該当データがありません',
    emptyDesc: 'フィルター条件を調整してください',
    rateHigh: '高難易度',
    rateMedium: '普通',
    rateLow: '比較的易しい',
    sourceNote: 'データ出典：各大学ウェブサイト公開の入試結果統計（参考値）',
    compareTip: 'カードをクリックして研究科データを比較',
  },
};

const getRateLevel = (rate) => {
  if (rate < 25) return 'high';
  if (rate < 35) return 'medium';
  return 'low';
};

const getRateColor = (rate) => {
  if (rate < 25) return '#ef4444';
  if (rate < 35) return '#f59e0b';
  return '#10b981';
};

const getRateLabel = (rate, t) => {
  if (rate < 25) return t.rateHigh;
  if (rate < 35) return t.rateMedium;
  return t.rateLow;
};

export default function AdmissionPage() {
  const [language] = useStoredLanguage();
  const t = T[language] ?? T.zh;

  const [selectedUniv, setSelectedUniv] = useState('');
  const [selectedYear, setSelectedYear] = useState('全部');
  const [selectedType, setSelectedType] = useState('全部');
  const [sortBy, setSortBy] = useState('rate-desc');

  const years = useMemo(() => getYears(), []);

  const filteredData = useMemo(() => {
    let data = [...admissionData];

    if (selectedUniv) {
      data = data.filter((d) => d.universityId === selectedUniv);
    }
    if (selectedYear !== '全部') {
      data = data.filter((d) => d.year === parseInt(selectedYear));
    }
    if (selectedType !== '全部') {
      data = data.filter((d) => d.type === selectedType);
    }

    switch (sortBy) {
      case 'rate-desc':
        data.sort((a, b) => b.rate - a.rate);
        break;
      case 'rate-asc':
        data.sort((a, b) => a.rate - b.rate);
        break;
      case 'applicants-desc':
        data.sort((a, b) => b.applicants - a.applicants);
        break;
      case 'applicants-asc':
        data.sort((a, b) => a.applicants - b.applicants);
        break;
      case 'admitted-desc':
        data.sort((a, b) => b.admitted - a.admitted);
        break;
      case 'name-asc':
        data.sort((a, b) => {
          const univA = universities.find((u) => u.id === a.universityId)?.name || '';
          const univB = universities.find((u) => u.id === b.universityId)?.name || '';
          return univA.localeCompare(univB, 'ja');
        });
        break;
      default:
        break;
    }

    return data;
  }, [selectedUniv, selectedYear, selectedType, sortBy]);

  const stats = useMemo(() => {
    if (filteredData.length === 0) {
      return { total: 0, avgRate: 0, totalApplicants: 0, totalAdmitted: 0 };
    }
    const totalApplicants = filteredData.reduce((sum, d) => sum + d.applicants, 0);
    const totalAdmitted = filteredData.reduce((sum, d) => sum + d.admitted, 0);
    const avgRate = totalApplicants > 0 ? ((totalAdmitted / totalApplicants) * 100) : 0;
    return {
      total: filteredData.length,
      avgRate: avgRate.toFixed(1),
      totalApplicants,
      totalAdmitted,
    };
  }, [filteredData]);

  return (
    <Layout title={t.pageTitle}>
      <div className={styles.page}>
        {/* Hero Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerIcon}>
              <FaGraduationCap />
            </div>
            <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
            <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
          </div>
        </header>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <FaChartBar className={styles.statIcon} />
            <span className={styles.statValue}>{stats.total}</span>
            <span className={styles.statLabel}>{t.statsTotal}</span>
          </div>
          <div className={styles.statItem}>
            <FaPercentage className={styles.statIcon} />
            <span className={styles.statValue}>{stats.avgRate}%</span>
            <span className={styles.statLabel}>{t.statsAvgRate}</span>
          </div>
          <div className={styles.statItem}>
            <FaUsers className={styles.statIcon} />
            <span className={styles.statValue}>{stats.totalApplicants}</span>
            <span className={styles.statLabel}>{t.statsTotalApplicants}</span>
          </div>
          <div className={styles.statItem}>
            <FaUserCheck className={styles.statIcon} />
            <span className={styles.statValue}>{stats.totalAdmitted}</span>
            <span className={styles.statLabel}>{t.statsTotalAdmitted}</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <FaUniversity className={styles.filterIcon} />
            <select
              className={styles.filterSelect}
              value={selectedUniv}
              onChange={(e) => setSelectedUniv(e.target.value)}
            >
              <option value="">{t.filterUniversity}</option>
              {universities.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <FaCalendarAlt className={styles.filterIcon} />
            <select
              className={styles.filterSelect}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y === '全部' ? t.all : `${y}年度`}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              className={styles.filterSelect}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {examTypes.map((type) => (
                <option key={type} value={type}>
                  {type === '全部' ? t.all : type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <FaSortAmountDown className={styles.filterIcon} />
            <select
              className={styles.filterSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {language === 'ja' ? opt.labelJa : opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Data Grid */}
        {filteredData.length > 0 ? (
          <div className={styles.dataGrid}>
            {filteredData.map((item) => {
              const univ = universities.find((u) => u.id === item.universityId);
              const dept = univ?.departments.find((d) => d.id === item.departmentId);
              const rateColor = getRateColor(item.rate);
              const rateLevel = getRateLevel(item.rate);

              return (
                <div key={item.id} className={styles.dataCard}>
                  {/* Color bar */}
                  <div
                    className={styles.cardColorBar}
                    style={{ backgroundColor: univ?.color || '#666' }}
                  />

                  <div className={styles.cardContent}>
                    {/* Header */}
                    <div className={styles.cardHeader}>
                      <div className={styles.cardHeaderTop}>
                        <span className={styles.univName}>{univ?.name}</span>
                        <span
                          className={`${styles.rateBadge} ${styles[`rateBadge${rateLevel}`]}`}
                          style={{ backgroundColor: `${rateColor}15`, color: rateColor }}
                        >
                          {getRateLabel(item.rate, t)}
                        </span>
                      </div>
                      <span className={styles.deptName}>{dept?.name}</span>
                    </div>

                    {/* Meta tags */}
                    <div className={styles.cardMeta}>
                      <span className={styles.metaTag}>
                        <FaCalendarAlt className={styles.metaIcon} />
                        {item.year}年度
                      </span>
                      <span className={styles.metaTag}>
                        <FaInfoCircle className={styles.metaIcon} />
                        {item.type}
                      </span>
                    </div>

                    {/* Data row */}
                    <div className={styles.dataRow}>
                      <div className={styles.dataItem}>
                        <span className={styles.dataItemLabel}>{t.cardApplicants}</span>
                        <span className={styles.dataItemValue}>{item.applicants}</span>
                      </div>
                      <div className={styles.dataDivider} />
                      <div className={styles.dataItem}>
                        <span className={styles.dataItemLabel}>{t.cardAdmitted}</span>
                        <span className={styles.dataItemValue} style={{ color: '#10b981' }}>
                          {item.admitted}
                        </span>
                      </div>
                      <div className={styles.dataDivider} />
                      <div className={styles.dataItem}>
                        <span className={styles.dataItemLabel}>{t.cardRate}</span>
                        <span
                          className={styles.dataItemValue}
                          style={{ color: rateColor }}
                        >
                          {item.rate}%
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className={styles.progressBarWrap}>
                      <div
                        className={styles.progressBarFill}
                        style={{
                          width: `${Math.min(item.rate, 100)}%`,
                          backgroundColor: rateColor,
                        }}
                      />
                    </div>

                    {/* Footer */}
                    <div className={styles.cardFooter}>
                      {item.note && (
                        <span className={styles.noteText}>{item.note}</span>
                      )}
                      {dept?.websiteUrl && (
                        <a
                          href={dept.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.officialLink}
                        >
                          <FaExternalLinkAlt className={styles.linkIcon} />
                          {language === 'ja' ? '公式サイト' : '官方网站'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FaUniversity className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>{t.emptyTitle}</h3>
            <p className={styles.emptyDesc}>{t.emptyDesc}</p>
          </div>
        )}

        {/* Source Note */}
        <div className={styles.sourceNote}>
          <FaInfoCircle className={styles.sourceIcon} />
          <span>{t.sourceNote}</span>
        </div>
      </div>
    </Layout>
  );
}
