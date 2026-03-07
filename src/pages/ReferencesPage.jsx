import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { caseStudies } from '../config/caseStudies'
import { referenceProjects } from '../config/imageLibrary'
import { locationPages } from '../config/locationPages'

function ReferencesPage() {
  const { t } = useTranslation()
  const locationLinkByTown = new Map(locationPages.map((item) => [item.town, `/${item.slug}`]))
  const localizedReferences = referenceProjects.map((project, index) => ({
    ...project,
    title: t(`references.projects.${index + 1}.title`),
    location: t(`references.projects.${index + 1}.location`),
    text: t(`references.projects.${index + 1}.text`),
  }))

  return (
    <>
      <SeoHead
        title="Referenzen aus der Region"
        description="Ausgewählte Projekte zu Rasenpflege, Heckschnitt und Objektpflege im Raum Leibnitz, Graz und Südsteiermark."
        pathname="/referenzen"
      />

      <PageHero
        eyebrow={t('references.eyebrow')}
        title={t('references.title')}
        text={t('references.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle title={t('references.sectionTitle')} description={t('references.sectionDescription')} />
          <div className="grid gap-5 lg:grid-cols-3">
            {localizedReferences.map((project) => (
              <ReferenceCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            title="Einsätze nach Ort"
            description="Konkrete Projekte aus der Region mit Leistung, Objektart und Betreuungsrhythmus."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.id} className="rounded-2xl border border-olive-200 bg-white p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="rounded-full bg-olive-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
                    {study.town}
                  </p>
                  <p className="rounded-full bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-700">{study.service}</p>
                  <p className="rounded-full bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-700">{study.objectType}</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-olive-800">Projekt in {study.town}</h3>
                <p className="mt-3 text-sm text-olive-700"><span className="font-semibold text-olive-800">Ausgangslage:</span> {study.challenge}</p>
                <p className="mt-2 text-sm text-olive-700"><span className="font-semibold text-olive-800">Umsetzung:</span> {study.approach}</p>
                <p className="mt-2 text-sm text-olive-700"><span className="font-semibold text-olive-800">Ergebnis:</span> {study.result}</p>
                <p className="mt-2 text-sm text-olive-700"><span className="font-semibold text-olive-800">Intervall:</span> {study.cadence}</p>
                {locationLinkByTown.get(study.town) ? (
                  <Link
                    to={locationLinkByTown.get(study.town)}
                    className="mt-4 inline-flex text-sm font-semibold text-olive-700 hover:text-olive-800"
                  >
                    Mehr zu Gartenpflege in {study.town}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReferencesPage
