import RadarChart from './RadarChart.jsx'
import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { PILLARS, PILLAR_ORDER } from '../data/questions.js'
import { topGaps } from '../lib/scoring.js'
import { BOOK_URL } from '../config.js'

export default function FullReport({ result, lead }) {
  const gaps = topGaps(result.pillars)
  const first = lead?.name?.split(' ')[0]

  return (
    <div className="fade-in">
      <span className="eyebrow">הדוח המלא שלכם{first ? ` · ל${first}` : ''}</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>
        {result.overall}/100 — <span className="accent">{result.band.label}</span>
      </h3>

      <div className="sc-report-grid" style={{ marginTop: 14 }}>
        <div>
          <div className="sc-bars">
            {PILLAR_ORDER.map((k) => (
              <div className="sc-bar-row" key={k}>
                <span>{PILLARS[k].short}</span>
                <span className="sc-bar-track"><span className="sc-bar-fill" style={{ width: `${result.pillars[k]}%` }} /></span>
                <span style={{ textAlign: 'start', color: 'var(--red)' }}>{result.pillars[k]}</span>
              </div>
            ))}
          </div>

          <h4 style={{ marginTop: 30, fontSize: 18 }}>3 הפערים שכדאי לסגור קודם</h4>
          <div className="sc-gaps">
            {gaps.map((g, i) => (
              <div className="sc-gap" key={g.key}>
                <h4><span>{i + 1}. {g.name}</span><span className="gs">{g.score}/100</span></h4>
                <p>{g.rec}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="card" style={{ padding: 18 }}>
            <RadarChart pillars={result.pillars} size={360} />
          </div>
          <div className="card surface-navy" style={{ padding: 26, marginTop: 18 }}>
            <h4 style={{ color: '#fff', fontSize: 20 }}>הפכו את הציון לתוכנית</h4>
            <p>קבעו שיחה חינמית של 20 דקות עם מומחה AI עוד היום. נעבור על הפערים ועל הדרך המהירה והבטוחה ביותר לניצחון ה-AI הראשון שלכם.</p>
            <PillButton variant="secondary" as="a" href={BOOK_URL} size="lg" icon={Calendar}>קבעו שיחה עם מומחה AI</PillButton>
          </div>
          <p style={{ fontSize: 13, color: 'var(--navy-55)', marginTop: 14 }}>
            עותק של הדוח{lead?.email ? ` בדרך אל ${lead.email}` : ' נשלח אליכם במייל'}.
          </p>
        </div>
      </div>
    </div>
  )
}
