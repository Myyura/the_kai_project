import React from 'react';
import Head from '@site/src/rspress/Head';

export default function NoIndex() {
  return (
    <Head>
      <meta name="robots" content="noindex,follow" />
    </Head>
  );
}
