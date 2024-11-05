import CoursesNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from "./People/Table";
import { useDispatch } from 'react-redux';
import { addAssignment } from './Assignments/reducer'; 

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams<{ cid: string }>(); 
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation(); 
  const dispatch = useDispatch();

  const handleSave = (newAssignment: any) => {
    dispatch(addAssignment(newAssignment));
  };

  const handleCancel = () => {
  };

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
            <Route 
              path="Assignments/:aid" 
              element={<AssignmentEditor onSave={handleSave} onCancel={handleCancel} />} 
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
