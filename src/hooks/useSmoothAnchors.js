import { useEffect } from 'react'

export default function useSmoothAnchors(prefersReducedMotion) {
  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash.length <= 1) return

      const target = document.querySelector(hash)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [prefersReducedMotion])
}
