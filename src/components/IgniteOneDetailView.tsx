import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  MotionConfig,
} from 'motion/react';
import {
  Check,
  X,
  Plus,
  Minus,
  ArrowRight,
  Layers,
  Terminal,
  ShieldCheck,
  Zap,
  Target,
  Code2,
  Cpu,
  BookOpen,
  Star,
  FileText,
  Sparkles,
  CheckCircle2,
  Percent,
  Phone,
  Mail,
  MapPin,
  MousePointer2,
  Briefcase,
  Bot,
  Gauge,
} from 'lucide-react';
import brandLogo from '../assets/logo.png';
import rohitPhoto from '../assets/Rohit.png';
import { Course, COURSES } from '../data/coursesData';
import { CourseReviewWall } from './CourseReviewWall';

interface IgniteOneDetailViewProps {
  course: Course;
  onSelectAnotherCourse: (course: Course) => void;
  onRequestCallback: () => void;
  onBuyNow: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
  onNavigateCourses: () => void;
  onNavigateHome: () => void;
}

type FaqCategory =
  | 'All'
  | 'Curriculum & Stack'
  | 'Live Classes & Doubts'
  | 'Projects & Cert'
  | 'Pricing & Access';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getCoursePoster = (course: Course): string => {
  if (course.posterImg) {
    return course.posterImg;
  }
  switch (course.id) {
    case 'ignite-1':
      return '/assets/aistudio/IGNITE_1.0_Job-Ready_Tech_Career_Poster_13daf013.png';
    case 'ignite-2':
      return '/assets/aistudio/Ignite_2.0_Developer_Program_Poster_0af3eb9a.png';
    case 'ignite-3':
      return '/assets/aistudio/IGNITE_3.0_Developer_Cohort_Poster_2_2e0454b4.png';
    case 'ai-agents':
      return '/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png';
    case 'ignite-4':
      return '/assets/aistudio/JAVALogic__Building_Deep_Learning_399f2731.png';
    case 'dev-toolkit':
      return '/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png';
    case 'ignite-5':
      return '/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png';
    case 'ignite-6':
      return '/assets/aistudio/Warmly_Branded_Executive_Team_Portrait_67a8e1d1.png';
    case 'trading-mastery':
      return '/assets/aistudio/Focused_Crypto_Trading_Workspace_58db5cbb.png';
    default:
      return '/assets/aistudio/IGNITE_1.0_Job-Ready_Tech_Career_Poster_13daf013.png';
  }
};

