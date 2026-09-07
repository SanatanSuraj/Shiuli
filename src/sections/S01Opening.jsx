import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Reveal from '../components/Reveal.jsx'
import Parallax from '../components/Parallax.jsx'
import Photo from '../components/Photo.jsx'
import Petals from '../components/Petals.jsx'
import { invitation } from '../config/invitation.js'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

/** Her name arrives one letter at a time, like it's being written. */
function CascadeName({ text }) {
  const ref = useRef(null)
  const [first, ...rest] = text.split(' ')

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const letters = el.querySelectorAll('.ch')
    if (prefersReducedMotion()) {
      gsap.set(letters, { opacity: 1 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { opacity: 0, yPercent: 55, rotate: 2 },
        { opacity: 1, yPercent: 0, rotate: 0, duration: 1.15, delay: 0.55, stagger: 0.05, ease: 'power3.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  const spans = (word, cls = '') =>
    word.split('').map((c, i) => (
      <span className={`ch ${cls}`} key={`${cls}${i}`} aria-hidden="true">
        {c}
      </span>
    ))

  return (
    <h1 className="s01-name" ref={ref}>
      <span className="sr-only">{text},</span>
      {spans(first)}
      <span className="ch ch--space" aria-hidden="true">
        &nbsp;
      </span>
      <em>{spans(`${rest.join(' ')},`, 'ch--em')}</em>
    </h1>
  )
}

export default function S01Opening() {
  return (
    <section className="section s01" aria-label="Shuruaat">
      <div className="s01-halo" aria-hidden="true" />
      <Petals count={5} />
      <div className="wrap s01-grid">
        <div className="s01-text">
          <Reveal as="p" className="kicker" delay={0.2}>
            ek chhotisi chitthi
          </Reveal>
          <CascadeName text={invitation.herName} />
          <Reveal as="p" className="s01-sub" delay={1.5}>
            ek chhoti si baat kehni thi...
          </Reveal>
        </div>
        <Parallax speed={0.22} className="s01-photo">
          <Reveal delay={0.9} y={50}>
            <Photo variant="arch" src={invitation.heroPhoto} alt={invitation.herName} focus="50% 8%" />
          </Reveal>
        </Parallax>
      </div>
      <div className="s01-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
