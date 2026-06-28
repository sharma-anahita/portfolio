import React from 'react';

const Education = () => {
  return (
    <section id="education" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-base sm:text-lg font-semibold text-themeText">🎓 Education</h2>
        <div className="space-y-8">
          <div className="bg-themeCard border border-themeBorder rounded-lg shadow-themeCard p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-themeText">National Institute of Technology, Srinagar</h3>
                <p className="text-themeTextSec text-sm sm:text-base">Bachelor of Technology in Computer Science & Engineering</p>
              </div>
              <span className="text-sm text-themeTextMuted self-start sm:self-auto">2023 – 2027</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-themeTextSec mt-2">
                <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Theory of Computation
              </p>
            </div>
          </div>
          <div className="bg-themeCard border border-themeBorder rounded-lg shadow-themeCard p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-themeText">Shaurya International School, Jammu, J&K</h3>
                <p className="text-themeTextSec text-sm sm:text-base">Class XII (CBSE)</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-themeAccent font-semibold">Percentage: 93.2%</p>
              <p className="text-sm text-themeTextSec mt-2">
                <span className="font-semibold">Subjects:</span> Physics, Chemistry, Mathematics (PCM)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;