import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const values = [
  'Persoenliche Beratung mit klarem Leistungsumfang',
  'Termintreue und saubere Arbeitsweise',
  'Nachhaltige Pflege mit Blick auf langfristige Wirkung',
  'Regionale Naehe und direkte Erreichbarkeit',
]

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Ueber uns"
        title="Professionelle Gartenpflege mit regionalem Fokus"
        text="Als Gartenpflegebetrieb in der Suedsteiermark stehen wir fuer verlaessliche Betreuung, ehrliche Beratung und Ergebnisse, die langfristig bestehen."
      />

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              title="Wie wir arbeiten"
              description="Wir nehmen uns Zeit fuer eine saubere Bestandsaufnahme und empfehlen nur das, was Ihrem Garten wirklich hilft."
            />
            <p className="text-sm leading-relaxed text-olive-700 sm:text-base">
              Unser Ziel ist ein gepflegter Garten, der zu Ihrem Alltag passt. Deshalb setzen wir auf klare Ablaeufe, nachvollziehbare Angebote und kontinuierliche Qualitaet in der Ausfuehrung.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">Unsere Werte</p>
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
