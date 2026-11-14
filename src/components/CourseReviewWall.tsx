import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Course } from '../data/coursesData';

interface CourseReviewCardData {
  name: string;
  role: string;
  rating: string;
  stars: number;
  text: string;
  avatar?: string;
}

const ROW_1_REVIEWS: CourseReviewCardData[] = [
  {
    name: 'Mohd Siraj',
    role: 'Web Developer',
    rating: '4.8',
    stars: 5,
    text: 'I had a great experience at TheCodeSpark Technologies Private Limited. The teachers are highly supportive and knowledgeable, breaking down complex full-stack and system concepts clearly.',
    avatar: '/assets/aistudio/faculty_nirved_kumar.png',
  },
  {
    name: 'Mukti Prasad Dash',
    role: 'Full Stack Developer',
    rating: '4.9',
    stars: 5,
    text: 'TheCodeSpark Technologies Private Limited is an awesome place for learning real engineering. Mentors explain architecture concepts step by step with hands-on live projects.',
    avatar: '/Rohit.png',
  },
  {
    name: 'Pradumna Patel',
    role: 'MERN Stack Developer',
    rating: '4.7',
    stars: 5,
    text: 'TheCodeSpark Coding School is the best hub for hands-on coding. The mentors make DSA, backend APIs, and cloud deployment easy to understand with instant doubt solving.',
    avatar: '/assets/aistudio/faculty_ishu_sharma.png',
  },
  {
    name: 'Pooja Sharma',
    role: 'Software Engineer',
    rating: '4.9',
    stars: 5,
    text: 'Rather than outdated slides, every session focused on live coding workflows, production debugging, and portfolio builds that recruiters actually asked me about in interviews.',
    avatar: '/assets/aistudio/faculty_aadhya.png',
  },
  {
    name: 'Rohan Gupta',
    role: 'Java & DSA Fellow',
    rating: '4.8',
    stars: 5,
    text: 'Solving structured DSA patterns and building real deployed apps side-by-side gave me immense interview confidence. Truly grateful to Rohit sir and the mentor team.',
    avatar: '/assets/aistudio/rohit_kashyap_ceo_portrait.png',
  },
];

const ROW_2_REVIEWS: CourseReviewCardData[] = [
  {
    name: 'Devendra Nayak',
    role: 'Backend Developer',
    rating: '4.7',
    stars: 5,
    text: 'Not just a coding batch but a real engineering community full of energy and practical mentorship. Every doubt session moved me closer to my tech role.',
    avatar: '/assets/aistudio/faculty_nirved_kumar.png',
  },
  {
    name: 'Samarth Jain',
    role: 'Full Stack Engineer',
    rating: '4.8',
    stars: 5,
    text: 'Really amazing environment to learn modern technologies and practical architecture. Calling all aspiring coders and tech enthusiasts to experience live cohort builds here.',
    avatar: '/Rohit.png',
  },
  {
    name: 'Akshat Sahu',
    role: 'Software Developer',
    rating: '4.9',
    stars: 5,
    text: 'The best coding school in Bhopal! Learned so much after joining here—went from basics to shipping production projects, APIs, and AI integrations smoothly.',
    avatar: '/assets/aistudio/faculty_ishu_sharma.png',
  },
  {
    name: 'Priya Nair',
    role: 'AI & Cloud Developer',
    rating: '4.8',
    stars: 5,
    text: 'The live doubt-solving Discord desk and mentor code reviews ensured I never stayed stuck for hours. Clear roadmaps, real projects, and steady daily progress.',
    avatar: '/assets/aistudio/faculty_aadhya.png',
  },
  {
    name: 'Shreya Verma',
    role: 'Frontend Engineer',
    rating: '4.9',
    stars: 5,
    text: 'Best decision for my career switch! Structured cohorts, clear Hindi + English explanations, and real placement mock interviews helped me crack my first developer offer.',
    avatar: '/assets/aistudio/rohit_kashyap_ceo_portrait.png',
  },
];

const StarRow: React.FC<{ rating: string; stars: number }> = ({ rating, stars }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[13px] font-mono font-semibold text-white tabular-nums">
        {rating}
      </span>
      <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
        {[0, 1, 2, 3, 4].map((idx) => (
          <Star
            key={idx}
            className={`w-3.5 h-3.5 ${
              idx < stars
                ? 'fill-[#F59E0B] text-[#F59E0B]'
                : 'fill-neutral-700 text-neutral-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ReviewCard: React.FC<{ item: CourseReviewCardData }> = ({ item }) => {
  const initials = item.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-[310px] sm:w-[375px] shrink-0 rounded-2xl bg-[#111215] border border-white/[0.08] hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between gap-4 transition-colors duration-300 shadow-[0_14px_34px_-14px_rgba(0,0,0,0.85)]">
      {/* Header: Avatar + Name + Role */}
      <div className="flex items-center gap-3.5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-[#062B1A] to-[#0D3D27] border border-white/15 shrink-0 flex items-center justify-center">
          {item.avatar && (
            <img
              src={item.avatar}
              alt={item.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-full object-cover object-top relative z-10"
            />
          )}
          <span className="text-xs font-mono font-bold text-[#9BFF6E]">
            {initials}
          </span>
        </div>

        <div className="min-w-0">
          <div className="text-sm font-semibold text-white tracking-tight truncate">
            {item.name}
          </div>
          <div className="text-xs text-neutral-400 truncate mt-0.5">
            {item.role}
          </div>
        </div>
      </div>

      {/* Rating Row */}
      <StarRow rating={item.rating} stars={item.stars} />

      {/* Review Text */}
      <p className="text-[13px] leading-relaxed text-neutral-300/90 line-clamp-3">
        {item.text}
      </p>
    </div>
  );
};

export const CourseReviewWall: React.FC<{ course: Course }> = ({ course }) => {
  const firstRow = [
    {
      name: 'Mohd Siraj',
      role: 'Web Developer',
      rating: '4.8',
      stars: 5,
      text: `I had a great experience in ${course.codeName} at TheCodeSpark Technologies Private Limited. The mentors are highly supportive and explain core concepts clearly.`,
      avatar: '/assets/aistudio/faculty_nirved_kumar.png',
    },
    ...ROW_1_REVIEWS.slice(1),
  ];

  const secondRow = [
    ...ROW_2_REVIEWS.slice(0, 2),
    {
      name: 'Akshat Sahu',
      role: 'Software Developer',
      rating: '4.9',
      stars: 5,
      text: `Joining ${course.codeName} at TheCodeSpark Technologies Private Limited was the turning point for my engineering career. Hands-on coding from day one!`,
      avatar: '/assets/aistudio/faculty_ishu_sharma.png',
    },
    ...ROW_2_REVIEWS.slice(3),
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#070709] text-white relative overflow-hidden border-y border-white/10">
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-[#9BFF6E]/[0.05] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-[#9BFF6E] uppercase tracking-wider">
              4.8 / 5 Verified Student Reviews
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
            Trusted by learners across {course.codeName} &amp; cohorts
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
          Hover any review card to pause the stream and read verified learner stories.
        </p>
      </motion.div>

      {/* Staggered Dual-Row Horizontal Marquee Wall */}
      <div className="relative w-full overflow-hidden space-y-5">
        {/* Left & Right Edge Dark Fade Masks matching reference video */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#070709] via-[#070709]/85 to-transparent z-20 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#070709] via-[#070709]/85 to-transparent z-20 pointer-events-none"
        />

        {/* Row 1: Scrolling Left */}
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-5">
            {[...firstRow, ...firstRow].map((item, idx) => (
              <ReviewCard key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Staggered offset) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex gap-5 -ml-20 sm:-ml-32">
            {[...secondRow, ...secondRow].map((item, idx) => (
              <ReviewCard key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
