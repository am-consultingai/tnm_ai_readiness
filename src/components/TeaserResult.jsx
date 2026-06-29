import Gauge from './Gauge.jsx'
import RadarChart from './RadarChart.jsx'
import PillButton from './PillButton.jsx'
import { Lock } from './icons.jsx'
import { useT } from '../i18n.jsx'

export default function TeaserResult({ result, onUnlock }) {
  const T = useT()
  const t = T.teaser
  const band = T.bands[result.bandIndex]
  return (
    <div className="fade-in">
      <span className="eyebrow">{t.ready}</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>
        {t.scorePre}<span className="accent">{result.overall}/100</span> — {band.label}
      </h3>
      <p className="lead" style={{ maxWidth: 560 }}>{band.blurb}</p>

      <div className="sc-teaser" style={{ marginTop: 18 }}>
        <div className="center">
          <Gauge score={result.overall} band={band.label} />
        </div>

        <div className="sc-locked">
          <RadarChart pillars={result.pillars} size={320} blurred />
          <div className="sc-lock-overlay">
            <div>
              <div className="lk"><Lock /></div>
              <strong style={{ display: 'block', fontSize: 16 }}>{t.lockTitle}</strong>
              <span style={{ color: 'var(--navy-55)', fontSize: 14 }}>{t.lockSub}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="center" style={{ marginTop: 30 }}>
        <PillButton size="lg" onClick={onUnlock}>{t.unlock}</PillButton>
      </div>
    </div>
  )
}
