import { useT } from '../i18n.jsx'

const H = ['30%', '46%', '63%', '81%', '100%']

export default function MaturityStairs() {
  const t = useT().stairs
  return (
    <div className="card value-card maturity">
      <h3>{t.title}</h3>
      <p>{t.sub}</p>

      <div className="stairs-head"><span className="stairs-axis">{t.axis}</span></div>
      <div className="stairs" role="img" aria-label={t.ariaLabel}>
        {t.levels.map((lv, i) => (
          <div className={`stair ${i === 4 ? 'top' : ''}`} key={i} style={{ '--h': H[i] }}>
            <div className="stair-bar"><span className="stair-num">{i + 1}</span></div>
            <div className="stair-label"><b>{lv.t}</b><span>{lv.d}</span></div>
          </div>
        ))}
      </div>

      <p className="kicker">{t.kicker}</p>
    </div>
  )
}
