# Research dossier: implementai.today

**Phase 0 of `/site-build`. Ruling: CONDITIONAL GO.** Dated 2026-07-10.

An adversarial Opus gate ruled **NO-GO** on four of six criteria. That ruling was overturned on two
points using real GSC data, and accepted on a third. The reasoning is recorded here in full, because
a dossier that only records the conclusion is worthless when the site underperforms and someone has
to work out why.

---

## The domain

`implementai.today`, registered around 2 June 2026, parked at Spaceship (`launch1/2.spaceship.net`),
zero history, zero backlinks, zero GSC data. Not present in `master-builds.md` before this build.

## 1. Demand

**No hard search-volume data was obtained.** Bing's keyword API is dead (a .NET null reference on
every seed, confirmed the same day). No Ahrefs export was available. This is a real, documented gap,
not an oversight, and it is the standing condition on the GO.

What we do have is real Google and Bing autosuggest data, which is derived from actual query logs.
Dense, specific clusters exist for: cost (`ai implementation cost`, `how much does ai implementation
cost`), failure (`why ai projects fail` plus `rand`, `mit`, `gartner`, `mckinsey`, `hbr` variants),
templates (`ai implementation checklist`, `ai readiness assessment`, `ai implementation roadmap`),
build versus buy, and ROI calculators.

**Contamination warning.** The bare head term `ai implementation consultant` is roughly half
job-seeker intent (jobs, salary, certification, course). It is never targeted, and never gets a URL.

**Dead framing.** `ai consultant vs agency` and `chatgpt vs custom ai for business` return zero
autosuggest results. Nobody types them. No content is built for them.

**Verdict: conditional pass.** Demand *existence* is proven with real query-log data. Demand
*magnitude* is unproven and must be validated with an Ahrefs export before any wave-3 spend.

## 2. Winnable

The strongest criterion. Seven head terms searched, ten ranking pages fetched and scored out of 14
(original data, specificity, interactivity, extractability, freshness, E-E-A-T, conversion path):

| Page | Score | What it lacks |
|---|---|---|
| AI4SP / roicalc.ai | 11/14 | ROI only, no named author |
| Helium42 | 10/14 | Best cost figures anywhere, methodology never shown, checklist gated |
| Amitkoth.com | 6/14 | No original research, heavy self-promotion |
| Maxbraglia Substack | 4/14 | No verifiable credentials |
| Informatica | 4/14 | Product pitch as thought leadership |
| Cigen.io | 2/14 | Everything of value gated behind a form |
| Microsoft.com | 1/14 | Ranks on brand alone. No author, no data, no date, no tool |

