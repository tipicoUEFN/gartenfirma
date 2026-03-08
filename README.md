# Gartenpflege Website (React + Vite + Tailwind)

Premium, moderne Service-Website fuer einen Gartenpflegebetrieb in Oesterreich.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## WhatsApp Notification Relay (Optional)

This project runs as a static GitHub Pages site, so WhatsApp sending must happen through an external webhook service.

Flow:

- Form sends email via FormSubmit (existing behavior).
- After successful email submit, form also POSTs the same payload to a webhook.
- Your webhook forwards message to WhatsApp provider (Meta/Twilio/Make/n8n/Zapier).

Set this env variable for local/dev builds:

```bash
VITE_NOTIFICATION_WEBHOOK_URL=https://your-webhook-endpoint.example
```

Webhook JSON payload shape:

```json
{
	"source": "gartenfirma-website",
	"eventType": "quick-request",
	"submittedAt": "2026-03-08T12:34:56.000Z",
	"payload": {
		"Name": "...",
		"Telefon": "..."
	}
}
```

## Wichtigste Bearbeitungspunkte

- `src/config/businessData.js`: Firmenname, Kontaktdaten, Einsatzgebiet, Navigation.
- `src/pages/HomePage.jsx`: Startseiten-Texte und Sektionen.
- `src/pages/ServicesPage.jsx`: Leistungsbeschreibungen.
- `src/pages/ImpressumPage.jsx`: Rechtstexte und Unternehmensdaten.
- `src/pages/DatenschutzPage.jsx`: Datenschutztext (rechtlich pruefen lassen).

## Hinweis

Das Kontaktformular ist als Frontend-Platzhalter umgesetzt und sendet keine Daten an ein Backend.
