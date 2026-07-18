import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  FaBookOpen,
  FaCamera,
  FaCode,
  FaEdit,
  FaExclamationTriangle,
  FaFileContract,
  FaLayerGroup,
  FaRoute,
  FaShieldAlt,
  FaStickyNote,
  FaTasks,
} from 'react-icons/fa';
import { useCurrentLanguage } from '../../context/LanguageContext';
import ContributorAcknowledgements from './ContributorAcknowledgements';
import { getLanguageContent } from './copy';
import styles from './styles.module.css';

const GUIDE_PRESENTATION = {
  browse: { icon: FaBookOpen },
  progress: { icon: FaTasks },
  notes: { icon: FaStickyNote },
  problemSets: { icon: FaLayerGroup, to: '/me?tab=sets' },
  share: { icon: FaCamera },
  contribute: { icon: FaEdit, to: '/me?tab=contribute' },
  developerApi: { icon: FaCode, to: '/me?tab=developer-api' },
};

const LEGAL_SECTION_ICONS = {
  copyright: FaFileContract,
  disclaimer: FaExclamationTriangle,
  privacy: FaShieldAlt,
};

export default function HelpAndNoticesPage() {
  const language = useCurrentLanguage();
  const t = getLanguageContent(language);

  return (
    <Layout title={t.title}>
      <main className={styles.shell}>
        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>The Kai Project</span>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaRoute />
            <h2>{t.guideTitle}</h2>
          </div>
          <div className={styles.guideGrid}>
            {t.guides.map((guide) => {
              const { icon: Icon, to } = GUIDE_PRESENTATION[guide.id];
              return (
                <article key={guide.id} className={styles.guideCard}>
                  <Icon className={styles.guideIcon} />
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                  {to && guide.linkLabel && (
                    <Link to={to} className={styles.inlineLink}>
                      {guide.linkLabel}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaEdit />
            <h2>{t.contributionTitle}</h2>
          </div>
          <ol className={styles.processList}>
            {t.contributionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <ContributorAcknowledgements copy={t.acknowledgements} />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaFileContract />
            <h2>{t.legalTitle}</h2>
          </div>
          <div className={styles.noticeStack}>
            {t.legalSections.map((section) => {
              const Icon = LEGAL_SECTION_ICONS[section.id];
              return (
                <article key={section.id} className={styles.noticePanel}>
                  <div className={styles.noticeTitle}>
                    <Icon />
                    <h3>{section.title}</h3>
                  </div>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.contactPanel}>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </section>
      </main>
    </Layout>
  );
}
