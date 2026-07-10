import type { DiagnosticQuestion, FailureMode } from './types';

/**
 * Every question exists because a named study measured or named that factor.
 * `because` must paraphrase only what the source actually supports, and the
 * `sourceId` must resolve in sources.ts. No question may be grounded in the
 * fabricated RAND "84% organisational" figure, which does not exist.
 *
 * Weights are a judgement about risk ordering. They are NOT derived from any
 * study, and the tool says so, loudly, on the page.
 */
export const QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'origin',
    label: 'Where did this project come from?',
    because:
      'RAND interviewed 65 data scientists and engineers. 84% of them named a leadership-driven cause, such as optimising for the wrong business problem, as the primary reason AI projects fail. That is what 65 experts cited, not an audit of real failures, and RAND lists "misunderstanding or miscommunicating the problem" first among its five root causes.',
    sourceId: 'rand-leadership',
    options: [
      { value: 'problem', label: 'A team hit a specific problem and went looking for a fix', weight: 0 },
      { value: 'customer', label: 'A customer or user asked for it directly', weight: 0 },
      { value: 'exec', label: 'An executive came back from a conference or read an article', weight: 2 },
      { value: 'mandate', label: 'The board or leadership mandated "an AI strategy"', weight: 3 },
    ],
  },
  {
    id: 'metric',
    label: 'Is there one business metric, with a current baseline number, that this must move?',
    because:
      'Gartner lists "unclear business value" among the reasons it forecasts generative AI projects will be abandoned after proof of concept. IBM\'s survey of 2,000 CEOs found only 25% of AI initiatives had delivered the ROI expected of them.',
    sourceId: 'gartner-poc',
    options: [
      { value: 'baseline', label: 'Yes, one metric, and we know today\'s number', weight: 0 },
      { value: 'named', label: 'Yes, a metric is named, but nobody has measured the baseline', weight: 1 },
      { value: 'general', label: 'A general goal: efficiency, productivity, staying competitive', weight: 2 },
      { value: 'none', label: 'Not yet. We will work that out as we go', weight: 3 },
    ],
  },
  {
    id: 'data',
    label: 'Does the data this needs already exist, and can the team reach it today?',
    because:
      'Gartner names "poor data quality" first among the causes in its forecast that at least 30% of generative AI projects would be abandoned after proof of concept.',
    sourceId: 'gartner-poc',
    options: [
      { value: 'have', label: 'Yes, and someone on the team has already queried it', weight: 0 },
      { value: 'locked', label: 'It exists, but it sits in a system we do not control', weight: 2 },
      { value: 'unknown', label: 'Partly, and nobody has checked its quality', weight: 2 },
      { value: 'create', label: 'It would have to be collected or created first', weight: 3 },
    ],
  },
  {
    id: 'ownership',
    label: 'Who owns this once it is live?',
    because:
      'Leadership-driven failures are the first of the five root causes RAND names, and the category 84% of its interviewees pointed to. An unowned system is an organisational condition, not a technical one.',
    sourceId: 'rand-leadership',
    options: [
      { value: 'person', label: 'One named person, with the authority to change it', weight: 0 },
      { value: 'team', label: 'A named team', weight: 1 },
      { value: 'committee', label: 'A committee or steering group', weight: 2 },
      { value: 'nobody', label: 'Not decided yet', weight: 3 },
    ],
  },
  {
    id: 'workflow',
    label: 'Does it change work people already do daily, or ask them to adopt something new?',
    because:
      'MIT\'s GenAI Divide report found 95% of organisations getting zero return, and names the cause plainly: "The core barrier to scaling is not infrastructure, regulation, or talent. It is learning." Tools that do not fit an existing workflow do not get the feedback they need to improve.',
    sourceId: 'mit-nanda',
    options: [
      { value: 'replaces', label: 'It replaces a step in a workflow people already run every day', weight: 0 },
      { value: 'augments', label: 'It sits alongside an existing workflow', weight: 1 },
      { value: 'new', label: 'It introduces a new workflow people will need to learn', weight: 2 },
      { value: 'demo', label: 'There is no workflow yet. It is a demo looking for a home', weight: 3 },
    ],
  },
  {
    id: 'production',
    label: 'If the pilot works, what happens next?',
    because:
      'Gartner\'s forecast is specifically about abandonment after proof of concept. McKinsey\'s 2025 survey found only 7% of organisations had fully scaled AI, and nearly two thirds had not begun scaling at all.',
    sourceId: 'mckinsey-state-of-ai',
    options: [
      { value: 'funded', label: 'There is a funded route to production and a named owner for it', weight: 0 },
      { value: 'assumed', label: 'Budget is assumed but not allocated', weight: 1 },
      { value: 'later', label: 'We will decide once we see the pilot', weight: 2 },
      { value: 'none', label: 'No plan beyond the pilot', weight: 3 },
    ],
  },
  {
    id: 'buildtype',
    label: 'What are you actually building?',
    because:
      'MIT reports that 60% of organisations evaluated custom or vendor-sold enterprise tools, 20% reached a pilot, and 5% reached production. General-purpose tools cross into real use far more often. Building bespoke puts you in the harder distribution.',
    sourceId: 'mit-nanda',
    options: [
      { value: 'offshelf', label: 'Buying a general-purpose tool people use as-is', weight: 0 },
      { value: 'configured', label: 'Configuring an off-the-shelf product', weight: 1 },
      { value: 'wrapper', label: 'Custom software built on top of a vendor API', weight: 2 },
      { value: 'bespoke', label: 'A bespoke system embedded in our core systems', weight: 3 },
    ],
  },
  {
    id: 'costcap',
    label: 'Is there a hard spending cap, and does a named person get alerted when it is approached?',
    because:
      'Gartner names escalating costs among the reasons it forecasts over 40% of agentic AI projects will be cancelled. One practitioner reported an unsupervised agent cron job spending $24.88 in two days with no cost guards and no human review.',
    sourceId: 'gartner-agentic',
    options: [
      { value: 'capped', label: 'Hard cap, automated alerting, and someone whose job it is to watch', weight: 0 },
      { value: 'cap', label: 'A cap is set, but nothing alerts anyone', weight: 1 },
      { value: 'monthly', label: 'We look at the bill each month', weight: 2 },
      { value: 'none', label: 'No cap. Usage is whatever it turns out to be', weight: 3 },
    ],
  },
];

