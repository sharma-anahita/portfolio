import React from 'react';
import { Menu } from 'lucide-react';

const HamburgerButton = ({ sidebarOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle sidebar"
      className={`md:hidden fixed top-4 left-4 z-40 p-2 rounded-lg transition-all shadow-lg border border-themeBorder ${!sidebarOpen ? 'bg-themeBg' : 'bg-themeCard'}`}
    >
      <Menu className={`w-6 h-6 ${!sidebarOpen ? 'text-themeAccent' : 'text-themeTextSec'}`} />
    </button>
  );
};

export default HamburgerButton;