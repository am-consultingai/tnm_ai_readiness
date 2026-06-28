import PillButton from './PillButton.jsx'
import { Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'

// Persistent CTA bar — always visible at the bottom of the viewport.
export default function StickyCta() {
  return (
    <div className="sticky-cta" role="complementary" aria-label="Call to action">
      <div className="container sticky-cta__inner">
        <p className="sticky-cta__text">
          <strong>מוכנים לפעול על AI?</strong> קבלו ציון מוכנות חינמי — או דברו עם מומחה עוד היום.
        </p>
        <div className="sticky-cta__btns">
          <a className="sticky-cta__link" href="#scorecard">מלאו את השאלון</a>
          <PillButton as="a" href={BOOK_URL} variant="secondary" icon={Calendar}>קבעו שיחה</PillButton>
        </div>
      </div>
    </div>
  )
}
