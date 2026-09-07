import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal.jsx'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The centrepiece. A quiet still-life: a small glass pot of Alta,
 * a fine brush resting against it, and one deep-red brush stroke
 * that draws itself across the paper as she scrolls.
 */
export default function S09Alta() {
  const root = useRef(null)
  const strokeRef = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    const stroke = strokeRef.current
    if (!el || !stroke) return
    const len = stroke.getTotalLength()
    if (prefersReducedMotion()) {
      stroke.style.strokeDasharray = 'none'
      return
    }
    stroke.style.strokeDasharray = len
    stroke.style.strokeDashoffset = len
    const ctx = gsap.context(() => {
      gsap.to(stroke, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.s09-still',
          start: 'top 75%',
          end: 'bottom 45%',
          scrub: 0.8,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section s09" ref={root} aria-label="Alta">
      <div className="s09-light" aria-hidden="true" />

      <div className="wrap s09-head">
        <Reveal as="p" className="kicker kicker--gold">
          alta
        </Reveal>
        <Reveal as="h2" className="s09-big" delay={0.1} y={34} blur>
          Main aapke pairon par
          <br />
          <em>Alta</em> lagana chahta hoon.
        </Reveal>
      </div>

      <Reveal className="s09-still-outer" y={50}>
        <div className="s09-still" aria-hidden="true">
          <span className="mote" style={{ '--mx': '16%', '--my': '30%', '--md': '11s' }} />
          <span className="mote" style={{ '--mx': '74%', '--my': '18%', '--md': '14s' }} />
          <span className="mote" style={{ '--mx': '58%', '--my': '52%', '--md': '9s' }} />
          <span className="mote" style={{ '--mx': '32%', '--my': '12%', '--md': '17s' }} />
          <svg viewBox="0 0 420 300" className="s09-svg">
            {/* kolam-inspired dotted arc, barely there */}
            {Array.from({ length: 11 }).map((_, i) => {
              const a = Math.PI * (0.15 + (i / 10) * 0.7)
              return (
                <circle
                  key={i}
                  cx={210 + Math.cos(a) * 180}
                  cy={250 - Math.sin(a) * 190}
                  r="2"
                  fill="var(--gold)"
                  opacity="0.5"
                />
              )
            })}
            {/* resting surface shadow */}
            <ellipse cx="150" cy="238" rx="86" ry="12" fill="var(--ink)" opacity="0.08" />
            {/* alta pot: glass with deep red inside */}
            <path
              d="M116 176 h58 v10 c10 8 14 20 14 30 c0 22 -19 30 -43 30 c-24 0 -43 -8 -43 -30 c0 -10 4 -22 14 -30 z"
              fill="#A52232"
            />
            <path
              d="M116 176 h58 v10 c10 8 14 20 14 30 c0 22 -19 30 -43 30 c-24 0 -43 -8 -43 -30 c0 -10 4 -22 14 -30 z"
              fill="url(#altaGlass)"
            />
            <rect x="124" y="164" width="42" height="14" rx="4" fill="var(--gold)" opacity="0.9" />
            <path d="M130 196 c2 14 6 26 14 32" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.22" fill="none" />
            {/* the brush, resting */}
            <line x1="330" y1="118" x2="216" y2="216" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="238" y1="197" x2="222" y2="211" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round" />
            <path d="M222 211 c-8 6 -16 14 -18 22 c8 -2 16 -8 22 -17 z" fill="#8F1D2C" />
            {/* the stroke it leaves behind — drawn by her scroll */}
            <path
              ref={strokeRef}
              className="s09-stroke"
              d="M204 236 C 250 258, 300 224, 342 244 C 366 255, 386 250, 402 240"
              fill="none"
              stroke="#8F1D2C"
              strokeWidth="9"
              strokeLinecap="round"
              opacity="0.92"
            />
            <circle cx="196" cy="247" r="3.4" fill="#8F1D2C" opacity="0.8" />
            <circle cx="352" cy="256" r="2.4" fill="#8F1D2C" opacity="0.6" />
            <defs>
              <linearGradient id="altaGlass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
                <stop offset="0.45" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#5d1019" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Reveal>

      <div className="wrap s09-copy">
        <Reveal as="p" className="s09-not">
          Kisi rasam ke liye nahi.
        </Reveal>
        <Reveal as="p" className="s09-not" delay={0.1}>
          Kisi haq ke liye nahi.
        </Reveal>
        <Reveal as="p" className="s09-for" delay={0.2} duration={1.6}>
          Bas aapka khayal rakhne ke
          <br />
          ek chhote se tareeke ki tarah.
        </Reveal>
      </div>
    </section>
  )
}
