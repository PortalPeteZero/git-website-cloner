
# Plan: Fix Transient UI Flash on Initial Load

## Problem Summary

When the Canary Detect website loads, users see a brief flash of broken UI or error state (approximately 0.5-1 second) before the correct content appears. This occurs on both the homepage and service detail pages.

## Root Causes Identified

1. **Missing `forwardRef`**: Several lazy-loaded components don't support refs, causing React warnings and potential render resets
2. **Ref attachment failures**: `ErrorBoundary` and other parent components may attempt to attach refs to child components that don't support them

## Files to Modify

### High Priority (directly causing console warnings)

1. **`src/components/home/ServiceCardLite.tsx`**
   - Wrap component in `forwardRef<HTMLDivElement, ServiceCardLiteProps>`
   - Attach `ref` to outer `<div>`
   - Add `displayName`

2. **`src/components/home/ProblemFAQSection.tsx`**
   - Wrap component in `forwardRef<HTMLElement>`
   - Attach `ref` to outer `<section>`
   - Add `displayName`

### Medium Priority (lazy-loaded sections needing consistency)

3. **`src/components/home/ServicesGrid.tsx`**
   - Wrap in `forwardRef<HTMLElement>`
   - Attach ref to outer `<section>`
   - Add `displayName`

4. **`src/components/home/TechnologySection.tsx`**
   - Wrap in `forwardRef<HTMLElement>`
   - Attach ref to outer `<section>`
   - Add `displayName`

5. **`src/components/home/HowItWorksSection.tsx`**
   - Wrap in `forwardRef<HTMLElement>`
   - Attach ref to outer `<section>`
   - Add `displayName`

6. **`src/components/home/TestimonialsSection.tsx`**
   - Wrap in `forwardRef<HTMLElement>`
   - Attach ref to outer `<section>`
   - Add `displayName`

7. **`src/components/home/CaseStudiesPreview.tsx`**
   - Wrap in `forwardRef<HTMLElement>`
   - Attach ref to outer `<section>`
   - Add `displayName`

## Technical Implementation Details

Each component transformation follows this pattern:

```text
Before:
const ComponentName = () => {
  return <section>...</section>;
};
export default ComponentName;

After:
import { forwardRef } from "react";

const ComponentName = forwardRef<HTMLElement>((_, ref) => {
  return <section ref={ref}>...</section>;
});
ComponentName.displayName = "ComponentName";
export default ComponentName;
```

For `ServiceCardLite` specifically, the props interface is preserved:

```text
const ServiceCardLite = forwardRef<HTMLDivElement, ServiceCardLiteProps>(
  ({ title, description, icon: Icon, href, image, imageAlt }, ref) => {
    return <div ref={ref} className="...">...</div>;
  }
);
```

## Expected Outcome

1. Console warnings about refs will be eliminated
2. The transient UI flash should be significantly reduced or eliminated
3. Lazy-loaded components will properly integrate with React's Suspense and ErrorBoundary systems
4. No breaking changes to existing functionality

## Risk Assessment

- **Low risk**: This is a non-breaking change that only adds ref forwarding capability
- **No visual changes**: The UI will remain exactly the same
- **Backward compatible**: Components will work the same way they did before, but with ref support added

## Verification Steps

After implementation:
1. Load the homepage and verify no console warnings appear
2. Navigate to a service detail page and back
3. Confirm no flash or error screen appears during navigation
4. Test on both English and Spanish routes
