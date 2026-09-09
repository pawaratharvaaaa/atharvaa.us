# CONTEXT & ARCHITECTURE SPECIFICATION

## 1. Project Background & Objective
- **Goal**: Transform the provided portfolio HTML file for **Atharva Pawar** into an exact, publication-grade editorial portfolio matching the design language, typography, interactions, aesthetic, and visual layout of [https://ziad.us/](https://ziad.us/).
- **Core Requirement**: Use Atharva's exact personal accounts, verified email, live GitHub profile, active repository links, social accounts, and project narratives across all pages and interactive components.
- **Target Aesthetic**: The hyper-refined editorial publication aesthetic of `ziad.us` ("A Portfolio Quarterly"):
  - Editorial serif headlines (`Fraunces Variable` with optical size variations).
  - Precision body sans (`Inter Tight`) and terminal monospace (`Geist Mono`).
  - Handwritten personal notes and margin annotations (`Caveat` cursive in `»...«`).
  - Dual theme architecture: Deep ink dark mode (`#0e0d0b`) and newsprint light mode (`#f4efe6`).
  - Tactile editorial details: Rule lines, scotch-taped card frames (`--tape` gradient with rotation), live telemetry status bar (LAT/LON, time, scroll position).
  - Terminal-inspired elements: `TmuxFrame` split windows, `/ps` process tables with state indicators (`running`, `building`, `denied`).
  - Command palette (`` ` `` or `⌘K`), Konami code easter egg (`↑↑↓↓←→←→BA`), and CRT retro scanline overlay (`data-crt="on"`).

---

## 2. Personal & Account Details Matrix

| Entity Attribute | Exact Verified Value |
|---|---|
| **Full Name** | **Atharva Pawar** |
| **Moniker / Aliases** | `pawaratharvaaaa`, `thevibecoderguy` |
| **Email Address** | **`pawaratharvaak@gmail.com`** (Actionable: `mailto:pawaratharvaak@gmail.com`) |
| **GitHub Account** | **`https://github.com/pawaratharvaaaa`** (Username: `pawaratharvaaaa`) |
| **X / Twitter** | **`https://x.com/thevibecoderguy`** (Handle: `@thevibecoderguy`) |
| **Pinterest** | **`https://in.pinterest.com/kavikogussabohotaatah/`** |
| **Phone Number** | **`+91 88500 61997`** (Actionable: `tel:+918850061997`) |
| **Location Telemetry** | Mumbai, India (`LAT 19°04'N`, `LON 72°52'E`, Airport code: `BOM`, Timezone: `IST / UTC+5:30`) |
| **Role & Bio** | "Builder · Vibe Coder. Making things that are fun, useful, and occasionally unhinged." |
| **Pull Quote** | *"“i build what i want to exist.”"* |

---

## 3. Verified Repository & Project Directory (7 Projects)

### 01. musclempire
- **Type / Status**: `SHIPPED`
- **Year / Duration**: 2026 · Solo
- **Stack**: TypeScript · React · Vite · Google Apps Script · Vercel
- **Insight / Hand Note**: *»fitness tracking, built right«*
- **Live Deployment**: `https://musclempire-five.vercel.app`
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/musclempire`**
- **Narrative**: Zero-friction workout logging designed for gym floors. No paywalls, no bloated social feeds. Sub-100ms interaction latency with headless Google Apps Script data persistence.

### 02. music-model
- **Full Title**: **music-model — Song Prediction & Identification Studio**
- **Type / Status**: `SHIPPED`
- **Year / Duration**: 2026 · Solo
- **Stack**: Python · FastAPI · TF-IDF · Phonetic Double Metaphone · Acoustic Clustering · Web Audio API
- **Insight / Hand Note**: *»even if you spell it 'bheemian rapsody', it finds the song«*
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/music-model`**
- **Narrative**: Dual-engine intelligence for audio streaming. Engine 1 handles severely garbled spelling and lyric fragments via weighted phonetic and n-gram vectors. Engine 2 clusters 6 acoustic vector dimensions (BPM, Energy, Valence, Danceability) to generate seamless 10-track sonic sequences.

### 03. Lumen (appeul-music)
- **Full Title**: **Lumen — offline music library**
- **Type / Status**: `ONGOING` (with live pulsing pip)
- **Year / Duration**: 2026 · Ongoing · Solo
- **Stack**: TypeScript · Electron · Vite · Node.js · LRC Sidecar · LRCLIB API
- **Insight / Hand Note**: *»Apple Music feel. no internet required.«*
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/appeul-music`**
- **Narrative**: Scans local drives, parses ID3 tags, and renders a frosted glass desktop audio interface inspired by Apple Music. Synchronous lyrics powered by sidecar `.lrc` files and cached LRCLIB with zero telemetry.

### 04. wedoit
- **Full Title**: **wedoit — collaborative todo app**
- **Type / Status**: `SHIPPED`
- **Year / Duration**: 2026 · Solo
- **Stack**: React · TypeScript · Vite · Supabase (Auth + RLS) · Tailwind CSS · Vercel
- **Insight / Hand Note**: *»todo apps don't have to be boring«*
- **Live Deployment**: `https://wedoit-three.vercel.app`
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/wedoit`**
- **Narrative**: Multi-user task coordination with PostgreSQL Row-Level Security, instant workspace sharing, and WebSocket-driven state sync with optimistic client updates.

### 05. PRANKER
- **Full Title**: **PRANKER — Quantum IQ & Neuro Scanner**
- **Type / Status**: `SHIPPED · ANDROID APK`
- **Year / Duration**: 2026 · Solo
- **Stack**: Kotlin · Android SDK · AudioManager · onBackPressedDispatcher
- **Insight / Hand Note**: *»no pause button. no mercy.«*
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/PRANKER`**
- **Direct APK Release Download**: **`https://github.com/pawaratharvaaaa/PRANKER/releases`**
- **Narrative**: Sideloadable Android APK disguised as a cognitive scanner. Maxes `STREAM_MUSIC` to 100%, traps hardware volume keys, blocks back gesture, and loops an inescapable rickroll until power-off.

### 06. custome_todo
- **Full Title**: **custome_todo**
- **Type / Status**: `SHIPPED`
- **Year / Duration**: 2026 · Solo
- **Stack**: Vanilla HTML · JavaScript · CSS · Vercel
- **Insight / Hand Note**: *»a todo app with a custom twist«*
- **Live Deployment**: `https://custometodo.vercel.app`
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/custome_todo`**
- **Narrative**: Hyper-lean task management with zero framework bloat. Sub-15KB asset footprint, instant loading, deployed cleanly on Vercel.

### 07. portfolio
- **Full Title**: **portfolio**
- **Type / Status**: `ONGOING` (with live pulsing pip)
- **Year / Duration**: 2026 · Ongoing · Solo
- **Stack**: TypeScript · React · Vite · Vercel
- **Insight / Hand Note**: *»always a work in progress«*
- **Live Deployment**: `https://atharvaportfolio-nine.vercel.app`
- **GitHub Repository**: **`https://github.com/pawaratharvaaaa/portfolio`**
- **Narrative**: Atharva's live personal web presence, iterated publicly, combining high-craft publication typesetting with keyboard-first navigation.

---

## 4. Subpage Architecture with Exact Details

### 4.1 Now Page (`~/now.md` & `~/ps`)
- **Main Terminal (`~/now.md`)**:
  - `building`: `musclempire` (fitness tracking), `music-model` (smart song identification), `Lumen` (offline music player).
  - `on my mind`: Vibe coding, music tech opportunities, shipping fast in public.
- **Side Terminal (`~/ps`)**:
  - `0101` · `musclempire` · `running` (`.ok` green)
  - `0202` · `music-model` · `building` (`.warn` amber)
  - `0303` · `lumen/appeul` · `building` (`.warn` amber)
  - `0404` · `sleep` · `denied` (`.err` crimson)

### 4.2 Lab Page (`~/lab/palette`)
- **Terminal Entry**: `~/lab/palette [2026]`
- **Concept**: The palette as a feature. Keyboard navigation prompt instead of boring menus.
- **Interactive Lab Triggers**: Toggle CRT Scanlines, Launch Snake Game, Trigger Confetti, Theme Switcher.

### 4.3 Contact Page
- **Rule Row**: `CONTACT` · `BOM · GMT+5:30` · `REPLIES ≤ 24H`
- **Active Channels**:
  1. `01` · **GitHub** (`github.com/pawaratharvaaaa`) -> `https://github.com/pawaratharvaaaa`
  2. `02` · **Email** (`pawaratharvaak@gmail.com`) -> `mailto:pawaratharvaak@gmail.com`
  3. `03` · **X / Twitter** (`@thevibecoderguy`) -> `https://x.com/thevibecoderguy`
  4. `04` · **Pinterest** (`pinterest.com/kavikogussabohotaatah`) -> `https://in.pinterest.com/kavikogussabohotaatah/`
  5. `05` · **Phone** (`+91 88500 61997`) -> `tel:+918850061997`
- **Closer**: *"i'd rather you drop a message than wait to run into me somewhere."*
