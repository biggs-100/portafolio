---
name: professional-web-design
description: "Trigger: rediseñar, redesign, professional design, anti-ai design, pro design, diseño profesional. Transform amateur IA-generated websites into professional-grade designs using intentionality, hierarchy, restraint, and UX-first principles."
license: Apache-2.0
metadata:
  author: "gentle-ai"
  version: "1.0"
---

## Activation Contract

Load this skill when redesigning a website that looks AI-generated, generic, or amateur. Apply it during any phase that touches visual design decisions: HTML structure, CSS system, layout, typography, spacing, color, or interaction.

## Hard Rules

1. **Every visual choice MUST answer "why?"** — no decoration without purpose. If a gradient, shadow, animation, or color cannot be justified by hierarchy, brand, or UX, remove it.
2. **Maximum 3 accent colors.** One primary, one surface variant, one emphasis. No competing accents.
3. **Maximum 2 font families.** One display for headings, one text for body. Variable fonts count as one family.
4. **No glassmorphism on every card.** At most 1–2 glass panels per page. All other surfaces use solid or gradient fills with good contrast.
5. **Text MUST pass WCAG AA contrast (4.5:1 normal, 3:1 large).** Test white-on-glass: add a solid scrim underneath.
6. **Every interactive element MUST be keyboard-accessible** and have visible focus styles.
7. **`prefers-reduced-motion` MUST suppress all non-essential animations.**
8. **No !important, no duplicate layout systems** (no grid-to-flex fallback in same component).

## Decision Gates

| Situation | Action |
|-----------|--------|
| Too many accent colors in palette | Reduce to 1 primary + 1 emphasis. Move rest to surface/neutral states. |
| Glass on every component | Keep glass only on the most important surface (hero or nav). Everything else: solid. |
| 3+ font families loaded | Cut to 2. Use weights (300–900) for hierarchy instead of families. |
| All sections have same padding/spacing | Vary padding by section importance. Hero: most. Content: medium. Footer: least. |
| GSAP/Lenis animations everywhere | Keep only animations that serve a narrative purpose. Remove decorative auto-plays. |

## Execution Steps

1. **Audit the existing palette:** reduce to 3–5 color roles (bg, surface, primary, accent, emphasis). Remove competing accents.
2. **Audit typography:** reduce to ≤2 families. Map weights: 300–400 for body, 600–700 for subheadings, 800–900 for display.
3. **Establish spacing rhythm:** define a spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96px). Apply consistently.
4. **Rewrite HTML structure with semantic elements:** `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`, `<figure>`. Remove generic `<div>` wrappers where semantic tags fit.
5. **Rewrite CSS to remove decoration:** delete duplicate glass panels, consolidate `backdrop-filter`, remove redundant shadows. Replace with intentional surface hierarchy (solid → subtle gradient → glass).
6. **Audit animations:** Remove ScrollTrigger fades on decorative sections. Keep only: hero entrance, project card hovers, navigation transitions. Add `prefers-reduced-motion` media query.
7. **Fix accessibility:** add `aria-label` on icon-only links, `tabindex` navigation, skip-to-content link, focus styles, tap targets ≥44px.
8. **Refine copy:** replace generic AI text ("premium", "immersive", "high-fidelity", "enterprise-grade") with authentic, specific language. Match the actual project scope.

## Output Contract

Return:
- `changes-meta`: files touched, lines changed, key CSS/CSS custom properties added/removed.
- `palette-roles`: final color roles with hex values and CSS variable names.
- `hierarchy-score`: qualitative assessment (poor / fair / good / excellent) of visual hierarchy before and after.
- `accessibility-pass`: whether WCAG AA contrast is achieved on all text elements.
- `skill-resolution`: `paths-injected`.

## References

- `AGENTS.md` — project-level skill registration.
- `.atl/skill-registry.md` — registry index for delegator resolution.
