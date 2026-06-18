import React from 'react';
import Layout from '@theme/Layout';
import { useCurrentLanguage } from '../context/LanguageContext';

const content = {
  zh: {
    title: '法律声明',
    sections: [
      {
        title: '版权声明',
        items: [
          '本网站以开源项目和公开资料库为基础，核心公开内容包括题库索引、社区贡献题解、公开备考资料及相关说明。上述内容将持续面向公众开放访问，用于支持个人学习、研究与备考参考。',
          '为保障项目长期维护、技术服务与社区运营，本网站可能提供与学习体验、账号功能、数据接口、辅导支持或合作接入相关的配套功能。此类功能的提供方式不影响核心公开内容的开放访问属性。',
          '网站部分内容为个人学习、研究目的而合理使用他人已发表作品，在注明作者及出处前提下依法转载。如权利人认为涉嫌侵权，请于14个工作日内发送邮件至376672994@qq.com，我们将第一时间核实并按照权利人要求进行更正或删除。',
          '用户如需对公开内容进行批量复制、再分发、商业性接入或其他超出普通浏览和个人学习范围的使用，应遵守本网站另行公布的内容/API条款，并自行确保取得相关权利人的必要授权。',
        ],
      },
      {
        title: '免责声明',
        items: [
          {
            subtitle: '网站超链接责任',
            content: '本网站可能保留有第三方网站或网址的链接，是否访问这些链接或接受相应第三方服务将由您自行做出决定，如果您决定访问任何与本网站链接的第三方网站，其可能带来的结果和风险将全部由您自行承担，在法律允许的范围内，我们并不就这些链接上所提供的任何信息、数据、观点、图片、陈述或建议的准确性、完整性、充分性和可靠性提供承诺或保证，亦不对这些链接中的内容承担任何责任。我们强烈建议您了解并仔细阅读您访问的所有第三方网站的法律声明及隐私政策。',
          },
          {
            subtitle: '内容准确性',
            content: '在法律允许的范围内，本网站不提供任何形式的（无论是明示的或默示的）关于本网站所载内容的及时性、有效性、完整性可用性等方面的保证。用户因使用本网站内容所导致的任何后果，本网站不承担任何法律责任。',
          },
        ],
      },
      {
        title: '隐私声明',
        items: [
          {
            subtitle: '我们收集您的哪些信息',
            content: '根据您的选择和终端配置（尤其是Cookie和其它跟踪器），当您访问我们的网站时，我们的服务器会自动收集某些浏览器或设备生成的信息，包括但不限于：您的访问的域名；您的访问日期、时间和持续时长；浏览器类型；操作系统。若您使用登录、个人中心、云同步、排行榜或开发者 API 功能，我们还可能处理您的账号邮箱、认证标识、学习进度、题目笔记、复习状态、同步记录、API 访问申请信息、API Key 元数据及必要的调用日志。',
          },
          {
            subtitle: '信息使用目的',
            content: '上述信息主要用于提供账号登录、学习数据同步、个人中心展示、排行榜、API 访问审核、安全风控、服务维护和用户支持。我们会根据功能需要采取合理的数据最小化措施。',
          },
          {
            subtitle: '个人信息的跨境转移',
            content: '我们通过遍布全球的资源和服务器或服务，这意味着，您的个人信息可能会被转移到您使用产品或服务所在国家/地区的境外管辖区，或受到来自境外实体的访问。您理解并同意我们可能会将您的个人信息转移到境外管辖区。在该等情况下，我们将采取合理措施以确保您的信息在该等国家或区域的法律要求项下存在足够的保护。',
          },
          {
            subtitle: 'Cookies的管理和追踪机制',
            content: '您可以在浏览器中管理cookie和追踪机制的设置。请注意您所做的设置仅涉及当前情况下使用的浏览器。',
          },
          {
            subtitle: '停用所有Cookies',
            content: '若您希望禁用所有cookies，请前往您的浏览器设置并停用Cookies设置。',
          },
          {
            subtitle: '未成年人',
            content: '我们的网站不对未成年人（特别是14周岁以下的未成年人）提供产品和服务。',
          },
          {
            subtitle: '您的权利',
            content: '在您接受服务的过程中，为了您可以更加便捷的访问、删除您的个人信息，您可以通过下文所列的方式联系我们，我们将在合理时间内回复您的请求。',
          },
        ],
      },
      {
        title: '联系我们',
        content: '如果您对本站声明有任何疑问，您可以发送电子邮件至376672994@qq.com联系我们，我们将在合理的时间内予以回复。',
      },
    ],
  },
  ja: {
    title: '法的事項',
    sections: [
      {
        title: '著作権について',
        items: [
          '本ウェブサイトはオープンソースプロジェクトと公開学習アーカイブを基盤としており、問題カタログ、コミュニティによる公開解答、公開学習資料および関連説明を中核的な公開コンテンツと位置づけています。これらのコンテンツは、個人の学習、研究、受験準備を支援するため、継続的に公開アクセス可能な形で提供されます。',
          'プロジェクトの継続的な保守、技術サービス、コミュニティ運営を支えるため、本ウェブサイトは学習体験、アカウント機能、データ API、学習支援、提携連携等に関連する補助的な機能を提供する場合があります。これらの提供形態は、中核的な公開コンテンツの公開アクセス性を変更するものではありません。',
          '本ウェブサイトの一部のコンテンツは、著作権法第32条に基づく「引用」として、個人の学習・研究目的で他者の公表された著作物を利用しています。出典を明記した上で適法に引用しております。権利者の方で著作権侵害の恐れがあるとお考えの場合は、14営業日以内に376672994@qq.comまでメールにてご連絡ください。確認の上、権利者の方のご要望に応じて訂正または削除いたします。',
          '公開コンテンツの一括複製、再配布、商業的な接続、または通常の閲覧・個人学習の範囲を超える利用を行う場合は、本ウェブサイトが別途公表するコンテンツ/API 条項を遵守し、必要に応じて関連する権利者から適切な許諾を得てください。',
        ],
      },
      {
        title: '免責事項',
        items: [
          {
            subtitle: '外部リンクについて',
            content: '本ウェブサイトには第三者のウェブサイトへのリンクが含まれている場合があります。これらのリンクへのアクセスまたは第三者のサービスの利用は、利用者ご自身の判断によるものとします。本ウェブサイトとリンクされた第三者のウェブサイトにアクセスすることを選択した場合、その結果生じるすべてのリスクは利用者ご自身が負担するものとします。法律で許容される範囲において、当方はこれらのリンク先で提供される情報、データ、意見、画像、記述または提案の正確性、完全性、十分性および信頼性について、いかなる保証も行わず、これらのリンク先のコンテンツについていかなる責任も負いません。アクセスするすべての第三者ウェブサイトの利用規約およびプライバシーポリシーを十分にご確認いただくことを強くお勧めいたします。',
          },
          {
            subtitle: 'コンテンツの正確性',
            content: '法律で許容される範囲において、本ウェブサイトは、掲載されているコンテンツの適時性、有効性、完全性、利用可能性等について、明示または黙示を問わず、いかなる形式の保証も提供いたしません。利用者が本ウェブサイトのコンテンツを使用することによって生じたいかなる結果についても、本ウェブサイトは法的責任を負いません。',
          },
        ],
      },
      {
        title: 'プライバシーポリシー',
        items: [
          {
            subtitle: '収集する情報',
            content: 'お客様の選択と端末の設定（特にCookieおよびその他のトラッキング技術）に応じて、お客様が本ウェブサイトにアクセスした際、当方のサーバーはブラウザまたはデバイスが生成する特定の情報を自動的に収集します。これには、アクセスしたドメイン名、アクセス日時と滞在時間、ブラウザの種類、オペレーティングシステムが含まれますが、これらに限定されません。ログイン、マイページ、クラウド同期、ランキング、開発者 API を利用する場合、アカウントのメールアドレス、認証 ID、学習進捗、問題ノート、復習状態、同期記録、API アクセス申請情報、API Key のメタデータ、必要な呼び出しログを処理することがあります。',
          },
          {
            subtitle: '情報の利用目的',
            content: 'これらの情報は主に、ログイン、学習データ同期、マイページ表示、ランキング、API アクセス審査、安全対策、サービス保守、ユーザーサポートのために利用します。機能上必要な範囲で、合理的なデータ最小化に努めます。',
          },
          {
            subtitle: '個人情報の越境移転',
            content: '当方は世界各地に分散したリソースとサーバーまたはサービスを通じてサービスを提供しています。これは、お客様の個人情報が、お客様が製品またはサービスを利用している国・地域以外の管轄区域に移転される可能性があること、または外国の事業体からアクセスされる可能性があることを意味します。お客様は、当方がお客様の個人情報を国外の管轄区域に移転する可能性があることを理解し、同意するものとします。そのような場合、当方は当該国または地域の法的要件の下でお客様の情報が十分に保護されるよう、合理的な措置を講じます。',
          },
          {
            subtitle: 'Cookieの管理とトラッキング',
            content: 'お客様はブラウザでCookieとトラッキング機能の設定を管理できます。設定した内容は、現在ご使用のブラウザにのみ適用されることにご注意ください。',
          },
          {
            subtitle: 'すべてのCookieの無効化',
            content: 'すべてのCookieを無効にしたい場合は、ブラウザの設定からCookie設定を無効にしてください。',
          },
          {
            subtitle: '未成年者について',
            content: '本ウェブサイトは、未成年者（特に16歳未満の方）に対して製品やサービスを提供していません。',
          },
          {
            subtitle: 'お客様の権利',
            content: 'サービスをご利用いただく過程で、お客様の個人情報へのアクセス、削除をより便利に行えるよう、以下に記載の方法でお問い合わせいただければ、合理的な期間内にご対応いたします。',
          },
        ],
      },
      {
        title: 'お問い合わせ',
        content: '本サイトの声明についてご質問がある場合は、376672994@qq.comまでメールにてお問い合わせください。合理的な期間内にご返答いたします。',
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    sections: [
      {
        title: 'Copyright Notice',
        items: [
          'This website is built around an open-source project and a public study archive. Its core public content includes the exam catalog, community-contributed public solutions, public study materials, and related documentation. These materials are provided with continuing public access to support personal study, research, and exam preparation.',
          'To support long-term maintenance, technical services, and community operations, this website may provide supporting features related to learning experience, account services, data APIs, tutoring support, or partner integrations. The way these supporting features are provided does not change the open-access nature of the core public content.',
          'Some materials on this website may include reasonable use of published works by third parties for personal study and research purposes, with authorship and source information indicated where applicable. If a rights holder believes that any content may infringe their rights, please contact us by email at 376672994@qq.com within 14 business days. We will review the request promptly and correct or remove the relevant content as appropriate.',
          'Bulk copying, redistribution, commercial integration, or any other use of public content beyond ordinary browsing and personal study must comply with the content/API terms separately published by this website, and users are responsible for obtaining any necessary permissions from the relevant rights holders.',
        ],
      },
      {
        title: 'Disclaimer',
        items: [
          {
            subtitle: 'External Links',
            content: 'This website may contain links to third-party websites or URLs. Whether to access those links or use the corresponding third-party services is your own decision. If you choose to visit any third-party website linked from this website, all resulting consequences and risks are borne by you. To the extent permitted by law, we do not make any commitment or warranty regarding the accuracy, completeness, adequacy, or reliability of any information, data, opinions, images, statements, or suggestions provided through those links, and we do not assume responsibility for the content of third-party websites. We strongly recommend that you review the legal notices and privacy policies of any third-party websites you visit.',
          },
          {
            subtitle: 'Content Accuracy',
            content: 'To the extent permitted by law, this website provides no express or implied warranty of any kind regarding the timeliness, validity, completeness, availability, or other aspects of the content published on this website. This website assumes no legal responsibility for any consequences arising from your use of its content.',
          },
        ],
      },
      {
        title: 'Privacy Notice',
        items: [
          {
            subtitle: 'Information We Collect',
            content: 'Depending on your choices and device settings, especially cookies and other tracking mechanisms, our servers may automatically collect certain information generated by your browser or device when you visit this website. Such information may include, but is not limited to, the domain name you visit from, the date, time, and duration of your visit, browser type, and operating system. If you use login, personal center, cloud sync, leaderboard, or developer API features, we may also process your account email, authentication identifier, study progress, problem notes, review status, sync records, API access request information, API key metadata, and necessary request logs.',
          },
          {
            subtitle: 'How We Use Information',
            content: 'We use this information primarily to provide authentication, learning data sync, personal center views, leaderboard features, API access review, security controls, service maintenance, and user support. We take reasonable steps to limit processing to what is necessary for the relevant feature.',
          },
          {
            subtitle: 'Cross-Border Transfer of Personal Information',
            content: 'We provide resources, servers, or services across multiple regions. This means that your personal information may be transferred to jurisdictions outside the country or region where you use the product or service, or may be accessed by entities located outside that jurisdiction. You understand and agree that we may transfer your personal information to such jurisdictions. In these cases, we will take reasonable measures to ensure that your information receives adequate protection under the legal requirements of the relevant country or region.',
          },
          {
            subtitle: 'Cookie and Tracking Management',
            content: 'You can manage cookie and tracking settings in your browser. Please note that the settings you choose apply only to the browser currently in use.',
          },
          {
            subtitle: 'Disabling All Cookies',
            content: 'If you wish to disable all cookies, please go to your browser settings and turn off cookie settings.',
          },
          {
            subtitle: 'Minors',
            content: 'This website does not provide products or services to minors, especially children under the age of 14.',
          },
          {
            subtitle: 'Your Rights',
            content: 'During your use of our services, you may contact us through the method listed below to request access to or deletion of your personal information. We will respond to your request within a reasonable period of time.',
          },
        ],
      },
      {
        title: 'Contact Us',
        content: 'If you have any questions about this notice, you may contact us by email at 376672994@qq.com. We will respond within a reasonable period of time.',
      },
    ],
  },
};

export default function LegalStatement() {
  const language = useCurrentLanguage();
  const t = content[language] || content.zh;

  return (
    <Layout title={t.title}>
      <div className="container margin-vert--lg">
        {t.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2>{section.title}</h2>
            {section.content && <p>{section.content}</p>}
            {section.items && (
              <ol>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ marginBottom: '1rem' }}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        <strong>{item.subtitle}</strong>
                        <br />
                        {item.content}
                      </>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
