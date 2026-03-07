import { CalendarClock, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'

const guides = [
  {
    title: 'Rasenpflege im Fruehling in der Suedsteiermark',
    text: 'Wann duengen, wie oft maehen und wie der Rasen nach dem Winter wieder dicht wird.',
  },
  {
    title: 'Hecke schneiden: Zeitpunkt, Pflege und saubere Kanten',
    text: 'Praxisnahe Hinweise fuer gesunde Hecken und ein gepflegtes Gesamtbild.',
  },
  {
    title: 'Laubarbeiten im Herbst: sicher und effizient',
    text: 'So bleiben Wege, Einfahrten und Gruenflaechen ordentlich und rutschfest.',
  },
  {
    title: 'Garten im Fruehjahr vorbereiten: kompakte Checkliste',
    text: 'Die wichtigsten Schritte fuer einen starken Start in die Saison.',
  },
]

function GuidesPage() {
  return (
    <>
      <SeoHead
        title="Ratgeber fuer Gartenpflege"
        description="Saisonale Tipps zu Rasenpflege, Heckenpflege und Gartenarbeiten in Leibnitz und Umgebung."
        pathname="/ratgeber"
      />

      <PageHero
        eyebrow="Ratgeber"
        title="Tipps fuer Gartenpflege in Leibnitz und Umgebung"
        text="Hier finden Sie kompakte, saisonale Empfehlungen fuer gepflegte Gruenflaechen."
      />

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.title} className="rounded-2xl border border-olive-200 bg-white p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
                <CalendarClock size={14} />
                Saison-Tipp
              </p>
              <h2 className="mt-4 text-xl font-semibold text-olive-800">{guide.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-olive-700">{guide.text}</p>
              <Link to="/kontakt" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive-700">
                <Sprout size={16} />
                Beratung zur Umsetzung anfragen
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default GuidesPage
