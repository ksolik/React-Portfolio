import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import leoImage from '../assets/images/projects/Leo.png';
import takImage from '../assets/images/projects/Tak.png';
import repImage from '../assets/images/projects/Rep.png';
import clubImage from '../assets/images/projects/Club.jpeg';
import { BlurIn } from './BlurIn';
import { FadeUp } from './FadeUp';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <div className="resume-section">
          <BlurIn delay={0.6}>
            <a href={require('../assets/images/ResumeUX.pdf')} target="_blank" rel="noopener noreferrer" className="resume-btn">
              Resume
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
        
        <BlurIn delay={0.9}>
          <h2 className="projects-heading">
            <span className="heading-name">My Latest</span>{' '}
            <span className="heading-title">Projects</span>
          </h2>
        </BlurIn>
        
        <div className="projects-grid">
          <FadeUp delay={0.1}>
            <div className="project-card project-1">
              <img 
                src={repImage} 
                alt="Rep Project" 
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-title">SetReps</div>
                <div className="project-overlay-content">
                  <div className="project-description">Founder, UX Designer, Full Stack Developer</div>
                  <div className="project-date">2025</div>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <Link to="/project2" className="project-card project-2">
              <img 
                src={leoImage} 
                alt="Leo Project" 
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-title">UX/UI Design + Case Study</div>
                <div className="project-overlay-content">
                  <div className="project-description">Leopolds Mobile App + Coursework project</div>
                  <div className="project-date">2024</div>
                </div>
              </div>
            </Link>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <Link to="/project3" className="project-card project-3">
              <img 
                src={takImage} 
                alt="Tak Project" 
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-title">UX/UI Design + Case Study</div>
                <div className="project-overlay-content">
                  <div className="project-description">Takomo Website Application + Coursework project</div>
                  <div className="project-date">2024</div>
                </div>
              </div>
            </Link>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <Link to="/ux-club" className="project-card project-4">
              <img 
                src={clubImage} 
                alt="Club Project" 
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-title">UW-Madison UX Club</div>
                <div className="project-overlay-content">
                  <div className="project-description">Web Design</div>
                  <div className="project-date">2023</div>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
        
        <div className="graphic-design-section">
          <Link to="/fun" className="graphic-design-btn">
            Graphic Design
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
          </Link>
        </div>
        
        <div className="graphic-design-text-section">
          <p className="graphic-design-text">
            Kind of sketched it in <span className="highlight-text">Figma</span>, kind of built it in <span className="highlight-text">Cursor</span> — by yours truly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
