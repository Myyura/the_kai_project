import React from 'react';
import Link from '@docusaurus/Link';
import {FaArrowLeft, FaArrowRight, FaLayerGroup} from 'react-icons/fa';
import {useSync} from '@site/src/hooks/useSync';
import {useProblemSet} from '@site/src/hooks/useProblemSets';
import {useProblemSetsFeature} from '@site/src/hooks/useProblemSetsFeature';
import {useUiText} from '@site/src/i18n/useUiText';
import {PROBLEM_SET_KIND} from '@site/src/services/problemSetService';
import styles from './styles.module.css';

const getSetId = () => {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('set') || '';
};

const linkFor = (permalink, setId) => {
  const url = new URL(permalink, window.location.origin);
  url.searchParams.set('set', setId);
  return `${url.pathname}${url.search}${url.hash}`;
};

export default function ProblemSetNavigator({docId}) {
  const featureEnabled = useProblemSetsFeature();
  const {isLoggedIn} = useSync();
  const t = useUiText('problemSets');
  const setId = getSetId();
  const {problemSet} = useProblemSet(setId, {enabled: Boolean(featureEnabled && isLoggedIn && setId)});
  if (!featureEnabled || !isLoggedIn || !setId || !problemSet?.items?.length) return null;
  const index = problemSet.items.findIndex((item) => item.docId === docId);
  if (index < 0) return null;
  const previous = problemSet.items.slice(0, index).reverse().find((item) => item.contentAvailable);
  const next = problemSet.items.slice(index + 1).find((item) => item.contentAvailable);
  const title = problemSet.kind === PROBLEM_SET_KIND.LATER ? t.later
    : problemSet.kind === PROBLEM_SET_KIND.MISTAKES ? t.mistakes
      : problemSet.title;
  const completed = problemSet.items.filter((item) => item.progressStatus === 'completed').length;

  return (
    <nav className={styles.navigator} aria-label={t.navigatorLabel}>
      <div className={styles.context}>
        <FaLayerGroup />
        <div>
          <Link to={`/me?tab=sets&setId=${encodeURIComponent(setId)}`}>{title}</Link>
          <span>{t.position(index + 1, problemSet.items.length)} · {t.completedCount(completed)}</span>
        </div>
      </div>
      <div className={styles.actions}>
        {previous ? <Link to={linkFor(previous.permalink, setId)}><FaArrowLeft /> {t.previous}</Link> : <span />}
        {next ? <Link to={linkFor(next.permalink, setId)}>{t.next} <FaArrowRight /></Link> : <span />}
      </div>
    </nav>
  );
}
