import Reveal from '../components/Reveal.jsx'
import Parallax from '../components/Parallax.jsx'
import Photo from '../components/Photo.jsx'
import InkUnderline from '../components/InkUnderline.jsx'
import { invitation } from '../config/invitation.js'

export default function S06Realization() {
  return (
    <section className="section s06" aria-label="Ehsaas">
      <div className="wrap s06-grid">
        <Parallax speed={0.18} className="s06-photo">
          <Reveal y={40}>
            <Photo
              variant="leaf"
              src={invitation.usPhoto}
              alt="Hum dono — us safar ke beech"
              focus="50% 58%"
            />
          </Reveal>
        </Parallax>
        <div className="s06-lines">
          <Reveal as="p" className="s06-line">
            Phir pata hi nahi chala...
          </Reveal>
          <Reveal as="p" className="s06-line" delay={0.1}>
            kab aap mere liye...
          </Reveal>
          <Reveal as="p" className="s06-line" delay={0.15}>
            sirf ek insaan se zyada ban gayi.
          </Reveal>
        </div>
      </div>
      <div className="wrap s06-confession-wrap">
        <Reveal as="p" className="s06-confession" y={20} duration={2} blur>
          Kuch zyada hi <em>gehra lagav</em> ho gaya.
        </Reveal>
        <InkUnderline className="s06-ink" delay={1.4} />
      </div>
    </section>
  )
}
