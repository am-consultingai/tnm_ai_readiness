import RadarChart from './RadarChart.jsx'
import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { PILLAR_ORDER } from '../data/quiz.js'
import { topGaps } from '../lib/scoring.js'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'

export default function FullReport({ result, lead }) {
  const T = useT()
  const t = T.report
  const band = T.bands[result.bandIndex]
  const gaps = topGaps(result.pillars)
  const first = lead?.name?.trim()?.split(' ')[0]

  return (
    <div className="fade-in">
      <span className="eyebrow">{t.eyebrow}{first ? t.forName(first) : ''}</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>
        {result.overall}/100 — <span className="accent">{band.label}</span>
      </h3>

      <div className="sc-report-grid" style={{ marginTop: 14 }}>
        <div>
          <div className="sc-bars">
            {PILLAR_ORDER.map((k) => (
              <div className="sc-bar-row" key={k}>
                <span>{T.pillars[k].short}</span>
                <span className="sc-bar-track"><span className="sc-bar-fill" style={{ width: `${result.pillars[k]}%` }} /></span>
                <span style={{ textAlign: 'start', color: 'var(--red)' }}>{result.pillars[k]}</span>
              </div>
            ))}
          </div>

          <h4 style={{ marginTop: 30, fontSize: 18 }}>{t.gaps}</h4>
          <div className="sc-gaps">
            {gaps.map((g, i) => (
              <div className="sc-gap" key={g.key}>
                <h4><span>{i + 1}. {T.pillars[g.key].name}</span><span className="gs">{g.score}/100</span></h4>
                <p>{T.recs[g.key][g.level]}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="card" style={{ padding: 18 }}>
            <RadarChart pillars={result.pillars} size={360} />
          </div>
          <div className="card surface-navy" style={{ padding: 26, marginTop: 18 }}>
            <h4 style={{ color: '#fff', fontSize: 20 }}>{t.planTitle}</h4>
            <p>{t.planText}</p>
            <PillButton variant="secondary" as="a" href={BOOK_URL} size="lg" icon={Calendar}>{t.planCta}</PillButton>
          </div>
          <p style={{ fontSize: 13, color: 'var(--navy-55)', marginTop: 14 }}>{t.sent(lead?.email)}</p>
        </div>
      </div>
    </div>
  )
}
