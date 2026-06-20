# Tasks: Professional Redesign

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~600 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1: Foundation + Layout + HTML | PR 2: Components + Animations + A11y + JS |
| Delivery strategy | ask-on-risk |
| Chain strategy | single-pr (size:exception) |

Decision needed before apply: Yes — resolved: size:exception accepted
Chained PRs recommended: Yes — waived, single PR accepted
Chain strategy: single-pr (size:exception)
400-line budget risk: High — waived, size:exception

### Suggested Work Units

| Unit | Goal | Likely PR | Base Branch | Notes |
|------|------|-----------|-------------|-------|
| 1 | Foundation + Layout + HTML structure | PR 1 | `main` | package.json cleanup, CSS vars, semantic HTML, base layout, typography |
| 2 | Components + Animations + JS + A11y | PR 2 | `main` | Cards, dock nav, animations, scrollspy, focus/motion/contrast |

## Phase 1: Foundation

- [x] 1.1 Edit `package.json` — remove `gsap` and `lenis` from dependencies
- [x] 1.2 Edit `index.html` — replace Google Fonts link with Fraunces + DM Sans
- [x] 1.3 Rewrite `src/style.css` `:root` block — 11 color tokens, 8 spacing tokens, 5 typography levels

## Phase 2: Layout & Structure

- [x] 2.1 Rewrite `index.html` — semantic HTML5 landmarks (`<main>`, `<section>`, `<nav>`, `<footer>`), skip-to-content link as first DOM node
- [x] 2.2 Add `aria-label` attributes to all sections and icon-only links in `index.html`
- [x] 2.3 Write base layout CSS in `style.css` — single-column flow, responsive container (1100px max), 3 breakpoints
- [x] 2.4 Add `clamp()` typography scale in `style.css` — Fraunces for headings, DM Sans for body/small

## Phase 3: Components

- [x] 3.1 Write Hero section HTML + CSS — large heading, inline bio, 2 CTA buttons, fade-in animation
- [x] 3.2 Write About section HTML + CSS — full-width intro text, inline skills list on `--bg-surface` card
- [x] 3.3 Write Projects section HTML + CSS — 3-column grid of cards with hover border/shadow transition
- [x] 3.4 Write Contact section + Footer HTML/CSS — centered minimal card, footer with top border
- [x] 3.5 Write Dock Nav HTML + CSS — `<nav aria-label="Main Navigation">`, glassmorphism, active dot, 48px touch targets

## Phase 4: Animations & Interactivity

- [x] 4.1 Add `@keyframes fade-in-up` CSS animation with staggered delays on hero children
- [x] 4.2 Rewrite `src/main.js` — IntersectionObserver scrollspy (~25 lines), dock `scrollIntoView` click handler
- [x] 4.3 Add project card and dock nav CSS `transition` rules for hover/active states

## Phase 5: Accessibility & Polish

- [x] 5.1 Add `:focus-visible` outline styles on all interactive elements
- [x] 5.2 Add `@media (prefers-reduced-motion: reduce)` to suppress all non-essential animations
- [x] 5.3 Verify WCAG AA contrast ratios on all text/background combinations
