import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar, NavPageId } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { CompaniesMarquee } from './components/CompaniesMarquee';
import { ImpactGallery } from './components/ImpactGallery';
import { FounderMentorship } from './components/FounderMentorship';
import { CourseCardsSection } from './components/CourseCardsSection';
import { TechnologiesMarquee } from './components/TechnologiesMarquee';
import { CoursesCatalogView } from './components/CoursesCatalogView';
import { BootcampView } from './components/BootcampView';
import { ClassroomView } from './components/ClassroomView';
import { OfflineProgramsView } from './components/OfflineProgramsView';
import { FeaturedProjectsView } from './components/FeaturedProjectsView';
import { CareerView, CareerSectionCategory } from './components/CareerView';
import { StudentReviews } from './components/StudentReviews';
import { YoutubeTutorials } from './components/YoutubeTutorials';
import { CommunityPlacement } from './components/CommunityPlacement';
import { ComparisonSection } from './components/ComparisonSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { CourseDetailPage } from './components/CourseDetailPage';
import { RequestCallbackModal } from './components/RequestCallbackModal';
import { EnrollModal } from './components/EnrollModal';
import { SyllabusModal } from './components/SyllabusModal';
import { CustomCursor } from './components/CustomCursor';
import { StartupLoader } from './components/StartupLoader';
import { useGlobalButtonEffects } from './hooks/useGlobalButtonEffects';
import { useViewportVideoManager } from './hooks/useViewportVideoManager';
import { COURSES, Course } from './data/coursesData';
import { ProjectCategory } from './data/featuredProjectsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPageId>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [projectNavIntent, setProjectNavIntent] = useState<{
    category: 'All' | ProjectCategory;
    scrollTarget: 'top' | 'live-sites' | 'directory';
    nonce: number;
  }>({ category: 'All', scrollTarget: 'top', nonce: 0 });
  const [careerNavIntent, setCareerNavIntent] = useState<{
    section: CareerSectionCategory;
    scrollTarget: 'top' | 'roles' | 'placement' | 'apply';
    nonce: number;
  }>({ section: 'all', scrollTarget: 'top', nonce: 0 });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('thecodespark-theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch {
      // safe fallback
    }
    return true;
  });

  // Sync `.dark` class on <html> and persist theme selection
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('thecodespark-theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore storage errors in restricted frames
    }
  }, [isDarkMode]);

  // Activate global magnetic and rolling button effects across all buttons
  useGlobalButtonEffects();

  // Pause offscreen/background autoPlay videos to keep scrolling & animations smooth
  useViewportVideoManager(`${currentPage}-${selectedCourse.id}`);

  // Modal states
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [activeCourseForModal, setActiveCourseForModal] = useState<Course>(COURSES[0]);

  // Reset scroll position immediately on view switches without fighting smooth scroll
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      // safe fallback if iframe blocks window.scrollTo
    }
  }, [currentPage, selectedCourse]);

  const handleNavigate = (page: NavPageId, courseId?: string) => {
    if (courseId) {
      const found = COURSES.find((c) => c.id === courseId);
      if (found) {
        setSelectedCourse(found);
      }
    }
    setCurrentPage(page);
  };

  const handleNavigateProjects = (
    category: 'All' | ProjectCategory = 'All',
    scrollTarget: 'top' | 'live-sites' | 'directory' = 'top'
  ) => {
    setProjectNavIntent((prev) => ({
      category,
      scrollTarget,
      nonce: prev.nonce + 1
    }));
    setCurrentPage('projects');
  };

  const handleNavigateCareer = (
    section: CareerSectionCategory = 'all',
    scrollTarget: 'top' | 'roles' | 'placement' | 'apply' = 'top'
  ) => {
    setCareerNavIntent((prev) => ({
      section,
      scrollTarget,
      nonce: prev.nonce + 1
    }));
    setCurrentPage('career');
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
  };

  const handleOpenEnroll = (course: Course) => {
    setActiveCourseForModal(course);
    setIsEnrollOpen(true);
  };

  const handleOpenSyllabus = (course: Course) => {
    setActiveCourseForModal(course);
    setIsSyllabusOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <StartupLoader />
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#2A2A2A] text-[#0F172A] dark:text-[#f3f4f6] selection:bg-[#E10600] selection:text-white transition-colors duration-300">
      {/* Universal Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onNavigateProjects={handleNavigateProjects}
        onNavigateCareer={handleNavigateCareer}
        onRequestCall={() => setIsCallbackOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />

      {/* Main View Switcher */}
      {currentPage === 'home' && (
        <main>
          {/* Bento Grid Hero */}
          <HeroBento
            onStartJourney={() => setCurrentPage('courses')}
            onGetInTouch={() => setIsCallbackOpen(true)}
            onExploreCourses={() => setCurrentPage('courses')}
          />

          {/* Hiring Partners Marquee */}
          <CompaniesMarquee />

          {/* Impact Gallery */}
          <ImpactGallery />

          {/* Founder & CEO Mentorship & Vision Section (Mr. Rohit Kashyap) */}
          <FounderMentorship
            onRequestCallback={() => setIsCallbackOpen(true)}
            onExploreCourses={() => setCurrentPage('courses')}
          />

          {/* Technologies & Frameworks Showcase (Master the most in-demand technologies...) */}
          <TechnologiesMarquee />

          {/* Flagship IGNITE Course Cards */}
          <CourseCardsSection
            onSelectCourse={handleSelectCourse}
            onExploreAll={() => setCurrentPage('courses')}
            onEnrollCourse={handleOpenEnroll}
          />

          {/* Student Reviews & Testimonials */}
          <StudentReviews />

          {/* YouTube Video Tutorials */}
          <YoutubeTutorials />

          {/* Community & Placement Spotlight */}
          <CommunityPlacement
            onExploreCourses={() => setCurrentPage('courses')}
          />

          {/* Why TheCodeSpark vs Others Comparison */}
          <ComparisonSection />

          {/* FAQs Accordion */}
          <FaqSection />

          {/* Bottom CTA Banner */}
          <CtaBanner
            onExploreCourses={() => setCurrentPage('courses')}
          />
        </main>
      )}

      {currentPage === 'courses' && (
        <main>
          <CoursesCatalogView
            onSelectCourse={handleSelectCourse}
            onPreBook={handleOpenEnroll}
            onViewSyllabus={handleOpenSyllabus}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        </main>
      )}

      {currentPage === 'bootcamp' && (
        <main>
          <BootcampView
            onApplyNow={() => handleOpenEnroll(COURSES[0])}
            onRequestCallback={() => setIsCallbackOpen(true)}
            onViewSyllabus={() => handleOpenSyllabus(COURSES[0])}
          />
        </main>
      )}

      {currentPage === 'classroom' && (
        <main>
          <ClassroomView
            onNavigateHome={() => setCurrentPage('home')}
            onRequestSupport={() => setIsCallbackOpen(true)}
          />
        </main>
      )}

      {currentPage === 'offline' && (
        <main>
          <OfflineProgramsView
            onApplyOffline={() => handleOpenEnroll(COURSES[0])}
            onRequestCallback={() => setIsCallbackOpen(true)}
          />
        </main>
      )}

      {currentPage === 'projects' && (
        <main>
          <FeaturedProjectsView
            initialCategory={projectNavIntent.category}
            scrollTarget={projectNavIntent.scrollTarget}
            navNonce={projectNavIntent.nonce}
            onRequestCallback={() => setIsCallbackOpen(true)}
            onExploreCourses={() => setCurrentPage('courses')}
          />
        </main>
      )}

      {currentPage === 'career' && (
        <main>
          <CareerView
            initialSection={careerNavIntent.section}
            scrollTarget={careerNavIntent.scrollTarget}
            navNonce={careerNavIntent.nonce}
            onRequestCallback={() => setIsCallbackOpen(true)}
            onExploreCourses={() => setCurrentPage('courses')}
          />
        </main>
      )}

      {currentPage === 'course-detail' && (
        <CourseDetailPage
          course={selectedCourse}
          onSelectAnotherCourse={(c) => setSelectedCourse(c)}
          onRequestCallback={() => setIsCallbackOpen(true)}
          onBuyNow={handleOpenEnroll}
          onViewSyllabus={handleOpenSyllabus}
          onNavigateCourses={() => setCurrentPage('courses')}
          onNavigateHome={() => setCurrentPage('home')}
        />
      )}

      {/* Universal Footer (hidden on course-detail pages which use custom dark-green/light footers) */}
      {currentPage !== 'course-detail' && (
        <Footer
          onNavigate={(p) => setCurrentPage(p as any)}
          onRequestCall={() => setIsCallbackOpen(true)}
        />
      )}

      {/* Interactive Modals */}
      <RequestCallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        defaultCourseId={selectedCourse.id}
      />

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        course={activeCourseForModal}
      />

      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        course={activeCourseForModal}
      />

      {/* Luxury Fluid Mouse Follower & Button Cursor Animation */}
      <CustomCursor />
      </div>
    </MotionConfig>
  );
}
