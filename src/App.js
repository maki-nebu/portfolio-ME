import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './portfolioContainer/Home/Home';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [persona, setPersona] = useState('all'); // 'all', 'dev', 'model'
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Background Ambient Glow Orbs */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

      {/* Main Home Container */}
      <Home 
        theme={theme} 
        toggleTheme={toggleTheme} 
        persona={persona} 
        setPersona={setPersona} 
      />

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
