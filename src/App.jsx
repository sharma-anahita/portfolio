import React, { useState } from 'react';
import './App.css';
import { Search } from 'lucide-react';
import { useIsMobile } from './hooks/useIsMobile';
import HamburgerButton from './components/navigation/HamburgerButton';
import MobileNav from './components/navigation/MobileNav';
import DesktopSidebar from './components/navigation/DesktopSidebar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavClick = () => {
    setTimeout(() => setSidebarOpen(false), 150);
  };

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
        />
      ) : null}

      {!isMobile && (
        <DesktopSidebar sidebarOpen={sidebarOpen} />
      )}

      <div
        className={`
          ${sidebarOpen && isMobile ? 'mt-40 md:mt-0' : 'mt-0'}
          ${sidebarOpen && !isMobile ? 'ml-64' : 'md:ml-16 md:peer-hover:ml-60'}
        `}
        style={{
          transition: 'margin-top 300ms, margin-left 300ms 50ms'
        }}
      >
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:right-8 z-20">
        <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default App;