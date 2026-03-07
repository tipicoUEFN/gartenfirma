import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SectionTitle from '../components/SectionTitle'
import { referenceProjects } from '../config/imageLibrary'

const projects = [
  {
    title: 'Gartenneugestaltung mit Pflegeplan',
    location: 'Raum Graz',
    text: 'Nach der Erstpflege wurde ein 12-Monats-Plan zur laufenden Betreuung umgesetzt.',
    ...referenceProjects[0],
  },
  {
    title: 'Heckenprojekt Einfamilienhaus',
    location: 'Leibnitz',
    text: 'Korrekturschnitt und Neuaufbau der Form fuer ein dichtes, gesundes Wachstum.',
    ...referenceProjects[1],
  },
  {
    title: 'Saisonservice Wohnanlage',
    location: 'Suedsteiermark',
    text: 'Laufende Pflege der Gruenflaechen mit festen Intervallen und klaren Reportings.',
    ...referenceProjects[2],
  },
]

function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Sichtbare Resultate aus der Region"
        text="Hier sehen Sie beispielhafte Projekte. Pro Referenz kann ein kombiniertes Vorher-/Nachher-Bild (z. B. ref1.png) verwendet werden."
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle title="Ausgewaehlte Projekte" description="Ein Einblick in typische Aufgaben und Ergebnisse aus unserem Arbeitsalltag." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ReferenceCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReferencesPage
