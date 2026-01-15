// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectsBook from '../projects/ProjectsBook';

const Projects = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);

  return (
    <section id="projects" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {!isBookOpen ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <button
              onClick={() => setIsBookOpen(true)}
              className="group relative"
            >
              <div className="book-cover w-64 h-80 bg-gradient-to-br from-pink-300 via-purple-300 to-orange-300 rounded-r-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">📚</div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Projects</h2>
                  <p className="text-white/90 text-sm drop-shadow">Click to explore</p>
                  <div className="mt-8 w-12 h-1 bg-white/50 rounded-full" />
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/30 to-transparent" />
              </div>
            </button>
          </div>
        ) : (
          <ProjectsBook 
            projects={projects} 
            onClose={() => setIsBookOpen(false)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;