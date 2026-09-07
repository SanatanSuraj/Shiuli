import Reveal from '../components/Reveal.jsx'
import Parallax from '../components/Parallax.jsx'
import { invitation } from '../config/invitation.js'

/**
 * Kuch lamhe — real photographs, laid out like prints scattered on a
 * table. They follow the stillness section, where time learns to pause;
 * these are the moments it paused for.
 */
const SPEEDS = [0.24, 0.1, 0.3, 0.16, 0.26]

export default function S04bMoments() {
  return (
    <section className="section s045" aria-label="Kuch lamhe">
      <div className="wrap">
        <Reveal as="p" className="kicker kicker--gold s045-kicker">
          kuch lamhe · jo thehar gaye
        </Reveal>
        <div className="s045-strip">
          {invitation.moments.map((m, i) => (
            <Parallax key={m.src} speed={SPEEDS[i % SPEEDS.length]} className={`s045-item s045-item--${i + 1}`}>
              <Reveal y={44} delay={i * 0.12}>
                <figure className="snap">
                  <img
                    src={m.src}
                    alt={`Hamara ek lamha — ${i + 1}`}
                    style={{ objectPosition: m.focus }}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </Reveal>
            </Parallax>
          ))}
        </div>
        <Reveal as="p" className="s045-note">
          inhi lamhon ne mujhe rukna sikhaya.
        </Reveal>
      </div>
    </section>
  )
}
