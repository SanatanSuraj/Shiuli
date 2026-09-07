import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal.jsx'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

// deterministic streak layout: [top %, width vw, speed, opacity, color key]
const STREAKS = [
  [18, 34, -60, 0.55, 'red'],
  [30, 18, -110, 0.3, 'ink'],
  [44, 46, -80, 0.7, 'red'],
  [58, 22, -140, 0.35, 'gold'],
  [70, 38, -95, 0.5, 'red'],
  [84, 14, -160, 0.25, 'ink'],
]

export default function S02Train() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const common = {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      }
      gsap.fromTo('.s02-ghost', { xPercent: 6 }, { xPercent: -22, ease: 'none', scrollTrigger: common })
      gsap.utils.toArray('.s02 .streak').forEach((s) => {
        const speed = Number(s.dataset.speed)
        gsap.fromTo(s, { xPercent: 30 }, { xPercent: speed, ease: 'none', scrollTrigger: common })
      })
      gsap.fromTo('.s02-rails', { xPercent: 0 }, { xPercent: -12, ease: 'none', scrollTrigger: common })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section s02" ref={root} aria-label="Rajdhani Express">
      <div className="s02-ghost" aria-hidden="true">
        RAJDHANI&nbsp;EXPRESS
      </div>

      <div className="wrap s02-copy">
        <Reveal as="p" className="lede">
          Iss bheed mein hum jee rahe the,
        </Reveal>
        <Reveal as="p" className="lede lede--serif" delay={0.15}>
          bhagte hue <em className="red-i">Rajdhani Express</em> ki tarah...
        </Reveal>
      </div>

      <div className="s02-band" aria-hidden="true">
        {STREAKS.map(([top, w, speed, o, c], i) => (
          <span
            key={i}
            className={`streak streak--${c}`}
            data-speed={speed}
            style={{ top: `${top}%`, width: `${w}vw`, opacity: o }}
          />
        ))}
        <svg className="s02-rails" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <line x1="0" y1="34" x2="1200" y2="34" stroke="var(--red)" strokeWidth="1.5" opacity="0.75" />
          <line x1="0" y1="86" x2="1200" y2="86" stroke="var(--red)" strokeWidth="1.5" opacity="0.75" />
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={i}
              x1={i * 44}
              y1="30"
              x2={i * 44 - 10}
              y2="90"
              stroke="var(--ink)"
              strokeWidth="3"
              opacity="0.12"
            />
          ))}
        </svg>
      </div>

      <div className="wrap s02-caption">
        <Reveal as="p" className="small-note">
          sab kuch bhaag raha tha. main bhi.
        </Reveal>
      </div>
    </section>
  )
}
