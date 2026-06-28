import { useState } from 'react'
import Logo from './Logo.jsx'
import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'

const LINKS = [
  { href: '#ch-momentum', label: 'למה עכשיו' },
  { href: '#ch-security', label: 'אבטחה' },
  { href: '#scorecard', label: 'השאלון' },
  { href: '#faq', label: 'שאלות נפוצות' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-brand">
          <Logo height={28} />
          <span className="nav-partner">מוכנות ל-AI · <b>קבוצת T&M</b></span>
        </div>

        <nav className="nav-links">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav-right">
          <PillButton as="a" href={BOOK_URL} icon={Calendar}>קבעו שיחה</PillButton>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            aria-label="תפריט"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" onClick={() => setOpen(false)}>
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a className="nav-mobile__cta" href={BOOK_URL}>קבעו שיחה עם מומחה AI</a>
        </nav>
      )}
    </header>
  )
}
