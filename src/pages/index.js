import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaArrowRight, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaGithub, FaBook, FaCheckCircle, FaSyncAlt, FaDiscord, FaQq } from 'react-icons/fa';
import React, { useEffect, useState, useMemo, memo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import LanguageSwitcher from '../components/LanguageSwitcher';
import {useUiText} from '../i18n/useUiText';
import { useAllProgress } from '../hooks/useProgress';
import { useSync } from '../hooks/useSync';
import { universities } from '../data/universities';
import siteStats from '../data/siteStats.json';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const useToggleState = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const toggle = (key) => setState(prev => ({ ...prev, [key]: !prev[key] }));
  const isOpen = (key) => !!state[key];
  return [isOpen, toggle];
};

const RecoveryRedirect = () => {
  useEffect(() => {
    const url = new URL(window.location.href);
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const looksLikeRecovery = url.searchParams.has('code')
      || hashParams.get('type') === 'recovery'
      || hashParams.has('access_token');

    if (looksLikeRecovery) {
      window.location.replace(`/reset-password${window.location.search}${window.location.hash}`);
    }
  }, []);

  return null;
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
const HeroSection = ({ t }) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient} />
      </div>
      
      <div className={styles.heroContent}>
        {/* 语言切换 */}
        <LanguageSwitcher
          className={styles.languageSwitcher}
          buttonClassName={styles.langBtn}
          activeButtonClassName={styles.langBtnActive}
          dividerClassName={styles.langDivider}
        />

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
          <Link className={styles.progressBtn} to="/me">
            <FaCheckCircle className={styles.btnIcon} />
            {t.ctaButtonProgress}
          </Link>
        </div>

        {/* 统计数据 */}
        <div className={styles.statsRow}>
          <StatCard number={String(siteStats.examDocuments)} label={t.statsExams} delay="0.2s" />
          <StatCard number={String(siteStats.universities)} label={t.statsUniversities} delay="0.3s" />
          <StatCard number="🔥" label={t.statsCommunity} delay="0.4s" />
        </div>

        {/* 进度追踪入口 - 融入 Hero 区底部 */}
        <BrowserOnly fallback={
          <Link to="/me" className={styles.heroProgressCallout}>
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

// 社区入口区域
const CommunitySection = memo(({ t }) => (
  <section className={styles.communitySection}>
    <div className="container">
      <div className={styles.communityCard}>
        <div className={styles.communityGlow} />
        <div className={styles.communityContent}>
          <span className={styles.communityEyebrow}>{t.communityEyebrow}</span>
          <Heading as="h2" className={styles.communityTitle}>
            {t.communityTitle}
          </Heading>
          <p className={styles.communityDescription}>{t.communityDescription}</p>
          <div className={styles.communityTopics}>
            {t.communityTopics.map((topic) => (
              <span key={topic} className={styles.communityTopic}>{topic}</span>
            ))}
          </div>
        </div>

        <div className={styles.communityActions}>
          <a
            className={styles.discordBtn}
            href="https://discord.gg/VcUHXzB9Mk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className={styles.communityBtnIcon} />
            <span>
              <strong>{t.communityDiscordCta}</strong>
              <small>{t.communityDiscordHint}</small>
            </span>
            <FaExternalLinkAlt className={styles.communityExternalIcon} />
          </a>
          <a
            className={styles.qqBtn}
            href="https://qm.qq.com/q/MVPd9wniQU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaQq className={styles.communityBtnIcon} />
            <span>
              <strong>{t.communityQqCta}</strong>
              <small>{t.communityQqHint}</small>
            </span>
            <FaExternalLinkAlt className={styles.communityExternalIcon} />
          </a>
        </div>
      </div>
    </div>
  </section>
));

// 大学列表区域 - 简化版
const UniversitySection = ({ t }) => {
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
            <option value="">{t.allUniversities}</option>
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
  const { isConfigured, isLoggedIn } = useSync();
  if (!isConfigured || !isLoggedIn) {
    return (
      <Link to="/me" className={styles.heroProgressCallout}>
        <FaCheckCircle className={styles.heroProgressIcon} />
        <span className={styles.heroProgressText}>{t.progressBannerTitle}</span>
        <FaArrowRight className={styles.heroProgressArrow} />
      </Link>
    );
  }
  return <HeroProgressCalloutStats t={t} />;
};

const HeroProgressCalloutStats = ({ t }) => {
  const { stats } = useAllProgress();
  const hasData = stats.total > 0;
  return (
    <Link to="/me" className={styles.heroProgressCallout}>
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
  const { isConfigured, isLoggedIn } = useSync();
  if (!isConfigured || !isLoggedIn) {
    return <ProgressBannerGuest t={t} />;
  }
  return <ProgressBannerStats t={t} />;
};

const ProgressBannerStats = ({ t }) => {
  const { stats } = useAllProgress();
  const hasData = stats.total > 0;
  return (
    <div className={styles.progressBannerInner}>
      <div className={styles.progressBannerLeft}>
        <div className={styles.progressBannerBadge}>✨ NEW</div>
        <h2 className={styles.progressBannerTitle}>{t.progressBannerTitle}</h2>
        <p className={styles.progressBannerDesc}>{t.progressBannerDesc}</p>
        <Link to="/me" className={styles.progressBannerBtn}>
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

const ProgressBannerGuest = ({ t }) => (
  <div className={styles.progressBannerInner}>
    <div className={styles.progressBannerLeft}>
      <div className={styles.progressBannerBadge}>LOGIN</div>
      <h2 className={styles.progressBannerTitle}>{t.progressBannerTitle}</h2>
      <p className={styles.progressBannerDesc}>{t.progressBannerDesc}</p>
      <Link to="/me" className={styles.progressBannerBtn}>
        {t.progressBannerCta}
        <FaArrowRight className={styles.btnIcon} />
      </Link>
    </div>
    <div className={styles.progressBannerRight}>
      <div className={styles.progressMiniEmpty}>
        <span className={styles.progressMiniEmptyIcon}>📋</span>
        <span className={styles.progressMiniLabel}>{t.progressBannerNoData}</span>
      </div>
    </div>
  </div>
);

const ProgressBannerSection = ({ t }) => (
  <section className={styles.progressBannerSection}>
    <div className="container">
      <BrowserOnly fallback={
        <div className={styles.progressBannerInner}>
          <div className={styles.progressBannerLeft}>
            <div className={styles.progressBannerBadge}>✨ NEW</div>
            <h2 className={styles.progressBannerTitle}>{t.progressBannerTitle}</h2>
            <p className={styles.progressBannerDesc}>{t.progressBannerDesc}</p>
            <Link to="/me" className={styles.progressBannerBtn}>
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
  const t = useUiText('home');
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={`${t.heroDescription} | 破除信息之壁 | 情報の壁を打ち破る`}
    >
      <BrowserOnly>{() => <RecoveryRedirect />}</BrowserOnly>
      <HomepageStructuredData />
      <main className={styles.mainContent}>
        <HeroSection t={t} />
        <HighlightsSection t={t} />
        <CommunitySection t={t} />
        <UniversitySection t={t} />
        <CtaSection t={t} />
      </main>
    </Layout>
  );
};

export default Home;
