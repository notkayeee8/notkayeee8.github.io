import DanceGallery from './DanceGallery'
import Reveal from './Reveal'

export default function About({ onOpenImage, reducedMotion }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head" reducedMotion={reducedMotion}>
          <span className="section-tag">01 — About Me</span>
          <h2>
            Driven by code,
            <br />
            defined by movement.
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text" reducedMotion={reducedMotion}>
            <p>
              I'm a <strong>Gandaw dancer at TCGC</strong> and I've been dancing Gandaw for about 3 years now.
            </p>
            <p>
              I love to dance and perform on stage with my group. We practice together, join school events, and
              perform at different activities.
            </p>
            <p>
              I really enjoy it — it helps me stay active, meet new friends, and learn discipline and teamwork.
              Here are some photos from our Gandaw journey.
            </p>
          </Reveal>
        </div>
        <DanceGallery onOpenImage={onOpenImage} reducedMotion={reducedMotion} />
      </div>
    </section>
  )
}
