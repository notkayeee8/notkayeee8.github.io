import { useEffect, useState } from 'react'

// Mirrors the original script: toggle the "scrolled" navbar style and highlight
// the section whose top has passed 140px from the top of the viewport.
export default function useScrollSpy() {
  const [state, setState] = useState({ scrolled: false, activeSection: 'home' })

  useEffect(() => {
    const update = () => {
      let current = 'home'
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id
      })
      setState({ scrolled: window.scrollY > 20, activeSection: current })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return state
}
