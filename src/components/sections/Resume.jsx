import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-base sm:text-lg font-semibold text-themeText">
          📄 Resume
        </h2>
        <p className="mb-6 text-themeTextSec">
          Download my Software Engineering Intern resume.
        </p>
        <a
          href="/Anahita_Sharma_resume_SWE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-themeBtnGradStart to-themeBtnGradEnd text-white text-sm font-medium rounded-lg hover:from-themeBtnGradStartHover hover:to-themeBtnGradEndHover transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 shine-sweep-btn"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
