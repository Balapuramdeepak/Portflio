export const personalInfo = {
  name: 'Mareddy Thrisha Reddy',
  firstName: 'Thrisha',
  role: 'Full Stack Developer',
  tagline: 'Crafting scalable enterprise solutions with elegant code and intuitive interfaces.',
  email: 'thrisha6261@gmail.com',
  phone: '+91 9704754658',
  location: 'Hyderabad, India',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  bio: `I'm a passionate Full Stack Developer with a strong foundation in both frontend elegance and backend robustness. Specializing in Angular, .NET, and SQL Server, I build enterprise-grade applications that handle real-world complexity — from CRM systems managing 100k+ records to dynamic, component-driven UIs that users love.

With a B.Tech in Computer Science (Cyber Security) and a CGPA of 9.41, I bring both academic rigor and production-level experience. I believe great software is equal parts beautiful design and solid architecture.`,
}

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    items: ['Angular', 'TypeScript', 'ReactJS', 'HTML5', 'CSS3', 'Syncfusion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-600',
    items: ['.NET Framework', 'ASP.NET', 'C#', 'Entity Framework', 'LINQ', 'RESTful APIs'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-600',
    items: ['SQL Server', 'MySQL', 'LINQ Queries', 'Data Modeling', 'Query Optimization'],
  },
  {
    category: 'Programming',
    icon: '💻',
    color: 'from-pink-500 to-rose-600',
    items: ['C#', 'Python', 'C++', 'C', 'TypeScript', 'JavaScript'],
  },
]

export const techIcons = {
  Angular: '🅰️',
  TypeScript: '📘',
  ReactJS: '⚛️',
  '.NET': '🔷',
  'SQL Server': '🗃️',
  'C#': '#️⃣',
  'Entity Framework': '🔗',
  Python: '🐍',
}

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Comitas AG',
    period: 'Jul 2024 — Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: 'from-violet-600 to-blue-600',
    highlights: [
      'Developed real-time enterprise applications using .NET Framework, C#, SQL Server, and Angular',
      'Built and enhanced a large-scale CRM application supporting complex business workflows and customer data management for 100k+ records',
      'Crafted dynamic UI components with Angular — Reactive Forms, custom validators, reusable components, and Syncfusion controls',
      'Designed optimized server-side data processing using LINQ and Entity Framework with filtering, sorting, and pagination',
      'Integrated RESTful APIs between Angular frontend and .NET backend across multiple CRM modules',
      'Improved application performance and maintainability through reusable architecture and modular Angular components',
    ],
    tech: ['Angular', 'TypeScript', '.NET', 'C#', 'SQL Server', 'Entity Framework', 'LINQ'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Enterprise CRM Platform',
    description:
      'A large-scale Customer Relationship Management system built at Comitas AG — supporting complex business workflows, 100k+ records with real-time filtering, sorting, pagination, and multi-module file handling. Source code is proprietary.',
    tech: ['Angular', 'TypeScript', '.NET', 'C#', 'Entity Framework', 'SQL Server'],
    color: 'from-violet-600/20 to-blue-600/20',
    borderColor: 'border-violet-500/30',
    accentColor: 'text-violet-400',
    icon: '🏢',
    category: 'Professional',
    featured: true,
    proprietary: true,
    github: null,
    live: null,
  },
  {
    id: 2,
    title: 'Phish Hunter',
    description:
      'An End-to-End Machine Learning project that classifies phishing and legitimate websites. Trained on content-based HTML tag features using Support Vector Machine and Random Forest models — deployed live via Streamlit.',
    tech: ['Python', 'BeautifulSoup', 'Streamlit', 'Machine Learning', 'SVM', 'Random Forest'],
    color: 'from-blue-600/20 to-cyan-600/20',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    icon: '🎣',
    category: 'ML / Security',
    featured: true,
    proprietary: false,
    github: 'https://github.com/thrishamareddy/Phish-hunter',
    live: 'https://phish-hunter.streamlit.app/',
  },
  {
    id: 3,
    title: 'ThreeStep Verification',
    description:
      'A multi-layered 3-step user authentication system built with PHP & MySQL — combining password login, picture-based verification, and security questions to provide enhanced account security.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-emerald-600/20 to-teal-600/20',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    icon: '🔐',
    category: 'Security',
    featured: false,
    proprietary: false,
    github: 'https://github.com/thrishamareddy/Threestep',
    live: null,
  },
]

export const achievements = [
  {
    title: 'Academic Topper Award',
    subtitle: 'CMR College of Engineering & Technology',
    description: 'Ranked in top 10% among all 3rd year students. Received the Academic Topper Award three consecutive times.',
    icon: '🏆',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
    accent: 'text-yellow-400',
    stat: '3×',
    statLabel: 'Award recipient',
  },
  {
    title: 'Hackathon — Top 5',
    subtitle: 'IIITDM, Kanchipuram',
    description: 'Our team secured a top 5 position among 70+ competing teams in the national-level hackathon organized by IIITDM.',
    icon: '⚡',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
    stat: 'Top 5',
    statLabel: 'of 70 teams',
  },
  {
    title: 'CodeChef 3★ Rated',
    subtitle: 'Competitive Programming',
    description: 'Achieved 3-star rating on CodeChef with a highest contest rating of 1600+, demonstrating strong algorithmic problem-solving skills.',
    icon: '⭐',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    stat: '1600+',
    statLabel: 'Peak rating',
  },
  {
    title: 'DevJam 2.0 — Top 5',
    subtitle: 'CMRCET, Hyderabad',
    description: 'Secured top 5 position among 25 teams in DevJam 2.0 Hackathon organized by CMRCET, Hyderabad.',
    icon: '🚀',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    accent: 'text-emerald-400',
    stat: 'Top 5',
    statLabel: 'of 25 teams',
  },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science (Cyber Security)',
    institution: 'CMR College of Engineering & Technology',
    period: 'Nov 2020 — May 2024',
    location: 'Hyderabad',
    score: 'CGPA: 9.41',
    scoreLabel: 'Distinction',
    color: 'from-violet-500 to-blue-500',
  },
  {
    degree: 'Intermediate — MPC (Maths, Physics, Chemistry)',
    institution: 'Narayana Junior College',
    period: 'Jun 2018 — May 2020',
    location: 'Hyderabad',
    score: '96.8%',
    scoreLabel: 'Distinction',
    color: 'from-blue-500 to-cyan-500',
  },
]

export const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '4+', label: 'Projects Built' },
  { value: '100k+', label: 'Records Handled' },
  { value: '9.41', label: 'CGPA' },
]
