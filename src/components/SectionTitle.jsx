function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-olive-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="headline text-2xl font-semibold text-olive-800 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-4 text-sm font-medium leading-relaxed text-olive-700 sm:text-base">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
