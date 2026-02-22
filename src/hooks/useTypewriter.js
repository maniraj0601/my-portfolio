import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * Returns { text, isDone } where isDone is true while pausing
 * between the current word finishing and deletion starting.
 */
export function useTypewriter(words, { typeSpeed = 75, deleteSpeed = 40, pauseMs = 2200 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const word = words[wordIndex % words.length]

    if (phase === 'typing') {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      }
      // Word fully typed — pause before deleting
      const t = setTimeout(() => setPhase('deleting'), pauseMs)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed)
        return () => clearTimeout(t)
      }
      // Fully deleted — move to next word (intentional sync setState to chain phases)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWordIndex(i => i + 1)
      setPhase('typing')
    }
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return { text, isTyping: phase === 'typing' }
}
