# T&M Group — AI Readiness Scorecard

An interactive, single-page **AI Readiness Scorecard** for IoT-driven, non-hightech businesses
(manufacturing, utilities, logistics, agriculture, facilities). Built with **Vite + React**, styled in
**T&M Group's visual language** and security-led positioning. Lead-gen CTA captures **name, role, email, phone**.

## Run it

```bash
cd ai_readiness_page
npm install
npm run dev      # opens http://localhost:5173
npm run build    # production build -> dist/
```

## The flow (as designed)

1. **Hero** — security-led headline (red keyword, T&M pattern) + CTAs
2. **Why it matters** — 3 stat callouts (failure rate, device blind spots, risk)
3. **Scorecard** — 8 questions across 5 pillars, one per screen, animated progress
4. **Teaser result (free)** — animated gauge + overall band + *blurred* radar behind a lock
5. **Lead form (the gate / CTA)** — name · role · email · phone → unlocks the report
6. **Full report** — unlocked radar, per-pillar bars, top-3 gaps + tailored next step, "book readout"
7. **How it works · Credibility (T&M × Avishay) · FAQ · Closing CTA · Footer**

## Scoring

- 8 questions → 5 pillars. Each pillar = avg answer (1–5) × 20 → 0–100.
- **Weighted overall:** Security **30%**, Data **25%**, Business 15%, Infrastructure 15%, People 15%.
  Security & Data are weighted highest — they most often block industrial AI from reaching production.
- Bands: Disconnected · Aware · Exploring · Building · AI-Ready.
- Edit questions/weights in `src/data/questions.js`; scoring + recommendation copy in `src/lib/scoring.js`.

## Brand tokens (extracted from tmprotection.co.il)

Defined in `src/index.css`:
`--navy #1B213D` · `--cream #FFFEF5` · `--red #E21313` · `--pale #E6ECF6`, pill buttons (radius 100px)
with circular arrow badges, bold 800 headings. Font: **SimplerPro** (T&M proprietary) with
**Assistant / Inter** as free fallbacks.

## Urgency + booking

- Survey-backed urgency runs through the page: the hero line, the **"Why act now"** stat cards (cited), and the
  navy **`ActNow`** band after the scorecard (BCG / Deloitte / PwC / McKinsey, all <6 months old).
- The recurring CTA is **"Book a call with an AI expert today"** — in the navbar, hero, why-section, urgency band,
  the score report, and the closing section. All booking buttons point to **`BOOK_URL`** in `src/config.js`.

## Brand fidelity (matches tmprotection.co.il)

- **Logo:** the official `public/logo-tm.svg` (downloaded from T&M) renders via `src/components/Logo.jsx`.
- **Typeface:** **SimplerPro** (T&M's corporate font), self-hosted from `public/fonts/` — Regular 400 + Bold 700,
  declared in `src/index.css`. Headings use 700 (their weight), buttons use the lighter 500.
- **Transitions:** AOS-style scroll reveals (fade-up) like their site, via a small IntersectionObserver in `App.jsx`
  (`.reveal` / `.reveal.in` in `index.css`) — no extra dependency.
- **Colors / pills:** navy `#1B213D`, cream `#FFFEF5`, red `#E21313`, pale `#E6ECF6`; pill buttons with arrow badges.

> Note: SimplerPro and the T&M logo are T&M Group assets — use only within this partnership.

## Before launch (TODO)

- **Booking link:** set the real scheduling URL (Calendly / HubSpot / Google) in `src/config.js` (`BOOK_URL`).
- **Lead form:** `src/components/LeadForm.jsx` currently logs the submission — wire `onSubmit` to your CRM /
  email endpoint and send the PDF report.
- **Avishay photo/bio:** replace the `AM` avatar initials in `Sections.jsx`.
