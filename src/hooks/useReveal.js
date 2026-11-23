import { useEffect } from 'react'

let sharedObserver

function getObserver() {
  if (sharedObserver || typeof IntersectionObserver === 'undefined') return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          sharedObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )

  return sharedObserver
}

// Adds the original ".in" class when an element scrolls into view.
export default function useReveal(ref, enabled = true) {
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return

    const observer = getObserver()
    if (!observer) {
      element.classList.add('in')
      return
    }

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [ref, enabled])
}
