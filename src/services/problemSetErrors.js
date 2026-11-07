// Keep database diagnostics separate from UI copy; not every 22023 error means
// that the document is missing from the catalog.
export const getProblemSetMembershipErrorCode = (error) => {
  const message = String(error?.message || '');
  if (/\binvalid_doc_id\b/.test(message)) return 'invalidDoc';
  if (/\binvalid_problem_set\b|\bproblem_set_not_found\b/.test(message)) return 'invalidSet';
  if (/\bproblem_set_item_limit_reached\b/.test(message)) return 'limitReached';
  if (error?.code === '28000' || error?.code === 'PGRST301'
    || /\bnot_authenticated\b|JWT expired/i.test(message)) return 'unauthenticated';
  if (error?.code === 'PGRST202') return 'unavailable';
  return 'failed';
};
