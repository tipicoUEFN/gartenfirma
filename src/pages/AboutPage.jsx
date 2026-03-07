import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'

function AboutPage() {
  const { t } = useTranslation()
  const values = [
    t('aboutPage.value1'),
    t('aboutPage.value2'),
    t('aboutPage.value3'),
    t('aboutPage.value4'),
  ]

  return (
    <>
      <SeoHead
        title="Ueber uns"
        description="Regionaler Gartenservice in der Suedsteiermark mit persoenlicher Beratung, klaren Prozessen und verlaesslicher Ausfuehrung."
        pathname="/ueber-uns"
      />

      <PageHero
        eyebrow={t('aboutPage.heroEyebrow')}
        title={t('aboutPage.heroTitle')}
        text={t('aboutPage.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              title={t('aboutPage.sectionTitle')}
              description={t('aboutPage.sectionDescription')}
            />
            <p className="text-sm leading-relaxed text-olive-700 sm:text-base">
              {t('aboutPage.body')}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">{t('aboutPage.valuesEyebrow')}</p>
            <ul className="mt-5 space-y-4">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-olive-700 sm:text-base">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-olive-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
