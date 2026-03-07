import PageHero from '../components/PageHero'
import { businessData } from '../config/businessData'

function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Impressum"
        title="Rechtliche Angaben"
        text="Bitte ersetzen Sie die folgenden Platzhalter durch Ihre vollstaendigen rechtlichen Unternehmensdaten."
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-6 text-sm leading-relaxed text-olive-700 sm:p-8">
            <p className="font-semibold text-olive-800">{businessData.companyName}</p>
            <p>{businessData.address}</p>
            <div className="mt-4">
              <p>Telefon:</p>
              {businessData.phoneContacts.map((contact) => (
                <p key={contact.phone}>
                  {contact.label}: {contact.phone}
                </p>
              ))}
            </div>
            <p>E-Mail: {businessData.email}</p>
            <p className="mt-4">Unternehmensgegenstand: Gartenpflege und Gruenflaechenbetreuung</p>
            <p>UID-Nummer: ATU12345678 (Platzhalter)</p>
            <p>Firmenbuchnummer: FN123456x (Platzhalter)</p>
            <p>Firmenbuchgericht: Landesgericht Graz (Platzhalter)</p>
            <p className="mt-4">Zustaendige Aufsichtsbehoerde: Bezirkshauptmannschaft (Platzhalter)</p>
            <p>Mitglied bei: WKO Steiermark (Platzhalter)</p>
            <p className="mt-4">Berufsrecht: Gewerbeordnung (GewO)</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImpressumPage
