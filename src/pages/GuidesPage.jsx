import { CalendarClock, Sprout } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'

function GuidesPage() {
  const { t } = useTranslation()
  const guides = t('guidesPage.guides', { returnObjects: true })

  return (
    <>
      <SeoHead
        title={t('guidesPage.seoTitle')}
        description={t('guidesPage.seoDescription')}
        pathname="/ratgeber"
      />

      <PageHero
        eyebrow={t('guidesPage.heroEyebrow')}
        title={t('guidesPage.heroTitle')}
        text={t('guidesPage.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.title} className="rounded-2xl border border-olive-200 bg-white p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
                <CalendarClock size={14} />
                {t('guidesPage.tipLabel')}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-olive-800">{guide.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-olive-700">{guide.text}</p>
              <Link to="/kontakt" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive-700">
                <Sprout size={16} />
                {t('guidesPage.cta')}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default GuidesPage
