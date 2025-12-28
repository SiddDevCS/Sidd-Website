# Backup Directory

This directory contains backed-up pages that were removed from the main site.

## Portfolio Page

The portfolio page has been moved here for easy restoration.

**To restore the portfolio page:**
1. Move `portfolio/page.tsx` back to `app/portfolio/page.tsx`
2. Add the portfolio link back to `app/components/Navbar.tsx` in the `navItems` array
3. Add the portfolio entry back to `app/sitemap.ts` in the `staticPages` array

**Original location:** `app/portfolio/page.tsx`
**Backup location:** `app/_backup/portfolio/page.tsx`

