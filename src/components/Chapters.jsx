import PillButton from './PillButton.jsx'
import CountUp from './CountUp.jsx'
import MaturityStairs from './MaturityStairs.jsx'
import { ArrowRight, Calendar } from './icons.jsx'
import { BOOK_URL } from '../config.js'

// כל פרק עוקב אחר אותו מקצב:
//   אמירה שיוצרת דחיפות → שאלה לקורא → גיבוי במספר מסקר → ערך שמושך הלאה → קריאה לפעולה
const CHAPTERS = [
  {
    id: 'ch-momentum', theme: 'מומנטום',
    statement: 'המתחרים שלכם כבר לא מתנסים. הם פועלים.',
    question: 'מתי לאחרונה העברתם שיפור מבוסס AI לסביבת ייצור — ברבעון הזה, או שזה עדיין “על המפה”?',
    stat: { value: '88%', text: 'מהארגונים כבר משתמשים ב-AI, ו-74% מעובדי השטח משתמשים בו מדי שבוע.', source: 'McKinsey · State of AI 2025 · BCG · AI at Work 2026' },
    value: {
      title: 'מה באמת מבדיל את מובילי ה-AI',
      intro: 'זה לא התקציב. בכל המחקרים, החברות שפורצות קדימה חולקות שלושה הרגלים:',
      items: [
        { t: 'מתחילים מבעיה כואבת אחת', d: 'לא מהטכנולוגיה. מקרה שימוש מדיד אחד עם אחראי.' },
        { t: 'בונים בסיס נתונים מאובטח קודם', d: 'ורק אז מרחיבים — במקום להלביש AI על כאוס.' },
        { t: 'ההנהלה לוקחת בעלות', d: 'מובילי AI נוטים פי 3 לבעלות מנהיגותית.' },
      ],
      kicker: 'הפער בין המובילים לכל השאר מצטבר בכל רבעון.',
    },
    cta: { label: 'גלו איפה אתם עומדים — תוך 4 דקות', href: '#scorecard', icon: 'arrow' },
  },
  {
    id: 'ch-data', theme: 'הנתונים שלכם',
    statement: 'הנתונים שלכם הם הנכס היקר ביותר — וכנראה גם המבוזבז ביותר.',
    question: 'אם היינו מבקשים מחר 12 חודשי נתונים תפעוליים נקיים — הצוות שלכם היה יכול לספק אותם?',
    stat: { value: 'רק 25%', text: 'מהארגונים העבירו אפילו 40% מהפיילוטים של ה-AI לסביבת ייצור — מוכנות הנתונים היא החסם הנפוץ, לא המודל.', source: 'Deloitte · State of AI in the Enterprise 2026' },
    value: { kind: 'stairs' },
    cta: { label: 'בדקו את מוכנות הנתונים שלכם', href: '#scorecard', icon: 'arrow' },
  },
  {
    id: 'ch-usecase', theme: 'החזר על AI',
    statement: 'להוציא כסף על AI זה קל. להחזיר עליו — שם רוב הארגונים נתקעים.',
    question: 'תוכלו לנקוב בבעיה האחת שבה AI יחזיר את עצמו הכי מהר בתפעול שלכם — כבר היום?',
    stat: { value: '56%', text: 'מהמנכ״לים אומרים ש-AI עוד לא הניב תועלת. לבעלי בסיס איתן יש סיכוי גבוה פי 3 לראות החזר אמיתי.', source: 'PwC · 29th Global CEO Survey 2026' },
    value: {
      title: '3 שאלות שחושפות את מקרה השימוש הראשון בעל ההחזר הגבוה',
      intro: 'המקום הטוב ביותר להתחיל בו נמצא היכן שכל השלושה נפגשים:',
      items: [
        { t: 'היכן השבתות לא מתוכננות או בזבוז עולים לכם הכי הרבה?' },
        { t: 'היכן אנשי מקצוע מבלים שעות בשיקול דעת חוזר?' },
        { t: 'איזו החלטה הייתם מקבלים אחרת עם נתונים בזמן אמת?' },
      ],
      kicker: 'התחילו שם — מקרה שימוש אחד, מדיד, עם אחראי. לא פרויקט מחקר.',
    },
    cta: { label: 'מצאו את מקרה השימוש הראשון — דברו עם מומחה', href: BOOK_URL, icon: 'cal' },
  },
  {
    id: 'ch-security', theme: 'אבטחה ואמון',
    statement: 'AI מכפיל את כל מה שהוא נוגע בו — כולל הסיכונים שלכם.',
    question: 'אם סוכן AI היה פועל הלילה על הנתונים התפעוליים שלכם — הייתם יודעים מה הוא עשה, והייתם יכולים לעצור אותו?',
    stat: { value: 'רק 21%', text: 'מהארגונים בעלי מודל ממשל בוגר ל-AI. הסוכנים מתרחבים מהר יותר מהבקרות שאמורות לרסן אותם.', source: 'Deloitte · State of AI in the Enterprise 2026' },
    value: {
      title: '4 בקרות שכדאי להטמיע לפני ש-AI עולה לאוויר',
      items: [
        { t: 'ראו כל מכשיר מחובר', d: 'אי אפשר לאבטח — או להפעיל AI בבטחה — על מה שלא רואים.' },
        { t: 'שלטו בגישה לנתונים התפעוליים', d: 'החליטו מי, ומה, יכול לקרוא ולפעול עליהם.' },
        { t: 'נטרו בזמן אמת', d: 'זהו והכילו חריגות לפני שהן מתפשטות.' },
        { t: 'נהלו כיצד AI משתמש בנתונים', d: 'הגדירו את הכללים, ובקרו מולם.' },
      ],
      kicker: 'כאן בדיוק ה-DNA האבטחתי של קבוצת T&M הופך ליתרון הבלתי-הוגן שלכם.',
    },
    cta: { label: 'קבעו סקירת AI ממוקדת-אבטחה', href: BOOK_URL, icon: 'cal' },
  },
  {
    id: 'ch-people', theme: 'האנשים שלכם',
    statement: 'הטכנולוגיה מוכנה. השאלה האמיתית היא אם האנשים שלכם מוכנים.',
    question: 'האם המפעילים והמנהלים שלכם מושיטים יד לכלי AI — או עוקפים אותם בשקט?',
    stat: { value: '8 שעות', text: 'בשבוע נחסכות ל-42% מהמשתמשים הקבועים ב-AI — שווה ערך ליום עבודה שלם שחוזר לצוות.', source: 'BCG · AI at Work 2026' },
    value: {
      title: 'כך מובילי AI בונים מומנטום אמיתי',
      items: [
        { t: 'התחילו מהצלחה גלויה אחת', d: 'תוצאות מנצחות מצגות. תנו לתוצאה למכור את הצעד הבא.' },
        { t: 'תנו כלים לידיים של המפעילים', d: 'לא רק לאנליסטים. האימוץ קורה ברצפת הייצור.' },
        { t: 'הפכו את הנתונים לאמינים', d: 'אנשים בוטחים בפלט רק כשהם בוטחים בקלט.' },
      ],
      kicker: 'מומנטום הוא בחירה. ככל שמחכים יותר, כך קשה יותר להדביק את הפער.',
    },
    cta: { label: 'קבלו את ציון המוכנות שלכם', href: '#scorecard', icon: 'arrow' },
  },
]

