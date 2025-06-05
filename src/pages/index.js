import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaCalendarAlt, FaFileAlt, FaPencilAlt, FaUserGraduate, FaUniversity, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLanguage } from 'react-icons/fa'; // 添加语言图标

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

// 翻译对象
const translations = {
  zh: {
    viewPastExams: "查看过去问",
    viewExperiences: "查看经验贴",
    switchToJapanese: "切换到日文",
    features: [
      {
        title: '丰富的考试答案数据库',
        description: '我们持续更新和扩充日本研究生入学考试和资格考试的答案集。从往年考题到最新问题，提供准确可靠的答案，支持高效的考试准备。按领域和年份轻松搜索，快速访问所需信息。'
      },
      {
        title: '活跃的社区交流',
        description: '我们提供一个社区平台，供考生和专家自由讨论解题方法和学习策略。通过解决疑问和分享学习提示，保持动力并有效学习。从初学者到高级用户，人人都可轻松参与。'
      },
      {
        title: '开源透明',
        description: '本平台完全开源运营，任何人都可以查看代码或提出改进建议。我们欢迎社区贡献，致力于用户主导的更易用工具开发。在注重透明度和协作的环境中，一起深化学习。'
      }
    ],
    examScheduleTitle: '日本顶尖大学2025年研究生入学考试时间表',
    examScheduleDescription: '以下是主要大学研究生入学考试的概要日程。各研究科的具体日期可能不同，请查阅各大学的官方公告获取详细信息。',
    websiteConfirmation: '日程时间请参考各研究科的官方网站，查看各专业的最新招生简章。',
    disclaimerText: '※ 请务必确认各大学的官方入学考试简章。日程可能会有变更。',
    examSteps: {
      apply: '申请受理',
      exam: '笔试',
      interview: '面试',
      results: '结果公布'
    }
  },
  ja: {
    viewPastExams: "過去問を見る",
    viewExperiences: "体験談を見る",
    switchToJapanese: "中文に切り替え",
    features: [
      {
        title: '豊富な試験解答データベース',
        description: '日本の大学院入試や資格試験のための解答集を継続的に更新・拡充しています。過去問から最新の問題まで、正確で信頼性の高い解答を提供し、効率的な試験対策をサポートします。分野別や年度別に簡単に検索できるので、必要な情報にすぐアクセス可能です。'
      },
      {
        title: '活発なコミュニティ交流',
        description: '試験問題の解き方や学習方法について、他の受験生や専門家と自由に議論できるコミュニティを用意しています。疑問を解決したり、学習のヒントを共有したりすることで、モチベーションを維持しながら効果的に学べます。初心者から上級者まで、誰でも気軽に参加可能です。'
      },
      {
        title: 'オープンソースによる透明性',
        description: '本プラットフォームは完全にオープンソースで運営されており、誰でもコードを確認したり、改善案を提案したりできます。コミュニティからの貢献を歓迎し、ユーザー主導でより使いやすいツールを目指しています。透明性と協力性を重視した環境で、共に学びを深めましょう。'
      }
    ],
    examScheduleTitle: '日本トップ大学2025年度大学院入試日程',
    examScheduleDescription: '以下は主要大学の大学院入試スケジュール概要です。各研究科ごとに日程が異なりますので、詳細は各大学の公式発表をご確認ください。',
    websiteConfirmation: '日程時間については、各研究科・学院の公式ウェブサイトにて、各専攻の最新の募集要項をご確認ください。',
    disclaimerText: '※ 各大学の公式入試要項を必ずご確認ください。日程は変更される場合があります。',
    examSteps: {
      apply: '願書受付',
      exam: '筆記試験',
      interview: '面接',
      results: '合格発表'
    }
  }
};

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
  const [language, setLanguage] = useState('zh'); // 默认使用中文
  
  // 切换语言方法
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'ja' : 'zh');
  };
  
  const t = translations[language];
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.languageSwitcher}>
          <button onClick={toggleLanguage} className={styles.languageButton}>
            <FaLanguage className={styles.languageIcon} />
            {language === 'zh' ? '切换到日文' : '中文に切り替え'}
          </button>
        </div>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.primaryButton)}
            to="/docs/intro">
            {t.viewPastExams}
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
            to="/blog">
            {t.viewExperiences}
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
  const [language, setLanguage] = useState('zh'); // 默认使用中文
  
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
  
  // 获取当前语言的翻译
  const t = translations[language];
  
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
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学系研究科',
          websiteUrl: 'https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'ist',
          name: '情報理工学系研究科',
          websiteUrl: 'https://www.i.u-tokyo.ac.jp/edu/entra/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'frontier',
          name: '新領域創成科学研究科',
          websiteUrl: 'https://www.k.u-tokyo.ac.jp/exam/info/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'culture',
          name: '総合文化研究科',
          websiteUrl: 'https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'iii',
          name: '学際情報学府',
          websiteUrl: 'https://www.iii.u-tokyo.ac.jp/admissions',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'ms',
          name: '数理科学研究科',
          websiteUrl: 'https://www.ms.u-tokyo.ac.jp/kyoumu/examination.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://sci.kyoto-u.ac.jp/ja/admissions/ms',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'economics',
          name: '経済学研究科',
          websiteUrl: 'https://www.econ.kyoto-u.ac.jp/examguide/graduateexam-info/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'informatics',
          name: '情報学研究科',
          websiteUrl: 'https://www.i.kyoto-u.ac.jp/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'gsm',
          name: '経営管理大学院',
          websiteUrl: 'https://www.gsm.kyoto-u.ac.jp/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'https://www.eng.tohoku.ac.jp/admission/grad/master.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.tohoku.ac.jp/juken/graduate-admission.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'bme',
          name: '医工学研究科',
          websiteUrl: 'https://www.bme.tohoku.ac.jp/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'environmental',
          name: '環境科学研究科',
          websiteUrl: 'https://www.kankyo.tohoku.ac.jp/newstudent/nittei-yoko.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'is',
          name: '情報科学研究科',
          websiteUrl: 'https://www.is.tohoku.ac.jp/jp/entrance/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'https://www.eng.osaka-u.ac.jp/ja/entrance/g_admissions/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.osaka-u.ac.jp/ja/admissions/admissions_d/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'medicine',
          name: '医学系研究科',
          websiteUrl: 'https://www.med.osaka-u.ac.jp/admission/admission',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'es',
          name: '基礎工学研究科',
          websiteUrl: 'https://www.es.osaka-u.ac.jp/ja/examinee/graduate-school-of-engineering-science/entrance-exam/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'ist',
          name: '情報科学研究科',
          websiteUrl: 'https://www.ist.osaka-u.ac.jp/japanese/examinees/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'https://www.engg.nagoya-u.ac.jp/prospective/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.nagoya-u.ac.jp/graduate/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'env',
          name: '環境学研究科',
          websiteUrl: 'https://www.env.nagoya-u.ac.jp/admission/index.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'i',
          name: '情報学研究科',
          websiteUrl: 'https://www.i.nagoya-u.ac.jp/gs/entranceexamination/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'math',
          name: '多元数理科学研究科',
          websiteUrl: 'https://www.math.nagoya-u.ac.jp/ja/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'isct',
      name: '東京科学大学 旧・東京工業大学',  
      color: '#7b3f00',
      departments: [
        {
          id: 'isct',
          name: '理工学系',   
          websiteUrl: 'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',  
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学院',
          websiteUrl: 'https://www2.sci.hokudai.ac.jp/gs/admission-guideline',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'fisheries',
          name: '水産科学院',
          websiteUrl: 'https://www2.fish.hokudai.ac.jp/admission/mcdc.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'ist',
          name: '情報科学院',
          websiteUrl: 'https://www.ist.hokudai.ac.jp/examinfo/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'hops',
          name: '公共政策大学院',
          websiteUrl: 'https://www.hops.hokudai.ac.jp/admission/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'https://www.eng.kyushu-u.ac.jp/admissions.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学府',
          websiteUrl: 'https://www.sci.kyushu-u.ac.jp/admission/daigakuin_master.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'economics',
          name: '経済学府',
          websiteUrl: 'https://www.econ.kyushu-u.ac.jp/nyushi/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'isee',
          name: 'システム情報科学府',
          websiteUrl: 'https://www.isee.kyushu-u.ac.jp/admissions_master.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口頭試問', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'math',
          name: '数理学府',
          websiteUrl: 'https://www.math.kyushu-u.ac.jp/admission/graduateschool/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
            { id: 'apply', label: '出願期間', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'creative',
          name: '創造理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
          schedules: [
            { id: 'apply', label: '出願期間', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'advanced',
          name: '先進理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
          schedules: [
            { id: 'apply', label: '出願期間', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        }
      ]
    },
    {
      id: 'tsukuba',
      name: '筑波大学',
      color: '#228b22',
      departments: [
        {
          id: 'engineering',
          name: '人間総合科学学術院',
          websiteUrl: 'https://www.ap-graduate.tsukuba.ac.jp/course/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'humanities',
          name: '人文社会ビジネス科学学術院',
          websiteUrl: 'https://www.ap-graduate.tsukuba.ac.jp/course/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'gstils',
          name: '理工情報生命学術院',
          websiteUrl: 'https://www.ap-graduate.tsukuba.ac.jp/course/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'https://www.uec.ac.jp/education/graduate/admission/request.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
          websiteUrl: 'http://www.eng.kobe-u.ac.jp/examinee.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'http://www.sci.kobe-u.ac.jp/admissions/master.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'economics',
          name: '経済学研究科',
          websiteUrl: 'https://www.econ.kobe-u.ac.jp/admission-master/',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'csi',
          name: 'システム情報学研究科',
          websiteUrl: 'https://www.csi.kobe-u.ac.jp/exam/master_exam.html',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '口述試験', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
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
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'interview', label: '面接', icon: <FaUserGraduate /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        },
        {
          id: 'humanities',
          name: '人間社会科学研究科',
          websiteUrl: 'https://www.hiroshima-u.ac.jp/gshs/nyuusi',
          schedules: [
            { id: 'apply', label: '願書受付', icon: <FaFileAlt /> },
            { id: 'exam', label: '筆記試験', icon: <FaPencilAlt /> },
            { id: 'results', label: '合格発表', icon: <FaUniversity /> }
          ]
        }
      ]
    }
  ];

  return (
    <section className={styles.examSchedule}>
      <div className="container">
        <Heading as="h2" className={styles.examScheduleTitle}>
          {t.examScheduleTitle}
        </Heading>
        <p className={styles.examScheduleDescription}>
          {t.examScheduleDescription}
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
                              <FaExternalLinkAlt /> {t.websiteConfirmation}
                            </a>
                            <div className={styles.timelineSteps}>
                              {dept.schedules.map((step, stepIndex) => (
                                <div key={stepIndex} className={styles.timelineStep}>
                                  <div className={styles.stepContent}>
                                    <div className={styles.stepIcon} style={{backgroundColor: univ.color}}>
                                      {step.icon}
                                    </div>
                                    <div className={styles.stepInfo}>
                                      <div className={styles.stepLabel}>{t.examSteps[step.id]}</div>
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
          <p>{t.disclaimerText}</p>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatures() {
  const [language, setLanguage] = useState('zh'); // 默认使用中文
  
  // 获取当前语言的翻译
  const t = translations[language];
  
  // 根据当前语言创建特性列表
  const localizedFeatures = t.features.map((feature, index) => ({
    title: feature.title,
    icon: FeatureList[index].icon,
    description: feature.description
  }));
  
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {localizedFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [language, setLanguage] = useState('zh'); // 默认使用中文
  
  // 在主组件中共享语言状态
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'ja' : 'zh');
  };
  
  // 将语言状态传递给所有需要本地化的组件
  return (
    <Layout
      title={siteConfig.title}
      description="开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁">
      <HomepageStructuredData />
      <HomepageHeader language={language} toggleLanguage={toggleLanguage} />
      <main>
        <ExamScheduleFlowchart language={language} />
        <HomepageFeatures language={language} />
      </main>
    </Layout>
  );
}
