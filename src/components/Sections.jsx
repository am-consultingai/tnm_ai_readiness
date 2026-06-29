import { useState } from 'react'
import PillButton from './PillButton.jsx'
import { ArrowRight, Calendar, Shield } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'

export function Credibility() {
  const t = useT().cred
  return (
    <section className="section" id="about">
      <div className="container cred-grid">
        <div className="reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lead">{t.lead}</p>
          <div className="trust-bar">
            {t.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
        <div className="card" style={{ padding: 30 }}>
          <div className="cred-card reveal d1">
            <div className="cred-avatar"><Shield style={{ width: 34, height: 34 }} /></div>
            <div>
              <h3 style={{ fontSize: 22, marginBottom: 4 }}>{t.cardTitle}</h3>
              <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--red)' }}>{t.cardRole}</p>
              <p style={{ fontSize: 15 }}>{t.cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const t = useT().faq
  const [open, setOpen] = useState(0)
  return (
    <section className="section surface-pale" id="faq">
      <div className="container">
        <div className="center reveal" style={{ marginBottom: 24 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>{t.eyebrow}</span>
          <h2 className="h-section">{t.title}</h2>
        </div>
        <div className="faq">
          {t.items.map((f, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}<span className="pm">{open === i ? '–' : '+'}</span>
              </button>
              <div className={`faq-a ${open === i ? 'open' : ''}`}><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ClosingCTA() {
  const t = useT().closing
  return (
    <section className="section" id="book">
      <div className="container">
        <div className="cta-band surface-navy reveal">
          <span className="eyebrow" style={{ justifyContent: 'center', color: '#fff' }}>{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p style={{ maxWidth: 580, margin: '0 auto 28px' }}>{t.text}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PillButton as="a" href={BOOK_URL} variant="secondary" size="lg" icon={Calendar}>{t.book}</PillButton>
            <PillButton as="a" href="#scorecard" variant="ghost" size="lg" icon={ArrowRight} className="on-navy">{t.scorecard}</PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const t = useT().footer
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <h3>{t.title}</h3>
        <p>{t.sub}</p>
        <div className="footer-cta__btns">
          <PillButton as="a" href={BOOK_URL} size="lg" icon={Calendar}>{t.book}</PillButton>
          <PillButton as="a" href="#scorecard" size="lg" variant="ghost" icon={ArrowRight}>{t.scorecard}</PillButton>
        </div>
      </div>
    </footer>
  )
}
