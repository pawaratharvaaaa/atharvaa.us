# ==============================================================================
# TECHNICAL & FUNCTIONAL REQUIREMENTS SPECIFICATION
# Project: Atharva Pawar Portfolio — Editorial Quarterly (ziad.us design spec)
# User: Atharva Pawar (GitHub: pawaratharvaaaa | Email: pawaratharvaak@gmail.com)
# Generated: September 2026
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. RUNTIME & ENVIRONMENT REQUIREMENTS
# ------------------------------------------------------------------------------
Environment: Modern Web Standards (HTML5, CSS3 Custom Properties, Vanilla ES2022+ JavaScript)
Supported Runtimes (Development & Serving):
  - Python 3.10+ (python -m http.server 8000)
  - Node.js v18.0.0+ / v20.0.0+ (npx serve / vite / live-server)
  - Static Web Hosting (Vercel, Cloudflare Pages, GitHub Pages, Netlify)
Target Browser Support:
  - Chromium-based browsers: Chrome 110+, Edge 110+, Brave, Opera
  - Mozilla Firefox: Firefox 115+
  - WebKit: Safari 16.4+ (macOS, iOS, iPadOS)
  - Viewport Range: 320px (iPhone SE) to 3840px (4K Displays)

# ------------------------------------------------------------------------------
# 2. VERIFIED USER ACCOUNTS & REPOSITORIES CONFIGURATION
# ------------------------------------------------------------------------------
Full Name: Atharva Pawar
GitHub Profile: https://github.com/pawaratharvaaaa
Email: pawaratharvaak@gmail.com (mailto:pawaratharvaak@gmail.com)
X / Twitter: https://x.com/thevibecoderguy (@thevibecoderguy)
Pinterest: https://in.pinterest.com/kavikogussabohotaatah/
Phone: +91 88500 61997 (tel:+918850061997)
Location Telemetry: Mumbai, India (LAT 19°04'N, LON 72°52'E, BOM, GMT+5:30)

Verified Project Repositories (Must be hardcoded in detail pages and command palette):
  1. musclempire:
     - Repo: https://github.com/pawaratharvaaaa/musclempire
     - Live: https://musclempire-five.vercel.app
  2. music-model:
     - Repo: https://github.com/pawaratharvaaaa/music-model
  3. Lumen (appeul-music):
     - Repo: https://github.com/pawaratharvaaaa/appeul-music
  4. wedoit:
     - Repo: https://github.com/pawaratharvaaaa/wedoit
     - Live: https://wedoit-three.vercel.app
  5. PRANKER:
     - Repo: https://github.com/pawaratharvaaaa/PRANKER
     - Release APK: https://github.com/pawaratharvaaaa/PRANKER/releases
  6. custome_todo:
     - Repo: https://github.com/pawaratharvaaaa/custome_todo
     - Live: https://custometodo.vercel.app
  7. portfolio:
     - Repo: https://github.com/pawaratharvaaaa/portfolio
     - Live: https://atharvaportfolio-nine.vercel.app

# ------------------------------------------------------------------------------
# 3. EXTERNAL FONT ASSETS & WEBFONT DEPENDENCIES
# ------------------------------------------------------------------------------
Font 1: Fraunces Variable
  - Foundry: Google Fonts
  - URL: https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&display=swap
  - Optical Sizes: 9..144
  - Weights: 400, 500, 600, 700, 800, 900
  - Style: Normal & Italic

Font 2: Inter Tight
  - Foundry: Google Fonts
  - URL: https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap
  - Weights: 400, 500, 600, 700

Font 3: Geist Mono / IBM Plex Mono
  - Foundry: Google Fonts
  - URL: https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap
  - Weights: 400, 500, 600, 700

Font 4: Caveat (Cursive Hand Annotation)
  - Foundry: Google Fonts
  - URL: https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap
  - Weights: 400, 600

# ------------------------------------------------------------------------------
# 4. FUNCTIONAL REQUIREMENTS (FR)
# ------------------------------------------------------------------------------

[FR-01] Page Routing & View Hierarchy
  - Client-side navigation supporting #home, #work, #detail-[project-id], #now, #lab, #contact.
  - Updates navigation active state and scrolls to top on transition.

[FR-02] Editorial Masthead & Nameplate
  - Top rule row: "VOL. I · NO. 1 · 2026 · ATHARVA — A PORTFOLIO QUARTERLY".
  - Nameplate with "Atharva Pawar" in Fraunces Variable (opsz 144) + animated SVG signature mark.
  - Pullquote: "“i build what i want to exist.”" with 2px accent rule.
  - In This Issue table of contents (01 Work, 02 Now, 03 Lab, 04 Contact).

[FR-03] Live Telemetry Status Bar
  - Displays real-time: LAT 19°04'N · LON 72°52'E · BOM [HH:MM:SS] (live clock) · SCROLL [N]px.

[FR-04] Project Stack Indexing
  - 3-column editorial grid for all 7 projects with hover accent title shift, status badges, tech tags, and hand notes.
  - Pulsing live .pip dot on ONGOING projects (Lumen, portfolio).

[FR-05] Full-Length Project Detail Pages
  - 7 dedicated pages with stats grid, direct visit ↗ and repo ↗ links to Atharva's GitHub, taped preview card, margin notes, and structured prose.

[FR-06] TmuxFrame Terminal Panes (Now Page)
  - ~/now.md (building, on my mind) + ~/ps process monitor table.

[FR-07] Lab Experiments & Demos
  - ~/lab/palette with interactive toggles for CRT mode, snake game, theme switcher.

[FR-08] Contact Channels
  - Numbered rows linking to GitHub (pawaratharvaaaa), Email (pawaratharvaak@gmail.com), X/Twitter (@thevibecoderguy), Pinterest, Phone (+91 88500 61997).
  - Hover arrow animation translate(2px, -2px).

[FR-09] Omnipresent Command Palette (` or Cmd+K)
  - Backdrop blur, search input with prompt caret (›), categorized items, and full keyboard navigation.

[FR-10] Dual Theme Architecture & CRT Scanlines
  - Dark mode (#0e0d0b), light newsprint mode (#f4efe6), and CRT monitor overlay ([data-crt="on"]).

[FR-11] Konami Code & Playable Snake Game
  - Sequence ↑ ↑ ↓ ↓ ← → ← → B A triggers flash and retro snake arcade modal.
