import { Flower2, Leaf, Scissors, Shovel, Sprout, Trees } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import ProjectExampleCard from '../components/ProjectExampleCard'
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

  const serviceExamples = [
    {
      title: 'Rasenpflege - Beispiel',
      challenge: 'Unregelmäßiges Wachstum und unsaubere Rasenkanten.',
      approach: 'Regelmäßiges Mähen und präzise Kantenpflege im 14-Tage-Rhythmus.',
      result: 'Gleichmäßiger und gepflegter Rasen mit klarem Gesamtbild.',
    },
    {
      title: 'Heckenschnitt - Beispiel',
      challenge: 'Überwachsene Hecke am Grundstücksrand und unklare Linien.',
      approach: 'Gezielter Formschnitt mit sauberer Entsorgung des Schnittguts.',
      result: 'Dichte Hecke, klare Konturen und ordentliches Erscheinungsbild.',
    },
    {
      title: 'Beetpflege - Beispiel',
      challenge: 'Verunkrautete Beete und unruhiger Eindruck am Eingangsbereich.',
      approach: 'Unkrautentfernung, Rückschnitt und strukturierte Nachpflege.',
      result: 'Saubere Beetflächen und deutlich ruhigeres Gesamtbild.',
    },
    {
      title: 'Saisonservice - Beispiel',
      challenge: 'Laubmengen im Herbst und ungepflegte Flächen nach dem Winter.',
      approach: 'Frühjahrs- und Herbstdurchgang mit Laubarbeiten und Aufräumservice.',
      result: 'Flächen bleiben nutzbar und wirken durchgehend gepflegt.',
    },
    {
      title: 'Objektpflege - Beispiel',
      challenge: 'Uneinheitlicher Eindruck bei mehreren Grünflächen rund ums Objekt.',
      approach: 'Fester Tourenplan für Rasen, Beete und Sichtachsen am Standort.',
      result: 'Verlässlicher Pflegezustand im laufenden Betrieb.',
    },
    {
      title: 'Fensterreinigung - Beispiel',
      challenge: 'Verschmutzte Erdgeschossfenster bei Büro und Eingangsbereich.',
      approach: 'Regelmäßige Reinigung mit abgestimmten Intervallen vor Ort.',
      result: 'Saubere Fensterflächen und gepflegter erster Eindruck.',
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
            description="Kurzer Überblick zu unseren Leistungen in der Region."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow="Praxisbeispiele"
            title="So laufen typische Einsätze ab"
            description="Kompakt nach Ausgangslage, Umsetzung und Ergebnis."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {serviceExamples.map((example) => (
              <ProjectExampleCard key={example.title} {...example} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <SectionTitle
            title="Leistung + Ort"
            description="Häufig gesuchte Kombinationen in unserer Region."
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
