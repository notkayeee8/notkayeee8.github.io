import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', reducedMotion = false, children, ...props }) {
  const ref = useRef(null)
  useReveal(ref, !reducedMotion)

  useEffect(() => {
    if (reducedMotion) ref.current?.classList.add('in')
  }, [reducedMotion])

  const delayClass = delay ? ` d${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${delayClass}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Tag>
  )
}
