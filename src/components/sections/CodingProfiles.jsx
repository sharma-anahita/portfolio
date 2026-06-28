import React from 'react';
import PropTypes from 'prop-types';
import useScrollReveal from '../../hooks/useScrollReveal';

const CodingProfiles = () => {
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

  AnimatedCard.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
  };

  const StatCard = ({ number, label, index }) => (
    <AnimatedCard index={index}>
      <div className="bg-themeCard rounded-xl shadow-themeCard border border-themeBorder hover:shadow-themeCardHover transition-all duration-300 p-6 text-center">
        <div className="text-3xl font-bold text-themeAccent mb-2">{number}</div>
        <div className="text-sm font-medium text-themeTextSec">{label}</div>
      </div>
    </AnimatedCard>
  );

  StatCard.propTypes = {
    number: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  const ProfileCard = ({ title, description, buttonText, link, index }) => (
    <AnimatedCard index={index}>
      <div className="bg-themeCard rounded-xl shadow-themeCard border border-themeBorder hover:shadow-themeCardHover hover:-translate-y-1 transition-all duration-300 p-6">
        <h3 className="text-xl font-bold text-themeText mb-3">{title}</h3>
        <p className="text-themeTextSec mb-4 leading-relaxed">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gradient-to-r from-themeBtnGradStart to-themeBtnGradEnd text-white text-sm font-medium rounded-lg hover:from-themeBtnGradStartHover hover:to-themeBtnGradEndHover transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 shine-sweep-btn"
        >
          {buttonText}
        </a>
      </div>
    </AnimatedCard>
  );

  ProfileCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <section id="coding-profiles" className="px-8 py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-base sm:text-lg font-semibold text-themeText">
          💻 Problem Solving & Competitive Programming
        </h2>

        <p className="mb-8 text-themeTextSec max-w-2xl">
          I have solved 935+ algorithmic problems across platforms with 350+ days of consistent practice.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard number="935+" label="Problems Solved" index={0} />
          <StatCard number="350+" label="Active Days" index={1} />
          <StatCard number="5+" label="Coding Platforms" index={2} />
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ProfileCard
            title="LeetCode"
            description="Interview-focused DSA practice across arrays, trees, graphs, sliding window, hashing, and dynamic programming."
            buttonText="View LeetCode"
            link="https://leetcode.com/u/stuffToDo/"
            index={3}
          />
          <ProfileCard
            title="GeeksForGeeks"
            description="Core data structures and algorithms practice with strong fundamentals and optimized solutions."
            buttonText="View GFG"
            link="https://www.geeksforgeeks.org/profile/sharmaana7zv"
            index={4}
          />
          <ProfileCard
            title="Codolio"
            description="A unified dashboard showing my problem-solving activity and consistency across multiple platforms."
            buttonText="View Codolio"
            link="https://codolio.com/profile/stuffToDo"
            index={5}
          />
        </div>

        <p className="text-center text-themeTextMuted italic text-sm">
          My problem-solving practice helps me write optimized, bug-free code and handle real-world edge cases in production systems.
        </p>
      </div>
    </section>
  );
};

export default CodingProfiles;