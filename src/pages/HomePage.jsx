import { ArrowRight, Clock3, Flower2, Leaf, Scissors, ShieldCheck, Shovel, Sprout, Trees, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TrustCard from '../components/TrustCard'
import { businessData } from '../config/businessData'
import { homepageImages, referenceImagePairs } from '../config/imageLibrary'

const services = [
  {
    icon: Scissors,
    title: 'Hecken- und Strauchschnitt',
    description: 'Fachgerechter Rueckschnitt fuer gesunde Pflanzen und ein gepflegtes Gesamtbild ueber das ganze Jahr.',
  },
  {
    icon: Shovel,
    title: 'Rasenpflege',
    description: 'Maehen, Vertikutieren, Duengen und Bodenverbesserung abgestimmt auf Standort und Saison.',
  },
  {
    icon: Flower2,
    title: 'Beet- und Staudenpflege',
    description: 'Saubere Beete, strukturierte Pflanzflaechen und ein harmonisches Erscheinungsbild rund ums Haus.',
  },
  {
    icon: Trees,
    title: 'Baum- und Gruenschnitt',
    description: 'Sichere und saubere Pflegearbeiten bei kleineren Baumbestaenden und Ziergehwoelzen.',
  },
  {
    icon: Sprout,
    title: 'Saisonservice',
    description: 'Fruehjahrs- und Herbstservice inklusive Laubarbeiten, Rueckschnitt und Wintervorbereitung.',
  },
  {
    icon: Leaf,
    title: 'Laufende Objektpflege',
    description: 'Regelmaessige Betreuung fuer Privatgaerten, Wohnanlagen und kleine Gewerbeflaechen.',
  },
]

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Verlaessliche Ausfuehrung',
    text: 'Klare Termine, transparente Leistungen und saubere Arbeit bis ins Detail.',
  },
  {
    icon: Clock3,
    title: 'Puenktlich & planbar',
    text: 'Wir arbeiten strukturiert und halten vereinbarte Zeitfenster ein.',
  },
  {
    icon: Users,
    title: 'Persoenliche Betreuung',
    text: 'Direkter Ansprechpartner und individuelle Loesungen fuer Ihren Garten.',
  },
]

const references = [
  {
    title: 'Privatgarten mit Hanglage',
    location: 'Leibnitz',
    text: 'Grundpflege und Neuordnung der Beete fuer ein ruhiges, klar strukturiertes Gartenbild.',
    ...referenceImagePairs[0],
  },
  {
    title: 'Familiengarten im Siedlungsgebiet',
    location: 'Graz Umgebung',
    text: 'Heckenkorrektur, Rasensanierung und laufende Pflege fuer eine dauerhaft gepflegte Aussenflaeche.',
    ...referenceImagePairs[1],
  },
  {
    title: 'Objektpflege Mehrparteienhaus',
    location: 'Suedsteiermark',
    text: 'Regelmaessiger Schnitt und saisonale Betreuung der Allgemeinflaechen.',
    ...referenceImagePairs[2],
  },
]

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Gartenpflege"
        title="Ihr Garten in besten Haenden. Gepflegt, klar und professionell betreut."
        text={`${businessData.companyName} bietet hochwertige Gartenpflege fuer Privat- und Firmenkunden in der Suedsteiermark. Mit Fachwissen, Handschlagqualitaet und Blick fuers Detail.`}
        imageSrc={homepageImages.hero.src}
        imageAlt={homepageImages.hero.alt}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
          >
            Jetzt Beratung anfragen
            <ArrowRight size={18} />
          </Link>
          <span className="text-sm text-olive-700">Einsatzgebiet: {businessData.serviceArea}</span>
        </div>
      </PageHero>

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            eyebrow="Leistungen"
            title="Alles fuer einen gepflegten Garten"
            description="Vom regelmaessigen Service bis zum gezielten Saisoneinsatz. Wir arbeiten sorgfaeltig, effizient und nachvollziehbar."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow="Warum wir"
            title="Vertrauen entsteht durch saubere Arbeit"
            description="Unser Anspruch ist ein Ergebnis, das langfristig ueberzeugt. Fachlich, optisch und organisatorisch."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {trustItems.map((item) => (
              <TrustCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Ueber uns"
              title="Regional verwurzelt. Persoenlich im Kontakt."
              description="Wir kennen die Anforderungen von Gaerten in der Region und setzen auf nachhaltige Pflege statt kurzfristiger Kosmetik."
            />
            <p className="max-w-xl text-sm leading-relaxed text-olive-700 sm:text-base">
              Unser Team arbeitet mit klaren Prozessen und ehrlicher Beratung. Sie erhalten nachvollziehbare Empfehlungen und ein Ergebnis, das Ihren Garten sichtbar aufwertet.
            </p>
            <Link
              to="/ueber-uns"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive-700 hover:text-olive-800"
            >
              Mehr ueber unser Team
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">Regional aktiv</p>
            <ul className="mt-4 space-y-3 text-sm text-olive-700 sm:text-base">
              <li>Suedsteiermark</li>
              <li>Graz</li>
              <li>Leibnitz</li>
              <li>Umgebung</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow="Referenzen"
            title="Vorher und nachher: sichtbare Ergebnisse"
            description="Beispielhafte Projekte aus der Region. Die Platzhalterflaechen koennen spaeter durch echte Vorher-Nachher-Fotos ersetzt werden."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {references.map((item) => (
              <ReferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="glass-card grid gap-8 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-600">Einsatzgebiet</p>
              <h2 className="headline mt-3 text-3xl font-semibold text-olive-800">Vor Ort in Ihrer Region</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-olive-700 sm:text-base">
                Wir betreuen Kundinnen und Kunden in {businessData.serviceArea}. Durch unsere regionale Naehe sind wir flexibel, schnell erreichbar und persoenlich fuer Sie da.
              </p>
            </div>
            <div className="rounded-2xl bg-olive-800 p-6 text-olive-100">
              <p className="text-sm">Telefon</p>
              <a href={`tel:${businessData.primaryPhone}`} className="mt-1 block text-xl font-semibold text-white">
                {businessData.phoneContacts[0]?.label}: {businessData.primaryPhone}
              </a>
              <ul className="mt-3 space-y-1 text-sm text-olive-200">
                {businessData.phoneContacts.slice(1).map((contact) => (
                  <li key={contact.phone}>
                    <a href={`tel:${contact.phone}`} className="hover:text-white">
                      {contact.label}: {contact.phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">E-Mail</p>
              <a href={`mailto:${businessData.email}`} className="mt-1 block text-base font-semibold text-white">
                {businessData.email}
              </a>
              <p className="mt-6 text-sm">Adresse</p>
              <p className="mt-1 text-base text-white">{businessData.address}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default HomePage
