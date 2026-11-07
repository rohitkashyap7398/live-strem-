import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
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
import { COURSES, Course } from './data/coursesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail'>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);

  // Modal states
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [activeCourseForModal, setActiveCourseForModal] = useState<Course>(COURSES[0]);

  // Scroll to top on page switch safely
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // safe fallback if iframe blocks window.scrollTo
    }
  }, [currentPage, selectedCourse]);

  const handleNavigate = (page: 'home' | 'courses' | 'bootcamp' | 'classroom' | 'offline' | 'course-detail', courseId?: string) => {
    if (courseId) {
      const found = COURSES.find((c) => c.id === courseId);
      if (found) {
        setSelectedCourse(found);
      }
    }
    setCurrentPage(page);
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
    <div className="min-h-screen bg-[#2A2A2A] text-[#f3f4f6] selection:bg-[#E10600] selection:text-white">
      {/* Universal Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestCall={() => setIsCallbackOpen(true)}
      />

      {/* Main View Switcher */}
      {currentPage === 'home' && (
        <main>
          {/* Bento Grid Hero */}
          <HeroBento
            onStartJourney={() => setCurrentPage('bootcamp')}
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

      {/* Universal Footer */}
      <Footer
        onNavigate={(p) => setCurrentPage(p as any)}
        onRequestCall={() => setIsCallbackOpen(true)}
      />

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
    </div>
  );
}
