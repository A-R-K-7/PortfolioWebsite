# Akshay Reddy Kallem — Portfolio Website

A personal portfolio website for **Akshay Reddy Kallem**, a Machine Learning Engineer specializing in time-series systems, AI-driven trading algorithms, and scalable ML pipelines.

**Live Site:** [https://a-r-k-7.github.io/PortfolioWebsite/](https://a-r-k-7.github.io/PortfolioWebsite/)
---

## ✨ Features

- **Animated Hero** — Full-viewport section with a live Three.js neural network sphere, floating particles, and GSAP-powered stat counters
- **Marquee Banner** — Scrolling tech marquee strip between sections (forward & reverse)
- **About** — Editorial word-by-word GSAP reveal with a three-column content layout
- **Projects** — Five featured projects with scroll-triggered slide-in animations, tech tags, and GitHub links
- **Skills** — Animated skill badges organized by category (Languages, ML, Concepts, Systems, Tools)
- **Achievements & Education** — Recognition cards and academic background with stagger animations
- **Contact** — Large CTA section with email and LinkedIn links
- **Navbar** — Sticky glassmorphism navbar with magnetic hover effect on links and animated mobile drawer
- **Responsive** — Fully responsive across desktop and mobile

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 19, Vite 8 |
| Styling | Tailwind CSS v4 |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion, GSAP (with ScrollTrigger) |
| Deployment | GitHub Pages (`gh-pages`) |
| Fonts | Inter, Space Grotesk, JetBrains Mono, Playfair Display |

---

## 📁 Project Structure

```
PortfolioWebsite/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with magnetic links & mobile drawer
│   │   ├── Hero.jsx          # Three.js neural sphere + GSAP animations
│   │   ├── Marquee.jsx       # Infinite scrolling tech marquee
│   │   ├── About.jsx         # Word-by-word reveal heading + 3-column layout
│   │   ├── Projects.jsx      # 5 featured projects with scroll animations
│   │   ├── Skills.jsx        # Animated skill badge categories
│   │   ├── Achievements.jsx  # Awards & education cards
│   │   ├── Contact.jsx       # CTA section with email & LinkedIn
│   │   ├── Footer.jsx        # Minimal footer
│   │   └── useInView.js      # Custom IntersectionObserver hook
│   ├── App.jsx               # Root component & page layout
│   ├── index.css             # Global design system & CSS variables
│   └── main.jsx              # React entry point
├── index.html                # HTML shell with SEO meta tags & Google Fonts
├── vite.config.js            # Vite + Tailwind + gh-pages base path config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/A-R-K-7/PortfolioWebsite.git
cd PortfolioWebsite

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with Hot Module Replacement (HMR).

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

The site is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script) and then publishes the `dist/` folder to the `gh-pages` branch.

The `base` path in [`vite.config.js`](./vite.config.js) is set to `/PortfolioWebsite/` to match the GitHub Pages URL.

---

## 🎨 Design System

Global design tokens are defined in [`src/index.css`](./src/index.css):

- **Color Palette** — Dark background (`--color-bg-dark`), accent red (`--color-accent`), accent teal (`--color-accent-2`)
- **Typography** — Space Grotesk (headings), Inter (body), JetBrains Mono (code), Playfair Display (serif italics)
- **Reusable Classes** — `section-dark`, `section-light`, `section-navy`, `btn-accent`, `btn-outline`, `skill-badge`, `tech-tag`, `display-heading`, `label-text`, `glow-dot`

---

## 📂 Featured Projects

| # | Project | Tech |
|---|---|---|
| 01 | [ML-Powered Algorithmic Trading Framework (StockML)](https://github.com/A-R-K-7/StockML) | Python, PyTorch, Pandas, WebSockets, XGBoost |
| 02 | [Automated Trading Platform (FlatTradeWeb)](https://github.com/A-R-K-7/FlatTradeWeb-With-Sell-Automation) | Python, Flask, Pandas, WebSockets |
| 03 | [Cross-Platform Expense Tracker](https://github.com/A-R-K-7/MyExpenseTracker) | React Native, TypeScript, Expo, Jest |
| 04 | [YouTube Video Downloader (YouTVD)](https://github.com/A-R-K-7/YouTVD) | Python, Flask, SocketIO, yt-dlp, ffmpeg |
| 05 | [AI-Driven Behavioural Companion](https://github.com/A-R-K-7/BehaviouralCompanion) *(In Progress)* | PyTorch, Scikit-learn, React |

---

## 📬 Contact

- **Email:** [akshayreddykallem@gmail.com](mailto:akshayreddykallem@gmail.com)
- **LinkedIn:** [linkedin.com/in/akshay-reddy-kallem](https://www.linkedin.com/in/akshay-reddy-kallem/)
- **GitHub:** [github.com/A-R-K-7](https://github.com/A-R-K-7)
