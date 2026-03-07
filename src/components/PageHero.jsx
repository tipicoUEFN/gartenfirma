function PageHero({ eyebrow, title, text, children, imageSrc, imageAlt, imageSrcSet, imageContent, footerContent }) {
  return (
    <section className="section-spacing pt-6 sm:pt-8 lg:pt-10">
      <div className="container-width">
        <div className="reveal glass-card overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
          <div className={imageSrc || imageContent ? 'grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center' : ''}>
            <div>
              {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-olive-600">{eyebrow}</p> : null}
              <h1 className="headline max-w-4xl text-3xl font-semibold text-olive-800 sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-olive-700 sm:text-base">{text}</p>
              {children ? <div className="mt-8">{children}</div> : null}
            </div>

            {imageContent ? (
              <div className="overflow-hidden rounded-2xl border border-olive-200 shadow-md">
                {imageContent}
              </div>
            ) : null}

            {!imageContent && imageSrc ? (
              <div className="overflow-hidden rounded-2xl border border-olive-200 shadow-md">
                {/* TODO: replace placeholder image with real work photos (hedge trimming, mowing, before/after, equipment). */}
                <img
                  src={imageSrc}
                  srcSet={imageSrcSet}
                  alt={imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            ) : null}
          </div>

          {footerContent ? <div className="mt-8">{footerContent}</div> : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
