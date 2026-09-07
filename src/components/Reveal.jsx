import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades content up softly the first time it enters the viewport.
 * Once revealed, it stays — scrolling back never hides the story.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 30,
  duration = 1.15,
  blur = false,
  className = '',
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.opacity = 1
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    })
    return () => ctx.revert()
  }, [delay, y, duration, blur])

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }} {...rest}>
      {children}
    </Tag>
  )
}
