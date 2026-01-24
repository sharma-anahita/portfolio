import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * Returns a ref to attach to a DOM element and a boolean indicating visibility
 */
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0;
      if (isInView && !isVisible) {
        setIsVisible(true);
        observer.unobserve(element);
        window.removeEventListener('scroll', checkVisibility);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when element actually enters viewport while scrolling
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(element); // Animate only once
          window.removeEventListener('scroll', checkVisibility);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -100px 0px', // Require element to be 100px into viewport
      }
    );

    observer.observe(element);
    window.addEventListener('scroll', checkVisibility, { passive: true });

    // Check initial visibility in case element is already in view
    checkVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isVisible]);

  return [ref, isVisible];
};

export default useScrollReveal;
