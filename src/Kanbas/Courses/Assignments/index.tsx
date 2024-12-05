import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsGripVertical } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';
import { FaTrash, FaPen } from 'react-icons/fa';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import { deleteAssignment, setAssignments } from './reducer';
import * as assignmentsClient from './client';
import './Assignments.css';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
}

interface KanbasState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteDialog, setDeleteDialog] = useState({
    isOpen: false,
    assignmentId: '',
    assignmentTitle: '',
  });

  const assignments = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments.filter(
      (assignment) => assignment.course === cid
    )
  );

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFacultyOrAdmin = currentUser?.role === 'FACULTY' || currentUser?.role === 'ADMIN';


  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const assignments = await assignmentsClient.findAssignmentsForCourse(
          cid as string
        );
        dispatch(setAssignments(assignments));
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);

   const handleAddAssignment = () => {
    if (isFacultyOrAdmin) {
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    }
  };

  const handleDeleteClick = (assignmentId: string, title: string) => {
    if (isFacultyOrAdmin) {
      setDeleteDialog({
        isOpen: true,
        assignmentId,
        assignmentTitle: title,
      });
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await assignmentsClient.deleteAssignment(deleteDialog.assignmentId);
      dispatch(deleteAssignment(deleteDialog.assignmentId));
      setDeleteDialog({
        isOpen: false,
        assignmentId: '',
        assignmentTitle: '',
      });
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialog({
      isOpen: false,
      assignmentId: '',
      assignmentTitle: '',
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };
  
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
                border: '1px solid #ccc',
                boxShadow: 'none',
                outline: 'none',
              }}
            />
          </div>
        </div>

        <div className="d-flex">
  <button className="btn btn-secondary me-2">SHOW BY DATE</button>
  <button className="btn btn-secondary me-2">SHOW BY TYPE</button>
  {isFacultyOrAdmin && (
    <button
      id="wd-add-assignment-btn"
      className="btn btn-danger"
      onClick={handleAddAssignment}
    >
      <FiPlus className="me-1" /> Assignment
    </button>
  )}
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
            {assignments.map((assignment) => (
              <li key={assignment._id} className="wd-assignment-list-item p-3 ps-1 d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <div className="wd-assignment-details flex-grow-1">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    {assignment.title}
                  </a>

                  <p className="small-font">
                    <span style={{ color: 'red' }}>Multiple Modules</span> |{' '}
                    <b>Due:</b> {formatDate(assignment.dueDate || '')} | 
                    <b>Points:</b> {assignment.points || 0}
                    </p>
                

                  {assignment.description && (
                    <p className="text-muted mb-0">
                      {assignment.description.substring(0, 100)}
                      {assignment.description.length > 100 ? '...' : ''}
                    </p>
                  )}
                </div>
                {isFacultyOrAdmin && (
                  <FaTrash
                    className="text-danger"
                    onClick={() => handleDeleteClick(assignment._id, assignment.title)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {deleteDialog.isOpen && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleDeleteCancel}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete the assignment "{deleteDialog.assignmentTitle}"?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleDeleteCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
