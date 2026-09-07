import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * A hand-drawn red underline that writes itself once, like a pen
 * pausing under a word that matters.
 */
export default function InkUnderline({ className = '', delay = 0.35 }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const path = ref.current
    if (!path) return
    if (prefersReducedMotion()) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        delay,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: path, start: 'top 85%', once: true },
      })
    })
    return () => ctx.revert()
  }, [delay])

  return (
    <svg className={`ink ${className}`} viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
      <path
        ref={ref}
        d="M4 8 C 42 3, 86 10.5, 132 6.5 C 158 4.2, 182 7.5, 196 5.2"
        fill="none"
        stroke="var(--red)"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}
