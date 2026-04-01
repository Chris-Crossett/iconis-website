import { useState, useEffect } from 'react';
import IMAGES from '../data/images';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => onNavigate('home')}>
          <img src={IMAGES.logo} alt="Iconis Bioceuticals" />
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''} ${scrolled ? 'navbar__link--dark' : ''}`}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${scrolled ? 'navbar__hamburger--dark' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileOpen ? 'bar bar--1 bar--open' : 'bar bar--1'} />
          <span className={mobileOpen ? 'bar bar--2 bar--open' : 'bar bar--2'} />
          <span className={mobileOpen ? 'bar bar--3 bar--open' : 'bar bar--3'} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => {
                onNavigate(link.id);
                setMobileOpen(false);
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
