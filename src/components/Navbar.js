import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  // Function to determine if a nav link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src={require('../assets/images/icons/KaiNav.png')} alt="Kai Solik" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActiveLink('/') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActiveLink('/about') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link 
            to="/fun" 
            className={`nav-link ${isActiveLink('/fun') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            Fun
          </Link>
          <a 
            href="#contact" 
            className="nav-link inactive" 
            onClick={scrollToTop}
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActiveLink('/') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${isActiveLink('/about') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link 
            to="/fun" 
            className={`mobile-nav-link ${isActiveLink('/fun') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            Fun
          </Link>
          <a 
            href="#contact" 
            className="mobile-nav-link inactive" 
            onClick={scrollToTop}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
