import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaArrowRight, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaGithub, FaBook, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';
import React, { useState, useMemo, memo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useStoredLanguage } from '../context/LanguageContext';
import { useAllProgress, STATUS } from '../hooks/useProgress';
import { universities } from '../data/universities';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const translations = {
  zh: {
    heroTagline: '破除信息之壁',
    heroDescription: '开源的日本大学院入试过去问答案共享平台',
    viewPastExams: '浏览过去问',
    viewExperiences: '阅读经验贴',
    statsExams: '份过去问',
    statsUniversities: '所大学',
    statsCommunity: '活跃社区',
    highlightTitle: '为什么选择我们',
    highlights: [
      {
        title: '完全开源',
        subtitle: '透明无隐藏',
        description: '所有内容公开透明，无付费墙，无信息壁垒'
      },
      {
        title: '海量真题',
        subtitle: '覆盖主流院校',
        description: '汇集东大、京大、阪大等名校历年真题与解析'
      },
      {
        title: '社区驱动',
        subtitle: '共建共享',
        description: '加入QQ群 925154731，与考生和前辈交流备考经验'
      }
    ],
    universityTitle: '支持的大学',
    universityDescription: '快速访问各大学研究科官方信息',
    websiteLink: '官方链接',
    progressBannerTitle: '本地做题进度追踪',
    progressBannerDesc: '在每道题页面一键标记「已完成」或「待复习」，进度保存在本地浏览器，随时查看整体备考进度。',
    progressBannerCta: '查看进度总览',
    progressBannerCompleted: '已完成',
    progressBannerReviewing: '待复习',
    progressBannerNoData: '点击任意题目底部即可开始标记',
    ctaTitle: '开始你的备考之旅',
    ctaDescription: '加入数千名考生的行列，获取最全面的备考资源',
    ctaButtonContribute: '参与贡献',
    ctaButtonProgress: '我的进度',
    ctaButtonGithub: 'GitHub'
  },
  ja: {
    heroTagline: '情報の壁を打ち破る',
    heroDescription: 'オープンソースの大学院入試過去問解答共有プラットフォーム',
    viewPastExams: '過去問を見る',
    viewExperiences: '合格体験記',
    statsExams: '件の過去問',
    statsUniversities: '校の大学',
    statsCommunity: 'コミュニティ',
    highlightTitle: '選ばれる理由',
    highlights: [
      {
        title: '完全オープンソース',
        subtitle: '透明性を重視',
        description: 'すべてのコンテンツを無料で公開、隠れた料金なし'
      },
      {
        title: '豊富な過去問',
        subtitle: '主要大学をカバー',
        description: '東大・京大・阪大など有名大学の過去問と解答を収録'
      },
      {
        title: 'コミュニティ主導',
        subtitle: '共に作る',
        description: 'GitHub Discussionsで受験生同士の情報交換ができます'
      }
    ],
    universityTitle: '対応大学',
    universityDescription: '各大学研究科の公式情報へのリンク',
    websiteLink: '公式リンク',
    progressBannerTitle: '学習進捗トラッキング',
    progressBannerDesc: '各問題ページで「完了」「要復習」をワンクリックで記録。進捗はブラウザにローカル保存され、いつでも全体の学習状況を確認できます。',
    progressBannerCta: '進捗一覧を見る',
    progressBannerCompleted: '完了',
    progressBannerReviewing: '要復習',
    progressBannerNoData: '問題ページの下部でマークを開始できます',
    ctaTitle: '受験勉強を始めよう',
    ctaDescription: '数千人の受験生と一緒に、充実した受験対策を',
    ctaButtonContribute: '貢献する',
    ctaButtonProgress: '学習進捗',
    ctaButtonGithub: 'GitHub'
  }
};

const useToggleState = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const toggle = (key) => setState(prev => ({ ...prev, [key]: !prev[key] }));
  const isOpen = (key) => !!state[key];
  return [isOpen, toggle];
};

// 数据统计卡片
const StatCard = memo(({ number, label, delay }) => (
  <div className={styles.statCard} style={{ animationDelay: delay }}>
    <span className={styles.statNumber}>{number}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
));

// 特性高亮卡片
const HighlightCard = memo(({ title, subtitle, description, index }) => (
  <div className={styles.highlightCard} style={{ animationDelay: `${index * 0.1}s` }}>
    <div className={styles.highlightIndex}>0{index + 1}</div>
    <div className={styles.highlightContent}>
      <h3 className={styles.highlightTitle}>{title}</h3>
      <p className={styles.highlightSubtitle}>{subtitle}</p>
      <p className={styles.highlightDescription}>{description}</p>
    </div>
  </div>
));

