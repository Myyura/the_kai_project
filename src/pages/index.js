import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '考试答案',
    emoji: '🔍',
    description: (
      <>
        提供一个不断增长的日本研究生入学考试答案集，帮助你更好地准备考试。
      </>
    ),
  },
  {
    title: '社区讨论',
    emoji: '💬',
    description: (
      <>
        参与关于考试问题、解决方案和学习策略的讨论，分享经验，互相学习。
      </>
    ),
  },
  {
    title: '开源项目',
    emoji: '🌐',
    description: (
      <>
        完全开源的平台，欢迎社区的贡献，一起建设更完善的资源库。
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '2rem'}}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(styles.buttonPrimary)}
            to="/docs/intro">
            查看过去问 →
          </Link>
          <Link
            className={clsx(styles.buttonSecondary)}
            to="/blog">
            浏览经验贴
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 新增一个号召性行动部分
function CallToAction() {
  return (
    <section className={clsx(styles.ctaSection)}>
      <div className="container text--center">
        <Heading as="h2" className={styles.ctaTitle}>
          加入我们，共同分享与学习
        </Heading>
        <p className={styles.ctaDescription}>
          无论你是正在准备日本研究生考试，还是已经拥有丰富经验，我们都欢迎你的参与和贡献。
        </p>
        <div className={styles.ctaButton}>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/Myyura/the_kai_project">
            在 GitHub 上参与贡献
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁">
      <HomepageStructuredData />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
