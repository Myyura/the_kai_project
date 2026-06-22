import React from 'react';
import Head from '@docusaurus/Head';

export default function NoIndex() {
  return (
    <Head>
      <meta name="robots" content="noindex,follow" />
    </Head>
  );
}