export const IgniteOneDetailView: React.FC<IgniteOneDetailViewProps> = ({
  course,
  onSelectAnotherCourse,
  onRequestCallback,
  onBuyNow,
  onViewSyllabus,
  onNavigateCourses,
  onNavigateHome,
}) => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(
    course.modules[0]?.id ?? 1
  );
  const [showAllModules, setShowAllModules] = useState(false);
  const [curriculumTab, setCurriculumTab] = useState<
    'episodes' | 'products' | 'dsa' | 'capstones'
  >('episodes');
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeMentorIdx, setActiveMentorIdx] = useState(0);
  const [faqCategory, setFaqCategory] = useState<FaqCategory>('All');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  // Reset tab & accordion when switching courses
  React.useEffect(() => {
    setCurriculumTab('episodes');
    setOpenModuleId(course.modules[0]?.id ?? 1);
    setShowAllModules(false);
    setActiveProductIndex(0);
    setOpenFaqIdx(0);
  }, [course.id]);

  // Scroll-linked animation refs matching video frames 00:01-00:05 (winding timeline) & 00:06-00:08 (radial hub expansion)
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgressRaw } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  });
  const timelineProgress = useSpring(timelineProgressRaw, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const radialHubRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: hubProgressRaw } = useScroll({
    target: radialHubRef,
    offset: ['start 85%', 'center 55%'],
  });
  const hubProgress = useSpring(hubProgressRaw, {
    stiffness: 110,
    damping: 24,
  });

  const topLeftX = useTransform(hubProgress, [0, 1], [110, 0]);
  const topLeftY = useTransform(hubProgress, [0, 1], [70, 0]);
  const topRightX = useTransform(hubProgress, [0, 1], [-110, 0]);
  const topRightY = useTransform(hubProgress, [0, 1], [70, 0]);
  const midLeftX = useTransform(hubProgress, [0, 1], [130, 0]);
  const midRightX = useTransform(hubProgress, [0, 1], [-130, 0]);
  const bottomY = useTransform(hubProgress, [0, 1], [-75, 0]);
  const hubCardScale = useTransform(hubProgress, [0, 1], [0.88, 1]);
  const hubCardOpacity = useTransform(hubProgress, [0, 0.5, 1], [0.35, 0.9, 1]);

  const uploadedLogo =
    '/assets/aistudio/tcs_logo_cropped-removebg-preview_8334b4c5.png';
  const posterImg = getCoursePoster(course);
  const primaryActionLabel = course.isComingSoon ? 'Pre-Book Now' : 'Enroll Now';
  const isTrading = course.id === 'trading-mastery';

  // Build dynamic 7-step timeline milestones from this course's actual modules
  const mod = (idx: number) =>
    course.modules[Math.min(idx, Math.max(0, course.modules.length - 1))];

  const step1Mod = mod(0);
  const step2Mod = mod(1);
  const step3Mod = mod(2);
  const step4Mod = mod(3);
  const step5Mod = mod(4);
  const step6Mod = mod(5);

  const terminalRows = course.modules.slice(0, 4).map((m, idx) => ({
    ep: m.name,
    stack:
      m.title.length > 26
        ? m.title.slice(0, 24).toUpperCase() + '…'
        : m.title.toUpperCase(),
    accent: idx < 2,
  }));

  const positivePoints =
    course.comparisonPoints?.positive && course.comparisonPoints.positive.length > 0
      ? course.comparisonPoints.positive
      : [
          `Daily live, interactive sessions with ${course.hours} of guided training`,
          ...course.prerequisites.highlights.slice(0, 3),
          'Instant doubt resolution via Discord & 1-on-1 mentor reviews',
        ];

  const negativePoints =
    course.comparisonPoints?.negative && course.comparisonPoints.negative.length > 0
      ? course.comparisonPoints.negative
      : [
          'Disconnected pre-recorded playlists with outdated content',
          'Theory-only lectures without real production assignments',
          'Zero live doubt solving or mentor feedback',
          'No structured placement, portfolio, or assessment roadmap',
          'High fees with little practical hands-on accountability',
        ];

  // Radial hub 5 mastery cards built cleanly from course modules & tags
  const radialCards = [
    {
      icon: <Code2 className="w-4 h-4" />,
      title: step1Mod?.title.split(':')[0] || course.tags[0] || 'Core Foundations',
      desc: step1Mod?.desc || course.subtitle,
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      title: step2Mod?.title.split(':')[0] || course.tags[1] || 'Applied Engineering',
      desc: step2Mod?.desc || course.prerequisites.highlights[0] || course.subtitle,
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      title: step3Mod?.title.split(':')[0] || course.tags[2] || 'Production Architecture',
      desc: step3Mod?.desc || course.prerequisites.highlights[1] || course.subtitle,
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: step4Mod?.title.split(':')[0] || course.tags[3] || 'Scalable Systems',
      desc: step4Mod?.desc || course.prerequisites.highlights[2] || course.subtitle,
    },
    {
      icon: <Target className="w-4 h-4" />,
      title:
        course.tags[4] ||
        step5Mod?.title.split(':')[0] ||
        'Placement & Certification',
      desc:
        step5Mod?.desc ||
        '1-on-1 mentor reviews, interview readiness, and verified credential from TheCodeSpark.',
    },
  ];

  // 4-Column Track Cards built from course tags & modules
  const fourTrackCards = [
    {
      topBar: 'bg-[#E5E7EB]',
      icon: <Code2 className="w-5 h-5 text-[#062B1A]" />,
      title: course.tags[0] || step1Mod?.name || 'Core Foundations',
      desc: step1Mod?.desc || course.prerequisites.highlights[0] || course.subtitle,
    },
    {
      topBar: 'bg-[#9BFF6E]',
      icon: <Sparkles className="w-5 h-5 text-[#062B1A]" />,
      title: course.tags[1] || step2Mod?.name || 'Applied Workflows',
      desc: step2Mod?.desc || course.prerequisites.highlights[1] || course.subtitle,
    },
    {
      topBar: 'bg-[#062B1A]',
      icon: <Terminal className="w-5 h-5 text-[#062B1A]" />,
      title: course.tags[2] || step3Mod?.name || 'Deep Mastery',
      desc: step3Mod?.desc || course.prerequisites.highlights[2] || course.subtitle,
    },
    {
      topBar: 'bg-[#E5E7EB]',
      icon: <BookOpen className="w-5 h-5 text-[#062B1A]" />,
      title: course.tags[3] || 'Career & Certification',
      desc:
        step4Mod?.desc ||
        course.prerequisites.highlights[3] ||
        'Portfolio deployment, mock evaluations & verified industry certification.',
    },
  ];

  const mentors = [
    {
      name: 'Mr. Rohit Kashyap',
      role: 'Founder & CEO, TheCodeSpark Technologies Private Limited',
      quote: `${course.codeName} was engineered so learners never stay trapped in passive theory. You master every concept live with production builds, structured practice, and direct mentor feedback.`,
      avatar: rohitPhoto,
    },
    {
      name: 'Aadhya Verma',
      role: 'Lead Frontend & Design Systems Mentor',
      quote:
        'Every student builds responsive interfaces, production workflows, and clean architecture with direct line-by-line mentor reviews.',
      avatar: '/assets/aistudio/faculty_aadhya.png',
    },
    {
      name: 'Ishu Sharma',
      role: 'Senior Systems & Cloud Architect',
      quote:
        'From clean data pipelines and scalable backends to production deployment, we instill real engineering habits from week one.',
      avatar: '/assets/aistudio/faculty_ishu_sharma.png',
    },
    {
      name: 'Nirved Kumar',
      role: 'DSA & Quantitative Placement Coach',
      quote:
        'Consistent problem solving alongside timed assessments and mock reviews ensures learners step into interviews with total clarity.',
      avatar: '/assets/aistudio/faculty_nirved_kumar.png',
    },
  ];

  const activeMentor = mentors[activeMentorIdx];

  const testimonials = [
    {
      initials: 'MS',
      name: 'Mohd Siraj',
      role: 'Software Developer · TheCodeSpark Alumni',
      quote: `Joining ${course.codeName} replaced months of scattered searching with a clear daily routine. Having live classes plus instant Discord doubt support meant I never stayed stuck for more than ten minutes.`,
    },
    {
      initials: 'PN',
      name: 'Pragati Nayak',
      role: 'Junior Engineer · Cohort Graduate',
      quote:
        'Every assignment is reviewed with real industry standards. The combination of structured modules, practical projects, and mentor guidance made interviews feel structured and predictable.',
    },
  ];

  const faqItems: { category: Exclude<FaqCategory, 'All'>; q: string; a: string }[] = [
    {
      category: 'Curriculum & Stack',
      q: `What is included in ${course.codeName}?`,
      a: `${course.codeName} includes ${course.hours} of structured training across ${course.modulesCount} and ${course.questionsCount}. Key focus areas include ${course.tags.join(', ')}.`,
    },
    {
      category: 'Curriculum & Stack',
      q: 'Do I need prior experience before joining?',
      a: `This track is designed for ${course.prerequisites.level}. ${course.modules[0]?.title || 'Module 1'} begins from clear fundamentals before advancing to real-world production builds.`,
    },
    {
      category: 'Live Classes & Doubts',
      q: 'What is the class schedule and teaching language?',
      a: `Sessions run ${course.prerequisites.schedule || 'Mon–Sat live'} in ${course.prerequisites.language || 'Hinglish'} (${course.prerequisites.classType || 'Live Interactive Cohort'}), with full recordings available anytime.`,
    },
    {
      category: 'Live Classes & Doubts',
      q: 'How are doubts resolved during the cohort?',
      a: 'You get instant doubt resolution through our 24/7 Discord community, live class Q&A, and dedicated 1-on-1 mentor feedback sessions.',
    },
    {
      category: 'Projects & Cert',
      q: 'Are projects reviewed and will I receive a certificate?',
      a: `Yes. Every build is evaluated by senior mentors at TheCodeSpark Technologies Private Limited, and graduates earn a verified Certificate of Completion for ${course.codeName}.`,
    },
    {
      category: 'Pricing & Access',
      q: `What is the cohort fee for ${course.codeName}?`,
      a: `The fee is Rs.${course.price.toLocaleString('en-IN')} (+GST)${course.originalPrice ? ` with ${course.discountBadge || '50% OFF'} applied (original Rs.${course.originalPrice.toLocaleString('en-IN')})` : ''}.`,
    },
  ];

  const filteredFaqs =
    faqCategory === 'All'
      ? faqItems
      : faqItems.filter((f) => f.category === faqCategory);

  const visibleModules = showAllModules ? course.modules : course.modules.slice(0, 5);

  const handleClaimDiscount = () => {
    setIsDiscountModalOpen(false);
    onBuyNow(course);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#FFFFFF] text-[#0D1410] min-h-screen selection:bg-[#9BFF6E] selection:text-[#062B1A] font-sans overflow-x-clip">
        {/* Top Breadcrumb & Cohort Switcher */}
        <div className="bg-[#F8FAFC] border-b border-black/10 py-2.5 px-4 sticky top-18 z-30">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-xs text-[#4B5563] font-mono whitespace-nowrap">
              <button
                onClick={onNavigateHome}
                className="hover:text-[#062B1A] font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-black/30">/</span>
              <button
                onClick={onNavigateCourses}
                className="hover:text-[#062B1A] font-medium transition-colors cursor-pointer"
              >
                Courses
              </button>
              <span className="text-black/30">/</span>
              <span className="text-[#062B1A] font-bold">{course.codeName}</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-mono text-[#6B7280] uppercase whitespace-nowrap mr-1 hidden sm:inline">
                All Cohorts:
              </span>
              {COURSES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectAnotherCourse(c)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    c.id === course.id
                      ? 'bg-[#062B1A] text-[#9BFF6E] font-bold shadow-xs'
                      : 'bg-black/5 text-[#4B5563] hover:text-[#062B1A] hover:bg-black/10'
                  }`}
                >
                  {c.codeName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            1. HERO SECTION & TRUST SEAL STRIP (Frame 00:00)
            ========================================================================= */}
        <section className="relative bg-gradient-to-b from-white via-[#F9FCFA] to-[#E6F8EC] border-b border-black/10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14 lg:pt-16 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Hero Column */}
              <motion.div
                key={course.id + '-hero'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6 space-y-5"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5563] font-medium">
                  <span className="font-semibold text-[#062B1A]">
                    {course.isLive ? 'Live Cohort' : 'Upcoming Cohort'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>TheCodeSpark Technologies Private Limited</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.prerequisites.duration}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.08] [text-wrap:balance]">
                  {course.title}
                </h1>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl">
                  {course.subtitle}
                </p>

                {/* Price Row */}
                <div className="flex flex-wrap items-baseline gap-2.5 pt-1 font-mono tabular-nums">
                  <span className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
                    Cohort Fee
                  </span>
                  <span className="text-3xl font-black text-[#062B1A]">
                    Rs.{course.price.toLocaleString('en-IN')}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-[#9CA3AF] line-through">
                      Rs.{course.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs text-[#047857] font-semibold">
                    (+GST · {course.discountBadge || '50% Scholarship'})
                  </span>
                </div>

                {/* Dual CTA Buttons matching Frame 00:00 */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDiscountModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-2"
                  >
                    <span>{primaryActionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onRequestCallback}
                    className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#0D1410] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Contact us
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Hero Column: Animated Terminal + Poster Preview */}
              <motion.div
                key={course.id + '-visual'}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-3xl bg-white border border-black/10 p-4 sm:p-6 shadow-[0_20px_50px_-20px_rgba(6,43,26,0.16)]">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                    {/* Document / Poster Card */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="sm:col-span-5 rounded-2xl bg-[#F8FAFC] border border-black/10 p-3 flex flex-col justify-between"
                    >
                      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#ebeae6] border border-black/5">
                        <img
                          src={posterImg}
                          alt={course.title}
                          onError={(e) => {
                            e.currentTarget.src = rohitPhoto;
                          }}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-[#4B5563]">
                        <span className="font-bold text-[#062B1A] truncate">{course.codeName}</span>
                        <span className="text-[#059669] font-semibold shrink-0">
                          {course.isLive ? 'LIVE NOW' : 'PRE-BOOK'}
                        </span>
                      </div>
                    </motion.div>

                    {/* Dark Green Terminal Card with Scanline */}
                    <div className="sm:col-span-7 rounded-2xl bg-[#062B1A] text-white p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden">
                      <motion.div
                        aria-hidden="true"
                        animate={{ y: ['-100%', '220%'] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-[#9BFF6E]/10 to-transparent pointer-events-none"
                      />

                      <div className="flex items-center justify-between border-b border-white/15 pb-3 relative z-10">
                        <span className="text-[11px] text-[#9BFF6E] truncate">
                          {course.id} · lab
                        </span>
                        <span className="text-[10px] text-white/60 shrink-0">
                          {course.hours.toUpperCase()}
                        </span>
                      </div>

                      <div className="space-y-2.5 my-4 text-[11px] relative z-10">
                        {terminalRows.map((row, idx) => (
                          <motion.div
                            key={row.ep + idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.25 + idx * 0.08,
                              duration: 0.4,
                              ease: EASE_OUT_EXPO,
                            }}
                            className="flex items-center justify-between gap-2 py-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10"
                          >
                            <span className="text-white/75 shrink-0">{row.ep}</span>
                            <span
                              className={`truncate font-bold ${
                                row.accent ? 'text-[#9BFF6E]' : 'text-white'
                              }`}
                            >
                              {row.stack}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] relative z-10">
                        <span className="text-white/70 truncate">
                          {course.prerequisites.language || 'Hinglish'}
                        </span>
                        <button
                          onClick={() => onViewSyllabus(course)}
                          className="text-[#9BFF6E] hover:underline font-bold cursor-pointer shrink-0"
                        >
                          Syllabus →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Trust / Certification Seal Bar (Exact Frame 00:00 Bottom Strip) */}
          <div className="border-t border-black/10 bg-white/80 backdrop-blur-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-1 text-xs text-[#374151] leading-snug font-medium">
                  Built for learners who take real skills and career growth seriously
                </div>

                {[
                  {
                    badge: course.hours.split(' ')[0] || '200+',
                    title: course.hours,
                    sub: 'Guided live training',
                  },
                  {
                    badge: course.modulesCount.split(' ')[0] || '10+',
                    title: course.modulesCount,
                    sub: 'Structured roadmap',
                  },
                  {
                    badge: course.questionsCount.split(' ')[0] || '500+',
                    title: course.questionsCount,
                    sub: 'Hands-on mastery',
                  },
                  {
                    badge: 'CERT',
                    title: 'Verified Certificate',
                    sub: 'Industry credential',
                  },
                ].map((seal, idx) => (
                  <motion.div
                    key={seal.title + idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.08, duration: 0.4, ease: EASE_OUT_EXPO }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-full border-2 border-[#062B1A] flex items-center justify-center shrink-0 text-[10px] font-black font-mono text-[#062B1A] tabular-nums">
                      {seal.badge}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A140F]">{seal.title}</div>
                      <div className="text-[11px] text-[#6B7280]">{seal.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. PROBLEM VS SOLUTION COMPARISON (Frame 00:00 - 00:01)
            ========================================================================= */}
        <section className="py-20 sm:py-24 bg-white border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.1] [text-wrap:balance]">
                Your ambition is not the problem.
                <br />
                The scattered learning path around it is
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
                Tutorials, PDFs, and random playlists arrive every day from dozens of sources. Without guided mentorship and real builds, learners get stuck.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Without Cohort */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="rounded-2xl bg-[#F3F4F6] p-6 sm:p-8 flex flex-col justify-between space-y-8 border border-black/5"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-[#6B7280]">Without structured mentorship</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A140F] font-display mt-1">
                      Months of guessing &amp; rework
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {negativePoints.slice(0, 6).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.08 + idx * 0.05, duration: 0.35 }}
                        className="flex items-start gap-3 text-sm text-[#374151]"
                      >
                        <span className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center text-[11px] font-mono text-[#6B7280] shrink-0 tabular-nums mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#E5E7EB] p-4 text-xs sm:text-sm font-medium text-[#374151] leading-relaxed">
                  The result: slow progress, incomplete portfolios, and wasted months without clear feedback.
                </div>
              </motion.div>

              {/* Right Card: With Course (Deep Forest Green + Electric Lime Result Box) */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="rounded-2xl bg-[#062B1A] text-white p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xl"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-[#9BFF6E]/80">
                      With {course.codeName}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                      Industry mastery in {course.prerequisites.duration}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {positivePoints.slice(0, 5).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="w-6 h-6 rounded-full bg-[#9BFF6E]/20 border border-[#9BFF6E]/50 text-[#9BFF6E] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2, duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="rounded-xl bg-[#9BFF6E] text-[#062B1A] p-4 sm:p-5 text-xs sm:text-sm font-bold leading-relaxed"
                >
                  The result: faster skill mastery, real-world execution, mentor-reviewed builds, and focused preparation for top outcomes.
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. 7-STEP SCROLL-DRAWN WINDING WORKFLOW ON GRID CANVAS (Frame 00:01 - 00:05)
            ========================================================================= */}
        <section
          ref={timelineRef}
          className="py-20 sm:py-24 bg-[#FAFBFB] border-b border-black/10 relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(6, 43, 26, 0.08) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="text-center max-w-2xl mx-auto mb-16 space-y-3"
            >
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight [text-wrap:balance]">
                Start with one real cohort
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                No scattered playlists, no outdated slides, and no guesswork. Seven clear milestones inside {course.codeName} from fundamentals to production readiness.
              </p>
            </motion.div>

            {/* Winding SVG Path Connecting All 7 Steps */}
            <div className="relative space-y-12 lg:space-y-16">
              <svg
                aria-hidden="true"
                viewBox="0 0 120 1400"
                preserveAspectRatio="none"
                className="hidden lg:block absolute left-1/2 top-10 bottom-16 w-24 -translate-x-1/2 h-[calc(100%-6rem)] pointer-events-none z-0"
              >
                <path
                  d="M 60 0 C 18 110, 18 140, 60 220 C 102 300, 102 340, 60 440 C 18 540, 18 580, 60 670 C 102 760, 102 800, 60 890 C 18 980, 18 1020, 60 1120 C 102 1220, 90 1280, 60 1400"
                  fill="none"
                  stroke="rgba(6, 43, 26, 0.16)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <motion.path
                  d="M 60 0 C 18 110, 18 140, 60 220 C 102 300, 102 340, 60 440 C 18 540, 18 580, 60 670 C 102 760, 102 800, 60 890 C 18 980, 18 1020, 60 1120 C 102 1220, 90 1280, 60 1400"
                  fill="none"
                  stroke="#6EE755"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{ pathLength: timelineProgress }}
                />
              </svg>

              {/* STEP 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-[#9BFF6E]/60 p-5 shadow-[0_14px_48px_-12px_rgba(155,255,110,0.65)] space-y-4 relative">
                    <div className="grid grid-cols-3 gap-2.5 relative">
                      <div className="rounded-xl bg-[#F3F4F6] p-3 text-center space-y-1.5 border border-black/5">
                        <Code2 className="w-5 h-5 mx-auto text-[#4B5563]" />
                        <div className="text-[10px] font-mono text-[#374151] truncate">
                          {course.tags[0] || 'Foundations'}
                        </div>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="rounded-xl bg-[#EAF9ED] p-3 text-center space-y-1.5 border border-[#059669]/35 relative"
                      >
                        <CheckCircle2 className="w-5 h-5 mx-auto text-[#059669]" />
                        <div className="text-[10px] font-mono font-bold text-[#062B1A] truncate">
                          {step1Mod?.name || 'STEP_01'}
                        </div>
                        <motion.div
                          animate={{ x: [6, 0, 6], y: [6, 0, 6] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-white shadow-md border border-black/10 flex items-center justify-center text-[#062B1A]"
                        >
                          <MousePointer2 className="w-3 h-3 fill-[#062B1A]" />
                        </motion.div>
                      </motion.div>
                      <div className="rounded-xl bg-[#F3F4F6] p-3 text-center space-y-1.5 border border-black/5">
                        <Layers className="w-5 h-5 mx-auto text-[#4B5563]" />
                        <div className="text-[10px] font-mono text-[#374151] truncate">
                          {course.tags[1] || 'Core Lab'}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 1 · {step1Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step1Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step1Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-[0_0_20px_rgba(155,255,110,0.65)] flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    01
                  </motion.div>
                </div>
                <div className="hidden lg:block lg:col-span-5" />
              </div>

              {/* STEP 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="hidden lg:block lg:col-span-5" />
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    02
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-lg space-y-4">
                    <div className="rounded-xl bg-[#062B1A] text-white p-4 font-mono text-[11px] space-y-2 relative overflow-hidden">
                      <motion.div
                        aria-hidden="true"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-[#9BFF6E]/10 to-transparent pointer-events-none"
                      />
                      <div className="flex items-center justify-between text-white/60 border-b border-white/10 pb-2">
                        <span>{step2Mod?.name}</span>
                        <span className="text-[#9BFF6E]">{course.codeName} LAB</span>
                      </div>
                      {(step2Mod?.topics.slice(0, 3) || []).map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center justify-between gap-2">
                          <span className="text-white/75 truncate">{t}</span>
                          {tIdx === 0 && (
                            <span className="px-2 py-0.5 rounded bg-[#9BFF6E] text-[#062B1A] font-bold shrink-0">
                              ACTIVE
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 2 · {step2Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step2Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step2Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* STEP 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-lg space-y-4">
                    <div className="rounded-xl bg-[#F8FAFC] border border-black/10 p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B7280]">MODULE</span>
                        <span className="px-2 py-0.5 rounded bg-[#9BFF6E] text-[#062B1A] font-bold">
                          {step3Mod?.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3 text-xs font-mono">
                        <span className="text-[#6B7280] shrink-0">CORE FOCUS</span>
                        <span className="font-bold text-[#0A140F] truncate">
                          {step3Mod?.topics[0] || step3Mod?.title}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3 text-xs font-mono">
                        <span className="text-[#6B7280] shrink-0">DELIVERABLE</span>
                        <span className="font-bold text-[#059669] truncate">
                          {step3Mod?.topics[1] || 'Hands-On Lab Build'}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 3 · {step3Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step3Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step3Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    03
                  </motion.div>
                </div>
                <div className="hidden lg:block lg:col-span-5" />
              </div>

              {/* STEP 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="hidden lg:block lg:col-span-5" />
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    04
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-lg space-y-4">
                    <div className="rounded-xl bg-[#062B1A] text-white p-4 font-mono text-[11px] space-y-2 relative overflow-hidden">
                      <motion.div
                        aria-hidden="true"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3.6, repeat: Infinity, ease: 'linear', delay: 1 }}
                        className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-[#9BFF6E]/10 to-transparent pointer-events-none"
                      />
                      <div className="flex items-center justify-between text-white/60 border-b border-white/10 pb-2">
                        <span>{step4Mod?.name}</span>
                        <span className="text-[#9BFF6E]">PRODUCTION</span>
                      </div>
                      {(step4Mod?.topics.slice(0, 3) || []).map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center justify-between gap-2">
                          <span className="text-white/75 truncate">{t}</span>
                          {tIdx === 0 && (
                            <span className="px-2 py-0.5 rounded bg-[#9BFF6E] text-[#062B1A] font-bold shrink-0">
                              VERIFIED
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 4 · {step4Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step4Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step4Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* STEP 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-[#9BFF6E]/60 p-5 shadow-[0_14px_48px_-12px_rgba(155,255,110,0.65)] space-y-4">
                    <div className="rounded-xl bg-[#EAF9ED] border border-[#059669]/25 p-4 space-y-2">
                      <div className="text-xs font-mono font-bold text-[#062B1A]">
                        {step5Mod?.name} · {course.questionsCount.toUpperCase()}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#062B1A]">
                        {(step5Mod?.topics.slice(0, 4) || course.tags.slice(0, 4)).map((t, i) => (
                          <div key={i} className="bg-white rounded-lg px-2.5 py-1.5 border border-black/5 truncate">
                            ✓ {t}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 5 · {step5Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step5Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step5Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-[0_0_20px_rgba(155,255,110,0.65)] flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    05
                  </motion.div>
                </div>
                <div className="hidden lg:block lg:col-span-5" />
              </div>

              {/* STEP 6 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="hidden lg:block lg:col-span-5" />
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-11 h-11 rounded-full bg-[#062B1A] text-[#9BFF6E] border-4 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold z-10"
                  >
                    06
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -4 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-lg space-y-4">
                    <div className="rounded-xl bg-[#F8FAFC] border border-black/10 p-4 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-mono font-bold text-[#0A140F] truncate">
                          {course.id}_capstone.review
                        </div>
                        <div className="text-[11px] font-mono text-[#059669]">
                          MENTOR CODE &amp; RUBRIC CHECK
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-black/10 text-[11px] font-semibold text-[#4B5563]">
                          Feedback
                        </span>
                        <motion.span
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                          className="px-2.5 py-1 rounded-lg bg-[#062B1A] text-[#9BFF6E] text-[11px] font-bold shadow-sm"
                        >
                          ✓ Approved
                        </motion.span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#059669] font-bold">
                        Step 6 · {step6Mod?.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A140F] font-display">
                        {step6Mod?.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{step6Mod?.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* STEP 7 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="max-w-md mx-auto text-center space-y-4 pt-2 relative z-10"
              >
                <div className="rounded-2xl bg-white border border-black/10 p-4 shadow-md grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl bg-[#F3F4F6] p-3 text-center">
                    <div className="text-xs font-bold text-[#374151]">
                      {isTrading ? 'Trade Live' : 'Build Apps'}
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-xl bg-[#9BFF6E] p-3 text-center shadow-xs"
                  >
                    <div className="text-xs font-bold text-[#062B1A]">Get Certified</div>
                  </motion.div>
                  <div className="rounded-xl bg-[#F3F4F6] p-3 text-center">
                    <div className="text-xs font-bold text-[#374151]">
                      {isTrading ? 'Automate' : 'Get Placed'}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#059669] font-bold">Step 7</span>
                  <h3 className="text-lg font-bold text-[#0A140F] font-display">
                    Graduate With Verified Proof &amp; Career Support
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Complete {course.codeName} with mentor-reviewed projects, {course.questionsCount}, interview prep, and verified certification.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Workflow Bottom CTAs */}
            <div className="text-center mt-12 space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDiscountModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer"
                >
                  {primaryActionLabel}
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRequestCallback}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#0D1410] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Contact us
                </motion.button>
              </div>
              <p className="text-xs text-[#6B7280]">
                One cohort. Complete {course.codeName} roadmap. Every milestone reviewed by a mentor.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. CASE STUDY / STAT BANNER (DARK GREEN CARD — Frame 00:05)
            ========================================================================= */}
        <section className="py-14 bg-white border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-3xl border border-black/10 bg-[#F8FAFC] p-3 sm:p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch shadow-sm"
            >
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="text-xs font-mono font-bold text-[#059669]">
                  {course.comingSoonText || 'Admissions Open'}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A140F] font-display leading-snug">
                    {course.codeName} structured engineering depth
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    {course.hours} of training, {course.modulesCount}, and {course.questionsCount} in {course.prerequisites.language || 'Hinglish'}.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('ignite-curriculum')}
                  className="text-xs font-bold text-[#062B1A] hover:underline inline-flex items-center gap-1 cursor-pointer w-fit"
                >
                  <span>Explore {course.modulesCount}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="md:col-span-7 rounded-2xl bg-[#062B1A] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="text-5xl sm:text-7xl font-black font-display tracking-tight text-[#9BFF6E] tabular-nums"
                >
                  {course.hours}
                </motion.div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15 font-mono tabular-nums">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {course.modulesCount}
                    </div>
                    <div className="text-xs text-white/70">Structured Curriculum</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {course.questionsCount}
                    </div>
                    <div className="text-xs text-white/70">Practical Drills</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            5. RADIAL HUB SECTION WITH SCROLL OUTWARD EXPANSION (Frame 00:06 - 00:08)
            ========================================================================= */}
        <section
          ref={radialHubRef}
          className="py-20 sm:py-28 bg-[#DFE3E8] border-b border-black/10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-40">
              <motion.div
                style={{ x: topLeftX, y: topLeftY, scale: hubCardScale, opacity: hubCardOpacity }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#062B1A] text-white p-6 space-y-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#9BFF6E]/15 text-[#9BFF6E] flex items-center justify-center">
                  {radialCards[0].icon}
                </div>
                <h3 className="text-base font-bold font-display">{radialCards[0].title}</h3>
                <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
                  {radialCards[0].desc}
                </p>
              </motion.div>

              <motion.div
                style={{ x: topRightX, y: topRightY, scale: hubCardScale, opacity: hubCardOpacity }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#062B1A] text-white p-6 space-y-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#9BFF6E]/15 text-[#9BFF6E] flex items-center justify-center">
                  {radialCards[1].icon}
                </div>
                <h3 className="text-base font-bold font-display">{radialCards[1].title}</h3>
                <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
                  {radialCards[1].desc}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <motion.div
                style={{ x: midLeftX, scale: hubCardScale, opacity: hubCardOpacity }}
                whileHover={{ y: -4 }}
                className="lg:col-span-3 rounded-2xl bg-[#062B1A] text-white p-6 space-y-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#9BFF6E]/15 text-[#9BFF6E] flex items-center justify-center">
                  {radialCards[2].icon}
                </div>
                <h3 className="text-base font-bold font-display">{radialCards[2].title}</h3>
                <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
                  {radialCards[2].desc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6 text-center space-y-5 py-4 px-2 relative z-10"
              >
                <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.08] [text-wrap:balance]">
                  {course.codeName}
                  <br />
                  can help you master...
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDiscountModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {primaryActionLabel}
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onViewSyllabus(course)}
                    className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/10 text-[#0D1410] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    View Syllabus
                  </motion.button>
                </div>
                <p className="text-xs text-[#4B5563]">
                  One structured cohort. {course.hours}. Every build reviewed by mentors.
                </p>
              </motion.div>

              <motion.div
                style={{ x: midRightX, scale: hubCardScale, opacity: hubCardOpacity }}
                whileHover={{ y: -4 }}
                className="lg:col-span-3 rounded-2xl bg-[#062B1A] text-white p-6 space-y-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#9BFF6E]/15 text-[#9BFF6E] flex items-center justify-center">
                  {radialCards[3].icon}
                </div>
                <h3 className="text-base font-bold font-display">{radialCards[3].title}</h3>
                <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
                  {radialCards[3].desc}
                </p>
              </motion.div>
            </div>

            <motion.div
              style={{ y: bottomY, scale: hubCardScale, opacity: hubCardOpacity }}
              whileHover={{ y: -4 }}
              className="max-w-sm mx-auto"
            >
              <div className="rounded-2xl bg-[#062B1A] text-white p-6 space-y-2.5 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-[#9BFF6E]/15 text-[#9BFF6E] flex items-center justify-center">
                  {radialCards[4].icon}
                </div>
                <h3 className="text-base font-bold font-display">{radialCards[4].title}</h3>
                <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
                  {radialCards[4].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            6. BENTO FEATURE GRID ("Why students choose {course.codeName}" — Frame 00:08 - 00:10)
            ========================================================================= */}
        <section className="py-20 sm:py-24 bg-[#F7F8FA] border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight [text-wrap:balance]"
            >
              Why learners
              <br />
              choose {course.codeName}
            </motion.h2>

            {/* Bento Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-semibold text-[#059669] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Complete Ecosystem</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A140F] font-display">
                  One cohort for the whole journey
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Designed by TheCodeSpark engineering leads, {course.codeName} connects fundamentals, applied builds, and interview readiness in one structured system.
                </p>
              </div>

              <div className="lg:col-span-7 rounded-2xl bg-[#F8FAFC] border border-black/5 p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center relative">
                <div className="rounded-xl bg-white border border-black/10 p-3.5 space-y-2 text-xs font-mono">
                  <div className="text-[10px] text-[#6B7280] uppercase">Foundations</div>
                  <div className="px-2 py-1 rounded bg-[#EAF9ED] text-[#062B1A] font-bold truncate">
                    {course.tags[0] || 'Core Track'}
                  </div>
                  <div className="px-2 py-1 rounded bg-[#F3F4F6] text-[#374151] truncate">
                    {course.tags[1] || 'Labs'}
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-xl bg-[#062B1A] text-white p-4 text-center space-y-2 shadow-md"
                >
                  <div className="text-sm font-black font-display text-[#9BFF6E]">
                    {course.codeName}
                  </div>
                  <div className="text-[10px] font-mono text-white/80 space-y-1">
                    <div>● Live Sessions</div>
                    <div>● Real Projects</div>
                    <div>● Code Reviews</div>
                  </div>
                </motion.div>

                <div className="rounded-xl bg-[#0D1410] text-white p-3.5 text-[10px] font-mono space-y-1.5">
                  <div className="text-[#9BFF6E]">CAREER_OUTCOME</div>
                  <div className="text-white/75 truncate">{course.hours}</div>
                  <div className="text-white/75 truncate">{course.modulesCount}</div>
                  <div className="text-[#9BFF6E]">VERIFIED ✓</div>
                </div>
              </div>
            </motion.div>

            {/* Bento Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="rounded-3xl bg-[#EAF7EE] border border-[#059669]/20 p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-[#059669] flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>24/7 Doubt Support</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A140F] font-display">
                    Faster debugging &amp; clarity
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    Resolve doubts in minutes via our active Discord community and live mentor sessions instead of losing days alone.
                  </p>
                </div>

                <div className="space-y-2">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-white border border-black/10 p-3 flex items-center justify-between text-xs shadow-xs"
                  >
                    <span className="font-mono font-semibold text-[#0A140F]">#discord-doubt-desk</span>
                    <span className="text-[#059669] font-mono font-bold">Active 24/7</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-white border border-black/10 p-3 flex items-center justify-between text-xs shadow-xs"
                  >
                    <span className="font-mono font-semibold text-[#0A140F]">1-on-1 Mentor Guidance</span>
                    <span className="text-[#062B1A] font-mono font-bold">Included</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="rounded-3xl bg-white border border-black/10 p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-[#059669] flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    <span>Focus</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A140F] font-display">
                    Learners focus on building
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    Spend your energy shipping real-world deliverables and practicing {course.questionsCount} instead of hunting for playlists.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl bg-[#F8FAFC] border border-black/10 p-4 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-mono font-bold text-[#0A140F] truncate">
                      {course.id}_portfolio.build
                    </div>
                    <div className="text-[11px] text-[#6B7280] font-mono truncate">
                      {course.tags.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#062B1A] text-[#9BFF6E] text-xs font-bold shrink-0">
                    ✓ Verified
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Bento Row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-semibold text-[#059669] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mentorship</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A140F] font-display">
                  Guided evaluation from day one
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Work alongside experienced mentors from TheCodeSpark Technologies Private Limited who review your deliverables and career readiness.
                </p>
              </div>

              <div className="lg:col-span-7 rounded-2xl bg-[#F8FAFC] border border-black/5 p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center font-mono">
                <div className="rounded-xl bg-[#062B1A] text-white p-3.5 text-[11px]">
                  <div className="text-[#9BFF6E] font-bold">YOUR WORK</div>
                  <div className="text-white/70 mt-1 truncate">{course.tags[0] || 'Projects'}</div>
                </div>
                <div className="rounded-xl bg-white border border-black/10 p-3.5 text-[11px]">
                  <div className="font-bold text-[#062B1A]">MENTOR REVIEW</div>
                  <div className="text-[#059669] mt-1">1-on-1 Feedback</div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-xl bg-[#9BFF6E] text-[#062B1A] p-3.5 text-[11px] font-bold"
                >
                  <div>CAREER READY</div>
                  <div className="mt-1">Portfolio + Cert ✓</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            7. "You build the [skills]" DARK BANNER + EDITORIAL PHOTO CARD (Frame 00:10 - 00:11)
            ========================================================================= */}
        <section className="py-16 bg-[#062B1A] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
                  You build the{' '}
                  <motion.span
                    initial={{ scale: 0.82, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    className="bg-[#9BFF6E] text-[#062B1A] px-3 py-0.5 rounded-xl inline-block"
                  >
                    {isTrading ? 'edge' : 'skills'}
                  </motion.span>
                </h2>
                <p className="text-sm text-white/75 leading-relaxed">
                  {course.codeName} is built to take you through a complete practical transformation — not give you another folder of passive video recordings.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDiscountModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold transition-colors cursor-pointer"
                >
                  {primaryActionLabel}
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRequestCallback}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] text-[#062B1A] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Contact us
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-white text-[#0A140F] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl"
            >
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-4">
                <h3 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight">
                  Keep your ambition.
                  <br />
                  Remove the confusion.
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {course.prerequisites.schedule || 'Live classes'} in{' '}
                  {course.prerequisites.language || 'Hinglish'}. Structured{' '}
                  {course.prerequisites.duration} roadmap with mentor code reviews and verified certification.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-[#062B1A] font-semibold">
                  <span>{course.prerequisites.duration}</span>
                  <span>·</span>
                  <span>{course.prerequisites.language || 'Hinglish'}</span>
                  <span>·</span>
                  <span>{course.hours}</span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 bg-[#EAF7EE] flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#062B1A]/15 bg-[#062B1A]"
                >
                  <img
                    src={posterImg}
                    alt={course.title}
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            8. 4-COLUMN DOMAIN TRACK CARDS (Frame 00:11 - 00:12)
            ========================================================================= */}
        <section className="py-20 bg-[#F7F8FA] border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
              Where {course.codeName} prepares you
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {fourTrackCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.45, ease: EASE_OUT_EXPO }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white border border-black/10 overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-md"
                >
                  <div className={`h-2 w-full ${card.topBar}`} />
                  <div className="p-6 space-y-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[#0A140F] font-display">{card.title}</h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-4">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. 3-COLUMN ELEVATED CENTER COMPARISON TABLE (Frame 00:12 - 00:13)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                How {course.codeName} compares
              </h2>
              <p className="text-sm text-[#4B5563]">
                Everything required for real mastery in one structured cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch rounded-3xl overflow-hidden border border-black/10 shadow-sm">
              <div className="bg-[#F8FAFC] p-6 sm:p-8 space-y-5 border-b md:border-b-0 md:border-r border-black/10">
                <div className="text-sm font-bold text-[#4B5563] font-display pb-3 border-b border-black/10">
                  YouTube / Self-Study
                </div>
                <div className="space-y-4 text-xs text-[#4B5563]">
                  {negativePoints.slice(0, 5).map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="bg-[#062B1A] text-white p-6 sm:p-8 space-y-5 relative shadow-2xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-base font-black text-[#9BFF6E] font-display">
                    {course.codeName} (TheCodeSpark)
                  </span>
                  <span className="text-[10px] font-mono text-[#9BFF6E] font-bold">
                    {course.isLive ? 'LIVE COHORT' : 'FLAGSHIP'}
                  </span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-white/90">
                  {positivePoints.slice(0, 5).map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#9BFF6E] text-[#062B1A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="bg-[#F8FAFC] p-6 sm:p-8 space-y-5 border-t md:border-t-0 md:border-l border-black/10">
                <div className="text-sm font-bold text-[#4B5563] font-display pb-3 border-b border-black/10">
                  Generic Bootcamps
                </div>
                <div className="space-y-4 text-xs text-[#4B5563]">
                  {[
                    'Mostly pre-recorded lectures at high fees',
                    'Limited practical or production architecture depth',
                    'Slow curriculum updates with outdated stacks',
                    'Purely academic toy examples',
                    'Little to no direct mentor access',
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDiscountModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer"
              >
                {primaryActionLabel}
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onViewSyllabus(course)}
                className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#0D1410] text-sm font-semibold transition-colors cursor-pointer"
              >
                View Full Syllabus
              </motion.button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. STRUCTURED CURRICULUM (Episodes + Products/DSA/Capstones Tabs) & CERTIFICATE
            ========================================================================= */}
        <section id="ignite-curriculum" className="py-20 bg-[#F7F8FA] border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                {course.modulesCount}. Zero Fluff.
              </h2>
              <p className="text-sm text-[#4B5563]">
                Every module inside {course.codeName} is structured for live hands-on mastery and portfolio execution.
              </p>

              {/* Track Switcher Tabs for courses with Products / DSA / Capstones (IGNITE 2.0 & 3.0) */}
              {(Boolean(course.productsBreakdown) ||
                Boolean(course.dsaJavaCohort) ||
                Boolean(course.capstonesBreakdown)) && (
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => setCurriculumTab('episodes')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                      curriculumTab === 'episodes'
                        ? 'bg-[#062B1A] text-[#9BFF6E] shadow-xs'
                        : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>
                      {course.capstonesBreakdown
                        ? `${course.modules.length} Analytics Phases`
                        : `${course.modules.length} Master Episodes`}
                    </span>
                  </button>

                  {course.capstonesBreakdown && (
                    <button
                      onClick={() => setCurriculumTab('capstones')}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                        curriculumTab === 'capstones'
                          ? 'bg-[#062B1A] text-[#9BFF6E] shadow-xs'
                          : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>6 Industry Capstones</span>
                    </button>
                  )}

                  {course.productsBreakdown && (
                    <button
                      onClick={() => setCurriculumTab('products')}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                        curriculumTab === 'products'
                          ? 'bg-[#062B1A] text-[#9BFF6E] shadow-xs'
                          : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Products: Loveable Ai + Pixxo</span>
                    </button>
                  )}

                  {course.dsaJavaCohort && (
                    <button
                      onClick={() => setCurriculumTab('dsa')}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                        curriculumTab === 'dsa'
                          ? 'bg-[#062B1A] text-[#9BFF6E] shadow-xs'
                          : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>DSA in Java · 350+ Problems</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sticky Summary Card */}
              <div className="lg:col-span-4 rounded-3xl bg-[#062B1A] text-white p-6 sm:p-7 space-y-6 lg:sticky lg:top-28">
                <div>
                  <div className="text-xs font-mono text-[#9BFF6E] font-bold">COHORT OVERVIEW</div>
                  <h3 className="text-xl font-bold font-display mt-1">Course Prerequisites</h3>
                  <p className="text-xs text-white/75 mt-1">
                    Level: {course.prerequisites.level}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono tabular-nums">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-white/60 text-[10px]">DURATION</div>
                    <div className="font-bold text-[#9BFF6E] mt-0.5">
                      {course.prerequisites.duration}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-white/60 text-[10px]">LANGUAGE</div>
                    <div className="font-bold text-white mt-0.5">
                      {course.prerequisites.language || 'Hinglish'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/15">
                  {course.prerequisites.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#9BFF6E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onViewSyllabus(course)}
                  className="w-full py-3 px-4 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Syllabus in Detail</span>
                </motion.button>
              </div>

              {/* Right Column: Modules / Products / DSA / Capstones */}
              <div className="lg:col-span-8 space-y-3">
                {curriculumTab === 'episodes' && (
                  <>
                    {visibleModules.map((m) => {
                      const isOpen = openModuleId === m.id;
                      return (
                        <div
                          key={m.id}
                          className="rounded-2xl bg-white border border-black/10 overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => setOpenModuleId(isOpen ? null : m.id)}
                            className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                          >
                            <div className="space-y-1">
                              <span className="text-[11px] font-mono font-bold text-[#059669] block">
                                {m.name}
                              </span>
                              <h4 className="text-base sm:text-lg font-bold text-[#0A140F] font-display">
                                {m.title}
                              </h4>
                              <p className="text-xs text-[#4B5563] leading-relaxed">{m.desc}</p>
                            </div>
                            <span className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#062B1A] flex items-center justify-center shrink-0 mt-1">
                              {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                                className="overflow-hidden border-t border-black/10 bg-[#FAFBFB]"
                              >
                                <div className="px-5 pb-5 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {m.topics.map((topic, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="flex items-start gap-2 text-xs text-[#374151]"
                                    >
                                      <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}

                    {course.modules.length > 5 && (
                      <div className="pt-2 text-center">
                        <button
                          onClick={() => setShowAllModules(!showAllModules)}
                          className="px-6 py-2.5 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#062B1A] text-xs font-bold transition-all cursor-pointer"
                        >
                          {showAllModules
                            ? 'Show Fewer Modules'
                            : `Show All ${course.modules.length} Modules (+${
                                course.modules.length - 5
                              } More)`}
                        </button>
                      </div>
                    )}
                  </>
                )}

                {curriculumTab === 'products' && course.productsBreakdown && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.productsBreakdown.map((prod, idx) => {
                        const isSel = activeProductIndex === idx;
                        return (
                          <button
                            key={prod.id}
                            onClick={() => setActiveProductIndex(idx)}
                            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSel
                                ? 'bg-[#062B1A] text-white border-[#062B1A] shadow-md'
                                : 'bg-white border-black/10 text-[#0A140F] hover:border-black/25'
                            }`}
                          >
                            <span
                              className={`text-[10px] font-mono font-bold block ${
                                isSel ? 'text-[#9BFF6E]' : 'text-[#059669]'
                              }`}
                            >
                              {prod.badge}
                            </span>
                            <h4 className="text-base font-bold font-display mt-0.5">{prod.name}</h4>
                            <span
                              className={`text-[11px] block mt-0.5 ${
                                isSel ? 'text-white/75' : 'text-[#6B7280]'
                              }`}
                            >
                              11 Architecture Modules
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {(() => {
                      const activeProd = course.productsBreakdown[activeProductIndex];
                      return (
                        <div className="space-y-4">
                          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-4">
                            <div>
                              <span className="text-[11px] font-mono font-bold text-[#059669]">
                                {activeProd.badge}
                              </span>
                              <h3 className="text-xl font-black text-[#0A140F] font-display mt-1">
                                {activeProd.name} — {activeProd.tagline}
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                                {activeProd.description}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {activeProd.architectureHighlights.map((arch, idx) => (
                                <div
                                  key={idx}
                                  className="p-3 rounded-xl bg-[#F8FAFC] border border-black/10 space-y-1"
                                >
                                  <div className="text-xs font-bold text-[#0A140F] flex items-center gap-1.5">
                                    {idx % 2 === 0 ? (
                                      <Bot className="w-3.5 h-3.5 text-[#059669]" />
                                    ) : (
                                      <Gauge className="w-3.5 h-3.5 text-[#059669]" />
                                    )}
                                    <span>{arch.title}</span>
                                  </div>
                                  <p className="text-[11px] text-[#4B5563] leading-snug">
                                    {arch.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            {activeProd.modules.map((pm) => (
                              <div
                                key={pm.number}
                                className="p-4 rounded-xl bg-white border border-black/10 space-y-2"
                              >
                                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0A140F]">
                                  <span>
                                    Section {pm.number}: {pm.title}
                                  </span>
                                  <span className="text-[#059669]">{pm.items.length} topics</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 text-[11px] text-[#4B5563]">
                                  {pm.items.slice(0, 4).map((it, i) => (
                                    <span key={i} className="bg-[#F3F4F6] px-2 py-0.5 rounded">
                                      {it}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {curriculumTab === 'dsa' && course.dsaJavaCohort && (
                  <div className="space-y-4">
                    <div className="p-6 rounded-3xl bg-[#062B1A] text-white space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#9BFF6E] font-bold">
                          COHORT 3.0 · 350+ PLACEMENT PROBLEMS
                        </span>
                        <h3 className="text-xl font-black font-display mt-0.5">
                          {course.dsaJavaCohort.title}
                        </h3>
                        <p className="text-xs text-white/75 mt-1">
                          {course.dsaJavaCohort.subtitle}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.dsaJavaCohort.overviewHighlights.slice(0, 6).map((hl, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs flex items-start gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {course.dsaJavaCohort.topics.slice(0, 8).map((top) => (
                      <div
                        key={top.id}
                        className="p-4 rounded-2xl bg-white border border-black/10 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#0A140F] font-display">
                            {top.badge} · {top.title}
                          </span>
                          <span className="text-[11px] font-mono text-[#059669] font-bold">
                            {top.problems.length} problems
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 text-[11px] text-[#4B5563]">
                          {top.concepts.map((c, i) => (
                            <span key={i} className="bg-[#F3F4F6] px-2 py-0.5 rounded">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {curriculumTab === 'capstones' && course.capstonesBreakdown && (
                  <div className="space-y-4">
                    {course.capstonesBreakdown.map((cap, index) => (
                      <div
                        key={cap.id}
                        className="p-5 sm:p-6 rounded-2xl bg-white border border-black/10 space-y-3"
                      >
                        <div className="text-[11px] font-mono font-bold text-[#059669]">
                          Capstone #{index + 1} · {cap.domain}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0A140F] font-display">
                          {cap.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                          {cap.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-black/5">
                          {cap.deliverables.map((d, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[#374151]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Certificate Showcase Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono font-bold text-[#059669]">VERIFIED CREDENTIAL</div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A140F] font-display">
                  Earn Certificate Of Completion
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#4B5563]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Showcase mentor-reviewed production projects and real deliverables</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Evaluated by senior mentors at TheCodeSpark Technologies Private Limited</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Shareable verified credential ID for recruiters and LinkedIn</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl bg-[#062B1A] text-white p-6 sm:p-8 border-4 border-[#EAF7EE] shadow-xl space-y-5 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={uploadedLogo}
                        onError={(e) => {
                          e.currentTarget.src = brandLogo;
                        }}
                        alt="TheCodeSpark Logo"
                        className="h-7 w-auto object-contain"
                      />
                      <span className="text-xs font-bold tracking-tight">
                        TheCodeSpark Technologies Pvt. Ltd.
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#9BFF6E] font-bold">
                      {course.codeName} COHORT
                    </span>
                  </div>

                  <div className="space-y-1.5 py-2">
                    <div className="text-2xl font-black font-display tracking-wide text-[#9BFF6E]">
                      CERTIFICATE
                    </div>
                    <div className="text-xs text-white/75">is issued to certify that</div>
                    <div className="text-xl font-extrabold text-white font-display pt-1">
                      Aarav Sharma
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed max-w-md">
                      has successfully completed{' '}
                      <span className="font-semibold text-white">{course.title}</span> with practical mastery and excellence.
                    </p>
                  </div>

                  <div className="flex items-end justify-between pt-3 border-t border-white/15 text-xs">
                    <div>
                      <div className="font-bold">Rohit Kashyap</div>
                      <div className="text-[10px] text-white/70 font-mono">
                        Founder &amp; CEO, TheCodeSpark
                      </div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="text-[#9BFF6E] font-bold text-[11px]">
                        Verified #TCS-{course.codeName.replace(/\s+/g, '')}
                      </div>
                      <div className="text-[10px] text-white/70">Authorized Credential</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            11. DARK FOREST GREEN AUTHORITY CARD WITH MENTOR SWITCH ANIMATION (Frame 00:13 - 00:14)
            ========================================================================= */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-[#062B1A] text-white p-8 sm:p-12 space-y-8 shadow-2xl"
            >
              <h2 className="text-2xl sm:text-4xl font-black text-center font-display tracking-tight max-w-2xl mx-auto [text-wrap:balance]">
                Built by mentors who train engineers for top product companies
              </h2>

              <div className="rounded-2xl bg-white text-[#0A140F] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMentor.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.22 }}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={activeMentor.avatar}
                        onError={(e) => {
                          e.currentTarget.src = rohitPhoto;
                        }}
                        alt={activeMentor.name}
                        className="w-12 h-12 rounded-full object-cover border border-black/10"
                      />
                      <div>
                        <div className="text-sm font-bold text-[#0A140F]">{activeMentor.name}</div>
                        <div className="text-xs text-[#6B7280]">{activeMentor.role}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center gap-2">
                    {mentors.map((m, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveMentorIdx(idx)}
                        aria-label={`Select mentor ${m.name}`}
                        className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === activeMentorIdx
                            ? 'border-[#062B1A] scale-110 ring-2 ring-[#9BFF6E]'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={m.avatar}
                          onError={(e) => {
                            e.currentTarget.src = rohitPhoto;
                          }}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeMentor.quote}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm sm:text-base text-[#374151] leading-relaxed"
                  >
                    “{activeMentor.quote}”
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2 text-center">
                {[
                  { badge: course.hours.split(' ')[0] || '200+', label: 'Training Hours' },
                  { badge: course.modulesCount.split(' ')[0] || '8+', label: 'Core Modules' },
                  { badge: course.questionsCount.split(' ')[0] || '500+', label: 'Drills & Labs' },
                  { badge: 'LIVE', label: 'Discord Support' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full border border-[#9BFF6E]/40 text-[#9BFF6E] flex items-center justify-center font-mono text-[11px] font-bold">
                      {s.badge}
                    </div>
                    <span className="text-xs text-white/80 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            12. TESTIMONIALS SPOTLIGHT (Frame 00:14 - 00:15)
            ========================================================================= */}
        <section className="py-16 bg-white border-b border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                className="lg:col-span-5 rounded-3xl overflow-hidden bg-black min-h-[380px] sm:min-h-[440px] border border-black/10 flex items-center justify-center shadow-xl"
              >
                <video
                  src="/assets/aistudio/developer_mindset_glow.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="text-center lg:text-left space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-[#8CEB5F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#9BFF6E] text-[#059669]" />
                    ))}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-[#0A140F] font-display tracking-tight">
                    What learners say once the confusion stops
                  </h2>
                </div>

                <div className="space-y-4">
                  {testimonials.map((t, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: idx * 0.1, duration: 0.45, ease: EASE_OUT_EXPO }}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-6 space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#EAF7EE] text-[#062B1A] font-mono text-xs font-bold flex items-center justify-center">
                          {t.initials}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0A140F]">{t.name}</div>
                          <div className="text-xs text-[#6B7280]">{t.role}</div>
                        </div>
                      </div>
                      <p className="text-sm text-[#374151] leading-relaxed">“{t.quote}”</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12B. DARK STAGGERED 2-ROW REVIEW MARQUEE WALL
            ========================================================================= */}
        <CourseReviewWall course={course} />

        {/* =========================================================================
            13. ELECTRIC LIME COMMUNITY SPOTLIGHT CARD (Frame 00:15 - 00:16)
            ========================================================================= */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-[#9BFF6E] text-[#062B1A] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-lg"
            >
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  TheCodeSpark Technologies Private Limited equips ambitious learners across India with real-world engineering workflows, live mentor feedback, and job-ready portfolios. Everything in {course.codeName} is built around measurable career outcomes.
                </p>
                <div>
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onViewSyllabus(course)}
                    className="px-5 py-3 rounded-xl bg-[#062B1A] hover:bg-[#0D3D27] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                  >
                    Explore Full Syllabus
                  </motion.button>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 bg-[#062B1A]/10 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[290px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-[#062B1A]/20 bg-[#062B1A]"
                >
                  <img
                    src={posterImg}
                    alt={course.title}
                    onError={(e) => {
                      e.currentTarget.src = rohitPhoto;
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            14. "More questions? More answers." FILTERABLE FAQ (Frame 00:16 - 00:18)
            ========================================================================= */}
        <section className="py-20 bg-[#FAFBFB] border-t border-black/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A140F] font-display tracking-tight leading-[1.08]">
                More questions?
                <br />
                More answers.
              </h2>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {(
                  [
                    'All',
                    'Curriculum & Stack',
                    'Live Classes & Doubts',
                    'Projects & Cert',
                    'Pricing & Access',
                  ] as FaqCategory[]
                ).map((cat) => {
                  const isActive = faqCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setFaqCategory(cat);
                        setOpenFaqIdx(0);
                      }}
                      className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'bg-white border border-black/10 text-[#4B5563] hover:text-[#062B1A]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="ignite-faq-active-tab"
                          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                          className="absolute inset-0 rounded-xl bg-[#062B1A] shadow-xs"
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-white border border-black/10 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#0A140F]">
                        {faq.q}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#F3F4F6] text-[#062B1A] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                          className="overflow-hidden border-t border-black/5"
                        >
                          <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            15. DARK FOREST GREEN FOOTER CARD + GIANT WORDMARK + BOTTOM CTAs (Frame 00:19 - 00:21)
            ========================================================================= */}
        <footer className="bg-white pt-10 pb-6 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="rounded-3xl bg-[#062B1A] text-white p-8 sm:p-12 space-y-10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-3 text-lg sm:text-xl font-bold font-display">
                  <button
                    onClick={onNavigateCourses}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    All Cohorts
                  </button>
                  <button
                    onClick={() => scrollToSection('ignite-curriculum')}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => onViewSyllabus(course)}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Full Syllabus
                  </button>
                  <button
                    onClick={() => setIsDiscountModalOpen(true)}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Scholarship Fee
                  </button>
                </div>

                <div className="space-y-3 text-lg sm:text-xl font-bold font-display">
                  <button
                    onClick={onNavigateHome}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={onRequestCallback}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Mentorship
                  </button>
                  <button
                    onClick={onRequestCallback}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    Student Support
                  </button>
                  <button
                    onClick={() => setIsDiscountModalOpen(true)}
                    className="block hover:text-[#9BFF6E] transition-colors cursor-pointer text-left"
                  >
                    {primaryActionLabel}
                  </button>
                </div>

                <div className="space-y-2.5 text-xs text-white/75">
                  <div className="text-white font-semibold text-sm mb-2">Contact &amp; Campus</div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0" />
                    <a href="tel:+917398839769" className="hover:text-white font-mono">
                      +91 7398839769
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0" />
                    <a
                      href="mailto:thecodespark3464@gmail.com"
                      className="hover:text-white font-mono truncate"
                    >
                      thecodespark3464@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#9BFF6E] shrink-0 mt-0.5" />
                    <span>Gomti Nagar Campus, Lucknow (UP)</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/75">
                  <div className="text-white font-semibold text-sm mb-2">
                    {course.codeName} accelerates your career.
                  </div>
                  {course.tags.slice(0, 4).map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-white/60">
                <p className="max-w-md">
                  TheCodeSpark Technologies Private Limited · {course.codeName} ·{' '}
                  {course.prerequisites.duration}.
                </p>
                <p>© 2026 TheCodeSpark Technologies Private Limited. All rights reserved.</p>
                <div className="flex items-center gap-2">
                  <img
                    src={uploadedLogo}
                    onError={(e) => {
                      e.currentTarget.src = brandLogo;
                    }}
                    alt="TheCodeSpark Logo"
                    className="h-6 w-auto object-contain"
                  />
                  <span className="font-bold text-white text-sm">TheCodeSpark</span>
                </div>
              </div>
            </motion.div>

            {/* Giant Cut-off Brand Wordmark + Bottom Action Buttons (Frame 00:19 - 00:21) */}
            <div className="relative pt-6 pb-8 text-center select-none">
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
                className="text-[13vw] sm:text-[110px] md:text-[138px] font-black font-display tracking-tighter leading-[0.82] text-[#0A140F] overflow-hidden whitespace-nowrap lowercase"
              >
                {course.codeName}
              </motion.div>

              <div className="flex flex-wrap items-center justify-center gap-3 -mt-6 sm:-mt-8 relative z-10">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDiscountModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-lg transition-colors cursor-pointer"
                >
                  {primaryActionLabel}
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRequestCallback}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-[#F3F4F6] border border-black/15 text-[#0D1410] text-sm font-semibold shadow-lg transition-colors cursor-pointer"
                >
                  Contact us
                </motion.button>
              </div>
            </div>
          </div>
        </footer>

        {/* =========================================================================
            SCHOLARSHIP DISCOUNT MODAL (Triggered by Enroll Now / Pre-Book Now)
            ========================================================================= */}
        <AnimatePresence>
          {isDiscountModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setIsDiscountModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 12 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                className="relative w-full max-w-sm rounded-3xl bg-white border border-black/10 p-6 sm:p-8 text-center space-y-5 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsDiscountModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 text-[#6B7280] hover:text-[#0A140F] rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-14 h-14 rounded-2xl bg-[#062B1A] text-[#9BFF6E] flex items-center justify-center mx-auto shadow-md">
                  <Percent className="w-7 h-7 stroke-[2.5]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[#0A140F] font-display">
                    {course.discountBadge || '50% OFF'} Scholarship Applied
                  </h3>
                  <p className="text-xs text-[#4B5563]">
                    Join <span className="font-bold text-[#062B1A]">{course.title}</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EAF7EE] border border-[#059669]/20 text-xs text-[#062B1A] font-mono">
                  Cohort Fee:{' '}
                  <span className="font-black">Rs.{course.price.toLocaleString('en-IN')}</span>{' '}
                  {course.originalPrice && (
                    <span className="line-through text-[#6B7280]">
                      Rs.{course.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}{' '}
                  (+GST)
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClaimDiscount}
                  className="w-full py-3.5 rounded-xl bg-[#9BFF6E] hover:bg-[#89F55A] text-[#062B1A] text-sm font-bold shadow-sm transition-colors cursor-pointer"
                >
                  Proceed to Enrollment
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
