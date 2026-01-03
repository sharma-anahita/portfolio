import React from 'react';

const DesktopSidebar = ({ sidebarOpen }) => {
  const navItems = [
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#experience', label: 'Experience', icon: '💼' },
    { href: '#education', label: 'Education', icon: '🎓' },
    { href: '#projects', label: 'Projects', icon: '🚀' },
    { href: '#skills', label: 'Skills', icon: '🌸' },
    { href: '#contact', label: 'Contact Me', icon: '✉️' }
  ];

  return (
    <div className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-xl z-10 overflow-y-auto border-r border-gray-100 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${sidebarOpen ? 'block' : 'hidden'}`}>
      <div className="p-8 pt-12">
        <nav className="space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-xl transition-all duration-200 group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopSidebar;