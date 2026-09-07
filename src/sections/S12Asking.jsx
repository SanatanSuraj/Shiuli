import Reveal from '../components/Reveal.jsx'
import { invitation } from '../config/invitation.js'

export default function S12Asking() {
  const lines = ['Bas thoda sa waqt.', 'Thodi si baat.', 'Thoda sa sukoon.', 'Thoda sa Alta.']
  return (
    <section className="section s12" aria-label="Main kya maang raha hoon">
      <div className="wrap s12-wrap">
        {lines.map((line, i) => (
          <Reveal as="p" className="s12-line" key={line} delay={i * 0.08}>
            {line}
          </Reveal>
        ))}
        <Reveal as="p" className="s12-line s12-poemline" delay={0.4}>
          Aur ek poem.
        </Reveal>
        <Reveal as="p" className="s12-title" delay={0.55}>
          {invitation.poemTitle}
        </Reveal>
      </div>
    </section>
  )
}
