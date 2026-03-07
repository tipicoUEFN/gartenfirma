export const locationPages = [
  {
    slug: 'gartenpflege-leibnitz',
    town: 'Leibnitz',
    title: 'Gartenpflege in Leibnitz',
    heroTitle: 'Gartenpflege in Leibnitz fuer Privat, Firmen und Wohnanlagen',
    intro:
      'Wir betreuen Gaerten, Gruenflaechen und Aussenanlagen in Leibnitz mit klaren Intervallen, sauberer Ausfuehrung und persoenlicher Abstimmung.',
    services: ['Rasenmaehen', 'Pflege bestehender Hecken', 'Laubarbeiten', 'Laufende Aussenanlagenbetreuung'],
    trust: ['Kurze Wege im Raum Leibnitz', 'Schnelle Terminabstimmung', 'Persoenlicher Ansprechpartner'],
  },
  {
    slug: 'gartenpflege-wagna',
    town: 'Wagna',
    title: 'Gartenpflege in Wagna',
    heroTitle: 'Ihr Gartenservice in Wagna - zuverlaessig und termintreu',
    intro:
      'Fuer Kundinnen und Kunden in Wagna uebernehmen wir laufende Gartenpflege, Saisonarbeiten und saubere Betreuung von Aussenflaechen.',
    services: ['Saisonarbeiten', 'Beet- und Flaechenpflege', 'Rasenmaehen', 'Laubarbeiten'],
    trust: ['Regional im Bezirk Leibnitz', 'Planbare Pflegeintervalle', 'Saubere und verlaessliche Ausfuehrung'],
  },
  {
    slug: 'gartenpflege-gralla',
    town: 'Gralla',
    title: 'Gartenpflege in Gralla',
    heroTitle: 'Professionelle Gartenpflege in Gralla',
    intro:
      'Ob Privatgarten, Firmenflaeche oder Wohnanlage: Wir bieten in Gralla laufende Gartenpflege mit verstaendlichen Leistungen und fairen Angeboten.',
    services: ['Rasenpflege', 'Formschnitt bestehender Hecken', 'Objektpflege', 'Aussenflaechen sauber halten'],
    trust: ['Erfahrung mit Privat- und Objektpflege', 'Direkter Draht zum Team', 'Termingerechte Erledigung'],
  },
  {
    slug: 'gartenpflege-tillmitsch',
    town: 'Tillmitsch',
    title: 'Gartenpflege in Tillmitsch',
    heroTitle: 'Gartenpflege in Tillmitsch mit Handschlagqualitaet',
    intro:
      'In Tillmitsch betreuen wir Gruenflaechen und Gaerten nachhaltig, damit Ihre Aussenbereiche das ganze Jahr gepflegt und einladend bleiben.',
    services: ['Gruenflaechenpflege', 'Heckenpflege', 'Laufende Betreuung', 'Fruehjahrs- und Herbstarbeiten'],
    trust: ['Regionales Team aus der Suedsteiermark', 'Klare Kommunikation', 'Flexible Betreuung'],
  },
  {
    slug: 'gartenpflege-strass',
    town: 'Strass in Steiermark',
    title: 'Gartenpflege in Strass',
    heroTitle: 'Gartenservice in Strass in Steiermark',
    intro:
      'Wir bieten Gartenservice in Strass mit Fokus auf saubere Ausfuehrung, verlaessliche Termine und laufende Betreuung fuer verschiedene Objektarten.',
    services: ['Heckenpflege', 'Rasenmaehen', 'Saisonservice', 'Aussenanlagenbetreuung'],
    trust: ['Schnell vor Ort im Bezirk Leibnitz', 'Saubere Arbeitsweise', 'Unverbindliche Erstberatung'],
  },
]

export const locationPathList = locationPages.map((location) => `/${location.slug}`)
