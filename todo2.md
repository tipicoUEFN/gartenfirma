# todo2 plan (next refinement)

## Goal

Refine `Objektart` UX and apply customer-type multipliers after base estimate calculation.

## Current status check

- Already done:
  - summary label above box (`Anfrage Zusammenfassung`)
  - trust indicators below submit button
  - live-updating range estimate in summary
  - compact form cards and responsive option grids
- Not done yet:
  - `Objektart` option set and placeholder text per new spec
  - helper text under `Objektart`
  - post-estimate customer-type multiplier
  - price label wording (`Geschätzter Preis (unverbindlich)` + note)

## Implementation plan

### Phase 1: Objektart field update

- File: `src/components/ServiceRequestForm.jsx`
- Keep select control, update options to:
  - `privat` -> Privatgarten
  - `firma` -> Firma / Betrieb
  - `wohnanlage` -> Wohnanlage / Hausverwaltung
  - `oeffentlich` -> öffentliche Einrichtung (Schule, Kindergarten, Gemeinde)
  - `sonstiges` -> sonstiges
- Remove `kindergarten-schule` option from UI and locale keys.
- Set placeholder text to `Objektart auswählen`.
- Add helper line below select:
  - `Hilft uns den Aufwand besser einzuschätzen.`
  - style as small muted text (same visual system as other helper text).

### Phase 2: Post-estimate multiplier (do not change base logic)

- File: `src/utils/priceEstimate.js`
- Keep existing `estimateServicePrice()` base logic untouched.
- Add new exported helper, for example:
  - `applyCustomerTypeMultiplier(baseEstimate, propertyType)`
- Multiplier map:
  - `privat`: 1.0
  - `firma`: 1.2
  - `wohnanlage`: 1.3
  - `oeffentlich`: 1.2
  - `sonstiges`: 1.0
- Apply multiplier to `min` and `max` after base range is returned.
- Round adjusted values again to nearest 5 EUR.

### Phase 3: Wire multiplier into form summary and payload

- File: `src/components/ServiceRequestForm.jsx`
- Compute:
  - `baseEstimate = estimateServicePrice(...)`
  - `finalEstimate = applyCustomerTypeMultiplier(baseEstimate, formData.propertyType)`
- Use `finalEstimate` for:
  - summary display
  - submit payload field `Preis-Schätzung`
- Keep estimate displayed as range at all times.

### Phase 4: Summary content alignment

- Ensure summary includes exactly:
  - Service
  - Rasenfläche
  - Hecke
  - Heckenhöhe
  - Grünabfall
  - Zugang
  - Häufigkeit
  - Objekt
  - Preis-Schätzung
- Remove `Dringlichkeit` from summary display if still shown.

### Phase 5: Label text refinement

- Update i18n labels to:
  - `Geschätzter Preis (unverbindlich)`
  - helper note under estimate: `Endpreis nach Besichtigung möglich.`

### Phase 6: i18n keys update (all locales)

- Files:
  - `public/locales/de-AT/translation.json`
  - `public/locales/en/translation.json`
  - `public/locales/sl/translation.json`
  - `public/locales/hr/translation.json`
  - `public/locales/hu/translation.json`
- Add/update keys for:
  - object placeholder
  - object helper text
  - object option labels
  - estimate label and note
- Remove now-unused `kindergarten-schule` label key to keep translations clean.

## Validation checklist

- Run `npm run i18n:audit`.
- Run `npm run build`.
- Manual check:
  - changing `Objektart` updates estimate immediately
  - summary order and labels match spec
  - email payload contains multiplied final range
  - mobile and desktop layout remains compact and readable

## Acceptance criteria

- Multiplier is applied only after base estimate calculation.
- Final displayed estimate is rounded and shown as a range.
- Objektart select + helper text match requested copy.
- Summary and trust UI match requested structure.

