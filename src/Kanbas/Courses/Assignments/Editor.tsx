import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import * as db from '../../Database'; 
import './Assignments.css'; 

export default function AssignmentEditor() {
    const { cid, aid } = useParams(); 
    const navigate = useNavigate(); 

    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`); 
    };
    const handleSave = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container p-3">
            {assignment ? ( 
                <>
                    <div className="mb-3">
                        <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="assignmentName"
                            value={assignment.title} 
                            readOnly 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="assignmentDescription" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="assignmentDescription"
                            rows={4}
                            value={assignment.description} 
                            readOnly 
                        />
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="points" className="form-label">Points</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="points"
                                    value={assignment.points}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="dueDate" className="form-label">Due Date</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dueDate"
                                    value={assignment.dueDate} 
                                    readOnly 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="availableFrom" className="form-label">Available From</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="availableUntil"
                                    value={assignment.availableUntil} 
                                    readOnly 
                                />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-light me-2" style={{ color: 'black' }} onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="btn btn-danger" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </>
            ) : (
                <div>Assignment not found</div> 
            )}
        </div>
    );
}
