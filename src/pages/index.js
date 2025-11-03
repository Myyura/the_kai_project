import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaCalendarAlt, FaFileAlt, FaPencilAlt, FaUserGraduate, FaUniversity, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLanguage, FaStar } from 'react-icons/fa'; // 添加语言图标

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

// 翻译对象
const translations = {
  zh: {
    viewPastExams: "查看过去问",
    viewExperiences: "查看经验贴",
    switchToJapanese: "日本語に切り替え",
    features: [
      {
        title: '丰富的考试答案数据库',
        description: '我们持续更新和扩充日本研究生入学考试和资格考试的答案集。从往年考题到最新问题，提供准确可靠的答案，支持高效的考试准备。按领域和年份轻松搜索，快速访问所需信息。'
      },
      {
        title: '活跃的社区交流',
        description: '我们提供一个社区平台，供考生和专家自由讨论解题方法和学习策略。通过解决疑问和分享学习提示，保持动力并有效学习。从初学者到高级用户，人人都可轻松参与。QQ group: 925154731'
      },
      {
        title: '开源透明',
        description: '本平台完全开源运营，任何人都可以查看代码或提出改进建议。我们欢迎社区贡献，致力于用户主导的更易用工具开发。在注重透明度和协作的环境中，一起深化学习。'
      }
    ],
    universityInfoTitle: '日本各大学基本信息与链接汇总',
    universityInfoDescription: '以下是各个学校、专攻以及其他有用信息的导航链接',
    websiteLink: '专攻（学院）链接',
    disclaimerText: '※ 请务必确认各大学的官方入学考试简章。日程可能会有变更。',
    testimonialsTitle: '来自用户的好评',
    testimonials: [
      {
        name: '一位热心的前辈',
        text: '这个平台真的太棒了！备考期间帮我节省了大量寻找过去问和答案的时间，社区的讨论也让我受益匪浅。',
        avatar: 'https://avatars.githubusercontent.com/u/13355503?v=4'
      },
      {
        name: '正在备考的同学',
        text: '信息非常集中，特别是前辈们的经验贴，给了我很多鼓励和实用的建议。强烈推荐给所有打算考日本大学院的同学！',
        avatar: 'https://avatars.githubusercontent.com/u/59238632?v=4'
      }
    ],
    ctaTitle: '准备好开始你的升学之路了吗？',
    ctaDescription: '立即加入我们，获取最全面的备考资源和最活跃的交流社区。',
    ctaButtonContribute: '贡献力量'
  },
  ja: {
    viewPastExams: "過去問を見る",
    viewExperiences: "体験談を見る",
    switchToJapanese: "切换到中文",
    features: [
      {
        title: '豊富な試験解答データベース',
        description: '日本の大学院入試や資格試験のための解答集を継続的に更新・拡充しています。過去問から最新の問題まで、正確で信頼性の高い解答を提供し、効率的な試験対策をサポートします。分野別や年度別に簡単に検索できるので、必要な情報にすぐアクセス可能です。'
      },
      {
        title: '活発なコミュニティ交流',
        description: '試験問題の解き方や学習方法について、他の受験生や専門家と自由に議論できるコミュニティを用意しています。疑問を解決したり、学習のヒントを共有したりすることで、モチベーションを維持しながら効果的に学べます。初心者から上級者まで、誰でも気軽に参加可能です。QQ group: 925154731'
      },
      {
        title: 'オープンソースによる透明性',
        description: '本プラットフォームは完全にオープンソースで運営されており、誰でもコードを確認したり、改善案を提案したりできます。コミュニティからの貢献を歓迎し、ユーザー主導でより使いやすいツールを目指しています。透明性と協力性を重視した環境で、共に学びを深めましょう。'
      }
    ],
    universityInfoTitle: '日本各大学の基本情報とリンク集',
    universityInfoDescription: '各大学・専攻およびその他の有用情報へのナビゲーションリンクです',
    websiteLink: '専攻（学部・研究科）リンク',
    disclaimerText: '※ 各大学の公式入試要項を必ずご確認ください。日程は変更される場合があります。',
    testimonialsTitle: 'ユーザーからの声',
    testimonials: [
      {
        name: '熱心な先輩',
        text: 'このプラットフォームは本当に素晴らしいです！試験準備中に過去問や解答を探す時間を大幅に節約でき、コミュニティでの議論も非常に役立ちました。',
        avatar: 'https://avatars.githubusercontent.com/u/13355503?v=4'
      },
      {
        name: '受験準備中の学生',
        text: '情報が非常に集中しており、特に先輩方の体験談は、多くの励ましと実用的なアドバイスをくれました。日本の大学院を目指すすべての学生に強くお勧めします！',
        avatar: 'https://avatars.githubusercontent.com/u/59238632?v=4'
      }
    ],
    ctaTitle: '進学の道を歩み始める準備はできましたか？',
    ctaDescription: '今すぐ参加して、最も包括的な受験リソースと最も活発な交流コミュニティを手に入れましょう。',
    ctaButtonContribute: '貢献する'
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

function HomepageHeader({ language, toggleLanguage }) {
  const {siteConfig} = useDocusaurusContext();
  
  const t = translations[language];
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroTextContainer}>
          <div className={styles.languageSwitcher}>
            <button onClick={toggleLanguage} className={styles.languageButton}>
              <FaLanguage className={styles.languageIcon} />
              {language === 'zh' ? '日本語' : '中文'}
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
              {t.viewPastExams} <FaArrowRight className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
              to="/blog">
              {t.viewExperiences}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// 考試日程流程圖組件
function UniversityInfoFlowchart({ language }) {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedUniv, setExpandedUniv] = useState({});
  const [expandedDept, setExpandedDept] = useState({});
  const [selectedUniv, setSelectedUniv] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  
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
        },
        {
          id: 'science',
          name: '理学系研究科',
          websiteUrl: 'https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html',
        },
        {
          id: 'ist',
          name: '情報理工学系研究科',
          websiteUrl: 'https://www.i.u-tokyo.ac.jp/edu/entra/',
        },
        {
          id: 'frontier',
          name: '新領域創成科学研究科',
          websiteUrl: 'https://www.k.u-tokyo.ac.jp/exam/info/',
        },
        {
          id: 'culture',
          name: '総合文化研究科',
          websiteUrl: 'https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/index.html',
        },
        {
          id: 'iii',
          name: '学際情報学府',
          websiteUrl: 'https://www.iii.u-tokyo.ac.jp/admissions',
        },
        {
          id: 'ms',
          name: '数理科学研究科',
          websiteUrl: 'https://www.ms.u-tokyo.ac.jp/kyoumu/examination.html',
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
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://sci.kyoto-u.ac.jp/ja/admissions/ms',
        },
        {
          id: 'economics',
          name: '経済学研究科',
          websiteUrl: 'https://www.econ.kyoto-u.ac.jp/examguide/graduateexam-info/',
        },
        {
          id: 'informatics',
          name: '情報学研究科',
          websiteUrl: 'https://www.i.kyoto-u.ac.jp/admission/',
        },
        {
          id: 'gsm',
          name: '経営管理大学院',
          websiteUrl: 'https://www.gsm.kyoto-u.ac.jp/admission/',
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
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.tohoku.ac.jp/juken/graduate-admission.html',
        },
        {
          id: 'bme',
          name: '医工学研究科',
          websiteUrl: 'https://www.bme.tohoku.ac.jp/admission/',
        },
        {
          id: 'environmental',
          name: '環境科学研究科',
          websiteUrl: 'https://www.kankyo.tohoku.ac.jp/newstudent/nittei-yoko.html',
        },
        {
          id: 'is',
          name: '情報科学研究科',
          websiteUrl: 'https://www.is.tohoku.ac.jp/jp/entrance/',
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
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.osaka-u.ac.jp/ja/admissions/admissions_d/',
        },
        {
          id: 'medicine',
          name: '医学系研究科',
          websiteUrl: 'https://www.med.osaka-u.ac.jp/admission/admission',
        },
        {
          id: 'es',
          name: '基礎工学研究科',
          websiteUrl: 'https://www.es.osaka-u.ac.jp/ja/examinee/graduate-school-of-engineering-science/entrance-exam/',
        },
        {
          id: 'ist',
          name: '情報科学研究科',
          websiteUrl: 'https://www.ist.osaka-u.ac.jp/japanese/examinees/admission/',
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
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'https://www.sci.nagoya-u.ac.jp/graduate/index.html',
        },
        {
          id: 'env',
          name: '環境学研究科',
          websiteUrl: 'https://www.env.nagoya-u.ac.jp/admission/index.html',
        },
        {
          id: 'i',
          name: '情報学研究科',
          websiteUrl: 'https://www.i.nagoya-u.ac.jp/gs/entranceexamination/',
        },
        {
          id: 'math',
          name: '多元数理科学研究科',
          websiteUrl: 'https://www.math.nagoya-u.ac.jp/ja/admission/',
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
        },
        {
          id: 'science',
          name: '理学院',
          websiteUrl: 'https://www2.sci.hokudai.ac.jp/gs/admission-guideline',
        },
        {
          id: 'fisheries',
          name: '水産科学院',
          websiteUrl: 'https://www2.fish.hokudai.ac.jp/admission/mcdc.html',
        },
        {
          id: 'ist',
          name: '情報科学院',
          websiteUrl: 'https://www.ist.hokudai.ac.jp/examinfo/',
        },
        {
          id: 'hops',
          name: '公共政策大学院',
          websiteUrl: 'https://www.hops.hokudai.ac.jp/admission/',
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
        },
        {
          id: 'science',
          name: '理学府',
          websiteUrl: 'https://www.sci.kyushu-u.ac.jp/admission/daigakuin_master.html',
        },
        {
          id: 'economics',
          name: '経済学府',
          websiteUrl: 'https://www.econ.kyushu-u.ac.jp/nyushi/',
        },
        {
          id: 'isee',
          name: 'システム情報科学府',
          websiteUrl: 'https://www.isee.kyushu-u.ac.jp/admissions_master.html',
        },
        {
          id: 'math',
          name: '数理学府',
          websiteUrl: 'https://www.math.kyushu-u.ac.jp/admission/graduateschool/',
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
        },
        {
          id: 'creative',
          name: '創造理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
        },
        {
          id: 'advanced',
          name: '先進理工学研究科',
          websiteUrl: 'https://www.waseda.jp/fsci/admissions_gs/',
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
        },
        {
          id: 'humanities',
          name: '人文社会ビジネス科学学術院',
          websiteUrl: 'https://www.ap-graduate.tsukuba.ac.jp/course/',
        },
        {
          id: 'gstils',
          name: '理工情報生命学術院',
          websiteUrl: 'https://www.ap-graduate.tsukuba.ac.jp/course/',
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
        },
        {
          id: 'science',
          name: '理学研究科',
          websiteUrl: 'http://www.sci.kobe-u.ac.jp/admissions/master.html',
        },
        {
          id: 'economics',
          name: '経済学研究科',
          websiteUrl: 'https://www.econ.kobe-u.ac.jp/admission-master/',
        },
        {
          id: 'csi',
          name: 'システム情報学研究科',
          websiteUrl: 'https://www.csi.kobe-u.ac.jp/exam/master_exam.html',
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
        },
        {
          id: 'humanities',
          name: '人間社会科学研究科',
          websiteUrl: 'https://www.hiroshima-u.ac.jp/gshs/nyuusi',
        }
      ]
    }
  ];

  const filteredUniversities = universities.filter(univ => {
    const univMatch = selectedUniv ? univ.id === selectedUniv : true;
    const deptMatch = selectedDept ? univ.departments.some(dept => dept.id === selectedDept) : true;
    
    if (selectedUniv && !selectedDept) {
      return univMatch;
    }
    if (selectedUniv && selectedDept) {
      return univMatch && deptMatch;
    }
    if (!selectedUniv && selectedDept) {
      return deptMatch;
    }
    return true;
  });

  const handleUniversityChange = (e) => {
    setSelectedUniv(e.target.value);
    setSelectedDept(''); // 重置专攻选择
  };

  const departmentOptions = selectedUniv 
    ? universities.find(u => u.id === selectedUniv)?.departments || [] 
    : [];

  return (
    <section className={styles.universityInfo}>
      <div className="container">
        <Heading as="h2" className={styles.universityInfoTitle}>
          {t.universityInfoTitle}
        </Heading>
        <p className={styles.universityInfoDescription}>
          {t.universityInfoDescription}
        </p>
        
        <div className={styles.filterContainer}>
          <div className={styles.selectWrapper}>
            <select value={selectedUniv} onChange={handleUniversityChange} className={styles.selectBox}>
              <option value="">{language === 'zh' ? '所有大学' : 'すべての大学'}</option>
              {universities.map(univ => (
                <option key={univ.id} value={univ.id}>{univ.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} className={styles.selectBox} disabled={!selectedUniv}>
              <option value="">{language === 'zh' ? '所有专攻' : 'すべての専攻'}</option>
              {departmentOptions.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.flowchartContainer}>
          {filteredUniversities.map((univ) => (
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
                  {univ.departments.filter(d => selectedDept ? d.id === selectedDept : true).map((dept) => {
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
                              <FaExternalLinkAlt /> {t.websiteLink}
                            </a>
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
      </div>
    </section>
  );
}

function HomepageFeatures({ language }) {
  // 获取当前语言的翻译
  const t = translations[language];
  
  // 根据当前语言创建特性列表
  const localizedFeatures = t.features.map((feature, index) => ({
    title: feature.title,
    icon: FeatureList[index].icon,
    description: feature.description,
    link: index === 0 ? '/docs/intro' : (index === 1 ? '/blog' : 'https://github.com/Myyura/the_kai_project')
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

// 新增 Testimonials 组件
function Testimonials({ language }) {
  const t = translations[language];
  const testimonials = t.testimonials;

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <Heading as="h2" className={styles.testimonialsTitle}>{t.testimonialsTitle}</Heading>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialAvatar} />
                <div className={styles.testimonialAuthor}>
                  <p className={styles.testimonialName}>{testimonial.name}</p>
                  <div className={styles.testimonialRating}>
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 新增 CallToAction 组件
function CallToAction({ language }) {
  const t = translations[language];
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>{t.ctaTitle}</Heading>
          <p className={styles.ctaDescription}>{t.ctaDescription}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.primaryButton)}
              to="/docs/intro">
              {t.viewPastExams} <FaArrowRight className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
              to="https://github.com/Myyura/the_kai_project">
              {t.ctaButtonContribute}
            </Link>
          </div>
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
        <HomepageFeatures language={language} />
        <UniversityInfoFlowchart language={language} />
        <Testimonials language={language} />
        <CallToAction language={language} />
      </main>
    </Layout>
  );
}
