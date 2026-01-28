import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-base sm:text-lg font-semibold text-gray-800">💼 Experience</h2>
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Research Intern – DRDO, Delhi (Office of Cyber)</h3>
            </div>
            <span className="text-sm text-gray-500 self-start sm:self-auto">Dec 2025 – Present</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
  • Gained hands-on exposure to vulnerability analysis concepts and secure software assessment methodologies.
</p>
<p className="text-sm text-gray-600">
  • Studied Windows internals including executable formats (PE), memory behavior, and low-level program execution for security evaluation.
</p>
<p className="text-sm text-gray-600">
  • Supported controlled, lab-based cybersecurity research under senior scientists while following strict ethical and organizational security guidelines.
</p>

             </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;