export const FAILURE_MODES: FailureMode[] = [
  {
    id: 'no-metric',
    name: 'You will not be able to prove it worked',
    symptom:
      'Without a baseline number captured before launch, there is no way to demonstrate a change afterwards. The project gets judged on anecdote and vibe, which is a fight it loses the first time budgets tighten.',
    remedy:
      'Before you write any code, write down one number as it stands today and the date you measured it. If nobody will commit to a number, that is the finding, and it is cheaper to learn it now.',
    sourceId: 'ibm-ceo',
    triggeredBy: ['metric', 'production'],
  },
  {
    id: 'pilot-hell',
    name: 'It works in the demo and dies on the way to production',
    symptom:
      'The proof of concept impresses everyone, then meets procurement, security review, integration and an unfunded roadmap. This is the single most forecast failure mode in the field, and it happens after the part everyone celebrates.',
    remedy:
      'Fund the production path before you fund the pilot, or run no pilot. Name the person who owns the transition and the budget line it comes from.',
    sourceId: 'gartner-poc',
    triggeredBy: ['production', 'ownership'],
  },
  {
    id: 'data-debt',
    name: 'The data problem surfaces halfway through',
    symptom:
      'Work stalls once someone actually opens the data: it lives in a system nobody controls, or its quality was never checked. Poor data quality is the first cause Gartner names.',
    remedy:
      'Spend one day querying the real data before you commit a budget. If the team cannot reach it in a day, the project is a data project wearing an AI costume, and it should be scoped as one.',
    sourceId: 'gartner-poc',
    triggeredBy: ['data'],
  },
  {
    id: 'mandate',
    name: 'It was built for a mandate, not a problem',
    symptom:
      'A project that begins with "we need an AI strategy" rather than "this specific thing is broken" has no natural stopping condition and no definition of success. RAND names misunderstanding or miscommunicating the problem as the first of its five root causes, and separately warns against focusing on the technology rather than on real problems for the intended users.',
    remedy:
      'Write the problem statement without the words AI, model, or agent. If the sentence still describes something worth fixing, you have a project. If it does not, you have a mandate.',
    sourceId: 'rand-leadership',
    triggeredBy: ['origin', 'metric'],
  },
  {
    id: 'unowned',
    name: 'Nobody owns it, so nobody fixes it',
    symptom:
      'A committee cannot notice that quality has drifted, and a steering group cannot be paged at 2am. Systems without a single accountable owner degrade quietly, and the degradation is discovered by users.',
    remedy:
      'Name one person with the authority to change the system and the budget to do it. Not a team, not a forum. One name, written down, before launch.',
    sourceId: 'rand-leadership',
    triggeredBy: ['ownership', 'origin'],
  },
  {
    id: 'adoption',
    name: 'Adoption never comes, because it asks people to change',
    symptom:
      'Tools that slot into work people already do get used. Tools that require a new habit, a new tab, and a training session get opened once. MIT\'s report separates these two cases sharply, and most of the failure sits in the second.',
    remedy:
      'Put it inside the thing they already open. If it needs its own launch plan, its own login and its own training, treat adoption as the project rather than an afterthought.',
    sourceId: 'mit-nanda',
    triggeredBy: ['workflow'],
  },
  {
    id: 'bespoke',
    name: 'You have chosen the hardest available path',
    symptom:
      'In MIT\'s report, 60% of organisations evaluated custom or vendor-sold enterprise tools, 20% reached a pilot, and 5% reached production. General-purpose tools do markedly better. Building bespoke is not neutral, it is a decision to enter the harder distribution.',
    remedy:
      'Try to fail to solve it with an off-the-shelf tool for two weeks first. Genuinely try. Building becomes defensible only once you can name what the off-the-shelf option cannot do.',
    sourceId: 'mit-nanda',
    triggeredBy: ['buildtype', 'workflow'],
  },
  {
    id: 'cost-runaway',
    name: 'Costs run without a brake',
    symptom:
      'Token and compute spend is not like a licence fee. It scales with usage, with retries, and with loops nobody intended. Escalating cost is one of the three reasons Gartner gives for its agentic cancellation forecast.',
    remedy:
      'Set a hard cap at the provider before the first deployment, wire an alert to a person rather than a dashboard, and cap per-run spend as well as per-month.',
    sourceId: 'gartner-agentic',
    triggeredBy: ['costcap', 'buildtype'],
  },
];

export const BANDS = [
  {
    id: 'low',
    label: 'Few of the documented risk factors are present',
    min: 0,
    tone: 'success' as const,
    verdict:
      'Your answers avoid most of the conditions the studies associate with failure. That is worth something, and it is not a prediction of success. The studies below measured populations, not your project.',
  },
  {
    id: 'elevated',
    label: 'Some documented risk factors are present',
    min: 25,
    tone: 'warn' as const,
    verdict:
      'A handful of the conditions that recur in the research are present here. None of them is fatal on its own, and each has a specific, cheap thing you can do about it before you spend money.',
  },
  {
    id: 'high',
    label: 'Many documented risk factors are present',
    min: 50,
    tone: 'danger' as const,
    verdict:
      'Your project carries most of the conditions that the studies below associate with abandoned proofs of concept and unrealised value. The good news is that the fixes are organisational and mostly free. Do them before you write code.',
  },
  {
    id: 'severe',
    label: 'Nearly every documented risk factor is present',
    min: 75,
    tone: 'danger' as const,
    verdict:
      'On these answers the project has no named metric, no clear owner, no route to production, or no cost control, in some combination. This is the shape of the projects that make up the failure statistics. Stopping to fix the organisational conditions is not a delay, it is the work.',
  },
];
