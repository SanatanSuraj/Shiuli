import { useEffect } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from './useReducedMotion.js'

/**
 * Gentle 3D tilt that follows a fine pointer. No-op on touch devices
 * and when the user prefers reduced motion — the element simply rests.
 */
export default function useTilt(ref, { max = 7, perspective = 900 } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    el.style.transformPerspective = `${perspective}px`
    const toX = gsap.quickTo(el, 'rotationX', { duration: 0.9, ease: 'power3.out' })
    const toY = gsap.quickTo(el, 'rotationY', { duration: 0.9, ease: 'power3.out' })

    const move = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      toY(px * max * 2)
      toX(-py * max * 2)
    }
    const leave = () => {
      toX(0)
      toY(0)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [ref, max, perspective])
}
