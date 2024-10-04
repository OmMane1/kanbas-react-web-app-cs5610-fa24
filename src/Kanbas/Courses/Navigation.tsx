import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
export default function CoursesNavigation() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `list-group-item ${location.pathname.includes(path) ? 'active' : 'text-danger'} border border-0`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link" className={`${getLinkClass("/Kanbas/Courses/1234/Home")} link-width`}>
        Home
      </Link>
      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link" className={`${getLinkClass("/Kanbas/Courses/1234/Modules")} link-width`}>
        Modules
      </Link>
      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link" className={`${getLinkClass("/Kanbas/Courses/1234/Piazza")} link-width`}>
        Piazza
      </Link>
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link" className={`${getLinkClass("/Kanbas/Courses/1234/Zoom")} link-width`}>
        Zoom
      </Link>
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link" className={`${getLinkClass("/Kanbas/Courses/1234/Assignments")} link-width`}>
        Assignments
      </Link>
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link" className={`${getLinkClass("/Kanbas/Courses/1234/Quizzes")} link-width`}>
        Quizzes
      </Link>
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link" className={`${getLinkClass("/Kanbas/Courses/1234/People")} link-width`}>
        People
      </Link>
    </div>
  );
}
 