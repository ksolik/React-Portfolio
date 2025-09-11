import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHovering, setIsProjectHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const animationFrameRef = useRef();
  const cursorRef = useRef();
  const location = useLocation();
  
  // Check if we're on a project page
  const isProjectPage = location.pathname.includes('/project');

  // Throttled cursor update using requestAnimationFrame for smoother performance
  const updateCursor = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  const handleProjectEnter = useCallback(() => {
    setIsProjectHovering(true);
    setIsHovering(false);
  }, []);
  
  const handleProjectLeave = useCallback(() => {
    setIsProjectHovering(false);
  }, []);

  useEffect(() => {
    // Detect if device is touch-enabled
    const checkTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };

    checkTouchDevice();

    // Only add mouse event listeners if not a touch device
    if (!isTouchDevice) {
      // Add event listeners with passive option for better performance
      document.addEventListener('mousemove', updateCursor, { passive: true });
      
      // Add hover listeners to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .toggle-switch');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });

      // Add hover listeners to project cards
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(el => {
        el.addEventListener('mouseenter', handleProjectEnter, { passive: true });
        el.addEventListener('mouseleave', handleProjectLeave, { passive: true });
      });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (!isTouchDevice) {
        document.removeEventListener('mousemove', updateCursor);
        const interactiveElements = document.querySelectorAll('a, button, .toggle-switch');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(el => {
          el.removeEventListener('mouseenter', handleProjectEnter);
          el.removeEventListener('mouseleave', handleProjectLeave);
        });
      }
    };
  }, [updateCursor, handleMouseEnter, handleMouseLeave, handleProjectEnter, handleProjectLeave, isTouchDevice]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isProjectHovering ? 'project-hovering' : ''} ${isProjectPage ? 'project-page' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isProjectHovering && (
        <span className="cursor-text">see project</span>
      )}
    </div>
  );
};

export default CustomCursor;
