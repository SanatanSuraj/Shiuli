import { memo } from 'react'

/**
 * Shiuli petals — her name, drifting through the page.
 * The shiuli (night-flowering jasmine) has slender ivory petals on a
 * small saffron tube; here they fall slowly, few and quiet, never
 * confetti. Pure CSS animation; frozen into a still scatter when the
 * visitor prefers reduced motion.
 *
 * Each entry: [left %, fall duration s, delay s, scale, sway px, resting top %]
 */
const DRIFTS = [
  [8, 26, -2, 0.85, 26, 18],
  [22, 34, -14, 0.6, 38, 62],
  [37, 29, -7, 0.75, 22, 34],
  [55, 38, -20, 0.55, 34, 78],
  [68, 27, -4, 0.9, 28, 24],
  [81, 33, -16, 0.65, 40, 55],
  [91, 30, -10, 0.7, 24, 40],
]

function PetalShape() {
  return (
    <svg viewBox="0 0 24 32" aria-hidden="true">
      <path
        d="M12 2 C18.5 8.5 20.5 17 12 29 C3.5 17 5.5 8.5 12 2 Z"
        fill="#FCF7EF"
        stroke="#B85C64"
        strokeOpacity="0.28"
        strokeWidth="0.8"
      />
      <path d="M12 22 C13.8 24.5 13.6 27 12 29 C10.4 27 10.2 24.5 12 22 Z" fill="#C4763F" opacity="0.55" />
    </svg>
  )
}

function Petals({ count = 7, className = '' }) {
  return (
    <div className={`petals ${className}`} aria-hidden="true">
      {DRIFTS.slice(0, count).map(([x, d, delay, s, sway, rest], i) => (
        <span
          key={i}
          className="petal"
          style={{
            '--x': `${x}%`,
            '--d': `${d}s`,
            '--delay': `${delay}s`,
            '--s': s,
            '--sway': `${sway}px`,
            '--rest': `${rest}%`,
          }}
        >
          <PetalShape />
        </span>
      ))}
    </div>
  )
}

export default memo(Petals)
