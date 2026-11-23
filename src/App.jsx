import { useState } from 'react'
import About from './components/About'
import BackgroundOrbs from './components/BackgroundOrbs'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Lightbox from './components/Lightbox'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'
import useScrollSpy from './hooks/useScrollSpy'
import useSmoothAnchors from './hooks/useSmoothAnchors'

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { scrolled, activeSection } = useScrollSpy()
  const [lightboxItem, setLightboxItem] = useState(null)

  useSmoothAnchors(prefersReducedMotion)

  const openImage = (image, event) => setLightboxItem({ ...image, trigger: event.currentTarget })
  const closeImage = () => setLightboxItem(null)

  return (
    <>
      <CursorGlow prefersReducedMotion={prefersReducedMotion} />
      <BackgroundOrbs />
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <main>
        <Hero reducedMotion={prefersReducedMotion} />
        <About onOpenImage={openImage} reducedMotion={prefersReducedMotion} />
        <Projects reducedMotion={prefersReducedMotion} />
        <Contact reducedMotion={prefersReducedMotion} />
      </main>
      <Footer />
      <Lightbox item={lightboxItem} onClose={closeImage} />
    </>
  )
}
