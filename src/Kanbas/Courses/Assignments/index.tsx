import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi'; 
import './Assignments.css'; 
import { PiNotePencilLight } from "react-icons/pi";
import { useParams } from "react-router";
import * as db from "../../Database"; 

export default function Assignments() {
  const { cid } = useParams(); 
  const assignments = db.assignments; 
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

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

        <div className="d-flex">
          <button id="wd-add-assignment-group-btn" className="btn btn-secondary me-2">
            <FiPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment-btn" className="btn btn-danger">
            <FiPlus className="me-1" /> Assignment
          </button>
        </div>
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
            {courseAssignments.map(assignment => (
              <li key={assignment._id} className="wd-assignment-list-item p-3 ps-1 d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilLight className="me-2 fs-3" />
                <div className="wd-assignment-details flex-grow-1">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                    style={{ color: 'black', textDecoration: 'none' }}>
                    {assignment.title} 
                  </a>      
                  <LessonControlButtons />
                  <p className="small-font">
                    <span style={{ color: 'red' }}>Multiple Modules</span> | 
                    <b> Not Available until </b> {assignment.availableUntil} |
                    <p className="small-font">
                      <b>Due</b> {assignment.dueDate} | {assignment.points}pts
                    </p>
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
