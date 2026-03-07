import { createElement } from 'react'

function ServiceCard({ icon, title, description }) {
  return (
    <article className="glass-card group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-xl bg-olive-100 p-3 text-olive-700 transition group-hover:bg-olive-700 group-hover:text-white">
        {createElement(icon, { size: 22, strokeWidth: 2 })}
      </div>
      <h3 className="text-lg font-semibold text-olive-800">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-olive-700">{description}</p>
    </article>
  )
}

export default ServiceCard
