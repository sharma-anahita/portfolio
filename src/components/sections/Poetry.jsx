import React from 'react';

const Poetry = () => {
  return (
    <section id="poetry" className="px-4 sm:px-8 py-12 transition-all duration-300">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">My World Outside of Coding</h2>
        <p className="text-gray-600 mb-4">Explore my poetry and creative writing journey:</p>
        <a
          href="https://poetry-site-git-main-sharma-anahitas-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors font-semibold text-lg"
        >
          Visit My Poetry Website
        </a>
      </div>
    </section>
  );
};

export default Poetry;
