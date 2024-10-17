import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

interface CoursesNavigationProps {
  courseId: string; 
}

const CoursesNavigation: React.FC<CoursesNavigationProps> = ({ courseId }) => {
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  const getLinkClass = (path: string) => {
    return `list-group-item ${location.pathname.includes(path) ? 'active' : 'text-danger'} border border-0`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${courseId}/${link}`}  
          className={`${getLinkClass(`/Kanbas/Courses/${courseId}/${link}`)} link-width`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CoursesNavigation;
