import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import '../styles.css'; // Ensure this file contains your custom styles.

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname.includes(linkPath);

        return (
          <Link
            key={link}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item link-width ${isActive ? 'active' : 'text-danger'} border border-0`}
            to={linkPath}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
