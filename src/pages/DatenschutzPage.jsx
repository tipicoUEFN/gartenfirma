import PageHero from '../components/PageHero'

function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Datenschutz"
        title="Information zur Datenverarbeitung"
        text="Diese Seite ist ein Startpunkt und muss durch eine rechtlich gepruefte Datenschutzerklaerung ersetzt werden."
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="glass-card space-y-5 rounded-2xl p-6 text-sm leading-relaxed text-olive-700 sm:p-8">
            <div>
              <h2 className="text-base font-semibold text-olive-800">1. Verantwortliche Stelle</h2>
              <p className="mt-2">
                Die verantwortliche Stelle fuer die Datenverarbeitung ist der Betreiber dieser Website.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">2. Erhebung und Verarbeitung</h2>
              <p className="mt-2">
                Personenbezogene Daten werden nur im erforderlichen Umfang verarbeitet, etwa bei Kontaktanfragen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">3. Kontaktformular</h2>
              <p className="mt-2">
                Beim Absenden einer Anfrage koennen eingegebene Daten zur Bearbeitung der Anfrage verwendet werden.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-olive-800">4. Ihre Rechte</h2>
              <p className="mt-2">
                Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung und Widerspruch.
              </p>
            </div>

            <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs text-amber-900">
              Hinweis: Dieser Text ist ein Platzhalter und ersetzt keine rechtliche Beratung.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default DatenschutzPage
