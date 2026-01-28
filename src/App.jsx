import React, { useState, useEffect } from 'react';
import './App.css';
import { useIsMobile } from './hooks/useIsMobile';
import HamburgerButton from './components/navigation/HamburgerButton';
import MobileNav from './components/navigation/MobileNav';
import DesktopSidebar from './components/navigation/DesktopSidebar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CodingProfiles from './components/sections/CodingProfiles';
import Contact from './components/sections/Contact';

function App() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = () => {
    setTimeout(() => setSidebarOpen(false), 150);
  };

  useEffect(() => {
    const sections = ['about', 'skills', 'education', 'projects', 'experience', 'coding-profiles', 'contact'];
    
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
    <div className="min-h-screen w-full" style={{ scrollBehavior: 'smooth', background: '#fef5f3' }}>
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
        <Skills />
        <CodingProfiles />
        <Contact />
      </div>
    </div>
  );
}

export default App;