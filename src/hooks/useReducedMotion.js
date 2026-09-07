import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'

function subscribe(cb) {
  const mq = window.matchMedia(query)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getSnapshot() {
  return window.matchMedia(query).matches
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia(query).matches
}

export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
