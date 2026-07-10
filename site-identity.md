# Site Identity Record

`siteId`: **implementai-today** · domain **implementai.today** · UK · British English

## Brand

Displayed as the bare domain, lowercase, in monospace: `implementai.today`. The URL is the
wordmark. No capitalised "ImplementAI Today", no logo glyph, no exclamation.

Title pattern: `{search phrase} | implementai.today`

**Tagline:** The research vendors quote but never show.

The domain read aloud is a hype imperative, which is a liability with the practitioner audience.
We defuse it by refusing the imperative entirely: the lowercase monospace wordmark strips the sell,
and the tagline names vendors as the adversary. A vendor's first screen sells a benefit. Ours opens
with a failure rate and a visible citation.

## Entity definition

> implementai.today is an independent UK publication that reads the primary research on enterprise
> AI adoption and failure, quotes its named sources with visible methodology and sample sizes, and
> builds free interactive diagnostics, without selling consultancy, AI tools, or proprietary data of
> its own.

## USP

> implementai.today is the one site on AI implementation that pairs primary-sourced figures with
> their methodology shown, attaches a named human author, and hands you a free interactive
> diagnostic instead of a sales call.

| Specificity test | Result |
|---|---|
| Traces to a documented Phase 0 gap | Yes. The "triple gap": no ranking page combines primary-sourced figures with visible methodology, a live interactive diagnostic, and a named author. |
| Specific and falsifiable | Falsified by producing one top-5 page that has all three. Phase 0 found none scoring above 11/14. |
| Not claimed by a top-5 competitor | AI4SP has the tool, no named human, ROI only. Helium42 has the figures, no methodology, no tool. Microsoft ranks on brand with none of the three. |
| Not used by another portfolio site | agenticai.associates = consultancy lead-gen. aifor.tech = tools directory. aiagentic.news = news aggregation. |
| One sentence a stranger could repeat | Yes. |
| Banned words | Zero. |

## Positioning

| Competitor | What they do | What they lack | Our counter-position |
|---|---|---|---|
| AI4SP / roicalc.ai (11/14) | A genuinely working ROI calculator | ROI only, no named human, no failure research | We diagnose failure risk, not favourable ROI, and a named person signs it |
| Helium42 (10/14) | Best aggregated cost figures on the web | Methodology never shown, sources blended into one number, no tool | We split every figure back to one named source and show sample and method beside it |
| Informatica (vendor archetype, 4/14) | Recycles one scary stat to sell its platform | Independence | We sell nothing, so the stat can point wherever the evidence points |

## ICP

**Primary (monetised).** The internal AI champion or SME owner: operations lead, head of digital, IT
manager, founder or MD at a 20 to 500-person firm. Trigger: a board or boss says "figure out our AI
plan" or "what will this cost". They fear authorising a project that becomes one of the failures and
looking naive to the people who asked. Revenue arrives when they cross from planning to building.

**Secondary (credibility only, never sold to).** The sceptical practitioner who has lived pilot hell.
They provide the "this one is actually good" signal and the domain-level credibility that lifts the
pages the primary segment lands on. If the body copy does not earn this reader, the strategy fails.

## Author and E-E-A-T

**Sunny Patel.** UK SEO consultant and indie developer who builds and ships AI-assisted software.

**May claim:** reads and cites primary research; builds and ships software; publishes his own
methodology; is a working SEO consultant and developer.

**May never claim:** AI-implementation consultant; delivered enterprise AI transformations; ran
client AI projects; owns survey or benchmark data. Any bio phrasing implying delivery experience is
forbidden.

Standing disclosure, on /about and every article footer:
> We have run no surveys and delivered no AI projects. Our authority is that we read the primary
> research and show our working.

`sameAs`: https://sunnypatel.co.uk · [MANUAL] LinkedIn · [MANUAL] GitHub (load-bearing proof of
"builds software") · [MANUAL] real headshot, not AI-generated, since that would contradict the thesis.

## Voice

1. **Source-first.** "RAND put the failure rate at over 80%." Not "studies show most AI projects fail."
2. **Numbers arrive with scaffolding.** Sample, method, year, always.
3. **Sceptical, not cynical.** "This is real, and here is where it breaks." Not "AI is a bubble."
4. **Search vocabulary in the frame, practitioner vocabulary in the body.** H1: "AI implementation cost". Body: "the token burn nobody budgets for".
5. **Plain British English, zero consultancy register.**
6. **Admit the limits out loud.** "UK adoption is contested: DSIT 16%, ONS 25%, BCC 35%."
7. **Concrete money over abstraction.** Named failures with real figures.
8. **No throat-clearing.** Open on the claim.

Never used: comprehensive, ultimate, one-stop, best-in-class, all-in-one, trusted, leading, leverage,
synergy, journey, unlock, empower, seamless, robust, cutting-edge, game-changer, revolutionise,
holistic, turnkey, next-generation, thought leader, supercharge, effortless. **Never an em dash or en
dash.**

## Visual direction

A research instrument: a lab notebook crossed with an oscilloscope readout. Warm paper, ink, one
burnt-sienna needle. Implemented in `src/styles/global.css`.

**Light:** bg `#F3F0E9`, surface `#FAF8F2`, surface-2 `#EDE8DC`, ink `#17150F`, muted `#6E685A`,
hairline `#D8D2C4`, accent `#A34E16`, success `#2F5D3A`, warn `#8A6D00`, danger `#8E2A1F`.
**Dark:** bg `#14130F`, surface `#1E1C16`, surface-2 `#26231A`, ink `#ECE7D9`, muted `#9A9280`,
hairline `#33302A`, accent `#E08A3C`, success `#6FB07E`, warn `#D6B24A`, danger `#D9705F`.

Type: serif headings (Iowan Old Style stack), humanist sans body (system stack), monospace for all
data. No web fonts fetched, so a strict CSP cannot break the page.

**The signature rule:** every number on the site renders in tabular monospace, never in the body
face. A `95%` or an `800k` or an `n=2,000` reads as instrument output, not prose. Wrap in `.num`.

**Layout signature: the evidence rail.** Articles are a 68ch reading column plus a persistent 19rem
right margin. Each statistic's citation chip pins in that margin beside the claim, like the sidenotes
of an annotated paper. On mobile the rail collapses and chips drop in beneath their sentence. A
competitor cannot copy this by swapping colours; they would have to attach a real source to every
number, which is the moat.

**The citation chip** (`src/components/CitationChip.astro`) is the product made visible. Anatomy in
fixed order: status dot (green = primary read, amber = contested or predicted, oxblood = primary
403s and figure is quoted via a named secondary), ORG, YEAR, rule, METRIC as the source words it,
`n=` sample or the literal words *not stated in accessible sources*, method, access note, source
link, last-checked date.

**Deliberately not doing:** no gradient mesh, aurora blur, or floating 3D blob (the AI-startup
cliche). No glassmorphism, no pill-everything, no emoji in headings (generic Tailwind SaaS).

## Hero

- Eyebrow: Primary sources. Methodology shown.
- H1: Why AI projects fail, and what AI implementation really costs
- Subhead: Everyone blames the technology. RAND found most AI failures are not technical, they are organisational. We show the research, its methodology, and a diagnostic to test your readiness.
- CTA: Run the readiness diagnostic
- Statistic shown immediately, with its citation chip attached.
