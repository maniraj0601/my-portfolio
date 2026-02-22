# Maniraja A — Portfolio

Personal portfolio of **Maniraja A**, Senior Consultant · UI Developer at Thoughtworks. Built with React 19, Vite 7, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (zero warnings) |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run check` | Run format check + lint together |

## Routes

| URL | Page |
|-----|------|
| `/` | Home |
| `/about` | About |
| `/work` | Work |
| `/contact` | Contact |
| `/studio` | Studio (style guide) |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Scroll-aware, mobile overlay nav
│   │   ├── Footer.jsx        # 3-column grid, inline SVG icons
│   │   └── index.js
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   ├── Input.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── index.js
│   └── ScrollToTop.jsx
├── context/
│   └── ThemeContext.jsx      # Theme state management
├── data/
│   └── content.js            # Single source of truth for all copy & data
├── hooks/
│   ├── useTheme.js
│   ├── useMediaQuery.js
│   ├── useReveal.js          # Intersection-observer scroll reveal
│   ├── useTypewriter.js      # Typewriter animation
│   └── index.js
├── pages/
│   ├── Home.jsx              # Hero + intro with count-up stats
│   ├── About.jsx             # Bio, skills, career timeline, education
│   ├── Work.jsx              # Thoughtworks projects + previous roles
│   ├── Contact.jsx           # Contact form + direct contact info
│   └── Studio.jsx            # Design system / style guide
├── App.jsx
├── main.jsx
└── index.css                 # Tailwind v4 + theme variables
```

## Content

All portfolio copy — personal info, projects, career history, skills, achievements — lives in a single file:

```
src/data/content.js
```

Edit only this file to update text, links, or project data without touching any page components.

## Color Palette

Six custom tokens replace the default Tailwind color scheme:

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#0C2C47` | Primary backgrounds, headings |
| `forest` | `#2D5652` | Secondary accents |
| `amber` | `#E2A54D` | Highlights, CTAs |
| `aqua` | `#97D3CD` | Decorative accents |
| `blush` | `#EFEAE6` | Light section backgrounds |
| `mint` | `#E4F2EA` | Alternate light backgrounds |

All tokens are registered in `src/index.css` under `@theme` and `:root`/`.dark`.

## Theme System

Supports light and dark modes with system preference detection and `localStorage` persistence.

```jsx
import { useTheme } from './hooks'

const { theme, toggleTheme, isDark } = useTheme()
```

## Tech Stack

| | |
|---|---|
| [React 19](https://react.dev) | UI library |
| [Vite 7](https://vite.dev) | Build tool |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling (CSS-first config) |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [ESLint](https://eslint.org) + [Prettier](https://prettier.io) | Code quality |
