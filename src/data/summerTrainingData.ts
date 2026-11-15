export interface SummerTrack {
  id: string;
  shortName: string;
  title: string;
  badge: string;
  idealFor: string;
  stack: string[];
  minorProjects: string[];
  majorProject: {
    name: string;
    desc: string;
    deliverables: string[];
  };
  dayPlan: {
    days: string;
    phase: string;
    details: string;
  }[];
}

export interface DayRoadmapPhase {
  days: string;
  step: string;
  title: string;
  summary: string;
  outcomes: string[];
}

export const SUMMER_TRACKS: SummerTrack[] = [
  {
    id: 'mern-ai',
    shortName: 'MERN + GenAI',
    title: 'Full Stack Web Engineering (MERN) + Generative AI',
    badge: 'MOST POPULAR TRACK',
    idealFor: 'B.Tech (CS/IT), BCA, MCA & Diploma students aiming for full-stack software & product roles',
    stack: [
      'HTML5 & Tailwind CSS',
      'JavaScript ES6+ & TypeScript',
      'React 19 + Hooks',
      'Node.js & Express',
      'MongoDB + PostgreSQL',
      'Gemini AI SDK & REST APIs',
      'Git, GitHub & Cloud Deploy'
    ],
    minorProjects: [
      'Minor Project 1: AI Resume & Portfolio Builder with live PDF export',
      'Minor Project 2: Real-Time Expense & Task Analytics Dashboard with JWT Auth'
    ],
    majorProject: {
      name: 'Multi-Tenant SaaS & AI Productivity Suite (Live Hosted)',
      desc: 'Production-deployed full-stack application with role-based access, database schemas, Gemini AI assistant workflows, and automated cloud hosting.',
      deliverables: [
        'Live custom-hosted URL (1-Year Free Hosting)',
        'Complete GitHub repository with clean commit history',
        'Hardbound AKTU/BTEUP Project Report + ER/DFD Diagrams'
      ]
    },
    dayPlan: [
      {
        days: 'Days 01 – 10',
        phase: 'Web Core, Git & Responsive UI',
        details: 'Semantic HTML5, Tailwind CSS layouts, JavaScript DOM, async/await, and Git/GitHub team workflows.'
      },
      {
        days: 'Days 11 – 22',
        phase: 'React Architecture & State',
        details: 'Component composition, React hooks, routing, protected views, API integration, and Minor Project 1.'
      },
      {
        days: 'Days 23 – 34',
        phase: 'Node.js, Databases & GenAI',
        details: 'Express REST APIs, MongoDB/SQL schemas, JWT authentication, Gemini AI streaming, and Minor Project 2.'
      },
      {
        days: 'Days 35 – 45',
        phase: 'Major Live Project, Hosting & Viva',
        details: 'End-to-end Capstone deployment, 1-year live URL setup, hardbound project file, and mock technical viva.'
      }
    ]
  },
  {
    id: 'python-django-ai',
    shortName: 'Python + AI/ML',
    title: 'Python Full Stack (Django / FastAPI) & Applied AI/ML',
    badge: 'AI & BACKEND TRACK',
    idealFor: 'B.Tech (AI/ML, DS, CS/IT), BCA, MCA & B.Sc CS learners targeting Python & AI roles',
    stack: [
      'Python 3.12 & OOP',
      'Django MVT & FastAPI',
      'PostgreSQL & SQLite',
      'NumPy, Pandas & Scikit-Learn',
      'RAG & Gemini LLM Pipelines',
      'REST APIs & Auth',
      'Render / Cloud Deployment'
    ],
    minorProjects: [
      'Minor Project 1: Automated Student & Attendance Portal with Django ORM',
      'Minor Project 2: Smart Document Q&A & Predictive ML Analytics App'
    ],
    majorProject: {
      name: 'AI-Powered Smart Campus / Healthcare Portal (Live Hosted)',
      desc: 'Full Python backend + Django/React interface integrated with predictive ML scoring and AI document insights hosted live on cloud.',
      deliverables: [
        'Live production API & web dashboard URL',
        'Trained ML notebook + FastAPI/Django backend repo',
        'University-format Project Report, Synopsis & Viva PPT'
      ]
    },
    dayPlan: [
      {
        days: 'Days 01 – 10',
        phase: 'Python Core, OOP & Git',
        details: 'Python data structures, file handling, OOP modules, virtual environments, and GitHub workflows.'
      },
      {
        days: 'Days 11 – 22',
        phase: 'Django MVT & Database Design',
        details: 'Models, ORM queries, authentication, admin customization, REST APIs, and Minor Project 1.'
      },
      {
        days: 'Days 23 – 34',
        phase: 'Data Science & Applied AI',
        details: 'Pandas EDA, Scikit-Learn regression/classification, Gemini AI integration, and Minor Project 2.'
      },
      {
        days: 'Days 35 – 45',
        phase: 'Major Deployment, Report & Viva',
        details: 'Cloud deployment, performance testing, hardbound college project file preparation, and interview drills.'
      }
    ]
  },
  {
    id: 'java-springboot',
    shortName: 'Java + Spring Boot',
    title: 'Java Full Stack (Spring Boot 3) & Placement DSA',
    badge: 'ENTERPRISE & MNC TRACK',
    idealFor: 'B.Tech & MCA students preparing for TCS, Infosys, Wipro, Accenture & product company interviews',
    stack: [
      'Core & Advanced Java',
      'Collections & DSA Drills',
      'Spring Boot 3 & Spring Security',
      'Spring Data JPA & Hibernate',
      'MySQL / PostgreSQL',
      'React / Thymeleaf Frontend',
      'Postman & Cloud Deploy'
    ],
    minorProjects: [
      'Minor Project 1: Role-Based Library & Inventory REST API Engine',
      'Minor Project 2: Banking Ledger & Transaction Audit Portal with Spring Security'
    ],
    majorProject: {
      name: 'Enterprise E-Commerce & Order Microservice Platform',
      desc: 'Scalable Java Spring Boot backend with JPA relational mapping, JWT security, invoice generation, and live deployed storefront.',
      deliverables: [
        'Deployed Spring Boot backend + MySQL database',
        '100+ curated Java DSA interview problems solved',
        'Complete Software Engineering Project File & Diagrams'
      ]
    },
    dayPlan: [
      {
        days: 'Days 01 – 10',
        phase: 'Java OOP & Collections Core',
        details: 'Memory model, OOP pillars, exception handling, Streams, Collections framework, and DSA foundations.'
      },
      {
        days: 'Days 11 – 22',
        phase: 'Spring Boot, JPA & MySQL',
        details: 'Dependency injection, REST controllers, Hibernate entity relationships, SQL joins, and Minor Project 1.'
      },
      {
        days: 'Days 23 – 34',
        phase: 'Spring Security & DSA Sprints',
        details: 'JWT auth, validation, Arrays/Strings/Trees interview patterns, and Minor Project 2.'
      },
      {
        days: 'Days 35 – 45',
        phase: 'Capstone Hosting, Report & Mock HR',
        details: 'Live production hosting, Swagger API docs, hardbound report, and MNC technical mock interviews.'
      }
    ]
  },
  {
    id: 'flutter-mobile',
    shortName: 'Flutter Apps',
    title: 'Cross-Platform Mobile App Development (Flutter & Firebase)',
    badge: 'MOBILE APP TRACK',
    idealFor: 'Diploma, BCA & B.Tech students building real Android/iOS apps with live APK & backend sync',
    stack: [
      'Dart Programming & OOP',
      'Flutter Responsive UI Widgets',
      'Provider / Riverpod State',
      'REST API Integration',
      'Firebase Auth & Firestore',
      'Push Notifications & Maps',
      'Release APK & Hosting'
    ],
    minorProjects: [
      'Minor Project 1: Smart Habit & Study Planner App with Local Storage',
      'Minor Project 2: Live News & Campus Noticeboard App using REST APIs'
    ],
    majorProject: {
      name: 'On-Demand Service & Booking Mobile App (Android APK + Admin Web)',
      desc: 'End-to-end mobile application with real-time booking, Firebase Auth, cloud database sync, and downloadable signed APK.',
      deliverables: [
        'Signed installable Android APK + Web Admin Panel',
        'Complete Flutter GitHub repository',
        'University-ready App Architecture Report & Viva Deck'
      ]
    },
    dayPlan: [
      {
        days: 'Days 01 – 10',
        phase: 'Dart Core & Widget Architecture',
        details: 'Dart null safety, async futures, responsive layouts, custom themes, and navigation.'
      },
      {
        days: 'Days 11 – 22',
        phase: 'State Management & APIs',
        details: 'Clean state management, HTTP/JSON parsing, error states, and Minor Project 1 & 2.'
      },
      {
        days: 'Days 23 – 34',
        phase: 'Firebase, Auth & Real-Time Sync',
        details: 'Authentication, Firestore collections, media uploads, and real-time notifications.'
      },
      {
        days: 'Days 35 – 45',
        phase: 'Release APK, Report & Viva',
        details: 'Signed APK generation, live demo recording, college report binding, and viva defense.'
      }
    ]
  },
  {
    id: 'data-analytics',
    shortName: 'Data & Power BI',
    title: 'Data Analytics, SQL, Python & Power BI Dashboards',
    badge: 'ANALYTICS TRACK',
    idealFor: 'B.Tech (CS/IT/DS), BCA, MCA & B.Sc students aiming for Data Analyst & BI roles',
    stack: [
      'Advanced Excel & Power Query',
      'PostgreSQL & Window CTEs',
      'Python, Pandas & Matplotlib',
      'Power BI Desktop & DAX',
      'Row-Level Security (RLS)',
      'Statistical KPI Modeling',
      'Live Interactive BI Reports'
    ],
    minorProjects: [
      'Minor Project 1: E-Commerce Sales & Cohort Retention SQL Audit',
      'Minor Project 2: Automated HR Attrition & Hiring Funnel Workbook'
    ],
    majorProject: {
      name: 'Executive Multi-Region Retail & Supply Chain BI Suite',
      desc: 'Cleaned multi-table warehouse in PostgreSQL connected to an interactive Power BI dashboard with custom DAX measures and forecasting.',
      deliverables: [
        'Published interactive Power BI report link + SQL scripts',
        'Python EDA notebooks on GitHub',
        'Formal Analytics Project Report & Case Study Deck'
      ]
    },
    dayPlan: [
      {
        days: 'Days 01 – 10',
        phase: 'Excel Mastery & SQL Core',
        details: 'Data cleaning, Power Query, XLOOKUP, PostgreSQL joins, aggregations, and subqueries.'
      },
      {
        days: 'Days 11 – 22',
        phase: 'Window CTEs & Python EDA',
        details: 'Ranking/window functions, Pandas data frames, visual storytelling, and Minor Project 1.'
      },
      {
        days: 'Days 23 – 34',
        phase: 'Power BI, Star Schema & DAX',
        details: 'Data modeling, CALCULATE/time-intelligence DAX, KPI cards, and Minor Project 2.'
      },
      {
        days: 'Days 35 – 45',
        phase: 'Major BI Capstone, Report & Viva',
        details: 'Executive dashboard publishing, GitHub portfolio setup, college report, and analyst mock interviews.'
      }
    ]
  }
];

