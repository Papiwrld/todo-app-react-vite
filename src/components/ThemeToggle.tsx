import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' || 'auto';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const root = document.documentElement;
    
    if (newTheme === 'auto') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', newTheme);
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="theme-toggle">
      <button
        onClick={() => handleThemeChange('light')}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        aria-label="Light theme"
        title="Light theme"
      >
        ☀️
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        aria-label="Dark theme"
        title="Dark theme"
      >
        🌙
      </button>
      <button
        onClick={() => handleThemeChange('auto')}
        className={`theme-btn ${theme === 'auto' ? 'active' : ''}`}
        aria-label="Auto theme"
        title="Auto theme (follows system)"
      >
        🔄
      </button>
    </div>
  );
};

export default ThemeToggle;
