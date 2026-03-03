

## SEO Crawl Issues - Root Cause Analysis and Fix Plan

### Critical Bug Found: Double `/es/es/` Prefix

The `getEquivalentRoute()` function in `src/i18n/routes.ts` has a logic flaw. When the current path is already Spanish (e.g., `/es/ubicaciones/teguise`) and `targetLang` is `'es'`, the function falls through all pattern matches and hits the **default fallback** at line 138:

```
return `/es${currentPath}`;  // → /es/es/ubicaciones/teguise
```

This generates broken `/es/es/...` links in the **LanguageSwitcher** component (used in header/footer), which the pre-renderer then crawls and indexes. This single bug causes the cascade of: DUPLICATE_TITLE, DUPLICATE_META_DESC, DUPLICATE_BODY, THIN_CONTENT, CANONICAL_MISSING_OR_MISMATCH on ~20+ Spanish pages.

### Second Bug: Wrong Spanish Slug for Drain Unblocking

The Footer and Blog page link to `/es/servicios/desatasco-desagues`, but `routes.ts` defines the Spanish slug as `desbloqueo-desagues`. The `ServiceDetail` component can't resolve `desatasco-desagues` back to the English key `drain-unblocking`, so the page renders as a soft 404.

This also causes the `SOFT_404` flag on `/servicios/desatasco-desagues`.

---

### Fix 1: `getEquivalentRoute()` — handle already-correct paths

In `src/i18n/routes.ts`, add an early return at the top of both branches: if the path already belongs to the target language, return it unchanged.

For `targetLang === 'es'`:
- If `currentPath` already starts with `/es`, check reverse maps for a match. If no match, return `currentPath` as-is (it's already Spanish).

For `targetLang === 'en'`:
- Already handles this via the `/es` prefix removal.

Specifically, add this at the start of the `targetLang === 'es'` block:
```typescript
if (currentPath.startsWith('/es')) {
  return currentPath; // Already a Spanish path
}
```

### Fix 2: Align drain-unblocking Spanish slug

Update `serviceSlugMap` in `routes.ts` to use `desatasco-desagues` instead of `desbloqueo-desagues`, matching what the Footer and Blog already link to. Also update `routeMap` entry for consistency.

### Fix 3: SLOW_SERVER_RESPONSE

These are pre-renderer cache issues. No code fix needed — resolved by publishing and triggering a re-render.

### Fix 4: KEYWORD_CANNIBALIZATION on `/es/ubicaciones` and `/es/servicios`

These are content-level issues that may need meta title/description differentiation, but should be reviewed after the routing fixes are deployed and re-crawled.

---

### Summary of Changes

| File | Change |
|------|--------|
| `src/i18n/routes.ts` | Add early return for already-Spanish paths in `getEquivalentRoute()`. Change `desbloqueo-desagues` → `desatasco-desagues` in slug maps and route map. |

### Impact

This single routing fix resolves the `/es/es/` double-prefix issue affecting ~20+ Spanish pages, eliminating DUPLICATE_TITLE, DUPLICATE_META_DESC, DUPLICATE_BODY, THIN_CONTENT, and CANONICAL_MISSING_OR_MISMATCH errors across the board. The slug fix resolves the SOFT_404 on the drain unblocking page.

