

## Image Size Optimization Plan

### The Problem
Vite-imagetools already converts all JPG/PNG to WebP at 80% quality, but images are served at their **original dimensions** (often 3000px+ wide). A card displayed at 400px wide doesn't need a 3000px source image. This is the main cause of the 3,618 KiB payload.

### The Fix
Add width resize directives (`?w=XXX`) to image import statements. Vite-imagetools processes these at build time, producing correctly sized WebP files. No config changes needed.

### Size Targets by Display Context

| Context | Display width | Import directive | Files affected |
|---------|--------------|-----------------|----------------|
| Service cards (3-col grid) | ~400px | `?w=800` (2x retina) | ServicesGrid, CaseStudiesPreview, ServiceCard |
| Half-page images | ~600px | `?w=1200` | WelcomeSection, About page |
| Page heroes (full-width) | ~1920px | `?w=1920` | Already done in HeroSlider; apply to other hero images |
| Blog inline images | ~700px | `?w=800` | blogArticles.ts imports |
| Gallery thumbnails | ~400px | `?w=800` | Gallery images |
| Team photos | ~300px | `?w=600` | MeetTheTeam imports |

### Files to Edit

1. **`src/components/home/ServicesGrid.tsx`** — Add `?w=800` to all 9 service image imports
2. **`src/components/home/CaseStudiesPreview.tsx`** — Add `?w=800` to 3 case study imports
3. **`src/components/home/WelcomeSection.tsx`** — Add `?w=1200` to welcome image import
4. **`src/components/home/ServiceCardLite.tsx`** — Add `width={640} height={400}` attributes to `<img>`
5. **`src/components/home/CaseStudiesPreview.tsx`** — Add `width={640} height={360}` to `<img>` tags
6. **`src/components/home/WelcomeSection.tsx`** — Add `width={1200} height={900}` to `<img>`
7. **`src/data/blogArticles.ts`** — Add `?w=800` to all ~30 blog image imports
8. **`src/pages/PlumbingServices.tsx`** — Add `?w=1920` to hero imports, `?w=800` to card images
9. **`src/pages/CaseStudies.tsx`** — Add `?w=800` to case study images
10. **`src/pages/FreeLeakConfirmation.tsx`** — Add `?w=1920` to hero image import
11. **`src/pages/About.tsx`**, **`src/pages/MeetTheTeam.tsx`** — Resize team/about images appropriately

### What This Does NOT Change
- No routing, SSR, or build config changes
- No component logic, styling, or content changes
- No changes to vite.config.ts
- Hero responsive variants in HeroSlider already optimized — left as-is

### Expected Impact
Resizing source images from ~3000px to their actual display size typically reduces file size by 60-80%. A 300KB full-res WebP becomes ~60-80KB at 800px width. This should cut the total network payload roughly in half.

