// src/components/projects/ProjectsBook.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import BookPage from './BookPage';

const ProjectsBook = ({ projects, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
    // Animate book opening on mount
    useEffect(() => {
      setTimeout(() => setIsOpen(true), 10);
    }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const totalPages = projects.length;

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('next');
    setTimeout(() => {
      setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('prev');
    setTimeout(() => {
      setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(false);
          setTimeout(onClose, 400);
        }}
        className="absolute -top-12 right-0 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all z-50 hover:bg-pink-50"
        aria-label="Close book"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      <div 
        className="book-container relative mx-auto perspective-2000"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`book-wrapper relative w-full max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
          style={{ minHeight: '600px' }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 shadow-inner z-20 transform -translate-x-1/2 book-divider" />
          <div className="book-spread grid grid-cols-2 relative" style={{ minHeight: '600px' }}>
            <BookPage
              project={projects[currentPage]}
              side="left"
              isFlipping={isFlipping}
              flipDirection={flipDirection}
              onPageClick={!isFlipping ? handlePrev : undefined}
            />
            <BookPage
              project={projects[currentPage]}
              side="right"
              isFlipping={isFlipping}
              flipDirection={flipDirection}
              onPageClick={!isFlipping ? handleNext : undefined}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0 || isFlipping}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === 0 || isFlipping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-500 shadow-md hover:shadow-lg'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === totalPages - 1 || isFlipping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-500 shadow-md hover:shadow-lg'
            }`}
            aria-label="Next page"
          >
            <span className="text-sm font-medium hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBook;