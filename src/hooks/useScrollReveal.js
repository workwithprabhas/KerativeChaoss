import { useEffect } from 'react'

/**
 * Reveals every element carrying the `.rise` class as it scrolls into view,
 * mirroring the IntersectionObserver behaviour from the original socio.html.
 * Falls back to instantly showing everything when reduced-motion is requested
 * or IntersectionObserver is unavailable.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = document.querySelectorAll('.rise, .rise-x')

    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = Math.min(i * 60, 220) + 'ms'
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
