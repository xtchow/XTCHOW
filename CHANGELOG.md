# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **SCSS Architecture**: Migrated from CSS Modules to SCSS with global variables and mixins
  - `src/styles/_variables.scss` - Color palette, typography, breakpoints, spacing
  - `src/styles/_mixins.scss` - Responsive breakpoint mixins, typography helpers, flexbox utilities
- **Roboto Mono Font**: Implemented via `next/font/google` for consistent monospace typography
- **Cypress E2E Testing**: Full test suite with 16 passing tests
  - `cypress/e2e/home.cy.ts` - Home page tests (title, profile, links, responsive viewports)
  - `cypress/e2e/redirects.cy.ts` - URL redirect tests (/linkedin, /github, /email, 404 handling)
- **SEO Improvements**
  - Open Graph meta tags for social sharing
  - Twitter card meta tags
  - `public/robots.txt` - Search engine crawler directives
  - `public/sitemap.xml` - Site map for search engines
  - Keywords and author metadata
- **Accessibility Improvements**
  - `aria-label` attributes on social media icon links
  - WCAG AA compliant color contrast (#555 for text, #767676 for secondary)
- **NPM Scripts**
  - `npm run cypress` - Open Cypress UI
  - `npm run cypress:run` - Run tests headless
  - `npm run test:e2e` - Start dev server + run tests
  - `npm run test:e2e:open` - Start dev server + open Cypress UI

### Changed
- **Page Title**: Updated from "xtchow" to "Sarah Chow | Software Engineer"
- **External Links**: All external links now open in new tab (`target="_blank" rel="noopener noreferrer"`)
- **Resume Link**: Updated from expired S3 URL to local `/Chow,%20Sarah.pdf`
- **Chess.com Link**: Updated to `https://www.chess.com/member/xtchow`
- **Font Size**: Reduced description text from 1.5rem to 1rem for better readability
- **Link Colors**: Improved contrast for accessibility compliance
- **npm start**: Now defaults to port 3000 when `$PORT` is not set

### Removed
- **Monuments Feature**: Removed all monuments-related code
  - `src/app/monuments/page.tsx`
  - `src/components/monu.tsx`
  - `src/components/monu.module.scss`
  - `cypress/e2e/monuments.cy.ts`
- **Old CSS Files**: Replaced with SCSS equivalents
  - `src/styles/globals.css` → `globals.scss`
  - `src/styles/Home.module.css` → `Home.module.scss`
  - `src/styles/utils.module.css` → `utils.module.scss`
  - `src/components/layout.module.css` → `layout.module.scss`

### Dependencies Added
- `sass` - SCSS compilation
- `framer-motion` - Animation library
- `cypress` - E2E testing framework
- `@types/cypress` - TypeScript definitions
- `start-server-and-test` - Test runner utility
