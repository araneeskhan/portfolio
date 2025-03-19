import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client-side
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme: string) => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Force update to ensure theme is applied
    document.body.style.colorScheme = theme;
    document.body.className = theme === 'dark' ? 'dark bg-gray-900 text-white' : 'light bg-white text-gray-900';
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-gray-800"></i>
      ) : (
        <i className="fas fa-sun text-yellow-300"></i>
      )}
    </button>
  );
};

export default ThemeToggle;