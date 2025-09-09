import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src={require('../assets/images/icons/KaiNav.png')} alt="Kai Solik" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
          <Link to="/about" className="nav-link" onClick={scrollToTop}>About</Link>
          <Link to="/fun" className="nav-link" onClick={scrollToTop}>Fun</Link>
          <a href="#contact" className="nav-link" onClick={scrollToTop}>Contact</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={scrollToTop}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={scrollToTop}>About</Link>
          <Link to="/fun" className="mobile-nav-link" onClick={scrollToTop}>Fun</Link>
          <a href="#contact" className="mobile-nav-link" onClick={scrollToTop}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
