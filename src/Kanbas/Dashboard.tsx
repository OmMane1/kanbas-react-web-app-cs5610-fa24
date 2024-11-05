import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "./store/enrollmentSlice"; 
import * as db from "./Database";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: (newCourse: { name: string; description: string; _id: string }) => void;
  deleteCourse: (course: any) => void;
  updateCourse: (course: any) => void;
}) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { enrollments } = db;

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  const toggleEnrollmentView = () => {
    setShowAllCourses((prev) => !prev);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const handleEnrollmentToggle = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollFromCourse(courseId));
    } else {
      dispatch(enrollInCourse(courseId));
    }
  };

  const handleAddCourse = () => {
    const newCourse = {
      name: courseName,
      description: courseDescription,
      _id: Math.random().toString(36).substr(2, 9),  
    };
    addNewCourse(newCourse);
    setCourseName("");
    setCourseDescription("");
  };

  const handleDeleteCourse = (courseId: string) => {
    deleteCourse(courseId);
  };

  const handleUpdateCourse = () => {
    updateCourse(course);
    setCourse({});
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="form-control mb-2"
            placeholder="Course Name"
          />
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="form-control"
            placeholder="Course Description"
          />
          
          <hr />
        </>
      )}

      {isStudent && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleEnrollmentView}
        >
          {showAllCourses ? "Show My Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({showAllCourses ? courses.length : enrollments.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              return showAllCourses || isEnrolled(course._id);
            })
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "270px", margin: "35px 0" }}
                key={course._id}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={isEnrolled(course._id) ? `/Kanbas/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={course.image}
                      width="100%"
                      height={160}
                      alt={`${course.name} Course`}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                      {isStudent && (
                        <button
                          className={`btn float-end ${isEnrolled(course._id) ? "btn-danger" : "btn-success"}`}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollmentToggle(course._id);
                          }}
                        >
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
