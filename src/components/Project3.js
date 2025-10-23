import React, { useEffect, useState } from 'react';
import './Project3.css';
import { BlurIn } from './BlurIn';

const Project3 = () => {
  const [activeSection, setActiveSection] = useState('market-research');
  const [activeDesignSection, setActiveDesignSection] = useState('information-architecture');
  const [currentChart, setCurrentChart] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % 2);
  };

  const prevChart = () => {
    setCurrentChart((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="project3-page">
      <BlurIn>
        <section className="project3-hero">
          <div className="project3-content">
          <div className="project3-gif">
            <img 
              src={require('../assets/images/projects/Rep.png')} 
              alt="SetReps App Introduction" 
              className="project-gif"
              loading="lazy"
            />
          </div>
            <div className="project3-text">
              <h1 className="project3-title">SetReps</h1>
              <p className="project3-description">
                SetReps is a mobile iOS fitness app designed to help users log workouts, track their progress, and reach their fitness goals. I created the app concept during the Google UX Design Certificate program on Coursera, and am currently developing it in Swift to bring the design to life.
              </p>
              <div className="project3-details">
                <div className="detail-item">
                  <span className="detail-label">Project type:</span>
                  <span className="detail-value">Mobile Application</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Roles:</span>
                  <span className="detail-value">Founder, UX Designer, Full Stack Developer</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">Fitness & Health</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tools:</span>
                  <span className="detail-value">Figma, Cursor, Xcode</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">July 2025 – Present</span>
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
              <p className="coming-soon-text">Coming to the app store soon!</p>
            </div>
          </div>
        </section>
      </BlurIn>

      <section className="project3-problem-goal">
        <div className="project3-problem-goal-content">
          <div className="problem-section">
            <h2 className="section-title">Problem Statement</h2>
            <p className="section-description">
              Gym-goers need an easy and reliable way to track their sets, reps, and weights for each exercise to measure progress and stay motivated. However, many existing fitness tracking apps suffer from poor user experiences—cluttered interfaces, confusing navigation, and dull designs—that make progress tracking feel tedious and unengaging.
            </p>
          </div>
          
          <div className="goal-section">
            <h2 className="section-title">Goal</h2>
            <p className="section-description">
              The goal for SetReps was to design a mobile fitness app that feels intuitive and enjoyable for everyone—from beginners to experienced lifters. I aimed to create a seamless user experience that makes logging workouts fast, effortless, and satisfying, helping users stay consistent and focused on their fitness progress.
            </p>
          </div>
        </div>
      </section>

      <section className="overview-section">
        <div className="overview-content">
          <h2 className="overview-title">Overview</h2>
          <div className="overview-layout">
            <div className="overview-image-section">
              {/* Image placeholder - leave blank for now */}
            </div>
            <div className="overview-cards-column">
              <div className="satisfaction-card-container">
                <div className="satisfaction-card">
                  <div className="satisfaction-icon">
                    <div className="icon-circle">
                      <svg className="smile-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    </div>
                  </div>
                  <div className="satisfaction-content">
                    <div className="satisfaction-score">4/5</div>
                    <div className="satisfaction-label">User satisfaction score</div>
                  </div>
                </div>
              </div>
              <div className="satisfaction-card-container">
                <div className="satisfaction-card">
                  <div className="satisfaction-icon">
                    <div className="icon-circle">
                      <svg className="dumbbell-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="12" r="3"/>
                        <path d="M9 12h6"/>
                        <path d="M6 9v6"/>
                        <path d="M18 9v6"/>
                      </svg>
                    </div>
                  </div>
                  <div className="satisfaction-content">
                    <div className="satisfaction-score">60+</div>
                    <div className="satisfaction-label">Exercises</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-content">
          <div className="part-label">PART 1</div>
          <h2 className="discovery-title">Understanding the user</h2>
          <div className="discovery-subsections">
            <h3 
              className={`discovery-subtitle ${activeSection === 'market-research' ? 'active' : ''}`}
              onClick={() => setActiveSection('market-research')}
              style={{ cursor: 'pointer' }}
            >
              Market Research
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'user-research' ? 'active' : ''}`}
              onClick={() => setActiveSection('user-research')}
              style={{ cursor: 'pointer' }}
            >
              User Research
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'competitive-analysis' ? 'active' : ''}`}
              onClick={() => setActiveSection('competitive-analysis')}
              style={{ cursor: 'pointer' }}
            >
              Competitive analysis
            </h3>
            <h3 
              className={`discovery-subtitle ${activeSection === 'personas-journeys' ? 'active' : ''}`}
              onClick={() => setActiveSection('personas-journeys')}
              style={{ cursor: 'pointer' }}
            >
              Personas and journeys
            </h3>
          </div>
          <div className="discovery-content-section">
            {activeSection === 'market-research' && (
              <div className="discovery-content-card market-research-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 1</div>
                  <h4 className="discovery-content-title">Secondary Research</h4>
                  <p className="discovery-content-description small-text">
                    I began the research phase by conducting secondary research using AI tools—an approach I use as a designer to gain added strategic insight beyond the Google UX course. This research focused on the fitness industry, user adoption patterns, and behavioral trends shaping workout apps. Here's what I found:
                  </p>
                  <ul className="discovery-content-list small-text">
                    <li>Fitness app downloads hit 3.6 billion globally in 2025, but nearly 80% of new users quit within a week—highlighting major retention challenges.</li>
                    <li>App-based workout tracking boosts motivation and consistency; users who log exercises are 80% more likely to stay consistent for six months.</li>
                    <li>Apps with strong tracking features see users 80% more likely to maintain routines over six months.</li>
                  </ul>
                </div>
                <div className="card-right-column">
                  <div className="market-research-images">
                    <img 
                      src={require('../assets/images/projects/SR1.jpeg')} 
                      alt="Secondary Research Chart 1" 
                      className="sr-image sr1"
                      loading="lazy"
                    />
                    <img 
                      src={require('../assets/images/projects/SR2.jpeg')} 
                      alt="Secondary Research Chart 2" 
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
                  <div className="part-label-small">Part 1</div>
                  <h4 className="discovery-content-title">User Research</h4>
                  <p className="discovery-content-description small-text">
                    To uncover user pain points and better understand their needs, I conducted four user interviews. Three participants represented my target audience across different age groups, while one was a beginner interested in starting a gym routine. These interviews revealed four main user pain points.
                  </p>
                  <ul className="discovery-content-list small-text">
                    <li>Complicated Tracking: Users find most apps too slow or complex for quick logging.</li>
                    <li>No Personal Guidance: Users want workouts that adapt to their progress.</li>
                    <li>Low Motivation: Many lose motivation when progress slows or life gets busy.</li>
                    <li>Beginner Overwhelm: New users feel intimidated and need simple, supportive guidance.</li>
                  </ul>
                </div>
                <div className="card-right-column">
                  <div className="user-research-images">
                    <img 
                      src={require('../assets/images/projects/UI1.jpeg')} 
                      alt="User Research Interview 1" 
                      className="ui-image ui1"
                      loading="lazy"
                    />
                    <img 
                      src={require('../assets/images/projects/UI2.jpeg')} 
                      alt="User Research Interview 2" 
                      className="ui-image ui2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'competitive-analysis' && (
              <div className="discovery-content-card competitive-analysis-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 1</div>
                  <h4 className="discovery-content-title">Competitive Analysis</h4>
                  <p className="discovery-content-description small-text">
                    I analyzed four of the top direct competitors, following Google's competitive audit template and incorporating a SWOT analysis—something I personally like to include for deeper insight. Here are the key takeaways from the competitive analysis:
                  </p>
                  <ul className="discovery-content-list small-text">
                    <li>The strongest competitors succeed by making workouts feel both tailored and effortless, but there's still room to refine how personalization connects to real-time user progress.</li>
                    <li>Most apps feel dated in design, with cluttered layouts, inconsistent hierarchies, and minimal use of mobile-native features like widgets, making daily engagement less fluid and modern.</li>
                  </ul>
                </div>
                <div className="card-right-column">
                  <div className="chart-sidebar">
                    <div className="chart-navigation">
                      <button className="nav-arrow" onClick={prevChart}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15,18 9,12 15,6"></polyline>
                        </svg>
                      </button>
                      <span className="chart-indicator">{currentChart + 1} / 2</span>
                      <button className="nav-arrow" onClick={nextChart}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9,18 15,12 9,6"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div className="chart-container">
                      <div className={`chart-slide ${currentChart === 0 ? 'active' : ''}`}>
                        <div className="competitive-analysis-table">
                          <table className="analysis-table">
                            <thead>
                              <tr className="title-row">
                                <th colSpan="7">General Information</th>
                              </tr>
                              <tr className="header-row">
                                <th>Competitor</th>
                                <th>URL</th>
                                <th>Product Offering</th>
                                <th>Price (USD)</th>
                                <th>Business Size</th>
                                <th>Focus</th>
                                <th>Unique Value Proposition</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Fitbod</td>
                                <td>fitbod.me</td>
                                <td>Personalized strength plans generated by an algorithm using goals, equipment, recovery & progressive overload</td>
                                <td>$15.99/mo or $95.99/yr</td>
                                <td>51–200 employees (LinkedIn)</td>
                                <td>Algorithmic, auto-generated workouts for all levels</td>
                                <td>"Science-backed" proprietary algorithm adapts sets/exercises based on recovery & history; large exercise library.</td>
                              </tr>
                              <tr>
                                <td>JEFIT</td>
                                <td>jefit.com</td>
                                <td>Workout planner + logger with big exercise DB, routine sharing & community</td>
                                <td>Free tier; Elite ≈ $69.99/yr (site blog; plans page shows free & tiers)</td>
                                <td>11–50 employees (LinkedIn)</td>
                                <td>Data-heavy tracking & community routines</td>
                                <td>Huge exercise/routine database + social/community elements for motivation and knowledge sharing.</td>
                              </tr>
                              <tr>
                                <td>Strong (Strong Workout Tracker)</td>
                                <td>strong.app</td>
                                <td>Intuitive strength tracker & planner; templates, charts, Apple Health/Watch, CSV export</td>
                                <td>Free; PRO ~$4.99/mo or $29.99/yr (App Store/third-party reviews)</td>
                                <td>2–10 employees (LinkedIn, Strong Fitness Ltd.)</td>
                                <td>Simplicity & speed during logging</td>
                                <td>Super-clean, fast logger with robust power-user features (supersets, timers, charts) without guidance bloat.</td>
                              </tr>
                              <tr>
                                <td>Stronger – Gym Workout Planner</td>
                                <td>strongermobileapp.com</td>
                                <td>Workout tracker with adaptive targets, "strength score," groups/leaderboards, AI coaching</td>
                                <td>In-app purchases noted: e.g., $9.99/mo, $44.99/yr (App Store listing; varies by region)</td>
                                <td>2–10 employees (LinkedIn)</td>
                                <td>Gamified tracking + social</td>
                                <td>Adaptive targets & group challenges/leaderboards; AI coaching hooks to keep consistency.</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className={`chart-slide ${currentChart === 1 ? 'active' : ''}`}>
                        <div className="competitive-analysis-table">
                          <table className="analysis-table">
                            <thead>
                              <tr className="title-row">
                                <th colSpan="7">UX</th>
                              </tr>
                              <tr className="header-row">
                                <th>Competitor</th>
                                <th>First Impressions on App</th>
                                <th>Features List (high-level)</th>
                                <th>Accessibility</th>
                                <th>User Flow</th>
                                <th>Navigation</th>
                                <th>Brand Identity & Tone</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Fitbod</td>
                                <td>Polished onboarding with "smart plan" positioning; emphasizes personalization</td>
                                <td>Auto-generated workouts, recovery-aware planning, exercise demos, equipment filters</td>
                                <td>Clear type & contrast on site; app uses large cards and stepwise inputs (no formal a11y statement found on site pages reviewed)</td>
                                <td>Onboarding → goals/equipment → daily plan → log</td>
                                <td>Tabbed structure; workout card drill-downs</td>
                                <td>Data-driven, science-forward, motivational</td>
                              </tr>
                              <tr>
                                <td>JEFIT</td>
                                <td>Utility vibe; "power user" feel; community/social cues</td>
                                <td>Planner & logger, &gt;1,400 exercises, routine marketplace/community, progress photos</td>
                                <td>Large font & straightforward UI; community content varies; (no dedicated a11y page found)</td>
                                <td>Choose plan or build → log → analyze → share</td>
                                <td>Traditional tabs; clear list → detail patterns</td>
                                <td>Practical, community-centric, data-heavy</td>
                              </tr>
                              <tr>
                                <td>Strong</td>
                                <td>Extremely clean, minimal; fast logging focus</td>
                                <td>Templates, supersets, timers, charts, CSV export, Apple Health/Watch, Siri</td>
                                <td>Good contrast, large tap targets; minimal clutter aids cognitive load</td>
                                <td>Start workout → log sets → save → review charts</td>
                                <td>Bottom tabs + simple stacks; few steps per action</td>
                                <td>Calm, utilitarian, confidence via press quotes</td>
                              </tr>
                              <tr>
                                <td>Stronger</td>
                                <td>Friendly, motivational; gamified elements visible (leaderboards/strength score)</td>
                                <td>Adaptive targets, strength score, groups/leaderboards, AI coaching</td>
                                <td>App Store screenshots show large tiles; (no public a11y specifics found)</td>
                                <td>Create routine → get targets → log → compare in groups</td>
                                <td>Simple cards to plan/log; social leaderboard path</td>
                                <td>Energetic, challenge-oriented, social</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'personas-journeys' && (
              <div className="discovery-content-card personas-journeys-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 1</div>
                  <h4 className="discovery-content-title">Personas and Journeys</h4>
                  <p className="discovery-content-description small-text">
                    I developed two user personas for the product, outlining their goals, needs, and frustrations. Additionally, I mapped out typical user journeys for each persona, detailing scenarios, stages, steps, thought processes, emotional experiences, and potential opportunities.
                  </p>
                </div>
                <div className="card-right-column">
                  <div className="personas-journeys-images">
                    <img 
                      src={require('../assets/images/projects/UP1.png')} 
                      alt="User Persona 1" 
                      className="up-image up1"
                      loading="lazy"
                    />
                    <img 
                      src={require('../assets/images/projects/UP2.png')} 
                      alt="User Persona 2" 
                      className="up-image up2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-content">
          <div className="part-label">PART 2</div>
          <h2 className="discovery-title">Starting the design</h2>
          <div className="discovery-subsections">
            <h3 
              className={`discovery-subtitle ${activeDesignSection === 'information-architecture' ? 'active' : ''}`}
              onClick={() => setActiveDesignSection('information-architecture')}
              style={{ cursor: 'pointer' }}
            >
              Information Architecture
            </h3>
            <h3 
              className={`discovery-subtitle ${activeDesignSection === 'wireframes' ? 'active' : ''}`}
              onClick={() => setActiveDesignSection('wireframes')}
              style={{ cursor: 'pointer' }}
            >
              Wireframes
            </h3>
            <h3 
              className={`discovery-subtitle ${activeDesignSection === 'usability-study' ? 'active' : ''}`}
              onClick={() => setActiveDesignSection('usability-study')}
              style={{ cursor: 'pointer' }}
            >
              Usability study
            </h3>
          </div>
          <div className="discovery-content-section">
            {activeDesignSection === 'information-architecture' && (
              <div className="discovery-content-card information-architecture-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 2</div>
                  <h4 className="discovery-content-title">Information Architecture</h4>
                  <p className="discovery-content-description small-text">
                    Content coming soon...
                  </p>
                </div>
                <div className="card-right-column">
                  {/* Content placeholder */}
                </div>
              </div>
            )}
            
            {activeDesignSection === 'wireframes' && (
              <div className="discovery-content-card wireframes-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 2</div>
                  <h4 className="discovery-content-title">Wireframes</h4>
                  <p className="discovery-content-description small-text">
                    Content coming soon...
                  </p>
                </div>
                <div className="card-right-column">
                  {/* Content placeholder */}
                </div>
              </div>
            )}
            
            {activeDesignSection === 'usability-study' && (
              <div className="discovery-content-card usability-study-card">
                <div className="card-left-column">
                  <div className="part-label-small">Part 2</div>
                  <h4 className="discovery-content-title">Usability study</h4>
                  <p className="discovery-content-description small-text">
                    Content coming soon...
                  </p>
                </div>
                <div className="card-right-column">
                  {/* Content placeholder */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="branding-section">
        <div className="branding-content">
          <div className="part-label">PART 3</div>
          <h2 className="branding-title">Branding</h2>
          <p className="branding-description">
            I designed the visual identity from the ground up, using dark tones and futuristic typography to evoke a sense of seriousness, sophistication, and capability in every interaction
          </p>
          <div className="branding-cards-container">
            <div className="branding-card-container">
              <div className="branding-card"></div>
            </div>
            <div className="branding-card-container">
              <div className="branding-card"></div>
            </div>
            <div className="branding-card-container">
              <div className="branding-card"></div>
            </div>
          </div>
          <div className="branding-grid-container">
            <div className="branding-wide-card"></div>
            <div className="branding-tall-card-container">
              <div className="branding-tall-card"></div>
            </div>
            <div className="branding-bottom-cards-container">
              <div className="branding-bottom-card-container">
                <div className="branding-bottom-card"></div>
              </div>
              <div className="branding-bottom-card-container">
                <div className="branding-bottom-card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project3;
