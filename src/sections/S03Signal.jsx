import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The red signal — the story's central motif. A tall section with a
 * sticky stage: as she scrolls, the lamp warms from ash-grey to deep
 * Alta red, the glow spills onto the paper, and the three lines of
 * the poem settle in one by one. Scrolling back rewinds it gently.
 */
export default function S03Signal() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const reduced = prefersReducedMotion()
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.s03-line', { opacity: 1, y: 0 })
        gsap.set('.s03-lamp', { attr: { fill: '#8F1D2C' } })
        gsap.set('.s03-glow', { opacity: 0.5 })
        return
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.7,
        },
      })
      tl.fromTo('.s03-lamp', { attr: { fill: '#C9C2B8' } }, { attr: { fill: '#8F1D2C' }, duration: 1 }, 0)
        .fromTo('.s03-glow', { opacity: 0, scale: 0.6 }, { opacity: 0.55, scale: 1, duration: 1.2 }, 0.1)
        .fromTo('.s03-wash', { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0.2)
        .fromTo('.s03-line--1', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8 }, 0.35)
        .fromTo('.s03-line--2', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8 }, 1.15)
        .fromTo('.s03-line--3', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.9 }, 1.95)
        .to({}, { duration: 0.6 })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="s03" ref={root} aria-label="Red signal">
      <div className="s03-pin">
        <div className="s03-wash" aria-hidden="true" />
        <div className="s03-stage">
          <div className="s03-signal" aria-hidden="true">
            <div className="s03-glow" />
            <svg viewBox="0 0 120 340" className="s03-svg">
              <line x1="60" y1="120" x2="60" y2="330" stroke="var(--ink)" strokeWidth="5" opacity="0.85" />
              <line x1="34" y1="330" x2="86" y2="330" stroke="var(--ink)" strokeWidth="5" opacity="0.85" />
              <rect x="30" y="28" width="60" height="96" rx="16" fill="var(--ink)" />
              <circle className="s03-lamp" cx="60" cy="76" r="26" fill="#C9C2B8" />
            </svg>
          </div>
          <div className="s03-lines">
            <p className="s03-line s03-line--1 lede lede--serif">Aap us station master ki tarah aaye.</p>
            <p className="s03-line s03-line--2 s03-sans">Jinhone sirf ek red signal nahi diya,</p>
            <p className="s03-line s03-line--3 lede lede--serif s03-red">
              balki meri zindagi ko <em>ruk kar jeena</em> sikha diya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
