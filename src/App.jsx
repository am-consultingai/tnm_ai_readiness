import { useEffect } from 'react'
import './App.css'
import NetworkBg from './components/NetworkBg.jsx'
import Navbar from './components/Navbar.jsx'
import StickyCta from './components/StickyCta.jsx'
import Hero from './components/Hero.jsx'
import Chapters from './components/Chapters.jsx'
import Scorecard from './components/Scorecard.jsx'
import { Credibility, FAQ, ClosingCTA, Footer } from './components/Sections.jsx'

export default function App() {
  // AOS-style scroll reveal, matching tmprotection.co.il
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!els.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <NetworkBg />
      <Navbar />
      <main>
        <Hero />
        <Chapters />
        <Scorecard />
        <Credibility />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
