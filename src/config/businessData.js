// Edit this file first to change branding, contact details and service area quickly.
export const businessData = {
  // Branding
  companyName: 'PR Gartenservice',
  claim: 'Professionelle Gartenpflege mit Handschlagqualitaet in der Suedsteiermark.',

  // Contact
  phoneContacts: [
    { label: 'Timi', phone: '+43664000000' },
    { label: 'Mario', phone: '+43664111111' },
    { label: 'Buero', phone: '+43664333333' },
  ],
  // Keep a primary contact for compact CTA placements like header buttons.
  phone: '+43664000000',
  email: 'office@pr-gartenservice.at',
  address: 'Musterstrasse 1, 8430 Musterort',

  // Local focus
  serviceArea: 'Suedsteiermark / Graz / Leibnitz / Umgebung',

  openingHours: [
    'Mo - Fr: 07:00 - 17:00 Uhr',
    'Sa: nach Vereinbarung',
  ],
}

businessData.primaryPhone = businessData.phoneContacts[0]?.phone ?? businessData.phone

export const navigationItems = [
  { label: 'Startseite', to: '/' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Ueber uns', to: '/ueber-uns' },
  { label: 'Referenzen', to: '/referenzen' },
  { label: 'Kontakt', to: '/kontakt' },
]
