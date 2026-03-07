function ContactForm() {
  return (
    <form className="glass-card space-y-5 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          Vorname
          <input
            type="text"
            placeholder="Ihr Vorname"
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          Nachname
          <input
            type="text"
            placeholder="Ihr Nachname"
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          E-Mail
          <input
            type="email"
            placeholder="name@beispiel.at"
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          Telefon
          <input
            type="tel"
            placeholder="+43 ..."
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-olive-800">
        Nachricht
        <textarea
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Anliegen (z. B. laufende Pflege, Heckenschnitt, saisonale Betreuung)."
          className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
      >
        Anfrage senden
      </button>
      <p className="text-xs text-olive-600">Dieses Formular sendet derzeit keine Daten (Frontend-Demo).</p>
    </form>
  )
}

export default ContactForm
