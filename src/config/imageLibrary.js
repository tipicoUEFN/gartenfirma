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
    alt: 'Gärtner schiebt Schubkarre mit Pflanze durch gepflegten Garten.',
    sourcePage: 'https://www.pexels.com/photo/crop-unrecognizable-gardener-pushing-wheelbarrow-with-potted-plant-5230902/',
  },
}

export const heroSlides = [
  {
    src: withBase('images/hero/hero6-rasenmaeher-real-1600x1200.webp'),
    srcSet: [
      `${withBase('images/hero/hero6-rasenmaeher-real-800x600.webp')} 800w`,
      `${withBase('images/hero/hero6-rasenmaeher-real-1200x900.webp')} 1200w`,
      `${withBase('images/hero/hero6-rasenmaeher-real-1600x1200.webp')} 1600w`,
      `${withBase('images/hero/hero6-rasenmaeher-real-2400x1800.webp')} 2400w`,
    ].join(', '),
    sizes: '(max-width: 1024px) 100vw, 42vw',
    width: 1600,
    height: 1200,
    alt: 'Rasenmäher im Einsatz im gepflegten Privatgarten',
  },
  {
    src: withBase('images/hero/hero3-gartenpflege-1600x1200.webp'),
    srcSet: [
      `${withBase('images/hero/hero3-gartenpflege-800x600.webp')} 800w`,
      `${withBase('images/hero/hero3-gartenpflege-1200x900.webp')} 1200w`,
      `${withBase('images/hero/hero3-gartenpflege-1600x1200.webp')} 1600w`,
      `${withBase('images/hero/hero3-gartenpflege-2400x1800.webp')} 2400w`,
    ].join(', '),
    sizes: '(max-width: 1024px) 100vw, 42vw',
    width: 1600,
    height: 1200,
    alt: 'Heckenschnitt in Leibnitz',
  },
  {
    src: withBase('images/hero/hero4-gartenpflege-1600x1200.webp'),
    srcSet: [
      `${withBase('images/hero/hero4-gartenpflege-800x600.webp')} 800w`,
      `${withBase('images/hero/hero4-gartenpflege-1200x900.webp')} 1200w`,
      `${withBase('images/hero/hero4-gartenpflege-1600x1200.webp')} 1600w`,
      `${withBase('images/hero/hero4-gartenpflege-2400x1800.webp')} 2400w`,
    ].join(', '),
    sizes: '(max-width: 1024px) 100vw, 42vw',
    width: 1600,
    height: 1200,
    alt: 'Laubarbeiten mit Laubbläser im Garten',
  },
  {
    src: withBase('images/hero/hero5-fensterreinigung-1600x1200.webp'),
    srcSet: [
      `${withBase('images/hero/hero5-fensterreinigung-800x600.webp')} 800w`,
      `${withBase('images/hero/hero5-fensterreinigung-1200x900.webp')} 1200w`,
      `${withBase('images/hero/hero5-fensterreinigung-1600x1200.webp')} 1600w`,
      `${withBase('images/hero/hero5-fensterreinigung-2400x1800.webp')} 2400w`,
    ].join(', '),
    sizes: '(max-width: 1024px) 100vw, 42vw',
    width: 1600,
    height: 1200,
    alt: 'Fensterreinigung am Einfamilienhaus',
  },
]

export const referenceProjects = [
  // TODO: Replace/supplement these placeholders with real project photos (before/after, equipment, team-on-site) for stronger trust.
  {
    title: 'Rasen mähen',
    location: 'Südsteiermark',
    text: 'Regelmäßige Rasenpflege für ein sauberes, gleichmäßiges Gesamtbild.',
    image: withBase('images/references/ref1.webp'),
    fallbackImage: withBase('images/references/ref1.png'),
  },
  {
    title: 'Heckschnitt',
    location: 'Leibnitz',
    text: 'Präziser Formschnitt für dichte, gesunde Hecken und klare Linien.',
    image: withBase('images/references/ref2.webp'),
    fallbackImage: withBase('images/references/ref2.png'),
  },
  {
    title: 'Beetpflege',
    location: 'Graz Umgebung',
    text: 'Pflege von Beeten und Stauden für ein ordentliches Erscheinungsbild.',
    image: withBase('images/references/ref3.webp'),
    fallbackImage: withBase('images/references/ref3.png'),
  },
  {
    title: 'Objektpflege',
    location: 'Raum Graz',
    text: 'Laufende Pflege von Grünflächen mit festen Intervallen.',
    image: withBase('images/references/ref4.webp'),
    fallbackImage: withBase('images/references/ref4.png'),
  },
  {
    title: 'Saisonservice',
    location: 'Südsteiermark',
    text: 'Frühjahrs- und Herbstarbeiten für eine saubere Gartenstruktur.',
    image: withBase('images/references/ref5.webp'),
    fallbackImage: withBase('images/references/ref5.png'),
  },
]
