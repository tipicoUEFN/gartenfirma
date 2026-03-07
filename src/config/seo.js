export const siteConfig = {
  siteName: 'PR Gartenservice',
  siteUrl: 'https://tipicouefn.github.io/gartenfirma',
  defaultImage: 'https://tipicouefn.github.io/gartenfirma/images/hero/hero-gartenpflege-1200x900.webp',
}

export function buildCanonical(pathname = '/') {
  const cleanPath = pathname === '/' ? '' : pathname
  return `${siteConfig.siteUrl}${cleanPath}`
}
