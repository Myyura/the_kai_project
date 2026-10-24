export function experienceContributionHref(scope = '') {
  const params = new URLSearchParams({tab: 'contribute', type: 'experience'});
  if (scope) params.set('scope', scope);
  return `/me?${params}`;
}

export function getContributionMode(search = '') {
  const params = new URLSearchParams(search);
  const type = params.get('type');
  if (type === 'experience' || type === 'admission_data') return type;
  if (params.get('docId') || type === 'correction') return 'correction';
  return 'new_solution';
}
