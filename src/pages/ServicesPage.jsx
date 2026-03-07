import { Flower2, Leaf, Scissors, Shovel, Sprout, Trees } from 'lucide-react'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

const serviceList = [
  {
    icon: Scissors,
    title: 'Hecken- und Strauchschnitt',
    description: 'Form- und Pflegeschnitt fuer gesunde Strukturen und ein gepflegtes Gesamtbild.',
  },
  {
    icon: Shovel,
    title: 'Rasenpflege',
    description: 'Regelmaessiges Maehen, Vertikutieren, Duengen und standortgerechte Pflege.',
  },
  {
    icon: Flower2,
    title: 'Beetpflege',
    description: 'Pflege von Stauden und Zierbeeten inklusive Rueckschnitt und Bodenlockerung.',
  },
  {
    icon: Trees,
    title: 'Gruenschnitt',
    description: 'Sicherer Schnitt bei kleineren Baeumen, Straeuchern und Ziergehoelzen.',
  },
  {
    icon: Sprout,
    title: 'Saisonarbeiten',
    description: 'Fruehjahrsfit, Herbstservice, Laubarbeiten und Wintervorbereitung.',
  },
  {
    icon: Leaf,
    title: 'Laufende Betreuung',
    description: 'Regelmaessige Gartenpflege nach einem festen Intervallplan.',
  },
]

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Individuelle Gartenpflege statt Standardpaket"
        text="Jeder Garten hat andere Anforderungen. Wir erstellen ein passendes Pflegekonzept und setzen dieses sorgfaeltig um."
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            title="Unsere Kernleistungen"
            description="Alle Leistungen koennen einzeln oder als laufendes Gesamtpaket beauftragt werden."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ServicesPage
