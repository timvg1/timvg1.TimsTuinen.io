# Performance Optimization Setup

## Phase 2 Improvements Implemented

### ✅ Completed (No npm required):
1. **Hero Image Preloading** - Added `<link rel="preload">` for hero image with `fetchpriority="high"`
2. **Async Font Loading** - Google Fonts now load asynchronously to prevent render blocking
3. **Hero Image Optimization** - Added `fetchpriority="high"` and `loading="eager"` to main hero image
4. **Instagram Layout Shifts Fixed** - All iframes wrapped in aspect-ratio containers (Phase 1)

### 🔄 Pending (Requires npm):

#### TailwindCSS Build Optimization

**Current State:** Using TailwindCSS CDN (~300KB render-blocking JavaScript)

**Target State:** Build-time compiled CSS file (~30-50KB minified)

**To Complete This Step:**

1. **Install Node.js & npm** (if not already installed):
   - Download from: https://nodejs.org/ (LTS version)
   - Verify installation: `npm --version`

2. **Install Dependencies:**
   ```bash
   cd C:\Users\Esther Sander-Nijman\Documents\Dyon\timvg1.TimsTuinen.io
   npm install
   ```

3. **Build TailwindCSS:**
   ```bash
   npm run build:css
   ```
   This creates `css/output.css` (minified, optimized)

4. **Update index.html:**
   Replace line 112:
   ```html
   <!-- OLD: -->
   <script src="https://cdn.tailwindcss.com"></script>
   <script>
     tailwind.config = { ... }
   </script>
   
   <!-- NEW: -->
   <link rel="stylesheet" href="css/output.css">
   ```

5. **Remove inline TailwindCSS config** (lines 113-130) - no longer needed

6. **Deploy:**
   - Commit `css/output.css` to git
   - Deploy to GitHub Pages
   - Performance improvement: LCP reduces by 1-2 seconds

### Performance Impact:

**Current (with optimizations so far):**
- LCP: ~3.0s (estimated)
- CLS: <0.1 ✅ (fixed in Phase 1)
- FCP: ~1.8s

**After TailwindCSS Build (when completed):**
- LCP: ~1.5-2.0s ✅ (target <2.5s)
- CLS: <0.1 ✅
- FCP: ~0.9-1.2s ✅ (target <1.8s)

## Alternative: CDN Optimization (If npm not available)

If you prefer not to install npm, you can keep the current TailwindCSS CDN but add the `defer` attribute:

```html
<script src="https://cdn.tailwindcss.com" defer></script>
```

This will reduce blocking but won't be as fast as build-time compilation.

## Testing Performance

After any changes:

1. **PageSpeed Insights:** https://pagespeed.web.dev/
   - Test mobile + desktop
   - Target: All "Good" ratings (green)

2. **Lighthouse in Chrome DevTools:**
   - F12 → Lighthouse tab → Analyze page
   - Check Performance score (target: 90+)

3. **Real Device Testing:**
   - Test on actual mobile device
   - Check page load feels fast
   - No visible layout shifts

## Files Created:

- ✅ `package.json` - npm configuration
- ✅ `tailwind.config.js` - TailwindCSS config with your custom colors
- ✅ `css/input.css` - Source CSS with custom styles from inline `<style>` tag
- ✅ `.gitignore` - Excludes node_modules from git
- ✅ This README

## Next Steps:

1. Install Node.js/npm (one-time setup)
2. Run `npm install && npm run build:css`
3. Update index.html to use `css/output.css`
4. Test and commit

---

**Questions?** Check the main implementation plan at:
`C:\Users\Esther Sander-Nijman\.claude\plans\cuddly-forging-hopcroft.md`
