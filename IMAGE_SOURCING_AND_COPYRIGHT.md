# Image Sourcing and Copyright Guide (Austria Business Website)

This checklist is for adding legal-safe images to the Gartenpflege website.

## Safe Sources for Commercial Use

- Unsplash License: commercial use allowed, attribution not required, no selling unmodified photos, no competing stock service.
- Pexels License: commercial use allowed, attribution not required, no unmodified resale, no implied endorsement.
- Pixabay Content License: commercial use allowed, attribution not required, no standalone resale, watch trademarks/recognizable people.
- CC0 (Public Domain): free reuse and commercial use with minimal copyright restrictions.

Always re-check license pages before publishing because terms can change.

## Red Flags to Avoid

- Do not use random Google Images.
- Do not hotlink image URLs directly from stock websites in production.
- Do not use photos with recognizable people for sensitive claims.
- Do not use logo/trademark-visible photos in advertising claims without rights.
- Do not use images as your own trademark or brand logo.

## Recommended Workflow

1. Find images on Unsplash, Pexels, Pixabay, or CC0 archives.
2. Download originals locally.
3. Keep a proof record: source URL, author, date, license URL.
4. Optimize images (WebP/AVIF, responsive widths).
5. Store under `public/images/...` and reference locally.
6. Add attribution notes in this file (even if not required).

## Suggested Image Set for This Website

- Hero: premium Austrian garden scene, morning light, clean composition.
- Services: hedge trimming, lawn care, seasonal cleanup.
- About: team-at-work detail shots (hands/tools/plants).
- References: before/after pairs with same angle.
- Local area: South Styria / Graz / Leibnitz landscape texture.

## Search Terms (German + English)

- "gartenpflege oesterreich"
- "hedge trimming garden"
- "professional lawn care"
- "austrian garden landscape"
- "before after garden maintenance"
- "olive green garden texture"

## Attribution Log Template

- File name:
- Section used in:
- Source page URL:
- Author/Photographer:
- License page URL:
- Download date:
- Notes/Restrictions:

## Phone and Tablet Quality Checklist

- Use `img` with `w-full h-auto` by default.
- Use responsive image widths: 640px, 960px, 1280px variants.
- Prefer WebP or AVIF; keep hero under ~250 KB if possible.
- Keep important content centered to avoid mobile crop issues.
- Test in Chrome device toolbar: iPhone SE, iPhone 14 Pro, iPad, Galaxy S20.
- Ensure tap targets are at least 44px height.
- Check text does not overflow at 320px width.
