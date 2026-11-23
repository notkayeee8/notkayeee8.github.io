import { useEffect, useState } from 'react'
import { connectDropdown, projectDropdown } from '../data/content'

function Dropdown({ id, menuId, label, items, isOpen, onToggle, onItemClick }) {
  return (
    <li className="dropdown">
      <button
        id={id}
        type="button"
        className={`dropdown-btn${isOpen ? ' open' : ''}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {label} <span className="arrow">&#9660;</span>
      </button>
      <ul id={menuId} className={`dropdown-menu${isOpen ? ' show' : ''}`}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={onItemClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Navbar({ scrolled, activeSection }) {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!event.target.closest?.('.dropdown')) setOpenMenu(null)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('click', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('click', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const closeMobile = () => setMobileOpen(false)
  const closeMenus = () => {
    setOpenMenu(null)
    closeMobile()
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#home" className="logo" onClick={closeMobile}>
          KRIS<span>.</span>
        </a>
        <ul id="navLinks" className={`nav-links${mobileOpen ? ' open' : ''}`}>
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMobile}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMobile}>
              About
            </a>
          </li>
          <Dropdown
            id="dropdownBtn"
            menuId="dropdownMenu"
            label="Projects"
            items={projectDropdown}
            isOpen={openMenu === 'projects'}
            onToggle={() => setOpenMenu(openMenu === 'projects' ? null : 'projects')}
            onItemClick={closeMenus}
          />
          <Dropdown
            label="Connect"
            items={connectDropdown}
            isOpen={openMenu === 'connect'}
            onToggle={() => setOpenMenu(openMenu === 'connect' ? null : 'connect')}
            onItemClick={closeMenus}
          />
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMobile}>
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
