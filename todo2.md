Phase 1: Low-risk UI behavior updates
Change reference image links to open in the same tab in ReferenceCard.jsx.
Remove 3-second hold-to-submit behavior and switch to normal submit buttons in QuickRequestForm.jsx and ServiceRequestForm.jsx.
Reorder Contact sections in ContactPage.jsx to: Ablauf -> Schneller Kontakt -> Ausfuehrliche Anfrage.
Phase 2: Add image upload to detailed form (depends on step 3)
Add image input to Ausfuehrliche Anfrage only (ServiceRequestForm.jsx) with max 3 images.
Add client-side validation (count/type/size) and clear error states/messages.
Extend submit flow to include images and handle endpoint rejection gracefully.
Phase 3: Copy + CTA polish (can run parallel with Phase 2 after step 4)
Remove the Contact intro copy block requested in translation.json (and ensure layout stays clean).
Shorten verbose text in all locales for touched areas: translation.json, translation.json, translation.json, translation.json, translation.json.
Add looped scale animation (0.8 <-> 1.0) to “Jetzt Angebot anfragen” in CTASection.jsx, with keyframes/reduced-motion handling in index.css.
Phase 4: Verification
Build/lint validation and manual regression pass on desktop/mobile, form behavior, i18n integrity, and animation/accessibility.