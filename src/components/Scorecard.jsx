import { useMemo, useRef, useState } from 'react'
import './scorecard.css'
import { QUESTION_META, PILLAR_ORDER, PILLAR_META } from '../data/quiz.js'
import { computeScores } from '../lib/scoring.js'
import { PILLAR_ICONS, ArrowRight, Calendar } from './icons.jsx'
import PillButton from './PillButton.jsx'
import { BOOK_URL } from '../config.js'
import { useT } from '../i18n.jsx'
import TeaserResult from './TeaserResult.jsx'
import LeadForm from './LeadForm.jsx'
import FullReport from './FullReport.jsx'

export default function Scorecard() {
  const T = useT()
  const sc = T.scorecard
  const [stage, setStage] = useState('intro') // intro | quiz | teaser | form | report
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [lead, setLead] = useState(null)
  const cardRef = useRef(null)

  const result = useMemo(() => computeScores(answers), [answers])
  const total = QUESTION_META.length
  const meta = QUESTION_META[idx]
  const q = T.questions[idx]

  const scrollTop = () => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const pick = (val) => {
    setAnswers((a) => ({ ...a, [meta.id]: val }))
    setTimeout(() => {
      if (idx + 1 < total) { setIdx(idx + 1) }
      else { setStage('teaser'); scrollTop() }
    }, 230)
  }

  const progress = stage === 'quiz'
    ? Math.round(((idx + (answers[meta?.id] ? 1 : 0)) / total) * 100)
    : stage === 'intro' ? 0 : 100

  return (
    <section className="section surface-pale" id="scorecard">
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="center reveal" style={{ marginBottom: 30 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>{sc.eyebrow}</span>
          <h2 className="h-section">{sc.title}</h2>
        </div>

        <div className="sc-card sc-anchor" ref={cardRef}>
          {stage !== 'intro' && (
            <div className="sc-top">
              <div className="sc-progress"><span style={{ width: `${progress}%` }} /></div>
              <span className="sc-count">
                {stage === 'quiz' ? sc.question(idx + 1, total) : stage === 'teaser' ? sc.result : stage === 'form' ? sc.almost : sc.complete}
              </span>
            </div>
          )}

          <div className="sc-body">
            {stage === 'intro' && (
              <div className="fade-in">
                <span className="sc-q-pill"><span className="dot" /> {sc.qPill}</span>
                <h3 className="sc-question">{sc.introQ}</h3>
                <p className="sc-help" style={{ fontSize: 16 }}>{sc.introHelp}</p>
                <div className="sc-pillars">
                  {PILLAR_ORDER.map((k) => {
                    const Icon = PILLAR_ICONS[PILLAR_META[k].icon]
                    return (
                      <div className={`sc-pillar ${k === 'security' ? 'security' : ''}`} key={k}>
                        <div className="ic"><Icon style={{ width: 22, height: 22 }} /></div>
                        <b>{T.pillars[k].short}</b>
                      </div>
                    )
                  })}
                </div>
                <div className="sc-nav" style={{ paddingTop: 0 }}>
                  <span style={{ fontSize: 13, color: 'var(--navy-55)' }}>{sc.noObligation}</span>
                  <PillButton size="lg" icon={ArrowRight} onClick={() => { setStage('quiz'); scrollTop() }}>
                    {sc.start}
                  </PillButton>
                </div>
              </div>
            )}

            {stage === 'quiz' && q && (
              <div className="fade-in" key={meta.id}>
                <span className="sc-q-pill"><span className="dot" /> {T.pillars[meta.pillar].name}</span>
                <h3 className="sc-question">{q.text}</h3>
                {q.help && <p className="sc-help">{q.help}</p>}
                <div className="sc-options">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      className={`sc-option ${answers[meta.id] === i + 1 ? 'selected' : ''}`}
                      onClick={() => pick(i + 1)}
                    >
                      <span className="num">{i + 1}</span>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
                <div className="sc-nav">
                  <button className="sc-back" disabled={idx === 0} onClick={() => setIdx(Math.max(0, idx - 1))}>{sc.back}</button>
                  <span style={{ fontSize: 13, color: 'var(--navy-55)' }}>{sc.hint}</span>
                </div>
              </div>
            )}

            {stage === 'teaser' && (
              <TeaserResult result={result} onUnlock={() => { setStage('form'); scrollTop() }} />
            )}

            {stage === 'form' && (
              <LeadForm onSubmit={(data) => { setLead(data); setStage('report'); scrollTop() }} />
            )}

            {stage === 'report' && (
              <FullReport result={result} lead={lead} />
            )}
          </div>
        </div>

        <div className="sc-talk">
          <span>{sc.talk}</span>
          <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Calendar}>{T.nav.bookExpert}</PillButton>
        </div>
      </div>
    </section>
  )
}
