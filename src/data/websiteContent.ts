export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
  thumbnail: string;
  url: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mudit Prasad Dash",
    role: "Full Stack Developer",
    company: "TCS",
    rating: 5,
    text: "TheCodeSpark Technologies Private Limited is an excellent Institute for learning Coding. The Teachers Explain Concepts In A Crystal Clear Way.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "Pradum",
    role: "MERN Stack Developer",
    company: "Rapidops",
    rating: 4.9,
    text: "TheCodeSpark Technologies Private Limited is An Amazing Place To Learn Coding! The Mentors Are Highly Skilled, Explain Every Concept With Practical Code.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Honey Atalkar",
    role: "Software Engineering Student",
    company: "Placed at Walmart",
    rating: 4.8,
    text: "TheCodeSpark Technologies Private Limited - Best Place To Learn Coding! The Teachers Explain Every Topic Step By Step with real doubt support.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    name: "Om Singhal",
    role: "Backend Developer",
    company: "Nagarro",
    rating: 4.9,
    text: "Best Place To Learn Offline & Online. I Am Currently Learning Coding and built my entire backend portfolio here.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "5",
    name: "Aditya Kumar",
    role: "Coding Mentor & Lead",
    company: "TheCodeSpark Technologies Private Limited",
    rating: 5,
    text: "We Proudly Share Our Teaching Journey With TheCodeSpark Technologies Private Limited, Helping Students Build Future-Ready Tech Skills.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    name: "Akash Warade",
    role: "MERN Stack Student",
    company: "Placed at Wipro",
    rating: 4.8,
    text: "I Am A Student Of MERN-15 Batch And I Am Giving These Reviews After Spending 3 Months Here. Truly Transformative Training!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "7",
    name: "Pragati Nayak",
    role: "Junior Web Developer",
    company: "Tech Mahindra",
    rating: 4.7,
    text: "This school is not just a school but full of great memories and real skills. The supportive environment and hands-on coding boosted my confidence.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "8",
    name: "Mohd Siraj",
    role: "Python & Gen-AI Developer",
    company: "Cognizant",
    rating: 5,
    text: "I had a great experience here. The mentors are highly supportive and the curriculum is very industry-focused. Best place to learn coding in Lucknow.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are TheCodeSpark Technologies Private Limited courses suitable for beginners?",
    answer: "Yes, TheCodeSpark Technologies Private Limited provides beginner-friendly courses along with advanced concepts. Our courses are designed in a way that suits complete beginners as well as professionals who want to advance concepts, starting from fundamentals and progressing to production architecture."
  },
  {
    id: "faq-2",
    question: "Does TheCodeSpark Technologies Private Limited provide placement assistance?",
    answer: "Yes! TheCodeSpark Technologies Private Limited offers placement assistance through career guidance, mock technical interviews, resume preparation, and direct interview opportunities with 50+ hiring partner companies across India."
  },
  {
    id: "faq-3",
    question: "What programming languages and technologies are covered in the courses?",
    answer: "Depending on your track, we cover Full Stack Web Development (HTML5, Modern CSS, JavaScript ES6+, React 19, Node.js, Express, PostgreSQL, MongoDB), Python & Generative AI (NumPy, Pandas, PyTorch, LangChain, RAG, Gemini API), Java with DSA, and DevOps."
  },
  {
    id: "faq-4",
    question: "Are the classes live or pre-recorded, and can I access recordings later?",
    answer: "Our cohorts feature interactive live masterclasses combined with structured recorded modules for self-paced revision. All live sessions are recorded and made available immediately in your student portal with lifetime access."
  },
  {
    id: "faq-5",
    question: "Do students get real-world project experience during the course?",
    answer: "Absolutely. We follow a strict 'Learn by Building' philosophy. You will build and deploy multiple full-stack production projects with clean code reviews, Git version control, and real cloud deployment."
  },
  {
    id: "faq-6",
    question: "What is the difference between Online and On-Campus Expert Learning programs?",
    answer: "Our On-Campus training programs take place at our tech campus in Indrapuri / Gomti Nagar, Lucknow with direct in-person desk mentorship and dedicated computer lab access. The Online cohorts cover the exact same rigorous curriculum with live interactive streaming, breakout rooms, and Discord 1-on-1 assistance."
  }
];

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  {
    id: "yt-1",
    title: "How to Get Placed in Tech in 2025/2026 (No Luck, Just Skills)",
    views: "48.9K Views",
    likes: "2.2K Likes",
    duration: "24:18",
    category: "Career Roadmap",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    url: "https://youtube.com"
  },
  {
    id: "yt-2",
    title: "Build a Modern SaaS Portfolio Website with React & Tailwind",
    views: "82.4K Views",
    likes: "4.1K Likes",
    duration: "1:42:00",
    category: "Project Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    url: "https://youtube.com"
  },
  {
    id: "yt-3",
    title: "Complete Web Development Roadmap: From Zero to Full Stack",
    views: "128K Views",
    likes: "7.9K Likes",
    duration: "45:10",
    category: "Roadmap",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
    url: "https://youtube.com"
  },
  {
    id: "yt-4",
    title: "Generative AI & LLM Agents with Gemini: Practical Deep Dive",
    views: "36.2K Views",
    likes: "1.9K Likes",
    duration: "52:40",
    category: "Gen AI",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    url: "https://youtube.com"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Live Expert Learning Session",
    category: "Classes",
    desc: "Interactive learning with mentors and live code walkthroughs",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-2",
    title: "Modern Computer Lab",
    category: "Infrastructure",
    desc: "State-of-the-art lab with high-speed fiber internet and latest workstations",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-3",
    title: "Students Collaborating",
    category: "Team Work",
    desc: "Hackathons, team projects, and peer code reviews",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-4",
    title: "Certificate Distribution",
    category: "Achievement",
    desc: "Celebrating student milestones and campus placement selections",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-5",
    title: "1-on-1 Mentorship & Doubt Desk",
    category: "Mentoring",
    desc: "Personalized code debugging and mock interview feedback",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-6",
    title: "TheCodeSpark Technologies Private Limited Office & Campus",
    category: "Campus",
    desc: "Indrapuri / Gomti Nagar Lucknow facility with vibrant coding zones",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80"
  }
];

export const HIRING_PARTNERS = [
  { name: "Amazon", logo: "AMAZON" },
  { name: "Walmart", logo: "WALMART" },
  { name: "TCS", logo: "TCS" },
  { name: "Rapidops", logo: "RAPIDOPS" },
  { name: "Nagarro", logo: "NAGARRO" },
  { name: "Infosys", logo: "INFOSYS" },
  { name: "Wipro", logo: "WIPRO" },
  { name: "Paytm", logo: "PAYTM" }
];
