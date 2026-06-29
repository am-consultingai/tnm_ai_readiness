import { useState } from 'react'
import PillButton from './PillButton.jsx'
import { Shield } from './icons.jsx'
import { useT } from '../i18n.jsx'

export default function LeadForm({ onSubmit }) {
  const t = useT().lead
  const ROLES = t.roles
  const [v, setV] = useState({ name: '', role: '', email: '', phone: '' })
  const [err, setErr] = useState({})
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (!v.name.trim()) e.name = t.errName
    if (!v.role || v.role === ROLES[0]) e.role = t.errRole
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = t.errEmail
    if (v.phone.replace(/\D/g, '').length < 7) e.phone = t.errPhone
    setErr(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSending(true)
    // TODO: POST to T&M CRM / email endpoint. Demo: resolve after a tick.
    setTimeout(() => { setSending(false); onSubmit(v) }, 500)
  }

  return (
    <div>
      <span className="eyebrow">{t.step}</span>
      <h3 className="h-section" style={{ fontSize: 'clamp(24px,3vw,36px)' }}>
        {t.titlePre}<span className="accent">{t.titleAccent}</span>
      </h3>
      <p className="lead" style={{ maxWidth: 520 }}>{t.sub}</p>

      <form className="sc-form" onSubmit={submit} noValidate>
        <div className="sc-field">
          <label htmlFor="lf-name">{t.name}</label>
          <input id="lf-name" value={v.name} onChange={set('name')} placeholder={t.namePh} autoComplete="name" />
          {err.name && <span className="err">{err.name}</span>}
        </div>
        <div className="sc-field">
          <label htmlFor="lf-role">{t.role}</label>
          <select id="lf-role" value={v.role} onChange={set('role')}>
            {ROLES.map((r) => <option key={r} disabled={r === ROLES[0]} value={r === ROLES[0] ? '' : r}>{r}</option>)}
          </select>
          {err.role && <span className="err">{err.role}</span>}
        </div>
        <div className="sc-grid-2">
          <div className="sc-field">
            <label htmlFor="lf-email">{t.email}</label>
            <input id="lf-email" type="email" value={v.email} onChange={set('email')} placeholder={t.emailPh} autoComplete="email" />
            {err.email && <span className="err">{err.email}</span>}
          </div>
          <div className="sc-field">
            <label htmlFor="lf-phone">{t.phone}</label>
            <input id="lf-phone" type="tel" value={v.phone} onChange={set('phone')} placeholder={t.phonePh} autoComplete="tel" />
            {err.phone && <span className="err">{err.phone}</span>}
          </div>
        </div>

        <div style={{ marginTop: 6 }}>
          <PillButton type="submit" size="lg" disabled={sending}>
            {sending ? t.sending : t.submit}
          </PillButton>
        </div>

        <div className="sc-reassure">
          <Shield />
          <span>{t.reassure}</span>
        </div>
      </form>
    </div>
  )
}
