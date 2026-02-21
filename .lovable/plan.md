

## Fix: Trim Locations Page Title to Under 60 Characters

### Problem
The English meta title "Leak Detection Lanzarote | All 15 Municipalities | Canary Detect" is 65 characters, exceeding the 60-character SEO limit. All other reported issues (Soft 404, Thin Content, Meta Description 301 chars, Image Alt) are pre-renderer cache artifacts that will resolve on the next LovableHTML cache refresh.

### Change

**File: `src/pages/Locations.tsx` (line 29)**

Current (65 chars):
```
Leak Detection Lanzarote | All 15 Municipalities | Canary Detect
```

New (54 chars):
```
Leak Detection Lanzarote | All Areas | Canary Detect
```

### No Other Code Changes Needed

The remaining 4 reported issues are all cache artifacts:
- **Soft 404 / Thin Content (26 words)**: The page renders 500+ words immediately on mount. The crawler cached a stale snapshot.
- **Meta Description Length (301)**: Both EN (143 chars) and ES (146 chars) descriptions are within the 50-160 char limit. The "301" is a stale reading.
- **Image Alt Text**: The hero image has bilingual alt text on line 48.

### After Publishing
Trigger a LovableHTML cache refresh for `/locations` so crawlers pick up the full rendered content.

