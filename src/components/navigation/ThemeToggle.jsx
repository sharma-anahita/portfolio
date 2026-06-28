import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <div className="flex items-center">
      {/* Visual toggle container */}
      <div 
        className={`relative flex items-center p-1 rounded-full border transition-all duration-300 w-[112px] h-[38px] cursor-pointer select-none
          ${theme === 'blossom' 
            ? 'bg-pink-50/80 border-pink-200 shadow-inner' 
            : theme === 'companion'
              ? 'bg-[#171E35]/80 border-[#8B7DFF]/20 shadow-inner shadow-black/40'
              : 'bg-[#111C31]/80 border-blue-500/20 shadow-inner shadow-black/40'}`}
        onClick={() => {
          let nextTheme = 'blossom';
          if (theme === 'blossom') nextTheme = 'agent';
          else if (theme === 'agent') nextTheme = 'companion';
          onToggle(nextTheme);
        }}
      >
        {/* Sliding Indicator */}
        <div 
          className={`absolute top-[3px] bottom-[3px] left-[3px] w-[30px] rounded-full transition-transform duration-300 ease-out shadow-sm
            ${theme === 'blossom' 
              ? 'bg-white translate-x-0' 
              : theme === 'companion'
                ? 'bg-gradient-to-br from-[#8B7DFF] to-[#C98EFF] translate-x-[76px] shadow-[0_0_8px_rgba(139,125,255,0.4)]'
                : 'bg-gradient-to-br from-[#4DA3FF] to-[#75C6FF] translate-x-[38px] shadow-[0_0_8px_rgba(77,163,255,0.4)]'}`}
          style={{
            // Custom spring-like easing transition
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        />

        {/* Blossom Mode Option */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (theme !== 'blossom') onToggle('blossom');
          }}
          className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full transition-transform duration-200 active:scale-95"
          aria-label="Switch to Blossom Mode"
        >
          <span className={`text-base transition-opacity duration-200 ${theme === 'blossom' ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}>
            🌸
          </span>
        </button>

        {/* Agent Mode Option */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (theme !== 'agent') onToggle('agent');
          }}
          className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full transition-transform duration-200 active:scale-95 ml-[8px]"
          aria-label="Switch to Agent Mode"
        >
          <span className={`text-base transition-opacity duration-200 ${theme === 'agent' ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}>
            🤖
          </span>
        </button>

        {/* Companion Mode Option */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (theme !== 'companion') onToggle('companion');
          }}
          className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full transition-transform duration-200 active:scale-95 ml-[8px]"
          aria-label="Switch to Companion Mode"
        >
          <span className={`text-base transition-opacity duration-200 ${theme === 'companion' ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}>
            ✨
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
