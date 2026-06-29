import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'

// Persistent CTA bar — always visible at the bottom of the viewport.
export default function StickyCta() {
  const t = useT().sticky
  return (
    <div className="sticky-cta" role="complementary" aria-label="Call to action">
      <div className="container sticky-cta__inner">
        <p className="sticky-cta__text">
          <strong>{t.strong}</strong>{t.text}
        </p>
        <div className="sticky-cta__btns">
          <a className="sticky-cta__link" href="#scorecard">{t.link}</a>
          <PillButton as="a" href={BOOK_URL} variant="secondary" icon={Calendar}>{t.book}</PillButton>
        </div>
      </div>
    </div>
  )
}
