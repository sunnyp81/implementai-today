/**
 * The citation corpus is the site's product. Every statistic rendered anywhere
 * must resolve to a Source here. If a field is unknown it stays `null` and the
 * UI prints "not stated in accessible sources". Never substitute a plausible value.
 */

export type Verification =
  /** Primary source read directly and the figure matches its wording. */
  | 'verified'
  /** Real, but a prediction, a range, or disputed between sources. Read the range, not the headline. */
  | 'contested'
  /** Primary blocks automated retrieval (403). Read via proxy or a named credible secondary. */
  | 'blocked';

export interface Source {
  id: string;
  /** Publishing organisation, as it should appear in the chip. */
  org: string;
  /** Full name of the study or report. */
  title: string;
  year: number;
  /** The figure exactly as the source words it. Never paraphrase upward in precision. */
  metric: string;
  /** Sample, e.g. "2,000 CEOs". null when the source does not state one publicly. */
  sample: string | null;
  /** One short token: "survey", "research report", "prediction", "national statistics". */
  method: string;
  /** Canonical primary URL, even when it returns 403. */
  url: string;
  /** A readable secondary that quotes the figure, when the primary is blocked. */
  secondaryUrl?: string;
  /** Short note shown in the chip, e.g. "rand.org returns 403 to automated readers". */
  access?: string;
  status: Verification;
  /** ISO date this figure was last checked against its source. */
  lastVerified: string;
  /**
   * How the figure is commonly misquoted, and what the source actually says.
   * This is the site's original contribution: a provenance audit, not a survey.
   * Only populate where the drift was verified against the primary text.
   */
  drift?: {
    /** The claim as it circulates. */
    circulates: string;
    /** What the source actually supports. */
    actually: string;
  };
}

export type RiskBand = 'low' | 'elevated' | 'high' | 'severe';

export interface DiagnosticQuestion {
  id: string;
  /** The question as the user reads it. */
  label: string;
  /** Why this question exists: the study that measured this factor. */
  because: string;
  /** Source id backing `because`. */
  sourceId: string;
  options: { value: string; label: string; weight: number }[];
}

export interface FailureMode {
  id: string;
  name: string;
  /** What goes wrong, in practitioner language. */
  symptom: string;
  /** The concrete next step. */
  remedy: string;
  sourceId: string;
  /** Question ids whose risky answers trigger this mode. */
  triggeredBy: string[];
}
