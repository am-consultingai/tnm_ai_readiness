import PillButton from './PillButton.jsx'
import CountUp from './CountUp.jsx'
import MaturityStairs from './MaturityStairs.jsx'
import { ArrowRight, Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'
import cncPhoto from '../assets/cnc-machine.jpg'
import cctvPhoto from '../assets/cctv-control.jpg'

// language-independent per-chapter wiring (order matches i18n chapters array)
const META = [
  { id: 'ch-momentum', photo: cncPhoto, href: '#scorecard', icon: 'arrow' },
  { id: 'ch-data', href: '#scorecard', icon: 'arrow' },
  { id: 'ch-usecase', href: BOOK_URL, icon: 'cal' },
  { id: 'ch-security', photo: cctvPhoto, href: BOOK_URL, icon: 'cal' },
  { id: 'ch-people', href: '#scorecard', icon: 'arrow' },
]

function Chapter({ ch, meta, index, common }) {
  const flip = index % 2 === 1
  return (
    <section className={`section chapter ${index % 2 ? 'surface-pale' : ''}`} id={meta.id}>
      {meta.photo && (
        <div className={`chapter-photo ${flip ? 'right' : 'left'}`} style={{ backgroundImage: `url(${meta.photo})` }} aria-hidden="true" />
      )}
      <div className="container chapter-grid">
        <div className="chapter-main reveal">
          <span className="eyebrow">{String(index + 1).padStart(2, '0')} · {ch.theme}</span>
          <h2 className="h-section">{ch.statement}</h2>
          <div className="ask">
            <span className="ask-label">{common.ask}</span>
            <p>{ch.question}</p>
          </div>
          <div className="evidence">
            <b><CountUp>{ch.stat.value}</CountUp></b>
            <span>{ch.stat.text}</span>
            <em>{ch.stat.source}</em>
          </div>
          <div className="chapter-cta">
            <PillButton as="a" href={meta.href} size="lg" icon={meta.icon === 'cal' ? Calendar : ArrowRight}>
              {ch.cta}
            </PillButton>
            {meta.href === BOOK_URL
              ? <PillButton as="a" href="#scorecard" variant="ghost" icon={ArrowRight}>{common.scorecard}</PillButton>
              : <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Calendar}>{common.book}</PillButton>}
          </div>
        </div>

        <div className={`chapter-value reveal d1 ${flip ? 'flip' : ''}`}>
          {ch.value.kind === 'stairs' ? (
            <MaturityStairs />
          ) : (
            <div className="value-card card">
              <h3>{ch.value.title}</h3>
              {ch.value.intro && <p>{ch.value.intro}</p>}
              <ol className="ladder">
                {ch.value.items.map((it, i) => (
                  <li key={i}>
                    <span className="lvl">{i + 1}</span>
                    <div><b>{it.t}</b>{it.d && <span>{it.d}</span>}</div>
                  </li>
                ))}
              </ol>
              {ch.value.kicker && <p className="kicker">{ch.value.kicker}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Chapters() {
  const t = useT()
  return <>{t.chapters.map((ch, i) => (
    <Chapter key={META[i].id} ch={ch} meta={META[i]} index={i} common={t.chapterCommon} />
  ))}</>
}
