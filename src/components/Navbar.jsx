import { useState } from 'react'
import Logo from './Logo.jsx'
import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import { useT, useLang } from '../i18n.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useT()
  const { lang, setLang } = useLang()
  const toggleLang = () => setLang(lang === 'he' ? 'en' : 'he')

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-brand">
          <Logo height={28} />
          <span className="nav-partner">{t.nav.partner}</span>
        </div>

        <nav className="nav-links">
          {t.nav.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav-right">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language / החלפת שפה">
            {t.nav.switch}
          </button>
          <PillButton as="a" href={BOOK_URL} icon={Calendar}>{t.nav.book}</PillButton>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" onClick={() => setOpen(false)}>
          {t.nav.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a className="nav-mobile__cta" href={BOOK_URL}>{t.nav.bookExpert}</a>
        </nav>
      )}
    </header>
  )
}
