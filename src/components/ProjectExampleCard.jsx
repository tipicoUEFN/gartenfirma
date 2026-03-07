import { useTranslation } from 'react-i18next'

function ProjectExampleCard({ title, challenge, approach, result, cadence }) {
  const { t } = useTranslation()

  return (
    <article className="rounded-2xl border border-olive-200 bg-white p-5 sm:p-6">
      <h3 className="text-base font-semibold text-olive-800 sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">{t('projectLabels.challenge')}:</span> {challenge}
      </p>
      <p className="mt-2 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">{t('projectLabels.approach')}:</span> {approach}
      </p>
      <p className="mt-2 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">{t('projectLabels.result')}:</span> {result}
      </p>
      {cadence ? (
        <p className="mt-2 text-sm text-olive-700">
          <span className="font-semibold text-olive-800">{t('projectLabels.cadence')}:</span> {cadence}
        </p>
      ) : null}
    </article>
  )
}

export default ProjectExampleCard
