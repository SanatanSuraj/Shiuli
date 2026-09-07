import Reveal from '../components/Reveal.jsx'

/**
 * Almost nothing happens here. That is the point.
 */
export default function S04Stillness() {
  return (
    <section className="section s04" aria-label="Thehraav">
      <div className="wrap s04-wrap">
        <Reveal as="p" className="s04-line" duration={1.6} y={16}>
          Ab manzil se zyada sukoon...
        </Reveal>
        <Reveal as="p" className="s04-line" duration={1.6} y={16}>
          aapke saath har us lamhe mein milta hai...
        </Reveal>
        <Reveal as="p" className="s04-line s04-line--last" duration={1.8} y={16}>
          jahan waqt bhi kuch der ke liye,
          <br />
          bas humein dekh kar thehar jaata hai.
        </Reveal>
      </div>
    </section>
  )
}
