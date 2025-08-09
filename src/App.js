import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './portfolioContainer/Home/Home';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
    
      <Home />
    </div>
  );
}

export default App;
