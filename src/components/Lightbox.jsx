import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ item, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      item.trigger?.focus?.()
    }
  }, [item, onClose])

  if (!item) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget || event.target.tagName === 'IMG') onClose()
  }

  return createPortal(
    <div className="lightbox open" role="dialog" aria-modal="true" aria-label="Image preview" onClick={handleBackdropClick}>
      <button type="button" className="lightbox-close" ref={closeButtonRef} onClick={onClose} aria-label="Close image preview">
        ×
      </button>
      <img src={item.src} alt={item.alt} />
      {item.caption && <span className="lightbox-cap">{item.caption}</span>}
    </div>,
    document.body,
  )
}
