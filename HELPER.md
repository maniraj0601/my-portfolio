# Helper Guide

This document explains the key concepts and patterns used in this project. Reference this when you need a refresher on how things work.

---

## Tailwind CSS v4 (New Approach)

Tailwind v4 uses CSS-first configuration instead of JavaScript config files.

### Key Differences from v3

**Old way (v3):**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6'
      }
    }
  }
}
```

**New way (v4):**
```css
/* index.css */
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
}
```

The `@theme` directive registers custom design tokens directly in CSS. These become usable as Tailwind classes like `bg-primary`, `text-primary`, etc.

### Why CSS Variables for Theming?

We use a two-layer variable system:

1. **Palette variables** (`--palette-*`) - Hold the actual color values, change between light/dark
2. **Theme variables** (`--color-*`) - Reference palette variables, used by Tailwind

This separation lets us swap entire color schemes by just changing the palette values in `.dark` class.

---

## Theme Context Pattern

### How It Works

```
ThemeProvider (holds state)
    ↓
  Context (shares state)
    ↓
  useTheme (consumes state)
```

1. `ThemeProvider` wraps the app and manages theme state
2. Theme preference is persisted in `localStorage`
3. System preference is detected via `matchMedia`
4. The `dark` class is toggled on `<html>` element

### The Flow

```
User clicks toggle → setTheme called → state updates →
useEffect runs → DOM class changes → CSS variables switch → colors change
```

---

## Responsive Design Strategy

### Mobile-First Approach

Always write the mobile style first, then add breakpoints for larger screens:

```jsx
// Good
<div className="text-sm md:text-base lg:text-lg">

// Avoid (desktop-first thinking)
<div className="text-lg md:text-base sm:text-sm">
```

### Common Responsive Patterns

**Stack to Grid:**
```jsx
<div className="flex flex-col md:flex-row">
```

**Adjust Spacing:**
```jsx
<div className="px-4 sm:px-6 lg:px-8">
```

**Hide/Show:**
```jsx
<div className="hidden md:block">  // Hidden on mobile
<div className="md:hidden">        // Hidden on desktop
```

---

## Component Design Principles

### Variant Pattern

Instead of many boolean props, use a single `variant` prop:

```jsx
// Good
<Button variant="primary" />
<Button variant="danger" />

// Avoid
<Button primary />
<Button danger />
```

This scales better and prevents invalid combinations like `<Button primary danger />`.

### Composition Over Configuration

Cards use composition (separate Header/Body/Footer components) rather than props:

```jsx
// Good - flexible
<Card>
  <CardBody>Just content</CardBody>
</Card>

<Card>
  <CardHeader>With header</CardHeader>
  <CardBody>And content</CardBody>
</Card>

// Avoid - rigid
<Card header="Title" body="Content" footer="Footer" />
```

### Forward Refs

The `Input` component uses `forwardRef` to allow parent components to access the DOM element:

```jsx
const inputRef = useRef()
<Input ref={inputRef} />

// Later...
inputRef.current.focus()
```

This is essential for form libraries and programmatic focus management.

---

## Accessibility Checklist

### For Interactive Elements

- [ ] Has visible focus state (`focus-visible:ring-*`)
- [ ] Keyboard accessible (buttons work with Enter/Space)
- [ ] Has accessible name (visible text or `aria-label`)

### For Forms

- [ ] Labels connected to inputs (`htmlFor` + `id`)
- [ ] Error messages linked (`aria-describedby`)
- [ ] Invalid state announced (`aria-invalid`)

### For Icons

- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Meaningful icons have `aria-label`

### For Theme Toggle

```jsx
aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
```

The label describes the action, not the current state.

---

## CSS Architecture

### Layer Order in index.css

```css
@import "tailwindcss";     /* 1. Tailwind base, components, utilities */

@theme { }                  /* 2. Custom theme tokens */

:root { }                   /* 3. Light mode palette */

.dark { }                   /* 4. Dark mode palette */

body { }                    /* 5. Base element styles */
```

### Custom Colors Usage

After defining in `@theme`:
```css
@theme {
  --color-surface: var(--palette-surface);
}
```

Use in components:
```jsx
<div className="bg-surface" />
```

---

## Hooks Explained

### useTheme

Returns:
- `theme` - Current theme string ("light" or "dark")
- `setTheme(theme)` - Set specific theme
- `toggleTheme()` - Switch between light/dark
- `isDark` - Boolean for quick checks

### useMediaQuery

Low-level hook for any media query:

```jsx
const isLandscape = useMediaQuery('(orientation: landscape)')
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
```

### useBreakpoint

Higher-level hook with named breakpoints:

```jsx
const { isMobile, isTablet, isDesktop, breakpoint } = useBreakpoint()
```

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.jsx` |
| Hooks | camelCase with "use" prefix | `useTheme.js` |
| Contexts | PascalCase with "Context" suffix | `ThemeContext.jsx` |
| Utilities | camelCase | `formatDate.js` |
| Index exports | lowercase | `index.js` |

