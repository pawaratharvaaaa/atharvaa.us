export const projects = [
  {
    id: "musclempire",
    num: "01",
    title: "musclempire",
    fullTitle: "musclempire — fitness tracking, built right",
    subtitle: "Fitness tracking, built the way it should be.",
    meta: "2026 · SOLO",
    status: "SHIPPED",
    isOngoing: false,
    tags: "TypeScript · React · Vite · Vercel",
    handNote: "»instant logging without paywalls«",
    role: "Solo Developer",
    duration: "2026",
    team: "Solo",
    stack: "TypeScript · React · Vite · Google Apps Script · Vercel",
    liveUrl: "https://musclempire-five.vercel.app",
    repoUrl: "https://github.com/pawaratharvaaaa/musclempire",
    pullQuote: "built for zero-friction workout logging on gym floors.",
    watermark: "musclempire",
    previewDesc: "Clean workout logging, progressive overload tracking, and headless persistence.",
    notes: [
      "»instant logging without paywalls«",
      "»Google Apps Script data integration«",
      "»deployed with sub-100ms response on Vercel«"
    ],
    sections: [
      {
        title: "The problem",
        body: "Mainstream fitness apps are weighed down by predatory paywalls for basic analytics, intrusive social feeds, endless account creation friction, and 10-step workout set configurations. When an athlete is fatigued between heavy sets on a gym floor, taking more than two taps to log reps and weight breaks training focus and momentum."
      },
      {
        title: "The approach",
        body: "A focused, high-speed single-page web app built with React, Vite, and TypeScript. Workouts are logged instantaneously, historical set logs load without delays, progressive overload curves are computed dynamically on the client, and data syncs cleanly in the background without blocking the UI."
      },
      {
        title: "The stack",
        body: "React 18, TypeScript, and Vite deployed globally on Vercel edge networks. Google Apps Script provides a reliable headless relational datastore for user logs with zero infrastructure overhead or cold starts."
      },
      {
        title: "The purpose of the website",
        body: "To provide lifters and athletes with a completely free, lightning-fast workout tracker that eliminates gym-floor friction, preserves cognitive focus during intense training, and turns raw training numbers into actionable progressive overload insights."
      }
    ],
    nextId: "music-model"
  },
  {
    id: "music-model",
    num: "02",
    title: "music-model",
    fullTitle: "music-model — Song Prediction & Identification Studio",
    subtitle: "An intelligent dual-engine ML system for music streaming apps.",
    meta: "2026 · SOLO",
    status: "SHIPPED",
    isOngoing: false,
    tags: "Python · FastAPI · ML · TF-IDF",
    handNote: "»even if you spell it 'bheemian rapsody', it finds the song«",
    role: "Solo Engineer",
    duration: "2026",
    team: "Solo",
    stack: "Python · FastAPI · ML · TF-IDF · Web Audio",
    repoUrl: "https://github.com/pawaratharvaaaa/music-model",
    pullQuote: "even if you spell it 'bheemian rapsody', it finds the song.",
    watermark: "music-model",
    previewDesc: "Fuzzy phonetic encoding + 6-dimensional acoustic vector clustering studio.",
    notes: [
      "»phonetic Double Metaphone + n-gram TF-IDF«",
      "»acoustic vector modeling across BPM, Energy, Valence«",
      "»generates seamless 10-track sonic transitions«"
    ],
    sections: [
      {
        title: "The problem",
        body: "Music listeners frequently remember songs phonetically or with slang, typos, and fragmented lyrics (e.g. typing 'bheemian rapsody' instead of 'Bohemian Rhapsody'), which causes standard exact-substring search engines to fail. Furthermore, conventional playlist algorithms suffer from commercial popularity bias rather than true acoustic harmony."
      },
      {
        title: "The approach",
        body: "An intelligent dual-engine machine learning system. Engine 1 performs fuzzy song identification by combining Levenshtein distance metrics, phonetic Double Metaphone encodings, and sub-word n-gram TF-IDF matrices. Engine 2 analyzes a 6-dimensional acoustic vector space (BPM, Energy, Danceability, Valence, Acousticness, Genre) to cluster harmonically coherent 10-track sequences."
      },
      {
        title: "The stack",
        body: "Python 3.11, FastAPI backend, Scikit-learn for dimensionality reduction and KNN acoustic clustering, Double Metaphone linguistic preprocessors, NumPy, and an interactive Web Audio API workbench for real-time acoustic waveform inspection."
      },
      {
        title: "The purpose of the website",
        body: "To serve as an interactive AI audio workbench and technical showcase demonstrating how lightweight, interpretable machine learning models can solve search friction and generate seamless playlist transitions without relying on opaque, proprietary cloud APIs."
      }
    ],
    nextId: "lumen"
  },
  {
    id: "lumen",
    num: "03",
    title: "Lumen",
    fullTitle: "Lumen — offline music library",
    subtitle: "Apple Music–inspired layout. Your local files. No internet required.",
    meta: "2026 · ONGOING · SOLO",
    status: "ONGOING",
    isOngoing: true,
    tags: "TypeScript · Electron · Vite · LRC",
    handNote: "»Apple Music feel. no internet required.«",
    role: "Creator",
    duration: "2026 · Ongoing",
    team: "Solo",
    stack: "TypeScript · Electron · Vite · LRC Sidecar",
    repoUrl: "https://github.com/pawaratharvaaaa/appeul-music",
    pullQuote: "Apple Music feel. no subscriptions. no telemetry.",
    watermark: "Lumen",
    previewDesc: "Local directory indexing, synchronized lyrics, frosted glass UI.",
    notes: [
      "»local folder recursive indexing & ID3 parsing«",
      "»lyrics from sidecar .lrc or cached LRCLIB«"
    ],
    sections: [
      {
        title: "The problem",
        body: "Modern music streaming platforms have increasingly alienated music collectors: songs disappear without notice due to licensing disputes, local lossless FLAC and ALAC collections are ignored, user interfaces are cluttered with algorithmically pushed podcasts and video promotions, and listener habits are tracked aggressively."
      },
      {
        title: "The approach",
        body: "An offline-first desktop music player inspired by Apple Music's classical editorial typography and frosted glass aesthetics. Lumen recursively indexes local folders, extracts ID3 tags directly in background worker threads, and renders synchronized karaoke-style lyrics parsed from sidecar .lrc files and cached LRCLIB responses with zero network telemetry."
      },
      {
        title: "The stack",
        body: "TypeScript + Vite for the core player engine. Electron for native desktop packaging and direct local filesystem access, with dual architecture support for browser mode (npm run web) and native desktop runtime (npm run dev)."
      },
      {
        title: "The purpose of the website",
        body: "To restore sovereign ownership over personal music collections by providing an elegant, distraction-free desktop audio haven that pairs local high-fidelity audio playback with synchronized lyrics, completely free of subscriptions or tracking."
      }
    ],
    nextId: "wedoit"
  },
  {
    id: "wedoit",
    num: "04",
    title: "wedoit",
    fullTitle: "wedoit — collaborative todo app",
    subtitle: "Collaborative task management. Todo apps don't have to be boring.",
    meta: "2026 · SOLO",
    status: "SHIPPED",
    isOngoing: false,
    tags: "TypeScript · React · Vite · Supabase",
    handNote: "»todo apps don't have to be boring«",
    role: "Full Stack Developer",
    duration: "2026",
    team: "Solo",
    stack: "TypeScript · React · Vite · Supabase · Vercel",
    liveUrl: "https://wedoit-three.vercel.app",
    repoUrl: "https://github.com/pawaratharvaaaa/wedoit",
    pullQuote: "real-time multi-user task sync with zero complexity.",
    watermark: "wedoit",
    previewDesc: "Real-time collaborative task workspace with PostgreSQL Row Level Security.",
    notes: [
      "»Supabase PostgreSQL with strict RLS«",
      "»WebSocket optimistic state replication«"
    ],
    sections: [
      {
        title: "The problem",
        body: "Team productivity tools are polarized between over-engineered enterprise platforms with steep learning curves (Jira, Asana) and isolated local todo lists that cannot synchronize changes across devices or collaborators in real time."
      },
      {
        title: "The approach",
        body: "A real-time collaborative workspace balancing minimal visual distraction with multi-user synchronization. Built with an editorial task sheet interface, it applies optimistic UI updates locally while synchronizing changes across team members via real-time WebSocket state replication with conflict-free merging."
      },
      {
        title: "The stack",
        body: "React, TypeScript, and Vite styled with utility Tailwind CSS. Powered by Supabase PostgreSQL with strict Row-Level Security (RLS) policies for multi-tenant isolation, real-time WebSocket broadcasts, and edge deployment on Vercel."
      },
      {
        title: "The purpose of the website",
        body: "To enable development pairs, startup co-founders, and small agile squads to coordinate tasks, track sprint progress, and share task checklists in real time without setup overhead or enterprise complexity."
      }
    ],
    nextId: "pranker"
  },
  {
    id: "pranker",
    num: "05",
    title: "PRANKER",
    fullTitle: "PRANKER — Quantum IQ & Neuro Scanner",
    subtitle: "An inescapable audio rickroll disguised as a cognitive scanner. No mercy.",
    meta: "2026 · SOLO",
    status: "SHIPPED · APK",
    isOngoing: false,
    tags: "Kotlin · Android SDK · AudioManager",
    handNote: "»no pause button. no mercy.«",
    role: "Android Developer",
    duration: "2026",
    team: "Solo",
    stack: "Kotlin · Android SDK · AudioManager",
    repoUrl: "https://github.com/pawaratharvaaaa/PRANKER",
    downloadUrl: "https://github.com/pawaratharvaaaa/PRANKER/releases",
    pullQuote: "no pause button. no mercy.",
    watermark: "PRANKER",
    previewDesc: "Cognitive scanner facade -> STREAM_MUSIC 100% -> infinite audio loop.",
    notes: [
      "»overrides STREAM_MUSIC directly to 100% volume«",
      "»intercepts hardware volume buttons and back gesture«",
      "»only escape route: physical device power off«"
    ],
    sections: [
      {
        title: "The problem",
        body: "Traditional web-based pranks are too predictable and easily dismissed: modern browsers quickly display exit confirmations or allow victims to swipe away immediately. Creating a genuinely memorable, inescapable comedic experience requires psychological misdirection combined with deep hardware-level privilege control."
      },
      {
        title: "The approach",
        body: "Disguised as a high-tech 'Quantum IQ & Neuro-Cognitive Scanner' complete with faux calibration graphics, biometric status bars, and tactile haptic indicators. Once the victim taps 'CALIBRATE & START SCAN', the app overrides audio streams, maxes device volume to 100%, traps hardware buttons, blocks back gestures, and loops an inescapable rickroll audio stream."
      },
      {
        title: "The stack",
        body: "Native Android SDK in Kotlin, AudioManager audio stream hijacking (STREAM_MUSIC forced to max index), hardware volume key interceptors (KeyEvent.KEYCODE_VOLUME_UP, VOLUME_DOWN), onBackPressedDispatcher with trapped callbacks, and FLAG_KEEP_SCREEN_ON window flags."
      },
      {
        title: "The purpose of the website",
        body: "To document the experimental architecture of the sideloadable Android APK, provide direct links to downloadable APK releases, and offer developer documentation on how Android audio channels and window gesture dispatchers can be intercepted at the native level."
      }
    ],
    nextId: "custome-todo"
  },
  {
    id: "custome-todo",
    num: "06",
    title: "custome_todo",
    fullTitle: "custome_todo",
    subtitle: "A custom todo app. Simple, fast, deployed.",
    meta: "2026 · SOLO",
    status: "SHIPPED",
    isOngoing: false,
    tags: "HTML · JavaScript · CSS · Vercel",
    handNote: "»a todo app with a custom twist«",
    role: "Developer",
    duration: "2026",
    team: "Solo",
    stack: "HTML · JavaScript · CSS · Vercel",
    liveUrl: "https://custometodo.vercel.app",
    repoUrl: "https://github.com/pawaratharvaaaa/custome_todo",
    pullQuote: "lightweight utility stripped of all modern web bloat.",
    watermark: "custome_todo",
    previewDesc: "Vanilla JavaScript task manager with custom state interactions.",
    notes: [
      "»sub-15KB asset payload«",
      "»zero client runtime dependencies«"
    ],
    sections: [
      {
        title: "The problem",
        body: "The modern web development ecosystem has normalized shipping megabytes of JavaScript dependencies, heavy virtual DOM libraries, and bloated frameworks just to create and toggle simple checklist items, leading to poor battery efficiency and sluggish load times on budget mobile hardware."
      },
      {
        title: "The approach",
        body: "A hyper-lean, zero-dependency task utility built strictly on raw web standards. Using native DOM manipulation, CSS grid layouts, and the browser's built-in localStorage API, it achieves instant sub-50ms First Contentful Paint times and zero network overhead after initial load."
      },
      {
        title: "The stack",
        body: "Pure Vanilla HTML5, modern ECMAScript (ES6+), custom CSS design tokens with CSS Grid and Flexbox, and static edge deployment via Vercel with a total asset payload under 15KB."
      },
      {
        title: "The purpose of the website",
        body: "To serve as a high-speed daily driver and architectural demonstration proving that disciplined, dependency-free web development can outperform heavy modern framework stacks for focused, single-purpose productivity utilities."
      }
    ],
    nextId: "portfolio"
  },
  {
    id: "portfolio",
    num: "07",
    title: "portfolio",
    fullTitle: "portfolio",
    subtitle: "Always a work in progress.",
    meta: "2026 · ONGOING · SOLO",
    status: "ONGOING",
    isOngoing: true,
    tags: "TypeScript · React · Vite · Vercel",
    handNote: "»always a work in progress«",
    role: "Creator",
    duration: "2026 · Ongoing",
    team: "Solo",
    stack: "TypeScript · React · Vite · Vercel",
    liveUrl: "https://atharvaportfolio-nine.vercel.app",
    repoUrl: "https://github.com/pawaratharvaaaa/portfolio",
    pullQuote: "the portfolio is never finished; it evolves with every commit.",
    watermark: "portfolio",
    previewDesc: "A living editorial portfolio quarterly, built in public.",
    notes: [
      "»building in public on Vercel«",
      "»keyboard-first navigation with prompt palette«"
    ],
    sections: [
      {
        title: "The problem",
        body: "The vast majority of developer portfolios rely on predictable, generic component libraries with lifeless gradients, flat cards, and sterile layouts that fail to convey the creator's personality, taste, technical depth, or tactile craft."
      },
      {
        title: "The approach",
        body: "Conceived as an editorial 'Portfolio Quarterly' publication inspired by mid-century print quarterlies and retro computing workstations. It combines classical editorial serif headlines (Fraunces Variable), precision sans (Inter Tight), terminal mono (Geist Mono), handwritten cursive marginalia (Caveat), realistic scotch-taped tilted card frames, live telemetry sensors, an integrated keyboard-first command palette (` or ⌘K`), Web Audio synthesizers, CRT scanlines, and retro arcade easter eggs."
      },
      {
        title: "The stack",
        body: "React 18, TypeScript, Vite 5, modular CSS architecture (tokens.css, layout.css, work.css, tmux.css, palette.css, snake.css), HTML5 Canvas 2D engine, Web Audio API, and canvas confetti celebration systems."
      },
      {
        title: "The purpose of the website",
        body: "To serve as Atharva Pawar's comprehensive digital archive and public showroom, documenting all 7 active software systems with authentic technical depth while giving visitors a memorable, tactile, keyboard-driven editorial experience."
      }
    ],
    nextId: "musclempire"
  }
];
