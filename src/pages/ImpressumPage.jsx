import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import { useTranslation } from 'react-i18next'
import { businessData } from '../config/businessData'

function ImpressumPage() {
  const { t } = useTranslation()

  return (
    <>
      <SeoHead
        title={t('impressum.seoTitle')}
        description={t('impressum.seoDescription')}
        pathname="/impressum"
      />

      <PageHero
        eyebrow={t('impressum.eyebrow')}
        title={t('impressum.title')}
        text={t('impressum.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-6 text-sm leading-relaxed text-olive-700 sm:p-8">
            <p className="font-semibold text-olive-800">{businessData.companyName}</p>
            <p>{businessData.address}</p>
            <div className="mt-4">
              <p>{t('impressum.phoneLabel')}</p>
              {businessData.phoneContacts.map((contact) => (
                <p key={contact.phone}>
                  {contact.label}: {contact.phone}
                </p>
              ))}
            </div>
            <p>{t('impressum.emailLabel')} {businessData.email}</p>
            <p className="mt-4">{t('impressum.businessPurpose')}</p>
            <p>{t('impressum.uid')}</p>
            <p>{t('impressum.companyNumber')}</p>
            <p>{t('impressum.companyCourt')}</p>
            <p className="mt-4">{t('impressum.authority')}</p>
            <p>{t('impressum.membership')}</p>
            <p className="mt-4">{t('impressum.tradeLaw')}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImpressumPage
