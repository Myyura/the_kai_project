const siteConfig = Object.freeze({
  title: 'The Kai Project',
  tagline: 'Answer to the Ultimate Question of Life, the Universe, and Everything',
  url: 'https://runjp.com',
  baseUrl: '/',
  customFields: Object.freeze({
    supabaseUrl: process.env.KAI_PUBLIC_SUPABASE_URL || '',
    supabaseAnonKey: process.env.KAI_PUBLIC_SUPABASE_ANON_KEY || '',
    hcaptchaSiteKey: process.env.KAI_PUBLIC_HCAPTCHA_SITE_KEY || '',
    problemSetsEnabled: process.env.KAI_PUBLIC_PROBLEM_SETS_ENABLED === 'true',
  }),
});

export default function useSiteContext() {
  return {siteConfig};
}
