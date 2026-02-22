import { useState, useEffect, useRef } from 'react'

/**
 * Attach the returned ref to any element.
 * Adds the 'is-visible' class once the element scrolls into the viewport.
 * Disconnects after first trigger so it only runs once.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in view (e.g. above the fold), show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

/**
 * Attach to a container element.
 * Each child with [data-reveal-item] gets 'is-visible' added
 * with a staggered setTimeout delay.
 */
export function useRevealStagger(staggerMs = 80, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = Array.from(container.querySelectorAll('[data-reveal-item]'))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('is-visible'), i * staggerMs)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.08, ...options }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerMs]) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

/**
 * Counts from 0 to `target` when the returned ref enters the viewport.
 * Returns { value, ref } — attach ref to a wrapper element.
 */
export function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return

    let frame = 0
    const totalFrames = Math.round(duration / 16)

    const timer = setInterval(() => {
      frame++
      // ease-out curve: starts fast, slows at end
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3)
      setValue(Math.round(progress * target))

      if (frame >= totalFrames) {
        setValue(target)
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [active, target, duration])

  return { value, ref }
}
