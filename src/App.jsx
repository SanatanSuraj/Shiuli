import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Grain from './components/Grain.jsx'
import SoundToggle from './components/SoundToggle.jsx'
import { audio } from './lib/audio.js'
import { prefersReducedMotion } from './hooks/useReducedMotion.js'

import S01Opening from './sections/S01Opening.jsx'
import S02Train from './sections/S02Train.jsx'
import S03Signal from './sections/S03Signal.jsx'
import S04Stillness from './sections/S04Stillness.jsx'
import S04bMoments from './sections/S04bMoments.jsx'
import S05Book from './sections/S05Book.jsx'
import S06Realization from './sections/S06Realization.jsx'
import S07IKnow from './sections/S07IKnow.jsx'
import S08Wish from './sections/S08Wish.jsx'
import S09Alta from './sections/S09Alta.jsx'
import S10SealedPoem from './sections/S10SealedPoem.jsx'
import S11Invitation from './sections/S11Invitation.jsx'
import S12Asking from './sections/S12Asking.jsx'
import S13NoPressure from './sections/S13NoPressure.jsx'
import S14Final from './sections/S14Final.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // overall scroll progress → drives the generative soundscape
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      audio.setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    if (prefersReducedMotion()) {
      return () => window.removeEventListener('scroll', onScroll)
    }

    // gentle momentum scrolling, kept in sync with ScrollTrigger
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      window.removeEventListener('scroll', onScroll)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Grain />
      <main>
        <S01Opening />
        <S02Train />
        <S03Signal />
        <S04Stillness />
        <S04bMoments />
        <S05Book />
        <S06Realization />
        <S07IKnow />
        <S08Wish />
        <S09Alta />
        <S10SealedPoem />
        <S11Invitation />
        <S12Asking />
        <S13NoPressure />
        <S14Final />
      </main>
      <SoundToggle />
    </>
  )
}
