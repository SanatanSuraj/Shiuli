/**
 * A tiny generative sound engine — everything is synthesised in the
 * browser with the Web Audio API, so it is original by construction.
 *
 * Three layers, mixed by scroll position:
 *   · rails  — filtered noise, a distant train (opening → red signal)
 *   · pad    — two warm detuned tones, barely there (stillness → alta)
 *   · chime  — an occasional soft bell while the pad is awake
 *
 * The engine only exists after the user taps the sound toggle.
 * The story never depends on it.
 */

let ctx = null
let master = null
let railsGain = null
let padGain = null
let chimeTimer = null
let started = false
let lastProgress = 0

function makeNoiseBuffer(context) {
  const seconds = 2.5
  const buffer = context.createBuffer(1, context.sampleRate * seconds, context.sampleRate)
  const data = buffer.getChannelData(0)
  let last = 0
  for (let i = 0; i < data.length; i++) {
    // brown-ish noise: integrate white noise for a deep rumble
    const white = Math.random() * 2 - 1
    last = (last + 0.02 * white) / 1.02
    data[i] = last * 3.2
  }
  return buffer
}

function buildGraph() {
  ctx = new (window.AudioContext || window.webkitAudioContext)()

  master = ctx.createGain()
  master.gain.value = 0
  master.connect(ctx.destination)

  // ── rails: looping brown noise through a slow-breathing lowpass ──
  const noise = ctx.createBufferSource()
  noise.buffer = makeNoiseBuffer(ctx)
  noise.loop = true

  const railFilter = ctx.createBiquadFilter()
  railFilter.type = 'lowpass'
  railFilter.frequency.value = 240
  railFilter.Q.value = 0.4

  const breath = ctx.createOscillator()
  breath.frequency.value = 0.13
  const breathDepth = ctx.createGain()
  breathDepth.gain.value = 90
  breath.connect(breathDepth)
  breathDepth.connect(railFilter.frequency)

  railsGain = ctx.createGain()
  railsGain.gain.value = 0
  noise.connect(railFilter)
  railFilter.connect(railsGain)
  railsGain.connect(master)
  noise.start()
  breath.start()

  // ── pad: two barely-detuned warm sines ──
  padGain = ctx.createGain()
  padGain.gain.value = 0
  const padFilter = ctx.createBiquadFilter()
  padFilter.type = 'lowpass'
  padFilter.frequency.value = 900
  padFilter.connect(padGain)
  padGain.connect(master)
  ;[196.0, 196.7, 294.3].forEach((freq, i) => {
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq
    const g = ctx.createGain()
    g.gain.value = i === 2 ? 0.08 : 0.16
    osc.connect(g)
    g.connect(padFilter)
    osc.start()
  })

  // ── chime: a soft bell, only while the pad layer is audible ──
  const scheduleChime = () => {
    const delay = 9000 + Math.random() * 7000
    chimeTimer = setTimeout(() => {
      if (ctx && padGain.gain.value > 0.02) {
        const now = ctx.currentTime
        const osc = ctx.createOscillator()
        osc.type = 'sine'
        osc.frequency.value = [523.25, 659.25, 783.99][Math.floor(Math.random() * 3)]
        const g = ctx.createGain()
        g.gain.setValueAtTime(0.0001, now)
        g.gain.exponentialRampToValueAtTime(0.045, now + 0.06)
        g.gain.exponentialRampToValueAtTime(0.0001, now + 3.4)
        osc.connect(g)
        g.connect(master)
        osc.start(now)
        osc.stop(now + 3.6)
      }
      scheduleChime()
    }, delay)
  }
  scheduleChime()
}

function applyProgress(p) {
  if (!ctx) return
  const t = ctx.currentTime
  // rails: full during the train, fading to a whisper past the red signal
  let rails
  if (p < 0.16) rails = 0.4
  else if (p < 0.3) rails = 0.4 * (1 - (p - 0.16) / 0.14) + 0.02
  else rails = 0.02 * Math.max(0, 1 - (p - 0.3) / 0.2)
  // pad: wakes after the stillness, sleeps before the final letter
  let pad = 0
  if (p > 0.3 && p < 0.85) {
    const inRamp = Math.min(1, (p - 0.3) / 0.1)
    const outRamp = Math.min(1, (0.85 - p) / 0.1)
    pad = 0.16 * Math.min(inRamp, outRamp)
  }
  railsGain.gain.setTargetAtTime(rails, t, 0.6)
  padGain.gain.setTargetAtTime(pad, t, 0.9)
}

export const audio = {
  get running() {
    return started
  },
  async toggle() {
    if (!started) {
      if (!ctx) buildGraph()
      await ctx.resume()
      master.gain.setTargetAtTime(0.8, ctx.currentTime, 0.8)
      started = true
      applyProgress(lastProgress)
    } else {
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.3)
      await new Promise((r) => setTimeout(r, 500))
      ctx.suspend()
      started = false
    }
    return started
  },
  setProgress(p) {
    lastProgress = p
    if (started) applyProgress(p)
  },
  dispose() {
    clearTimeout(chimeTimer)
    if (ctx) ctx.close()
    ctx = null
    started = false
  },
}
