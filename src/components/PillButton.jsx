import { ArrowUpRight } from './icons.jsx'

// T&M signature CTA: pill with a circular arrow badge.
export default function PillButton({
  children, variant = 'primary', size = '', as = 'button', icon, onClick, href, disabled, type = 'button', className = '',
}) {
  const Badge = icon || ArrowUpRight
  const cls = `pill pill--${variant} ${size === 'lg' ? 'pill--lg' : ''} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="badge"><Badge /></span>
    </>
  )
  if (as === 'a') {
    return <a className={cls} href={href} onClick={onClick}>{inner}</a>
  }
  return <button className={cls} type={type} onClick={onClick} disabled={disabled}>{inner}</button>
}