export const DAY_BY_DAY_ROADMAP: DayRoadmapPhase[] = [
  {
    days: 'Days 01 – 08',
    step: 'PHASE 01',
    title: 'Engineering Foundation, Logic & Git Workflow',
    summary: 'Zero confusion from Day 1 — setup your developer machine, core programming logic, HTML/CSS/JS or Python/Java fundamentals, and daily GitHub commits.',
    outcomes: ['VS Code & Git workflow setup', 'Core syntax & problem-solving drills', 'First responsive UI deployed live']
  },
  {
    days: 'Days 09 – 20',
    step: 'PHASE 02',
    title: 'Core Track Deep-Dive & Database Modeling',
    summary: 'Move into your chosen specialization (MERN+AI, Python/Django, Java Spring Boot, Flutter, or Data Analytics) with structured daily lab tasks.',
    outcomes: ['Framework & component architecture', 'Relational / NoSQL schema design', 'Authentication & protected routes']
  },
  {
    days: 'Days 21 – 32',
    step: 'PHASE 03',
    title: '2 Minor Live Projects + Generative AI APIs',
    summary: 'Build two portfolio-worthy minor projects with real APIs and Gemini AI integration, reviewed line-by-line by TheCodeSpark mentors.',
    outcomes: ['2 live minor projects on GitHub', 'AI feature & prompt integration', '1-on-1 mentor code review']
  },
  {
    days: 'Days 33 – 40',
    step: 'PHASE 04',
    title: 'Major Industrial Capstone & 1-Year Free Hosting',
    summary: 'Architect, build, test, and deploy your college-approved Major Live Project onto production cloud servers with a real shareable URL.',
    outcomes: ['1 production Major Live Project', '1-Year Free Live Hosting URL', 'Custom domain / SSL & mobile QA']
  },
  {
    days: 'Days 41 – 45',
    step: 'PHASE 05',
    title: 'Hardbound College Report, Viva Defense & Placements',
    summary: 'Receive your university-format hardbound Project Report, Synopsis, Dual QR-Verified Certificates, ATS resume review, and mock interviews.',
    outcomes: ['Hardbound Project Report + Synopsis', 'Dual QR-Verified Certificates', 'Mock Viva + Placement Interview Prep']
  }
];