// Hero区域 - 苹果风格大标题
const HeroSection = ({ language, toggleLanguage, t }) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient} />
      </div>
      
      <div className={styles.heroContent}>
        {/* 语言切换 */}
        <div className={styles.languageSwitcher}>
          <button 
            onClick={language === 'ja' ? toggleLanguage : undefined}
            className={clsx(styles.langBtn, language === 'zh' && styles.langBtnActive)}
          >
            中文
          </button>
          <span className={styles.langDivider}>/</span>
          <button 
            onClick={language === 'zh' ? toggleLanguage : undefined}
            className={clsx(styles.langBtn, language === 'ja' && styles.langBtnActive)}
          >
            日本語
          </button>
        </div>

        {/* 主标题 */}
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        
        {/* 标语 */}
        <p className={styles.heroTagline}>{t.heroTagline}</p>
        <p className={styles.heroDescription}>{t.heroDescription}</p>

        {/* CTA按钮 */}
        <div className={styles.heroCta}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            {t.viewPastExams}
            <FaArrowRight className={styles.btnIcon} />
          </Link>
          <Link className={styles.secondaryBtn} to="/blog">
            {t.viewExperiences}
          </Link>
          <Link className={styles.progressBtn} to="/progress">
            <FaCheckCircle className={styles.btnIcon} />
            {t.ctaButtonProgress}
          </Link>
        </div>

        {/* 统计数据 */}
        <div className={styles.statsRow}>
          <StatCard number="1000+" label={t.statsExams} delay="0.2s" />
          <StatCard number="15+" label={t.statsUniversities} delay="0.3s" />
          <StatCard number="🔥" label={t.statsCommunity} delay="0.4s" />
        </div>

        {/* 进度追踪入口 - 融入 Hero 区底部 */}
        <BrowserOnly fallback={
          <Link to="/progress" className={styles.heroProgressCallout}>
            <FaCheckCircle className={styles.heroProgressIcon} />
            <span className={styles.heroProgressText}>{t.progressBannerTitle}</span>
            <FaArrowRight className={styles.heroProgressArrow} />
          </Link>
        }>
          {() => <HeroProgressCallout t={t} />}
        </BrowserOnly>
      </div>
    </section>
  );
};

