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
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // State for toggling course view
  const [showAllCourses, setShowAllCourses] = useState(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { enrollments } = db;

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Toggle to show all courses or only enrolled courses
  const toggleEnrollmentView = () => {
    setShowAllCourses((prev) => !prev);
  };

  // Check if a student is enrolled in a course
  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

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
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {/* Enrollments Button for Students */}
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
              // Filter courses based on view toggle
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
                    to={
                      isEnrolled(course._id)
                        ? `/Kanbas/Courses/${course._id}/Home`
                        : "#"
                    }
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

                      {/* Enroll/Unenroll Button for Students */}
                      {isStudent && (
                        <button
                          className={`btn float-end ${
                            isEnrolled(course._id)
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            if (isEnrolled(course._id)) {
                              dispatch(unenrollFromCourse(course._id));
                            } else {
                              dispatch(enrollInCourse(course._id));
                            }
                          }}
                        >
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      {/* Edit/Delete for Faculty */}
                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
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
