import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Fun from './components/Fun';
import UXClub from './components/UXClub';
import Project2 from './components/Project2';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isProject2Page = location.pathname === '/project2';
  
  return (
    <div className={`App ${isProject2Page ? 'project2-page' : ''}`}>
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
