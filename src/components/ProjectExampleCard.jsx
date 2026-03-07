function ProjectExampleCard({ title, challenge, approach, result, cadence }) {
  return (
    <article className="rounded-2xl border border-olive-200 bg-white p-5 sm:p-6">
      <h3 className="text-base font-semibold text-olive-800 sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">Ausgangslage:</span> {challenge}
      </p>
      <p className="mt-2 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">Umsetzung:</span> {approach}
      </p>
      <p className="mt-2 text-sm text-olive-700">
        <span className="font-semibold text-olive-800">Ergebnis:</span> {result}
      </p>
      {cadence ? (
        <p className="mt-2 text-sm text-olive-700">
          <span className="font-semibold text-olive-800">Intervall:</span> {cadence}
        </p>
      ) : null}
    </article>
  )
}

export default ProjectExampleCard
