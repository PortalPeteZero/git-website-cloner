

## Fix: Improve Blog Page Link Ratio

### Problem
The SEO audit reports 51 external links vs 48 internal links on /blog. The actual external count from the code is closer to 6-10 (the audit tool is likely inflating the number). However, two real improvements can be made:

1. External links in the Header navigation are missing `rel="nofollow"` -- they pass link equity unnecessarily
2. Adding more internal links on the blog page will further improve the ratio

### Changes

#### 1. Add `nofollow` to external links in Header.tsx

Three external links in the desktop nav and three duplicates in the mobile nav need `nofollow` added to their existing `rel` attribute:

**File: `src/components/layout/Header.tsx`**

- **leak-detective.com** (desktop, ~line 152): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`
- **canary-detect-coatings.es** (desktop, ~line 311): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`
- **leakguardlanzarote.com** (desktop, ~line 343): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`
- **canary-detect-coatings.es** (mobile, ~line 510): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`
- **leakguardlanzarote.com** (mobile, ~line 536): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`
- **leak-detective.com** (mobile, ~line 678+): change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow"`

#### 2. Add internal links section to Blog page

**File: `src/pages/Blog.tsx`**

Add a "Popular Locations" internal link grid between the AllServicesGrid and the CTA section. This adds 15 internal links to location pages, significantly improving the ratio.

The component will be a simple grid linking to the 15 municipality location pages (Arrecife, Playa Blanca, Puerto del Carmen, etc.), matching the style already used in the Footer. This reuses the location data pattern already in the Footer.

### What does NOT need changing

- Footer external links (Facebook, Instagram) -- these are standard social links and already have `noopener noreferrer`; social profiles are acceptable external links
- `tel:` and `mailto:` links -- these are functional contact links, not SEO concerns
- The "51 external" count will likely correct itself after cache refresh, as it appears inflated by the SEO tool

### After publishing
Trigger a LovableHTML cache refresh for `/blog`.

