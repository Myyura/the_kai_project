import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './intro.module.css';
import { FiGithub, FiCheckCircle } from 'react-icons/fi';

// 数据和文本
const content = {
  texts: {
    mobileInfo: {
      zh: <><strong>手机端</strong>请点击左上角菜单栏浏览过去问，或点击下方学校卡片</>,
      ja: <><strong>スマートフォン</strong>をお使いの方は、左上のメニューから過去問を閲覧するか、下の大学カードをタップしてください</>
    },
    schoolList: {
      zh: "选择大学查看过去问",
      ja: "大学を選んで過去問を見る"
    },
    license: { zh: "许可协议", ja: "ライセンス" },
    licenseText1: {
      zh: "项目代码采用 AGPL v3 协议，试题版权归各大学所有。",
      ja: "プロジェクトのコードは AGPL v3 ライセンスです。試験問題の著作権は各大学に帰属します。"
    },
    licenseText2: { zh: "感谢所有贡献者的付出。", ja: "すべての貢献者に感謝いたします。" },
    licenseText3: {
      zh: <>如有版权问题，请联系 <a href="mailto:376672994@qq.com">376672994@qq.com</a></>,
      ja: <>著作権に関するお問い合わせは <a href="mailto:376672994@qq.com">376672994@qq.com</a> までご連絡ください</>
    },
    howToContribute: { zh: "参与贡献", ja: "貢献する" },
    contribute1: {
      zh: <>熟悉 Git：直接在 <Link to="https://github.com/Myyura/the_kai_project">GitHub</Link> 提交 Pull Request</>,
      ja: <>Gitをお使いの方：<Link to="https://github.com/Myyura/the_kai_project">GitHub</Link> から Pull Request を送信</>
    },
    contribute2: {
      zh: <>不熟悉 Git：将试题或答案发送至 <a href="mailto:376672994@qq.com">376672994@qq.com</a></>,
      ja: <>その他の方：試験問題や解答を <a href="mailto:376672994@qq.com">376672994@qq.com</a> に送信</>
    },
    corrections: { zh: "纠错与讨论", ja: "修正・質問" },
    correctionsText1: {
      zh: <>发现错误？请在 <Link to="https://github.com/Myyura/the_kai_project/issues">GitHub Issues</Link> 提交反馈</>,
      ja: <>間違いを見つけたら <Link to="https://github.com/Myyura/the_kai_project/issues">GitHub Issues</Link> でお知らせください</>
    },
    correctionsText2: {
      zh: <>交流讨论请加入 <a href="https://qm.qq.com/q/3yjgte7UTe">QQ群 925154731</a> 或 <Link to="https://github.com/Myyura/the_kai_project/discussions">GitHub Discussions</Link></>,
      ja: <>質問や議論は <Link to="https://github.com/Myyura/the_kai_project/discussions">GitHub Discussions</Link> をご利用ください</>
    }
  },
  schools: [
    { name: '東京大学', url: '/docs/category/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6', description: '日本最高学府として名高い東京大学は、卓越した研究と教育の質で世界的に評価され、幅広い学問分野でリーダーを育成。' },
    { name: '京都大学', url: '/docs/category/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6', description: '伝統と革新が融合する京都大学は、自由な学風で知られ、独創的な研究と優れた教育で世界に貢献。' },
    { name: '東北大学', url: '/docs/category/%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6', description: '東北地域の学術中心である東北大学は、多様な学問分野での研究を通じて社会の発展に大きく貢献。' },
    { name: '大阪大学', url: '/docs/category/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6', description: '実学を重視する大阪大学は、科学技術と社会課題の解決に重点を置き、地域と世界に貢献。' },
    { name: '名古屋大学', url: '/docs/category/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6', description: '高い研究力を誇る名古屋大学は、ノーベル賞受賞者を輩出し、科学技術の進歩に大きく寄与。' },
    { name: '東京科学大学 旧・東京工業大学', url: '/docs/category/%E6%9D%B1%E4%BA%AC%E7%A7%91%E5%AD%B8%E5%A4%A7%E5%AD%B8-%E6%97%A7%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6', description: '理工系教育の最高峰、東京科学大学は、先端技術の研究とイノベーションを牽引し世界に影響。' },
    { name: '北海道大学', url: '/docs/category/%E5%8C%97%E6%B5%B7%E9%81%93%E5%A4%A7%E5%AD%A6', description: '広大なキャンパスを持つ北海道大学は、自然科学と環境研究に強く、地域と地球の未来に貢献。' },
    { name: '九州大学', url: '/docs/category/%E4%B9%9D%E5%B7%9E%E5%A4%A7%E5%AD%A6', description: '九州の学術拠点である九州大学は、国際的な視野を持つ研究と教育で地域と世界に貢献。' },
    { name: '早稲田大学', url: '/docs/category/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6', description: '私学の頂点に立つ早稲田大学は、政治経済、文化、芸術など多岐にわたり社会をリード。' },
    { name: '慶應義塾大学', url: '/docs/category/%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6', description: '慶應義塾大学は、日本最古の私立大学であり、福澤諭吉によって創設された名門総合大学です。' },
    { name: '神戸大学', url: '/docs/category/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6', description: '国際都市神戸に位置する神戸大学は、経済学や国際関係の研究で高く評価され世界に貢献。' },
    { name: '筑波大学', url: '/docs/category/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6', description: '研究都市の中核である筑波大学は、スポーツ科学や先端研究で知られ、国際社会に貢献。' },
    { name: '電気通信大学', url: '/docs/category/%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%E5%A4%A7%E5%AD%A6', description: '情報通信技術の先駆け、電気通信大学は、産学連携を強化し、実社会での技術革新を推進。' },
    { name: '広島大学', url: '/docs/category/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6', description: '平和教育の拠点である広島大学は、総合的な学問体系を擁し、持続可能な社会づくりに貢献。' },
  ]
};

