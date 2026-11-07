import React from 'react';

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

// Curated reviews organized into 3 columns matching the exact Framer reference in the image
const COLUMN_1_REVIEWS: ReviewItem[] = [
  {
    id: 'c1-1',
    name: 'Mukti Prasad Dash',
    role: 'Full Stack Developer',
    company: 'Placed at TCS',
    text: 'TheCodeSpark turned my coding journey into real career growth. The mentors explain full-stack architecture step-by-step. The live project building and doubt sessions made Next.js, Node, and database design effortless to grasp.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c1-2',
    name: 'Sophia Martinez / Ananya Verma',
    role: 'Marketing Director, Fashion Label',
    company: 'Placed at Zomato',
    text: 'Their blend of strategy and creativity elevated our brand presence. Every campaign felt intentional and delivered measurable results.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c1-3',
    name: 'Avery Collins',
    role: 'James Okafor — CEO, Tech Company',
    company: 'Tech Brand Lead',
    text: 'TheCodeSpark helped us refine our messaging and scale across platforms with confidence. The clarity they brought to our team was invaluable.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c1-4',
    name: 'Pooja Sharma',
    role: 'Full Stack Engineer',
    company: 'Placed at Paytm',
    text: 'Not just basic tutorial clones, but real production architecture, Next.js 15, PostgreSQL, and Gemini API integration that modern tech hiring leads actually look for.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c1-5',
    name: 'Divya Joshi',
    role: 'Software Associate',
    company: 'Placed at HCLTech',
    text: 'College theoretical lectures never prepared me for real engineering jobs. TheCodeSpark gave me practical skills, Git workflows, and interview confidence that made an immediate difference.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c1-6',
    name: 'Daniel Reed',
    role: 'Founder, E-commerce Brand',
    company: 'Alumni Network',
    text: 'The mentors explain concepts in a very practical, clear manner. The live project building and 1-on-1 doubt sessions made full-stack development easy to grasp.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
  }
];

const COLUMN_2_REVIEWS: ReviewItem[] = [
  {
    id: 'c2-1',
    name: 'Aisha Rahman',
    role: 'Creative Director, Skincare Brand',
    company: 'Industry Partner',
    text: 'TheCodeSpark understands both culture and data. Our community growth feels authentic and strategically driven.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2-2',
    name: 'Chloe Bennett',
    role: 'Personal Brand Coach',
    company: 'Indrapuri Campus Cohort',
    text: 'They gave me structure, consistency, and a strategy that actually converts. My audience growth has never been this steady.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2-3',
    name: 'Marcus Hill',
    role: 'Founder, Fitness Brand',
    company: 'Placed at Rapidops',
    text: 'What stood out was their focus on performance. The content looked premium, and the results backed it up.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2-4',
    name: 'Mohd Siraj',
    role: 'AI & Python Developer',
    company: 'Placed at Cognizant',
    text: 'The curriculum is deeply industry-focused. We built hands-on LangChain agents, RAG vector pipelines with pgvector, and multi-modal apps that impressed recruiters in the very first screening round.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2-5',
    name: 'Riya Sengupta',
    role: 'Full Stack Engineer',
    company: 'Placed at Rapidops',
    text: 'Whenever I got stuck with asynchronous JavaScript or complex relational joins, the mentors hopped on 1-on-1 calls to trace the stack trace line by line. Genuine guidance without judgment.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2-6',
    name: 'Akshat Sahu',
    role: 'Indrapuri Offline Cohort',
    company: 'Software Engineer',
    text: 'After joining the Indrapuri offline campus, I built 5 full-stack apps from scratch. High-speed fiber internet, ergonomic setups, and direct desk mentorship throughout the day kept me accountable.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80'
  }
];

const COLUMN_3_REVIEWS: ReviewItem[] = [
  {
    id: 'c3-1',
    name: 'Olivia Chen',
    role: 'Brand Manager, Lifestyle Brand',
    company: 'Tech Cohort',
    text: 'They transformed how we show up online. The consistency and storytelling strengthened our entire brand perception.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3-2',
    name: 'David Thompson',
    role: 'Managing Partner, Real Estate Firm',
    company: 'Placed at TCS',
    text: 'We now generate qualified leads directly from social media. Avero helped us build a system, not just content.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3-3',
    name: 'Ethan Walker',
    role: 'Co-Founder, SaaS Company',
    company: 'Placed at Walmart',
    text: 'Our engagement rates improved, and our paid ads became far more efficient. They truly think long-term.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3-4',
    name: 'Priya Nair',
    role: 'Cloud & DevOps Associate',
    company: 'Placed at Wipro',
    text: 'The Docker, Kubernetes, and cloud deployment sessions were phenomenal. You deploy live production applications with automated testing instead of just running localhost demos.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3-5',
    name: 'Rohan Gupta',
    role: 'Software Engineer',
    company: 'Amazon SDE Intern',
    text: 'We practiced over 400+ algorithmic problems with visual diagrams and recursion trees. The mock technical rounds simulated real FAANG interview pressure and eliminated my interview anxiety.',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3-6',
    name: 'Sneha Kulkarni',
    role: 'React & UI Developer',
    company: 'Placed at Infosys',
    text: 'Coding alongside ambitious peers at TheCodeSpark gave me the motivation to build consistently every day. The mentors are always approachable, even late at night during project deadlines.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80'
  }
];

