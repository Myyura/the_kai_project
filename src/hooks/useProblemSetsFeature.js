import useSiteContext from '@site/src/rspress/useSiteContext';

export function useProblemSetsFeature() {
  const {siteConfig} = useSiteContext();
  return siteConfig?.customFields?.problemSetsEnabled === true;
}
