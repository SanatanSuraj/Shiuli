import Reveal from '../components/Reveal.jsx'
import Petals from '../components/Petals.jsx'
import { invitation } from '../config/invitation.js'

export default function S08Wish() {
  return (
    <section className="section s08" aria-label="Ek chhoti si khwahish">
      <Petals count={6} />
      <div className="wrap s08-wrap">
        <Reveal as="h2" className="s08-big" y={36} blur>
          Bas ek chhoti si
          <br />
          <em>khwahish</em> hai...
        </Reveal>
        <Reveal as="p" className="s08-when" delay={0.15}>
          Is {invitation.day}...
        </Reveal>
        <Reveal as="p" className="s08-if" delay={0.25}>
          agar aap chaho.
        </Reveal>
      </div>
    </section>
  )
}
