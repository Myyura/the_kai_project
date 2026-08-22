import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaArrowRight, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaBook, FaCheckCircle, FaSyncAlt, FaDiscord, FaQq, FaHandshake, FaUsers, FaShieldAlt, FaCoffee } from 'react-icons/fa';
import React, { useEffect, useState, memo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useUiText} from '../i18n/useUiText';
import { useAllProgress } from '../hooks/useProgress';
import { useAuth } from '../hooks/useAuth';
import { universities } from '../data/universities';
import siteStats from '../data/siteStats.json';
import {getEnabledSupportEntries, getLocalizedSupportValue, supportConfig} from '../data/supportConfig';
import {useCurrentLanguage} from '../context/LanguageContext';

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
    const type = url.searchParams.get('type') || hashParams.get('type');
    const looksLikeAuthCallback = url.searchParams.has('code')
      || url.searchParams.has('token_hash')
      || url.searchParams.has('error')
      || hashParams.has('token_hash')
      || hashParams.has('access_token')
      || hashParams.has('error');

    if (looksLikeAuthCallback) {
      const target = type === 'recovery' ? '/reset-password' : '/auth/callback';
      window.location.replace(`${target}${window.location.search}${window.location.hash}`);
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
          <Link className={styles.sponsorBtn} to="/support#long-term-partner">
            <FaCoffee aria-hidden="true" />
            {t.viewSupportMethods}
          </Link>
        </div>

        {/* 统计数据 */}
        <div className={styles.statsRow}>
          <StatCard number={String(siteStats.examDocuments)} label={t.statsExams} delay="0.2s" />
          <StatCard number={String(siteStats.universities)} label={t.statsUniversities} delay="0.3s" />
          <StatCard number={String(siteStats.programs)} label={t.statsPrograms} delay="0.4s" />
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
      <header className={styles.sectionHeading}>
        <Heading as="h2" className={styles.sectionTitle}>
          {t.highlightTitle}
        </Heading>
      </header>
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

// 社区共建入口：连接社区、贡献者与长期合作伙伴
const CommunitySupportSection = memo(({ t }) => {
  const language = useCurrentLanguage();
  const featuredPartner = getEnabledSupportEntries(supportConfig.strategicPartners)
    .find((partner) => partner.featuredOnHomepage);
  const partnerName = featuredPartner
    ? getLocalizedSupportValue(featuredPartner.name, language)
    : t.supportPartnerFallback;
  const partnerLogoAlt = featuredPartner
    ? getLocalizedSupportValue(featuredPartner.logo?.alt, language) || partnerName
    : '';
  const partnerShortDescription = featuredPartner
    ? getLocalizedSupportValue(featuredPartner.shortDescription, language)
    : '';

  return (
    <section id="community-support" className={styles.communitySupportSection}>
      <div className="container">
        <div className={styles.communitySupportCard}>
          <div className={styles.communitySupportIntro}>
            <span className={styles.communitySupportEyebrow}>{t.supportEyebrow}</span>
            <Heading as="h2" className={styles.communitySupportTitle}>
              {t.supportTitle}
            </Heading>
            <p className={styles.communitySupportDescription}>{t.supportDescription}</p>
            <Link className={styles.communitySupportCta} to="/support">
              {t.supportCta}
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.communitySupportDetails}>
            <Link className={styles.featuredPartnerTile} to="/support#partners">
              <span className={styles.featuredPartnerHeader}>
                <span className={styles.communitySupportIcon}><FaHandshake aria-hidden="true" /></span>
                <span className={styles.featuredPartnerHeading}>
                  <small>{t.supportPartnerLabel}</small>
                  <strong>{t.supportPartnerFallback}</strong>
                  <em>{t.supportPartnerFallbackHint}</em>
                </span>
                <FaArrowRight aria-hidden="true" />
              </span>
              {featuredPartner ? (
                <span className={styles.featuredPartnerIdentity}>
                  <span className={styles.featuredPartnerLogo}>
                    <img
                      className={styles.partnerLogoForLightTheme}
                      src={featuredPartner.logo?.src}
                      alt={partnerLogoAlt}
                      loading="lazy"
                    />
                    {featuredPartner.logo?.darkSrc && (
                      <img
                        className={styles.partnerLogoForDarkTheme}
                        src={featuredPartner.logo.darkSrc}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                    )}
                  </span>
                  <span className={styles.featuredPartnerName}>
                    <strong>{partnerName}</strong>
                    {partnerShortDescription && <em>{partnerShortDescription}</em>}
                  </span>
                </span>
              ) : (
                <em className={styles.featuredPartnerEmpty}>{t.supportPartnerFallbackHint}</em>
              )}
            </Link>
            <Link className={styles.communitySupportTile} to="/support#contributors">
              <span className={styles.communitySupportIcon}><FaUsers aria-hidden="true" /></span>
              <strong>{t.supportContributors}</strong>
              <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className={styles.communitySupportTile} to="/support#principles">
              <span className={styles.communitySupportIcon}><FaShieldAlt aria-hidden="true" /></span>
              <strong>{t.supportPrinciples}</strong>
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

// 大学列表区域 - 简化版
const UniversitySection = ({ t }) => {
  const [isOpen, toggle] = useToggleState();

  return (
    <section className={styles.universitySection}>
      <div className="container">
        <header className={styles.sectionHeading}>
          <Heading as="h2" className={styles.sectionTitle}>
            {t.universityTitle}
          </Heading>
          <p className={styles.sectionSubtitle}>{t.universityDescription}</p>
        </header>

        {/* 大学网格 */}
        <div className={styles.universityGrid}>
          {universities.map((univ) => (
            <div key={univ.id} className={styles.universityCard}>
              <button
                type="button"
                className={styles.univHeader}
                onClick={() => toggle(univ.id)}
                aria-expanded={isOpen(univ.id)}
                aria-controls={`university-${univ.id}-departments`}
              >
                <div className={styles.univColorBar} style={{ '--univ-color': univ.color }} />
                <span className={styles.univName}>{univ.name}</span>
                <span className={styles.univToggle}>
                  {isOpen(univ.id) ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              {isOpen(univ.id) && (
                <div id={`university-${univ.id}-departments`} className={styles.deptList}>
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
  const { isConfigured, isLoggedIn } = useAuth();
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
          <span className={styles.heroProgressStatItem} style={{ color: 'var(--kai-success)' }}>
            <FaCheckCircle style={{ marginRight: '0.2rem', fontSize: '0.85em' }} />{stats.completed}
          </span>
          <span className={styles.heroProgressStatItem} style={{ color: 'var(--kai-warning)' }}>
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
        <CommunitySupportSection t={t} />
        <UniversitySection t={t} />
      </main>
    </Layout>
  );
};

export default Home;
