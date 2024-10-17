import CoursesNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from "./People/Table";
import { courses } from "../Database"; 

export default function Courses() {
  const { cid } = useParams<{ cid: string }>(); 
  const course = courses.find((course) => course._id === cid); 
  const { pathname } = useLocation(); 
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          {course && <CoursesNavigation courseId={cid!} />} 
        </div>
        
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
