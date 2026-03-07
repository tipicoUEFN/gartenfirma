import { Flower2, Leaf, Scissors, Shovel, Sprout, Trees } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { locationPages } from '../config/locationPages'

function ServicesPage() {
  const { t } = useTranslation()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie oft sollte man Rasen maehen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Hauptsaison empfehlen wir je nach Wachstum meist einen Rhythmus von 7 bis 14 Tagen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte betreuen Sie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir arbeiten im Raum Leibnitz, Graz, Wagna, Gralla, Tillmitsch, Strass und Umgebung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bieten Sie Gartenpflege fuer Firmen an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir betreuen auch Firmenstandorte, Wohnanlagen und oeffentliche Einrichtungen mit laufenden Intervallen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie kann ich ein Angebot anfragen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Am schnellsten ueber unser Kontaktformular oder telefonisch. Wir melden uns in der Regel innerhalb von 24 Stunden zurueck.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet Heckenpflege?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten haengen von Laenge, Hoehe und Zugaenglichkeit der Hecke ab. Nach kurzer Abstimmung erstellen wir ein klares Angebot.',
        },
      },
    ],
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
        title="Leistungen fuer Gartenpflege"
        description="Unsere Leistungen: Rasenmaehen, Heckenpflege, Laubarbeiten und laufende Betreuung von Aussenanlagen in Leibnitz und Umgebung."
        pathname="/leistungen"
        structuredData={faqSchema}
      />

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

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            title="Leistung + Ort"
            description="Haeufig gesuchte Kombinationen in unserer Region."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                to={`/${location.slug}`}
                className="rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm font-medium text-olive-800"
              >
                Gartenpflege {location.town}
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
