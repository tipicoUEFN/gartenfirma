# todo2 remaining

Done: Objektart UX update, post-estimate multiplier, summary refinement, i18n sync, build/audit, and deployment are complete.

## Open items

- Manual QA on live site:
  - check all Objektart choices and estimate updates
  - verify multiplied estimate values feel plausible
  - test mobile spacing/readability
  - test one real submit and verify email payload fields
  - per-service frequency behavior for multi-service requests
- Automated QA:
  - build and i18n audit pass after latest service-frequency formatting update
- Optional tuning:
  - fine-tune multiplier values after real request data
  - refine non-DE wording if needed
- Optional future scope:
  - add WhatsApp notification flow (still not implemented)

## Progress started

- Improved service-wise `Häufigkeit` formatting in `ServiceRequestForm`:
  - summary now renders frequencies as a readable per-service list
  - email payload now sends service frequencies as structured `Service: Häufigkeit` pairs
- Validation rerun:
  - `npm run i18n:audit` passed
  - `npm run build` passed

