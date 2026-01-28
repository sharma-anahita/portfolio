import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const MobileNav = ({ sidebarOpen, onNavClick, activeSection }) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      setIsOpen(true);
      setIsClosing(false);
    } else if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500);
    }
  }, [sidebarOpen, isOpen]);
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#coding-profiles', label: 'Coding Profiles' },
    { href: '/Anahita_Sharma_resume_SWE.pdf', label: 'Resume', external: true },
    { href: '#contact', label: 'Contact Me' }
  ];

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onNavClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNavClick]);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      const focusableElements = sheetRef.current.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement.focus();

      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${isOpen || isClosing ? 'block' : 'hidden'}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen || isClosing ? 'opacity-100' : 'opacity-0'}`}
        onClick={onNavClick}
      />

      {/* Bottom Sheet */}
      <div
        ref={sheetRef}
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl ${isClosing ? 'slide-down' : 'slide-up'}`}
        style={{ height: '60vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onNavClick}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Navigation */}
        <nav className="px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = !item.external && activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onNavClick}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`py-3 text-lg font-semibold transition-colors ${
                    isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-400'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;