// 行动号召卡片组件
const ActionCard = ({ icon, title, children, url }) => {
  const cardContent = (
    <div className={styles.actionCard}>
      <div className={styles.actionCardHeader}>
        {icon && <span className={styles.actionCardIcon}>{icon}</span>}
        <h3>{title}</h3>
      </div>
      <div className={styles.actionCardContent}>{children}</div>
    </div>
  );

  return url ? <Link to={url} className={styles.cardLink}>{cardContent}</Link> : cardContent;
};

export default function Intro() {
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ja' ? 'zh' : 'ja';
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  const t = (key) => content.texts[key][language] || content.texts[key]['zh'];

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <div className={styles.languageSwitcher}>
          <span className={styles.languageLabel}>Language</span>
          <div className={styles.languageToggle}>
            <button 
              onClick={language === 'ja' ? toggleLanguage : undefined}
              className={`${styles.langOption} ${language === 'zh' ? styles.langOptionActive : ''}`}
            >
              中文
            </button>
            <button 
              onClick={language === 'zh' ? toggleLanguage : undefined}
              className={`${styles.langOption} ${language === 'ja' ? styles.langOptionActive : ''}`}
            >
              日本語
            </button>
          </div>
        </div>
      </div>

      <div className="alert alert--info" role="alert" style={{marginBottom: '1rem'}}>{t('mobileInfo')}</div>
      
      <h2 className={styles.sectionTitle}>{t('schoolList')}</h2>

      <div className={styles.schoolGrid}>
        {content.schools.map((school, index) => (
          <ActionCard key={index} url={school.url} title={school.name}>
            <p>{school.description}</p>
          </ActionCard>
        ))}
      </div>

      <div className={styles.actionCardGrid}>
        <ActionCard icon={<FiGithub />} title={t('howToContribute')}>
          <ul>
            <li>{t('contribute1')}</li>
            <li>{t('contribute2')}</li>
          </ul>
        </ActionCard>
        <ActionCard icon={<FiCheckCircle />} title={t('corrections')}>
          <ul>
            <li>{t('correctionsText1')}</li>
            <li>{t('correctionsText2')}</li>
          </ul>
        </ActionCard>
      </div>
      
      <div className={styles.licenseSection}>
        <h2>{t('license')}</h2>
        <p>{t('licenseText1')}</p>
        <p>{t('licenseText2')}</p>
        <p>{t('licenseText3')}</p>
      </div>
    </div>
  );
}
