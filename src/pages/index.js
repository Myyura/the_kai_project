import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaCalendarAlt, FaFileAlt, FaPencilAlt, FaUserGraduate, FaUniversity, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa'; // 添加外部链接图标

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
  const [expandedUniv, setExpandedUniv] = useState({});
  const [expandedDept, setExpandedDept] = useState({});
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const toggleUniversity = (univId) => {
    setExpandedUniv(prev => ({
      ...prev,
      [univId]: !prev[univId]
    }));
  };
  
  const toggleDepartment = (univId, deptId) => {
    const key = `${univId}-${deptId}`;
    setExpandedDept(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // 大學數據及其考試日程（按研究科分類）
  const universities = [
    {
      id: 'tokyo',
      name: '東京大学',
      color: '#0f4c81',
      departments: [
        {
          id: 'engineering',
          name: '工学系研究科',
          websiteUrl: 'https://www.t.u-tokyo.ac.jp/soe/admission/general',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学系研究科',
          websiteUrl: 'https://www.s.u-tokyo.ac.jp/ja/admission/graduate.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'humanities',
          name: '人文社会系研究科',
          websiteUrl: 'https://www.l.u-tokyo.ac.jp/admission/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '9月上旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月下旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'kyoto',
      name: '京都大学',
      color: '#8b2323',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.t.kyoto-u.ac.jp/ja/admissions/graduate',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月上旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', date: '8月中旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.kyoto-u.ac.jp/ja/admissions/graduate.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'economics',
          name: '経済学研究科',
          websiteUrl: 'https://www.econ.kyoto-u.ac.jp/examguide/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '9月初旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', date: '9月中旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月下旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'tohoku',
      name: '東北大学',
      color: '#006a4e',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.eng.tohoku.ac.jp/admission/grad/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.tohoku.ac.jp/admission/graduate.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'osaka',
      name: '大阪大学',
      color: '#1e3f66',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.eng.osaka-u.ac.jp/ja/entrance-exam/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月上旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', date: '8月中旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月下旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.osaka-u.ac.jp/ja/admissions/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'medicine',
          name: '医学系研究科',
          websiteUrl: 'https://www.med.osaka-u.ac.jp/admission/admission',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', date: '9月上旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'nagoya',
      name: '名古屋大学',
      color: '#654321',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.engg.nagoya-u.ac.jp/admission/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.nagoya-u.ac.jp/graduate/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', date: '8月中旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'titech',
      name: '東京理科大学',
      color: '#7b3f00',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.tus.ac.jp/admis/grad/engineering/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '7月下旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月上旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.tus.ac.jp/admis/grad/science/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '7月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '8月中旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'hokkaido',
      name: '北海道大学',
      color: '#4169e1',
      departments: [
        {
          id: 'engineering',
          name: '工学院',
          websiteUrl: 'https://www.eng.hokudai.ac.jp/graduate/examinfo/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学院',
          websiteUrl: 'https://www.sci.hokudai.ac.jp/graduate/admissions/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'kyushu',
      name: '九州大学',
      color: '#800080',
      departments: [
        {
          id: 'engineering',
          name: '工学府',
          websiteUrl: 'https://www.eng.kyushu-u.ac.jp/entrance/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学府',
          websiteUrl: 'https://www.sci.kyushu-u.ac.jp/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'waseda',
      name: '早稲田大学',
      color: '#c41e3a',
      departments: [
        {
          id: 'fundamental',
          name: '基幹理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
          schedules: [
            { id: 'apply', label: '出願期間', date: '6月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '7月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', date: '7月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'creative',
          name: '創造理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
          schedules: [
            { id: 'apply', label: '出願期間', date: '6月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '7月下旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', date: '8月上旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'advanced',
          name: '先進理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
          schedules: [
            { id: 'apply', label: '出願期間', date: '6月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '7月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', date: '7月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月上旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    // 添加其他大学，确保每个研究科都有websiteUrl
    {
      id: 'tsukuba',
      name: '筑波大学',
      color: '#228b22',
      departments: [
        {
          id: 'engineering',
          name: '理工学研究群',
          websiteUrl: 'https://www.tsukuba.ac.jp/admission/graduate-info/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'humanities',
          name: '人文社会科学研究群',
          websiteUrl: 'https://www.tsukuba.ac.jp/admission/graduate-info/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'uec',
      name: '電気通信大学',
      color: '#483d8b',
      departments: [
        {
          id: 'informatics',
          name: '情報理工学研究科',
          websiteUrl: 'https://www.uec.ac.jp/admission/ie_graduate/',
          schedules: [
            { id: 'apply', label: '願書受付', date: '6月下旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月上旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月中旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '8月下旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'kobe',
      name: '神戸大学',
      color: '#3cb371',
      departments: [
        {
          id: 'engineering',
          name: '工学研究科',
          websiteUrl: 'https://www.eng.kobe-u.ac.jp/admission/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月初旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.kobe-u.ac.jp/admission/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月上旬', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'hiroshima',
      name: '広島大学',
      color: '#ff7f50',
      departments: [
        {
          id: 'engineering',
          name: '先進理工系科学研究科',
          websiteUrl: 'https://www.hiroshima-u.ac.jp/adse/admission',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月上旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月中旬', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', date: '8月下旬', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', date: '9月初旬', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'humanities',
          name: '人間社会科学研究科',
          websiteUrl: 'https://www.hiroshima-u.ac.jp/en/gshs/admission',
          schedules: [
            { id: 'apply', label: '願書受付', date: '7月中旬', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', date: '8月下旬', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', date: '9月中旬', icon: <FaUniversity /> }
          ]
        }
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
          以下は主要大学の大学院入試スケジュール概要です。各研究科ごとに日程が異なりますので、詳細は各大学の公式発表をご確認ください。
        </p>
        
        <div className={styles.flowchartContainer}>
          {universities.map((univ) => (
            <div key={univ.id} className={styles.universityTimeline}>
              <div 
                className={styles.universityHeader}
                onClick={() => toggleUniversity(univ.id)}
                style={{borderColor: univ.color}}
              >
                <div 
                  className={styles.universityName} 
                  style={{backgroundColor: univ.color}}
                >
                  {univ.name}
                </div>
                <div className={styles.toggleIcon}>
                  {expandedUniv[univ.id] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              {expandedUniv[univ.id] && (
                <div className={styles.departmentsContainer}>
                  {univ.departments.map((dept) => {
                    const deptKey = `${univ.id}-${dept.id}`;
                    const isDeptExpanded = expandedDept[deptKey];
                    
                    return (
                      <div key={dept.id} className={styles.department}>
                        <div 
                          className={styles.departmentHeader}
                          onClick={() => toggleDepartment(univ.id, dept.id)}
                          style={{borderLeftColor: univ.color}}
                        >
                          <span className={styles.departmentName}>{dept.name}</span>
                          <span className={styles.departmentToggle}>
                            {isDeptExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </div>
                        
                        {isDeptExpanded && (
                          <>
                            <a 
                              href={dept.websiteUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={styles.departmentLink}
                              style={{borderLeftColor: univ.color}}
                            >
                              <FaExternalLinkAlt /> 公式サイトで最新情報を確認
                            </a>
                            <div className={styles.timelineSteps}>
                              {dept.schedules.map((step, stepIndex) => (
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
                                  {stepIndex < dept.schedules.length - 1 && (
                                    <div className={styles.stepArrow}>
                                      <FaArrowRight style={{color: univ.color}} />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
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
        <ExamScheduleFlowchart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
