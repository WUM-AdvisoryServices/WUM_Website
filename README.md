# WUM Advisory Services (SMC-Private) Limited

Official corporate and institutional website for **WUM Advisory Services (SMC-Private) Limited**, a Pakistan-based advisory and capacity-building organization working at the intersection of education, leadership development, professional learning, strategic research, institutional strengthening, sustainability, and community development.

- **Corporate Registration:** Certified under Section 16 of the Companies Act, 2017 (XIX of 2017) by the Securities and Exchange Commission of Pakistan (SECP)  
- **Corporate Unique Identification (CUI) #:** `0314319`  
- **Official SECP Verification:** [https://leap.secp.gov.pk/#/verify-company-info/0314319](https://leap.secp.gov.pk/#/verify-company-info/0314319)  
- **Founder & Director:** Waqas Umer Malik  
- **ORCID Researcher ID:** [https://orcid.org/0009-0002-8470-5261](https://orcid.org/0009-0002-8470-5261)  
- **Official Email:** `waqasanalyst@yahoo.com`  
- **Vision:** Empowering through sustainable practices.  
- **Mission:** Leading capacity-building initiatives that contribute to development.  
- **Core Values (SEICIN):** Sustainability · Empowerment · Integrity · Collaboration · Innovation  

---

## Technology Stack & Architecture

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 with custom institutional palette (Deep Navy `#10243A`, Primary Canvas `#F7F9FC`, Teal `#087F8C`, Sustainability Green `#438B62`, Accent Gold `#D5A64A`)
- **Official Branding:** Integrated official vector-clean brand mark and logo asset with green shield, growth arrow, open book, water droplet, and flora.
- **Typography:** Syne (Headings) + Inter (Body & Navigation) via Google Fonts
- **Routing:** React Router (`HashRouter` for 100% static hosting and GitHub Pages compatibility)
- **Icons:** Lucide React
- **SEO & Accessibility:** Open Graph tags, Schema.org Organization JSON-LD, sitemap.xml, robots.txt, WCAG 2.1 AA keyboard & contrast compliance
- **CI/CD:** Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) for GitHub Pages

---

## Repository Structure

```text
wum-advisory-website/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
│
├── public/
│   ├── assets/aistudio/            # User-supplied official brand assets
│   ├── favicon.svg                 # Brand SVG favicon
│   ├── logo.png                    # Official brand logo
│   ├── robots.txt                  # Search engine crawl directives
│   └── sitemap.xml                 # Search engine XML sitemap
│
├── src/
│   ├── assets/
│   │   └── images/                 # Official logo & photography assets
│   │
│   ├── components/
│   │   ├── BackToTop.tsx           # Floating scroll-to-top control
│   │   ├── Breadcrumbs.tsx         # Accessible breadcrumb trail
│   │   ├── ContactForm.tsx         # Validated inquiry form with copy fallback
│   │   ├── Footer.tsx              # 4-column institutional footer & legal modals
│   │   ├── Navbar.tsx              # 3-zone top bar with official logo & drawer
│   │   ├── NewsletterForm.tsx      # Strategic briefings subscription
│   │   ├── ProgrammeCard.tsx       # Unboxed metadata & syllabus preview card
│   │   ├── ProjectCard.tsx         # Development initiative card with verified status
│   │   ├── PublicationCard.tsx     # Research paper & policy brief card
│   │   ├── SectionHeader.tsx       # Editorial typographic section header
│   │   └── ServiceCard.tsx         # Numbered advisory service card
│   │
│   ├── data/
│   │   ├── events.ts               # Upcoming workshops & seminars
│   │   ├── programmes.ts           # 14 structured executive & educator cohorts
│   │   ├── projects.ts             # Featured CRIT & community development initiatives
│   │   ├── publications.ts         # Policy briefs, working papers, and guides
│   │   └── services.ts             # 10 comprehensive advisory service offerings
│   │
│   ├── pages/
│   │   ├── About.tsx               # Institutional profile, leadership, SECP cert & SEICIN
│   │   ├── Contact.tsx             # Headquarters details, form & FAQs
│   │   ├── CRIT.tsx                # Dedicated 15-section Climate-Resilient Toolkit page
│   │   ├── Events.tsx              # Events directory with RSVP modal
│   │   ├── Home.tsx                # Marquee hero, work areas, CRIT spotlight, approach
│   │   ├── Knowledge.tsx           # Research hub with reader modal & text/PDF download
│   │   ├── Partnerships.tsx        # Collaboration models, target audiences & EOI form
│   │   ├── Programmes.tsx          # Filterable capacity-building directory
│   │   ├── Projects.tsx            # Project portfolio with status filters
│   │   └── Services.tsx            # 10 core service deep-dives & modal previews
│   │
│   ├── App.tsx                     # Root router, scroll manager, and layout
│   ├── index.css                   # Tailwind v4 theme tokens & styles
│   └── main.tsx                    # React DOM entry point
│
├── index.html                      # SEO metadata, font imports, Schema.org JSON-LD
├── metadata.json                   # Applet configuration metadata
├── package.json                    # Dependencies and build scripts
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite build settings with relative base path ('./')
```

---

## Local Development Instructions

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm (version 9 or higher)

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Start Local Development Server
Launch the development server on `http://localhost:3000`:
```bash
npm run dev
```

### 3. TypeScript & Lint Check
Verify that there are zero TypeScript compiler errors:
```bash
npm run lint
```

### 4. Build for Production
Generate the optimized static build:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### 5. Local Static Preview
Preview the production build locally:
```bash
npm run preview
```

---

## GitHub Pages Deployment

The application is engineered specifically for static deployment on **GitHub Pages**:

1. **Relative Base Path:** `vite.config.ts` has `base: './'`, allowing the site to function identically whether served from a custom domain (`https://wum-advisory.org`) or a repository subpath (`https://<username>.github.io/<repo-name>/`).
2. **Hash-Based Routing:** `HashRouter` ensures that direct links and browser refreshes on routes like `/#/crit` or `/#/services` work reliably on GitHub Pages without requiring server-side URL rewrites.
3. **Automated GitHub Actions:** A pre-configured `.github/workflows/deploy.yml` workflow automatically builds and publishes the website whenever changes are pushed to `main` or `master`.

---

## Featured Initiative: CRIT Toolkit

The **Climate-Resilient School Infrastructure Toolkit (CRIT)** is an open-source public good hosted at:  
👉 [https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit](https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit)

The website features a dedicated comprehensive page at `/#/crit` detailing all 15 dimensions:
- Climate hazards in Pakistan (Floods, Heatwaves, WASH collapse)
- Architectural retrofits (Double-roof convective cooling, French drains, solar water kits)
- Community-based maintenance protocols for School Management Committees (SMCs)
- Automated AI risk-scoring algorithms and open documentation
