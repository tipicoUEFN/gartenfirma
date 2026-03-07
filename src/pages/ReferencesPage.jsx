import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'
import { referenceProjects } from '../config/imageLibrary'

function ReferencesPage() {
  const { t } = useTranslation()
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
        description="Ausgewaehlte Projekte zu Rasenpflege, Heckschnitt und Objektpflege im Raum Leibnitz, Graz und Suedsteiermark."
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
    </>
  )
}

export default ReferencesPage
