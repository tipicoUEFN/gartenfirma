# ServiceRequestForm Upgrade Plan (todo2)

Goal: extend `ServiceRequestForm` so it collects better pricing inputs, shows a clearer summary, and stays compact.

## Scope confirmed against current code

- Main form file: `src/components/ServiceRequestForm.jsx`
- Locale keys required in all languages (audit-enforced):
	- `public/locales/de-AT/translation.json`
	- `public/locales/en/translation.json`
	- `public/locales/sl/translation.json`
	- `public/locales/hr/translation.json`
	- `public/locales/hu/translation.json`
- Pricing source reference: `preis.md`
- No WhatsApp integration exists in `src/**` right now, so WhatsApp part = not applicable unless added later.

## Clarification applied

Original "Schnittgut / Grünabfall" had one empty bullet. Use these 3 options:

- vor Ort belassen
- Kunde entsorgt selbst
- bitte abführen

## Implementation plan

### Phase 1: Data model and new fields

- Extend `formData` with:
	- `hedgeHeight`
	- `greenWaste`
	- `gardenAccess`
	- `urgency`
- Reset new fields correctly:
	- on submit success
	- when dependent services are deselected (for hedge-related fields)
- Add UI groups:
	- under hedge length: `Heckenhöhe` (radio)
	- `Schnittgut / Grünabfall` (radio)
	- `Zugang zum Garten` (radio)
	- `Dringlichkeit` (radio)

### Phase 2: Dynamic frequency logic

- Replace static `frequencyOptions` rendering with computed options based on selected services.
- Suggested mapping:
	- `rasen`: `wöchentlich`, `alle 2 Wochen`, `monatlich`
	- `hecke`: `1x pro Jahr`, `2x pro Jahr`
	- `fenster`: `einmalig`, `monatlich`, `nach Vereinbarung`
	- fallback/general options for other services.
- For multi-service selection:
	- use union of relevant options
	- remove duplicates
	- keep stable display order.

### Phase 3: Price estimation

- Add helper module: `src/utils/priceEstimate.js`
- Input: selected services + lawn size + hedge length + hedge height + green waste + access + urgency + frequency.
- Output: `{ min, max, label }` where label is `"{{min}} - {{max}} €"`.
- Base logic from `preis.md` (ranges, extras, difficulty multipliers).
- Keep rules transparent and conservative (Richtwert, not fixed quote).

### Phase 4: Summary and submit payload

- Update summary box to include:
	- Service
	- Rasenfläche
	- Hecke
	- Heckenhöhe
	- Grünabfall
	- Zugang
	- Häufigkeit
	- Objekt
	- Dringlichkeit
	- Preis-Schätzung
- Add submit payload/email fields for all new values.
- Keep localization-safe fallbacks for empty values (`notProvided`).

### Phase 5: UI compactness update

- Make option cards more compact:
	- slightly smaller padding
	- tighter vertical gaps
	- keep tap targets usable on mobile
- Use tighter responsive grids for radio/checkbox groups.
- Summary UI improvements:
	- small green label above summary card: `Anfrage Zusammenfassung`
	- below submit button add 2 trust lines:
		- `✔ Rückmeldung meist innerhalb 24h`
		- `✔ Unverbindliches Angebot`

### Phase 6: i18n updates

- Add all new keys to `serviceRequestForm` in all 5 locale files.
- Include:
	- field labels
	- option labels
	- summary labels
	- trust lines
	- estimation label
	- any dynamic frequency labels if key-based.

### Phase 7: Validation

- Run:
	- `npm run i18n:audit`
	- `npm run build`
- Manual QA:
	- desktop + mobile layout
	- combinations of service selections
	- summary correctness
	- email payload content in submitted request.

## Acceptance criteria

- New 4 field groups are visible and usable.
- Frequency options adapt to selected services.
- Summary includes all requested fields plus estimated price range.
- Form submission/email includes new values.
- UI is visibly more compact without harming readability.
- i18n audit and build pass.

## Suggested implementation order (single PR)

1. Add state + UI controls in `ServiceRequestForm.jsx`
2. Add dynamic frequency logic
3. Add estimator helper + summary integration
4. Add payload/email fields
5. Add i18n keys in all locales
6. Run audits/build and polish spacing