// 特性高亮区域
const HighlightsSection = memo(({ t }) => (
  <section className={styles.highlightsSection}>
    <div className="container">
      <Heading as="h2" className={styles.sectionTitle}>
        {t.highlightTitle}
      </Heading>
      <div className={styles.highlightsGrid}>
        {t.highlights.map((item, index) => (
          <HighlightCard key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  </section>
));

// 大学列表区域 - 简化版
const UniversitySection = ({ language, t }) => {
  const [isOpen, toggle] = useToggleState();
  const [selectedUniv, setSelectedUniv] = useState('');

  const filteredUniversities = useMemo(() => 
    selectedUniv ? universities.filter(u => u.id === selectedUniv) : universities,
    [selectedUniv]
  );

  return (
    <section className={styles.universitySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {t.universityTitle}
        </Heading>
        <p className={styles.sectionSubtitle}>{t.universityDescription}</p>

        {/* 筛选器 */}
        <div className={styles.filterBar}>
          <select
            value={selectedUniv}
            onChange={(e) => setSelectedUniv(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">{language === 'zh' ? '全部大学' : 'すべての大学'}</option>
            {universities.map(univ => (
              <option key={univ.id} value={univ.id}>{univ.name}</option>
            ))}
          </select>
        </div>

        {/* 大学网格 */}
        <div className={styles.universityGrid}>
          {filteredUniversities.map((univ) => (
            <div key={univ.id} className={styles.universityCard}>
              <div 
                className={styles.univHeader}
                onClick={() => toggle(univ.id)}
              >
                <div className={styles.univColorBar} style={{ backgroundColor: univ.color }} />
                <span className={styles.univName}>{univ.name}</span>
                <span className={styles.univToggle}>
                  {isOpen(univ.id) ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              
              {isOpen(univ.id) && (
                <div className={styles.deptList}>
                  {univ.departments.map((dept) =>
                    dept.websiteUrl ? (
                      <a 
                        key={dept.id}
                        href={dept.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.deptLink}
                      >
                        <span>{dept.name}</span>
                        <FaExternalLinkAlt className={styles.linkIcon} />
                      </a>
                    ) : (
                      <Link
                        key={dept.id}
                        to={`/docs/${univ.id}/${dept.id}`}
                        className={styles.deptLink}
                      >
                        <span>{dept.name}</span>
                        <FaBook className={styles.linkIcon} />
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero 区进度内联展示
const HeroProgressCallout = ({ t }) => {
  const { stats } = useAllProgress();
  const hasData = stats.total > 0;
  return (
    <Link to="/progress" className={styles.heroProgressCallout}>
      <FaCheckCircle className={styles.heroProgressIcon} />
      <span className={styles.heroProgressText}>{t.progressBannerTitle}</span>
      {hasData && (
        <span className={styles.heroProgressStats}>
          <span className={styles.heroProgressStatItem} style={{ color: '#10b981' }}>
            <FaCheckCircle style={{ marginRight: '0.2rem', fontSize: '0.85em' }} />{stats.completed}
          </span>
          <span className={styles.heroProgressStatItem} style={{ color: '#f59e0b' }}>
            <FaSyncAlt style={{ marginRight: '0.2rem', fontSize: '0.8em' }} />{stats.reviewing}
          </span>
          {stats.total > 0 && (
            <span className={styles.heroProgressBarWrap}>
              <span
                className={styles.heroProgressBarFill}
                style={{ width: `${Math.round((stats.completed / stats.total) * 100)}%` }}
              />
            </span>
          )}
        </span>
      )}
      <FaArrowRight className={styles.heroProgressArrow} />
    </Link>
  );
};

// 进度功能横幅区块
const ProgressBannerInner = ({ t }) => {
  const { stats } = useAllProgress();
  const hasData = stats.total > 0;
  return (
    <div className={styles.progressBannerInner}>
      <div className={styles.progressBannerLeft}>
        <div className={styles.progressBannerBadge}>✨ NEW</div>
        <h2 className={styles.progressBannerTitle}>{t.progressBannerTitle}</h2>
        <p className={styles.progressBannerDesc}>{t.progressBannerDesc}</p>
        <Link to="/progress" className={styles.progressBannerBtn}>
          {t.progressBannerCta}
          <FaArrowRight className={styles.btnIcon} />
        </Link>
      </div>
      <div className={styles.progressBannerRight}>
        {hasData ? (
          <>
            <div className={styles.progressMiniCard}>
              <FaCheckCircle className={styles.progressMiniIcon} style={{ color: '#10b981' }} />
              <span className={styles.progressMiniNum}>{stats.completed}</span>
              <span className={styles.progressMiniLabel}>{t.progressBannerCompleted}</span>
            </div>
            <div className={styles.progressMiniCard}>
              <FaSyncAlt className={styles.progressMiniIcon} style={{ color: '#f59e0b' }} />
              <span className={styles.progressMiniNum}>{stats.reviewing}</span>
              <span className={styles.progressMiniLabel}>{t.progressBannerReviewing}</span>
            </div>
            <div className={styles.progressMiniTotal}>
              <span className={styles.progressMiniTotalNum}>{stats.total}</span>
              <span className={styles.progressMiniLabel}>Total</span>
              <div className={styles.progressMiniBar}>
                <div
                  className={styles.progressMiniBarFill}
                  style={{ width: `${Math.round((stats.completed / stats.total) * 100)}%` }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.progressMiniEmpty}>
            <span className={styles.progressMiniEmptyIcon}>📋</span>
            <span className={styles.progressMiniLabel}>{t.progressBannerNoData}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgressBannerSection = ({ t }) => (
  <section className={styles.progressBannerSection}>
    <div className="container">
      <BrowserOnly fallback={
        <div className={styles.progressBannerInner}>
          <div className={styles.progressBannerLeft}>
            <div className={styles.progressBannerBadge}>✨ NEW</div>
            <h2 className={styles.progressBannerTitle}>{t.progressBannerTitle}</h2>
            <p className={styles.progressBannerDesc}>{t.progressBannerDesc}</p>
            <Link to="/progress" className={styles.progressBannerBtn}>
              {t.progressBannerCta}
              <FaArrowRight className={styles.btnIcon} />
            </Link>
          </div>
        </div>
      }>
        {() => <ProgressBannerInner t={t} />}
      </BrowserOnly>
    </div>
  </section>
);

// CTA区域 - 苹果风格
const CtaSection = memo(({ t }) => (
  <section className={styles.ctaSection}>
    <div className={styles.ctaInner}>
      <Heading as="h2" className={styles.ctaTitle}>
        {t.ctaTitle}
      </Heading>
      <p className={styles.ctaDescription}>{t.ctaDescription}</p>
      
      <div className={styles.ctaButtons}>
        <Link className={styles.ctaPrimaryBtn} to="/docs/intro">
          {t.viewPastExams}
          <FaArrowRight className={styles.btnIcon} />
        </Link>
        <a 
          className={styles.ctaSecondaryBtn} 
          href="https://github.com/Myyura/the_kai_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.btnIcon} />
          {t.ctaButtonGithub}
        </a>
      </div>
    </div>
  </section>
));

const Home = () => {
  const [language, toggleLanguage] = useStoredLanguage();
  const t = translations[language];
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="开源的日本大学院入试过去问解答共享平台，破除信息之壁 | 大学院入試過去問のオープンソース解答共有プラットフォーム"
    >
      <HomepageStructuredData />
      <main className={styles.mainContent}>
        <HeroSection language={language} toggleLanguage={toggleLanguage} t={t} />
        <HighlightsSection t={t} />
        <UniversitySection language={language} t={t} />
        <CtaSection t={t} />
      </main>
    </Layout>
  );
};

export default Home;
