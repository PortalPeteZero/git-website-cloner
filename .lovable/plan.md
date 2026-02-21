

# Fix: Pre-Renderer Invisible Content (Root Cause of All Recurring SEO Errors)

## The Root Cause

Every `motion.div` on the site uses this pattern:

```text
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

The lovable.html pre-renderer does NOT scroll the page. `whileInView` never triggers. All content stays at `opacity: 0`. The crawler sees a blank page -- zero words, no H1, no links, no images.

This is why you get identical errors on every page, every day.

## The Fix

Replace `whileInView` with `animate` on all motion elements. Content animates on mount (immediately visible) instead of waiting for scroll. Users still see smooth animations. The pre-renderer sees all content.

**Before:**
```text
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

**After:**
```text
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## Scope

### Phase 1 -- Meet The Team page (this fix)

File: `src/components/home/MeetTheTeamSection.tsx`
- Replace all 6 `whileInView` instances with `animate`
- Add staggered `transition` delays so elements still animate in sequence
- Remove all `viewport={{ once: true }}` props

### Phase 2 -- Site-wide fix (follow-up)

Every component using `whileInView` needs the same treatment. Key files include:
- `HeroSlider.tsx`
- `ServicesGrid.tsx`
- `FAQSection.tsx`
- `TechnologySection.tsx`
- `WelcomeSection.tsx`
- `TrustBadgesSection.tsx`
- `TestimonialsSection.tsx`
- `CaseStudiesPreview.tsx`
- `HowItWorksSection.tsx`
- `GoogleReviewsHighlight.tsx`
- All service detail pages, location pages, etc.

I will search the entire codebase for `whileInView` and fix every instance.

## What Users See

No visible difference -- animations still play smoothly on page load instead of on scroll. On fast connections the difference is imperceptible. On slow connections, content appears sooner (better UX).

## What Crawlers See

Full page content: H1 tags, all text (600+ words), all internal links (18+), all image alt text, all structured data. Every SEO error in the recurring reports should be resolved.

## Technical Details

| File | Change |
|------|--------|
| `src/components/home/MeetTheTeamSection.tsx` | Replace 6x `whileInView` with `animate`, add transition delays |
| All other components with `whileInView` | Same pattern replacement site-wide |

No new dependencies. No route changes. No database changes.

