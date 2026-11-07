import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useHistory, useLocation} from '@docusaurus/router';
import ImportPanel from '@site/src/components/ProblemSetSharing/ImportPanel';
import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './shared-set.module.css';

function SharedSetContent() {
  const {search} = useLocation();
  const history = useHistory();
  const code = new URLSearchParams(search).get('code') || '';
  return <ImportPanel initialCode={code} standalone onImported={(setId) => history.push(`/me?tab=sets&setId=${encodeURIComponent(setId)}`)} />;
}

export default function SharedSetPage() {
  const t = useUiText('problemSets');
  return (
    <Layout title={t.sharedPageTitle}>
      <NoIndex />
      <main className={styles.page}>
        <h1>{t.sharedPageTitle}</h1>
        <BrowserOnly fallback={<p>{t.loading}</p>}>{() => <SharedSetContent />}</BrowserOnly>
      </main>
    </Layout>
  );
}
