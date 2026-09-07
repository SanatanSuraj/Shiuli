import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { invitation } from '../config/invitation.js'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The photograph, integrated as a layered paper composition —
 * never a plain rectangular card. Two shapes:
 *   "arch"  — a tall arched window (opening section)
 *   "leaf"  — a soft organic mask (realization section)
 * The image drifts very slowly inside its mask as the page scrolls
 * (a whisper of ken burns). If public/my-photo.jpg is missing, an
 * elegant paper placeholder holds the exact same space.
 */
export default function Photo({
  variant = 'arch',
  alt = 'Meri tasveer',
  src = invitation.photo,
  focus = '50% 22%', // which part of the photo the mask keeps — biased toward the face
  className = '',
}) {
  const [missing, setMissing] = useState(false)
  const figRef = useRef(null)

  useLayoutEffect(() => {
    const fig = figRef.current
    if (!fig || missing || prefersReducedMotion()) return
    const img = fig.querySelector('img')
    if (!img) return
    const ctx = gsap.context(() => {
      // drift anchored to the top so the face is never scaled out of frame
      gsap.set(img, { transformOrigin: '50% 8%' })
      gsap.fromTo(
        img,
        { scale: 1.1 },
        {
          scale: 1.0,
          ease: 'none',
          scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: 1 },
        }
      )
    }, fig)
    return () => ctx.revert()
  }, [missing])

  return (
    <figure className={`photo photo--${variant} ${className}`} ref={figRef}>
      <span className="photo-paper" aria-hidden="true" />
      <div className="photo-frame">
        {missing ? (
          <div className="photo-placeholder" aria-hidden="true">
            <span className="photo-placeholder-mark" />
            <span className="photo-placeholder-text">my‑photo.jpg</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            style={{ objectPosition: focus }}
            loading="lazy"
            decoding="async"
            onError={() => setMissing(true)}
          />
        )}
        <span className="photo-veil" aria-hidden="true" />
      </div>
    </figure>
  )
}
