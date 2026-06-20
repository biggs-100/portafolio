# Design: Professional Redesign — Strip + Rebuild

## Technical Approach

Strip GSAP, Lenis, and custom cursor. Vite stays unchanged. Rewrite all three source files: `index.html` (semantic HTML5), `src/style.css` (new design system, CSS-only animations), `src/main.js` (<30 lines vanilla JS). New palette uses warm neutrals + orange/rose accents. Fraunces + DM Sans replace Outfit + Inter. Content-first single-column layout replaces the bento grid. Glassmorphism restricted to the dock nav only — all other surfaces are solid.

---

## Architecture Decisions

**CSS**: Single `style.css` with custom properties in `:root`. No preprocessor. Sections separated by comments. **HTML**: Every section is `<section>` with `id` + `aria-label`. Dock is `<nav aria-label="Main Navigation">`. Skip-to-content link is first DOM node. All icon-only links carry `aria-label`. No wrapper divs. **JS**: Vanilla IntersectionObserver for dock scrollspy (0.3 threshold). Dock click uses `scrollIntoView({ behavior: 'smooth' })`. ~25 lines total. No GSAP, Lenis, custom cursor. **Animations**: CSS-only. Hero: `@keyframes fade-in-up` 0.8s ease-out with staggered delays on children. Project cards: 0.3s ease transition on transform/border/shadow. Dock: 0.2s ease. `prefers-reduced-motion` kills all.

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `index.html` | Rewrite | Semantic HTML5, skip-to-content, aria-labels, placeholder content |
| `src/style.css` | Rewrite | Complete CSS design system (~450 lines) |
| `src/main.js` | Rewrite | Vanilla JS, 25–30 lines, no imports |
| `package.json` | Modify | Remove `gsap` and `lenis` from dependencies |

---

## Layout Structure & Breakpoints

| Section | Desktop (>1024px) | Tablet (640–1024px) | Mobile (<640px) |
|---------|-------------------|---------------------|-----------------|
| Container max-width | 1100px | 100% | 100% |
| Horizontal padding | 48px | 32px | 20px |
| Section Y padding | 96px | 64px | 48px |
| Project cards grid | 3 columns | 2 columns | 1 column |
| Content flow | Single column throughout (no bento) |

## Component Design

| Surface | bg | border | radius | padding |
|---------|-----|--------|-------|---------|
| Hero | `--bg-primary` | none | — | — |
| Cards (about/project/contact) | `--bg-surface` | `--border-subtle` 1px | 16px | 32px |
| Project hover | +`--accent-primary` border | `--border-hover` | same | same |
| Footer | `--bg-primary` | top border `--border-subtle` | — | 32px 0 |
| Dock | `--glass-bg` (glass only) | `--glass-border` | 24px | 10px 16px |

### Spacing Tokens

| Token | Value | Applied To |
|-------|-------|------------|
| `--space-4` | 4px | dock active dot |
| `--space-8` | 8px | tag/gap spacing |
| `--space-16` | 16px | card inner gap, button pad |
| `--space-24` | 24px | grid gap, section title margin |
| `--space-32` | 32px | card padding, footer pad |
| `--space-48` | 48px | section Y-pad (mobile) |
| `--space-64` | 64px | section Y-pad (tablet) |
| `--space-96` | 96px | section Y-pad (desktop) |

### Color Tokens (`:root`)

```css
--bg-primary:     #100e0c;
--bg-surface:     #1c1916;
--bg-elevated:    #25211c;
--text-primary:   #ece3d9;
--text-secondary: #a69482;
--accent-primary: #f97316;
--accent-emphasis:#f43f5e;
--border-subtle:  rgba(236,227,217,0.08);
--border-hover:   rgba(249,115,22,0.3);
--glass-bg:       rgba(28,25,22,0.6);
--glass-border:   rgba(236,227,217,0.1);
```

### Typography Scale

| Element | Font Family | Weight | `clamp()` Size |
|---------|-------------|--------|----------------|
| h1 | Fraunces | 800 | `clamp(2.5rem, 6vw, 4.5rem)` |
| h2 | Fraunces | 700 | `clamp(1.75rem, 4vw, 2.75rem)` |
| h3 | Fraunces | 600 | `clamp(1.25rem, 2.5vw, 1.75rem)` |
| Body | DM Sans | 400 | `clamp(1rem, 1.5vw, 1.125rem)` |
| Small | DM Sans | 500 | `clamp(0.75rem, 1vw, 0.875rem)` |

### Animation Keyframes

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-content > * { animation: fade-in-up 0.8s ease-out forwards; }
.hero-content > :nth-child(2) { animation-delay: 0.2s; }
.hero-content > :nth-child(3) { animation-delay: 0.4s; }
```

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Skip to content | `<a href="#main-content" class="skip-link">` — first DOM node in `<body>`, visually hidden until focused |
| Focus styles | `:focus-visible` on all interactive: `outline: 2px solid var(--accent-primary); outline-offset: 2px` |
| Icon-only links | `aria-label="GitHub"`, `aria-label="LinkedIn"`, `aria-label="Send email"` |
| Landmarks | `<main id="main-content">`, `<nav aria-label="Main Navigation">`, `<footer>` |
| Motion | `@media (prefers-reduced-motion: reduce)` kills all animations |
| Contrast | Text on `--bg-primary` (ratio ≥ 10:1), text on `--bg-surface` (≥ 8:1), orange accent on dark bg (≥ 5:1) — all pass WCAG AA |
| Touch targets | All interactive ≥ 44×44px (dock items: 48×48px, buttons: min 48px tall, social links: 44×44px) |
