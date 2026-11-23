import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects({ reducedMotion }) {
  const openProject = (href) => window.open(href, '_blank', 'noopener,noreferrer')

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <Reveal className="section-head" reducedMotion={reducedMotion}>
          <span className="section-tag">02 — Projects</span>
          <h2>Selected works.</h2>
          <p className="section-sub">Simple student projects — built while learning.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project) => {
            const interactive = Boolean(project.href)
            const cardStyle = project.comingSoon
              ? { opacity: 0.85, borderStyle: 'dashed' }
              : { cursor: 'pointer' }

            return (
              <Reveal
                as="article"
                key={project.number}
                className="project-card"
                delay={project.delay}
                reducedMotion={reducedMotion}
                style={cardStyle}
                role={interactive ? 'link' : undefined}
                tabIndex={interactive ? 0 : undefined}
                aria-label={interactive ? `Open ${project.title} on GitHub` : undefined}
                onClick={interactive ? () => openProject(project.href) : undefined}
                onKeyDown={
                  interactive
                    ? (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          openProject(project.href)
                        }
                      }
                    : undefined
                }
              >
                <div className="proj-top">
                  <span className="proj-num">{project.number}</span>
                  <span className="proj-tag">{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="proj-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  {project.comingSoon ? (
                    <span className="btn btn-sm btn-ghost" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                      Stay tuned
                    </span>
                  ) : (
                    <>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="btn btn-sm btn-primary"
                      >
                        View Project
                      </a>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="btn btn-sm btn-ghost"
                      >
                        GitHub
                      </a>
                    </>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
