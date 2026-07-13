import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function useProblemSetsFeature() {
  const {siteConfig} = useDocusaurusContext();
  return siteConfig?.customFields?.problemSetsEnabled === true;
}
