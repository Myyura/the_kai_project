import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaCalendarAlt, FaFileAlt, FaPencilAlt, FaUserGraduate, FaUniversity } from 'react-icons/fa'; // 添加更多图标

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

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

// 考試日程流程圖組件
function ExamScheduleFlowchart() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // 大學數據及其考試日程
  const universities = [
    {
      name: '東京大学',
      color: '#0f4c81',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月初旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '9月上旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '京都大学',
      color: '#8b2323',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月中旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '東北大学',
      color: '#006a4e',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '大阪大学',
      color: '#1e3f66',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月上旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '9月初旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '名古屋大学',
      color: '#654321',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '東京理科大学',
      color: '#7b3f00',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月中旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '7月下旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '8月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '北海道大学',
      color: '#4169e1',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '九州大学',
      color: '#800080',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '早稲田大学',
      color: '#c41e3a',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月初旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '7月中旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '7月下旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '8月上旬', date: '8月上旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '筑波大学',
      color: '#228b22',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '電気通信大学',
      color: '#483d8b',
      steps: [
        { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月上旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '8月中旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '8月下旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '神戸大学',
      color: '#3cb371',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
        { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
      ]
    },
    {
      name: '広島大学',
      color: '#ff7f50',
      steps: [
        { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
        { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
        { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
        { id: 'results', label: '合格発表', date: '9月初旬', icon: <FaUniversity /> }
      ]
    }
  ];

  return (
    <section className={styles.examSchedule}>
      <div className="container">
        <Heading as="h2" className={styles.examScheduleTitle}>
          日本トップ大学2025年度大学院入試日程
        </Heading>
        <p className={styles.examScheduleDescription}>
          以下は主要大学の大学院入試スケジュール概要です。正確な日程は各大学の公式発表をご確認ください。
        </p>
        
        <div className={styles.flowchartContainer}>
          {universities.map((univ, index) => (
            <div key={index} className={styles.universityTimeline}>
              <div 
                className={styles.universityName} 
                style={{backgroundColor: univ.color}}
              >
                {univ.name}
              </div>
              <div className={styles.timelineSteps}>
                {univ.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className={styles.timelineStep}>
                    <div className={styles.stepContent}>
                      <div className={styles.stepIcon} style={{backgroundColor: univ.color}}>
                        {step.icon}
                      </div>
                      <div className={styles.stepInfo}>
                        <div className={styles.stepLabel}>{step.label}</div>
                        <div className={styles.stepDate}>{step.date}</div>
                      </div>
                    </div>
                    {stepIndex < univ.steps.length - 1 && (
                      <div className={styles.stepArrow}>
                        <FaArrowRight style={{color: univ.color}} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.scheduleDisclaimer}>
          <FaCalendarAlt className={styles.disclaimerIcon} />
          <p>※ 各大学の公式入試要項を必ずご確認ください。日程は変更される場合があります。</p>
        </div>
      </div>
    </section>
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
      description="开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁">
      <HomepageStructuredData />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ExamScheduleFlowchart />
      </main>
    </Layout>
  );
}
