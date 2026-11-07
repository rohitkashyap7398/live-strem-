import { CourseProduct, IGNITE2_PRODUCTS } from './ignite2ProductsData';
import { DsaJavaCohort, IGNITE2_DSA_JAVA } from './ignite2DsaJavaData';
import { DataAnalyticsCapstone, IGNITE3_MODULES, IGNITE3_CAPSTONES } from './ignite3DataAnalyticsData';

export interface ModuleItem {
  id: number;
  name: string;
  title: string;
  desc: string;
  topics: string[];
}

export interface Course {
  id: string;
  codeName: string; // e.g. "IGNITE 1.0"
  title: string;
  subtitle: string;
  kicker?: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  duration: string;
  hours: string;
  modulesCount: string;
  questionsCount: string;
  tags: string[];
  weeksBadge?: string;
  enrolledCount?: string;
  catalogGraphic?: 'fullstack' | 'datascience' | 'mobile' | 'devops' | 'uiux' | 'cybersecurity';
  isLive?: boolean;
  isPopular?: boolean;
  isFree?: boolean;
  isComingSoon?: boolean;
  comingSoonText?: string;
  videoUrl?: string;
  instructorImg?: string;
  instructorName?: string;
  prerequisites: {
    level: string;
    duration: string;
    schedule?: string;
    language?: string;
    classType?: string;
    highlights: string[];
  };
  modules: ModuleItem[];
  productsBreakdown?: CourseProduct[];
  dsaJavaCohort?: DsaJavaCohort;
  capstonesBreakdown?: DataAnalyticsCapstone[];
  comparisonPoints?: {
    positive: string[];
    negative: string[];
  };
}

