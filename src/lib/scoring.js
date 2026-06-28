import { PILLARS, PILLAR_ORDER, QUESTIONS } from '../data/questions.js'

export const BANDS = [
  { min: 0,  max: 20,  label: 'מנותקים',   blurb: 'בסיס הנתונים והבקרות ל-AI עדיין לא במקום — אבל זו נקודת התחלה ברורה וניתנת לתיקון.' },
  { min: 21, max: 40,  label: 'מודעים',    blurb: 'אתם רואים את ההזדמנות. הצעד הבא הוא להפוך נתונים ומכשירים מפוזרים לבסיס מנוהל.' },
  { min: 41, max: 60,  label: 'בוחנים',    blurb: 'אבני בניין אמיתיות כבר קיימות. סגרו כמה פערים — בדרך כלל גישה לנתונים ואבטחת מכשירים — ומקרה שימוש ראשון הופך לריאלי.' },
  { min: 61, max: 80,  label: 'בונים',     blurb: 'אתם באמת בדרך. עם הבקרות הנכונות אפשר להעביר פיילוט לסביבת ייצור בבטחה.' },
  { min: 81, max: 100, label: 'מוכנים ל-AI', blurb: 'בסיס איתן בכל הממדים. כעת המיקוד הוא בהרחבה מאובטחת ובמימוש ההחזר.' },
]

export function bandFor(score) {
  return BANDS.find(b => score >= b.min && score <= b.max) || BANDS[0]
}

// answers: { [questionId]: 1..5 }
export function computeScores(answers) {
  const perPillarRaw = {}
  for (const key of PILLAR_ORDER) perPillarRaw[key] = []
  for (const q of QUESTIONS) {
    const v = answers[q.id]
    if (v) perPillarRaw[q.pillar].push(v)
  }
  const pillars = {}
  for (const key of PILLAR_ORDER) {
    const arr = perPillarRaw[key]
    pillars[key] = arr.length ? Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 20) : 0
  }
  let total = 0, wsum = 0
  for (const key of PILLAR_ORDER) {
    const w = PILLARS[key].weight
    total += pillars[key] * w
    wsum += w
  }
  const overall = Math.round(total / wsum)
  return { overall, pillars, band: bandFor(overall) }
}

// טקסט המלצה לפי עמוד (pillar) ורמה (low / mid / high)
const RECS = {
  security: {
    low:  'התחילו בגילוי נכסים: אי אפשר להגן — או להפעיל בבטחה AI — על מכשירים שלא רואים. קבוצת T&M יכולה למפות ולאבטח כל מכשיר מחובר לפני ש-AI נוגע בתפעול שלכם.',
    mid:  'יש לכם נראות חלקית. הדקו מצאי מכשירים, ניטור וכללי גישה כך שהטמעת AI לא תרחיב את משטח התקיפה.',
    high: 'מצב אבטחה חזק. פרמלו ממשל גישה ייעודי ל-AI כדי שמודלים יוכלו להשתמש בנתונים תפעוליים ללא סיכון חדש.',
  },
  data: {
    low:  'הנתונים שלכם עדיין כלואים במכונות ובגיליונות. ריכוז וניקוי של נתוני חיישנים/ייצור הם הצעד בעל המינוף הגבוה ביותר לכל מקרה שימוש.',
    mid:  'הנתונים נגישים חלקית. סגרו את הפערים בכיסוי ובאיכות כדי שמודל יוכל באמת להסתמך עליהם.',
    high: 'בסיס הנתונים שלכם איתן — יתרון אמיתי. הוא מוכן להזין מקרה שימוש ראשון בסביבת ייצור.',
  },
  infra: {
    low:  'OT ו-IT מנותקים ברובם. בניית גשר בטוח מרצפת הייצור לענן היא תנאי מקדים ל-AI — וצעד רגיש לאבטחה שכדאי לעשות נכון.',
    mid:  'קיים שילוב מסוים. הרחבת קישוריות מהקצה לענן תשחרר AI בזמן אמת.',
    high: 'תשתית משולבת היטב. אתם יכולים לתמוך ב-AI בזמן אמת, מהקצה לענן, כבר היום.',
  },
  business: {
    low:  'אין עדיין מקרה שימוש ממוקד. סדנת גילוי קצרה תאתר את הבעיה האחת שבה AI יחזיר את עצמו הכי מהר.',
    mid:  'יש לכם כיוון. נעלו מקרה שימוש ראשון אחד, מדיד, עם אחראי ויעד.',
    high: 'מקרה שימוש ברור ובבעלות — בדיוק מה שמפחית את הסיכון בהשקעה ב-AI.',
  },
  people: {
    low:  'אמון נמוך בכלים אוטומטיים יעצור אימוץ. הצלחות מוקדמות ומעורבות המפעילים חשובות לא פחות מהטכנולוגיה.',
    mid:  'הפתיחות גוברת. טפחו חלוצים ותנו לצוותים הצלחות מוקדמות וגלויות.',
    high: 'תרבות מבוססת-נתונים — סיכון האימוץ שלכם נמוך.',
  },
}

function level(score) { return score <= 40 ? 'low' : score <= 70 ? 'mid' : 'high' }

// הפערים העיקריים = העמודים בעלי הציון הנמוך ביותר (עם הטיה קלה כך שאבטחה תצוף)
export function topGaps(pillars, n = 3) {
  const order = [...PILLAR_ORDER].sort((a, b) => {
    const sa = pillars[a] - PILLARS[a].weight * 0.05
    const sb = pillars[b] - PILLARS[b].weight * 0.05
    return sa - sb
  })
  return order.slice(0, n).map(key => ({
    key,
    name: PILLARS[key].name,
    score: pillars[key],
    rec: RECS[key][level(pillars[key])],
  }))
}
