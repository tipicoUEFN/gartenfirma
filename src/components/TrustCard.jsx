import { createElement } from 'react'

function TrustCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-olive-200 bg-olive-100/50 p-6 transition hover:border-olive-300 hover:bg-white">
      <div className="mb-4 inline-flex rounded-lg bg-white p-2 text-olive-700 shadow-sm">
        {createElement(icon, { size: 20 })}
      </div>
      <h3 className="text-base font-semibold text-olive-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-olive-700">{text}</p>
    </article>
  )
}

export default TrustCard
