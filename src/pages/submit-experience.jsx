import React from 'react';
import Layout from '@theme/Layout';
import ExperienceContribution from '@site/src/components/ExperienceContribution';
import {useUiText} from '@site/src/i18n/useUiText';

export default function SubmitExperiencePage() {
  const t = useUiText('experienceSubmission');
  return <Layout title={t.title} description={t.intro}><ExperienceContribution /></Layout>;
}
