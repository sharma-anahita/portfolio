import React from 'react';
import { Search, Grid, Twitter, Facebook, Globe, Star } from 'lucide-react';

function App() {
  const frontendSkills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript (ES6+)', icon: '🟨' },
    { name: 'React', icon: '⚛️' }
  ];

  const backendSkills = [
    { name: 'C', icon: '🔧' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'JWT Authentication', icon: '🔐' },
    { name: 'MVC Architecture', icon: '🏗️' },
    { name: 'SQL', icon: '📊' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Mongoose', icon: '📦' }
  ];

  const mlSkills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '💻' },
    { name: 'NumPy', icon: '📐' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Data Analysis', icon: '📈' }
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: '🌱' },
    { name: 'Postman', icon: '📬' },
    { name: 'Cloudinary', icon: '☁️' },
    { name: 'Multer', icon: '📤' },
    { name: 'Appwrite', icon: '🧩' }
  ];

  const techIcons = {
    'React': '⚛️',
    'Node.js': '🟢',
    'Express.js': '🚀',
    'MongoDB': '🍃',
    'JavaScript': '🟨',
    'Python': '🐍',
    'C++': '💻',
    'REST APIs': '🔗',
    'JWT': '🔐',
    'MVC': '🏗️',
    'MVC Architecture': '🏗️',
    'Multer': '📤',
    'Cloudinary': '☁️',
    'MERN Stack': '⚡',
    'TMDB API': '🎬',
    'Appwrite': '🧩',
    'NumPy': '📐',
    'Pandas': '🐼',
    'Matplotlib': '📊',
    'MySQL': '🗄️',
    'Mongoose': '📦',
    'Git & GitHub': '🌱',
    'Postman': '📬',
    'JavaScript (ES6+)': '🟨'
  };

  const projects = [
    {
      image: '/api/placeholder/130/100',
      category: 'Backend',
      title: 'Video Streaming Backend System',
      technologies: ['Node.js', 'MongoDB', 'JWT', 'REST APIs', 'MVC', 'Multer', 'Cloudinary'],
      github: 'https://github.com/username/video-streaming-backend',
      live: null,
      description: 'Developed scalable backend with JWT-secured REST APIs using MVC pattern. Designed Mongoose models for users, subscriptions & video metadata. Integrated Multer + Cloudinary for uploads and media storage. Set up CI/CD-ready architecture for deployment.'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Full-Stack',
      title: 'Gamified Mood Tracker',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'MERN Stack'],
      github: 'https://github.com/username/gamified-mood-tracker',
      live: 'https://gamified-mood-tracker.vercel.app',
      description: 'Developed an interactive mood tracking web app using modern frontend technologies with game-style UI/UX to make tracking moods engaging and intuitive. Built backend services and persistent storage to securely save user entries and manage session data, focusing on seamless user experience and reliability. Implemented data visualization and progress feedback features that help users monitor trends over time, enhancing user engagement and app usefulness.'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Frontend',
      title: 'CineTracker',
      technologies: ['React', 'TMDB API', 'Appwrite'],
      github: 'https://github.com/username/cinetracker',
      live: 'https://cinetracker.vercel.app',
      description: 'Built a movie discovery and tracking application using React with dynamic search and browsing features powered by the TMDb API. Designed modular, reusable components and handled asynchronous API calls and state management for efficient data rendering. Implemented persistent watchlist functionality with backend integration, focusing on clean architecture and scalable data handling.'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Data Analysis',
      title: 'Learning Analytics Insights',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/username/learning-analytics',
      live: null,
      description: 'Conducted multi-variable analysis on academic performance. Engineered learning metrics and computed statistical indicators. Visualized attendance vs performance trends using bar, line, and pie charts for comprehensive data insights.'
    }
  ];

  const recentPosts = [
    { title: 'The spectacle before us was indeed sublime', date: 'September 26, 2019' },
    { title: 'Far far away, behind the word mountains', date: 'August 15, 2019' },
    { title: 'The meaning of health has evolved over time', date: 'July 25, 2019' }
  ];

  const tags = [
    'Health', 'Inspiration', 'Lifestyle', 'Music', 
    'Technology', 'Travel', 'Video'
  ];

  return (
    <div className="min-h-screen bg-[#fef5f3]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#fef5f3]">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Quick Search...</span>
        </div>
        
        {/* <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-pink-500">MW</span>
            <span className="text-gray-800"> Zento</span>
          </div>
        </div> */}

        <div className="flex items-center gap-3">
          <Grid className="w-5 h-5 text-gray-700" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="mb-6 text-4xl font-normal">
                Hey, I'm <span className="font-bold text-pink-400">Anahita Sharma</span> 👋
              </h1>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                A <span className="font-semibold text-pink-400">Computer Science</span> undergraduate at <span className="font-semibold">NIT Srinagar</span> who enjoys building <span className="font-semibold text-pink-400">reliable backend systems</span> and <span className="font-semibold text-pink-400">full-stack web applications</span>
              </p>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-gray-700">Let's connect</p>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 text-sm border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-300"
                  />
                  <button className="px-6 py-3 text-sm font-medium text-white bg-pink-400 rounded-md hover:bg-pink-500">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-orange-300 aspect-[4/3]">
                <div className="w-full h-full flex items-end justify-center p-8">
                  <div className="w-24 h-32 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-lg font-semibold text-gray-800">💼 Experience</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Research Intern – DRDO, Delhi (Office of Cyber)</h3>
              </div>
              <span className="text-sm text-gray-500">Dec 2025 – Present</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">• Gaining hands-on exposure to offensive software exploitation techniques, including vulnerability analysis and exploit development fundamentals.</p>
              <p className="text-sm text-gray-600">• Analyzing Windows internals, executable formats (PE), memory behavior, and low-level program execution for security assessment.</p>
              <p className="text-sm text-gray-600">• Assisting in controlled lab-based security research under senior scientists, following ethical and organizational security guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-lg font-semibold text-gray-800">🎓 Education</h2>
          
          <div className="space-y-8">
            {/* NIT Srinagar */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">National Institute of Technology, Srinagar</h3>
                  <p className="text-gray-600">Bachelor of Technology in Computer Science & Engineering</p>
                </div>
                <span className="text-sm text-gray-500">2023 – 2027</span>
              </div>
              <div className="mt-4">
                <p className="text-pink-600 font-semibold">CGPA: 9.18 / 10</p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Theory of Computation
                </p>
              </div>
            </div>

            {/* Shaurya International School */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Shaurya International School, Jammu, J&K</h3>
                  <p className="text-gray-600">Class XII (CBSE)</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-pink-600 font-semibold">Percentage: 93.2%</p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Subjects:</span> Physics, Chemistry, Mathematics (PCM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Projects Grid */}
            <div className="flex-1">
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="flex gap-6 bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-300 rounded-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <span className="absolute top-2 left-2 px-3 py-1 text-xs font-medium text-white bg-purple-500 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-400 cursor-pointer">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-md flex items-center gap-1">
                              <span>{techIcons[tech] || '💻'}</span>
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" 
                               className="text-gray-600 hover:text-pink-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" 
                               className="text-gray-600 hover:text-pink-400 transition-colors">
                              <Globe className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-lg font-semibold text-gray-800">
            🌸 Skills
          </h2>

          {/* Frontend Skills */}
          <div className="mb-8">
            <h3 className="mb-4 text-md font-semibold text-gray-700">🎨 Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-8">
            <h3 className="mb-4 text-md font-semibold text-gray-700">⚙️ Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ML Skills */}
          <div className="mb-8">
            <h3 className="mb-4 text-md font-semibold text-gray-700">🤖 Machine Learning & Data</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mlSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="mb-4 text-md font-semibold text-gray-700">🛠️ Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Anahita Sharma</h2>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-6 text-sm">
              <a href="https://www.instagram.com/anahita_sharma_.22/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-400">
                <span className="w-6 h-6 flex items-center justify-center text-xl">📷</span>
                <span className="text-xs">Instagram</span>
              </a>
              <a href="https://github.com/sharma-anahita" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-xs">GitHub</span>
              </a>
              <a href="https://leetcode.com/u/stuffToDo/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-400">
                <span className="w-6 h-6 flex items-center justify-center text-xl">🏆</span>
                <span className="text-xs">LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Site Button */}
      <div className="fixed bottom-8 left-8">
        <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <span className="text-lg">↗️</span>
          <span className="font-semibold text-gray-800">Visit site</span>
        </button>
      </div>

      {/* Search Button */}
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Search className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default App;