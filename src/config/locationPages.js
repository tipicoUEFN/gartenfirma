export const locationPages = [
  {
    slug: 'gartenpflege-leibnitz',
    town: 'Leibnitz',
    title: 'Gartenpflege in Leibnitz',
    heroTitle: 'Gartenpflege in Leibnitz für Privat, Firmen und Wohnanlagen',
    intro:
      'Wir betreuen Gärten, Grünflächen und Außenanlagen in Leibnitz mit klaren Intervallen, sauberer Ausführung und persönlicher Abstimmung.',
    services: ['Rasenmähen', 'Pflege bestehender Hecken', 'Laubarbeiten', 'Laufende Außenanlagenbetreuung'],
    trust: ['Kurze Wege im Raum Leibnitz', 'Schnelle Terminabstimmung', 'Persönlicher Ansprechpartner'],
  },
  {
    slug: 'gartenpflege-wagna',
    town: 'Wagna',
    title: 'Gartenpflege in Wagna',
    heroTitle: 'Ihr Gartenservice in Wagna - zuverlässig und termintreu',
    intro:
      'Für Kundinnen und Kunden in Wagna übernehmen wir laufende Gartenpflege, Saisonarbeiten und saubere Betreuung von Außenflächen.',
    services: ['Saisonarbeiten', 'Beet- und Flächenpflege', 'Rasenmähen', 'Laubarbeiten'],
    trust: ['Regional im Bezirk Leibnitz', 'Planbare Pflegeintervalle', 'Saubere und verlässliche Ausführung'],
  },
  {
    slug: 'gartenpflege-gralla',
    town: 'Gralla',
    title: 'Gartenpflege in Gralla',
    heroTitle: 'Professionelle Gartenpflege in Gralla',
    intro:
      'Ob Privatgarten, Firmenfläche oder Wohnanlage: Wir bieten in Gralla laufende Gartenpflege mit verständlichen Leistungen und fairen Angeboten.',
    services: ['Rasenpflege', 'Formschnitt bestehender Hecken', 'Objektpflege', 'Außenflächen sauber halten'],
    trust: ['Erfahrung mit Privat- und Objektpflege', 'Direkter Draht zum Team', 'Termingerechte Erledigung'],
  },
  {
    slug: 'gartenpflege-tillmitsch',
    town: 'Tillmitsch',
    title: 'Gartenpflege in Tillmitsch',
    heroTitle: 'Gartenpflege in Tillmitsch mit Handschlagqualität',
    intro:
      'In Tillmitsch betreuen wir Grünflächen und Gärten nachhaltig, damit Ihre Außenbereiche das ganze Jahr gepflegt und einladend bleiben.',
    services: ['Grünflächenpflege', 'Heckenpflege', 'Laufende Betreuung', 'Frühjahrs- und Herbstarbeiten'],
    trust: ['Regionales Team aus der Südsteiermark', 'Klare Kommunikation', 'Flexible Betreuung'],
  },
  {
    slug: 'gartenpflege-strass',
    town: 'Straß in Steiermark',
    title: 'Gartenpflege in Straß',
    heroTitle: 'Gartenservice in Straß in Steiermark',
    intro:
      'Wir bieten Gartenservice in Straß mit Fokus auf saubere Ausführung, verlässliche Termine und laufende Betreuung für verschiedene Objektarten.',
    services: ['Heckenpflege', 'Rasenmähen', 'Saisonservice', 'Außenanlagenbetreuung'],
    trust: ['Schnell vor Ort im Bezirk Leibnitz', 'Saubere Arbeitsweise', 'Unverbindliche Erstberatung'],
  },
]

export const locationPathList = locationPages.map((location) => `/${location.slug}`)
