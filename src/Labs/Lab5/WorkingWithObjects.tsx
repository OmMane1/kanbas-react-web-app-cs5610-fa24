import React, { useState } from "react";

const WorkingWithObjects: React.FC = () => {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  const [, setModule] = useState({
    id: "123",
    name: "Introduction to React",
    description: "Learn the basics of React, including components, state, and props.",
    course: "Web Development"
  });

  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");
  const [newAssignmentScore, setNewAssignmentScore] = useState<number | string>(85);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);

  const fetchModule = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module`);
    const data = await response.json();
    setModule(data);
  };

  const fetchModuleName = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module/name`);
    const data = await response.json();
    alert(`Module Name: ${data.name}`);
  };

  const updateModuleName = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module/name`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newModuleName })
    });
    const data = await response.json();
    setModule(data);
  };

  const updateModuleDescription = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module/description`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: newModuleDescription })
    });
    const data = await response.json();
    setModule(data);
  };

  const updateAssignmentScore = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/assignment/score`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score: newAssignmentScore })
    });
    const data = await response.json();
    alert(`Updated Assignment Score: ${data.score}`);
  };

  const updateAssignmentCompleted = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/assignment/completed`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: assignmentCompleted })
    });
    const data = await response.json();
    alert(`Assignment Completed: ${data.completed}`);
  };

  return (
    
    <div>
      <h3>Working with Objects</h3>
      <button onClick={fetchModule} className="btn btn-primary">Get Module</button>
      <button onClick={fetchModuleName} className="btn btn-secondary">Get Module Name</button>
      <hr />

      <input
        type="text"
        value={newModuleName}
        placeholder="New Module Name"
        onChange={(e) => setNewModuleName(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={updateModuleName} className="btn btn-success">Update Module Name</button>

      <input
        type="text"
        value={newModuleDescription}
        placeholder="New Module Description"
        onChange={(e) => setNewModuleDescription(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={updateModuleDescription} className="btn btn-warning">Update Module Description</button>
      <hr />

      <input
        type="number"
        value={newAssignmentScore}
        placeholder="New Score"
        onChange={(e) => setNewAssignmentScore(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={updateAssignmentScore} className="btn btn-info">Update Assignment Score</button>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completedCheckbox"
          checked={assignmentCompleted}
          onChange={(e) => setAssignmentCompleted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
      </div>
      <button onClick={updateAssignmentCompleted} className="btn btn-danger mt-2">Update Assignment Completed</button>
    </div>
  );
};

export default WorkingWithObjects;
