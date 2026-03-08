# todo3 plan: language quality and localization hardening

## Objective

Make all user-facing text sound native and locally credible for:

- AT (`de-AT`)
- SL (`sl`)
- HR (`hr`)
- HU (`hu`)
- EN (`en`)

Target outcome: text reads like a real local garden-service company in each market, with consistent service terminology across all pages and forms.

## Scope

Primary files:

- `public/locales/de-AT/translation.json`
- `public/locales/sl/translation.json`
- `public/locales/hr/translation.json`
- `public/locales/hu/translation.json`
- `public/locales/en/translation.json`

Secondary fallback/config surfaces to verify:

- `src/config/locationPages.js`
- `src/config/caseStudies.js`
- `src/components/LocalBusinessSchema.jsx`
- form payload labels in:
	- `src/components/QuickRequestForm.jsx`
	- `src/components/ServiceRequestForm.jsx`

## Execution phases

### Phase 1: Terminology baseline (cross-language)

Build a canonical service glossary and lock one translation per concept:

- lawn mowing / green area care
- hedge trimming
- leaf work
- garden maintenance
- outdoor area maintenance
- window cleaning

Deliverable:

- one mapping table in this file (append section `Glossary Lock`)
- apply consistent terms in all locale files

### Phase 2: Form language quality pass

Audit `quickRequestForm` and `serviceRequestForm` keys in all locales:

- labels
- placeholders
- helper lines
- summary labels
- success/error messages
- mail payload wording

Priority:

- AT must use natural Austrian business tone and proper umlauts/ß
- SL/HR/HU should remove transliteration artifacts where possible and keep native diacritics
- EN should read natural and concise (service-business style)

### Phase 3: Full-page localization pass

Review and correct all sections in each locale file:

- home
- services page
- about page
- references
- contact page
- location pages
- guide page snippets

Fix categories:

- unnatural literal translation
- grammar agreement/case
- punctuation and spelling
- mixed-language remnants

### Phase 4: Country-specific spelling compliance

Enforce script/diacritics rules:

- AT: `ä ö ü ß` in normal text (no `ae/oe/ue/ss` unless technical slug/key)
- SL: `č š ž`
- HR: `č ć đ š ž`
- HU: `á é í ó ö ő ú ü ű`

### Phase 5: Consistency + key coverage sweep

Run consistency checks for repeated terms:

- same service names across all pages/forms
- same CTA semantics across locales
- no mixed-language phrase blocks

Run i18n coverage:

- `npm run i18n:audit`

### Phase 6: Final verification and sign-off

- `npm run build`
- quick visual spot-check of special characters in UI
- verify no malformed JSON and UTF-8 integrity

## Implementation order (small safe batches)

1. Batch A: form terminology keys (all locales)
2. Batch B: service names and shared phrases
3. Batch C: page-level copy polishing (home/services/about/contact/references)
4. Batch D: location/guides fine-tuning
5. Batch E: final consistency + validation

Each batch must end with:

- `npm run i18n:audit`
- `npm run build`

## Acceptance criteria

- Native-sounding copy in all 5 locales
- Service names consistent across all pages and forms
- Correct diacritics/orthography per language
- No missing localization keys
- Build and audit pass cleanly

## Glossary lock (to fill during implementation)

- AT:
	- lawn mowing / green area care: `Rasenmähen / Grünflächenpflege`
	- hedge trimming: `Heckenschnitt`
	- leaf work: `Laubarbeiten`
	- garden maintenance: `Gartenpflege`
	- outdoor area maintenance: `Laufende Außenanlagenbetreuung`
	- window cleaning: `Fensterreinigung`
- SL:
	- lawn mowing / green area care: `Košnja trate / nega zelenih površin`
	- hedge trimming: `Obrezovanje žive meje`
	- leaf work: `Dela z listjem`
	- garden maintenance: `Vzdrževanje vrta`
	- outdoor area maintenance: `Vzdrževanje zunanjih površin`
	- window cleaning: `Čiščenje oken`
- HR:
	- lawn mowing / green area care: `Košnja travnjaka / njega zelenih površina`
	- hedge trimming: `Rezanje živice`
	- leaf work: `Radovi s lišćem`
	- garden maintenance: `Održavanje vrta`
	- outdoor area maintenance: `Održavanje vanjskih površina`
	- window cleaning: `Čišćenje prozora`
- HU:
	- lawn mowing / green area care: `Fűnyírás / zöldfelület-gondozás`
	- hedge trimming: `Sövénynyírás`
	- leaf work: `Lombmunka`
	- garden maintenance: `Kertfenntartás`
	- outdoor area maintenance: `Kültéri terület fenntartása`
	- window cleaning: `Ablaktisztítás`
- EN:
	- lawn mowing / green area care: `Lawn mowing / green area care`
	- hedge trimming: `Hedge trimming`
	- leaf work: `Leaf cleanup`
	- garden maintenance: `Garden maintenance`
	- outdoor area maintenance: `Outdoor area maintenance`
	- window cleaning: `Window cleaning`
