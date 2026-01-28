import React from 'react';

const DesktopSidebar = ({ sidebarOpen }) => {
  const navItems = [
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#experience', label: 'Experience', icon: '💼' },
    { href: '#education', label: 'Education', icon: '🎓' },
    { href: '#projects', label: 'Projects', icon: '🚀' },
    { href: '#skills', label: 'Skills', icon: '🌸' },
    { href: '#coding-profiles', label: 'Coding Profiles', icon: '💻' },
    { href: '/Anahita_Sharma_resume_SWE.pdf', label: 'Resume', icon: '📄', external: true },
    { href: '#contact', label: 'Contact Me', icon: '✉️' }
  ];

  return (
    <div className={`peer group fixed left-0 top-0 h-screen w-64 bg-white shadow-xl z-10 overflow-hidden border-r border-gray-100 transition-all duration-300 
      ${sidebarOpen ? 'translate-x-0 block' : '-translate-x-full hidden'} 
      md:translate-x-0 md:block md:w-16 md:hover:w-60`}>
      <div className="md:pt-12 pt-12 w-60">
        <nav className="md:space-y-1 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center md:gap-3 gap-3 md:px-0 px-4 md:py-3 py-3 md:pl-5 text-sm font-medium text-gray-700 hover:text-pink-400 hover:bg-pink-50 md:rounded-none rounded-xl transition-all duration-200 whitespace-nowrap md:justify-start"
            >
              <span className="text-lg md:min-w-[24px]">{item.icon}</span>
              <span className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopSidebar;