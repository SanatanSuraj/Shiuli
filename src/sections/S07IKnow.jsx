import Reveal from '../components/Reveal.jsx'

export default function S07IKnow() {
  return (
    <section className="section s07" aria-label="Main jaanta hoon">
      <div className="wrap s07-col">
        <Reveal as="p" className="s07-line lede lede--serif">
          Main jaanta hoon...
        </Reveal>
        <Reveal as="p" className="s07-line">
          aapke apne reasons hain.
        </Reveal>
        <Reveal as="p" className="s07-line">
          Aur main un reasons ko badalne nahi aaya.
        </Reveal>
        <Reveal as="p" className="s07-line s07-quiet">
          Na aapse koi jawab maangne.
          <br />
          Na koi faisla.
        </Reveal>
        <Reveal as="p" className="s07-close">
          Ye sirf ek invitation hai. <span className="s07-nopressure">Koi pressure nahi.</span>
        </Reveal>
      </div>
    </section>
  )
}
