import { useEffect } from 'react'
import { buildCanonical, siteConfig } from '../config/seo'

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLinkCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function SeoHead({ title, description, pathname, image, type = 'website', structuredData }) {
  const canonical = buildCanonical(pathname)
  const fullTitle = `${title} | ${siteConfig.siteName}`
  const ogImage = image ?? siteConfig.defaultImage

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:locale', 'de_AT')
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', siteConfig.siteName)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
    setLinkCanonical(canonical)
  }, [canonical, description, fullTitle, ogImage, type])

  useEffect(() => {
    const existing = document.head.querySelectorAll('script[data-seo-structured="true"]')
    existing.forEach((node) => node.remove())

    if (!structuredData) {
      return
    }

    const schemas = Array.isArray(structuredData) ? structuredData : [structuredData]

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-structured', 'true')
      script.setAttribute('data-seo-structured-id', `${pathname || '/'}-${index}`)
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      const stale = document.head.querySelectorAll('script[data-seo-structured="true"]')
      stale.forEach((node) => node.remove())
    }
  }, [pathname, structuredData])

  return null
}

export default SeoHead
