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
       title: '海量真题解析，高效备考',
       icon: <FaSearch />,
       description: <>汇集日本大学院入试的历年真题与解析。<br />按学校、专业、年份快速检索，精准定位所需内容。<br /><b>让备考更有方向，复习更有效率。</b></>
      },
      {
        title: '活跃社区，互助成长',
        icon: <FaComments />,
        description: <>与众多考生和前辈一起交流学习。<br />分享解题思路、备考经验、面试心得。<br /><b>加入 <a href="https://qm.qq.com/q/3yjgte7UTe">QQ群 925154731</a> 参与讨论！</b></>
      },
      {
        title: '开源透明，共建共享',
        icon: <FaGlobe />,
        description: <>完全开源的项目，所有内容公开透明。<br />无隐藏收费，无信息壁垒。<br /><b>欢迎贡献答案、纠错或提出建议，一起完善这个平台。</b></>
      }
    ],
    universityInfoTitle: '各大学信息与链接',
    universityInfoDescription: '快速导航至各大学研究科的官方招生信息页面',
    websiteLink: '研究科链接',
    testimonialsTitle: '用户评价',
    testimonials: [
      {
        name: '合格前辈',
        text: '备考期间这个平台帮了大忙，省去了大量搜集资料的时间。社区里的讨论也让我收获很多。',
        avatar: 'https://avatars.githubusercontent.com/u/13355503?v=4'
      },
      {
        name: '备考同学',
        text: '资料非常齐全，前辈们的经验分享给了我很大的帮助和信心。推荐给所有准备考日本大学院的朋友！',
        avatar: 'https://avatars.githubusercontent.com/u/59238632?v=4'
      }
    ],
    ctaTitle: '开始你的备考之旅',
    ctaDescription: '获取全面的备考资源，加入活跃的交流社区。',
    ctaButtonContribute: '参与贡献'
  },
  ja: {
    viewPastExams: "過去問を見る",
    viewExperiences: "合格体験記",
    features: [
      {
        title: '充実した過去問データベース',
        icon: <FaSearch />,
        description: '大学院入試の過去問と解答を多数収録。大学・専攻・年度別に検索でき、必要な情報に素早くアクセスできます。効率的な試験対策をサポートします。'
      },
      {
        title: '受験生コミュニティ',
        icon: <FaComments />,
        description: <>受験生同士で情報交換や質問ができるコミュニティです。解答の議論や勉強法の共有を通じて、一緒に合格を目指しましょう。<a href="https://github.com/Myyura/the_kai_project/discussions">GitHub Discussions</a>でお気軽にご参加ください。</>
      },
      {
        title: 'オープンソースプロジェクト',
        icon: <FaGlobe />,
        description: 'すべてのコンテンツを無料で公開しているオープンソースプロジェクトです。解答の追加や修正など、どなたでも貢献できます。一緒により良いプラットフォームを作りましょう。'
      }
    ],
    universityInfoTitle: '大学情報・リンク集',
    universityInfoDescription: '各大学の研究科・専攻の公式入試情報ページへのリンクです',
    websiteLink: '研究科リンク',
    testimonialsTitle: 'ご利用者の声',
    testimonials: [
      {
        name: '合格者',
        text: '過去問を探す手間が大幅に省け、効率よく勉強できました。他の受験生との情報交換も役立ちました。',
        avatar: 'https://avatars.githubusercontent.com/u/13355503?v=4'
      },
      {
        name: '受験生',
        text: '情報が整理されていて使いやすいです。先輩方の体験記も参考になり、モチベーションが上がりました。大学院受験を考えている方におすすめです。',
        avatar: 'https://avatars.githubusercontent.com/u/59238632?v=4'
      }
    ],
    ctaTitle: '受験勉強を始めよう',
    ctaDescription: '過去問・解答・体験記など、大学院受験に役立つ情報が揃っています。',
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
        <div className={styles.featureDescription}>{description}</div>
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
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.languageSwitcher}>
            <span className={styles.languageLabel}>Language</span>
            <div className={styles.languageToggle}>
              <button 
                onClick={language === 'ja' ? toggleLanguage : undefined}
                className={clsx(styles.langOption, language === 'zh' && styles.langOptionActive)}
              >
                中文
              </button>
              <button 
                onClick={language === 'zh' ? toggleLanguage : undefined}
                className={clsx(styles.langOption, language === 'ja' && styles.langOptionActive)}
              >
                日本語
              </button>
            </div>
          </div>
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
