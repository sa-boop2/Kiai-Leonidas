# 🏛️ Unified Transformation Hub (Kiai & Leonidas)

A state-of-the-art dual progressive web application (PWA) hub that seamlessly unites two distinct transformation roadmaps into a single cohesive experience.

Built with pure Vanilla HTML5, CSS3, and JavaScript, featuring smooth 3D logo switcher navigation, persistent local mobile storage, audio keep-alives for iOS background timers, and deep thematic immersion.

---

## ✨ Key Features

- **🔄 Seamless Hub Navigation:** Click the 3D rotating logo in either application to summon a glassmorphic popover switcher. Transition between apps instantly with smooth cubic-bezier viewport sliding.
- **🥋 Kiai (Eastern Dojo Sanctuary):**
  - Interactive workout timers and technique encyclopedia.
  - Imbued with Zen calligraphy watermarks, crimson-jade lighting, and serene micro-animations.
  - Executive 12-column progress and mastery rank dashboard.
- **🛡️ Leonidas (Spartan Agoge Roadmap):**
  - Chiseled Corinthian bronze-gold dark mode aesthetics.
  - Interactive **Weekly Training Split Selector** (Upper/Lower, PPL Titan, Spartan Full Body 3x, Golden Era Split).
  - Pinned **Travel & Life Disruptions Contingency Protocols** (Trip 3-5 days, Weekend guests, No gym access).
- **📱 PWA & iPhone Ready:** Full offline capability, custom home screen icons (`apple-touch-icon`), and silent HTML5 audio unlockers ensuring sleep timers never throttle on mobile browsers.

---

## 📂 Repository File Structure

Upload all files and directories listed below to your GitHub repository root:

```text
├── index.html                 # Master Dual-Viewport Unified Hub Shell
├── switcher.css               # Hub Switcher Popover & Transition Animations
├── switcher.js                # Iframe Coordinator & State Management
├── package.json               # Local Vite Dev Server Configuration
├── manifest.json              # Web App PWA Manifest
├── .gitignore                 # Git Ignore Rules
├── Kiai_Rebuilt/              # Standalone Kiai Application
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── sw.js                  # Service Worker
│   ├── icon.png               # App Icon
│   └── data/                  # Workout & Encyclopedia Data Files
└── Project Leonidas - App/    # Standalone Leonidas Application
    ├── index.html
    ├── app.js
    └── styles.css
```

---

## 🚀 Getting Started

### Option 1: Direct File Launch
Simply open `index.html` directly in any modern web browser. No compilation or installation required.

### Option 2: Local Development Server (Recommended)
If you have Node.js installed, you can launch a local live-reload server:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to experience the hub locally.

---

## 🌐 Deploying to GitHub Pages

1. Push this entire repository to GitHub.
2. Go to your Repository **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select `main` branch and `/ (root)` folder.
5. Click **Save**. Within 1–2 minutes, your unified transformation hub will be live on the web!