export const COURSES: Course[] = [
  {
    id: "ignite-1",
    codeName: "IGNITE 1.0",
    title: "2.0 Job Ready AI Powered Cohort",
    subtitle: "Become a job-ready software engineer with our Cohort 2.0. An intensive program covering MERN stack development, DSA, and aptitude training.",
    kicker: "CODE. CREATE. CONQUER.",
    price: 5999,
    originalPrice: 11999,
    discountBadge: "50% OFF",
    duration: "260+ Hours",
    hours: "260+ Hours",
    modulesCount: "180+ Lectures",
    questionsCount: "1k+ Questions",
    tags: ["Job Ready", "MERN Stack", "DSA With JS", "Placement Focused", "AI Powered"],
    weeksBadge: "12 Weeks",
    enrolledCount: "100+ Enrolled",
    catalogGraphic: "fullstack",
    isLive: true,
    isPopular: true,
    isComingSoon: false,
    comingSoonText: "Admissions Open • Batch Starting Soon",
    videoUrl: "/assets/aistudio/20261101-0901-20.9364903_f39b55c3.mp4",
    instructorImg: "/Rohit.png",
    instructorName: "Mr. Rohit Kashyap (Founder & CEO)",
    prerequisites: {
      level: "Intermediate",
      duration: "20 Weeks",
      schedule: "Mon-Sat (8:30 PM)",
      language: "Hinglish",
      classType: "Live Classes",
      highlights: [
        "Access to Industry Ready Curriculum",
        "Industry Level Intense Training",
        "Access to Discord Community",
        "1 on 1 Mentor Session"
      ]
    },
    comparisonPoints: {
      positive: [
        "Daily Live, Interactive Sessions By Industry Experts",
        "Complete Placement-Focused Ecosystem (Full Stack, DSA, GenAI, Aptitude & Reasoning)",
        "Learn Modern Industry Tools",
        "Instant Doubt Resolution Via Discord",
        "AI-Powered Tools And Real-World Projects",
        "Industry-Relevant Projects And Assignments",
        "Active Peer-to-Peer And Mentor-Led Learning Community"
      ],
      negative: [
        "Mostly Pre-Recorded Or Outdated Content",
        "Limited To A Single Domain With No Holistic Preparation",
        "Slow Or No Adoption Of Modern Tools",
        "Little To No Doubt-Solving Or Mentorship Support",
        "No Real Exposure To AI-Driven Workflows",
        "Projects Are Minimal, Guided, Or Purely Academic",
        "No Structured Learning Or Peer Community"
      ]
    },
    modules: [
      {
        id: 1,
        name: "EPISODE 1 - CODE",
        title: "Foundations, Internet Architecture & Developer Environment",
        desc: "How the internet works (Web 1.0 to 3.0), computer communication, client-server model, TCP 3-way handshake vs UDP, HTTP/HTTPS with SSL/TLS encryption, and complete VS Code environment setup.",
        topics: [
          "How the Internet Works: History of Web (Web 1.0 to Web 3.0)",
          "How computers communicate with each other & send data globally",
          "Domain Names, IP & MAC Addresses, Routing, ISP and DNS mechanics",
          "Client-Server Architecture: Client (browser) vs Server hosting websites",
          "HTTP Request & Response Cycle: What happens when you visit a website",
          "Frontend vs Backend & Static Websites vs Dynamic Websites",
          "Web Hosting principles and cloud server communication",
          "Internet Protocols: TCP Protocol & 3-Way Handshake connection",
          "UDP Protocol: Fast connectionless communication vs TCP differences",
          "Understanding HTTP & HTTPS: Status codes (1xx, 2xx, 3xx, 4xx, 5xx)",
          "How HTTPS provides security & SSL/TLS Encryption in depth",
          "Proxies and Reverse Proxies & How VPNs access restricted content",
          "Preparing Your Machine: Installing & setting up VS Code, extensions & browser",
          "File and folder structures & Serving first webpage 'Namaste Duniya'"
        ]
      },
      {
        id: 2,
        name: "EPISODE 2 - STAGE",
        title: "HTML5, CSS3 Layouts, SASS, Responsive Design & Modern JavaScript Core",
        desc: "Semantic HTML5, forms, media tags, CSS box model, Flexbox & Grid layouts, 3D transforms, SASS/SCSS, and complete JavaScript from ES6+ syntax to DOM, events, OOP, and asynchronous programming.",
        topics: [
          "Starting with HTML: Doctype, html, head, title, body, text tags (h1-h6, p, br, a, span, code, pre)",
          "Lists (ol, ul, li), nested elements, media tags (img, video, audio) & HTML attributes (href, target, alt)",
          "Semantic HTML: article, section, main, aside, form, footer, header, details, figure & block vs inline",
          "Text formatting (b, strong, i, sub, sup, mark) & HTML Tables (table, tr, td, th)",
          "HTML Forms & Inputs: form, input, textarea, select, button, label & input types (text, tel, date, radio, checkbox)",
          "Form Attributes: method, action, novalidate, enctype, name, required & placeholder validation",
          "Basics of CSS: Inline, Internal, External, Selectors precedence (class, id, element) & Typography",
          "CSS Styling & Units: Colors (hex, rgb), Units (px, rem, em, %, vw, vh, min, max, clamp)",
          "CSS Box Model: margin, padding, border, box-sizing, background gradients & box shadows",
          "CSS Layout Mastery: Flexbox (direction, wrap, grow, shrink, justify-content, align-items, flex-basis)",
          "CSS Grid layouts, positioning (relative, absolute, fixed, sticky), stacking context & overflow handling",
          "CSS Animations & 3D: Pseudo-classes (:hover, :focus, ::after), Transitions, 2D/3D Transforms & @keyframes",
          "Responsive CSS: Mobile-First Strategy, Viewport meta, Media Queries (@media), Fluid clamp() & Typography",
          "Working with SASS (SCSS): Variables, Nesting, Mixins, Partials, Functions, Operators & Directives",
          "Basics of JavaScript: Linking scripts, Console logging, Variables (var, let, const), Data Types & Hoisting",
          "Loops & Conditionals: if-else, Ternary, switch, for, while, do-while, forEach, for-in, for-of, break & continue",
          "Functions in JavaScript: Parameters (rest, default, destructured), Arguments (spread), Closures & IIFE",
          "Arrays & Objects: map, filter, reduce, slice, splice, sort, Object.entries, freeze, seal & this keyword",
          "DOM Manipulation: querySelector, Tree Traversal (parentNode, childNodes), innerHTML, classList & createElement",
          "Event Handling: addEventListener, Event Bubbling, event.target, Form validation & preventDefault()",
          "Browser APIs: Window, Navigator, History, LocalStorage, SessionStorage, Cookies & Fetch API",
          "Object-Oriented JS: Classes, Objects, Constructors, Prototypes, this, call, apply, bind & Inheritance",
          "Asynchronous JavaScript: Callbacks, Callback Hell, Promises (resolve/reject), async/await & Timers",
          "Error Handling: Error object, try-catch-finally, custom errors & Async error propagation",
          "Advanced JavaScript: Throttling & Debouncing techniques, JSON parsing (JSON.parse, JSON.stringify)",
          "Git & GitHub: Commits, branches, merging, conflicts, PRs, forking & large team workflows"
        ]
      },
      {
        id: 3,
        name: "EPISODE 3 - COMMIT",
        title: "React, State Architecture, Redux Toolkit, Animations, SEO & Three.js",
        desc: "React 19 SPAs, Virtual DOM reconciliation, components, props, hooks, Redux Toolkit, React Router, dynamic forms, performance optimization, SEO best practices, and 3D graphics with Three.js.",
        topics: [
          "Introduction to React: SPAs vs MPAs, Real DOM vs Virtual DOM, Vite setup, Terminal & JSX Fragments",
          "Styling in React: Component-based styling, Inline styles, CSS Modules, Styled Components & Dynamic Props",
          "Animations in React: Fluid UI motion and transitions using Framer Motion & GSAP",
          "React Core: Functional components, State management (useState), Props passing & Conditional rendering",
          "Component Patterns: Higher Order Components (HOCs), Reusable components, Lists & Unique keys",
          "React Lifecycle & Hooks: useEffect synchronization, dependency arrays, useContext, useRef, useCallback & useMemo",
          "Custom Hooks & State Sharing: Extracting reusable logic & Context API state architecture",
          "Navigation with React Router: react-router-dom, Dynamic routing, URL params, Nested routes & 404 pages",
          "State Management with Redux: Principles of Redux, Pure reducers, Store, Actions, Middleware & Thunks",
          "Connecting Redux to React: react-redux, Redux Toolkit (RTK) & modern store alternatives",
          "Form Controls in React: Building dynamic forms, Two-way binding, Form validation & API submission",
          "Performance Optimization: React.memo, useMemo, useCallback, Code splitting with React.lazy & Lighthouse",
          "Deploying React Projects: Preparing for production, Environment variables, Vercel, Netlify & GitHub Pages",
          "Real-World Capstone Project: End-to-end full stack React application with API integration & responsive design",
          "Basic SEO Principles: On-page SEO, Meta tags, OpenGraph social cards, Image SEO & XML sitemaps",
          "Three.js & React Three Fiber: 3D Scenes, Camera controls, Orbit controls, Lights, Geometries & Mesh animation"
        ]
      },
      {
        id: 4,
        name: "EPISODE 4 - PUSH",
        title: "Node.js, Express, MongoDB, Real-Time WebSockets, Redis & Testing",
        desc: "Server-side architecture, MVC pattern, REST APIs, Multer & ImageKit file processing, MongoDB aggregations, JWT & RBAC security, Socket.io real-time communication, Redis caching, and Jest testing.",
        topics: [
          "Starting with Node.js: LTS installation, Postman, Editor setup, NPM basics & package.json management",
          "Creating HTTP Server: Request-response cycle, HTTP routing, Status codes (2xx, 4xx, 5xx) & Nodemon",
          "Backend Architecture: MVC (Model-View-Controller) vs Service-Oriented Architecture (SOA)",
          "Web Framework Express.js: Express server setup, Query & URL parameters, Methods (GET, POST, PUT, DELETE)",
          "Template Engine EJS: EJS syntax (<%= %>), loops, conditionals, locals & serving static assets",
          "Middleware in Express: Application-level, Router-level, Error-handling, Helmet security & CORS configuration",
          "File Handling: Multer file uploads (Memory vs Disk storage) & Cloudinary / ImageKit digital asset APIs",
          "Database Basics: Relational vs Non-relational, MongoDB Compass, Collections, Documents & Mongoose",
          "Database Relationships: One-to-One, One-to-Many, Many-to-Many & Mongoose populate() joins",
          "REST API Development: API versioning (/v1/), Postman tests, Input sanitization & Rate limiting",
          "Database Optimization: Single-field, Compound, Text & Wildcard Indexes, explain() query analysis",
          "MongoDB Aggregation Pipelines: $match, $group, $project, $sort, $lookup, $facet & Aggregation operators",
          "Logging Backend: Winston, Pino, Morgan logging modes (dev, short, tiny) & production error tracing",
          "Production Architecture: PM2 process management, ESLint, Prettier, CORS & async-handler wrappers",
          "Authentication & Authorization: Cookies, Sessions, JWT (jsonwebtoken), bcrypt password hashing & RBAC",
          "Passport.js Strategies: Local strategy & Google OAuth 2.0 integration with express-sessions",
          "Real-Time WebSockets: socket.io Handshake, Persistent duplex connections, Rooms & socket middleware",
          "High-Speed Caching: Local & Redis in-memory caching, TTL expiration & Redis Pub/Sub",
          "Error Handling: Centralized error handling middleware, try-catch blocks & custom ApiError classes",
          "Testing Tools: Unit testing with Jest, API testing with Postman & Cross-browser verification"
        ]
      },
      {
        id: 5,
        name: "EPISODE 5 - MERGE",
        title: "Generative AI, LangChain, MCP Server, PWA, DevOps, Next.js & AWS",
        desc: "Building AI apps with LangChain, Agentic workflows, MCP servers, Progressive Web Apps with offline service workers, Docker containerization, Microservices architecture, Next.js full-stack, and AWS EC2 deployment.",
        topics: [
          "Generative AI & Applications: LLM concepts, AI authentication, Social media automation & Content generators",
          "LangChain Integration: Building real-world AI Resume Reviewer & Virtual Interview Assistant with Gemini/ChatGPT",
          "Agentic AI & Multi-Agent Systems: Autonomous reasoning loops, tool invocation & Model Context Protocol (MCP) servers",
          "Progressive Web Apps (PWA): Service Workers lifecycle (Install, Activate, Fetch), manifest.json & offline caching",
          "DevOps Fundamentals: CI/CD automation pipelines, Infrastructure as Code & Docker containerization basics",
          "Building Microservices: Monolith vs Microservices, API Gateway pattern, Inter-service communication & RabbitMQ",
          "Docker & Kubernetes in Microservices: Containerized services, proxying requests & rate limiting",
          "Next.js Full-Stack: File-based routing, Dynamic routes ([id]), SSR, SSG, Static assets & Next.js deployment",
          "Web3 Basics (Introductory): Blockchain fundamentals, Smart Contracts, DApps & Cryptocurrencies overview",
          "Production Cloud Deployment: AWS EC2 machine launching, SSH configuration, NGINX reverse proxy & Custom domain SSL"
        ]
      },
      {
        id: 6,
        name: "EPISODE 6 - DSA WITH JAVASCRIPT",
        title: "Data Structures & Algorithms in JavaScript (Zero to Advanced)",
        desc: "Time & space complexity (Big-O), arrays, strings, two-pointers, sorting, binary search, hashing, linked lists, queues, stacks, advanced recursion, backtracking, binary trees, and binary search trees.",
        topics: [
          "Conditional Statements: if, if-else, switch, decision logic & input form validation",
          "Loops & Pattern Programming: Pyramids, Right-angled triangles, Inverted triangles & nested loop optimization",
          "Array Fundamentals: Insertion, Deletion, Updation, Two-Pointer Algorithm, Rotations & Kadane's Algorithm",
          "Object-Oriented Programming (OOP) in JS: Classes, Objects, Constructors, this context & Encapsulation",
          "Strings in JavaScript: String methods (slice, substring, replace, split, join), Palindromes, Prefix & Anagrams",
          "Time & Space Complexity: Big-O Notation (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)) & Optimization tips",
          "Math Problems & Algorithms: pow(), sqrt(), Greatest Common Divisor (GCD/HCF) & Prime checking",
          "Advanced Array Problems: Two pointers, Prefix sums, Sliding window & Multi-dimensional 2D matrices",
          "Sorting Algorithms: Selection Sort, Insertion Sort, Merge Sort, Quick Sort & Cyclic Sort with Big-O analysis",
          "Binary Search Mastery: Sorted arrays, Infinite arrays, Rotated sorted array & 2D Matrix binary search",
          "Hashing in Depth (Set & Map): Working with Set & Map methods, Collision handling & Real-world hash algorithms",
          "Linked Lists: Singly, Doubly & Circular Linked Lists, Node creation, Traversal, Reversal & Fast-Slow pointers",
          "Queues: Array & Linked List implementations, Circular Queues, Enqueue/Dequeue operations & Applications",
          "Stacks: Array & Linked List implementations, Monotonic stacks, Push/Pop/Peek operations & Infix/Postfix logic",
          "Advanced Recursion & Backtracking: N-Queens problem, Sudoku solver, Subset sum & Word search challenges",
          "Binary Trees: Tree traversal (Preorder, Inorder, Postorder, Level-Order), Height, Diameter & LCA",
          "Binary Search Tree (BST): BST properties, Node insertion, Deletion, Searching & BST validation algorithms"
        ]
      },
      {
        id: 7,
        name: "EPISODE 7 - APTITUDE & REASONING",
        title: "Quantitative Aptitude & Placement Problem Solving",
        desc: "Percentages, profit and loss, simple and compound interest, ratios, number systems, HCF/LCM, time & work, pipes & cisterns, speed/trains/boats, probability, permutations, AP/GP, clocks, and calendars.",
        topics: [
          "Percentages: Tips, tricks, shortcuts, basic to advanced questions & placement MCQs",
          "Profit & Loss: Cost price, selling price, marked price, successive discounts & commercial trade calculations",
          "Simple Interest: Master SI formula, principal, rates, time periods & case-based lending scenarios",
          "Compound Interest: Annual, semi-annual & quarterly compounding, investment growth & CI-SI differentials",
          "Ratio & Proportion: Proportional relationships, scaling, sharing & dividing quantities",
          "Number System: Natural, whole, integers, rational, irrational, divisibility rules, factors & multiples",
          "HCF and LCM: Calculation techniques, recurring time patterns, distance & resource allocation scheduling",
          "Averages: Weighted averages, missing numbers, group data & performance analysis",
          "Work & Time: Individual vs group efficiency, alternating schedules & completion rates",
          "Pipes & Cisterns: Work-time analogy, multiple filling pipes, leakage rates & alternate operations",
          "Speed, Distance & Time: Relative speed formulas, average speeds, variable velocities & travel problems",
          "Problems on Trains: Crossing poles, platforms, opposing/same-direction trains & length-speed calculations",
          "Boats & Streams: Upstream vs downstream velocities, effective speeds in flowing water & river crossing math",
          "Permutations & Combinations: Arrangements vs selections, factorials, circular permutations & repetition",
          "Probability: Single & compound event likelihoods, dice, cards, coins & sample space calculations",
          "Progressions: Arithmetic Progression (AP - general term an & sum Sn) and Geometric Progression (GP)",
          "Calendar & Clocks: Odd days, leap years, day-of-week calculation, clock hand angles & overlapping times"
        ]
      },
      {
        id: 8,
        name: "EPISODE 8 - LOGICAL REASONING",
        title: "Placement Logical Reasoning & Deductive Logic",
        desc: "Direction sense, blood relations family trees, syllogisms with Venn diagrams, linear and circular arrangements, and number/letter series recognition.",
        topics: [
          "Direction Sense: Cardinal & ordinal directions (North, South, East, West), turns & final coordinates",
          "Blood Relations: Deciphering family trees, generational clues, coded relations & deductive connections",
          "Syllogisms: Categorical premises (All, Some, No statements), Venn diagram proofs & valid conclusion tests",
          "Arrangements: Linear seating, circular dining arrangements, condition constraints & multi-variable placement",
          "Series Recognition: Number sequences, letter series, alternating patterns, AP/GP patterns & next-term prediction"
        ]
      },
      {
        id: 9,
        name: "EPISODE 9 - VERBAL REASONING",
        title: "Verbal Reasoning & Placement English Mastery",
        desc: "Sentence ordering, error identification, grammatical spotting, and sentence improvement for corporate screening tests.",
        topics: [
          "Sentence Ordering: Logical paragraph sequencing, sentence jumbles & contextual coherence practice",
          "Error Identification: Grammatical error spotting, subject-verb agreement, tenses & prepositional fixes",
          "Sentence Improvement: Syntax refinement, vocabulary precision & placement screening MCQs"
        ]
      }
    ]
  },
  {
    id: "ignite-2",
    codeName: "IGNITE 2.0",
    title: "TheCodeSpark IGNITE 2.0: Job Ready AI Powered Cohort: Complete Web Development + GenAI + DSA + Aptitude & Reasoning + DevOps + Web3 + System Design",
    subtitle: "Complete job-ready mastery across 9 foundational episodes: full stack web engineering, generative AI, DSA in Java, aptitude & logical reasoning, cloud DevOps, Web3, and enterprise system design.",
    kicker: "PRODUCTS: LOVEABLE AI + PIXXO (IMAGEKIT) • DSA IN JAVA | COHORT 3.0",
    price: 7999,
    originalPrice: 16999,
    discountBadge: "53% OFF",
    duration: "8 Months",
    hours: "350+ Hours",
    modulesCount: "9 Master Episodes",
    questionsCount: "1.5k+ Questions",
    tags: ["Job Ready AI", "Complete Web Dev", "GenAI Engineering", "DSA in Java", "Aptitude & Reasoning", "System Design"],
    weeksBadge: "8 Weeks",
    enrolledCount: "70+ Enrolled",
    catalogGraphic: "mobile",
    isPopular: true,
    isLive: true,
    isComingSoon: false,
    comingSoonText: "Admissions Open • Batch Starting Soon",
    videoUrl: "/assets/aistudio/20261101-0901-20.9364903_f39b55c3.mp4",
    instructorImg: "/Rohit.png",
    instructorName: "Mr. Rohit Kashyap (Founder & CEO)",
    prerequisites: {
      level: "Zero to Industry Ready Developer",
      duration: "32 Weeks (8 Months)",
      schedule: "Mon-Sat (8:00 PM Live) + 1-on-1 Code Reviews",
      language: "Hindi / Hinglish",
      classType: "Live Intensive Cohort + Doubt Support",
      highlights: [
        "Products Built: Loveable Ai + Pixxo (ImageKit)",
        "Data Structures & Algorithms in Java | Cohort 3.0",
        "Generative AI Engineering (LLMs, Prompting, Zod, RAG & Multi-Agent Swarms)",
        "Complete Aptitude & Logical Reasoning for Campus & SDE Placements",
        "Production DevOps (Docker, AWS EC2, ALB, CloudFront CDN, CI/CD)",
        "System Design (LLD & HLD with 12 Real-World Case Studies)"
      ]
    },
    comparisonPoints: {
      positive: [
        "Complete Web Dev + GenAI + DSA in Java + Aptitude & Reasoning + DevOps + Web3 + System Design",
        "Real Scalable Products: Loveable Ai + Pixxo (ImageKit) with live deployment",
        "Comprehensive 9 Episodes covering 350+ live hours & 1,500+ coding challenges",
        "Live mentorship by Founder & CEO Mr. Rohit Kashyap & Senior Tech Leads",
        "Placement-focused Aptitude, Quant, Logical & Verbal Reasoning included",
        "Direct Discord community access, 1-on-1 code reviews & resume building"
      ],
      negative: [
        "Generic recorded tutorials with outdated technologies",
        "Zero GenAI, Vector DB, or Autonomous Multi-Agent Swarm exposure",
        "No Aptitude or Campus Placement Reasoning training",
        "No production Cloud DevOps (Docker, AWS EC2, ALB, CI/CD)",
        "Toy projects with zero real-world scalability or users"
      ]
    },
    productsBreakdown: IGNITE2_PRODUCTS,
    dsaJavaCohort: IGNITE2_DSA_JAVA,
    modules: [
      {
        id: 1,
        name: "EPISODE 1",
        title: "Fundamental (Internet, Web Protocols, HTML5, CSS Layouts, SASS, Tailwind & Modern JS/TS)",
        desc: "Web mechanics (Web 1.0 to 3.0), TCP/UDP 3-way handshakes, HTTP/HTTPS, browser rendering (CSSOM, Reflow & Repaint), Flexbox & Grid mastery, SASS, TailwindCSS, JavaScript engine internals, DOM manipulation, Async programming & TypeScript essentials.",
        topics: [
          "How the Internet Works & Client-Server Architecture (Web 1.0 to Web 3.0)",
          "Internet Protocols: TCP (3-Way Handshake) vs UDP, HTTP/HTTPS & SSL/TLS Encryption",
          "Semantic HTML & Browser Rendering: CSSOM, Render Tree, Reflow & Repaint",
          "CSS Core Fundamentals: Specificity, Box Model, Units (px, rem, em, %) & Modern clamp()",
          "Working with SASS (SCSS): Variables, Nesting, Mixins, Partials & Directives",
          "CSS Layout Mastery: Flexbox Deep Dive, CSS Grid 2D Layouts & Container Queries",
          "CSS Responsive Design: Mobile-First Strategy, Breakpoint Planning & Fluid Typography",
          "CSS Frameworks: Utility-First TailwindCSS vs Component-Based Bootstrap",
          "CSS Animations & Motion Design: Transitions, 3D Transforms & Keyframes",
          "JavaScript Core: Execution Context, Variables (var, let, const), Data Types & Memory",
          "DOM Manipulation: Tree Traversal, Query Selectors, Element Creation & Event Bubbling",
          "Browser APIs: LocalStorage, SessionStorage, Cookies & Fetch API Integration",
          "Asynchronous JavaScript: Callbacks, Promises (resolve/reject) & async/await",
          "Array & Object Methods: map, filter, reduce, entries, assign, freeze, keys, values",
          "TypeScript Essentials: Types, Interfaces, Generics, tsconfig.json & tsc Compiler",
          "Performance Optimization: Throttling & Debouncing, JSON Serialization"
        ]
      },
      {
        id: 2,
        name: "EPISODE 2",
        title: "React, Frontend Architecture & Next.js",
        desc: "Declarative UI, Virtual DOM reconciliation, components & props, state batching, custom hooks, Redux Toolkit, Zustand, Next.js App Router, SSR/SSG/ISR rendering, and Next.js Server Actions.",
        topics: [
          "Why React Exists: Declarative vs Imperative UI, SPA & Virtual DOM Reconciliation",
          "React Components, Props Passing & Dynamic List Rendering with Unique Keys",
          "State & Re-rendering Logic: useState Hook, Batching Updates & Derived State",
          "React Lifecycle Methods & useEffect Deep Dive: Dependency Arrays & Cleanup Functions",
          "Event Handling & Controlled Inputs with Zod Schema Validation",
          "Component Architecture: Single Responsibility, State Lifting & Component Composition",
          "Essential React Hooks: useState, useEffect, useContext, useRef, useCallback, useMemo",
          "Advanced Patterns: Custom Hooks (useFetch), HOCs, Render Props & Compound Components",
          "Client-Side Routing: React Router, Nested Routes, Dynamic Routing & Programmatic Navigation",
          "Server State & API Integration: TanStack Query (Smart Caching, useQuery & Mutations)",
          "Global State Management: Context API vs Zustand vs Redux Toolkit (Store, Reducers, Thunks)",
          "Performance Optimization: React.memo, useMemo, useCallback, Code Splitting with React.lazy",
          "Next.js Essentials: File-Based Routing, App Router & Shared Layout Architecture",
          "Rendering Strategies: SSR (Server-Side), SSG (Static Generation) & ISR (Incremental Regeneration)",
          "Building Backend APIs with Next.js & Server Actions using 'use server' Directives"
        ]
      },
      {
        id: 3,
        name: "EPISODE 3",
        title: "Node.js, MongoDB & Backend Architecture",
        desc: "Express.js REST APIs, Multer & ImageKit / Pixxo media pipelines, MongoDB Aggregation pipelines, JWT & RBAC security, WebSockets with Socket.io, Redis caching, and Jest testing.",
        topics: [
          "Node.js Foundations: LTS Environment, NPM Ecosystem & package.json Management",
          "Writing HTTP Server from Scratch: Request-Response Lifecycle & HTTP Status Codes",
          "Backend Architecture Patterns: MVC (Model-View-Controller) & Service-Oriented (SOA)",
          "Express.js Framework: Routing, Query & URL Parameters, Static Asset Serving",
          "Template Engines: EJS Loops, Conditionals & Views Rendering",
          "Express Middleware Mastery: Application, Router, Error-Handling, Helmet & CORS",
          "Handling File Uploads: Multer (Memory vs Disk Storage) & ImageKit / Cloudinary APIs",
          "Database Basics: MongoDB, Compass, Collections, Documents & Mongoose Connection",
          "Database Relations: One-to-One, One-to-Many, Many-to-Many & Mongoose populate()",
          "REST API Development: API Versioning (/v1/), Postman Testing & Rate Limiting",
          "Input Validation & Sanitization: express-validator & Zod with Structured Error Responses",
          "MongoDB Performance Optimization: Single-Field, Compound, Text & Wildcard Indexes",
          "MongoDB Aggregation Pipeline: $match, $group, $project, $sort, $lookup & $facet",
          "Production Architecture: PM2 Process Management, Winston/Morgan Logging, ESLint & Prettier",
          "Authentication & Authorization: JWT, bcrypt Hashing, Cookies, Sessions & RBAC",
          "Passport.js Strategies: Local Strategy & Google OAuth 2.0 Integration",
          "Real-Time WebSockets: socket.io Handshakes, Persistent Connections & Rooms",
          "High-Speed Caching: Redis In-Memory Caching, TTL Expiry & Pub/Sub Messaging",
          "Testing & Quality Assurance: Unit Testing with Jest & Cross-Browser Testing"
        ]
      },
      {
        id: 4,
        name: "EPISODE 4",
        title: "Generative AI Engineering & Autonomous Agents",
        desc: "LLM mechanics, token budgeting, prompt engineering, structured JSON outputs with Zod, function/tool calling, streaming tokens, embeddings, vector databases (RAG), and LangChain multi-agent swarms.",
        topics: [
          "How LLMs Actually Work: Tokens, Context Windows, Temperature & Deterministic vs Probabilistic",
          "Calling LLM APIs: Roles (system, user, assistant), Token Budgeting & 429 Rate Limits",
          "Prompt Engineering Fundamentals: Few-Shot Examples, Chain-of-Thought & Formatting Instructions",
          "Structured Output in AI Systems: Programmable JSON Responses & Resume/Metadata Parsers",
          "Generating JSON Responses from LLMs: Native JSON Mode & Schema-Based Prompting",
          "Schema Validation with Zod: Strict Validation, Retries for Broken Outputs & Safe AI Contracts",
          "Function Calling / Tool Calling: Deterministic Tool Invocation (improveBio, moderateText)",
          "Streaming Responses: Progressive Token Rendering & Enhanced AI User Experience",
          "Combining Streaming with Structured JSON Data: Real-Time UI Separation",
          "Error Handling in AI Apps: Malformed JSON Fallbacks, Timeouts & AI Request Logging",
          "Understanding Embeddings: Vector Spaces, Similarity Search & Document Chunking Strategies",
          "Integrating Vector Databases: Vector Indexing, Cosine Similarity & Metadata Filtering",
          "Building a Production RAG Pipeline: Query → Retrieve Chunks → Inject Context → Structured Answer",
          "Evaluating AI Systems: Hallucination Detection, Confidence Scoring & Retrieval Quality",
          "Understanding AI Agents: Reasoning Loops, Tool Invocation & When to Use Multi-Agent Systems",
          "Agent Design Patterns: Planner-Executor, Researcher-Writer, Critic-Refiner & Router Agents",
          "LangChain Framework: LCEL Chains, Prompt Templates, Tools, Memory & Agent Swarms",
          "Multi-Agent Workflow Case Studies: Profile Analyzer + Bio Improver + Opener Generator",
          "Multi-Agent Architecture Concerns: Latency, Cost Optimization, Logging & State Sharing"
        ]
      },
      {
        id: 5,
        name: "EPISODE 5",
        title: "Production Systems, Infrastructure & Deployment (DevOps)",
        desc: "Linux server administration, Docker containerization, AWS EC2, Security Groups, Application Load Balancers, CloudFront CDN, and GitHub Actions CI/CD automation.",
        topics: [
          "DevOps Foundations: CI/CD Pipelines, Infrastructure as Code & Environment Parity",
          "Linux Server Administration: SSH Keys, Shell Scripting, Top/PS Processes & PM2",
          "Docker & Containerization: Images vs Containers, Multi-Stage Dockerfiles & .dockerignore",
          "Docker Compose Orchestration: Connecting Backend, MongoDB & Redis Containers",
          "Cloud Computing on AWS: Regions, Availability Zones & Cost/Performance Optimization",
          "AWS EC2 Deployment: Launching Instances, SSH Hardening & Running Production Node/Docker",
          "Security Groups: Managing Inbound/Outbound Rules & Network Isolation",
          "Application Load Balancers (ALB): Target Groups, Health Checks & High Availability",
          "AWS CloudFront CDN: Global Edge Caching & Fast Static Asset Delivery",
          "CI/CD Automation: GitHub Actions Workflows, Automated Tests & SSH Triggered Deployments",
          "Scalability & Reliability: Vertical vs Horizontal Scaling, Redis Caching & System Metrics"
        ]
      },
      {
        id: 6,
        name: "EPISODE 6",
        title: "Scaling, Reliability, Micro-Services & Web3",
        desc: "Microservices design patterns, RabbitMQ Pub/Sub event-driven messaging, AWS ECS & ECR containerization, CloudWatch observability, and Web3 fundamentals.",
        topics: [
          "Microservice Foundations: Monolith vs Microservices & Database-per-Service Architecture",
          "Building & Orchestrating Microservices: API Gateway Pattern & Synchronous REST Routing",
          "Event-Driven Architecture: RabbitMQ Pub/Sub, Event Payloads, Idempotency & Eventual Consistency",
          "AWS Cloud-Native Deployment: Amazon ECR Container Registry & ECS Clusters",
          "Container Execution: AWS Fargate Serverless Containers vs EC2 Task Execution",
          "Distributed Observability & Scaling: Horizontal ECS Autoscaling & CloudWatch System Logs",
          "Scaling Concepts: Stateless Backend Design, Sticky Sessions & Load Balancing",
          "Caching in Production: Redis TTL Strategies & Cache Invalidation Challenges",
          "Logging & Observability: Structured Logging, Alerting Systems & Tracking AI Usage",
          "Production Hardening: Rate Limiting, DDoS Mitigation, CORS & Secure HTTP Headers",
          "Final Production Deployment: Docker on EC2, Custom Domain, SSL & CI/CD Pipeline",
          "Web3 Basics (Introductory): Blockchain Fundamentals, DApps, Smart Contracts & Cryptocurrencies"
        ]
      },
      {
        id: 7,
        name: "EPISODE 7",
        title: "Data Structures & Algorithms (DSA with Java / JavaScript)",
        desc: "Time & space complexity (Big-O), arrays, strings, two-pointers, sorting, binary search, linked lists, stacks, queues, recursion, backtracking, and binary trees/BST.",
        topics: [
          "Conditional Statements & Decision Logic: if-else, switch & Form Validation",
          "Loops & Pattern Programming: Pyramids, Right-Angled Triangles & Control Flow",
          "Array Mastery: Insertion, Deletion, Two Pointer Algorithm, Rotations & Kadane's Algorithm",
          "Object-Oriented Programming (OOP): Classes, Objects, Constructors, this Keyword & Methods",
          "String Algorithms: Palindrome Check, Longest Common Prefix, Character Frequency & Anagrams",
          "Time & Space Complexity: Big-O Notation (O(1), O(log n), O(n), O(n²), O(2ⁿ), O(n!))",
          "Mathematical Operations & Algorithms: Power, Sqrt, Greatest Common Divisor (GCD/HCF)",
          "Advanced Array Problems: Two Pointers, Prefix Sums, Sliding Window & 2D Matrices",
          "Sorting Algorithms: Selection Sort, Insertion Sort, Merge Sort, Quick Sort & Cyclic Sort",
          "Binary Search Mastery: Sorted Arrays, Infinite Arrays, Rotated Arrays & 2D Matrix Search",
          "Hashing in Depth: HashSets & HashMaps, Collision Resolution & Real-World Key-Value Problems",
          "Linked Lists: Singly, Doubly & Circular Linked Lists, Reversal & Fast-Slow Pointers",
          "Queues: Array & Linked List Implementation, Circular Queue & Breadth-First Traversals",
          "Stacks: Implementation, Push/Pop/Peek, Monotonic Stack & Expression Evaluation",
          "Advanced Recursion & Backtracking: N-Queens, Sudoku Solver, Subset Sum & Word Search",
          "Binary Trees: Traversals (Inorder, Preorder, Postorder, Level-Order), Height, Diameter & LCA",
          "Binary Search Trees (BST): Properties, Insertion, Deletion, Search & Inorder Traversal"
        ]
      },
      {
        id: 8,
        name: "EPISODE 8",
        title: "Aptitude, Quantitative & Logical Reasoning (Placement Ready)",
        desc: "Percentages, profit & loss, simple & compound interest, ratio & proportion, time & work, speed/distance/trains/boats, probability, permutations, AP/GP, clocks, calendars, direction sense, and syllogisms.",
        topics: [
          "Classic Chapters: Percentage Tips & Tricks, Cost Price/Selling Price/Discounts in Profit & Loss",
          "Interest Mastery: Simple Interest Formulas & Compound Interest (Annual, Semi-Annual, Quarterly)",
          "Ratio & Proportion: Proportional Relationships, Dividing & Scaling Quantities",
          "Number Related Topics: Number System Classification, Divisibility Rules, Factors & HCF/LCM",
          "Averages: Weighted Averages, Missing Numbers & Performance Analysis",
          "Speed, Work & Time: Work-Time-Efficiency, Alternating Schedules & Pipes and Cisterns",
          "Distance & Motion: Speed = Distance / Time, Relative Speed, Problems on Trains & Boats/Streams",
          "Combinatorics: Permutations (Arrangements) vs Combinations (Selections), Factorials & Circles",
          "Probability: Basic & Compound Events, Sample Spaces & Real-World Likelihood Scenarios",
          "Progressions: Arithmetic Progression (AP - an & Sn formulas) & Geometric Progression (GP)",
          "Miscellaneous Topics: Calendar Concepts (Odd Days & Leap Years) & Clock Angle/Overlap Problems",
          "Logical Reasoning: Direction Sense (Compass Turns), Blood Relations & Family Trees",
          "Syllogism: Premise Deductions (All, Some, No Statements) & Venn Diagram Analysis",
          "Arrangements & Series: Linear & Circular Seating Constraints, Arithmetic/Geometric Sequences",
          "Verbal Reasoning: Sentence Ordering, Error Spotting & Sentence Improvement MCQs"
        ]
      },
      {
        id: 9,
        name: "EPISODE 9",
        title: "System Design (LLD & HLD with 12 Real-World Case Studies)",
        desc: "Low Level Design, SOLID principles, GoF design patterns, machine coding (Parking Lot, BookMyShow, Uber), High Level Design, capacity estimation, microservices, and 12 case studies.",
        topics: [
          "LLD Foundations: Low Level Design Overview, OOP Relationships & UML Class/Sequence Diagrams",
          "Design Principles: SOLID Principles, DRY Rule & Writing Scalable Extensible Code",
          "Creational Design Patterns: Singleton, Factory Method, Abstract Factory, Builder & Prototype",
          "Structural Design Patterns: Adapter, Facade, Proxy, Decorator & Composite",
          "Behavioral Design Patterns: Observer, Strategy, Command, Iterator, State & Chain of Responsibility",
          "LLD Problem Solving (Machine Coding): Designing Parking Lot System & Vending Machine",
          "LLD Problem Solving (Machine Coding): Designing BookMyShow Ticket Booking & Splitwise",
          "LLD Problem Solving (Machine Coding): Designing Uber/Ola Ride Sharing & Elevator System",
          "HLD Foundations: High Level Architecture, Functional vs Non-Functional Requirements & Capacity Sizing",
          "Communication & Data Layer: Networking (HTTP/TCP), REST APIs, SQL vs NoSQL & Database Sharding",
          "Core Infrastructure: Redis Caching, CloudFront CDN, Application Load Balancers & API Gateways",
          "Advanced Distributed Systems: Fault Tolerance, Observability, Rate Limiting & Distributed Auth",
          "12 Real-World Case Studies: Scalable URL Shortener, Real-Time Chat, Video Streaming & More"
        ]
      }
    ]
  },
  {
    id: "ignite-3",
    codeName: "IGNITE 3.0",
    title: "TheCodeSpark IGNITE 3.0: Complete Data Analytics & Engineering",
    subtitle: "Data Analytics for Engineers: from raw process, business, and production data to decisions you can actually act on. Complete 13-Phase curriculum covering Python, Statistics, NumPy & Pandas, EDA, SQL Mastery, Excel & Power BI, Machine Learning, Data Engineering, and 6 Industry Capstones.",
    kicker: "13 COMPREHENSIVE PHASES • PYTHON • SQL • POWER BI • STATS & ML • 6 CAPSTONES",
    price: 4999,
    originalPrice: 9999,
    discountBadge: "50% OFF",
    duration: "6 Months",
    hours: "240+ Hours",
    modulesCount: "13 Comprehensive Phases",
    questionsCount: "1.2k+ Practice Exercises",
    tags: ["Data Analytics", "Power BI Prodigy", "SQL Mastery", "Python for Analytics", "Business Intelligence", "EDA & ML"],
    weeksBadge: "10 Weeks",
    enrolledCount: "120+ Enrolled",
    catalogGraphic: "datascience",
    isPopular: true,
    isLive: true,
    isComingSoon: false,
    comingSoonText: "Admissions Open • Batch Starting Soon",
    videoUrl: "/assets/aistudio/20261101-0826-41.9641150_79ea86df.mp4",
    instructorImg: "/Rohit.png",
    instructorName: "Mr. Rohit Kashyap (Founder & CEO)",
    prerequisites: {
      level: "Zero Coding Required to Industry Ready",
      duration: "24 Weeks (6 Months)",
      schedule: "Mon-Fri (8:00 PM Live) + Hands-on Lab Drills",
      language: "Hindi / Hinglish",
      classType: "Live Intensive Cohort + 24/7 Doubt Desk",
      highlights: [
        "13 Structured Phases from Foundations to Advanced Engineering Analytics",
        "Python (Basics to OOP, APIs, Regex & Jupyter Notebooks)",
        "Maths that Matters (Statistics, Probability, Hypothesis Testing & A/B Experiments)",
        "NumPy & Pandas Data Wrangling, Time Series & Memory Optimization",
        "SQL Mastery with PostgreSQL, Window Functions, CTEs & Stored Procedures",
        "No-Code Mastery: Advanced Excel (XLOOKUP, Dynamic Arrays) + Power BI Prodigy (DAX & Fabric)",
        "6 End-to-End Industry Capstones (Retail, HR, Finance, Marketing, Operations & Pipeline)"
      ]
    },
    capstonesBreakdown: IGNITE3_CAPSTONES,
    comparisonPoints: {
      positive: [
        "Complete 13-Phase journey from Python & Math to SQL, Power BI, ML & Data Engineering",
        "Engineering data focus: quality control, sensor/IoT logs, test benches & real business datasets",
        "6 complete portfolio capstone projects with problem statements, SQL queries & Power BI dashboards",
        "Live mentorship by Founder & CEO Mr. Rohit Kashyap & Senior Data Architects",
        "Interview preparation with live SQL problem-solving, case studies & resume reviews",
        "24/7 Discord community doubt desk with 1-on-1 guidance"
      ],
      negative: [
        "Generic tutorials teaching basic Excel formulas with toy datasets",
        "No real SQL window functions, CTEs, or relational database design",
        "No statistical rigor (missing hypothesis testing, confidence intervals & A/B testing)",
        "Zero data engineering awareness (no ETL/ELT pipelines, star schema, or scheduled refreshes)",
        "No portfolio projects or executive business storytelling"
      ]
    },
    modules: IGNITE3_MODULES
  },
   {
    id: "ignite-4",
    codeName: "IGNITE 4.0",
    title: "TheCodeSpark IGNITE 4.0: Java & DSA Domination",
    subtitle: "Zero-to-advanced Java programming and Data Structures & Algorithms with 500+ LeetCode problems, graph algorithms, and competitive programming patterns.",
    kicker: "JAVA • LOGIC BUILDING • DEEP LEARNING DSA",
    price: 4236,
    originalPrice: 8472,
    discountBadge: "50% OFF",
    duration: "5 Months",
    weeksBadge: "20 Weeks",
    enrolledCount: "85+ Enrolled",
    hours: "180+ Hours",
    modulesCount: "12 Master Modules",
    questionsCount: "500+ LeetCode Problems",
    tags: ["Java Core", "DSA Mastery", "LeetCode 500+", "Graph Theory", "Dynamic Programming"],
    isLive: false,
    isPopular: false,
    isComingSoon: true,
    comingSoonText: "Pre-Registration Open • Batch 4.0",
    videoUrl: "/assets/aistudio/20261101-0827-58.6184273_f9435e53.mp4",
    instructorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    instructorName: "DSA & Competitive Programming Specialist",
    prerequisites: {
      level: "Zero to Advanced Problem Solver",
      duration: "20 Weeks (5 Months)",
      schedule: "Mon-Sat (7:00 PM)",
      language: "Hinglish",
      classType: "Live Coding Drills & LeetCode Contests",
      highlights: [
        "Core Java 21 LTS: OOPs, Collections Framework, Multithreading & Memory Management",
        "500+ Handpicked LeetCode Problems (Easy, Medium, Hard)",
        "Time & Space Complexity Proofs with Big-O Analysis",
        "Advanced Graphs, Trees, Dynamic Programming & Backtracking",
        "Mock Technical Interviews & Company Specific Coding Rounds"
      ]
    },
    modules: [
      { id: 1, name: "MODULE 1", title: "Java Fundamentals & Object Oriented Architecture", desc: "JVM memory model, data types, control flow, methods, classes, interfaces, abstract classes, encapsulation, inheritance, polymorphism, and Java collections.", topics: ["Java architecture (JVM, JRE, JDK) & bytecode execution", "Memory management: Stack vs Heap, Garbage Collection", "OOPs principles: Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation", "Java Collections Framework: ArrayList, LinkedList, HashMap, HashSet, PriorityQueue"] },
      { id: 2, name: "MODULE 2", title: "Arrays, Two-Pointers & Sliding Window", desc: "Linear data structures, prefix sums, two pointer techniques, fast & slow pointers, variable/fixed sliding windows, and Kadane's algorithm.", topics: ["Two-pointer pattern on sorted and unsorted arrays", "Sliding window technique for substring and subarray problems", "Prefix and suffix sum arrays & multi-pass optimization", "Kadane's algorithm for maximum subarray sum"] },
      { id: 3, name: "MODULE 3", title: "Searching, Sorting & Binary Search Mastery", desc: "Merge sort, quick sort, cyclic sort, binary search on answer, rotated arrays, and 2D matrix binary search.", topics: ["Comparison vs non-comparison sorts & stability analysis", "Binary Search template and edge cases", "Binary Search on Answer spaces (Aggressive Cows, Book Allocation)", "Rotated sorted array search & peak finding"] },
      { id: 4, name: "MODULE 4", title: "Stacks, Queues & Monotonic Structures", desc: "Stack implementation, queue variants, Next Greater Element pattern, LRU Cache design, and expression evaluation.", topics: ["Monotonic stack and queue paradigms", "Next/Previous Smaller/Greater Element problems", "Min Stack & Max Queue with O(1) time complexity", "Designing LRU Cache with Doubly Linked List & HashMap"] },
      { id: 5, name: "MODULE 5", title: "Recursion, Backtracking & Branch and Bound", desc: "Call stack mechanics, subproblems, generating subsets/permutations, N-Queens, Sudoku solver, and word search.", topics: ["Base conditions, recursion trees & state transitions", "Subsets, Combinations, and Permutations with pruning", "N-Queens problem & Sudoku backtracking engine", "Memoization introduction & recursion optimization"] },
      { id: 6, name: "MODULE 6", title: "Trees, Binary Search Trees & Heaps", desc: "Tree traversals, binary tree views, Lowest Common Ancestor, BST operations, and Min/Max Heap applications.", topics: ["Inorder, Preorder, Postorder & Level-Order BFS traversal", "Vertical and top-bottom views of binary trees", "LCA and tree diameter calculations", "BST properties, validation, and balanced tree rotations", "Heapify algorithm and PriorityQueue interview patterns"] },
      { id: 7, name: "MODULE 7", title: "Graphs, Traversals & Shortest Paths", desc: "Graph representations, BFS/DFS, cycle detection, topological sort (Kahn's), Dijkstra, Bellman-Ford, and Floyd-Warshall.", topics: ["Adjacency matrix vs Adjacency list representations", "Cycle detection in directed and undirected graphs", "Topological Sort & Kahn's Algorithm for DAGs", "Dijkstra's shortest path with PriorityQueue", "Disjoint Set Union (DSU) & Kruskal's Minimum Spanning Tree"] },
      { id: 8, name: "MODULE 8", title: "Dynamic Programming (DP Mastery)", desc: "1D DP, 2D Grid DP, Knapsack 0/1, Unbounded Knapsack, Longest Common Subsequence, and DP on Trees.", topics: ["Top-Down Memoization vs Bottom-Up Tabulation", "0/1 Knapsack, Subset Sum, and Partition problems", "Longest Common Subsequence (LCS) & String editing DP", "Longest Increasing Subsequence (LIS) with Binary Search O(n log n)", "Matrix Chain Multiplication & Partition DP"] }
    ]
  },
  {
    id: "ignite-5",
    codeName: "IGNITE 5.0",
    title: "TheCodeSpark IGNITE 5.0: Cloud DevOps & System Design",
    subtitle: "Enterprise cloud engineering, Docker, Kubernetes orchestration, Terraform IaC, AWS infrastructure, and high-level system design for modern tech giants.",
    kicker: "DEVOPS • KUBERNETES • AWS CLOUD • SYSTEM DESIGN",
    price: 5999,
    originalPrice: 11999,
    discountBadge: "50% OFF",
    duration: "4 Months",
    weeksBadge: "16 Weeks",
    enrolledCount: "95+ Enrolled",
    hours: "140+ Hours",
    modulesCount: "8 Master Modules",
    questionsCount: "50+ Production Scenarios",
    tags: ["DevOps", "Kubernetes", "AWS Infrastructure", "Docker", "System Design"],
    isLive: false,
    isPopular: true,
    isComingSoon: true,
    comingSoonText: "Pre-Registration Open • Batch 5.0",
    videoUrl: "/assets/aistudio/20261101-0826-41.9641150_79ea86df.mp4",
    instructorImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    instructorName: "Lead Cloud Architect",
    prerequisites: {
      level: "Intermediate Developers",
      duration: "16 Weeks (4 Months)",
      schedule: "Sat-Sun (Weekend Intensive Lab)",
      language: "Hinglish",
      classType: "Hands-On Terminal & Cloud Labs",
      highlights: [
        "Linux Server Administration & Bash Automation",
        "Docker Containerization & Multi-stage Layer Caching",
        "Kubernetes Pods, Deployments, Services & Ingress Controllers",
        "AWS Cloud Architecture (EC2, S3, RDS, IAM, VPC, CloudFront)",
        "Automated CI/CD with GitHub Actions & Infrastructure as Code (Terraform)",
        "High-Level System Design (HLD) & Microservice Resilience"
      ]
    },
    modules: [
      { id: 1, name: "MODULE 1", title: "Linux Administration & Shell Automation", desc: "Core Linux commands, permissions, process management, and automated bash scripting.", topics: ["File permissions (chmod, chown) & SSH keys", "Process monitoring (systemd, top, htop, journalctl)", "Automated cron jobs & bash utility scripts"] },
      { id: 2, name: "MODULE 2", title: "Docker Containerization & Multi-Stage Builds", desc: "Production containerization, image optimization, and multi-service networks.", topics: ["Writing optimal Dockerfiles & layer caching", "Docker Compose multi-service stacks", "Container security & minimal alpine runtime images"] },
      { id: 3, name: "MODULE 3", title: "Kubernetes Orchestration & Cluster Management", desc: "Pods, ReplicaSets, Deployments, Services, ConfigMaps, and Helm charts.", topics: ["K8s architecture & kubectl command mastery", "Cluster networking, Ingress & TLS termination", "Horizontal Pod Autoscaler (HPA) & rolling updates"] },
      { id: 4, name: "MODULE 4", title: "AWS Cloud Infrastructure & Terraform IaC", desc: "Production AWS services, VPC networking, security groups, and automated Terraform.", topics: ["VPC subnets, internet gateways & route tables", "AWS EC2, S3 storage & RDS managed databases", "Terraform state management & modular cloud templates"] },
      { id: 5, name: "MODULE 5", title: "CI/CD Automation & Observability", desc: "GitHub Actions pipelines, zero-downtime deployment, Prometheus & Grafana.", topics: ["Automated lint, test, build, and deploy GitHub Actions", "Zero-downtime blue-green & canary deployments", "Prometheus metrics collection & Grafana dashboards"] },
      { id: 6, name: "MODULE 6", title: "System Design: Scalability & Load Balancing", desc: "Horizontal scaling, CDN edge caching, Application Load Balancers, and API gateways.", topics: ["Reverse proxies & NGINX rate limiting", "CloudFront CDN caching strategies & invalidation", "Database sharding, read-replicas & connection pooling"] }
    ]
  },
  {
    id: "ignite-6",
    codeName: "IGNITE 6.0",
    title: "TheCodeSpark IGNITE 6.0: Corporate Apprenticeship & Internship",
    subtitle: "6-Month guaranteed real-industry corporate apprenticeship. Work on production-grade client projects, live codebases, Agile sprints, and receive verified experience certificates with stipend assistance.",
    kicker: "APPRENTICESHIP • TRAINING • REAL WORK EXPERIENCE • PLACEMENT",
    price: 5000,
    originalPrice: 10000,
    discountBadge: "50% OFF",
    duration: "6 Months",
    weeksBadge: "24 Weeks",
    enrolledCount: "110+ Apprentices",
    hours: "300+ Hours",
    modulesCount: "6 Live Sprints",
    questionsCount: "Real Client Deliverables",
    tags: ["Corporate Apprenticeship", "Paid Stipend Track", "Live Client Projects", "Work Experience", "Placement Guarantee"],
    isLive: false,
    isPopular: false,
    isComingSoon: true,
    comingSoonText: "Pre-Registration Open • Limited Corporate Seats",
    videoUrl: "/assets/aistudio/20261101-0827-58.6184273_f9435e53.mp4",
    instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    instructorName: "Corporate Program Director",
    prerequisites: {
      level: "Graduates & Final Year Engineers",
      duration: "24 Weeks (6 Months)",
      schedule: "Mon-Fri (Corporate Hours & Standups)",
      language: "English / Hindi",
      classType: "Real Corporate Engineering Apprenticeship",
      highlights: [
        "Work on live client repositories with senior code reviewers",
        "Daily Agile standups, sprint planning, and JIRA ticket tracking",
        "Monthly stipend assistance and performance bonuses",
        "Official experience letter & recommendation letter from TheCodeSpark Technologies",
        "Direct interview referral network with 80+ hiring tech companies"
      ]
    },
    modules: [
      { id: 1, name: "SPRINT 1", title: "Onboarding & Monorepo Codebase Navigation", desc: "Corporate Git workflows, setting up local Docker environments, architecture overview, and onboarding issues.", topics: ["Git branch protection, PR guidelines & code conventions", "Dockerized development setup and environment parity", "Resolving first good-first-issues and CI verification"] },
      { id: 2, name: "SPRINT 2", title: "Feature Development & Test Driven Development", desc: "Implementing real user features, writing Jest/Cypress tests, and API contract adherence.", topics: ["Writing unit and integration tests for new endpoints", "State management & UI accessibility compliance", "Code reviews and refactoring under senior guidance"] },
      { id: 3, name: "SPRINT 3", title: "Performance Optimization & Database Tuning", desc: "Profiling slow queries, indexing MongoDB/PostgreSQL, Redis caching, and bundle size reduction.", topics: ["Database query execution plans (EXPLAIN ANALYZE)", "Redis cache invalidation & memory optimization", "Frontend Lighthouse score optimization and lazy-loading"] },
      { id: 4, name: "SPRINT 4", title: "Production Deployment & Monitoring", desc: "Staging to production release cycles, smoke tests, and monitoring real-time error logs with Sentry.", topics: ["Staging environment validation & release notes", "Zero-downtime blue-green deployments on AWS", "Monitoring error rates & APM telemetry"] },
      { id: 5, name: "SPRINT 5", title: "Corporate Code Review & Architecture Review", desc: "Conducting peer code reviews, writing design docs (RFCs), and presenting engineering trade-offs.", topics: ["Authoring Technical Design Documents (RFCs)", "Security vulnerability audits & dependency patching", "Cross-team communication and stakeholder demo"] },
      { id: 6, name: "SPRINT 6", title: "Placement Drive & Interview Conversion", desc: "Resume polishing with actual metrics, mock system design rounds, and hiring partner referrals.", topics: ["Metric-driven resume formatting (impact, numbers, scale)", "Senior engineer mock interviews & live coding rounds", "Direct referrals to top product startups and MNCs"] }
    ]
  }
];
