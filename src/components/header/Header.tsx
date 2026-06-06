import React, { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#briefcase' },
  { label: 'Contacto', href: '#contact', highlight: true },
]

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [toggle])

  const closeMenu = () => setToggle(false)

  return (
    <>
      <header className={`hero ${scrolled ? 'hero--scrolled' : ''}`}>
        <div className="hero__container">
          <div className="hero__logo">
            <a href="#" className="hero__logo-link" onClick={closeMenu}>
              <h2 translate="no">JLLC</h2>
            </a>
          </div>

          <nav className="nav__hero nav__hero--desktop" aria-label="Navegación principal">
            <ul className="nav__items">
              {navLinks.map(({ label, href, highlight }) => (
                <li key={href} className="nav__item">
                  <a
                    href={href}
                    className={`nav__link ${highlight ? 'shade' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`toggle ${toggle ? 'toggle--open' : ''}`}
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={toggle}
          >
            <span className="toggle__line l1" />
            <span className="toggle__line l2" />
            <span className="toggle__line l3" />
          </button>
        </div>
      </header>

      <div
        className={`nav__overlay ${toggle ? 'nav__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`nav__drawer ${toggle ? 'nav__drawer--open' : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!toggle}
      >
        <div className="nav__drawer-header">
          <span className="nav__drawer-title" translate="no">JLLC</span>
          <button
            type="button"
            className="nav__drawer-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>
        <ul className="nav__drawer-items">
          {navLinks.map(({ label, href, highlight }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav__drawer-link ${highlight ? 'nav__drawer-link--highlight' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
