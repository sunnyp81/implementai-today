# Build manifest

## ROOT

**AI implementation failure, and how to de-risk it, evidenced only to primary sources.**

Rejected as ROOT: the bare head term `ai implementation consultant` (roughly half job-seeker intent,
and it collides with the no-lead-gen constraint); `ai implementation checklist` (softest term, but a
tactic not the USP, so it becomes a NODE); an ROI calculator (a tool-versus-tool fight already won by
AI4SP, whose 180k use-case dataset we cannot match, so leading with it plays our weakest hand).

Chosen because people search the research **by source name**: "why ai projects fail rand", "...mit",
"...gartner". RAND, Gartner, HBS Online and PMI all serve HTTP 403 to normal readers. The primary
research is real, quotable and unreachable. Owning the accessible, attributed, reconciled version of
it is defensible, and it is the only ROOT that carries the USP into every child page.

## Tree

```
ROOT  AI implementation failure and de-risking (evidence-first)
├─ NODE 1  Failure research (source-named, reconciled)
│   ├─ /ai-project-failure-rate        the number      ★ citation flagship
│   ├─ /why-ai-projects-fail           the causes      [pillar]
│   ├─ /why-ai-projects-fail/rand      source-named deep
│   └─ /why-ai-projects-fail/mit-nanda source-named deep
├─ NODE 2  The diagnostic
│   └─ /ai-project-risk-diagnostic     free, ungated, explicitly not validated
├─ NODE 3  Planning and remediation (softest terms + monetisation home)
│   └─ /ai-implementation-checklist    [pillar]
├─ NODE 4  Cost and commercial
│   ├─ /ai-implementation-cost
│   └─ /build-vs-buy-ai
└─ NODE 5  Adoption statistics (citation bait)
    └─ /ai-adoption-statistics
```

## Wave 1 (1 tool + 9 pages)

| URL | Intent | Template | Schema | Target queries |
|---|---|---|---|---|
| `/` | Brand + problem framing | T1 | WebSite, Organization, WebPage, Breadcrumb | ai implementation failure |
| `/ai-project-risk-diagnostic` | Interactive de-risking | T2 | WebApplication, Breadcrumb | ai readiness assessment tool; will my ai project fail |
| `/ai-project-failure-rate` | The number, reconciled | T3 | Article, Dataset, FAQPage, Breadcrumb | what percentage of ai projects fail; ai project failure rate |
| `/why-ai-projects-fail` | The causes (pillar) | T4 | Article, FAQPage, Breadcrumb | why do ai projects fail |
| `/why-ai-projects-fail/rand` | RAND source-named | T3 | Article, Dataset, FAQPage, Breadcrumb | why ai projects fail rand |
| `/why-ai-projects-fail/mit-nanda` | MIT source-named | T3 | Article, Dataset, FAQPage, Breadcrumb | why ai projects fail mit; mit 95% ai |
| `/ai-implementation-checklist` | Planning, softest term | T5 | Article, HowTo, FAQPage, Breadcrumb | ai implementation checklist; ai implementation plan |
| `/ai-implementation-cost` | Cost, honest | T6 | Article, FAQPage, Breadcrumb | ai implementation cost |
| `/ai-adoption-statistics` | Adoption stats | T3 | Article, Dataset, FAQPage, Breadcrumb | ai adoption statistics; uk ai adoption |
| `/build-vs-buy-ai` | Build vs buy | T6 | Article, FAQPage, Breadcrumb | build vs buy ai; build or buy ai agents |

Plus `/about` (method and disclosure page, T1).

## Waves 2 and 3

Wave 2: `/why-ai-projects-fail/gartner`, `/why-ai-projects-fail/mckinsey`,
`/why-agentic-ai-projects-fail`, `/why-gen-ai-projects-fail`, `/ai-readiness-assessment`,
`/ai-implementation-roadmap`, `/ai-roi` (explainer, not a tool), `/ai-consultant-cost` (qualified
tail only), `/ai-adoption-statistics/uk`, `/ai-for-small-business`.

Wave 3: `/why-ai-projects-fail/bcg`, `/ibm`, `/deloitte`, `/ai-project-success-rate`,
`/ai-pilot-to-production`, `/ai-adoption-statistics/us`, `/ai-for-accounting-firms`,
`/ai-for-law-firms`, `/ai-for-manufacturing`.

**Held out deliberately.** `/why-ai-projects-fail/hbr` is not built unless a verified HBR primary
source is obtained: demand exists, the verified corpus does not.
`/generative-ai-roi-calculator` stays on watch, never scheduled, because that tool fight is lost.

## Slug rules applied

No year in slugs. No TLD or domain words (`today`, `implementai`, `uk`). Lowercase kebab-case.
Hub-and-spoke child paths under their pillar. `build-vs-buy-ai` keeps its trailing `ai` because that
is a topic word, not a TLD word. The head term `ai-implementation-consultant` never becomes a URL.

