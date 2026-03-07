import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import { locationPages } from '../config/locationPages'

function LocationPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const location = locationPages.find((item) => item.slug === slug)

  if (!location) {
    return <Navigate to="/" replace />
  }

  const title = t(`locationPages.${slug}.title`, { town: location.town })
  const heroTitle = t(`locationPages.${slug}.heroTitle`, { town: location.town })
  const intro = t(`locationPages.${slug}.intro`, { town: location.town })
  const services = t(`locationPages.${slug}.services`, { returnObjects: true })
  const trust = t(`locationPages.${slug}.trust`, { returnObjects: true })
  const description = t('locationPage.seoDescription', { town: location.town })
  const faq = t('locationPage.faq', { returnObjects: true, town: location.town })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        pathname={`/${location.slug}`}
        structuredData={faqSchema}
      />

      <PageHero
        eyebrow={t('locationPage.heroEyebrow')}
        title={heroTitle}
        text={intro}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white hover:bg-olive-800"
          >
            {t('locationPage.ctaOffer', { town: location.town })}
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-olive-300 bg-white px-5 py-3 text-sm font-semibold text-olive-800"
          >
            {t('locationPage.ctaServices')}
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle title={t('locationPage.servicesTitle', { town: location.town })} />
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm text-olive-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-olive-700" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle title={t('locationPage.trustTitle', { town: location.town })} />
            <ul className="space-y-3">
              {trust.map((point) => (
                <li key={point} className="rounded-xl border border-olive-200 bg-olive-50/70 px-4 py-3 text-sm text-olive-700">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-olive-800 p-6 text-olive-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-200">{t('locationPage.regionalHintTitle')}</p>
              <p className="mt-3 text-sm leading-relaxed">
                {t('locationPage.regionalHintText', { town: location.town })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default LocationPage
