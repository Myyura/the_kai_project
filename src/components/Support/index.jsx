import React, {useEffect} from 'react';
import Link from '@site/src/rspress/Link';
import Layout from '@site/src/rspress/Layout';
import Heading from '@site/src/rspress/Heading';
import {
  FaArrowRight,
  FaBalanceScale,
  FaCoffee,
  FaDiscord,
  FaEdit,
  FaEnvelope,
  FaExternalLinkAlt,
  FaHandshake,
  FaHeart,
  FaLock,
  FaQq,
  FaShieldAlt,
  FaTag,
  FaUsers,
} from 'react-icons/fa';
import {useCurrentLanguage} from '../../context/LanguageContext';
import ContributorAcknowledgements from '../ContributorAcknowledgements';
import {
  getEnabledSupportEntries,
  getLocalizedSupportValue,
  supportConfig,
} from '../../data/supportConfig';
import {getSupportCopy} from './copy';
import styles from './styles.module.css';

const COMMUNITY_LINKS = {
  discord: 'https://discord.gg/VcUHXzB9Mk',
  qq: 'https://qm.qq.com/q/MVPd9wniQU',
};

const PRINCIPLE_ICONS = {
  openAccess: FaHeart,
  nonExclusive: FaBalanceScale,
  dataPrivacy: FaLock,
  commercialServices: FaShieldAlt,
};

