import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import SchoolCard from '@site/src/components/SchoolCard';
import styles from './intro.module.css';

// 语言切换的内容组件
const LocalizedContent = ({ zh, ja, language }) => (
  <div className={styles.localizedContainer}>
    {language === 'ja' ? ja : zh}
  </div>
);

export default function Intro() {
  // 默认显示中文
  const [language, setLanguage] = useState('zh');
  
  // 切换语言函数
  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'zh' : 'ja');
  };

  // 语言切换按钮文本
  const buttonText = language === 'ja' ? '切换到中文' : '日本語に切り替え';
  
  // 将所有文本内容整合到一个对象中，方便管理
  const texts = {
    intro: {
      zh: "本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。",
      ja: "本プロジェクトは、オープンソースで便利な、大学院入試問題の解答を共有・議論する場を提供し、情報の壁を取り除くことを目指しています。"
    },
    projectUrl: {
      zh: <>项目地址：<a href="https://github.com/Myyura/the_kai_project" target="_blank">https://github.com/Myyura/the_kai_project</a></>,
      ja: <>プロジェクトURL：<a href="https://github.com/Myyura/the_kai_project" target="_blank">https://github.com/Myyura/the_kai_project</a></>
    },
    mobileInfo: {
      zh: <><strong>手机端</strong>请点击左上角菜单栏获取过去问或点击以下学校卡片</>,
      ja: <><strong>モバイル端末</strong>では、左上のメニューバーをクリックして過去問を取得するか、以下の大学カードをクリックしてください</>
    },
    schoolList: {
      zh: "学校一覧",
      ja: "大学リスト"
    },
    license: {
      zh: "LICENSE",
      ja: "ライセンス"
    },
    licenseText1: {
      zh: "项目代码AGPL v3, 试题版权归出题方（校方）所有。",
      ja: "プロジェクトコードはAGPL v3、試験問題の著作権は出題者（大学側）に帰属します。"
    },
    licenseText2: {
      zh: "感谢每一位项目的贡献者。",
      ja: "プロジェクトの全ての貢献者に感謝します。"
    },
    licenseText3: {
      zh: <>如有侵权, 请通过邮件联系 <a href="mailto:376672994@qq.com">376672994@qq.com</a>。</>,
      ja: <>著作権侵害がある場合は、メールで連絡してください: <a href="mailto:376672994@qq.com">376672994@qq.com</a></>
    },
    howToContribute: {
      zh: "How to contribute",
      ja: "貢献方法"
    },
    contribute1: {
      zh: "熟悉Git：在本GitHub项目中提交PR。",
      ja: "Gitに詳しい方：このGitHubプロジェクトにPRを提出してください。"
    },
    contribute2: {
      zh: <>不熟悉Git：发送试题/答案至 <a href="mailto:376672994@qq.com">376672994@qq.com</a>。</>,
      ja: <>Gitに詳しくない方：試験問題/回答を <a href="mailto:376672994@qq.com">376672994@qq.com</a> に送信してください。</>
    },
    corrections: {
      zh: "纠错与讨论：",
      ja: "修正と議論："
    },
    correctionsText1: {
      zh: <>发现错误请至<a href="https://github.com/Myyura/the_kai_project/issues" target="_blank">Github项目</a>提交Issue。</>,
      ja: <>誤りを見つけた場合は、<a href="https://github.com/Myyura/the_kai_project/issues" target="_blank">Githubプロジェクト</a>にIssueを提出してください。</>
    },
    correctionsText2: {
      zh: "可以通过QQ群讨论题目答案和考试经验，QQ群：925154731。",
      ja: "QQグループで問題の回答や試験経験について議論できます。QQグループ：925154731"
    }
  };

  return (
    <div className="container">
      <div className={styles.languageSwitcher}>
        <button 
          onClick={toggleLanguage} 
          className={styles.languageButton}
        >
          {buttonText}
        </button>
      </div>
      
      <p className={styles.subtitle}>Answer to the Ultimate Question of Life, the Universe, and Everything</p>
      
      <LocalizedContent 
        zh={texts.intro.zh}
        ja={texts.intro.ja}
        language={language}
      />
      
      <LocalizedContent 
        zh={texts.projectUrl.zh}
        ja={texts.projectUrl.ja}
        language={language}
      />
      
      <div className="alert alert--info" role="alert">
        <LocalizedContent 
          zh={texts.mobileInfo.zh}
          ja={texts.mobileInfo.ja}
          language={language}
        />
      </div>

      <div className={styles.sectionSpacing}></div>
      
      <h2>
        <LocalizedContent 
          zh={texts.schoolList.zh}
          ja={texts.schoolList.ja}
          language={language}
        />
      </h2>
      
      <div className={styles.schoolGrid}>
        {schools.map((school, index) => (
          <div key={index} className={styles.schoolItem}>
            <SchoolCard 
              name={school.name} 
              url={school.url} 
              description={school.description} 
            />
          </div>
        ))}
      </div>
      
      <h2>
        <LocalizedContent 
          zh={texts.license.zh}
          ja={texts.license.ja}
          language={language}
        />
      </h2>
      
      <LocalizedContent 
        zh={texts.licenseText1.zh}
        ja={texts.licenseText1.ja}
        language={language}
      />
      
      <LocalizedContent 
        zh={texts.licenseText2.zh}
        ja={texts.licenseText2.ja}
        language={language}
      />
      
      <LocalizedContent 
        zh={texts.licenseText3.zh}
        ja={texts.licenseText3.ja}
        language={language}
      />
      
      <h2>
        <LocalizedContent 
          zh={texts.howToContribute.zh}
          ja={texts.howToContribute.ja}
          language={language}
        />
      </h2>
      
      <ul>
        <li>
          <LocalizedContent 
            zh={texts.contribute1.zh}
            ja={texts.contribute1.ja}
            language={language}
          />
        </li>
        <li>
          <LocalizedContent 
            zh={texts.contribute2.zh}
            ja={texts.contribute2.ja}
            language={language}
          />
        </li>
      </ul>
      
      <h2>
        <LocalizedContent 
          zh={texts.corrections.zh}
          ja={texts.corrections.ja}
          language={language}
        />
      </h2>
      
      <ul>
        <li>
          <LocalizedContent 
            zh={texts.correctionsText1.zh}
            ja={texts.correctionsText1.ja}
            language={language}
          />
        </li>
        <li>
          <LocalizedContent 
            zh={texts.correctionsText2.zh}
            ja={texts.correctionsText2.ja}
            language={language}
          />
        </li>
      </ul>
    </div>
  );
}

