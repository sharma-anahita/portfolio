export const projects = [
  {
    image: '/api/placeholder/130/100',
    category: 'Backend',
    title: 'Video Streaming Backend System',
    technologies: ['Node.js', 'MongoDB', 'JWT', 'REST APIs', 'MVC', 'Multer', 'Cloudinary'],
    github: 'https://github.com/sharma-anahita/video-streaming-backend',
    live: null,
    description: 'Developed scalable backend with JWT-secured REST APIs using MVC pattern. Designed Mongoose models for users, subscriptions & video metadata. Integrated Multer + Cloudinary for uploads and media storage. Set up CI/CD-ready architecture for deployment.'
  },
  {
    image: '/api/placeholder/130/100',
    category: 'Full-Stack',
    title: 'Gamified Mood Tracker',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'MERN Stack'],
    github: 'https://github.com/sharma-anahita/gamefied-mood-tracker-v2',
    description: 'Developed an interactive mood tracking web app using modern frontend technologies with game-style UI/UX to make tracking moods engaging and intuitive. Built backend services and persistent storage to securely save user entries and manage session data, focusing on seamless user experience and reliability. Implemented data visualization and progress feedback features that help users monitor trends over time, enhancing user engagement and app usefulness.'
  },
  {
    image: '/api/placeholder/130/100',
    category: 'Frontend',
    title: 'CineTracker',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Appwrite'],
    github: 'https://github.com/sharma-anahita/CineTracker',
    live: 'https://cine-tracker-psi.vercel.app/',
    description: 'Built a movie discovery and tracking application using React with dynamic search and browsing features powered by the TMDb API. Designed modular, reusable components and handled asynchronous API calls and state management for efficient data rendering. Implemented persistent watchlist functionality with backend integration, focusing on clean architecture and scalable data handling.'
  },
  {
    image: '/api/placeholder/130/100',
    category: 'Data Analysis',
    title: 'Learning Analytics Insights',
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/sharma-anahita/Student-performance-analyzer',
    live: null,
    description: 'Conducted multi-variable analysis on academic performance. Engineered learning metrics and computed statistical indicators. Visualized attendance vs performance trends using bar, line, and pie charts for comprehensive data insights.'
  }
  ,
  {
    image: '/api/placeholder/130/100',
    category: 'Automation / Data Pipeline',
    title: 'Gmail to Google Sheets Automation',
    technologies: ['Python', 'Gmail API', 'Google Sheets API', 'OAuth 2.0', 'BeautifulSoup'],
    github: 'https://github.com/sharma-anahita/gmail-to-sheets',
    live: null,
    description: 'Built a Python-based automation system that ingests unread emails from a Gmail inbox and logs structured data into Google Sheets. The pipeline securely authenticates using OAuth 2.0, parses email headers and bodies, prevents duplicate processing using Gmail labels, and ensures reliable execution through structured logging and retry logic. Designed for real-world usability with clean architecture and API resilience in mind.',
    highlights: [
      'Secure OAuth 2.0 authentication with Gmail & Google Sheets APIs',
      'Duplicate-prevention using Gmail label–based state management',
      'HTML-to-plain-text email parsing for clean, readable data',
      'Robust logging and retry logic for API reliability'
    ],
    
  },
  {
    
    image: '/api/placeholder/130/100',
    category: 'AI / Agent Systems',
    title: 'AutoStream Conversational Agent',
    technologies: ['Python', 'LangGraph', 'RAG', 'FAISS', 'LLMs'],
    github: 'https://github.com/sharma-anahita/autostream-agent',
    live: null,
    description: 'Developed a stateful, multi-turn conversational AI agent using LangGraph and Retrieval-Augmented Generation (RAG). The agent supports intent detection, product queries, and controlled lead capture through deterministic workflows. Designed with explicit state management to ensure safe tool execution, prevent intent drift during multi-step interactions, and enable reliable real-world conversational behavior.',
    highlights: [
      'Explicit agent state for reliable multi-turn conversations',
      'Deterministic control flow using LangGraph nodes and transitions',
      'Retrieval-Augmented Generation (RAG) over a knowledge base using FAISS',
      'Safe lead-capture workflow with intent freezing during high-intent states'
    ]
    
  }
];