import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import { useTranslation } from 'react-i18next'

function DatenschutzPage() {
  const { t } = useTranslation()

  return (
    <>
      <SeoHead
        title={t('privacy.seoTitle')}
        description={t('privacy.seoDescription')}
        pathname="/datenschutz"
      />

      <PageHero
        eyebrow={t('privacy.eyebrow')}
        title={t('privacy.title')}
        text={t('privacy.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="glass-card space-y-5 rounded-2xl p-6 text-sm leading-relaxed text-olive-700 sm:p-8">
            <div>
              <h2 className="text-base font-semibold text-olive-800">{t('privacy.section1Title')}</h2>
              <p className="mt-2">
                {t('privacy.section1Text')}
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">{t('privacy.section2Title')}</h2>
              <p className="mt-2">
                {t('privacy.section2Text')}
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">{t('privacy.section3Title')}</h2>
              <p className="mt-2">
                {t('privacy.section3Text')}
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">{t('privacy.section4Title')}</h2>
              <p className="mt-2">
                {t('privacy.section4Text')}
              </p>
            </div>

            <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs text-amber-900">
              {t('privacy.notice')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default DatenschutzPage