// 保留原有的schools数组
const schools = [
  {
    name: '東京大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6',
    description: '日本最高学府として名高い東京大学は、卓越した研究と教育の質で世界的に評価され、幅広い学問分野でリーダーを育成。'
  },
  {
    name: '京都大学',
    url: '/docs/category/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6',
    description: '伝統と革新が融合する京都大学は、自由な学風で知られ、独創的な研究と優れた教育で世界に貢献。'
  },
  {
    name: '東北大学',
    url: '/docs/category/%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6',
    description: '東北地域の学術中心である東北大学は、多様な学問分野での研究を通じて社会の発展に大きく貢献。'
  },
  {
    name: '大阪大学',
    url: '/docs/category/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6',
    description: '実学を重視する大阪大学は、科学技術と社会課題の解決に重点を置き、地域と世界に貢献。'
  },
  {
    name: '名古屋大学',
    url: '/docs/category/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6',
    description: '高い研究力を誇る名古屋大学は、ノーベル賞受賞者を輩出し、科学技術の進歩に大きく寄与。'
  },
  {
    name: '東京科學大學 旧・東京工業大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E7%A7%91%E5%AD%B8%E5%A4%A7%E5%AD%B8-%E6%97%A7%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6',
    description: '理工系教育の最高峰、東京科学大学は、先端技術の研究とイノベーションを牽引し世界に影響。'
  },
  {
    name: '北海道大学',
    url: '/docs/category/%E5%8C%97%E6%B5%B7%E9%81%93%E5%A4%A7%E5%AD%A6',
    description: '広大なキャンパスを持つ北海道大学は、自然科学と環境研究に強く、地域と地球の未来に貢献。'
  },
  {
    name: '九州大学',
    url: '/docs/category/%E4%B9%9D%E5%B7%9E%E5%A4%A7%E5%AD%A6',
    description: '九州の学術拠点である九州大学は、国際的な視野を持つ研究と教育で地域と世界に貢献。'
  },
  {
    name: '早稲田大学',
    url: '/docs/category/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6',
    description: '私学の頂点に立つ早稲田大学は、政治経済、文化、芸術など多岐にわたり社会をリード。'
  },
  {
    name: '慶應義塾大学',
    url: '/docs/category/%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6',
    description: '慶應義塾大学は、日本最古の私立大学であり、福澤諭吉によって創設された名門総合大学です。'
  },
  {
    name: '神戸大学',
    url: '/docs/category/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6',
    description: '国際都市神戸に位置する神戸大学は、経済学や国際関係の研究で高く評価され世界に貢献。'
  },
  {
    name: '筑波大学',
    url: '/docs/category/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6',
    description: '研究都市の中核である筑波大学は、スポーツ科学や先端研究で知られ、国際社会に貢献。'
  },
  {
    name: '電気通信大学',
    url: '/docs/category/%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%E5%A4%A7%E5%AD%A6',
    description: '情報通信技術の先駆け、電気通信大学は、産学連携を強化し、実社会での技術革新を推進。'
  },
  {
    name: '広島大学',
    url: '/docs/category/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6',
    description: '平和教育の拠点である広島大学は、総合的な学問体系を擁し、持続可能な社会づくりに貢献。'
  },
];
