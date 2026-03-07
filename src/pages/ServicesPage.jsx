import { Flower2, Leaf, Scissors, Shovel, Sprout, Trees } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

function ServicesPage() {
  const { t } = useTranslation()

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
      <PageHero
        eyebrow={t('servicesPage.heroEyebrow')}
        title={t('servicesPage.heroTitle')}
        text={t('servicesPage.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            title={t('servicesPage.sectionTitle')}
            description={t('servicesPage.sectionDescription')}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-olive-700 sm:text-base">
            {t('servicesPage.infoLine')}
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ServicesPage
