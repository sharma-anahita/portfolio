import React, { useState, useEffect } from 'react';
import './App.css';
import { useIsMobile } from './hooks/useIsMobile';
import HamburgerButton from './components/navigation/HamburgerButton';
import MobileNav from './components/navigation/MobileNav';
import DesktopSidebar from './components/navigation/DesktopSidebar';
import ThemeToggle from './components/navigation/ThemeToggle';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CodingProfiles from './components/sections/CodingProfiles';
import ActivityHeatmaps from './components/sections/ActivityHeatmaps';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Poetry from './components/sections/Poetry';

function App() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'blossom';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'blossom' ? 'agent' : 'blossom';
    document.documentElement.classList.add('theme-transitioning');
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 350);
  };

  const handleNavClick = () => {
    setTimeout(() => setSidebarOpen(false), 150);
  };

  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'projects', 'coding-profiles', 'activity-heatmaps', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full text-themeText" style={{ scrollBehavior: 'smooth' }}>
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <HamburgerButton 
        sidebarOpen={sidebarOpen} 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
      />

      {isMobile ? (
        <MobileNav 
          sidebarOpen={sidebarOpen} 
          onNavClick={handleNavClick}
          activeSection={activeSection}
        />
      ) : null}

      {!isMobile && (
        <DesktopSidebar sidebarOpen={sidebarOpen} />
      )}

      <div
        className={`
          ${sidebarOpen && !isMobile ? 'ml-64' : 'md:ml-16 md:peer-hover:ml-60'}
        `}
        style={{
          transition: 'margin-left 300ms 50ms'
        }}
      >
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <CodingProfiles />
        <ActivityHeatmaps theme={theme} />
        <Resume />
        <Skills />
        <Poetry />
        <Contact />
      </div>
    </div>
  );
}

export default App;