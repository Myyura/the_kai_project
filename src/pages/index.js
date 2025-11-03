import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaCalendarAlt, FaFileAlt, FaPencilAlt, FaUserGraduate, FaUniversity, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLanguage, FaStar } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { universities } from '../data/universities';

import Heading from '@theme/Heading';
import styles from './index.module.css';

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

import { universities } from '../data/universities';

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
    : Array.from(new Set(universities.flatMap(u => u.departments.map(d => d.name))))
        .map(name => universities.flatMap(u => u.departments).find(d => d.name === name));

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
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  
  // 在主组件中共享语言状态
  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'ja' : 'zh';
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
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
