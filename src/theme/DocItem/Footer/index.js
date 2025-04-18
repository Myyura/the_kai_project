import React from 'react';
import Head from '@docusaurus/Head';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Footer from '@theme-original/DocItem/Footer';

export default function FooterWrapper(props) {
  // 尝试获取当前文档数据
  const docData = props.content || {};
  const { metadata = {}, frontMatter = {} } = docData;
  
  // 构建结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title || frontMatter.title || "文档页面",
    "author": {
      "@type": "Organization",
      "name": "The Kai Project Team",
      "url": "https://runjp.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Kai Project",
      "logo": {
        "@type": "ImageObject",
        "url": "https://runjp.com/img/logo-512.png"
      }
    },
    "description": frontMatter.description || metadata.description || "The Kai Project 文档"
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Footer {...props} />
    </>
  );
}