export const ELIGIBILITY_MATRIX = [
  {
    degree: 'B.Tech / B.E.',
    branches: 'CS, IT, AI & ML, Data Science, IoT, Cybersecurity & ECE',
    years: '2nd, 3rd & Final Year (4th/6th/8th Sem)',
    compliance: 'AKTU, MMMUT, HBTU & All Universities NOC/Training Compliant'
  },
  {
    degree: 'Diploma / Polytechnic',
    branches: 'Computer Science (CS), Information Technology (IT) & Electronics',
    years: '2nd & Final Year Summer Industrial Training',
    compliance: 'BTEUP 45-Day Mandatory Industrial Training Format'
  },
  {
    degree: 'BCA & MCA',
    branches: 'Computer Applications & Software Systems',
    years: 'All Semesters + Final Year Minor/Major Project Submission',
    compliance: 'Lucknow University, IGNOU & Private Universities Approved'
  },
  {
    degree: 'B.Sc (IT / CS) & Freshers',
    branches: 'IT, Computer Science & Aspiring Software Engineers',
    years: 'Undergraduates & Recent Graduates',
    compliance: '100% Practical Track + Verified Experience Credential'
  }
];

export const DELIVERABLES_KIT = [
  {
    tag: 'CREDENTIAL 01',
    title: 'Dual QR-Verified Certificates',
    desc: 'Receive both an Official 45-Day Industrial Summer Training Certificate and a Live Project Completion Certificate with unique QR verification IDs accepted by AKTU, BTEUP, and all Indian universities.'
  },
  {
    tag: 'DOCUMENTATION 02',
    title: 'Hardbound College Project Report + Synopsis',
    desc: 'Ready-for-submission University-format Project Report (ER Diagrams, DFDs, Use-Case, Testing Screenshots & Source Code) + Synopsis + Viva Presentation Deck.'
  },
  {
    tag: 'DEPLOYMENT 03',
    title: '1-Year Free Cloud Project Hosting',
    desc: 'Every trainee gets live hosted links for their Major & Minor projects for 1 full year — show real working apps in college vivas and recruiter interviews instead of localhost.'
  },
  {
    tag: 'PORTFOLIO 04',
    title: 'GitHub Portfolio & ATS Resume Upgrade',
    desc: 'Structured GitHub profile with pinned project READMEs, live demo clips, LinkedIn headline optimization, and an ATS-friendly tech resume reviewed by engineers.'
  },
  {
    tag: 'LEARNING PORTAL 05',
    title: '1-Year LMS + 24/7 Discord Doubt Desk',
    desc: 'Full HD lecture recordings, daily class code, interview question banks, and real-time mentor doubt resolution on Discord even after your 45 days conclude.'
  },
  {
    tag: 'CAREER FAST-TRACK 06',
    title: 'Apprenticeship Interviews & Merit Awards',
    desc: 'Top Summer Training performers qualify directly for TheCodeSpark Paid Apprenticeship / Internship interviews, merit scholarships, and official welcome goodies.'
  }
];

