import Reveal from '../components/Reveal.jsx'

/**
 * The most important section. Visually the calmest.
 */
export default function S13NoPressure() {
  return (
    <section className="section s13" aria-label="Koi pressure nahi">
      <div className="wrap s13-col">
        <Reveal as="p" className="s13-first lede lede--serif">
          Ek baat aur...
        </Reveal>
        <Reveal as="p" className="s13-line">
          Is invitation mein koi pressure nahi hai.
        </Reveal>
        <Reveal as="p" className="s13-line">
          Agar aap nahi aa pao...
          <br />
          ya abhi nahi...
        </Reveal>
        <Reveal as="p" className="s13-line">
          toh bhi bilkul theek hai.
        </Reveal>
        <Reveal as="p" className="s13-always" duration={1.8}>
          Invitation hamesha invitation hi hota hai.
        </Reveal>
        <Reveal as="p" className="s13-heart" duration={2}>
          Jab dil kahe...
        </Reveal>
      </div>
    </section>
  )
}
