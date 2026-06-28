import Gauge from './Gauge.jsx'
import RadarChart from './RadarChart.jsx'
import PillButton from './PillButton.jsx'
import { Lock } from './icons.jsx'

export default function TeaserResult({ result, onUnlock }) {
  return (
    <div className="fade-in">
      <span className="eyebrow">התוצאה שלכם מוכנה</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>
        הציון שלכם: <span className="accent">{result.overall}/100</span> — {result.band.label}
      </h3>
      <p className="lead" style={{ maxWidth: 560 }}>{result.band.blurb}</p>

      <div className="sc-teaser" style={{ marginTop: 18 }}>
        <div className="center">
          <Gauge score={result.overall} band={result.band.label} />
        </div>

        <div className="sc-locked">
          <RadarChart pillars={result.pillars} size={320} blurred />
          <div className="sc-lock-overlay">
            <div>
              <div className="lk"><Lock /></div>
              <strong style={{ display: 'block', fontSize: 16 }}>הפירוט שלכם ב-5 ממדים</strong>
              <span style={{ color: 'var(--navy-55)', fontSize: 14 }}>שחררו כדי לראות את החוליה החלשה</span>
            </div>
          </div>
        </div>
      </div>

      <div className="center" style={{ marginTop: 30 }}>
        <PillButton size="lg" onClick={onUnlock}>שחררו את הפירוט המלא ותוכנית הפעולה</PillButton>
      </div>
    </div>
  )
}
