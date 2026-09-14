export type ExperiencePlacement = {
  scope: string;
  admissionYear?: number;
  examYear?: number;
  season?: 'summer' | 'winter';
};

export type ExperienceSubmission = {
  kind: 'external' | 'internal';
  title: string;
  publishedYear: number;
  placements: ExperiencePlacement[];
  notes: string;
  url?: string;
  markdown?: string;
};

// The repository converter resolves these IDs against the shared university catalog.
// No second list of universities or programs is maintained by the Edge Function.
export function normalizeExperienceRequest(value: unknown, now = new Date()): {data: ExperienceSubmission} | {error: {code: string; message: string}} {
  const fail = (message: string) => ({error: {code: 'invalid_experience', message}});
  if (!value || typeof value !== 'object' || Array.isArray(value)) return fail('Experience data is required.');
  const input = value as Record<string, unknown>;
  if (input.kind !== 'external' && input.kind !== 'internal') return fail('Choose an external article or an on-site story.');
  const kind = input.kind as ExperienceSubmission['kind'];
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  if (!title || title.length > 240) return fail('The article title must contain 1–240 characters.');
  const validYear = (year: unknown) => Number.isInteger(year) && Number(year) >= 1900 && Number(year) <= 2100;
  const publishedYear = kind === 'internal' ? now.getUTCFullYear() : input.publishedYear;
  if (!validYear(publishedYear) || Number(publishedYear) > now.getUTCFullYear()) return fail('Provide the original publication year.');
  if (!Array.isArray(input.placements) || !input.placements.length || input.placements.length > 20) return fail('Provide 1–20 school/program classifications.');
  const placements: ExperiencePlacement[] = [];
  const seen = new Set<string>();
  for (const raw of input.placements) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return fail('Invalid classification.');
    if (Object.keys(raw).some(key => !['scope', 'admissionYear', 'examYear', 'season'].includes(key))) return fail('Unexpected classification field.');
    if (typeof raw.scope !== 'string' || raw.scope.length > 300 || !/^[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/.test(raw.scope)) return fail('Choose a valid school/program.');
    const placement: ExperiencePlacement = {scope: raw.scope};
    for (const key of ['admissionYear', 'examYear'] as const) {
      if (raw[key] !== undefined) {
        if (!validYear(raw[key])) return fail('Admission and exam years must be whole years between 1900 and 2100.');
        placement[key] = raw[key];
      }
    }
    if (raw.season !== undefined) {
      if (!['summer', 'winter'].includes(raw.season)) return fail('Invalid exam season.');
      placement.season = raw.season;
    }
    if (placement.examYear !== undefined && placement.season === undefined) {
      return {error: {code: 'experience_season_required', message: 'Choose an exam season when an exam year is provided.'}};
    }
    const key = `${placement.scope}/${placement.admissionYear || ''}/${placement.examYear || ''}/${placement.season || ''}`;
    if (seen.has(key)) return fail('Remove duplicate classifications for the same exam round.');
    seen.add(key);
    placements.push(placement);
  }
  const notes = typeof input.notes === 'string' ? input.notes.trim() : '';
  if (notes.length > 2000) return fail('Review notes must be at most 2,000 characters.');
  const data: ExperienceSubmission = {kind, title, publishedYear: Number(publishedYear), placements, notes};
  if (kind === 'external') {
    if (input.markdown) return fail('External recommendations must not include copied article content.');
    try {
      if (typeof input.url !== 'string' || input.url.length > 2000 || /[\s<>]/.test(input.url.trim())) throw new Error();
      const url = new URL(input.url.trim());
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || ['runjp.com', 'www.runjp.com'].includes(url.hostname)) throw new Error();
      url.hash = '';
      // Zhihu share parameters do not identify a different article.
      if (url.hostname === 'zhuanlan.zhihu.com' && /^\/p\/\d+\/?$/.test(url.pathname)) {
        url.protocol = 'https:';
        url.pathname = url.pathname.replace(/\/$/, '');
        url.search = '';
      }
      data.url = url.href;
    } catch {
      return fail('Provide a valid HTTP(S) URL to an external article, without account credentials.');
    }
  } else {
    if (input.url) return fail('On-site stories use Markdown instead of an external URL.');
    const markdown = typeof input.markdown === 'string' ? input.markdown.replace(/\r\n?/g, '\n').trim() : '';
    if (!markdown || markdown.length > 50000) return fail('The story must contain 1–50,000 Markdown characters.');
    data.markdown = markdown;
  }
  return {data};
}
