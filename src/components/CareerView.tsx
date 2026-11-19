import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  FileCheck2,
  GraduationCap,
  Headphones,
  Laptop,
  MapPin,
  PhoneCall,
  Search,
  TrendingUp,
  UserCheck,
  Users,
  X
} from 'lucide-react';
import { CareerSphereCanvas } from './CareerSphereCanvas';

export type CareerSectionCategory =
  | 'all'
  | 'open-roles'
  | 'internships'
  | 'mentorship'
  | 'placement-cell';

export type CareerTrackFilter =
  | 'all'
  | 'bde'
  | 'calling'
  | 'counselor'
  | 'fullstack'
  | 'internships'
  | 'mentorship';

export interface CareerViewProps {
  initialSection?: CareerSectionCategory;
  scrollTarget?: 'top' | 'roles' | 'placement' | 'apply';
  navNonce?: number;
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

export interface CareerRole {
  id: string;
  title: string;
  department:
    | 'Business Development'
    | 'Calling & Tele-Sales'
    | 'Admissions & Counselling'
    | 'Full Stack Engineering'
    | 'Engineering & Mentorship'
    | 'Internships'
    | 'Placement & Growth'
    | 'Campus Team';
  track: Exclude<CareerTrackFilter, 'all'>;
  category: Exclude<CareerSectionCategory, 'all' | 'placement-cell'>;
  location: 'Lucknow Campus' | 'Remote' | 'Hybrid';
  type: 'Full-Time' | 'Internship' | 'Part-Time / Weekend';
  experience: string;
  compensation: string;
  skills: string[];
  summary: string;
  highlights: string[];
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'bde-executive',
    title: 'Business Development Executive (BDE)',
    department: 'Business Development',
    track: 'bde',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '0–3 Years',
    compensation: '₹4.2L – ₹7.5L / yr + Incentives',
    skills: ['B2C & B2B Growth', 'Campus Partnerships', 'Pipeline Ownership', 'Demo Closing'],
    summary:
      'Drive student cohort enrollments, build college MoU partnerships across Uttar Pradesh, and convert qualified leads through consultative demos.',
    highlights: [
      'Uncapped monthly revenue & enrollment incentives',
      'Lead college workshops and campus outreach drives',
      'Direct growth trajectory to Team Lead within 12 months'
    ]
  },
  {
    id: 'calling-executive',
    title: 'Calling Executive / Tele-Sales Associate',
    department: 'Calling & Tele-Sales',
    track: 'calling',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '0–2 Years',
    compensation: '₹2.6L – ₹4.5L / yr + Incentives',
    skills: ['Outbound Calling', 'Lead Qualification', 'CRM Follow-Ups', 'Hindi & English'],
    summary:
      'Connect with incoming student enquiries over phone, qualify career goals, book campus visits or demo sessions, and maintain clean daily CRM logs.',
    highlights: [
      'Warm inbound leads plus structured outbound campaigns',
      'Performance-linked weekly & monthly call conversion bonuses',
      'Structured script playbooks and live pitch coaching'
    ]
  },
  {
    id: 'admission-counsellor',
    title: 'Admission Counsellor',
    department: 'Admissions & Counselling',
    track: 'counselor',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '1–4 Years',
    compensation: '₹3.6L – ₹6.5L / yr + Bonus',
    skills: ['Student Counselling', 'Career Roadmapping', 'Batch Enrollments', 'Parent Consultations'],
    summary:
      'Guide college students, graduates, and parents in selecting the right Full Stack, AI, or DSA cohort with clear syllabus and placement roadmaps.',
    highlights: [
      'Conduct 1-on-1 campus & video counselling sessions',
      'Handle scholarship guidance, fee plans, and batch onboarding',
      'Work closely with instructors and Placement Cell leaders'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer (React, Node.js & TypeScript)',
    department: 'Full Stack Engineering',
    track: 'fullstack',
    category: 'open-roles',
    location: 'Hybrid',
    type: 'Full-Time',
    experience: '1–4 Years',
    compensation: '₹8.0L – ₹16.0L / yr',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    summary:
      'Architect and ship production features for TheCodeSpark learning portal, live assessment sandboxes, internal CRM tools, and client web platforms.',
    highlights: [
      'Own end-to-end features from database schema to UI polish',
      'Collaborate directly with leadership on product architecture',
      'High-impact engineering environment with fast release cycles'
    ]
  },
  {
    id: 'fullstack-mentor',
    title: 'Senior Full Stack Engineer & Coding Mentor',
    department: 'Full Stack Engineering',
    track: 'fullstack',
    category: 'mentorship',
    location: 'Hybrid',
    type: 'Full-Time',
    experience: '2–5 Years',
    compensation: '₹10L – ₹16L / yr',
    skills: ['React', 'Node.js', 'System Design', 'Docker', 'Live Code Reviews'],
    summary:
      'Lead live full-stack cohort builds, review student pull requests, and mentor engineers shipping production web applications.',
    highlights: [
      'Teach practical React, Express, and cloud deployment workflows',
      'Guide capstone projects and mock technical interviews'
    ]
  },
  {
    id: 'ai-ml-instructor',
    title: 'Applied AI & GenAI Lead Instructor',
    department: 'Engineering & Mentorship',
    track: 'mentorship',
    category: 'mentorship',
    location: 'Remote',
    type: 'Full-Time',
    experience: '2+ Years',
    compensation: '₹12L – ₹18L / yr',
    skills: ['Python', 'PyTorch', 'RAG', 'LLMs', 'FastAPI'],
    summary:
      'Design hands-on AI agent workflows, LLM evaluation labs, and mentor learners deploying real AI applications.',
    highlights: [
      'Build real-world GenAI & RAG lab curricula',
      'Mentor advanced learners on production AI deployment'
    ]
  },
  {
    id: 'placement-manager',
    title: 'Corporate Placement & Hiring Partner Lead',
    department: 'Placement & Growth',
    track: 'bde',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '2–6 Years',
    compensation: '₹7L – ₹11L / yr',
    skills: ['Tech Recruiting', 'Employer Relations', 'Mock Drives', 'Account Growth'],
    summary:
      'Build hiring partnerships with SaaS startups and product firms across Bengaluru, NCR, Pune, and remote teams.',
    highlights: [
      'Organize campus placement drives with 180+ hiring partners',
      'Coordinate candidate shortlists and recruiter feedback loops'
    ]
  },
  {
    id: 'frontend-intern',
    title: 'Frontend React & UI Engineering Intern',
    department: 'Internships',
    track: 'internships',
    category: 'internships',
    location: 'Remote',
    type: 'Internship',
    experience: '0–1 Year',
    compensation: '₹15,000 – ₹22,000 / mo',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    summary:
      'Ship interactive UI components, student dashboards, and live project templates alongside senior full-stack engineers.',
    highlights: [
      'Pre-placement offer (PPO) pathway after 3–6 months',
      'Daily code reviews from senior engineers'
    ]
  },
  {
    id: 'devops-intern',
    title: 'Full Stack & Cloud Production Intern',
    department: 'Internships',
    track: 'internships',
    category: 'internships',
    location: 'Hybrid',
    type: 'Internship',
    experience: '0–1 Year',
    compensation: '₹18,000 – ₹25,000 / mo',
    skills: ['Node.js', 'Linux', 'Docker', 'PostgreSQL', 'CI/CD'],
    summary:
      'Assist with deployment pipelines, automated health monitoring, and backend APIs for high-traffic cohorts.',
    highlights: [
      'Hands-on production cloud & API scaling experience',
      'PPO conversion for top performers'
    ]
  },
  {
    id: 'dsa-ta',
    title: 'DSA & Problem-Solving Teaching Assistant',
    department: 'Campus Team',
    track: 'mentorship',
    category: 'mentorship',
    location: 'Lucknow Campus',
    type: 'Part-Time / Weekend',
    experience: 'Strong DSA Track Record',
    compensation: '₹25,000 – ₹45,000 / mo',
    skills: ['C++ / Java', 'Algorithms', 'Graphs', 'Dynamic Programming'],
    summary:
      'Host 1-on-1 doubt resolution clinics, debug interview logic live, and coach students for product company rounds.',
    highlights: [
      'Flexible campus or weekend mentorship schedule',
      'Direct impact on student placement readiness'
    ]
  }
];

const HERO_PIPELINE_ITEMS = [
  {
    index: '01',
    title: 'BDE & Campus Growth',
    subtitle: 'B2B / B2C partnerships & enrollment targets',
    status: 'Hiring Now',
    track: 'bde' as CareerTrackFilter
  },
  {
    index: '02',
    title: 'Calling & Tele-Sales Desk',
    subtitle: 'Inbound qualification & daily demo booking',
    status: 'Immediate',
    track: 'calling' as CareerTrackFilter
  },
  {
    index: '03',
    title: 'Admission Counsellor',
    subtitle: '1-on-1 career guidance & cohort admissions',
    status: 'Hiring Now',
    track: 'counselor' as CareerTrackFilter
  },
  {
    index: '04',
    title: 'Full Stack Engineering',
    subtitle: 'React, Node.js, TypeScript & product shipping',
    status: 'Priority',
    track: 'fullstack' as CareerTrackFilter
  }
];

const ORBIT_NODES: {
  id: Exclude<CareerTrackFilter, 'all' | 'internships' | 'mentorship'> | 'campus' | 'offer';
  label: string;
  meta: string;
  roleId?: string;
  positionClass: string;
}[] = [
  {
    id: 'bde',
    label: 'BDE Growth',
    meta: '₹4.2L – ₹7.5L + Incentives',
    roleId: 'bde-executive',
    positionClass: 'top-3 left-4 sm:top-6 sm:left-6'
  },
  {
    id: 'calling',
    label: 'Calling Desk',
    meta: '₹2.6L – ₹4.5L + Bonus',
    roleId: 'calling-executive',
    positionClass: 'top-3 right-4 sm:top-6 sm:right-6'
  },
  {
    id: 'counselor',
    label: 'Admission Counsellor',
    meta: '₹3.6L – ₹6.5L / yr',
    roleId: 'admission-counsellor',
    positionClass: 'top-1/2 -translate-y-1/2 left-2 sm:left-4'
  },
  {
    id: 'fullstack',
    label: 'Full Stack Dev',
    meta: '₹8.0L – ₹16.0L / yr',
    roleId: 'fullstack-developer',
    positionClass: 'top-1/2 -translate-y-1/2 right-2 sm:right-4'
  },
  {
    id: 'campus',
    label: 'Lucknow Campus',
    meta: 'In-office & Hybrid tracks',
    roleId: 'admission-counsellor',
    positionClass: 'bottom-3 left-6 sm:bottom-6 sm:left-10'
  },
  {
    id: 'offer',
    label: '48-Hour Review',
    meta: 'Fast skill-first offers',
    roleId: 'fullstack-developer',
    positionClass: 'bottom-3 right-6 sm:bottom-6 sm:right-10'
  }
];

const WORKFLOW_STAGES = [
  {
    id: 'role-match',
    step: '01',
    title: 'Understand the Role. Pick Your Track.',
    heading: 'Pick Your Track',
    body: 'Choose where you create the most leverage — closing partnerships as a BDE, converting daily enquiries on the Calling Desk, advising students as an Admission Counsellor, or shipping web apps in Full Stack Engineering.',
    nodeLabel: 'Track Selection',
    detail: 'BDE · Calling · Admission Counsellor · Full Stack',
    candidatePrompt: 'Applying for BDE / Calling / Admission Counsellor / Full Stack at TheCodeSpark.',
    actionLabel: 'Role matched to team goals'
  },
  {
    id: 'assessment',
    step: '02',
    title: 'Apply the Criteria. Show Real Skill.',
    heading: 'Practical Pitch or Live Build',
    body: 'Skip endless theoretical rounds. BDE, Calling, and Admission Counsellor candidates complete a 15-minute live counselling & pitch simulation; Full Stack candidates build or review a real React + Node.js module.',
    nodeLabel: 'Skill Assessment',
    detail: '15-min live pitch or practical code review',
    candidatePrompt: 'Demonstrating consultative student pitch or live React + Express architecture.',
    actionLabel: 'Evaluation scorecard verified'
  },
  {
    id: 'onboarding',
    step: '03',
    title: 'Fast Decisions. Offer in 48 Hours.',
    heading: 'Founder Round & Offer',
    body: 'Meet leadership directly at our Lucknow Campus or over video. Clear compensation, transparent incentive slabs, and an offer decision delivered within 48 hours of your final round.',
    nodeLabel: 'Offer & Day 1',
    detail: 'Transparent CTC + monthly performance incentives',
    candidatePrompt: 'Final alignment complete — welcome kit and onboarding schedule issued.',
    actionLabel: 'Offer letter dispatched'
  }
];

const HIRING_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Apply Online',
    desc: 'Submit your role choice and contact info in under 60 seconds — no bloated cover letters required.'
  },
  {
    step: '02',
    title: 'Intro Call',
    desc: 'A focused 15-minute conversation to align on communication clarity, role expectations, and location.'
  },
  {
    step: '03',
    title: 'Practical Round',
    desc: 'Mock student counselling or sales pitch for BDE/Calling/Counsellors; hands-on task for Full Stack.'
  },
  {
    step: '04',
    title: 'Leadership Round',
    desc: 'Direct discussion with team leads and founders on ownership, targets, and growth path.'
  },
  {
    step: '05',
    title: 'Offer in 48h',
    desc: 'Fast offer rollout with clear base salary, incentive structure, and immediate joining options.'
  }
];

