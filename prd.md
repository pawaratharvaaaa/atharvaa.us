# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Project: Atharva Pawar Portfolio — "A Portfolio Quarterly"
**Reference Target**: [https://ziad.us/](https://ziad.us/)  
**Version**: 1.1.0  
**Date**: September 2026  
**Status**: Ready for Implementation  

---

## 1. Executive Summary & Objective

### 1.1 Objective
Redesign and transform the personal portfolio of **Atharva Pawar** (`pawaratharvaaaa`, `thevibecoderguy`) into an exact, pixel-perfect match of the publication-grade editorial design and tactile interactivity found on **ziad.us**, integrating Atharva's verified personal accounts, contact links, and 7 GitHub repositories.

### 1.2 User Accounts & Credential Matrix
- **Full Name**: Atharva Pawar
- **GitHub Account**: `https://github.com/pawaratharvaaaa` (Username: `pawaratharvaaaa`)
- **Email Address**: `pawaratharvaak@gmail.com`
- **X / Twitter**: `https://x.com/thevibecoderguy` (`@thevibecoderguy`)
- **Pinterest**: `https://in.pinterest.com/kavikogussabohotaatah/`
- **Phone**: `+91 88500 61997`
- **Location Telemetry**: Mumbai, India (`LAT 19°04'N`, `LON 72°52'E`, Code: `BOM`, Timezone: `IST`)

### 1.3 Verified Repositories
1. `musclempire`: `https://github.com/pawaratharvaaaa/musclempire` (Live: `https://musclempire-five.vercel.app`)
2. `music-model`: `https://github.com/pawaratharvaaaa/music-model`
3. `Lumen`: `https://github.com/pawaratharvaaaa/appeul-music`
4. `wedoit`: `https://github.com/pawaratharvaaaa/wedoit` (Live: `https://wedoit-three.vercel.app`)
5. `PRANKER`: `https://github.com/pawaratharvaaaa/PRANKER` (APK: `https://github.com/pawaratharvaaaa/PRANKER/releases`)
6. `custome_todo`: `https://github.com/pawaratharvaaaa/custome_todo` (Live: `https://custometodo.vercel.app`)
7. `portfolio`: `https://github.com/pawaratharvaaaa/portfolio` (Live: `https://atharvaportfolio-nine.vercel.app`)

---

## 2. Design System & Visual Specification

### 2.1 Typography System
```css
--font-editorial: "Fraunces Variable", "Fraunces", Georgia, "Times New Roman", serif;
--font-body: "Inter Tight", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
--font-mono: "Geist Mono", "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
--font-hand: "Caveat", "Homemade Apple", cursive;
```
- **Headline Editorial Serif**: `Fraunces Variable` (opsz 144, weight 900, tight tracking `-0.025em`)
- **Editorial Italic**: `Fraunces Variable` (opsz 96, italic, weight 500) for quotes and TOC
- **Body Text**: `Inter Tight` (weights 400, 500, 600, line-height 1.55)
- **Monospace**: `Geist Mono` for status bar, rule rows, code snippets, tags, and keycaps
- **Handwritten Notes**: `Caveat` cursive for margin annotations (`»...«`)

### 2.2 Color Tokens & Theme Architecture
- **Dark Theme (`[data-theme="dark"]` - Default)**:
  - `--paper`: `#0e0d0b` | `--paper-2`: `#15130f`
  - `--ink`: `#ece6d8` | `--ink-2`: `#a8a193`
  - `--rule`: `#2a2722` | `--muted`: `#6b6458`
  - `--accent`: `#ff5a3d` (Vibrant electric vermilion)
  - `--tape`: `#d4a54e` (Translucent scotch tape)
  - Status tokens: `--ok: #7fb069`, `--warn: #e0a355`, `--err: #d66f5a`
- **Light Theme (`[data-theme="light"]`)**:
  - `--paper`: `#f4efe6` | `--paper-2`: `#eadfc9`
  - `--ink`: `#161412` | `--ink-2`: `#3a342d`
  - `--rule`: `#d9cfbd` | `--muted`: `#8a8173`
  - `--accent`: `#d63a1a`
- **CRT Mode (`html[data-crt="on"]`)**:
  - Repeating scanlines, radial vignette, and subtle chromatic aberration.

---

## 3. Structural & Functional Specifications

### 3.1 Global Header & Navigation
- Sticky top `<nav class="nav container">` with monogram `[A]` logo, `01 Work`, `02 Now`, `03 Lab`, `04 Contact`, and command palette button (`<kbd>`</kbd> palette`).
- Live Telemetry Status Bar (`LAT 19°04'N`, `LON 72°52'E`, `BOM [time]`, `SCROLL [N]px`).
- Footer with commit hash, build timestamp, and keyboard shortcut hint.

### 3.2 Pages
- **Home**: Masthead rule row, Atharva Pawar nameplate with animated SVG signature mark, bio, pull quote, shortcut chips, In This Issue table of contents, and SEO About aside.
- **Work Index**: 7 projects with indices, hover color shifts to `--accent`, live pulsing `.pip` dots on `ONGOING` badges, stack tags, and cursive insights.
- **Work Detail Pages (7 Total)**: Dedicated views for each project with specs grid, direct `visit ↗` and `repo ↗` external links pointing to Atharva's verified GitHub and Vercel URLs, taped preview frame, pullquote, margin notes, and multi-section prose (`The Problem`, `The Approach`, `The Stack`, `Reflection`).
- **Now**: Tmux terminal split (`~/now.md` with active builds & thoughts; `~/ps` with process table).
- **Lab**: Tmux terminal for `~/lab/palette [2026]` with interactive playground triggers.
- **Contact**: Channels 01 to 05 linking directly to Atharva's GitHub, Email (`mailto:`), X/Twitter, Pinterest, and Phone (`tel:`).
- **Command Palette**: Searchable popup with Navigate, Projects, Actions, and Commands (`:theme dark`, `:theme light`, `:crt`, `:snake`, `:help`).
- **Konami Code & Retro Snake**: Sequence `↑↑↓↓←→←→BA` triggers screen flash and playable retro snake game modal.
