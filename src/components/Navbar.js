import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInProjectsSection, setIsInProjectsSection] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  // Function to determine if a nav link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/' && !isInProjectsSection) return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Check if we're on a project page
  const isOnProjectPage = () => {
    return location.pathname.includes('/project') || location.pathname === '/takomo';
  };

  // Check if Case Studies should be active
  const isCaseStudiesActive = () => {
    return isOnProjectPage() || (location.pathname === '/' && isInProjectsSection);
  };

  // Handle Case Studies click
  const handleCaseStudiesClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      // Already on home page, just scroll to projects
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Detect when user scrolls to projects section on home page
  useEffect(() => {
    if (location.pathname !== '/') {
      setIsInProjectsSection(false);
      return;
    }

    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if projects section is in view
        const isInView = rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
        setIsInProjectsSection(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src={require('../assets/images/icons/KaiNav.png')} alt="Kai Solik" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links-container">
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
            <a 
              href="#projects" 
              className={`nav-link ${isCaseStudiesActive() ? 'active' : 'inactive'}`} 
              onClick={handleCaseStudiesClick}
            >
              Case Studies
            </a>
            <Link 
              to="/fun" 
              className={`nav-link ${isActiveLink('/fun') ? 'active' : 'inactive'}`} 
              onClick={scrollToTop}
            >
              Design
            </Link>
            <a 
              href="#contact" 
              className="nav-link inactive" 
              onClick={scrollToTop}
            >
              Contact
            </a>
          </div>
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
          <a 
            href="#projects" 
            className={`mobile-nav-link ${isCaseStudiesActive() ? 'active' : 'inactive'}`} 
            onClick={handleCaseStudiesClick}
          >
            Case Studies
          </a>
          <Link 
            to="/fun" 
            className={`mobile-nav-link ${isActiveLink('/fun') ? 'active' : 'inactive'}`} 
            onClick={scrollToTop}
          >
            Design
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
