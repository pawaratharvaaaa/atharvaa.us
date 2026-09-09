# Atharva Pawar — A Portfolio Quarterly

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **VOL. I · NO. 1 · 2026 · ATHARVA.US**  
> *“Code is cheap; taste, craft, and obsessive attention to feel are rare.”*

A publication-grade, tactile editorial portfolio quarterly inspired by [ziad.us](https://ziad.us/), engineered with **React 18**, **Vite**, **Node.js**, and modular CSS architectures.

---

## ✦ Design Philosophy & Aesthetic (1:1 with `ziad.us`)

- **Classical Editorial Typography**:
  - **Headlines**: `Fraunces Variable` with dynamic optical sizing (`opsz 144`), display weights, and negative letter-spacing (`-0.025em`).
  - **Body Text**: `Inter Tight` with clean line heights (`1.55`).
  - **Terminal Monospace**: `Geist Mono` with slashed zeroes for telemetry and coordinates.
  - **Handwritten Notes**: `Caveat` cursive in `»...«` annotation wrappers.
- **Dual Themes**:
  - Deep Ink Dark Mode (`#0e0d0b` paper, `#ece6d8` ink)
  - Newsprint Light Mode (`#f4efe6` paper, `#161412` ink)
  - Accent vermilion (`#ff5a3d` / `#d63a1a`) and gold scotch-tape frames (`--tape: #d4a54e`).
- **Tactile Details**:
  - Tilted preview cards (`transform: rotate(-0.75deg)`) with realistic masking tape gradients.
  - Live CRT monitor scanline filter (`data-crt="on"`) with phosphor scanlines and vignette shading.

---

## ✦ Featured Projects Catalogue

| # | Project | Tech Stack | Status | Live Demo / Repository |
|---|---|---|---|---|
| **01** | **musclempire** | TypeScript · React · Vite · Google Apps Script · Vercel | `SHIPPED` | [Live App](https://musclempire-five.vercel.app) · [GitHub Repo](https://github.com/pawaratharvaaaa/musclempire) |
| **02** | **music-model** | Python · FastAPI · Scikit-learn · Double Metaphone · Web Audio | `SHIPPED` | [GitHub Repo](https://github.com/pawaratharvaaaa/music-model) |
| **03** | **Lumen** | TypeScript · Electron · Vite · LRC Sidecar | `ONGOING` | [GitHub Repo](https://github.com/pawaratharvaaaa/appeul-music) |
| **04** | **wedoit** | React · TypeScript · Vite · Supabase · TailwindCSS | `SHIPPED` | [Live App](https://wedoit-three.vercel.app) · [GitHub Repo](https://github.com/pawaratharvaaaa/wedoit) |
| **05** | **PRANKER** | Kotlin · Android SDK · AudioManager | `SHIPPED · APK` | [APK Releases](https://github.com/pawaratharvaaaa/PRANKER/releases) · [GitHub Repo](https://github.com/pawaratharvaaaa/PRANKER) |
| **06** | **custome_todo** | HTML5 · Vanilla JavaScript · CSS Grid · Vercel | `SHIPPED` | [Live App](https://custometodo.vercel.app) · [GitHub Repo](https://github.com/pawaratharvaaaa/custome_todo) |
| **07** | **portfolio** | React 18 · Vite · Modular CSS · Web Audio · Canvas | `ONGOING` | [Live App](https://atharvaportfolio-nine.vercel.app) · [GitHub Repo](https://github.com/pawaratharvaaaa/portfolio) |

---

## ✦ Tactile Micro-Interactions & Easter Eggs

- **Command Palette (` ` / `.` / `⌘K` / `Ctrl+K`)**:
  - Fast fuzzy search across all 7 projects, pages, and action commands (`:theme dark`, `:theme light`, `:crt on`, `:snake`, `:confetti`, `:confetti-dom`, `:copy email`, `:github`, `:twitter`).
- **Confetti Particle Engine**:
  - Dual celebration systems: Canvas multi-angle cannon bursts and zero-dependency DOM particle physics.
- **Live Telemetry Bar**:
  - Live Indian Standard Time (`Asia/Kolkata` / `BOM`) clock, coordinates (`LAT 19°04'N · LON 72°52'E`), and real-time scroll pixel tracker.
- **Synthesized Web Audio Feedback**:
  - Physical tactile clicks on navigation, custom tone synthesizer workbench in Lab, and major triad victory chimes.
- **Playable Retro Snake Arcade**:
  - 2D Canvas engine with score tracking and audio effects. Triggered via palette `:snake` or Konami code (`↑↑↓↓←→←→BA`).

---

## ✦ Getting Started

### Clone & Install
```bash
git clone https://github.com/pawaratharvaaaa/atharvaa.us.git
cd atharvaa.us
npm install
```

### Development Mode (with HMR)
```bash
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✦ Project Structure

```
├── index.html                 # Vite HTML entrypoint mounting React App
├── standalone.html            # Standalone zero-dependency offline backup
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite + React build config
├── public/
│   └── favicon.svg            # Atharva editorial monogram favicon
├── css/                       # Modular CSS tokens and stylesheets
│   ├── tokens.css
│   ├── layout.css
│   ├── work.css
│   ├── tmux.css
│   ├── palette.css
│   └── snake.css
└── src/
    ├── main.jsx               # React DOM entrypoint
    ├── App.jsx                # Router and view coordinator
    ├── data/
    │   └── projectsData.js    # Verified catalogue of all 7 projects
    ├── utils/
    │   ├── audio.js           # Web Audio synthesizer
    │   └── confetti.js        # Canvas & DOM confetti physics
    └── components/            # Editorial UI components
        ├── Nav.jsx
        ├── TelemetryBar.jsx
        ├── Home.jsx
        ├── Work.jsx
        ├── ProjectDetail.jsx
        ├── Now.jsx
        ├── Lab.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── CommandPalette.jsx
        └── SnakeModal.jsx
```

---

## ✦ Author

**Atharva Pawar** (`pawaratharvaaaa` / `thevibecoderguy`)  
- ✉️ **Email**: [pawaratharvaak@gmail.com](mailto:pawaratharvaak@gmail.com)  
- 💻 **GitHub**: [@pawaratharvaaaa](https://github.com/pawaratharvaaaa)  
- 🐦 **X / Twitter**: [@thevibecoderguy](https://x.com/thevibecoderguy)  
- 📍 **Location**: Mumbai, India (`BOM`)  
