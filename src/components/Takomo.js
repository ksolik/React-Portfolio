import React, { useEffect, useState, useRef } from 'react';
import './Takomo.css';
import { BlurIn } from './BlurIn';

const Takomo = () => {
  const [activeSection, setActiveSection] = useState('market-research');
  const [currentChart, setCurrentChart] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentFinalImage, setCurrentFinalImage] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in class
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % 2);
  };

  const prevChart = () => {
    setCurrentChart((prev) => (prev - 1 + 2) % 2);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % 2);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + 2) % 2);
  };

  const nextFinalImage = () => {
    const container = document.querySelector('.final-images-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const prevFinalImage = () => {
    const container = document.querySelector('.final-images-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="takomo-page">
      <BlurIn>
        <section className="takomo-hero">
          <div className="takomo-content">
            <div className="takomo-gif-container">
              <video 
                src={require('../assets/images/projects/1.mov')} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="takomo-gif"
              />
            </div>
            <div className="takomo-text">
              <h1 className="takomo-title">Takomo</h1>
              <p className="takomo-description">
                The Takomo Golf fitting web application was made to reflect the feel of an in-person professional golf club fitting from the comfort of the users home. This was a group project completed as a half-semester assignment for the Human-Computer Interaction course at the University of Wisconsin–Madison.
              </p>
              <div className="takomo-details">
                <div className="detail-item">
                  <span className="detail-label">Project type:</span>
                  <span className="detail-value">Website application</span>
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
                  <span className="detail-value">Figma, Illustrator, Photoshop</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">October 2024 - December 2024</span>
                </div>
              </div>
              <div className="prototype-btn-container">
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
          </div>
        </section>
      </BlurIn>

      <section className="takomo-problem-goal">
        <div className="takomo-problem-goal-content">
          <div className="problem-section" id="problem-section">
            <h2 className="section-title fade-in-element">Problem Statement</h2>
            <p className="section-description fade-in-element">
              A golfer wants to be fitted for golf clubs without paying the expensive price of an in-person fitting. They need a way to complete the fitting process online from home while still getting the feel and accuracy of a professional fitting experience. Furthermore, Takomo Golf lacks this website feature altogether, limiting its ability to compete with larger brands already offering these services.
            </p>
          </div>
          
          <div className="goal-section" id="goal-section">
            <h2 className="section-title fade-in-element">Goal</h2>
            <p className="section-description fade-in-element">
              Our Takomo Golf fitting web application will let users complete a professional-quality club fitting online from home, which will affect golfers by making fittings more affordable and accessible, while also maintaining Takomo's brand identity and helping it compete with larger brands.
            </p>
          </div>
        </div>
      </section>

      <section className="discovery-section" id="discovery-section">
        <div className="discovery-content">
          <div className="part-label fade-in-element">PART 1</div>
          <h2 className="discovery-title fade-in-element">Understanding</h2>
          <div className="discovery-subsections">
            <h3 
              className={`discovery-subtitle ${activeSection === 'market-research' ? 'active' : ''}`}
              onClick={() => setActiveSection('market-research')}
              style={{ cursor: 'pointer' }}
            >
              Contextual Inquiry
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'user-research' ? 'active' : ''}`}
              onClick={() => setActiveSection('user-research')}
              style={{ cursor: 'pointer' }}
            >
              Models
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'competitive-analysis' ? 'active' : ''}`}
              onClick={() => setActiveSection('competitive-analysis')}
              style={{ cursor: 'pointer' }}
            >
              Diagrams and Maps
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'personas-journeys' ? 'active' : ''}`}
              onClick={() => setActiveSection('personas-journeys')}
              style={{ cursor: 'pointer' }}
            >
              Storyboarding
            </h3>
          </div>
          <div className="discovery-content-section">
            {activeSection === 'market-research' && (
              <div className="discovery-content-card market-research-card">
                <div className="card-left-column">
                  <div className="section-label">RESEARCH 1/4</div>
                  <h4 className="discovery-content-title">Contextual Inquiry</h4>
                  <p className="discovery-content-description small-text">
                    Through our Contextual Inquiry, we interviewed experienced and new golfers to explore their experience with online fitting tools. While both found the interface easy to use, they were unsure how it compared to in-person fittings, revealing a need for better awareness, personalization, and clarity.
                  </p>
                  <ul className="discovery-content-list small-text">
                    <li><strong>Users Expect Personalization:</strong> Golfers want online fittings to feel as tailored and helpful as in-person sessions.</li>
                    <li><strong>Simplicity Builds Trust:</strong> A clear, friendly interface keeps users engaged and confident in the process.</li>
                    <li><strong>Decisions Are Self-Focused:</strong> Users make choices based on their own performance goals and pain points.</li>
                  </ul>
                </div>
                <div className="card-right-column">
                  <div className="market-research-images">
                    <img 
                      src={require('../assets/images/projects/B1.jpeg')} 
                      alt="Contextual Inquiry 1" 
                      className="sr-image sr1"
                      loading="lazy"
                    />
                    <img 
                      src={require('../assets/images/projects/B2.jpeg')} 
                      alt="Contextual Inquiry 2" 
                      className="sr-image sr2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'user-research' && (
              <div className="discovery-content-card user-research-card">
                <div className="card-left-column">
                  <div className="section-label">RESEARCH 2/4</div>
                  <h4 className="discovery-content-title">Models</h4>
                  <p className="discovery-content-description small-text">
                    As a group, we each created detailed Flow, Sequence, Physical, Artifact, and Cultural Models to visualize how users interact with the online golf fitting tool, uncovering key patterns, challenges, and user behaviors. This is what we learned:
                  </p>
                  <ul className="discovery-content-list small-text">
                    <li><strong>Transparency Boosts Confidence:</strong> Clearly explaining why certain clubs are recommended helps users trust the tool's accuracy.</li>
                    <li><strong>Convenience Shapes Experience:</strong> Being able to use the tool anytime at home adds flexibility but also introduces the risk of lower engagement or distraction.</li>
                  </ul>
                </div>
                <div className="card-right-column">
                  <div className="models-image-container">
                    <img 
                      src={require('../assets/images/projects/fm.png')} 
                      alt="Flow Model" 
                      className="models-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'competitive-analysis' && (
              <div className="discovery-content-card competitive-analysis-card">
                <div className="card-left-column">
                  <div className="section-label">RESEARCH 3/4</div>
                  <h4 className="discovery-content-title">Diagrams and Maps</h4>
                  <p className="discovery-content-description small-text">
                    We created journey maps for the two primary user types we were targeting to visualize their motivations, pain points, and key interactions with the product. From there, we conducted affinity diagramming to cluster insights and identify recurring themes across our research. Finally, we used bullseye diagramming to prioritize the most impactful opportunities, ensuring our design decisions focused on solving users' most pressing needs.
                  </p>
                </div>
                <div className="card-right-column">
                  <div className="image-navigation">
                    <button className="nav-arrow" onClick={prevImage}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15,18 9,12 15,6"></polyline>
                      </svg>
                    </button>
                    <span className="image-indicator">{currentImage + 1} / 2</span>
                    <button className="nav-arrow" onClick={nextImage}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div className="image-container">
                    <div className={`image-slide ${currentImage === 0 ? 'active' : ''}`}>
                      <img 
                        src={require('../assets/images/projects/ujm.png')} 
                        alt="User Journey Map" 
                        className="single-image"
                        loading="lazy"
                      />
                    </div>
                    <div className={`image-slide ${currentImage === 1 ? 'active' : ''}`}>
                      <img 
                        src={require('../assets/images/projects/bd.jpg')} 
                        alt="Bullseye Diagram" 
                        className="single-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'personas-journeys' && (
              <div className="discovery-content-card personas-journeys-card">
                <div className="card-left-column">
                  <div className="section-label">RESEARCH 4/4</div>
                  <h4 className="discovery-content-title">Storyboarding</h4>
                  <p className="discovery-content-description small-text">
                    Each team member created an individual storyboard focused on a different device to visualize how users might experience the onboarding flow across platforms. The storyboard highlights the sequence of questions from the user flow, emphasizing how the design guides users through each step of the fitting process. These questions are essential for helping the algorithm generate accurate and personalized club recommendations tailored to each golfer's needs.
                  </p>
                </div>
                <div className="card-right-column">
                  <div className="personas-journeys-images">
                    <img 
                      src={require('../assets/images/projects/S1.jpeg')} 
                      alt="Storyboard 1" 
                      className="up-image up1"
                      loading="lazy"
                    />
                    <img 
                      src={require('../assets/images/projects/S2.png')} 
                      alt="Storyboard 2" 
                      className="up-image up2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="hmw-content">
            <h2 className="hmw-title">HMW Statement</h2>
            <p className="hmw-description">
              How might we design an online golf fitting experience that feels trustworthy, easy to use,<br />
              and truly personalized for every golfer?
            </p>
          </div>
        </div>
      </section>

      <section className="wireframes-section" id="wireframes-section">
        <div className="wireframes-content">
          <div className="part-label fade-in-element">PART 2</div>
          <h2 className="wireframes-title fade-in-element">Wireframes</h2>
          <div className="wireframes-rectangle fade-in-element">
            <img 
              src={require('../assets/images/projects/lp.png')} 
              alt="Wireframes" 
              className="wireframes-image"
            />
          </div>
        </div>
      </section>

      <section className="evaluative-research-section" id="evaluative-research-section">
        <div className="evaluative-research-content">
          <div className="part-label fade-in-element">PART 3</div>
          <h2 className="evaluative-research-title fade-in-element">Evaluative research</h2>
          <div className="discovery-content-section">
            <div className="discovery-content-card evaluative-research-card">
              <div className="card-left-column">
                <div className="section-label">MORE RESEARCH</div>
                <h4 className="discovery-content-title">Guerrilla user testing</h4>
                <p className="discovery-content-description small-text">
                  I conducted user testing with participants across various scenarios and gathered insights from their feedback. Here's the key learnings:
                </p>
                <ul className="discovery-content-list small-text">
                  <li>Participants found the interface easy to navigate but noted the absence of progress indicators, such as how many steps or pages remained in the process.</li>
                  <li>Participants felt the club recommendations lacked personalization and wanted clearer explanations of why each club was suggested to them individually.</li>
                </ul>
              </div>
              <div className="card-right-column">
                <div className="user-quote-container">
                  <div className="user-quote">
                    "The experience was smooth, and the questions felt meaningful, but I wished I knew more about why the recommended iron was the right fit for my game."
                  </div>
                  <div className="participant-info">
                    <div className="participant-icon">
                      <svg className="smile-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    </div>
                    <div className="participant-details">
                      <div className="participant-name">Participant 2</div>
                      <div className="participant-description">Participant summarising impressions of the Takomo experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-design-section" id="final-design-section">
        <div className="final-design-content">
          <div className="part-label fade-in-element">PART 4</div>
          <h2 className="final-design-title fade-in-element">Final design</h2>
          <div className="prototype-btn-container">
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
        <div className="recommendations-section fade-in-element">
          <h3 className="recommendations-title">Shot shape & Ball flight</h3>
          <p className="recommendations-description">
            We added a progress bar to help users see where they are in the fitting process. Additionally, we introduced interactive visual aids on the shot shape and ball flight pages to help users better visualize their typical shots and assist newer golfers who may be unfamiliar with golf terminology.
          </p>
        </div>
        <div className="final-design-rectangle fade-in-element">
          <video 
            src={require('../assets/images/projects/3.mov')} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="final-design-gif"
          />
        </div>
        <div className="recommendations-section fade-in-element">
          <h3 className="recommendations-title">Recommendations</h3>
          <p className="recommendations-description">
            After user testing, we added more detailed descriptions and introduced a visual ranking feature to help users clearly understand why each recommended iron is best suited for their game.
          </p>
        </div>
        <div className="final-design-rectangle fade-in-element">
          <video 
            src={require('../assets/images/projects/2.mov')} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="final-design-gif"
          />
        </div>
        <div className="final-design-image-container fade-in-element">
          <img 
            src={require('../assets/images/projects/AS.png')} 
            alt="Final Design" 
            className="final-design-image"
          />
        </div>
        <div className="outcomes-section fade-in-element">
          <h3 className="outcomes-title">Outcomes</h3>
          <div className="outcomes-rectangles">
            <div className="outcome-rectangle">
              <div className="outcome-icon">
                <div className="icon-circle">
                  <svg className="smile-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
              </div>
              <div className="outcome-content">
                <div className="outcome-number">4/5</div>
                <div className="outcome-text">Users felt more confident about their recommendations.</div>
              </div>
            </div>
            <div className="outcome-rectangle">
              <div className="outcome-icon">
                <div className="icon-circle">
                  <svg className="clock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
              </div>
              <div className="outcome-content">
                <div className="outcome-number">24%</div>
                <div className="outcome-text">Reduced time spent on task.</div>
              </div>
            </div>
            <div className="outcome-rectangle">
              <div className="outcome-icon">
                <div className="icon-circle">
                  <svg className="chart-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
              </div>
              <div className="outcome-content">
                <div className="outcome-number">100%</div>
                <div className="outcome-text">User completion rate.</div>
              </div>
            </div>
          </div>
          <h3 className="reflection-title fade-in-element">Reflection</h3>
          <div className="what-differently-section fade-in-element">
            <h4 className="what-differently-title">What I would do differently</h4>
            <p className="what-differently-description">
              I would have incorporated AI into the application to enhance the user experience by making recommendations feel more personalized and data-driven. Integrating AI could have analyzed user inputs more intelligently, offering tailored club suggestions that better matched each golfer's unique playing style and needs.
            </p>
          </div>
          <div className="section-divider"></div>
          <div className="what-differently-section fade-in-element">
            <h4 className="what-differently-title">Key Learnings</h4>
            <p className="what-differently-description">
              This was my first time working with people who weren't designers, since both teammates focused more on engineering. I learned a lot about collaborating with other roles and finding ways to problem-solve alongside different teams. It was also my first time designing within a company's brand guidelines, figuring out how to make something that felt fresh while still fitting Takomo's look and style.
            </p>
          </div>
          <div className="section-divider"></div>
          <div className="next-project-btn-container fade-in-element">
            <a 
              href="/project2" 
              className="prototype-btn"
            >
              View Next Project
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
    </div>
  );
};

export default Takomo;
