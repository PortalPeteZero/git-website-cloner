

# Combined Fix: whileInView Animations + Unbalanced Link Ratios (All Pages)

## Problem 1: Invisible Content (whileInView)

Content using `whileInView` stays at `opacity: 0` for the pre-renderer (which doesn't scroll), causing "Thin Content", "Missing H1", and "Low Internal Links" errors.

**Remaining instances across 13 files (~35 total):**

| File | Instances |
|------|-----------|
| `src/pages/About.tsx` | 7 |
| `src/pages/Technology.tsx` | 11 |
| `src/pages/Reviews.tsx` | 1 |
| `src/pages/Blog.tsx` | 1 |
| `src/pages/CaseStudies.tsx` | 2 |
| `src/pages/Contact.tsx` | 2 |
| `src/pages/BlogArticle.tsx` | 2 |
| `src/pages/Locations.tsx` | 2 |
| `src/pages/LocationPage.tsx` | 4 |
| `src/pages/PlumbingServices.tsx` | 1 |
| `src/pages/PlumbingServiceDetail.tsx` | 1 |
| `src/pages/Services.tsx` | 3 |
| `src/components/services/PricingSection.tsx` | 5 |

**Fix:** Replace every `whileInView` with `animate` and remove `viewport={{ once: true }}`. Preserve existing `transition` props where present; add `transition={{ duration: 0.5 }}` where missing.

---

## Problem 2: Unbalanced Link Ratios

Pages have too many external links relative to internal links. The fix is to add the existing `AllServicesGrid` component (already used on other pages) to each affected page. This component renders a grid of ~8 internal service links, pushing the internal count above the external count.

**Pages receiving `AllServicesGrid`:**

| Page | Where it goes |
|------|--------------|
| `CaseStudies.tsx` | Before the CTA section |
| `Blog.tsx` | Before the Newsletter CTA section |
| `Reviews.tsx` | Before the end of the page (after reviews grid) |
| `Contact.tsx` | Before or after the contact form section |
| `About.tsx` | Before the CTA section |
| `Services.tsx` | Already has service links; add if ratio still unbalanced |
| `Technology.tsx` | Before the CTA section |

Each page will import `AllServicesGrid` from `@/components/internal-links/AllServicesGrid` and render it in a new section. This adds 8+ internal links per page with zero new content to maintain -- it reuses an existing component.

---

## Implementation Order

1. Fix all 35 `whileInView` instances across all 13 files (batch edit)
2. Add `AllServicesGrid` import and section to each of the 7 affected pages
3. Verify no `whileInView` instances remain in the codebase

## Result

- All page content visible to the pre-renderer on first render
- Internal link count exceeds external link count on every page
- No new dependencies, routes, or database changes
- No visible difference for end users (animations still play on mount)

