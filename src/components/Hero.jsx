import { stats } from '../data/content'
import Reveal from './Reveal'

export default function Hero({ reducedMotion }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-left" reducedMotion={reducedMotion}>
          <p className="eyebrow">Hello, I'm</p>
          <h1>
            Kris Kaye
            <br />
            <span>Magallon Sanchez</span>
          </h1>
          <p className="role">BSCS Student &bull; Gandaw Dancer at TCGC</p>
          <p className="hero-desc">
            Computer Science student passionate about technology and software development. Balancing code and
            choreography — building digital experiences by day, performing as a Gandaw dancer at TCGC by night.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="hero-right" delay={2} reducedMotion={reducedMotion}>
          <div className="profile-card">
            <div className="profile-img">
              <img src="/profile.jpg" alt="Kris Kaye Magallon Sanchez" id="profileImg" />
              <div className="img-glow" />
            </div>
            <div className="profile-badge">
              <span className="dot" /> Available for collaborations
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
