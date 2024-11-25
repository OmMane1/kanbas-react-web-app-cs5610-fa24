import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import "./Assignments.css";
import { PiNotePencilLight } from "react-icons/pi";
import AssignmentEditor from "./Editor";
import * as client from "./client";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAssignments() {
      setLoading(true);
      try {
        const allAssignments = await client.getAllAssignments();
        const courseAssignments = allAssignments.filter(
          (assignment: Assignment) => assignment.course === cid
        );
        setAssignments(courseAssignments);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAssignments();
  }, [cid]);

  const handleAddAssignment = () => {
    setIsEditing(true);
  };

  const handleSaveAssignment = async (newAssignment: Assignment) => {
    if (!newAssignment.title || !newAssignment.course) {
      alert("Title and course are required.");
      return;
    }
  
    setLoading(true); // Prevent multiple submissions
    try {
      const response = await client.createAssignment(newAssignment);
      const createdAssignment = response.data;
  
      if (!createdAssignment._id) {
        throw new Error("Failed to create assignment. Missing ID.");
      }
  
      setAssignments([...assignments, createdAssignment]); // Add new assignment to state
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save the assignment. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };
  
  

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      await client.deleteAssignment(assignmentId);
      setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    } catch (error) {
      console.error("Error deleting assignment:", error);
      alert("Failed to delete the assignment. Please try again later.");
    }
  };

  if (isEditing) {
    return (
      <AssignmentEditor
        onSave={handleSaveAssignment}
        onCancel={handleCancelEdit}
      />
    );
  }

  if (loading) {
    return <p>Loading assignments...</p>;
  }

  if (!cid) {
    return <p>Course ID is missing. Unable to load assignments.</p>;
  }

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 me-3">
          <div className="input-group">
            <span className="input-group-text">
              <CiSearch className="text-muted" />
            </span>
            <input
              id="wd-search-assignment"
              placeholder="Search..."
              className="form-control search-input"
              style={{
                border: "1px solid #ccc",
                boxShadow: "none",
                outline: "none",
              }}
            />
          </div>
        </div>

        {isFaculty && (
          <div className="d-flex">
            <button id="wd-add-assignment-group-btn" className="btn btn-secondary me-2">
              <FiPlus className="me-1" /> Group
            </button>
            <button
              id="wd-add-assignment-btn"
              className="btn btn-danger"
              onClick={handleAddAssignment}
              type="button"
            >
              <FiPlus className="me-1" /> Assignment
            </button>
          </div>
        )}
      </div>

      <ul className="wd-assignments-list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-4 fs-5 border border-secondary">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <div className="ms-2 bg-secondary text-black border border-dark rounded p-2">
                40% of Total
              </div>
              <ModuleControlButtons />
            </div>
          </div>

          <ul className="wd-assignment-list-group rounded-0">
            {assignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item p-3 ps-1 d-flex"
              >
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilLight className="me-2 fs-3" />
                <div className="wd-assignment-details flex-grow-1">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {assignment.title}
                  </a>
                  <LessonControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={handleDeleteAssignment}
                    editAssignment={(id: string) => console.log(`Edit assignment with ID: ${id}`)}
                  />
                  <p className="small-font">
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b> Not Available until </b> {assignment.availableUntil} |
                    <b> Due </b> {assignment.dueDate} | {assignment.points} pts
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
