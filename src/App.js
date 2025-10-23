import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Fun from './components/Fun';
import UXClub from './components/UXClub';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Takomo from './components/Takomo';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isProject2Page = location.pathname === '/project2';
  const isProject3Page = location.pathname === '/project3';
  const isTakomoPage = location.pathname === '/takomo';
  
  return (
    <div className={`App ${isProject2Page ? 'project2-page' : ''} ${isProject3Page ? 'project3-page' : ''} ${isTakomoPage ? 'takomo-page' : ''}`}>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/ux-club" element={<UXClub />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/takomo" element={<Takomo />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
