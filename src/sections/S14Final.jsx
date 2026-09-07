import Reveal from '../components/Reveal.jsx'
import Petals from '../components/Petals.jsx'
import { invitation } from '../config/invitation.js'

/**
 * A letter left on the table. A small Alta mark instead of a signature seal.
 */
export default function S14Final() {
  return (
    <section className="section s14" aria-label="Aakhri baat">
      <Petals count={4} />
      <div className="wrap s14-wrap">
        <Reveal className="s14-mark-outer" duration={2}>
          <span className="s14-halo" aria-hidden="true" />
          <svg viewBox="0 0 60 60" className="s14-mark" aria-hidden="true">
            <path
              d="M30 8 C41 14 48 24 46 36 C44 48 34 54 27 52 C16 49 11 38 14 27 C17 17 23 11 30 8 Z"
              fill="#8F1D2C"
              opacity="0.88"
            />
            <path
              d="M26 20 C31 22 36 28 35 36 C34 42 30 45 27 44"
              fill="none"
              stroke="#FAF8F3"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </Reveal>
        <Reveal as="p" className="s14-said" delay={0.15} duration={1.6}>
          Bas itna hi kehna tha.
        </Reveal>
        <Reveal as="p" className="s14-tuesday" delay={0.35} duration={1.8} blur>
          {invitation.day}?
        </Reveal>
        <Reveal as="p" className="s14-signature" delay={0.55} duration={1.8}>
          {invitation.signature}
        </Reveal>
        <Reveal as="p" className="s14-book" delay={0.75} duration={1.8}>
          {invitation.bookTitle}
        </Reveal>
      </div>
    </section>
  )
}
