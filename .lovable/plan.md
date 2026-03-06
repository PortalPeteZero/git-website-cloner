

## Assessment of Manus Performance Suggestions

Here's my evaluation of each suggestion against what's already in the codebase:

### 1. Lazy load all route-level components — PARTIALLY DISAGREE

Currently, all 20+ page components are **eagerly imported** in `App.tsx` (lines 13-31). The code comment says "All SEO-critical pages loaded eagerly for pre-rendering (lovable.html)".

**The problem with blindly lazy-loading everything:** LovableHTML pre-renders by hitting the live React app. If pages are lazy-loaded, the pre-renderer must wait for the chunk to download before it can capture content. Eager imports guarantee the pre-renderer gets complete HTML on first pass.

**What I recommend instead:** Lazy-load pages that are **not SEO-critical** or **rarely visited first** — specifically `CaseStudies`, `Technology`, `Reviews`, `PlumbingServices`, `PlumbingServiceDetail`, `FreeLeakConfirmation`, `PrePurchaseSurvey`, `PrivacyPolicy`, `MeetTheTeam`. Keep the high-traffic SEO pages eager: `Index`, `Services`, `ServiceDetail`, `Blog`, `BlogArticle`, `LocationPage`, `Locations`, `About`, `Contact`. This gives a meaningful bundle reduction without risking pre-render quality.

### 2. Add explicit width and height to all img elements — AGREE, PARTIALLY DONE

The hero `<picture>` element (HeroSlider) is missing `width`/`height` on the `<img>` tag. `ServiceCard` images also lack explicit dimensions. These should be added. This is a straightforward fix across a handful of components.

### 3. Add loading="lazy" to below-the-fold images — ALREADY DONE

HeroSlider already uses `loading="eager"` + `fetchPriority="high"` on slide 0 and `loading="lazy"` on subsequent slides. ServiceCard uses `loading="lazy"`. This is already implemented correctly.

### 4. Add preload link for LCP hero image in index.html — DISAGREE

The code comment in `index.html` (line 41-44) explicitly explains why this was removed: **Vite transforms image paths at build time**, so a static `<link rel="preload" href="/path-to-hero.jpg">` in `index.html` will point to the wrong URL. The current approach using eager `import` + `fetchPriority="high"` + `decoding="sync"` is the correct SPA solution.

### 5. Defer non-critical third-party scripts — NOT APPLICABLE

There are zero third-party scripts in `index.html`. Only the Vite module script exists. Nothing to defer.

---

### Plan: What I will actually change

| Change | File(s) |
|--------|---------|
| Lazy-load 9 low-traffic page components | `src/App.tsx` |
| Add `width`/`height` to hero `<img>` | `src/components/home/HeroSlider.tsx` |
| Add `width`/`height` to ServiceCard `<img>` | `src/components/home/ServiceCard.tsx` |

These changes target the real performance bottlenecks (bundle size and CLS) without breaking pre-rendering or the existing image strategy.

