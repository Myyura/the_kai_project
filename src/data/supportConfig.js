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
      id: 'siqishu',
      enabled: true,
      featuredOnHomepage: true,
      name: {
        zh: '思齐塾',
        ja: '思齐塾',
        en: 'Siqi Education',
      },
      shortDescription: {
        zh: '日本理工科进学辅导',
        ja: '日本の理工系進学をサポート',
        en: 'STEM admissions support in Japan',
      },
      description: {
        zh: '思齐塾专注于日本理工科进学与就职指导，现作为 Kai 的长期战略合作伙伴，通过持续支持与实际协作帮助项目完善内容、功能与社区建设。',
        ja: '思齐塾は、日本の理工系進学と就職支援に取り組む教育機関です。Kai の長期的な戦略パートナーとして、継続的な支援と協働を通じて、コンテンツ、機能、コミュニティの発展を支えています。',
        en: 'Siqi Education provides STEM admissions and career guidance in Japan. As Kai’s long-term strategic partner, it supports the project’s content, features, and community through ongoing collaboration.',
      },
      kaiCommunityOffer: {
        zh: '通过 Kai 了解思齐塾的用户，可在咨询时自愿出示已登录的 Kai 账号，了解面向 Kai 社区的合作优惠。具体适用范围、优惠内容与有效期以思齐塾咨询时的说明为准；Kai 不会向合作伙伴提供用户账号信息或其他个人数据。',
        ja: 'Kai を通じて思齐塾を知った方は、相談時にログイン済みの Kai アカウント画面を任意で提示すると、Kai コミュニティ向けの提携特典について案内を受けられます。対象講座、特典内容、有効期間は、相談時の思齐塾の案内をご確認ください。Kai がパートナーにアカウント情報その他の個人データを提供することはありません。',
        en: 'If you discovered Siqi Education through Kai, you may show that you are signed in to your Kai account during your consultation to ask about partner offers available to the Kai community. Doing so is optional. Eligibility, offer details, and availability are determined by Siqi Education at the time of inquiry; Kai does not provide account information or other personal data to partners.',
      },
      website: 'https://www.siqishu.com/',
      detailsUrl: '',
      logo: {
        src: '/img/support/siqishu-logo-dark.svg',
        darkSrc: '/img/support/siqishu-logo-light.svg',
        alt: {
          zh: '思齐塾 Logo',
          ja: '思齐塾のロゴ',
          en: 'Siqi Education logo',
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
      enabled: true,
      type: 'qr',
      platform: 'wechat',
      qrImage: '/img/support/wechat.png',
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
