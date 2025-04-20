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
        提供一个不断增长的日本研究生入学考试答案集。访问全面的解析和学习资源。
      </>
    ),
  },
  {
    title: '社区讨论',
    emoji: '💬',
    description: (
      <>
        参与关于考试问题、解决方案和学习策略的讨论。分享您的见解，获取专家意见。
      </>
    ),
  },
  {
    title: '开源平台',
    emoji: '🌐',
    description: (
      <>
        完全开源的平台，欢迎社区的贡献。一起构建更强大的学习生态系统。
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            查看过去问 →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/blog">
            浏览经验贴 →
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
        <div className="row" style={{ gap: '2rem 0' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
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
      </main>
    </Layout>
  );
}
