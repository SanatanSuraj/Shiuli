import { useRef } from 'react'
import Reveal from '../components/Reveal.jsx'
import InkUnderline from '../components/InkUnderline.jsx'
import useTilt from '../hooks/useTilt.js'
import { invitation } from '../config/invitation.js'

export default function S11Invitation() {
  const cardRef = useRef(null)
  useTilt(cardRef, { max: 4 })

  return (
    <section className="section s11" aria-label="Nimantran">
      <div className="wrap s11-wrap">
        <Reveal className="s11-card-outer" y={50}>
          <div className="s11-float">
            <div className="s11-card" ref={cardRef}>
            <div className="s11-card-border">
              <p className="s11-kicker">ek nimantran</p>
              <h2 className="s11-name">{invitation.herName}</h2>
              <span className="s11-dot" aria-hidden="true" />
              <p className="s11-day">{invitation.day}</p>
              <p className="s11-datetime">
                {invitation.date}
                <span aria-hidden="true"> · </span>
                {invitation.time}
              </p>
              <p className="s11-place">{invitation.location}</p>
            </div>
            </div>
          </div>
        </Reveal>
        <div className="s11-ask">
          <Reveal as="p" className="s11-question" delay={0.25} duration={1.8} blur>
            Will you come?
          </Reveal>
          <InkUnderline className="s11-ink" delay={1.6} />
        </div>
      </div>
    </section>
  )
}
