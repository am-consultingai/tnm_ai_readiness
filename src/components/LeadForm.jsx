import { useState } from 'react'
import PillButton from './PillButton.jsx'
import { Shield } from './icons.jsx'

const ROLES = [
  'בחרו את התפקיד שלכם…',
  'בעלים / מנכ״ל / מנהל כללי',
  'סמנכ״ל תפעול / סמנכ״ל',
  'מנהל מפעל / אתר / תפעול',
  'מנהל IT / OT / אבטחה',
  'ראש הנדסה / אחזקה',
  'אחר',
]

export default function LeadForm({ onSubmit }) {
  const [v, setV] = useState({ name: '', role: '', email: '', phone: '' })
  const [err, setErr] = useState({})
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (!v.name.trim()) e.name = 'נא להזין שם'
    if (!v.role || v.role === ROLES[0]) e.role = 'נא לבחור תפקיד'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = 'נא להזין אימייל תקין'
    if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'נא להזין מספר טלפון תקין'
    setErr(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSending(true)
    // TODO: לשלוח ל-CRM / אימייל של T&M. בדמו: נפתר אחרי רגע.
    setTimeout(() => { setSending(false); onSubmit(v) }, 500)
  }

  return (
    <div>
      <span className="eyebrow">שלב 2 מתוך 2 — שחררו את הדוח</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(24px,3vw,36px)' }}>
        לאן לשלוח את <span className="accent">דוח המוכנות המלא שלכם?</span>
      </h3>
      <p className="lead" style={{ maxWidth: 520 }}>
        הפירוט המלא של 5 הממדים, הפערים המרכזיים והצעד המומלץ — על המסך וכקובץ PDF.
      </p>

      <form className="sc-form" onSubmit={submit} noValidate>
        <div className="sc-field">
          <label htmlFor="lf-name">שם מלא</label>
          <input id="lf-name" value={v.name} onChange={set('name')} placeholder="ישראל ישראלי" autoComplete="name" />
          {err.name && <span className="err">{err.name}</span>}
        </div>
        <div className="sc-field">
          <label htmlFor="lf-role">התפקיד שלכם</label>
          <select id="lf-role" value={v.role} onChange={set('role')}>
            {ROLES.map((r) => <option key={r} disabled={r === ROLES[0]} value={r === ROLES[0] ? '' : r}>{r}</option>)}
          </select>
          {err.role && <span className="err">{err.role}</span>}
        </div>
        <div className="sc-grid-2">
          <div className="sc-field">
            <label htmlFor="lf-email">אימייל בעבודה</label>
            <input id="lf-email" type="email" value={v.email} onChange={set('email')} placeholder="israel@company.co.il" autoComplete="email" />
            {err.email && <span className="err">{err.email}</span>}
          </div>
          <div className="sc-field">
            <label htmlFor="lf-phone">טלפון</label>
            <input id="lf-phone" type="tel" value={v.phone} onChange={set('phone')} placeholder="050-000-0000" autoComplete="tel" />
            {err.phone && <span className="err">{err.phone}</span>}
          </div>
        </div>

        <div style={{ marginTop: 6 }}>
          <PillButton type="submit" size="lg" disabled={sending}>
            {sending ? 'משחררים…' : 'קבלו את הדוח המלא'}
          </PillButton>
        </div>

        <div className="sc-reassure">
          <Shield />
          <span>נבדק על-ידי מומחה AI של T&amp;M. בלי ספאם — רק שיחה אחת שתעבור אתכם על התוצאות.</span>
        </div>
      </form>
    </div>
  )
}
