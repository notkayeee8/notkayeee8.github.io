import { galleryImages } from '../data/content'
import Reveal from './Reveal'

export default function DanceGallery({ onOpenImage, reducedMotion }) {
  return (
    <div className="dance-gallery">
      {galleryImages.map((image) => (
        <Reveal
          as="figure"
          key={image.src}
          className="dance-item"
          delay={image.delay}
          reducedMotion={reducedMotion}
          role="button"
          tabIndex={0}
          aria-label={`Open ${image.caption}`}
          onClick={(event) => onOpenImage(image, event)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onOpenImage(image, event)
            }
          }}
        >
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.caption}</figcaption>
        </Reveal>
      ))}
    </div>
  )
}