export const TRAINING_MODES = [
  {
    id: 'offline',
    badge: 'OFFLINE IN-CAMPUS • LUCKNOW',
    title: 'TheCodeSpark Tech Campus (Gomti Nagar, Lucknow)',
    subtitle: 'Daily face-to-face coding labs with founder mentorship, high-speed internet, and collaborative hackathon sprints.',
    points: [
      'Air-conditioned smart coding labs with dual-screen guidance',
      'Small 1:15 mentor-to-student lab ratio (never crowded 150-seat halls)',
      'Verified PG / Hostel assistance near campus for outstation students',
      'Daily attendance logs & official college training letter provided immediately'
    ]
  },
  {
    id: 'online',
    badge: 'LIVE HYBRID • PAN-INDIA ONLINE',
    title: 'Live Interactive Online Cohort (Zoom + Discord Lab)',
    subtitle: 'Join from your hometown or college anywhere in India with real-time screen-share debugging and full recordings.',
    points: [
      'Live daily coding sessions — zero pre-recorded filler videos',
      'Instant screen-share doubt resolution on Discord coding channels',
      '1-Year HD cloud recording access if college exams clash with a session',
      'Digital + Courier-ready Project Report PDF, Synopsis & Dual QR Certificates'
    ]
  }
];

export const BATCH_TIMINGS = [
  { slot: 'Morning Lab', time: '08:30 AM – 11:00 AM', mode: 'Offline & Live Online' },
  { slot: 'Mid-Day Lab', time: '11:30 AM – 02:00 PM', mode: 'Offline Campus (Lucknow)' },
  { slot: 'Afternoon Lab', time: '02:30 PM – 05:00 PM', mode: 'Offline & Live Online' },
  { slot: 'Evening Cohort', time: '06:30 PM – 09:00 PM', mode: 'Live Online Interactive' }
];

