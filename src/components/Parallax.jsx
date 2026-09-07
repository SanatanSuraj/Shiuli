import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-linked vertical drift. speed > 0 lags behind the page,
 * speed < 0 moves ahead of it. Kept subtle by design.
 */
export default function Parallax({ children, speed = 0.15, className = '', ...rest }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: () => speed * 120 },
        {
          y: () => speed * -120,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
}
