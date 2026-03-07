# SEO + Local Conversion Implementation Todo

Last update: 2026-03-07

## 1) Current Website Analysis
- [x] Audited `HomePage`, `ServicesPage`, `ContactPage`, `Footer`, `Navbar`
- [x] Identified missing route-level SEO metadata and schema
- [x] Identified weak local landing-page structure
- [x] Identified conversion gap: form previously did not submit

## 2) Local SEO Improvements
- [x] Added local keyword internal-link blocks on homepage and services page
- [x] Added dedicated location-page dataset in `src/config/locationPages.js`
- [x] Added footer links to all local landing pages

## 3) Location Landing Pages
- [x] Implemented reusable location page template in `src/pages/LocationPage.jsx`
- [x] Added pages/routes for:
  - [x] `/gartenpflege-leibnitz`
  - [x] `/gartenpflege-wagna`
  - [x] `/gartenpflege-gralla`
  - [x] `/gartenpflege-tillmitsch`
  - [x] `/gartenpflege-strass`
- [x] Added local headlines, service bullets, trust signals, and CTA per location page

## 4) Content Improvements (Service + SEO Wording)
- [x] Improved service + location intent through new local entry sections
- [x] Added service-location phrase block "Leistung + Ort" on services page

## 5) Click + Conversion Improvements
- [x] Implemented working full request form submission (`FormSubmit` API)
- [x] Implemented `QuickRequestForm` with 1-minute lead capture
- [x] Added sticky mobile CTA bar (call + quick request)
- [x] Added 24-hour response expectation trust message
- [x] Switched temporary testing inbox to `mariorozman88@gmail.com`

## 6) Google Business Profile Optimization (Off-site, Manual)
- [ ] Set primary and secondary categories in Google Business Profile
- [ ] Add optimized service entries with local wording
- [ ] Start review request workflow after completed jobs
- [ ] Publish recurring photo uploads and profile posts
- [ ] Keep NAP (name/address/phone) exactly consistent with website

## 7) Technical SEO
- [x] Added route-level SEO management component (`src/components/SeoHead.jsx`)
- [x] Added LocalBusiness JSON-LD injection (`src/components/LocalBusinessSchema.jsx`)
- [x] Added FAQPage JSON-LD support in `SeoHead` (`structuredData` prop)
- [x] Added 5-question FAQ schema block on `ServicesPage`
- [x] Added 4-question FAQ schema block on location pages (`LocationPage` dynamic)
- [x] Added metadata on all major routes/pages
- [x] Added fallback OG/Twitter tags to `index.html`
- [x] Added `public/sitemap.xml`
- [x] Added `public/robots.txt`
- [x] Build validated with `npm run build`

Notes:
- This is a client-rendered React + Vite + GitHub Pages setup.
- Route metadata updates run in-browser (good for many crawlers/social previews after JS execution).
- Full static prerender/SSR is not implemented in this iteration. If needed, migrate to a prerender pipeline (e.g. Vite SSG) for maximum route-level crawl reliability.

## 8) Content Marketing Ideas (Implemented as Hub)
- [x] Added `Ratgeber` page route: `/ratgeber`
- [x] Added seasonal content topics as index cards with contact CTA

## 9) Prioritized Improvement Plan (Execution Status)

### HIGH Impact
- [x] Functional lead forms (quick + full)
- [x] Local landing pages for key towns
- [x] Sitemap + robots + local schema
- [x] Route-level metadata system

### MEDIUM Impact
- [x] Internal links across services/locations/footer
- [x] Mobile sticky conversion CTA
- [x] Content hub (`/ratgeber`) for long-tail growth

### LOW Impact / Ongoing
- [x] Expand references with location-tagged case studies
- [x] Add FAQ schema blocks per service/location page
- [x] Add monthly article publishing workflow

## 10) Deployment + Verification (Step 1 and 2)
- [x] Deploy latest changes to GitHub Pages (manual push)
- [ ] Submit/refresh sitemap in Google Search Console (manual account action)
- [ ] Complete first FormSubmit verification email for `mariorozman88@gmail.com`

## Changed / Added Files
- `index.html`
- `package.json`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/App.jsx`
- `src/main.jsx`
- `src/components/Footer.jsx`
- `src/components/Navbar.jsx`
- `src/components/ServiceRequestForm.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/ServicesPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/AboutPage.jsx`
- `src/pages/ReferencesPage.jsx`
- `src/pages/ImpressumPage.jsx`
- `src/pages/DatenschutzPage.jsx`
- `src/components/SeoHead.jsx`
- `src/components/LocalBusinessSchema.jsx`
- `src/components/StickyContactBar.jsx`
- `src/components/QuickRequestForm.jsx`
- `src/pages/LocationPage.jsx`
- `src/pages/GuidesPage.jsx`
- `src/config/seo.js`
- `src/config/locationPages.js`
- `src/config/caseStudies.js`
- `src/config/contentCalendar.js`
