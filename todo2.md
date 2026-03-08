# todo2 completed

Status: completed and deployed.

Implemented:

- Objektart UX refinement (placeholder, options, helper text)
- Post-estimate customer type multiplier (base logic unchanged)
- Summary refinement with estimate note and trust indicators
- Per-service `Häufigkeit` selection and service-wise summary/email formatting
- Grünabfall reduced to two options (`Kunde entsorgt selbst`, `bitte abführen`)
- i18n updates synced across all locales

Validation:

- `npm run i18n:audit` passed
- `npm run build` passed

Optional future enhancements:

- tune multipliers and wording based on real request data
- add WhatsApp notification flow when channel is introduced

