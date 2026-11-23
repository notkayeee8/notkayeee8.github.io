import { externalLinks } from '../data/content'
import useCopyEmail from '../hooks/useCopyEmail'

export default function Footer() {
  const { copyEmail } = useCopyEmail()

  const handleCopy = (event) => {
    event.preventDefault()
    copyEmail()
  }

  return (
    <footer>
      <div className="container foot-inner">
        <div>
          <strong>Kris Kaye Magallon Sanchez</strong>
          <span>BSCS Student — Gandaw Dancer at TCGC</span>
        </div>
        <div className="foot-links">
          <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#" onClick={handleCopy}>
            Gmail
          </a>
          <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="copyright">© 2026 Kris Kaye Magallon Sanchez. Built with passion &amp; neon.</p>
    </footer>
  )
}
