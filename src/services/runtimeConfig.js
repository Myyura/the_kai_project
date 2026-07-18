let siteConfigCache = null;

export const AUTH_STORAGE_KEY = 'kai_supabase_auth';

export function initSiteConfig(siteConfig) {
  if (!siteConfigCache) siteConfigCache = siteConfig;
}

export function getSupabaseCredentials() {
  return {
    url: siteConfigCache?.customFields?.supabaseUrl || '',
    anonKey: siteConfigCache?.customFields?.supabaseAnonKey || '',
  };
}

export function isSupabaseConfigured() {
  const {url, anonKey} = getSupabaseCredentials();
  return Boolean(url && anonKey);
}
