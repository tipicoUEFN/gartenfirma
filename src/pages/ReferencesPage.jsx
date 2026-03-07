import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SectionTitle from '../components/SectionTitle'
import { referenceProjects } from '../config/imageLibrary'

function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Sichtbare Resultate aus der Region"
        text="Hier sehen Sie ausgewaehlte Arbeiten. Die Galerie ist auf 5-6 Projektbilder mit Dateinamen ref1.png bis ref6.png vorbereitet."
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle title="Ausgewaehlte Projekte" description="Ein Einblick in typische Gartenarbeiten wie Rasenpflege, Heckschnitt und Saisonservice." />
          <div className="grid gap-5 lg:grid-cols-3">
            {referenceProjects.map((project) => (
              <ReferenceCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReferencesPage
