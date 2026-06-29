import { PILLAR_ORDER, PILLAR_META, QUESTION_META, BAND_RANGES } from '../data/quiz.js'

export function bandIndexFor(score) {
  const i = BAND_RANGES.findIndex(b => score >= b.min && score <= b.max)
  return i < 0 ? 0 : i
}

// answers: { [questionId]: 1..5 }  →  numbers only (text comes from i18n)
export function computeScores(answers) {
  const raw = {}
  PILLAR_ORDER.forEach(k => { raw[k] = [] })
  QUESTION_META.forEach(q => { const v = answers[q.id]; if (v) raw[q.pillar].push(v) })

  const pillars = {}
  PILLAR_ORDER.forEach(k => {
    const a = raw[k]
    pillars[k] = a.length ? Math.round((a.reduce((x, y) => x + y, 0) / a.length) * 20) : 0
  })

  let total = 0, wsum = 0
  PILLAR_ORDER.forEach(k => { total += pillars[k] * PILLAR_META[k].weight; wsum += PILLAR_META[k].weight })
  const overall = Math.round(total / wsum)

  return { overall, pillars, bandIndex: bandIndexFor(overall) }
}

export function levelFor(score) { return score <= 40 ? 'low' : score <= 70 ? 'mid' : 'high' }

// lowest-scoring pillars (Security nudged so it tends to surface)
export function topGaps(pillars, n = 3) {
  const order = [...PILLAR_ORDER].sort((a, b) =>
    (pillars[a] - PILLAR_META[a].weight * 0.05) - (pillars[b] - PILLAR_META[b].weight * 0.05))
  return order.slice(0, n).map(key => ({ key, score: pillars[key], level: levelFor(pillars[key]) }))
}
