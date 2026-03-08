import React from 'react';
import Head from '@docusaurus/Head';

export default function HomepageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Kai Project",
    "url": "https://runjp.com/",
    "description": "开源的日本大学院入试过去问解答共享平台，破除信息之壁 | 大学院入試過去問のオープンソース解答共有プラットフォーム",
    "publisher": {
      "@type": "Organization",
      "name": "The Kai Project Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://runjp.com/img/logo-512.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://runjp.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@type": "EducationalOrganization",
      "name": "The Kai Project",
      "description": "提供日本大学院入试过去问与解答的开源平台 | 大学院入試の過去問と解答を提供するオープンソースプラットフォーム"
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
