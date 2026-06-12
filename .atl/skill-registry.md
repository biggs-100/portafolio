# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
| --- | --- | --- |
| > | alphafold-database-fetch-and-analyze | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/alphafold_database_fetch_and_analyze/SKILL.md) |
| > | alphagenome-single-variant-analysis | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/alphagenome_single_variant_analysis/SKILL.md) |
| creating, opening, or preparing PRs for review. | branch-pr | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/branch-pr/SKILL.md) |
| PRs over 400 lines, stacked PRs, review slices. Split oversized changes into chained PRs that protect review focus. | chained-pr | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/chained-pr/SKILL.md) |
| > | chembl-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/chembl_database/SKILL.md) |
| > | clinical-trials-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/clinical_trials_database/SKILL.md) |
| > | clinvar-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/clinvar_database/SKILL.md) |
| writing guides, READMEs, RFCs, onboarding, architecture, or review-facing docs. | cognitive-doc-design | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/cognitive-doc-design/SKILL.md) |
| PR feedback, issue replies, reviews, Slack messages, or GitHub comments. | comment-writer | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/comment-writer/SKILL.md) |
| > | dbsnp-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/dbsnp_database/SKILL.md) |
| > | embl-ebi-ols | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/embl_ebi_ols/SKILL.md) |
| > | encode-ccres-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/encode_ccres_database/SKILL.md) |
| > | ensembl-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/ensembl_database/SKILL.md) |
| > | foldseek-structural-search | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/foldseek_structural_search/SKILL.md) |
| > | gnomad-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/gnomad_database/SKILL.md) |
| Go tests, go test coverage, Bubbletea teatest, golden files. Apply focused Go testing patterns. | go-testing | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/go-testing/SKILL.md) |
| > | gtex-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/gtex_database/SKILL.md) |
| > | human-protein-atlas-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/human_protein_atlas_database/SKILL.md) |
| > | interpro-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/interpro_database/SKILL.md) |
| creating GitHub issues, bug reports, or feature requests. | issue-creation | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/issue-creation/SKILL.md) |
| > | jaspar-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/jaspar_database/SKILL.md) |
| judgment day, dual review, adversarial review, juzgar. Run blind dual review, fix confirmed issues, then re-judge. | judgment-day | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/judgment-day/SKILL.md) |
| > | literature-search-arxiv | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/literature_search_arxiv/SKILL.md) |
| > | literature-search-biorxiv | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/literature_search_biorxiv/SKILL.md) |
| > | literature-search-europepmc | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/literature_search_europepmc/SKILL.md) |
| > | literature-search-openalex | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/literature_search_openalex/SKILL.md) |
| > | ncbi-sequence-fetch | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/ncbi_sequence_fetch/SKILL.md) |
| > | openfda-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/openfda_database/SKILL.md) |
| > | opentargets-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/opentargets_database/SKILL.md) |
| > | pdb-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/pdb_database/SKILL.md) |
| > | protein-sequence-msa | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/protein_sequence_msa/SKILL.md) |
| > | protein-sequence-similarity-search | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/protein_sequence_similarity_search/SKILL.md) |
| > | pubchem-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/pubchem_database/SKILL.md) |
| >- | pubmed-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/pubmed_database/SKILL.md) |
| > | pymol | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/pymol/SKILL.md) |
| > | quickgo-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/quickgo_database/SKILL.md) |
| > | reactome-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/reactome_database/SKILL.md) |
| > | readme-master | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/readme-master/SKILL.md) |
| >- | science-skills-common | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/science_skills_common/SKILL.md) |
| >- | scienceskillscommon | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/scienceskillscommon/SKILL.md) |
| new skills, agent instructions, documenting AI usage patterns. Create LLM-first skills with valid frontmatter. | skill-creator | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/skill-creator/SKILL.md) |
| > | string-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/string_database/SKILL.md) |
| > | ucsc-conservation-and-tfbs | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/ucsc_conservation_and_tfbs/SKILL.md) |
| >- | unibind-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/unibind_database/SKILL.md) |
| >- | uniprot-database | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/uniprot_database/SKILL.md) |
| >- | uv | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/uv/SKILL.md) |
| implementation, commit splitting, chained PRs, or keeping tests and docs with code. | work-unit-commits | [SKILL.md](file:///C:/Users/USER/.gemini/config/skills/work-unit-commits/SKILL.md) |
| > | workflow-skill-creator | [SKILL.md](file:///C:/Users/USER/.gemini/config/plugins/science/skills/workflow_skill_creator/SKILL.md) |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### alphafold-database-fetch-and-analyze

**Do NOT use when:**
-   The user only has a protein name, gene name, or amino acid sequence (no
-   The user wants to search for structural homologs (use **Foldseek**).
-   The user wants to run AlphaFold predictions on a custom sequence.
-   The user needs experimental PDB structures (use **RCSB PDB**).
-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   Do not attempt to calculate domain boundaries or assess structural disorder
-   If this skill is used, ensure this is mentioned in the output.
**1. Fetch Structure Files**
**2. Analyze pLDDT Confidence**
**3. Analyze PAE / Domain Boundaries**
    -   Overall Global pLDDT and the breakdown of fraction confidence

### alphagenome-single-variant-analysis

-   **NEVER run `python3` or `python3 -c` directly.** The system Python does not
-   **Offline Only**: NEVER use external APIs (e.g., MyGene.info, Ensembl REST)
-   **API Key is required**: `ALPHAGENOME_API_KEY` must be set before running
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   **Report Format**: Always use the templates in `docs/report-templates.md`
-   **Column Names**: `tidy_scores` and metadata often use `gene_name` (not
-   **Large Genes**: Genes > 500kb (e.g., `USH2A`) break the `whole_gene` view.
-   **Sashimi Strand Error**: `plot_components.Sashimi` does NOT accept a
-   **KeyError: 'ontology_curie'**: Not all tracks have `ontology_curie`. Check
-   **Python Path**: If `exec: "python": executable file not found` occurs,
-   **NotImplementedError (pandas)**: "iLocation based boolean indexing on an
-   **GTF Feather Case Sensitivity**: The AlphaGenome GTF Feather file uses

### branch-pr

1. **Every PR MUST link an approved issue** — no exceptions
2. **Every PR MUST have exactly one `type:*` label**
3. **Automated checks must pass** before merge is possible
4. **Blank PRs without issue linkage will be blocked** by GitHub Actions
---

### chained-pr

- Split PRs over **400 changed lines** unless a maintainer explicitly accepts `size:exception`.
- Keep each PR reviewable in about **≤60 minutes**.
- Use one deliverable work unit per PR; keep tests/docs with the unit they verify.
- State start, end, prior dependencies, follow-up work, and out-of-scope items in every chained PR.
- Every child PR must include a dependency diagram marking the current PR with `📍`.
- In Feature Branch Chain, create a draft/no-merge tracker PR; child PR #1 targets the tracker branch, later children target the immediate parent branch.
- Treat polluted diffs as base bugs: retarget or rebase until only the current work unit appears.
- Do not mix chain strategies after the user chooses one.

### chembl-database

-   [!IMPORTANT] **Use the Utility Scripts**: You MUST ALWAYS use the provided
-   **Output to File (Required)**: The `--output` flag is **required** for every
-   **Notification**: If this skill is used, ensure this is mentioned in the
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
**Fetch by ChEMBL ID:** `bash uv run scripts/chembl_api.py molecule --id
**Search by name:** `bash uv run scripts/chembl_api.py molecule --search
**Batch fetch:** `bash uv run scripts/chembl_api.py molecule --ids
**Filter by properties:** `bash uv run scripts/chembl_api.py molecule --filter
**Filter by range:** `bash uv run scripts/chembl_api.py molecule --filter
**Download SDF structure file:** `bash uv run scripts/chembl_api.py molecule
--id CHEMBL25 --dl_format sdf --output /tmp/aspirin.sdf`

### clinical-trials-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Always use `--fields`** — trial JSON records can be very large; restrict
-   **Use `--count-total` first** — check result volume before fetching all
-   **Paginate large result sets** — use `--limit` with `--page-token` to
-   **Trust Search Filters**: Do not manually re-filter results unless
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   `totalCount` — Total studies matching query (integer)
-   `studies[]` — Array of study objects
-   `nextPageToken` — cursor string for pagination
-   **Identification**
    -   `protocolSection.identificationModule.nctId` (`NCTId`) — Unique trial ID
    -   `protocolSection.identificationModule.briefTitle` (`BriefTitle`) — Short

### clinvar-database

**Use when you need to:**
-   Find the current clinical significance and star rating (review status) for a
-   Fetch clinician notes, assertion criteria, or rationales for previous
-   Retrieve the preferred condition name and associated HPO terms for a
-   Find a list of variant controls (e.g., "Find all Pathogenic variants in the
-   Check for conflicting interpretations for a given variant and identify the
**Do NOT use when you need to:**
-   Find specific allele frequencies in global populations (use **gnomAD**).
-   Describe the normal biological role of a protein and typical inheritance
-   Predict mechanistic effects of novel mutations, like frameshifts or exon
-   Find recommended surveillance schedules for patients with a pathogenic
-   Generate or view 3D structural models of affected proteins (use **PDB /

### cognitive-doc-design

| Pattern | Rule |
|---------|------|
| Lead with the answer | Put the decision, action, or outcome first. Context comes after. |
| Progressive disclosure | Start with the happy path, then add details, edge cases, and references. |
| Chunking | Group related information into small sections. Keep flat lists short. |
| Signposting | Use headings, labels, callouts, and summaries so readers know where they are. |
| Recognition over recall | Prefer tables, checklists, examples, and templates over prose that must be remembered. |
| Review empathy | Design docs so reviewers can verify intent without reconstructing the whole story. |

### comment-writer

| Rule | Requirement |
|------|-------------|
| Be useful fast | Start with the actionable point. Do not recap the whole PR before feedback. |
| Be warm and direct | Sound like a thoughtful teammate, not a corporate bot. |
| Keep it short | Prefer 1 to 3 short paragraphs or a tight bullet list. |
| Explain why | Give the technical reason when asking for a change. |
| Avoid pile-ons | Comment on the highest-value issue, not every tiny preference. |
| Match thread language | Write in the thread/user language. If writing in Spanish, use Rioplatense Spanish/voseo: `podés`, `tenés`, `fijate`, `dale`. |
| No em dashes | Use commas, periods, or parentheses instead. |

### dbsnp-database

-   **Use the Wrapper**: ALWAYS execute the provided wrapper script
-   **Command Choice**: Do NOT use `search-region` to find the rsID of a
-   **Output Size**: Avoid using `--full` on `get-variant` unless specifically
-   **Shell Safety**: Always wrap HGVS strings in single quotes to prevent shell
-   **Notification**: If this skill is used, ensure this is mentioned in the
**Use this skill when you need to:**
-   Map a genomic variant to its canonical rsID (from VCF coordinates or HGVS
-   Retrieve summary data for an rsID: variant type, gene associations, clinical
-   Convert an rsID back to genomic coordinates on a specific assembly.
-   Find all known variants within a chromosomal region.
**Do NOT use when you need to:**
-   Obtain clinical pathogenicity classifications with submitter rationales (use

### embl-ebi-ols

-   [!IMPORTANT] **Use the Utility Scripts**: You MUST ALWAYS use the provided
-   **Rate Limiting & Resilience**: You MUST respect EBI's Terms of Use with a
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   **Definition** of a disease, phenotype, or term → `get_term.py --obo_id <ID>
    --summary`
-   **Subtypes** or **children** of a term → `get_term.py --obo_id <ID>
    --relations children`
-   **Parent** of a term → `get_term.py --obo_id <ID> --relations parents`
-   **Ancestors** / disease **categories** / **classified under** → `get_term.py
    --obo_id <ID> --relations ancestors`
-   **Root terms** of an ontology → `get_term.py --ontology <id> --roots`
-   **Hierarchical** parents (is-a + part-of) → `get_term.py --obo_id <ID>

### encode-ccres-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Parsing Output**: Do NOT use `cat` to read the entire JSON output file
-   **Notification**: If this skill is used, ensure this is mentioned in the
  --start 5205263 --end 5207263 \
  --output /tmp/search.json
  --output /tmp/details.json
**Example: Finding high-confidence cell types**
**Do NOT use `cat` to read the entire JSON output file into context, as it**
**can be extremely large.** Instead, you MUST use `jq` to efficiently parse and
-   `search`: Search cCREs by coordinates, accessions, or epigenetic signals.
        --chromosome chr11 --start 5205263 --end 5207263 \
        --output /tmp/search.json

### ensembl-database

**Key Concepts:**
-   **ENSG (Gene):** Stable identifier for a human gene. Other species will have
-   **ENST (Transcript):** Stable identifier for a transcript (splicing
-   **ENSP (Protein):** Stable identifier for a translated protein.
-   **MANE Select:** The consensus primary transcript agreed upon by Ensembl and
-   **Canonical:** Ensembl's representative transcript (used if MANE is not
-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Default Species:** If the species is absent or ambiguous in the prompt,
-   **Primary Transcripts:** When listing transcripts for a gene, only return
-   **Assembly Handling:** The default assembly is GRCh38. For GRCh37 requests,
-   **Output Location:** The script writes full JSON/FASTA output to temporary
-   **Notification**: If this skill is used, ensure this is mentioned in the

### foldseek-structural-search

-   **File Requirement**: This tool absolutely cannot search by sequence, name,
-   **Strict Validation**: Never bypass the input validation or the database
-   **Do Not Parse the JSON**: Rely entirely on the generated `.md` file for
-   **No Raw Parsing**: Do not attempt to parse or read the raw 3D coordinates
-   **Notification**: If this skill is used, ensure this is mentioned in the
    *   If the user provided a protein name, an amino acid sequence, or an
        **halt immediately**. Do not run the script.
    *   Inform the user that Foldseek requires a physical 3D coordinate file,
    *   **Allowed List:** `afdb50`, `afdb-swissprot`, `pdb100`, `BFVD`,
    *   If the user requests a database NOT on this list, **halt immediately**.
    *   **Default (No databases specified):** `uv run scripts/search.py
    *   **Custom (Valid databases specified):** `uv run scripts/search.py

### gnomad-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Notification**: If this skill is used, ensure this is mentioned in the
**1. Variant Frequency.** Retrieves global and ancestry-specific allele
**2. Gene Constraint.** Retrieves constraint metrics for a gene. The response
**3. Region/Gene Variant Search.** Finds all variants in a region or gene.

### go-testing

- Prefer table-driven tests for multiple cases; use `t.Run(tt.name, ...)`.
- Test behavior and state transitions, not implementation trivia.
- Use `t.TempDir()` for filesystem tests; never rely on a real home directory.
- Keep integration tests skippable with `testing.Short()` when they run external commands or slow flows.
- For Bubbletea, test `Model.Update()` directly for state changes; use `teatest` only for interactive flows.
- Golden files must be deterministic; update only through the repo's `-update` path and rerun tests without `-update`.
- Use small mocks/interfaces around system or command execution boundaries.

### gtex-database

**Use this skill when you need to:**
-   Map a gene symbol to its Versioned GENCODE ID.
-   Retrieve the baseline median expression level (in TPM) of a gene across
-   Find the top tissues where a particular gene is most highly expressed.
-   Fetch significant single-tissue eQTLs for a variant or within a chromosomal
-   Get all significant eQTLs associated with a specific gene.
-   Contextualise a variant within GWAS loci using eQTL data.
**Do NOT use when you need to:**
-   Query for protein-level expression or post-translational modifications
-   Query gene expression in diseased tissues (e.g., tumor samples, cirrhosis).
-   Query embryonic or fetal gene expression. GTEx donors are adults only.
**CRITICAL**: You MUST respect GTEx Portal API Terms of Use.

### human-protein-atlas-database

**Use this skill when you need to:**
-   Map a gene symbol to its Ensembl ID for HPA queries.
-   Retrieve the semi-quantitative protein abundance in normal human tissues and
-   Find the specific organelles or subcellular structures where a protein has
-   Check the consistency/agreement between RNA-seq consensus and protein
-   Search for genes based on specific protein expression criteria (e.g.,
**Do NOT use when you need to:**
-   Query eQTLs, pQTLs, or any variant-level associations. HPA provides
-   Query gene expression in non-human species. HPA is strictly for human
-   Retrieve purely quantitative RNA expression without interest in the protein
**Pick the right command on the first try.** Match the user's input to the
-   Map a gene symbol to Ensembl ID: `resolve-ensembl-id`

### interpro-database

-   Identify what domains, families, and sites are found in a particular
-   Identify all proteins that belong to a protein family or contain a
-   Examine the species in which a particular protein family or domain is found.
-   Annotate genomes with protein family information and Gene Ontology (GO)
-   **Use the Wrapper**: ALWAYS execute the `scripts/interpro_client.py` helper
-   **For exploratory queries**: ALWAYS use the CLI with a strict `--limit`.
-   **Output to file**: Use the CLI with --output to output to a file rather
-   **For more complex pipelines** import the module natively into your Python
-   **Notification**: If this skill is used, ensure this is mentioned in the
    --output pfam_entries.jsonl`
    --linked_endpoint protein \ --linked_source_db uniprot \ --linked_accession
*   **`/entry`** (16 values): `interpro`, `pfam`, `cathgene3d`, `ssf`,

### issue-creation

1. **Blank issues are disabled** — MUST use a template (bug report or feature request)
2. **Every issue gets `status:needs-review` automatically** on creation
3. **A maintainer MUST add `status:approved`** before any PR can be opened
4. **Questions go to [Discussions](https://github.com/Gentleman-Programming/agent-teams-lite/discussions)**, not issues
---

### jaspar-database

**CRITICAL**: You MUST respect the JASPAR API Terms of Use by adhering to the
-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Maximum API Window Size**: The genomic window for a single API query MUST
-   **Valid Matrix IDs**: `get_tf_motif`, `get_tf_metadata`, and `get_tf_pwm`
-   **Taxonomy Required**: Resolving IDs requires a `tax_id` to ensure targeted
-   **Notification**: If this skill is used, ensure this is mentioned in the
*   **DON'T** pass gene symbols (e.g., `JUN`) to `get_tf_motif`. You must pass
*   **DON'T** forget the `--tax-id` when resolving a TF name.
*   **DON'T** use this skill for determining tissue-specific epigenetic
*   **DON'T** use this skill to model how a specific protein mutation affects

### judgment-day

- Resolve project skills before launching agents: read skill registry, match compact rules by target files/task, and inject the same `Project Standards` block into both judge prompts and fix prompts.
- Launch **two blind judges in parallel** with identical target and criteria; never review the code yourself.
- Wait for both judges before synthesis; never accept a partial verdict.
- Classify warnings as `WARNING (real)` only if normal intended use can trigger them; otherwise downgrade to INFO as `WARNING (theoretical)`.
- Ask before fixing Round 1 confirmed issues.
- After any fix agent runs, immediately re-launch both judges in parallel before commit/push/done/session summary.
- Terminal states are only `JUDGMENT: APPROVED` or `JUDGMENT: ESCALATED`.
- After 2 fix iterations with remaining issues, ask the user whether to continue.

### literature-search-arxiv

-   **Terms of Use**: You MUST respect arXiv's Terms of Use.
    -   Maximum 1 request every 3 seconds.
    -   The provided utility scripts handle rate limiting automatically. Always
-   If this skill is used, ensure this is mentioned in the output AND list the
**1. Search and Extract Metadata**
  --max_results 5 2>/dev/null > /tmp/arxiv_search_results.json
*Returned Metadata:* JSON results include `id`, `title`, `summary`, `published`,
*Options:*
-   `--query`: Search string. See
-   `--id_list`: Comma-separated list of arXiv IDs to fetch directly (e.g.,
-   `--start`: Pagination offset (default 0).
-   `--max_results`: Number of results to return (default 10).

### literature-search-biorxiv

**This skill browses a date-based preprint archive. It is NOT a keyword search
-   **A DOI** (e.g., from a citation): Use `search_by_doi.py`. Fast and
-   **Approximate date + category**: Use `search_by_dates.py` with a 1–4 week
-   **Only a topic or keywords, no date**: **Do NOT use this skill for
-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Local Filtering (CRITICAL WARNING)**: Unlike arXiv, the bioRxiv API **does
-   **Abstracts Excluded By Default**: To save context space in the resulting
-   **Output Redirection**: Search commands output JSON arrays to standard
-   **List Sources** If this skill is used, ensure this is mentioned in the
**Pagination:** The bioRxiv API returns results in pages of up to 100 papers.
  --start_date 2024-01-01 --end_date 2024-01-14 \
  --category neuroscience > results.json

### literature-search-europepmc

-   **Open Access Only**: This skill exclusively searches open-access content.
-   **NEVER run python3 or python3 -c directly**: the system Python does not
-   **Use the Wrapper**: ALWAYS use the provided script rather than calling the
-   **Output Files**: All subcommands require `--output` to write results to a
-   **List Sources.** If this skill is used, ensure this is mentioned in the
  --sort "CITED desc" --max_results 20 --output results.json
**Arguments:**
-   `query` (str, required) — search query using Europe PMC syntax
-   `--output` (str, required) — output JSON file path
-   `--max_results` (int, default 10) — maximum results per page (max 1000)
-   `--result_type` (str, default `core`) — `core` (full metadata) or `lite`
-   `--cursor` (str, default `*`) — cursor mark for pagination; pass the

### literature-search-openalex

-   **With key:** ~10 req/s, $1/day free budget.
-   **Without key:** Very limited, $0.01/day budget.
---------------------- | -------
**resolve** `<entity> <query>` — Name → ID candidates. Returns `id`,
**get** `<entity> <id>` — Full metadata for one entity. Accepts short ID
**filter** `<entity>` — Search/filter entities. Key flags are:
-   `--search <query>`: Full-text search (10× cost of `--filter`)
-   `--filter <expr>`: Filter expressions. Use `,` for AND and `|` for OR.
-   `--sort <field:dir>`: Sort results (e.g., `cited_by_count:desc`)
-   `--select <fields>`: Limit the fields returned in the output.
-   `--group-by <field>`: Aggregate results by a specific field.
-   `--per-page <N>`: Number of results per page (default 25, max 100).

### ncbi-sequence-fetch

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **API Key Support**: If the user provides an `NCBI_API_KEY` in their
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   `fetch-protein` — Direct protein accession lookup (GenPept, RefSeq)
-   `fetch-nucleotide` — Direct nucleotide accession lookup
-   `cds-translate` — Fetch CDS and translate to protein (3 methods)
-   `search` — Free-text search of any NCBI database
-   `elink` — Follow cross-database links (PubMed→Protein, etc.)
-   `gene-protein` — Search protein by gene name + organism
-   `locus-protein` — Search protein by locus tag + organism
-   `pubmed-proteins` — Find proteins linked to a PubMed article
-   `patent-search` — Extract protein sequences from patents

### openfda-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Rate Limiting**: Respect openFDA rate limits. Without API key: 240
-   **Always Use `--output`**: All subcommands require `--output <file>` to
-   **Notification**: If this skill is used, ensure this is mentioned in the
**Single script for all operations:**
  --category drug --endpoint event \
  --search "patient.drug.medicinalproduct:aspirin" \
  --limit 5 --output /tmp/fda_results.json
*Options:*
-   `--output`: Output file for full JSON results (required).
-   `--category`: API category — `drug`, `device`, `food`, `tobacco`, `other`,
-   `--endpoint`: Endpoint within the category (e.g., `event`, `label`, `510k`).

### opentargets-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Output Flag**: The `--output` flag is always required as output can be
-   **Notification**: If this skill is used, ensure this is mentioned in the
**Usage:**
**Common Options:**
-   `--output PATH`: **Required**. Path to write the JSON output file.
-   `--limit N`: Limit the number of items returned in arrays (default is 50).
-   `--page-size N`: Set the API pagination size (default is 200). Increase if
**Available Commands:**
-   **`get-gwas-studies`** *`efo_id`*: Fetches all GWAS studies associated with
-   **`get-study-credible-sets`** *`study_id`*: Fetches all credible sets for a
-   **`get-qtl-credible-sets`** *`variant_id`*: Retrieves QTL credible sets for

### pdb-database

-   **Always prefer to use the provided scripts**. Only as a last resort use
-   **Always redirect output to a file**. Parse output with e.g. `jq`, `grep`,
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   **Explain your queries** On completing a task that used PDB JSON/GraphQL
    --output schema_structure.txt` For chemical attributes: `uv run
    --output results.json` Pass the `--count_only` flag to get just the number
-   **Entity**: A unique molecule found in a structure.
-   **Instance / Chain**: A particular copy of an entity. E.g. if a structure
-   **Assembly**: A biologically relevant collection of instances / chains. This
-   **Label vs Auth**: Polymer instances get letter labels ("A", "B", "AA") and
-   **Chemical component**: A small molecule / monomer, with an ID matching
-   **Primary citation**: The main publication about a structure. Prefer

### protein-sequence-msa

-   **Use the Wrapper**: ALWAYS execute the alignment using
-   **Notification**: If this skill is used, ensure this is mentioned in the
*   **Always state the method:** Every report must clearly state that the
-   **No Hallucinations**: Do NOT invent alignments or conservation metrics.
    *   **Identity Metric Options:** The choice of denominator determines how
        *   **Pairwise - Sequence Coverage:** `(Identical Residue Matches) /
        *   **Pairwise - Global Identity:** `(Identical Residue Matches) /
        *   **Pairwise - Overlap Identity:** `(Identical Residue Matches) /
        *   **Multisequence - Conservation Index:** `(Fully Conserved Columns) /
    *   **Feature Mapping:** Leverage known biological data from specific
        *   **Knowledge Gathering:** Identify relevant known sites or regions
        *   **Coordinate Projection:** Map these features onto the corresponding

### protein-sequence-similarity-search

-   **Strict Validation**: For BLAST, only use database codes listed in the
-   **No Hallucinations**: If a script throws an error or returns no hits,
-   **Do Not Parse Output Files**: Do not parse the JSON, a3m, or any other raw
-   **Always State the Method**: Every report must clearly state whether the
-   **Notification**: If this skill is used, ensure this is mentioned in the
    *   **Default:**
    *   **With mgnify:**
    *   Consult the **Available BLAST Databases** table below.
    *   If the user specifies a taxonomic group (e.g., "Find homologues in
    *   If the user explicitly requests curated hits, use `uniprotkb_swissprot`.
    *   If no specific database is requested, do not specify `--databases`.
    *   **Validation:** Ensure the database code exactly matches an entry in the

### pubchem-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   Read the generated JSON output file, and process it with jq or code.
-   **Verify Facts**: ALWAYS verify information retrieved from memory with a
-   **Notification**: If this skill is used, ensure this is mentioned in the
**1. Compound Resolution (Name or InChI to Identifiers)** Convert chemical/trade
**2. Physical & Chemical Property Retrieval** Fetch computed properties (e.g.,
**3. Synonyms and Trade Names** Find alternative names and brand names.
**4. Safety and Hazard Information (GHS)** Retrieve Global Harmonized System
**5. Drug and Medication Information** Fetch FDA pharmacology data, mechanism of
**6. Custom Heading (PUG-View)** Retrieve any specific heading from the PUG-View
**7. Image Generation** Retrieve 2D chemical structure images. The script
**8. Structure-Based Searching (Similarity & Substructure)** Find molecules

### pubmed-database

-   **API Use**: Always use the provided wrapper `scripts/pubmed_api.py` which
-   **JSON Processing**: Use `jq` to filter and transform JSON output (or python
-   **Temporary Files**: To avoid polluting the working directory with JSON
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   `SKILL.md` - This file
-   `scripts/pubmed_api.py` - The skill CLI
-   `references/` - Directory with detailed function specifications
    -   `advanced-linking.md`
    -   `advanced-search.md`
    -   `bulk-workflows.md`
    -   `citation-matching.md`
    -   `cross-database-linking.md`

### pymol

**Do NOT use when:**
-   The user wants to run AlphaFold predictions.
-   The user wants docking or molecular dynamics simulations.
-   The user only has a sequence and no structure file — fetch the structure
-   **Output paths must be absolute or relative to the user's project root.**
-   **Software rendering only.** Use `cmd.png()` for output. Never use
-   **Always save a `.pse` session file** alongside any PNG output. This lets
-   **Always call `cmd.quit()`** at the end of every PyMOL script. Omitting it
-   **Init boilerplate is mandatory.** Every PyMOL script must begin with the
-   See [references/PYMOL_REFERENCE.md](references/PYMOL_REFERENCE.md) for
-   **Pre-Flight File Check**: Before writing the PyMOL script or running it,
-   **Verify Structure Load**: After loading a structure with `cmd.load()`,

### quickgo-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Pagination & Limits**: Restrict endpoints to a maximum of 100 results per
-   **Output Files**: Always use the `--output` flag to save responses to a file
-   **Evidence Codes**: Prioritize experimental evidence (`ECO:0000269`) over
-   **Taxon Filtering**: Use `--taxonId 9606` to restrict results to Human when
-   **Notification**: If this skill is used, ensure this is mentioned in the

### reactome-database

**Content Service** (`https://reactome.org/ContentService/`) providing pathway
-   Performing pathway enrichment (overrepresentation) analysis on gene/protein
-   Retrieving analysis results using a token from previous enrichment
-   Identifying which genes or proteins were not found in a pathway analysis
-   Analyzing gene expression data against pathway annotations
-   Mapping identifiers to Reactome entities across species
-   Retrieving reaction participants (inputs, outputs, catalysts, regulators)
-   Navigating pathway hierarchy and listing top-level pathways
-   Finding which complexes or sets contain a protein
-   Exporting pathway/reaction diagrams (PNG/SVG) with gene highlighting
-   Cross-referencing identifiers across databases (UniProt, Ensembl, etc.)
-   Searching the Reactome knowledgebase

### readme-master

- **Bad**: "A library for continual learning."
- **Good**: "MoRE-5: A Sovereign Resonance Architecture for Non-Stationary Environments."
- Use Mermaid diagrams for workflow visualization.
- Explicitly list the **Foundational Laws** or **Principles** (e.g., Law of Rigidity).
- Include tables with benchmarks.
- Use `generate_image` or existing artifacts to embed visual validation (Loss curves, Accuracy, t-SNE).
- Use GitHub Alerts (`> [!IMPORTANT]`) for critical notices.
- Use badges for status, license, and tech stack.
- Maintain a clean hierarchy (H1 -> H2 -> H3).

### science-skills-common

- (No specific hard rules documented; consult SKILL.md)

### scienceskillscommon

- (No specific hard rules documented; consult SKILL.md)

### skill-creator

- A pattern is used repeatedly and AI needs guidance
- Project-specific conventions differ from generic best practices
- Complex workflows need step-by-step instructions
- Decision trees help AI choose the right approach
- When working in this repo, first follow `docs/skill-style-guide.md` as the normative source before creating or updating skills.
- If that guide is unavailable, use the compact inline rules below.
- A skill is a runtime instruction contract for an LLM, not human documentation.
- Do not add a `Keywords` section; preserve essential trigger words in `description`.
- References must point to local files.
- Keep the skill body concise: target 180–450 tokens, recommended max 700, hard max 1000.

### string-database

*   **[Mapping Identifiers](references/mapping.md)** - Map common protein names
*   **[Interactions & Network](references/interactions.md)** - Find interacting
*   **[Enrichment & Functional Annotations](references/enrichment.md)** -
*   **[Values/Ranks Enrichment](references/valuesranks.md)** - Submit full

### ucsc-conservation-and-tfbs

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Large Output Handling**: Always pass --output to redirect output to a
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   **`vertebrate`** (default): UCSC 100-vertebrate Multiz alignment. phyloP:
-   **`mammal`**: Hiller Lab 470-way mammalian alignment. phyloP:
-   **`primate`**: UCSC 30-primate Multiz alignment. phyloP: `phyloP30way`,
-   **`vertebrate`** (default): UCSC 100-vertebrate Multiz alignment. phyloP:
-   **`vertebrate46`**: UCSC 46-vertebrate Multiz alignment (legacy). phyloP:
-   **`mammal`**: 46-way placental mammal subset. phyloP:
-   **`primate`**: 46-way primate subset. phyloP: `phyloP46wayPrimates`,
-   **ENCODE**: `encRegTfbsClustered` (TF Clusters)
-   **JASPAR**: `jaspar2026`, `jaspar2024` (Predicted TFBS)

### unibind-database

-   **Use the Wrapper**: ALWAYS execute the provided helper scripts to query the
-   **Output**: Query commands print JSON to stdout. Most responses are compact
-   **Large Results**: `list_cell_lines` and `list_tfs` produce large output.
-   **Saving to File**: Use `--output <path>` when you need to reference the
-   **Pagination**: Use `--page` and `--page-size` (max 1000) to chunk large
-   **Ordering**: Use `--order field_name` (prefix with `-` for descending) on
-   **Notification**: If this skill is used, ensure this is mentioned in the
*Replace `<SKILL DIR>` with the absolute path to this skill's directory.*
-   `--species` (e.g., "Homo sapiens")
-   `--tf-name` (e.g., "CTCF")
-   `--cell-line` (e.g., "mESC")
-   `--collection` (e.g., Permissive, Robust)

### uniprot-database

-   **Use the Wrapper**: Always use the provided Python scripts (e.g.,
-   **No Hallucinations**: Do NOT invent protein functions, metadata, or
-   **Notification**: If this skill is used, ensure this is mentioned in the
-   **Searching for Protein Function**: Querying functional annotations, GO
-   **Searching for Protein Sequence**: Searching for protein sequences by their
-   **Understanding Protein/Organism Relationships**: Leveraging the Taxonomy
-   **Large-Scale Metadata Retrieval**: Fetching annotations for thousands of
-   **Sequence Discovery**: Finding orthologs or non-model proteins via UniParc.
-   **ID Mapping**: Converting IDs between UniProt and 100+ external databases.
-   **Historical Data (UniSave)**: Retrieving previous versions of entries or
-   **`get`**: Retrieves metadata and sequence for a specific entry. Best for a
    **single, known accession**.

### uv

1.  Check if `uv` is already available: `uv --version` If this succeeds, `uv` is
2.  Check whether `uv` is installed at its default location but not on PATH:
3.  If uv is not installed do both these steps in order:
4.  Add `uv` to PATH and verify (run as a single command): `export

### work-unit-commits

| Rule | Requirement |
|------|-------------|
| Commit by work unit | A commit represents a deliverable behavior, fix, migration, or docs unit. |
| Do not commit by file type | Avoid `models`, then `services`, then `tests` if none works alone. |
| Keep tests with code | Tests belong in the same commit as the behavior they verify. |
| Keep docs with the user-visible change | Docs belong with the feature or workflow they explain. |
| Tell a story | A reviewer should understand why each commit exists from its diff and message. |
| Future PR-ready | Each commit should be a candidate chained PR when the change grows. |
| SDD workload guard | If SDD tasks forecast a >400-line change, group commits into chained PR slices before implementation. |

### workflow-skill-creator

    **needs code** and you should default to the CLI pattern. Only use a
    -   If code is needed: "Some of these steps involve [fetching data from an
    -   If no code is needed: "This workflow is entirely about following a set
-   [ ] What is the workflow's purpose and scope?
-   [ ] What are the inputs and outputs?
-   [ ] Which steps are strict vs. flexible?
-   [ ] Which existing skills should be referenced?
-   [ ] What new scripts (if any) are needed?
-   [ ] What rate limits apply?
-   [ ] How should errors be handled?
-   [ ] Does the workflow need any code? (If yes → CLI pattern; if no →
-   [ ] Where should the skill be installed? (local, global, or custom path)

## Project Conventions

| File | Path | Notes |
| --- | --- | --- |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
