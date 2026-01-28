import React, { useState, useEffect, memo } from 'react';

const TypingHeadline = memo(() => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Software Engineer building reliable backend systems and full-stack applications.",
    "Cybersecurity researcher with hands-on experience in Windows internals and system-level security.",
    "DSA enthusiast with 880+ algorithmic problems solved across major coding platforms.",
    "Consistent problem solver with 330+ days of competitive programming and interview preparation."
  ];

  useEffect(() => {
    const text = texts[currentIndex];
    let timeout;

    if (isTyping) {
      // Typing phase
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 50); // Typing speed
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause after typing
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30); // Deleting speed
      } else {
        // Finished deleting, move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      {currentText}
      <span 
        className={`inline-block w-0.5 h-5 bg-pink-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
      />
    </span>
  );
});

TypingHeadline.displayName = 'TypingHeadline';

export default TypingHeadline;
