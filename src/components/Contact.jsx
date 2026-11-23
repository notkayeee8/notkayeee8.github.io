import { EMAIL, externalLinks } from '../data/content'
import useCopyEmail from '../hooks/useCopyEmail'
import Reveal from './Reveal'
import SocialIcon from './SocialIcon'

export default function Contact({ reducedMotion }) {
  const { copied, copyEmail } = useCopyEmail()

  const handleCopy = (event) => {
    event.preventDefault()
    copyEmail()
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head" reducedMotion={reducedMotion}>
          <span className="section-tag">03 — Contact</span>
          <h2>Let's connect.</h2>
        </Reveal>
        <div className="contact-grid" style={{ gridTemplateColumns: '1fr' }}>
          <Reveal className="contact-left" reducedMotion={reducedMotion}>
            <div className="social-grid">
              <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="soc-icon">
                  <SocialIcon name="github" />
                </span>
                <div>
                  <strong>GitHub</strong>
                  <span>github.com/notkayeee8</span>
                </div>
              </a>
              <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="soc-icon">
                  <SocialIcon name="facebook" />
                </span>
                <div>
                  <strong>Facebook</strong>
                  <span>facebook.com/kris</span>
                </div>
              </a>
              <a href="#" className="social-card" onClick={handleCopy} aria-label={`Copy email address ${EMAIL}`}>
                <span className="soc-icon">
                  <SocialIcon name="gmail" />
                </span>
                <div>
                  <strong>Gmail</strong>
                  <span>{copied ? 'Copied!' : EMAIL}</span>
                </div>
              </a>
              <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="soc-icon">
                  <SocialIcon name="instagram" />
                </span>
                <div>
                  <strong>Instagram</strong>
                  <span>@urcutiee_kayeee</span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
