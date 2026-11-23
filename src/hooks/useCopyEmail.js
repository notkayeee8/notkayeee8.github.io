import { useCallback, useEffect, useRef, useState } from 'react'
import { EMAIL } from '../data/content'

export default function useCopyEmail() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const input = document.createElement('textarea')
      input.value = EMAIL
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }

    setCopied(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1400)
  }, [])

  return { copied, copyEmail }
}
