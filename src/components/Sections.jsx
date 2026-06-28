import { useState } from 'react'
import PillButton from './PillButton.jsx'
import { ArrowRight, Calendar, Shield } from './icons.jsx'
import { BOOK_URL } from '../config.js'

/* ---------------- אמינות / השותפות ---------------- */
export function Credibility() {
  return (
    <section className="section" id="about">
      <div className="container cred-grid">
        <div className="reveal">
          <span className="eyebrow">השותפות שמאחורי זה</span>
          <h2 className="h-section">האמון של קבוצת T&amp;M, נפגש עם מומחיות AI עמוקה.</h2>
          <p className="lead">
            קבוצת T&amp;M היא מקבוצות האבטחה והשירותים המובילות בישראל, שאלפי ארגונים סומכים עליה כדי להגן
            על מה שחשוב. תוכנית מוכנות ה-AI הזו משלבת את האמון הזה עם מומחיות AI מעשית ומעמיקה —
            כך שתקבלו הערכה כנה ומסלול ברור, לא מצגת מכירה.
          </p>
          <div className="trust-bar">
            <span className="tag">מגובה בקבוצת T&amp;M</span>
            <span className="tag">מתודולוגיה ממוקדת-אבטחה</span>
            <span className="tag">ניטרלי לספקים</span>
            <span className="tag">הנתונים שלכם נשארים פרטיים</span>
          </div>
        </div>
        <div className="card" style={{ padding: 30 }}>
          <div className="cred-card reveal d1">
            <div className="cred-avatar"><Shield style={{ width: 34, height: 34 }} /></div>
            <div>
              <h3 style={{ fontSize: 22, marginBottom: 4 }}>גישה ממוקדת-אבטחה</h3>
              <p style={{ marginBottom: 12, fontWeight: 600, color: 'var(--red)' }}>מומחיות AI מעשית, גיבוי של T&amp;M</p>
              <p style={{ fontSize: 15 }}>
                אנחנו מסייעים לארגונים עתירי-נכסים שאינם הייטק להפוך את הנתונים שהם כבר אוספים לתוצאות AI
                בטוחות ומדידות — החל מהפערים שבאמת חוסמים את המעבר לייצור.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- שאלות נפוצות — על תהליך המוכנות ל-AI ---------------- */
const FAQS = [
  {
    q: 'האם זה לא מוקדם מדי לאמץ AI?',
    a: 'להפך — AI כבר מזמן אינו ניסוי: 88% מהארגונים כבר משתמשים בו, ו-74% מעובדי השטח מדי שבוע. מי שמתחיל עכשיו, על בסיס נכון, מצטרף למובילים; מי שממתין, הפער רק מתרחב. תהליך מובנה הופך את „מתי” ל„איך”.',
  },
  {
    q: 'מה כולל תהליך המוכנות ל-AI?',
    a: 'התהליך ממפה היכן אתם עומדים על פני חמישה ממדים — אסטרטגיה, נתונים, תשתית, אנשים ואבטחה — מזהה את הפערים שחוסמים החזר, ובונה מסלול מדורג וברור לעבר הניצחון הראשון. בלי מהפכות: צעדים מעשיים, בקצב שמתאים לכם.',
  },
  {
    q: 'אנחנו לא חברת „הייטק”. זה רלוונטי לנו?',
    a: 'במיוחד לכם. חלק גדול מהערך של AI היום נמצא דווקא בתעשייה ובתפעול עתיר-נכסים — לא בהייטק. אתם כבר אוספים נתונים מחיישנים וממכשירים מחוברים; התהליך פשוט הופך אותם ליתרון. אין צורך בצוות דאטה-סיינס כדי להתחיל.',
  },
  {
    q: 'רוב פרויקטי ה-AI נכשלים — למה שאצלנו זה יהיה אחרת?',
    a: 'נכון ש-56% מהמנכ״לים מדווחים שעדיין לא ראו תועלת — אך הסיבה כמעט תמיד אינה ה-AI אלא הבסיס. ארגונים עם בסיס איתן נוטים פי 3 לראות החזר אמיתי. תהליך מוכנות בונה בדיוק את הבסיס הזה, ולכן זה המסלול הבטוח קדימה.',
  },
  {
    q: 'מאיפה מתחילים, וכמה זמן זה לוקח?',
    a: 'מתחילים מהבנת התמונה — תוך זמן קצר ובלי הפרעה לתפעול. משם בונים תוכנית מדורגת: ניצחון ראשון מהיר וברור, ואז הרחבה מאובטחת. אין צורך להמר על הכול בבת אחת — כל צעד נשען על הקודם ומפחית סיכון.',
  },
]
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section surface-pale" id="faq">
      <div className="container">
        <div className="center reveal" style={{ marginBottom: 24 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>שאלות</span>
          <h2 className="h-section">שאלות טובות, עם תשובות</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => (
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

/* ---------------- קריאה לפעולה מסכמת + פוטר ---------------- */
export function ClosingCTA() {
  return (
    <section className="section" id="book">
      <div className="container">
        <div className="cta-band surface-navy reveal">
          <span className="eyebrow" style={{ justifyContent: 'center', color: '#fff' }}>אל תיתנו לפער להתרחב</span>
          <h2>קבעו שיחה עם מומחה AI — עוד היום.</h2>
          <p style={{ maxWidth: 580, margin: '0 auto 28px' }}>
            שיחה חינמית של 20 דקות עם מומחה AI. נאתר מאיפה להתחיל, איך לעשות זאת בבטחה, ואת הדרך המהירה
            ביותר לניצחון AI אמיתי — על בסיס המתודולוגיה המהימנה של קבוצת T&amp;M. בלי מצגת, בלי התחייבות.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PillButton as="a" href={BOOK_URL} variant="secondary" size="lg" icon={Calendar}>קבעו לי שיחה עם מומחה AI</PillButton>
            <PillButton as="a" href="#scorecard" variant="ghost" size="lg" icon={ArrowRight} className="on-navy">או מלאו את השאלון בן 4 הדקות</PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <h3>אל תיתנו לפער להתרחב.</h3>
        <p>קבלו את ציון המוכנות החינמי שלכם — או דברו עם מומחה עוד היום.</p>
        <div className="footer-cta__btns">
          <PillButton as="a" href={BOOK_URL} size="lg" icon={Calendar}>קבעו שיחה עם מומחה AI</PillButton>
          <PillButton as="a" href="#scorecard" size="lg" variant="ghost" icon={ArrowRight}>מלאו את השאלון</PillButton>
        </div>
      </div>
    </footer>
  )
}
