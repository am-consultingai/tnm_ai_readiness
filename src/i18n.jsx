import { createContext, useContext, useEffect, useState } from 'react'

/* ============================================================
   Translations — Hebrew (default) + English
   ============================================================ */
export const T = {
  he: {
    nav: {
      partner: 'מוכנות ל-AI · קבוצת T&M',
      links: [
        { href: '#ch-momentum', label: 'למה עכשיו' },
        { href: '#ch-security', label: 'אבטחה' },
        { href: '#scorecard', label: 'השאלון' },
        { href: '#faq', label: 'שאלות נפוצות' },
      ],
      book: 'קבעו שיחה',
      bookExpert: 'קבעו שיחה עם מומחה AI',
      scorecard: 'מלאו את השאלון',
      menu: 'תפריט',
      switch: 'EN',
    },
    hero: {
      eyebrow: 'ליצרנים, חברות תשתית ותעשייה מבוססת IoT',
      h1pre: 'בזמן שאתם שוקלים את האפשרויות, המתחרים שלכם כבר ',
      h1accent: 'מטמיעים AI.',
      lead1: 'הפער מתרחב בכל רבעון. אז השאלה האמיתית היא לא ',
      leadEm: 'האם',
      lead2: ' לאמץ AI — אלא עד כמה אתם מוכנים לעשות זאת ',
      leadBold: 'בבטחה',
      lead3: ', וכמה מהר תוכלו להתחיל. גלו תוך 4 דקות, או דברו עם מומחה AI עוד היום.',
      ctaStart: 'התחילו את השאלון החינמי',
      ctaTalk: 'דברו עם מומחה AI',
      badge: 'כשנתונים בזמן אמת הופכים להחלטות — בבטחה',
      imgAlt: 'מנהלים בכירים בוחנים דשבורדים של נתונים בזמן אמת ומקבלים החלטות',
      meta: [
        { b: '4 דקות', span: 'להשלמה' },
        { b: '5', span: 'ממדי מוכנות' },
        { b: 'חינם', span: 'ציון ודוח מיידיים' },
      ],
    },
    chapterCommon: { ask: 'שאלו את עצמכם', book: 'קבעו שיחה', scorecard: 'מלאו את השאלון' },
    chapters: [
      {
        statement: 'המתחרים שלכם כבר לא מתנסים. הם פועלים.',
        theme: 'מומנטום',
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
        cta: 'גלו איפה אתם עומדים — תוך 4 דקות',
      },
      {
        statement: 'הנתונים שלכם הם הנכס היקר ביותר — וכנראה גם המבוזבז ביותר.',
        theme: 'הנתונים שלכם',
        question: 'אם היינו מבקשים מחר 12 חודשי נתונים תפעוליים נקיים — הצוות שלכם היה יכול לספק אותם?',
        stat: { value: 'רק 25%', text: 'מהארגונים העבירו אפילו 40% מהפיילוטים של ה-AI לסביבת ייצור — מוכנות הנתונים היא החסם הנפוץ, לא המודל.', source: 'Deloitte · State of AI in the Enterprise 2026' },
        value: { kind: 'stairs' },
        cta: 'בדקו את מוכנות הנתונים שלכם',
      },
      {
        statement: 'להוציא כסף על AI זה קל. להחזיר עליו — שם רוב הארגונים נתקעים.',
        theme: 'החזר על AI',
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
        cta: 'מצאו את מקרה השימוש הראשון — דברו עם מומחה',
      },
      {
        statement: 'AI מכפיל את כל מה שהוא נוגע בו — כולל הסיכונים שלכם.',
        theme: 'אבטחה ואמון',
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
        cta: 'קבעו סקירת AI ממוקדת-אבטחה',
      },
      {
        statement: 'הטכנולוגיה מוכנה. השאלה האמיתית היא אם האנשים שלכם מוכנים.',
        theme: 'האנשים שלכם',
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
        cta: 'קבלו את ציון המוכנות שלכם',
      },
    ],
    stairs: {
      title: '5 רמות בשלות הנתונים',
      sub: 'אתרו את הרמה הכנה שלכם — AI צריך אתכם ברמה 4 ומעלה.',
      axis: '▲ מוכנים יותר ל-AI',
      ariaLabel: 'מדרגות עולות מרמה 1 כלוא עד רמה 5 מוכן ל-AI',
      levels: [
        { t: 'כלוא', d: 'במכונות ובנייר' },
        { t: 'מפוזר', d: 'בין מערכות שונות' },
        { t: 'מרוכז', d: 'במקום אחד לתשאול' },
        { t: 'נקי ומנוהל', d: 'אמין ובעל בקרת גישה' },
        { t: 'מוכן ל-AI', d: 'בזמן אמת, מוכן למודלים' },
      ],
      kicker: 'רוב הארגונים נמצאים ברמה 2. לעלות מעלה זה פרויקט, לא נס.',
    },
    pillars: {
      business: { name: 'בהירות עסקית ומקרה שימוש', short: 'מקרה שימוש' },
      data: { name: 'נתונים וקישוריות', short: 'נתונים' },
      infra: { name: 'תשתית ו-OT/IT', short: 'תשתית' },
      people: { name: 'אנשים ומוכנות לשינוי', short: 'אנשים' },
      security: { name: 'אבטחה, ממשל וסיכון', short: 'אבטחה' },
    },
    questions: [
      { text: 'באיזו בעיה תפעולית הייתם מכוונים את ה-AI קודם כול?', help: 'חשבו על השבתות, פגמי איכות, בזבוז אנרגיה או בטיחות.',
        options: ['עדיין אין לנו מושג', 'כמה רעיונות, שום דבר ממוקד', 'מקרה שימוש ברור אחד בראש', 'מקרה שימוש מאושר, עם תקציב ואחראי', 'AI כבר מניב ערך בו'] },
      { text: 'כמה מנתוני הציוד / החיישנים שלכם באמת נאספים ומאוחסנים במקום שמיש?', help: 'לא כלואים בתוך מכונות, יומני נייר או הראש של מפעיל אחד.',
        options: ['רובם על המכונות או על נייר — לא נאספים', 'חלקם נאסף, מפוזר בין מערכות', 'רוב הנכסים מזינים מערכת מרכזית', 'מרוכז ורובו נקי', 'בזמן אמת, נקי ומוכן לאנליטיקה'] },
      { text: 'אם היינו מבקשים מחר את 12 החודשים האחרונים של נתוני חיישנים / ייצור — כמה בקלות הייתם מספקים אותם?', help: '',
        options: ['לא היינו מצליחים', 'רק במאמץ ידני רב', 'חלקית — לחלק מהקווים או הנכסים', 'כן, עם קצת הכנה', 'מיידית, דרך מערכת או API'] },
      { text: 'האם מערכות רצפת הייצור / התפעול (OT) שלכם יכולות לשתף נתונים עם הענן או מערכות עסקיות כיום?', help: 'המסלול ממכשיר → נתון → החלטה.',
        options: ['לא — הן מבודדות או ידניות לגמרי', 'רק דרך ייצוא ידני', 'שילוב חלקי במקומות מסוימים', 'רוב המערכות מחוברות', 'משולב לחלוטין, מהקצה לענן'] },
      { text: 'איך המפעילים והמנהלים שלכם מרגישים לגבי כלים מבוססי-נתונים או אוטומציה?', help: '',
        options: ['מתנגדים — אמון נמוך', 'סקרנים אך לא בטוחים', 'פתוחים — יש לנו כמה חלוצים', 'משתמשים פעיל בחלק מהכלים', 'קבלת החלטות מבוססת-נתונים היא הנורמה'] },
      { text: 'האם יש לכם מיפוי מלא ומעודכן של כל מכשיר מחובר ברשת שלכם?', help: 'חיישנים, בקרים, מצלמות, שערים, מכונות.',
        options: ['אין מיפוי', 'רשימה גסה או חלקית', 'מתועד, אך כנראה לא מעודכן', 'מיפוי מתוחזק', 'מיפוי חי, מנוטר אוטומטית'] },
      { text: 'אם מכשיר מחובר ייפרץ — עד כמה אתם בטוחים שתזהו ותכילו זאת?', help: '',
        options: ['לא בטוחים — אולי לעולם לא נדע', 'כנראה נגלה בסופו של דבר', 'יש ניטור מסוים', 'ניטור פעיל + תוכנית תגובה', 'ניטור 24/7 עם תגובה מתורגלת'] },
      { text: 'האם יש כללים ברורים מי רשאי לגשת לנתונים התפעוליים וכיצד AI רשאי להשתמש בהם?', help: '',
        options: ['לא הוגדרו כללים', 'לא פורמלי / לא מתועד', 'קיימת מדיניות מסוימת', 'גישה וממשל נתונים מתועדים', 'ממשל נאכף, עם ביקורת'] },
    ],
    bands: [
      { label: 'מנותקים', blurb: 'בסיס הנתונים והבקרות ל-AI עדיין לא במקום — אבל זו נקודת התחלה ברורה וניתנת לתיקון.' },
      { label: 'מודעים', blurb: 'אתם רואים את ההזדמנות. הצעד הבא הוא להפוך נתונים ומכשירים מפוזרים לבסיס מנוהל.' },
      { label: 'בוחנים', blurb: 'אבני בניין אמיתיות כבר קיימות. סגרו כמה פערים — בדרך כלל גישה לנתונים ואבטחת מכשירים — ומקרה שימוש ראשון הופך לריאלי.' },
      { label: 'בונים', blurb: 'אתם באמת בדרך. עם הבקרות הנכונות אפשר להעביר פיילוט לסביבת ייצור בבטחה.' },
      { label: 'מוכנים ל-AI', blurb: 'בסיס איתן בכל הממדים. כעת המיקוד הוא בהרחבה מאובטחת ובמימוש ההחזר.' },
    ],
    recs: {
      security: { low: 'התחילו במיפוי נכסים: אי אפשר להגן — או להפעיל בבטחה AI — על מכשירים שלא רואים. קבוצת T&M יכולה למפות ולאבטח כל מכשיר מחובר לפני ש-AI נוגע בתפעול שלכם.', mid: 'יש לכם נראות חלקית. הדקו מיפוי מכשירים, ניטור וכללי גישה כך שהטמעת AI לא תרחיב את משטח התקיפה.', high: 'מצב אבטחה חזק. פרמלו ממשל גישה ייעודי ל-AI כדי שמודלים יוכלו להשתמש בנתונים תפעוליים ללא סיכון חדש.' },
      data: { low: 'הנתונים שלכם עדיין כלואים במכונות ובגיליונות. ריכוז וניקוי של נתוני חיישנים/ייצור הם הצעד בעל המינוף הגבוה ביותר לכל מקרה שימוש.', mid: 'הנתונים נגישים חלקית. סגרו את הפערים בכיסוי ובאיכות כדי שמודל יוכל באמת להסתמך עליהם.', high: 'בסיס הנתונים שלכם איתן — יתרון אמיתי. הוא מוכן להזין מקרה שימוש ראשון בסביבת ייצור.' },
      infra: { low: 'OT ו-IT מנותקים ברובם. בניית גשר בטוח מרצפת הייצור לענן היא תנאי מקדים ל-AI — וצעד רגיש לאבטחה שכדאי לעשות נכון.', mid: 'קיים שילוב מסוים. הרחבת קישוריות מהקצה לענן תשחרר AI בזמן אמת.', high: 'תשתית משולבת היטב. אתם יכולים לתמוך ב-AI בזמן אמת, מהקצה לענן, כבר היום.' },
      business: { low: 'אין עדיין מקרה שימוש ממוקד. סדנת גילוי קצרה תאתר את הבעיה האחת שבה AI יחזיר את עצמו הכי מהר.', mid: 'יש לכם כיוון. נעלו מקרה שימוש ראשון אחד, מדיד, עם אחראי ויעד.', high: 'מקרה שימוש ברור ובבעלות — בדיוק מה שמפחית את הסיכון בהשקעה ב-AI.' },
      people: { low: 'אמון נמוך בכלים אוטומטיים יעצור אימוץ. הצלחות מוקדמות ומעורבות המפעילים חשובות לא פחות מהטכנולוגיה.', mid: 'הפתיחות גוברת. טפחו חלוצים ותנו לצוותים הצלחות מוקדמות וגלויות.', high: 'תרבות מבוססת-נתונים — סיכון האימוץ שלכם נמוך.' },
    },
    scorecard: {
      eyebrow: 'השאלון', title: 'גלו את ציון המוכנות שלכם ל-AI תוך 4 דקות',
      qPill: '8 שאלות · 4 דקות · חינם',
      introQ: '5 ממדים קובעים אם AI יעבוד בתפעול שלכם — או ייתקע.',
      introHelp: 'ענו בכנות. תקבלו ציון מיידי, ואז פירוט מלא שמראה בדיוק מאיפה להתחיל — כולל עד כמה המכשירים המחוברים שלכם מאובטחים.',
      noObligation: 'ללא עלות · ללא התחייבות', start: 'התחילו את השאלון',
      back: 'חזרה →', hint: 'בחרו את האפשרות שמתאימה ביותר',
      question: (i, n) => `שאלה ${i} / ${n}`, result: 'תוצאה', almost: 'כמעט סיימנו', complete: 'הושלם',
      talk: 'מעדיפים לדבר על זה קודם?',
    },
    lead: {
      step: 'שלב 2 מתוך 2 — שחררו את הדוח',
      titlePre: 'לאן לשלוח את ', titleAccent: 'דוח המוכנות המלא שלכם?',
      sub: 'הפירוט המלא של 5 הממדים, הפערים המרכזיים והצעד המומלץ — על המסך וכקובץ PDF.',
      name: 'שם מלא', namePh: 'ישראל ישראלי', role: 'התפקיד שלכם',
      email: 'אימייל בעבודה', emailPh: 'israel@company.co.il', phone: 'טלפון', phonePh: '050-000-0000',
      roles: ['בחרו את התפקיד שלכם…', 'בעלים / מנכ״ל / מנהל כללי', 'סמנכ״ל תפעול / סמנכ״ל', 'מנהל מפעל / אתר / תפעול', 'מנהל IT / OT / אבטחה', 'ראש הנדסה / אחזקה', 'אחר'],
      submit: 'קבלו את הדוח המלא', sending: 'משחררים…',
      reassure: 'נבדק על-ידי מומחה AI של T&M. בלי ספאם — רק שיחה אחת שתעבור אתכם על התוצאות.',
      errName: 'נא להזין שם', errRole: 'נא לבחור תפקיד', errEmail: 'נא להזין אימייל תקין', errPhone: 'נא להזין מספר טלפון תקין',
    },
    teaser: {
      ready: 'התוצאה שלכם מוכנה', scorePre: 'הציון שלכם: ',
      lockTitle: 'הפירוט שלכם ב-5 ממדים', lockSub: 'שחררו כדי לראות את החוליה החלשה',
      unlock: 'שחררו את הפירוט המלא ותוכנית הפעולה', outOf: 'מתוך 100',
    },
    report: {
      eyebrow: 'הדוח המלא שלכם', forName: (n) => ` · ל${n}`,
      gaps: '3 הפערים שכדאי לסגור קודם',
      planTitle: 'הפכו את הציון לתוכנית',
      planText: 'קבעו שיחה חינמית של 20 דקות עם מומחה AI עוד היום. נעבור על הפערים ועל הדרך המהירה והבטוחה ביותר לניצחון ה-AI הראשון שלכם.',
      planCta: 'קבעו שיחה עם מומחה AI',
      sent: (e) => e ? `עותק של הדוח בדרך אל ${e}.` : 'עותק של הדוח נשלח אליכם במייל.',
    },
    cred: {
      eyebrow: 'השותפות שמאחורי זה', title: 'האמון של קבוצת T&M, נפגש עם מומחיות AI עמוקה.',
      lead: 'קבוצת T&M היא מקבוצות האבטחה והשירותים המובילות בישראל, שאלפי ארגונים סומכים עליה כדי להגן על מה שחשוב. תוכנית מוכנות ה-AI הזו משלבת את האמון הזה עם מומחיות AI מעשית ומעמיקה — כך שתקבלו הערכה כנה ומסלול ברור, לא מצגת מכירה.',
      tags: ['מגובה בקבוצת T&M', 'מתודולוגיה ממוקדת-אבטחה', 'ניטרלי לספקים', 'הנתונים שלכם נשארים פרטיים'],
      cardTitle: 'גישה ממוקדת-אבטחה', cardRole: 'מומחיות AI מעשית, גיבוי של T&M',
      cardText: 'אנחנו מסייעים לארגונים עתירי-נכסים שאינם הייטק להפוך את הנתונים שהם כבר אוספים לתוצאות AI בטוחות ומדידות — החל מהפערים שבאמת חוסמים את המעבר לייצור.',
    },
    faq: {
      eyebrow: 'שאלות', title: 'שאלות טובות, עם תשובות',
      items: [
        { q: 'האם זה לא מוקדם מדי לאמץ AI?', a: 'להפך — AI כבר מזמן אינו ניסוי: 88% מהארגונים כבר משתמשים בו, ו-74% מעובדי השטח מדי שבוע. מי שמתחיל עכשיו, על בסיס נכון, מצטרף למובילים; מי שממתין, הפער רק מתרחב. תהליך מובנה הופך את „מתי” ל„איך”.' },
        { q: 'מה כולל תהליך המוכנות ל-AI?', a: 'התהליך ממפה היכן אתם עומדים על פני חמישה ממדים — אסטרטגיה, נתונים, תשתית, אנשים ואבטחה — מזהה את הפערים שחוסמים החזר, ובונה מסלול מדורג וברור לעבר הניצחון הראשון. בלי מהפכות: צעדים מעשיים, בקצב שמתאים לכם.' },
        { q: 'אנחנו לא חברת „הייטק”. זה רלוונטי לנו?', a: 'במיוחד לכם. חלק גדול מהערך של AI היום נמצא דווקא בתעשייה ובתפעול עתיר-נכסים — לא בהייטק. אתם כבר אוספים נתונים מחיישנים וממכשירים מחוברים; התהליך פשוט הופך אותם ליתרון. אין צורך בצוות דאטה-סיינס כדי להתחיל.' },
        { q: 'רוב פרויקטי ה-AI נכשלים — למה שאצלנו זה יהיה אחרת?', a: 'נכון ש-56% מהמנכ״לים מדווחים שעדיין לא ראו תועלת — אך הסיבה כמעט תמיד אינה ה-AI אלא הבסיס. ארגונים עם בסיס איתן נוטים פי 3 לראות החזר אמיתי. תהליך מוכנות בונה בדיוק את הבסיס הזה, ולכן זה המסלול הבטוח קדימה.' },
        { q: 'מאיפה מתחילים, וכמה זמן זה לוקח?', a: 'מתחילים מהבנת התמונה — תוך זמן קצר ובלי הפרעה לתפעול. משם בונים תוכנית מדורגת: ניצחון ראשון מהיר וברור, ואז הרחבה מאובטחת. אין צורך להמר על הכול בבת אחת — כל צעד נשען על הקודם ומפחית סיכון.' },
      ],
    },
    closing: {
      eyebrow: 'אל תיתנו לפער להתרחב', title: 'קבעו שיחה עם מומחה AI — עוד היום.',
      text: 'שיחה חינמית של 20 דקות עם מומחה AI. נאתר מאיפה להתחיל, איך לעשות זאת בבטחה, ואת הדרך המהירה ביותר לניצחון AI אמיתי — על בסיס המתודולוגיה המהימנה של קבוצת T&M. בלי מצגת, בלי התחייבות.',
      book: 'קבעו לי שיחה עם מומחה AI', scorecard: 'או מלאו את השאלון בן 4 הדקות',
    },
    footer: {
      title: 'אל תיתנו לפער להתרחב.', sub: 'קבלו את ציון המוכנות החינמי שלכם — או דברו עם מומחה עוד היום.',
      book: 'קבעו שיחה עם מומחה AI', scorecard: 'מלאו את השאלון',
    },
    sticky: { strong: 'מוכנים לפעול על AI?', text: ' קבלו ציון מוכנות חינמי — או דברו עם מומחה עוד היום.', link: 'מלאו את השאלון', book: 'קבעו שיחה' },
  },

  /* ============================================================ */
  en: {
    nav: {
      partner: 'AI Readiness · T&M Group',
      links: [
        { href: '#ch-momentum', label: 'Why act now' },
        { href: '#ch-security', label: 'Security' },
        { href: '#scorecard', label: 'Scorecard' },
        { href: '#faq', label: 'FAQ' },
      ],
      book: 'Book a call',
      bookExpert: 'Book a call with an AI expert',
      scorecard: 'Take the scorecard',
      menu: 'Menu',
      switch: 'עב',
    },
    hero: {
      eyebrow: 'For manufacturers, utilities & IoT-driven operations',
      h1pre: 'While you weigh your options, your competitors are already ',
      h1accent: 'deploying AI.',
      lead1: 'The gap widens every quarter. So the real question isn’t ',
      leadEm: 'whether',
      lead2: ' to adopt AI — it’s how ready you are to do it ',
      leadBold: 'safely',
      lead3: ', and how fast you can start. Find out in 4 minutes, or talk to an AI expert today.',
      ctaStart: 'Start my free scorecard',
      ctaTalk: 'Talk to an AI expert',
      badge: 'Where live data becomes decisions — securely',
      imgAlt: 'Executives reviewing live data dashboards on a large screen and making decisions',
      meta: [
        { b: '4 min', span: 'to complete' },
        { b: '5', span: 'readiness pillars' },
        { b: 'Free', span: 'instant score + report' },
      ],
    },
    chapterCommon: { ask: 'Ask yourself', book: 'Book a call', scorecard: 'Take the scorecard' },
    chapters: [
      {
        statement: 'Your competitors aren’t experimenting anymore. They’re operating.',
        theme: 'Momentum',
        question: 'When did your team last put an AI improvement into production — this quarter, or is it still “on the roadmap”?',
        stat: { value: '88%', text: 'of organizations already use AI, and 74% of frontline workers now use it every week.', source: 'McKinsey · State of AI 2025 · BCG · AI at Work 2026' },
        value: {
          title: 'What actually separates the AI leaders',
          intro: 'It isn’t budget. Across the research, the companies pulling ahead share three habits:',
          items: [
            { t: 'They start from one painful problem', d: 'Not the technology. A single, measurable use case with an owner.' },
            { t: 'They build a secure data foundation first', d: 'Then scale — instead of bolting AI onto chaos.' },
            { t: 'Their leaders own it', d: 'High performers are 3× more likely to have senior-leadership commitment.' },
          ],
          kicker: 'The gap between leaders and everyone else compounds every quarter.',
        },
        cta: 'See where you stand — in 4 minutes',
      },
      {
        statement: 'Your data is your most valuable asset — and probably your most wasted one.',
        theme: 'Your data',
        question: 'If we asked for 12 months of clean operational data tomorrow, could your team actually deliver it?',
        stat: { value: 'Just 25%', text: 'of organizations have moved even 40% of their AI pilots into production — data readiness is the usual blocker, not the model.', source: 'Deloitte · State of AI in the Enterprise 2026' },
        value: { kind: 'stairs' },
        cta: 'Score my data readiness',
      },
      {
        statement: 'Spending on AI is easy. Getting a return is where most organizations stall.',
        theme: 'Return on AI',
        question: 'Could you name the one problem where AI would pay back fastest in your operation — today?',
        stat: { value: '56%', text: 'of CEOs say AI has delivered no benefit yet. Those with strong foundations are 3× more likely to see real returns.', source: 'PwC · 29th Global CEO Survey 2026' },
        value: {
          title: '3 questions that reveal your first high-ROI use case',
          intro: 'Your best place to start sits where all three overlap:',
          items: [
            { t: 'Where does unplanned downtime or waste cost you most?' },
            { t: 'Where do skilled people spend hours on repetitive judgment?' },
            { t: 'Which decision would you make differently with real-time data?' },
          ],
          kicker: 'Start there — one use case, measurable, owned. Not a science project.',
        },
        cta: 'Find your first use case — talk to an expert',
      },
      {
        statement: 'AI multiplies whatever it touches — including your risks.',
        theme: 'Security & trust',
        question: 'If an AI agent acted on your operational data tonight, would you know what it did — and could you stop it?',
        stat: { value: 'Just 21%', text: 'have a mature AI governance model. Agents are scaling faster than the guardrails meant to contain them.', source: 'Deloitte · State of AI in the Enterprise 2026' },
        value: {
          title: '4 guardrails to put in place before AI goes live',
          items: [
            { t: 'See every connected device', d: 'You can’t secure — or safely automate on — what you can’t see.' },
            { t: 'Control access to operational data', d: 'Decide who, and what, can read and act on it.' },
            { t: 'Monitor in real time', d: 'Detect and contain anomalies before they spread.' },
            { t: 'Govern how AI uses your data', d: 'Define the rules, and audit against them.' },
          ],
          kicker: 'This is exactly where T&M Group’s security DNA becomes your unfair advantage.',
        },
        cta: 'Book a security-first AI review',
      },
      {
        statement: 'The technology is ready. The real question is whether your people are.',
        theme: 'Your people',
        question: 'Are your operators and managers reaching for AI tools — or quietly working around them?',
        stat: { value: '8 hours', text: 'a week saved by 42% of regular AI users — the equivalent of a full workday given back to your team.', source: 'BCG · AI at Work 2026' },
        value: {
          title: 'How AI leaders build real momentum',
          items: [
            { t: 'Start with one visible win', d: 'Proof beats slideware. Let results sell the next step.' },
            { t: 'Put tools in operators’ hands', d: 'Not just analysts’. Adoption happens on the floor.' },
            { t: 'Make the data trustworthy', d: 'People only trust the output when they trust the input.' },
          ],
          kicker: 'Momentum is a choice. The longer you wait, the harder the catch-up.',
        },
        cta: 'Get your readiness score',
      },
    ],
    stairs: {
      title: 'The 5 levels of data maturity',
      sub: 'Find your honest level — AI needs you at Level 4 or above.',
      axis: 'More AI-ready ▲',
      ariaLabel: 'Ascending staircase from Level 1 Trapped to Level 5 AI-ready',
      levels: [
        { t: 'Trapped', d: 'In machines & paper' },
        { t: 'Scattered', d: 'Across systems' },
        { t: 'Centralized', d: 'One place to query' },
        { t: 'Clean & governed', d: 'Trusted & controlled' },
        { t: 'AI-ready', d: 'Real-time, model-ready' },
      ],
      kicker: 'Most operations sit at Level 2. Moving up is a project, not a miracle.',
    },
    pillars: {
      business: { name: 'Business & Use-Case Clarity', short: 'Use-Case' },
      data: { name: 'Data & Connectivity', short: 'Data' },
      infra: { name: 'Infrastructure & OT/IT', short: 'Infrastructure' },
      people: { name: 'People & Change Readiness', short: 'People' },
      security: { name: 'Security, Governance & Risk', short: 'Security' },
    },
    questions: [
      { text: 'Which operational problem would you point AI at first?', help: 'Think downtime, quality defects, energy waste or safety.',
        options: ['No idea yet', 'A few ideas, nothing prioritized', 'One clear use case in mind', 'A use case is approved, with budget & an owner', 'AI is already delivering value on it'] },
      { text: 'How much of your equipment / sensor data is captured and stored somewhere usable?', help: 'Not trapped inside machines, paper logs or one operator’s head.',
        options: ['Mostly on the machines or on paper — not collected', 'Some captured, scattered across systems', 'Most key assets feed a central system', 'Centralized and mostly clean', 'Real-time, clean and analytics-ready'] },
      { text: 'If we asked for the last 12 months of sensor / production data tomorrow, how easily could you provide it?', help: '',
        options: ['We couldn’t', 'Only with heavy manual effort', 'Partially — for some lines or assets', 'Yes, with a bit of preparation', 'Instantly, through a system or API'] },
      { text: 'Can your shop-floor / operational (OT) systems share data with cloud or business software today?', help: 'The path from device → data → decision.',
        options: ['No — they’re isolated or fully manual', 'Only through manual export', 'Some integration in places', 'Most systems are connected', 'Fully integrated, edge-to-cloud'] },
      { text: 'How do your operators and managers feel about data-driven or automated tools?', help: '',
        options: ['Resistant — low trust', 'Curious but unsure', 'Open — we have a few champions', 'Actively using some tools', 'Data-driven decisions are the norm'] },
      { text: 'Do you have a complete, current map of every connected device on your network?', help: 'Sensors, controllers, cameras, gateways, machines.',
        options: ['No map', 'A rough or partial list', 'Documented, but probably out of date', 'A maintained map', 'A live, automatically-monitored map'] },
      { text: 'If a connected device were compromised, how confident are you you’d detect and contain it?', help: '',
        options: ['Not confident — we might never know', 'We’d probably find out eventually', 'Some monitoring in place', 'Active monitoring + a response plan', '24/7 monitoring with a tested response'] },
      { text: 'Are there clear rules for who can access operational data and how AI may use it?', help: '',
        options: ['No rules defined', 'Informal / undocumented', 'Some policy exists', 'Documented access & data governance', 'Enforced governance, with auditing'] },
    ],
    bands: [
      { label: 'Disconnected', blurb: 'The data foundation and safeguards for AI aren’t in place yet — but that’s a clear, fixable starting point.' },
      { label: 'Aware', blurb: 'You see the opportunity. The next move is turning scattered data and devices into a governed foundation.' },
      { label: 'Exploring', blurb: 'Real building blocks exist. Close a few gaps — usually data access and device security — and a first use case becomes realistic.' },
      { label: 'Building', blurb: 'You’re genuinely getting there. With the right guardrails, you can move a pilot into production safely.' },
      { label: 'AI-Ready', blurb: 'Strong foundations across the board. The focus now is scaling securely and capturing return.' },
    ],
    recs: {
      security: { low: 'Start with asset mapping: you can’t protect — or safely automate on — devices you can’t see. T&M Group can map and secure every connected device before AI touches your operation.', mid: 'You have partial visibility. Tighten device mapping, monitoring and access rules so an AI rollout doesn’t widen your attack surface.', high: 'Strong security posture. Formalize AI-specific access governance so models can use operational data without new risk.' },
      data: { low: 'Your data is still trapped in machines and spreadsheets. Centralizing and cleaning sensor/production data is the single highest-leverage step toward any use case.', mid: 'Data is partly accessible. Close the gaps in coverage and quality so a model can truly rely on it.', high: 'Your data foundation is solid — a real advantage. It’s ready to feed a first production use case.' },
      infra: { low: 'OT and IT are largely disconnected. Building a safe bridge from shop-floor to cloud is a prerequisite for AI — and a security-sensitive step worth doing right.', mid: 'Some integration exists. Extending edge-to-cloud connectivity will unlock real-time AI.', high: 'Well-integrated infrastructure. You can support real-time, edge-to-cloud AI today.' },
      business: { low: 'No prioritized use case yet. A short discovery workshop will pinpoint the one problem where AI pays back fastest.', mid: 'You have direction. Lock a single, measurable first use case with an owner and a target.', high: 'A clear, owned use case — exactly what de-risks an AI investment.' },
      people: { low: 'Low trust in automated tools will stall adoption. Early wins and operator involvement matter as much as the technology.', mid: 'Openness is growing. Nurture champions and give teams visible early wins.', high: 'A data-driven culture — your adoption risk is low.' },
    },
    scorecard: {
      eyebrow: 'The Scorecard', title: 'Find your AI Readiness Score in 4 minutes',
      qPill: '8 questions · 4 minutes · free',
      introQ: '5 dimensions decide whether AI works on your operation — or stalls.',
      introHelp: 'Answer honestly. You’ll get an instant score, then a full breakdown showing exactly where to start — including how secure your connected devices are.',
      noObligation: 'No cost · no obligation', start: 'Start my scorecard',
      back: '← Back', hint: 'Pick the option that fits best',
      question: (i, n) => `Question ${i} / ${n}`, result: 'Result', almost: 'Almost there', complete: 'Complete',
      talk: 'Prefer to talk it through first?',
    },
    lead: {
      step: 'Step 2 of 2 — unlock your report',
      titlePre: 'Where should we send your ', titleAccent: 'full AI Readiness Report?',
      sub: 'Your detailed 5-pillar breakdown, top gaps and recommended next step — on screen and as a PDF.',
      name: 'Full name', namePh: 'Jane Cohen', role: 'Your role',
      email: 'Work email', emailPh: 'jane@company.com', phone: 'Phone', phonePh: '+1 555 000 0000',
      roles: ['Select your role…', 'Owner / CEO / GM', 'COO / VP Operations', 'Plant / Site / Operations Manager', 'IT / OT / Security Manager', 'Engineering / Maintenance Lead', 'Other'],
      submit: 'Get My Full Report', sending: 'Unlocking…',
      reassure: 'Reviewed by a T&M AI specialist. No spam — just one call to walk you through your results.',
      errName: 'Please enter your name', errRole: 'Please select your role', errEmail: 'Enter a valid work email', errPhone: 'Enter a valid phone number',
    },
    teaser: {
      ready: 'Your result is ready', scorePre: 'You scored ',
      lockTitle: 'Your 5-pillar breakdown', lockSub: 'Unlock to see your weakest link',
      unlock: 'Unlock my full breakdown & action plan', outOf: 'out of 100',
    },
    report: {
      eyebrow: 'Your full report', forName: (n) => ` · for ${n}`,
      gaps: 'Your top 3 gaps to close first',
      planTitle: 'Turn this score into a plan',
      planText: 'Book a free 20-minute call with an AI expert today. We’ll walk through your gaps and the fastest, safest path to your first AI win.',
      planCta: 'Book a call with an AI expert',
      sent: (e) => e ? `A copy of this report is on its way to ${e}.` : 'A copy of this report has been emailed to you.',
    },
    cred: {
      eyebrow: 'The partnership behind it', title: 'T&M Group’s trust, meets deep AI expertise.',
      lead: 'T&M Group is one of Israel’s leading security & services groups, trusted by thousands of organizations to protect what matters. This AI Readiness program pairs that trust with hands-on, in-depth AI expertise — so you get an honest assessment and a clear path, not a sales pitch.',
      tags: ['Backed by T&M Group', 'Security-first methodology', 'Vendor-neutral', 'Your data stays private'],
      cardTitle: 'A security-first approach', cardRole: 'Hands-on AI expertise, backed by T&M',
      cardText: 'We help non-tech, asset-heavy organizations turn the data they already collect into safe, measurable AI outcomes — starting with the gaps that actually block production.',
    },
    faq: {
      eyebrow: 'Questions', title: 'Good questions, answered',
      items: [
        { q: 'Isn’t it too early to adopt AI?', a: 'On the contrary — AI is long past the experiment stage: 88% of organizations already use it, and 74% of frontline workers every week. Start now, on the right foundation, and you join the leaders; wait, and the gap only widens. A structured process turns “when” into “how”.' },
        { q: 'What does the AI-readiness process involve?', a: 'The process maps where you stand across five dimensions — strategy, data, infrastructure, people and security — pinpoints the gaps blocking return, and builds a clear, staged path to your first win. No upheaval: practical steps, at a pace that suits you.' },
        { q: 'We’re not a “tech” company. Is this relevant to us?', a: 'Especially for you. Much of AI’s value today is in industry and asset-heavy operations — not tech. You already collect data from sensors and connected devices; the process simply turns it into an advantage. You don’t need a data-science team to start.' },
        { q: 'Most AI projects fail — why would ours be different?', a: 'It’s true that 56% of CEOs report no benefit yet — but the reason is almost never the AI; it’s the foundation. Organizations with a strong foundation are 3× more likely to see real returns. A readiness process builds exactly that foundation, which is why it’s the safe path forward.' },
        { q: 'Where do we start, and how long does it take?', a: 'You start by understanding the picture — quickly, and without disrupting operations. From there you build a staged plan: a fast, clear first win, then secure expansion. No need to bet everything at once — each step builds on the last and reduces risk.' },
      ],
    },
    closing: {
      eyebrow: 'Don’t wait for the gap to widen', title: 'Book a call with an AI expert — today.',
      text: 'A free 20-minute call with an AI expert. We’ll pinpoint where to start, how to do it securely, and your fastest path to a real AI win — built on T&M Group’s trusted methodology. No pitch, no obligation.',
      book: 'Book my call with an AI expert', scorecard: 'Or take the 4-min scorecard',
    },
    footer: {
      title: 'Don’t let the gap widen.', sub: 'Get your free AI Readiness Score — or talk it through with an expert today.',
      book: 'Book a call with an AI expert', scorecard: 'Take the scorecard',
    },
    sticky: { strong: 'Ready to act on AI?', text: ' Get your free readiness score — or talk to an expert today.', link: 'Take the scorecard', book: 'Book a call' },
  },
}

/* ============================================================
   Language context + hooks
   ============================================================ */
const LangContext = createContext({ lang: 'he', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'he' } catch { return 'he' }
  })
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
export const useT = () => T[useContext(LangContext).lang]
