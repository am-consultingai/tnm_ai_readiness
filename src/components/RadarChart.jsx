import { PILLARS, PILLAR_ORDER } from '../data/questions.js'

// Pure-SVG pentagon radar of the 5 pillar scores (0..100). Supports a blurred/locked state.
export default function RadarChart({ pillars, size = 360, blurred = false }) {
  const cx = size / 2, cy = size / 2, R = size / 2 - 54
  const n = PILLAR_ORDER.length
  const angleFor = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n
  const point = (i, frac) => [cx + R * frac * Math.cos(angleFor(i)), cy + R * frac * Math.sin(angleFor(i))]

  const rings = [0.25, 0.5, 0.75, 1]
  const polygon = (frac) => PILLAR_ORDER.map((_, i) => point(i, frac).join(',')).join(' ')
  const dataPoly = PILLAR_ORDER.map((k, i) => point(i, (pillars?.[k] ?? 0) / 100).join(',')).join(' ')

  return (
    <svg viewBox={`-40 0 ${size + 80} ${size}`} width="100%"
         style={{ filter: blurred ? 'blur(7px)' : 'none', opacity: blurred ? 0.65 : 1, transition: 'filter .4s, opacity .4s' }}>
      {/* grid */}
      {rings.map((f, i) => (
        <polygon key={i} points={polygon(f)} fill={i === rings.length - 1 ? 'rgba(230,236,246,0.35)' : 'none'} stroke="rgba(27,33,61,0.12)" strokeWidth="1" />
      ))}
      {PILLAR_ORDER.map((_, i) => {
        const [x, y] = point(i, 1)
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(27,33,61,0.10)" strokeWidth="1" />
      })}
      {/* data shape */}
      <polygon points={dataPoly} fill="rgba(226,19,19,0.16)" stroke="#E21313" strokeWidth="2.5" strokeLinejoin="round" />
      {PILLAR_ORDER.map((k, i) => {
        const [x, y] = point(i, (pillars?.[k] ?? 0) / 100)
        return <circle key={k} cx={x} cy={y} r="4.5" fill="#E21313" stroke="#fff" strokeWidth="2" />
      })}
      {/* labels */}
      {PILLAR_ORDER.map((k, i) => {
        const [x, y] = point(i, 1.2)
        const anchor = Math.abs(x - cx) < 8 ? 'middle' : x > cx ? 'start' : 'end'
        return (
          <text key={k} x={x} y={y} textAnchor={anchor} dominantBaseline="middle"
                fontSize="13" fontWeight="700" fill="#1B213D">
            {PILLARS[k].short}
            <tspan x={x} dy="15" fontSize="12" fontWeight="800" fill="#E21313">{pillars?.[k] ?? 0}</tspan>
          </text>
        )
      })}
    </svg>
  )
}
