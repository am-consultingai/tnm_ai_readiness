import { useMemo, useRef, useState } from 'react'
import './scorecard.css'
import { QUESTIONS, PILLARS } from '../data/questions.js'
import { computeScores } from '../lib/scoring.js'
import { PILLAR_ICONS, ArrowRight, Calendar } from './icons.jsx'
import PillButton from './PillButton.jsx'
import { BOOK_URL } from '../config.js'
import TeaserResult from './TeaserResult.jsx'
import LeadForm from './LeadForm.jsx'
import FullReport from './FullReport.jsx'

const PREVIEW = ['business', 'data', 'infra', 'people', 'security']

export default function Scorecard() {
  const [stage, setStage] = useState('intro') // intro | quiz | teaser | form | report
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [lead, setLead] = useState(null)
  const cardRef = useRef(null)

  const result = useMemo(() => computeScores(answers), [answers])
  const total = QUESTIONS.length
  const q = QUESTIONS[idx]

  const scrollTop = () => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const pick = (val) => {
    setAnswers((a) => ({ ...a, [q.id]: val }))
    setTimeout(() => {
      if (idx + 1 < total) { setIdx(idx + 1) }
      else { setStage('teaser'); scrollTop() }
    }, 230)
  }

  const progress = stage === 'quiz'
    ? Math.round(((idx + (answers[q?.id] ? 1 : 0)) / total) * 100)
    : stage === 'intro' ? 0 : 100

  return (
    <section className="section surface-pale" id="scorecard">
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="center reveal" style={{ marginBottom: 30 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>השאלון</span>
          <h2 className="h-section">גלו את ציון המוכנות שלכם ל-AI תוך 4 דקות</h2>
        </div>

        <div className="sc-card sc-anchor" ref={cardRef}>
          {/* progress bar (hidden on intro) */}
          {stage !== 'intro' && (
            <div className="sc-top">
              <div className="sc-progress"><span style={{ width: `${progress}%` }} /></div>
              <span className="sc-count">
                {stage === 'quiz' ? `שאלה ${idx + 1} / ${total}` : stage === 'teaser' ? 'תוצאה' : stage === 'form' ? 'כמעט סיימנו' : 'הושלם'}
              </span>
            </div>
          )}

          <div className="sc-body">
            {/* INTRO */}
            {stage === 'intro' && (
              <div className="fade-in">
                <span className="sc-q-pill"><span className="dot" /> 8 שאלות · 4 דקות · חינם</span>
                <h3 className="sc-question">5 ממדים קובעים אם AI יעבוד בתפעול שלכם — או ייתקע.</h3>
                <p className="sc-help" style={{ fontSize: 16 }}>
                  ענו בכנות. תקבלו ציון מיידי, ואז פירוט מלא שמראה בדיוק מאיפה להתחיל —
                  כולל עד כמה המכשירים המחוברים שלכם מאובטחים.
                </p>
                <div className="sc-pillars">
                  {PREVIEW.map((k) => {
                    const Icon = PILLAR_ICONS[PILLARS[k].icon]
                    return (
                      <div className={`sc-pillar ${k === 'security' ? 'security' : ''}`} key={k}>
                        <div className="ic"><Icon style={{ width: 22, height: 22 }} /></div>
                        <b>{PILLARS[k].short}</b>
                      </div>
                    )
                  })}
                </div>
                <div className="sc-nav" style={{ paddingTop: 0 }}>
                  <span style={{ fontSize: 13, color: 'var(--navy-55)' }}>ללא עלות · ללא התחייבות</span>
                  <PillButton size="lg" icon={ArrowRight} onClick={() => { setStage('quiz'); scrollTop() }}>
                    התחילו את השאלון
                  </PillButton>
                </div>
              </div>
            )}

            {/* QUIZ */}
            {stage === 'quiz' && q && (
              <div className="fade-in" key={q.id}>
                <span className="sc-q-pill"><span className="dot" /> {PILLARS[q.pillar].name}</span>
                <h3 className="sc-question">{q.text}</h3>
                {q.help && <p className="sc-help">{q.help}</p>}
                <div className="sc-options">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      className={`sc-option ${answers[q.id] === i + 1 ? 'selected' : ''}`}
                      onClick={() => pick(i + 1)}
                    >
                      <span className="num">{i + 1}</span>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
                <div className="sc-nav">
                  <button className="sc-back" disabled={idx === 0} onClick={() => setIdx(Math.max(0, idx - 1))}>חזרה →</button>
                  <span style={{ fontSize: 13, color: 'var(--navy-55)' }}>בחרו את האפשרות שמתאימה ביותר</span>
                </div>
              </div>
            )}

            {/* TEASER */}
            {stage === 'teaser' && (
              <TeaserResult result={result} onUnlock={() => { setStage('form'); scrollTop() }} />
            )}

            {/* FORM */}
            {stage === 'form' && (
              <LeadForm onSubmit={(data) => { setLead(data); setStage('report'); scrollTop() }} />
            )}

            {/* REPORT */}
            {stage === 'report' && (
              <FullReport result={result} lead={lead} />
            )}
          </div>
        </div>

        <div className="sc-talk">
          <span>מעדיפים לדבר על זה קודם?</span>
          <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Calendar}>קבעו שיחה עם מומחה AI</PillButton>
        </div>
      </div>
    </section>
  )
}
