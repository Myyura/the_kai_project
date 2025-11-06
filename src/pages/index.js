import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageStructuredData from '../components/HomepageStructuredData';
import { FaSearch, FaComments, FaGlobe, FaArrowRight, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLanguage, FaStar } from 'react-icons/fa';
import React, { useState, useEffect, useMemo } from 'react';
import { universities } from '../data/universities';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const translations = {
  zh: {
    viewPastExams: "查看过去问",
    viewExperiences: "查看经验贴",
    features: [
      {
       title: '超全真题答案库，备考快人一步',
       icon: <FaSearch />,
       description: '这里藏着日本研究生考试&资格考试的「通关秘籍」！按学校/专业/年份一键搜索，30秒找到你需要的解析——别人还在翻资料，你已悄悄刷完三套题啦！'
      },
      {
        title: '学霸聚集地，备考不孤单',
        icon: <FaComments />,
        description: '考场上单打独斗？来咱们的温暖社区抱团取暖吧！每天500+考生和东大前辈在线互助：解题卡壳时有人回思路，焦虑崩溃时收获暖心鼓励。无论日语萌新还是修士前辈，这里总有懂你的人～ 现在加入QQ群 925154731，和战友一起上岸！'
      },
      {
        title: '开源透明，答案看得见',
        icon: <FaGlobe />,
        description: '我们把心脏剖开给你看：所有答案完全公开。没有公众号引流，没有隐藏收费，没有数据黑箱——你贡献的每个建议都可能变成明天的新功能。选择我们，就是选择和大家共建安心的学习家园。'
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
    features: [
      {
        title: '豊富な試験解答データベース',
        icon: <FaSearch />,
        description: '日本の大学院入試や資格試験のための解答集を継続的に更新・拡充しています。過去問から最新の問題まで、正確で信頼性の高い解答を提供し、効率的な試験対策をサポートします。分野別や年度別に簡単に検索できるので、必要な情報にすぐアクセス可能です。'
      },
      {
        title: '活発なコミュニティ交流',
        icon: <FaComments />,
        description: '試験問題の解き方や学習方法について、他の受験生や専門家と自由に議論できるコミュニティを用意しています。疑問を解決したり、学習のヒントを共有したりすることで、モチベーションを維持しながら効果的に学べます。初心者から上級者まで、誰でも気軽に参加可能です。QQ group: 925154731'
      },
      {
        title: 'オープンソースによる透明性',
        icon: <FaGlobe />,
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

const useStoredLanguage = (defaultLang = 'zh') => {
  const [language, setLanguage] = useState(defaultLang);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('preferredLanguage');
    if (stored) setLanguage(stored);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'zh' ? 'ja' : 'zh';
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', next);
      }
      return next;
    });
  };

  return [language, toggleLanguage];
};

const useToggleMap = () => {
  const [state, setState] = useState({});
  const toggle = (key) => setState(prev => ({ ...prev, [key]: !prev[key] }));
  const isOpen = (key) => !!state[key];
  return [isOpen, toggle];
};

const Feature = ({icon, title, description}) => (
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

const HomepageHeader = ({ language, toggleLanguage, t }) => {
  const {siteConfig} = useDocusaurusContext();

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
};

const UniversityInfoFlowchart = ({ language, t }) => {
  const [isUnivOpen, toggleUniv] = useToggleMap();
  const [isDeptOpen, toggleDept] = useToggleMap();
  const [selectedUniv, setSelectedUniv] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const filteredUniversities = useMemo(() => universities.filter(univ => {
    if (selectedUniv && univ.id !== selectedUniv) return false;
    if (selectedDept && !univ.departments.some(dept => dept.id === selectedDept)) return false;
    return true;
  }), [selectedUniv, selectedDept]);

  const departmentOptions = useMemo(() => {
    if (!selectedUniv) return [];
    return universities.find(u => u.id === selectedUniv)?.departments ?? [];
  }, [selectedUniv]);

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
            <select
              value={selectedUniv}
              onChange={(e) => {
                setSelectedUniv(e.target.value);
                setSelectedDept('');
              }}
              className={styles.selectBox}
            >
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
                onClick={() => toggleUniv(univ.id)}
                style={{borderColor: univ.color}}
              >
                <div 
                  className={styles.universityName} 
                  style={{backgroundColor: univ.color}}
                >
                  {univ.name}
                </div>
                <div className={styles.toggleIcon}>
                  {isUnivOpen(univ.id) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              {isUnivOpen(univ.id) && (
                <div className={styles.departmentsContainer}>
                  {univ.departments.filter(d => !selectedDept || d.id === selectedDept).map((dept) => {
                    const deptKey = `${univ.id}-${dept.id}`;
                    const deptOpen = isDeptOpen(deptKey);
                    
                    return (
                      <div key={dept.id} className={styles.department}>
                        <div 
                          className={styles.departmentHeader}
                          onClick={() => toggleDept(deptKey)}
                          style={{borderLeftColor: univ.color}}
                        >
                          <span className={styles.departmentName}>{dept.name}</span>
                          <span className={styles.departmentToggle}>
                            {deptOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </div>
                        
                        {deptOpen && (
                          <a 
                            href={dept.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.departmentLink}
                            style={{borderLeftColor: univ.color}}
                          >
                            <FaExternalLinkAlt /> {t.websiteLink}
                          </a>
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
};

const HomepageFeatures = ({ t }) => (
  <section className={styles.features}>
    <div className="container">
      <div className="row">
        {t.features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = ({ t }) => (
  <section className={styles.testimonials}>
    <div className="container">
      <Heading as="h2" className={styles.testimonialsTitle}>{t.testimonialsTitle}</Heading>
      <div className={styles.testimonialCards}>
        {t.testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialAvatar} />
              <div className={styles.testimonialAuthor}>
                <p className={styles.testimonialName}>{testimonial.name}</p>
                <div className={styles.testimonialRating}>
                  {Array.from({ length: 5 }, (_, starIndex) => <FaStar key={starIndex} />)}
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

const CallToAction = ({ t }) => (
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

const Home = () => {
  const [language, toggleLanguage] = useStoredLanguage();
  const t = translations[language];
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁">
      <HomepageStructuredData />
      <HomepageHeader language={language} toggleLanguage={toggleLanguage} t={t} />
      <main>
        <HomepageFeatures t={t} />
        <UniversityInfoFlowchart language={language} t={t} />
        <Testimonials t={t} />
        <CallToAction t={t} />
      </main>
    </Layout>
  );
};

export default Home;
