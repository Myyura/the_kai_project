import React from 'react';
import Head from '@docusaurus/Head';

export default function HomepageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Kai Project",
    "url": "https://runjp.com/",
    "description": "开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁",
    "publisher": {
      "@type": "Organization",
      "name": "The Kai Project Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://runjp.com/img/logo-512.png"
      }
    },
    "about": {
      "@type": "EducationalOrganization",
      "name": "The Kai Project",
      "description": "提供考试资料与答案的开源平台"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
