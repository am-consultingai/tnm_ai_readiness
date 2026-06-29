// Language-independent scorecard structure (weights, order, mapping).
// Translatable text (pillar names, questions, options, bands, recs) lives in i18n.jsx.
export const PILLAR_ORDER = ['business', 'data', 'infra', 'people', 'security']

export const PILLAR_META = {
  business: { weight: 15, icon: 'target' },
  data:     { weight: 25, icon: 'data' },
  infra:    { weight: 15, icon: 'network' },
  people:   { weight: 15, icon: 'people' },
  security: { weight: 30, icon: 'shield' },
}

// question id → pillar (order matches the questions array in each language)
export const QUESTION_META = [
  { id: 'q1', pillar: 'business' },
  { id: 'q2', pillar: 'data' },
  { id: 'q3', pillar: 'data' },
  { id: 'q4', pillar: 'infra' },
  { id: 'q5', pillar: 'people' },
  { id: 'q6', pillar: 'security' },
  { id: 'q7', pillar: 'security' },
  { id: 'q8', pillar: 'security' },
]

export const BAND_RANGES = [
  { min: 0, max: 20 }, { min: 21, max: 40 }, { min: 41, max: 60 }, { min: 61, max: 80 }, { min: 81, max: 100 },
]
