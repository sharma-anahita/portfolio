// src/components/projects/ProjectsBook.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import BookPage from './BookPage';
import { useIsMobile } from '../../hooks/useIsMobile';

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
  const isMobile = useIsMobile();

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
        className="absolute -top-12 right-0 p-2 rounded-full bg-themeCard border border-themeBorder shadow-lg hover:shadow-xl transition-all z-50 hover:bg-themeAccentBg hover:text-themeAccent text-themeText"
        aria-label="Close book"
      >
        <X className="w-5 h-5" />
      </button>

      <div 
        className="book-container relative mx-auto perspective-2000"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`book-wrapper relative w-full max-w-5xl mx-auto bg-themeCard border border-themeBorder backdrop-blur-themeCard rounded-lg shadow-themeCard transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
          style={{ minHeight: '600px' }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-r from-themeBorder via-themeBgSec to-themeBorder shadow-inner z-20 transform -translate-x-1/2 book-divider" />
          <div className="book-spread grid grid-cols-2 relative" style={{ minHeight: '600px' }}>
            {isMobile ? (
              <BookPage
                project={projects[currentPage]}
                isMobile={true}
                isFlipping={isFlipping}
                flipDirection={flipDirection}
                onPageClick={!isFlipping ? handleNext : undefined}
              />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0 || isFlipping}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              currentPage === 0 || isFlipping
                ? 'bg-themeBgSec text-themeTextMuted/40 border-themeBorder cursor-not-allowed shadow-none'
                : 'bg-themeCard text-themeTextSec border-themeBorder hover:bg-themeAccentBg hover:text-themeAccent shadow-md hover:shadow-lg'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-themeTextMuted">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              currentPage === totalPages - 1 || isFlipping
                ? 'bg-themeBgSec text-themeTextMuted/40 border-themeBorder cursor-not-allowed shadow-none'
                : 'bg-themeCard text-themeTextSec border-themeBorder hover:bg-themeAccentBg hover:text-themeAccent shadow-md hover:shadow-lg'
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