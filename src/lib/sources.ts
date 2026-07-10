import type { Source } from './types';

/**
 * THE CORPUS. This file is the site's product.
 *
 * Rules, enforced by review and by `npm run build`:
 *  1. Nothing renders on this site that does not resolve to an entry here.
 *  2. `metric` quotes the source's own wording. Never sharpen a hedge into a
 *     decimal. "More than 80 percent" does not become "80.3%".
 *  3. `sample: null` when the source does not publish one. The UI prints
 *     "not stated in accessible sources". Never substitute a plausible number.
 *  4. `drift` is only populated where the misquote was checked against the
 *     primary text. It is the site's original contribution: a provenance audit.
 *
 * Every figure below was checked against its primary source on 2026-07-10.
 * Four widely circulated figures were found to be fabricated or misattributed
 * and are recorded in `drift` rather than repeated. See /ai-project-failure-rate.
 */

const LAST_VERIFIED = '2026-07-10';

export const SOURCES: Source[] = [
  {
    id: 'rand-failure',
    org: 'RAND',
    title: 'The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed (RRA2680-1)',
    year: 2024,
    metric: 'By some estimates, more than 80% of AI projects fail, about twice the rate of non-AI IT projects',
    sample: '65 interviews (50 industry, 15 academic)',
    method: 'semi-structured interviews, August to December 2023',
    url: 'https://www.rand.org/pubs/research_reports/RRA2680-1.html',
    access: 'rand.org returns HTTP 403 to automated readers, so most AI assistants cannot check this figure',
    status: 'blocked',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"80.3% of AI projects fail", and a four-way outcome breakdown crediting RAND with 33.8% abandoned, 28.4% no value, 18.1% partial, 19.7% succeed',
      actually:
        'RAND publishes no decimal figure. Its words are "by some estimates, more than 80 percent", a hedge on someone else\'s estimate. The four-way breakdown appears nowhere in the report, and could not: RAND\'s method was 65 semi-structured interviews, which cannot produce an outcome taxonomy. The four numbers sum to exactly 100.0%, which is what invented data tends to do.',
    },
  },
  {
    id: 'rand-leadership',
    org: 'RAND',
    title: 'The Root Causes of Failure for Artificial Intelligence Projects (RRA2680-1), leadership-driven failures',
    year: 2024,
    metric:
      'Eighty-four percent of our interviewees cited one or more leadership-driven root causes as the primary reason that AI projects would fail',
    sample: '65 interviews (50 industry, 15 academic)',
    method: 'semi-structured interviews. This records what interviewees cited, not a measurement of failures',
    url: 'https://www.rand.org/pubs/research_reports/RRA2680-1.html',
    access: 'rand.org returns HTTP 403 to automated readers',
    status: 'blocked',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"84% of AI project failures are caused by leadership, not technology"',
      actually:
        'The 84% is real, and it is narrower than that. It is the share of RAND\'s 65 interviewees who named a leadership-driven cause as the primary reason AI projects fail. It is expert opinion from 65 people, not an audit of how failures were caused. Confusingly, a second and unrelated 84% appears in the same report, taken from the Cisco AI Readiness Index, describing business leaders who believe AI will significantly affect their business. That coincidence is probably where the muddle began.',
    },
  },
  {
    id: 'mit-nanda',
    org: 'MIT Project NANDA',
    title: 'The GenAI Divide: State of AI in Business 2025',
    year: 2025,
    metric: '95% of organisations are getting zero return from generative AI',
    sample: '52 organisations interviewed, 153 survey leaders, 300+ public initiatives reviewed',
    method: 'interviews, survey and review of public initiatives, January to June 2025',
    url: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
    access:
      'Universally called an MIT report. We could not find it hosted on any MIT or Project NANDA domain, and read the PDF from a third-party mirror. It is not peer reviewed.',
    status: 'contested',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"95% of AI pilots fail", and "general-purpose tools succeed 83% of the time against 5% for custom tools"',
      actually:
        'The 95% describes organisations getting zero return, not pilots failing. The 83% and the 5% are not comparable: 83% is a pilot-to-implementation rate for general-purpose chatbots, while the 5% is the share of all organisations that evaluated a custom tool and reached production. On like-for-like pilot-to-implementation, the report\'s own chart puts general-purpose tools near 80% and embedded custom tools near 25%. The sample is also inflated in retelling: it is 52 organisations interviewed, 153 survey leaders and 300+ public initiatives, not "150 interviews and a 350-employee survey".',
    },
  },
  {
    id: 'gartner-poc',
    org: 'Gartner',
    title: 'Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025',
    year: 2024,
    metric:
      'At least 30% of generative AI projects will be abandoned after proof of concept by the end of 2025, due to poor data quality, inadequate risk controls, escalating costs or unclear business value',
    sample: null,
    method: 'analyst prediction, not a measurement',
    url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025',
    access:
      'gartner.com returns HTTP 403 to automated readers, including through reader proxies. Text read from a trade mirror that reproduces the release verbatim and credits Gartner as the source.',
    status: 'contested',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"Gartner found that 30% of generative AI projects are abandoned"',
      actually:
        'This is a forecast, published in July 2024, about what would happen by the end of 2025. Gartner measured nothing. A prediction quoted as an observation is the most common error in this field.',
    },
  },
  {
    id: 'gartner-agentic',
    org: 'Gartner',
    title: 'Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled By End of 2027',
    year: 2025,
    metric:
      'Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls',
    sample: null,
    method: 'analyst prediction, not a measurement',
    url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
    access:
      'gartner.com returns HTTP 403 to automated readers, including through reader proxies. Text read from a trade mirror that reproduces the release verbatim and credits Gartner as the source.',
    status: 'contested',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"40% of agentic AI projects have been cancelled"',
      actually:
        'A forecast issued in June 2025 about the end of 2027. Gartner also notes that only a small fraction of vendors claiming agentic capability actually offer it, a practice it calls agent washing.',
    },
  },
  {
    id: 'mckinsey-state-of-ai',
    org: 'McKinsey',
    title: 'The State of AI in 2025',
    year: 2025,
    metric:
      '88% report regular AI use in at least one business function, 72% use generative AI, only 7% have fully scaled it, and just 39% report enterprise-level EBIT impact',
    sample: '1,993 respondents across 105 countries',
    method: 'global survey, fieldwork 25 June to 29 July 2025',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"88% of companies use AI", cited as evidence that AI adoption is solved',
      actually:
        'The same survey reports that only 7% have fully scaled AI and nearly two thirds have not begun scaling at all. Regular use in one function is a low bar. Adoption and value are different measurements.',
    },
  },
  {
    id: 'bcg-value-gap',
    org: 'BCG',
    title: 'The Widening AI Value Gap',
    year: 2025,
    metric:
      '5% of companies are achieving AI value at scale, and 60% are not achieving material value at all (stagnating 14%, emerging 46%, scaling 35%, future-built 5%)',
    sample: '1,250 executives across 68 countries and 25+ sectors',
    method: 'global executive survey, published September 2025',
    url: 'https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"Only 4% generate substantial value" and "26% have capabilities to move beyond experimentation"',
      actually:
        'The 4% is BCG\'s 2024 figure; the 2025 report puts future-built firms at 5%. No 26% figure appears anywhere in the 2025 report. It is not a BCG category.',
    },
  },
  {
    id: 'ibm-ceo',
    org: 'IBM',
    title: 'IBM Institute for Business Value CEO Study',
    year: 2025,
    metric:
      'CEOs report that only 25% of AI initiatives have delivered expected ROI over the last few years, and only 16% have scaled enterprise wide',
    sample: '2,000 CEOs across 33 countries and 24 industries',
    method: 'survey with Oxford Economics, February to April 2025',
    url: 'https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
  },
  {
    id: 'deloitte-roi',
    org: 'Deloitte',
    title: 'State of AI in the Enterprise',
    year: 2025,
    metric:
      '74% of organisations are hoping to grow revenue through their AI initiatives, compared with just 20% that are already doing so',
    sample: null,
    method: 'executive survey',
    url: 'https://www.deloitte.com/global/en/issues/generative-ai/ai-roi-the-paradox-of-rising-investment-and-elusive-returns.html',
    access:
      "Deloitte's own materials give two different sample sizes for this wave (1,854 executives and 3,235 leaders). We could not resolve which applies to this figure, so we state neither.",
    status: 'contested',
    lastVerified: LAST_VERIFIED,
  },
  {
    id: 'dsit-uk',
    org: 'DSIT',
    title: 'AI Adoption Research (IFF Research and Technopolis, for DSIT)',
    year: 2025,
    metric:
      'Around 1 in 6 UK businesses (16%) currently use at least one AI technology: micro 14%, mid-sized 23%, large 36%',
    sample: '3,500 businesses with 5+ employees, plus 100 qualitative interviews',
    method: 'telephone survey, fieldwork 12 February to 2 May 2025',
    url: 'https://www.gov.uk/government/publications/ai-adoption-research/ai-adoption-research',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"46% of small firms cite lack of knowledge as the barrier", credited to DSIT',
      actually:
        "That figure comes from a Federation of Small Businesses survey, not this study. DSIT's own barrier figure is 60% of businesses citing limited skills or expertise.",
    },
  },
  {
    id: 'ons-bics',
    org: 'ONS',
    title: 'Business Insights and Conditions Survey, wave 147',
    year: 2025,
    metric:
      'Approximately a quarter (25%) of businesses report currently using some form of AI, up 15 percentage points since the question was introduced in late September 2023. 44% among businesses with 250+ employees',
    sample: 'the BICS business panel',
    method: 'national statistics survey, fieldwork 15 to 28 December 2025',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/businessinsightsandimpactontheukeconomy/8january2026',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
    drift: {
      circulates: '"UK AI adoption rose from 9% to 25%"',
      actually:
        'ONS states a rise of 15 percentage points to 25%, which puts the baseline at 10%, not 9%. A small error, and it is in almost every retelling.',
    },
  },
  {
    id: 'bcc-intuit',
    org: 'British Chambers of Commerce',
    title: 'SME AI adoption survey, with Intuit QuickBooks',
    year: 2025,
    metric:
      'Over a third of SMEs (35%) say they are actively using AI technology, up from 25% in 2024. 46% of B2B service firms, against 26% of B2C firms and manufacturers. Only 11% use it to a great extent',
    sample: '1,500+ business leaders',
    method: 'online survey, June to July 2025',
    url: 'https://www.britishchambers.org.uk/news/2025/09/turning-point-as-more-smes-unlock-ai/',
    access: 'surveys Chamber members, who are likely more AI-forward than UK businesses generally',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
  },
  {
    id: 'census-btos',
    org: 'US Census Bureau',
    title: 'Business Trends and Outlook Survey',
    year: 2026,
    metric:
      'Overall business AI usage hovered between 17% and 20% from December 2025 to May 2026. 37% among firms with at least 250 employees, and under 20% among firms with four or fewer',
    sample: 'the BTOS business panel',
    method: 'national statistics survey, December 2025 to May 2026 waves',
    url: 'https://www.census.gov/library/stories/2026/05/ai-use-businesses.html',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
  },
  {
    id: 'hn-cron',
    org: 'Hacker News',
    title: 'Ask HN: What breaks when you run AI agents unsupervised?',
    year: 2026,
    metric: 'An unsupervised agent cron job spent $24.88 in two days, with no cost guards and no human review',
    sample: 'one self-reported incident',
    method: 'practitioner account, 13 points and 7 comments',
    url: 'https://news.ycombinator.com/item?id=47112543',
    access: 'a single anecdote, not a study. Quoted for its specificity, not its representativeness',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
  },
  {
    id: 'hn-rag',
    org: 'Hacker News',
    title: 'Comment on: Enterprises are getting stuck in AI pilot hell',
    year: 2025,
    metric:
      'A consultant on several F500 retrieval chatbot rollouts reports hearing "I don\'t see what value this has over ChatGPT" from users who by then carried five and six figure cloud bills',
    sample: 'one practitioner account',
    method: 'comment on an 84-point thread',
    url: 'https://news.ycombinator.com/item?id=44221695',
    access:
      'the article the thread discusses is vendor-adjacent PR. The quoted account is an independent commenter reporting their own work, which is why we cite the comment and not the article',
    status: 'verified',
    lastVerified: LAST_VERIFIED,
  },
];

const INDEX = new Map(SOURCES.map((s) => [s.id, s]));

export function getSource(id: string): Source {
  const s = INDEX.get(id);
  if (!s) {
    throw new Error(
      `sources: unknown id "${id}". Every statistic must resolve to a verified source. Add it to sources.ts or remove the claim.`
    );
  }
  return s;
}

/** Sources whose commonly circulated version differs from what the primary supports. */
export const DRIFTED = SOURCES.filter((s) => s.drift);
