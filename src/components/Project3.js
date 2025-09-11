import React, { useState, useEffect } from 'react';
import './Project3.css';
import { BlurIn } from './BlurIn';

const Project3 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % 3);
  };

  return (
    <div className="project3-page">
      <BlurIn>
        <section className="project3-hero">
          <div className="project3-content">
            <div className="project3-gif">
              <img 
                src={require('../assets/images/projects/Tak.png')} 
                alt="Takomo Website Application" 
                className="project-gif"
                loading="lazy"
              />
            </div>
            <div className="project3-text">
              <h1 className="project3-title">Takomo</h1>
              <p className="project3-description">
                The Takomo Golf fitting web application was made to reflect the feel of an in-person professional golf club fitting from the comfort of the users home. This project was completed as a group, half-semester assignment for the Human-Computer Interaction course at the University of Wisconsin–Madison.
              </p>
              <div className="project3-details">
                <div className="detail-item">
                  <span className="detail-label">Project type:</span>
                  <span className="detail-value">Website Application</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Roles:</span>
                  <span className="detail-value">UX/UI Designer</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">Sports & E-commerce</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tools:</span>
                  <span className="detail-value">Figma, Illustrator,</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">October 2024 – December 2024 (8 weeks)</span>
                </div>
              </div>
              <a 
                href="https://www.figma.com/proto/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="prototype-btn"
              >
                View Prototype
                <div className="arrow-container">
                  <svg className="arrow-icon arrow-out" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                  <svg className="arrow-icon arrow-in" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </BlurIn>

      <section className="project3-problem-goal">
        <div className="project3-problem-goal-content">
          <div className="problem-section">
            <h2 className="section-title">Problem Statement</h2>
            <p className="section-description">
              A golfer wants to be fitted for golf clubs without paying the expensive price of an in-person fitting. They need a way to complete the fitting process online from home while still getting the feel and accuracy of a professional fitting experience. Furthermore, Takomo Golf lacks this website feature altogether, limiting its ability to compete with larger brands already offering these services.
            </p>
          </div>
          
          <div className="goal-section">
            <h2 className="section-title">Goal</h2>
            <p className="section-description">
              Our Takomo Golf fitting web application will let users complete a professional-quality club fitting online from home, which will affect golfers by making fittings more affordable and accessible, while also maintaining Takomo's brand identity and helping it compete with larger brands.
            </p>
          </div>
        </div>
        
        <div className="jump-to-process-section">
          <a href="#research-section" className="jump-to-process-btn">
            Jump to Process
            <div className="arrow-container">
              <svg className="arrow-icon arrow-out" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
              <svg className="arrow-icon arrow-in" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <div className="process-text">
            <h2 className="process-title">Home Page</h2>
            <p className="process-description">
              The home page features a clean hero section with featured products and easy navigation to different product categories, designed to immediately showcase the brand's premium golf equipment.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Tak.png')} 
              alt="Home Page Design" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <div className="process-text">
            <h2 className="process-title">Product Catalog</h2>
            <p className="process-description">
              The product catalog was designed with advanced filtering options and clear product cards, allowing users to easily browse and compare golf equipment based on their specific needs and skill level.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Tak.png')} 
              alt="Product Catalog" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <div className="process-text">
            <h2 className="process-title">Checkout Process</h2>
            <p className="process-description">
              The checkout process was streamlined to minimize steps and reduce cart abandonment, with clear progress indicators and secure payment options for a trustworthy shopping experience.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Tak.png')} 
              alt="Checkout Process" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="research-section" className="insights-section">
        <div className="insights-content">
          <div className="insights-number">01 Research</div>
          <h2 className="insights-title">User Research & Insights</h2>
          <p className="insights-description">
            Research with golf enthusiasts revealed that users value detailed product specifications, high-quality imagery, and easy comparison tools when shopping for golf equipment online.
          </p>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Competitive Analysis</h2>
          <p className="insights-description">
            I analyzed leading golf e-commerce websites to understand best practices in product presentation, navigation patterns, and checkout flows to inform the design decisions.
          </p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">02 Design</div>
          <h2 className="insights-title">Wireframing & Prototyping</h2>
          <p className="insights-description">
            Created low-fidelity wireframes focusing on information architecture and user flow, then developed high-fidelity prototypes with a clean, modern aesthetic that reflects the premium nature of golf equipment.
          </p>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Key Features</h2>
          <p className="insights-description">
            The final design includes advanced product filtering, detailed product pages with 360° views, size guides, customer reviews, and a streamlined checkout process with multiple payment options.
          </p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">03 Outcome</div>
          <h2 className="insights-title">Results & Learnings</h2>
          <p className="insights-description">
            The project resulted in a comprehensive e-commerce website design that prioritizes user experience and product discovery. Key learnings included the importance of detailed product information in high-value purchases and the need for trust-building elements in e-commerce design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Project3;