export const SUMMER_FAQS = [
  {
    category: 'Eligibility & NOC',
    q: 'Will TheCodeSpark provide a Training Letter / NOC for my college before joining?',
    a: 'Yes! Immediately after registration, you receive an official signed Confirmation & Joining Letter on TheCodeSpark Technologies Private Limited letterhead addressed to your Head of Department / Training & Placement Cell (accepted by AKTU, BTEUP, Lucknow University & all AICTE colleges).'
  },
  {
    category: 'Eligibility & NOC',
    q: 'I am from B.Tech (CS/IT/AI/ECE), Diploma, or BCA/MCA with zero coding confidence. Can I join?',
    a: 'Absolutely. Days 1 to 8 start from core programming fundamentals and clean Git workflows before moving into your specialization track, so even complete beginners build real deployed projects by Day 45.'
  },
  {
    category: 'Tracks & Projects',
    q: 'How is TheCodeSpark 45-Day Summer Training better than other institutes in Lucknow?',
    a: 'Instead of outdated slides or 150-student crowded halls, you code daily in a 1:15 mentor ratio, integrate modern Generative AI workflows, deploy 2 Minor + 1 Major Live Project with 1-Year Free Cloud Hosting, and graduate with an authentic GitHub portfolio + ATS resume.'
  },
  {
    category: 'Tracks & Projects',
    q: 'Can I choose between MERN + GenAI, Python/Django, Java Spring Boot, Flutter, or Data Analytics?',
    a: 'Yes! During registration or Week 1 orientation, you pick your primary 45-Day track. All tracks include core engineering habits, live project deployment, hardbound college report, and dual certification.'
  },
  {
    category: 'Report & Certificates',
    q: 'Are the Hardbound Project Report, Synopsis, and Certificates included in the Rs.3,999 fee?',
    a: 'Yes. Both QR-Verified Certificates (Industrial Training + Live Project), the university-format Project Report & Synopsis, 1-Year Free Hosting, and 1-Year LMS recording access are included — zero hidden charges for certificates or project files.'
  },
  {
    category: 'Campus & Fees',
    q: 'Do you help with PG/Hostel in Lucknow or group discounts for college friends?',
    a: 'Yes! For outstation students coming to our Gomti Nagar, Lucknow campus, our support desk helps arrange safe verified PGs/hostels nearby. Plus, students enrolling in groups of 3 or more from the same college get an additional Group Scholarship discount.'
  }
];
