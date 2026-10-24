import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import {experienceContributionHref} from '@site/src/utils/contributionRoutes';

export default function SubmitExperiencePage() {
  const {search, hash} = useLocation();
  const scope = new URLSearchParams(search).get('scope') || '';
  return <Redirect to={experienceContributionHref(scope) + hash} />;
}
