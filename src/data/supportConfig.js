/**
 * Support & partnership configuration.
 *
 * This is the only file that normally needs to change when a partner or
 * support method is added. Put logos and QR images under
 * `static/img/support/`, then reference them with `/img/support/...`.
 *
 * Localized fields accept `{zh, ja, en}`. Disabled entries are kept as
 * ready-to-fill examples and are never rendered on the website.
 */
export const supportConfig = {
  contactEmail: '376672994@qq.com',

  strategicPartners: [
    {
      id: 'strategic-partner-example',
      enabled: false,
      featuredOnHomepage: true,
      name: {
        zh: '合作伙伴名称',
        ja: 'パートナー名',
        en: 'Partner name',
      },
      description: {
        zh: '简要说明合作伙伴对项目的长期支持或实际协作。',
        ja: 'プロジェクトへの継続的な支援や協働内容を簡潔に説明します。',
        en: 'Briefly describe the partner’s ongoing support or collaboration.',
      },
      since: 2026,
      website: '',
      detailsUrl: '',
      logo: {
        src: '/img/support/strategic-partner-logo.png',
        alt: {
          zh: '合作伙伴 Logo',
          ja: 'パートナーのロゴ',
          en: 'Partner logo',
        },
      },
    },
  ],

  sustainingPartners: [
    {
      id: 'sustaining-partner-example',
      enabled: false,
      name: {
        zh: '长期支持伙伴名称',
        ja: '継続支援パートナー名',
        en: 'Sustaining partner name',
      },
      since: 2026,
      website: '',
      logo: {
        src: '/img/support/sustaining-partner-logo.png',
        alt: {
          zh: '长期支持伙伴 Logo',
          ja: '継続支援パートナーのロゴ',
          en: 'Sustaining partner logo',
        },
      },
    },
  ],

  supportMethods: [
    {
      id: 'alipay',
      enabled: false,
      type: 'qr',
      platform: 'alipay',
      qrImage: '/img/support/alipay-qr.png',
      recipientHint: '',
    },
    {
      id: 'wechat',
      enabled: false,
      type: 'qr',
      platform: 'wechat',
      qrImage: '/img/support/wechat-qr.png',
      recipientHint: '',
    },
    {
      id: 'afdian',
      enabled: false,
      type: 'link',
      platform: 'afdian',
      url: '',
    },
    {
      id: 'buy-me-a-coffee',
      enabled: false,
      type: 'link',
      platform: 'buyMeACoffee',
      url: '',
    },
  ],
};

export function getLocalizedSupportValue(value, language = 'zh') {
  if (typeof value === 'string') return value;
  if (!value || typeof value !== 'object') return '';
  return value[language] || value.zh || value.en || value.ja || '';
}

export function getEnabledSupportEntries(entries) {
  return Array.isArray(entries) ? entries.filter((entry) => entry?.enabled) : [];
}

