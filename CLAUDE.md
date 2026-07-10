# implementai-today — Project Brain

Canonical project memory. Written 2026-07-10 at build. Update this file, not the central vault.

## What this is

`implementai.today`. An independent UK publication that reads the primary research on enterprise AI
adoption and failure, quotes its named sources with visible methodology and sample sizes, and ships
free interactive diagnostics. It sells no consultancy, lists no tools, aggregates no news, and owns
no proprietary data.

**Tagline:** The research vendors quote but never show.

**The wedge.** People search the research *by source name*: "why ai projects fail rand", "...mit",
"...gartner". And `rand.org`, `gartner.com` and `hbr.org` all return HTTP 403 to automated readers,
so the AI assistants and content mills quoting them cannot read them. They quote each other, and
precision accretes with every hop.

**The original finding, and the reason the site exists.** Of the 15 sources cited, 9 circulate in a
form the primary does not support. "80.3% of AI projects fail" appears in no study. The four-way
RAND breakdown was never published by RAND. See `docs/research-dossier.md` for the full audit.

## Stack and deploy

- Astro 5 static + Tailwind 4 (`@tailwindcss/vite`, no plugin), zero JS framework. No web fonts, so a
  strict CSP cannot break the page.
- `npm run build` runs `astro check && astro build`. Output `dist`. NODE_VERSION 22.
- Deploy: GitHub push, then Cloudflare Pages. **Never upload directly.**
- The diagnostic is one inline `<script>`, no island, no hydration.

## The rules this site cannot break

1. **`src/lib/sources.ts` is the corpus and the product.** Nothing renders anywhere that does not
   resolve to an entry there. `getSource()` throws on an unknown id, which is deliberate: it makes
   the build fail rather than let an unsourced number ship.
2. **Never sharpen a hedge.** "More than 80 percent" does not become "80.3%".
3. **`sample: null` when the source publishes none.** The chip prints "not stated in accessible
   sources". Never substitute a plausible number.
4. **Never an em dash or en dash**, not even inside a quotation. Normalise and say so.
5. **Never claim** proprietary data, testing, delivered client AI projects, or a search volume.
6. **The diagnostic is not a validated model** and the page must keep saying so. No `aggregateRating`
   in its schema, ever.
7. **Vendor cost ranges are marketing, not research.** `/ai-implementation-cost` describes the
   pattern and never repeats a figure. They must never become `variableMeasured` or `citation`.
8. British English. Search vocabulary in titles and H1s, sceptical-practitioner register in the body.

## Design

A research instrument: warm paper, ink, one burnt-sienna needle. Full tokens in `site-identity.md`.

- **Signature rule:** every number renders in tabular monospace via `.num`, never in the body face.
- **Layout signature:** the evidence rail. A 68ch reading column plus a 19rem right margin where each
  statistic's `CitationChip` pins beside its claim. Collapses below 1180px. Chips must be **direct
  children of `.rail-grid`**, siblings of the `.rail-body` divs, or they will not land in the margin.
- Deliberately absent: gradient mesh, aurora blur, glassmorphism, pill-everything, emoji headings.

## Structure

ROOT is failure and de-risking, not the head term (`ai implementation consultant` is roughly half
job-seeker intent and never gets a URL).

Wave 1 shipped: `/`, `/ai-project-risk-diagnostic`, `/ai-project-failure-rate` (flagship),
`/why-ai-projects-fail`, `/why-ai-projects-fail/rand`, `/why-ai-projects-fail/mit-nanda`,
`/ai-implementation-checklist`, `/ai-implementation-cost`, `/ai-adoption-statistics`,
`/build-vs-buy-ai`, `/about`. Waves 2 and 3 in `docs/build-manifest.md`.

**Cannibalisation control.** `/ai-project-failure-rate` owns *the number* and the reconciliation
table. `/why-ai-projects-fail` owns *the causes* and links to the table rather than restating it.
Never create `/ai-implementation-failure-rate`; it is absorbed as an H2 and an FAQ entry.

**Held out on purpose.** `/why-ai-projects-fail/hbr` is not built without a verified HBR primary
source: demand exists, the corpus does not. No ROI calculator, ever: that term is a tool-versus-tool
fight already won by AI4SP's genuinely good calculator, which claims a 180k use-case dataset we
cannot match.