function SmartLink({to, className, children}) {
  if (!to) return null;
  if (to.startsWith('/')) {
    return <Link to={to} className={className}>{children}</Link>;
  }
  return (
    <a className={className} href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function PartnerLogo({partner, language, className}) {
  const name = getLocalizedSupportValue(partner.name, language);
  const logoSource = partner.logo?.src;
  const darkLogoSource = partner.logo?.darkSrc;
  if (logoSource) {
    return (
      <span className={className}>
        <img
          className={styles.partnerLogoForLightTheme}
          src={logoSource}
          alt={getLocalizedSupportValue(partner.logo?.alt, language) || name}
          loading="lazy"
        />
        {darkLogoSource && (
          <img
            className={styles.partnerLogoForDarkTheme}
            src={darkLogoSource}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </span>
    );
  }
  return (
    <span className={className} aria-hidden="true">
      <strong>{Array.from(name).slice(0, 2).join('').toUpperCase() || 'K'}</strong>
    </span>
  );
}

function StrategicPartnerCard({partner, language, copy, anchorId}) {
  const name = getLocalizedSupportValue(partner.name, language);
  const description = getLocalizedSupportValue(partner.description, language);
  const kaiCommunityOffer = getLocalizedSupportValue(partner.kaiCommunityOffer, language);
  const primaryUrl = partner.detailsUrl || partner.website;
  const primaryLabel = partner.detailsUrl ? copy.learnMore : copy.visitWebsite;

  return (
    <article className={styles.strategicPartnerCard}>
      <div className={styles.partnerTopline}>
        <span>{copy.strategicTitle}</span>
        {partner.since && <small>{copy.since(partner.since)}</small>}
      </div>
      <div className={styles.strategicPartnerBody}>
        <PartnerLogo
          partner={partner}
          language={language}
          className={styles.strategicPartnerLogo}
        />
        <div className={styles.strategicPartnerCopy}>
          {anchorId ? (
            <Heading as="h3" id={anchorId}>{name}</Heading>
          ) : (
            <h3>{name}</h3>
          )}
          {description && <p>{description}</p>}
          {kaiCommunityOffer && (
            <p className={styles.partnerBenefit}>
              <FaTag aria-hidden="true" />
              <span>{kaiCommunityOffer}</span>
            </p>
          )}
          <SmartLink to={primaryUrl} className={styles.inlineAction}>
            {primaryLabel} <FaExternalLinkAlt aria-hidden="true" />
          </SmartLink>
        </div>
      </div>
    </article>
  );
}

function SustainingPartnerCard({partner, language, copy}) {
  const name = getLocalizedSupportValue(partner.name, language);
  const content = (
    <>
      <PartnerLogo
        partner={partner}
        language={language}
        className={styles.sustainingPartnerLogo}
      />
      <span>
        <strong>{name}</strong>
        {partner.since && <small>{copy.since(partner.since)}</small>}
      </span>
      {partner.website && <FaExternalLinkAlt aria-hidden="true" />}
    </>
  );

  if (!partner.website) {
    return <div className={styles.sustainingPartnerCard}>{content}</div>;
  }

  return (
    <SmartLink to={partner.website} className={styles.sustainingPartnerCard}>
      {content}
    </SmartLink>
  );
}

function SupportMethod({method, copy}) {
  const label = copy[method.platform] || method.platform;

  if (method.type === 'qr') {
    return (
      <article className={styles.qrMethod}>
        <div className={styles.qrImageWrap}>
          <img src={method.qrImage} alt={`${label} QR`} loading="lazy" />
        </div>
        <div>
          <strong>{label}</strong>
          {method.recipientHint && <small>{copy.recipient(method.recipientHint)}</small>}
        </div>
      </article>
    );
  }

  return (
    <a
      className={styles.linkMethod}
      href={method.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.methodIcon}><FaCoffee aria-hidden="true" /></span>
      <span>
        <strong>{label}</strong>
        <small>{copy.openMethod}</small>
      </span>
      <FaExternalLinkAlt aria-hidden="true" />
    </a>
  );
}

export default function SupportPage() {
  const language = useCurrentLanguage();
  const t = getSupportCopy(language);
  const strategicPartners = getEnabledSupportEntries(supportConfig.strategicPartners);
  const sustainingPartners = getEnabledSupportEntries(supportConfig.sustainingPartners);
  const supportMethods = getEnabledSupportEntries(supportConfig.supportMethods);

  useEffect(() => {
    if (!window.location.hash) return undefined;

    let anchorId;
    try {
      anchorId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return undefined;
    }

    let nestedFrame;
    const frame = window.requestAnimationFrame(() => {
      nestedFrame = window.requestAnimationFrame(() => {
        document.getElementById(anchorId)?.scrollIntoView({block: 'start'});
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (nestedFrame) window.cancelAnimationFrame(nestedFrame);
    };
  }, []);

  return (
    <Layout title={t.title} description={t.subtitle}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlowPrimary} aria-hidden="true" />
          <div className={styles.heroGlowGold} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{t.hero.eyebrow}</span>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#partners">
                {t.hero.primaryAction} <FaArrowRight aria-hidden="true" />
              </a>
              <a className={styles.secondaryButton} href="#principles">
                {t.hero.secondaryAction}
              </a>
            </div>
          </div>
          <ul className={styles.heroValues} aria-label={t.principles.title}>
            <li><FaHeart aria-hidden="true" />{t.hero.valueOpen}</li>
            <li><FaShieldAlt aria-hidden="true" />{t.hero.valueIndependent}</li>
            <li><FaUsers aria-hidden="true" />{t.hero.valueCommunity}</li>
          </ul>
        </section>

        <nav className={styles.sectionNav} aria-label={t.title}>
          <a href="#partners">{t.nav.partners}</a>
          <a href="#community-support">{t.nav.community}</a>
          <a href="#contributors">{t.nav.contributors}</a>
          <a href="#principles">{t.nav.principles}</a>
          <a href="#work-with-us">{t.nav.contact}</a>
        </nav>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>{t.partners.eyebrow}</span>
            <Heading as="h2" id="partners">{t.partners.title}</Heading>
            <p>{t.partners.description}</p>
          </div>

          <div className={styles.strategicPartnerGrid}>
            {strategicPartners.length > 0 ? strategicPartners.map((partner, index) => (
              <StrategicPartnerCard
                key={partner.id}
                partner={partner}
                language={language}
                copy={t.partners}
                anchorId={index === 0 ? 'long-term-partner' : undefined}
              />
            )) : (
              <article className={styles.partnerConfigurationState}>
                <span className={styles.configurationIcon}><FaHandshake aria-hidden="true" /></span>
                <div>
                  <h3>{t.partners.strategicEmptyTitle}</h3>
                  <p>{t.partners.strategicEmptyText}</p>
                </div>
              </article>
            )}
          </div>

          {sustainingPartners.length > 0 && (
            <div className={styles.sustainingPartners}>
              <h3>{t.partners.sustainingTitle}</h3>
              <div className={styles.sustainingGrid}>
                {sustainingPartners.map((partner) => (
                  <SustainingPartnerCard
                    key={partner.id}
                    partner={partner}
                    language={language}
                    copy={t.partners}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        <section className={`${styles.section} ${styles.communitySupportSection}`}>
          <div className={styles.communityPanel}>
            <aside className={styles.coffeePanel}>
              <div className={styles.coffeeHeading}>
                <span className={styles.coffeeIcon}><FaCoffee aria-hidden="true" /></span>
                <div>
                  <Heading as="h3" id="sponsor">{t.community.coffee}</Heading>
                  <p>{t.community.coffeeDescription}</p>
                </div>
              </div>
              {supportMethods.length > 0 ? (
                <div className={styles.supportMethods}>
                  {supportMethods.map((method) => (
                    <SupportMethod key={method.id} method={method} copy={t.community} />
                  ))}
                </div>
              ) : (
                <p className={styles.methodsComingSoon}>{t.community.methodsComingSoon}</p>
              )}
              <div className={styles.supportNotes}>
                <p>{t.community.voluntaryNote}</p>
                {supportMethods.length > 0 && <small>{t.community.paymentSafety}</small>}
              </div>
            </aside>

            <div className={styles.communityMain}>
              <span className={styles.eyebrow}>{t.community.eyebrow}</span>
              <Heading as="h2" id="community-support">{t.community.title}</Heading>
              <p>{t.community.description}</p>
              <div className={styles.communityActions}>
                <a href={COMMUNITY_LINKS.discord} target="_blank" rel="noopener noreferrer">
                  <FaDiscord aria-hidden="true" />{t.community.joinDiscord}
                </a>
                <a href={COMMUNITY_LINKS.qq} target="_blank" rel="noopener noreferrer">
                  <FaQq aria-hidden="true" />{t.community.joinQq}
                </a>
                <Link to="/me?tab=contribute">
                  <FaEdit aria-hidden="true" />{t.community.contribute}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>{t.contributors.eyebrow}</span>
            <Heading as="h2" id="contributors">{t.contributors.title}</Heading>
            <p>{t.contributors.description}</p>
          </div>
          <div className={styles.contributorSurface}>
            <ContributorAcknowledgements copy={t.acknowledgements} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>{t.principles.eyebrow}</span>
            <Heading as="h2" id="principles">{t.principles.title}</Heading>
            <p>{t.principles.description}</p>
          </div>
          <div className={styles.principlesGrid}>
            {t.principles.items.map((item, index) => {
              const Icon = PRINCIPLE_ICONS[item.id] || FaShieldAlt;
              return (
                <article key={item.id} className={styles.principleCard}>
                  <div className={styles.principleTopline}>
                    <span className={styles.principleIcon}><Icon aria-hidden="true" /></span>
                    <span className={styles.principleNumber}>0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.contactPanel}>
          <div>
            <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
            <Heading as="h2" id="work-with-us">{t.contact.title}</Heading>
            <p>{t.contact.description}</p>
          </div>
          <a className={styles.contactButton} href={`mailto:${supportConfig.contactEmail}`}>
            <FaEnvelope aria-hidden="true" />
            <span>
              <strong>{t.contact.action}</strong>
              <small>{supportConfig.contactEmail}</small>
            </span>
            <FaArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </Layout>
  );
}
