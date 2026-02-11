# xtchow.com

Personal website for Sarah Chow - Software Engineer.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules with global variables/mixins
- **Font**: Roboto Mono (via next/font)
- **Testing**: Cypress E2E

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server (port 3000 or $PORT) |
| `npm run lint` | Run ESLint |
| `npm run cypress` | Open Cypress UI |
| `npm run cypress:run` | Run Cypress tests headless |
| `npm run test:e2e` | Start server + run all E2E tests |
| `npm run test:e2e:open` | Start server + open Cypress UI |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata & font
│   ├── page.tsx        # Home page
│   └── [slug]/         # Dynamic redirect routes
├── components/
│   ├── layout.tsx      # Page layout component
│   ├── layout.module.scss
│   ├── Footer.tsx      # Social links footer
│   └── Footer.module.scss
└── styles/
    ├── _variables.scss # Colors, typography, breakpoints
    ├── _mixins.scss    # Responsive & utility mixins
    ├── globals.scss    # Global styles
    ├── Home.module.scss
    └── utils.module.scss

cypress/
├── e2e/
│   ├── home.cy.ts      # Home page tests
│   └── redirects.cy.ts # URL redirect tests
└── support/
    ├── commands.ts
    └── e2e.ts

public/
├── images/
├── robots.txt
├── sitemap.xml
└── Chow, Sarah.pdf     # Resume
```

## Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `$color-black` | #000000 | Primary text |
| `$color-white` | #ffffff | Background |
| `$color-grey` | #555555 | Links, subtitles |
| `$color-grey-light` | #767676 | Secondary text |
| `$color-grey-border` | #eaeaea | Borders |

## URL Redirects

| Path | Destination |
|------|-------------|
| `/linkedin` | linkedin.com/in/xtchow |
| `/github` | github.com/xtchow |
| `/email` | mailto:sarah@xtchow.com |

## License

Private
