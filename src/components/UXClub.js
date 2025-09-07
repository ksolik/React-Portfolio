import React from 'react';
import './UXClub.css';
import { BlurIn } from './BlurIn';

const UXClub = () => {
  return (
    <div className="ux-club-page">
      <div className="ux-club-content">
        <BlurIn delay={0}>
          <p className="ux-club-description">
            I was part of the UW–Madison UX Club web team. We designed and built a website to facilitate design critiques, host meetings, and organize club events.
          </p>
        </BlurIn>
        
        <BlurIn delay={0.3}>
          <a href="https://uw-madison-uxclub.framer.website" target="_blank" rel="noopener noreferrer" className="see-website-btn">
            See Website
            <div className="arrow-container">
              <svg 
                className="arrow-icon arrow-out" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
              <svg 
                className="arrow-icon arrow-in" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </a>
        </BlurIn>
      </div>
    </div>
  );
};

export default UXClub;
