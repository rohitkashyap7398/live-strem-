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
    question: "What are the prerequisites for joining a training program?",
    answer: "No prior advanced programming knowledge is required for our beginner cohorts—basic computer literacy, curiosity, and a willingness to practice consistently are all you need. We start from ground-zero programming logic and progressively advance to full-stack engineering and cloud architecture. For advanced tracks, basic high school math or familiarity with fundamental logic is helpful."
  },
  {
    id: "faq-2",
    question: "Do you provide placement assistance after course completion?",
    answer: "Yes, TheCodeSpark Technologies Private Limited offers comprehensive 100% placement assistance. This includes 1-on-1 resume building, LinkedIn and GitHub portfolio enhancement, mock technical and HR interview rounds, aptitude test training, and direct referral opportunities with our network of 50+ hiring partner companies across India."
  },
  {
    id: "faq-3",
    question: "What is the duration and timing of the training programs?",
    answer: "Our training programs range from 3 months (Skill & Foundation Tracks) to 6 months (Comprehensive Full Stack Engineering & AI tracks), as well as a 100-day full-time intensive Bootcamp. Sessions are held with convenient evening and weekend slots (typically 7:00 PM – 9:30 PM IST or weekend batches) to fit college and working professional schedules."
  },
  {
    id: "faq-4",
    question: "Are the training programs online or offline?",
    answer: "We offer both flexible modes! You can attend in-person On-Campus training at our state-of-the-art tech campus in Lucknow (Indrapuri / Gomti Nagar) with direct physical desk mentorship and high-speed computer labs, or join our Live Interactive Online cohorts featuring live streaming, virtual breakout doubt rooms, and 24/7 Discord support."
  },
  {
    id: "faq-5",
    question: "Will I receive a certificate after completing the course?",
    answer: "Yes! Upon successfully completing all curriculum milestones, assignments, and capstone project defenses, you will receive an official, industry-recognized Certificate of Completion from TheCodeSpark Technologies Private Limited with an authentic verification credential ID to showcase on your LinkedIn profile and resume."
  },
  {
    id: "faq-6",
    question: "What is the fee structure and payment options?",
    answer: "Our course pricing is transparent with significant early-bird cohort discounts (up to 50% off). We provide flexible payment facilities including zero-cost EMI plans, monthly installment options, UPI, credit/debit cards, and net banking to ensure high-quality tech education remains accessible to all students."
  },
  {
    id: "faq-7",
    question: "Do you provide hands-on project experience?",
    answer: "Yes, absolutely! We strictly practice a 'Learn by Building' approach. Throughout the cohort, you will build 4 to 6 production-ready capstone systems—ranging from scalable full-stack web applications and AI-powered tools to enterprise data pipelines—with automated testing, peer code reviews, Git version control, and cloud deployments."
  },
  {
    id: "faq-8",
    question: "What is the batch size and student-teacher ratio?",
    answer: "We purposefully cap our cohorts at small, focused batch sizes (typically 25–35 students) to maintain a healthy 1:10 mentor-to-student ratio. This ensures every student receives individual attention, immediate doubt clarification during live classes, and personalized code feedback."
  }
];

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  {
    id: "yt-1",
    title: "How to Get Placed in Tech in 2024 (No Luck, Just Skills)",
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
