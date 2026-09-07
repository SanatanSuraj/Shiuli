import { useEffect, useState } from 'react'
import { audio } from '../lib/audio.js'

/**
 * The only chrome on the page: a small, quiet sound control.
 * Sound is off by default and never required to follow the story.
 */
export default function SoundToggle() {
  const [on, setOn] = useState(false)

  useEffect(() => () => audio.dispose(), [])

  const toggle = async () => {
    const state = await audio.toggle()
    setOn(state)
  }

  return (
    <button
      type="button"
      className={`sound-toggle ${on ? 'is-on' : ''}`}
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Awaaz band karein' : 'Halki si awaaz sunein'}
      title={on ? 'Sound off' : 'Sound on'}
    >
      <span className="sound-bars" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </button>
  )
}
