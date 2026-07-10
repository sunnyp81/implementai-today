export const SITE = {
  domain: 'implementai.today',
  url: 'https://implementai.today',
  brand: 'implementai.today',
  tagline: 'The research vendors quote but never show.',
  description:
    'implementai.today is an independent UK publication that reads the primary research on enterprise AI adoption and failure, quotes its named sources with visible methodology and sample sizes, and builds free interactive diagnostics, without selling consultancy, AI tools, or proprietary data of its own.',
  /** Standing disclosure. Appears on /about and in every article footer. */
  disclosure:
    'We have run no surveys and delivered no AI projects. Our authority is that we read the primary research and show our working.',
  author: {
    name: 'Sunny Patel',
    url: 'https://sunnypatel.co.uk',
    jobTitle: 'SEO consultant and software developer',
    // GitHub is the load-bearing proof of the only expertise this site claims:
    // that its author builds and ships software. Verified 2026-07-10.
    // MANUAL: add LinkedIn once Sunny confirms the canonical URL.
    sameAs: ['https://sunnypatel.co.uk', 'https://github.com/sunnyp81'] as string[],
  },
} as const;

export const NAV = [
  { href: '/why-ai-projects-fail', label: 'Why projects fail' },
  { href: '/ai-project-failure-rate', label: 'Failure rate' },
  { href: '/ai-implementation-cost', label: 'Cost' },
  { href: '/ai-implementation-checklist', label: 'Checklist' },
  { href: '/ai-adoption-statistics', label: 'Adoption stats' },
] as const;

export const orgId = `${SITE.url}/#organization`;
export const personId = `${SITE.url}/#sunny-patel`;
export const websiteId = `${SITE.url}/#website`;

/** Identity graph. Declared once on the homepage, referenced by @id elsewhere. */
export function identityGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE.brand,
      url: SITE.url,
      description: SITE.description,
      founder: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: SITE.author.name,
      url: SITE.author.url,
      jobTitle: SITE.author.jobTitle,
      knowsAbout: [
        'AI implementation',
        'AI project failure',
        'Generative AI adoption',
        'Enterprise AI readiness',
      ],
      sameAs: SITE.author.sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE.url,
      name: SITE.brand,
      publisher: { '@id': orgId },
    },
  ];
}

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path}`,
    })),
  };
}

export function faqPage(qa: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
