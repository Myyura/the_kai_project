import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import { FaArrowRight, FaChevronDown, FaExternalLinkAlt, FaCheckCircle, FaSyncAlt, FaDiscord, FaQq, FaHandshake, FaUsers, FaShieldAlt, FaCoffee } from 'react-icons/fa';
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
    <div className={styles.highlightIndex} aria-hidden="true">0{index + 1}</div>
    <div className={styles.highlightContent}>
      <h3 className={styles.highlightTitle}>{title}</h3>
      <p className={styles.highlightSubtitle}>{subtitle}</p>
      <p className={styles.highlightDescription}>{description}</p>
    </div>
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
          <Link className={styles.primaryBtn} to="/docs/intro">
            {t.viewPastExams}
            <FaArrowRight className={styles.btnIcon} aria-hidden="true" />
          </Link>
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
          <Link className={styles.supportLink} to="/support#long-term-partner">
            <FaCoffee aria-hidden="true" />
            {t.viewSupportMethods}
          </Link>
        </div>
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
                      className={featuredPartner.logo?.darkSrc ? styles.partnerLogoForLightTheme : undefined}
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

const normalizeUniversityQuery = (value) => value.normalize('NFKC').toLowerCase().trim();

// 题库与官网入口使用同一份自动生成的大学目录。
const UniversitySection = ({ t }) => {
  const [query, setQuery] = useState('');
  const normalizedQuery = normalizeUniversityQuery(query);
  const matches = (item) => normalizeUniversityQuery(`${item.name} ${item.id}`).includes(normalizedQuery);
  const filteredUniversities = universities.flatMap((university) => {
    const departments = matches(university)
      ? university.departments
      : university.departments.filter((department) => matches(department)
        || department.programs?.some(matches));
    return departments.length ? [{...university, departments}] : [];
  });

  return (
    <section id="universities" className={styles.universitySection} aria-labelledby="universities-title">
      <div className="container">
        <header className={styles.sectionHeading}>
          <Heading as="h2" id="universities-title" className={styles.sectionTitle}>
            {t.universityTitle}
          </Heading>
          <p className={styles.sectionSubtitle}>{t.universityDescription}</p>
        </header>

        <div className={styles.universityToolbar}>
          <div className={styles.universitySearch}>
            <label htmlFor="university-search">{t.universitySearchLabel}</label>
            <BrowseSearchField
              id="university-search"
              value={query}
              onChange={setQuery}
              label={t.universitySearchLabel}
              placeholder={t.universitySearchPlaceholder}
              resultsId="university-results"
              autoComplete="off"
            />
          </div>
          <p className={styles.universityResultCount} role="status">
            {t.universityResultCount.replace('{count}', String(filteredUniversities.length))}
          </p>
        </div>

        <div id="university-results" className={styles.universityGrid}>
          {filteredUniversities.map((univ) => (
            <article key={univ.id} className={styles.universityCard}>
              <Link className={styles.univArchiveLink} to={univ.archiveUrl}>
                <span className={styles.univColorBar} style={{ '--univ-color': univ.color }} aria-hidden="true" />
                <span className={styles.univHeading}>
                  <span className={styles.univName}>{univ.name}</span>
                  <span className={styles.univArchiveHint}>{t.viewPastExams}</span>
                </span>
                <FaArrowRight className={styles.linkIcon} aria-hidden="true" />
              </Link>
              <details className={styles.univDetails} open={Boolean(normalizedQuery)}>
                <summary className={styles.univSummary}>
                  <span>{t.departmentLinks} <span className={styles.departmentCount}>{univ.departments.length}</span></span>
                  <FaChevronDown className={styles.univToggle} aria-hidden="true" />
                </summary>
                <div className={styles.deptList}>
                  {univ.departments.map((dept) => (
                    <div key={dept.id} className={styles.deptRow}>
                      <Link to={dept.archiveUrl || univ.archiveUrl} className={styles.deptLink}>
                        <span>{dept.name}</span>
                        <FaArrowRight className={styles.linkIcon} aria-hidden="true" />
                      </Link>
                      {dept.websiteUrl && (
                        <a
                          href={dept.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.deptWebsiteLink}
                          aria-label={`${dept.name} · ${t.websiteLink} · ${t.opensNewTab}`}
                        >
                          {t.websiteLink}
                          <FaExternalLinkAlt aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
        {filteredUniversities.length === 0 && (
          <BrowseEmptyState
            message={t.universityNoResults}
            onReset={() => setQuery('')}
            focusTargetId="university-search"
          />
        )}
      </div>
    </section>
  );
};

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
