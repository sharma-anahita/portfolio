import React from 'react';

const MobileNav = ({ sidebarOpen, onNavClick }) => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact Me' }
  ];

  return (
    <nav
      className={`fixed left-0 top-0 w-full transition-all duration-300 z-30 bg-white shadow-lg ${sidebarOpen ? 'block' : 'hidden'} px-4 sm:px-8`}
      style={{ height: sidebarOpen ? 'auto' : '0', minHeight: sidebarOpen ? '12rem' : '0', overflow: sidebarOpen ? 'visible' : 'hidden' }}
    >
      <div className="flex flex-col items-center justify-center py-4 gap-2 sm:gap-3">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavClick}
            className="py-2 text-base font-semibold text-gray-700 hover:text-pink-400 w-full text-center"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;