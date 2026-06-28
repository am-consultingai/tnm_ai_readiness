// אינפוגרפיקת "מדרגות" עולה ל-5 רמות בשלות הנתונים — הדרך המקובלת להציג מודלי בשלות.
// העמודות עולות בעת הגלילה לתצוגה.
const LEVELS = [
  { t: 'כלוא', d: 'במכונות ובנייר', h: '30%' },
  { t: 'מפוזר', d: 'בין מערכות שונות', h: '46%' },
  { t: 'מרוכז', d: 'במקום אחד לתשאול', h: '63%' },
  { t: 'נקי ומנוהל', d: 'אמין ובעל בקרת גישה', h: '81%' },
  { t: 'מוכן ל-AI', d: 'בזמן אמת, מוכן למודלים', h: '100%' },
]

export default function MaturityStairs() {
  return (
    <div className="card value-card maturity">
      <h3>5 רמות בשלות הנתונים</h3>
      <p>אתרו את הרמה הכנה שלכם — AI צריך אתכם ברמה&nbsp;4 ומעלה.</p>

      <div className="stairs-head"><span className="stairs-axis">▲ מוכנים יותר ל-AI</span></div>
      <div className="stairs" role="img" aria-label="מדרגות עולות מרמה 1 כלוא עד רמה 5 מוכן ל-AI">
        {LEVELS.map((lv, i) => (
          <div className={`stair ${i === 4 ? 'top' : ''}`} key={i} style={{ '--h': lv.h }}>
            <div className="stair-bar"><span className="stair-num">{i + 1}</span></div>
            <div className="stair-label"><b>{lv.t}</b><span>{lv.d}</span></div>
          </div>
        ))}
      </div>

      <p className="kicker">רוב הארגונים נמצאים ברמה&nbsp;2. לעלות מעלה זה פרויקט, לא נס.</p>
    </div>
  )
}
