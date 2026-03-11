export const frontendSkills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript (ES6+)', icon: '🟨' },
  { name: 'React', icon: '⚛️' }
];

export const backendSkills = [
  { name: 'C', icon: '🔧' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'JWT Authentication', icon: '🔐' },
  { name: 'MVC Architecture', icon: '🏗️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Mongoose', icon: '📦' }
];

export const dataSkills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '📐' },
  { name: 'Matplotlib', icon: '📊' },
  { name: 'Data Analysis', icon: '📈' },
  { name: 'Gmail API', icon: '✉️' },
  { name: 'Google Sheets API', icon: '📄' },
  { name: 'OAuth 2.0', icon: '🔑' },
  { name: 'BeautifulSoup', icon: '🥣' }
];

// export const aiSkills = [
//   { name: 'LangGraph', icon: '🧠' },
//   { name: 'RAG (Retrieval-Augmented Generation)', icon: '🔍' },
//   { name: 'FAISS', icon: '📚' },
//   { name: 'LLMs', icon: '🤖' },
//   { name: 'Agent State Management', icon: '🧩' }
// ];

export const toolsSkills = [
  { name: 'Git & GitHub', icon: '🌱' },
  { name: 'Postman', icon: '📬' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Cloudinary', icon: '☁️' },
  { name: 'Multer', icon: '📤' },
  { name: 'Appwrite', icon: '🧩' }
];

// 🆕 DRDO / Cybersecurity Skills
export const cyberSecuritySkills = [
  { name: 'WinDbg', icon: '🪟' },
  { name: 'Immunity Debugger', icon: '🧪' },
  { name: 'Metasploit Framework', icon: '💥' },
  { name: 'MSFvenom', icon: '🧬' }, 
  { name: 'Vulnerability Analysis', icon: '🔎' }, ,
  { name: 'Debugging (Low-level)', icon: '🐞' }
];

// Skills categories configuration - single source of truth for rendering
export const skillsCategories = [
  {
    id: 'frontend',
    title: '🎨 Frontend',
    skills: frontendSkills
  },
  {
    id: 'backend',
    title: '⚙️ Backend',
    skills: backendSkills
  },
  {
    id: 'data',
    title: '📊 Data & Analysis',
    skills: dataSkills
  },
    {
    id: 'tools',
    title: '🛠️ Tools & Platforms',
    skills: toolsSkills
  },
  {
    id: 'cybersecurity',
    title: '🔒 Cybersecurity',
    skills: cyberSecuritySkills
  }
];
