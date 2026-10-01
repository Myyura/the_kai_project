import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import PartnerLogo from '../components/PartnerLogo';
import { FaArrowRight, FaExternalLinkAlt, FaCheckCircle, FaSyncAlt, FaDiscord, FaQq, FaHandshake, FaUsers, FaShieldAlt, FaCoffee } from 'react-icons/fa';
import React, { memo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useUiText} from '../i18n/useUiText';
import { useAllProgress } from '../hooks/useProgress';
import { useAuth } from '../hooks/useAuth';
import siteStats from '../data/siteStats.json';
import {getEnabledSupportEntries, getLocalizedSupportValue, supportConfig} from '../data/supportConfig';
import {useCurrentLanguage} from '../context/LanguageContext';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// 数据统计卡片
const StatCard = memo(({ number, label, delay }) => (
  <div className={styles.statCard} style={{ animationDelay: delay }}>
    <span className={styles.statNumber}>{number}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
));

// 首页主入口：题库、经验，以及个人进度。
const HeroSection = ({ t }) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} aria-hidden="true">
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
          <nav className={styles.examActions} aria-label={t.viewPastExams}>
            <Link className={styles.examAction} to="/docs/intro">
              {t.browseBySchool}
              <FaArrowRight className={styles.btnIcon} aria-hidden="true" />
            </Link>
            <Link className={styles.examAction} to="/docs/tags">
              {t.browseByTopic}
              <FaArrowRight className={styles.btnIcon} aria-hidden="true" />
            </Link>
          </nav>
          <Link className={styles.secondaryBtn} to="/blog">
            {t.viewExperiences}
          </Link>
        </div>

        {/* 统计数据 */}
        <div className={styles.statsRow}>
          <StatCard number={String(siteStats.examDocuments)} label={t.statsExams} delay="0.2s" />
          <StatCard number={String(siteStats.universities)} label={t.statsUniversities} delay="0.3s" />
          <StatCard number={String(siteStats.programs)} label={t.statsPrograms} delay="0.4s" />
        </div>

        <div className={styles.heroUtilities}>
          <BrowserOnly fallback={<ProgressCallout t={t} />}>
            {() => <HeroProgressCallout t={t} />}
          </BrowserOnly>
          <Link className={styles.supportLink} to="/support">
            <FaCoffee aria-hidden="true" />
            {t.viewSupportMethods}
          </Link>
        </div>
      </div>
    </section>
  );
};

// 用简短说明保留项目特点，不再重复展开三张宣传卡片。
const HighlightsSection = memo(({ t }) => (
  <section className={styles.highlightsSection} aria-label={t.highlightTitle}>
    <div className="container">
      <div className={styles.highlightsGrid}>
        {t.highlights.map((item) => (
          <div className={styles.highlightItem} key={item.title}>
            <Heading as="h2" className={styles.highlightTitle}>{item.title}</Heading>
            <p className={styles.highlightDescription}>{item.description}</p>
          </div>
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

// 社区共建入口：伙伴展示由同一份配置驱动。
const CommunitySupportSection = memo(({ t }) => {
  const language = useCurrentLanguage();
  const featuredPartners = getEnabledSupportEntries(supportConfig.strategicPartners)
    .filter((partner) => partner.featuredOnHomepage);

  return (
    <section id="community-support" className={styles.communitySupportSection} aria-labelledby="support-title">
      <div className="container">
        <div className={styles.communitySupportCard}>
          <div className={styles.communitySupportIntro}>
            <span className={styles.communitySupportEyebrow}>{t.supportEyebrow}</span>
            <Heading as="h2" id="support-title" className={styles.communitySupportTitle}>
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
                  <strong>{t.supportPartnerTitle}</strong>
                  <em>{t.supportPartnerHint}</em>
                </span>
                <FaArrowRight aria-hidden="true" />
              </span>
              {featuredPartners.map((partner) => (
                <span key={partner.id} className={styles.featuredPartnerIdentity}>
                  <PartnerLogo partner={partner} language={language} className={styles.featuredPartnerLogo} />
                  <span className={styles.featuredPartnerName}>
                    <strong>{getLocalizedSupportValue(partner.name, language)}</strong>
                    {partner.shortDescription && (
                      <em>{getLocalizedSupportValue(partner.shortDescription, language)}</em>
                    )}
                  </span>
                </span>
              ))}
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

// Hero 区进度内联展示
const HeroProgressCallout = ({ t }) => {
  const { isConfigured, isLoggedIn } = useAuth();
  if (!isConfigured || !isLoggedIn) {
    return <ProgressCallout t={t} />;
  }
  return <HeroProgressCalloutStats t={t} />;
};

const HeroProgressCalloutStats = ({ t }) => {
  const { stats } = useAllProgress();
  return <ProgressCallout t={t} stats={stats} />;
};

// SSR、未登录与已登录复用一个入口，避免展示和无障碍行为分叉。
const ProgressCallout = ({ t, stats }) => {
  const hasData = stats?.total > 0;
  return (
    <Link to="/me" className={styles.heroProgressCallout}>
      <FaCheckCircle className={styles.heroProgressIcon} aria-hidden="true" />
      <span className={styles.heroProgressText}>{t.progressBannerTitle}</span>
      {hasData && (
        <span className={styles.heroProgressStats}>
          <span className={styles.heroProgressStatItem} style={{ color: 'var(--kai-success)' }}>
            <FaCheckCircle aria-hidden="true" /><span className="sr-only">{t.progressBannerCompleted}: </span>{stats.completed}
          </span>
          <span className={styles.heroProgressStatItem} style={{ color: 'var(--kai-warning)' }}>
            <FaSyncAlt aria-hidden="true" /><span className="sr-only">{t.progressBannerReviewing}: </span>{stats.reviewing}
          </span>
          <span className={styles.heroProgressBarWrap} aria-hidden="true">
            <span
              className={styles.heroProgressBarFill}
              style={{ width: `${Math.round((stats.completed / stats.total) * 100)}%` }}
            />
          </span>
        </span>
      )}
      <FaArrowRight className={styles.heroProgressArrow} aria-hidden="true" />
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
      <HomepageStructuredData />
      <main className={styles.mainContent}>
        <HeroSection t={t} />
        <HighlightsSection t={t} />
        <CommunitySection t={t} />
        <CommunitySupportSection t={t} />
      </main>
    </Layout>
  );
};

export default Home;
