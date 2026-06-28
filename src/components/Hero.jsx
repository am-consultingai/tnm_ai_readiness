import PillButton from './PillButton.jsx'
import CountUp from './CountUp.jsx'
import { ArrowRight, Phone } from './icons.jsx'
import { BOOK_URL } from '../config.js'
import heroImg from '../assets/hero-exec-screens.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal in">
          <span className="eyebrow">ליצרנים, חברות תשתית ותעשייה מבוססת IoT</span>
          {/* חתימת T&M: כותרת גדולה עם מילת מפתח אחת באדום */}
          <h1>
            בזמן שאתם שוקלים את האפשרויות, המתחרים שלכם כבר <span className="accent">מטמיעים AI.</span>
          </h1>
          <p className="lead">
            הפער מתרחב בכל רבעון. אז השאלה האמיתית היא לא <em>האם</em> לאמץ AI — אלא עד כמה אתם מוכנים
            לעשות זאת <b>בבטחה</b>, וכמה מהר תוכלו להתחיל. גלו תוך 4 דקות, או דברו עם מומחה AI עוד היום.
          </p>
          <div className="hero-cta">
            <PillButton as="a" href="#scorecard" size="lg" icon={ArrowRight}>התחילו את השאלון החינמי</PillButton>
            <PillButton as="a" href={BOOK_URL} variant="ghost" icon={Phone}>דברו עם מומחה AI</PillButton>
          </div>
          <div className="hero-meta">
            <div className="m"><b><CountUp>4 דקות</CountUp></b><span>להשלמה</span></div>
            <div className="m"><b><CountUp>5</CountUp></b><span>ממדי מוכנות</span></div>
            <div className="m"><b>חינם</b><span>ציון ודוח מיידיים</span></div>
          </div>
        </div>

        <div className="hero-art reveal in d1">
          <div className="hero-photo">
            <img src={heroImg} alt="מנהלים בכירים בוחנים דשבורדים של נתונים בזמן אמת ומקבלים החלטות" loading="eager" />
            <div className="hero-photo__badge">
              <span className="dot" />
              כשנתונים בזמן אמת הופכים להחלטות — בבטחה
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
