import React, { useState, useEffect } from 'react';
import './Hero.css';
import { BlurIn } from './BlurIn';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "with some development skills";

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the theme class on the document body
    document.body.classList.toggle('light-mode');
  };

  // Typing effect - starts after a delay to sync with the main title animation
  useEffect(() => {
    if (currentIndex === 0) {
      // Initial delay before starting to type
      const startTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(1);
      }, 1200);
      return () => clearTimeout(startTimeout);
    } else if (currentIndex <= fullText.length) {
      // Continue typing
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
          <div className="hero-typing-text">
            {displayText}
            <span className="typing-cursor">|</span>
          </div>
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
