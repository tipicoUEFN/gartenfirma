// Local image paths served from /public/images.
// Replace these files with your final licensed selections as needed.

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const homepageImages = {
  hero: {
    src: withBase('images/hero/hero-gartenpflege-1200x900.webp'),
    srcSet: [
      `${withBase('images/hero/hero-gartenpflege-800x600.webp')} 800w`,
      `${withBase('images/hero/hero-gartenpflege-1200x900.webp')} 1200w`,
      `${withBase('images/hero/hero-gartenpflege-1600x1200.webp')} 1600w`,
    ].join(', '),
    alt: 'Gaertner schiebt Schubkarre mit Pflanze durch gepflegten Garten.',
    sourcePage: 'https://www.pexels.com/photo/crop-unrecognizable-gardener-pushing-wheelbarrow-with-potted-plant-5230902/',
  },
}

export const referenceProjects = [
  {
    title: 'Rasen maehen',
    location: 'Suedsteiermark',
    text: 'Regelmaessige Rasenpflege fuer ein sauberes, gleichmaessiges Gesamtbild.',
    image: withBase('images/references/ref1.webp'),
    fallbackImage: withBase('images/references/ref1.png'),
  },
  {
    title: 'Heckschnitt',
    location: 'Leibnitz',
    text: 'Praeziser Formschnitt fuer dichte, gesunde Hecken und klare Linien.',
    image: withBase('images/references/ref2.webp'),
    fallbackImage: withBase('images/references/ref2.png'),
  },
  {
    title: 'Beetpflege',
    location: 'Graz Umgebung',
    text: 'Pflege von Beeten und Stauden fuer ein ordentliches Erscheinungsbild.',
    image: withBase('images/references/ref3.webp'),
    fallbackImage: withBase('images/references/ref3.png'),
  },
  {
    title: 'Objektpflege',
    location: 'Raum Graz',
    text: 'Laufende Pflege von Gruenflaechen mit festen Intervallen.',
    image: withBase('images/references/ref4.webp'),
    fallbackImage: withBase('images/references/ref4.png'),
  },
  {
    title: 'Saisonservice',
    location: 'Suedsteiermark',
    text: 'Fruehjahrs- und Herbstarbeiten fuer eine saubere Gartenstruktur.',
    image: withBase('images/references/ref5.webp'),
    fallbackImage: withBase('images/references/ref5.png'),
  },
]
