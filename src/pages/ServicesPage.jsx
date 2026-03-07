import { Flower2, Leaf, Scissors, Shovel, Sprout, Trees } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { locationPages } from '../config/locationPages'

function ServicesPage() {
  const { t } = useTranslation()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t('servicesPage.faq', { returnObjects: true }).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const serviceList = [
    {
      icon: Shovel,
      title: t('servicesPage.lawnTitle'),
      description: t('servicesPage.lawnDescription'),
    },
    {
      icon: Scissors,
      title: t('servicesPage.hedgeTitle'),
      description: t('servicesPage.hedgeDescription'),
    },
    {
      icon: Flower2,
      title: t('servicesPage.bedsTitle'),
      description: t('servicesPage.bedsDescription'),
    },
    {
      icon: Trees,
      title: t('servicesPage.greenTitle'),
      description: t('servicesPage.greenDescription'),
    },
    {
      icon: Sprout,
      title: t('servicesPage.seasonTitle'),
      description: t('servicesPage.seasonDescription'),
    },
    {
      icon: Leaf,
      title: t('servicesPage.ongoingTitle'),
      description: t('servicesPage.ongoingDescription'),
    },
  ]

  return (
    <>
      <SeoHead
        title={t('servicesPage.seoTitle')}
        description={t('servicesPage.seoDescription')}
        pathname="/leistungen"
        structuredData={faqSchema}
      />

      <section className="section-spacing">
        <div className="container-width">
          <SectionTitle
            title={t('servicesPage.sectionTitle')}
            description={t('servicesPage.sectionDescriptionShort')}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <SectionTitle
            title={t('servicesPage.locationLinksTitle')}
            description={t('servicesPage.locationLinksDescription')}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                to={`/${location.slug}`}
                className="rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm font-medium text-olive-800"
              >
                {t('servicesPage.gardenCareInTown', { town: location.town })}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ServicesPage
