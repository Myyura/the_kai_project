import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DeveloperApiContent } from '../developers.js';

export default function DeveloperApiPage() {
  return (
    <Layout title="开发者中心 - JSON API">
      <BrowserOnly fallback={<div style={{ minHeight: '60vh' }} />}>
        {() => <DeveloperApiContent />}
      </BrowserOnly>
    </Layout>
  );
}
