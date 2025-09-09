import React, { useState, useEffect } from 'react';
import './Project2.css';
import { BlurIn } from './BlurIn';

const Project2 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentJourney, setCurrentJourney] = useState(0);
  const [currentWireframe, setCurrentWireframe] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current) + '%';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '%';
          }
        };
        
        updateCounter();
      });
    };

    // Use Intersection Observer to trigger animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);
  
  const personaImages = [
    require('../assets/images/fun/P1.png'),
    require('../assets/images/fun/P2.png'),
    require('../assets/images/fun/P3.png'),
    require('../assets/images/fun/P4.png')
  ];

  const journeyImages = [
    require('../assets/images/fun/U1.png'),
    require('../assets/images/fun/U2.png'),
    require('../assets/images/fun/U3.png'),
    require('../assets/images/fun/U4.png')
  ];

  const wireframeImages = [
    require('../assets/images/fun/w1.png'),
    require('../assets/images/fun/w2.png'),
    require('../assets/images/fun/w3.png')
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % personaImages.length);
  };

  const nextJourney = () => {
    setCurrentJourney((prev) => (prev + 1) % journeyImages.length);
  };

  const nextWireframe = () => {
    setCurrentWireframe((prev) => (prev + 1) % wireframeImages.length);
  };

  return (
    <div className="project2-page">
      <BlurIn>
        <section className="project2-hero">
          <div className="project2-content">
          <div className="project2-gif">
            <img 
              src={require('../assets/images/projects/Intro.gif')} 
              alt="Leopold's App Introduction" 
              className="project-gif"
              loading="lazy"
            />
          </div>
            <div className="project2-text">
              <h1 className="project2-title">Leopolds</h1>
              <p className="project2-description">
                Leopold's Application is a mobile ordering app I designed for a local café, bookstore, and bar in Madison, WI as part of my undergraduate UX course. The app allows customers to pre-order drinks, choose pickup or delivery, and even reserve a seat—creating a smooth, intuitive experience that caters to Leopold's diverse community of patrons.
              </p>
              <div className="project2-details">
                <div className="detail-item">
                  <span className="detail-label">Project type:</span>
                  <span className="detail-value">End-to-End Mobile Application</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Roles:</span>
                  <span className="detail-value">Sole UX/UI Designer</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">Food</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tools:</span>
                  <span className="detail-value">Figma, Illustrator, FigJam</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">September 2024 – November 2024 (12 weeks)</span>
                </div>
              </div>
              <a 
                href="https://www.figma.com/proto/kx1N6O98Xh8PkqxK00BLpN/LEOPOLDS-CASE-FOR-PORTFOLIO?page-id=297%3A19530&node-id=684-6281&p=f&viewport=917%2C388%2C0.13&t=zwX3GbUPvHOoWyeC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=684%3A6281" 
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

      <section className="project2-problem-goal">
        <div className="project2-problem-goal-content">
          <div className="problem-section">
            <h2 className="section-title">Problem Statement</h2>
            <p className="section-description">
              A college student is a frequent visitor of Leopold's Café. They need a way to order ahead online so they can quickly grab their coffee and head to class. They also need the option to reserve a table for times when they want to stay, study, or get work done at the café.
            </p>
          </div>
          
          <div className="goal-section">
            <h2 className="section-title">Goal</h2>
            <p className="section-description">
              Our Leopold's app will let users order ahead online and reserve tables, which will affect students and café visitors by reducing wait times and ensuring reliable seating.
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
            <div className="process-number">01</div>
            <h2 className="process-title">Research & Discovery</h2>
            <p className="process-description">
              Conducted user interviews and competitive analysis to understand the needs of college students and café visitors. Analyzed existing ordering systems and identified pain points in the current experience.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Home.gif')} 
              alt="Home Screen Process" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <div className="process-text">
            <div className="process-number">02</div>
            <h2 className="process-title">Design & Prototyping</h2>
            <p className="process-description">
              Created wireframes and high-fidelity prototypes focusing on intuitive navigation and clear information hierarchy. Developed user flows for ordering and table reservation features.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Order.gif')} 
              alt="Order Process" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <div className="process-text">
            <div className="process-number">03</div>
            <h2 className="process-title">Testing & Iteration</h2>
            <p className="process-description">
              Conducted usability testing with target users and iterated on the design based on feedback. Refined the interface to ensure optimal user experience and accessibility.
            </p>
          </div>
          <div className="process-gif">
            <img 
              src={require('../assets/images/projects/Table.gif')} 
              alt="Table Reservation Process" 
              className="process-gif-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="research-section" className="insights-section">
        <div className="insights-content">
          <div className="insights-number">01 Research</div>
          <h2 className="insights-title">User Interviews & Insights</h2>
          <p className="insights-description">
            Interviews with six Leopold's customers revealed a clear demand for a delivery option and highlighted that table reservation was a highly valued feature across participants.
          </p>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Competitive Analysis</h2>
          <p className="insights-description">
            I conducted a competitive audit of six best-in-class competitors, five direct and one indirect, analyzing their product offerings, feature sets, user flows, navigation, and overall mobile app experience.
          </p>
          <div className="competitive-analysis-image">
            <img 
              src={require('../assets/images/fun/CA.png')} 
              alt="Competitive Analysis" 
              className="ca-image"
            />
          </div>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Design Opportunity</h2>
          <p className="insights-description">
            What if, we treat café tables like study rooms and add a timed reservation system?<br /><br />
            Many students mentioned the need for quiet study space and fair access. It showed that students like the ability to book a study room at a library, so why not add this feature to a popular college café?
          </p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">02 Define</div>
          <h2 className="insights-title">Personas & Journey Maps</h2>
          <p className="insights-description">
            Alongside user research, I created four personas and journey maps that represented Leopold's diverse customer base, from college students to retired residents. These helped me empathize with different user needs and ensure the app design put the user first.
          </p>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container medium">
          <div className="persona-image-wrapper" onClick={nextImage}>
            <img 
              src={personaImages[currentImage]} 
              alt={`Persona ${currentImage + 1}`} 
              className="persona-image"
            />
            <div className="click-indicator">
              <span className="click-text">Click to see next persona</span>
              <div className="arrow-indicator">→</div>
            </div>
          </div>
          <div className="persona-dots">
            {personaImages.map((_, index) => (
              <button
                key={index}
                className={`persona-dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container medium">
          <div className="persona-image-wrapper" onClick={nextJourney}>
            <img 
              src={journeyImages[currentJourney]} 
              alt={`User Journey ${currentJourney + 1}`} 
              className="persona-image"
            />
            <div className="click-indicator">
              <span className="click-text">Click to see next journey</span>
              <div className="arrow-indicator">→</div>
            </div>
          </div>
          <div className="persona-dots">
            {journeyImages.map((_, index) => (
              <button
                key={index}
                className={`persona-dot ${index === currentJourney ? 'active' : ''}`}
                onClick={() => setCurrentJourney(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">User Flow & Info Architecture</h2>
          <p className="insights-description">
            Using insights from the journey maps, I created user flows to address key pain points. Then, informed by my competitive research, I developed the app's information architecture to ensure features were organized clearly and intuitively.
          </p>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container">
          <h3 className="image-title">User Flow</h3>
          <div className="user-flow-wrapper">
            <img 
              src={require('../assets/images/fun/UF.png')} 
              alt="User Flow" 
              className="persona-image"
            />
          </div>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container">
          <h3 className="image-title">Info Architecture</h3>
          <div className="user-flow-wrapper">
            <img 
              src={require('../assets/images/fun/IA.png')} 
              alt="Info Architecture" 
              className="persona-image"
            />
          </div>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">03 Ideate</div>
          <h2 className="insights-title">Sketching Wireframes</h2>
          <p className="insights-description">
            I began by sketching paper wireframes and exploring a variety of layout ideas for both the table reservation and menu pages. My classmates then voted on their favorite concepts, which helped me narrow down the strongest options to develop into digital wireframes.
          </p>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container small">
          <div className="user-flow-wrapper">
            <img 
              src={require('../assets/images/fun/S.png')} 
              alt="Sketches" 
              className="persona-image"
            />
          </div>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Digital Wireframes & Feature Planning</h2>
          <p className="insights-description">
            I then created digital wireframes to map out user flows and structure. Features like scrollable menus and clear reservation options were designed to align with user needs before moving into testing.
          </p>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container">
          <div className="persona-image-wrapper" onClick={nextWireframe}>
            <img 
              src={wireframeImages[currentWireframe]} 
              alt={`Wireframe ${currentWireframe + 1}`} 
              className="persona-image wireframe-image"
            />
            <div className="click-indicator">
              <span className="click-text">Click to see next wireframe</span>
              <div className="arrow-indicator">→</div>
            </div>
          </div>
          <div className="persona-dots">
            {wireframeImages.map((_, index) => (
              <button
                key={index}
                className={`persona-dot ${index === currentWireframe ? 'active' : ''}`}
                onClick={() => setCurrentWireframe(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">User Testing and Themes</h2>
          <p className="insights-description">
          I ran quick user tests on two users with the low-fidelity prototype, observing interactions and jotting notes while asking a few simple questions to check if the flow felt intuitive or frustrating.
          </p>
          <p className="insights-description">
          From these quick sessions, I noticed recurring issues: users largely ignored the hamburger menu, struggled with accessibility, and felt confused by the table reservation feature</p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">04 Design</div>
          <h2 className="insights-title">High-Fidelity Design</h2>
          <p className="insights-description">
            Based on insights from user testing, we redesigned the menu screen from a grid layout to a horizontally scrolling row for a more intuitive browsing experience. We also simplified the table reservation process by making it a two-step flow with an easier seat selection feature. Additionally, we streamlined the navigation bar by removing the Rewards icon and integrating rewards access directly into the home page.
          </p>
        </div>
      </section>

      <section className="persona-image-section no-border">
        <div className="persona-image-container">
          <div className="high-fidelity-grid">
            <div className="grid-item">
              <img 
                src={require('../assets/images/projects/H.png')} 
                alt="High-Fidelity Design 1" 
                className="grid-image"
              />
            </div>
            <div className="grid-item">
              <img 
                src={require('../assets/images/projects/M.png')} 
                alt="High-Fidelity Design 2" 
                className="grid-image"
              />
            </div>
            <div className="grid-item">
              <img 
                src={require('../assets/images/projects/T.png')} 
                alt="High-Fidelity Design 3" 
                className="grid-image"
              />
            </div>
            <div className="grid-item">
              <img 
                src={require('../assets/images/projects/T2.png')} 
                alt="High-Fidelity Design 4" 
                className="grid-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="insights-section no-border">
        <div className="insights-content">
          <h2 className="insights-title">Final User Tests</h2>
          <p className="insights-description">
            The final round of user testing highlighted one major issue: the table reservations feature. Users found the process too slow and expressed frustration with the cluttered date system. They also felt selecting the number of guests was unnecessary, and that choosing dates through a calendar created complications for the café.
          </p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-content">
          <div className="insights-number">05 Outcome</div>
          <h2 className="insights-title">Simple is better</h2>
          <p className="insights-description">
            I changed the reservation feature into a single page where users could only select a same-day time slot limited to one hour. This ultimately making the the table reservation feature simple and easy to use for the users.
          </p>
          <div className="prototype-grid">
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P1.png')} alt="Prototype 1" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P2.png')} alt="Prototype 2" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P10.png')} alt="Prototype 10" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P4.png')} alt="Prototype 4" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P6.png')} alt="Prototype 6" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P7.png')} alt="Prototype 7" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P8.png')} alt="Prototype 8" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P9.png')} alt="Prototype 9" className="prototype-image" />
            </div>
            <div className="prototype-item">
              <img src={require('../assets/images/projects/P3.png')} alt="Prototype 3" className="prototype-image" />
            </div>
          </div>
          <h2 className="insights-title">The UI</h2>
          <p className="insights-description">
            In the final design, I refined the spacing and alignment by applying the 8px grid rule for consistency. I also updated the navigation bar to a cleaner, more modern style, giving the interface a sharper and more polished look.
          </p>
          <h2 className="insights-title">The Result</h2>
          <p className="insights-description">
            Final testing showed all participants completed tasks successfully, with fewer clicks needed in the workflow. The solution also improved accessibility by aligning with WCAG guidelines.
          </p>
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number" data-target="100">0%</div>
              <div className="stat-label">Task Completion Rate</div>
            </div>
            <div className="stat-box">
              <div className="stat-number" data-target="20">0%</div>
              <div className="stat-label">Reduction in Clicks</div>
            </div>
          </div>
          <h2 className="insights-title">What I learned</h2>
          <p className="insights-description">
            What I took away from this project is that if I had done better research on table reservation screens at the start, it would have saved me a lot of time later when I was refining them. I also came to realize how much I would have benefited from working with others. Having more voices and ideas during the wireframing stage could have made the reservation process stronger and easier to design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Project2;
