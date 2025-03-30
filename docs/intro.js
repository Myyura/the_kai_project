import React from 'react';
import Link from '@docusaurus/Link';
import SchoolCard from '@site/src/components/SchoolCard';
import styles from './intro.module.css';

// 学校数据，包含名称、链接和简介
const schools = [
  {
    name: '東京大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6',
    description: '日本最著名的高等学府，成立于1877年，是日本七所旧帝国大学之首，培养了众多政商界人才和诺贝尔奖得主。'
  },
  {
    name: '京都大学',
    url: '/docs/category/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6',
    description: '日本顶尖研究型大学，成立于1897年，以基础研究和学术自由精神闻名，培养了大量诺贝尔奖获得者。'
  },
  {
    name: '東北大学',
    url: '/docs/category/%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6',
    description: '位于仙台的顶尖研究大学，成立于1907年，以材料科学研究和创新实践教育著称。'
  },
  {
    name: '大阪大学',
    url: '/docs/category/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6',
    description: '日本关西地区最具影响力的大学，在医学、生物科学和工程领域有卓越贡献，拥有强大的产学研合作体系。'
  },
  {
    name: '名古屋大学',
    url: '/docs/category/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6',
    description: '中部地区顶尖学府，物理学和化学研究世界领先，培养了6位诺贝尔奖获得者，工程和环境科学表现突出。'
  },
  {
    name: '東京科學大學 旧・東京工業大学',
    url: '/docs/category/%E6%9D%B1%E4%BA%AC%E7%A7%91%E5%AD%B8%E5%A4%A7%E5%AD%B8-%E6%97%A7%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6',
    description: '日本首屈一指的理工科大学，在工程学、计算机科学和先进材料研究领域处于国际前沿。'
  },
  {
    name: '北海道大学',
    url: '/docs/category/%E5%8C%97%E6%B5%B7%E9%81%93%E5%A4%A7%E5%AD%A6',
    description: '位于札幌的综合研究型大学，校园自然环境优美，在农学、兽医学和环境科学领域享有盛誉。'
  },
  {
    name: '九州大学',
    url: '/docs/category/%E4%B9%9D%E5%B7%9E%E5%A4%A7%E5%AD%A6',
    description: '日本西南部最重要的研究型大学，在能源工程、医学和农业科学领域贡献突出，国际交流活跃。'
  },
  {
    name: '早稲田大学',
    url: '/docs/category/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6',
    description: '日本顶尖私立大学，人文社会科学和商业管理教育出色，校友遍布政界、商界和文化领域。'
  },
  {
    name: '筑波大学',
    url: '/docs/category/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6',
    description: '位于茨城县的创新型大学，拥有独特的学群制度，在体育科学和残障教育方面表现突出。'
  },
  {
    name: '電気通信大学',
    url: '/docs/category/%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%E5%A4%A7%E5%AD%A6',
    description: '专注于信息通信技术和电子工程的研究型大学，培养了大量IT行业精英，产学合作密切。'
  },
  {
    name: '神戸大学',
    url: '/docs/category/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6',
    description: '位于兵库县的综合研究型大学，经济学、法学和海洋科学研究实力雄厚，国际化程度高。'
  },
  {
    name: '広島大学',
    url: '/docs/category/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6',
    description: '中国地区规模最大的综合性大学，和平学研究独具特色，教育学和生物科学领域表现优异。'
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
      
      <h2>学校列表</h2>
      
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
