export const projects = [
  {
  image: '/api/placeholder/130/100',
  category: 'Systems',
  title: 'Cross-Platform Custom Shell',
  technologies: [
    'C',
    'POSIX',
    'Process Management',
    'Environment Variables',
    'Custom Built-ins',
    'Memory Management',
    'Cross-Platform Compatibility',
    'Win32 API'
  ],
  github: 'https://github.com/sharma-anahita/custom-shell',
  live: null,
  description: ` 
  Built a Unix-like command-line shell in C supporting command parsing, built-in commands, and external program execution.
`,
  highlights: [
    'Implemented multi-stage process pipelines (|) and I/O redirection (>, <, >>, 2>) using low-level OS primitives such as pipe, dup2, and file descriptor manipulation.',
    'Developed a tokenizer and parser to convert user input into structured command pipelines for execution.',
    'Designed a cross-platform execution layer supporting POSIX systems (fork/execve) and Windows (CreateProcess,CreatePipe) for process creation and inter-process communication.',
    'Implemented PATH resolution and environment variable handling for dynamic command discovery and execution.'
  ]
}
,
  {
    image: '/api/placeholder/130/100',
    category: 'Backend',
    title: 'Video Streaming Backend System',
    technologies: ['Node.js', 'MongoDB', 'JWT', 'REST APIs', 'MVC', 'Multer', 'Cloudinary'],
    github: 'https://github.com/sharma-anahita/video-streaming-backend',
    live: null,
    description: 'Developed scalable backend with JWT-secured REST APIs using MVC pattern. Designed Mongoose models for users, subscriptions & video metadata. Integrated Multer + Cloudinary for uploads and media storage. Set up CI/CD-ready architecture for deployment.',
    highlights: [
  'JWT-based authentication for users and admins with role separation',
  'Modular MVC architecture for scalable API development',
  'Secure video uploads using Multer with Cloudinary storage',
  'Well-structured MongoDB schemas for users, subscriptions, and videos',
  'Centralized error handling and reusable API response utilities'
]
    
  },
  {
    image: '/api/placeholder/130/100',
    category: 'Full-Stack',
    title: 'MindTrack — Mental Health Application',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Zustand',
      'Tailwind CSS',
      'PostCSS',
      'React Router',
      'Recharts',
      'Framer Motion',
      'Lucide React',
      'Express',
      'Node.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Axios',
      'FastAPI',
      'Uvicorn',
      'Python',
      'TextBlob',
      'NumPy'
    ],
    github: null,
    live: null,
    description: `MindTrack is a production-ready full-stack mental health dashboard for mood logging, AI-powered insights, goal management, and gamified engagement. The app combines daily mood tracking with sentiment analysis, trend analytics, achievements, and progress visualization to encourage consistent mental wellness practices.`,
    highlights: [
      'Daily mood logging with optional reflections and AI-powered sentiment analysis (FastAPI + TextBlob)',
      'Trend analysis with volatility detection and risk scoring; endpoints: /analyze-reflection, /analyze-trend',
      'Gamification system: achievements, XP, levels, streaks, and goal management',
      'Interactive, responsive dashboard with Recharts and Framer Motion for real-time visualizations',
      'Secure JWT-based authentication with bcrypt password hashing and protected APIs',
      'Monorepo architecture separating frontend, backend, and ML service; production-ready build and start scripts'
    ]

  },
  {
    image: '/api/placeholder/130/100',
    category: 'Frontend',
    title: 'CineTracker',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Appwrite'],
    github: 'https://github.com/sharma-anahita/CineTracker',
    live: 'https://cine-tracker-psi.vercel.app/',
    description: 'Built a movie discovery and tracking application using React with dynamic search and browsing features powered by the TMDb API. Designed modular, reusable components and handled asynchronous API calls and state management for efficient data rendering. Implemented persistent watchlist functionality with backend integration, focusing on clean architecture and scalable data handling.',
    highlights: [
  'Real-time movie search and discovery powered by TMDb API',
  'Trending movies section based on user search behavior',
  'Reusable React components with clean state management',
  'Persistent watchlist functionality with backend integration',
  'Responsive, minimal UI focused on usability and performance'
]

  },
  {
    image: '/api/placeholder/130/100',
    category: 'Data Analysis',
    title: 'Learning Analytics Insights',
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/sharma-anahita/Student-performance-analyzer',
    live: null,
    description: 'Conducted multi-variable analysis on academic performance. Engineered learning metrics and computed statistical indicators. Visualized attendance vs performance trends using bar, line, and pie charts for comprehensive data insights.',
    highlights: [
  'Computed total and average scores for individual student performance analysis',
  'Calculated subject-wise averages using NumPy for comparative insights',
  'Analyzed relationship between attendance percentage and academic performance',
  'Visualized trends using bar, line, and pie charts with Matplotlib',
  'Structured data processing pipeline using Pandas for clean analysis'
]

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
 
];