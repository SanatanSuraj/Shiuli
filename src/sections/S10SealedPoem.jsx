import Reveal from '../components/Reveal.jsx'
import { invitation } from '../config/invitation.js'

/**
 * The sealed chapter. Only the title is shown; the poem itself
 * stays folded inside the paper, kept for the real moment.
 */
export default function S10SealedPoem() {
  return (
    <section className="section s10" aria-label={invitation.poemTitle}>
      <div className="wrap s10-wrap">
        <Reveal className="s10-sheet-outer" y={44}>
          <div className="s10-sheet">
            <span className="s10-foldline" aria-hidden="true" />
            <p className="s10-label">ek poem · abhi tak kisi ne nahi suni</p>
            <h2 className="s10-title">{invitation.poemTitle}</h2>
            <span className="s10-rule" aria-hidden="true" />
            <div className="s10-seal" aria-hidden="true">
              <svg viewBox="0 0 40 40">
                <path d="M20 8 a12 12 0 0 1 0 24 z" fill="#F3EEE5" opacity="0.9" />
                <circle cx="20" cy="20" r="12" fill="none" stroke="#F3EEE5" strokeWidth="1.4" opacity="0.85" />
              </svg>
            </div>
          </div>
        </Reveal>

        <div className="s10-copy">
          <Reveal as="p" className="s10-line">
            Some poems are meant to be read.
          </Reveal>
          <Reveal as="p" className="s10-line" delay={0.12}>
            Some are meant to be heard.
          </Reveal>
          <Reveal as="p" className="s10-promise" delay={0.28} duration={1.6}>
            Ye wali... main aapko <em>khud</em> sunaunga.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
