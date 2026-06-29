import PillButton from './PillButton.jsx'
import CountUp from './CountUp.jsx'
import { ArrowRight, Phone } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'
import heroImg from '../assets/hero-exec-screens.jpg'

export default function Hero() {
  const t = useT().hero
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal in">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.h1pre}<span className="accent">{t.h1accent}</span></h1>
          <p className="lead">
            {t.lead1}<em>{t.leadEm}</em>{t.lead2}<b>{t.leadBold}</b>{t.lead3}
          </p>
          <div className="hero-cta">
            <PillButton as="a" href="#scorecard" size="lg" icon={ArrowRight}>{t.ctaStart}</PillButton>
            <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Phone}>{t.ctaTalk}</PillButton>
          </div>
          <div className="hero-meta">
            {t.meta.map((m, i) => (
              <div className="m" key={i}><b>{i < 2 ? <CountUp>{m.b}</CountUp> : m.b}</b><span>{m.span}</span></div>
            ))}
          </div>
        </div>

        <div className="hero-art reveal in d1">
          <div className="hero-photo">
            <img src={heroImg} alt={t.imgAlt} loading="eager" />
            <div className="hero-photo__badge">
              <span className="dot" />
              {t.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
