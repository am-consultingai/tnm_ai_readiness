// Minimal inline SVG icons (stroke-based), no dependencies.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 13l4 4L19 7" /></svg>
)
export const Lock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)

// Pillar + feature icons
export const Target = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)
export const Data = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>
)
export const Network = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="5" r="2.4" /><circle cx="5" cy="19" r="2.4" /><circle cx="19" cy="19" r="2.4" /><path d="M12 7.4v4.6M12 12 6.6 17M12 12l5.4 5" /></svg>
)
export const People = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M16.5 19a5.5 5.5 0 0 0-2.8-4.8" /></svg>
)
export const Shield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const Gauge = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l4-5" /></svg>
)
export const Bolt = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M13 3 5 13h5l-1 8 8-10h-5z" /></svg>
)
export const ChartUp = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg>
)

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" /></svg>
)
export const Calendar = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></svg>
)

export const PILLAR_ICONS = { target: Target, data: Data, network: Network, people: People, shield: Shield }
