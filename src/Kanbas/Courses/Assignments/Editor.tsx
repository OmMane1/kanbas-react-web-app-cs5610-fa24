import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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

interface EditorProps {
  onSave: (updatedAssignment: Assignment) => void;
  onCancel: () => void;
}

export default function AssignmentEditor({ onSave, onCancel }: EditorProps) {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid || "unknown",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAssignment() {
      if (aid) {
        try {
          console.log("Fetching assignment with ID:", aid);
          const fetchedAssignment = await client.getAssignmentById(aid);
          console.log("Fetched assignment:", fetchedAssignment);
          setAssignment(fetchedAssignment);
        } catch (error) {
          console.error("Error fetching assignment:", error);
          alert("Assignment not found.");
          navigate(`/Kanbas/Courses/${cid}/Assignments`);
        }
      }
    }
    fetchAssignment();
  }, [aid, cid, navigate]);

  const handleSave = async () => {
    if (!assignment.title) {
      alert("Title is required.");
      return;
    }
    if (assignment.points < 0) {
      alert("Points must be a non-negative number.");
      return;
    }
    setLoading(true);
    try {
      if (aid) {
        const response = await client.updateAssignment(aid, assignment);
        const updatedAssignment = response;
        onSave(updatedAssignment);
      } else {
        const response = await client.createAssignment({
          ...assignment,
          _id: Date.now().toString(),
        });
        const createdAssignment = response;
        onSave(createdAssignment);
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save the assignment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading assignment...</p>;
  }

  if (!cid) {
    return <p>Course ID is missing. Unable to load or edit assignment.</p>;
  }

  return (
    <div className="container p-3">
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignmentName"
          value={assignment.title}
          readOnly={!isFaculty}
          onChange={(e) =>
            isFaculty && setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="assignmentDescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="assignmentDescription"
          rows={4}
          value={assignment.description}
          readOnly={!isFaculty}
          onChange={(e) =>
            isFaculty &&
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="points" className="form-label">
          Points
        </label>
        <input
          type="number"
          className="form-control"
          id="points"
          value={assignment.points}
          readOnly={!isFaculty}
          onChange={(e) =>
            isFaculty &&
            setAssignment({ ...assignment, points: parseInt(e.target.value) })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date
        </label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={assignment.dueDate}
          readOnly={!isFaculty}
          onChange={(e) =>
            isFaculty &&
            setAssignment({ ...assignment, dueDate: e.target.value })
          }
        />
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="availableFrom" className="form-label">
            Available From
          </label>
          <input
            type="date"
            className="form-control"
            id="availableFrom"
            value={assignment.availableFrom}
            readOnly={!isFaculty}
            onChange={(e) =>
              isFaculty &&
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="availableUntil" className="form-label">
            Available Until
          </label>
          <input
            type="date"
            className="form-control"
            id="availableUntil"
            value={assignment.availableUntil}
            readOnly={!isFaculty}
            onChange={(e) =>
              isFaculty &&
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </div>
      </div>

      {isFaculty && (
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-light me-2" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      )}
    </div>
  );
}