---

## Adding New Colors

1. Add palette variables in `:root` and `.dark`:

```css
:root {
  --palette-brand-500: #your-color;
}
.dark {
  --palette-brand-500: #your-dark-color;
}
```

2. Register in `@theme`:

```css
@theme {
  --color-brand-500: var(--palette-brand-500);
}
```

3. Use in components:

```jsx
<div className="bg-brand-500" />
```

---

## Quick Reference

### Tailwind Color Classes

```
bg-{color}       Background
text-{color}     Text color
border-{color}   Border color
ring-{color}     Focus ring
```

### Tailwind Spacing Scale

```
1 = 4px    4 = 16px    8 = 32px    16 = 64px
2 = 8px    5 = 20px    10 = 40px   20 = 80px
3 = 12px   6 = 24px    12 = 48px   24 = 96px
```

### Focus States

```
focus:        All focus events
focus-visible: Only keyboard focus (recommended)
```

Always prefer `focus-visible` for better UX - mouse users don't see focus rings, keyboard users do.

---

## Portfolio Setup (February 2026)

### Color Palette

From the design image — 6 colours that replace the default blue/purple scheme:

| Token    | Hex       | Class examples              |
|----------|-----------|-----------------------------|
| `navy`   | #0C2C47   | `bg-navy`, `text-navy`      |
| `forest` | #2D5652   | `bg-forest`, `text-forest`  |
| `amber`  | #E2A54D   | `bg-amber`, `text-amber`    |
| `aqua`   | #97D3CD   | `bg-aqua`, `text-aqua`      |
| `blush`  | #EFEAE6   | `bg-blush`, `text-blush`    |
| `mint`   | #E4F2EA   | `bg-mint`, `text-mint`      |

All registered in `src/index.css` under `@theme` and `:root`.

---

### Routing

Installed `react-router-dom`. `src/App.jsx` uses `<BrowserRouter>` wrapping all routes.

| URL        | Component              |
|------------|------------------------|
| `/`        | `src/pages/Home.jsx`   |
| `/about`   | `src/pages/About.jsx`  |
| `/work`    | `src/pages/Work.jsx`   |
| `/contact` | `src/pages/Contact.jsx`|

---

### Layout Components

**`src/components/layout/Navbar.jsx`**

- Fixed-position, `z-50`, transparent until scroll > 24px then gets frosted glass (`bg-blush/90 backdrop-blur-md`)
- Desktop: logo left, animated-underline nav links center, "Let's talk" pill CTA right
- Mobile: 3-line hamburger → full-screen navy overlay
  - Overlay has ambient blob decorations
  - Each nav link slides up + fades in with a staggered delay (`transitionDelay: index * 75 + 100ms`)
  - Active link is highlighted in amber
  - Contact email shown at the bottom of the overlay
- Locks body scroll (`overflow: hidden`) while overlay is open

**`src/components/layout/Footer.jsx`**

- Navy background, three-column grid (Brand / Navigation / Connect)
- Inline SVG icons for GitHub, LinkedIn, Twitter — no icon library dependency
- Copyright row at the bottom

---

### Pages

**`src/pages/Home.jsx`** — Two sections:
1. **Hero**: Full-viewport (`min-h-screen`), blush background, CSS-only decorative shapes (circles, blurs using palette colours), `clamp()` display heading, two CTA buttons, scroll hint
2. **Intro**: Mint background, 2-col grid with bio text and stat pills (amber value, muted label)

**`src/pages/About.jsx`** — Header (blush bg) + bio section with image placeholder and offset amber border decoration

**`src/pages/Work.jsx`** — Header (navy bg, aqua accent heading) + project card grid. Cards show coloured thumbnail area, category, title, description, case study link.

**`src/pages/Contact.jsx`** — Header (mint bg) + 2-col layout: contact form (name, email, subject, message) and direct contact info. Form is wired to a `handleSubmit` stub — connect to Formspree / Resend when ready.

---

### Patterns Used

- **Scroll-aware navbar**: `window.addEventListener('scroll', ...)` in `useEffect` with passive flag
- **Body scroll lock**: toggled via `document.body.style.overflow` while mobile overlay is open
- **Staggered animation**: CSS `transition` + inline `transitionDelay` on each menu item, driven by open/closed state
- **Decorative blobs**: `rounded-full` divs with `blur-*` Tailwind classes and palette colours, `pointer-events-none` and `aria-hidden`
- **`clamp()` typography**: `text-[clamp(3rem,9vw,7.5rem)]` for fluid display headings
