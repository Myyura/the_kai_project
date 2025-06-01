import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe } from 'react-icons/fa'; // 引入 React Icons
import GraduateExamFlowchart from '@site/src/components/GraduateExamFlowchart';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '豊富な試験解答データベース',
    icon: <FaSearch />,
    description: (
      <>
        日本の大学院入試や資格試験のための解答集を継続的に更新・拡充しています。過去問から最新の問題まで、正確で信頼性の高い解答を提供し、効率的な試験対策をサポートします。分野別や年度別に簡単に検索できるので、必要な情報にすぐアクセス可能です。
      </>
    ),
  },
  {
    title: '活発なコミュニティ交流',
    icon: <FaComments />,
    description: (
      <>
        試験問題の解き方や学習方法について、他の受験生や専門家と自由に議論できるコミュニティを用意しています。疑問を解決したり、学習のヒントを共有したりすることで、モチベーションを維持しながら効果的に学べます。初心者から上級者まで、誰でも気軽に参加可能です。
      </>
    ),
  },
  {
    title: 'オープンソースによる透明性',
    icon: <FaGlobe />,
    description: (
      <>
        本プラットフォームは完全にオープンソースで運営されており、誰でもコードを確認したり、改善案を提案したりできます。コミュニティからの貢献を歓迎し、ユーザー主導でより使いやすいツールを目指しています。透明性と協力性を重視した環境で、共に学びを深めましょう。
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
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
            className={clsx('button button--lg', styles.heroButton, styles.primaryButton)}
            to="/docs/intro">
            過去問
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
            to="/blog">
            体験談
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="開源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁">
      <HomepageStructuredData />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="graduate-exam-section">
          <div className="container">
            <GraduateExamFlowchart />
          </div>
        </section>
      </main>
    </Layout>
  );
}