## Money

Day one revenue is **£0** and the gate priced the credible 12-month outcome at **£40 to £200/month**.
The £1,450 figure from the first monetisation pass was fantasy and is recorded as such in the dossier.

Affiliate only, contextual, inside genuine remediation copy, never a list page. Verified rates: n8n
30% for 12 months, Make.com 35% for 12 months, DigitalOcean 10% recurring, Coursera 15 to 45%. Zapier
has no cash programme, Retool discontinued theirs, LangSmith has none. Links currently carry
`data-aff="pending"` and are plain URLs until Sunny is approved.

Display ads only at 25,000 monthly pageviews (Raptive's floor). No premature AdSense.

**Never add consultancy lead capture.** It competes with `agenticai.associates` and it destroys the
independence claim, which is the only asset this site has.

## Portfolio position

Distinct from `agenticai.associates` (consultancy lead-gen, 0 impressions on any `ai implementation`
query in 90 days, its `/services/ai-implementation/` URL 301s), `aifor.tech` (tools directory, 0
clicks in 90 days) and `aiagentic.news` (news aggregation, £0).

## Indexing safety (do not delete)

Every page canonicalises to `https://implementai.today`. Until DNS lands, the site is served from
`*.pages.dev`, so that canonical points at a domain Google cannot fetch the site from.
`functions/_middleware.js` therefore sets `X-Robots-Tag: noindex, nofollow` on any `*.pages.dev`
hostname. On the real domain it is a no-op. **Keep it**: it also protects every future preview
deployment. Do not "fix" the canonical to point at pages.dev; that would need a 301 migration later.

## Analytics: deliberately absent

GA4 is **not** wired, on purpose. `aiagentic.news` fires GA4 with no consent banner, which is a UK
GDPR and ePrivacy problem. Do not repeat it here. Either add a CMP first, or use Cloudflare Web
Analytics (cookieless, needs no consent banner). Provisioning the latter by API needs a token with
account analytics scope; the cached wrangler OAuth does not have it.

## Blocked on Sunny

- **Cloudflare zone creation, the only real blocker.** The Pages custom domain
  `implementai.today` is **already attached** to the project (status `pending`, validation `http`,
  CF reports "CNAME record not set"). Cached wrangler OAuth has `pages:write` and `zone:read` but
  **not** `zone.create`, so the zone itself cannot be added by API. Either:
  1. Cloudflare dashboard, Add site, `implementai.today`, Free plan, then paste the two nameservers
     into Spaceship (replacing `launch1/2.spaceship.net`). The attached custom domain then validates
     and issues SSL on its own. **No further code change needed.**
  2. Or supply a CF API token with `Zone: Zone: Edit` plus account-level zone create, and it can be
     done end to end without you.
  The `cfut_143a…` token in `master-builds.md` is DEAD, reconfirmed 2026-07-10. There is no Spaceship
  registrar API credential anywhere in the credential stores; the nameserver change is registrar-side.
- **Author E-E-A-T.** `sameAs` now carries the verified `https://github.com/sunnyp81`. Still needed:
  a real headshot (**not** AI-generated, which would contradict this site's whole thesis), the
  canonical LinkedIn URL, and a reciprocal author page on `sunnypatel.co.uk`.
- **Ahrefs export** for the failure and cost clusters. Demand magnitude is genuinely unproven: Bing's
  keyword API is dead and no volume was ever obtained. Required before any wave-3 spend.
- **GSC and Bing properties + sitemap submission**, once the real domain resolves. Pointless before.

## Standing obligations

- **Re-verify the whole corpus every 90 days.** Chips render their `lastVerified` date to readers.
- **Predictions expire.** Gartner's "30% abandoned by end of 2025" is now a claim about the past.
  When its horizon passes, find out whether it came true or retire it. A stale prediction sold as
  current is exactly the vendor behaviour this site criticises.
- 90-day review against `docs/growth-plan.md`. Under 25% of the line, run `/site-health`. Zero
  impressions at 90 days is the `aiagentic.news` failure mode: an authority and entity problem, not a
  content problem. Do not respond by publishing more pages.
