import { useEffect, useState } from 'react'
import { useT } from '../i18n.jsx'

// Semicircular animated gauge, 0..100.
export default function Gauge({ score = 0, band = '', size = 260 }) {
  const outOf = useT().teaser.outOf
  const [val, setVal] = useState(0)
  useEffect(() => {
    let raf, start
    const dur = 1100
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(score * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [score])

  const w = size, h = size * 0.62, cx = w / 2, cy = h, r = w / 2 - 16
  const a0 = Math.PI, a1 = 0 // 180° -> 0°
  const polar = (ang) => [cx + r * Math.cos(ang), cy + r * Math.sin(-1 * (Math.PI - ang) + Math.PI)]
  // simpler: map value to angle along top semicircle
  const ang = (v) => Math.PI - (v / 100) * Math.PI
  const pt = (v) => [cx + r * Math.cos(ang(v)), cy - r * Math.sin(ang(v))]
  const arc = (from, to) => {
    const [x1, y1] = pt(from), [x2, y2] = pt(to)
    const large = (to - from) > 50 ? 1 : 0
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`
  }
  const [nx, ny] = pt(val)

  return (
    <div style={{ width: w, maxWidth: '100%' }}>
      <svg viewBox={`0 0 ${w} ${h + 8}`} width="100%">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E21313" />
            <stop offset="0.55" stopColor="#f0a000" />
            <stop offset="1" stopColor="#1B213D" />
          </linearGradient>
        </defs>
        <path d={arc(0, 100)} stroke="#E6ECF6" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d={arc(0, Math.max(val, 0.5))} stroke="url(#gaugeGrad)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <circle cx={nx} cy={ny} r="9" fill="#fff" stroke="#1B213D" strokeWidth="3" />
        <text x={cx} y={cy - 30} textAnchor="middle" fontSize={size * 0.26} fontWeight="800" fill="#1B213D">{val}</text>
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="14" fill="rgba(27,33,61,0.55)">{outOf}</text>
      </svg>
      {band && (
        <div className="center" style={{ marginTop: 6 }}>
          <span className="tag" style={{ background: '#fff', fontSize: 15, fontWeight: 800, color: '#1B213D' }}>{band}</span>
        </div>
      )}
    </div>
  )
}
