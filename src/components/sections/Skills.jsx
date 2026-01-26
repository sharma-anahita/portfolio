import React, { useState } from 'react';
import { frontendSkills, backendSkills, dataSkills, aiSkills, toolsSkills, cyberSecuritySkills, skillsCategories } from '../../data/skills';
import useScrollReveal from '../../hooks/useScrollReveal';

const Skills = () => {
  // Animated wrapper component for scroll reveal
  const AnimatedCard = ({ children, index }) => {
    const [ref, isVisible] = useScrollReveal();
    
    return (
      <div
        ref={ref}
        className={`transition-all duration-[400ms] ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: `${index * 30}ms` }}
      >
        {children}
      </div>
    );
  };

  const SkillCard = ({ skill }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [iconTilt, setIconTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });

      // Calculate tilt based on cursor position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = (e.clientX - rect.left - centerX) / centerX;
      const distY = (e.clientY - rect.top - centerY) / centerY;

      setTilt({
        rotateX: distY * -8,
        rotateY: distX * 8,
      });

      // Icon gets slightly different tilt for personality
      setIconTilt({
        rotateX: distY * -6,
        rotateY: distX * 6,
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setTilt({ rotateX: 0, rotateY: 0 });
      setIconTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
      <div 
        className="skill-card flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm transition-all cursor-pointer md:hover:shadow-lg md:hover:-translate-y-1 md:hover:scale-105 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          '--x': `${mousePos.x}%`,
          '--y': `${mousePos.y}%`,
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: isHovering ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none rounded-lg opacity-0 md:opacity-20"
            style={{
              background: `radial-gradient(circle 150px at var(--x) var(--y), rgba(244, 114, 182, 0.4), transparent 80%)`,
            }}
          />
        )}
        <span 
          className="text-3xl mb-2 relative z-10 inline-block transition-transform duration-300 md:group-hover:scale-125"
          style={{
            transform: `perspective(600px) rotateX(${iconTilt.rotateX}deg) rotateY(${iconTilt.rotateY}deg) scale(${isHovering ? 1.2 : 1})`,
            transition: isHovering ? 'transform 0.2s ease-out' : 'transform 0.3s ease-out',
          }}
        >
          {skill.icon}
        </span>
        <p className="text-sm font-semibold text-gray-800 text-center relative z-10">{skill.name}</p>
      </div>
    );
  };

  return (
    <section id="skills" className="px-8 py-12 transition-all duration-300">
      <style>{`
        .skills-grid:has(.skill-card:hover) .skill-card:not(:hover) {
          opacity: 0.5;
          transition: opacity 300ms ease-out;
        }
        .skills-grid .skill-card {
          transition: opacity 300ms ease-out;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-base sm:text-lg font-semibold text-gray-800">
          🌸 Skills
        </h2>
        
        {skillsCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-8">
            <h3 className="mb-4 text-md font-semibold text-gray-700">{category.title}</h3>
            <div className="skills-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <AnimatedCard key={`${category.id}-${skillIndex}`} index={categoryIndex * 10 + skillIndex}>
                  <SkillCard skill={skill} />
                </AnimatedCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;