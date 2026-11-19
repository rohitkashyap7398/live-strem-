import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  FileCheck2,
  GraduationCap,
  MapPin,
  PhoneCall,
  Search,
  Sparkles,
  Users,
  X
} from 'lucide-react';

export type CareerSectionCategory =
  | 'all'
  | 'open-roles'
  | 'internships'
  | 'mentorship'
  | 'placement-cell';

export interface CareerViewProps {
  initialSection?: CareerSectionCategory;
  scrollTarget?: 'top' | 'roles' | 'placement' | 'apply';
  navNonce?: number;
  onRequestCallback: () => void;
  onExploreCourses: () => void;
}

interface CareerRole {
  id: string;
  title: string;
  department: 'Engineering & Mentorship' | 'Internships' | 'Placement & Growth' | 'Campus Team';
  category: Exclude<CareerSectionCategory, 'all' | 'placement-cell'>;
  location: 'Lucknow Campus' | 'Remote' | 'Hybrid';
  type: 'Full-Time' | 'Internship' | 'Part-Time / Weekend';
  experience: string;
  compensation: string;
  skills: string[];
  summary: string;
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'fullstack-mentor',
    title: 'Senior Full-Stack Engineer & Coding Mentor',
    department: 'Engineering & Mentorship',
    category: 'mentorship',
    location: 'Hybrid',
    type: 'Full-Time',
    experience: '2–5 Years',
    compensation: '₹10L – ₹16L / yr',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'System Design'],
    summary:
      'Lead live cohort builds, review real student pull requests, and architect scalable production sandboxes.'
  },
  {
    id: 'ai-ml-instructor',
    title: 'Applied AI & GenAI Lead Instructor',
    department: 'Engineering & Mentorship',
    category: 'mentorship',
    location: 'Remote',
    type: 'Full-Time',
    experience: '2+ Years',
    compensation: '₹12L – ₹18L / yr',
    skills: ['Python', 'PyTorch', 'RAG', 'LLMs', 'FastAPI'],
    summary:
      'Design hands-on AI agent workflows, LLM evaluation labs, and mentor learners deploying real AI apps.'
  },
  {
    id: 'backend-dev-lko',
    title: 'Platform Backend & Cloud Engineer',
    department: 'Engineering & Mentorship',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '1–4 Years',
    compensation: '₹7.5L – ₹12L / yr',
    skills: ['TypeScript', 'Docker', 'Redis', 'AWS', 'Microservices'],
    summary:
      'Build and scale TheCodeSpark code-execution sandboxes, LMS APIs, and automated grading infrastructure.'
  },
  {
    id: 'placement-manager',
    title: 'Corporate Placement & Hiring Partner Lead',
    department: 'Placement & Growth',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '2–6 Years',
    compensation: '₹7L – ₹11L / yr',
    skills: ['Tech Recruiting', 'Account Growth', 'Mock Drives', 'ATS'],
    summary:
      'Build hiring partnerships with SaaS startups and product firms across Bengaluru, NCR, Pune, and remote teams.'
  },
  {
    id: 'frontend-intern',
    title: 'Frontend React & UI Engineering Intern',
    department: 'Internships',
    category: 'internships',
    location: 'Remote',
    type: 'Internship',
    experience: '0–1 Year',
    compensation: '₹15,000 – ₹22,000 / mo',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    summary:
      'Ship interactive UI components, student dashboards, and live project templates alongside senior engineers.'
  },
  {
    id: 'devops-intern',
    title: 'Cloud & Backend Production Intern',
    department: 'Internships',
    category: 'internships',
    location: 'Hybrid',
    type: 'Internship',
    experience: '0–1 Year',
    compensation: '₹18,000 – ₹25,000 / mo',
    skills: ['Node.js', 'Linux', 'Docker', 'PostgreSQL', 'CI/CD'],
    summary:
      'Assist with deployment pipelines, automated health monitoring, and backend APIs for high-traffic cohorts.'
  },
  {
    id: 'dsa-ta',
    title: 'DSA & Problem-Solving Teaching Assistant',
    department: 'Campus Team',
    category: 'mentorship',
    location: 'Lucknow Campus',
    type: 'Part-Time / Weekend',
    experience: 'Top Competitive Programmer',
    compensation: '₹25,000 – ₹45,000 / mo',
    skills: ['C++ / Java', 'Algorithms', 'Graphs', 'Dynamic Programming'],
    summary:
      'Host 1-on-1 doubt resolution clinics, debug interview logic live, and coach students for product company rounds.'
  },
  {
    id: 'counselor-lead',
    title: 'Technical Career Counselor & Admissions Advisor',
    department: 'Placement & Growth',
    category: 'open-roles',
    location: 'Lucknow Campus',
    type: 'Full-Time',
    experience: '1–3 Years',
    compensation: '₹4.5L – ₹7.5L / yr',
    skills: ['Career Mapping', 'Tech Literacy', 'Communication', 'CRM'],
    summary:
      'Guide college students and working professionals in choosing the right engineering track and career roadmap.'
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
  const [locationFilter, setLocationFilter] = useState<'All' | 'Remote' | 'Hybrid' | 'Lucknow Campus'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<CareerRole | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [submittedRoleTitle, setSubmittedRoleTitle] = useState<string | null>(null);

  const rolesRef = useRef<HTMLDivElement>(null);
  const placementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveCategory(initialSection);

    if (scrollTarget === 'apply') {
      setSelectedRoleForApply(CAREER_ROLES[0]);
      setSubmittedRoleTitle(null);
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
      const matchesLocation = locationFilter === 'All' || role.location === locationFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        role.title.toLowerCase().includes(q) ||
        role.department.toLowerCase().includes(q) ||
        role.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesLocation && matchesQuery;
    });
  }, [activeCategory, locationFilter, searchQuery]);

  const openApplyForRole = (role: CareerRole) => {
    setSelectedRoleForApply(role);
    setSubmittedRoleTitle(null);
    setIsApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim()) return;
    setSubmittedRoleTitle(selectedRoleForApply?.title || 'General Career Application');
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantPortfolio('');
    setApplicantNote('');
  };

  return (
    <div className="min-h-screen bg-[#F7F4F1] dark:bg-[#0D0D11] text-[#141214] dark:text-neutral-100 pt-24 sm:pt-28 pb-20 transition-colors">
      {/* Editorial Hero Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#14141A]/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D91E2A] dark:text-[#C4FF00] font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Careers &amp; Placement Cell • TheCodeSpark Technologies</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-[1.06] text-slate-950 dark:text-white">
                Build the Future of{' '}
                <span className="text-[#D91E2A] dark:text-[#C4FF00]">Tech Careers</span> With Us.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                Join our engineering, mentorship, and campus growth teams in Lucknow or Remote — or leverage our active Placement Cell for mock technical drives, internships, and direct product company referrals.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('open-roles');
                    rolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C4FF00] hover:bg-[#b5ee00] text-slate-950 border border-black/80 text-xs sm:text-sm font-bold shadow-sm cursor-pointer transition-all"
                >
                  <span>Browse Open Roles ({CAREER_ROLES.length})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedRoleForApply(CAREER_ROLES[0]);
                    setSubmittedRoleTitle(null);
                    setIsApplyModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
                >
                  <span>Quick Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Editorial Stat Matrix */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#F7F4F1] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-black font-display text-slate-950 dark:text-white tabular-nums">
                  {CAREER_ROLES.length}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-neutral-300 mt-1">
                  Active Open Roles
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 mt-1">
                  Tech, Mentors &amp; Interns
                </div>
              </div>

              <div className="rounded-2xl bg-[#FDF2F0] dark:bg-[#241317] border border-[#D91E2A]/20 p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-black font-display text-[#D91E2A] dark:text-[#FF7A59] tabular-nums">
                  180+
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-neutral-200 mt-1">
                  Hiring Partners
                </div>
                <div className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 mt-1">
                  Product &amp; SaaS Startups
                </div>
              </div>

              <div className="rounded-2xl bg-[#F7F4F1] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-black font-display text-slate-950 dark:text-[#C4FF00] tabular-nums">
                  48 hrs
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-neutral-300 mt-1">
                  Screening Turnaround
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 mt-1">
                  Skill-first evaluation
                </div>
              </div>

              <div className="rounded-2xl bg-[#F7F4F1] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-black font-display text-slate-950 dark:text-white tabular-nums">
                  Remote
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-neutral-300 mt-1">
                  + Lucknow Campus
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 mt-1">
                  Flexible work tracks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles & Internships Board */}
      <section ref={rolesRef} className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D91E2A] dark:text-[#C4FF00] font-semibold">
              Careers Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-950 dark:text-white mt-1">
              Open Roles, Mentorship &amp; Internships
            </h2>
          </div>

          {/* Search & Location Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search role or skill..."
                aria-label="Search roles or skills"
                className="pl-8 pr-3 py-2 rounded-full bg-white dark:bg-[#16161d] border border-black/10 dark:border-white/15 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00] w-48 sm:w-56"
              />
            </div>

            {(['All', 'Remote', 'Hybrid', 'Lucknow Campus'] as const).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocationFilter(loc)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  locationFilter === loc
                    ? 'bg-slate-950 dark:bg-[#C4FF00] text-white dark:text-slate-950 border-transparent'
                    : 'bg-white dark:bg-[#16161d] text-slate-700 dark:text-neutral-300 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/25'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-black/10 dark:border-white/10">
          {(
            [
              { id: 'all', label: 'All Opportunities' },
              { id: 'open-roles', label: 'Full-Time Open Roles' },
              { id: 'mentorship', label: 'Mentors & Instructors' },
              { id: 'internships', label: 'Paid Internships' },
              { id: 'placement-cell', label: 'Student Placement Cell' }
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveCategory(tab.id);
                if (tab.id === 'placement-cell' && placementRef.current) {
                  placementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#D91E2A] text-white shadow-sm'
                  : 'bg-white/80 dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 border border-black/10 dark:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="group rounded-2xl bg-white dark:bg-[#14141A] border border-black/10 dark:border-white/10 hover:border-[#D91E2A]/45 dark:hover:border-[#C4FF00]/45 p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-[#D91E2A] dark:text-[#C4FF00] uppercase tracking-wider">
                    {role.department}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-neutral-300 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    {role.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 dark:text-white group-hover:text-[#D91E2A] dark:group-hover:text-[#C4FF00] transition-colors">
                  {role.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {role.summary}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-neutral-300 font-mono pt-1">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D91E2A] dark:text-[#FF7A59]" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {role.experience}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                    {role.compensation}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#F7F4F1] dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-black/5 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-neutral-400 font-mono">
                  Immediate &amp; Rolling Hiring
                </span>
                <button
                  type="button"
                  onClick={() => openApplyForRole(role)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 dark:bg-[#C4FF00] hover:bg-[#D91E2A] dark:hover:bg-[#b5ee00] text-white dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRoles.length === 0 && (
          <div className="mt-6 rounded-2xl bg-white dark:bg-[#14141A] border border-black/10 dark:border-white/10 p-8 text-center space-y-3">
            <Compass className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-800 dark:text-neutral-200">
              No matching roles found for your current filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setLocationFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[#C4FF00] text-slate-950 text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Student Placement & Hiring Readiness Cell */}
      <section ref={placementRef} className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 scroll-mt-24">
        <div className="rounded-3xl bg-[#141214] dark:bg-[#121218] text-white border border-black/20 dark:border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C4FF00] font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Career Accelerator &amp; Placement Cell</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight">
                Preparing Students for Top Software Engineering Offers
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Looking for placement support or want to hire trained full-stack &amp; AI developers from our cohorts? Connect directly with TheCodeSpark Placement Cell.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onRequestCallback}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C4FF00] hover:bg-[#b5ee00] text-slate-950 text-xs font-bold cursor-pointer transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Talk to Placement Cell</span>
              </button>
              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold cursor-pointer transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Explore Career Cohorts</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
            {PLACEMENT_MILESTONES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C4FF00]">
                      STAGE {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#D91E2A]/20 text-[#FF7A59] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
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
      </section>

      {/* Quick Role Application Modal */}
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
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#14141A] border border-black/15 dark:border-white/15 p-6 sm:p-7 shadow-2xl z-10"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D91E2A] dark:text-[#C4FF00] font-bold">
                    Career Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-black font-display text-slate-950 dark:text-white mt-0.5">
                    {selectedRoleForApply?.title || 'Apply at TheCodeSpark Technologies'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  aria-label="Close application modal"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 flex items-center justify-center text-slate-700 dark:text-white cursor-pointer"
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
                    Application Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 max-w-sm mx-auto">
                    Your application for <strong className="text-slate-900 dark:text-white">{submittedRoleTitle}</strong> has been logged. Our hiring &amp; academic team will reach out within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="mt-2 px-6 py-2.5 rounded-full bg-[#C4FF00] text-slate-950 text-xs font-bold cursor-pointer"
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
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                    >
                      {CAREER_ROLES.map((r) => (
                        <option key={r.id} value={r.id} className="bg-white dark:bg-[#14141A]">
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
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98XXXXXXXX"
                        className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                      />
                    </div>
                  </div>

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
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      GitHub / Portfolio / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                      placeholder="https://github.com/username"
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-1">
                      Why TheCodeSpark? / Key Projects
                    </label>
                    <textarea
                      rows={2}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Share 1–2 live projects or mentorship experience..."
                      className="w-full rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D91E2A] dark:focus:border-[#C4FF00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#C4FF00] hover:bg-[#b5ee00] text-slate-950 border border-black/80 text-xs font-bold cursor-pointer flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Submit Career Application</span>
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
