# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## Indexed Skills

| Skill | Trigger / Description | Scope | Path |
|---|---|---|---|
| branch-pr | Create Gentle AI pull requests with issue-first checks. | user | C:\Users\USER\.config\opencode\skills\branch-pr\SKILL.md |
| chained-pr | Split oversized changes into chained PRs that protect review focus. | user | C:\Users\USER\.config\opencode\skills\chained-pr\SKILL.md |
| cognitive-doc-design | Design docs that reduce cognitive load. | user | C:\Users\USER\.config\opencode\skills\cognitive-doc-design\SKILL.md |
| comment-writer | Write warm, direct collaboration comments. | user | C:\Users\USER\.config\opencode\skills\comment-writer\SKILL.md |
| customize-opencode | Create or modify opencode configuration (opencode.json, agents, skills, plugins, MCP). | user | C:\Users\USER\.config\opencode\skills\customize-opencode\SKILL.md |
| go-testing | Trigger: Go tests, go test coverage, Bubbletea teatest, golden files. | user | C:\Users\USER\.config\opencode\skills\go-testing\SKILL.md |
| issue-creation | Create Gentle AI issues with issue-first checks. | user | C:\Users\USER\.config\opencode\skills\issue-creation\SKILL.md |
| judgment-day | Run blind dual review, fix confirmed issues, then re-judge. | user | C:\Users\USER\.config\opencode\skills\judgment-day\SKILL.md |
| professional-web-design | Transform amateur AI-generated websites into professional-grade designs. | project | C:\Users\USER\Desktop\portafolio\skills\professional-web-design\SKILL.md |
| skill-creator | Create LLM-first skills with valid frontmatter. | user | C:\Users\USER\.config\opencode\skills\skill-creator\SKILL.md |
| skill-improver | Audit and upgrade existing LLM-first skills. | user | C:\Users\USER\.config\opencode\skills\skill-improver\SKILL.md |
| work-unit-commits | Plan commits as reviewable work units. | user | C:\Users\USER\.config\opencode\skills\work-unit-commits\SKILL.md |

## Resolution Rules

- SDD skills (`sdd-*`) are resolved by the orchestrator phase routing, not the registry.
- `skill-registry` is the registry itself and is excluded.
- `_shared` is a common reference, not a skill.
- Project-level skills override user-level skills with the same name.
