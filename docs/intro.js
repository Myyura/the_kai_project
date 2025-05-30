import React from 'react';
import Link from '@docusaurus/Link';
import SchoolCard from '@site/src/components/SchoolCard';
import styles from './intro.module.css';

const schools = [
  {
    name: '東京大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6',
    description: '日本の最高学府、研究と教育の頂点。'
  },
  {
    name: '京都大学',
    url: '/docs/category/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6',
    description: '伝統と革新、自由な学風で有名。'
  },
  {
    name: '東北大学',
    url: '/docs/category/%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6',
    description: '東北の中心、幅広い学問で貢献。'
  },
  {
    name: '大阪大学',
    url: '/docs/category/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6',
    description: '実学を重んじ、社会に貢献する。'
  },
  {
    name: '名古屋大学',
    url: '/docs/category/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6',
    description: '研究力が高く、ノーベル賞輩出。'
  },
  {
    name: '東京科學大學 旧・東京工業大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E7%A7%91%E5%AD%B8%E5%A4%A7%E5%AD%B8-%E6%97%A7%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6',
    description: '理工系の最高峰、技術革新を牽引。'
  },
  {
    name: '北海道大学',
    url: '/docs/category/%E5%8C%97%E6%B5%B7%E9%81%93%E5%A4%A7%E5%AD%A6',
    description: '広大なキャンパス、自然科学に強み。'
  },
  {
    name: '九州大学',
    url: '/docs/category/%E4%B9%9D%E5%B7%9E%E5%A4%A7%E5%AD%A6',
    description: '九州の中心、国際的な研究教育。'
  },
  {
    name: '早稲田大学',
    url: '/docs/category/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6',
    description: '私学の雄、政治経済と文化を網羅。'
  },
  {
    name: '筑波大学',
    url: '/docs/category/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6',
    description: '研究都市の中核、スポーツ科学も有名。'
  },
  {
    name: '電気通信大学',
    url: '/docs/category/%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%E5%A4%A7%E5%AD%A6',
    description: '情報通信技術の先駆、産学連携が活発。'
  },
  {
    name: '神戸大学',
    url: '/docs/category/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6',
    description: '国際都市神戸に位置、経済学が著名。'
  },
  {
    name: '広島大学',
    url: '/docs/category/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6',
    description: '平和教育の拠点、総合的な学問体系。'
  },
];

export default function Intro() {
  return (
    <div className="container">
      <p className={styles.subtitle}>Answer to the Ultimate Question of Life, the Universe, and Everything</p>
      
      <p>本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。</p>
      
      <p>项目地址：<a href="https://github.com/Myyura/the_kai_project" target="_blank">https://github.com/Myyura/the_kai_project</a></p>
      
      <div className="alert alert--info" role="alert">
        <strong>手机端</strong>请点击左上角菜单栏获取过去问或点击以下学校卡片
      </div>

      <div className={styles.sectionSpacing}></div>
      
      <h2>学校一覧</h2>
      
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
      
      <h2>LICENSE</h2>
      <p>GNU Affero General Public License v3.0, 试题版权归出题方（校方）所有。</p>
      <p>感谢每一位项目的贡献者。</p>
      <p>如有侵权, 请通过邮件联系 <a href="mailto:376672994@qq.com">376672994@qq.com</a>。</p>
      
      <h2>How to contribute</h2>
      <ul>
        <li>熟悉Git&GitHub：提交PR。</li>
        <li>不熟悉Git&GitHub：发送试题/答案至 <a href="mailto:376672994@qq.com">376672994@qq.com</a>。</li>
        <li>我们期待你的Input, 倘若你熟悉Git, 可以通过直接为本项目提交PR的方式添砖加瓦, 倘若你不熟悉, 亦可将想要分享的试题\答案通过邮件的方式发送给我们, 我们第一时间将其提交到本项目之上。</li>
      </ul>
      
      <h2>纠错与讨论：</h2>
      <ul>
        <li>发现错误请至<a href="https://github.com/Myyura/the_kai_project/issues" target="_blank">Github项目</a>提交Issue。</li>
        <li>加入QQ群交流：925154731。</li>
      </ul>
    </div>
  );
}
