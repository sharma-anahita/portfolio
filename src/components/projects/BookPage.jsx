// src/components/projects/BookPage.jsx
import React from 'react';
import { Globe } from 'lucide-react';
import { techIcons } from '../../data/techIcons';

const BookPage = ({ project, side, isFlipping, flipDirection, onPageClick }) => {
  const isLeftPage = side === 'left';
  // Animate right page on 'next', left page on 'prev'
  const shouldAnimate = isFlipping && (
    (flipDirection === 'next' && !isLeftPage) ||
    (flipDirection === 'prev' && isLeftPage)
  );

  return (
    <div
      className={`book-page relative p-8 sm:p-12 ${
        isLeftPage ? 'pr-10 sm:pr-16 border-r border-gray-100' : 'pl-10 sm:pl-16'
      } ${shouldAnimate ? 'page-flip' : ''} ${onPageClick ? 'cursor-pointer hover:bg-pink-50 transition-colors' : ''}`}
      style={{
        transformOrigin: isLeftPage ? 'right center' : 'left center',
      }}
      onClick={e => {
        // Prevent clicks on links or buttons from triggering page turn
        if (!onPageClick) return;
        let el = e.target;
        while (el && el !== e.currentTarget) {
          if (el.tagName === 'A' || el.tagName === 'BUTTON') return;
          el = el.parentElement;
        }
        onPageClick();
      }}
    >
      {isLeftPage ? (
        <div className="h-full flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-sm mb-4">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              {project.title}
            </h3>
          </div>

          <div className="flex-1">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-auto pt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full" />
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => {
                const IconComponent = techIcons[tech];
                return (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs bg-pink-100 text-pink-600 rounded-md flex items-center gap-1.5 shadow-sm"
                  >
                    {IconComponent ? <IconComponent className="w-4 h-4" /> : <span>💻</span>}
                    <span className="font-medium">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {project.highlights && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-6 flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPage;