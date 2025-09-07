import React, { useState } from 'react';
import './Hero.css';
import { BlurIn } from './BlurIn';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the theme class on the document body
    document.body.classList.toggle('light-mode');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <BlurIn className="hero-name" delay={0}>
            Kai Solik
          </BlurIn>
          <BlurIn className="hero-title" delay={0.3}>
            UX/UI Designer
          </BlurIn>
        </div>
        <div className="toggle-section">
          <BlurIn delay={0.6}>
            <button 
              className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`}
              onClick={handleToggle}
            >
              <div className="toggle-slider">
                <div className="toggle-handle"></div>
              </div>
            </button>
          </BlurIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
