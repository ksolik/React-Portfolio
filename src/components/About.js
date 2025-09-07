import React, { useState } from 'react';
import './About.css';
import { BlurIn } from './BlurIn';
import headshotImage from '../assets/images/projects/headshot.jpeg';

const About = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <>
      <section className="about">
        <div className="about-content">
          <div className="about-image-section">
            <BlurIn delay={0}>
              <div className="about-image-container">
                <img 
                  src={headshotImage} 
                  alt="Kai Solik" 
                  className="about-image"
                  loading="lazy"
                />
              </div>
            </BlurIn>
          </div>
          
          <div className="about-text-section">
            <BlurIn delay={0.3}>
              <h1 className="about-name">About Me</h1>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <p className="about-description">
              I graduated from the University of Wisconsin–Madison with a degree in Graphic Design and Computer Science. Driven by a love for technology and what I can create with it, combining my design and coding skills with this passion for tech has led me to the UX/UI designer I am today. 
              </p>
            </BlurIn>
            
            <BlurIn delay={0.9}>
              <p className="about-description">
              My favorite pastime is coming up with designs and then developing them myself right from my laptop. It might sound nerdy, but that's just what I'm about.
              </p>
            </BlurIn>
            
            <div className="about-resume-section">
              <BlurIn delay={1.2}>
                <a href={require('../assets/images/ResumeBEST.pdf')} target="_blank" rel="noopener noreferrer" className="resume-btn">
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
          </div>
        </div>
      </section>
      
      <section className="experience-section">
        <h2 className="experience-title">Experience</h2>
      </section>
      
      <section className="jobs-section">
        <div className="experience-list">
          {/* First job commented out - will be added back later
          <div className="job-item">
            <button 
              className="job-title" 
              onClick={() => toggleJob('job1')}
            >
              <span>UX Design Intern | 2025</span>
              <svg 
                className={`job-arrow ${expandedJob === 'job1' ? 'expanded' : ''}`}
                width="16" 
                height="16" 
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
            <div className={`job-description ${expandedJob === 'job1' ? 'expanded' : ''}`}>
              <ul>
                <li>Joined the design team at Dynamic Active - a AI driven tech startup focused on providing learning management systems</li>
                <li>Created the logo along with logo animations utilizing HTML, CSS, and React aligning visuals with branding objectives</li>
                <li>Conducted iterative usability tests and refined background visuals, enhancing overall engagement and satisfaction</li>
                <li>Worked closely with engineers and stake holders to ensure high-quality implementation</li>
              </ul>
            </div>
          </div>
          */}
          
          <div className="job-item">
            <button 
              className="job-title" 
              onClick={() => toggleJob('job2')}
            >
              <span>UX Research and Design Intern | 2024</span>
              <svg 
                className={`job-arrow ${expandedJob === 'job2' ? 'expanded' : ''}`}
                width="16" 
                height="16" 
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
            <div className={`job-description ${expandedJob === 'job2' ? 'expanded' : ''}`}>
              <ul>
                <li>Joined the design team at MarketEQ - a AI driven Market Agency</li>
                <li>Assisted with end-to-end design process of the career portal</li>
                <li>Created high-fidelity mockups for the onboarding flow</li>
                <li>Conducted market research and competitive analysis of best-in-class products, presenting a research presentation</li>
                <li>Collaborated daily with designers, researchers, and developers to ensure alignment with user needs and business goals</li>
              </ul>
            </div>
          </div>
          
          <div className="job-item">
            <button 
              className="job-title" 
              onClick={() => toggleJob('job3')}
            >
              <span>Freelance Designer</span>
              <svg 
                className={`job-arrow ${expandedJob === 'job3' ? 'expanded' : ''}`}
                width="16" 
                height="16" 
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
            <div className={`job-description ${expandedJob === 'job3' ? 'expanded' : ''}`}>
              <ul>
                <li>Designed and built websites for Long Island LLCs</li>
                <li>Designed posters for university social events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          <span className="skill-item">HTML/CSS</span>
          <span className="skill-item">Figma</span>
          <span className="skill-item">UX/UI Design</span>
          <span className="skill-item">Product Design</span>
          <span className="skill-item">SwiftUI</span>
          <span className="skill-item">Adobe Creative Suite</span>
          <span className="skill-item">Web Design</span>
          <span className="skill-item">Graphic Design</span>
          <span className="skill-item">Visual Design</span>
          <span className="skill-item">React</span>
          <span className="skill-item">JavaScript</span>
        </div>
      </section>
      
      <section className="fun-section">
        <h2 className="fun-title">Just for fun</h2>
        <p className="fun-text">
          When I'm not lost in my Figma files, you can find me playing golf, creating digital art, or unwinding with a good video game.
        </p>
      </section>
    </>
  );
};

export default About;
