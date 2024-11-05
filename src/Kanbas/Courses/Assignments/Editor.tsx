import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as db from '../../Database';
import './Assignments.css';
import { addAssignment } from './reducer';

interface EditorProps {
    onSave: (newAssignment: {
      _id: string;
      title: string;
      course: string;
      availableFrom: string;
      availableUntil: string;
      dueDate: string;
      points: number;
      description: string;
    }) => void;
    onCancel: () => void;
}
  
export default function AssignmentEditor({ onSave, onCancel }: EditorProps) {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const assignment = db.assignments.find((assignment) => assignment._id === aid);

    const isFaculty = currentUser?.role === "FACULTY";

    const [assignmentName, setAssignmentName] = useState(assignment ? assignment.title : '');
    const [assignmentDescription, setAssignmentDescription] = useState(assignment ? assignment.description : '');
    const [points, setPoints] = useState(assignment ? String(assignment.points) : '0');
    const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : '');
    const [availableFrom, setAvailableFrom] = useState(assignment ? assignment.availableFrom : '');
    const [availableUntil, setAvailableUntil] = useState(assignment ? assignment.availableUntil : '');

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleSave = () => {
        const newAssignment = {
            _id: aid || `${Date.now()}`, 
            title: assignmentName,
            description: assignmentDescription,
            points: parseInt(points, 10),  // Parse as integer here
            dueDate,
            availableFrom,
            availableUntil,
            course: cid || '', 
        };

        onSave(newAssignment);  // Trigger the onSave function passed in from props
        dispatch(addAssignment(newAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container p-3">
            {/* Assignment form fields */}
            <div className="mb-3">
                <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="assignmentName"
                    value={assignmentName}
                    onChange={(e) => setAssignmentName(e.target.value)}
                    readOnly={!isFaculty}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="assignmentDescription" className="form-label">Description</label>
                <textarea
                    className="form-control"
                    id="assignmentDescription"
                    rows={4}
                    value={assignmentDescription}
                    onChange={(e) => setAssignmentDescription(e.target.value)}
                    readOnly={!isFaculty}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input
                    type="number"
                    className="form-control"
                    id="points"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    readOnly={!isFaculty}
                />
            </div>

            <label className="form-label mb-3">Assign</label>
            <div className="assign-box border p-3 rounded">
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        readOnly={!isFaculty}
                    />
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="availableFrom" className="form-label">Available From</label>
                            <input
                                type="date"
                                className="form-control"
                                id="availableFrom"
                                value={availableFrom}
                                onChange={(e) => setAvailableFrom(e.target.value)}
                                readOnly={!isFaculty}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="availableUntil" className="form-label">Until</label>
                            <input
                                type="date"
                                className="form-control"
                                id="availableUntil"
                                value={availableUntil}
                                onChange={(e) => setAvailableUntil(e.target.value)}
                                readOnly={!isFaculty}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-light me-2" style={{ color: 'black' }} onClick={handleCancel}>
                    Cancel
                </button>
                <button className="btn btn-danger" onClick={handleSave} disabled={!isFaculty}>
                    Save
                </button>
            </div>
        </div>
    );
}
