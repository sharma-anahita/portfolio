import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-8 py-12 transition-all duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Contact Me</h2>
          <p className="mt-2 text-gray-600">Feel free to reach out for collaborations, questions, or just to connect!</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <a href="mailto:sharma.anahita.as@gmail.com" className="flex items-center gap-2 text-pink-500 hover:underline text-lg font-medium">
            <span className="text-xl">✉️</span> sharma.anahita.as@gmail.com
          </a>
          <div className="flex gap-6 mt-2">
            <a href="https://www.linkedin.com/in/anahita-sharma-4988a01b9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-pink-400 text-lg">
              <span className="text-2xl">💼</span>
              <span className="text-xs">LinkedIn</span>
            </a>
            <a href="https://github.com/sharma-anahita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-pink-400 text-lg">
              <span className="text-2xl">🐙</span>
              <span className="text-xs">GitHub</span>
            </a>
            <a href="https://www.instagram.com/anahita_sharma_.22/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-pink-400 text-lg">
              <span className="text-2xl">📷</span>
              <span className="text-xs">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;