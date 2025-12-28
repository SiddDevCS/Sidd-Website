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

## Writeups Page

The entire writeups directory has been moved here for easy restoration.

**To restore the writeups page:**
1. Move the entire `writeups/` directory back to `app/writeups/`
2. Add the writeups link back to `app/components/Navbar.tsx` in the `navItems` array: `{ name: "Write-ups", path: "/writeups" }`
3. Update `app/sitemap.ts`:
   - Add back the import: `import { getAllWriteUps } from './data/writeups'`
   - Add back the static page entry for `/writeups` in the `staticPages` array
   - Add back the dynamic writeup pages generation:
     ```typescript
     const writeups = getAllWriteUps()
     const writeupPages = writeups.map((writeup) => ({
       url: `${baseUrl}/writeups/${writeup.slug}`,
       lastModified: new Date(writeup.date),
       changeFrequency: 'monthly' as const,
       priority: 0.7,
     }))
     ```
   - Update the return statement to include writeup pages: `return [...staticPages, ...writeupPages]`

**Original location:** `app/writeups/`
**Backup location:** `app/_backup/writeups/`

