import logoUrl from '../assets/logo-tm.svg'

// Official T&M Group logo (downloaded from tmprotection.co.il).
export default function Logo({ height = 30 }) {
  return (
    <img
      src={logoUrl}
      alt="T&M Group"
      style={{ height, width: 'auto', display: 'block' }}
      decoding="async"
    />
  )
}
