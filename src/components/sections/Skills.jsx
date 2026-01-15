import React from 'react';
import { frontendSkills, backendSkills, dataSkills, aiSkills, toolsSkills } from '../../data/skills';

const Skills = () => {
  const SkillCard = ({ skill }) => (
    <div className="skill-card flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <span className="text-3xl mb-2">{skill.icon}</span>
      <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
    </div>
  );

  return (
    <section id="skills" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-base sm:text-lg font-semibold text-gray-800">
          🌸 Skills
        </h2>
        
        <div className="mb-8">
          <h3 className="mb-4 text-md font-semibold text-gray-700">🎨 Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-md font-semibold text-gray-700">⚙️ Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-md font-semibold text-gray-700">📊 Data & Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dataSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-md font-semibold text-gray-700">🧠 AI & Agent Systems</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {aiSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-md font-semibold text-gray-700">🛠️ Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;