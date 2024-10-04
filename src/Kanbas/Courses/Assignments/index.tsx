import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi'; 
import './Assignments.css'; 
import { FaSearch, FaPlus, FaCheckCircle, FaEllipsisV } from "react-icons/fa"; // Importing icons

interface Assignment {
    id: string;
    title: string;
    module: string;
    availability: string;
    dueDate: string;
    points: number;
}

const assignmentsData: Assignment[] = [
    { id: "A1", title: "A1", module: "Multiple Modules", availability: "Not available until May 6 at 12:00am", dueDate: "May 13 at 11:59pm", points: 100 },
    { id: "A2", title: "A2", module: "Multiple Modules", availability: "Not available until May 13 at 12:00am", dueDate: "May 20 at 11:59pm", points: 100 },
    { id: "A3", title: "A3", module: "Multiple Modules", availability: "Not available until May 20 at 12:00am", dueDate: "May 27 at 11:59pm", points: 100 }
];

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-3">
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <CiSearch />
                </span>
                <input 
                    id="wd-search-assignment" 
                    placeholder="Search for Assignments" 
                    className="form-control search-input" 
                />
            </div>

            <div className="d-flex justify-content-end mb-3">
                <button id="wd-add-assignment-group-btn" className="btn btn-secondary">
                    <FiPlus className="me-1" /> Group
                </button>
                <button id="wd-add-assignment-btn" className="btn btn-danger me-2">
                    <FiPlus className="me-1" /> Assignment
                </button>
            </div>

            <h3 id="wd-assignments-title" className="mb-3">
                ASSIGNMENTS 40% of Total <button className="btn btn-link">+</button>
            </h3>

            <select className="form-select mb-3">
                <option>Edit</option>
                <option>Speed Grader</option>
                <option>Duplicate</option>
                <option>Delete</option>
                <option>Move To...</option>
                <option>Send To...</option>
                <option>Copy To...</option>
                <option>Share to Commons</option>
            </select>

            <div className="assignments-container">
                {/* Assignments list */}
                <div className="assignments-list">
                    {assignmentsData.map((assignment) => (
                        <div key={assignment.id} className="assignment-item">
                            <div className="assignment-left-border"></div>
                            <div className="assignment-details">
                                <div className="assignment-title">{assignment.title}</div>
                                <div className="assignment-info">
                                    {assignment.module} | {assignment.availability} | Due {assignment.dueDate} | {assignment.points} pts
                                </div>
                            </div>
                            <FaCheckCircle className="check-icon" />
                            <FaEllipsisV className="ellipsis-icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}