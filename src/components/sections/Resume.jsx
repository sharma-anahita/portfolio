import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-base sm:text-lg font-semibold text-gray-800">
          📄 Resume
        </h2>
        <p className="mb-6 text-gray-600">
          Download my Software Engineering Intern resume.
        </p>
        <a
          href="/Anahita_Sharma_resume_SWE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