Nothing scored above 11/14. Two solo bloggers already rank top-10 for `ai implementation checklist`,
which falsifies any claim that this niche needs Fortune-500 authority. Exactly **one** working
interactive tool exists across all seven terms (AI4SP's calculator).

**The falsifiable gap:** no ranking page combines primary-sourced figures with visible methodology, a
live interactive diagnostic, and a named author. **PASS.**

## 3. The £ path

**The gate was right and its ruling is accepted.** The first monetisation pass produced a 12-month
figure of £1,450 to £1,600 per month. That number is fantasy. It rests entirely on a digital-product
conversion rate that could not be verified against any published benchmark, sold into a segment whose
trust is already burned, against a base rate where 88% of Gumroad and Whop sellers earn nothing.

**Honest arithmetic.** Day one: £0. Nothing with zero traffic earns on day one.

- Ads: at 5,000 monthly pageviews and a $3 RPM, roughly £12/month. Raptive needs 25,000 pageviews;
  Mediavine needs $5,000 trailing revenue; Ezoic now needs 250,000 monthly active users for new
  sites. All out of reach in year one.
- Affiliate: verified rates are n8n 30% for 12 months, Make.com 35% for 12 months, DigitalOcean 10%
  recurring, Coursera 15 to 45%. Zapier has no cash programme; Retool discontinued theirs in August
  2024; LangSmith has none. At 5,000 pageviews, 2% affiliate CTR and 2% conversion, that is roughly
  two signups a month, so £30 to £80.

**Credible 12-month range: £40 to £200 per month. Modal outcome nearer the bottom.**

Judged against £1,500 that is a failure. Judged against this portfolio, roughly £350/month across 44
sites, it is an above-average tree. **Conditional pass, on the honest number, and only because wave 1
is lean.** If the build cost inflates, this criterion fails.

## 4. Differentiation

The USP is the triple gap, stated as a promise: primary-sourced figures with methodology shown, a
named human author, and a free ungated diagnostic instead of a sales call. Held by no ranking
competitor and by no portfolio site. **PASS.**

Strengthened during the build. See "What verification found", below.

## 5. Effort sanity

The gate failed this on the basis that upgrading `aifor.tech` would be a better home for the same
content. **Falsified.** `aifor.tech` has **0 clicks in 90 days**, ranks at positions 54 to 84, and
its only indexed queries are about *AI learning tools*, not AI implementation. There is no authority
to inherit. The recommended alternative is worse than the thing it replaced.

**PASS, conditional on lean scope:** one interactive tool plus nine pages. Not a 400-page farm.

## 6. Portfolio fit

The gate failed this because `agenticai.associates/services/ai-implementation/` supposedly competes.
**Falsified twice over.** That URL 301-redirects; the page does not exist. And in 90 days
`agenticai.associates` recorded **zero impressions on any `ai implementation` query**. It surfaces
only for `agentic ai *` terms at position 76 and worse.

The gate's second argument, that this is a fourth AI property while three underperform, is a **volume
argument**, and the portfolio rule is explicit: never argue against a new build on volume grounds,
only on dossier data.

**PASS, conditional on monetisation staying clear of the siblings:** no consultancy lead-generation
(that is `agenticai.associates`), no AI tools directory (that is `aifor.tech`), no news aggregation
(that is `aiagentic.news`).

---

## What verification found, and why it changed the site

Before a word of content was written, every figure in the corpus was sent for independent
verification against its primary source. **Four of the numbers this project's own research units
supplied turned out to be wrong.** The site would have shipped them.

| Circulating claim | What the source actually says |
|---|---|
| RAND: 80.3% of AI projects fail | RAND writes "by some estimates, more than 80 percent". No decimal exists in the report. |
| RAND: 33.8% abandoned / 28.4% no value / 18.1% partial / 19.7% succeed | Appears nowhere. RAND's method was 65 semi-structured interviews, which cannot yield an outcome taxonomy. The four numbers sum to exactly 100.0%. |
| RAND: 84% of AI failures are leadership-driven | Real, but narrower. 84% of RAND's 65 *interviewees* cited a leadership-driven cause as the primary reason projects fail. Expert opinion, not an audit. A second, unrelated 84% (from Cisco's index, about leaders believing AI matters) sits in the same report. |
| MIT NANDA: 150 interviews, 350-employee survey | 52 organisations interviewed, 153 survey leaders, 300+ public initiatives. |
| MIT: general-purpose tools succeed 83% vs 5% for custom | Different denominators. Like-for-like pilot-to-implementation is roughly 80% versus roughly 25%. |
| BCG: 26% can move beyond experimentation | No 26% figure exists in the report. Not a BCG category. |
| DSIT: 46% of small firms cite lack of knowledge | Belongs to a Federation of Small Businesses survey. DSIT's own figure is 60% citing limited skills. |
| ONS: UK adoption rose from 9% to 25% | ONS states a 15 percentage point rise, so the baseline is 10%. |
| Indie Hackers: $50M firm spent $800K, abandoned in 90 days | Could not be located at all. **Dropped from the site.** |

**This is the site.** The provenance audit is original, checkable work that requires no proprietary
data, and it is exactly what the tagline promised. The mechanism is worth stating: `rand.org`,
`gartner.com` and `hbr.org` all return HTTP 403 to automated readers, so the AI assistants and
content mills quoting them cannot read them. They quote each other, and precision accretes with every
hop.

Also dropped: a Hacker News "$600 overnight loop" anecdote, because other commenters flagged the
poster as promoting a competing product.

---

## Binding constraints on the GO

1. Lean scope. One tool, nine pages, plus `/about`. Wave 2 only after impressions appear.
2. Affiliate plus eventual display ads. No lead-gen, no directory, no news.
3. Never claim proprietary data, testing, client results, or a search volume.
4. Search vocabulary in titles and H1s; sceptical-practitioner register in the body.
5. No em dashes or en dashes anywhere, ever.
6. Get the Ahrefs export before wave-3 spend. If the volume is not there, harvest the diagnostic and
   the reconciliation table and stop.
7. Re-verify the whole corpus every 90 days. `src/lib/sources.ts` is the single place to edit.
   Stale figures destroy this site faster than no traffic does.

## Honest statement of risk

The single biggest risk is not competition. It is that `aiagentic.news` is a live example of this
operator building an AI site that earned zero clicks. The causal differences here are real: evergreen
rather than decaying content, an original interactive asset, a documented SERP weakness, and a
provenance finding nobody else has. Whether those differences are *sufficient* is unproven, and the
90-day review in `docs/growth-plan.md` exists to answer it rather than let the site decay quietly.
