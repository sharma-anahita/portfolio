import React from 'react';
import { Menu } from 'lucide-react';

const HamburgerButton = ({ sidebarOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle sidebar"
      className={`fixed top-4 left-4 z-40 p-2 rounded-lg transition-shadow shadow-lg ${!sidebarOpen ? 'bg-[#fef5f3]' : 'bg-white'}`}
      style={{ transition: 'background 0.2s' }}
    >
      <Menu className={`w-6 h-6 ${!sidebarOpen ? 'text-pink-300' : 'text-gray-600'}`} />
    </button>
  );
};

export default HamburgerButton;