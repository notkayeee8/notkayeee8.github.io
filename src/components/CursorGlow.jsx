import { useEffect, useRef } from 'react'

export default function CursorGlow({ prefersReducedMotion }) {
  const glowRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const glow = glowRef.current
    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0
    let shown = false

    const onMove = (event) => {
      tx = event.clientX
      ty = event.clientY
      if (!shown) {
        glow.style.opacity = '1'
        shown = true
      }
    }

    const onLeave = () => {
      glow.style.opacity = '0'
      shown = false
    }

    const frame = () => {
      mx += (tx - mx) * 0.12
      my += (ty - my) * 0.12
      glow.style.left = `${mx}px`
      glow.style.top = `${my}px`
      animationFrame = requestAnimationFrame(frame)
    }

    let animationFrame = requestAnimationFrame(frame)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [prefersReducedMotion])

  return <div className="cursor-glow" id="cursorGlow" ref={glowRef} aria-hidden="true" />
}
