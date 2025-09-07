import React, { useState } from 'react';
import './Fun.css';
import { BlurIn } from './BlurIn';

const Fun = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="fun-page">
      <div className="fun-content">
        {/* Graphic Design Section */}
        <div className="fun-section">
          <BlurIn delay={0}>
            <button 
              className="fun-section-title" 
              onClick={() => toggleSection('graphic-design')}
            >
              <span>Graphic Design</span>
              <svg 
                className={`fun-arrow ${expandedSection === 'graphic-design' ? 'expanded' : ''}`}
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6,9 12,15 18,9"/>
              </svg>
            </button>
          </BlurIn>
          <div className={`fun-image-grid ${expandedSection === 'graphic-design' ? 'expanded' : ''}`}>
            <div className="image-item">
              <img src={require('../assets/images/fun/R1.png')} alt="R1" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/R2.png')} alt="R2" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/glad.png')} alt="Gladbag" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/DuneInfo.jpeg')} alt="DuneInfo" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Eren.png')} alt="Eren" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/ImagineFX.png')} alt="Loc" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/VRInfo.jpeg')} alt="VRInfo" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/WIsconsinInfo.png')} alt="Wisconsininfo" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Loc.png')} alt="PlayStation" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Xbox.png')} alt="Xbox" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Nintendo.png')} alt="Nintendo" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/playstation.png')} alt="Clouds" />
            </div>
            <div className="image-item">
            </div>
          </div>
        </div>

        {/* Illustrations Section */}
        <div className="fun-section">
          <BlurIn delay={0.3}>
            <button 
              className="fun-section-title" 
              onClick={() => toggleSection('illustrations')}
            >
            <span>Illustrations</span>
            <svg 
              className={`fun-arrow ${expandedSection === 'illustrations' ? 'expanded' : ''}`}
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </button>
          </BlurIn>
          <div className={`fun-image-grid illustrations-grid ${expandedSection === 'illustrations' ? 'expanded' : ''}`}>
            <div className="image-item">
              <img src={require('../assets/images/fun/Robo.jpeg')} alt="Robo" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Fire.jpeg')} alt="Fire" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/fun1.jpeg')} alt="Fun1" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Fun2.jpeg')} alt="Fun2" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/fun3.jpeg')} alt="Fun3" />
            </div>
            <div className="image-item">
              <img src={require('../assets/images/fun/Mon.jpeg')} alt="Mon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fun;