function Chapter({ ch, index }) {
  const flip = index % 2 === 1
  return (
    <section className={`section chapter ${index % 2 ? 'surface-pale' : ''}`} id={ch.id}>
      <div className="container chapter-grid">
        <div className="chapter-main reveal">
          <span className="eyebrow">{String(index + 1).padStart(2, '0')} · {ch.theme}</span>
          <h2 className="h-section">{ch.statement}</h2>
          <div className="ask">
            <span className="ask-label">שאלו את עצמכם</span>
            <p>{ch.question}</p>
          </div>
          <div className="evidence">
            <b><CountUp>{ch.stat.value}</CountUp></b>
            <span>{ch.stat.text}</span>
            <em>{ch.stat.source}</em>
          </div>
          <div className="chapter-cta">
            <PillButton as="a" href={ch.cta.href} size="lg" icon={ch.cta.icon === 'cal' ? Calendar : ArrowRight}>
              {ch.cta.label}
            </PillButton>
            {ch.cta.href === BOOK_URL
              ? <PillButton as="a" href="#scorecard" variant="ghost" icon={ArrowRight}>מלאו את השאלון</PillButton>
              : <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Calendar}>קבעו שיחה</PillButton>}
          </div>
        </div>

        <div className={`chapter-value reveal d1 ${flip ? 'flip' : ''}`}>
          {ch.value.kind === 'stairs' ? (
            <MaturityStairs />
          ) : (
            <div className="value-card card">
              <h3>{ch.value.title}</h3>
              {ch.value.intro && <p>{ch.value.intro}</p>}
              <ol className="ladder">
                {ch.value.items.map((it, i) => (
                  <li key={i}>
                    <span className="lvl">{i + 1}</span>
                    <div><b>{it.t}</b>{it.d && <span>{it.d}</span>}</div>
                  </li>
                ))}
              </ol>
              {ch.value.kicker && <p className="kicker">{ch.value.kicker}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Chapters() {
  return <>{CHAPTERS.map((ch, i) => <Chapter key={ch.id} ch={ch} index={i} />)}</>
}
