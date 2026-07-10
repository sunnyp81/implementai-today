import type { APIRoute } from 'astro';
import { SOURCES } from '../../lib/sources';
import { SITE } from '../../lib/site';

/**
 * The Dataset distribution referenced by /ai-project-failure-rate.
 * This exists so that a machine can quote the reconciled figures with their
 * provenance intact, since most of the primary sources block automated readers.
 */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: 'AI project failure and adoption figures, reconciled to primary sources',
        description:
          'Every headline figure this site cites, with the exact wording of its source, its sample, its method, and where the commonly circulated version departs from the original. Compiled, not surveyed: implementai.today ran no research of its own.',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: SITE.brand,
        url: `${SITE.url}/ai-project-failure-rate`,
        lastVerified: '2026-07-10',
        caveat:
          'Figures are not comparable to one another. They count different units (projects, organisations, initiatives) and different definitions of failure. Two are analyst forecasts, not measurements. Read the `method` field before comparing any two rows.',
        sources: SOURCES.map((s) => ({
          org: s.org,
          title: s.title,
          year: s.year,
          figureAsSourceWordsIt: s.metric,
          sample: s.sample,
          method: s.method,
          status: s.status,
          accessNote: s.access ?? null,
          primaryUrl: s.url,
          commonlyMisquotedAs: s.drift?.circulates ?? null,
          whatTheSourceActuallySays: s.drift?.actually ?? null,
        })),
      },
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