const PLACEMENT_MILESTONES = [
  {
    step: '01',
    title: 'ATS Resume & GitHub Audit',
    desc: '1-on-1 technical portfolio audit ensuring clean READMEs, live deployed demos, and recruiter-ready resumes.',
    icon: FileCheck2
  },
  {
    step: '02',
    title: 'Live Mock Interviews',
    desc: 'Timed DSA, React/Node machine coding, and system architecture rounds conducted by senior industry engineers.',
    icon: Users
  },
  {
    step: '03',
    title: 'Direct Hiring Drives',
    desc: 'Direct referrals to 180+ hiring startups, mid-size SaaS companies, and product engineering teams.',
    icon: Building2
  }
];

export const CareerView: React.FC<CareerViewProps> = ({
  initialSection = 'all',
  scrollTarget = 'top',
  navNonce = 0,
  onRequestCallback,
  onExploreCourses
}) => {
  const [activeCategory, setActiveCategory] = useState<CareerSectionCategory>(initialSection);
  const [activeTrack, setActiveTrack] = useState<CareerTrackFilter>('all');
  const [locationFilter, setLocationFilter] = useState<'All' | 'Lucknow Campus' | 'Hybrid' | 'Remote'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHeroPipeline, setActiveHeroPipeline] = useState(0);
  const [selectedOrbitRoleId, setSelectedOrbitRoleId] = useState<string>('bde-executive');
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

  // Modal & Form State
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<CareerRole | null>(CAREER_ROLES[0]);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('Fresher / 0–1 Year');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRoleTitle, setSubmittedRoleTitle] = useState<string | null>(null);

  const rolesRef = useRef<HTMLDivElement>(null);
  const placementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveCategory(initialSection);
    if (initialSection === 'internships') {
      setActiveTrack('internships');
    } else if (initialSection === 'mentorship') {
      setActiveTrack('mentorship');
    } else {
      setActiveTrack('all');
    }

    if (scrollTarget === 'apply') {
      setSelectedRoleForApply(CAREER_ROLES[0]);
      setSubmittedRoleTitle(null);
      setFormError(null);
      setIsApplyModalOpen(true);
      return;
    }

    const timer = window.setTimeout(() => {
      if (scrollTarget === 'roles' && rolesRef.current) {
        rolesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (scrollTarget === 'placement' && placementRef.current) {
        placementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [initialSection, scrollTarget, navNonce]);

  const filteredRoles = useMemo(() => {
    return CAREER_ROLES.filter((role) => {
      const matchesCategory =
        activeCategory === 'all' ||
        activeCategory === 'placement-cell' ||
        role.category === activeCategory;
      const matchesTrack = activeTrack === 'all' || role.track === activeTrack;
      const matchesLocation = locationFilter === 'All' || role.location === locationFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        role.title.toLowerCase().includes(q) ||
        role.department.toLowerCase().includes(q) ||
        role.summary.toLowerCase().includes(q) ||
        role.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesTrack && matchesLocation && matchesQuery;
    });
  }, [activeCategory, activeTrack, locationFilter, searchQuery]);

  const trackCounts = useMemo(() => {
    const counts: Record<CareerTrackFilter, number> = {
      all: CAREER_ROLES.length,
      bde: 0,
      calling: 0,
      counselor: 0,
      fullstack: 0,
      internships: 0,
      mentorship: 0
    };
    for (const r of CAREER_ROLES) {
      counts[r.track] = (counts[r.track] || 0) + 1;
    }
    return counts;
  }, []);

  const selectedOrbitRole = useMemo(
    () => CAREER_ROLES.find((r) => r.id === selectedOrbitRoleId) || CAREER_ROLES[0],
    [selectedOrbitRoleId]
  );

  const openApplyForRole = (role: CareerRole) => {
    setSelectedRoleForApply(role);
    setSubmittedRoleTitle(null);
    setFormError(null);
    setIsApplyModalOpen(true);
  };

  const jumpToTrack = (track: CareerTrackFilter) => {
    setActiveCategory('all');
    setActiveTrack(track);
    rolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const name = applicantName.trim();
    const email = applicantEmail.trim();
    const digitsPhone = applicantPhone.replace(/\D/g, '');
    const normalizedPhone = digitsPhone.length > 10 ? digitsPhone.slice(-10) : digitsPhone;

    if (!name || !email) {
      setFormError('Please enter your full name and email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!/^\d{10}$/.test(normalizedPhone)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    const roleTitle = selectedRoleForApply?.title || 'General Career Application';
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: normalizedPhone,
          enquiryFor: `Career Application — ${roleTitle}`,
          message: [
            `Role: ${roleTitle}`,
            `Experience: ${applicantExperience}`,
            applicantPortfolio.trim() ? `Resume/Portfolio: ${applicantPortfolio.trim()}` : '',
            applicantNote.trim() ? `Summary: ${applicantNote.trim()}` : ''
          ]
            .filter(Boolean)
            .join('\n')
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error || 'Could not log application.');
      }

      setSubmittedRoleTitle(roleTitle);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantPortfolio('');
      setApplicantNote('');
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Unable to submit right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeStage = WORKFLOW_STAGES[activeWorkflowIdx] || WORKFLOW_STAGES[0];

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0B0B0F] text-[#141416] dark:text-[#F4F4F5] pt-24 sm:pt-28 pb-0 transition-colors">
      {/* =====================================================================
          1. HERO BENTO ARCHITECTURE (Inspired by Kivo Opening Stage)
      ===================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Hero Feature Card: Vibrant Vermilion Orange with 3D Faceted Sphere */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#FF5A1F] via-[#FF672B] to-[#DE400A] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[470px] sm:min-h-[530px]">
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="space-y-2 max-w-md">
                <p className="text-xs font-medium tracking-wide text-white/85">
                  TheCodeSpark Technologies · Lucknow Campus &amp; Remote
                </p>
                <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-bold font-display tracking-tight leading-[1.06] text-balance">
                  Build &amp; Scale Tech Careers With Us.
                </h1>
              </div>
              <span className="text-xs font-mono tabular-nums text-white/90 bg-black/15 px-3 py-1 rounded-lg shrink-0">
                {CAREER_ROLES.length} Open Roles
              </span>
            </div>

            {/* Center 3D Faceted Sphere */}
            <div className="my-4 flex items-center justify-center relative z-10">
              <CareerSphereCanvas variant="orange" size={248} />
            </div>

            {/* Bottom Live Candidate Flow Strip */}
            <div className="relative z-10 space-y-3">
              <div className="rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="font-medium">Hiring Now Across 4 Core Tracks</span>
                  <span className="font-mono tabular-nums">48h Decision</span>
                </div>
                <p className="text-sm sm:text-[15px] font-medium text-white leading-snug">
                  Actively hiring <strong className="font-bold">BDEs</strong>,{' '}
                  <strong className="font-bold">Calling Executives</strong>,{' '}
                  <strong className="font-bold">Admission Counsellors</strong>, and{' '}
                  <strong className="font-bold">Full Stack Developers</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => rolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#141416] hover:bg-neutral-100 text-xs sm:text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Browse Open Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openApplyForRole(CAREER_ROLES[0])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/25 hover:bg-black/35 text-white border border-white/25 text-xs sm:text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Quick Apply</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Bento Stack: Hiring Tracks Queue + Velocity Sparkline + Orange Action Card */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* Top-Left Card: Interactive Hiring Pipeline Queue */}
              <div className="rounded-3xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.1] p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    Priority Hiring Tracks
                  </span>
                  <span className="text-[11px] font-mono tabular-nums text-[#FF5A1F]">
                    2026 Cohort
                  </span>
                </div>

                <div className="space-y-2 py-3">
                  {HERO_PIPELINE_ITEMS.map((item, idx) => {
                    const isSelected = activeHeroPipeline === idx;
                    return (
                      <button
                        key={item.index}
                        type="button"
                        onClick={() => {
                          setActiveHeroPipeline(idx);
                          jumpToTrack(item.track);
                        }}
                        className={`w-full text-left rounded-xl p-3 border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFF5F0] dark:bg-[#FF5A1F]/10 border-[#FF5A1F]/40'
                            : 'bg-[#FAFAF8] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/15 dark:hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                            {item.index} · {item.status}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                        </div>
                        <div className="text-sm font-semibold text-slate-950 dark:text-white mt-0.5">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-neutral-400 truncate mt-0.5">
                          {item.subtitle}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-neutral-400 pt-1">
                  Click any track to filter matching roles below
                </div>
              </div>

              {/* Top-Right Card: Hiring Velocity & Team Metrics */}
              <div className="rounded-3xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.1] p-5 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-neutral-400">
                      Team Growth &amp; Interviews
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#FF5A1F]" />
                  </div>
                  <div className="text-2xl font-bold font-display text-slate-950 dark:text-white tabular-nums">
                    48 Hours
                  </div>
                  <p className="text-xs text-slate-600 dark:text-neutral-400">
                    Average turnaround from application to interview invite
                  </p>
                </div>

                {/* Clean SVG Trend Curve */}
                <div className="my-3 rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-neutral-400 mb-2">
                    <span>Weekly Hiring Pace</span>
                    <span className="font-mono tabular-nums text-[#FF5A1F] font-semibold">
                      4 Active Tracks
                    </span>
                  </div>
                  <svg viewBox="0 0 260 88" className="w-full h-20 overflow-visible" aria-hidden="true">
                    <defs>
                      <linearGradient id="kivoSparkFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="22" x2="260" y2="22" stroke="currentColor" className="text-black/5 dark:text-white/5" />
                    <line x1="0" y1="50" x2="260" y2="50" stroke="currentColor" className="text-black/5 dark:text-white/5" />
                    <path
                      d="M 4 72 C 38 66, 56 36, 94 42 C 132 48, 152 16, 188 26 C 218 34, 236 12, 256 10 L 256 84 L 4 84 Z"
                      fill="url(#kivoSparkFill)"
                    />
                    <path
                      d="M 4 72 C 38 66, 56 36, 94 42 C 132 48, 152 16, 188 26 C 218 34, 236 12, 256 10"
                      fill="none"
                      stroke="#FF5A1F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <circle cx="94" cy="42" r="3.5" fill="#FF5A1F" />
                    <circle cx="188" cy="26" r="3.5" fill="#FF5A1F" />
                    <circle cx="256" cy="10" r="4" fill="#FF5A1F" />
                  </svg>
                </div>

                {/* Compact KPI Pair */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div>
                    <div className="text-lg font-bold font-display tabular-nums text-slate-950 dark:text-white">
                      180+
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-neutral-400">
                      Hiring Partners
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-display tabular-nums text-slate-950 dark:text-white">
                      LKO / Remote
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-neutral-400">
                      Campus &amp; Hybrid
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Bold Orange Action Card */}
            <div className="rounded-3xl bg-gradient-to-r from-[#FF5A1F] to-[#F04E16] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-md">
                <h2 className="text-xl sm:text-2xl font-bold font-display tracking-tight">
                  Put your ambition to work at TheCodeSpark.
                </h2>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Immediate openings for BDE, Calling Executive, Admission Counsellor &amp; Full Stack Developer roles.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openApplyForRole(CAREER_ROLES[0])}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-[#141416] text-xs sm:text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ORBIT SECTION: "Move Beyond Resumes. Hire for Real Execution."
      ===================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Statement */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold text-[#FF5A1F] tracking-wide">
              From applications to real ownership
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-display tracking-tight leading-[1.08] text-slate-950 dark:text-white text-balance">
              Move Beyond Resumes. Build Real Outcomes.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
              Most organizations hire strictly off paper credentials. At TheCodeSpark Technologies, we hire problem-solvers who take direct ownership — whether closing BDE campus deals, qualifying student leads on calls, counselling admissions with clarity, or shipping full-stack software.
            </p>

            {/* Interactive Selected Role Preview */}
            <div className="rounded-2xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.1] p-5 space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-neutral-400">
                <span>{selectedOrbitRole.department} · {selectedOrbitRole.location}</span>
                <span className="font-mono tabular-nums font-semibold text-[#FF5A1F]">
                  {selectedOrbitRole.compensation}
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-950 dark:text-white">
                {selectedOrbitRole.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                {selectedOrbitRole.summary}
              </p>
              <div className="pt-1 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openApplyForRole(selectedOrbitRole)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF5A1F] hover:bg-[#e54d16] text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <span>Apply for This Role</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => jumpToTrack(selectedOrbitRole.track)}
                  className="text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#FF5A1F] cursor-pointer transition-colors whitespace-nowrap"
                >
                  View Track Details
                </button>
              </div>
            </div>
          </div>

          {/* Right Orbit Canvas with Clickable Role Nodes */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-10 min-h-[420px] sm:min-h-[470px] flex items-center justify-center overflow-hidden">
              {/* Subtle Radial Orbit Rings */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-black/10 dark:border-white/10" />
                <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-black/[0.05] dark:border-white/[0.05]" />
              </div>

              {/* Center Faceted Neutral Sphere */}
              <div className="relative z-10 flex flex-col items-center">
                <CareerSphereCanvas variant="neutral" size={220} />
                <span className="mt-2 text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                  Select a node to inspect role
                </span>
              </div>

              {/* Floating Clickable Role Nodes */}
              {ORBIT_NODES.map((node) => {
                const isActive = selectedOrbitRoleId === node.roleId && node.id !== 'campus' && node.id !== 'offer';
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => {
                      if (node.roleId) setSelectedOrbitRoleId(node.roleId);
                    }}
                    className={`hidden sm:flex flex-col items-start text-left absolute z-20 rounded-xl px-3.5 py-2.5 border transition-all cursor-pointer ${
                      node.positionClass
                    } ${
                      isActive
                        ? 'bg-[#FFF5F0] dark:bg-[#231511] border-[#FF5A1F] shadow-sm'
                        : 'bg-[#FAFAF8]/95 dark:bg-[#1A1A24]/95 border-black/10 dark:border-white/10 hover:border-[#FF5A1F]/60'
                    }`}
                  >
                    <span className="text-xs font-semibold text-slate-950 dark:text-white whitespace-nowrap">
                      {node.label}
                    </span>
                    <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400 whitespace-nowrap">
                      {node.meta}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Quick Node Strip (visible < sm) */}
            <div className="grid grid-cols-2 gap-2 mt-3 sm:hidden">
              {ORBIT_NODES.slice(0, 4).map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    if (node.roleId) setSelectedOrbitRoleId(node.roleId);
                  }}
                  className={`text-left rounded-xl p-3 border transition-colors cursor-pointer ${
                    selectedOrbitRoleId === node.roleId
                      ? 'bg-[#FFF5F0] dark:bg-[#231511] border-[#FF5A1F]'
                      : 'bg-white dark:bg-[#13131A] border-black/10 dark:border-white/10'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-950 dark:text-white">{node.label}</div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-neutral-400">{node.meta}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. INTERACTIVE 3-STAGE HIRING WORKFLOW (Frames 00:05 - 00:12)
      ===================================================================== */}
      <section className="border-y border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#101016] py-20 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Stage Switcher & Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#FF5A1F]">
                  How we evaluate talent
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight leading-[1.1] text-slate-950 dark:text-white text-balance">
                  {activeStage.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
                  {activeStage.body}
                </p>
              </div>

              {/* Stage Selector List */}
              <div className="space-y-2">
                {WORKFLOW_STAGES.map((stage, idx) => {
                  const active = idx === activeWorkflowIdx;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveWorkflowIdx(idx)}
                      className={`w-full text-left rounded-xl p-4 border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        active
                          ? 'bg-[#FAFAF8] dark:bg-white/[0.05] border-[#FF5A1F]'
                          : 'bg-transparent border-black/[0.07] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono tabular-nums text-[#FF5A1F] font-semibold">
                          {stage.step}. {stage.heading}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-neutral-400">
                          {stage.detail}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                          active ? 'text-[#FF5A1F] translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Node Graph & Live Evaluation Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#FAFAF8] dark:bg-[#14141C] border border-black/[0.08] dark:border-white/[0.1] p-5 sm:p-8 space-y-6">
                {/* Top Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-black/[0.07] dark:border-white/[0.08]">
                  <span className="text-xs font-medium text-slate-600 dark:text-neutral-400">
                    TheCodeSpark Hiring Engine · Stage {activeStage.step} of 03
                  </span>
                  <button
                    type="button"
                    onClick={() => openApplyForRole(CAREER_ROLES[0])}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF5A1F] hover:bg-[#e54d16] text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
                  >
                    Start Application
                  </button>
                </div>

                {/* Sphere + Curved Connector Targets */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 flex items-center justify-center">
                    <CareerSphereCanvas variant="neutral" size={210} />
                  </div>

                  <div className="md:col-span-6 space-y-2.5">
                    {[
                      { label: 'BDE & Partnerships', track: 'bde' as CareerTrackFilter, icon: Briefcase },
                      { label: 'Calling & Tele-Sales', track: 'calling' as CareerTrackFilter, icon: Headphones },
                      { label: 'Admission Counsellor', track: 'counselor' as CareerTrackFilter, icon: UserCheck },
                      { label: 'Full Stack Developer', track: 'fullstack' as CareerTrackFilter, icon: Laptop }
                    ].map((node, i) => {
                      const Icon = node.icon;
                      const isHighlighted = i === activeWorkflowIdx || (activeWorkflowIdx === 2 && i === 3);
                      return (
                        <button
                          key={node.label}
                          type="button"
                          onClick={() => jumpToTrack(node.track)}
                          className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isHighlighted
                              ? 'bg-[#141416] dark:bg-white text-white dark:text-[#141416] border-transparent shadow-sm'
                              : 'bg-white dark:bg-[#1B1B25] text-slate-800 dark:text-neutral-200 border-black/[0.08] dark:border-white/[0.1] hover:border-[#FF5A1F]/50'
                          }`}
                        >
                          <span className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                            <Icon className={`w-4 h-4 shrink-0 ${isHighlighted ? 'text-[#FF5A1F]' : 'text-slate-500 dark:text-neutral-400'}`} />
                            <span>{node.label}</span>
                          </span>
                          <span className="text-[11px] font-mono opacity-80 whitespace-nowrap">
                            View roles
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Escalation / Decision Readout */}
                <div className="rounded-2xl bg-white dark:bg-[#1A1A24] border border-black/[0.08] dark:border-white/[0.08] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-slate-950 dark:text-white">
                      {activeStage.actionLabel}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-neutral-400">
                      {activeStage.candidatePrompt}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF5A1F] font-semibold whitespace-nowrap shrink-0">
                    Stage {activeStage.step} Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. HIRING PORTAL & OPEN ROLES DIRECTORY (Frames 00:13 - 00:19)
      ===================================================================== */}
      <section ref={rolesRef} className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-semibold text-[#FF5A1F]">
            Built for clarity and fast hiring
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display tracking-tight leading-[1.08] text-slate-950 dark:text-white text-balance">
            Every open role, clear from one portal.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300">
            Explore full-time openings across BDE, Calling, Admission Counselling, Full Stack Engineering, and paid internships.
          </p>
        </div>

        {/* SaaS-Style Portal Shell */}
        <div className="rounded-3xl bg-white dark:bg-[#121218] border border-black/[0.09] dark:border-white/[0.1] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Portal Sidebar */}
            <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-black/[0.07] dark:border-white/[0.08] bg-[#FAFAF8] dark:bg-[#0E0E14] p-5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold font-display text-slate-950 dark:text-white">
                  TheCodeSpark Careers
                </span>
                <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-neutral-400">
                  {CAREER_ROLES.length} roles
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-medium text-slate-500 dark:text-neutral-400 px-2.5 pb-1">
                  Hiring Departments
                </div>
                {(
                  [
                    { id: 'all', label: 'All Open Roles', count: trackCounts.all },
                    { id: 'bde', label: 'BDE & Growth', count: trackCounts.bde },
                    { id: 'calling', label: 'Calling & Tele-Sales', count: trackCounts.calling },
                    { id: 'counselor', label: 'Admission Counsellor', count: trackCounts.counselor },
                    { id: 'fullstack', label: 'Full Stack Developer', count: trackCounts.fullstack },
                    { id: 'mentorship', label: 'Instructors & TAs', count: trackCounts.mentorship },
                    { id: 'internships', label: 'Paid Internships', count: trackCounts.internships }
                  ] as const
                ).map((item) => {
                  const active = activeTrack === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveTrack(item.id);
                      }}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#FF5A1F] text-white font-semibold'
                          : 'text-slate-700 dark:text-neutral-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <span
                        className={`text-[11px] font-mono tabular-nums shrink-0 ${
                          active ? 'text-white/90' : 'text-slate-400 dark:text-neutral-500'
                        }`}
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-black/[0.07] dark:border-white/[0.08] space-y-2">
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  Campus Address
                </div>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                  TheCodeSpark Technologies Pvt. Ltd., Lucknow Campus &amp; Remote Teams
                </p>
                <button
                  type="button"
                  onClick={() => {
                    placementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-xs font-semibold text-[#FF5A1F] hover:underline cursor-pointer"
                >
                  Jump to Placement Cell →
                </button>
              </div>
            </aside>

            {/* Main Portal Workspace */}
            <div className="lg:col-span-9 p-5 sm:p-7 space-y-6">
              {/* Top Portal KPI Row (4 Tabular Metrics) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] p-4">
                  <div className="text-xs text-slate-500 dark:text-neutral-400">Open Positions</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-slate-950 dark:text-white mt-1">
                    {CAREER_ROLES.length}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] p-4">
                  <div className="text-xs text-slate-500 dark:text-neutral-400">Priority Tracks</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-[#FF5A1F] mt-1">
                    4 Core
                  </div>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] p-4">
                  <div className="text-xs text-slate-500 dark:text-neutral-400">Offer Turnaround</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-slate-950 dark:text-white mt-1">
                    48 hrs
                  </div>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] p-4">
                  <div className="text-xs text-slate-500 dark:text-neutral-400">Partner Network</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-slate-950 dark:text-white mt-1">
                    180+
                  </div>
                </div>
              </div>

              {/* Search & Location Filter Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-black/[0.07] dark:border-white/[0.08]">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search BDE, Calling, Counsellor, Full Stack..."
                    aria-label="Search roles or skills"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FAFAF8] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF5A1F]"
                  />
                </div>

                <div className="flex items-center gap-1 p-1 bg-[#FAFAF8] dark:bg-white/[0.04] rounded-lg border border-black/[0.06] dark:border-white/[0.08] overflow-x-auto">
                  {(['All', 'Lucknow Campus', 'Hybrid', 'Remote'] as const).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocationFilter(loc)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        locationFilter === loc
                          ? 'bg-white dark:bg-[#1E1E28] text-slate-950 dark:text-white shadow-xs'
                          : 'text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtered Roles List / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRoles.map((role) => (
                  <article
                    key={role.id}
                    className="rounded-2xl bg-[#FAFAF8] dark:bg-[#171720] border border-black/[0.08] dark:border-white/[0.09] hover:border-[#FF5A1F]/50 p-5 flex flex-col justify-between gap-4 transition-colors"
                  >
                    <div className="space-y-2.5">
                      {/* Clean unboxed metadata line */}
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-neutral-400">
                        <span className="font-medium text-[#FF5A1F] truncate">
                          {role.department}
                        </span>
                        <span className="font-mono shrink-0">{role.type}</span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-slate-950 dark:text-white leading-snug">
                        {role.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                        {role.summary}
                      </p>

                      {/* Unboxed key specs with typographic separators */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700 dark:text-neutral-300 font-mono tabular-nums pt-1">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                          {role.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{role.experience}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-slate-950 dark:text-white">
                          {role.compensation}
                        </span>
                      </div>

                      {/* Unboxed skill list with dot separators */}
                      <p className="text-xs text-slate-500 dark:text-neutral-400 pt-1">
                        {role.skills.join(' · ')}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.07] dark:border-white/[0.08] flex items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 dark:text-neutral-400">
                        Immediate joining
                      </span>
                      <button
                        type="button"
                        onClick={() => openApplyForRole(role)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#141416] dark:bg-white hover:bg-[#FF5A1F] dark:hover:bg-[#FF5A1F] text-white dark:text-[#141416] dark:hover:text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredRoles.length === 0 && (
                <div className="rounded-2xl bg-[#FAFAF8] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] p-8 text-center space-y-3">
                  <Compass className="w-7 h-7 text-slate-400 mx-auto" />
                  <p className="text-sm font-semibold text-slate-800 dark:text-neutral-200">
                    No matching openings found for the selected filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('all');
                      setActiveTrack('all');
                      setLocationFilter('All');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 rounded-lg bg-[#FF5A1F] text-white text-xs font-semibold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. HOW HIRING WORKS (5-Step Pipeline + Culture Highlights)
      ===================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 space-y-12">
        <div className="space-y-2">
          <p className="text-xs font-mono text-[#FF5A1F] font-semibold">
            01. Selection Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 dark:text-white">
            Five clear steps from application to offer.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {HIRING_PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.09] p-5 flex flex-col justify-between gap-4"
            >
              <span className="text-xs font-mono tabular-nums text-[#FF5A1F] font-semibold">
                {item.step}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold font-display text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Asymmetric Culture & Compensation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 rounded-3xl bg-white dark:bg-[#13131A] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#FF5A1F]">
                Growth, Incentives &amp; Ownership
              </p>
              <h3 className="text-2xl font-bold font-display text-slate-950 dark:text-white">
                Performance rewards built for high-agency operators and engineers.
              </h3>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                BDEs, Calling Executives, and Admission Counsellors earn transparent monthly incentives on top of fixed CTC. Full Stack Engineers ship real customer-facing products with zero bureaucratic drag.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.07] dark:border-white/[0.08]">
              <div>
                <div className="text-lg font-bold font-display tabular-nums text-slate-950 dark:text-white">
                  Monthly
                </div>
                <div className="text-xs text-slate-500 dark:text-neutral-400">
                  Incentive Payouts
                </div>
              </div>
              <div>
                <div className="text-lg font-bold font-display tabular-nums text-slate-950 dark:text-white">
                  Direct
                </div>
                <div className="text-xs text-slate-500 dark:text-neutral-400">
                  Founder Mentorship
                </div>
              </div>
              <div>
                <div className="text-lg font-bold font-display tabular-nums text-slate-950 dark:text-white">
                  Fast
                </div>
                <div className="text-xs text-slate-500 dark:text-neutral-400">
                  Team Lead Track
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-3xl bg-[#FFF5F0] dark:bg-[#1E1411] border border-[#FF5A1F]/25 p-6 sm:p-8 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#FF5A1F]">
                Quick Walk-in &amp; Remote Hiring
              </p>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 dark:text-white">
                Want to discuss a role before applying?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                Speak directly with our hiring coordinator about BDE, Calling, Admission Counsellor, or Full Stack openings.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => openApplyForRole(CAREER_ROLES[0])}
                className="px-4 py-2.5 rounded-lg bg-[#FF5A1F] hover:bg-[#e54d16] text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
              >
                Apply Now
              </button>
              <button
                type="button"
                onClick={onRequestCallback}
                className="px-4 py-2.5 rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 text-slate-900 dark:text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. DARK OBSIDIAN CLOSING & PLACEMENT CELL (Frames 00:27 - 00:30)
      ===================================================================== */}
      <section
        ref={placementRef}
        className="bg-[#0B0B0F] text-white border-t border-white/10 py-20 sm:py-24 scroll-mt-20 relative overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          {/* Student Placement Cell Block */}
          <div className="rounded-3xl bg-[#13131A] border border-white/10 p-6 sm:p-10 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A1F]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Career Accelerator &amp; Placement Cell</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-balance">
                  Preparing students and engineers for top product roles.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Whether you are joining our internal team or preparing through our cohorts for 180+ hiring partner drives, our Placement Cell supports every milestone.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={onRequestCallback}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF5A1F] hover:bg-[#e54d16] text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Talk to Placement Cell</span>
                </button>
                <button
                  type="button"
                  onClick={onExploreCourses}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Explore Cohorts</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PLACEMENT_MILESTONES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tabular-nums text-[#FF5A1F] font-semibold">
                        {item.step}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kivo-Style Closing Hero with Large Orange 3D Sphere */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold text-[#FF5A1F]">
                TheCodeSpark Technologies · Hiring 2026
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-[1.06] text-balance">
                Make Execution Part of Your Career Story.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Ready to step in as a BDE, Calling Executive, Admission Counsellor, or Full Stack Developer? Apply in under a minute and hear back within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openApplyForRole(CAREER_ROLES[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#e54d16] text-white text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <span>Apply for Open Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onRequestCallback}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <span>Talk to Hiring Team</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F]">01.</span>
                  <span className="ml-2 text-xs font-medium text-neutral-300">Select your track</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F]">02.</span>
                  <span className="ml-2 text-xs font-medium text-neutral-300">Complete live screening</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F]">03.</span>
                  <span className="ml-2 text-xs font-medium text-neutral-300">Start building &amp; growing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <CareerSphereCanvas variant="orange" size={300} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          APPLICATION MODAL
      ===================================================================== */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#14141C] border border-black/15 dark:border-white/15 p-6 sm:p-7 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
                <div>
                  <span className="text-xs font-semibold text-[#FF5A1F]">
                    TheCodeSpark Career Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 dark:text-white mt-0.5">
                    {selectedRoleForApply?.title || 'Apply at TheCodeSpark Technologies'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  aria-label="Close application modal"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 flex items-center justify-center text-slate-700 dark:text-white cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submittedRoleTitle ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-950 dark:text-white">
                    Application Submitted
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 max-w-sm mx-auto">
                    Your application for <strong className="text-slate-900 dark:text-white">{submittedRoleTitle}</strong> has been received. Our hiring team will reach out within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="mt-2 px-6 py-2.5 rounded-lg bg-[#FF5A1F] text-white text-xs font-semibold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Select Role
                    </label>
                    <select
                      value={selectedRoleForApply?.id || CAREER_ROLES[0].id}
                      onChange={(e) => {
                        const found = CAREER_ROLES.find((r) => r.id === e.target.value);
                        if (found) setSelectedRoleForApply(found);
                      }}
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                    >
                      {CAREER_ROLES.map((r) => (
                        <option key={r.id} value={r.id} className="bg-white dark:bg-[#14141C]">
                          {r.title} ({r.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Aarav Sharma"
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                        Mobile Number (10-digit) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="9876543210"
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                        Experience Level
                      </label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                      >
                        <option value="Fresher / 0–1 Year" className="bg-white dark:bg-[#14141C]">
                          Fresher / 0–1 Year
                        </option>
                        <option value="1–3 Years" className="bg-white dark:bg-[#14141C]">
                          1–3 Years
                        </option>
                        <option value="3+ Years" className="bg-white dark:bg-[#14141C]">
                          3+ Years
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Resume / LinkedIn / GitHub URL
                    </label>
                    <input
                      type="url"
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                      placeholder="https://linkedin.com/in/username or GitHub URL"
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Relevant Pitch, Sales, Counselling, or Full Stack Experience
                    </label>
                    <textarea
                      rows={2}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Briefly share your background, achievements, or deployed projects..."
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 px-3 py-2 text-xs text-red-700 dark:text-red-300"
                    >
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#e54d16] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Career Application'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
