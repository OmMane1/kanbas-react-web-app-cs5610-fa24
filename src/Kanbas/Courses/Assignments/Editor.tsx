import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './Assignments.css'; // Import your CSS file

export default function AssignmentEditor() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSave = () => {
        // Logic to save the assignment (not implemented for now)
        navigate('/assignments'); // Redirect back to assignments list after saving
    };

    return (
        <div className="container p-3">

            <div className="mb-3">
                <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                <input type="text" className="form-control" id="assignmentName" placeholder="Enter assignment name" />
            </div>

            <div className="mb-3">
                <label htmlFor="assignmentDescription" className="form-label">Description</label>
                <textarea className="form-control" id="assignmentDescription" rows={4} placeholder="Enter assignment description"></textarea>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="points" className="form-label">Points</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="points" placeholder="Enter points" />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select" id="assignmentGroup">
                            <option value="">Select group</option>
                            <option value="Group 1">Group 1</option>
                            <option value="Group 2">Group 2</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="displayGradeAs" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select" id="displayGradeAs">
                            <option value="Points">Points</option>
                            <option value="Percentage">Percentage</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="submissionType" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select" id="submissionType">
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grouping fields into a single box named "Assign" */}
            <div className="row mb-3">
                <div className="col-3">
                    <h5 className="mb-1">Assign</h5> {/* Reduced margin-bottom */}
                </div>
                <div className="col">
                    <div className="border p-2"> {/* Reduced padding */}
                        <div className="mb-3">
                            <label htmlFor="assignTo" className="form-label">Assign To</label>
                            <input type="text" className="form-control" id="assignTo" placeholder="Enter who to assign" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                            <input type="date" className="form-control" id="dueDate" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="availableFrom" className="form-label">Available From</label>
                            <input type="date" className="form-control" id="availableFrom" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="availableUntil" className="form-label">Available Until</label>
                            <input type="date" className="form-control" id="availableUntil" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-success" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}