# Backlog

Tasks and improvements to address in future iterations.

---

## High Priority

- [ ] **Optimize profile image** - `public/images/profile.png` is 1.2MB, should be <50KB
  - Resize to 288x288 (2x for retina)
  - Convert to WebP format
  - Update `layout.tsx` to use new image

- [ ] **Update Next.js** - Current v14.2.x has known DoS vulnerability
  - Run `npm update next` to get latest 14.x patch
  - Test thoroughly after update

- [ ] **Run npm audit fix** - 1 high severity vulnerability reported

---

## Medium Priority

- [ ] **Add SCSS module type declaration** - `src/types/css-modules.d.ts` only covers `.css`, not `.scss`

- [ ] **Configure ESLint** - No `.eslintrc.json` exists, `npm run lint` prompts for setup

- [ ] **Add Prettier** - No code formatting configuration

- [ ] **Fix Footer hardcoded values** - `Footer.module.scss` uses `20px` instead of `$spacing-*` variables

- [ ] **Extract constants** - URLs, image sizes scattered across components
  - Create `src/config/constants.ts`
  - Move: `resumeUrl`, social links, `name`, image sizes

- [ ] **Standardize import paths** - Mix of `@/` aliases and relative `../` paths

- [ ] **Add security headers** - `next.config.mjs` missing CSP, X-Frame-Options, etc.

---

## Low Priority

- [ ] **Add unit tests** - Only E2E tests exist, no Jest/Vitest

- [ ] **Add accessibility tests** - Integrate axe-core with Cypress

- [ ] **Enhance link tests** - Verify `target="_blank"` attributes in Cypress tests

- [ ] **Remove commented code** - `src/app/[slug]/page.tsx` has commented redirects

- [ ] **Use clsx for classnames** - Multiple class concatenations would be cleaner

- [ ] **Add error boundaries** - No React error boundary components

- [ ] **Semantic HTML** - Footer links could be wrapped in `<nav>`

- [ ] **Cross-platform start script** - `${PORT:-3000}` syntax doesn't work on Windows
  - Consider using `cross-env` package

---

## Completed

- [x] SCSS migration from CSS Modules
- [x] Cypress E2E test setup
- [x] SEO improvements (OG, Twitter, robots.txt, sitemap.xml)
- [x] Accessibility improvements (aria-labels, color contrast)
- [x] Remove dead code (empty files, unused CSS, framer-motion)
- [x] Fix external links to open in new tab
- [x] Update resume link
- [x] Add `rel="noopener noreferrer"` to header link
