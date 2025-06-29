import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${theme === 'light' ? 'light' : 'dark'}`}>
        {theme === 'dark' ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;