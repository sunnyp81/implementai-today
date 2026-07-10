# Growth plan: implementai.today

A build is not complete at launch. It is complete when the site has a standing loop that runs
without anyone remembering to run it. This is that loop.

## The honest baseline

Day-one revenue is **£0**, and it stays effectively £0 until the site ranks. Nothing with zero
traffic earns on day one. The Phase 0 gate priced the credible outcome at **£40 to £200 per month at
twelve months**, not the £1,450 the first monetisation pass produced (that figure rested on a digital
product conversion rate nobody could verify, sold into a segment whose trust is already burned).

Against a portfolio averaging roughly £8 per site per month, £40 to £200 is an above-average tree.
That is the whole reason it was planted. Anyone reading this later and feeling disappointed by month
three should re-read this paragraph rather than conclude the site failed.

## 1. Wave schedule

Wave 1 (launch, 1 tool + 9 pages + /about) ships complete. Then two to three pages per week:

| Week from launch | Pages |
|---|---|
| +1 | `/why-ai-projects-fail/gartner`, `/why-ai-projects-fail/mckinsey` |
| +2 | `/why-agentic-ai-projects-fail`, `/why-gen-ai-projects-fail` |
| +3 | `/ai-readiness-assessment`, `/ai-implementation-roadmap` |
| +4 | `/ai-roi` (explainer, never a calculator), `/ai-consultant-cost` |
| +5 | `/ai-adoption-statistics/uk`, `/ai-for-small-business` |
| +6 onward | Wave 3, gated on wave 2 showing impressions |

**Stop rule.** If wave 2 produces no impression growth in GSC after four weeks, stop publishing and
run `/site-health` instead of writing wave 3. Publishing into silence is how a thin-content signal is
earned.

## 2. Monitor registration

- Register `implementai.today` in `/seo-monitor-loop` triage at launch.
- Add to seogets once GSC has data (property `sc-domain:implementai.today`).
- Cadence: weekly for the first eight weeks (a new domain moves fast or not at all), then monthly.

## 3. `/evolve-site` enrolment

**Launch + 4 weeks.** Not sooner. There is no GSC data to iterate against before then, and CTR
rewrites on a site with no impressions are theatre. Note the portfolio rule: max 20 pages per site,
never on programmatic sites over 500 pages, never two sites in the same week.

## 4. Monetisation activation milestones

| Milestone | Trigger | Action |
|---|---|---|
| Affiliate links live | Sunny approved into n8n (30%, 12mo) and Make.com (35%, 12mo) | Add `affiliateUrl` values; links go only inside genuine remediation copy on `/ai-implementation-checklist` and `/build-vs-buy-ai`, never a list page |
| DigitalOcean + Coursera | After n8n and Make convert at all | Same rule. Contextual only |
| First £ checkpoint | First commission of any size | Record the source page. That page is the template for wave 3 |
| Display ads | **25,000 monthly pageviews** and at least 50% tier-1 traffic (Raptive's floor) | Apply to Raptive. Not AdSense before then: at 5,000 pageviews and a $3 RPM the site earns about £12 a month and carries the ad-clutter cost for it. No premature AdSense |
| Mediavine | £5,000 trailing twelve-month ad revenue, or the "Journey" on-ramp at 1,000 sessions/month | Only if Raptive declines |

Programmes confirmed to have **no cash affiliate scheme**, so do not chase them: Zapier
(co-marketing only), Retool (discontinued August 2024), LangSmith / LangChain (partner network only).

**Never** add consultancy lead capture. That competes with `agenticai.associates` and it breaks the
site's independence claim, which is the only asset it has.

## 5. Entity corroboration checklist

Carried over from Phase 1. All are **[MANUAL]** and all are blocking for full E-E-A-T credit.

- [ ] Real headshot for the author byline and `Person.image`. Not AI-generated. An AI-generated
      portrait on this site would contradict its entire thesis and a reader will notice.
- [ ] Canonical LinkedIn URL, added to `SITE.author.sameAs`.
- [ ] GitHub profile URL. This is the load-bearing proof of "builds and ships software", which is the
      only expertise claim the site makes.
- [ ] Reciprocal author page on `sunnypatel.co.uk` linking back here, so `sameAs` is bidirectional.
- [ ] GSC property + Bing property, sitemap submitted to both.
- [ ] GA4 property created, measurement ID wired per `process_ga4_astro_sites`.

## 6. Freshness loop (this one is existential, not cosmetic)

The site's only asset is that its figures are right. Stale figures destroy it faster than no traffic.

- Every citation chip renders a `lastVerified` date from `src/lib/sources.ts`. It is visible to
  readers on purpose.
- **Re-verify the whole corpus every 90 days.** The `sources.ts` file is the single place to edit.
- Known refresh triggers: McKinsey's State of AI is annual; Gartner issues predictive press releases
  around mid-year; ONS BICS runs recurring waves; DSIT and BCC survey roughly annually. Each release
  is a content-refresh opportunity and a correctness obligation.
- **Predictions expire.** Gartner's "30% abandoned by end of 2025" is now a claim about the past.
  When its horizon passes, either find whether it came true or retire the figure. A stale prediction
  presented as current is exactly the vendor behaviour this site exists to criticise.

## 7. 90-day review

Compare actual GSC impressions and clicks against the dossier's arithmetic.

- **Under 25% of the line:** trigger `/site-health`. Do not let it decay quietly.
- **Zero impressions at 90 days:** this is the `aiagentic.news` failure mode (0 clicks, 348
  impressions, homepage at position 79.6 after months). Diagnose it as an authority and entity
  problem, not a content problem. Do not respond by publishing more pages.
- **The demand-magnitude gap is still open.** Phase 0 passed with a documented hole: Bing's keyword
  API is dead and no search volume was ever obtained. Before any wave-3 spend, get the Ahrefs export
  for the failure and cost clusters. If the volume is not there, harvest the diagnostic and the
  reconciliation table and stop.

## 8. What would make this site actually work

Ranked by leverage, since the growth loop above is necessary but not sufficient:

1. **A citation from ChatGPT or Perplexity on `/ai-project-failure-rate`.** That page exists because
   the honest answer requires reconciling figures no single primary publishes, and the primaries are
   403-blocked to models. It is the one page with a structural reason to be cited.
2. **A link from one Hacker News thread** where the reconciliation table settles an argument. The
   secondary ICP is not monetised, but they are the only realistic source of early links.
3. **Being right when a vendor is wrong.** Every time a vendor blog recycles a drifted statistic, the
   corrected version here has a reason to exist.