## Cannibalisation control

`/ai-project-failure-rate` (**the number**) versus `/why-ai-projects-fail` (**the causes**) is the
highest risk on the site. Enforced split:

- The reconciliation table of conflicting figures lives on `/ai-project-failure-rate` **only**.
- `/why-ai-projects-fail` argues causes and links to the table rather than restating it.
- Source pages carry one study each, in depth. The pillar only summarises.
- `/ai-implementation-failure-rate` is a near-synonym and is **never given its own URL**. It is
  absorbed as an H2 and an FAQ entry on `/ai-project-failure-rate`.
- Later, `/ai-consultant-cost` (rates) must stay distinct from `/ai-implementation-cost` (project cost).

## Internal link plan

Every SEED links up to its NODE and across to exactly one sibling. No orphans.

| From | Up | Sibling |
|---|---|---|
| `/ai-project-risk-diagnostic` | `/` | `/ai-project-failure-rate` |
| `/why-ai-projects-fail` | `/` | `/ai-implementation-checklist` |
| `/ai-project-failure-rate` | `/why-ai-projects-fail` | `/ai-adoption-statistics` |
| `/why-ai-projects-fail/rand` | `/why-ai-projects-fail` | `/why-ai-projects-fail/mit-nanda` |
| `/why-ai-projects-fail/mit-nanda` | `/why-ai-projects-fail` | `/why-ai-projects-fail/rand` |
| `/ai-adoption-statistics` | `/why-ai-projects-fail` | `/ai-project-failure-rate` |
| `/ai-implementation-checklist` | `/` | `/ai-implementation-cost` |
| `/ai-implementation-cost` | `/` | `/build-vs-buy-ai` |
| `/build-vs-buy-ai` | `/ai-implementation-cost` | `/ai-implementation-checklist` |

The diagnostic is reachable from every page via the persistent header CTA, plus a contextual in-body
link inside genuine remediation copy, plus the homepage hero.

## Schema

Identity nodes declared once on `/` with stable `@id`s (`#organization`, `#sunny-patel`, `#website`)
and referenced by `@id` everywhere else.

- **T2 diagnostic:** `WebApplication`, `isAccessibleForFree: true`, free `Offer`, description stating
  plainly it is not a validated statistical model. **No `aggregateRating`**, ever, since we have none.
- **T3 statistics pages:** `Article` + `Dataset` + `FAQPage`. `Dataset` carries `isBasedOn` (one
  CreativeWork per study), `citation` (primary URLs), `variableMeasured` (a PropertyValue per figure),
  `measurementTechnique: "compilation of published survey and research findings"`, and a
  `distribution` offering the comparison table as machine-readable data. This is the single biggest
  lever for AI-citation eligibility: it hands a model a clean, attributed table it cannot assemble
  from the 403-blocked primaries.
- **T5 checklist:** `Article` + `HowTo` + `FAQPage`, each step annotated with the study behind it.
- **T6 cost pages:** `Article` + `FAQPage`. Vendor cost ranges appear only as prose explicitly
  labelled unsourced. They never become a `variableMeasured` or a `citation`, because they are not
  research.

`FAQPage` is treated as an AI-extraction aid, not a rich-result play (Google restricts FAQ rich
results to government and health domains).

## The page most likely to earn an AI citation

`/ai-project-failure-rate`. It answers the highest-value extractable question in the niche, and the
honest answer requires reconciling conflicting figures that **no single primary source provides**,
because each study reports only its own number. The primaries are 403-blocked, so models cannot
retrieve them; they can retrieve our accessible, dated, sample-sized restatement, and the `Dataset`
schema hands over machine-readable provenance. Runner-up: `/ai-adoption-statistics`.

## Architectural risks

- **Failure-cluster cannibalisation.** Four wave-1 pages legitimately contain the same headline
  figures. Mitigated by the strict intent split above.
- **Corpus exhaustion.** The whole site cites roughly ten studies. Restating them verbatim everywhere
  risks a thin-content signal. Centralise numbers on the two Dataset pages, link elsewhere.
- **Scaled-content signal on source-named pages.** Wave 2 and 3 per-source expansion is where doorway
  risk spikes. Build a source page only where the verified detail is substantial. Never auto-generate.
- **Fabrication temptation.** Demand exists for an HBR page and for a build-versus-buy success ratio.
  Neither is in the verified corpus. Neither gets written.
- **Diagnostic overclaim.** Presenting a non-validated tool as predictive is a credibility and a soft
  legal risk. Explicit in-copy disclaimer, honest schema description, no fabricated accuracy metrics.
- **Freshness decay.** Stale figures erode the entire proposition. Every chip carries a last-checked
  date and `dateModified` discipline applies.
- **Verification burden.** The USP demands sample, method, date and link on every figure. One wrong
  number breaks the trust model. This is the standing operational risk and it is why wave 1 is lean.
