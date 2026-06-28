import { useEffect, useRef, useState } from 'react'

// Animates the first number inside a string when it scrolls into view.
// Keeps any prefix/suffix text, e.g. "Just 21%", "8 hours", "62/100", "3×".
export default function CountUp({ children, duration = 1500, className }) {
  const text = String(children ?? '')
  const m = text.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s)
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : null
  const decimals = m ? (m[2].split('.')[1] || '').length : 0
  const ref = useRef(null)
  const started = useRef(false)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (target == null) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          io.unobserve(e.target)
          let raf, start
          const step = (t) => {
            if (!start) start = t
            const p = Math.min((t - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(target * eased)
            if (p < 1) raf = requestAnimationFrame(step)
            else setVal(target)
          }
          raf = requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  if (target == null) return <span className={className}>{text}</span>
  const shown = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()
  return <span ref={ref} className={className}>{m[1]}{shown}{m[3]}</span>
}
