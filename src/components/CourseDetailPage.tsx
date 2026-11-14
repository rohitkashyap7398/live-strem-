import React from 'react';
import { Course } from '../data/coursesData';
import { IgniteOneDetailView } from './IgniteOneDetailView';

interface CourseDetailPageProps {
  course: Course;
  onSelectAnotherCourse: (course: Course) => void;
  onRequestCallback: () => void;
  onBuyNow: (course: Course) => void;
  onViewSyllabus: (course: Course) => void;
  onNavigateCourses: () => void;
  onNavigateHome: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onSelectAnotherCourse,
  onRequestCallback,
  onBuyNow,
  onViewSyllabus,
  onNavigateCourses,
  onNavigateHome,
}) => {
  return (
    <IgniteOneDetailView
      course={course}
      onSelectAnotherCourse={onSelectAnotherCourse}
      onRequestCallback={onRequestCallback}
      onBuyNow={onBuyNow}
      onViewSyllabus={onViewSyllabus}
      onNavigateCourses={onNavigateCourses}
      onNavigateHome={onNavigateHome}
    />
  );
};
