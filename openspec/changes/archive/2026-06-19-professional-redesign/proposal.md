# Proposal: professional-redesign

## Intent

The current portfolio fails every hard rule of professional web design: 4 competing accent colors, glassmorphism on 8 surfaces, decorative animations that add noise not meaning, AI-generated copy, zero accessibility, and a bento grid that fights its own content. It screams "AI template" — not "I build software." This redesign strips the amateur patterns and rebuilds with intentionality, hierarchy, and restraint.

## Scope

### In Scope
- Remove GSAP, Lenis, custom cursor — zero JS animation dependencies
- Replace design system: new palette, typography, spacing, surface hierarchy
- Rewrite HTML with semantic landmarks, proper accessibility
- New content-first layout (no bento grid)
- CSS-only animations + `prefers-reduced-motion`
- Realistic placeholder content (user provides real copy later)

### Out of Scope
- New sections or pages (stays a one-page portfolio)
- Adding JS framework, SSG, or backend
- Real project descriptions from the user (provided after design is approved)
- CMS integration or dynamic content loading

## Capabilities

> Pure visual redesign — no spec-level behavior changes.

### New Capabilities
None

### Modified Capabilities
None

## Approach

**Strip + rebuild** (Approach B from exploration):
1. Strip `gsap`, `lenis`, custom cursor from `package.json`, `src/main.js`, and `index.html`
2. Replace CSS design system — new warm palette, typography pair, solid surfaces (glass only on dock nav)
3. Rewrite `index.html` — semantic HTML5, `skip-to-content`, `aria-label`s, no decorative wrapper divs
4. Rewrite `src/main.js` — pure vanilla JS (IntersectionObserver if needed), <50 lines
5. CSS-only entrance animations (hero title fade-in) + `prefers-reduced-motion`
6. Content-first single-column layout — hero → about → projects → contact

## Design Direction

### Palette — Warm + Vibrant Organic
| Role | Hex | CSS Variable |
|------|-----|-------------|
| Background | `#100e0c` | `--bg-primary` |
| Surface | `#1c1916` | `--bg-surface` |
| Text | `#ece3d9` | `--text-primary` |
| Text muted | `#a69482` | `--text-secondary` |
| Accent primary | `#f97316` | `--accent-primary` |
| Accent emphasis | `#f43f5e` | `--accent-emphasis` |

Orange brings creative energy (perfect for a builder/artist). Rose adds emotional warmth for CTAs. Neutrals lean warm — no cold GitHub dark.

### Typography
- **Display**: Fraunces (variable serif, `SOFT` + `WONK` axes — organic, humanist, full of character)
- **Body**: DM Sans (warm humanist sans-serif, excellent readability)

### Layout
- Content-first single-column flow. Hero with large type, inline bio, 2 CTAs. About as full-width text + skills. Projects as a clean 3-column grid. Contact centered minimal.
- No bento grid, no glass surfaces on content cards. Dock nav keeps glass (functional overlay, 1 glass element total).

### Animation
- Zero JS animation libraries. Hero title: CSS `@keyframes` fade-in.
- Project cards: CSS `transition` on hover (lift + border highlight).
- Dock nav: CSS `transition` on hover/active.
- `prefers-reduced-motion` suppresses all entrance animations.
- Maybe IntersectionObserver for hero entrance if CSS `view-timeline` gaps.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` | Full rewrite | Semantic HTML5, accessibile structure, placeholder content |
| `src/style.css` | Full rewrite | New design system, CSS-only animations, accessibility |
| `src/main.js` | Full rewrite | Vanilla JS only, <50 lines, GSAP/Lenis removed |
| `package.json` | Modified | Remove gsap + lenis from dependencies |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Content rewrite needs real input | High | Use realistic placeholders; user provides content later |
| Scope creep into full redesign | Med | Enforce scope — portfolio is one page, not an app |
| Animation removal feels like regression | Med | Frame as "removing noise reveals signal" — CSS transitions replace GSAP |
| New palette rejected by user | Med | We propose; user adjusts. Palette is CSS variables — trivial to change |

## Rollback Plan

`git revert` the merge commit. No data loss risk — this is all frontend code.

## Dependencies

- Google Fonts: Fraunces + DM Sans (replace Outfit + Inter)
- No build tool changes (Vite stays)

## Success Criteria

- [ ] GSAP, Lenis, custom cursor fully removed — no JS animation dependencies
- [ ] WCAG AA contrast on all text (4.5:1 normal, 3:1 large)
- [ ] `prefers-reduced-motion` suppresses all non-essential animations
- [ ] All interactive elements keyboard-accessible with `:focus-visible`
- [ ] `index.html` passes semantic HTML validation
- [ ] `package.json` has zero animation library dependencies