export const StudentReviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#2A2A2A] relative overflow-hidden text-white border-t border-b border-white/[0.08]">
      {/* Subtle radial ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#E10600]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-14 space-y-3.5">
        {/* Subtle pill kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-mono tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
          <span>Student Testimonials & Reviews</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
          We Help Learners Become Industry-Ready Developers.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Authentic feedback from our ambitious community of student developers, placed alumni, and engineering fellows across India.
        </p>
      </div>

      {/* 
        3-COLUMN VERTICAL CONTINUOUS MARQUEE WALL
        Matching exact design from user image:
        - Quote text is INSIDE the rounded dark bubble box
        - Author profile (avatar + name + role) is OUTSIDE below the box
        - Compact size matching reference image
        - Never stops or pauses on mouse hover (continuous smooth scroll)
      */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="relative overflow-hidden h-[540px] sm:h-[600px] md:h-[660px]">
          
          {/* Top Edge Gradient Mask */}
          <div className="absolute top-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-[#2A2A2A] via-[#2A2A2A]/85 to-transparent z-20 pointer-events-none" />

          {/* Bottom Edge Gradient Mask */}
          <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#2A2A2A] via-[#2A2A2A]/85 to-transparent z-20 pointer-events-none" />

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 h-full items-start">
            
            {/* COLUMN 1: Continuous scroll UP */}
            <div className="overflow-hidden h-full flex flex-col pointer-events-none select-none">
              <div className="animate-marquee-vertical flex flex-col gap-6 sm:gap-7">
                {[...COLUMN_1_REVIEWS, ...COLUMN_1_REVIEWS].map((rev, idx) => (
                  <ExactBubbleCard key={`col1-${rev.id}-${idx}`} review={rev} />
                ))}
              </div>
            </div>

            {/* COLUMN 2: Continuous scroll DOWN (Reverse direction) */}
            <div className="hidden md:flex overflow-hidden h-full flex-col pointer-events-none select-none">
              <div className="animate-marquee-vertical-reverse flex flex-col gap-6 sm:gap-7">
                {[...COLUMN_2_REVIEWS, ...COLUMN_2_REVIEWS].map((rev, idx) => (
                  <ExactBubbleCard key={`col2-${rev.id}-${idx}`} review={rev} />
                ))}
              </div>
            </div>

            {/* COLUMN 3: Continuous scroll UP */}
            <div className="hidden lg:flex overflow-hidden h-full flex-col pointer-events-none select-none">
              <div className="animate-marquee-vertical-slow flex flex-col gap-6 sm:gap-7">
                {[...COLUMN_3_REVIEWS, ...COLUMN_3_REVIEWS].map((rev, idx) => (
                  <ExactBubbleCard key={`col3-${rev.id}-${idx}`} review={rev} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Exact Card Component matching image_681b6f47.png:
// Quote is INSIDE the rounded dark bubble box.
// Author avatar + Name + Role are OUTSIDE below the box.
const ExactBubbleCard: React.FC<{ review: ReviewItem }> = ({ review }) => {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  return (
    <div className="flex flex-col w-full">
      {/* 1. Rounded Bubble Box for Quote text only */}
      <div className="bg-[#1e1e1e] border border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-md shadow-black/50">
        <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-neutral-200/95 font-normal">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* 2. Author Profile OUTSIDE the box, directly underneath */}
      <div className="mt-2.5 sm:mt-3 flex items-center gap-2.5 px-1">
        {/* Avatar with resilient fallback */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-1 ring-white/10 shrink-0 bg-neutral-800">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-white bg-gradient-to-tr from-neutral-800 to-neutral-700 -z-10">
            {initials}
          </div>
        </div>

        {/* Name and Role */}
        <div className="min-w-0 flex flex-col">
          <h4 className="text-xs sm:text-[12.5px] font-semibold text-white tracking-tight leading-snug truncate">
            {review.name}
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-neutral-400 font-normal leading-snug truncate">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
